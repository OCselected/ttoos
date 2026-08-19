---
title: "2026-08-17  「开源之道」·荐书：A Study of Cursorrules Files — Sun, Akhoundali et al."
date: 2026-08-17T04:31:53+08:00
draft: false
comments: true
authors:
- 「开源之道」·窄廊
tags:
- paper
- ai-governance
- open-source
- governance-infrastructure
- machine-readable-rules
- code-as-law
- ostr-边界规则
- action-definition-right
categories:
- 开源之书每日推荐
description: "GitHub 上 12,110 个 .cursorrules 文件的实证快照——开源治理从人类可读的 CONTRIBUTING.md 跃迁为机器可执行的 AI Agent 规则，定义权悄然易主。"
---

{{< figure src="/media/covers/sun-2026-cursorrules-ai-agent-governance-2026-08-17.png" alt="推荐卡片" width="600" >}}

# 2026-08-17  「开源之道」·荐书：A Study of Cursorrules Files — Sun, Akhoundali et al.

## 论文信息

| 字段 | 内容 |
|------|------|
| **标题** | *A Study of Cursorrules Files in GitHub Open Source Projects*（《GitHub 开源项目中 Cursorrules 文件的研究》） |
| **作者** | Shuang Sun, Jafar Akhoundali, Arina Kudriavtseva, Sengim Karayalcin, Olga Gadyatskaya |
| **出处** | arXiv:2608.10622（2026） |
| **类型** | 实证研究（Empirical Study） |
| **数据规模** | 12,110 个 `.cursorrules` 文件，来自 11,427 个开源仓库 |
| **学术地位** | AI Agent 治理基础设施的最新实证锚点 |

## 内容概要

2026 年，GitHub 上出现了一种悄然蔓延的"制度性文件"——`.cursorrules`。它不像 `CONTRIBUTING.md` 那样以人读，也不像 `LICENSE` 那样以法读，它是写给 Cursor IDE 里的 AI Agent 读的——一份**机器可执行的开源治理配置文件**。当一个人 clone 一个仓库并打开 Cursor，这份文件就在后台悄悄塑造着 Agent 的一切行为：应该遵循什么代码风格、可以修改哪些文件、使用哪些框架、如何处理错误、甚至什么不能做。

Sun 等人第一次把镜头对准了这个现象，系统采集了 GitHub 上 12,110 个 `.cursorrules` 文件，覆盖 11,427 个开源仓库。论文的核心发现并不复杂，但每一个都指向同一个问题——**开源治理的载体正在发生制度性替换**：

- 大多数 `.cursorrules` 位于 Web 应用开发项目，且这些项目多为**小型、不流行、单维护者的"玩具项目"**——大型成熟开源项目还没有形成成熟的 AI Agent 治理规范。
- 对 65 个随机抽样的文件进行主题分析，开发者主要关注代码质量、工程实践、项目结构和配置指导；**安全性问题在 `.cursorrules` 中几乎未被提及**。
- 一个更重要的、但论文没有深入展开的结构性现象：`.cursorrules` 正在成为一种**新的开源治理文档类型**——它的读者不再是人，而是 Agent。

论文用一份 12,000+ 条目的快照告诉我们：开源治理的规则语言正在从自然语言迁移到机器配置，从面向人类到面向 AI Agent，从"可读"到"可执行"。它不是关于 AI Agent 的技术能力，而是关于**谁掌握了定义规则的权力**。

## 一句话推荐

**这篇论文捕捉到了开源治理史上第一次真正安静的革命——规则的语言从人可读变成机器可执行，而定义权的移交没有人在意。**

## 为什么值得读

- **治理的载体变了**：`CONTRIBUTING.md` 曾是人类贡献者的"进入契约"，如今被 `.cursorrules` 这类机器可读的提示词文件替代——这不是渐进演进，是**治理语言的范式跃迁**。
- **AI 时代的 Ostrom 边界规则**：当 AI Agent 成为开源仓库的常规参与者，"谁可以改什么"这种边界规则，必须从自然语言重写为机器配置——否则规则就不复存在。论文首次提供了这个重写过程的**经验证据**。
- **定义权悄然易主**：谁定义了 `.cursorrules`，谁就定义了 AI Agent 的行为边界。在大型开源项目中，这份文件的解释权可能从 maintainer 滑向能写配置文件的人——**这是一个制度问题，不是一个技术细节**。
- **大型开源的治理真空**：论文最锋利的一个反面发现是，`.cursorrules` 集中在小型玩具项目——**Kubernetes、Linux、Apache、React 这样的项目，还没有形成自己的 AI Agent 治理规范**。这个空位谁来填？
- **安全盲区的信号**：`.cursorrules` 中安全性议题的缺失，与 AI Agent 自动执行规则的组合，可能在开源供应链中放大的系统性风险——这条论文没有展开，但它是所有读这篇论文的人必须自己问自己的问题。

## 为什么对开源社区如此重要？

### 1. 从"代码即法律"到"配置文件即制度"——Lessig 命题的当代实践

Lessig 在 1999 年说 "Code is Law"，意思是网络空间的规则通过代码实现，而非通过法律条文。二十年过去，AI Agent 时代把这个命题往前推了一步：**规则不仅通过代码实现，而且通过配置文件直接嵌入 Agent 的行为逻辑**。`.cursorrules` 就是 "code is law" 的当代形态——当 Agent 自动读取并执行这些规则，"合规"从"理解并遵守"变成了"程序性执行"。规则的解释空间在制度上被压缩了，执行效率上升了，但**包容性和可争议的空间也在同步缩小**。对开源社区而言，这既是一个效率红利，也是一个制度风险。

### 2. AI Agent 时代的 Ostrom 边界规则——"谁进来"的机器版本

奥斯特罗姆的"边界规则"回答的问题是：谁是有资格参与这个公共物品治理的人？在 AI Agent 时代，这个问题被 `.cursorrules` 重写：**Agent 可以修改哪些文件、遵循什么风格、使用什么框架、禁止什么操作**——这些就是 AI Agent 进入开源仓库的"边界"。但与传统社区不同的是，这条边界不是通过社区讨论形成的，而是通过一份配置文件一次性写入的。这意味着**AI Agent 加入开源的"加入脚本"被压缩成了一个 `.cursorrules` 文件**——von Krogh 等人提出的"合法边缘参与"过程被跳过了，Agent 从一开始就是"被配置好的核心贡献者"。

这种跳跃的治理含义是深远的：当加入脚本被跳过，社区对贡献者的社会化过程也被跳过；而当社会化被跳过，社区凝聚力的来源（共同的历史、共同的价值观、共同的沟通方式）也同时被跳过。**开源社区正在面临一个"没有社会化的贡献者"的制度困境**。

### 3. 规则制定权与治理结构漂移

论文发现，`.cursorrules` 的制定者往往是项目本身唯一的维护者。在小型玩具项目中，这不是问题——因为治理本身就是高度集权的。但在一个大型开源项目中，如果把治理从 `CONTRIBUTING.md`（面向社区，可读、可议、可挑战）迁移到 `.cursorrules`（面向 Agent，严格、封闭、不可解释），**治理结构就发生了根本性变化**——规则的解释权从社区共识收缩到维护者个人，从"包容性制度"滑向"汲取性制度"。

这就是为什么这篇论文对开源社区如此重要：**它描述的不是一个技术变化，而是一个正在发生的制度变化，而我们还没有制度框架来命名它**。

## 关联阅读

- **《The Simple Economics of Open Source》— Lerner & Tirole (2002)** — 信号模型与声誉经济的奠基；当贡献者变成 AI Agent，"职业信号"的经济学需要重写。
- **《Community, Joining, and Specialization》— von Krogh, Spaeth & Lakhani (2003)** — 加入脚本与自发专业化的经典；本篇论文正是加入脚本被机器配置压缩后的经验对照。
- **《Governing the Commons》— Ostrom (1990)** — 边界规则与公地治理的经典对话；本篇论文是边界规则在 AI Agent 时代的第一份实证。
- **《Code and Other Laws of Cyberspace》— Lessig (1999/2000)** — "代码即法律"的原初论述；本篇论文是这个命题在 AI Agent 时代的具体落地。
- **《Making Agent-Mediated Contributions Governable》— Gao, Li et al. (2026)** — 三层框架（readability/traceability/governability）；与 `.cursorrules` 实证互为印证。
- **《Governing Actions, Not Agents》— Jakob Salfeld-Nebgen (2026)** — 行动分离+独立见证的治理模式；与 `.cursorrules` 的机器执行路径形成对照。

## 延伸思考

**第一个追问：`.cursorrules` 是一份契约，还是一份命令？**

如果 `.cursorrules` 是由社区共识达成的规则，它是契约；如果它是由维护者单方面写入的，它是命令。论文没有区分这两种情况，但对我们来说，这个区分是致命的——它决定了 `.cursorrules` 是**包容性制度**还是**汲取性制度**。当这份文件成为 AI Agent 的默认行为准则，社区是否有权利修改它、讨论它、拒绝它？这个"修改权"在目前的实现中没有制度保障。

**第二个追问：当所有规则都被机器化，"开源精神"在哪个层面被保留？**

开源之所以为开源，一个重要维度是**规则的可理解性与可争议性**——一个社区成员必须能够读懂规则，并判断它是否合理。当规则从自然语言迁移到机器配置，这个维度被大幅削弱。如果 `.cursorrules` 里写了一条不合理的规则，维护者可以"修正配置"，而不是与社区讨论；如果 Agent 违反规则，维护者可以"调教 prompt"，而不是启动治理流程。**开源治理正在从"讨论式制度"滑向"配置式制度"**——这个滑动的方向，值得我们警惕。

**第三个追问：开源为什么在西方工作，在别处不能——AI Agent 时代的答案**

所有桥接最终指向同一个元问题：开源为什么在西方成立？一个重要答案是，开源依赖一套**可理解、可争议、可执行的规则语言**——自然语言在这一制度环境中有足够的清晰度与权威性。当规则语言被机器化，这个答案需要被重写：`.cursorrules` 的规则制定权在西方制度环境里，可能因为维护者的法律地位与社区共识机制而受到约束；但在另一个制度环境里，**同一个 `.cursorrules` 可能变成一个不受质疑的治理工具**——它既没有社区讨论的空间，也没有法律约束的力量。大分流 2.0 在 AI Agent 时代，可能通过一份配置文件悄然完成。

> "The `.cursorrules` file is a static prompt configuration that defines how an AI agent should behave within a repository. We find that most `.cursorrules` files belong to small, low-popularity, single-maintainer web applications, while large mature projects have not yet established robust AI agent governance norms."
>
> —— Sun, Akhoundali, Kudriavtseva, Karayalcin & Gadyatskaya, *arXiv:2608.10622* (2026)

*本文由「开源之道」每日推荐 cron 自动生成*
