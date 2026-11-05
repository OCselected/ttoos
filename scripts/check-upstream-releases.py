#!/usr/bin/env python3
"""
check-upstream-releases.py — 检测 Hugo / PaperMod 上游是否有新版本或新提交。

跑在 GitHub Actions 里（每天一次），也可以本地手动跑。

设计要点：
- **只看增量**：状态存 state 文件，已看过的 sha / tag 不重复报告
- **先判断是否值得打扰**：不是每个提交都值得叫人。只有 release 新版本、
  或 PaperMod 出现 feat/fix 类提交才报
- **输出 JSON**：交给上层的 shell 决定是否触发 webhook

用法：
    check-upstream-releases.py --state <path> --out <json>
    check-upstream-releases.py --state <path> --out <json> --dry-run
"""
import argparse
import json
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta

CST = timezone(timedelta(hours=8))
NS = {"a": "http://www.w3.org/2005/Atom"}

# 值得通知的提交前缀（perf/chore/docs 之类不叫醒人）
NOTABLE_PREFIXES = ("feat", "fix", "refactor", "revert", "BREAKING")


def fetch(url: str, timeout: int = 30) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "hermes-upstream-watch"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", errors="replace")


def parse_feed(xml_text: str) -> list:
    """解析 GitHub Atom feed，返回 [{id, title, updated, link}]。"""
    out = []
    try:
        root = ET.fromstring(xml_text)
    except ET.ParseError as e:
        raise SystemExit(f"Atom 解析失败: {e}")
    for e in root.findall(".//a:entry", NS):
        title_el = e.find("a:title", NS)
        updated_el = e.find("a:updated", NS)
        id_el = e.find("a:id", NS)
        link_el = e.find("a:link", NS)
        out.append({
            "id": (id_el.text if id_el is not None else "") or "",
            "title": " ".join(((title_el.text if title_el is not None else "") or "").split()),
            "updated": (updated_el.text if updated_el is not None else "") or "",
            "link": (link_el.get("href") if link_el is not None else "") or "",
        })
    return out


def tag_key(entry: dict) -> str:
    """release 的稳定标识：优先 tag 名，其次 id。"""
    t = entry["title"]
    if re.match(r"^v?\d+\.\d+", t):
        return t
    return entry["id"]


def load_state(path: str) -> dict:
    if os.path.exists(path):
        try:
            return json.load(open(path, encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            pass
    return {}


def version_tuple(v: str):
    m = re.match(r"v?(\d+)\.(\d+)\.(\d+)", v)
    return tuple(int(x) for x in m.groups()) if m else None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--state", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    state = load_state(args.state)
    findings = []

    # ── 1. Hugo releases ──
    try:
        hugo = parse_feed(fetch("https://github.com/gohugoio/hugo/releases.atom"))
    except Exception as e:
        print(f"⚠️ Hugo feed 失败: {e}", file=sys.stderr)
        hugo = []

    seen_hugo = set(state.get("hugo_seen", []))
    new_hugo = [x for x in hugo if tag_key(x) not in seen_hugo]
    if hugo:
        latest = tag_key(hugo[0])
        prev = state.get("hugo_latest")
        if new_hugo and (prev is None or version_tuple(latest) != version_tuple(prev or "")):
            findings.append({
                "component": "Hugo",
                "kind": "release",
                "latest": latest,
                "previous": prev,
                "items": [{"title": x["title"], "updated": x["updated"][:10], "link": x["link"]}
                          for x in new_hugo[:5]],
            })

    # ── 2. PaperMod 提交（只报 feat/fix 类）──
    try:
        pm = parse_feed(fetch("https://github.com/adityatelange/hugo-PaperMod/commits/master.atom"))
    except Exception as e:
        print(f"⚠️ PaperMod feed 失败: {e}", file=sys.stderr)
        pm = []

    seen_pm = set(state.get("papermod_seen", []))
    new_pm = [x for x in pm if x["id"] not in seen_pm]
    notable = [
        x for x in new_pm
        if any(x["title"].lower().startswith(p.lower()) for p in NOTABLE_PREFIXES)
    ]
    if notable:
        findings.append({
            "component": "PaperMod",
            "kind": "commits",
            "latest": (pm[0]["updated"][:10] if pm else ""),
            "previous": state.get("papermod_latest"),
            "items": [{"title": x["title"][:120], "updated": x["updated"][:10], "link": x["link"]}
                      for x in notable[:5]],
        })

    # ── 3. 更新状态 ──
    new_state = {
        "hugo_seen": list(dict.fromkeys([tag_key(x) for x in hugo] + list(seen_hugo)))[:40],
        "hugo_latest": tag_key(hugo[0]) if hugo else state.get("hugo_latest"),
        "papermod_seen": list(dict.fromkeys([x["id"] for x in pm] + list(seen_pm)))[:120],
        "papermod_latest": (pm[0]["updated"][:10] if pm else state.get("papermod_latest")),
        "checked_at": datetime.now(CST).isoformat(timespec="seconds"),
    }

    result = {
        "has_update": bool(findings),
        "checked_at": new_state["checked_at"],
        "findings": findings,
    }
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    if not args.dry_run:
        os.makedirs(os.path.dirname(args.state) or ".", exist_ok=True)
        with open(args.state, "w", encoding="utf-8") as f:
            json.dump(new_state, f, ensure_ascii=False, indent=2)

    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
