---
categories:
- 开源
- 哲学
- 智识
- 思考
date: 2026-04-08T14:11:57+08:00
description: "本文基于 Frank Nagle 的“通过贡献学习”理论，深入解剖了数字经济下企业参与开源的深层战略动机。文章指出，开源贡献并非单纯的公益，而是一种隐秘的资本转化：通过向公共池注资（代码贡献），企业不仅建立了识别与利用外部创新的“吸收能力”，还利用信息论中的信号机制优化了人才配置并降低了交易成本。在制度经济学视角下，开源构成了企业在高度不确定市场中获取“非对称竞争优势”的核心机制，促使企业从封闭的 IP 保护转向生态编排的升维竞争。"
keywords:
- Open Source
- Culture
- Reading
- Insight
tags:
- 洞察分析
- 开源之道
- 阅读札记
title: "【阅读札记】开源贡献与企业竞争优势：Learning by contribution"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
---
# **资本转化与开源博弈：基于制度经济学与信息论的企业参与竞争优势分析** 

![](/images/2026/04/open-source-contribution-and-competitive-advantage-4.jpg)

在当今以信息为基础的数字经济体中，软件与底层基础设施的生产范式已经发生了根本性的转移。传统的企业竞争战略侧重于建立技术护城河、实施严格的知识产权（IP）保护，并通过收取软件许可费用来直接实现资本的增值与回收。然而，随着开放源代码软件（OSS）和数字公共物品的崛起，一种看似违背传统古典经济学直觉的现象正在重塑整个科技产业的竞争格局：企业不仅主动放弃了直接的软件许可收入（严格遵循OSI开源定义），甚至开始向内部员工支付高昂的薪酬，专门让他们参与开发那些竞争对手可以完全免费使用的公共基础设施 [1]。

在这一宏大的产业转型中，资本的本质并未消失，而是发生了隐秘且深刻的转化。当开源项目放弃了收取许可费的直接商业模式时，意味着开发者与企业实体必须由其他更为深层的动力来驱动项目的持续发展与繁荣。首先，项目本身必须对企业自身的生产环境具有极高的实用价值；其次，在高度透明的开源协作网络中，实质性的技术贡献（Contribution）能够转化为无可替代的声誉资本，而这种声誉在数字生态中具有显著的溢价效应，能够为企业带来深远的战略利益与生态主导权。

本报告旨在从企业竞争的宏观与微观双重角度，深入剖析企业参与开源生态的内在逻辑。报告将首先详细回顾哈佛商学院Frank Nagle教授关于开源协作的两项标志性实证研究，随后详尽审视其构建理论框架时所引用的经典经济学文献体系（包括Arrow的“干中学”、Cohen与Levinthal的“吸收能力”、Henkel的“选择性揭示”以及Teece的“创新获利”框架）。在此基础上，本报告将引入新制度经济学（New Institutional Economics）的宏大视角，深刻解释开源社区如何通过精密的制度设计，使参与者通过持续贡献获得结构性竞争优势。最后，结合信息论（Information Theory）与注意力稀缺（Attention Scarcity）的底层框架，系统论证在代码呈现指数级过剩的时代，为何唯有持续的“实质性贡献”才能穿透信息噪音，实现企业在数字时代的确定性增长。

![](/images/2026/04/open-source-contribution-and-competitive-advantage-0.jpg)

## **第一部分：企业开源贡献的实证检验与价值捕获**

在数字公共物品的竞争博弈中，企业始终面临着一个经典的战略选择：是作为“搭便车者”（Free-rider）被动地消费免费开源软件，还是作为“贡献者”（Contributor）主动投入研发资源参与上游构建。Frank Nagle教授通过大规模的实证计量分析与自然实验，为“贡献即竞争优势”这一论断提供了坚实的数据支撑。

### **1.1 贡献的生产力溢价：微观视角的实证分析**

在探讨企业为何愿意为公共物品买单时，Nagle在其研究《Learning By Contributing: Gaining Competitive Advantage Through Contribution to Crowdsourced Public Goods》中提出了“通过贡献学习”的理论机制 1。该研究指出，尽管数字信息物品具有非竞争性（Non-rivalrous）的特征，使得任何企业都可以免费下载和使用，但在复杂的现代信息技术环境中，仅仅“拥有”代码并不等同于能够“高效利用”代码。企业必须在应用过程中捕获比竞争对手更多的生产力价值，才能在最终产品市场中确立优势 [1]。

为了剥离企业自身规模与先天技术优势带来的内生性干扰，该研究采用了粗糙精确匹配（Coarsened Exact Matching, CEM）方法，将向Linux内核贡献代码的企业与在行业、规模、IT支出及非IT资本等可观察特征上极为相似但不贡献的“控制组”企业进行了一一对应 [1]。随后，通过构建扩展的Cobb-Douglas生产函数模型，研究在面板数据上揭示了令人瞩目的生产力差异。

研究表明，积极向开源项目贡献代码的企业，从其所部署的开源软件中捕获的生产力价值，比那些仅仅免费使用而不贡献的同行高出多达100%。这种庞大的生产力溢价并非源于单纯的资源投入，而是源于更加细颗粒度的贡献类型与学习机制。

| 贡献特征维度 | 生产力影响机制与实证结果 | 经济学含义 |
| :---- | :---- | :---- |
| **内容贡献 (Content Contributions)** | 显著正相关（如编写底层代码、提交Changeset）。贡献者能够获得核心专家的直接审查与反馈，打通隐性知识传递链条。 | 实际创造过程驱动了深度的技术内化，是提升企业IT资本回报率的核心引擎。 |
| **编辑贡献 (Editorial Contributions)** | 影响微弱甚至呈现负相关（如代码签核Signoff）。知识通常从高级审查者流向初级提交者，反向流动困难。 | 仅仅掌握合并权限或执行管理职能，无法替代深入代码逻辑所带来的认知升级。 |
| **软件商业化程度** | 企业从非商业化（免费）开源软件中获得的生产力提升远大于从第三方商业开源（如Red Hat）中获得的提升。 | 内部自主管理与深度修改的能力，使得贡献带来的学习成果能够更直接地转化为生产力。 |

通过上述维度的解构，实证数据清晰地勾勒出一条价值捕获路径：贡献本身就是一种高强度的内部培训。当企业员工在开源社区提交代码时，他们必须遵循严格的审查层级（Approval Hierarchy），这迫使他们不仅要理解开源项目的表层调用，还必须深谙其底层架构逻辑。来自全球更具经验的维护者（Maintainers）的严苛反馈，帮助企业跨越了封闭环境下的认知盲区，使得贡献企业在内部IT基础设施的部署与优化上展现出压倒性的效率优势。

### **1.2 放弃控制权以点燃创新：宏观生态的战略悖论**

如果说“通过贡献学习”解释了企业参与开源的微观动力，那么Nagle与Daniel Yue的另一项研究《Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration》则揭示了企业在宏观生态构建中“放弃技术控制权”的终极战略意图 [3]。

在传统的商业战略语境中，建立“护城河”并维持对核心技术的绝对控制是企业获取垄断利润的不二法门。然而，在人工智能深度学习框架的激烈角逐中，这种传统智慧被彻底颠覆。该研究将Google的TensorFlow与Meta的PyTorch之争视为一场完美的自然实验，深度剖析了开源协作中的治理结构差异对生态创新的决定性影响。

Google在推出TensorFlow时，采取了一种被称为“仁慈独裁者”（Benevolent Dictator）的开源模式。尽管底层代码完全公开，但Google的内部工程师严格把控着项目的未来路线图以及核心代码的合并权限。相反，Meta作为深度学习框架领域的后来者，采取了截然不同的战略冒险，彻底放弃了对PyTorch的独家控制权，将其完整移交给中立的第三方机构——Linux基金会。

通过运用双重差分法（Difference-in-Differences, DID）对GitHub上数以百万计的提交记录、拉取请求（Pull Requests）和问题追踪（Issues）进行计量经济学分析，研究揭示了令人震撼的动态演变：技术控制权与生态创新规模之间存在着精确的负相关关系。Meta的“放权”行为如同点燃了创新的火种，引发了外部贡献的指数级爆发。

这一现象的底层逻辑在于不完全契约理论（Incomplete Contracting Theory）中的“敲竹杠风险”（Holdup Risk）。在复杂的软件生态中，参与者无法在事前通过契约规定所有的合作细节。面对由单一巨头绝对控制的TensorFlow，诸如微软、亚马逊AWS、AMD和英伟达等行业竞争者始终抱有深刻的战略忌惮。他们担忧一旦将自身的底层硬件优化代码深度绑定至该框架，Google随时可能通过单方面更改API规则或路线图来收割他们的创新红利 [3]。

中立基金会的介入彻底清除了这一战略防御机制。Linux基金会所代表的中立治理结构，向整个产业界发出了明确的信任信号，消除了竞争对手的“敲竹杠”恐惧。各大科技巨头因此心甘情愿地将最核心的底层优化代码贡献给PyTorch生态。Meta虽然失去了对某一特定代码库的“独裁权”，却凭借这种极其高明的资本转化与生态让利，成功确立了PyTorch在大语言模型（LLM）与生成式AI时代的绝对基础设施标准地位。这雄辩地证明，在数字时代，通过制度化的“放弃控制”来换取生态垄断，是企业竞争战略的最高形态。

## **第二部分：竞争优势理论的解构与重塑**

Frank Nagle的实证研究并非建立在学术真空之上，而是对其所引用的古典与现代经济学、管理学文献进行了一次深度的解构与重塑。为了全面理解企业参与开源的资本转化逻辑，必须回到这些经典理论（Arrow 1962, Cohen & Levinthal 1990, Henkel 2006, Teece 1986），审视开源模式如何拓展了传统理论的边界 [1]。

![](/images/2026/04/open-source-contribution-and-competitive-advantage-1.jpg)

### **2.1 超越Arrow (1962)：从封闭的“干中学”到开放的“贡献中学”**

诺贝尔经济学奖得主Kenneth Arrow在1962年发表的经典文献《The Economic Implications of Learning by Doing》确立了内生技术进步的核心机制 [5]。Arrow提出，知识的获取并非仅仅依赖于脱离生产的纯粹研究，而是经验的产物；效率的提升源于在解决实际生产问题过程中的反复试错与经验积累。在这一模型中，资本积累与劳动投入的规模报酬之所以能够递增，正是因为“干中学”机制使得每一次重复都能更加高效地利用新要素。

然而，将Arrow的理论置于开源软件的高复杂度语境中，其固有的局限性便显露无疑。Nagle尖锐地指出，传统的“干中学”本质上是一个封闭的反馈循环。在这种模式下，企业员工或工程师所获得的反馈仅仅来源于技术本身或任务执行的物理结果。当面对庞大且错综复杂的操作系统代码库时，单纯依赖内部试错极易使个体开发者陷入创新的“局部最优”（Local Search的陷阱），他们可能只能对系统进行微小的增量改进，而永远无法洞察到能够带来范式跃升的全局最优解。

开源社区的出现彻底打破了这种封闭性。当企业将其内部优化后的代码作为贡献提交至公共社区时，“干中学”便华丽升级为“贡献中学”。开源项目的多级审批架构（Approval Hierarchy）引入了极其宝贵的外部人力资本反馈。提交的代码必须经过全球最顶尖、对该特定模块最具经验的维护者的严格审查。这种审查不仅是寻找缺陷，更是一次高强度的隐性知识（Tacit Knowledge）传递。外部专家的指导帮助新手开发者跳出局部思维，掌握更优的架构设计模式，从而极大地加速了企业吸收新技术的曲线。在此意义上，贡献并非无偿的劳动输出，而是一种获取全球顶级专家免费技术咨询的高效交易手段。

### **2.2 重塑Cohen & Levinthal (1990)：吸收能力的边界跨越**

Wesley Cohen与Daniel Levinthal在1990年的里程碑式文献《Absorptive Capacity: A New Perspective on Learning and Innovation》中提出了“吸收能力”这一核心构念 [7]。他们将企业的吸收能力定义为识别外部新知识的价值、将其消化同化，并最终应用于商业目的的能力。该理论强调，吸收能力是一个累积的过程，高度依赖于企业先前的知识存量（Prior Knowledge Base），并论证了内部研发（R\&D）投资不仅是为了直接产生创新，更是为了构建和维持这种对外部技术溢出的敏感度与捕获能力。

在开源软件日益成为数字经济基石的今天，开源代码库本身就是人类历史上规模最大的外部知识源。如果机械地套用传统的吸收能力理论，企业似乎只需要增加内部技术人员去“阅读”和“研究”这些免费代码即可完成知识的内化 [11]。然而，Nagle通过实证拓展了这一理论的纵深，证明了“主动贡献”是构建吸收能力的一种前所未有的强机制 [1]。

在高度复杂的软件工程中，大量的核心技术细节、历史架构妥协与演进哲学并未被记录在静态的文档中，而是以隐性知识的形式存在于核心开发者群体的思维与日常交流中 。仅仅作为“搭便车者”被动拉取代码，企业只能吸收表层的显性知识。当企业支付薪酬让员工主动向开源社区提交补丁（Patch）或参与底层架构的辩论时，员工实际上是在进行跨越组织边界的深度认知融合（Boundary Spanning）[12]。这种深度的互动迫使企业的内部知识体系必须与外部最前沿的生态演进保持强同频。因此，贡献行为本身突破了企业传统的吸收边界，使得企业能够将极其“黏性”（Sticky）的底层创新知识平滑地转移至自身的生产体系中，确立了竞争对手难以企及的技术壁垒。

### **2.3 甄别Henkel (2006)：从战略揭示到微观运营学习**

Joachim Henkel的《Selective revealing in open innovation processes: The case of embedded Linux》探讨了一个同样反直觉的现象：为什么盈利性企业会自愿将其耗费巨资开发的嵌入式Linux组件代码免费向公众揭示（Revealing）[13]。Henkel的研究发现，这种“选择性揭示”通常受到客户需求的驱动，或者是企业为了削弱竞争对手、确立事实上的技术标准、并引诱其他厂商提供非正式开发支持而采取的精明战略 [14]。

Nagle在其论文中专门将Henkel的理论作为关键的对照系，旨在清晰地划定“贡献中学”的理论边界。Henkel的“选择性揭示”侧重于宏观的战略博弈与知识产权操作，关注的是企业如何通过有意识地开放某些非核心模块来操纵外部竞争环境。而Nagle的实证进一步向下穿透，证明了即使剥离所有宏大的商业战略意图，仅仅从最微观的日常运营和工程效率层面来看，贡献行为本身所触发的学习曲线加速与反馈机制，就能立刻在企业内部产生可量化的生产力飙升。

换言之，企业参与开源不仅仅是利用代码作为战略武器来重塑产业格局（如选择性揭示理论所言），更是利用开源社区作为巨大的外部教练场，通过日常的代码提交（贡献）来打磨自身的内部技术能力。这种将外部协作内化为企业核心运营能力的双重机制，构成了竞争优势的最坚实底座。

### **2.4 Teece (1986)的创新获利框架与开源商业模式的底层逻辑**

要完全理解资本如何在开源项目中实现转化，不可避免地要回顾David Teece在1986年发表的旷世之作《Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy》[16]。Teece提出了一个根本性的疑问：为什么具有划时代意义的创新者往往无法获得丰厚的商业回报，而巨额利润最终却流向了模仿者、客户或生态系统中的其他参与者？

Teece用两个核心维度解开了这个谜团：

1. **专有性体制（Appropriability Regime）**：即法律（专利、版权）和技术特征保护创新免受模仿的严密程度。  
2. **互补资产（Complementary Assets）**：将创新成功推向市场并实现商业化所需的各种专业化能力与资产，包括制造能力、销售渠道、服务支持网络以及计算基础设施等 [17]。

Teece指出，当一项技术创新处于“弱专有性体制”且高度依赖于“专业化互补资产”时，绝大部分的商业利润将不可避免地流向那些掌握互补资产的所有者，而不是创新者本身 [18]。

这一理论框架堪称理解现代开源商业模式的绝佳密码本 [20]。开源软件通过采用OSI定义的许可证（如GPL、Apache 2.0），在法律层面上刻意构建了一个**极度虚弱的专有性体制**，允许任何人不受限制地复制、修改和分发底层代码 [21]。在这种架构下，试图依靠单一的软件代码本身（Primary Asset）收取许可费以获取超额利润的传统模式被彻底摧毁，软件代码迅速陷入高度的商品化（Commoditization）[20]。

因此，资本并未消失，而是极其精准地向互补资产领域进行了战略转移。

| 创新环境特征 | 核心决定因素 | 竞争态势与利润捕获路径 | 开源领域的典型印证 |
| :---- | :---- | :---- | :---- |
| 强专有性 \+ 通用互补资产 | 知识产权壁垒极高，互补资产易得。 | 创新者垄断全部利润，可直接收取高昂的许可费用。 | 传统闭源软件时代（如早期的Windows或Oracle数据库）。 |
| **弱专有性 \+ 专业化互补资产** | 核心技术（代码）极易被合法复制，但商业化落地需要庞大的关联支持。 | 竞争焦点转移至互补资产。利润流向控制庞大算力、复杂数据或专业支持服务的一方。 | **公有云厂商（AWS、Azure）提供托管的开源数据库服务；Red Hat销售订阅制技术支持。** |
| 弱专有性 \+ 通用互补资产 | 代码免费且周边服务门槛极低。 | 市场陷入白热化竞争，利润率趋于零。 | 大量缺乏独特商业模式的初创开源周边包装公司。 |

现代科技巨头积极向开源项目贡献代码，其核心逻辑正是利用开源的低门槛摧毁竞争对手在核心软件层的护城河，同时利用自身在云基础设施、海量数据吞吐能力或全球销售网络等“专业化互补资产”上的绝对优势来收割最终的商业价值 [19]。在这个过程中，企业放弃了直接收取软件许可费的蝇头小利，却通过技术路线的引导，使得开源标准不断向有利于自身互补资产适配的方向演进，从而完成了更高维度的资本增值与产业收割。

## **第三部分：制度经济学视角下的平台治理与演进**

技术的特性与理论的解构仅仅回答了开源运作的部分机制，要深刻理解企业行为的深层动因，必须引入新制度经济学（New Institutional Economics, NIE）的分析框架。从Coase、Williamson、North到Ostrom，这些学者的思想为我们解析开源如何通过重塑交易成本与重构治理机制来创造竞争优势，提供了极其锐利的理论手术刀 [23]。

![](/images/2026/04/open-source-contribution-and-competitive-advantage-2.jpg)

### **3.1 交易成本与组织边界的消融**

Ronald Coase在1937年关于“企业性质”的论述中指出，企业科层制度的存在是为了内部化市场交易过程中高昂的搜寻、谈判和契约执行成本 [23]。Oliver Williamson进一步将交易成本经济学发展为对不同治理结构（市场、企业内部、混合组织）的比较制度分析 [23]。而Douglass North则论证了正式规则与非正式规范在降低经济活动不确定性上的根本性作用。

开源模式作为数字时代最伟大的制度创新之一，从根本上颠覆了软件生产的交易成本结构。在专有软件时代，企业若要跨组织复用代码，必须面对漫长且充满摩擦的知识产权谈判与商业授权流程，交易成本极其高昂。而开源许可证（如MIT或Apache协议）作为一种标准化的前置契约，通过预先赋予使用、修改和分发的权利，极其巧妙地将知识转移与协作的交易成本降至趋近于零 [21]。

交易成本的急剧下降，使得创新的边界不再局限于企业内部的科层命令体系，而是扩展到去中心化的全球网络之中。当企业派遣工程师参与开源社区时，他们实际上是在利用一种介于传统“内部研发（Make）”与“外部采购（Buy）”之间的混合治理模式（Hybrid Governance），以极低的制度性摩擦获取全球顶级的智力资源汇聚 [1]。这种制度安排赋予了贡献企业无比的敏捷性与技术杠杆效应。

### **3.2 跨越公地悲剧：Ostrom的数字公地与集体治理**

在探讨公共物品时，古典经济学长期笼罩在Garrett Hardin的“公地悲剧”（Tragedy of the Commons）的阴影之下：由于个体理性的自私，任何缺乏私有产权明确界定或缺乏政府强制管理的公共资源，最终都将走向过度消耗与彻底枯竭 [26]。

然而，诺贝尔经济学奖得主Elinor Ostrom在广泛的实证研究中打破了这一宿命论，提出了被誉为“第三条道路”的集体自治理论（Collective Governance）。Ostrom证明，在没有国家强制和私有产权的情况下，只要利益相关者能够自我组织，建立清晰的边界规则、有效的监督机制以及分级制裁与冲突解决路径，公共池塘资源完全可以实现长期可持续的繁荣。

在数字经济中，以开源代码和底层算法为代表的无形资产构成了极其庞大的“数字公地”（Digital Commons）。正如Michael Hardt与Antonio Negri所指出的，这些数字资产在本质上是一种“非财产”（Nonproperty），其设计初衷是创造广泛的社会财富，而非确立个体的排他性占有。数字公地与传统自然资源（如牧场或渔场）的一个决定性差异在于其非竞争性（代码可以被无成本地无限复制）。因此，数字公地面临的核心生存危机并非传统意义上的“过度消费”或“搭便车”（Appropriation Problem），而是因缺乏激励与信任而导致的系统性枯竭——即\*\*“供给问题”（Provisioning Problem）\*\* [26]。

### **3.3 化解供给危机：从专有控制到分布式平台领导力的演进**

为了彻底解决数字公地的“供给问题”，开源生态经历了一场漫长且充满博弈的治理结构演化。Siobhan O’Mahony和Rebecca Karp的经典研究《From proprietary to collective governance: How do platform participation strategies evolve?》为我们提供了一套严密的解剖框架。

O’Mahony与Karp指出，平台参与者面临的最深层恐惧是\*\*“平台包络”（Platform Envelopment）\*\*：如果一个开源平台由单一实体绝对控制，该实体随时可能在开源核心中突然加入某些免费功能，而这些功能恰好与生态系统中其他企业的核心商业化产品形成直接竞争。这种“既做裁判员又做运动员”的行为，会瞬间摧毁外部企业的商业差异化优势。面对这种巨大的战略不确定性，外部企业自然会选择袖手旁观，导致开源生态陷入致命的供给不足。

因此，开源项目的制度设计必须在\*\*“访问权”（Access，即依法使用代码的权利）**与**“控制权”（Control，即决定技术路线与规则的权力）\*\*之间实现精妙的平衡与转移 26。O’Mahony与Karp将这种治理权力细分为涵盖法律、成员构成、技术审核以及架构规划等四大领域的11个具体维度 [26]。

通过对IBM发起的Eclipse平台长达七年的纵向追踪研究，可以清晰地看到企业参与战略随治理模式演进的阶梯式变化 26：

| 平台治理阶段 | 治理权力分配特征 | 外部企业的核心战略认知 | 参与强度与具体行为表现 |
| :---- | :---- | :---- | :---- |
| **专有模式 (Proprietary Mode, 2000-2001)** | 发起方（IBM）保持绝对的法律与技术独裁。 | 高度防御。警惕被技术锁定。 | **极低（Level 1）**：仅作为观察者下载测试，或采取“抢跑”（Front-running）策略秘密研发竞品。 |
| **主导模式 (Dominant Mode, 2001-2003)** | 通过开源许可证开放“访问权”，但保留架构和代码合并的“控制权”。 | “包络恐慌”。担忧主导方随时改变底层架构以窃取创新果实（敲竹杠风险）。 | **中等（Level 2-4）**：开始进行产品集成与外围代码提交，但坚决拒绝投入全职资源领导核心模块开发。 |
| **集体治理模式 (Collective Mode, 2004及以后)** | 控制权彻底移交至中立基金会，实现制度化的多边共治。 | 建立深度互信。确信没有任何单一巨头能够单方面重塑规则。 | **极高（Level 5-6）**：大规模指派全职维护者（Committers），在“分布式平台领导力”下主导核心架构的演进。 |

Eclipse的演变轨迹为整个行业确立了标杆。今日数字时代的基石，无论是掌管Kubernetes的云原生计算基金会（CNCF），还是前文提及的接手PyTorch的Linux基金会，均是这种“第三条道路”在工业界的伟大实践。它们通过极其严密的制度隔离，确保了代码商标与技术路线的绝对“供应商中立”（Vendor-neutrality）。这种集体治理的制度安排，如同一张坚不可摧的信任契约，彻底打消了竞争对手的防御本能，使得全球科技巨头愿意将最精锐的开发力量与核心资产汇入开源底座之中。在这个制度下，实质性的“代码贡献”不再是风险极高的无偿劳动，而是各方角逐技术标准、塑造生态规则、并最终转化为自身商业护城河的最合法且最高效的竞争途径。

## **第四部分：信息论与注意力稀缺的底层逻辑——为何唯有“贡献”才能实现增长**

如果说制度经济学的分析解释了开源社区*为什么允许*并保护企业通过贡献获得竞争优势，那么，从信息论（Information Theory）和注意力经济（Attention Economy）的维度进行深入剖析，则揭示了在海量代码涌现的数字时代，*为什么只有*通过“主动且实质性的贡献”这一唯一途径，企业才能在冗杂的市场中捕获价值并实现确定性的商业增长。

![](/images/2026/04/open-source-contribution-and-competitive-advantage-3.jpg)

### **4.1 信息过载与注意力稀缺的残酷悖论**

早在1971年，人工智能与认知心理学先驱Herbert A. Simon就提出了一个极具穿透力的经济学洞见：“信息的极度丰富必然意味着另一种事物的极度匮乏：它疯狂消耗着信息接收者的注意力。因此，信息财富的涌现不可避免地创造了注意力的贫困（A poverty of attention）。人类面临的核心挑战不再是如何获取信息，而是如何在这浩如烟海的过剩信息源中，极其高效地分配我们那极其有限且稀缺的注意力。” [27]

这一论断标志着“注意力经济”（Attention Economy）概念的正式诞生。在互联网尚未普及的时代，这或许只是一种前瞻性的理论预警；但在当今高度发达的开源软件生态中，这已经成为最残酷的生存现实。在以GitHub为代表的全球开放协作网络中，每天都有数以万计的代码库被创建，无数的分支被提交，开源代码的总量呈现出无情的指数级膨胀。

从Claude Shannon的经典信息论（Information Theory）视角来看，信息熵（Entropy）衡量了系统中存在的不确定性与信息的意外程度 [31]。在开源世界中，大量粗制滥造的复制项目、无意义的微小修改以及孤立的无人问津的代码库，充斥着极高的冗余度（Redundancy）[30]。这些海量的常规代码在信息论意义上属于低熵信号——它们几乎不能为整个技术生态带来任何不确定性的消除，也无法提供实质性的技术演进价值。

因此，在这个宏大的数字竞技场中，“代码”作为一种数字实体早已不再稀缺，甚至已经严重贬值与过载；真正成为生态命脉、具有绝对稀缺性的资源，是全球顶尖开发者的“认知注意力”（Cognitive Attention）、企业技术决策者的“采纳注意力”，以及风险资本的“投资注意力” [27]。任何试图在开源生态中掘金的企业，其核心商业模式必须建立在如何捕获这些稀缺注意力之上。

### **4.2 作为高熵信号的实质性贡献**

在注意力极度稀缺的生态系统中，参与者（无论是寻找底层框架的开发者，还是评估技术栈的企业CIO）在筛选技术时，必然展现出极度苛刻的“信息觅食”（Information Foraging）行为模式 [31]。根据基于信息论的生态觅食模型，随着环境中总信息丰度（信息过载）的上升，觅食者会自动提高其筛选阈值，以平衡其高昂的搜索与评估成本，进而彻底屏蔽掉那些效用低下、缺乏显著特征的信息源。

当一家企业仅仅是以“搭便车”的姿态默默下载和使用开源项目时，它在整个生态网络中的状态是完全静默的。这种只索取不付出的行为，在信息论图景中意味着其对外释放的信息熵趋近于绝对的零——企业无法向外部释放任何能够证明自身技术深度、战略定力或创新能力的有效信号。在竞争惨烈的技术选型中，这种企业将直接被生态的注意力机制过滤和遗忘。

相反，当企业投入昂贵的人力资本，向诸如Linux内核、Kubernetes或PyTorch等具有全球影响力的顶级开源核心提交高质量的底层代码（Content Contribution），并经过激烈的技术辩论，最终推动这些代码被合并入项目主干（Mainline）时，**这种实质性的代码贡献便瞬间转化为穿越信息迷雾的极高熵信号（High-Entropy Signal）** [31]。

这种高熵信号具有不可估量的战略穿透力：

1. **建立无可辩驳的技术声誉资本**：每一次被开源项目高级维护者接受的拉取请求（Pull Request），不仅是对代码质量的认可，更是开源社区通过其严苛的制度体系为该企业出具的最高级别信用背书 [1]。在社交化编码平台高度透明的数据展板上，企业的贡献频次、攻克的核心技术难题以及长期的活跃度（Recent Activity）被精准量化并向全网广播 [34]。这构成了最强有力的“信号激励”（Signaling Incentive），极大降低了企业在高端人才招聘市场与资本市场中的信息不对称。顶尖人才更愿意加入那些能够影响行业底座的公司，而这正是任何高薪广告都无法购买的稀缺注意力 [35]。  
2. **削减生态伙伴的评估与搜索成本**：在生态系统发展的十字路口，谁能引导技术标准的发展方向，谁就能获得最高维度的竞争优势。企业通过主动贡献代码，例如主动在开源框架中增加对其自身专有云平台接口的最佳实践，或者为其最新发布的底层AI芯片提供深度优化支持，使得自身的专有硬件或服务在庞大的开源架构中占据了极其有利的、近乎默认的生态位置 [3]。这种“贡献”大幅削减了下游海量开发者在适配该企业产品时所面临的技术摩擦与搜索成本。技术演进的轨迹由此被无形中牵引，向着该企业商业利益最大化的方向倾斜（Nudging the code）[37]。

### **4.3 注意力的货币化与生态的确定性增长**

在信息论与注意力稀缺的终极逻辑下，开源技术竞争的本质就是一场对全球开发者心智与注意力的无声争夺战 [27]。一旦企业凭借持续、高质量的核心贡献捕获了这种绝对稀缺的注意力资源，资本转化的高速飞轮便正式启动。

* **人才与技术密度的指数级聚集**：正如Linux基金会的深入调研所揭示的，积极向开源上游进行代码与资金贡献的企业，能够展现出极其强大的磁吸效应，吸引并留存业内最顶尖的技术人才（Talent Attraction and Retention）36。企业支付薪酬支持员工进行开源贡献，在注意力经济学中，这并非一项单纯的研发成本（Cost Center），而是对企业极客文化与技术深度的最高效广告投资。拥有高技术密度的人才团队，又将反哺企业内部更为复杂的闭源系统与商业化产品的研发，形成技术溢出的良性循环。  
* **抢占生态制高点与互补资产收割**：通过向顶级基础平台（如PyTorch）贡献核心代码，微软、AMD等科技巨头成功吸引了成千上万底层AI开发者的持续关注，并在无形中构建起围绕自身硬件或云服务底座的坚固护城河 [3]。尽管核心架构的软件代码完全免费共享，但因为它们成功捕获并锁定了生态系统最核心的注意力，当全球的企业用户准备大规模部署这些大语言模型时，必然会优先采购那些与这些开源组件适配度最高、优化最深的企业级基础设施。这一闭环完美地呼应了David Teece在1986年揭示的真理：在弱专有性体制下，企业通过控制极其稀缺的注意力资源，最终将在自身占据绝对优势的“专业化互补资产”（如昂贵的云算力、大规模存储服务、企业级SaaS订阅）上实现惊人的指数级商业变现与利润收割 [16]。

### **4.4 案例印证：Google TorchTPU 的战略折返与互补资产收割**

Google 近期主导的“TorchTPU”项目及其对 PyTorch 的深度支持[38]，为本报告提出的理论框架提供了一个堪称完美的闭环印证。如前文 1.2 节所述，Google 曾试图通过“仁慈独裁者”模式绝对控制 TensorFlow 来建立护城河，但最终在生态博弈中败给了采取中立治理模式、成功激活外部协同的 PyTorch。然而，面对 PyTorch 已经垄断绝大多数 AI 开发者注意力与事实标准的现状，Google 并没有选择持续对抗，而是实施了极具战略纵深的“折返”：全面拥抱 PyTorch，并投入大量顶级工程资源主导 TorchTPU 项目，通过 PyTorch/XLA 的深度集成，使自家的张量处理单元（TPU）成为 torch.compile 的一等公民，以实现 PyTorch 框架在 TPU 上的原生、无缝且高效的运行。

这一战略举动的背后，完美契合了本文所揭示的三大底层逻辑：

1. **互补资产的终极变现（Teece 框架的应用）：** 目前，Nvidia 凭借其闭源的 CUDA 软件生态在 AI 算力市场占据了压倒性的垄断地位（75%至90%的市场份额），构筑了极高的开发者转换成本与生态壁垒。对于 Google 而言，其定制化的芯片 TPU 是极其昂贵且极具战略意义的“专业化互补资产”。既然无法在核心软件框架（Primary Asset）上维持垄断并收取地租，Google 的最优策略就是走到开发者注意力汇聚的地方——通过向 PyTorch 贡献底层硬件优化代码，从内部打破 Nvidia 的 CUDA 护城河。这种开源贡献实质上是在“引导（Nudging）”生态标准向适应自身硬件的方向演进，从而推动企业客户大规模租用 Google Cloud 上的 TPU 算力进行模型训练与推理，完成互补资产的商业变现。  
2. **注意力稀缺下的信号释放与降阻：** 在信息过载与算力架构日益复杂的今天，Google 必须通过实质性的底层代码贡献释放“高熵信号”。TorchTPU 项目大幅降低了开发者将模型从 GPU 迁移至 TPU 时所面临的认知门槛与工程摩擦（例如自动分片、算子兼容等技术障碍）。这种主动贡献不仅捕获了开发者的注意力，更直接削减了生态伙伴在进行算力选型时的评估与搜索成本。  
3. **集体治理下的战略同盟机制：** 值得注意的是，作为 PyTorch 缔造者的 Meta，同样有着强烈的战略动机与 Google 在 TPU 支持上展开深度合作。在 Linux 基金会集体治理的制度保障下，Meta 不再担忧单一硬件或云厂商的“敲竹杠风险”。通过积极配合 Google 完善 TPU 的开源软件生态，Meta 能够有效削弱整个产业对 Nvidia 的历史性依赖，在未来的芯片采购博弈中获得更大的议价权，并实质性降低自身庞大的模型推理成本。

Google 对 PyTorch 的态度转变雄辩地证明：在数字公共物品时代，企业放弃代码本身的控制权并积极向上游开源项目“打工式”贡献，不仅不是资本的退让，反而是为了在更深层次的互补资产（如云计算资源与底层芯片）上实现生态收割的必由之路。

综合上述分析，开源模式通过放弃对软件本身微薄许可费的追逐，彻底颠覆了数字时代的商业估值模型与竞争法则。在这一全新范式中，被动搭便车者所能攫取的仅仅是代码短期的使用功能，其战略地位随时面临被生态边缘化的风险。相反，那些深谙游戏规则的主动贡献者，精准利用“实质性贡献”这一成本极高且难以伪造的强信号，刺穿了海量代码过载所带来的信息迷雾。他们不仅捕获了决定技术演进方向的稀缺注意力，构建了无可替代的声誉资本，更在无形中将全球的创新力量引向自身的商业腹地。这种将开放协作与底层商业逻辑完美融合的生态注意力汇聚，最终将转化为企业在数字竞争洪流中最坚不可摧的护城河与确定性的指数级增长引擎。

#### **参考材料**

1. Frank Nagle. Learning by Contributing: Gaining Competitive Advantage Through Contribution to Crowdsourced Public Goods. Organization Science, 29(4):569–587, June 2018. ISSN 1047-7039. doi: 10.1287/orsc.2018.1202. URL http://pubsonline.informs.org/doi/full/10.1287/orsc.2018.1202. Publisher: INFORMS. 
2. The Dynamics of Open-Source Contributors \- MIT Economics, accessed April 8, 2026, [https://economics.mit.edu/sites/default/files/publications/Dynamics%20of%20Open%20Source.pdf](https://economics.mit.edu/sites/default/files/publications/Dynamics%20of%20Open%20Source.pdf)  
3. 【阅读札记】深度解析Frank Nagle论文之一：《点燃创新：来自开放 ..., accessed April 8, 2026, [https://www.opensourceway.blog/posts/paper\_or\_book\_reading/reading-frank-nagel-pytorch-igniting-innovation/](https://www.opensourceway.blog/posts/paper_or_book_reading/reading-frank-nagel-pytorch-igniting-innovation/)  
4. Open at the Core: Moving from Proprietary Technology to Building a Product on Open Source Software | Management Science \- PubsOnLine, accessed April 8, 2026, [https://pubsonline.informs.org/doi/10.1287/mnsc.2023.02886](https://pubsonline.informs.org/doi/10.1287/mnsc.2023.02886)  
5. Arrow's 1962 Learning by Doing Model | PDF | Economic Growth \- Scribd, accessed April 8, 2026, [https://www.scribd.com/document/55848013/Learning-by-Doing](https://www.scribd.com/document/55848013/Learning-by-Doing)  
6. Arrow's 'Learning by Doing' and Complexity Economics \- SFI Press, accessed April 8, 2026, [https://www.sfipress.org/18-arrow-1962](https://www.sfipress.org/18-arrow-1962)  
7. Cohen and Levinthal Absoprtive Capacity | PDF | Research And Development \- Scribd, accessed April 8, 2026, [https://www.scribd.com/document/341558579/Cohen-and-Levinthal-Absoprtive-Capacity](https://www.scribd.com/document/341558579/Cohen-and-Levinthal-Absoprtive-Capacity)  
8. Absorptive capacity, technological innovation, and product life cycle: a system dynamics model \- PMC, accessed April 8, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC5037108/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5037108/)  
9. Absorptive Capacity: A New Perspective on Learning and Innovation \- Sasank's Blog, accessed April 8, 2026, [https://chsasank.com/classic\_papers/absorptive-capacity.html](https://chsasank.com/classic_papers/absorptive-capacity.html)  
10. The Past and Future of Absorptive Capacity | Academy of Management Collections, accessed April 8, 2026, [https://journals.aom.org/doi/10.5465/amc.2021.0008](https://journals.aom.org/doi/10.5465/amc.2021.0008)  
11. The Rise of Corporate Science in AI: Data as a Strategic Resource \- AOM Journals, accessed April 8, 2026, [https://journals.aom.org/doi/10.5465/amd.2019.0043](https://journals.aom.org/doi/10.5465/amd.2019.0043)  
12. Organizations, Communities, and Innovation When Information Costs Approach Zero \- Harvard Business School, accessed April 8, 2026, [https://www.hbs.edu/ris/Publication%20Files/14-043\_fac5ccd3-78ea-4127-913c-1106f27390b4.pdf](https://www.hbs.edu/ris/Publication%20Files/14-043_fac5ccd3-78ea-4127-913c-1106f27390b4.pdf)  
13. Selective revealing in open innovation processes: The case of embedded Linux, accessed April 8, 2026, [https://ideas.repec.org/a/eee/respol/v35y2006i7p953-969.html](https://ideas.repec.org/a/eee/respol/v35y2006i7p953-969.html)  
14. Selective revealing in open innovation processes: the case of embedded Linux (gekürzte Version) | Semantic Scholar, accessed April 8, 2026, [https://www.semanticscholar.org/paper/Selective-revealing-in-open-innovation-processes%3A-Henkel/0a099da451b5be9a5c7fa6cbd66afec33a240c91](https://www.semanticscholar.org/paper/Selective-revealing-in-open-innovation-processes%3A-Henkel/0a099da451b5be9a5c7fa6cbd66afec33a240c91)  
15. The emergence of openness: How and why firms adopt selective revealing in open innovation \- TUM, accessed April 8, 2026, [https://www.ie.mgt.tum.de/fileadmin/w00cem/tim/Research/Publications/Henkel/Henkel\_Schoeberl\_Alexy\_2014\_Emergence\_of\_openness\_RP.pdf](https://www.ie.mgt.tum.de/fileadmin/w00cem/tim/Research/Publications/Henkel/Henkel_Schoeberl_Alexy_2014_Emergence_of_openness_RP.pdf)  
16. Profiting from technological innovation: Implications for integration, collaboration, licensing and public policy \- WIPO, accessed April 8, 2026, [https://www.wipo.int/ru/web/economics/search-details?id=F7A626NU](https://www.wipo.int/ru/web/economics/search-details?id=F7A626NU)  
17. Profiting from innovation in the digital economy: Enabling technologies, standards, and licensing models in the wireless world \- eScholarship.org, accessed April 8, 2026, [https://escholarship.org/uc/item/58h69717](https://escholarship.org/uc/item/58h69717)  
18. Profiting from technological innovation \- Copyright Royalty Board, accessed April 8, 2026, [https://www.crb.gov/proceedings/2006-3/riaa-ex-o-101-dp.pdf](https://www.crb.gov/proceedings/2006-3/riaa-ex-o-101-dp.pdf)  
19. Profiting from Enabling Technologies? | Strategy Science \- PubsOnLine \- INFORMS.org, accessed April 8, 2026, [https://pubsonline.informs.org/doi/10.1287/stsc.2020.0119](https://pubsonline.informs.org/doi/10.1287/stsc.2020.0119)  
20. Q\&A. How one can develop a business model around open source? | TIM Review, accessed April 8, 2026, [https://www.timreview.ca/article/89](https://www.timreview.ca/article/89)  
21. Economics of Open Source \- Oxford Academic, accessed April 8, 2026, [https://academic.oup.com/book/44727/chapter/378967711](https://academic.oup.com/book/44727/chapter/378967711)  
22. Economics of Technology Sharing: Open Source and Beyond \- NBER, accessed April 8, 2026, [https://www.nber.org/system/files/working\_papers/w10956/w10956.pdf](https://www.nber.org/system/files/working_papers/w10956/w10956.pdf)  
23. The future of new institutional economics: from early intuitions to a new paradigm?, accessed April 8, 2026, [https://www.cambridge.org/core/journals/journal-of-institutional-economics/article/future-of-new-institutional-economics-from-early-intuitions-to-a-new-paradigm/77F71019F3B8C83A5EBFEA77941C7FC9](https://www.cambridge.org/core/journals/journal-of-institutional-economics/article/future-of-new-institutional-economics-from-early-intuitions-to-a-new-paradigm/77F71019F3B8C83A5EBFEA77941C7FC9)  
24. Advanced Introduction to New Institutional Economics, accessed April 8, 2026, [https://www.coase.org/publications/2022menardshirleyadvancedintrotonie.pdf](https://www.coase.org/publications/2022menardshirleyadvancedintrotonie.pdf)  
25. Transaction cost economics: Lessons from past reforms and potential for the digital economy, accessed April 8, 2026, [https://rujec.org/article/156897/](https://rujec.org/article/156897/)  
26. 【阅读札记】平台参与策略的演进：从专有治理到“第三条道路”的数字 ..., accessed April 8, 2026, [https://www.opensourceway.blog/posts/paper\_or\_book\_reading/reading-from-proprietary-to-collective-governance/](https://www.opensourceway.blog/posts/paper_or_book_reading/reading-from-proprietary-to-collective-governance/)  
27. ATTENTION ECONOMY \- the United Nations, accessed April 8, 2026, [https://www.un.org/sites/un2.un.org/files/attention\_economy\_feb.pdf](https://www.un.org/sites/un2.un.org/files/attention_economy_feb.pdf)  
28. Adversarial inference: predictive minds in the attention economy \- PMC \- NIH, accessed April 8, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10457025/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10457025/)  
29. The Information Economy, accessed April 8, 2026, [https://people.ischool.berkeley.edu/\~hal/pages/sciam.html](https://people.ischool.berkeley.edu/~hal/pages/sciam.html)  
30. Designing Organizations for an Information-Rich World \- L'Atelier des Futurs, accessed April 8, 2026, [https://atelierdesfuturs.org/wp-content/uploads/2025/07/1971-simon.pdf](https://atelierdesfuturs.org/wp-content/uploads/2025/07/1971-simon.pdf)  
31. The rising entropy of English in the attention economy \- PMC, accessed April 8, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC11332035/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11332035/)  
32. The 'Economics of Attention': A History of Economic Thought Perspective \- OpenEdition Journals, accessed April 8, 2026, [https://journals.openedition.org/oeconomia/1139](https://journals.openedition.org/oeconomia/1139)  
33. View of The attention economy and the Net | First Monday, accessed April 8, 2026, [https://firstmonday.org/ojs/index.php/fm/article/view/519/440](https://firstmonday.org/ojs/index.php/fm/article/view/519/440)  
34. The Signals that Potential Contributors Look for When Choosing Open-source Projects | Request PDF \- ResearchGate, accessed April 8, 2026, [https://www.researchgate.net/publication/337135571\_The\_Signals\_that\_Potential\_Contributors\_Look\_for\_When\_Choosing\_Open-source\_Projects](https://www.researchgate.net/publication/337135571_The_Signals_that_Potential_Contributors_Look_for_When_Choosing_Open-source_Projects)  
35. The Simple Economics of Open Source | Working Knowledge \- Baker Library, accessed April 8, 2026, [https://www.library.hbs.edu/working-knowledge/the-simple-economics-of-open-source](https://www.library.hbs.edu/working-knowledge/the-simple-economics-of-open-source)  
36. The Economic Value of Open Source Software Contributions \- Linux Foundation, accessed April 8, 2026, [https://www.linuxfoundation.org/blog/the-economic-value-of-open-source-software-contributions](https://www.linuxfoundation.org/blog/the-economic-value-of-open-source-software-contributions)  
37. Contributing to Growth? The Role of Open Source Software for Global Startups \- Harvard Business School, accessed April 8, 2026, [https://www.hbs.edu/ris/download.aspx?name=24-040.pdf](https://www.hbs.edu/ris/download.aspx?name=24-040.pdf)
38. TorchTPU: Running PyTorch Natively on TPUs at Google Scale , https://developers.googleblog.com/torchtpu-running-pytorch-natively-on-tpus-at-google-scale/ 

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Social Hacker，协作机制设计者。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 AI 助手（如 Gemini 3.1 Pro 等），「开源之道」·窄廊 负责在对话中作为镜像与反弹板，提出问题、提供理论切入点并对推演进行反馈。仅偶尔进行双重验证！