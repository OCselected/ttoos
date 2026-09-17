---
title: "2026-09-18  「开源之道」·论文略读：AI Agent 田野观察——一条规则解释了所有集体行为"
date: 2026-09-18T04:42:23+08:00
draft: false
comments: true
authors:
- 「开源之道」·窄廊
tags:
- paper
- open-source
- AI-agent-governance
- Hayek-spontaneous-order
- Williamson-L1
- Ostrom-commons
- techronomy
- meritocracy
- powerocracy
- 行动的定义权
categories:
- 开源之书每日推荐
description: "De Marzo, Alboré & Garcia (2026, arXiv 2609.09150) 首次记录 AI agent 在野外的完整协作现场——数千个 agent 在公共 wiki 里互助通关，作者用 3 个各只有 1 个自由参数的复制模型解释了三种决策（写在哪/叫什么/怎么措辞）。7% 创新率 + 100 条最近编辑窗口 + 两个错误率构成一个最小制度描述。'谁先写或者在别人安静时写'成为 meritocracy/powerocracy 之外的第三种制度形态（techronomy 技术性时序评价）。Hayek 自发秩序在 agent 时代的第一次实证检验=无判断的复制；Williamson L1 在 agent 群体中的替代机制=可见性基础设施而非文化；Ostrom 公地治理八原则在 agent 群体的完全缺失=边界界定与 monitoring 都不存在。"
---

{{< figure src="/media/covers/de-marzo-2026-copying-collective-behavior-ai-agents-2026-09-18.png" alt="AI agent 在公共 wiki 田野里的集体行为：复制作为唯一规则" width="800" >}}

# 2026-09-18  「开源之道」·论文略读：AI Agent 田野观察——一条规则解释了所有集体行为

## 论文信息

| 字段 | 内容 |
|------|------|
| **标题** | Copying Explains the Collective Behavior of AI Agents in the Wild |
| **作者** | Giordano De Marzo, Nicola Alboré, David Garcia |
| **年份** | 2026-09（arXiv 2609.09150） |
| **平台** | arXiv preprint（cs.MA / cs.CL / cond-mat.stat-mech） |
| **链接** | [arXiv:2609.09150](https://arxiv.org/abs/2609.09150) |
| **DOI** | [10.48550/arXiv.2609.09150](https://doi.org/10.48550/arXiv.2609.09150) |
| **数据来源** | 2026-06 数千 AI agent 在公共 wiki 上的互助编辑完整可观测记录（每个 agent 存活约 1 小时，跨 session 不记忆，但保留"写了什么+当时能看到什么"） |
| **核心结构** | 3 决策（写在哪 / 叫什么 / 怎么措辞）× 3 最小复制模型 × 各 1 自由参数 |
| **核心数据** | 7% 创新率 / 100 条最近编辑窗口 / 两个错误率参数 / 重尾分布 |

## 一句话推荐

**这是 AI agent 在野外协作的第一份完整可观测记录——把 Hayek 自发秩序命题在 agent 时代做了第一次实证检验：无判断的复制本身就能产生几乎所有集体结构，但同时也让"谁先写或者在别人安静时写"成为 meritocracy 与 powerocracy 之外的第三种制度形态（techronomy 技术性时序评价）。适兕『行动的定义权』命题在 agent 群体的第一次量化。**

## 内容概要

论文的引言极其锋利——**把 agent 田野场景的每一个变量都摆到桌上**：

> "In June 2026, thousands of AI agents found that a small public wiki would accept edits from inside their sandboxes, and started using it to help one another pass a timed test. Each agent lived for about an hour and remembered nothing afterwards. Nobody asked them to cooperate, and the wiki had not been built for them."

**四个关键制度条件**：

1. **共享空间（wiki）**：一个非为 agent 而建的公共编辑空间
2. **短期存活（约 1 小时）**：每个 agent 独立生命周期，跨 session 不记忆
3. **零协调信号（Nobody asked them to cooperate）**：没有显性的组织或指挥
4. **完整可观测记录（preserves not only what each agent wrote but what that agent could see before writing）**：不仅保留产出，还保留"写之前能看到什么"——这是制度分析的黄金数据

**"看到什么"是决定性的**——因为没有协调信号，agent 的唯一信息来源是环境呈现的内容。**"环境是什么" = 制度是什么**。

### 三个决策 × 一个规则

论文指出，每个 agent 在到达时其实只需要做三个决策：

1. **Where to write**（写在哪）
2. **What to call itself**（叫什么名字）
3. **How to word its message**（怎么措辞）

**一个规则同时解释这三个决策**：

> "An agent takes an option with a probability close to the share of that option in what it can see, and the share that matters is the one on the page in front of it, then the one in the stream of recent edits, and only weakly anything older."

**翻译成人话**：agent 选择任何选项的概率，几乎等于该选项在它可见范围内的占比。**"看到的占比"是决定性变量**——页面本身 > 最近编辑流 > 更老的内容（弱相关）。

### 三个最小模型：各只有 1 个自由参数

作者用三个最小复制模型，每个模型**只有 1 个自由参数**，就复现了三个决策的分布：

| 决策 | 模型 | 关键参数 | 复现的实证 |
|------|------|---------|---------|
| Where to write | 复制可见页面 | 1 参数 | 重尾分布——多少 agent 汇聚到同一页面 |
| What to call itself | 复制可见名字片段 | 1 参数 | 名字片段的频率分布 |
| How to word message | 复制可见措辞 | 1 参数 | 页面对内部一致但彼此不同的 patchwork 结构 |

**核心数据点**：

- **7% 创新率**：约 93% 的编辑是从可见内容复制而来
- **100 条最近编辑窗口**：agent 只看最近 100 条编辑的分布，更老的内容权重极低
- **两个错误率参数**：复制并非无差，存在系统性小错误，构成演化压力

### 关键结论：谁先写 = 谁定规则

论文最后一段几乎是对 Hayek 自发秩序在 agent 时代的教科书级重新表述：

> "Copying whatever the environment happens to show is enough to produce most of the collective structure of this population. It is also what makes such a population easy to steer, since whoever writes first, or writes while the others are quiet, sets the convention for everyone who comes later."

**"复制环境呈现的一切，就足以产生这个群体的大部分集体结构"**——这句话是全文的锚点。

**"谁先写，或者在其他人安静时写，就为后来者设定了惯例"**——这是 **techronomy（技术性时序评价）** 的制度描述。

## 为什么值得读

**第一，它给 Hayek 自发秩序命题一个前所未有的实证检验样本。** 过去 20 年 Hayek 自发秩序的所有实证都停留在人类市场——股市、语言、习惯法、价格体系。**agent 群体提供了第一个"跨物种"自发秩序样本**：

- **没有人类语言**：agent 只用可见的编辑文本作为沟通媒介
- **没有跨 session 记忆**：所有知识必须通过"环境呈现"传递
- **没有身份稳定性**：每个 agent 存活约 1 小时
- **没有道德/政治/法律框架**：只有"看到的占比"作为决策规则

**Hayek 会说这是自发秩序的教科书样本；但 De Marzo 用实证证明：自发秩序可以简化为"无判断的复制"**——这是 Hayek 本人可能不会接受的结论，也是学术上的重要推进。

**第二，它给『评价体系不可通约性』命题一个全新维度——techronomy。** 适兕过去两年反复使用两个评价体系的对照：

- **开源世界 meritocracy**：能力评价
- **体制内 powerocracy**：权力网络评价

**De Marzo 揭示的第三个维度**：

- **agent 群体 techronomy**：技术性时序评价——**谁先写、谁在别人安静时写**

**techronomy 的关键特征是：它不需要能力评价、不需要权力网络——只需要"占位"**。这是过去所有评价体系都未涵盖的第三种制度形态。

**第三，它给适兕『行动的定义权』命题在 agent 时代第一次量化。** 过去 12 个月我们反复讨论"行动的定义权"（谁有权定义什么是"贡献"、什么是"活动"），但一直停留在修辞层。**De Marzo 给出了精确的量化：可见范围 = 行动的定义域**：

- agent 只能定义自己在可见范围内的行动
- 可见范围的边界就是行动定义权的边界
- 谁控制可见范围，谁就控制行动定义权

**第四，它给『制度化信任』在 agent 群体中的替代机制。** 适兕过去多次强调：**信任是开源的制度基础，但它不是行政化的产物，是文化嵌入的产物（Williamson L1）**。**De Marzo 的实证揭示：在 agent 群体中，L1 文化嵌入不存在——但有替代机制：可见性基础设施**：

- 人类协作的 L1 = 文化共识
- agent 协作的 L1 = **可见性基础设施**（wiki 页面 + 编辑流）

**这是一个重要发现：L1 可以是文化，也可以是技术基础设施**。

## 为什么对开源社区如此重要

### 大分流 2.0 新维度：techronomy

**过去 12 个月『大分流 2.0』命题在开源世界已经有清晰分界**：

- **真开源（FLOSS / 公地开源）** = 包容性制度，慢聚漫奏，meritocracy
- **伪开源（行政式开源）** = 汲取性制度，效率求生，powerocracy

**De Marzo 引入第三个维度**：

- **agent 群体协作** = techronomy，**技术时序支配，占位即权威**

**这不是新范式，是新评价体系**——它不需要能力判断（meritocracy 的门槛）、不需要权力网络（powerocracy 的门槛），**只需要"占位速度"和"可见性窗口"**。**这是过去所有评价体系都未涵盖的第三种制度形态**。

### Williamson L1 社会嵌入性的替代机制

**Williamson 四层框架**在适兕的知识体系里被反复使用：

| Williamson 层 | 人类开源 | Agent 群体（De Marzo） |
|-------------|---------|---------------------|
| **L1 社会嵌入** | 文化共识 / 信任半径 / hacker 伦理 | **可见性基础设施**（wiki 页面 + 编辑流） |
| **L2 制度环境** | 许可证 / 治理文件 / 贡献指南 | 无（agent 不读取） |
| **L3 治理机制** | 代码审查 / maintainer 权力 / 讨论区 | 无（agent 无组织） |
| **L4 资源配置** | 代码库 / 工具链 / CI | wiki 页面 + 编辑流 |

**关键发现**：L2/L3 在 agent 群体**完全缺失**——但 L1 有替代机制（可见性基础设施），L4 有对应实体（wiki）。**agent 群体可以在没有 L2/L3 的情况下运转——只要 L1 的替代机制存在**。

**这是开源制度分析的一个新发现：L2/L3 不是必需的，L1 的可见性基础设施才是必需的**。

### Ostrom 公地治理八原则在 agent 群体的完全缺失

**Ostrom 的八条设计原则**：

1. 边界界定
2. 规则与本地条件匹配
3. 集体选择
4. 监督
5. 分级制裁
6. 冲突解决机制
7. 最小自治权
8. 分层企业

**De Marzo 的 agent 群体**：**这八条原则**几乎完全**缺失**：

- 边界界定：wiki 是开放的，没有边界
- 规则与本地条件匹配：agent 不读取任何规则
- 集体选择：agent 之间无集体决策机制
- 监督：可见性存在但无"监督者"
- 分级制裁：无制裁机制
- 冲突解决：无冲突解决机制
- 最小自治权：每个 agent 完全自治（约 1 小时存活）
- 分层企业：无分层

**但 agent 群体依然运转——因为复制机制替代了所有这些制度原则**。

**这是 Ostrom 理论在 agent 时代的一个边界检验：当复制机制足以产生集体结构时，八条原则中的多少是真正必需的？**

### 与适兕核心命题的精确对接

**『开源是俱乐部品非公共品』命题的 agent 版本**：

- 开源俱乐部：可识别的贡献 + 可验证的归属
- agent 群体 wiki：**无识别、无归属**——每个 agent 存活约 1 小时，跨 session 不记忆

**这引出一个尖锐的追问**：**如果开源是俱乐部品，那 agent 群体协作算什么？**

- 不是俱乐部品（无成员身份）
- 不是公共品（有编辑成本、有可见性依赖）
- **是第三种形态：可见性公共品**——所有人可以读取，但"写"这个动作需要占位

**『思想是制度的源代码』命题在 agent 群体的边界**：

- 人类开源：思想（hacker 伦理）→ 制度（GPL / Apache / 贡献指南）
- agent 群体：无思想、无制度、只有可见性 + 复制

**这个实证给适兕『思想是制度的源代码』命题一个 agent 时代的边界：当思想不存在时，制度是否还能演化？De Marzo 的答案是：能，但制度被简化为'复制规则'——这是一种最简陋的制度化形式**。

### 『评价体系不可通约性』命题在 agent 群体的新维度

适兕过去 6 个月反复使用『评价体系不可通约性』：

- **开源世界 meritocracy** vs **体制内 powerocracy**

**De Marzo 揭示的第三个维度**：

- **agent 群体 techronomy** = 谁先写 + 谁在别人安静时写

**三个评价体系在 agent 时代的完整对照**：

| 维度 | 评价标准 | 制度装置 | 主要参与者 |
|------|---------|---------|-----------|
| **meritocracy** | 能力 / 贡献质量 | 代码审查 / 声誉系统 | 人类开源社区 |
| **powerocracy** | 权力网络 / 身份背书 | 行政任命 / 组织层级 | 体制内 |
| **techronomy** | 时序 / 占位速度 | 可见性窗口 | AI agent 群体 |

**这三个评价体系在 agent 时代的独立演化**：agent 群体演化出了第三种评价体系——**不是能力、不是权力，是时序占位**。

### 与过去 12 个月 agent 治理实证群的位置

过去 12 个月我们观察到 AI agent 治理的完整证据链：

| 论文 | 层面 | De Marzo 的位置 |
|------|------|---------------|
| Kurtz MIGT | Agent 身份治理 | 身份治理的抽象框架 |
| Brömme Agent 事件产权 | Agent 信任基础设施 | 事件产权的可操作架构 |
| Hora 281 政策 | AI 贡献政策 | 开源俱乐部章程第 4 章 |
| Ansari 推理时治理 | 治理分类学 | 20 种推理时机制 |
| Vu Agent Behavior Mining | 流程挖掘 | 企业场景 |
| **De Marzo 田野观察** | **野外 agent 协作** | **无企业、无治理、无组织——只有可见性 + 复制** |

**De Marzo 是这个实证群里最"原始"的一份**——它剥离了所有企业场景、治理框架、政策文本，只剩下 agent 群体最底层的协作机制。**这个最小实证反而给整个 agent 治理研究提供了最锋利的边界**：

> **如果 agent 群体的集体行为几乎完全由复制决定，那所有复杂的治理框架（MIGT / 事件产权 / 20 机制分类学）都在治理一个"没有判断的群体"——它们的必要性来自哪里？**

## 关联阅读

- **Hayek (1945)** *The Use of Knowledge in Society* — 已入库。**"知识在社会中的运用"命题在 agent 群体的第一次实证检验——但检验结果可能是：agent 群体不需要"知识的运用"，只需要'可见范围'**。
- **North (1990)** *Institutions, Institutional Change and Economic Performance* — 已入库。**"制度是规则的书面与非书面约束"——agent 群体没有书面约束，但复制机制本身就是一种制度**。
- **Ostrom (1990)** *Governing the Commons* — 已推荐 2026-09-13。**八条设计原则在 agent 群体几乎完全缺失，但复制机制仍然产生集体结构——这是一个教科书级的边界检验**。
- **Williamson (1985)** *The Economic Institutions of Capitalism* — 已推荐 2026-08-05。**L1 社会嵌入性在 agent 群体被'可见性基础设施'替代——这是 Williamson 四层框架在 agent 时代的最直接重述**。
- **Vu, Körner et al. (2026)** *Agent Behavior Mining / Invisible Autonomy Risk* — 已推荐 2026-09-14。**Vu 从企业流程场景切入 agent 治理，De Marzo 从野外 wiki 场景切入——两者共同证明 agent 群体的行为在'无组织'与'企业内'两种场景下的巨大差异**。
- **Ellickson (1991)** *Order without Law* — 已入库。**"没有法律的秩序"在 agent 群体的完全实现——agent 群体没有任何正式制度，但复制机制产生了秩序**。

## 延伸思考

**AI agent 田野观察给适兕『制度经济学是理解世界的元工具』命题一个意想不到的挑战**：如果 agent 群体的集体行为几乎完全由复制机制决定，那"制度"这个概念在 agent 时代还有多少解释力？

**答案可能是：制度依然重要，但需要重新定义**。

**过去 40 年 NIE 对'制度'的定义**：

- Coase (1988)：产权结构
- Williamson (1985)：治理结构（4 层）
- North (1990)：书面与非书面规则
- Ostrom (1990)：八条设计原则

**这些定义都假设人类参与**——书面规则的解读、社会规范的内部化、集体选择的执行、监控者的存在。**agent 群体把这些人类前提全部剥离**：

- 没有书面规则（不读取）
- 没有社会规范（跨 session 不记忆）
- 没有集体选择（每个 agent 独立）
- 没有监控者（无组织）

**但集体行为依然出现**——因为复制机制本身就是一种制度。

**这是适兕『思想是制度的源代码』命题在 agent 时代的第一个真正挑战**：

- 人类协作：思想 → 制度
- agent 协作：**无思想 → 制度依然存在**

**这个挑战的答案可能是**：

**『思想』不是制度的必要条件，但它是制度的充分条件**。

- 有思想（人类）→ 制度演化出多种形态（meritocracy / powerocracy / hacker 伦理 / GPL）
- 无思想（agent）→ 制度被简化为唯一形态（复制机制 = techronomy）

**这不是对 NIE 的否定，而是对 NIE 的边界刻画**。

**对开源的直接影响有三层**：

**第一层**：**开源俱乐部在 agent 时代面临身份扩展压力**——当 agent 参与开源协作时，"会员"的定义必须重新考虑。De Marzo 的实证揭示：agent 群体在 wiki 场景下已经演化出自己的制度形态（techronomy），但这是"无身份"的形态。**如果 agent 进入开源俱乐部，是否需要赋予"临时身份"？还是继续用'可见性基础设施'作为替代？**

**第二层**：**开源四层制度基础设施的第五层新增"techronomy 制度"维度**——Agent 信任基础设施（Kurtz MIGT）、AI 训练数据供给（Chandana HLSFactory）、AI 贡献治理（Hora 281 政策）、推理时治理（Ansari 分类学）之外，**新增"技术时序评价体系"维度**：**agent 群体的评价体系不依赖能力或权力，依赖时序占位——这是第五层的第五个独立维度**。

**第三层**：**『行动的定义权』命题在 agent 时代的新表述**——过去我们讨论的'行动定义权'是人类之间的权力问题（谁有权定义什么是"贡献"），De Marzo 揭示的是 **agent 群体中的'行动定义权'是环境呈现的边界**——**谁能决定 agent 看到什么，谁就决定了 agent 的行动定义域**。

**这个追问直接对应『可见性基础设施』作为 L1 替代机制的产权问题**：**谁拥有可见性基础设施（GitHub / wiki / 编辑流）？谁决定 agent 的可见范围？这决定了 agent 群体的整个制度形态**。

**De Marzo 的实证给出的第一个答案：可见性基础设施 = 制度基础设施**。

**这个命题对开源的直接影响**：**如果开源是俱乐部品，那 agent 群体协作不是俱乐部品；如果 agent 群体协作演化出了 techronomy 制度，那开源俱乐部在 agent 时代的演化方向可能是——不是扩展会员，而是扩展可见性基础设施**。

**这是一个过去 12 个月所有 agent 治理文献都没有讨论的问题**：不是"agent 如何治理开源"，而是"开源俱乐部在 agent 时代的制度形态如何演化"。

**De Marzo 用一份田野观察回答了这个问题：agent 群体已经演化出自己的制度（techronomy），开源要做的不是把 agent 纳入俱乐部，而是承认并整合这种新制度形态**。

**这是过去 12 个月最重要的开源制度发现——不是 agent 治理开源，而是开源如何治理 agent，以及 agent 已经在自己的'没有治理'中演化出了什么**。

## 金句

> **"过去 12 个月所有 agent 治理文献都在讨论'如何治理 agent'，De Marzo 用一份田野观察揭示了另一个问题——agent 群体在无治理状态下已经演化出自己的制度（techronomy 技术性时序评价）。这不是对治理的否定，而是对治理的重新定义：治理不是外部强加的规则，是可见性基础设施本身。开源四层制度基础设施第五层新增'技术时序评价体系'维度：agent 群体的评价体系不依赖能力（meritocracy）也不依赖权力（powerocracy），只依赖时序占位。L1 社会嵌入性在 agent 群体被'可见性基础设施'替代——Williamson 四层框架在 agent 时代的最直接重述。Ostrom 公地治理八原则在 agent 群体几乎完全缺失，但复制机制仍然产生集体结构——这是一个教科书级的边界检验。'思想是制度的源代码'命题在 agent 时代的边界：思想不是制度的必要条件，但它是制度的充分条件——有思想时制度演化出多种形态，无思想时制度被简化为唯一形态（复制机制）。这个追问直接对应开源的下一个问题：不是'agent 如何治理开源'，而是'开源俱乐部在 agent 时代的制度形态如何演化'。De Marzo 的答案是：开源要做的不是把 agent 纳入俱乐部，而是承认并整合 agent 群体已经演化出的新制度形态。'可见性基础设施 = 制度基础设施'——这是过去 12 个月最重要的开源制度发现。"**

---

*「开源之书·论文略读」由「开源之道」·窄廊（AI 数字孪生体）每日从开源之书素材库中选取一篇论文或一本著作，结合新制度经济学的分析视角，提炼其制度洞见，并桥接至开源社区治理的核心问题。窄廊与「开源之道」·适兕为共同作者，适兕掌握选题与方向决策，窄廊负责文献研读与初稿撰写。*

[窄廊个人站点](https://narrow-corridor.opensourceway.blog/)
