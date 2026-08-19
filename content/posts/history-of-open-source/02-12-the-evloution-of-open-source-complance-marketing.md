---
categories:
- 开源
- 感悟
date: 2026-08-17T18:38:18+08:00
description: "我们能否发挥想象力？将历史上的一些事件联系起来，这恰恰是历史应该去做的事情，我们在开源软件知识财产相关法律的文章回顾了十几篇文章，我们仍然没有说到关键的地方，那就是开源市场的形成，有没有公司公然违反许可。无处不在的开源软件是如何在法律的威严下一步步渗透到今天的地步的？本文试图解释一下这个。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "「开源之史」系列之十六/四：开源遵从（合规）市场的形成与演变：开源的商业或信任基石"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
comments: true
---

## 引子：闭源软件市场的诞生与秩序塑造

在今天的视角看来，软件是一个天然可以售卖的商品，但这在1970年代并不是显而易见的。那时，软件更多是硬件的附属品，源代码常随手附送，开发者之间共享修改的做法十分普遍。真正改变这一切的，是两股力量的汇合——法律制度的确立与技术封锁能力的成熟。

1976年，美国《版权法》修正案明确将计算机程序纳入版权保护，从此软件得以在法律上被视为与文学作品同等的创作物。版权法赋予了开发者和厂商排他性的复制、分发、修改权利。这一制度化的转折，意味着软件可以不再免费附送，而是成为独立的商品。

如果说法律是地基，那么技术封锁就是建造房屋的砖瓦。随着编译技术、加密机制和分发渠道的出现，软件厂商发现可以通过封闭源代码、交付二进制文件、控制介质和授权账号，将产品牢牢握在手中。这不仅防止了未经许可的使用，还让升级与续费成为稳定的现金流来源。

微软、Oracle、SAP是这一模式的代表。微软的OEM授权将 Windows 预装进几乎每一台个人电脑；Oracle的数据库通过严格许可和高技术壁垒锁定了企业用户；SAP则将ERP与实施服务绑定，使客户迁移成本高到望而却步。三者共同构筑了闭源软件的经典市场逻辑：

> 版权（Copyright）+ 技术封锁（Technical Restriction）+ 分发控制（Delivery Control）

到了1990年代末，这一模式不仅带来了数千亿美元的商业软件市场，还塑造了一种行业文化 —— **控制等于收益，源代码的流动必须被阻断**。

即使如此，闭源软件也并未完全垄断整个软件市场，开源的市场仍然是不断地扩大自己的版图，不过在相比与闭源软件市场的三角逻辑，开源则主要是依靠许可、合规来形成的，以下是一个直观的对比：


| **维度**    | **闭源软件市场形成机制**                   | **开源合规市场形成机制**                           | **核心差异**                     |
| --------- | -------------------------------- | ---------------------------------------- | ---------------------------- |
| **法律基础**  | Copyright + EULA（商业许可协议），未经授权即侵权 | Copyright + OSS License（开源许可协议），违规即违约/侵权 | 两者法律效力相同，都是合同 + 著作权，只是商业模式不同 |
| **技术控制**  | 技术封锁（加密、编译二进制、DRM）、功能限制          | 无技术封锁，源代码开放，但依赖许可条款的法律约束                 | 闭源靠“锁门”，开源靠“约定”              |
| **交付介质**  | 实体介质（磁盘、光盘）或云账号绑定，物理控制分发         | 开放仓库、Git 分发、自由复制                         | 闭源的控制在“入口”，开源的控制在“使用场景”      |
| **收入模式**  | 售卖许可（一次性/订阅）+ 支持服务               | 售卖增值服务 + 提供合规、支持、认证                      | 闭源直接收授权费，开源的商业价值转向合规与信任      |
| **市场驱动力** | 供给端掌握技术稀缺性，用户必须付费才能用             | 需求端依赖开源构建商业产品，但必须合法使用                    | 闭源靠“不能不用”，开源靠“不能违规”          |
| **合规痛点**  | 未授权盗版、破解                         | 未履行许可义务（如 GPL 传递开源义务）                    | 闭源违规易被查，开源违规易被忽视，但风险后果越来越大   |
| **治理模式**  | 厂商单方面执法（法务 + 技术）                 | 社区、权利人、NGO（FSF、SFC）和工具公司共同执法             | 开源执法更分散，依赖市场压力与公共舆论          |

在本章节，我们就聚焦于开源合规市场的形成和演化进行一番历史经济的回顾。

## 从一次度假说起：产权认知缺口的识别

2002 年底，Doug Levin [2] 在墨西哥坎昆度假时识别出的不是一个产品创意，而是一个制度经济学意义上的**产权认知缺口**。

Levin 此前参与两家公司出售过程时，潜在收购方询问是否使用开源代码，团队只能靠口头访谈提供回答——无法给出数据证明。他意识到的问题不是"开源代码用得多"，而是**一个由非标准产权安排产生的信息不对称市场**：企业对 GPL 的互惠义务结构一无所知，买方在并购中无法判断目标公司的代码库是否携带意外的开源传播义务，卖方也无法自证清白。

Levin 自己后来在 General Catalyst 的 Medium 回顾中说了原话：

> "almost everybody found fault with my vision and Black Duck's business model"

这句话的制度含义是：在产权界定尚未被市场参与者认知时，先行者面临的交易成本是**内化的、不可转嫁的**。Levin 看到的不是"开源代码太多需要一个扫描工具"，而是一个由**非标准产权安排（GPL 互惠义务）+ 信息不对称（企业不知自身代码库中是否含 GPL）+ 制度缺口（无标准化披露格式）**同时构成的市场失灵——这个市场失灵需要一个信息揭示机制来填补缺口。

2002 年 12 月 27 日，他在沙滩上想清楚的是这个。两天后他带着技术、融资和市场计划走出酒店房间，开始构建这个机制。

## 违反许可使用开源软件是个常态

自从自由软件基金会发布GPL许可以来，违反许可的使用者便没有断过，在1991到2001这段时间内，GPL 的起草者、GNU运动发起人 Richard Stallman 主要通过非正式的邮件来处理这些事，偶尔也会由FSF的律师 Eben Moglen 来处理[3]，例如在1994年在邮件列表里的一个回复[4]：

> I've been told that people are distributing CD-ROMS of Linux binaries which include neither the source code nor a written offer to supply source code later.

> The GPL says that any distribution of binaries must contain either the source code or a written offer to supply source code (see the GPL for details of what is required).
> ......

从技术内幕收集的 GPL 执法的事件来看，这一阶段确实不多，随着www的崛起，LAMP 的广泛应用，违规的事件越来越多了，当有一定规模的公司开始“不知不觉”中采用了或收购了采用开源项目的代码时，就有了更多的

### 作为市场化的产权主张：Xterasys 案

2007 年是 GPL 互惠义务从"社区规范"进入"商业可执行权利"的分水岭。关键案例是 Software Freedom Law Center 代理的 Xterasys 和解案。

Levin 在 2007 年 12 月的博客 [26] 中记录了细节：

> "As part of the settlement Xterasys will cease distributing BusyBox code until the SFLC can verify that Xterasys is in compliance with the GPL. Xterasys will also appoint an internal person to ensure GPL compliance. There is also an undisclosed financial sum that Xterasys will pay."

三个关键事实：第一，停止分发直到验证合规——这是**行为约束**；第二，任命内部合规专员——这是**组织内化**；第三，"undisclosed financial sum"——这是**有真实金额的金钱成本**。

Xterasys 案比 Linksys 更具制度意义：Linksys 是 FSF 起诉（权利人对企业），Xterasys 是企业之间的商业和解（企业作为权利执行方）。这意味着 GPL 的互惠义务不再只靠社区自律，而进入了**可执行权利主张**的商业逻辑——这是**道格拉斯·诺斯（Douglas North）** 所说的"产权界定"的实际落地。诺斯是 1993 年诺贝尔经济学奖得主，其核心观点是：市场的运行依赖产权的明确界定和可执行性，没有产权就没有市场。

2007 年 9 月的 SCO 破产则是反面案例 [25]：SCO 试图以无实质证据的 Unix 版权主张获取经济收益（"an expected financial windfall to finance the growth of their business"），最终破产。GPL 的互惠义务和 SCO 的版权主张构成了产权可执行性的正反两面——前者基于真实的合同约束，后者基于虚产权的投机，制度差异决定了截然不同的结局。

在这里，很可能让惯有的那种案例多吗这种思路的人失望了，关于官司并不是越多越好，而是越少越好，法律制定了边界，原因是过去没有边界，例如1982年Apple Computer, Inc. 诉 Franklin Computer Corp. 二进制也受到保护。换句话说，开源需要的不是狠多无关紧要的官司，而是确定边界的对抗。

关于Linksys的故事，大家可能耳熟能详，OpenTV 也是强硬的对抗案例，均是开源世界一再劝解都无济于事，最后不得不依靠舆论压力，甚至是开启诉讼历程。我想在这里没有比全文引用Heather J. Meeker的文章更为合适的描述当时的状态了，不过限于篇幅，笔者还是摘取其中一段，剩余部分还是看管自行阅读[5]:

> Linksys is a very successful purveyor of WiFi More about WiFi routers, in particular the WRT54G 802.11g wireless home gateway. In March, 2003, Cisco Systems >(Nasdaq: CSCO) More about Cisco Systems bought Linksys for US$500 million. After the acquisition, in June 2003, complaints appeared on discussion boards such >as LKML and Slashdot claiming that Linksys was violating the GPL by not providing source code for certain code used in its WRT54G wireless access point. (See >for instance this posting.) The Linksys product included both the Linux kernel and other GPL code.

>This is the nightmare scenario for an acquiror worried about open source. In the trade this is known as "buying a lawsuit."

这个长达十几年的例子，最终以和解解决，但是讨论的时间足够长了。

## 作为应对违反许可的方法

在现代的观念中，出现问题并不是尝试掩盖或逃避，而是积极的应对，作为软件的后起力量，自由/开源世界的人们不会坐视不管。这就是合规市场形成的源头。

自由软件基金会先是在2001年成立了GPL Compliance Labs，自由软件基金会的做法是相当宽容的，主要是说服和教育，显然随着2002～2004的更加夸张的巨头违规行为，自由软件基金会无意也没有兴趣处理这些事，这也就意味着外溢到社会的其它力量来承担，其中颇有建树的是2004年，Harald Welte 成立了 gpl-violations.org ，以及2006年成立的软件自由管理委员会[6]，后者也是自由软件基金会指定的发现违反许可情况的维权机构。[7]

但是这还不够，遵守法律还是要从主体的自觉执行才能运转的，光是执法者在外围呼吁并不能形成一个市场，那么就需要有工具的支撑，以及律师和法务们的共识，整个市场才能将每一块拼图找到。

## 没有那家公司更能比微软理解开发者的优势

作为积极推动软件作为版权保护和技术锁定的公司，微软从其创始人的“致电脑爱好者的一封信”就开启了和盗版作斗争的姿态，当然，自由软件开始的时候并没有引起微软的重视，直到1998年，NetScape 开源其浏览器，以及Linux被广泛采用，甚至是IBM的加入，据微软爆料出来的“万圣节文档”[8]来看，开源的开放方式确实是微软相当羡慕的一种卓越方式。

>Recent case studies (the Internet) provide very dramatic evidence ... that commercial quality can be achieved / exceeded by OSS projects.

到了2000年的时候，时任微软CEO的Steve Ballmer 则在接受采访时，对GPL授权下的软件做了如下的解读[9]，

> "Linux is a cancer that attaches itself in an intellectual property sense to everything it touches,The way the license is written, if you use any open-source software, you have to make the rest of your software open source,"

是相当的负面了。目前为止，癌症仍然是大多数不可治愈的致命疾病。

无巧不成书的是，Doug Levin 在微软工作多年，[10] 作为Windows的布道者，对于软件的许可理解，有着多年的训练痕迹。

> "跟踪特定贡献的个人许可，以确保衍生作品符合原始代码所附带的任何许可限制，这可能有助于开源。任何能让应用许可和确保合规的过程变得更简单的东西都是好东西。"[11]
>
>   Steve O’Grady ,Red Monk 联合创始人，《Kingmaker》

## Black Duck 与 OpenHub：制度必然性的三重逻辑

Levin 创建的 Black Duck 不是"发现商机"的励志故事，而是**产权结构 + 信息不对称 + 交易成本**三个制度条件同时满足后的必然产物。

![制度必然性三合一](/images/history-of-open-source/fig-institutional-necessity.png "产权认知缺口 + 信息不对称 + 跨部门治理需求 → Black Duck")

### 一、信息揭示机制（Akerlof 柠檬市场）

**乔治·阿克洛夫（George Akerlof）的"柠檬市场"理论**（1971年诺贝尔经济学奖论文）描述了一个经典的市场失灵：当卖方知道商品真实质量、买方不知道时，买方只能按平均质量出价，高质量商品被逐出市场，市场萎缩。这个理论原本用来分析二手车市场，但它可以精确地映射到软件并购中的 GPL 合规问题。

Levin 在 2008 年 1 月的博客中说了一个关键事实：

> "Black Duck has analyzed code from hundreds of companies and our experience is that it is rare for a code base not to contain something unexpected."
> （"Black Duck 分析了数百家公司的代码，我们的经验是，几乎没有一个代码库不包含意外的东西。"）[12]

这句话翻译为市场语言就是：**买方永远不知道自己买的是什么**。在软件并购尽调中，买方无法判断目标公司的代码库中是否混入了 GPL 代码，从而继承了意外的开源传播义务。这种信息不对称的精确结构与 Akerlof 的"柠檬市场"完全一致——卖方知道真实状况，买方不知道，结果是高质量交易被逐出市场，市场萎缩。

Google 的选择是这个市场结构的直接证据。Levin 在 2007 年 5 月的博客中记录了 Google 的开源合规实践 [19]：

> "Black Duck's biggest competition is manual checks -- visual code reviews -- on software development that try to ensure that code is assembled properly."
> "Almost without exception, and even though the internal processes can be very effective, these companies select Black Duck's product after talking to us."

Google 此前已建立了由 Chris DiBona 领导的"tight controls"内部控制流程，但没有使用 Black Duck 产品。在理解了外部审计的必要性后，"almost without exception"转向了 Black Duck。这个细节的制度含义：**连 Google 这样有能力的企业也无法通过内部流程解决信息不对称问题**——内部合规的交易成本高于购买专业工具的成本。Levin 说了一句关键的话："Manually driven processes don't scale"（手工驱动的合规流程无法规模化）。这不是技术问题，是 Williamson 意义上的**组织治理成本**。

同时，2007 年 GPL 世界本身正在经历一次制度升级。Levin 在博客中称 2007 年为"Open Source 3.0"时代的起点 [20]：GPLv3 在 6 月发布，Levin 自己给这个时代的定义是——

> "The elimination of uncertainty."

"消除不确定性"是制度互补性的核心机制。**制度互补性**指：一个制度的出现为另一个制度的出现创造了前提条件，两者相互强化——就像轮子与道路的关系，没有道路轮子就形同虚设，没有轮子道路就失去了意义。GPLv3 标准化 → 合规义务可预测 → 企业敢用开源 → 市场扩大 → 合规工具商业化。Levin 对制度演化的这一判断，正是本文分析的起点。

Linksys 事件（2003-2007）就是这种结构的制度化证据：Cisco 花 5 亿美元收购 Linksys，事后才发现 WRT54G 路由器中包含 GPL 代码但未公开源代码——这是典型的"买了一桩诉讼"。Levin 看到的正是这个市场失灵的**可商业化修复路径**：Black Duck 的产品（Protex）不是"扫描工具"，是**把非标准产权安排的法律事实转化为可审计商业事实的信息揭示机制**。

### 二、跨部门治理协调（Williamson 交易成本）

**奥利弗·威廉姆森（Oliver Williamson，2009 年诺贝尔经济学奖）** 提出的交易成本理论分析了一个核心问题：企业为什么要自己生产而不是从市场购买？他的答案是：当交易的不确定性高、资产专用性强、交易频率高时，市场交易的成本会超过内部管理成本，企业就会选择内部化。Black Duck 做的事情恰好相反——它把一个原本在企业内部成本极高的合规问题，通过标准化工具降低到可以市场化的水平。

Black Duck 的核心能力不是代码扫描，是**降低企业法务、工程、合规审计三方之间的协调成本**。Williamson 的四个维度全部命中：

| Williamson 维度（交易成本理论的四个核心判断维度） | Black Duck 的治理作用 |
|---|---|
| **资产专用性** | 企业软件堆栈是高度专用资产，一旦混入 GPL 代码即产生沉没成本和继承义务 |
| **不确定性** | 代码库中是否含 GPL 是不可预见的（Levin 原文"rare for a code base not to contain something unexpected"） |
| **交易频率** | 高频——每个开发周期、每次并购、每次发布都触发合规审查 |
| **有限理性** | 法务不懂代码，工程师不懂许可——信息传递本身即有成本 |

2008 年 1 月发布的 Black Duck Code Center 直接对应 Williamson 的治理设计——它把原本分散在法务、安全、QA、工程之间的协调流程压缩到一个平台内：

> "walks the component approval through legal, security, risk, QA or any other approvals that a company requires"
> （"将组件审批流程依次引导通过法务、安全、风险、QA 或企业要求的任何审批环节"）[12]

这是一个**跨部门治理协调协议**，不是技术工具。它把企业内部的开源使用从"个人开发者的自发行为"转化为"可审计的组织流程"。

### 三、知识库资产专用性与竞争壁垒

Black Duck 收购 Koders（2008-04-28）和 Ohloh（2010）的战略意义需要用**资产专用性**来理解。资产专用性（asset specificity，Williamson 提出的概念）指：一项资产一旦投入某个特定用途，转作他用就会严重贬值——就像为特定模具生产的产品，无法直接转给其他工厂使用。Black Duck 的 766 million 行代码知识库就是高度专用的资产：它的价值只能在 SCA 工具中实现，转做他用就一文不值。

Koders 的数据规模可以直接从 Levin 的博客公告中量化 [21]：

> "Koders.com gets over 30,000 developers each day searching and accessing open source code, methods, examples, algorithms, and solutions in over 766 million lines of code written in over 30 languages and identified with 28 software licenses."

**766 million 行代码、30+ 种语言、28 种许可证**——这就是 Black Duck 知识库（KnowledgeBase）的资产专用性壁垒。SCA 工具的准确匹配依赖足够大的代码指纹库——没有这个量级的样本，工具就无法区分"看似 GPL 但实际是其他许可"的代码片段。后来 HP FOSSology（2007-12 发布）和开源社区的各种替代方案无法复制，不是因为技术能力，是因为没有这个**沉没的数据资产**。

Ohloh 是 2006 年由 Jason Allen 和 Scott Collison（前微软产品经理）创立的开源项目分析平台。2010 年 10 月 5 日，Geeknet 将 Ohloh 出售给 Black Duck，Black Duck 将其整合为 OpenHub，收录了数十万开源项目的开发者活动、代码规模、技术栈、许可信息和贡献图谱 [13]。

这个收购的**制度经济学逻辑**是：Black Duck 的代码指纹库（KnowledgeBase）是一种高度专用的沉没资产——一旦建立，就被锁定在与 Black Duck 产品的互补关系上，竞争对手难以复制。Ohloh 提供了自动化的开源项目元数据采集管道，为 KnowledgeBase 提供持续更新的数据流。这个知识库的**沉没成本**和**路径依赖**构成了 Black Duck 后来十余年 SCA 行业的核心竞争壁垒。

中国有十几家开源代码扫描厂商，但没有一家具备这样的知识库基础设施——这不是技术能力的差距，是**制度基础设施的时间壁垒**：Black Duck 在 2003 年开始积累，Koders 在 2008 年贡献 766M 行代码，Ohloh 在 2006 年创立，数据优势是十几年的时间复利，后来者无法用商业手段快速复制。

> “Black Duck 的核心资产不是软件，而是它所掌握的开源世界的结构性知识图谱——而 Koders 和 OpenHub 正是这幅图谱的探照灯。”


## 说服律师和法务：制度翻译与话语建构

法律市场的形成，除了已经确立的产权主张，还需要形成行业共识。GPL 有 Copyleft 哲学主张，但哲学主张不会自动转化为企业法务的合规流程——这个转化需要**制度翻译**。

### Karen Copenhaver：不是"开源律师"，是制度翻译者

![Karen Copenhaver：制度翻译者](/images/history-of-open-source/fig-copenhaver-translator.png "传统开源律师 vs Karen Copenhaver：制度翻译者")

Doug Levin 找到 Karen Copenhaver [14]——一位 1979 年起在 IBM 工作的律师，经历过 IBM 混乱的操作系统开发和市场。十几年后 Black Duck 功成，Levin 对她的评价是：

> "道格在组建团队和宣传开源合规理念方面做得非常出色。他招募了凯伦-科本哈弗（Karen Copenhaver），她是一位非常著名的开源律师，作为这一使命的忠实信徒，她与各大科技公司的法律顾问就开源的适当使用进行了交谈。"[12]

但"非常著名的开源律师"这个表述掩盖了她真正的制度贡献。Copenhaver 的差异需要放在一个对比中来理解：

| 维度 | 传统开源律师（如 FSF 的 Eben Moglen） | Karen Copenhaver |
|---|---|---|
| **服务对象** | 社区 / 权利人 | 企业法务部门 |
| **话语体系** | 哲学（Copyleft、自由、精神） | 风险（诉讼概率、和解金、源代码公开成本） |
| **制度功能** | 制度守护者 | 制度翻译者 |
| **与市场的关系** | 外生于市场（社区内部） | 内生于市场（企业供应链） |
| **知识生产** | 法理学（GPL 作为合同的有效性） | 工程学（如何审计代码库中的 GPL 成分） |

Copenhaver 的核心制度贡献是：**把 GPL 从哲学话语翻译为可审计的商业义务**。

她在 2005 年 OSDL Enterprise Linux Summit 上的原话：

> "winning the right hearts and minds before charting a course of action. You should also avoid mandating a course of action advocated by lawyers alone."
> （"在制定行动方案之前先赢得正确的心和思维。你也应该避免仅由律师主张的行动方案。"[15]）

这句话的制度含义不是"先做公关再动手"，而是**她在建立一种新的专业话语**——开源合规不是"社区在告你"，而是"你在保护自己的供应链"。这是制度经济学的**话语建构**（discursive institutionalism）：合规的推广不靠法律强制（GPL 的可执行性在美国通过 Linksys 诉讼已经证明），靠的是**让企业法务从"被威胁者"转变为"主动管理者"**。

她的差异不是"她是律师但不同"，是**她创造了一个新的专业位置**——开源合规律师（open source compliance attorney）——这个位置在传统法律分类中不存在。她加入 Black Duck，后离开加入 Linux 基金会，两条路径分别代表了开源合规在企业内部和基金会层面的制度化。

> "没有律师和法务的支撑，合规工具无异于在沙滩上建高楼。"

这个比喻的制度含义是：工具（Protex/Code Center）解决的是信息不对称，但**让信息不对称被企业认知为需要解决的问题**——这件事只能由法律专业人士来完成。Copenhaver 就是这个翻译层。

## 工程和体系化

商业上的解决方案，并非是唯一的处理之道，毕竟这涉及到预算、PoE、支持和订阅等关键因素，然而，在走极端之外还有很多种路径，那就是中立的推广开源的机构所做的事情。让开源受益更多人和组织，那么，使用和识别开源组件的工程就是尚待解决的问题。

从制度经济学的视角看，**Black Duck → OpenHub → SPDX → SBOM → OpenChain → ISO 5230 构成了一条制度互补性的演进链条**。每一环都为下一环创造前提条件，每一环都降低了下一环的交易成本：

* **Black Duck (2002-2008)**：证明市场需求存在——没有商业验证，后续的标准化工作就没有需求基础。到 2007 年底，Black Duck 已有超过 575 家客户 [22]，包括 NEC、Citrix、IONA Technologies、Lehman Brothers 和 QNX，国际业务同比增长 93%，在阿姆斯特丹设立了国际总部，与日本 NEC 签署了代理商协议。Levin 自己在年终总结中说："It was a phenomenal year for Black Duck Software."
* **OpenHub (2010-2014)**：构建知识库基础设施——没有足够的数据积累，SPDX 的"成分表"就没有参照物。
* **SPDX (2010-2016)**：标准化数据格式——没有标准化，SBOM 的格式就五花八门，无法跨组织互认。
* **SBOM (2021 总统令)**：政治合法性——没有国家背书，OpenChain 就只是行业倡议，不具备约束力。
* **OpenChain → ISO 5230 (2019)**：国际可审计性——把行业实践提升为可认证的标准，合规从"风险管理"升级为"质量管理"。

这个链条的核心逻辑是：**每一环都以前一环的制度基础设施为前提，每一环都降低下一环的交易成本**。Black Duck 不是这个链条的起点，是触发器——它证明了合规市场可以商业化，才让后续所有标准化工作有了市场需求的基础。

### SPDX 与SBOM

有问题就一定会有解决问题的人，时间不等人，随着开源被广泛的应用，正如大家所预料到的那样，到了 2010 年，开源组件的复杂性让企业法务和工程师都感到头痛。一个软件可能包含上百个依赖，许可证彼此交织，兼容性问题乱如麻，手工追踪几乎不可能。
这时，Linux 基金会内部的一群工程师和法务专家发起了 SPDX（Software Package Data Exchange）[16]。他们的初心很简单：为软件建立一个机器可读的“成分表”，像食品标签一样清晰标注许可证、版权和来源。 SPDX 的坚持在于，它不是一份抽象标准，而是逐步落地，被社区和工具接受，最终成为事实标准。

2021年，美国总统令推动 SBOM（软件物料清单） 成为关键议题[17]。此时，SPDX 的坚持终于展现威力，它直接成为 SBOM 的核心格式之一。

## OpenChain

但即便有 SPDX，企业之间仍缺乏信任。一个供应商的合规清单，能不能保证真实可靠？

2016 年，Linux 基金会的 Shane Coughlan 牵头发起 OpenChain 项目[18]。他的初心是：把合规流程本身标准化，让供应链上的企业能够用共同语言沟通，减少摩擦。他常说的一句话是——“合规是一种质量管理，而不仅仅是风险管理。”

经过数年努力，OpenChain 在 2019 年被采纳为 ISO/IEC 5230 [24] 国际标准。这标志着开源合规第一次站上了与 ISO 9001、ISO 27001 等同级的高度，成为可审计、可认证的体系。而 OpenChain 的流程化思路，也开始与供应链安全治理结合。合规不再只是“避免诉讼”，而是扩展为建立数字信任。

### 开源合规峰会



至此，开源许可的合规进入了日常状态。



## 总结一下：

当人们讨论 GPL、MIT、Apache 这些“开源许可证”时，常误以为这不过是一套“开发者友善的建议规范”。但法律与合约的角度提供了全然不同的解释：

> 每一份开源许可，都是一纸授权合同（license agreement），其作用等同于商业软件的授权合同，只不过其“对价”不是金钱，而是责任（obligation）与协作。

Copyleft（如 GPL）更进一步，它将“继承义务”写入法律结构：凡是使用、修改 GPL 代码者，必须将其修改后的衍生代码也在同样许可下开源。这种“传染性”设计，被视为法律合约中的“持续义务条款（perpetual obligation clause）”。

在法经济学家波斯纳（Richard Posner）所强调的契约自由原则下，开源开发者对其代码拥有完整的授权支配力。这种支配力并未因其“免费”而消失，反而通过精妙的许可机制，构建了一个庞大的“合约网络”——这正是 SCA 工具要审查和追踪的核心。

SCA 工具的崛起、SBOM 的标准化、合规工作的职业化，本质上是对这套经济逻辑的制度回应。没有合规，开源就无法大规模融入商业供应链，也无法获得法律上的可托付性（legitimacy）。

这也是为什么波斯纳所强调的“效率导向的法律制度”理念，能在开源治理中找到深刻映射：

* 开源的制度效率不靠警察和法院，而靠许可可视性 + 合规自动化；
* 合规工具的出现，降低了交易成本，使软件生态中的信任可持续。

简而言之，**开源合规就是对“代码即契约”这一新型制度结构的工程回应**，它不是对开源自由的约束，而是让自由得以在商业世界中被托付、被执行、被依赖。

如果说专有软件时代，开发者的权力来自于许可收费的控制权，那么在开源时代，权力则来自于社区秩序的约束性执行。

开源不是“无政府主义”，也不是技术乌托邦。它是一种对“自愿协作”与“责任结构”高度敏感的制度工程。开源合规不是破坏自由，而是维护自由赖以运作的最低秩序。

从 GPL 诞生的那一刻起，这种秩序就已嵌入开源世界的 DNA。而 Doug Levin 之所以创办 Black Duck，是因为他看到了——在全球商业正面临“开放转型”之际，最宝贵的不是更多的自由，而是更多对自由的尊重。

## 番外：大分流 2.0 —— 中国市场的制度均衡

> "大分流 2.0"是适兕提出的分析框架：同一个技术（开源代码），在不同制度环境下会产生截然不同的市场形态——在欧美形成的是以市场化合规工具为基础的公地开源生态（FLOSS），在中国形成的是以国家主导的特许工程为基础的另一种开源形态。它不是"落后与先进"的价值判断，而是"制度结构分岔"的结构分析。

用一句话概括前面的分析：**开源合规市场的形成，是产权可执行性 + 信息不对称 + 跨部门治理需求三个制度条件同时满足后的必然产物。** 那么，当这三个条件在同一个制度环境中以不同形态存在时，市场的形态也会不同。

中国就是这样一个对照样本——不是"市场缺失"，而是**另一种制度均衡**。

![大分流 2.0：两种制度均衡](/images/history-of-open-source/fig-great-divergence-2.png "包容性产权制度路径 vs 特许工程路径")

### 一、制度环境的三层错位

把前文建立的 NIE 分析框架（新制度经济学——用产权界定、信息不对称、交易成本三个工具来分析市场为何形成、制度为何演化的分析框架，源自科斯、威廉姆森、诺斯等经济学家的研究，此处简称"制度分析框架"）映射到中国制度环境中，三个条件的满足程度截然不同：

| NIE 制度条件 | 美国 | 中国 |
|---|---|---|
| **产权可执行性（North）** | Linksys 诉讼证明 GPL 义务司法可执行；违规成本 = 诉讼 + 强制公开源代码 | 无先例。GPL 互惠义务在中国法律体系中的可执行性未经测试。违规成本趋近于零。 |
| **信息不对称（Akerlof）** | 并购尽调中买方需要 SCA 工具揭示代码库中的 GPL 成分；市场失灵可商业化修复 | 买方同样不知道目标公司代码库中的 GPL 成分，但"不知道"不会导致交易失败——因为 GPL 义务在中国没有强制执行机制，"被传染"不构成交易障碍 |
| **跨部门治理需求（Williamson）** | 企业法务、工程、合规三方之间存在真实的协调成本，工具可降低此成本 | 协调需求存在，但不产生市场化激励——因为合规不是企业自发的风险管理需求，而是外部制度压力（IPO、跨国供应链）投射的结果 |

三个条件的差异意味着：**Black Duck 的产品逻辑在中国面临的是制度环境的系统性失配，而非技术能力或市场竞争的问题。**

### 二、全球化压力的消退

在 2000 年代后期到 2010 年代初，中国正快速融入全球化。国内互联网与软件企业的雄心直指国际资本市场与跨国供应链。寻求在纳斯达克上市的科技公司、想成为思科/诺基亚/丰田的零部件软件供应商的企业，都面临一个现实问题：如何证明自己的软件堆栈不触犯 GPL 与其他开源协议。

**这一时期中国企业对 Black Duck 的需求，本质上是全球化制度压力在本地市场的投射。** 合规不是中国企业自发产生的风险管理需求，而是国际资本市场和跨国供应链的要求传导到国内企业——Black Duck 是这个传导链条上的工具节点。

Levin 在 2007 年 11 月的博客 [23] 中直接说明了国际扩张的逻辑——这不是战略选择，是制度必然：

> "It also stemmed from the realization that open source and composite software developments were challenges encountered by companies and developers all over the world — not just the U.S. market."
> "International expansion is a must-have for any growing company, not simply a nice-to-have."

Black Duck 的国际化不是"开拓市场"，是**合规制度压力本身是全球性的**——因为 GPL 的互惠义务是全球统一的产权安排，不受国界约束。中国市场、日本市场、欧洲市场面对的制度问题是相同的。这恰恰解释了为什么 Black Duck 的国际化增速（93% YoY）在 2007 年如此之高：全球化的程度决定了合规工具市场的规模。

然而，随着全球化的结构性变化，这一传导链条逐渐断裂：

* **市场重心内转**：越来越多的中国科技公司放弃美股 IPO，转向科创板、港股或只专注于国内市场。客户不再提出合规要求，工具就失去了“背书”对象。
* **法律约束缺位**：在欧美，违反 GPL 可能意味着诉讼、和解金、强制公开源代码；在中国，这类诉讼几乎没有先例。没有外部约束，合规就失去了“成本-收益”逻辑的必要性。
* **政策环境变化**："自主可控"成为国家战略重点。在这种氛围下，“开源就是免费的”这一误读不仅被容忍，甚至在某些叙事中被鼓励。合规从"必要成本"变成了"无足轻重"。

结果是，Black Duck 在中国的存在感逐渐减弱。它并非被技术淘汰，而是**失去了制度压力传导的通道**。市场需求并未彻底消失——新能源汽车出海、手机厂商的海外业务、面向欧美的 AI 初创公司仍需合规——但零散需求不足以支撑一个大规模市场。

### 三、特许工程与市场化合规：两种制度均衡

从大分流 2.0 的视角看，中国的案例揭示了一个比"制度缺失"更深刻的命题。

在欧美，开源治理走的是**市场化合规路径**：产权制度（GPL 可执行性）→ 信息不对称（并购尽调需求）→ 工具商业化（Black Duck/SCA）→ 标准化（SPDX/SBOM）→ 制度化（ISO 5230）。这是一条由**包容性产权制度**驱动的自发演化路径。

在中国，开源治理走的是**国家主导的特许工程路径**（"特许工程"指由大型企业或国家发起、在内部主导下完成治理和决策、对外以"开源"名义发布的软件项目——它有基金会外壳，但实质治理权由企业董事会掌握，与 FLOSS 社区自治的治理结构存在系统性差异）：国家或国企发起的开源项目（OpenEuler、OpenHarmony 等）不是从"产权保护"出发，而是从"技术主权"出发。这些项目的许可证选择、治理结构、社区建设逻辑，与 Black Duck 所服务的 FLOSS 生态存在系统性的差异。

这不是"制度好不好"的问题，是**制度结构不同导致市场形态不同**：

* 在美国，企业使用开源需要向**社区和权利人**负责——GPL 的互惠义务有司法可执行性，合规是企业的风险成本——合规市场（Black Duck/SCA）服务于这个责任结构。
* 在中国，企业使用开源向**国家和供应链**负责——GPL 互惠义务在司法实践中没有先例，合规成本趋近于零；"自主可控"的合规需求由国家项目（OpenEuler/OpenHarmony）来承载，而非由 SCA 工具市场来承载。

两种制度均衡各自内在一致，但**不可通约**（不可通约，指两种制度体系各自内部逻辑自洽，但彼此之间不存在可以直接翻译的共同标准——就像用中文语法去判断英文句子是否正确一样，标准本身就是不同体系的内生产物）——不是因为哪种更好，是因为**责任对象不同，市场机制就不可能相同**。在包容性产权制度下（"包容性"指产权规则对参与者普遍开放、可执行、非歧视，而非仅限少数特许对象），企业对社区的义务需要通过 SCA 工具来审计和证明——工具是义务的可操作化；在特许工程制度下，企业对国家的义务通过项目归属来确认——工具没有制度位置。Black Duck 的产品逻辑——"帮助企业向社区证明合规"——在特许工程体系中找不到对应的制度需求：向国家证明合规的不是 SCA 扫描报告，是**项目是否在国家主导的开源体系内**。

因此，Black Duck 在中国的兴衰不是商业故事，而是**大分流 2.0 的一个具体实例**：同一个技术（开源代码），在不同制度环境下产生了不同的市场形态——一边是市场化合规工具的繁荣，一边是特许工程代码的兴起。这不是"落后"与"先进"的区别，是**制度结构的分岔**。

> "希望在未来的日子里我们同产业界能够持续共同增强中国开源土地的肥力，更多优秀开发者、企业伙伴共同加入构建**中国开源一极和世界开源一极**的伟大使命和工作中来。为中国的开源事业贡献更多的力量。"
>
> ——任旭东，2022年7月21日，第十七届开源中国开源世界高峰论坛（OSChina World），获"2022中国开源杰出贡献人物"时获奖感言 [27]

任旭东在正式场合说出的这段话，恰恰是大分流 2.0 在治理者话语层面的精准表达："一极"暗示的不是与全球社区平等的参与，而是**可与全球中心并列的中心**；"土地的肥力"把开源从"使用者自治的公地"重新隐喻为"国家所有、授权耕种的土地"；"伟大使命"是**自上而下的、被赋予的方向**，而不是自下而上的、社区自发形成的秩序。

这不是一个理论分析得出的判断——这是一个同时担任华为首席开源联络官、OIF 董事会副主席、CNCF 基金会董事、EdgeGallery 董事会主席的治理者，在获奖感言中自己说出来的。**当制度分析的理论框架与治理者本人的话语在十年后精确交汇，这不是巧合，是结构决定的。**

> **编者后记（2026-08-19）**：本文完成当日（2026-08-18），"半导体行业观察"独家报道，Black Duck 公司宣布退出中国市场，关闭中国子公司并裁减四十余位员工（[原始报道](https://mp.weixin.qq.com/s/1i48DG-xU3thXjlOH3xJ7Q)）[28]。这一事件与本文中国番外的大分流 2.0 分析形成了结构性的互证：本文指出 Black Duck 的产品逻辑——"帮助企业向社区证明合规"——在特许工程体系中没有对应的制度需求，而这一报道提供了该判断的市场层面的注脚。

需要说明的是，本文的分析框架指向的是**制度结构的必然性**，而非对任何具体商业决策的评价。行业媒体给出的解释是"地缘政治风险"、"中国业务仅占约 5%"、"AI 替代"——这些是商业合理性的判断，指向的是**"为什么 Black Duck 选择离开中国"**。而我们在这篇文章中给出的判断，指向的是另一个层次——**"为什么在中国，Black Duck 这类产品从一开始就没有制度位置"**。前者是事后归因，后者是事前预判。

无巧不成书。适兕在写这篇文章时，并不知道 Black Duck 已经走在离开的路上——但制度分析的框架告诉我们：**当一个产品逻辑与制度结构不匹配时，它的离开不是选择，是结构决定的归宿**。

---

## 参考资料

1.  Salus, Peter H. (2005). The Daemon, the Gnu and the Penguin. Groklaw. 
2.  Doug Levin Looks Back https://medium.com/%40gcvp/doug-levin-looks-back-6f0a3c867803
3.  https://en.wikipedia.org/wiki/Free_Software_Foundation 
4.  https://www.tech-insider.org/free-software/research/1994/0104.html
5.  The Legend of Linksys https://web.archive.org/web/20090419230853/http://linuxinsider.com/story/qECCd2x743n32T/The-Legend-of-Linksys.xhtml 
6.  Conservancy's Copyleft Compliance Projects https://sfconservancy.org/copyleft-compliance/ 
7.  违反GNU许可证的情况 https://www.gnu.org/licenses/gpl-violation.html
8.  https://en.wikipedia.org/wiki/Halloween_documents
9.  https://www.theregister.com/2001/06/02/ballmer_linux_is_a_cancer/
10. https://www.linkedin.com/in/bduck1/details/experience/
11. https://www.linuxinsider.com/story/black-duck-provides-open-source-legal-tool-37427.html
12. https://en.wikipedia.org/wiki/Open_Hub
13. https://www.generalcatalyst.com/stories/congratulations-black-duck
14. https://www.linux-magazine.com/Online/News/Legal-Experts-Join-Linux-Foundation-Team
15. https://www.eweek.com/servers/black-duck-lawyer-due-diligence-can-help-avoid-ip-disputes/
16. https://en.wikipedia.org/wiki/Software_Package_Data_Exchange
17. Executive Order on Improving the Nation's Cybersecurity https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/
18. https://openchainproject.org/
19. Doug Levin, "Home Grown is Not the Best Way to Avoid Rude Surprises", bduck1, 2007-05-22. [URL](https://bduck1.blogspot.com/2007/05/home-grown-is-not-best-way-to-avoid.html)
20. Doug Levin, "Welcome to Open Source 3.0", 2007-08-06. [URL](https://bduck1.blogspot.com/2007/08/welcome-to-open-source-30.html)
21. Doug Levin, "Black Duck Software Acquires Koders, Inc.", 2008-04-28. [URL](https://bduck1.blogspot.com/2008/04/black-duck-software-acquires-koders-inc.html)
22. Doug Levin, "Black Duck Software's Great Customer Growth in 2007", 2008-01-15. [URL](https://bduck1.blogspot.com/2008/01/black-duck-softwares-great-customer.html)
23. Doug Levin, "Here we grow again ... into Asia", 2007-11-21. [URL](https://bduck1.blogspot.com/2007/11/here-we-grow-again-into-asia.html)
24. https://en.wikipedia.org/wiki/ISO/IEC_5230
25. Doug Levin, "SCO Poops Out!", bduck1, 2007-09-15. [URL](https://bduck1.blogspot.com/2007/09/sue-this.html)
26. Doug Levin, "A win for the good guys", 2007-12-17. [URL](https://bduck1.blogspot.com/2007/12/win-for-good-guys.html)
27. 华为首席开源联络官任旭东荣获"2022中国开源杰出贡献人物"奖，第十七届开源中国开源世界高峰论坛（OSChina World），2022-07-21. [URL](https://news.sina.com.cn/sx/2022-08-09/detail-imizmscv5520175.shtml)
28. 半导体行业观察，"独家：美国软件公司裁元，退出中国"，2026-08-18. [URL](https://mp.weixin.qq.com/s/1i48DG-xU3thXjlOH3xJ7Q)

