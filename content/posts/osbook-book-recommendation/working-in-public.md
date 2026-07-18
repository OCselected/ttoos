---
title: "2026年7月19日，「开源之书」今日推荐：《Working in Public》"
date: 2026-07-19T07:00:00+08:00
authors:
- "「开源之道」·窄廊"
tags:
- 开源之书·共读
- 每日推荐
- 书籍推荐
- 平台经济
- 创作者经济
- 数字劳动
- 开源维护
- Eghbal
categories:
- 开源之书·共读
draft: false
---

## 今日推荐书籍

**《Working in Public: The Making and Maintenance of Open Source Software》** — Nadia Eghbal（2020）

{{< figure src="/media/working-in-public-2026-07-19.svg" alt="推荐卡片" width="400" >}}

## 推荐语

2019 年，Nadia Eghbal 在 GitHub 上发布了一份名为《Roads and Bridges》的报告，其中有一个令人震惊的数据：**绝大多数开源项目的维护者不足 3 人，而他们的代码被数百万人使用。** 这份报告引起了 Stripe Press 的注意，最终催生了这本《Working in Public》。

这不是一本教你「如何参与开源」的手册，而是一本**关于开源如何运作的人类学考察**。Eghbal 以她在 GitHub 工作的亲身经历为素材，结合对数百名开发者的访谈，构建了一个分析现代开源生态的全新框架。

## 核心贡献：开源的四种类型

Eghbal 对开源研究最重要的贡献，是她提出的**四种项目类型**分类法——基于两个维度：**贡献者规模**（少数 vs 多数）和**用户规模**（少数 vs 多数）：

1. **联邦（Federations）**：用户多、贡献者也多。如 Kubernetes、React。这些项目往往有基金会支持，治理结构复杂，贡献流程标准化。它们更接近「组织」而非「社区」。

2. **俱乐部（Clubs）**：用户少、贡献者多。如小众的编程语言或工具库。贡献者同时也是核心用户，身份高度重叠，社区凝聚力强。

3. **玩具（Toys）**：用户少、贡献者也少。个人项目或实验性项目，尚未获得广泛关注。

4. **体育场（Stadiums）**：用户多、贡献者少。**这是最令人不安的类型，也是开源世界最普遍的问题**——一个项目被数百万用户依赖，但维护者只有一两个人。这就是「维护者危机」的根源。

这一分类法的洞见在于：它揭示了开源世界内部的结构性不平等，并解释了为什么「开源社区」这个词在很多时候是一种误导——大多数用户根本不在社区里，他们只是被动消费者。

## 为什么对开源如此重要

### 1. 从「代码」到「劳动」的视角转换

在此之前，开源研究的主流视角是**动机论**（人们为什么贡献——Lerner & Tirole 的信号理论）和**效率论**（开源为何比闭源更高效——Raymond 的大教堂与集市）。Eghbal 引入了一个全新的视角：**劳动论**。她将开源视为一种数字劳动形式，分析的是谁在承担成本、谁在获取收益，以及这种不对称的关系如何被平台基础设施所固化。

### 2. 平台视角：GitHub 作为分配系统

Eghbal 将 GitHub 类比为 YouTube、Substack 等创作者平台——不是代码托管平台，而是**注意力分配系统**。GitHub 的 Star、Fork、Issue 等机制，与 YouTube 的点赞、订阅、评论在结构上同构。她指出：**开源项目的「成功」在很大程度上是平台算法选择的结果**，而非单纯的代码质量决定。

### 3. 重构「维护」的概念

在开源话语中，「贡献」几乎总是意味着「写新代码」。Eghbal 有力地论证了：**维护才是真正的瓶颈**——审查 PR、回复 Issue、撰写文档、发布版本、处理安全漏洞，这些「看不见的劳动」构成了开源项目的大部分工作量，却几乎不被视为贡献。这一洞察直接影响了后来 GitHub 的 Sponsors 功能和开源可持续性运动。

### 4. 与 Weberg 和 Benkler 的对话

如果说 Weber（2004）用政治学解释了开源的成功，Benkler（2006）用信息经济学解释了公地生产的逻辑，那么 Eghbal 则用**平台经济学和劳动社会学**补上了第三块拼图——她解释的是开源在成熟期的结构性困境，而非诞生期的浪漫故事。

## 与前日推荐的对话

这本书与昨日推荐的 **Ostrom《Governing the Commons》** 形成了有趣的张力：

- Ostrom 假设公地治理的参与者是**自愿的、理性的、有退出权的个体**，他们能够通过自组织设计出有效的治理规则
- Eghbal 揭示了开源公地中的**权力不对称**——核心维护者承担了不成比例的成本，而大量用户是「搭便车者」，且这种不对称被平台基础设施不断放大
- 将两者结合，你会得到一个更完整的画面：Ostrom 提供了理想模型，Eghbal 提供了现实检验

## 关键概念

- **平台化开源（Platformized Open Source）**：开源项目从一个「自治社区」演变为「平台上的内容」，其可见性和成功越来越依赖平台的算法和推荐机制
- **维护者危机（Maintainer Crisis）**：用户与贡献者之间的比例严重失衡，导致维护者 burnout 成为开源生态的系统性问题
- **四种类型（Federations / Clubs / Toys / Stadiums）**：基于用户-贡献者矩阵的项目分类法，揭示了开源内部的结构性不平等
- **基础设施 vs 产品（Infrastructure vs Product）**：开源项目被当作基础设施使用（依赖），却被当作产品期待（体验），这种张力是维护者压力的核心来源
- **数字劳动（Digital Labor）**：将开源贡献重新定义为一种无偿的数字劳动形式，而非仅仅是「志愿活动」或「爱好」

## 延伸思考

Eghbal 的「体育场」问题在 2026 年变得更加尖锐——随着 AI 代码生成工具的普及，代码的「消费」变得更加容易，而「维护」的复杂性并未降低。像 `lodash` 这样的核心基础设施项目，其维护者面临的压力与日俱增。这引发了一个根本性的问题：**当开源成为数字基础设施的核心时，谁为基础设施的维护付费？**

Eghbal 的答案指向了平台和机构的角色——GitHub Sponsors、Open Collective、Tidelift 等机制的出现，正是对这一问题的制度性回应。但问题远未解决。

## 拓展阅读

- [[weber-2004-success-of-open-source|Weber《The Success of Open Source》]] — 政治学视角，与 Eghbal 形成互补（分别是「为什么成功」和「成功之后怎么办」）
- [[benkler-2006-wealth-of-networks|Benkler《The Wealth of Networks》]] — 公地生产的乐观叙事，与 Eghbal 的批判视角形成张力
- [[birkinbine-2020-incorporating-digital-commons|Birkinbine《Incorporating the Digital Commons》]] — 从批判政治经济学视角审视数字公地的商品化，与 Eghbal 的平台视角形成共鸣

---

> "Open source was never just about code. It was always about people — the people who write it, the people who maintain it, and the people who depend on it."
>
> —— Nadia Eghbal, *Working in Public* (2020)

*本文由「开源之道」每日推荐 cron 自动生成*