---
categories:
- 开源
- 感悟
date: 2024-12-17T21:01:17+08:00
description: "在细节中见魔鬼，大眼一看，貌似全都是专家，可是真正起作用的是细节。Fork 显而易见，但是Fork 多重含义必须是行家能够判断的，这就是适兕要翻译Linux 基金会2024年度报告中的以小节的原因，以及一篇2013年的评论文章。希望借此让自己和更多人理解fork。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "《分叉的权利》及《开源软件的代码分叉、治理和可持续性》"
url: ""
authors:
- Linux 基金会，Linus Nyman等
translater:
- 「开源之道」·适兕
---

## 分叉的权利

（本文节选自Linux 基金会2024年度报告[1]）

“分叉的权利”一直以来都是开源共同体不得已的选择，但是它确实是非常重要的。在过去的2024年里，Linux 基金会帮助开源项目寻求支持和中立的家园，以行驶本来属于共同体的分叉权。经过过去一年多的实践证明，分叉后的共同体充满了活力，这表明，各方可以在中立的条款和真正的开源许可下进行合作，从而不受使用的限制，维护分叉的权利是可能的。

直到最近，许多人都认为分叉的权利只是一种空洞的威胁。然而，在过去五年中，几家软件公司意外地将其开源项目的许可证更改为更严格的许可证。通常，这些新模式承诺“可持续性”、“公平性”等，作为“补救”开源的手段。它们带有引人注目的网站和品牌，例如“商业来源”、“公平来源”、“商业来源”，或者我们通常所说的所有这些非开源许可证：“源代码可用”。虽然公司有权改变方向，但它对依赖该软件的外部贡献者和用户社区产生了严重影响。他们信任该公司在开源许可证下运营项目。依赖该软件的商业实体和用户突然面临支付商业许可证或迁移的最后期限。外部贡献者和用户共同体选择分叉该项目的先前开源版本并进行迁移。

OpenTofu[2]、OpenBao[3] 和 Valkey[4] 等项目作为近期分叉项目的快速崛起，为考虑那些变革许可协议的公司确立了新的现实。这些分支为快速创建可行的共同体和生态系统树立了先例。Linux 基金会为这些项目提供了中立的家园、最佳实践、模板、运营指导、活动、法律支持、营销和技术基础设施，并支持其共同体的发展。

精心策划和得到良好支持的分支的出现也使共同体变得更加开放，对各种类型的贡献者更加开放，而不仅仅是为了盈利。例如，一些公司以对来自 community 贡献不友好或抵制他们想为企业客户保留的功能而闻名。拥有一个中立的共同体使许多现有的贡献者和非贡献者能够出现并做出更多贡献——结果是惊人的。

HashiCorp 决定将其流行的 Terraform 和 Vault 代码库重新授权为闭源许可证，随后来自开源共同体就宣布了 OpenTofu 和 OpenBao 项目。HashiCorp 的重新授权这一举动，打乱了许多依赖这些代码库的用户和开源项目共同体。OpenTofu 是一个开源的基础设施即代码平台，提供了一个共同体驱动的 Terraform 替代方案，提供管理云基础设施的功能，重点关注维护开放治理和稳定性。OpenBao 是 LF Edge 下的一个项目，是一个开源、社区驱动的 Vault 替代方案，用于管理、存储和分发敏感数据，如秘密、证书和加密密钥。随着这些开源项目在开发者中的受欢迎程度和采用率开始增长，HashiCorp 不正确地指控 OpenTofu 侵犯版权，社区迅速以完全透明的回应，驳斥了这些错误的指控。在今年三月，随着 Redis 许可证变更为“双源可用（dual source-available）”，Linux 基金会宣布成立了 Valkey 项目。

分叉的权利不仅是2024年的趋势，其实早在三年前就发生过，ElasticSearch 公司更改了颇为流行的代码仓库的许可为闭源，Amazon AWS 将 ElasticSearch 的代码仓进行了分叉，建立了 OpenSearch[5]项目，并邀请更多人加入参与，在这段时间里，OpenSearch 从共同体参与者那里获得了巨大的增长，包括来自 AWS 之外的两位数的维护者，以及两次主要和19次要的发布，和7亿次下载。一个单一供应商赞助的开源项目实现了所有这些惊人的里程碑。在今年的九月份，AWS 与其共同体合作，将 OpenSearch 成功过渡到了 Linux 基金会，完成了中立治理的结构，为未来的进一步扩展创造了机会，并将项目的未来交到了开源共同体的掌握之中。

在欧洲开源峰会的主题演讲[6]中，Gabriele Columbro 发表了以下观点：

> “由基金会托管的开源项目意味着项目随时间改变其许可证的可能性非常小，即使这种情况发生了，也将是因为项目共同体的治理机构达成了共识，而绝不是由单一成员的决定，因此这有效地允许开源永久保持开放。仅凭开源许可证本身是不够的。”

2024年已经证明，一个项目由中立的共同体驱动的治理确实很重要。基金会模式确保知识产权有中立的治理，与共同体的需求保持一致，为依赖开源项目的组织提供了较低的风险，并且使分叉项目更紧密地与共同体利益保持一致。

在九月份，Valkey 项目发布了8.0版本，这说明了通过承诺开源合作所支持的力量和快速创新。Valkey、OpenTofu、OpenBao 和 OpenSearch 的增长代表了对单一供应商重新授权情况的重要制衡。依赖这些项目的共同体已经采取了坚定的立场，投资并保持他们所依赖的项目真正开源。共同体现在有了一个明确的行动方案，通过组织应对许可证变更来确保创新的连续性，并证明开源项目可以在任何单一企业实体之外蓬勃发展。随着开源的发展，分叉的权利将保持作为一个关键机制，以维护对开源软件的信任，并确保其未来仍然是共同体驱动的。

> 在报告[1]中，编辑引用了一篇十年前的文章的重要观点，适兕认为有必要认真阅读和学习，以下是对文章的翻译。

## 开源软件的代码分叉、治理和可持续性[7]

> 分叉代码的能力 —— 开源软件的核心自由 —— 是保持共同体活力和公司诚实的关键。
> ————格伦·穆迪（Glyn Moody），技术作家和记者

开源代码分叉的权利是开源许可证的核心。所有开源许可证都授予分叉其代码的权利，即利用现有代码作为基础启动新的开发工作。因此，代码分叉代表了保证开源软件可持续性的最强工具。除了加强开源程序的可持续性，代码分叉会直接影响开源计划的治理。分叉，哪怕仅仅是分叉代码的可能性，具体的影响是通过三个不同的层面来实现的，即：软件、共同体和生态系统，影响开源计划的治理和可持续性。在软件层面，分叉的权利使得计划性淘汰、版本控制、供应商锁定、支持终止问题以及类似的计划几乎不可能实施。在共同体层面，分叉通过赋予共同体权力来保护自身不受公司或项目领导者不利行动的影响，从而影响可持续性和治理。在商业生态系统层面，分叉可以作为创新的催化剂，同时通过自然选择促进更高质量的软件。因此，分叉有助于保持开源计划的相关性，并为当前和被遗弃程序的开发和商业化提供机会。

### 介绍

本文探讨了如何通过开源项目分叉的权利——使用现有程序的源代码来启动一个新的、独立的版本——作为一种治理机制，为开源软件提供可持续性。可持续性的概念存在争议，有众多的标准可以用来衡量一个产品的可持续性。（例如：Connelly, 2007[8];Davison, 2001[9];McManus, 1996[10]）但是本文确定的是：在当前研究的背景下，可持续性被定义为开源程序继续满足其开发者和用户需求的可能性。

虽然代码分叉可能导致重复性的独立工作，但它代表了保证开源软件可持续性的最强工具。在本文中，我们回顾了开源计划中的代码分叉，并讨论了代码分叉的管理启示。文章结构如下：首先，我们提供一些关于代码分叉的背景；其次，我们探讨代码分叉如何影响前文提到的三个层面的治理；最后，我们解释这些发现的相关性及其管理启示。

### 背景

代码分叉常常被视为一种负面现象。这种负面观点的核心是对“分叉”这个术语持续使用的限制性，可能已经过时的定义。直到最近，分叉这个术语主要用来描述一个开发者社区分裂成相互竞争的阵营，每个阵营都在继续开发自己的、不兼容的软件版本的情况。（请参考：Raymond, 1999[11];Fogel, 2006[12]）因此，在关于分叉的讨论中所表现出的负面语气与对进展受阻、资源浪费以及一个或两个项目可能灭亡的担忧有关。近年来，分叉这个术语的使用范围已经扩大，涵盖了所有将现有代码库用于独立项目的情况（见 GitHub 的定义[13]）。在本研究的背景下，我们遵循这种更广泛的分叉定义。

尽管分叉项目有很多原因，但最常见的原因是希望修改原始程序以更好地满足特定需求。（Nyman and Mikkonen, 2011[14]）分叉也可能是计划中的、临时的分歧，旨在测试新的想法和功能，并计划稍后将有效的改进重新整合回原始项目中。（Nyman and Mikkonen, 2011[14]；GitHub 的定义[13]）代码分叉的权利是开源程序定义的核心。开源倡议（Open Source Initiative）对开源的第三条标准规定，许可证“必须允许修改和衍生作品。”同样，自由软件基金会（Free Software Foundation）的自由软件定义指出，用户有“运行、复制、分发、研究、更改和改进软件”的自由。所有衍生的计划都可以被视为分叉，因为它们是“修改或衍生的”（OSI）或“复制、更改和改进的”。分叉任何项目的可能性影响着所有开源程序的治理和可持续性。

软件是可编辑的、互动的、可重新编程的、分布式的，并且是开放(Kallinikos et al., 2010[15];)的。这些特性决定了软件容易被改变、修复和更新，而不是从设计过程的早期阶段就保持固定。开放性加上软件的颗粒化组成提供了新的治理方式(Benkler, 2006[16])。这种治理不是与过度占用自然资源相关（Ostrom, 1991[17]），而是与一群开发者遵循制度规则、集体生产公共产品[18]的方式相关。

### 治理的三个层级

#### 1. 软件层

软件行业的特性决定了程序不能在很长一段时间内保持稳定的稳态。它们必须继续发展，以保持其功能可用性和相关性。如果没有持续的适应，一个程序将逐渐变得不能满足预期。（Lehman, 1980[19]）相反，真正成功的软件能够适应甚至比它最初编写时的硬件有更长的使用寿命（Brooks, 1975[20]）。因此，改变和进化的能力是软件可持续性的关键组成部分。尽管停滞可能是过时的前兆，但过时并不一定随着时间的推移而悄悄进入一个项目；它通常是设计上的特点。

20世纪50年代，美国工业设计师布鲁克斯·史蒂文斯（Brooks Stevens）(The Economist, 2009[21])推广了计划性淘汰的概念，这与可持续性的概念形成了鲜明对比。史蒂文斯将计划性淘汰定义为在购买者中灌输“拥有一些更新的、更好的、比必要的时间更早的东西的愿望”的行为(Brooks Stevens’ 生平[22])。被一些人视为“技术进步的引擎”（Fishman etal., 1993[23]），但在商业伦理文献中(Guiltinan, 2009[24])越来越受到质疑的计划性淘汰是每个消费者生活的一部分。尽管当代软件开发和分发的特点与20世纪50年代的工业产品有很大不同，但在软件市场中公司的收益模型常常欢迎诸如系统版本控制这样的元素，以鼓励用户重新购买同一系统的更新版本，或者限制客户选择某些系统或产品的供应商，从而形成供应商锁定。（更多信息请参考：Combs，2000[25]）程序的新版本可能会引入与早期操作系统或程序的兼容性问题（例如，Internet Explorer、Microsoft Office或OS X的OpenStep API缺乏向后兼容性）。一些程序还引入了新的文件格式，这可能会引起与程序早期版本的兼容性问题（例如，docx与doc）。此外，生命周期结束声明和对支持期限结束的担忧可能会鼓励用户升级，无论是否真的需要这样做。

代码分叉的权利使得在开源中实施这些元素变得不切实际。改进程序的权利、组合多个程序的权利以及使程序与其他程序和版本兼容的权利，都是构建在开源定义本身中的基本权利。研究表明，这些权利经常被行使(Fitzgerald, 2006[26])。这种在开源系统中不断的协作改进的结果是，任何得到开源共同体支持的程序都可以享有确保的相关性，而不是计划性淘汰。此外，随着项目和需求的更新，已经衰败并被废弃的程序可以通过从原始程序分叉代码来复活和更新。实际上，这是一种相当普遍的做法：Nyman 和 Mikkonen研究（2000[14]）的近400个分叉中，有7%涉及复活一个被遗弃的项目。只要对一个项目有足够的兴趣，分叉就可以实现软件功能的持续改进。

#### 2.共同体层

分叉的可能性对于任何开源社区的治理至关重要。开源项目的共享所有权允许任何人随时分叉一个项目。因此，没有任何个人或团体对项目拥有“神奇控制权” (Fogel, 2006[12])。由于涉及社区分裂的分叉可能会损害整体生产力，Fogel指出，分叉一个程序的潜力是“将开发者凝聚在一起的不可或缺的因素”。

开源社区中的一个担忧是 Lerner 和 Tirole （2000[27]）所说的代码劫持。当商业供应商试图私有化一个项目的源代码时，就会发生劫持。2008年，Sun Microsystems收购了开源关系数据库管理系统MySQL，随后Sun Microsystems被甲骨文公司收购，这是一个涉及共同体对潜在劫持担忧的案例。有人争论说，这样的一系列收购将导致 MySQL 和整个开源运动的崩溃(Foremski, 2006[28])。针对这些说法，穆迪指出（2009，[29]），虽然开源公司可以被收购，但开源社区不能。分叉为支持开源项目的社区提供了一种方式，即在发生此类收购时，他们可以推出自己版本的项目。事实上，这正是MYSQL的情况。原始的MySQL开发者迈克尔（蒙蒂）·维迪纽斯因为对MYSQL代码的治理和未来开放性的担忧，分叉了MYSQL代码并用不同的名字启动了新版本，即MariaDB（详情见维迪纽斯的博客[2009年2月5日：和2009年12月12日：以及新闻稿）。

同样，在2010年，由于对治理的共同体关注导致了 OpenOffice 项目的分叉。包括长期贡献者在内的文档基金会（The Document Foundation）分叉了 OpenOffice 代码，开始 LibreOffice 项目。这个分支项目强调了“透明、协作和包容”治理的重要性（文档基金会）。最近对 LibreOffice 项目的分析表明，这次分叉已经形成了一个可持续的社区，没有任何停滞的迹象（Gamalielsson和Lundell，2012[30]）。鉴于分叉确保了只要有足够的社区兴趣，任何项目都可以继续进行，我们之前将分叉描述为开源软件中“可持续性”的“无形之手”(Nyman et al., 2011[31])。

通常，分叉是由于共同体希望创建不同的功能或将项目聚焦于新方向。这样的分叉基于软件需求或焦点的差异，而不是对项目领导者的不信任。当它们满足不同共同体需求时，不同版本共存且共同繁荣。

在传统公司中，由CEO和董事会领导的管理团队控制公司并为持续发展提供动力。虽然领导层的愿景对于任何开源项目最终的成功同样至关重要，但他们的持续控制更加脆弱，并且取决于他们与共同体的关系以及对共同体的响应。分叉不能被商业模式或治理系统所阻止。关键在于适当的资源分配和谨慎的共同体管理。管理者必须在提供动力的同时，找到平衡点以安抚和统一共同体。（关于开源治理模式，请参考OSS Watch[32]，关于构建技术共同体，请参考Skerrett, 2008[33],有关更多开源共同体管理请参考：Byron, 2009[34]）

#### 3. 生态层

在开源软件这个动态的世界里，自然选择充当着一种淘汰的力量，不断选择最适合的代码以求生存(Torvalds, 2001[35])。然而，分叉权意味着任何公司都可以复制任何竞争对手的开源软件发行版；因此，竞争优势不能仅仅取决于代码的质量。然而，值得强调的是，可能性并不等于成功。为了争夺相同的客户群而对商业上成功的程序进行分叉的权利仍然会给潜在竞争对手带来商标、品牌价值和认知度以及原程序现有的开发者和用户群等问题。尽管分叉允许公司使用相同的开源软件进行竞争，但合作仍被认为是企业成功的关键。(Muegge, 2011[36])

开源软件是并不收取授权费的，但它也越来越多地为商业利益而开发和支持（Wheeler,2009[37]）。虽然分叉权似乎会造成恶劣的商业环境，但开源公司可以蓬勃发展。Red Hat 就是其中一个例子，其收入达数十亿美元[38]。虽然他们的收入主要来自与其软件成功相关的订阅和服务，但 Red Hat 的程序本身很大程度上是基于其他开发人员的程序分叉。这种组合分叉程序的现象并非 Red Hat 独有：数百种不同的 Linux 发行版[39]都是通过分叉现有产品并将其重新打包为新版本而实现的。

分叉为创新者将新功能引入市场奠定了基础，大量的在线锻造厂拥有数十万个程序可供分叉并以用户能想到的任何新的、创造性的方式重复使用，从而能够快速适应最终用户的需求。因此，分叉的实践允许开发一个强大、响应迅速的软件生态系统，能够满足大量需求((Nyman et al., 2012[40])。

俗话说，“一个人的垃圾是另一个人的宝藏”，这在开源软件开发中尤为突出。诺基亚于 2011 年放弃 MeeGo 项目后不久，芬兰公司 Jolla 宣布将围绕该项目的复兴开展业务，而这要通过分叉原始代码来实现。2012 年 7 月 16 日，Jolla 宣布与中国最大的手机零售商之一 D. Phone 签订合同，并于 11 月 21 日推出了 Sailfish OS。然而，人们不必成为开源企业即可从分叉权中受益。分叉还可以帮助那些选择使用现有程序或将其开发用于个人用途的公司。开源中共享源代码的要求与分发有关，而不是修改，这意味着人们可以分叉程序并对其进行修改以供内部使用，而无需将代码提供给其他人。（关于许可的讨论，请参考St. Laurent 2004[41]；Välimäki 2005[42];Meeker 2008[43]; 关于混合许可的架构设计实践请参考：Hammouda 和他的同事们 2010 [44]）

表 1 总结了分叉如何影响治理并有助于确保可持续性的方式。

### 管理启示

管理人员应考虑代码分叉的以下影响：

* 被放弃的项目可能成为商机；
* 无论是商业模式还是治理体系都无法完全杜绝分叉，因此开发者和社区的满意度至关重要；
* 一个强大而充满活力的 Community 是实施开源程序时需要考虑的关键问题。在获取系统时，开源软件的分叉潜力（尤其是与强大的 Community相结合时）提供了避免版本控制和供应商锁定到产品或系统提供商的机会。然而，虽然 Community 很重要，但它并不是唯一要考虑的因素。有关评估和选择企业使用的开源软件的更多信息，请参阅 2008 年 5 月的 TIM Review。
* 现有的开源程序有成千上万，均可以进行分叉。如果（企业）需要软件，并且开源是一种选择，请首先分析代码存储库（如 SourceForge 和 GitHub ）上已有的内容。请记住，分发（而不是修改）才要求共享源代码。请务必先阅读许可证！

### 总结

分叉处于几个不同的开源主题的交汇处，例如软件开发、治理以及公司参与 Community 和商业生态系统。为了清晰起见，我们简化了分叉这一多方面概念的分类。实际上，这些类别之间存在重叠：强大的 Community 可以更好地确保软件级别的可持续性，而更好的软件可以更容易地吸引更大的 Community 。管理不善的 Community 和被遗弃的项目都可能催生商业生态系统竞争对手。

分叉代码的权利是开源软件的固有权利，所有开源许可证都保证了这一点。这种分叉权利对治理具有重大影响，有助于确保开源软件的可持续性。我们从软件层面、社区层面和生态系统层面三个不同层面分析了分叉的影响。在软件层面，代码分叉是一种可持续发展的治理机制，它提供了一种克服计划报废和衰退以及版本控制、锁定和相关问题的方法。在 Community 层面，代码分叉为 Community 提供了逃生通道：启动新版本程序的权利，从而确保了可持续性。最后，在生态系统层面，分叉是自然选择的核心组成部分，也是创新的催化剂。在线的开发提供了大量可公开使用的程序，可作为新创作的基石。当前项目可以分叉，废弃项目可以恢复并商业化，或者可以以新颖的方式任意组合，以更好地满足开发人员和最终用户的需求。**分叉权塑造了开源项目的治理，并为当今的开源计算提供了活力**。

表1: 分叉及其对应的管理层级

| 层级        | 分叉需要提供的可持续性     |案例 |
|-- --|-- --|-- --|
|  软件   |  分叉权可防止计划淘汰、版本控制和供应商锁定。因衰退而导致的废弃可通过分叉和更新来应对  |   微软 Word 和 LibreOffice， 相当常见的开源做法 见Nyman 2011[14] |
| 共同体    |  通过为开发人员提供继续运行自己版本程序的选项，防止项目负责人或所有者的劫持和其他不利行为   |   MariaDB 从MySQL 分叉；LiberOffice 从 OpenOffice 分叉  | 
| 生态    |  通过允许开源项目的组合和修改来提高创新潜力;被放弃的（或处理不当的）项目可以复活，创造新的商业机会。   | Linux 不同的发行版；被遗弃的MeeGo，分叉重生为Sailfish。    | 

### 论文作者介绍

**Linus Nyman**  是芬兰赫尔辛基Hanken经济学院的一名博士生，他在那里研究开源软件中的代码分叉。当他不从事研究时，有时可以在企业战略或开源软件的讲座中找到他。其他感兴趣的领域包括免费增值商业模式和MMORPGs（在线游戏）。Linus拥有Hanken经济学院的经济学硕士学位。

**Juho Lindman** 是芬兰赫尔辛基Hanken经济学院信息系统科学助理教授。Juho在赫尔辛基的阿尔托大学经济学院完成了他的博士论文答辩，论文重点是开源软件开发组织。在信息系统领域，他目前的研究集中在开源软件开发、开放数据和组织变革等方面。


## 参考资料

1. Linux基金会2024年度报告：加速行业创新 ，https://www.linuxfoundation.org/hubfs/Reports/2024%20Linux%20Foundation%20Annual%20Report_120524.pdf
2. https://opentofu.org/
3. https://openbao.org/
4. https://valkey.io/
5. https://opensearch.org/ 
6. https://youtu.be/_820bt3hQVY?si=eEpCazlz-nvOKQW2
7. Nyman, L. and J. Lindman. 2013. Code Forking, Governance, and Sustainability in Open Source Software. Technology Innovation Management Review. January 2013: 7-12
8. Connelly, S. (2007). Mapping Sustainable Development as a Contested Concept. Local Environment, 12(3), 259–278. https://doi.org/10.1080/13549830601183289
9. 《Technology and the Contested Meanings of Sustainability》，Aidan Davison，SUNY Press，2001
10. McManus, P. (1996). Contested terrains: Politics, stories and discourses of sustainability. Environmental Politics, 5(1), 48–73. https://doi.org/10.1080/09644019608414247
11. The Cathedral and the Bazaar ,http://www.catb.org/%7Eesr/writings/cathedral-bazaar/cathedral-bazaar/
12. 《Producing Open Source Software：How to Run a Successful Free Software Project》，Karl Fogel，在线版：https://producingoss.com/
13. https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
14. Nyman, Linus, and Tommi Mikkonen. "To Fork or Not to Fork: Fork Motivations in SourceForge Projects," International Journal of Open Source Software and Processes (IJOSSP) 3, no.3: 1-9. https://doi.org/10.4018/jossp.2011070101
15. Kallinikos, J., Lanzara, G. F., & Nardi, B. (2010). The digital habitat -- Rethinking experience and social practice: An introduction to the First Monday special issue. First Monday, 15(6). https://doi.org/10.5210/fm.v15i6.3032
16. 《网络的财富：社会生产如何改变市场和自由》,Yochai Benkler, 在线中文版：https://opensourceway.community/posts/book-of-open-source/the-wealth-of-network/whatever-index/
17. 《公共事物的治理之道：集体行动制度的演进》， (美)埃莉诺﹒奥斯特罗姆著， 上海译文出版社，2000-6-1
18. Scacchi, Walt & Crowston, Kevin & Jensen, Chris & Madey, Greg & Squire, Megan & Alspaugh, Thomas & Gasser, Les & Hissam, Scott & Kanomata, Yuzo & Ekbia, Hamid & Wei, Kangning & Schweik, Charles. (2010). Towards a science of open source systems Final Report Prepared for the Computing Community Consortium (CCC). 
19. M. M. Lehman, "Programs, life cycles, and laws of software evolution," in Proceedings of the IEEE, vol. 68, no. 9, pp. 1060-1076, Sept. 1980, doi: 10.1109/PROC.1980.11805. keywords: {Application software;Environmental economics;Computer applications;Economic indicators;Microprocessors;Productivity;Software maintenance;Fabrics;Automatic programming},
20. 《The mythical man-month》，Frederick P. Brooks，Addison-Wesley Longman Publishing Co., Inc. 1995-08
21. https://www.economist.com/node/13354332
22. http://www.brooksstevenshistory.com/brooks_bio.pdf
23. Fishman, A., Gandal, N., & Shy, O. (1993). Planned Obsolescence as an Engine of Technological Progress. The Journal of Industrial Economics, 41(4), 361–370. https://doi.org/10.2307/2950597
24. Guiltinan, J. Creative Destruction and Destructive Creations: Environmental Ethics and Planned Obsolescence. J Bus Ethics 89 (Suppl 1), 19–28 (2009). https://doi.org/10.1007/s10551-008-9907-9
25. Combs, K.L. Shapiro, Carl and Hal R. Varian (1998). Information Rules: A Strategic Guide to the Network Economy. The Journal of Technology Transfer 25, 250–252 (2000). https://doi.org/10.1023/A:1007897212472
26. Fitzgerald, Brian. “The Transformation of Open Source Software.” MIS Quarterly 30, no. 3 (2006): 587–98. https://doi.org/10.2307/25148740.
27. Lerner, Josh, and Jean Tirole. "Some Simple Economics of Open Source." Journal of Industrial Economics 50, no. 2 (June 2002): 197–234. (Earlier versions distributed as HBS Working Paper No. 00-068 and NBER Working Paper No. 7600.)
28. Adapt or die--the choice facing the open source movement  https://www.siliconvalleywatcher.com/adapt-or-die--the-choice-facing-the-open-source-movement/
29. Who Owns Commercial Open Source – and Can Forks Work? https://www.linuxjournal.com/content/who-owns-commercial-open-source-%E2%80%93-and-can-forks-work 
30. Gamalielsson, J., Lundell, B. (2012). Long-Term Sustainability of Open Source Software Communities beyond a Fork: A Case Study of LibreOffice. In: Hammouda, I., Lundell, B., Mikkonen, T., Scacchi, W. (eds) Open Source Systems: Long-Term Sustainability. OSS 2012. IFIP Advances in Information and Communication Technology, vol 378. Springer, Berlin, Heidelberg. https://doi.org/10.1007/978-3-642-33442-9_3
31. Nyman, Linus & Mikkonen, Tommi & Lindman, Juho & Fougère, Martin. (2012). Perspectives on Code Forking and Sustainability in Open Source Software. IFIP Advances in Information and Communication Technology. 378. 274-279. 10.1007/978-3-642-33442-9_21. 
32. http://oss-watch.ac.uk/resources/governancemodels
33. Skerrett, Ian. “TIM Lecture Series: Building Technical Communities.” Open Source Business Resource (2008): n. pag.
34. Lessons on Community Management from the Open Source World ,  https://web.archive.org/web/20130324104501/https://timreview.ca/article/258 
35. https://groups.google.com/g/fa.linux.kernel/c/bzuK77VWNIA/m/mxwSsUpN8FIJ
36. Muegge, Steven. (2011). Business Ecosystems as Institutions of Participation: A Systems Perspective on Community-Developed Platforms. Technology Innovation Management Review. 1. 1. 10.22215/timreview/495. 
37. https://dwheeler.com/blog/2009/ 
38. Red Hat Reports Fourth Quarter and Fiscal Year 2012 Results https://www.businesswire.com/news/home/20120328006414/en/Red-Hat-Reports-Fourth-Quarter-Fiscal-Year
39. https://en.wikipedia.org/wiki/List_of_Linux_distributions
40. Nyman, L., Mikkonen, T., Lindman, J., Fougère, M. (2012). Perspectives on Code Forking and Sustainability in Open Source Software. In: Hammouda, I., Lundell, B., Mikkonen, T., Scacchi, W. (eds) Open Source Systems: Long-Term Sustainability. OSS 2012. IFIP Advances in Information and Communication Technology, vol 378. Springer, Berlin, Heidelberg. https://doi.org/10.1007/978-3-642-33442-9_21
41. 《Understanding Open Source and Free Software Licensing: Guide to Navigating Licensing Issues in Existing & New Software》，Andrew M. St. Laurent ，O'Reilly Media; First Edition,Annotated (Sept. 7 2004)
42. 《THE RISE OF OPEN SOURCE LICENSING：A CHALLENGE TO THE USE OF INTELLECTUAL PROPERTY IN THE SOFTWARE INDUSTRY》，在线阅读：http://lib.tkk.fi/Diss/2005/isbn9529187793/isbn9529187793.pdf
43. 《The Open Source Alternative: Understanding Risks and Leveraging Opportunities》，Heather Meeke，Wiley; 1st edition (Feb. 8 2008)
44. Imed Hammouda, Tommi Mikkonen, Ville Oksanen, and Ari Jaaksi. 2010. Open source legality patterns: architectural design decisions motivated by legal concerns. In Proceedings of the 14th International Academic MindTrek Conference: Envisioning Future Media Environments (MindTrek '10). Association for Computing Machinery, New York, NY, USA, 207–214. https://doi.org/10.1145/1930488.1930533

## 关于译者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。
