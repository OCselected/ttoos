---
categories:
- 开源
- 哲学
- 智识
- 思考
date: 2026-04-06T14:11:57+08:00
description: "本报告将对大卫·蒂斯的PFI框架进行详尽的拆解与深度解析，全面回顾作者的学术背景与理论贡献，深入探讨该经典文献在现代开源协作与平台治理研究中的具体应用与被引逻辑。在此基础上，本报告将进一步阐述PFI框架对“开源之道”的深远启发，并从战略的底层逻辑出发，深刻剖析为何依赖“Copy to China”模式的本土企业，在本质上难以触及蒂斯理论所描绘的最高战略境界。"
keywords:
- Open Source
- Culture
- Reading
- Insight
tags:
- 洞察分析
- 开源之道
- 阅读札记
title: "【阅读札记】价值捕获的战略力学：大卫·蒂斯《从技术创新中获利》在开源协作与全球模仿时代的深度解析"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
---

## 作者按

我们前两篇的阅读札记文章，同时引用了这篇 David J. Teece 的经典，我们通常认为开源对于企业来说就是一个搭便车的机会，但是，真正的高手是利用这个天然扩散的机会加大自己的价值捕获。如此来看，这篇文章是必读作品。

![](/images/2026/04/reading-Profiting-from-technological-innovation.jpg)

## **前言**

技术创新的基本悖论在于，技术价值的创造与经济回报的捕获之间往往存在着巨大的鸿沟。在工业与科技发展的历史长河中，人们反复观察到一个令人困惑的现象：那些率先将突破性技术或产品推向市场的先驱者（Innovators），往往无法获得与其技术贡献相匹配的丰厚财务回报 [1]。相反，绝大部分的商业利润经常被“快速的跟随者（Fast seconds）”、模仿者、客户，或者是相关商业能力（如制造、销售渠道）的供应商所攫取。这种创新者“为人作嫁衣”的现象，不仅打破了“先发优势（First-mover advantage）”的神话，更对企业的战略制定提出了极其严峻的挑战。

这一动态过程在加州大学伯克利分校教授大卫·J·蒂斯（David J. Teece）于1986年发表的开创性论文《从技术创新中获利：对整合、协作、许可与公共政策的启示》（Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy，以下简称PFI框架）中得到了最完美的理论映射与形式化 [1]。近四十年来，该框架不仅没有随着前数字时代的结束而褪色，反而成为了现代战略管理学、技术经济学以及创新政策研究的绝对基石。

近年来，在探讨数字平台治理与开源协作的最新学术文献中，PFI 框架依然是不可或缺的理论锚点。例如，在《点燃创新：来自PyTorch在开源协作中关于技术控制的证据》（Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration）[3] 以及《从专有到集体治理：平台参与战略如何演变》（From Proprietary to Collective Governance: How Platform Participation Strategies Evolve）[4] 两篇重量级研究中，学者们均将蒂斯的理论作为推演现代企业生态系统战略的核心坐标。更为重要的是，PFI框架提供了一个极其锐利的分析透镜，使我们能够深刻解构并批判当代衍生战略的局限性——尤其是曾经风靡一时的“Copy to China”（C2C，即“复制到中国”）商业模式 [5]。


## **第一部分：创新战略的架构师——大卫·J·蒂斯（David J. Teece）**

要完全理解PFI框架的学术重量与深远影响，必须首先将目光投向其缔造者大卫·J·蒂斯的学术与专业背景。蒂斯是产业组织学、战略管理学以及创新经济学领域的一座难以逾越的思想丰碑 [7]。他出生于新西兰，在坎特伯雷大学（University of Canterbury）完成早期的学术积累后，远赴美国宾夕法尼亚大学（University of Pennsylvania）深造，并获得了经济学博士学位 [8]。在宾夕法尼亚大学期间，他师从著名的经济学家埃德温·曼斯菲尔德（Edwin Mansfield），这为他日后在技术转移与创新经济学领域的研究奠定了极其坚实的量化与理论基础 [8]。

蒂斯目前担任加州大学伯克利分校哈斯商学院（Haas School of Business）的托马斯·W·塔舍（Thomas W. Tusher）全球商业讲席教授，并曾长期领导该校的管理研究中心（Center for Research in Management） [9]。然而，蒂斯的影响力远不止于学术象牙塔。作为一名活跃在商业战略与反垄断经济学前沿的实践者，他是伯克利研究集团（Berkeley Research Group, BRG）——一家全球领先的专家服务与管理咨询公司——的执行名誉主席与联合创始人，并且在此之前还联合创立了法律与经济学咨询集团（LECG） [7]。

这种跨越学术界与商业咨询界的双重视角，赋予了蒂斯一种罕见的能力：**他能够将社会科学中高度抽象的经济学、法学与组织社会学理论进行完美融合，并将其直接应用于解决极其复杂的现实企业管理难题** [10]。根据《科学观察》（Science Watch）的数据，在1995年至2005年期间，蒂斯是全球经济与商业领域被引用次数最多的文章的第一作者 [9]。在2020年《PLOS Biology》发表的一项关于全球科学家引文影响力的分析中，蒂斯在商业与管理综合领域被列为全球被引次数最高的学者 [8]。他不仅入选了著名的“Thinkers50”名人堂，还被埃森哲（Accenture）评为全球最具影响力的50位商业知识分子之一 [7]。

在蒂斯浩如烟海的学术著作中，有三大理论贡献构成了现代战略管理学的核心支柱： 首先便是1986年发表的PFI框架。这篇文章是《研究政策》（Research Policy）杂志创刊以来被引用次数最多的论文，它彻底改变了人们对技术创新与商业利润之间关系的认知 [8]。其次是他与加里·皮萨诺（Gary Pisano）和艾米·舒恩（Amy Shuen）于1997年共同提出的“动态能力（Dynamic Capabilities）”理论。该理论解释了企业如何在快速变化的环境中，通过有目的地感知（Sensing）、抓住（Seizing）机会，并持续重构与转型（Transforming）其资源基础，从而获得持续的竞争优势 [8]。最后，他在多产品企业理论（Theory of the multiproduct firm）以及企业边界与技术转移机制方面的研究，也极大地丰富了交易成本经济学与演化经济学的内涵 [8]。

蒂斯的PFI框架之所以具有划时代的意义，是因为它将创新经济学的分析单元，从传统的熊彼特式的“市场层面的垄断力量”，精准地转移到了“企业内部的具体资产结构”上 [14]。这一视角的转换，要求企业的管理者不再仅仅关注技术的先进性，而是必须将战略重心转移到知识产权的防御、行业标准的演进，以及互补性商业能力的编排之上。

## **第二部分：《从技术创新中获利》的理论重构与深度解析**

PFI框架的核心论点直接挑战了科学和工程驱动型公司中普遍存在的一种“错误幻觉（Mistaken illusion）”：**即只要开发出能够满足客户需求的卓越新产品，就自然能确保企业获得惊人的商业成功** [1]。蒂斯通过极其冷酷的商业逻辑证明，在市场上“拔得头筹（First to market）”仅仅是万里长征的第一步，它绝不能等同于可持续的战略优势 [1]。相反，创新者能否捕获价值，完全取决于三个基础性构建模块（Fundamental building blocks）的复杂互动：专有性体制（Regimes of Appropriability）、主导设计范式（Dominant Design Paradigm）以及互补性资产（Complementary Assets） [1]。

### **现象的解剖：先驱者的陨落与追随者的盛宴**

为了引出其理论框架，蒂斯在文章开篇列举了一系列令人扼腕叹息的商业案例，生动地展示了创新者是如何在商业化过程中败给模仿者或追随者的。

英国的电气音乐工业公司（EMI）是这一现象的典型代表。在20世纪70年代初，EMI的工程师发明了CT扫描仪（CAT scanner），这被公认为是自1895年X射线被发现以来放射学领域最伟大的医学进步。然而，尽管EMI在初期取得了成功，但在CT扫描仪引入美国市场短短六年内，该公司就失去了市场领导地位，并在第八年彻底退出了该项业务。相反，像通用电气（GE）和Technicare这样的后来者，尽管入场较晚，却成功主导了市场并赚取了丰厚的利润。

类似的悲剧在各个行业反复上演。皇冠可乐（RC Cola）是世界上第一家推出罐装可乐和无糖健怡可乐（Diet Cola）的小型饮料公司，但可口可乐和百事可乐迅速跟进模仿，利用其庞大的分销网络剥夺了RC可乐的所有先发优势。Bowmar公司推出了世界上第一台袖珍计算器，却无法抵挡来自德州仪器（Texas Instruments）和惠普（Hewlett Packard）的竞争，最终破产。施乐公司（Xerox）的帕洛阿尔托研究中心（PARC）开发了现代个人电脑的众多核心理念（如鼠标和图形用户界面图标），但施乐在商用计算机市场的尝试却以失败告终；相反，苹果公司（Apple）却利用施乐的这些理念推出了Macintosh，并大获成功。德哈维兰公司（de Havilland）的彗星1型喷气式客机比波音707早两年进入商业航空市场，却未能将其早期优势转化为市场胜势；MITS公司推出了第一台个人电脑Altair，在经历短暂的销售爆发后便默默无闻地滑入历史的深渊。

与之形成鲜明对比的，是“模仿者/追随者”的巨大成功。IBM在1981年推出的个人电脑（IBM PC）是一个经典的成功案例。在推出时，IBM PC所嵌入的架构和组件在技术上并不被认为是先进的，其技术打包方式也没有显著背离当时的行业惯例。然而，IBM PC却取得了不可思议的商业成功，并将MS-DOS确立为16位个人电脑的主导操作系统，最终彻底终结了早期创新者的优势。这种现象的普遍存在，迫使学术界必须寻找新的理论来解释利润的流向。

### **模块一：专有性体制（Regimes of Appropriability）**

专有性体制是指除去企业和市场结构之外，决定创新者能够多大程度捕获创新所产生利润的外部环境因素。这一体制主要由两个维度构成：技术的本质特征（如知识是隐性的还是显性的），以及法律保护机制（如专利、版权、商业机密）的效力。

蒂斯将专有性体制粗略地划分为一个从“严密（Tight）”到“薄弱（Weak）”的连续谱系。

* **严密的专有性体制：** 在极少数情况下，创新者拥有无懈可击的专利保护，或者产品的性质使得商业机密可以绝对有效地阻止模仿者获取核心知识（例如可口可乐糖浆的配方）。在严密的体制下，模仿极其困难，创新者几乎可以肯定能在一段时期内将创新转化为市场价值。  
* **薄弱的专有性体制：** 这是绝大多数技术创新所面临的常态。在现实中，专利很少能提供完美的保护；许多专利可以以较低的成本被竞争对手“绕过（Invented around）”。此外，如果创新所依赖的知识是高度编码化（Codified）的——即容易被记录、传播和接收——它就更容易暴露在工业间谍或逆向工程的威胁之下。相反，如果知识是隐性（Tacit）的，深深嵌入在组织的经验和个人的技巧中，那么模仿的难度就会显著增加。

蒂斯指出，当“模仿变得容易时，市场机制就会失灵”。在薄弱的专有性体制下，知识产权的护城河形同虚设，创新所产生的丰厚利润将不可避免地从知识产权的开发者手中流失，并逐渐沉淀到价值链上的其他参与者手中。

### **模块二：主导设计范式（The Dominant Design Paradigm）**

借鉴托马斯·库恩（Thomas Kuhn）关于科学革命演进的理论，以及阿伯内西（Abernathy）和厄特巴克（Utterback）关于产业技术演化的研究，蒂斯将主导设计范式的概念引入了利润捕获模型。一个特定产业的技术演化通常分为两个阶段：

1. **前范式阶段（Preparadigmatic Stage）：** 在产业发展的早期，产品设计呈现出高度的流动性。企业在生产中使用的是通用资本设备，制造过程具有高度的适应性。这一时期的市场竞争主要表现为各种截然不同的产品设计之间的竞争（例如早期的蒸汽汽车与内燃机汽车的竞争）。由于缺乏统一的标准，市场充满了试错，创新者很难在这个阶段准确预测出最终会被大众市场接受的设计形态。  
2. **范式阶段（Paradigmatic Stage）：** 经过市场的残酷筛选，某一种设计或一小类设计开始脱颖而出，能够相对完美地满足用户的综合需求，从而成为行业的主导设计（例如福特的T型车、IBM的360型计算机、道格拉斯的DC-3客机）。主导设计一旦确立，行业的竞争焦点就会发生戏剧性的转移：竞争将从产品设计转向价格与成本。此时，规模经济和学习曲线效应变得至关重要，现任企业开始大规模部署专用资本设备以降低单位成本。

主导设计的分水岭对于利润在创新者与追随者之间的分配具有决定性意义。在专有性薄弱的环境下，最初的创新者可能负责了基础的科学突破，但由于模仿容易，追随者可以在前范式阶段进入市场，在依赖基础设计的同时对产品进行关键的修改。当“抢椅子”的竞争游戏停止、主导设计浮出没水面时，拥有改良设计的追随者极有可能将其产品推举为行业标准，从而将原始创新者逼入极其不利的战略境地。

### **模块三：互补性资产（Complementary Assets）**

互补性资产是PFI框架中最具独创性、也是最具战略指导意义的核心概念 [14]。一项创新要想产生利润，仅仅拥有关于如何做得比现有技术更好的技术诀窍（Know-how）是远远不够的。这项技术必须在市场上被商业化，而成功的商业化几乎总是需要将该技术诀窍与其他能力或资产结合使用。这些服务和资产包括具有竞争力的制造能力、分销渠道、营销网络、以及售后支持系统等。

根据这些资产与创新技术之间的相互依赖程度，蒂斯将互补性资产划分为三大类：

* **通用型资产（Generic Assets）：** 这类资产是通用目的的，不需要为了特定的创新而进行定制化调整。例如，生产新型跑鞋所需的通用制造设备。  
* **专用型资产（Specialized Assets）：** 指互补性资产对创新技术存在单向依赖关系的资产。或者是创新单向依赖于某项资产。  
* **共专用型/协同专用型资产（Cospecialized Assets）：** 指创新技术与互补性资产之间存在双向、深度的相互依赖关系。例如，集装箱化运输技术（Containerization）的引入，要求在远洋运输和港口码头部署大量的协同专用资产；马自达（Mazda）引入转子发动机，就必须同步建立高度专用的维修网络，两者相互依存，缺一不可。

### **战略的微积分：整合与协作的抉择**

在明晰了上述三大构建模块后，蒂斯为企业制定技术商业化战略提供了一个严密的逻辑推演框架。在大多数情况下，创新者面临的是一个“薄弱的专有性体制”（技术容易被模仿）。此时，商业成功的关键完全取决于创新者以何种条件获得所需的互补性资产。

如果商业化所需的互补性资产是**通用型**的，由于市场上存在充分的竞争供给，创新者无需承担巨大的财务风险去重复建设这些资产，只需通过简单的**契约/协作模式（Contractual modes）**（如许可协议、代工合同）即可在市场上获得。

然而，如果所需的互补性资产是**专用型或共专用型**的，简单的契约关系就会使创新者暴露在极大的商业风险之中。因为一旦签订合同，任何一方都需要进行不可逆的资本投资，而如果双方关系破裂，这些投资将变得毫无价值。这种双边垄断的格局极易引发“敲竹杠（Hold-up）”的机会主义行为。在这种情况下，拥有或控制着这些关键专用互补资产的企业（例如掌握着稀缺分销渠道或特定制造产能的巨头）将处于绝对的战略优势地位。

为了防止利润被这些互补性资产的所有者榨干，创新者必须果断地扩展其企业边界，采取**整合战略（Integration modes）**——即通过内部自建或并购的方式，将这些专用或共专用互补性资产纳入自己的所有权控制之下。蒂斯深刻地指出，在容易被模仿的行业中，创新者如果没有在互补性资产上建立起“先发优势（Prior position）”，最终极有可能一无所获。这就是为什么“制造能力往往至关重要（Manufacturing often matters）”，那些只有实验室技术而缺乏强大制造与相关配套能力的创新型公司，最终往往会在市场竞争中惨遭淘汰。

前文提及的EMI公司就是死于对这一战略逻辑的无知。EMI虽然拥有CT扫描仪的尖端技术，但它缺乏在全球医疗市场进行销售、人员培训和售后维护的专用互补性资产，也未能及时建立有效的整合或深度合作战略。结果，GE等拥有庞大医疗设备营销服务网络的追随者，迅速通过反向工程模仿了技术，并利用自身的互补性资产护城河彻底摧毁了EMI的业务。

## **第三部分：现代学术的回响——PFI在平台治理与开源协作研究中的应用**

尽管PFI框架诞生于以物理制造和硬件创新为主导的时代，但其关于专有性、资产控制和价值捕获的底层逻辑展现出了惊人的理论张力。在数字经济、软件平台与开源生态系统蓬勃发展的今天，PFI框架仍然是顶尖学者剖析复杂治理模式的战略解剖刀。在用户提供的两篇当代重要研究文献中，蒂斯的理论均被作为推演论点的核心依据。

### **文献应用一：《从专有到集体治理：平台参与战略如何演变》**

由斯沃恩·奥马霍尼（Siobhan O'Mahony）和丽贝卡·卡普（Rebecca Karp）撰写的这篇文章，考察了IBM最初创立的Eclipse软件开发平台，是如何在7年的时间内，从一个封闭的专有系统演变为一个完全开放的集体治理生态的。该研究的核心在于探讨当平台领导者改变访问（Access）与控制（Control）的治理规则时，平台参与者（外部互补者）的战略将如何随之调整。

**引用Teece (1986) 的语境与原因：** 在该文献的“平台领导力与开放治理（Platform Leadership and Open Governance）”部分，作者深入探讨了平台领导者在面临“开放”与“封闭”路线时的战略权衡。虽然开放平台能够增加采用率、促进实验并降低创新成本，但这也必然带来巨大的风险——如向竞争对手暴露专有信息、加剧代码的分叉（Forking）和市场竞争。

正是在论证\*\*“为何企业会选择维持封闭的专有平台”这一反向逻辑时，文章精准地引用了蒂斯（1986）的理论 4。作者指出，如果一个企业的商业模式高度依赖于“紧密集成（Tight integration）、集中的决策制定，或专门的知识产权（Specialized intellectual property）”，那么维持对封闭平台的绝对控制，就是为了“增加利润并防止价值被挪用（Increase profits and prevent appropriation）”\*\* 。

通过引用蒂斯，该文为IBM在早期维持Eclipse的专有性（Proprietary Mode）提供了坚实的理论背书。在专有性体制下，IBM 通过保密协议（NDAs）控制访问权，正是为了保护其专用的技术资产，降低协调成本，并在不受外部干扰的情况下编排平台架构。然而，文章进一步揭示了这种PFI经典封闭战略在平台生态中的局限性：过度严密的控制导致了外部企业的“供应担忧（Provisioning concerns）”。外部开发者害怕被IBM“敲竹杠”，因此拒绝进行深度投资。这就迫使平台必须向集体治理（Collective Governance）跃迁，通过建立可预测的规则来消除外部互补者的投资风险，从而最终实现平台生态的繁荣。

### **文献应用二：《点燃创新：来自PyTorch在开源协作中关于技术控制的证据》**

丹尼尔·岳（Daniel Yue）与弗兰克·内格尔（Frank Nagle）的这篇工作论文，聚焦于当前人工智能领域的基础设施——PyTorch框架 。2022年，Meta（原Facebook）将其对PyTorch的技术控制权完全移交给了独立的Linux基金会 。这项研究试图衡量，这种将控制权从单一企业转移到开源集体的举措，是如何影响外部企业参与该开源项目意愿的。

**引用Teece (1986) 的语境与原因：** 在该文献的引言部分，作者在界定其研究对“开放创新中的价值捕获”这一战略管理子领域的理论贡献时，将蒂斯（1986）作为了传统战略思想的锚点。

作者指出，以蒂斯（1986）为代表的传统战略文献，主要强调\*\*“直接的价值占有（Direct value appropriation）”**，并将其视为预测企业是否会参与创新协作的主要变量。在传统的PFI逻辑中，这种价值的捕获往往是通过对**下游互补性资产（Complementary assets）\*\*的控制来实现的。

然而，《点燃创新》一文通过引用蒂斯来衬托自身视角的创新性：他们引入了“控制权透镜（Control rights lens）”。在开源软件中，代码的访问权（Access rights）已经完全开放，传统意义上通过知识产权直接获取垄断利润的路径已被切断。作者实证发现，在开源生态中，驱动企业参与的核心动力已经转变为对\*\*“未来价值占有（Future value appropriation）”**的预期，而这种预期是由**事后的控制权（Ex-post control rights）\*\*来保障的。

该研究的实证结果完美地印证了蒂斯关于“共专用资产（Cospecialized assets）与敲竹杠风险”的深层逻辑。研究发现，当Meta放弃绝对控制权后，作为PyTorch用户的应用开发者（Users，仅依赖通用接口，外部选择多）并没有增加贡献；但作为**互补者（Complementors）的芯片制造商**（如Intel、AMD，其硬件是高度依赖软件架构的共专用资产）的参与度却大幅飙升。这是因为，在Meta独裁时期，芯片厂商如果投入巨资优化适配，将面临极高的被Meta改变技术路线而“敲竹杠”的风险。Linux基金会的集体治理结构，本质上是解除了这种敲竹杠风险，使得芯片制造商敢于放心地将他们高昂的互补性资产与开源框架进行深度绑定。

| 对比维度 | 《从专有到集体治理》（Eclipse研究） | 《点燃创新》（PyTorch研究） |
| :---- | :---- | :---- |
| **研究领域** | 平台生态系统治理、参与者战略演变 | 开源协作、技术控制权、产权理论 |
| **引用Teece (1986) 的位置** | 第7页：平台领导力与开放治理探讨 | 第6页：引言中的理论贡献界定 |
| **引用Teece的直接目的** | 解释维持**封闭/专有平台**的战略合理性：保护专用知识产权，防止价值被外部竞争对手挪用（Appropriation）。 | 确立传统战略学的基准：企业参与创新取决于通过控制**互补性资产**实现**直接价值占有**的预期。 |
| **对PFI框架的理论延伸** | 证明了过度追求专有控制会导致外部参与者产生资源供给担忧，必须通过**集体治理**建立时间与范围的可预测性，才能繁荣生态。 | 将焦点从有形资产的直接占有，转向了开源环境下的**未来控制权**；证明了消除控制权导致的\*\*“敲竹杠”风险\*\*是吸引共专用资产投资的前提。 |

无论是Eclipse的阵痛还是PyTorch的跃升，都向我们揭示了一个全新的开源战略公式：**放弃控制权 = 消除敲竹杠风险 = 吸引共专用资产投资 = 点燃生态创新**。

## **第四部分：PFI框架对“开源之道”的战略启发与降维打击**

乍看之下，开源软件（OSS）的运作模式似乎与大卫·蒂斯的PFI框架背道而驰。蒂斯的模型假设创新者总是渴望一个“严密的专有性体制”，试图通过专利、商业机密和版权来筑起高墙，将模仿者拒之门外。而“开源之道（The Open Source Way）”—— 或称基于对等生产（Peer production）的开放协作——却反其道而行之：创新者主动放弃版权壁垒，通过开源许可证故意创造一个**极其薄弱的专有性体制**，鼓励全世界（包括竞争对手）自由地复制、修改和分发底层技术 [15]。

然而，如果运用PFI框架进行深度的战略解构，就会发现科技巨头们（如IBM、谷歌、Meta、红帽）不仅没有违背蒂斯的教诲，反而是在更高维度的生态系统中，运用PFI框架执行了极其冷酷且高效的商业降维打击。开源，绝非乌托邦式的慈善，而是一场争夺“主导设计”与“核心互补资产”的血腥战争 [16]。

### **1\. 故意制造薄弱专有性，以暴力夺取“主导设计”**

在数字经济中，软件基础设施通常处于行业技术栈的底层 [18]。如果企业试图将这些底层技术封闭起来并收费，将面临巨大的市场推广阻力，因为外部开发者不愿意被单一供应商绑定（Vendor lock-in）。

科技巨头深知PFI框架中关于“主导设计（Dominant Design）”的威力 [1]。为了在技术发展的“前范式阶段”迅速结束混乱的竞争，巨头们选择将数亿美元研发的基础代码开源。这种主动放弃知识产权保护的行为，极大降低了技术的采用门槛。庞大的开发者社区迅速涌入，海量的反馈与迭代让这项开源技术在极短的时间内成为行业事实上的标准——即确立了不可撼动的“主导设计” [15]。

蒂斯原本认为薄弱的专有性体制是创新者的“噩梦”，但现代巨头通过开源许可证（如Apache或GPL），将这种“噩梦”武器化了。他们利用开源的互惠性或低门槛，强行把对手的高利润业务层“商品化”（变成免费的公共品），从而将利润池驱赶到自己牢牢掌控的“共专用互补资产”（如云服务、AI算力集群）中去。

### **2\. 利润池的转移：通过共专用互补资产实施价值捕获**

主导设计一旦确立，核心软件本身就变成了无利可图的商品（Commodity）[20]。此时，PFI框架的第三个构建模块开始发挥决定性作用：**当核心创新被商品化时，竞争的焦点和利润的蓄水池，将不可逆转地转移到商业化所必需的“互补性资产”上** [20]。

开源战略的精髓在于：**将别人掌控的层级开源掉使其贬值，同时在自己拥有深厚护城河的层级建立起高度专用的互补性资产，从而实现价值捕获。**

* **Chromium 与 WebKit：** 谷歌主导了Chromium，而苹果此前开源了WebKit。两大巨头将现代浏览器内核这一极其庞大、复杂的底层技术彻底商品化。由于内核开源且免费，任何竞争对手都难以再靠“售卖浏览器”或技术授权来获利。然而，谷歌的真正目的在于掌控互联网入口，其价值捕获点在于将Chromium与谷歌搜索、账户生态及庞大的广告网络（极其强大的共专用互补资产）进行深度绑定。  
* **LLVM 编译器架构：** 苹果当年大力投资并支持了LLVM这一开源编译器基础设施项目。此举打破了由自由软件基金会GCC长期垄断的局面，将编译器后端商品化。苹果虽然没有直接靠LLVM收费，但利用LLVM的高度模块化优势，苹果顺势推出了专有的Swift语言，并针对自家的芯片（如早期的A系列到如今的M系列Apple Silicon）进行了极致的软硬件协同优化。在这里，LLVM这套开源底层被转化为苹果加固其闭源iOS和macOS生态护城河的核心互补资产。  
* **VS Code (Visual Studio Code)：** 微软通过免费开源VS Code，以极快的速度终结了代码编辑器市场的碎片化竞争。编辑器本身并不赚钱，但VS Code却成为了微软捕获开发者价值的超级入口。微软通过掌握VS Code周边的私有/共专用互补资产（例如：核心的语言服务器协议LSP商业实现、Remote Development远程开发闭源组件、GitHub Copilot的深度优先集成，以及与Azure云服务的无缝部署接口）成功将原本无利可图的开源文本编辑器，变成了驱动其云服务与AI业务收入的战略引擎。  
* **IBM 的战略算计：** 在Eclipse案例中，IBM高管承认开源Eclipse是为了“烧毁Sun的市场” [4]。通过将开发环境商品化，IBM有效地削弱了竞争对手在软件层的盈利能力，并将利润贡献点向下转移到了IBM的服务器硬件，向上转移到了企业IT咨询服务上——这些都是IBM牢牢掌控的**共专用互补性资产**。  
* **谷歌与安卓（Android）：** 谷歌免费开源安卓操作系统，打破了苹果iOS和微软的垄断。安卓是免费的通用资产，但运行安卓高度依赖谷歌移动服务（GMS，如应用商店、地图），这些才是谷歌真正的**专用互补性资产**。  
* **红帽（Red Hat）的服务模式：** Linux内核免费，但红帽建立起了极其强大的“专业技术支持网络与认证体系”——这是一种基于组织隐性知识的**高度专用的互补性资产** [21]，从而开创了最成功的开源商业模式。

### **3\. 动态能力与生态系统的编排（Ecosystem Orchestration）**

随着时间的推移，蒂斯对PFI框架进行了扩展，将其与他提出的“动态能力”理论相结合 [22]。在开源时代，单打独斗的垂直整合已经无法应对复杂的技术栈。捕获开源技术的价值，要求企业必须具备作为“生态系统编排者（Ecosystem Orchestrator）”的动态能力 [22]。如PyTorch案例所示，Meta放弃对基础框架的专有控制权交由Linux基金会治理，化解了硬件商的“敲竹杠”担忧，撬动了产业链数百亿美元的共专用投资共同繁荣其技术路线，这正是生态系统编排的顶级动态能力体现 [3]。

## **第五部分：战略的鸿沟——为什么本土“Copy to China”企业难以理解PFI的境界**

在过去二十年间，中国互联网与科技行业在很大程度上受惠于一种被称为“Copy to China”（C2C，复制到中国）的商业模式 [5]。这一模式的本质是“适应性创新（Adaptive innovation）”：即密切关注硅谷或全球市场诞生的原创性商业模式与底层技术，迅速将其复制并根据中国国内市场的经济需求、用户习惯和监管环境进行改良 [23]。

不可否认，C2C模式造就了中国第一代互联网巨头的辉煌。然而，随着全球化竞争的加剧和硬科技（Deep Tech）时代的到来，这种模式的增长引擎正在急剧熄火。更深层次的问题在于，长期浸淫在C2C模式下的本土企业管理者，其战略思维往往被扭曲，导致他们极其难以理解、甚至本能地排斥大卫·蒂斯在PFI框架中所揭示的高维战略境界。运用PFI框架的理论解剖刀，我们可以清晰地透视这种模式与世界级战略之间的巨大鸿沟：

### **1\. 虚幻的“严密专有性体制”（The Illusion of Tight Appropriability）**

在蒂斯的框架中，模仿者只有在“专有性体制薄弱”时才能从创新者手中夺取利润 [1]。历史上的C2C企业之所以能够在中美互联网竞争的早期胜出，表面上看是因为外国企业的技术壁垒不深，但实际上，其核心驱动力是**非市场因素人为制造的“合成严密专有性”**。通过特许经营牌照限制、网络防火墙以及国内合规政策，中国的C2C企业在实质上获得了一个国家级护城河 [5]，强行将外国原创者排斥在市场之外。

**境界差距：** 由于利润获取过于容易，C2C企业产生了严重的路径依赖，误把“政策红利”当成了自身的“技术专有性”。他们很少经历过在真正全球化、无边界的“前范式阶段”中，依靠底层技术突破和残酷的市场标准竞争去赢取“主导设计”的淬炼 [23]。

### **2\. 沉溺于通用型互补资产，缺乏共专用全球资产的积淀**

蒂斯指出，可持续的利润捕获依赖于对“专用型”或“共专用型”互补资产的牢牢掌控。C2C企业主要依赖的是**高度本土化的通用型互补资产（Generic local assets）**：庞大且廉价的工程师红利、地推铁军、深谙本土下沉市场的营销手段，以及基于国内庞大人口基数的规模经济 [24]。

**境界差距：** 通用型资产和本土红利是不具备全球可转移性的。当本土企业走向世界时，由于长期满足于在应用层进行商业模式的微创新，他们严重忽视了建立具有全球威慑力的**共专用互补性资产（Cospecialized assets）**——例如操作系统底层API的控制权或深度融合的软硬件基础架构 [18]。没有这种共专用资产的捆绑，海外扩张极易被替换或颠覆。

### **3\. 匮乏的生态系统编排能力与“零和博弈”的闭环**

PFI框架的最高境界，要求企业超越自身边界，作为生态系统编排者来协调全球的知识、资产与利益分配 [22]。世界级的科技巨头敢于主动舍弃对核心代码的专有控制权，通过集体的正和博弈化解产业链上下游的担忧 [3]。

**境界差距：** C2C模式下成长起来的本土企业，深植着“赢者通吃”与“流量收割”的零和博弈思维。在国内竞争中，巨头们习惯了利用流量优势进行强制性的“二选一”，或是通过无边界的垂直整合来封闭生态。面对全球开源协作时，这种强烈的控制欲使得他们极难理解“退一步海阔天空”的治理艺术，难以吸引全球顶尖的硬件商和软件企业为其生态投入巨资 [4]。

### **4\. 陷于内卷式的恶性竞争，拒绝底层创新的价值捕获**

笔者以前写过一篇文章：[分析完百度、阿里、京东和美团的2025年财报，我找到了内卷的根由](/posts/thinking-in-open-source/after-analyzing-the-financial-reports-abmj/)，分析国内部分大型科技企业在面对技术演进时，往往陷入一种“内卷式”的恶性竞争。在PFI框架下，真正的战略家（如谷歌开源Chromium、微软开源VS Code）是在基础创新（即开放底层）之上，通过构建高壁垒的互补性资产来做大生态并捕获高维度价值。

然而，国内企业在看到某种开源技术或新模式时，往往不是去思考如何通过共专用资产进行互补，而是直接进行低维度的同质化复制。他们极其擅长通过巨额补贴、打价格战或利用“免费模式”等疯狂消耗自身通用资产的方式去抢夺存量市场的流量。这种短视的“内卷”行为主动摧毁了健康的专有性体制与生态边界，导致整个行业都在做低水平的重复建设。他们实质上“拒绝”了通过底层创新和构建全球互补性资产来实现价值捕获的艰难道路，将原本可能产生世界级“主导设计”的战略机遇，降级为了单纯的执行力比拼和无底线的资本消耗战。在内卷中，没有企业能静下心来培育大卫·蒂斯所描述的那种深厚的、难以被模仿的“战略护城河”。

### **5.小结**

本土 C2C 企业并非没有动态能力，而是其动态能力发生了“畸变”。他们在“感知（Sensing）”政策漏洞和本土下沉市场需求，以及“抓住（Seizing）”国内流量红利方面表现出了极高的能力；但在“重构（Transforming）”全球化、建立基于契约精神的开源生态信任方面，能力几乎为零。这种畸变的动态能力，锁死了他们向蒂斯所述的“生态系统编排者”跃迁的路径。

## **结语**

大卫·J·蒂斯的《从技术创新中获利》之所以能够穿越工业时代与数字时代的边界，成为战略管理学的永恒经典，在于它以冷酷而精确的经济学逻辑，刺破了“技术决定论”的浪漫泡沫。它向世人宣告，在残酷的商业竞争中，创新的火花若无严密的战略护航，必将沦为他人的战利品。

从解释EMI在CT扫描仪上的惨痛败局，到论证IBM PC的后来居上；从指导IBM Eclipse平台向集体治理的壮士断腕，到解析Meta PyTorch以退为进的生态阳谋，PFI框架中的“专有性体制”、“主导设计”与“互补性资产”三大齿轮，至今仍在驱动着全球科技巨头们的战略博弈。对于正处于由“制造大国”向“创新强国”艰难转型的中国企业而言，彻底抛弃C2C的路径依赖，摆脱无底线的内卷式流量竞争，深刻领悟PFI框架的精髓，在基础研究、开放生态治理以及全球共专用资产的培育上进行结硬寨、打呆仗的战略投入，才是跨越中等技术陷阱、走向世界科技舞台中央的唯一正道。

####  **参考资料**

1. David J. Teece. Profiting from technological innovation: Implications for integration, collaboration,licensing and public policy. Research Policy, 15(6):285–305, December 1986. ISSN 0048-7333. doi: 10.1016/0048-7333(86)90027-2. URL http://www.sciencedirect.com/science/article/pii/0048733386900272.
2. Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy \- WIPO, accessed April 6, 2026, [https://www.wipo.int/ru/web/economics/search-details?id=F7A626NU](https://www.wipo.int/ru/web/economics/search-details?id=F7A626NU)  
3. Yue, Daniel, and Frank Nagle. "Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration." Harvard Business School Working Paper, No. 25-013, September 2024.
4. Siobhan O’Mahony and Rebecca Karp. From proprietary to collective governance: How do platform participation strategies evolve? Strategic Management Journal, 43(3):530–562, March 2020. ISSN 0143-2095, 1097-0266. doi: 10.1002/smj.3150. URL https://onlinelibrary.wiley.com/doi/10.1002/smj.3150.
5. Signature redacted \- DSpace@MIT, accessed April 6, 2026, [http://dspace.mit.edu/bitstream/handle/1721.1/90069/890141441-MIT.pdf?sequence=2](http://dspace.mit.edu/bitstream/handle/1721.1/90069/890141441-MIT.pdf?sequence=2)  
6. Exaptation dynamics and entrepreneurial performance: evidence from the internet video industry \- Oxford Academic, accessed April 6, 2026, [https://academic.oup.com/icc/article/25/1/181/2357518](https://academic.oup.com/icc/article/25/1/181/2357518)  
7. David Teece \- UC Berkeley Research, accessed April 6, 2026, [https://vcresearch.berkeley.edu/faculty/david-teece](https://vcresearch.berkeley.edu/faculty/david-teece)  
8. David Teece \- Wikipedia, accessed April 6, 2026, [https://en.wikipedia.org/wiki/David\_Teece](https://en.wikipedia.org/wiki/David_Teece)  
9. David J. Teece \- UC Berkeley Haas, accessed April 6, 2026, [https://haas.berkeley.edu/faculty/teece-david/](https://haas.berkeley.edu/faculty/teece-david/)  
10. Professor David Teece \- Bio \- Institute for Manufacturing (IfM), accessed April 6, 2026, [https://www.ifm.eng.cam.ac.uk/events/ifm-briefings/ifm-briefing-capabilities-redirect/professor-david-teece-bio/](https://www.ifm.eng.cam.ac.uk/events/ifm-briefings/ifm-briefing-capabilities-redirect/professor-david-teece-bio/)  
11. Biography \- David J. Teece, accessed April 6, 2026, [https://www.davidjteece.com/biography](https://www.davidjteece.com/biography)  
12. Dynamic Capabilities \- David J. Teece, accessed April 6, 2026, [https://www.davidjteece.com/dynamic-capabilities](https://www.davidjteece.com/dynamic-capabilities)  
13. Dynamic Capabilities | David Teece | Services \- BRG, accessed April 6, 2026, [https://www.thinkbrg.com/services/performance-improvement/dynamic-capabilities/](https://www.thinkbrg.com/services/performance-improvement/dynamic-capabilities/)  
14. Exhibit O-104-DP \- Copyright Royalty Board, accessed April 6, 2026, [https://www.crb.gov/proceedings/2006-3/riaa-ex-o-104-dp.pdf](https://www.crb.gov/proceedings/2006-3/riaa-ex-o-104-dp.pdf)  
15. How to Capture Value from Innovation: Shaping Intellectual Property and Industry Architecture \- California Management Review, accessed April 6, 2026, [https://cmr.berkeley.edu/assets/documents/sample-articles/2007\_50\_1\_5468.pdf](https://cmr.berkeley.edu/assets/documents/sample-articles/2007_50_1_5468.pdf)  
16. Is there collaboration in open collaboration? The role of producers and corporate users in Open Source software development | Request PDF \- ResearchGate, accessed April 6, 2026, [https://www.researchgate.net/publication/398161929\_Is\_there\_collaboration\_in\_open\_collaboration\_The\_role\_of\_producers\_and\_corporate\_users\_in\_Open\_Source\_software\_development](https://www.researchgate.net/publication/398161929_Is_there_collaboration_in_open_collaboration_The_role_of_producers_and_corporate_users_in_Open_Source_software_development)  
17. Hand in Glove: Open Innovation and the Dynamic Capabilities Framework \- Strategic Management Review, accessed April 6, 2026, [https://strategicmanagementreview.net/assets/articles/Teece%20OI.pdf](https://strategicmanagementreview.net/assets/articles/Teece%20OI.pdf)  
18. Profiting from Innovation in the Digital Economy: Standards, Complementary Assets, and Business Models in the Wireless World \- eScholarship.org, accessed April 6, 2026, [https://escholarship.org/content/qt58h69717/qt58h69717\_noSplash\_259dfc0380dba7d7ee3405c2f4830014.pdf](https://escholarship.org/content/qt58h69717/qt58h69717_noSplash_259dfc0380dba7d7ee3405c2f4830014.pdf)  
19. Profiting from technological innovation \- Copyright Royalty Board, accessed April 6, 2026, [https://www.crb.gov/proceedings/2006-3/riaa-ex-o-101-dp.pdf](https://www.crb.gov/proceedings/2006-3/riaa-ex-o-101-dp.pdf)  
20. Q\&A. How one can develop a business model around open source? | TIM Review, accessed April 6, 2026, [https://www.timreview.ca/article/89](https://www.timreview.ca/article/89)  
21. 12830 VALUE CAPTURE IN OPEN INNOVATION SYSTEMS: A LONGITUDINAL ANALYSIS OF RADICAL CIRCLES \- IRIS, accessed April 6, 2026, [https://www.iris.sssup.it/retrieve/dd9e0b32-35d3-709e-e053-3705fe0a83fd/12830.pdf](https://www.iris.sssup.it/retrieve/dd9e0b32-35d3-709e-e053-3705fe0a83fd/12830.pdf)  
22. Dynamic and integrative capabilities for profiting from innovation in digital platform-based ecosystems | Request PDF \- ResearchGate, accessed April 6, 2026, [https://www.researchgate.net/publication/324255521\_Dynamic\_and\_integrative\_capabilities\_for\_profiting\_from\_innovation\_in\_digital\_platform-based\_ecosystems](https://www.researchgate.net/publication/324255521_Dynamic_and_integrative_capabilities_for_profiting_from_innovation_in_digital_platform-based_ecosystems)  
23. Beijing's 're-innovation' strategy is key element of U.S.-China competition | Brookings, accessed April 6, 2026, [https://www.brookings.edu/articles/beijings-re-innovation-strategy-is-key-element-of-u-s-china-competition/](https://www.brookings.edu/articles/beijings-re-innovation-strategy-is-key-element-of-u-s-china-competition/)  
24. Ambidextrous Alliances, Complementary Assets, and Firms' Breakthrough Innovations: Evidence from High-Tech Firms in China \- MDPI, accessed April 6, 2026, [https://www.mdpi.com/2071-1050/17/7/2812](https://www.mdpi.com/2071-1050/17/7/2812)  
25. Appropriability Strategies to Capture Value from Innovation \- Scheller College of Business, accessed April 6, 2026, [https://www.scheller.gatech.edu/directory/research/strategy-innovation/ceccagnoli/pdf/appropriability-strategies-to-capture-value-from-innovation.pdf](https://www.scheller.gatech.edu/directory/research/strategy-innovation/ceccagnoli/pdf/appropriability-strategies-to-capture-value-from-innovation.pdf)  
26. (PDF) Open-Technology Maneuvering in Digital Infrastructures \- ResearchGate, accessed April 6, 2026, [https://www.researchgate.net/publication/378407844\_Open-Technology\_Maneuvering\_in\_Digital\_Infrastructures](https://www.researchgate.net/publication/378407844_Open-Technology_Maneuvering_in_Digital_Infrastructures)

#### 下一篇文献：

* Frank Nagle. Learning by Contributing: Gaining Competitive Advantage Through Contribution to Crowdsourced Public Goods. Organization Science, 29(4):569–587, June 2018. ISSN 1047-7039. doi: 10.1287/orsc.2018.1202. URL http://pubsonline.informs.org/doi/full/10.1287/orsc.2018.1202. Publisher: INFORMS.

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Social Hacker，协作机制设计者。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 AI 助手（如 Gemini 3.1 Pro 等），「开源之道」·窄廊 负责在对话中作为镜像与反弹板，提出问题、提供理论切入点并对推演进行反馈。仅偶尔进行双重验证！