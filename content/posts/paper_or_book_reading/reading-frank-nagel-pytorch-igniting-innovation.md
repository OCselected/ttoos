---
categories:
- 开源
- 哲学
- 智识
- 思考
date: 2026-04-04T14:11:57+08:00
description: "通过这篇文献，Nagle 实际上揭示了现代人类大规模协作的最高法则：在复杂知识网络中，权力的分散往往带来系统的涌现；想要获得一切，首先要学会放弃。当你代入这个视角，再回头看你日常工作中所设计的协作机制、或者"
keywords:
- Open Source
- Culture
- Reading
- Insight
tags:
- 洞察分析
- 开源之道
title: "【阅读札记】深度解析Frank Nagle论文之一：《点燃创新：来自开放式协作中的 PyTorch 关于技术控制的证据》"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
---

![](/images/2026/reading-frank-nagel-pytorch-igniting-innovation.png)

## 作者按

新制度经济学的学者们，总是想从开源世界挖掘出人类社会行进中的真理：是什么让开源运行？ 对于Frank Nagle 教授而言，企业参与是他研究的领域，今天我们就尝试切换到哈佛商学院 Frank Nagle 教授的视角，站在战略管理与数字经济学的前沿，来重新审视那篇经典的《Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration》。

***

### 🎓 教授视角阐述：Frank Nagle 的内心独白与学术推演

#### 1. 我为什么要做这件事？（研究动机）
“作为一名在哈佛商学院研究战略的学者，我每天都在面对一个**经典的战略学悖论**。

过去一百年，迈克尔·波特（Michael Porter）等前辈教导全世界的企业家：竞争优势来源于‘建立护城河’、‘保护知识产权’和‘掌握绝对控制权’。
但在数字时代，我看到硅谷的巨头们（如 Google、Meta、微软）每年砸下数亿美元研发最底层的技术基础设施，然后不仅把源代码免费公开（开源），甚至还要**把项目的‘控制权和治理权’拱手让给一个非营利组织（如 Linux 基金会）**。

这在传统经济学家眼里简直是疯了。为什么一家企业要花重金打造一个武器，然后把发射按钮交给别人？
我做这项研究的根本目的，就是要用严谨的计量经济学数据，向我的商学院同行和全球的 CEO 们证明：**在现代数字协作中，‘放弃控制权’不仅不是做慈善，而是一种极其高阶的、能够攫取平台垄断地位的竞争战略。**”

#### 2. 我回顾了哪些案例与理论？（文献与历史背景）

“在切入 PyTorch 之前，我必须站在巨人的肩膀上。我梳理了三条理论脉络：

* **不完全契约理论（Incomplete Contracting）：** 经济学常识告诉我们，当两家公司合作时，如果合约无法规定所有细节，处于弱势的一方就会面临‘敲竹杠（Holdup）’风险。
* **平台治理理论（Platform Governance）：** 前人研究了（比如苹果 iOS 与安卓的对比），平台发起人需要多大程度的控制权才能保证质量，又需要多大程度的开放才能吸引开发者。
* **企业参与开源的历史演进：** 我回顾了 IBM 当年如何通过投资 10 亿美元给 Linux 来打击微软的垄断；我也回顾了 Hadoop、Kubernetes 等项目的演化。我发现了一个规律：**单纯的‘代码开源’已经不够了，企业开始在‘治理结构’上做文章。** 但学术界一直缺乏一个完美的‘自然实验’来量化‘治理权转移’带来的真实收益。”


#### 3. 试图通过 PyTorch 证明什么？（核心发现与实证）

“天赐良机，AI 深度学习框架的大战为我提供了一个完美的对照组：**Google 的 TensorFlow vs. Meta 的 PyTorch。**

TensorFlow 占据了先发优势，但 Google 采取了‘仁慈独裁者’的治理模式——代码是开源的，但路线图和合并权限牢牢抓在 Google 员工手里。
Meta 则是后来者，为了破局，他们走了一步险棋：将 PyTorch 的治理权全面移交给中立的 Linux 基金会。

通过抓取 GitHub 上数以百万计的提交（Commits）、拉取请求（PR）和 Issue 数据，我通过**双重差分法（DID）**证明了以下几个极其震撼的结论：

* **信任的经济学价值：** 当 Meta 放弃控制权后，PyTorch 迎来了外部贡献的**爆发式（Igniting）增长**。为什么？因为中立的基金会消除了竞争对手的‘被敲竹杠恐惧’。
* **‘友商’的反叛与结盟：** 只有在 PyTorch 移交基金会后，微软、AWS（亚马逊）、AMD 甚至 Nvidia 才敢把最核心的底层优化代码贡献出来。他们绝不会把这些代码给 TensorFlow，因为他们怕 Google 随时改规则。
* **创新飞轮的转移：** 我证明了，**技术控制权与生态创新规模之间，存在一种精确的负相关。** 放弃控制权，换来了全行业的智力倾注，最终让 PyTorch 实现了后来居上，成为了大模型时代的绝对基座。Meta 失去了对代码的独裁权，却赢得了整个 AI 时代的生态标准。”

#### 4. 我打算如何延伸这项研究？（未来的学术版图）

“这只是一个起点。接下来，我的学术野心在于：

* **从‘软件代码’延伸到‘大模型权重（Weights）’：** AI 时代，开源的焦点从代码变成了模型权重和训练数据。放弃控制权的逻辑在 Llama 3 这样的大模型上还成立吗？
* **测算‘数字暗物质’的宏观 GDP 贡献：** 我要将这种微观的企业行为，聚合到宏观经济层面。既然企业通过放弃控制权创造了如此巨大的公共物品，那么传统的 GDP 计算方式就彻底失效了。我要去衡量这些‘免费’的基础设施到底为全球经济创造了多少万亿美元的隐形价值。
* **安全与创新的平衡：** 在放弃控制权后，如何在全球地缘政治的摩擦中，防止‘公地悲剧’和供应链投毒？这也是我下一步作为 Linux 基金会首席经济学家要解决的现实问题。”

***

####  参考资料

1. Yue, Daniel, and Frank Nagle. "Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration." Harvard Business School Working Paper, No. 25-013, September 2024.

#### 下一篇文献：

* Siobhan O’Mahony and Rebecca Karp. From proprietary to collective governance: How do platform participation strategies evolve? Strategic Management Journal, 43(3):530–562, March 2020. ISSN 0143-2095, 1097-0266. doi: 10.1002/smj.3150. URL https://onlinelibrary.wiley.com/doi/10.1002/smj.3150.


## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Social Hacker，协作机制设计者。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 AI 助手（如 Gemini 3.1 Pro 等），「开源之道」·窄廊 负责在对话中作为镜像与反弹板，提出问题、提供理论切入点并对推演进行反馈。仅偶尔进行双重验证！