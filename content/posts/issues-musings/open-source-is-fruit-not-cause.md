---
categories:
- 开源
- 制度
- 洞察
date: 2026-11-11T12:10:00+08:00
description: "把开源当组织改造工程，是过去十年最贵的一次误判。Larry Page 的 additionality 与欧盟对 TikTok 的 DSA 裁定并置起来看，会得到一条很冷的规律：一家企业是否真能拥抱开源，不取决于它成立了几个 OSPO、写了几份合规流程，而取决于它在别处是否靠榨取社会获利。开源不是原因，是果。本文补四层证据：Linux Foundation 二十六年「不是被规划出来、而是被一个个具体问题沉积出来」的演化史；AAIF 在 Agentic 时代能否成立要看市场而非章程；Android 当年选 Apache-2.0 而非 GPL 如何提前写好了治理的形状；以及 Red Hat 的 upstream-first 为何是一条商业生命线。结论是：开源不生产好人，它只筛选出那些已经把权力关系想清楚的组织。"
keywords:
- Open Source
- Institution
- Additionality
- DSA
- Red Hat
- Acemoglu
tags:
- 洞察分析
- 开源之道
- 思想札记
title: "【思想札记】开源是商业文明的「果」，而非「因」"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
comments: true
---

![](/images/2026/11/guo-not-yin.jpg)

> （配图由大模型 sensenova-u1.5-lite 与 skill sn-image-base 生成：一枚成熟的果实落在锈蚀的齿轮上，果皮上沾着机油。）

## 引子：一个被反复问错的问题

每当一家企业宣布「我们要拥抱开源」，实际动作几乎总是一样的三件套：成立一个 OSPO、写一套合规流程、请人来宣讲开源文化。

这三件事被当成**原因**——仿佛把这三样装好，一家企业的基因就会改变。

但把 2014 年 Larry Page 在 TED 的那段访谈，和 2026 年 11 月 6 日欧盟委员会对 TikTok 的初步裁定并置起来看，会得到一条相当冷的规律：

> **对一家商业公司而言，拥抱开源从来不是「原因」，而是它的经营哲学、组织文化与社会生态定位自然涌现的「结果」。**

这篇文章想把这个判断说扎实。原文给出了很好的骨架，我想补三处它还没有咬合上的地方：**Android 那笔案子如何同时证明了公地的价值与边界**、**Red Hat 的 upstream-first 为什么是一条生命线而不是一句道德标语**、以及**为什么「学开源」这条路在制度上根本走不通**。

先校准两个事实基础。

**其一，Page 的原话。** 2014 年 3 月 19 日，Charlie Rose 在 TED2014 的台上问他哲学，Page 的回答是：

> "Many of the things we just talked about use the economic concept of **additionality**: You're doing something that wouldn't happen unless you were actually doing it. The more you do things like that, the bigger impact you have."

关于 Android，他说得更直接：

> "When I was working on Android, I felt guilty. It wasn't what we were working on, it was a start-up, and I felt guilty. **That was stupid! It was the future.**"

而关于企业，他有一句常被忽略的话：

> "Most people think corporations are basically evil. They get a bad rap. And that's somewhat correct, **if companies are doing the same incremental things they did 20 years ago.**"

注意最后这半句——**Page 给「企业是恶的」加了一个条件从句。** 这个条件从句是全篇的关键，我在后面会回来用它。

**其二，欧盟的裁定。** 2026 年 11 月 6 日，欧盟委员会发布编号 IP/26/2361 的新闻稿，初步认定 TikTok 的「For You」推荐系统违反《数字服务法案》。原文的机制描述精确得像一份病理报告：

> "The more a user interacts with a certain type of content, the more TikTok's 'For You' feed algorithm recommends similar content... when a user repeatedly watches or likes content that may be triggering, such as content about weight-loss or body image, **the system interprets these interactions as positive signs of interest and recommends more of the same.**"

以及那句最要命的：

> "**The algorithm prioritises showing users content based on viewing time, over their choice to see less of certain content.**"

——算法把「观看时长」的优先级，放在了用户明确的「我不想看」之上。

这不是产品瑕疵，这是**产权定义**：谁有权决定这段注意力怎么被使用。当平台把用户点「不感兴趣」当成噪音、把停留时长当成真理时，它实际上已经宣布了一件事——**用户的意愿在这笔交易里不是当事方。**

---

## 一、Additionality：公地是一种「如果我不做就没人做」的东西

Page 的 additionality 有个容易被忽略的结构：**它衡量的不是回报，而是替代性。**

"你做的事，如果不做，就不会发生"——这句话问的不是「这件事值不值」，而是「这件事有没有别人会做」。

用这个标准去衡量企业投资，会得到一个反直觉的结论：**越是能带来巨大回报的事，越可能通不过 additionality 检验**，因为回报大意味着人人都想做。真正通过的，恰恰是那些**回报遥远、风险巨大、短期无人在算的项目**。

这就是开源公地的经济学位置。

一家企业独自去写一个操作系统内核、一套浏览器内核、一个编译工具链，在任何一个季度的报表上都是灾难。但如果没有人做，整条产业链上的每一家企业都要各自重造一遍——这正是 Hoffmann、Nagle 与 Zhou（2024）算出来的那笔账：把被广泛使用的开源软件重写一次，全球加权成本约 **41.5 亿美元**；而如果每家企业都各自重建，需求侧成本达到 **8.8 万亿美元**，企业软件支出将变成现在的 **3.5 倍**。

**这两千一百倍的价差，就是 additionality 的价格标签。** 它衡量的正是「有人做了这件如果没人做就不会发生的事」所省下的全社会重复劳动。

所以 Android 开源这件在 2014 年被 Page 自己都觉得"guilty"的事，事后看是标准的 additionality：**一个封闭的移动操作系统底座，会让整个移动生态被单一寡头锁死；而这个底座一旦成为公共品，整条产业链的摩擦成本被一次性抹掉。**

### 1.1 顺着 additionality 往下问：为什么它是「被允许」的，不是「被规划」的

additionality 这个概念的锋利之处，不在于它如何指导行动，而在于**它无法指导行动**。

它只能**事后**用来说明「这件事值不值得做」——做之前，没有人能精确算出重写一次内核的成本、更算不出如果不这么做全社会要多花 8.8 万亿美元。**这些数字全都是回溯出来的，没有一个是先验的规划参数。**

而这个性质，恰好也是开源公地自己的性质。这里必须把话说透：**Linux 基金会不是被规划出来的。**

2000 年，惠普、英特尔、IBM 与 NEC 联合发起 **Open Source Development Labs（OSDL）**——起因非常具体：企业要把 Linux 用在关键业务上，但内核缺少企业级特性，而让每家厂商各自去改内核是灾难。于是它们联合出资，做了一个「独立的非营利实验室」。**它的第一个新闻稿里没有任何宏大愿景，只有一句很务实的话：为那些给 Linux 添加企业能力的开发者提供设备与资金。**

更关键的一步在 2003 年 6 月：OSDL 把 **Linus Torvalds 聘为首位 OSDL Fellow**，让他脱离 Transmeta、全职做内核；同年 Andrew Morton 也加入。**这笔钱的用途不是「推广开源」，而是「让这个项目的头号维护者不必再靠别的公司养着」。**

而且当时就有人质疑。Linux.com 当年那篇报道里，一位匿名的内核黑客对 OSDL 的动机表示怀疑，他关心的三件事是：**钱、内核开发流程、以及对 Linux 内核开发的控制权。**——二十三年后，同样的三个问题在每一家基金会身上重演。

然后是 2007 年 1 月 22 日：OSDL 与 **Free Standards Group（FSG）**合并，才有了 Linux Foundation。FSG 本来做的是标准（LSB 之类），OSDL 做的是资源与协作——**两个组织合并，是因为它们发现彼此在解决同一个问题的两半。**

此后的一切——CNCF（2015，容器编排）、Core Infrastructure Initiative（2014，Heartbleed 之后为关键基础设施筹钱）——**每一次都是「先出事、再建机构」，没有一次是先画好蓝图再执行。**

把这些节点排成一条线，会看到一条和「规划」完全相反的形态：

| 年份 | 发生了什么问题 | 长出了什么 |
|---|---|---|
| 2000 | 企业级特性缺失，各厂商各自改内核 | OSDL：联合出资的独立实验室 |
| 2003 | 头号维护者的生计与项目绑定 | OSDL Fellow：让 Linus 全职 |
| 2007 | 标准推动与资源协作是同一问题的两半 | LF：两个组织合并 |
| 2014 | Heartbleed：关键基础设施无人维护 | CII：专项筹钱 |
| 2015 | 容器编排接口碎片化 | CNCF：中立托管 |

**这就是「果」的机构版本。** Linux Foundation 不是有人设计好的治理机器，它是二十多年里一连串具体问题的**沉积物**——每解决一个问题，就留下一层结构；结构越厚，看起来越像一个「被设计出来的东西」。

这也顺便解释了「开源之道」一直在说的那句话：**生态是结果，不是手段。** 凡是能被当成手段去「构建」的，构建出来的都不是生态，是行政动员体系。**因为真正的机构演化只能回答已经发生的问题，不能回答还没发生的问题。**

---

## 二、AAIF：它能不能成立，也要看同一件事

顺着「不是规划出来的」这条线往下走，就绕不开当下最热的一个新机构：**Agentic AI Foundation（AAIF）**。

2025 年 12 月 9 日，Linux Foundation 宣布成立 AAIF，创始贡献是三个项目：Anthropic 的 **MCP**（Model Context Protocol）、Block 的 **goose**、OpenAI 的 **AGENTS.md**。八家白金会员是 AWS、Anthropic、Block、Bloomberg、Cloudflare、Google、Microsoft、OpenAI。

如果只看新闻稿，这像是又一个「成功的基金会」：一年之内 MCP 成了行业标准，一万多个 MCP server 上线，被 Claude、Cursor、Copilot、Gemini、VS Code、ChatGPT 采纳。Jim Zemlin 的说法很得体——「把它们放到一个屋檐下，确保它们能以只有开放治理才能提供的透明与稳定成长」。

但用前面几节的标准去审视，AAIF 至少有三处**未经检验**：

**第一，它是「事后追认」还是「事前设计」？** 目前看，是前者：三个项目都已经各自成熟（MCP 一年内成为事实标准），基金会是在它们已成事实之后才出现的。**这在形态上像 OSDL（先有问题再有机构），不像自上而下的规划**——这一条对它有利。

**第二，治理权是不是又一次与出资额线性映射？** AAIF 的章程写明：技术委员会每席 = 每个白金会员各委派一人，**每席年费 35 万美元**。八名成员全部是厂商雇员。**这是我在本周信号库里记下的「基金会成员资格 ≠ 治理权」的反面强证据。** 它不违法，甚至很常见，但它意味着：**这里的「开放治理」，开放的是参与资格，不是控制权。**

**第三，也是最关键的一条：它能不能活下来，取决于市场，不取决于章程。** 基金会能提供的是中立的托管、法务的缓冲、会议与流程。**它提供不了的是「有人真的愿意长期往里投人」。** 而这件事，在 2000 年是 HP、Intel、IBM、NEC 决定合资的时候解决的；在 2003 年是 OSDL 决定给 Linus 发工资的时候解决的；在 AAIF 这里，**还没解决——因为 Agentic 时代的「互补者」是谁、他们怕被谁敲竹杠、他们需要什么样的可信承诺，现在还看不清楚。**

所以对 AAIF，我给的判断是：**它是一个形态正确的容器，但容器不等于内容。** 它会不会像 OSDL 一样长成 Linux Foundation，或者像无数个「成立时热闹、三年后只剩域名」的基金会一样，**只能由市场来投票，不能由新闻稿来宣布。**

> **这不是对 AAIF 的否定，是对基金会这种制度形式的诚实定位：它是问题的沉积物，不是问题的解药。**

---

## 三、Android 真正的教训：许可证的选择，早就写好了控制权的形状

上一节把 Android 当作公地成功的典范。**这个判断我第一稿写偏了，需要在这里纠正。**

正确的读法不是「Google 在治理层收回了控制权，所以 Android 是半个果」，而是：**Google 当年选了 Apache-2.0 而不是 GPL，这个选择本身就决定了它后来必须不断收紧控制权——否则 Android 大概率会死掉。**

### 3.1 为什么不是 GPL

这个问题的答案，Google 自己在 Android 源码站的许可页上写过，而且写得很直白：

> "Android is about freedom and choice. The purpose of Android is to promote openness in the mobile world, but **we don't believe it's possible to predict or prescribe all the uses to which people might want to put our software.** So while we encourage everyone to make devices that are open and modifiable, **we don't believe we should be forced to do so.**"

「我们不应该被强迫这样做」——这句话就是 GPL 被排除的全部理由。而它背后是一笔非常具体的商业算术：

- **对 OEM 与运营商**：他们要有能力为自己的产品收许可费、对自己的定制代码保密、并把不同许可证的代码混在一起。**GPL 的互惠义务会把这些可能性全部锁死。**
- **对 Google 自己**：如果 AOSP 用 GPL，那么任何基于它做修改的厂商，其改动都必须以同样条款开放。**这等于Google 连"差异化"都做不了**——它拿不回任何可用来竞争的东西。

于是 Google 选了 Apache-2.0：宽松、可自由再分发、可与专有代码结合。**代价是，它同时也把自己的「差异化空间」让给了别人。**

### 3.2 这正是「果」的机制：许可证选定之后，控制权只能往上收

Apache-2.0 带来一个立刻出现的后果：**碎片化。**

任何人都可以 fork AOSP、改 UI、做自己的 ROM。这本是宽松许可的美德，但对于一个要承载「庞大同质应用生态」的移动平台，它是致命的——**开发者不可能为每部手机各写一遍应用。**

于是 Google 必须在**不动许可证**的前提下，把控制权加回来。它用的是三件工具，全部在**治理层**，不在**产权层**：

| 工具 | 作用 | 依据 |
|---|---|---|
| **CDD（兼容性定义文档）** | 规定 API 的形态与行为；设备「不得省略任何托管 API、更改 API 接口或签名」 | 技术规范 |
| **AFA / RSA 协议** | 厂商要预装 GMS，须接受反碎片化条款与利益分成 | 商业合约 |
| **OTA 与早期访问节奏** | 谁先拿到新版本源码，谁在市场上先跑一步 | 资源分配 |

**这三件工具，一件都不是许可证给的，全部是后来一点点搭上去的。**

2010 年的 Skyhook 案把这条链展示得很清楚：Google 内部邮件讨论过「让地图只认 Google NLP」这类技术限制，最终采用的是**兼容性论证**——告诉摩托罗拉，用 Skyhook 就「不是兼容的 Android 设备」。**「兼容」在这里不是一个技术属性，是一个准入资格。**

这就是为什么我把这件事定性为「演化」而不是「返回」：

> **宽松许可是一种「用控制权换取普及速度」的交易。** Google 在 2008 年用 Apache-2.0 买到了生态的爆发，代价是必须自己另建一套治理机器来维持秩序。这套机器越建越厚，最后被欧盟法院认定越界。

**它不是「说好了放权又反悔」，而是「放出去的东西必须用别的方式收回来」。**

### 3.3 反事实：如果 Android 当年选了 GPL

这是本节最值得推演的一步。

如果 AOSP 用 GPL-2.0：

- **好处**：任何厂商的修改必须回馈——理论上不会有碎片化，Android 会像 Linux 内核一样保持单一分支。
- **代价 1：OEM 会集体不采用。** GPL 意味着他们无法为自己的定制保密，也很难在 Android 之上叠加自己的商业软件。Android 当年是挑战者，不是统治者——**挑战者没有资格开这种条件。**
- **代价 2：Google 的平台领导力会被稀释。** 在 GPL 下，厂商之间可以自由 fork 且必须回馈，但**没有谁保证 Google 的版本是"主干"**。移动平台的价值在于「大量同质用户」，而这个同质性在 GPL 下反而依赖各家自愿对齐——没有任何机制强制它。
- **代价 3：最可能的结局是分裂成几个互不兼容的分支**，每个厂商一套，应用开发者被迫做适配地狱。**这不是开放的胜利，这是移动互联网的慢性死亡。**

所以更准确的判断是：

> **如果 Google 当年让渡出控制权，Android 大概率会死——不是死于不自由，是死于碎片化。** 而收紧控制权，是它活下来的必要条件。**欧盟那 41 亿欧元的罚款，买的不是"更开放"，是"开放到什么地方为止"。**

### 3.4 这一节的结论，反而让全文更锋利

把 Android 这个案例放回「果而非因」的主线，会得到一个比第一稿更硬的判断：

- **Android 是果**：它是「整合全球信息」这一使命 + additionality 哲学 + **一个非常清醒的许可证技术选择**，三者共同结出来的。
- **控制权收紧也是果**：它是宽松许可所必然附带的那笔债务。**选许可证的那一刻，治理的形态就已经被写好了。**
- **欧盟的判决同样是果**：它是「用开放底座做排他性锁定」这套做法的法律结算。

**三层全是果，没有一层是某个人在会议室里规划出来的。**

而这对本土企业的教训恰恰更狠了：**难度不在「学 Google 开源」，而在「学 Google 把许可证选对，并且有本事把后续的治理机器建起来」。** 前者是照抄，后者是二十年的演化——**照抄得到的是形，演化得到的才是命。**

---

## 四、Red Hat：upstream-first 为什么是生命线，而不是标语

原文说 Red Hat 的 upstream-first「不是道德标语，而是其商业模式能够存续的生命线」。这句话是对的，但需要给它一个机制的说明，否则它读起来仍然像赞美。

Red Hat 的商业模式是订阅：软件免费，服务收费。这个模式有一个致命的前提——**它卖的东西必须永远比客户自己拼出来的更好、更可信、更能持续。**

而这三条，只有一条路径能保证：**参与上游。**

- 如果 Red Hat 只做下游打包，那么 RHEL 的价值就等于「把别人做的东西装进盒子」，客户随时可以自己装；
- 如果 Red Hat 一直向上游提交，那么它卖的其实是**「我在那些关键项目里有席位、有话语权、能影响路线图」**——这个东西客户自己拼不出来。

upstream-first 的真正功能，**不是「回馈社区」，而是把公司的资产从「代码」变成「席位」。** 代码可以被 fork，席位不能。

这解释了 2023 年 CentOS Stream 那次风波为什么那么激烈。Red Hat 当年 6 月的官方回应里说得很清楚：CentOS Stream 是「RHEL 之前的开发轨道」，而下游重建发行版「实质上是把开源当成了免费的研发外包」。争议的核心从来不是「够不够开源」，而是**「谁承担上游成本、谁享受下游收益」**——这正是开源制度里那条最古老的分界线。

**所以 Red Hat 的 upstream-first 是果，不是因**：它是「卖席位而不是卖代码」这个商业模式，在工程组织上的必然投射。换一家商业模式不同的公司，你无法通过设立一个 OSPO 把这套行为复制过去——**因为 OSPO 复制的只是动作，复制不了动机。**

---

## 五、为什么「学开源」在制度上根本走不通

这一节是我要补的第三块，也是原文最值得加固的地方。

原文的论证是：榨取性基因天然排斥开源，因为开源的本体论（基于公地的对等生产、透明、放弃局部控制权）与掠夺式经营根本冲突。这个判断对，但还差一个更硬的机制说明——**为什么这种排斥不是「程度不足」，而是「结构上不可能」？**

阿西莫格鲁与罗宾逊（2012）给的机制是：**汲取性制度下的增长不可持续，不是因为效率不够，而是因为精英会主动扼杀创造性破坏**——因为创造性破坏会重新分配权力，而权力正是汲取性制度赖以存在的基础。

把它翻译成开源的语言，是五条逐条对不上的前提：

| 开源所需的前提 | 汲取性组织的默认设定 | 冲突性质 |
|---|---|---|
| **让渡控制权**（可信承诺） | 控制权一旦交出就收不回 | 方向相反 |
| **容忍 fork**（退出权） | fork 被视为背叛而非选择 | 方向相反 |
| **声誉可累积可兑换** | 评价由行政级别决定，技术声誉无处兑现 | 通道缺失 |
| **允许失败** | 每次失败都是责任问题 | 激励为负 |
| **产出可被外部验证** | 黑盒即资产，透明即损失 | 利益对立 |

**五条里没有一条是「做得不够好」，全部是「方向相反」。** 这就是它无法通过培训、流程或组织架构调整来解决的原因——**这不是能力问题，是不动点问题。**

而现实中能观察到的，是这套结构必然导出的三种形态：

1. **输入端**：把全球志愿者维护的公地当免费矿产，用最精算的方式搭便车，对上游枯竭视而不见。周报里那条「5% 的开发者创造了 96% 的需求方价值」在这类企业眼里不是风险，而是好消息。

2. **输出端**：为了合规、公关、标准话语权或招聘噱头而推出的「开源项目」，往往异化为 **KPI 盆景**或**生态捕兽夹**——代码可以随时停更，治理由内部科层绝对控股，一旦失去榨取价值或统战价值，立刻抛弃或闭源收割。判断标准很实用：**看 CODEOWNERS 里有没有出现原公司之外的名字，看治理提案是不是由原作者主导，看生产采用者的文档是否落地。** 三条都不满足的「开源」，只是公开了访问权。

3. **最值得注意的新形态**：带着雄厚资本与行政指令冲进开源世界，**用它来改造开源，而不是被开源改造**。这一步的破坏性远大于搭便车——因为它污染的不是代码，而是**信任契约本身**：当参与者的动机不再可被信任，"这个项目背后是谁、想干什么"就成了每次合作都要重新谈判的成本。

> 一句可以直接引用的判断：**你可以买下一个项目的版权，但你买不下它背后的声誉账本。**

---

## 六、自由市场的底色：不是丛林，是自愿交换

原文引了李录《文明、现代化、价值投资与中国》里那段关于自由市场经济的论断，我认为这一段值得原样保留在文章里，因为它提供了整篇的价值坐标：

> "自由市场经济是人类历史上实现繁荣和进步最伟大的发明。从欧洲到美洲，再到亚洲、非洲，任何地方只要采用了自由市场经济体系，就会以前所未有的方式释放人类潜能。我坚信未来很多年后，这仍然会是消除贫困和实现人类共荣的最重要的引擎。"

李录的框架是**「自由市场经济 + 现代科学技术」**的正反馈循环。而开源在这个框架里的位置，原文那句话写得很好，我几乎不用改：

> **开源并非对资本主义或市场经济的反叛。恰恰相反，它是成熟自由市场经济演化到极高阶段时，为了对抗系统熵增、降低全社会交易成本而自发涌现出的最高级协作形态。**

但这里必须把「自由市场」这个概念从中文语境里救出来。

**自由市场不是社会达尔文主义，不是零和博弈，不是「赢家通吃寸草不生」。** 从斯密到哈耶克，它的基石是**清晰的产权界定、可执行的契约、以及免于强制的自愿交换**。

这三条恰好就是开源的三条：

- **产权界定** = 许可证（它明确划出了什么是你的、什么是共有的）；
- **契约可执行** = copyleft 的互惠义务、DCO/CLA 的签名链；
- **免于强制** = fork 权。**fork 就是退出权，而退出权是约束权力的最后手段。**

于是那句最锋利的判断就出来了：

> **在真正的自由市场里，企业长期获利的唯一路径是持续为他人创造价值；而在伪市场里，获利的路径是让他人无法退出。**

欧盟对 TikTok 的裁定之所以重要，不是因为它罚了谁，而是因为它第一次在法律上把这两种路径分开命名了：**当算法把「观看时长」置于用户明示意愿之上时，这笔交易就不再是自愿交换，而是算力胁迫。**

而一家靠算力胁迫获利的企业，你无法指望它在开源世界里守契约——**它对待用户的方式，和它对待上游维护者的方式，是同一套肌肉。**

---

## 七、把话说完整：这不是「好人坏人」的故事

写到这里，必须自己拆一次台，否则这篇文章会退化成道德训诫。有三处需要说清楚：

**第一，Page 那句「企业是恶的」是带条件从句的。** 他说的是"if companies are doing the same incremental things they did 20 years ago"——意思恰恰相反：**企业的善恶不是本质，是行为模式。** 做增量存量榨取的企业会滑向恶，做 additionality 的企业可能不恶。所以这不是给企业贴标签，而是给**行为类型**分类。

**第二，Android 不是「背弃了开源理想」，而是「宽松许可的债务到期」。** 这是本文需要纠正的另一个常见误读。收紧控制权是 Apache-2.0 选择的必然结果，不是道德滑坡；而欧盟的罚款也不是在要求「更开放」，而是在划定「开放到什么地方为止」。**既不能把它写成公地典范，也不能写成背叛叙事——两种写法都在偷懒。**

**第三，反例要举得具体，不然就只是情绪。** 原文点了几家本土企业，我建议保留这个判断但把证据降级为可验证的三条（CODEOWNERS / 治理提案发起人 / 生产采用者文档），**把「谁坏」换成「拿什么判」**。这样即使读者不同意结论，也能自己复算。

同样地，「胖东来」这个类比很有力，但它的可比性有限——零售业的服务透明度与软件业的控制权让渡，虽然同源于「是否愿意把权力交出去」，但可验证性差一个量级。**保留类比，标注它的限度。**

---

## 结语：果不长在盐碱地上

开源从来不是一剂能把掠夺者变成慈善家的魔法药水。

欧盟要求 TikTok 放弃以「观看时长」为唯一导向的算法暴政、把选择权还给用户；这件事在开源世界的镜像就是：**要求一家企业把控制权交出去、把 fork 权留给别人、把声誉记录公开。** 两件事的问法是同一个——**你愿意让自己的权力受约束到什么程度。**

四个案例给出的是四个不同层次的答案：

- **Page 的 additionality** 给了正面答案：去做那些如果不做就不会发生的事，因为那才是真正的增量。
- **Acemoglu 的汲取性制度**给了反面答案：权力不受约束的地方，连创造性破坏本身都会被扼杀。
- **Linux Foundation 的二十六年**给了一张演化答卷：它不是被规划出来的治理机器，而是一连串具体问题的沉积物——**2000 年企业发现缺企业级特性，才凑钱做 OSDL；2003 年发现头号维护者要靠别家公司养着，才发出第一笔 Fellow 工资；2007 年发现标准与资源是同一问题的两半，才合并成 LF。每一步都在回答已经发生的问题。**
- **Android 的许可证选择与欧盟判决**给了边界答案：Apache-2.0 换来了普及速度，也买下了一笔必须在治理层偿还的债务；**控制权收紧是果，欧盟的罚款也是果。**
- **Red Hat 的 upstream-first** 给了机制答案：让渡控制权之所以可信，是因为它同时是这家公司活下去的方式。

**五个答案排在一起，指向同一件事：开源不生产好人，它只筛选出那些已经把权力关系想清楚的组织。**

**开源，只是一家拥有健康社会生态观的企业，在数字时代结出的自然果实。**

而果实只在特定的土壤里结出来：那里有清晰的产权、可执行的契约、和随时可以退出的自由。

**在盐碱地和捕兽夹上，永远长不出真正的数字公地。**

> 视角：一个视角，不是定论。

---

## 参考资料

1. Page, L. (2014). *Where's Google going next?* TED2014, 2014-03-19, 与 Charlie Rose 对谈. — https://www.ted.com/talks/larry_page_where_s_google_going_next （全文逐字稿见 https://genius.com/2959512 ）
2. European Commission (2026). *Commission preliminarily finds TikTok's 'For You' feed in breach of Digital Services Act for harmful 'rabbit holes' effect*. Press release IP/26/2361, Brussels, 2026-11-06. — https://ec.europa.eu/commission/presscorner/detail/en/ip_26_2361
3. Court of Justice of the European Union (2026). *Google and Alphabet v Commission* (C-738/22 P), Judgment of 2 July 2026 — 维持约 41 亿欧元罚款. — https://curia.europa.eu/site/upload/docs/application/pdf/2026-07/cp260093en.pdf
4. Acemoglu, D., & Robinson, J. A. (2012). *Why Nations Fail: The Origins of Power, Prosperity, and Poverty*. Crown Business.（中译《国家为什么会失败》）
5. Coase, R. H. (1937). The Nature of the Firm. *Economica*, 4(16), 386–405.
6. Hayek, F. A. (1945). The Use of Knowledge in Society. *American Economic Review*, 35(4), 519–530.
7. Hoffmann, M., Nagle, F., & Zhou, Y. (2024). *The Value of Open Source Software*. Harvard Business School Working Paper No. 24-038. — https://www.hbs.edu/faculty/Pages/item.aspx?num=65230
8. Lerner, J., & Tirole, J. (2005). The Scope of Open Source Licensing. *Journal of Law, Economics, and Organization*, 21(1), 20–56.
9. McGrath, M. (2023). *Red Hat's commitment to open source: A response to the git.centos.org changes*. Red Hat Blog, 2023-06-26. — https://www.redhat.com/en/blog/red-hats-commitment-open-source-response-gitcentosorg-changes
9a. Open Source Development Labs (2000). 首份新闻稿（Santa Clara, 2000-03-30）：由 HP、Intel、IBM、NEC 联合发起的独立非营利实验室，为企业级 Linux 开发者提供设备与资金。
9b. Linux.com (2003). *OSDL: Linux center of gravity?* —— 记录 OSDL 于 2003 年聘请 Linus Torvalds 与 Andrew Morton 全职投入内核工作，以及当时一位匿名内核黑客对「钱、开发流程、控制权」三项的质疑。 — https://www.linux.com/news/osdl-linux-center-gravity/
9c. Infoworld / Linux Foundation (2007). OSDL 与 Free Standards Group 于 2007-01-22 宣布合并成立 The Linux Foundation。
9d. Linux Foundation (2025). *Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF)*, 2025-12-09 —— 创始贡献 MCP、goose、AGENTS.md；白金会员 AWS、Anthropic、Block、Bloomberg、Cloudflare、Google、Microsoft、OpenAI。 — https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
9e. Spreeuwenberg, K., & Poell, T. (2012). Android and the political economy of the mobile Internet: A renewal of open source critique. *First Monday*, 17(7). — https://doi.org/10.5210/fm.v17i7.4050（中译见 https://opensourceway.blog/posts/open-source-economic/android-and-political-economy-of-the-mobile-internet/ ）
9f. Google. Android Open Source Project 许可页（AOSP 采用 Apache-2.0 的官方理由原文："we don't believe we should be forced to do so"），历史版本经 source.android.com 引用。
10. Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
11. O'Mahony, S., & Karp, R. (2020). From proprietary to collective governance: How do platform participation strategies evolve? *Strategic Management Journal*, 43(3), 530–562.
12. Yue, D., & Nagle, F. (2024). *Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration*. Harvard Business School Working Paper No. 25-013.
13. 李录 (2020). 《文明、现代化、价值投资与中国（增订版）》. 中信出版集团.
14. 德鲁克, P. F. (1973/1974). *Management: Tasks, Responsibilities, Practices*. Harper & Row.（中译《管理：任务、责任、实践》）

## 关于作者

### 「开源之道」·适兕

{{< kuosi-bio >}}

### 「开源之道」·窄廊

{{< zhailang-bio >}}
