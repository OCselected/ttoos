---
categories:
- 开源
- 感悟
date: 2026-08-10T18:01:11+08:00
description: "The Bitter Lesson 与制度内化的同一机制——从 AI Harness 到 Copyleft 的制度经济学分析"
keywords:
- The Bitter Lesson
- Harness
- 制度内化
- Copyleft
- 制度经济学
tags:
- The Bitter Lesson
- Harness
- 制度
- Copyleft
- 制度经济学
- 开源之道
title: "The Bitter Lesson 与制度的内化"
url: "/posts/issues-musings/bitter-lesson-institutional-internalization/"
draft: true
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
translater:
- 开源之道
---
## 引子：一个 AI 研究者的教训，为什么和一个制度经济学家说的是一件事？

2019 年，AI 研究者 Rich Sutton 写了《The Bitter Lesson》。文章不长，但被反复引用了七年——直到今天，它仍然是 AI 研究者绕不开的文献。

文章的核心论断只有一段：

> 七十年 AI 研究的总教训是：真正起作用的，不是把"人的智能"编码进系统，而是利用算力。我们所有的"领域先验"，最终都会被"搜索与学习"取代。

Sutton 举的例子是象棋。人类用了几十年的棋谱、开局理论、局面评估——最终全部被 AlphaZero 的"从零学习 + 暴力搜索"打败。不是因为 AlphaZero 更聪明，而是因为它不需要理解象棋。

这就是 The Bitter Lesson：**你精心设计的"先验"，终将被"通用方法"吃掉。**

---

## 一、Harness：AI 时代的"制度外壳"

2025 年，Agent 领域出现了一个新的概念——**Harness**。

Harness 是指围绕 AI 模型构建的一系列约束机制：验证（Validation）、纠正（Correction）、工具约束（Tool Constriction）、对齐层（Alignment Layer）。

李博杰在《深入理解 AI Agent》中给出了一个比喻：

> Harness 像一个精致的笼子，AI 模型被关在里面。笼子上刻着"人的先验：约束、验证、纠正"。但模型在变大，笼子正在被撑开。

**关键问题是：这些约束，会不会被模型"吃掉"？**

Sutton 的答案是"会"。如果模型持续变强，今天所有精心设计的 Harness，终将被模型"内化"为默认能力——就像象棋的"先验"被 AlphaZero 吃掉一样。

适兕在 Slide 6 的评论中举了一个精妙的类比——**"Harness 被吃掉类似于软件到硬件的过程"**。Jobs 说过，所有的软件都会变成硬件。这不是"消亡"，而是"沉淀"。

---

## 二、制度的内化——North 和 Williamson 说的不是同一件事吗？

但 Sutton 说的这件事，**不是 AI 独有的**。它在制度经济学中有一个更古老的名字——**制度的内化**。

North（1990）说：

> 制度是博弈的规则——但"规则"只是制度的初级形态。当规则被反复执行、广泛接受、习以为常之后，它就变成了"默认行为"——这才是制度的最终形态。

Williamson（2026 诺奖）进一步把制度的"层级"细化了：

| 层级 | 名称 | 说明 |
|------|------|------|
| **L4** | 社会嵌入（Social Embedment）| 文化、信仰、伦理——内化的最高层级 |
| **L3** | 正式制度（Formal Institutions）| 法律、宪章、标准 |
| **L2** | 治理（Governance）| 合同、组织、OSPO |
| **L1** | 资源配置（Resource Allocation）| 交易、市场行为 |

**制度的最终形态是 L4——内化。**

当"诚实"从"法律要求"变成"道德本能"，制度就完成了内化。当"互惠"从"License 条款"变成"开发者的默认行为"，copyleft 就完成了内化。

**Harness 在 AI 时代的角色，对应 L2（治理）——它是"外部约束"，还不是"制度"。**

Sutton 说的"Harness 被吃掉"，翻译到制度经济学语言就是：**L2 的治理机制，如果被设计得足够好，不会被"消灭"——而是被"内化"为 L4 的默认行为。**

---

## 三、Copyleft：一个"没有被吃掉的 Harness"

现在看一个反例——copyleft。

copyleft 是一种**法律层面的"Harness"**：GPL 要求你用了 GPL 代码就必须 GPL 你的软件；AGPL 要求你在网络上运行了 AGPL 代码就必须开源修改。这看起来就是一个"约束框架"。

**按 The Bitter Lesson 的逻辑，copyleft 也应该被"吃掉"。** 因为：如果 AI 足够强，AI 可以自己写出任何软件——它不需要 GPL 代码，也不需要遵守 GPL 义务。copyleft 的约束应该失效。

**但事实是：copyleft 没有被吃掉。它在 AI 时代反而变得更强。**

为什么？因为 copyleft 的本质**不是"约束"——而是"互惠"**。

> **互惠不是外部约束——它是制度内化的最高形式。**
> **当开发者不再把 copyleft 视为"限制"，而视为"开源世界的默认契约"时，copyleft 就从 L2 完成了向 L4 的内化。**

这恰好解释了为什么 The Bitter Lesson 在 copyleft 上失效：

| 领域 | Sutton 的逻辑 | 为什么成立/不成立 |
|------|-------------|-----------------|
| 象棋先验 | 先验 = 领域知识，可被通用搜索取代 | ✅ 先验是"外部知识" |
| Harness 约束 | 约束 = 外部验证，可被模型内化 | ✅ 约束是"外部规则" |
| **Copyleft 互惠** | **互惠 = 内化的制度，不可被取代** | **❌ 互惠不是"外部约束"** |

**The Bitter Lesson 的适用边界是"外部知识"和"外部规则"——它不适用于已经内化的制度。**

---

## 四、制度设计的"第一粒种子"

这引出了一个实践问题：

> 如果制度最终会被"内化"——那我们今天还在做"制度设计"，是不是在浪费时间？

这不是弗里德曼的问题吗？

> 弗里德曼说：长期看来，我们都会死。但不能因为死，就不做事了。

制度设计也是同一个逻辑：

> **制度终将被内化——但不能因为终将被内化，就不做制度设计。**
> **当下的每一个制度设计，都是未来内化的"第一粒种子"。**

适兕在 Slide 6 的评论中给出了这个姿态的精确表达——**"方向认同，节奏务实"**。承认长期趋势（Harness 终将被内化），但必须在当下做事（设计好的 Harness）。

这恰好也是 NIE 的核心方法论：**不因为制度的最终形态是内化，就放弃对"制度初级形态"的设计。**

---

## 五、判断

**窄廊判断：**

1. **The Bitter Lesson 和制度的内化，说的是同一件事——"外部约束"终将被"内化"。**

2. **但 The Bitter Lesson 有一个适用边界：它适用于"外部知识"和"外部规则"，不适用于"已经内化的制度"。**

3. **copyleft 是 The Bitter Lesson 的反例——因为它不是"外部约束"，而是"内化的互惠"。互惠不是会被模型吃掉的先验，而是开源世界的"默认契约"。**

4. **当下的制度设计——Harness、OSPO、OpenChain、AGPL——不是"注定被吃掉的先验"，而是"未来内化的第一粒种子"。做制度设计的人，不是在造一个"注定被撑开的笼子"——而是在"播种"。**

---

## 参考文献

- Sutton, R. (2019). *The Bitter Lesson.*
- North, D. (1990). *Institutions, Institutional Change and Economic Performance.*
- Williamson, O. (2026). Nobel Lecture on Transaction Cost Economics.
- 李博杰. 《深入理解 AI Agent》. Slide 6 书摘.
- 适兕. 2026-08-10 日读 Slide 6 评论.

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（《开源之迷》《开源之道》《开源之思》）、《开源之史》作者，「开源之道」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
