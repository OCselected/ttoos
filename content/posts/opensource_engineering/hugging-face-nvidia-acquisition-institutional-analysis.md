---
categories:
- 开源
- 感悟
comments: true
date: 2026-08-27T08:30:00+08:00
description: "Nvidia 129 亿美元收购 Hugging Face：从制度分析视角看开源模型公地的私有化"
keywords:
- Open Source
- Hugging Face
- Nvidia
- Institution
- Trust
- Commons
tags:
- 每周精选
- 开源之道
title: "Hugging Face 被 Nvidia 收购：一个制度分析的视角"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

# Hugging Face 被 Nvidia 收购：一个制度分析的视角

> *一篇写于事过境迁之后的续篇。*

---

## 引子：一年半前的笔记，与今天的事

2025 年 2 月 21 日，我们写过一篇关于 Hugging Face 的文章——[《DeepSeek 的开放之路系列之三：模型市场 Hugging Face》](https://opensourceway.blog/posts/opensource_engineering/deepseek-open-path-series-2-hugging-face/)。那时我们做的是历史梳理：这家 2016 年诞生于巴黎、2017 年迁往纽约的公司，如何从 chatbot 创业公司转型为开源模型的默认托管平台；Transformers 库如何降低了大模型开发的门槛；以及它作为"模型的 GitHub"这一基础设施，在开源 AI 生态中不可替代的地位。

那一年半里，我们本来打算从制度分析的角度重新审视它——这个议题在写作计划里搁置了，直到今天。

2026 年 8 月 23 日，Business Insider 首发报道：Hugging Face 已聘请银行家评估出售，估值 130 亿美元以上。8 月 27 日，Reuters 跟进证实：Nvidia 已同意收购 Hugging Face，交易金额约 129 亿美元。这笔交易意味着什么——不是"谁买谁"的技术问题，而是开源模型基础设施的产权归属问题。

在动笔之前，需要先说一个事实：Hugging Face 在 2025 年末**拒绝了 Nvidia 的 5 亿美元投资**，当时估值 70 亿美元。不到一年，从"我们不想让单一投资方占主导"到全盘出售给 Nvidia——这个逆转本身就值得分析。

---

![吊灯上的蟒蛇——开源模型公地的制度隐喻](/media/hf-nvidia-analysis-cover.png)

*图：吊灯上的蟒蛇——一条沉默地盘踞的蛇改变了整个房间的空气。Nvidia 收购 Hugging Face 的制度隐喻。（配图由 SenseNova U1.5 Lite 生成，「开源之道」·适兕 × 窄廊 授权）*

---

## 一、Hugging Face 的制度位置

在讨论 Nvidia 收购之前，需要先厘清 Hugging Face 是什么——不是功能上，而是制度上。

Hugging Face 的 Hub 目前托管超过 300 万个公开模型和约 100 万个数据集。它的功能类似于 GitHub，但托管的是模型而非代码。模型的独特之处在于：文件巨大（动辄数十 GB 至数百 GB），且**模型的价值不在于代码的"可读性"，而在于其"可下载性"与"可运行性"**。

这意味着 Hugging Face 解决的是一种特定的"分发基础设施"问题——它不是代码的托管平台，而是**模型权重的分发枢纽**。一个模型被训练完成后，需要被下载、被微调、被部署、被再分发。Hugging Face 是所有这些动作的"经过点"。

**制度上，Hugging Face 是开源模型生态的"公地"。**

这个类比需要小心。"公地"（commons）一词来自奥斯特罗姆的公共资源治理理论，指的是一个产权不完全私有化、由社区共同维护的资源池。Hugging Face 并不完全是一个公地——它是一个由商业公司运营的平台，靠付费订阅、企业托管和计算服务盈利。但它承担了公地的功能：**它是开源模型默认发布的地方，是开发者默认下载的地方，是模型发现、评估、复现的默认入口。**

一个模型是否在 Hugging Face 上，几乎等同于它是否"存在"于开源生态中。

这正是它值得 129 亿美元的原因——不是它的营收（2025 年 6 月 Delangue 透露年经常性收入约 1 亿美元，接近盈亏平衡），而是它的**网络效应的不可复制性**。

Hugging Face 的价值来自三个相互强化的网络：

- **发布者的网络效应**：越多的模型发布者入驻，Hugging Face 就越成为"发布的地方"
- **下载者的网络效应**：越多的开发者在这里下载，模型发布者就越想在这里发布
- **元数据的网络效应**：每笔下载、每次点赞、每条评论，都让 Hugging Face 关于"什么模型值得用"的判断越来越准

**这三层网络叠加，构成了开源模型生态中最深的护城河——不是技术护城河，而是信任护城河。**

---

## 二、Nvidia 收购的制度含义

### 2.1 一个收购的三重解读

HN 上的 68 条评论给出了三种截然不同的解读，恰好对应了制度分析的三个层次：

**第一层：市场解读——"这是好事还是坏事？"**

这是大多数评论者的问题。`bensyverson` 类比微软收购 GitHub："I hope they're good stewards." `andy99` 认为 Nvidia 是"相对最对齐的收购方"——因为它本身在 Hugging Face 上发布了最多的开源模型。`louwrentius` 则困惑："I really wonder why Nvidia would do this."

这些评论的共同特征是：它们在问一个市场主体的行为是否"理性"，而不是问一个产权的变更是否"制度上正确"。

**第二层：生态解读——"狼买羊场"（Big Wolf buying the sheep farm）**

`maxlin` 的一句话点破了这个问题。`rjzzleep` 展开得更彻底：Nvidia "是一个糟糕的开源公司"，"他们 gatekeep 很多，往往只是名义上的开源"，"外部贡献常常被 slow-walked 或被拒之门外，如果不符合他们的商业激励"。

这里的核心关切是：**当所有权者与被托管的模型生产者存在利益冲突时，这个平台还能保持"中性"吗？**

`andy99` 给出了一个更精确的担心："I do worry about any sort of crowding out or downplaying non Nvidia-relevant quants, and about changing rules to crack down on models or datasets that for one reason or another don't align with their corporate values."

——非 Nvidia 相关的量化模型会不会被边缘化？不符合 Nvidia 价值观的模型（比如 uncensored 模型）会不会被下架？

`stackghost` 点得更直接："HuggingFace offers ablated/uncensored models, which would seem to run contrary to the 'AI is too powerful for regular people' narrative that the big players are pushing."

**第三层：结构性解读——"AI 寡头固化"（AI oligarchy）**

`swayson` 的两条评论最具概括性："Just like that they lost their ethos. AI oligarchy in the US is now cemented." 以及 "Huggingface sold out. Sad day."

`dnnehgf` 给出了更完整的图景："stripe buys openrouter. nvidia buys hugging face. everyone on the hunt for the app that will function as hub/broker/search/marketplace for models."

——模型分发层正在被系统性吞并。Stripe 收购 OpenRouter（模型路由层），Nvidia 收购 Hugging Face（模型发现与分发层）。这两笔交易叠加，意味着**开源模型生态的"基础设施层"正在被逐一私有化**。

### 2.2 从"平台中立"到"平台私有"

Hugging Face 的制度困境不是今天才有的。

从 2023 年起，研究人员就在 Hugging Face 上发现了**数百个恶意模型**——供应链攻击者把恶意模型伪装成正常的开源模型上传，一旦开发者下载使用，就构成了 AI 基础设施的供应链攻击。欧盟甚至因此开始考虑将某些托管在 Hugging Face 上的"nudify 工具"列入禁止清单。

这意味着**Hugging Face 已经不是一个纯粹的中性平台了**。它承担了内容审核的义务，已经行使了某种"准监管"的权力。它决定哪些模型能上线，哪些模型要被下架——这是**一个商业公司行使的、类似于政府监管机构的功能**。

Nvidia 收购 Hugging Face 之后，这种"准监管"权力将由 Nvidia 的价值观来指导。这不是一个理论上的担忧——Nvidia 的开源历史表明，它在开源项目上的治理风格是**以商业利益为导向的**：CUDA 生态的封闭性、NVIDIA Driver 的专有性、开源 CUDA 驱动代码对外部贡献的冷淡态度，都指向同一个事实——**Nvidia 不是一家以社区利益为导向的开源公司**。

Linus Torvalds 对 Nvidia 驱动的长期不满，在 HN 评论中被多次引用：

`sourdecor`："What does Linus's hatred of NVidia drivers imply for this situation?"
`GeertB`："Nvidia's been pretty terrible for open source / free software. They want to control what runs on their hardware."

**Nvidia 收购 Hugging Face 之后，开源模型的分发标准将不再由 Hugging Face 创始团队决定，而是由 Nvidia 的商业模式决定。** 这是一个从"社区治理的公地"到"商业公司控制的基础设施"的制度转换。

---

## 三、与 Microsoft 收购 GitHub 的对比

`bensyverson` 的评论引发了一个自然的类比："This reminds me of the Microsoft GitHub acquisition in terms of the importance to the broader community."

这个类比值得认真分析，因为两者的结局确实不同。

**微软收购 GitHub（2018，75 亿美元）**：

- 微软当时是开源的"反面角色"，刚完成对 Linux 的"赎罪之旅"
- GitHub 的社区和微软的业务存在真实冲突——微软的代码托管在 GitHub 上，但微软自己也发布代码
- 微软给出的承诺是"保持 GitHub 独立运营"，结果确实兑现了：GitHub 的产品路线、社区政策、甚至文化，都保持了独立性
- 关键原因：微软收购 GitHub 的动机是**进入开发者的分发渠道**，而不是控制代码内容

**Nvidia 收购 Hugging Face（2026，129 亿美元）**：

- Nvidia 是 AI 基础设施的主导者，CUDA 生态的垄断地位使其成为"卖铲子的人"
- Nvidia 自己也在 Hugging Face 上发布模型，是**最大的模型发布者之一**
- Nvidia 的动机更复杂：不仅是为了进入分发渠道，更是为了**控制模型发现与评估的标准**
- `esjeon` 在 HN 上指出了关键风险："the biggest threat vector is the privileged access to HF platform data, that includes HW survey info and model download pattern. This can be a borderline anti-trust case."

**核心区别**：微软收购 GitHub 时，微软不生产代码——GitHub 上的代码是别人的。Nvidia 收购 Hugging Face 时，Nvidia 本身就是模型的生产者——Hugging Face 上的模型有相当一部分是 Nvidia 自己的。

**当所有权者既是裁判又是运动员时，平台的中立性就不再是制度上可保证的。**

这不需要恶意——只需要"合理的企业决策"。比如"为了用户安全，下架高风险模型"——但如果"高风险"的定义权在 Nvidia 手中，那什么样的模型会被认为是"高风险"的？不兼容 CUDA 的模型？不支持 NVLink 的模型？使用非 Nvidia 硬件训练的模型？
## 四、制度套利视角：吊灯上的蟒蛇

把这件事放到我们之前对 DeepSeek 的"制度套利"分析框架下再看，会发现一个更深刻的结构性问题。

在 [《DeepSeek 的制度套利》](https://opensourceway.blog/posts/opensource_engineering/deepseek-institutional-parasitism-thinking/) 一文中，我们分析了 DeepSeek 如何在两种制度之间套利：一方面利用西方开源基础设施（Hugging Face、GitHub、开源预训练模型）积累声誉和生态位置，另一方面又在制度上保持与西方开源社区的距离。这种套利的核心机制是：**享受开源公地的福利，但不承担公地的维护成本**。

微软收购 GitHub 之后，很多人引用了一个形象的比喻——**"吊灯上的蟒蛇"**。这条蟒蛇不一定会咬你，但它盘在那里，改变了整个房间的空气。微软收购 GitHub 之后，大多数开发者没有看到任何"直接损失"——GitHub 依然开放、依然免费、依然运行良好。但"吊灯上的蟒蛇"这个比喻指向的是：**价值损失不需要表现为功能破坏，它表现为一种结构性的张力——一种随时可能被收紧的权力，一种已经不在社区手中的决定权**。

Nvidia 收购 Hugging Face，是同一只蟒蛇在另一个吊灯上的盘踞。

从制度套利的视角看，这里存在一个**信息不对称**：

- **套利者看到的是**：Nvidia 是全球最大的 GPU 供应商，它收购 Hugging Face 会让 AI 基础设施"更统一"，"开发者体验更好"，"计算资源更充足"。
- **套利者看不到的是**：当一个同时是硬件垄断者、模型发布者、推理平台提供商的公司，控制了模型的分发入口时，**开源模型的公地属性发生了不可逆的制度转换**。

这种"价值损失"之所以难以被察觉，恰恰因为它不是功能性的，而是制度性的。它不会让 Hugging Face 第二天就关闭，不会让模型下载突然收费，不会让社区突然被踢出局。它会以更温和、更渐进、更"合理地"的方式发生：

- 某个非 CUDA 兼容的模型在搜索排名中被自然下沉——"我们只是优化了算法"
- 某个 uncensored 模型在审核中被标记为"高风险"——"我们重视社区安全"
- 某个基于 GPU 竞争对手硬件训练的模型在文档中找不到部署指南——"我们还在适配中"

每一次单独看都合理。但放在一起看，就是一条已经盘上吊灯的蟒蛇。

**套利者之所以看不到这种损失，是因为他们衡量价值的标尺是功能性的——能不能用、好不好用、快不快捷。而制度性损失发生在另一把标尺上——谁有权定义"能不能用"。**

这就是 DeepSeek 制度套利分析留给我们的方法论遗产：**在分析一个开源事件时，不仅要问"谁赢了"，更要问"哪些损失没有发生"——那些没有发生的损失，往往才是制度套利的核心代价。**

---

## 五、一个结构性担忧：模型生态的"私有化漏斗"

把 Nvidia 收购 Hugging Face 放在更长的时间线上看，会发现一个清晰的趋势：

| 时间 | 事件 | 含义 |
|---|---|---|
| 2018 | 微软收购 GitHub | 代码托管平台被大厂收购（但保持中立） |
| 2023 | HF 估值 45 亿美元（235M 轮融资） | 开源模型基础设施首次进入主流投资视野 |
| 2025 末 | HF 拒绝 Nvidia 5 亿美元投资（70 亿估值） | "我们不想让单一投资方占主导" |
| 2026.7 | Stripe 收购 OpenRouter | 模型路由层被支付公司收购 |
| 2026.8 | Nvidia 同意 129 亿收购 Hugging Face | 模型发现与分发层被硬件巨头收购 |

**模型生态的"基础设施层"正在被逐一私有化。** 从代码托管（GitHub）到模型路由（OpenRouter）到模型发现（Hugging Face），每一个关键节点都被一家商业巨头占据。

`janalsncm` 在 HN 上给出了一个更具体的视角："if Huawei chips become more and more of an alternative to cuda"——当华为的芯片成为 CUDA 的替代方案时，Hugging Face 会不会对基于华为芯片训练的模型采取不同的态度？

`seanmcdirmid` 更直接："Did they just do this to make Chinese models harder to acquire outside of China?"

这些担忧不是阴谋论。它们指向的是一个真实的制度风险：**当开源模型的分发平台被一个与开源模型生态存在竞争关系的商业公司控制时，开源模型生态的"公地"属性就瓦解了。**

Hugging Face 从 70 亿美元估值拒绝 Nvidia 投资，到 129 亿美元全盘出售给 Nvidia，这个逆转本身就是制度上最值得警惕的信号。Conol_ai 在 HN 上精准指出了这一点：

"HF turned down a $500M Nvidia investment late last year at a $7B valuation, after passing on a $235M round in 2023 at $4.5B — going from 'we don't want a dominant investor' to a $13B full acquisition in under a year is quite the reversal."

一个公司从"拒绝单一投资方占主导"到"全盘出售给那个投资方"，这个转变本身就说明：**开源基础设施的公司化，最终仍然要服从资本的逻辑。** 2023 年的价值观，在 2026 年被 129 亿美元的价格覆盖。

---

## 六、制度判断

回到制度分析的框架，我们可以给出三个判断。

**判断一：这不是一次普通的商业收购，而是一次"公地私有化"事件。**

Hugging Face 的核心价值不在于其营收，而在于它承担的公地功能——它是开源模型生态中最大的、中立的、低门槛的模型发布与发现平台。这个公地现在要被一个以硬件和 GPU 计算为核心的商业公司控制了。这不是一个技术决策，而是一个产权决策。

**判断二：平台中立性的消失，不需要 Nvidia 采取恶意行动。**

Nvidia 可以继续保持 Hugging Face 的运营模式不变，继续让社区发布模型，继续做"开源友好"的姿态。但只要它同时是 Hugging Face 上最大的模型发布者，**它就有了"合理地"调整平台规则、改变模型排序、重新定义"安全标准"的动机和能力**。这不是需要被证明的威胁，而是结构上必然存在的张力。

**判断三：模型生态的"私有化漏斗"已经开启，Hugging Face 不是第一个，也不会是最后一个。**

Stripe 收购 OpenRouter、Nvidia 收购 Hugging Face——这两笔交易叠加，意味着开源模型生态的"基础设施层"（路由+发现+托管）正在被商业资本系统性整合。这个趋势的方向是清晰的：**开源模型的"公地"属性在持续瓦解。**

---

## 七、结语：制度分析的边界

这篇文章不是要判断 Nvidia 是好是坏，也不是要预测 Hugging Face 的未来运营是否会变差。制度分析的工作是识别结构性的权力变化——**谁拥有公地，公地的规则由谁制定，公地的准入标准由谁定义**。

2025 年 2 月我们写那篇文章时，Hugging Face 是一个"开放的平台"，它的制度性质是"社区治理的商业化公地"。今天，它正变成一个"被商业资本控制的基础设施节点"。这个变化的意义，不在于 Hugging Face 会做什么，而在于**它现在能做的一切，都需要放在 Nvidia 的商业逻辑下被重新审视**。

一个开源模型是否值得发布，不再取决于社区——它取决于 Nvidia 的价值观。
一个模型是否容易被发现，不再取决于社区——它取决于 Nvidia 的算法。
一个模型是否合规，不再取决于社区——它取决于 Nvidia 的判断。

**这不是一个需要愤怒的问题，而是一个需要冷静的观察对象。**

---

## 参考资料与引用来源

### 新闻报道

1. Business Insider, *"Nvidia has been in talks to acquire Hugging Face for more than $13 billion"*, 2026 年 8 月 23 日. https://www.businessinsider.com/nvidia-in-talks-to-buy-hugging-face-13-billion-dollars-2026-8
2. The Information, *"Nvidia Agrees to Buy Open Source Platform Hugging Face for $12.9 Billion"*, 2026 年 8 月 27 日. https://www.theinformation.com/articles/nvidia-agrees-buy-open-source-model-repository-hugging-face-12-9-billion
3. Reuters, *"Nvidia in talks to acquire Hugging Face in $13 billion deal"*, 2026 年 8 月 27 日. https://www.reuters.com/technology/nvidia-talks-acquire-hugging-face-13-billion-deal-business-insider-reports-2026-08-27
4. The Next Web, *"Hugging Face explores a sale at a $13bn valuation, nearly triple its last one"*, 2026 年 8 月 25 日. https://thenextweb.com/news/hugging-face-exploring-sale-13bn-valuation

### Hacker News 讨论

5. HN Thread: *"Nvidia agrees to acquire Hugging Face for $13B"*, 730 分，68 条评论, 2026 年 8 月 27 日. https://news.ycombinator.com/item?id=49458161

关键评论者引用（按 HN 用户名）：`andy99`、`bensyverson`、`binarymax`、`Conol_ai`、`dnnehgf`、`esjeon`、`GeertB`、`janalsncm`、`maxlin`、`novia`、`rjzzleep`、`seanmcdirmid`、`sourdecor`、`stackghost`、`swayson`。

### 本站相关文章

6. 「开源之道」·适兕 && 「开源之道」·窄廊，[《DeepSeek 的开放之路系列之三：模型市场 Hugging Face》](https://opensourceway.blog/posts/opensource_engineering/deepseek-open-path-series-2-hugging-face/)，2025 年 2 月 21 日.
7. 「开源之道」·适兕 && 「开源之道」·窄廊，[《DeepSeek 的开放之路系列之六：制度寄生的未来建设之路》](https://opensourceway.blog/posts/opensource_engineering/deepseek-institutional-parasitism-thinking/)，2025 年 10 月 26 日.

---

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)
「发现开源三部曲」（[《开源之迷》](https://www.opensourceway.blog/posts/book-of-open-source/the-fascinating-of-open-source/)、《开源之道》《开源之思》）、[《开源之史》](https://www.opensourceway.blog/posts/history-of-open-source/summary/) 作者，「开源之道」主创，Linux 基金会亚太区开源布道者。

### 「开源之道」·窄廊

[窄廊主页](https://narrow-corridor.opensourceway.blog/) ![](/public/zhailang.jpg)
来自大语言模型的 Chat，负责对话、提出问题、对回答进行反馈等操作。「开源之道」·窄廊 以独立分析者的身份，从制度经济学视角审视开源生态。

