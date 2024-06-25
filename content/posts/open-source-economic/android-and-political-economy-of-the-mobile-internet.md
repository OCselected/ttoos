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

在随后的几年中，各种理论家都赞扬了开源和自由软件的实践和理想。例如，Lawrence Lessig (2005) 认为“开源和自由软件问题是自由社会的根本”[4]。


## Android 作为技术-法律的组合

## Android 的政治经济学

## 总结

## 致谢

我们要感谢 José van Dijck、Florian Cramer 和 Morgan Currie，以及《First Monday》的匿名审稿人，感谢他们提出的有益意见、建议和帮助。


## 注

1.  http://source.android.com, accessed 3 May 2011.
2.  http://techcrunch.com/2011/12/22/android-700000/, accessed 22 December 2011.
3.   E. Raymond, 1998, p. 8.
4.   L. Lessig, 2005, p. 350.



## 参考材料

* L. Lessig, 2005. “Open code and open societies,” In: J. Feller, B. Fitzgerald, S. Hissam and K. Lakhani (editors). Perspectives on free and open source software. Cambridge, Mass.: MIT Press, pp. 349–360.

* E. Raymond, 1998. “The cathedral and the bazaar,” First Monday, volume 3, number 3, at http://firstmonday.org/htbin/cgiwrap/bin/ojs/index.php/fm/article/view/578/499, accessed 22 June 2012.


## 关于作者

* **Kimberley Spreeuwenberg (M.A., University of Amsterdam)**，新媒体研究员兼平面设计师。她在阿姆斯特丹大学媒体研究系任教。
* **Thomas Poell (Ph.D., Utrecht University)**, 阿姆斯特丹大学媒体研究系新媒体和数字文化助理教授。


## 关于译者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。
