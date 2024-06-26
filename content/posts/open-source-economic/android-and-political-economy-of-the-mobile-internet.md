---
categories:
- 开源
- 感悟
date: 2024-06-19T16:15:57+08:00
description: ""
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "Android 和移动互联网的政治经济学：刷新开源的批判（译文精选）"
url: ""
authors:
- Kimberley Spreeuwenberg 和 Thomas Poell
translater:
- 「开源之道」·适兕
---

## 译者感慨

作为后来者，当我们遇到一个已经发展了很久的事情的时候，是以身处下游的方式来审视和观看的，是以自己已有的知识来进行判断和认知的，例如，只有编码背景的，就会看到运行在移动设备中的操作系统的代码，无论是驱动摄像头、GPS、电话，还是支撑开发应用的SDK、编程语言与框架；只有知识财产权背景的，就会看到开源许可、贡献者协议、专利交叉条款；有联盟背景的，就会将谈判、标准、托拉斯等想法；MBA 们看到的是市场份额、商业模式、成本节省......

是的，对话是相当的混乱，于是夹杂着猜想、臆断、神话、嫉妒、攻击等等各类的内容层出不穷，可是冷静的思考一下，这一切不是偶然的，某种程度上是 Google 在战略上的成功实现，无论从设计上，还是在执行上，以及社会效益上，都取得卓越的成果。没有任何事情能够脱离现状而去做，否则就是建立空中楼阁。

适兕也经常被问到这个问题，但是回答往往难以让提问者满意，后来也学会了回避这个问题，更愿意回答具体操作的事情，当然，随着知识的累积和学习，以及和众多开源世界的朋友的沟通和请教，也慢慢的在往冰山在水面下的部分移动，此次尝试翻译的一篇20年的旧文，是偶然发现的，从另外一篇开源创新文章[a^]的引用中顺藤摸瓜过来的。这篇文章的作者是新媒体的研究者，真是难得啊。

总而言之，这是一篇打开我个人视角的佳作，翻译以便于更加深刻的理解。

[a^]. Schrape, Jan-Felix (2017) : Open source projects as incubators of innovation: From niche phenomenon to integral part of the software industry, SOI Discussion Paper, No. 2017-03, Universität Stuttgart, Institut für Sozialwissenschaften, Abteilung für Organisations- und Innovationssoziologie, Stuttgart

> **以下是译文，本文发表在firstmonday上，引用信息:**
> Spreeuwenberg, K., & Poell, T. (2012). Android and the political economy of the mobile Internet: A renewal of open source critique. First Monday, 17(7). https://doi.org/10.5210/fm.v17i7.4050

## 摘要

本文探讨了 Google 在开发 Android 这一流行的移动操作系统时，如何以及为何战略性地采用了特定的开放源代码实践，而没有选择其他的实践。本文探讨了该公司如何通过这些实践培育并控制了一个庞大的移动互联网生态。这一生态涉及大型电信公司和设备制造商，以及大量第三方应用程序开发商和数亿移动互联网用户。它使谷歌能够利用独立程序员的贡献，并在此基础上继续发展。更重要的是，它有助于获取有价值的安卓用户元数据，这对开发新的特定位置服务和广告至关重要。本文展示了这些结合了复杂的技术、法律和政治经济手段的企业战略如何塑造了快速发展的移动互联网，并因此产生了深远的经济和文化影响。

## 介绍

安卓（Android）是基于 Linux 的移动设备操作系统，作为一个开源项目进行销售。它被宣传为：

> (Android) 是作为移动设备的开源技术栈，再加上由Google 领导开发的对应的一系列开源项目（的系统）。我们创建 Android 的初衷是为了总结我们自己推出移动应用程序的经验。我们希望确保没有中心故障点，这样任何行业参与者都无法限制或控制其他任何参与者的创新。[1]

随着 Android 迅速成为占主导地位的移动操作系统 (OS)，Google 如何通过开放手机联盟 (OHA)（一个由 84 家公司组成的联盟）展示和开发 Android 是至关重要的。截止到 2010 年底，即 Android 推出三年后，它已经成为全球最畅销的智能手机平台。011 年 12 月，谷歌负责操作系统开发的高级副总裁安迪·鲁宾 (Andy Rubin) 声称每天有 70 万台 Android 设备被激活 [2]。鉴于 Android 的飞速发展，了解该操作系统如何在技术、法律和商业层面上开发和组织显得至关重要。换个视角来讲，这对移动互联网的政治经济也产生重大影响。

本文探讨了 Google 和 OHA 在开发 Android 时如何以及为何采用开源运动的意识形态和一些实践。一方面，本文考虑了 Android 的商业模式是如何在与移动互联网领域的各种参与者的合作、对抗中进行战略性地发展，其中的参与者的范围从大型电信运营商和原始设备制造商 (OEM) 到大量的开发者。另一方面，考虑到 Android 快速发展的技术架构及其所嵌入的法律框架，我们需要了解这些战略关系是如何组织的。

从开源的理念来看，Android 是否真的可以被称为“开源项目”，这是非常值得怀疑的。然而，作者在对 Google 和 OHA 如何采用某些开源实践，而没有选择其他的实践分析，改变了这一看法，并对 Android 作为技术与法律的组合的战略有了更深刻的认识。此外，它还有助于理解移动互联网更广泛的政治经济的运作方式，某种程度上，Android 的做法在移动互联网中是处于积极的地位。下一节将简要讨论开源运动的历史，以及该运动引发的批判性争论。这场争论及其历史构成了审视 Android 当前开源实践的必要背景。

## 开源批判

自 1998 年自由软件运动中的一群关键人物采用“开源”标签以来，什么是开源软件，以及它是如何或应该如何开发的，一直是业界激烈争论的主题。该术语本应涵盖理查德·斯托曼 (Richard Stallman) 领导的自由软件基金会的活动，以及各种免费软件、共享软件、开放软件和公共领域软件 (Berry, 2008; Kelty, 2008; Moody, 2002; Weber, 2004)。

Eric Raymond 的文章“大教堂和集市”于 1997 年首次在 Linux Kongress 上发表，并于 1998 年在 First Monday 发表，可以被视为“开源”的奠基文本。在该文中，理论家和程序员雷蒙德对比了两种软件开发模型：大教堂模型和集市模型。他坚持认为，大教堂建造者的方法最常用于商业软件开发，是基于“先验的、集中的生产模式”。相比之下，他将集市方法与开源联系起来，从“一千名热切的共同开发者”中汲取了专业知识[3]。Raymond 断言，控制产品开发的专家集中模式可以被众多共同开发者所取代——具有不同观点的多个眼球，他们都为产品的开发做出了贡献，并且可以刺激更大规模的创新（Raymond，1998）。

在随后的几年中，各种理论家都赞扬了开源和自由软件的实践和理想。例如，Lawrence Lessig (2005) 认为“开源和自由软件问题是自由社会的根本”[4]。反过来，Benkler（2006）断言“自由和开源软件”的开发构成了“有组织生产的新模式”，他称之为“Commons-based 同侪生产”[5]。他将这种模式描述为：

> 彻底去中心化、协作性和非专有性；其基础是在分布广泛、联系松散的个人之间共享资源和产出，这些个人相互合作，不依赖市场信号或管理命令。 [6]

在 Benkler 看来，自由软件和开源的核心是：“自主、自力更生、赠送礼物、协作、积极参与、解放和激励参与的创造力等价值观”[7]。

这些对开源的理想主义描绘招致了来自不同方面的批评。第一批批评者之一是 Richard Stallman 本人，他很快指出了“开源”与自由软件传统之间的差异。Stallman (1998) 坚持认为开源改变了自由软件的核心价值观。他认为，这种“务实的做法”通过强调不受中央控制的自由来使自己合法化，但同时又否认或限制用户的自由。Stallman (1999) 认为，与开源相比，自由软件基于以下自由：

> a）“出于任何目的运行程序”，b) “可以自由修改程序以满足您的需求”，c) “免费或收费地重新分发副本”，d) “分发程序的修改版本，以便共同体可以从您的改进中受益。”[8]

Stallman 认为，开源的务实方法实际上掩盖了这些价值观的重要性。

对于 Raymond 来说，自由软件的实践符合市场的逻辑和需求。他认为：

> Linux 世界在很多方面都表现得像一个自由市场，或者生态学，一群试图最大化效用的自私主体，在这个过程中产生了一种自我纠正的自发秩序，比任何数量的中央计划都更加复杂和有效。 [9]

正如 Christopher M. Kelty (2008) 指出的那样，开源标签是由Raymond和他的合作者引入的，目的是将焦点正如 Stallman 所宣传的“抵制专有软件”转移出来，到自由软件可能提供的“经济价值”和“成本节约”[10]。

事实证明，这种重点转移是成功的。事实上，Raymond 的文章直接启发了 Netscape 在 1998 年发布其 Web 浏览器源代码的决定。20 世纪 90 年代中期，就使用份额而言，Netscape Navigator 一直是占主导地位的浏览器。然而，到了 1998 年，在第一次浏览器战争期间，它的用户很快就被微软的 Internet Explorer 夺走了。网景公司希望通过发布Navigator的源代码，呼应 Raymond 的集市模式，得到广大外部程序员在开发其浏览器时的帮助。然而，这一决定既没有带来经济回报，也没有带来优质的产品。但是它确实极大地增强了开源概念的共鸣，远远超出了自由软件程序员和黑客的圈子。

尽管 Stallman 批评 Raymond 试图让自由软件对企业利益更具吸引力，不过多位学者指出，这些自由软件的做法在当时就已经符合商业利益。从这个角度来看，无论是 Netscape 浏览器源代码的发布，还是 Raymond 的文章，都不是革命性的。它们是资本主义经济和礼品经济已经深深交织在一起的文化及深刻标志。

理查德·巴布鲁克（Richard Barbrook）是最早强调这种相互联系的学者之一。Barbrook（1998）在《高科技礼品经济》中将 20 世纪 90 年代的新互联网经济描述为混合经济。他强调，用户之间信息的自由流通是开源和自由软件礼品经济的核心，它取决于计算机、软件和电信的资本主义生产。此外，他强调商业互联网公司的利润依赖于越来越多的人参与高科技礼品经济。

Tiziana Terranova (2004) 也进行了类似的观察，但从更批判性的角度出发。反思开源运动及其适应企业利益的尝试，她坚持认为：

> 开源问题表明了数字经济本身对自由劳动力的过度依赖，这种自由既包括“没有经济回报”的含义，也包括“自愿给予”的含义。 [11]

这种免费劳动力不仅包括开源程序员的工作，还包括业余网页设计师、邮件列表编辑和在线共同体领导者的工作。Terranova 坚持认为，“特别是自 1994 年以来，互联网始终同时是一种礼物经济和先进的资本主义经济”[12]。从Barbrook和Terranova的角度来看，Lessig、Benkler和 Raymond 所拥护的理想主义，甚至是 Stallman 试图将自由软件与开源区分开来，似乎也掩盖了自由软件发展的更广泛的政治经济。

根据 Terranova (2004) 的说法，大企业对免费劳动力的依赖不仅仅是软件开发和互联网的一个特有特征，但这是晚期资本主义的典型特征，其特点是整个文化经济的补偿和剥削（另见Söderberg，2008）。以类似的方式，Matteo Pasquinelli (2010a) 批评了开源和自由软件的辩护者。他坚持认为“阅读像Stallman 和 Lessig 这样的作家，就会产生一个问题：所谓的自由社会中的利润最终去了哪里？”反思这个问题，Pasquinelli 将自由社会中的关系描述为“寄生性”。他强调，“自由文化主义者”所推崇的同侪生产肯定不会改善“最后的数字一代”的生活条件[13]。

鉴于这种批评以及开源和免费软件的历史，Android 提供了一个有趣的案例。一方面，它表现为开源与企业利益之间密切关系的延续；Kelty (2008) 和 Weber (2004) 的研究详细追踪了这种关系，并受到 Terranova (2004) 和 Pasquinelli (2010a) 的批判性质疑。然而，与此同时，Android 对开源的特殊使用也引入了许多新的、更大的问题，这需要重新审视开源批评，或者更具体地说，对 Android 开源实践所处的政治经济进行批评。

尽管这种政治经济的一般特征已经被理论化，但仍不清楚在这种经济背景下，谷歌和 OHA 如何以及为何采用特定的开源实践。Terranova 和 Pasquinelli 讨论了晚期资本主义的寄生本质，对当今互联网的研究表明，大型 Web 2.0 公司，例如 Google 和 Facebook，首先也是最重要的是，通过收集用户活动的元数据来精确描述这些用户来赚钱，这反过来又使得开发有针对性的广告和服务成为可能。为了促进必要元数据的收集，开发了 Facebook、Google+ 和 YouTube 等社交媒体平台，邀请用户表达和分享他们的个人兴趣和身份Allen，2008；Cheney–Lippold，2011；Fuchs 等，2011；Langlois 等，2009；van Dijck，2009；Petersen，2008）。

基于这些见解，本文的以下部分将阐明 Google 和 OHA 在这种政治经济背景下如何战略性地采用特定的开源实践，而没有采用其他的方式。网上记录的合法许可和技术规范，以及围绕Android的争议和诉讼，是这一探索的基础。首先，Android 将被视为技术与法律的组合，以了解 Android 的特定开源实践如何嵌入技术规范和法律框架中。这部分分析特别受到关键软件研究的启发（Chun，2006；Fuller，2008；Galloway，2004；Langlois 等，2009）。随后，在第二部分中，将展示Android的技术法律宪法如何让谷歌在移动互联网的政治经济中发挥核心作用。这部分涉及批判性互联网研究传统以及更广泛的批判性政治经济学中阐述的一些关键问题（Dean，2009；Dyer-Witheford，1999；Fuchs，2011；Terranova，2004）。

虽然 Android 被公开介绍为一个旨在防止任何“行业参与者限制或控制任何其他参与者的创新”的项目，但在 Android 生态中，谷歌显然拥有对其他相关参与者的控制权。正如下一节将要讨论的，它通过法律和技术规范的结合，有效地设定了Android生态中自由和控制的参数。

## Android 作为技术-法律的组合

管理 Android 生态的一个关键要素是定义其法律框架的软件许可。正如官方 Android 平台网站的许可页面所解释的那样，Android 及其源代码的首选许可是 Apache Software License 2.0 (APL2.0)。该页面接着说：“可能会有例外，这将根据具体情况进行处理。例如，Linux 内核补丁采用 GPLv2 许可证，但系统例外，可以在 kernel.org 上找到”[14]。至关重要的是，APL2.0 定义了 Google 与采用 Android 源代码的硬件制造商和其他参与者的法律关系。

APL2.0 是一种宽松的自由软件许可证，由 Apache Software Foundation (ASF) 编写。它允许其他方根据自己的目的自由使用和改编 Android 操作系统。然而，APL 2.0 许可并不是 Copyleft，要知道 Copyleft 才是 Stallman 为确保自由软件保持自由而提出的概念。在 Copyleft 下，作者首先对作品享有版权，但同时还添加了分发条款。这些条款赋予每个人使用、修改和重新分发程序代码的权利。Copyleft 的至关重要之处在于，它确保从该自由软件派生的任何程序（即使是一小部分）都以相同的条款进行分发。正如 Moglen (1999) 指出的那样，Copyleft 提供了自由软件劳动力被调动的法律环境。它阻止公司以专有方式构建和分发开源软件（Stallman，2002）。Linux 内核通过 GNU 通用公共许可证 (GPL) 进行分发，它完美地体现了这些 Copyleft 原则。

然而，David Wiley (2007) 更广泛地反思了开放内容的不同法律框架，认为 Copyleft 原则也会阻碍开放内容的发展。为了推进这一论点，他重点关注 GNU 自由文档许可证 (GFDL)，更重要的是知识共享 (CC) 项目，该项目将自由软件许可证的概念扩展到其他类型的内容 [15]。Wiley 坚持认为，“虽然 CC 和 GFDL Copyleft 条款保证所有衍生作品都是‘开放’的，但它们也保证它们永远不能与大多数其他 Copyleft 作品混合”。问题是，来自 Copyleft 作品的衍生品需要以与原始作品完全相同的方式获得许可。由于使用了不同的 Copyleft 许可证，Copyleft 有效地防止了重新混合。

类似的担忧似乎也在 Google 决定选择 APL2.0 而不是 GPL 的过程中发挥了作用。谷歌在其许可页面上解释道：

> Android 是关于自由和选择的。Android 的目的是促进移动世界的开放性，但我们认为不可能预测或规定人们希望使用我们的软件的所有用途。因此，虽然我们鼓励每个人制造开放和可修改的设备，但我们不认为我们应该强迫他们这样做。 [16]

使用 GPL 库显然会“迫使他们这样做”。不包含此类要求的APL2.0显然比GPL更好地照顾了大企业合作伙伴、OEM和电信公司的利益。对于其中一些合作伙伴来说，至关重要的是，他们可以为其产品收取许可费，并对其代码保密以确保竞争优势。此外，至关重要的是，他们可以将代码与附加的不同许可证结合起来。 APL2.0 促进了这一点。

出于同样的原因，APL2.0 允许 Google 使用其他人的贡献并在其基础上进行构建。“公司贡献者许可协议”和“个人贡献者许可协议”清楚地说明了其中的运行原理。这些许可证组织了 Google 与实际为 Android 开源项目做出贡献的软件和硬件开发人员之间的法律关系。们赋予谷歌以法律术语“项目负责人”的权利，以任何它想要的方式使用对 Android 的贡献。

> 您特此向项目负责人和项目负责人分发的软件的接收者授予永久的、全球性的、非独占、免费、免版税、不可撤销的版权许可，用于复制、准备衍生作品、公开展示、公开表演、再许可和分发您的贡献及此类衍生作品。 [17]

因此，APL2.0为Google开发Android生态系统提供了很大的灵活性。它允许 Android 合作伙伴以专有方式开发操作系统的修改版本。但与此同时，Google 保留使用他人贡献并以他人贡献为基础的权利。

### 兼容性

谷歌尤其是通过技术规范来主导Android生态。为了理解它是如何运作的，重要的是要看到该公司并没有完全接受 Raymond 所描述的软件开发的“集市”模式，以及 Netscape 在 20 世纪 90 年代末尝试过的模式。相反，谷歌在很大程度上遵循软件生产的“大教堂”模式。仅发布操作系统完整版本的源代码。由于谷歌完全控制操作系统的开发，因此它可以确定Android合作伙伴必须遵守的技术规范。



### Skyhook 案例


## Android 的政治经济学

### 移动互联网的未来 

## 总结

通过对Android的反思，我们认为对于开源的批判需要重新审视，在过去的十年中，开源经常受到批评，因为它通过将自由软件与企业利益结合起来，促进了对开源程序员自由劳动力的利用。在Android构成、谷歌主导的政治经济格局中，剥削不仅变得更加普遍，而且更加包容和多面。在这种配置中，开源实际上是认知资本主义的技术法律工具。Android 使 Google 能够系统地收集、分析移动用户数据并将其商品化。该操作系统不仅可以分析用户兴趣，还可以密切跟踪用户移动，这对于开发新的特定位置服务和广告至关重要。为了促进这一点，战略性地采用了特定的开源实践。通过这些实践，谷歌能够培育并掌控庞大的移动互联网生态，包括：全球众多电信运营商、各大设备制造商、海量第三方应用开​​发商、各类社交媒体企业、数亿移动互联网用户。在这个生态中，谷歌可以利用独立程序员的贡献，更重要的是，还可以利用Android用户的元数据。


## 致谢

我们要感谢 José van Dijck、Florian Cramer 和 Morgan Currie，以及《First Monday》的匿名审稿人，感谢他们提出的有益意见、建议和帮助。


## 注

1.  http://source.android.com, accessed 3 May 2011.
2.  http://techcrunch.com/2011/12/22/android-700000/, accessed 22 December 2011.
3.  E. Raymond, 1998, p. 8.
4.  L. Lessig, 2005, p. 350.
5.  Y. Benkler, 2006, p. 60.
6.  Ibid.
7.  Y. Benkler and H. Nissenbaum, 2006, p. 411.  
8.  R. Stallman, 1999, p. 17.
9.  E. Raymond, 1998, p. 20.
10. C. Kelty, 2008, p. 99.
11. T. Terranova, 2004, pp. 93–94.
12. T. Terranova, op.cit., p. 94.
13. M. Pasquinelli, 2010a, p. 289.
14. http://source.android.com/source/licenses.html, accessed 3 May 2011.
15. 关于自由软件与知识共享之间关系的讨论，见 C. Kelty, 2008, 第 269-300 页。
16. http://source.android.com/source/licenses.html, accessed 3 May 2011.
17. http://source.android.com/source/cla-corporate.html, accessed 12 July 2011.
18. 



## 参考材料

* Y. Benkler, 2006. The wealth of networks: How social production transforms markets and freedom. New Haven, Conn.: Yale University Press.
* Y. Benkler and H. Nissenbaum, 2006. “Commons–based peer production and virtue,” Journal of Political Philosophy, volume 14, number 4, pp. 394–419.http://dx.doi.org/10.1111/j.1467-9760.2006.00235.x
* C. Kelty, 2008. Two bits: The cultural significance of free doftware. Durham, N.C.: Duke University Press.
* L. Lessig, 2005. “Open code and open societies,” In: J. Feller, B. Fitzgerald, S. Hissam and K. Lakhani (editors). Perspectives on free and open source software. Cambridge, Mass.: MIT Press, pp. 349–360.
* M. Pasquinelli, 2010a. “The ideology of free culture and the grammar of sabotage,” In: D. Araya and M. Peters (editors), Education in the creative economy: Knowledge and learning in the age of innovation. New York: Peter Lang, pp. 285–304.
* E. Raymond, 1998. “The cathedral and the bazaar,” First Monday, volume 3, number 3, at http://firstmonday.org/htbin/cgiwrap/bin/ojs/index.php/fm/article/view/578/499, accessed 22 June 2012.
* R. Stallman, 1999. “The GNU project,” In: J. Gay (editor). Free software: Selected essays of Richard M. Stallman. Boston: GNU Press, p. 17.
* T. Terranova, 2004. Network culture: Politics for the information age. London: Pluto Press.


## 关于作者

* **Kimberley Spreeuwenberg (M.A., University of Amsterdam)**，新媒体研究员兼平面设计师。她在阿姆斯特丹大学媒体研究系任教。
* **Thomas Poell (Ph.D., Utrecht University)**, 阿姆斯特丹大学媒体研究系新媒体和数字文化助理教授。


## 关于译者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。
