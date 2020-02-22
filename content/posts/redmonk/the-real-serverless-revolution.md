---
categories:
- 开源
- 商业分析
date: 2020-02-22T11:42:24+08:00
description: "来自 Stephen O'Grady 的第二篇译文，关于 Serverless 概念扩展的洞见，这将进一步加剧云计算和开源的竞争误区，我们要做的是不仅在技术上要去理解，还要在经济模式上理解。越来越复杂的世界，要去拥抱更多的人，或许可以迎接未来。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 商业分析
- 开源商业
- 软件开发
- 云计算
title: "【Redmonk专栏】真正的 Serverless 革命"
url: ""
authors:
- Stephen O'Grady
translater:
- 开源之道
---

## 本文经 Stephen O'Grady 先生许可翻译，转载请注明作者

## 引言

![](https://redmonk.com/sogrady/files/2020/01/capex-opex-serverless.png)



2006年3月，AWS 推出了简单存储服务（S3），紧接着在8月又推出了弹性计算(EC2)，如此重要的事件在当时来说并不算什么，没有人意识到云计算会在将来的十几年成为整个行业的主导。然而，事实上也确实如此，在此后的许多年里，那些已经站稳脚跟的技术提供商们认为云计算就是一个玩具，根本不适合企业的应用，在蛮长一段时间内，云计算备受冷落。

然而，没有什么能够阻挡进步，无论那些对云计算抱有多大的偏见，其带来的经济效应都是巨大的、颠覆性的。

在云计算出现以前，企业的主流做法是购买物理硬件，而且还有诸如 1&1 和 Rackspace 们提供的硬件托管厂商，这些通常是按月租用的，通常包含设置或实例化费用，以阻止琐碎的实验。

自从 S3 和 EC2 诞生以后，用户通过浏览器加一张信用卡，就可以在几分钟之内启动机器，运行几个小时，随时将之关闭，而且还是按小时来计算的。正如 Flip Kromer 在其2009年撰写的[文章](https://mrflip.github.io/wukong/INSTALL.html)中所说：

>  EC2 意味着任何人在8小时，花上19美元，就可以完成10台机器的集群和1TB 存储的租用。

当然，对于本身就是伴随着云计算时代成长起来的一代来说，随时可用、按需扩展的云计算对于他们来说就是默认，所以他们是无法将硬件转向云计算时代有什么感慨的。亚马逊，微软和其它云公司当前的市场估值表明，云计算的 pay-as-you-go  模式，是让那些只能利用开源软件的人能够负担得起运行所需的硬件资源。

云计算在极短的时间内，就[颠覆](https://redmonk.com/rstephens/2016/06/16/infrastructure-investments-by-cloud-service-providers/)了技术领域的 LandScape ,即将原来以 CAPEX（资本支出） 为中心的转变为 OPEX （运营支出）的模型，这是前所未有的变革。

可能大家对云计算的变革有一个公认的共识，那就是其对于价格模型的影响，那么（现在终于可以抛出本文的问题了）蛮有意思的问题来了：**Serverless 是否具备同样的潜质？**

Serverless 其实是一个蛮有历史的名词了，要比人们认识它早很多年，不过一直以来都被用作通用的描述。例如，在1995年的UC Berkeley[论文](https://www.scs.stanford.edu/nyu/01sp/sched/xfs.ps)中，它与网络文件系统一起被引用，在2004的时候被[虚拟现实](https://www.cs.umd.edu/~hjs/pubs/taningis04.pdf)所引用，2005年的时候是[数据库](https://www.hwaci.com/sw/sqlite/serverless.html)（尤其是 SqLite），2008年代[RFID 认证](https://ieeexplore.ieee.org/document/4489767)，乃至2012年的[ Gartner 报告](https://www.gartner.com/en/information-technology/glossary/serverless-printing)。

这些都成为了过往，在2014年的时候 AWS 发布了 Serverless 产品 —— Lambda，Serverless 一词从此具备了全新的意义，加入了云计算的大家族，但是该服务实际的应用远比人们预测的要长的多。其面向函数的模型一夜之间就成了 Serverless的代名词，事实表现就是当人们讨论Serverless的时候，就是在讨论函数模型本身。

更为有趣的是，随着 Serverless 的进一步普及，也吸引了更多的玩家进入，大家开始对这个严格被定义为函数的定义开始让其模糊起来了，作为 AWS 的竞争对手，微软和 Google 为了争取最大利益，极力避免使用 Lambda 的定义。鉴于 AWS 在云计算的江湖老大的地位而言，微软和 Google 显得有点单薄，但是若是默认让 Lambda 成为 Serverless 的代名词，就意味着将所有的市场再次交还给 AWS（尽管已经有点晚了）。当然，此二位也非等闲之辈，他们没有坐以待毙，而是作为 AWS 强有力的竞争对手的姿态出现，且将 Serverless 扩宽到远远超出函数架构的范围，这样大家才可能在同一个起跑线上。

不过，更有意思的是，AWS 并没有显示出要组织扩展 Serverless 概念的范围，相反，AWS 也是愿意推动的。尽管我们认为从战术上讲，会很自然地期望 AWS 会谨慎地保护重新启动的 Serverless 术语的使用，以便从营销的角度上使 Lambda受益。但是，AWS 却反其道而行之，它在诸如数据库和其它非函数的服务上也在扩展 Serverless 的边界。

那么这样的话，既然排名前三的老大达成了一定的共识，都要扩展 Serverless 的边界，使其获得更为广泛的应用，那么新的定义呼之欲出是指日可待的事情了。从 RedMonk 的角度来看，已经[洞悉到了这点](https://redmonk.com/rstephens/2018/12/14/serverless-more-than-just-functions/),也做了相应定义，认为这种不断发展的 Serverless 颇为准确的描述是：“无限接近零托管的服务”。更为重要的是，该定义所潜在的意思在于：**Serverless 不止于函数技术体系结构的扩展，而是随之而来的经济模式的扩展。**

云计算的 pay-as-you-go 模式，彻底颠覆了过去的时间共享的方式，即对价格、消费方式、基础设施彻底的革命，而且重新定义了整个行业，相对于原来的模式，云计算在可访问性方面具有无与伦比的优势，但 pay-as-you-go 只不过是一种属性罢了，过去的租赁服务也可以做的到。

真正的问题并不在于 Serverless 的技术，而是其“按需付费”的经济模式，会不会像云计算时代的 pay-as-you-go 对传统服务器的革命那样。

## 原文链接

[The Real Serverless Revolution](https://redmonk.com/sogrady/2020/01/31/serverless-revolution/), 需要稳定的网络环境访问。

## 关于作者

[Stephen O’Grady](https://redmonk.com/sogrady/author/sogrady/) 是知名专注于开发者行业的分析公司[RedMonk](https://redmonk.com/about/) 的联合创始人，在RedMonk， Stephen 和诸如 IBM、DELL、VMWare、RedHat 等IT公司合作解决各种问题。有[超过十多年](http://redmonk.com/sogrady/2012/12/02/ten/)的丰富经验，他写过两本很著名的书籍：[《软件悖论:商业软件的崛起与陨落》](/posts/paper_or_book_reading/the-software-paradox-book-review/)和 [《The new kingmaker》](http://thenewkingmakers.com/)，文章经常被各大财经媒体引用，如纽约时报、NPR、波士顿全球、华尔街日报等，他也是各种会议的主持人和受欢迎的演讲者。