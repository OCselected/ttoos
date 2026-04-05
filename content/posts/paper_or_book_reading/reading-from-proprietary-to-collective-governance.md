---
categories:
- 开源
- 哲学
- 智识
- 思考
date: 2026-04-05T14:11:57+08:00
description: "那些由私有企业开源出来的项目，是如何成为中立的全球任何人都愿意参与和贡献的commons？例如Eclipse ，这是IBM 拥有完全知识财产的项目，是如何一步步从私有演化为集体治理的？这是否具有一般性？一家公司如果要走开放的平台路线，需要做对那些？这对于当下的大模型和agentic的时代也是非常重要的。"
keywords:
- Open Source
- Culture
- Reading
- Insight
tags:
- 洞察分析
- 开源之道
title: "【阅读札记】平台参与策略的演进：从专有治理到“第三条道路”的数字公地创新"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
---

# 深度阅读《从专有治理到集体治理：平台参与策略如何演进》

## 作者按

笔者之一，向来认为参与开源，或者是开源项目，是需要极大的知识和智慧才能成功的，单一的个体或许可以让事情变得简单，但是企业如果想要成为开放平台性的主导者，这从来不是一件容易的事，本次所选择的文献是开源项目历史上颇为重要的一篇，我们看一个项目如何从完全私有公司下的财产，逐渐演化为第三条道路：commons 治理之道！当然也给我们很多启示。

> ！！！ 本文基于大模型的deep research 生成，一些偏见不代表有借鉴意义，请仔细甄别。

![](/images/2026/04/reading-from-proprietary-to-collective-governance-face.jpg)

## **理论溯源：资源分配的博弈与“第三条道路”的崛起**

在人类社会发展的历史长河中，关于核心资源与生产要素的治理模式，始终存在着两条截然不同的主流路径。第一条路径是完全交给政府的集中式国家治理体系，这种体系强调自上而下的宏观调控与计划分配；第二条路径则是完全私有化的市场化自由竞争体系，通过明确的排他性产权界定，依赖价格机制与供需关系来实现资源的有效配置。长期以来，以加勒特·哈丁（Garrett Hardin）为代表的新古典经济学派通过“公地悲剧”（Tragedy of the Commons）这一著名隐喻，深刻影响了学术界与政策制定者的认知，即认为任何非私有、非国有的公共资源最终都不可避免地走向枯竭与崩溃 1。

然而，这种二元对立的理论框架在二十世纪末期受到了强烈的挑战。诺贝尔经济学奖得主伊莉诺·奥斯特罗姆（Elinor Ostrom）在其开创性著作《公地治理》（Governing the Commons）中，通过大量实证研究证明了人类社会在面对公共池塘资源（Common-pool resources）时，绝非只有“公地悲剧”这一种宿命 1。在国家强制控制与绝对私人所有权之间，一直存在着一条被称为“第三条道路”的治理模式——公地集体治理（Commons Governance） 2。这种模式通过社区利益相关者自发形成的边界规则、监督机制、制裁手段与冲突解决路径，成功地实现了资源的长期可持续管理，打破了新古典经济学中关于理性人必然导致集体行动失败的固有假设 4。

随着数字时代与信息社会的全面到来，代码、数据、开源框架以及算法模型等无形资产逐渐成为驱动社会经济运转的核心基础设施。这些资源有别于传统的自然资源（如牧场或渔业），它们具有非排他性，且在使用上往往是非竞争性的，构成了所谓的“数字公地”（Digital Commons） 6。理论家迈克尔·哈特（Michael Hardt）与安东尼奥·奈格里（Antonio Negri）进一步将数字公地定义为一种“非财产”（Nonproperty），它旨在创造社会财富而非个人占有，涵盖了思想、代码、图像、协作系统等非物质形态的公共产品 7。在数字公地的语境下，传统的财产排他性法则和政府行政指令显得捉襟见肘，强制的知识产权垄断甚至会阻碍技术的规模化创新 8。

开源软件生态的崛起，正是基于奥斯特罗姆理论在数字维度的伟大实践。早期的数字公地通过开源许可证（如GPL、Apache或MIT）确立了资源共享的法律基础，但这仅仅解决了“获取权”（Access）的问题，并未彻底解决“控制权”与“治理机制”（Control and Governance）的深层矛盾 6。在数字基础设施的构建过程中，从完全专有的闭源软件走向集体共建的数字公地，并非一蹴而就的单向度过程。以Linux基金会旗下的云原生计算基金会（CNCF）以及PyTorch基金会为代表的现代开源组织，在经历了长期的商业利益角逐与技术路线较力后，摸索出了一条全新的创新之路 11。这一模式不仅在商业利益与公共产品之间找到了精妙的平衡，更在组织架构、协作机制与财产权界定方面创造了工业史上的奇迹。

| 治理模式维度 | 纯粹国家/政府主导模式 | 完全私有化/市场模式 | 第三条道路：数字公地/集体治理模式 |
| :---- | :---- | :---- | :---- |
| **理论基础** | 凯恩斯主义、计划经济、公共物品理论 | 新古典经济学、科斯定理、私有产权理论 | 奥斯特罗姆公地治理、非财产理论（Nonproperty） |
| **产权归属** | 属于国家或联邦政府，代表全体公民拥有 | 属于单一企业或个人，具备绝对排他性 | 属于中立非营利基金会或社区集体，具备非排他性与非竞争性 |
| **资源配置方式** | 行政指令、配额、宏观规划 | 价格机制、市场供需、竞争垄断 | 集体协商、开源协议、社区贡献者驱动 |
| **主要风险与缺陷** | 官僚主义、创新动力不足、资源错配 | 垄断设租、公地悲剧、敲竹杠风险（Hold-up）、技术孤岛 | 弱治理导致的代码分叉、搭便车现象、供给不足、供应链安全风险 |
| **数字时代典型案例** | 国家级核心保密基础设施、数字货币监管 | 专有闭源软件（如早期Windows操作系统、闭源大模型） | Linux基金会、CNCF、PyTorch基金会、Apache软件基金会 |

## **文献与理论框架：从专有治理到集体治理的演进逻辑**

在研究开源平台与商业生态的互动时，学术界长期存在一种偏见，即普遍将焦点集中于具有统治力的平台创建者如何通过“平台领导力”（Platform Leadership）来获取竞争优势，并将平台治理简单地理解为平台领导者为了自身利益而操纵生态参与者的工具 10。然而，Siobhan O'Mahony与Rebecca Karp在其开创性实证文献《从专有治理到集体治理：平台参与策略如何演进》（From Proprietary to Collective Governance: How Platform Participation Strategies Evolve）中，提供了一个极具解释力的理论框架，彻底打破了这种单向度的视角 10。

该文献指出，平台生态系统中的多边互动具有极高的复杂性。在开源与集体治理框架下，外部企业（如互补品提供商、系统集成商、甚至竞争对手）并非被动接受规则的从属者，而是具备高度战略自主性的参与者。这些参与者会根据平台“访问权”（Access，即谁可以合法使用平台代码与资产）与“控制权”（Control，即谁有权决定平台规则与技术演进轨迹）的动态变化，不断调整自身的参与策略与资源投入强度 10。

O'Mahony与Karp通过将平台的治理维度拆解为法律（Legal）、成员资格（Membership）、技术（Technical）与架构（Architectural）四个大类共11个细分领域，清晰地描绘了治理规则变迁对企业策略的深远影响 10。这11个领域涵盖了知识产权的所有权、衍生作品的权利、代码提交权限的分配、跨项目的协调规则，以及平台宏观愿景的定义权等 10。通过追踪这些权利在创始企业与外部集体之间的转移，研究揭示了平台治理并非简单的“开”与“关”的二元对立，而是一个伴随信任重建与权力再分配的漫长过程。

### **提出问题：剥析“搭便车”与“供给问题”的理论错位**

在传统的开放式创新与数字公地研究中，创新学者与经济学家大多将注意力集中于“搭便车”（Free-riding）现象。这是一种典型的“占用问题”（Appropriation Problem），即在开放获取的条件下，某些企业会无偿使用公共资源而不做任何贡献，最终导致公共资源的枯竭 1。然而，在现代数字生态平台（尤其是代码几乎可以零边际成本复制的开源软件环境）的演进过程中，“占用”并非是最致命的威胁 10。

当平台的控制权开始从单一主导者向外分散时，真正引发参与者恐慌并导致平台参与度暴跌的，是奥斯特罗姆理论中提到的“供给问题”（Provisioning Problem） 10。在数字平台的语境下，“供给问题”不仅涉及如何维持代码的日常维护，更致命的是指向了平台范围的不可控扩张。如果一个开源平台缺乏明确的宏观领导者与集体决议机制，外部企业将面临极大的不确定性：他们不知道明天是否有其他参与者会将与自身商业产品直接竞争的功能免费“倾倒”进开源平台中。这种不可控的平台无序生长（平台包围效应，Platform Envelopment）会瞬间摧毁互补企业的商业差异化优势，让外部企业面临“被平台从底部吞噬”的战略危机 10。

因此，本文提出一个核心问题：既然纯粹的“代码开源”（即仅开放访问权）不足以激发外部企业的深度贡献，而失去主导控制权的“弱治理”又会导致供应链的不确定性与企业参与度下降，那么现代数字公地究竟需要构建何种精密的制度设计，才能在保持开源创新活力的同时，克服商业竞争的猜忌，并最终培育出真正的“分布式平台领导力”（Distributed Platform Leadership）？接下来的实证研究将通过Eclipse的历史案例以及CNCF与PyTorch的当代奇迹，深度剖析这一问题的答案。

![](/images/2026/04/reading-from-proprietary-to-collective-governance.jpg)

## **实证研究一：Eclipse平台治理演进的七年全景追踪**

为了回答上述理论问题，O'Mahony与Karp对由IBM主导发起的Eclipse开发平台在2000年至2006年间的治理演变进行了长达七年的深度纵向实证研究 10。Eclipse作为一款模块化的集成开发环境（IDE），其发展历程完美契合了平台治理演进的理论模型。研究者通过追踪16家不同规模（从收入不足500万美元的小微企业到年收入数百亿美元的硬件巨头）的外部参与企业，将其参与行为细分为1至6级的参与强度，并将其战略动机划分为合作型（Cooperative）与机会主义型（Opportunistic）两类 10。

| 参与强度等级 | 参与行为描述 | 资源投入特征 |
| :---- | :---- | :---- |
| 1级 (最低) | 成为活跃用户（Active User） | 仅需下载、使用并提供极少量的基础反馈。 |
| 2级 | 加入Eclipse组织（Join Eclipse） | 签署正式的成员协议，建立官方联系。 |
| 3级 | 成为董事会成员（Become a board member） | 参与定期或偶尔的会议，行使投票权，但不涉及底层代码贡献。 |
| 4级 | 加入具体项目开发（Join a project） | 开始实质性地向特定开源项目贡献或捐赠代码。 |
| 5级 | 委派全职提交者（Dedicate committers） | 企业出资聘请全职开发人员专职负责Eclipse相关项目的代码审查与合并。 |
| 6级 (最高) | 主导开源项目（Lead a project） | 投入多名全职开发人员，承担项目的架构设计、技术走向与社区领导责任。 |

实证研究发现，根据平台访问权与控制权在创始方（IBM）与集体之间的分配状态，Eclipse的演进呈现出四个截然不同的治理模式，而参与企业的行为在不同模式下发生了剧烈的反转 10。

### **模式一：专有模式（Proprietary, 2000-2001）**

在这一初始阶段，Eclipse的代码被视为IBM的专有资产。访问权高度封闭，IBM保留了对法律所有权、架构设计、技术合并以及成员准入等全部11个治理领域的绝对控制权 10。IBM仅仅通过签署严格的保密协议（NDA）邀请了少数外部企业进行内测。在这一极度封闭的环境下，企业的参与强度处于最低水平。合作型企业采取了“观察”（Observing）策略，仅仅为了确保自身商业软件与未来的Eclipse具备兼容性；而具有机会主义倾向的企业则采取了“抢跑”（Front-running）策略，利用提前获得的代码暗中开发与之竞争的商业产品，试图在Eclipse正式发布前抢占市场先机，但没有任何企业向平台贡献技术力量 10。

### **模式二：主导模式（Dominant, 2001-2003）**

意识到封闭模式无法建立庞大的生态系统后，IBM在2001年底决定将Eclipse源代码置于通用公共许可证（CPL）下发布，全面开放了访问权。然而，尽管代码开源，IBM仍牢牢把控着架构规划与技术决策的控制权，形成了“表面中立、实则单方主导”的治理格局 10。随着访问权的开放，外部企业的整体参与强度显著提升。部分企业开始执行“整合”（Integrating）策略，主动贡献部分适配代码。然而，由于惧怕IBM随时可能通过改变底层架构来窃取外部创新成果（占用担忧），绝大多数企业依然拒绝承担高强度的项目领导角色。有趣的是，机会主义企业在这一阶段开始实行“向上销售”（Selling-up）策略，他们故意向Eclipse平台贡献劣质或基础版本的代码，以便向用户推销其功能更强大的商业收费版本 10。

### **模式三：混合模式（Hybrid, 2004-2005）**

为了消除外界认为Eclipse是“IBM特洛伊木马”的偏见，IBM在2004年将平台的所有权正式移交给独立的非营利性基金会，放弃了核心控制权 10。但此时，新的集体治理机制尚未完善，平台关于技术架构与项目孵化的控制权处于“模糊”与“真空”状态 10。在这一完全开放且缺乏主导者的“弱治理”环境下，出现了反直觉的实证结果：几乎所有外部企业的参与强度都急剧下降 10。企业不再担忧IBM的占用，却陷入了强烈的“供给问题”焦虑 10。企业害怕在公开论坛中提出新项目如果失败会泄露商业机密，更恐惧平台上的其他参与者会随时将竞品代码直接合并到开源主干中，从而瞬间摧毁自身的商业护城河。在缺乏边界和规范的弱治理公地中，平台的参与度跌入冰点 10。

### **模式四：集体模式（Collective, 2006+）**

为了挽救平台，Eclipse基金会建立了一套由参与者代表组成的结构化董事会，全面接管了11项治理领域的决策权，确立了真正的集体治理 10。基金会引入了严格的项目路线图（Roadmapping）审批流程与“发布列车”（Release Train）同步机制。新项目必须经过董事会多数票的审核，并在功能演进上给予所有企业提前数月的时间可视性 10。这一机制完美化解了“供给焦虑”，为商业战略提供了极其宝贵的“时间可预测性” 10。随着规则的明朗，企业重新深化了参与度。更重要的是，在明确的边界保护下，“分布式平台领导力”（Distributed Platform Leadership）终于涌现。合作型企业开始主导新项目以“扩展”（Expanding）平台能力，而机会主义企业也愿意投入全职开发者通过主导项目来“引导”（Redirecting）平台避开其商业核心区。至此，不同利益诉求的商业实体在统一的集体规则下，共同构筑了生态的繁荣 10。

## **实证研究二：CNCF的“最小可行治理”与规避“弱治理”陷阱**

如果说Eclipse的历史演进奠定了从专有到集体的理论基础，那么Linux基金会旗下的云原生计算基金会（CNCF）则是这一理论在当代工业界取得的最具代表性与规模化的奇迹。云原生生态涉及容器化、微服务、服务网格等复杂的分布式技术，其涵盖的项目多达数百个，参与企业包括了Google、AWS、Microsoft等几乎所有存在激烈竞争的云计算巨头 15。在如此庞杂的生态中，CNCF成功避免了混合模式中的“弱治理”陷阱，通过创新的架构设计实现了空前的分布式协作 17。

### **克服“弱治理”的破坏性影响**

在开源社区与数字基础设施领域，“弱治理”（Weak Governance）被证明是破坏力极强的毒药 18。弱治理通常表现为缺乏独立的监督架构、模糊的晋升与贡献机制、缺失财务与合规透明度，以及对恶意代码的审查不力 20。在安全层面，近期NPM和PyPI等开源包管理器遭受的大规模供应链投毒攻击，正是由于维护者验证缺失和协作开发环境下的弱治理所致。攻击者通过提交看似无害的功能修复PR，暗中注入恶意代码，导致广泛的系统性瘫痪 21。在数据治理与AI部署领域，根据Gartner的研究，超过60%的企业AI项目失败，核心原因并非算法能力不足，而是由于底层数据基础设施存在严重的数据孤岛、质量参差与弱治理问题，导致AI输出失去语境相关性与可信度 22。

### **结构化的“最小可行治理”（MVG）架构**

面对弱治理的风险，CNCF并没有走向另一个极端——即像传统的Apache软件基金会（ASF）那样推行沉重且刻板的自上而下流程规范（如必须遵循统一的“Apache Way”） 24。相反，CNCF创造性地提出了“最小可行治理”（Minimum Viable Governance, MVG）原则 24。MVG的核心逻辑在于“辅助性原则”（Subsidiarity），即只在宏观层面设定边界与底线，将具体的微观技术决策权最大程度地保留在各个项目的维护者手中 24。这种设计既提供了法律与品牌的确定性，又保持了开源项目原有的敏捷性。

为了落实MVG，CNCF构建了一个多层级、立体化的集体协作网络，将技术路线规划与商业运营彻底剥离 28。

| 组织单元分类 | 缩写/英文 | 职责定位与生命周期特征 | 运作机制与参与者要求 |
| :---- | :---- | :---- | :---- |
| **技术监督委员会** | TOC (Technical Oversight Committee) | 整个基金会的最高技术决策机构，负责技术愿景、项目准入与毕业标准制定。 | 由业界顶尖资深架构师组成，任期两年。席位分配极为讲究平衡：不仅有来自理事会的代表，还明确增加了最终用户（End User）与非沙箱项目维护者的代表，确保决策的中立性与广泛性 28。 |
| **技术咨询小组** | TAG (Technical Advisory Group) | 聚焦特定工业问题域（如安全、网络、可观测性）的常设组织，充当TOC的专业智囊团。 | 设主席（TAG Chair）与技术负责人（Tech Lead），负责跨项目的需求协调与生态评估，为新项目孵化提供专家意见 28。 |
| **技术社区工作组** | TCG (Technical Community Group) | 面向特定话题的轻量级集结机制，类似于讨论组（BoF）。 | 不设正式的技术负责人，位于直接的TOC架构之外，旨在促进社区知识分享与早期概念验证 28。 |
| **短期倡议行动** | Initiatives | 高度聚焦、设定了严格时间边界（通常不超过两个季度）和退出标准的临时性任务编队。 | 必须有明确的目标预期，分为TAG级别、子项目级别与TOC级别的倡议。例如针对全基金会的跨组架构整合或供应链安全审计。完成既定目标后即刻解散，避免官僚机构的无限膨胀 30。 |

### **动态生命周期管理与财产权的集约化保护**

CNCF在解决O'Mahony提出的“供给问题”上展现了卓越的智慧。为了消除商业公司对开源项目无序扩张或突然死亡的担忧，CNCF设立了极其严谨的“项目成熟度模型”，将所有项目分为沙箱级（Sandbox）、孵化级（Incubating）与毕业级（Graduated） 16。这一清晰的标签系统使得企业能够根据自身的风险偏好进行技术选型。同时，CNCF还制定了完善的“归档机制”（Archival Policy）。当项目不再活跃或未能满足安全态势标准时，TOC会启动长达数月的透明审议流程将其归档。归档后，基金会将停止对该项目的营销资源倾斜，但继续中立地托管其商标与文档，以保障现有采用者的平稳过渡 32。

在财产权（Property Rights）层面，CNCF强制要求所有托管项目的核心知识产权和商标转移至Linux基金会名下 32。这从根本上杜绝了任何云巨头利用资金优势“挟持”项目的可能性。更进一步，针对日益猖獗的利用模糊专利对开源采用者进行敲诈的“专利流氓”（Patent Trolls），CNCF联合Unified Patents发起了名为“Cloud Native Heroes”的防卫项目 34。该项目动员全球庞大的云原生社区寻找并在系统中登记“在先技术”（Prior Art）证据，主动击碎专利流氓的专利有效性，从而在集体层面构建起一道坚不可摧的法律防火墙 34。这种跨越单一企业边界的集体防御机制，在传统商业世界中是不可想象的，它是数字公地时代财产权保护的极致体现。

## **实证研究三：PyTorch基金会化解“敲竹杠”困境与生态扩张**

如果说CNCF是对横向海量组件的宏观编排，那么在人工智能领域占据统治地位的深度学习框架PyTorch，则为我们提供了一个从单一企业“主导模式”成功跃迁至“集体模式”的经典微观实证案例 37。另外我们需要明确的一个概念是相比于TensorFlow，第一代是代码的发布（如 TensorFlow 早期），第二代则是机构治理权的分散（如 PyTorch 进入 LF）。强调 PyTorch 的成功不在于它比 TensorFlow 更早开源，而在于它更早实现了“去中心化治理”。

### **从单一控制到集体架构的转折**

自2016年发布以来，PyTorch最初是一个主要由Meta（前Facebook）内部研发团队主导，部分外部个体参与的开源项目 37。在早期的发展阶段，Meta扮演着绝对的主导者角色，掌控着PyTorch的技术路线和架构演进 37。这种模式在初期极大地推动了框架在学术界和工业界的普及。然而，随着深度学习迈向大规模并行计算与大语言模型（LLM）时代，AI底层基础设施的复杂性呈指数级增长 39。

此时，处于产业链上游的算力互补方（如Nvidia、AMD、Intel等硬件制造商）面临着极大的战略风险。为了让自身的GPU或AI加速卡能够高效运行PyTorch，这些硬件厂商必须投入数千万甚至上亿美元开发专门的编译器适配层与底层算子（如CUDA或CANN的优化接口） 40。但在Meta单方控制技术路线的时期，一旦Meta为了自身业务需求突然更改PyTorch的底层调用逻辑，硬件厂商的巨额研发投资将瞬间沦为沉没成本。这在经济学上被称为典型的“敲竹杠”困境（Hold-up Problem） 42。由于这种严重的不确定性与信任缺失，硬件巨头们在投入最尖端资源时始终有所保留。

为了打破这一增长瓶颈，2022年9月，Meta做出了一个极具战略远见的决定：放弃对PyTorch的单方控制权，将其连同相关知识产权一同移交给Linux基金会，成立独立的中立机构——PyTorch基金会 12。

### **“点燃创新”：治理重构与参与机制的反转**

哈佛商学院研究员Frank Nagle与佐治亚理工学院的Daniel Yue在其重磅研究《点燃创新：来自PyTorch在开放协作中技术控制的证据》（Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration）中，通过计量经济学手段量化了这次治理重构带来的深远影响 42。实证研究得出了令人震撼的结论：在控制权由“主导（Dominant）”转向“集体（Collective）”后，焦点企业Meta的直接代码贡献量出现了大幅下降；但与此同时，来自外部企业的代码贡献量却激增了惊人的25.7% 42。

这一数据的背后揭示了深刻的理论实质：**治理结构的改变并不会凭空创造新的创新激励，而是彻底重塑了生态系统中的激励分配机制** 42。在集体治理机制下，AMD、AWS、Google Cloud、Meta、Microsoft Azure和Nvidia等巨头共同组成了基金会的理事会（Governing Board），负责商业战略、资金调配与市场推广；而底层的技术决策权，则被赋予了完全独立的“技术咨询委员会”（Technical Advisory Council, TAC）以及各子项目的核心维护者 37。这种将“谁出资”与“谁定技术标准”相隔离的防火墙机制，彻底消除了硬件巨头与云服务商对“被套牢”的恐惧 42。因此，外部的芯片制造商（互补型企业）开始毫无保留地向PyTorch注入针对特定硬件架构的核心优化代码，实现了AI基座的空前繁荣 42。

### **保护伞架构下的生态边界扩张**

解决了核心架构的信任危机后，PyTorch基金会顺势完成了由单一项目治理向大规模生态集群编排的进化 39。基金会转型为一个“保护伞”（Umbrella Foundation），明确接纳并托管了涵盖AI全生命周期的前沿工具。在这一框架下，分布式计算引擎Ray、大规模推理优化框架vLLM以及模型训练加速工具DeepSpeed等重磅开源项目相继被纳入基金会的版图 39。基金会将这些项目清晰地划分为“平台级项目”（Platform Projects，如跨硬件优化、Agentic系统基础设施）与“垂直级项目”（Vertical Projects，如生物医药成像或空间地理分析） 53。通过建立CI互操作、多云部署、安全审计等跨领域的协作工作组，PyTorch不仅巩固了自身作为行业标准的地位，更在“分布式平台领导力”的驱动下，构建起了一个包含100多个高质量组件的模块化防御矩阵，有效防止了开源资源的碎片化与生态内耗 39。

## **实证研究四（反面案例）：开放原子开源基金会的“缝合模式”与“货物崇拜”陷阱**

在探讨“第三条道路”的成功经验时，引入一个试图缝合“政府主导”（第一条道路）与“完全私有化”（第二条道路）却最终陷入“弱治理”陷阱的反面案例，将有助于更深刻地理解公地集体治理的实质。中国工信部麾下的开放原子开源基金会（OpenAtom Foundation）的发展轨迹，正是这种失败模式的典型代表。

在中国政府试图通过建立公私合作伙伴关系、组建“国家队”来主导数据标准和构建技术平台的宏观背景下 63，开放原子开源基金会的成立并非完全源自开源社区自下而上的真实需求。2019年，华为在被美国商务部列入实体清单之后，为了应对供应链危机，利用其资源与政府关系优势，破例在中国《慈善法》的框架下推动成立了这家软件基金会。

然而，这种自上而下的构建模式从一开始就偏离了开源公地的核心精神，并在实践中暴露出严重的结构性缺陷：

* **主权不清与控制权垄断：** 华为将部分尚未成熟的项目捐赠给该基金会。虽然代码库在表面上对外实现了“开放访问”（Open Access），但由于缺乏真正的中立防火墙，这些底层技术的控制权（Control）和演进路线依然牢牢把控在单一焦点企业（华为）手中。这种做法重新唤醒了生态内其他参与者的“被套牢”与占用焦虑，导致主权界定极为模糊。  
* **“货物崇拜”（Cargo Cult）式的虚假治理：** 基金会的治理结构陷入了徒有其表的怪圈。它表面上模仿了Linux Foundation、Apache Software Foundationion 顶级开源组织的架构，但实际上却缺乏独立、透明且真正赋权于社区的决策机制。这种缺乏实际约束力与独立监督的“弱治理”，不仅无法有效调配资源，还容易滋生效率低下或仅仅是个摆设问题 。  
* **违背开源精神的审查壁垒：** 与真正的开源社区强调的无门槛协作截然不同，开放原子基金会托管的代码平台受到了严苛的审查与限制，开发者甚至无法对仓库进行匿名的自由访问。这种行政指令和封闭体系的介入，从根本上扼杀了开源协同的生命力。
* **“伪中立”导致的信任缺失（治理权未实质性转移）：** 治理权必须移交给“中立且具有独立决策能力的机构”。开放原子虽名义上是基金会，但其决策层（理事会）深受行政指令和单一巨头（如华为、阿里等）的博弈影响，缺乏类似 Linux 基金会那种“跨越国界的、基于开发者共识”的独立性。这导致竞争对手（如小米、vivo、Oppo等）在参与 OpenHarmony 时，依然面临强烈的“被敲竹杠”恐惧——他们不确定明年的路线图是为了生态好，还是为了某家公司的硬件销量好。
* **软预算约束下的“人造繁荣”：**真正的开源生态依赖“硬预算约束”——如果没人用、没人贡献，项目就死掉。而行政开源通过政企采购、高校学分和专项补贴，给项目套上了一层“软预算”。这导致了**“代码行数的公地悲剧”**：开发者为了 KPI 或补贴而提交大量臃肿、低质的代码，造成了账面上的“1.3亿行代码繁荣”，但在 Nagle 定义的“数字暗物质”层面，这些代码不仅没有经济价值，反而增加了后续的维护负债。
* **从“点燃创新”到“行政套壳”的退化：** 行政开源由于缺乏“无许可创新（Permissionless Innovation）”的环境，所有的重大变更都需要层层审批。这把“协作道场”变成了“汇报广场”。这种环境吸引不到真正的“黑客”，只能吸引到“数字外包工人”，最终导致生态丧失了应对大模型时代快速迭代的韧性。

**“缝合实验”的最终破产：**

这场试图在政府行政引导与单一寡头私有控制之间寻找平衡的实验，最终未能兑现任何一方的战略目标。华为未能如愿将其主导的项目打造成为像Android Open Source Project (AOSP) 那样具有全球统治力的中立生态；工信部也未能借此真正实现“信创领先、拥有自主可控国产操作系统”的宏大愿景。而开放原子开源基金会本身，不仅没有走出真正创新的“第三条道路”，反而异化成了一个缺乏实质创新能力、公信力缺失的“四不像”机构，也是Cargos Cult 的表演之地，旗下员工就像太平洋的原住民一样每天假装地干着和项目无关的“祈祷”的事情。

这一反面案例极其精准地印证了 O'Mahony 的理论：在开源与平台生态中，仅仅开放“访问权”或披上“基金会”的外衣是毫无意义的。如果没有真正在制度层面让渡技术控制权、确立防范垄断的财产隔离，以及建立起自下而上的结构化集体治理机制，平台不仅无法克服“供给问题”和“信任危机”，甚至会导致整个生态不可逆转地走向衰竭。

## **商业、组织、协作与财产权的四大奇迹：深度透视“第三条道路”**

结合Eclipse的历史轨迹以及CNCF与PyTorch在当代的巨大成功，我们可以清晰地看到，开源生态在数字时代所走出的“第三条道路”（公地治理），本质上是在四个核心维度对传统商业竞争模式进行的革命性重构，创造了属于现代科技工业史的奇迹 11。

| 核心维度 | 传统商业框架（专有模式）的痛点与风险 | 集体治理模式（第三条道路）下的机制重构与“奇迹”表现 | 典型实证案例与底层逻辑 |
| :---- | :---- | :---- | :---- |
| **财产权维度 (Property Rights)** | 代码知识产权与商标被单一企业垄断。外部企业不敢深度整合，惧怕侵权诉讼、平台包围或严重的“锁定效应”（Lock-in）。 | **知识产权隔离与防御性集权。** 核心商标和版权由独立基金会永久托管，保障中立品牌。利用集体力量对抗外部专利流氓体系。 | PyTorch商标安全交接给LF 39；CNCF联合发起“Cloud Native Heroes”，动员全球开发者提交在先技术（Prior Art）捍卫云原生公地的财产权边界 34。 |
| **商业维度 (Business Models)** | 依靠底层技术的垄断地位设租，攫取超额利润。创新试错成本极高，市场极易陷入寡头停滞。 | **打破零和博弈，底层技术非商品化。** 将核心基础设施转化为公共物品，降低全行业重复造轮子的研发成本，企业转而在垂直场景或高附加值服务上变现。 | Intel与AMD积极加入PyTorch，意图打破Nvidia硬件与CUDA生态的深度绑定垄断 40；初创企业与云大厂在CNCF的统一下实现商业共赢 57。 |
| **协作维度 (Collaboration)** | 跨企业的研发协作受制于严苛的反垄断法规与商业机密保护，通常只能进行高摩擦的闭门双边测试（如签署NDA）。 | **全天候的超大规模透明协作。** 建立以代码提交与技术审查为核心的流水线。通过API标准化与跨组织工作组机制，实现竞争对手在研发底层的无缝对接。 | CNCF通过TAG架构聚集了数十万贡献者 28；PyTorch成立多云、加速器、安全等全域工作组，大幅度提升全球AI算力的技术共识达成效率 39。 |
| **组织维度 (Organizational Design)** | 自上而下的科层制与官僚体系。决策链条冗长，对边缘创新反应迟钝；一旦失去控制力即陷入混乱的弱治理。 | **分布式多级代表制与“最小可行治理”。** 决策权分层下放至微观项目维护者层面，同时在宏观愿景、退出标准与合规底线上保持极高的纪律性。 | PyTorch通过TAC与 Governing Board 分离技术与商业决策 51；CNCF推行MVG，允许项目根据自身成熟度灵活制定规则，体现了辅助性原则（Subsidiarity）的精髓 24。 |

在这四个维度的共同作用下，现代数字公地构筑了一种“强防御、广连接”的集体堡垒。以商业竞争的逻辑来看，像Meta或Google这样的科技寡头愿意将耗费巨资打造的核心资产（如PyTorch或Kubernetes）无偿交予基金会，绝非出于纯粹的利他主义或数字乌托邦的幻想。相反，这是一种极其高阶的战略杠杆利用方式 10。通过主动放弃排他性控制权并赋权互补方，这些巨头以最小的后续维护成本，将自家的技术框架确立为不可撼动的全球工业标准。当全球所有的芯片厂商、云服务提供商、数据中心架构师都在围绕PyTorch或Kubernetes进行底层调优和生态建设时，Meta或Google自身在运行海量应用和庞大AI模型时的计算摩擦与迁移成本随之呈指数级下降 42。这种通过牺牲短期、局部的统治权，换取长期、全局性生态繁荣与规模经济的做法，彻底诠释了开放式协作的非凡商业价值。

## **对开源生态及企业数字化战略的深度启示**

透过对Eclipse理论演变以及CNCF、PyTorch当代实践的详尽解剖，“第三条道路”为当今数字化转型中的企业管理者、开源项目发起人以及政策制定者提供了极为丰富且具备实操价值的深远启示。

**其一，必须摒弃“开放即繁荣”的幻觉，深刻认识到“访问权”（Open Access）仅仅是平台战略的起点。** 在早期的开源实践中，许多企业错误地认为只要将代码放置在GitHub上并挂上开源协议，就能自动吸引海量的社区开发者无偿“打工”。然而，实证研究无情地粉碎了这一幻想 10。在缺乏明确控制权让渡与制度性保障的前提下，外部企业对于“占用风险”（知识产权被窃取）与“供给风险”（技术路线被随意更改）的恐惧，将彻底扼杀任何深度的战略投资 10。如果企业希望外部伙伴（尤其是互补型巨头）在其平台上进行实质性的资源投入，必须在技术路线的规划权、代码提交流程的审核权以及商标权利的归属上，做出切实的让步与具有法律效力的制度性安排 10。

**其二，“时间可预测性”（Temporal Predictability）是维系商业利益与开源互信的核心纽带。** 在Eclipse的混合模式以及许多陷入失败的开源项目中，导致生态分崩离析的并非技术本身的劣势，而是由于开发进度无序、功能变更毫无征兆所带来的极度不确定性 10。对于依托底层开源架构进行商业化SaaS开发或硬件适配的企业而言，“不可预知的技术突变”比“缓慢的技术迭代”更具破坏力 10。集体治理模式通过引入透明的孵化周期、严格的废弃（Deprecation）与归档（Archival）通知机制，以及固定周期的发布列车（Release Trains），在混乱的技术演进中注入了秩序。这种时间轴上的确定性，为生态内的商业实体提供了充足的缓冲期，以调整其竞争战略、消化底层架构变动并重新调配研发资源 10。

**其三，突破内卷，主动拥抱并培育“分布式平台领导力”（Distributed Platform Leadership）。** 在专有模式或主导模式下，焦点企业往往受制于强烈的“护食”心理，排斥竞争对手在自身开源项目中担任核心维护者，生怕技术话语权旁落。然而，PyTorch从Meta向LF过渡的实证数据清晰地表明，只有通过严密的治理设计主动稀释原始创作者的垄断地位，让各种利益相关方（甚至是相互竞争的云厂商和芯片制造商）在各自擅长的细分维度（如通信架构、编译器优化、容器编排）获得绝对的技术领导权，平台才能真正突破单一企业的人力和智力天花板 10。分布式领导力不仅没有削弱平台的影响力，反而使其具备了极强的抗脆弱性，能够以极高的韧性应对复杂多变的技术浪潮 10。

**其四，在平台工程与AI基础设施建设中，全面强化“结构化治理”以规避“弱治理”陷阱。** 迈向2026年，随着云原生平台工程（Platform Engineering）的深化以及自主代理AI（Agentic AI）在企业内部的大规模部署，治理机制的设计将直接决定IT基础设施的成败 22。过度严苛的官僚式审批会严重扼杀开发者的创造热情，而治理的彻底放任则会导致严重的合规灾难与算力浪费（如Zombie Infrastructure与数据孤岛） 22。开源组织必须运用“最小可行治理”（MVG）的理念，将精力集中于定义清晰的行为准则、利益冲突隔离墙（防火墙）、以及知识产权底线的坚守上。而在具体操作层面，应大力依赖自动化平台编排器与AI驱动的护栏（Guardrails），通过“黄金路径”（Golden Paths）将合规与安全要求隐式地嵌入开发流程之中 27。通过技术手段实现治理原则，最大程度地赋予基层维护者自由裁量权，这才是解决现代复杂数字系统治理难题的终极方向。

综上所述，在这场长达数十年的计算技术革命中，从完全由单一企业垄断的专有软件堡垒，向自由松散但危机四伏的开源荒原演进，最终升华至高度结构化、制度化的公地集体治理机制，平台参与策略的演变轨迹勾勒出了一条充满博弈智慧的“第三条道路”。在这条道路上，数字公地实践彻底颠覆了传统的零和商业竞争思维。它们通过精妙的制度设计，将代码资源、品牌商标与技术控制权从私人寡头的资产池中安全剥离，置于中立、透明的基金会保护伞之下。这不仅在微观层面克服了“弱治理”带来的信任断层与供应链危机，更在宏观层面奇迹般地实现了竞争对手之间在基础设施底层的深度协同。站在新时代的节点上，面对生成式大模型、自动驾驶与万物互联等更加庞杂且昂贵的技术前沿，单一企业的力量已显得微不足道。以中立、共识和规则驱动的数字公地集体治理模式，必将成为驱动全球技术创新的核心引擎，继续在商业奇迹、组织架构与财产权利的交汇点上，引领人类数字文明奔向更高维度的繁荣与开放。


####  参考资料

0. Siobhan O’Mahony and Rebecca Karp. From proprietary to collective governance: How do platform participation strategies evolve? Strategic Management Journal, 43(3):530–562, March 2020. ISSN 0143-2095, 1097-0266. doi: 10.1002/smj.3150. URL https://onlinelibrary.wiley.com/doi/10.1002/smj.3150.
1. Elinor Ostrom's 8 rules for managing the commons \- The Earthbound Report, accessed April 5, 2026, [https://earthbound.report/2018/01/15/elinor-ostroms-8-rules-for-managing-the-commons/](https://earthbound.report/2018/01/15/elinor-ostroms-8-rules-for-managing-the-commons/)  
2. The Future of Commons | Exploring Economics, accessed April 5, 2026, [https://www.exploring-economics.org/en/discover/the-future-of-commons/](https://www.exploring-economics.org/en/discover/the-future-of-commons/)  
3. Exploring Commons Theory for Principles of a Socialist Governmentality, accessed April 5, 2026, [https://zajednicko.org/mreznabibliografija/wp-content/uploads/sites/2/2018/04/Exploring-Commons-Theory-for-Principles-of-a-Socialist-Governmentality.pdf](https://zajednicko.org/mreznabibliografija/wp-content/uploads/sites/2/2018/04/Exploring-Commons-Theory-for-Principles-of-a-Socialist-Governmentality.pdf)  
4. Rethinking Institutional Analysis: Interviews with Vincent and Elinor Ostrom, accessed April 5, 2026, [https://www.mercatus.org/research/research-papers/rethinking-institutional-analysis-interviews-vincent-and-elinor-ostrom](https://www.mercatus.org/research/research-papers/rethinking-institutional-analysis-interviews-vincent-and-elinor-ostrom)  
5. Urban commons : rethinking the city, accessed April 5, 2026, [https://zajednicko.org/mreznabibliografija/wp-content/uploads/sites/2/2018/04/Urban-Commons-Rethinking-the-City.pdf](https://zajednicko.org/mreznabibliografija/wp-content/uploads/sites/2/2018/04/Urban-Commons-Rethinking-the-City.pdf)  
6. Digital commons | Internet Policy Review, accessed April 5, 2026, [https://policyreview.info/concepts/digital-commons](https://policyreview.info/concepts/digital-commons)  
7. The Political Economy of Capitalism in the Digital Age, Economic Democracy, and the Case for the Digital Commons \- Loyola eCommons, accessed April 5, 2026, [https://ecommons.luc.edu/cgi/viewcontent.cgi?article=4990\&context=luc\_diss](https://ecommons.luc.edu/cgi/viewcontent.cgi?article=4990&context=luc_diss)  
8. Infrastucture and General Purpose Technologies: A Technology Flow Framework \- Villanova University Charles Widger School of Law, accessed April 5, 2026, [https://digitalcommons.law.villanova.edu/cgi/viewcontent.cgi?article=1186\&context=facpubs](https://digitalcommons.law.villanova.edu/cgi/viewcontent.cgi?article=1186&context=facpubs)  
9. Governing Digital Public Infrastructure, accessed April 5, 2026, [https://www.integralsolutionists.com/governing-digital-public-infrastructure](https://www.integralsolutionists.com/governing-digital-public-infrastructure)  
10. From Proprietary to Collective Governance How Platform Participation Strategies Evolve (OMahony, Siobhan Karp, Rebecca) (Z-Library).pdf  
11. D2.2 | Design of the 5GZORRO Platform for Security & Trust, accessed April 5, 2026, [https://www.5gzorro.eu/wp-content/uploads/2021/10/5GZORRO-D2.2-EC-approved.pdf](https://www.5gzorro.eu/wp-content/uploads/2021/10/5GZORRO-D2.2-EC-approved.pdf)  
12. Welcoming PyTorch to the Linux Foundation, accessed April 5, 2026, [https://www.linuxfoundation.org/blog/blog/welcoming-pytorch-to-the-linux-foundation](https://www.linuxfoundation.org/blog/blog/welcoming-pytorch-to-the-linux-foundation)  
13. Meta Transitions PyTorch to the Linux Foundation, Further Accelerating AI/ML Open Source Collaboration, accessed April 5, 2026, [https://www.linuxfoundation.org/press/press-release/meta-transitions-pytorch-to-the-linux-foundation](https://www.linuxfoundation.org/press/press-release/meta-transitions-pytorch-to-the-linux-foundation)  
14. Inter-Organizational Collaborations in Open-Source Software Ecosystems \- ResearchGate, accessed April 5, 2026, [https://www.researchgate.net/publication/399204103\_Inter-Organizational\_Collaborations\_in\_Open-Source\_Software\_Ecosystems](https://www.researchgate.net/publication/399204103_Inter-Organizational_Collaborations_in_Open-Source_Software_Ecosystems)  
15. Top 7 challenges to becoming cloud native | CNCF, accessed April 5, 2026, [https://www.cncf.io/blog/2020/09/15/top-7-challenges-to-becoming-cloud-native/](https://www.cncf.io/blog/2020/09/15/top-7-challenges-to-becoming-cloud-native/)  
16. Case Studies | CNCF, accessed April 5, 2026, [https://www.cncf.io/case-studies/](https://www.cncf.io/case-studies/)  
17. How OSS Initiatives Like CNCF Are Driving Next-Gen Cloud-Based Services \- International Journal of Communication Networks and Information Security (IJCNIS), accessed April 5, 2026, [http://www.ijcnis.org/index.php/ijcnis/article/view/8045/2224](http://www.ijcnis.org/index.php/ijcnis/article/view/8045/2224)  
18. Reimagining Data Governance for AI: Operationalizing a Social License for Data Reuse \- Agence Française de Développement, accessed April 5, 2026, [https://www.afd.fr/sites/default/files/2025-05-01-53-37/RT\_78\_VA\_BAT.pdf](https://www.afd.fr/sites/default/files/2025-05-01-53-37/RT_78_VA_BAT.pdf)  
19. Pricing Science in the Era of Algorithmic Regulation: A Call for Responsible Design and Measurable Efficacy \- Cognitive World, accessed April 5, 2026, [https://cognitiveworld.com/articles/2026/2/26/pricing-science-in-the-era-of-algorithmic-regulation-a-call-for-responsible-design-and-measurable-efficacy](https://cognitiveworld.com/articles/2026/2/26/pricing-science-in-the-era-of-algorithmic-regulation-a-call-for-responsible-design-and-measurable-efficacy)  
20. Top 10 Section 8 Companies in India – List & Examples \- RegisterKaro, accessed April 5, 2026, [https://www.registerkaro.in/post/list-of-top-10-section-8-companies-in-india](https://www.registerkaro.in/post/list-of-top-10-section-8-companies-in-india)  
21. Killing Two Birds with One Stone: Malicious Package Detection in NPM and PyPI using a Single Model of Malicious Behavior Sequence \- arXiv, accessed April 5, 2026, [https://arxiv.org/html/2309.02637v2](https://arxiv.org/html/2309.02637v2)  
22. Demystifying Data Observability: 5 Steps to AI-Ready Data \- BigDATAwire \- HPCwire, accessed April 5, 2026, [https://www.hpcwire.com/bigdatawire/2025/10/22/demystifying-data-observability-5-steps-to-ai-ready-data/](https://www.hpcwire.com/bigdatawire/2025/10/22/demystifying-data-observability-5-steps-to-ai-ready-data/)  
23. Challenges in AI Adoption for Manufacturing | by Khmaïess Al Jannadi \- Medium, accessed April 5, 2026, [https://medium.com/@jannadikhemais/challenges-in-ai-adoption-for-manufacturing-88669e47f020](https://medium.com/@jannadikhemais/challenges-in-ai-adoption-for-manufacturing-88669e47f020)  
24. Chris Aniszczyk's (zx) diatribe | work. life. open source. diatribes., accessed April 5, 2026, [https://www.aniszczyk.org/](https://www.aniszczyk.org/)  
25. Comparing Apache, CNCF, and Commonhaus \- cnr.sh, accessed April 5, 2026, [https://cnr.sh/posts/comparing-apache-cncf-commonhaus/](https://cnr.sh/posts/comparing-apache-cncf-commonhaus/)  
26. CNCF technical principles and open governance success, accessed April 5, 2026, [https://www.cncf.io/blog/2019/08/30/cncf-technical-principles-and-open-governance-success/](https://www.cncf.io/blog/2019/08/30/cncf-technical-principles-and-open-governance-success/)  
27. What it Means to be a Vendor Neutral Project in the CNCF \- CNCF Contributors, accessed April 5, 2026, [https://contribute.cncf.io/projects/best-practices/community/vendor-neutrality](https://contribute.cncf.io/projects/best-practices/community/vendor-neutrality)  
28. Governance \- CNCF Contributors \- Cloud Native Computing Foundation, accessed April 5, 2026, [https://contribute.cncf.io/community/governance/](https://contribute.cncf.io/community/governance/)  
29. CNCF TOC governance structure \+ elections 2020, accessed April 5, 2026, [https://www.cncf.io/blog/2019/12/06/cncf-toc-governance-structure-elections-2020/](https://www.cncf.io/blog/2019/12/06/cncf-toc-governance-structure-elections-2020/)  
30. CNCF Initiatives \- CNCF Contributors \- Cloud Native Computing Foundation, accessed April 5, 2026, [https://contribute.cncf.io/community/initiatives/](https://contribute.cncf.io/community/initiatives/)  
31. 10 Years in Cloud Native: TOC Restructures Technical Groups | CNCF, accessed April 5, 2026, [https://www.cncf.io/blog/2025/05/07/10-years-in-cloud-native-toc-restructures-technical-groups/](https://www.cncf.io/blog/2025/05/07/10-years-in-cloud-native-toc-restructures-technical-groups/)  
32. Archived Projects | CNCF, accessed April 5, 2026, [https://www.cncf.io/archived-projects/](https://www.cncf.io/archived-projects/)  
33. toc/process/archiving.md at main · cncf/toc \- GitHub, accessed April 5, 2026, [https://github.com/cncf/toc/blob/master/process/archiving.md](https://github.com/cncf/toc/blob/master/process/archiving.md)  
34. The Cloud Native Heroes Challenge | CNCF, accessed April 5, 2026, [https://www.cncf.io/heroes/](https://www.cncf.io/heroes/)  
35. CNCF Honors Innovators and Defenders with 2025 Community Awards at KubeCon \+ CloudNativeCon North America, accessed April 5, 2026, [https://www.cncf.io/announcements/2025/11/12/cncf-honors-innovators-and-defenders-with-2025-community-awards-at-kubecon-cloudnativecon-north-america/](https://www.cncf.io/announcements/2025/11/12/cncf-honors-innovators-and-defenders-with-2025-community-awards-at-kubecon-cloudnativecon-north-america/)  
36. CNCF and the Linux Foundation partner with Unified Patents on a community-driven approach to deter patent trolls, accessed April 5, 2026, [https://www.cncf.io/blog/2024/09/16/cncf-and-the-linux-foundation-partner-with-unified-patents-on-a-community-driven-approach-to-safeguard-open-source-innovation-from-patent-trolls/](https://www.cncf.io/blog/2024/09/16/cncf-and-the-linux-foundation-partner-with-unified-patents-on-a-community-driven-approach-to-safeguard-open-source-innovation-from-patent-trolls/)  
37. PyTorch strengthens its governance by joining the Linux Foundation, accessed April 5, 2026, [https://pytorch.org/blog/pytorchfoundation/](https://pytorch.org/blog/pytorchfoundation/)  
38. Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration \- Questrom World, accessed April 5, 2026, [https://questromworld.bu.edu/platformstrategy/wp-content/uploads/sites/49/2025/07/PlatStrat2025\_paper\_145.pdf](https://questromworld.bu.edu/platformstrategy/wp-content/uploads/sites/49/2025/07/PlatStrat2025_paper_145.pdf)  
39. PyTorch Foundation: The Next Chapter, Together, accessed April 5, 2026, [https://pytorch.org/blog/pytorch-foundation-the-next-chapter-together/](https://pytorch.org/blog/pytorch-foundation-the-next-chapter-together/)  
40. Chapter 3 \- U.S.-China Competition in Emerging Technologies, accessed April 5, 2026, [https://www.uscc.gov/sites/default/files/2024-11/Chapter\_3--U.S.-China\_Competition\_in\_Emerging\_Technologies.pdf](https://www.uscc.gov/sites/default/files/2024-11/Chapter_3--U.S.-China_Competition_in_Emerging_Technologies.pdf)  
41. 2024 Annual Report to Congress \- U.S.-China Economic and Security Review Commission, accessed April 5, 2026, [https://www.uscc.gov/sites/default/files/2024-11/2024\_Annual\_Report\_to\_Congress.pdf](https://www.uscc.gov/sites/default/files/2024-11/2024_Annual_Report_to_Congress.pdf)  
42. Shaping the Future of Innovation: Insights from PyTorch's Governance Transformation, accessed April 5, 2026, [https://d3.harvard.edu/shaping-the-future-of-innovation-insights-from-pytorchs-governance-transformation/](https://d3.harvard.edu/shaping-the-future-of-innovation-insights-from-pytorchs-governance-transformation/)  
43. Announcing the PyTorch Foundation to Accelerate Progress in AI Research \- About Meta, accessed April 5, 2026, [https://about.fb.com/news/2022/09/pytorch-foundation-to-accelerate-progress-in-ai-research/](https://about.fb.com/news/2022/09/pytorch-foundation-to-accelerate-progress-in-ai-research/)  
44. Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration \- Working Paper \- Faculty & Research \- Harvard Business School, accessed April 5, 2026, [https://www.hbs.edu/faculty/Pages/item.aspx?num=66443](https://www.hbs.edu/faculty/Pages/item.aspx?num=66443)  
45. Igniting Innovation: Evidence from Pytorch on Technology Control in Open Collaboration | Request PDF \- ResearchGate, accessed April 5, 2026, [https://www.researchgate.net/publication/397388634\_Igniting\_Innovation\_Evidence\_from\_Pytorch\_on\_Technology\_Control\_in\_Open\_Collaboration](https://www.researchgate.net/publication/397388634_Igniting_Innovation_Evidence_from_Pytorch_on_Technology_Control_in_Open_Collaboration)  
46. Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration | Request PDF \- ResearchGate, accessed April 5, 2026, [https://www.researchgate.net/publication/384123480\_Igniting\_Innovation\_Evidence\_from\_PyTorch\_on\_Technology\_Control\_in\_Open\_Collaboration](https://www.researchgate.net/publication/384123480_Igniting_Innovation_Evidence_from_PyTorch_on_Technology_Control_in_Open_Collaboration)  
47. Faculty Research \- Scheller College of Business \- Georgia Tech, accessed April 5, 2026, [https://www.scheller.gatech.edu/academics-research/current-research/index.html](https://www.scheller.gatech.edu/academics-research/current-research/index.html)  
48. PyTorch Governance | Mechanics, accessed April 5, 2026, [https://docs.pytorch.org/docs/stable/community/governance.html](https://docs.pytorch.org/docs/stable/community/governance.html)  
49. PyTorch Foundation, accessed April 5, 2026, [https://pytorch.org/foundation/](https://pytorch.org/foundation/)  
50. PyTorch Foundation Charter, accessed April 5, 2026, [https://pytorch.org/wp-content/uploads/2025/03/pytorch-foundation-charter.pdf](https://pytorch.org/wp-content/uploads/2025/03/pytorch-foundation-charter.pdf)  
51. PyTorch Foundation Principles.docx, accessed April 5, 2026, [https://pytorch.org/wp-content/uploads/2024/11/pytorch-foundation-principles.pdf](https://pytorch.org/wp-content/uploads/2024/11/pytorch-foundation-principles.pdf)  
52. Intel \- Edge AI and Vision Alliance, accessed April 5, 2026, [https://www.edge-ai-vision.com/companies/intel/](https://www.edge-ai-vision.com/companies/intel/)  
53. PyTorch Foundation Expands to an Umbrella Foundation to Accelerate AI Innovation, accessed April 5, 2026, [https://pytorch.org/blog/pt-foundation-expands/](https://pytorch.org/blog/pt-foundation-expands/)  
54. PyTorch Foundation Expands to Umbrella Foundation and Welcomes vLLM and DeepSpeed Projects \- PR Newswire, accessed April 5, 2026, [https://www.prnewswire.com/news-releases/pytorch-foundation-expands-to-umbrella-foundation-and-welcomes-vllm-and-deepspeed-projects-302447897.html](https://www.prnewswire.com/news-releases/pytorch-foundation-expands-to-umbrella-foundation-and-welcomes-vllm-and-deepspeed-projects-302447897.html)  
55. Luca Antiga, Lightning AI | Why Ray Joining the PyTorch Foundation Changes Open Source AI \- YouTube, accessed April 5, 2026, [https://www.youtube.com/watch?v=CrepmS9kh4Y](https://www.youtube.com/watch?v=CrepmS9kh4Y)  
56. NVIDIA's AI Empire: Decoding the Semiconductor Giant's Dominance | RockFlow, accessed April 5, 2026, [https://rockflow.ai/blog/nvda-four-trillion](https://rockflow.ai/blog/nvda-four-trillion)  
57. Panel: Startups With Open Source Projects: Can They Be Successful in the CNCF? And Should They Be? \- YouTube, accessed April 5, 2026, [https://www.youtube.com/watch?v=PbAIC\_piKPI](https://www.youtube.com/watch?v=PbAIC_piKPI)  
58. (PDF) Open-Technology Maneuvering in Digital Infrastructures \- ResearchGate, accessed April 5, 2026, [https://www.researchgate.net/publication/378407844\_Open-Technology\_Maneuvering\_in\_Digital\_Infrastructures](https://www.researchgate.net/publication/378407844_Open-Technology_Maneuvering_in_Digital_Infrastructures)  
59. What is platform engineering? | CNCF, accessed April 5, 2026, [https://www.cncf.io/blog/2025/11/19/what-is-platform-engineering/](https://www.cncf.io/blog/2025/11/19/what-is-platform-engineering/)  
60. The autonomous enterprise and the four pillars of platform control: 2026 forecast | CNCF, accessed April 5, 2026, [https://www.cncf.io/blog/2026/01/23/the-autonomous-enterprise-and-the-four-pillars-of-platform-control-2026-forecast/](https://www.cncf.io/blog/2026/01/23/the-autonomous-enterprise-and-the-four-pillars-of-platform-control-2026-forecast/)  
61. Speakers \- GenAI Zürich 2026, accessed April 5, 2026, [https://www.genaizurich.ch/speakers](https://www.genaizurich.ch/speakers)  
62. Announcing the Automated Governance Maturity Model | CNCF, accessed April 5, 2026, [https://www.cncf.io/blog/2025/05/05/announcing-the-automated-governance-maturity-model/](https://www.cncf.io/blog/2025/05/05/announcing-the-automated-governance-maturity-model/)  
63. Impact on Artificial Intelligence (Part II) \- AI Development and the 'Fuzzy Logic' of Chinese Cyber Security and Data Laws \- Cambridge University Press, accessed April 5, 2026, [https://www.cambridge.org/core/books/ai-development-and-the-fuzzy-logic-of-chinese-cyber-security-and-data-laws/impact-on-artificial-intelligence/A5E7857C2F6314ACAB35FD9CAF7431A1](https://www.cambridge.org/core/books/ai-development-and-the-fuzzy-logic-of-chinese-cyber-security-and-data-laws/impact-on-artificial-intelligence/A5E7857C2F6314ACAB35FD9CAF7431A1)

#### 下一篇文献：

* David J. Teece. Profiting from technological innovation: Implications for integration, collaboration,licensing and public policy. Research Policy, 15(6):285–305, December 1986. ISSN 0048-7333. doi: 10.1016/0048-7333(86)90027-2. URL http://www.sciencedirect.com/science/article/pii/0048733386900272.

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Social Hacker，协作机制设计者。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 AI 助手（如 Gemini 3.1 Pro 等），「开源之道」·窄廊 负责在对话中作为镜像与反弹板，提出问题、提供理论切入点并对推演进行反馈。仅偶尔进行双重验证！