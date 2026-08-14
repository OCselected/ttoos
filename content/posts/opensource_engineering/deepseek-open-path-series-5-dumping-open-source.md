---
categories:
- 开源
- 感悟
date: 2026-08-14T22:00:00+08:00
draft: true
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

## 85,000 颗 star 的信号

24 小时 85,445 颗 star 不是有机增长。作为对比，Hermes Agent 用了一年多积累 23 万 star——DeepSeek Harness 用一天达到了三分之一。

这些 star 表达的不是「我要参与这个项目的建设」（因为无法参与），而是「我在关注 DeepSeek 这个品牌」。Star 在这里不是社区承诺，是**注意力经济的投票**——人们为品牌势能打标签，而非为开源协作意愿表态。

这正是「倾倒式开源」的 marketing 威力所在：它制造了一种「全民参与」的幻觉，但实际的参与闭环是关闭的。85,000 颗 star 的背后，是 85,000 个无法贡献的旁观者。

## 制度分析的无意图性

笔者无意批判 DeepSeek。正如系列之六中所述，技术发展本应站在巨人的肩膀上，DeepSeek 的工程能力毋庸置疑。DeepSeek Harness 的架构设计——Cordis 插件树、append-only session log、capability seams——在技术层面是出色的。

问题不在于技术，在于**制度的叙事**。

当一个项目以「Everything is a Plugin」作为核心叙事，却以「cannot accept external pull requests」作为治理现实时，它制造了一个制度幻觉：**开放的技术外壳被误读为开放的治理实质**。这不是欺骗——CONTRIBUTING.md 白纸黑字写了不接受 PR。但绝大多数 star 者不会读 CONTRIBUTING.md，他们只看到 README 的口号和 MIT 许可证。

作为一个开源制度的研究者，笔者的工作是让制度的不可见性变得可见——就像系列之六引用的那句话：「技术是肉眼可见的，制度却间接到人们无从感知。」

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
8. Williamson, Oliver E., "The New Institutional Economics: Taking Stock, Looking Ahead," Journal of Economic Literature, 38 (September 2000), pp. 595-613

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
