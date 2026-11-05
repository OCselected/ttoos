import * as params from '@params';

const resList = document.getElementById('searchResults');
const sInput = document.getElementById('searchInput');
const searchBox = document.getElementById('searchbox');
const statBox = document.getElementById('searchStat');

// 每页条数。搜「开源」会命中上千条，一次性全渲染既卡又没法读。
const PAGE_SIZE = 20;
let allResults = [];   // 当前查询的全部命中
let currentPage = 0;   // 0-based

let fuse;
let currentElement = null;
let firstResult = null;
let lastResult = null;

const defaultFuseOptions = {
    distance: 100,
    threshold: 0.4,
    ignoreLocation: true,
    keys: ['title', 'permalink', 'summary', 'content']
};

const buildFuseOptions = () => {
    if (!params.fuseOpts) {
        return defaultFuseOptions;
    }

    return {
        isCaseSensitive: params.fuseOpts.iscasesensitive ?? false,
        includeScore: params.fuseOpts.includescore ?? false,
        includeMatches: params.fuseOpts.includematches ?? false,
        minMatchCharLength: params.fuseOpts.minmatchcharlength ?? 1,
        shouldSort: params.fuseOpts.shouldsort ?? true,
        findAllMatches: params.fuseOpts.findallmatches ?? false,
        keys: params.fuseOpts.keys ?? defaultFuseOptions.keys,
        location: params.fuseOpts.location ?? 0,
        threshold: params.fuseOpts.threshold ?? defaultFuseOptions.threshold,
        distance: params.fuseOpts.distance ?? defaultFuseOptions.distance,
        ignoreLocation: params.fuseOpts.ignorelocation ?? defaultFuseOptions.ignoreLocation
    };
};

const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => fn(...args), delay);
    };
};

const reset = () => {
    currentElement = null;
    firstResult = null;
    lastResult = null;
    allResults = [];
    currentPage = 0;
    resList.innerHTML = '';
    if (statBox) statBox.innerHTML = '';
    sInput.value = '';
    sInput.focus();
};

const setActiveResult = (element) => {
    document.querySelectorAll('.focus').forEach((item) => item.classList.remove('focus'));

    if (!element) {
        return;
    }

    element.focus();
    element.parentElement?.classList.add('focus');
    currentElement = element;
};

const renderPager = () => {
    if (!statBox) return;
    const total = allResults.length;
    if (total === 0) {
        statBox.innerHTML = '';
        return;
    }
    const pages = Math.ceil(total / PAGE_SIZE);
    const from = currentPage * PAGE_SIZE + 1;
    const to = Math.min((currentPage + 1) * PAGE_SIZE, total);

    const parts = [];
    parts.push(
        `<span class="search-stat-total">共 <strong>${total}</strong> 条结果` +
        `，显示第 ${from}–${to} 条</span>`
    );

    if (pages > 1) {
        const btn = (label, page, opts = {}) => {
            const { disabled = false, active = false, aria = '' } = opts;
            const cls = ['search-page-btn'];
            if (active) cls.push('active');
            const dis = disabled ? ' disabled' : '';
            const ariaAttr = active ? ' aria-current="page"' : (aria ? ` aria-label="${aria}"` : '');
            return `<button type="button" class="${cls.join(' ')}" data-page="${page}"${dis}${ariaAttr}>${label}</button>`;
        };

        const nav = [];
        nav.push(btn('上一页', currentPage - 1, { disabled: currentPage === 0, aria: '上一页' }));

        // 页码窗口：首尾 + 当前页附近，其余用省略号
        const window_ = 1;
        const shown = new Set([0, pages - 1, currentPage]);
        for (let i = currentPage - window_; i <= currentPage + window_; i++) {
            if (i > 0 && i < pages - 1) shown.add(i);
        }
        const list = [...shown].sort((a, b) => a - b);
        let prev = -1;
        for (const p of list) {
            if (prev !== -1 && p - prev > 1) nav.push('<span class="search-page-gap">…</span>');
            nav.push(btn(String(p + 1), p, { active: p === currentPage }));
            prev = p;
        }

        nav.push(btn('下一页', currentPage + 1, { disabled: currentPage >= pages - 1, aria: '下一页' }));
        parts.push(`<nav class="search-pager" aria-label="搜索结果分页">${nav.join('')}</nav>`);
    }

    statBox.innerHTML = parts.join('');
    statBox.querySelectorAll('.search-page-btn[data-page]').forEach((b) => {
        b.addEventListener('click', () => {
            const p = Number(b.dataset.page);
            if (Number.isNaN(p) || p === currentPage) return;
            currentPage = Math.max(0, Math.min(p, Math.ceil(allResults.length / PAGE_SIZE) - 1));
            renderResults();
            searchBox?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
};

const renderResults = () => {
    if (!Array.isArray(allResults) || allResults.length === 0) {
        resList.innerHTML = '';
        firstResult = lastResult = currentElement = null;
        renderPager();
        return;
    }

    const start = currentPage * PAGE_SIZE;
    const pageItems = allResults.slice(start, start + PAGE_SIZE);

    const fragment = document.createDocumentFragment();

    for (const result of pageItems) {
        const li = document.createElement('li');
        const titleText = document.createTextNode(result.item.title);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.classList.add('feather', 'feather-chevrons-right');

        svg.innerHTML = '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>';

        const link = document.createElement('a');
        link.className = 'entry-link';
        link.href = result.item.permalink;
        link.setAttribute('aria-label', result.item.title);

        li.appendChild(titleText);
        li.appendChild(svg);
        li.appendChild(link);
        fragment.appendChild(li);
    }

    resList.innerHTML = '';
    resList.appendChild(fragment);
    firstResult = resList.firstElementChild;
    lastResult = resList.lastElementChild;
    renderPager();
};

const performSearch = () => {
    if (!fuse) {
        return;
    }

    const query = sInput.value.trim();
    if (!query) {
        allResults = [];
        currentPage = 0;
        renderResults();
        return;
    }

    const searchOptions = params.fuseOpts?.limit ? { limit: params.fuseOpts.limit } : undefined;
    allResults = searchOptions ? fuse.search(query, searchOptions) : fuse.search(query);
    currentPage = 0;   // 换查询词回到第一页
    renderResults();
};

const initSearch = async () => {
    if (!sInput || !resList) {
        return;
    }

    sInput.disabled = false;
    sInput.focus();

    try {
        const response = await fetch('../index.json');
        if (!response.ok) {
            throw new Error(`Search index load failed: ${response.status}`);
        }

        const data = await response.json();
        if (data) {
            fuse = new Fuse(data, buildFuseOptions());
        }
    } catch (error) {
        console.error(error);
    }
};

window.addEventListener('load', initSearch);

sInput?.addEventListener('input', debounce(performSearch, 150));

sInput?.addEventListener('search', () => {
    if (!sInput.value) {
        reset();
    }
});

document.addEventListener('keydown', (event) => {
    const { key } = event;
    const active = document.activeElement;
    const isInSearchBox = searchBox?.contains(active);

    if (key === 'Escape') {
        reset();
        return;
    }

    if (!firstResult || !isInSearchBox) {
        return;
    }

    if (key === 'ArrowDown') {
        event.preventDefault();

        if (active === sInput) {
            setActiveResult(firstResult.querySelector('.entry-link'));
        } else if (active?.parentElement !== lastResult) {
            setActiveResult(active?.parentElement?.nextElementSibling?.querySelector('.entry-link'));
        }
    } else if (key === 'ArrowUp') {
        event.preventDefault();

        if (active?.parentElement === firstResult) {
            setActiveResult(sInput);
        } else if (active !== sInput) {
            setActiveResult(active?.parentElement?.previousElementSibling?.querySelector('.entry-link'));
        }
    } else if (key === 'ArrowRight') {
        if (active?.matches?.('.entry-link')) {
            active.click();
        }
    }
});
