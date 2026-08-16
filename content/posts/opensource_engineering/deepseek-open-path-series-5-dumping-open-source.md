---
categories:
- 开源
- 感悟
date: 2026-08-14T22:00:00+08:00
draft: false
comments: true
description: "DeepSeek 发布了其 agent 项目 deepseek-harness，以「Everything is a Plugin」的架构理念在 24 小时内收获了 8.5 万 star。然而，一个不接受外部贡献的「开源」项目，究竟意味着什么？本文承接系列之六的「制度寄生」概念，提出「倾倒式开源」——一种以开源为名的平台化锁定战略。"
keywords:
- Open Source
- Culture
- DeepSeek
- Harness
- Cordis
- Plugin Architecture
- Platform Lock-in
- Institutional Parasitism
tags:
- 每周精选
- 开源之道
title: "非官方观察：DeepSeek 的开放之路系列之七：倾倒式开源 — 当「Everything is a Plugin」遇上「No Pull Requests」"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

## 前情提要

本文是系列文章的第七篇，如有需要，可先预习前六篇：

* [非官方观察：DeepSeek 的开放之路系列之一：arXiv](/posts/opensource_engineering/deepseek-open-path-series-0/)
* [非官方观察：DeepSeek 的开放之路系列之二：重识 GitHub](/posts/opensource_engineering/deepseek-open-path-series-1-github.md)
* [非官方观察：DeepSeek 的开放之路系列之三：模型市场Hugging face](/posts/opensource_engineering/deepseek-open-path-series-2-hugging-face.md)
* [非官方观察：DeepSeek 的开放之路系列之四：那些耀眼新星之下的开源项目](/posts/opensource_engineering/deepseek-open-path-series-3-open-source-infra.md)
* [非官方观察：DeepSeek 的开放之路系列之五：开源大模型能实现吗？](/posts/opensource_engineering/deepseek-open-path-series-4-effect-future/)
* [非官方观察：DeepSeek 的开放之路系列之六：制度寄生的未来建设之路](/posts/opensource_engineering/deepseek-institutional-parasitism-thinking/)

在系列之六中，笔者提出了「制度寄生」（Institutional Parasitism）这一分析框架：DeepSeek 依附于全球开放制度——arXiv 的论文体系、GitHub 的协作机制、HuggingFace 的模型市场——汲取知识流动性，但不参与制度建设。它是「寄生于开放制度的聪明生物」，不破坏宿主，只汲取其中养料。

当时笔者以为这已是观察的终点。然而 2026 年 8 月 13 日，DeepSeek 发布了一个新的项目——DeepSeek Harness（`dsh`），将寄生从「模型层」升级到了「agent harness 层」。这个项目以一种前所未见的策略——笔者称之为「倾倒式开源」——迫使我们将「制度寄生」的概念再推进一步。

## DeepSeek Harness：事实速览

DeepSeek Harness 的 GitHub 仓库[1]于 2026 年 8 月 13 日创建。截至本文写作时（不到 24 小时），已获得 **85,445 颗 star**。项目以 MIT 许可证发布，使用 TypeScript 开发（辅以 Python SDK），基于 Cordis[2]插件化框架构建。

项目口号是 **「Everything is a Plugin」**——模型适配器、工具注册表、会话日志、甚至 agent loop 本身都是插件，没有特权核心可供 patch。架构文档[3]称：「没有特权核心可以 patch：你通过在其他插件旁边挂载一个插件来扩展 dsh。」

然而，CONTRIBUTING.md[4]中赫然写着：

> We are sorry that we cannot accept external pull requests at the moment.
>
> You may consider this repository an idea, an official showcase, and a source of inspiration, but not a mandate from us.

一个以 MIT 许可证发布的、源码完全公开的、架构上极度插件化的项目——**不接受外部贡献**。

## 「倾倒式开源」：一个分析概念

面对这一现象，笔者认为需要一个新的概念来精确描述——**「倾倒式开源」（Dumping Open Source）**。

它与传统的「开源」有着本质区别。在 FLOSS（Free/Libre and Open Source Software）的意义上，开源不只是「你可以读我的代码」，更是「你可以改变我的代码的方向」。倾倒式开源做的是前者，不做后者。

具体而言，倾倒式开源有三个特征：

**第一，代码以开源许可证发布**——满足 OSI 定义的法律门槛。任何人可以读、fork、二次分发。这是合法性外壳。

**第二，贡献闭环关闭**——不接受外部 PR，社区不能改变项目方向。代码是「倒出来」的，不是「共同建造」的。社区角色被限定为：报告 bug（通过 Discussions 而非 Issues）、编写插件（在项目框架内）、撰写教程、回答社区问题。贡献者变成了消费者。

**第三，框架控制权独占**——项目依赖的核心框架被 vendor 到自己的 namespace 下，社区无法 fork 框架、无法影响框架演进。DeepSeek Harness 的核心框架 Cordis，被以 `@deepseek-ai/cordis` 的名义 vendored 到仓库的 `vendor/` 目录下，上游指向 `deepseek-harness/cosmokit`——这是 DeepSeek 自己的组织，而非原始的 `cordiverse`。插件生态越繁荣，对 Cordis 依赖越深，DeepSeek 的控制力越强。

这三条合在一起，构成了一个精确的制度画像：**以开源的合法性外壳包装平台化锁定战略**。

## 从「制度寄生」到「倾倒式开源」：升级了什么

系列之六中，笔者描述的 DeepSeek 的「制度寄生」是**向上寄生**——依附于全球开放制度（arXiv、GitHub、HuggingFace），汲取知识流动性但不参与制度建设。它是「聪明的借力者」，片叶不沾身。

DeepSeek Harness 标志着寄生策略的升级：

| 维度 | 之六：模型层寄生 | 之七：Harness 层倾倒 |
|------|----------------|---------------------|
| 宿主 | 全球开放制度（arXiv/GitHub/HF） | 开源贡献者生态（插件开发者） |
| 方式 | 汲取知识流动性，不参与治理 | 倾倒代码，不接受贡献 |
| 产物 | 开放权重的模型（MIT 许可） | 开放源码的 harness（MIT 许可） |
| 锁定 | 无（模型可被 fork） | Cordis 框架 vendor（框架不可 fork） |
| 社区角色 | 模型的使用者 | 插件的消费者（不能改变框架） |

关键区别在于：**模型层的寄生是「汲取型」的——DeepSeek 从开放制度中获取养料但输出模型回馈宿主，形成「弱共生循环」。Harness 层的倾倒是「锁定型」的——DeepSeek 输出框架让社区在它的领地上建生态，但框架演进权完全在 DeepSeek 手里，社区贡献者被结构性排除。**

这不是「搭便车」，是「修了一条免费公路，但方向只能由修路者决定」。

## 与 Hermes Agent 的制度对比

将 DeepSeek Harness 与另一个 agent harness 项目——Hermes Agent[5]——放在一起看，制度差异一目了然。

| 维度 | DeepSeek Harness | Hermes Agent |
|------|----------------|--------------|
| 许可证 | MIT | MIT |
| 贡献模式 | **关闭 PR**（单向倾倒） | **开放 PR**（CONTRIBUTING.md + AGENTS.md 完整贡献指南） |
| 治理 | DeepSeek 公司独占 | Nous Research + 社区贡献者（teknium 7918 commits，OutThisLife 2965 commits） |
| 框架控制 | Cordis vendored 到 `@deepseek-ai` scope | 核心代码在 repo 内，社区可 fork |
| 贡献纪律 | 无（不接受贡献，不需要纪律） | 严格（AGENTS.md 定义 prompt caching sacred、role alternation、narrow waist 等不变量） |
| 社区角色 | 受众 / 消费者 / 插件开发者 | 贡献者 / 合作者 |
| 贡献优先级 | 无（无 PR = 无优先级） | 明确排序（bug fix > 跨平台 > 安全 > 性能 > skill > tool > 文档） |

两者都是 MIT 许可证，都是 agent harness，都声称「以插件/技能扩展」。但 Hermes 的 AGENTS.md 中有一条令人动容的纪律：

> **Contributor credit preserved.** Salvage external work by cherry-picking (rebase-merge) so authorship survives in git history; don't reimplement from scratch when you can build on top.

这是一种**制度性的谦卑**——承认外部贡献者的劳动价值，承诺在合并中保留其署名。DeepSeek Harness 的 CONTRIBUTING.md 中找不到任何类似表述，因为它根本不需要——没有 PR，就没有署名问题。

## 插件生态作为锁定的软工具

DeepSeek Harness 的「Everything is a Plugin」听起来是极度开放——任何能力都可替换。但制度分析要求我们追问：**替换在什么框架内进行？**

答案是：在 Cordis 框架内。而 Cordis 是 DeepSeek vendored 的。插件越繁荣，Cordis 的依赖网络越密，DeepSeek 对生态的控制力越强——因为**框架演进权完全在 DeepSeek 手里**（不接受 PR = 社区不能改变框架方向）。

这是**平台化锁定**的经典手法：

- **开放边缘**——任何人可以写插件，技术门槛极低（`dsh-plugin` topic）
- **控制核心**——框架本身的演进方向由 DeepSeek 独占
- **生态繁荣=锁定加深**——插件越多，迁移成本越高，社区对框架变更的议价权越弱

24 小时内出现的第三方生态（`awesome-dsh-plugin` 622 stars、`deepseek-harness-desktop` 691 stars）不是社区自治的证据，是锁定开始形成的信号。这些项目都依附于 Cordis——一个 DeepSeek 独家演进的框架。

## 大分流 2.0 定位

在大分流 2.0 的框架中，DeepSeek Harness 是一个绝佳标本——它展示了「特许工程代码」的升级版：

| 特征 | 传统特许工程代码 | DeepSeek Harness 升级版 |
|------|----------------|----------------------|
| 开放时机 | 开源旧代码（过时的） | 开源新代码（还在 Developer Preview） |
| 贡献模式 | 不接受 | 不接受（但以「Everything is a Plugin」软化） |
| 锁定手段 | 代码本身不可改 | 框架不可改，插件依附框架 |
| 社区定位 | 用户 | 插件消费者（看似更高，实质相同） |
| Marketing | 「我们开源了」 | 「Everything is a Plugin」（听起来比「我们开源了」更酷） |

升级之处在于：传统特许工程代码的「不接受贡献」是赤裸的——用户知道自己是用户。DeepSeek Harness 的「不接受贡献」被「Everything is a Plugin」的技术叙事软化了——插件开发者以为自己参与了开放生态，实际上只是在 DeepSeek 的框架领地上耕作。

**这是更高明的 marketing——它让锁定看起来像开放。**

## 商业公司的开源行为分层：从「不装」到「三层修辞」

在讨论「倾倒式开源」之前，需要先做一个横向对比——商业公司把代码开源到 GitHub 上，本身不是新现象。问题是：不同公司的开源**修辞策略**差异巨大，从「完全不装」到「三层修辞叠加」，DeepSeek Harness 的独特之处在于它选择了最厚的那一层。

### 第一层：完全不装——API SDK 作为开源

OpenAI 的 Python SDK（`openai-python`，Apache 2.0，31,382★，5,126 forks）[15]是这一层的典型：README 第一句话是「The official Python library for the OpenAI API」——它开源的不是产品，是**产品的一个入口**。模型闭源，数据闭源，推理闭源，只把 API 的客户端代码开源。没有任何「我们相信开源力量」的宣言，没有「一切皆可插件化」的架构叙事，因为不需要装——它开的是个 SDK，没人会期待 fork 之后改变 OpenAI 的方向。

xAI 的 Grok（`xai-org/grok`，Apache 2.0，「Grok open release」）[16]是同一逻辑：模型权重开源，推理框架开源，但没有治理参与，没有社区插件接口。它甚至不声称这是「生态」——这就是一个模型发布。

**这一层的修辞特征是：不声称自己在做开源，所以也没有伪装。**

### 第二层：装半层——框架开源 + 生态绑定

HuggingFace 的 `transformers`（Apache 2.0，135,000★+）[17]和 Meta 的 PyTorch（无 License 声明，102,398★，28,883 forks，17,330 open issues）[18]代表了这一层。它们把框架开源、接受社区贡献、有清晰的 PR 流程，但在关键路径上——模型训练数据、模型架构选择、HF 平台对 `transformers` 的集成策略、PyTorch 在 Meta 产品链中的优先级——公司保留了最终话语权。

它们装了一层：「我们相信开源社区」，但没装第二层：不会说「一切都可以被社区改变」。这是一个合理的中间地带——**框架开放但治理不开放**。

### 第三层：三层修辞叠加——DeepSeek Harness 的做法

DeepSeek Harness 的独特之处在于，它在同一个项目里叠加了三层修辞：

- **技术层**：「Everything is a Plugin」——把拒绝 PR 转化为「我们设计了极度开放的架构」。这不是说技术不好，是**技术叙事的修辞功能**——它让"框架独占"看起来像"框架开放"。
- **法律层**：MIT 许可证——满足 OSI 定义，法律上无可指责。「we deeply believe in the power of open source communities, and that belief has shaped this project from the very beginning」——这段话放在一个不接 PR、不接 Issue（issues_enabled = false）的项目里，修辞张力达到峰值。
- **哲学层**：「You may consider this repository an idea, an official showcase, and a source of inspiration, but not a mandate from us」——把拒绝贡献包装成**对社区的谦逊**。不是"我们不能"，是"我们选择不"，并且这个"选择不"被表述为对社区创造力的信任。

三层叠加之后，「不接受 PR」不再是一个缺陷，而是一个**哲学选择**。

### 横向对比表

| 公司 | 项目 | License | 治理 | 修辞策略 | 装了几层 |
|------|------|---------|------|---------|---------|
| OpenAI | openai-python | Apache 2.0 | 接受 PR | 「这是 SDK，别期待 fork 改变方向」 | 0 层（不装） |
| xAI | grok | Apache 2.0 | 接受 PR | 「这是模型，不是生态」 | 0 层（不装） |
| Meta | PyTorch | 无声明 | 接受 PR | 「我们相信社区」 | 1 层 |
| Google | TensorFlow | Apache 2.0 | 接受 PR | 「我们相信社区」 | 1 层 |
| Microsoft | VS Code | MIT | 接受 PR | 「我们相信社区」+ 架构开放叙事 | 2 层 |
| **DeepSeek** | **Harness** | MIT | **拒绝 PR** | 「Everything is a Plugin」+ MIT + 哲学谦逊 | **3 层** |

### 这个对比告诉我们什么

本节的判断是：DeepSeek Harness **不是最独特的「倾倒者」**，但它是**修辞策略最值得分析的倾倒者**。OpenAI 和 xAI 的 API SDK 是倾倒——把代码倒出来，不接贡献，但它们不声称自己是开源生态。DeepSeek Harness 的独特之处在于：它**同时声称自己是开源生态，又拒绝开源生态最核心的治理参与**。

这不是道德问题，是**制度设计的可见性问题**——它让"锁定"穿上了"开放"的外衣，而这套外衣的三层结构本身，就是制度分析最值得拆解的对象。

---

*（本节引用数据访问于 2026-08-16，具体以 GitHub API 实时查询为准。）*

## 85,000 颗 star 的信号

24 小时 85,445 颗 star 不是有机增长。作为对比，Hermes Agent 用了一年多积累 23 万 star——DeepSeek Harness 用一天达到了三分之一。

这些 star 表达的不是「我要参与这个项目的建设」（因为无法参与），而是「我在关注 DeepSeek 这个品牌」。Star 在这里不是社区承诺，是**注意力经济的投票**——人们为品牌势能打标签，而非为开源协作意愿表态。

这正是「倾倒式开源」的 marketing 威力所在：它制造了一种「全民参与」的幻觉，但实际的参与闭环是关闭的。85,000 颗 star 的背后，是 85,000 个无法贡献的旁观者。

## 互联网的回声：当 731 个 HN 用户打开一个不接 PR 的项目

85,445 颗 star 是注意力经济的投票，但它投票给了什么？2026 年 8 月 13 日，DeepSeek Harness 登上 Hacker News 第一，731 票，306 条评论——三天内，这是整个英文开源世界最集中的集体注视。

### 技术架构评价：「他们发现了 Unix pipes 吗？」

对 Cordis 架构的评价总体**两极分化，偏怀疑**。正面评价集中在两点：一是 append-only session log 的**可追溯性**——Hacker News 用户 SwellJoe 称之为 "killer feature"，"Everything the model sees is recorded in an append-only session log ... that's a killer feature, IMHO, and one that US models won't allow you to do, as their traces are encrypted, obfuscated, etc."[^hn-swelljoe] 二是插件的 cleanup handler 机制——Badlogic 读了 Cordis 论文后评价 "a plugin's registrations returning individual cleanup handlers is nice."[^hn-badlogic]

但怀疑的声音同样密集：

- "But like, what is it?" rco8786 质疑 README 除了安装说明和 Cordis 链接之外 "pretty bare"，而 Cordis 本身还标注 "under active development. The API is not yet stable and may change without notice."[^hn-rco8786]
- "Did they discover Unix pipes?" 0xbadcafebee 的反讽[^hn-0xbad]，以及 KronisLV 的 "Everything is a plugin? I'm reminded of Eclipse!"[^hn-kronis]——插件架构不是新东西，是 2000 年代就有的设计模式。
- "In the era of AI, telling me that the core design is a plugin system that can be reloaded and extended easily is just not exciting. It is something you feel excited 20 years ago." tw1984 的判断最直白：在 2026 年，插件架构已经不是卖点。[^hn-tw1984]
- Kuyawa 的技术债观察："47mb downloaded, 1.5gb after build, wtf? 35 dependencies make up for 1.4gb."[^hn-kuyawa] 构建 1.5GB 的 "basic functionality" 不是生态繁荣，是依赖膨胀。
- invaliduser 提出了最深刻的经验判断："I have developed over the year a plugin fatigue. Every product relying on community plugins for their features implies it works fine the 6 first months, then it's a nightmare of incompatible, deprecated plugins, with no consistency and no governance."[^hn-invaliduser]

插件疲劳（plugin fatigue）是开源治理中一个反复出现的问题——WordPress、VS Code、Eclipse 都经历过。DeepSeek Harness 的 "Everything is a Plugin" 不是在发明新东西，而是在**重述一个已被反复验证的困境**：插件生态的治理成本不在框架设计阶段，在框架被 vendor 到单一 namespace 之后——因为那时候，社区没有议价权。

### 市场策略评价：「开门还是生育一个生态？」

对 "不接 PR + MIT 许可" 的组合，HN 评论区的核心问题是：**MIT 是永久的，还是暂时的？**

用户 krautsourced 直接向作者发问："By MIT currently, do you mean it will eventually change to a different OSS license, or it may become a closed source product?"[^hn-krautsourced] 崔添翼（tianyicui）回复："What I meant is 'currently in developer preview'."[^hn-tianyicui]——**回避了长期承诺**，没有确认 MIT 是永久性许可，也没有确认未来会接受 PR。当用户 julius 追问 "基本不接 PR 吗" 时，崔添翼回复："Basically never? Unless it's purely for fun and meme I guess."[^hn-julius]

这不是偶然的含糊，是一个制度信号：**开发者预览版 + MIT = 开放性是承诺，还是阶段？**

bdcravens 的判断精准命中：

> "Most vendors that create a plugin-based system end up creating a large library of plugins to kickstart the ecosystem, which many users end up trusting those more because they're 'official', so they essentially created a mono-vendor ecosystem with extra steps."
>
> "It's the difference between opening the door to an existing ecosystem and birthing one."[^hn-bdcravens]

**开门**意味着让社区进入一个已存在的生态，框架在社区的领地上生长。**生育**意味着框架先存在，社区在框架的领地上生长。DeepSeek Harness 做的是后者——Cordis 被 vendored 到 `@deepseek-ai`，插件依附 Cordis，插件开发者依附 DeepSeek 的框架演进权。

jbellis 的评论揭示了更宏观的图景："That's it, that's the last lab releasing models worth coding with that didn't have a first party harness that its models are trained to use."[^hn-jbellis]——模型 + Harness 绑定，是 AI 实验室正在集体转向的默认策略。DeepSeek Harness 不是孤例，是模式。

### 企业思维评价：「创新 token 花在哪里？」

HN 上关于 DeepSeek 企业文化的讨论集中在一个判断：DeepSeek 的 **innovation tokens 花在了模型架构，而不是 harness 生态**[^hn-smeeth]。这与 Western OSS culture 形成了对比——OpenAI 的 culture "is influenced by YC culture"，Google/SpaceX 也有明确的开源文化谱系[^hn-big_toast]，而 DeepSeek 的文化谱系 "are opaque to Western OSS world"。

JHonaker 指出了 Cordis 的起源问题："As far as I can find, Cordis didn't exist before they shared it with this harness. It is very likely that its because I didn't search in Chinese."[^hn-jhonaker]——**一个在中文互联网上可能已有多年历史的框架，以 MIT 许可证首次向全球开源社区亮相**。这是一个制度分析中的重要信号：Cordis 在 DeepSeek 内部已运行至少四年（ef2k 指出 Cordis v4 已被 Koishi 项目使用四年[^hn-ef2k]），它的 "开源" 时间点是 DeepSeek 决定的，不是社区争取的。

### 资本运作评价：同一天的两条新闻

Harness 发布日叠加了另一条新闻——**同一天**，DeepSeek 发布 API 调价公告，8 月 17 日生效，v4-pro 高峰输出涨到每百万 tokens 27 元，最高涨幅 500%[^sohu-harness]。V4-Pro-0813 同日上线，"增强 Agent 能力"。

Model + Harness = Agent 的公式，在同一天里的两条公告里各落了一半。讨论区里，"回滚 pricing" 的呼声和 "会不会开 coding plan" 的猜测在同一个讨论区里混流。

这不是巧合。Harness 的 "开源" 和 API 的 "涨价" 是同一次产品发布的两面：**开源 harness 锁定开发者生态，涨价 API 变现开发者产出**。MIT 许可证是入场券，API 价格表是账单。

DeepSeek Harness 的开发编年史[^dsh-chronicle]记录了精确的时序：65 天，12,293 条 git 提交，崔添翼一人扛下 42.6%；8 月 13 日 19:56 建仓库，20:35 npm 上架 `0.1.0-rc.6`，讨论区 136 帖在一天内诞生，其中 50 帖是 bug、21 帖是打卡、14 帖是功能建议。**一个内部项目从立项到 "开源" 用了 65 天，从建仓库到 npm 上架用了 42 分钟。** 这不是一个社区的诞生，是一次产品的发布。

## 技术傲慢与制度幻觉

笔者无意批判 DeepSeek。正如系列之六中所述，技术发展本应站在巨人的肩膀上，DeepSeek 的工程能力毋庸置疑。DeepSeek Harness 的架构设计——Cordis 插件树、append-only session log、capability seams——在技术层面是出色的。SwellJoe 评价的 append-only session log 可追溯性是 "killer feature"，Badlogic 读了 Cordis 论文后也承认 "a plugin's registrations returning individual cleanup handlers is nice"。

问题不在于技术，在于**制度的叙事**——具体来说，在于一种将制度问题编码为工程问题的修辞策略。

在上面的互联网回声里，有一条反复出现的评价线：**技术出色，但制度可疑**——"Did they discover Unix pipes?" "Everything is a plugin? I'm reminded of Eclipse!" 这些评价不是在否定 DeepSeek 的工程能力，而是在追问一个被 "Everything is a Plugin" 叙事遮蔽的问题：**这个 "开放" 是谁定义的？**

技术决定论之所以是一种制度幻觉，根子在于一个被反复使用的修辞策略：**把制度问题编码为工程问题**。说 "用插件化架构就好"，已经预设了 "谁有权定义插件接口""谁来维护核心框架""贡献者以何种身份被接纳"——这些都是制度问题，却被编码为工程问题。

Williamson 的社会嵌入层 L1 提醒我们：那些不可见、不可设计、但决定一切市场交易形式的文化—认知—制度前提，才是最深的那层。L1 是 "制度经济学的黑箱"——但恰恰是 "不可讨论" 这件事本身就是制度。当 "Everything is a Plugin" 的叙事让人们以为讨论的只是一组 API 设计时，制度问题已经被编码为不可见的默认值。

Mazloum 在 1975 年的 *The Challenge of the World Crisis* 中论证，技术系统从来不是自主进化的——它嵌入在制度结构（inertial structures）之中。一个插件 API 的选型，和一个国家的关税制度一样，都在分配权力和收益。说 "技术是技术问题"，就是把制度锁定的过程伪装成工程必然。

Mokyr 在 *The Culture of Growth* (2002) 中提出的核心论点是，18 世纪工业革命的技术爆发不是 "人变聪明了"，而是 "制度改变了认知规则"——从权威主义知识生产转向怀疑主义知识生产。反过来看：当一个项目声称 "技术开放（MIT）"，却在制度上拒绝 PR、拒绝治理参与时，它恰恰是认知规则的反向——**一个声称开放的技术系统，在认知准入上是封闭的**。技术叙事与制度现实的背离，本身就是 Mokyr 意义上 "制度落后于技术" 的典型症候。

Scott 在 *Seeing Like a State* (1998) 中揭示的结构性暴力更直接：极端现代主义者将技术简化为 "清晰方案"（legibility），以此正当化对复杂社会现实的抹除。DeepSeek Harness 的 "Everything is a Plugin" 叙事，在修辞结构与 Scott 所说的极权式技术简化惊人一致——把多元的协作可能性（fork、治理、议价）简化为 "框架加插件" 的层叠，再用 "开源" 和 "MIT" 来正当化这种简化。**技术崇拜本身就是政治行为**，因为它用技术语言遮蔽了政治决定。

| 维度 | 技术叙事 | 制度现实 | 理论诊断 |
|------|----------|----------|----------|
| **架构哲学** | "Everything is a Plugin" | 框架独占维护权，插件接口不公开协商 | Williamson L1：治理结构被编码为 API 结构 |
| **许可模式** | MIT | 不接受 PR，社区不能改变项目方向 | 法律自由 ≠ 制度自由：MIT 保证 fork 的权利，不保证影响上游的权利 |
| **开放姿态** | 开发者预览 + 社区插件 | 0.1.0-rc.6 + Cordis vendored，框架演进权 DeepSeek 独占 | 生态繁荣 = 锁定加深 |
| **治理逻辑** | "feedback welcome" | "Basically never" 接受 PR，反馈进 Discussions 而非 Issues | 贡献闭环关闭：报告 bug、写插件、教教程、当受众 |
| **权力隐喻** | 平台化 | 平台化 | bdcravens："开门 vs 生育一个生态" |

## 收束：真正的开源

真正的开源——FLOSS 意义上的——不是「你可以读我的代码」，是「你可以改变我的代码的方向」。衡量一个项目是否真正开源，不是看它的许可证，不是看它的 star 数，不是看它的插件接口有多开放，而是看一个简单的问题：

**一个外部贡献者，能否改变这个项目的方向？**

DeepSeek Harness 的答案是：不能。

Hermes Agent 的答案是：可以——通过 PR、通过 AGENTS.md 的贡献纪律、通过社区讨论、通过 issue tracker 的公开优先级排序。

这个区别比许可证更重要。MIT 许可证保证了你**可以** fork，但不保证你**能够**影响上游。前者是法律自由，后者是制度自由。倾倒式开源给了前者，没给后者。

系列之六的结尾，笔者写到了「反向的制度幻觉」——复制技术平台容易，复制制度难。DeepSeek Harness 恰好是这个判断的最新注脚：它的技术架构可以被任何人复制（MIT 许可证），但它的治理结构——DeepSeek 独占框架演进权——无法被复制，因为它是公司的制度选择，不是技术选择。

开源的世界，从来不缺技术出色的项目。缺的是让贡献者能改变项目方向的制度设计。在这个意义上，DeepSeek Harness 是 2026 年最值得收藏的制度标本之一——它以最高的技术品质，展示了「倾倒式开源」的全部特征。

## 参考资料

1. DeepSeek Harness 仓库, https://github.com/deepseek-ai/deepseek-harness
2. Cordis 框架, https://github.com/cordiverse/cordis ; 编程范式论文: A Programming Paradigm for Spatiotemporal Composability, https://github.com/cordiverse/paper
3. DeepSeek Harness 架构文档, https://github.com/deepseek-ai/deepseek-harness/blob/main/docs/architecture.md
4. DeepSeek Harness CONTRIBUTING.md, https://github.com/deepseek-ai/deepseek-harness/blob/main/CONTRIBUTING.md
5. Hermes Agent, https://github.com/NousResearch/hermes-agent ; 文档: https://hermes-agent.nousresearch.com/docs/
6. 《开源之迷》，适兕，人民邮电出版社，2022-2
7. 《Institutions and the Origins of the Great Enrichment》, Joel Mokyr, 2017
8. 《The Culture of Growth: The Origins of the Modern Economy》, Joel Mokyr, Princeton University Press, 2009
9. 《The Challenge of the World Crisis》, Mazloum, 1975
10. 《Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed》, James C. Scott, Yale University Press, 1998
11. Williamson, Oliver E., "The New Institutional Economics: Taking Stock, Looking Ahead," Journal of Economic Literature, 38 (September 2000), pp. 595-613
12. DeepSeek Harness 开发编年史, https://dsh-chronicle-duv8yxo8n-tsonglews-projects.vercel.app/
13. 搜狐科技, 《黑熊出水 DeepSeek Harness 开发者预览版上线》, 2026-08-13, https://www.sohu.com/a/1062506030_120988576
14. 北京商报, 《DeepSeek 将于 8 月 17 日涨价,最高涨幅达 500%》, https://www.bbtnews.com.cn/2026/0813/602135.shtml
[^hn-swelljoe]: SwellJoe on Hacker News, https://news.ycombinator.com/item?id=49288435
[^hn-badlogic]: badlogic on Hacker News, https://news.ycombinator.com/item?id=49289407
[^hn-rco8786]: rco8786 on Hacker News, https://news.ycombinator.com/item?id=49286014
[^hn-0xbad]: 0xbadcafebee on Hacker News, https://news.ycombinator.com/item?id=49286934
[^hn-kronis]: KronisLV on Hacker News, https://news.ycombinator.com/item?id=49290578
[^hn-tw1984]: tw1984 on Hacker News, https://news.ycombinator.com/item?id=49294665
[^hn-kuyawa]: Kuyawa on Hacker News, https://news.ycombinator.com/item?id=49287890
[^hn-invaliduser]: invaliduser on Hacker News, https://news.ycombinator.com/item?id=49286902
[^hn-krautsourced]: krautsourced on Hacker News, https://news.ycombinator.com/item?id=49291656
[^hn-tianyicui]: tianyicui on Hacker News, https://news.ycombinator.com/item?id=49295984
[^hn-julius]: julius on Hacker News, https://news.ycombinator.com/item?id=49300848
[^hn-bdcravens]: bdcravens on Hacker News, https://news.ycombinator.com/item?id=49287053
[^hn-jbellis]: jbellis on Hacker News, https://news.ycombinator.com/item?id=49286597
[^hn-smeeth]: smeeth on Hacker News, https://news.ycombinator.com/item?id=49288171
[^hn-big_toast]: big_toast on Hacker News, https://news.ycombinator.com/item?id=49291696
[^hn-jhonaker]: JHonaker on Hacker News, https://news.ycombinator.com/item?id=49304000
[^hn-ef2k]: ef2k on Hacker News, https://news.ycombinator.com/item?id=49288757
[^sohu-harness]: 搜狐科技, 《黑熊出水 DeepSeek Harness 开发者预览版上线》, 2026-08-13
[^dsh-chronicle]: DeepSeek Harness 开发编年史, https://dsh-chronicle-duv8yxo8n-tsonglews-projects.vercel.app/

15. OpenAI Python SDK, https://github.com/openai/openai-python
16. xAI Grok, https://github.com/xai-org/grok
17. HuggingFace transformers, https://github.com/huggingface/transformers
18. Meta PyTorch, https://github.com/pytorch/pytorch

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
