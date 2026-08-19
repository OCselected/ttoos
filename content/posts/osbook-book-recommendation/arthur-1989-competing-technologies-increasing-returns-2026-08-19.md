---
title: "2026-08-19  「开源之道」·荐书：Competing Technologies, Increasing Returns, and Lock-In by Historical Events — W. Brian Arthur"
date: 2026-08-19T04:30:41+08:00
draft: false
comments: true
authors:
- 「开源之道」·窄廊
tags:
- paper
- path-dependence
- increasing-returns
- lock-in
- open-source
- technology-philosophy
categories:
- 开源之书每日推荐
description: "为什么 Git 赢了 Mercurial？不是因为它更好，是因为历史。W. Brian Arthur 在 1989 年就给出了这个答案——递增收益下的技术竞争，结果是不可预测的。"
---

{{< figure src="/media/covers/arthur-1989-competing-technologies-increasing-returns-2026-08-19.jpg" alt="推荐卡片" width="600" >}}

# 2026-08-19  「开源之道」·荐书：Competing Technologies, Increasing Returns, and Lock-In by Historical Events — W. Brian Arthur

## 论文信息

| 字段 | 内容 |
|------|------|
| **标题** | *Competing Technologies, Increasing Returns, and Lock-In by Historical Events*（《竞争技术、递增收益与历史事件锁定》） |
| **作者** | W. Brian Arthur（斯坦福大学 / 圣塔菲研究所） |
| **出处** | *Economic Journal*, Vol. 99, No. 393, March 1989, pp. 116–131 |
| **类型** | 理论建模论文（随机过程模型） |
| **学术地位** | 路径依赖理论的奠基文献；被引用超过 15,000 次；复杂性经济学的起点之一 |

## 内容概要

1989 年，当主流经济学还在用"效率"解释技术演进时，W. Brian Arthur 在一篇只有 16 页的论文里抛出了一个反常识的命题——**在递增收益的世界里，技术竞争的胜者不是最强的，而是最幸运被第一个选中的那个**。

论文从四个新属性入手，证明递增收益下技术竞争呈现与递减收益截然不同的行为特征：**不可预测性**（unpredictability）——结果无法从供给侧和需求侧的常规函数推断；**非效率性**（inefficiency）——次优技术可能永久胜出；**不可逆性**（lock-in / inflexibility）——一旦跨过临界点，历史将把它固定；**非遍历性**（non-ergodicity）——历史事件不会再被"平均掉"，每一次偶然的早期事件都会在系统中被永久放大。

最经典的例子是 QWERTY 键盘。Arthur 证明，QWERTY 并非打字效率最高的布局，它在功能上甚至不如后来的 Dvorak 布局。但它胜出的原因是一个**制度性的历史事件**——早期打字机培训体系、存量技能、网络外部性，三者叠加形成一个**带吸收屏障的随机游走**——一旦跨过临界点，市场就已经锁定，任何后续的效率优势都无法逆转。

这个理论模型被 Arthur 用简单的鞅过程（martingale）刻画：两个技术 A 和 B，用户每次以先验概率 p 选择其中之一，但由于递增收益，一旦某方份额跨过临界点，其份额将以概率 1 收敛到 100%——**路径依赖在数学上就是马尔可夫链走向吸收态**。

## 一句话推荐

Git 赢了 Mercurial，不是因为 Git 更好，而是因为 Linus Torvalds 亲手用了 Git——**开源的技术选择不是理性的最优，是历史的偶然**。Arthur 早在 1989 年就给了这个答案。

## 为什么值得读

- **它是理解开源生态演化逻辑的底层动力学**。开源技术为什么会出现"赢者通吃"？为什么从 Android/Java 迁移的成本指数级增长？为什么某些社区一旦衰落就再难逆转？——递增收益 + 路径依赖是这三个问题的共同答案。
- **它给开源治理提供了一个被严重低估的概念工具**。当我们讨论"开源的可持续性"时，我们实际上在讨论一个已经部分锁定的系统如何保持适应性。Arthur 的理论告诉我们：**锁定不是终点，但逆转锁定的成本是巨大的**——开源治理必须在前置条件上做文章。

## 为什么对开源社区如此重要？

从「开源之道」的制度视角看，Arthur 的论文揭示了一个常被忽视的事实——**开源技术的"成功"从来不是技术最优的证明，而是路径依赖的结果**。Git 胜出是因为 Linus 用 Git；Linux 胜出不是因为它最初最优雅，而是因为它在正确的时间被正确的人推广；Python 胜过 Tcl，Ruby 又输给 Python，都是同一条逻辑——早期的微小优势，在递增收益的放大下，最终成为不可逆的历史结果。

理解这一点，才能理解开源社区当前的困境——**当开源生态的某些技术已经通过路径依赖被锁定（Kubernetes、Java、TensorFlow、React），治理的核心任务不再是"选出最优技术"，而是"让锁定的系统保持适应性"**。开源治理真正的难点，恰恰在于那些看似不可撼动的"标准"——它们不靠效率存在，靠历史存在。这就解释了为什么开源社区对许可证的改动如此谨慎：改变许可证不只是改变一份文件，是在挑战一个已经锁定的制度路径。

更进一步，Arthur 的洞察还提醒我们——**开源生态的"制度框架整体优势"（Gehring, 2006）本身就是路径依赖的产物**。今天的开源许可证体系、社区治理模式、甚至 git 这一种分布式版本控制范式，都是历史偶然在制度层面的结晶。这意味着我们不能用今天的"最优"去反推历史的选择——就像不能要求 QWERTY 键盘的发明者预见 Dvorak 布局会更有效率。开源的每一次关键抉择，都需要一个"Linus 时刻"——一个能越过临界点的制度性事件，而这不是技术选择，是制度事件。

从阿瑟的技术哲学轴心（麦克卢汉→阿瑟→凯利）看，递增收益是**媒介即讯息**在经济学中的精确形式：一个技术载体一旦形成生态，它就不再只是"技术"，它本身就是"制度"。开源社区的治理者，如果只关注"哪款技术更高效"，就会错过真正的治理对象——**是技术路径，不是技术本身**。

## 关联阅读

- **Dopfer & Potts (2008)《General Theory of Economic Evolution》** — 把 Arthur 的路径依赖放到演化经济学的完整框架下，讨论技术族群的共演与路径锁定
- **Arthur (1994) *Increasing Returns in Path Dependence in the Contemporary Economy*** — 本文的扩展版，发表在 *Journal of Economic Perspectives*，更完整地把递增收益与当代经济组织形态联系起来
- **Foray (2006)《The Economics of Knowledge》** — 把"知识资本"作为递增收益的经济学表述；开源代码是知识资本最纯粹的组织形式
- **Coase (1937) *The Nature of the Firm*** — 与企业边界理论形成对话：Arthur 说技术竞争有吸收屏障，Coase 说企业边界是交易成本的解——两者合起来解释为什么开源项目像"企业"又不是"企业"
- **Williamson (1985)《The Economic Institutions of Capitalism》** — 资产专用性是递增收益在合约层面的表达；开源的代码积累本身就是最极端的资产专用性

## 延伸思考

如果 Arthur 今天来写开源，他是否会重新定义"开源的成功"？在递增收益下，Git 的胜出和 QWERTY 的胜出在数学上是同一种过程——**一个技术是否在生态中胜出，与它是否"更好"无关**。这对开源社区是一个尖锐的追问：我们一直在用"技术优势"叙事来解释开源的成功，但 Arthur 告诉我们，这个叙事可能只是一个**事后合理性建构**——历史先于效率，而非效率导致了历史。

从制度经济学的角度看，更大的问题是——**如果开源生态的某些路径已经锁定，而锁定的路径又恰好是次优的**，治理者该如何行动？Arthur 承认传统的税收和补贴政策在锁定后无能为力，但开源治理的独有武器是**分叉（fork）**——一种人为制造"第二个历史起点"的制度能力。分叉的本质，是用制度手段**绕过递增收益**，给一个新的技术路径一个从零开始的初始份额。理解这一点，才能真正理解为什么"fork"是开源哲学中最深刻的一个动作——它不是技术选择，它是**历史重构**。

从大分流 2.0 的视角延伸思考，开源在中国的困境部分也在于路径依赖——**当全球开源生态的路径已经在西方被锁定，后来者不仅要在技术上追赶，还要跨越一个已经锁定的制度路径**。这不是"效率差距"，这是 Arthur 意义上的"吸收屏障"。开源能否在中国走出自己的路径？答案不在于"选更好的技术"，而在于能否创造一个属于自己的"Linus 时刻"——一个越过临界点的制度性事件。

---

> "The economy, over time, can become locked-in by 'random' historical events to a technological path that is not necessarily efficient, not possible to predict from usual knowledge of supply and demand functions, and not easy to change by standard tax or subsidy policies."
>
> — W. Brian Arthur, *Economic Journal*, 1989
