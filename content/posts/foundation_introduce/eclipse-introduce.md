---
categories:
- 开源
- 基金会
date: 2020-04-07T11:43:45+08:00
description: "毋庸置疑，Eclipse 是成功的，无论是项目本身，还是基金会运作，它所打造的IDE栈，引领了一个时代，彻底改变了IDE的格局，也让一门语言赢得了天下，那么这个项目和其背后的基金会背后有着什么样的经历？让我们不妨回顾一番。"
keywords:
- Open Source
- Culture
- Reading
- News
- foundation
tags:
- 基金会介绍
- 开源之道
title: "商业公司主导下的非营利开源软件基金会之 ———— Eclipse 的成长和发展"
authors:
- 开源之道
---

> 成为由个人和组织所组成的共同体通力协作打造商业友好的开源项目的领导者。
>
> ​                               ———— Eclipse 愿景

## Eclipse Theia 1.0 发布，剑指微软 VS Code

前一阵子，Eclipse 基金会高调发布了一个新的可用的项目—— Theia 1.0，而且PR 直接称：一款可以替代VS Code的开源云 IDE，并且使出了杀手锏：VS Code 的插件可以无缝直接使用。

技术如何我们暂且不论，这是否是一种似曾相识的感觉？ VS Code 是否像极了GitHub 的Atom？如果你是身处软件行业多年的老兵，不妨回忆一下二十多年以来，为了讨好开发者，各个商家争先创新、降低价格、投其所好，无所不用其极的各类做法。

如果忘记的话，这里简单提示一下：java 与.Net , JBuild 与 Visual studio......

**商家从未放弃过在赢得开发者这块宝地上的竞争！**

## 什么是501(c)(6) ？

在进一步了解之前，笔者想先介绍一下和具体的IT技术无关的一件事，准确点说是关于合法机构的法律文件解读，过程显然是有点无聊和乏味，但是耐心的了解一番，对你总是有益而无害的，而这篇文章也为另外一篇:[商业公司主导下的非营利开源软件基金会之 ———— Cloud Foundry 基金会简史](posts/foundation_introduce/the-brief-history-of-cloud-foundry-foundation) ，也需要同样的背景知识。

因为我们前面介绍的很多组织都是501(c)(3)类型的，也就是说是慈善机构，基于人道主义也好，或者是行最大的善也罢，这类组织的目的只有一个：为了人类本身！ 然而，这也不是唯一的组织机构，这个世界上有形形色色的由人所组成的团体，这些团体的性质也各异，有可能所做的事情完全相同，但是通过社会属性：伦理、经济、法律、文化等等解读，就有了完全不同的色彩。

试图通过介绍一个基金会，而将一个法律实体的来龙去脉完全展开来讨论是不现实，比如追溯 501(c)(6)的非营利商业机构是美国1913年的Tariff 法案，以及后来逐步细化和添加条款的变更，有兴趣的读者可以详细阅读公开的文件：[ **IRC 501(c)(6) Organizations** ](https://www.irs.gov/pub/irs-tege/eotopick03.pdf )，其最为基本的7条要求如下：

1. 必须是商业组织共性所组成的个人联盟，而且其目的也必须是推动这些商业组织的共性。
2. 成员必须是组织机构，且要有意的去扩展成员
3. 必须是非营利性的
4. 任何私人股东或独立个人均不能从净收益中获得好处
5. 它的活动必须针对改善一项或多项业务状况，以区别于为个人提供的特定服务。
6. 它的主要活动不包括为个人提供特定服务
7. 该机构绝对不能从事任何的常规性营利业务，即使是为了生存需要而和企业合作，也是不可以的。

也就是说，是公司化运营，但是不能营利，只供组织的相关个人日常开销。在国内的语境下，就作者本人而言，是一脸懵逼，没亲眼见过这样的组织啊！最最让人眼羡的是：**免税**！这样的组织，恐怕要等祖国改革几次之后才可能有的吧？

作为第三代开源软件非营利组织的机构，501(c)(6) 无论从哪个角度看，都是有利于开源项目本身的发展的，当然，某种程度上也有利于具有匠人精神的开发者们专注于自身能力的自由发展。

那么从公司的角度讲，权衡之余，既希望是自己信任的人担任执行总监，又希望做到公开、透明，而不仅仅是一个慈善的组织，那么这样性质的机构无疑是最为合适的了。

简单了解完基金会机构的性质之后，一如既往，我们需要将背景置换为技术本身，即回到

## Eclipse 作为 IDE 项目

谈到 Eclipse ，我们不得不回顾一下当年的IT技术大势，年轻的读者可以类比一下现在的Go语言、VS Code、以及云原生等技术领域的厂家、机构等的激烈角逐。

### Java VS .Net 

得平台者得天下，这是有识之士，或者说是商界精英的常见战略，2000左右，是互联网爆发如日中天的年代，以Wintel为代表的个人桌面，Windows 开发C#语言和.Net平台，是Java的最主要的竞争对手，正如浏览器方面，微软的以操作系统捆绑这个大招简直所向披靡。

那么就看谁能打动用户的心思了。这是商界的主要语言之争。IBM  押注Java，很早就在大量的产品中使用Java语言来开发。Eclipse 既是其中的参与者，也是其中的创造者。

### 微软 Visual Studio 打遍天下无敌手

有了语言的背书，接下来就是工具了。当时能够提供 IDE的厂家其实并不多，微软作为PC 操作系统的霸主，当然有天然的先天优势，要知道当时的集成开发环境还是备受商界青睐的产品。

IBM 后来想要居上，祭出开源这张王牌，正如后来的Sun 将Java 开源一样，通过免费来将高深的技术产品大众化，当然，作为用户，没有人能够拒绝的了免费，Google利用免费打败了很多的优秀的搜索引擎公司，淘宝在中国也利用免费（收取卖方租金）的做法打败了e-Bay，在软件开发这个细分的领域，通过免费来抢占开发者的习惯和技能，也同样有效。

### Eclipse 的技术设计

有了以上的背景，我们可以简单聊聊 Eclipse 在技术上做的现在回看起来做的务必正确的事情，有心的读者一定可以看得出来，Eclipse  的设计是和Linux完全无心的技术完全不同的，Eclipse 从一开始就非常注重技术架构。

#### Eclipse 的起源

Eclipse 并不是如很多开源项目那样，在诞生之初就是开源的，如GNU、Linux、Python、Perl 等，而最初来自于公司的专有项目，来自于 IBM 子公司 —— Object Technology International (OTI)，研究和开发 IDE 初衷则是：

>  IBM希望减少向其客户提供大量然而又不兼容的开发环境，并提高这些环境中通用组件的重用性，希望通过使用相同的通用框架，开发团队可以利用彼此的组件，进行高度集成，并允许开发人员在项目之间共享。

这就是我们常常谈到的**避免重复制造轮子** 的做法。当然，Eclipse 也不是从头开始做起的，而是基于IBM 长期累积的开发产品线重构，可以追溯到 IBM VisualAge for Smalltalk™ 和 IBM VisualAge for Java™，这两款产品都是用 Smalltalk 语言编写的。IBM VisualAge Micro Edition™ 产品是用 Java 编写整个IDE的第一个较正式的实验项目，并且实际上相当的成功。Eclipse 继承了其中的最佳做法。

就在 IBM VisualAge 遇到瓶颈之时（对于第三方来说，非常难以扩展），IBM 另外成立了一个小型的专家团队（类似《人月神话》中的S360项目），基于之前的经验，进行全新的设计，采用全新的插件机制，让合作伙伴可以轻松的扩展。

如此的架构设计，也为以后的开源铺平了道路。

> 趣闻：Eclipse 的名称由来，很多人认为这个名字是针对当年的SUN公司，也就是开发Java的公司，但是据时任 Rational 部门的 CTO Lee Nackman 说，Eclipse 针对的主要是其竞争对手：微软的 Visual Studio，使用的是英语中的成语：***Eclipse* was to eclipse.**

#### 架构概述

Eclipse 的技术设计如下:

![eclipse architecture](images/eclipse-architecture.png)

Eclipse 采用的是一种叫做富客户端平台（RCP）的设计，从图中我们可以看到如下组件构成了这个核心：

* [Equinox OSGi](https://en.wikipedia.org/wiki/Equinox_(OSGi)) ——标准的bunding 框架
* 核心平台 ——— 启动Eclipse、运行插件
* 标准Widget 工具包（SWT）
* JFace —— 
* Eclipse 工作台 —— 视图，编辑器，透视图，向导

采用了插件化的思想，这样的思想虽然在操作系统上，如GNU Hurd 上没有在软件工程上战胜，但是在IDE这样相对要弱上好几个级别的软件上还是得到了很好的实现。

### 战略性开源

经历过90年代的 Linux 和 Apache 的洗礼，IBM 在开源的认识上已经上升了一个层次，对于开源共同体的理解和认识也非同凡响，更何况经历互联网爆发时期的几家案例，IBM 在这个时候选择将 Eclipse 开源，以对抗微软，并利用Sun 对于Java的犹豫，基于商业上的目的，以及当时的IDE 市场，战略性开源，可谓是条件充足。

于是，在2001年采用联合多家类似公司的方式，声明开源，基于Eclipse项目结成联盟，其中参与的厂商有：Borland、IBM、Merant、QNX 软件系统、Rational软件、Red Hat、SuSE、TogetherSoft 和 WebGain 九家厂商。显然，由于Java的良好基础，以及架构上的天然优势，许可协议的商业友好，等等，一出手便获得了众多厂商的青睐和关注，两年之后，2003年就达到了80家。（这样火箭般的速度，还有Open Computer Project 和Kubernetes，作者注）。

### 开源项目的技术设计

Eclipse 除了可扩展这一天生的优势之外，（这可以吸引众多的下游独立供应商的加入），在架构设计上也着重考虑了如下三点内容：

* 模块化
* 可伸缩
* 稳定的API 

具体的更细的内容，笔者就不给大家浪费笔墨了，详情请参考 Eclipse 的文档。

## 基金会的建立

在2001年将 Eclipse 开源，以几家公司联合治理的方式运作，显然已经无法平衡所有个人或组织，IBM 显然具有绝对的控制权，当然这也是IBM 想要的结果，项目欣欣向荣的发展，对于自己的商业产品也有着非常好的补充，然而，天下没有这么好的事情，如果再按照较为非正式的方式发展的话，面临着项目分叉的、各种衍生项目无处安身、各家利益抽风的严重问题。

于是，经历了一段时间的犹豫、探讨、妥协之后，在2004年成立了非营利的基金会501(c)(6)，总部设在加拿大的渥太华，IBM 当年提供了4千万美金当做启动，或许是有充足的资金，雇佣专业的人员，Eclipse 的组织架构相当的清晰，相应的文档也是非常的齐全：

> 首先，Eclipse 共同体由来自众多行业的独立个人和组织组成，然后，基金会会雇佣专业[的全职人员](https://www.eclipse.org/org/foundation/staff.php)来为共同体提供服务和支持，基金会的日常运转来自于成员机构的捐赠，治理则是通过[董事会](https://www.eclipse.org/org/foundation/directors.php)，战略开发人员和战略消费者在该委员会中占有席位，插件提供者和开放源代码提交者选出的代表也拥有相应的席位。Eclipse 的提交者通常某商业公司的雇员，当然也有的独立开发人员，他们才是Eclipse 的真正核心。

相关 Eclipse 基金会治理方面的文档材料，如章程、EPL协议、行为准则等，请移步：[https://www.eclipse.org/org/documents/](https://www.eclipse.org/org/documents/)，有非常详细的记录。如章程部分，事无巨细，值得细细阅读和学习。

### 价值观

关于 Eclipse 基金会的使命，大可以总结为：

> **推进和鼓励旗下的开源项目，并为这些项目培养相应的共同体，以及商业生态。**

正式这样，使得 Eclipse 是独一无二的，并定位于自身亦是由这些开源项目所组成的大的共同体，Eclipse 不仅致力于打造卓越的开源代码和共同体，也在基于这些项目在商业上寻找可以立足的地方，如此的兼顾于二者，也是Eclipse 能够获得成功的巨大原因。

### WorkGroup 式的服务

基金会的角色是服务，那么基金会相应的工作组也有其自身的定位，Eclipse 按照自身的需求和理解，将其WorkGroup区分为5类，同时这5类也是Eclipse 基金会可以提供的服务：

#### 中立的治理

作为一家非营利性质的中立机构，良好的治理是最起码的条件，所谓良好的治理，定性的内容可能占据的更大，如如何制定决策、政策制定、冲突解决等。

那么 Eclipse 治理 WorkGroup 就是解决这些问题的：通过研究和制定一系列的章程、协议、以及政策等，来确保基金会的良好运作。

另外，该工作组和代码的开发保持一致，参与的人员以贡献为选拔条件，没有任何个人或组织具有任何特殊地位或否决权。

#### 知识产权管理

让来自不同机构/组织的人进行协作，那么共同开发的成果的知识产权归属问题要清晰明了，这是基金会之所以存在的理由之一。

该工作组就是为 Eclipse 基金会制定相应的知识产权政策，从而确保在Eclipse项目中创建的任何开源软件都可以供任何人使用，包括商业软件产品的开发人员。

Eclipse基金会对于促进和鼓励软件供应商使用Eclipse技术来构建其商业软件产品和服务是持积极鼓励的态度的。当然这不是简单的口头承诺，而是实际的法律条款落地的，那就是：**基金会会要求进入 Eclipse 的项目遵循 Eclipse 公共许可证（EPL）的许可**，EPL 是 OSI 获批的开源许可证，和 Apache 许可证、GPL 、MIT等齐名。

工作组还采取了许多的步骤来确保 Eclipse 项目中所包含的知识产权相关谱系。due diligence 流程的第一步就是确保所有贡献均由合法的版权所有者提供以及符合 EPL 的要求，所有的 committer 都必须签署提交者协议，按规定申明他们所有的贡献都是自己的原创，当然，也是要在符合 EPL 下进行贡献。

第二步则是要求所有在 Eclipse 开发流程之外所要贡献的源代码都要经过Eclipse 基金会知识产权的审批流程，这个过程包括分析选定的代码，从而确定代码的来源以及与EPL 许可证的兼容性等。一旦发现代码中含有与 EPL 不兼容的贡献，则需将这些代码过滤掉，是不可以成为 Eclipse 项目中的一部分的。

当然，知识产权的重要职责就是要确保：**Eclipse 项目是可以被安全地分发到商业产品中的**。

#### IT 基础设施

作为开源的开放式开发方法，需要相应的技术支撑，那么也需要相应的工具，Eclipse 的基础设施提供如下：

* 基于 Git 的代码托管平台 
* Bugzilla 问题跟踪系统
* 基于 Hudson 的持续集成服务
* 邮件列表
* 新闻列表（Newsgroup）
* 下载分发站点
* 以及网站托管

这些都是通用的 Open Development Method 的常见平台。

#### 开发流程

Eclipse 共同体已经有一套较为成功的开发流程了，涉及如此之多的不同组织的大规模分布式开发也算是业内典范，Eclipse 的开发流程核心哲学思想：开放、透明、meritocracy，和通用的开放式开发方式原则没有差别，该工作组的任务就是确保项目是在基于这个核心原则。

#### 生态系统发展

这是 Eclipse 基金会的重点工作，也是支持开源共同体的重要方式，主要就是积极的营销和推广。

Eclipse 基金会有众多形式的活动，包括：

* 合办的市场活动
* 共同体技术会议（EclipseCon, Eclipse Day等）
* 在线资源（Eclipse Marketplace）
* 半年一次的会员会议
* 其他计划

旨在推动整个Eclipse共同体。

以上便是 Eclipse 基金会相关的内容，笔者以后会陆续的为大家介绍更加详细的内容，比如Eclipse 的开发流程，和Apache的开发一样，Eclipse 也有非常明确的角色、等级、贡献机制、议事决策方式等。

写到这里，可能看官有点不耐烦了：”你题目明明写的是成长与发展，怎么写了这么多了，还只是介绍Eclipse基金会是啥？“， 是的，笔者也确实陷入了困境，如果说介绍Eclipse项目的变化的话，那么就顺着Eclipse的版本开发逐一介绍即可，从主流技术的趋势来看IDE 的发展，从小巧而趋于庞大；如果说介绍Eclipse 基金会的变化的话，那么从其加入会员数量和公司成员，以及每年的收到的捐赠数量上来看就好了，毕竟一直以来都是个成长的过程。这似乎都不是大家想要的，正如我们在介绍SPI的时候，选择了[历届年度报告之 SPI 主席序言](posts/foundation_introduce/spi-annual-report-introduce/)一样，Eclipse 基金会的成长，笔者采用同样的思路，那就是看其在年度报告中所展示的：

## 历年 Eclipse 的战略变化

犹如中国人过年立 Flag 一样，Eclipse的董事会成员们也喜欢干这事，那么我们不妨从这些战略的变化，来回溯Eclipse 在项目、共同体、捐赠、赞助商、成员等的目标和奋斗历程。

### 2012

1. **建立并保持 Eclipse 作为开源工具和运行时技术的领先地位**：Eclipse的目标是为行业定义一个开发平台，该平台是免费许可的开放源代码，并为应用程序的整个生命周期提供支持，而且要囊括多个不同问题领域，以及跨多个开发和部署平台，包括工作站和web。从2004年伊始，Eclipse项目就一直在交付创新的运行时技术，例如Equinox和Rich Client Platform。在过去的几年中，Eclipse的运行时技术稳步增长。同时，人们对 OSGi的兴趣也在迅速的增长，OSGi 是Eclipse插件架构所基于的基石。展望未来，我们希望项目建设和人们采用Eclipse 运行时技术都会得到快速增长。
2. **为所有类别的会员创造相应的价值**：Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。Eclipse基金会及其员工将在全年中继续寻找机会，以改善对其项目共同体进行服务。在2012年寻求对我们的网站、下载、代码管理、构建和项目基础设施等进行增强。
3. **促进生态系统的增长，尤其是在垂直领域**：借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2018年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如移动、汽车、保险和金融等领域。
4. **运营好基金会本身**：Eclipse 基金会将会雇佣正式的员工，以代表数千名相关的利益者，基金会在内部和外部都必须是一个运作良好的组织，这一点非常的重要。
5. **继续发展多元化的收入模式**：依靠单一的收入来源来为基金会提供资金，使我们面临着受行业特定商业周期负面影响的更大风险。Eclipse 基金会的目标是确保来自多种类型组织的收入来源，并寻求其他来源，例如活动和赞助。

### 2013

1. **成为首选的开发者平台**：Eclipse的目标是为行业定义一个开发平台，该平台是免费许可的开放源代码，并为应用程序的整个生命周期提供支持，而且要囊括多个不同问题领域，以及跨多个开发和部署平台，包括工作站和web。从2004年伊始，Eclipse项目就一直在交付创新的运行时技术，例如Equinox和Rich Client Platform。在过去的几年中，Eclipse的运行时技术稳步增长。同时，人们对 OSGi的兴趣也在迅速的增长，OSGi 是Eclipse插件架构所基于的基石。展望未来，我们希望项目建设和人们采用Eclipse 运行时技术都会得到快速增长。
2. **在高速增长的平台（例如Web，云和移动设备）上改进Eclipse技术**：这不仅仅和被业界广泛认可的 Eclipse IDE有关，而且是，和 Eclipse 共同体日渐增长的技术组合有关。
3. **为所有类别的会员创造相应的价值**：Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。Eclipse基金会及其员工将在全年中继续寻找机会，以改善对其项目共同体进行服务。在2013年寻求对我们的网站、下载、代码管理、构建和项目基础设施等进行增强。
4. **促进生态系统的增长，尤其是在垂直领域**：借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2018年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如移动、汽车、保险和金融等领域。
5. **继续发展多元化的收入模式**：依靠单一的收入来源来为基金会提供资金，使我们面临着受行业特定商业周期负面影响的更大风险。Eclipse 基金会的目标是确保来自多种类型组织的收入来源，并寻求其他来源，例如活动和赞助。

### 2014

1. **成为首选的开发者平台**：Eclipse的目标是为行业定义一个开发平台，该平台是免费许可的开放源代码，并为应用程序的整个生命周期提供支持，而且要囊括多个不同问题领域，以及跨多个开发和部署平台，包括工作站和web。
2. **推广 Eclipse 共同体，使其在新兴的技术领域中也能够进行协作**：显然，随着新技术领域和趋势的不断发展，这是一个颇为有意思的目标。Eclipse基金会的工作人员和共同体的领导者一直在努力，以吸引和招募新兴技术领域的新项目。
3. **在如下一些领域召集相应的项目**：长期以来，Eclipse 基金会除了保持 Eclipse 在工具和 IDE 方面的领先优势之外，在新兴技术领域内招募项目是重点工作，如近来召集到的有关IoT、位置感知以及地理空间技术的新兴项目。
4. **为所有类别的会员创造相应的价值**：Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。Eclipse基金会及其员工将在全年中继续寻找机会，以改善对其项目共同体进行服务。在2014年寻求对我们的网站、下载、代码管理、构建和项目基础设施等进行增强。
5. **促进我们的共同体和生态系统的增长**：借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2014年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如物联网、Web开发、移动、汽车、科学和金融等领域。
6. **继续发展多元化的收入模式**：依靠单一的收入来源来为基金会提供资金，使我们面临着受行业特定商业周期负面影响的更大风险。Eclipse 基金会的目标是确保来自多种类型组织的收入来源，并寻求其他来源，例如活动和赞助。

### 2015

1. **成为首选的开发者平台**：Eclipse的目标是为行业定义一个开发平台，该平台是免费许可的开放源代码，并为应用程序的整个生命周期提供支持，而且要囊括多个不同问题领域，以及跨多个开发和部署平台，包括嵌入式、桌面和web。
2. **推广 Eclipse 共同体，使其在新兴的技术领域中也能够进行协作**:显然，随着新技术领域和趋势的不断发展，这是一个颇为有意思的目标。Eclipse基金会的工作人员和共同体的领导者一直在努力，以吸引和招募新兴技术领域的新项目。
3. **在如下一些领域召集相应的项目**：长期以来，Eclipse 基金会除了保持 Eclipse 在工具和 IDE 方面的领先优势之外，在新兴技术领域内招募项目是重点工作，如近来召集到的有关IoT、科学、位置感知以及地理空间技术的新兴项目。
4. **为所有类别的会员创造相应的价值**:Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。Eclipse基金会及其员工将在全年中继续寻找机会，以改善对其项目共同体进行服务。在2015年寻求对我们的网站、下载、代码管理、构建和项目基础设施等进行增强。
5. **促进我们的共同体和生态系统的增长**:借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2015年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如物联网、Web开发、移动、汽车、科学和金融等领域。
6. **继续发展多元化的收入模式**:依靠单一的收入来源来为基金会提供资金，使我们面临着受行业特定商业周期负面影响的更大风险。Eclipse 基金会的目标是确保来自多种类型组织的收入来源，并寻求其他来源，例如活动和赞助。

### 2016

1. **成为首选的开发者平台**：Eclipse的目标是为行业定义一个开发平台，该平台是免费许可的开放源代码，并为应用程序的整个生命周期提供支持，而且要囊括多个不同问题领域，以及跨多个开发和部署平台，包括嵌入式、桌面和web。
2. **推广 Eclipse 共同体，使其在新兴的技术领域中也能够进行协作**:显然，随着新技术领域和趋势的不断发展，这是一个颇为有意思的目标。Eclipse基金会的工作人员和共同体的领导者一直在努力，以吸引和招募新兴技术领域的新项目。
3. **在如下一些领域召集相应的项目**：长期以来，Eclipse 基金会除了保持 Eclipse 在工具和 IDE 方面的领先优势之外，在新兴技术领域内招募项目是重点工作，如近来召集到的有关IoT、科学、位置感知以及地理空间技术的新兴项目。
4. **为所有类别的会员创造相应的价值**:Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。Eclipse基金会及其员工将在全年中继续寻找机会，以改善对其项目共同体进行服务。在2016年寻求对我们的网站、下载、代码管理、构建和项目基础设施等进行增强。
5. **促进我们的共同体和生态系统的增长**:借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2016年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如物联网、Web开发、移动、汽车、科学和金融等领域。
6. **继续发展多元化的收入模式**:依靠单一的收入来源来为基金会提供资金，使我们面临着受行业特定商业周期负面影响的更大风险。Eclipse 基金会的目标是确保来自多种类型组织的收入来源，并寻求其他来源，例如活动和赞助。

### 2017

1. **成为领先的新兴技术开源共同体**：:显然，随着新技术领域和趋势的不断发展，这是一个颇为有意思的目标。Eclipse基金会的工作人员和共同体的领导者一直在努力，以吸引和招募新兴技术领域的新项目。长期以来，Eclipse 基金会除了保持 Eclipse 在工具和 IDE 方面的领先优势之外，在新兴技术领域内招募项目是重点工作，如近来召集到的有关IoT、科学、位置感知以及地理空间技术的新兴项目。
2. **继续在项目、共同体和商业生态上发力**：借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2016年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如物联网、Web开发、移动、汽车、科学和金融等领域。
3. **为所有类别的会员创造相应的价值**：Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。Eclipse基金会及其员工将在全年中继续寻找机会，以改善对其项目共同体进行服务。在2017年寻求对我们的网站、下载、代码管理、构建和项目基础设施等进行增强。
4. **成为开发人员工具的领先共同体**：Eclipse 基金会的目标之一就是提供自由许可和开源的开发平台，并在许多不同的领域以及所选的开发和部署平台（包括嵌入式，桌面和Web）中为应用程序的整个生命周期提供支持。当然也在支持更多的编程语言而持续不懈，Eclipse 共同体以其桌面IDE（例如Eclipse Java开发工具（JDT）和C / C ++开发工具（CDT））而被众人所知晓。另外，Eclipse 云计算开发工作组，正在开发用于基于云和Web开发的新工具平台：他们有：Eclipse Che、Eclipse Dirigible、Eclipse Orion 等项目。
5. **继续发展多元化的收入模式**：依靠单一的收入来源来为基金会提供资金，使我们面临着受行业特定商业周期负面影响的更大风险。Eclipse 基金会的目标是确保来自多种类型组织的收入来源，并寻求其他来源，例如活动和赞助。

### 2018

1. **成为领先的新兴技术开源共同体**：这仍然是基金会持续的目标之一，Eclipse 基金会成员以及共同体的主要成员都在积极努力地寻找新兴领域中的项目以及开发者们。
2. **继续在项目、共同体和商业生态上发力**：借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2018年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如物联网、Web开发、移动、汽车、科学和金融等领域。尤其是 Oracle 公司在2017年9月宣布的将其 Java EE 平台迁移到Eclipse 基金会，此项决定对基金会有着重要的贡献，据统计，总共有40多个新项目正在迁移到基金会；此次迁移包括现有成员和新成员的广泛参与。
3. **为所有类别的会员创造相应的价值**：Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。在过去的一年中，我们对公共基础设施（CBI）进行了改进，以为我们的成员所感兴趣的关键项目提供更强大和可扩展的基础设施。我们的开发和知识管理流程也得到了改进和增强，另外，基金会的软件构建委员会最近已经开始对Eclipse开发流程进行仔细的review，这是我们所有项目使用的基石。
4. **成为开发人员工具的领先共同体**：Eclipse 基金会的目标之一就是提供自由许可和开源的开发平台，并在许多不同的领域以及所选的开发和部署平台（包括嵌入式，桌面和Web）中为应用程序的整个生命周期提供支持。当然也在支持更多的编程语言而持续不懈，Eclipse 共同体以其桌面IDE（例如Eclipse Java开发工具（JDT）和C / C ++开发工具（CDT））而被众人所知晓。另外，Eclipse 云计算开发工作组，正在开发用于基于云和Web开发的新工具平台：他们有：Eclipse Che、Eclipse Dirigible、Eclipse Orion 以及最近的Eclipse Theia项目。
5. **继续发展多元化的收入模式**：与上面列出的四个战略目标保持一致的明确目标是从会员成员增加更多的收入。具体而言，目标是通过向成员展示增加成员级别对他们的价值，从而增加新成员的数量，并提高现有成员的会费。2018年初，Jakarta EE 工作组成立，基金会立即增加了三个新的战略成员。当然，我们还要继续努力让更多企业成为会员，基金会还与会员制有关，该基金会于2017年末推出了会员资助计划，作为会员的一种手段，可以直接或与其他成员合作，或者是交于与基金会，从而实现对其它成员进行合作，以实现特定的目标。

### 2019

1. **在运行时和工具上成为开源共同体的领导者**：在 Eclipse 的整理历史当中，一直都在提供运行时工具，发布的项目有Eclipse Hono、Eclipse Vert.x、Eclipse GlassFish以及Jakarta EE之类，而且在近几年也是获得了稳步的增长，Eclipse 基金会的目标之一就是提供自由许可和开源的开发平台，并在许多不同的领域以及所选的开发和部署平台（包括嵌入式，桌面和Web）中为应用程序的整个生命周期提供支持。当然也在支持更多的编程语言而持续不懈，Eclipse 共同体以其桌面IDE（例如Eclipse Java开发工具（JDT）和C / C ++开发工具（CDT））而被众人所知晓。另外，Eclipse 云计算开发工作组，正在开发用于基于云和Web开发的新工具平台：他们有：Eclipse Che、Eclipse Dirigible、Eclipse Orion 以及最近的Eclipse Theia项目。
2. **在新兴的技术上吸引和培养项目及共同体**：这是Eclipse 基金会多年以来一直致力于努力的目标之一，Eclipse 基金会成员以及共同体的主要成员都在积极努力地寻找新兴领域中的项目以及开发者们。在2019年，我们会成立许多新的工作组来支持许多新项目，以更好地促进这些技术领域的关键利益相关方之间的协作。
3. **继续在项目、共同体和商业生态上发力**：借助于 Eclipse 技术能够创建大型的商业共同体和开源组织，是Eclipse 能够成功的主要因素之一，也是市场上的主要差异因素。只要 Eclipse 技术在产品、服务、应用中得到应用时，其共同体就会得到扩张。我们在2019年的目标是继续将注意力集中在工作组的成功以及专注于特定行业领域的新Eclipse项目上，例如云原生、Java、物联网、边缘计算、分布式账本、Web开发、移动、汽车、科学和金融等领域。并继续支持和协助我们广泛的Eclipse项目，以促进共同体的发展和活力。基金会还将在2019年实施新制定的Eclipse基金会规范流程，许多不同的子共同体都对此感兴趣，尤其是Jakarta EE工作组。
4. **为所有类别的会员创造相应的价值**：Eclipse 基金会为其成员提供服务，而成员们的主要兴趣是在其专有产品（例如产品和服务）中利用Eclipse技术。Eclipse 基金会持续集中精力于此，从而确保Eclipse生态系统中的大量商业机会。项目的 Committer 多数都是Eclipse基金会的成员，而且在许多方面都是Eclipse的骨干。在过去的一年中，我们对公共基础设施（CBI）进行了改进，以为我们的成员所感兴趣的关键项目提供更强大和可扩展的基础设施。我们的开发和知识管理流程也得到了改进和增强，另外，基金会的软件构建委员会最近已经开始对Eclipse开发流程进行仔细的review，这是我们所有项目使用的基石。
5. **增加收入**：与上面列出的四个战略目标保持一致的一个明确目标是增加我们的收入，尤其是来自会员和工作组的收入。具体而言，目标是通过向成员展示增加成员级别对他们的价值，从而增加新成员的数量，并提高现有成员的会费，以及让他们参加到其他的工作组。当然，我们还要继续努力让更多企业成为会员，与会员资格有关，基金会于2017年末推出了会员资助计划，作为会员的一种手段，可以直接或与其他成员合作，或者是交于与基金会，从而实现对其它成员进行合作，以实现特定的目标。我们预计 **会员资助计划** 将继续保持增长，在未来成为基金会收入的重要来源之一。

## 历年的关键决策

战略归战略，属于期望达到的目标，但落实到实际的行动中，还是要有具体的动作的，那么就是关键的举动：

### 2012

* **Eclipse项目的定义**：经过多年的发展，当初定义的那些项目是可以被Eclipse 共同体所接受的，现在看来已经有些过时，2011年，董事会指示执行董事批准Eclipse满足以下标准的开源软件项目：

  * 该项目将会确保符合Eclipse的开发流程
  * 该项目将符合Eclipse知识产权政策及其相关程序
  * 除非另行获得董事会的批准，否则该项目将根据Eclipse公共许可证（EPL）获得许可。

  并不需要Eclipse项目必须使用Java语言或OSGi模块化（插件）模型。

* **行业工作组**：Eclipse基金会认为，未来几年将有越来越多的企业参与开源。Eclipse基金会创建了行业工作组（IWG）的概念，以促进人们参与到 Eclipse。2011年6月，Eclipse董事会通过了许多重要决议以为这些工作组提供方便之门，其中包括：

  * 创建由Eclipse基金会托管和支持的私有的，仅供会员使用的IT基础架构，供IWG的参与成员专用；
  * 在某些情况下，IWG可以创建仅通过其私有IT基础结构提供给其参与成员的二进制软件版本；
  * 经董事会批准，可以允许IWG在允许的许可证方面更大的灵活性，前提是必须明确将IWG的项目与Eclipse 基金会的项目区分开来，托管在eclipse.org以外的网络媒体资源上，并且未使用org.eclipse命名空间。例如，将允许主要关注航空航天的Polarsys IWG主持LGPL下的项目。

* **通用构建基础设施**：董事会授权 EMO 创建并托管用于所有Eclipse项目的通用构建基础结构（CBI），在过去，每个Eclipse项目都负责创建和维护自己的构建和构建基础设施。在未来，我们希望CBI将成为EMO为Eclipse项目社区提供的关键服务。EMO一直在积极使用Maven，Tycho和Hudson技术构建CBI，并希望许多项目在2012年期间能够迁移到这些服务上来。

### 2013

* **签署Oracle Java TCK协议**：在经历了漫长的各种流程之后，Eclipse 基金会终于和 Oracle 签署了Java TCK 协议，从而让某些需要 TCK 的 Eclipse 项目获得了合法的途径。尽管这样做，还是受到很多严格的控制，因为TCK许可证确实对开源项目造成了许多负担。

   为了使项目请求访问Java TCK，它必须满足以下条件：

  1. 项目的PMC  已公开讨论并批准了项目的TCK访问请求，并要求EMO进行访问；

  2. 战略成员支持该项目使用TCK的意愿

  3. 董事会以董事会绝大多数票通过了该项目对TCK的使用。

     迄今为止，董事会已经批准了EclipseLink和Virgo项目来请求TCK。

* **实施贡献者许可协议**：在过去，Eclipse基金会的项目并没有依靠“贡献者许可协议”（CLA）来确保我们获得了接受捐助所必需的所有权利。取而代之的是，项目提交者将向每个贡献者询问有关其贡献来源的三个问题。但是，随着Eclipse 共同体迁移到 git 并采用了诸如 Gerrit 之类的代码审查工具，越来越清楚的是，这一过程很明显的会拖延开发者和工程师们的贡献。因此，Eclipse基金会在2013年为其贡献者施行签署CLA。

  同时，Eclipse基金会将实现对git所做贡献的使用“签署人”功能，并发布了一份“原创性证书”，该证书记录了对贡献者使用“签署人”方式的含义。

* **复审 Eclipse 公共许可证（EPL）**：Eclipse公共许可证（EPL）是15年前起草的。董事会已决定将向Eclipse和开源共同体征询有关如何改进和更新许可证的反馈。将全程保持公开透明、由共同体来主导。

### 2014

* **Eclipse 欧洲基金会公司成立**：2013年10月，欧洲Eclipse基金会成立。新的EFE有当地工作人员来支持欧洲本地共同体。员工将支持欧盟资助的项目（例如ITEA2，）作为项目合作伙伴提供适当的开发和传播服务，并参加欧洲的协会，例如德国的Bitkom，以提高人们对开放式创新、开源业务模型和Eclipse平台的认识。拉尔夫·穆勒（Ralph Mueller）被任命为Eclipse Foundation Europe的董事总经理。Mueller先生在IT行业拥有30年的经验。他曾在IBM，Object Technology International和Siemens-Nixdorf工作。最近，他担任Eclipse基金会欧洲生态系统总监。

* **新的logo**：14年之后,是时候将我们的 Logo 更新为更现代的外观了。

   ![](https://www.eclipse.org/artwork/images/v2/logo-800x188.png)

  当然，我们也为logo如何使用做了新的向导指南。

* **简化的开发者流程**：在2013年，Eclipse 基金会实施了贡献者许可协议（CLA）和开发者原创证书（DCO）。现在，贡献者可以很容易地创建Eclipse 基金会帐户并直接通过我们的网站进行电子签署CLA。CLA与个人的Eclipse Foundation帐户绑定，这使其对所有Eclipse 基金会旗下所有的子内容（例如eclipse.org，LocationTech和PolarSys）均有效。

### 2015

* **发展资金**：Eclipse基金会已经开始接受有针对性的公司捐款，以资助Eclipse Java和Java EE IDE的增强功能。作为2015年1月的初步成绩，爱立信向Eclipse基金会提供了资金，用来增强Eclipse平台，从而能够让 Eclipse 在Mars版本中对SWT、Mac平台、GTK3和PDE进行了很大的改进。
* **FOSS4G 北美**：Eclipse 基金会与LocationTech 和 OSGeo 社区合作，出品了FOSS4G North America，该会议与EclipseCon 北美峰会位于同一地区。对于我们的活动日程安排，增加第四个峰会会议对基金会工作人员来说是一项艰巨的任务，但是我们仍然对来自开源地理空间共同体的积极反馈感到由衷的高兴。

### 2016

* **更新行为准则**：2015年6月，Eclipse 基金会董事会批准了整个共同体范围内的的行为准则。Eclipse 基金会致力于使 Eclipse 共同体能够成为无任何骚扰的体验、且致力于公平的无任何门槛设置：不论经验水平、性别、性别认同和表达方式、性取向、残疾、个人面貌、身材、种族、种族、年龄、宗教信仰或任何的理由。
* **资助Eclipse平台开发**：自2015年初，Eclipse基金会开始接受公司捐款，为Eclipse项目增强功能提供有针对性的资金。在今年晚些时候，直到2016年第一季度，我们以几种重要方式扩展了这一概念：
  * 我们聘请了一名专职开发人员来开发Eclipse IDE平台。
  * 我们开始将收到的捐款的100％分配给Eclipse IDE平台上的其他开发。
  * 我们实施了一个社区驱动的Eclipse增强计划之友（FEEP），以优先处理我们在项目中所做的工作。

* **项目品牌要求**：董事会指示Eclipse管理组织（EMO）为所有需要以下内容的Eclipse Foundation项目创建一套项目品牌要求：
  * 一致使用“ Eclipse”，
  * 将eclipse.org 基础设施用于项目网站、Wiki和下载。
* **版本发布的周期制定**：Eclipse 每年都会在6月份发布版本，随后在9月和2月发布了两个更新版本，多年以来，都保持这个节奏，在更新的版本中会修复一些错误，也会做一些增强的改进。但是随着软件产业的加速，这个更新速度显然已经无法满足开发者们的需求，因此，从2016年6月的Neon版本开始，同步发布之后将进行季度更新（例如2016年9月的Neon.1）。更重要的是，新项目可能会加入，参与项目可能会添加新功能或API以更新发行版。这会有助于Eclipse 共同体更快地为我们的用户提供增强功能和少量功能。
* **想法接近Eclipse的用户**：Eclipse 基金会在2015年制定了一项计划，为eclipse.org基础设施上托管的Eclipse项目提供存储服务。目的是使Eclipse IDE用户能够在用户存储服务（USS）中存储Eclipse项目的 artifacts。在Neon版本中，我们期望第一个Eclipse项目将与USS集成。

### 2017

* **知识产权管理**: 2015年6月，Eclipse基金会董事会批准对Eclipse基金会的知识产权政策进行重大改革。新方法使Eclipse项目可以决定要针对每个版本执行IP尽职调查的级别。“类型A”项目将检查其依赖项是否具有许可证兼容性，而“类型B”项目将添加Eclipse Foundation历史做法的完整列表，包括代码扫描和深度分析。这个举措使得 Eclipse 基金会的实践与业内实践保持一致。
* **贡献者协议**：2016年8月，Eclipse 基金会推出了新的Eclipse贡献者协议（ECA），其中包括以下更改：
  *  重命名文档这个虽然看起来微小，但是有助于消除人们对其意义的混淆。“贡献者许可协议”（Contributor License Agreement）（CLA）的名称通常被认为是指相关基金会或公司在该捐款中获得了知识产权——尽管Eclipse基金会从来没有这么做过。
  * 移至并包含Linux Foundation开发人员原创性证书的文本意味着ECA现在基于整个软件行业众所周知的术语。
* **Devoxx US**: Eclipse基金会与全球Devoxx社区合作，出品了第一批 Devoxx US，与为期一天的Eclipse Converge活动同时举办。我们对 Devoxx 社区将Devoxx品牌推向北美的积极反馈感到高兴。

### 2018

* 批准并通过Eclipse Public License 2.0：在2017年8月份，董事会通过了[Eclipse 公共许可证2.0](https://www.eclipse.org/legal/epl-2.0/)，并且还批准采用EPL v2.0作为基金会默认的软件许可证。EPL v2.0 还获得了自由软件基金会和 OSI 的认可。
* 基金会反托拉斯政策的更新：在2017年10月，基金会更新了[《反托拉斯政策》](https://www.eclipse.org/org/documents/Eclipse_Antitrust_Policy.pdf)，并让所有的成员熟悉其中的条款。
* 创建EE4J顶级项目：同样在2017年10月，董事会，批准创建 [Eclipse Enterprise for Java（EE4J）](https://projects.eclipse.org/projects/ee4j/charter)顶级项目。是由 Oracle Java EE 所捐赠的项目，执行董事随后于2018年3月批准成立 Jakarta EE 工作组，该工作组致力于Java EE 向基金会的成功过渡，并推动新的Jakarta EE品牌，让项目继续发展。
* 调整会员企业年会费： 2018年1月，董事会调整了与基金会企业会员资格相关的年度会员费。此举旨在使企业会员级别的会员资格对企业更具吸引力。
* 使用 CloudBees Jenkins 企业版作为持续集成的工具：2018年2月，董事会支持EMO关于采用CloudBees Jenkins Enterprise供员工和项目提交者使用的提案。加强Eclipse的基础设施支持力度。

### 2019

* **引入规范项目**：规范项目是 Eclipse 基金会针对行业协作提出的新的方式，为了支持Jakarta EE工作组的工作，基金会引入了新的流程来支持开放规范的创建和维护。对于Jakarta EE，该项目使得 Java EE 规范能够得到不断的发展。这些规范以前是在JCP中使用，现在则移植到 Eclipse 中作为Jakarta EE规范使用。新的规范过程采用了代码优先的开发方法，该方法允许在规范完成之前对代码进行实验，并根据通过该实验获得的经验来遵循规范。新的规范流程还涉及知识产权流，以确保贡献，尤其是与这些贡献相关的专利权，将交由规范来进行捕获，并将这些权限授予兼容的实现。当然，无独有偶，也有一些工作组有打算引入规范，比如 Sparkplug，该项目正在尝试重复利用这套新的规范。
* **增加执行总监对项目许可的自由裁量权**：Eclipse 基金会有其自己的许可证，即Eclipse Public License，有时也称为“弱 copyleft ”许可证。且 EPL 在2017年进行了更新。根据我们的《章程》，使用除EPL以外的任何许可均需要获得董事会的一致批准。但是，近年以来，Eclipse 共同体采用的很多的非EPL协议的开源项目，董事会和共同体都没有觉得有什么不和谐之处，鉴于此，在2018年5月，董事会将使用Apache许可证v2.0或BSD 3条款许可证的项目授权给执行董事。
* **全面修订《提交者和贡献者协议》**：Eclipse 基金会记录了对其项目所做的所有贡献的创建者。参与者必须完成Eclipse 贡献者协议，该协议基本上规定参与者知道他们的贡献是在相应项目的许可下进行的。提交者必须签订类似类型的协议，或者单独达成协议，或者是提交者与其雇主达成的协议，涵盖了该部分内容（即提交者的雇主是Eclipse Foundation的成员，并签订了单独的协议以实现此承保范围）。与这些贡献有关的所有文件均已于2018年秋季更新，以便更清楚地确定其 GDPR 的遵守情况。

## 基金会历年财务收支情况



|        | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 |
| ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 收入   | 4.1  | 4.5  | 4.3  | 4.9  | 5.4  | 5.6  | 5.9  | 6.3  |
| 支出   | 4.2  | 4.4  | 4.7  | 4.0  | 5.6  | 5.7  | 6.2  | 6    |
| 净收益 | -0.1 | 0.1  | -0.4 | 0.0  | 0.2  | 0.1  | 0.3  | 0.3  |

单位：百万美元

如果大家看过Apache基金会的年度报告的话，关于财务部分是非常的详细，但是对于501(c)(6)我们只能看到这里，其中看CNCF的年度报告也是同样的情况。总而言之，Eclipse 拥有300多个项目，钱不算多，可以维持项目的持续开发，算是不错的光景了。

## Eclipse 工作组增长

（未完，未来TODO）

## Eclipse 托管项目历年记录

（未完，未来TODO）

## 开源之道写在最后

在美国对于非营利基金会有着非常成熟的管理体系，鉴于历史、文化、民主等众多因素之下，可以说，在美国，任何人只要有需求，就可以随时成立相应的基金会，然后就看相关的运作，以及行业的整体状态了。

Eclipse 基金会在商业公司主导（类似Open Computing Project）下成立，然后合理合法的运作，当初主导的商业公司也没什么话语权了，而是将权力和决策放在了众多参与厂商和开发者晋升来的董事会成员。

在写了这么多篇非营利软件基金会之后，追溯、挖掘，竟然最后挖掘到了国家的体制方面、文化等内容，那开源之道也只能到这里了，本土有着巨大的复杂性，现代化进程远未完成，”战狼“们已经雄起，基于自由/开源软件项目的中立的、透明的、开放的非营利基金会恐怕将成为泡影，SFC、SFLC、SPI 、Apache等早期的慈善性质的，几乎是不可能的了，那么类似于公司联盟的方式如CloudFoundry、Eclipse也许还有一些机会，那么这样的短板，就是开源项目本身的来源、董事会治理的透明度、以及对于Community建设、开放式开发方式的把控，看来是充满了挑战啊！

## 参考资料

1. IRC 501(c)(6) Organizations  https://www.irs.gov/pub/irs-tege/eotopick03.pdf 
2. 2019 Annual Eclipse Foundation Community Report https://www.eclipse.org/org/foundation/reports/annual_report.php
3. 维基百科 Eclipse 软件项目  https://en.wikipedia.org/wiki/Eclipse_(software)
4. 维基百科 Eclipse 基金会 https://en.wikipedia.org/wiki/Eclipse_Foundation#History
5. Eclipse 从何而来？ https://wiki.eclipse.org/FAQ_Where_did_Eclipse_come_from%3F 
