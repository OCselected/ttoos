---
categories:
- 开源
- 感悟
- 读后感
date: 2019-01-17T10:16:30+08:00
description: "每一家公司都是软件公司，软件对于现代企业是越发的重要，但是围绕软件来赚取利润却越来越难了！这其中究竟蕴含着什么道理？公有云提供商的巨头们是否会是开源软件的杀手？软件的商品化的历程又是如何？为什么说开发者逐步的占据决策链的顶端？基于开源项目的商业公司为何更改许可协议？如果你带着这些问题，不妨深入阅读这本优质的小书《软件悖论》。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 图书推荐
- 开源之道
- 论文阅读
title: "《软件悖论:商业软件的崛起与陨落》读后感"
url: ""
traft: true
---

![](https://softwareparadox.files.wordpress.com/2014/05/cover-w-border.png?w=400&h=600)

## 开源之道共读圈精彩评论

> 很是认同 ”The Challenge of Developer Empowerment” 的讨论。我很认同 Enterprise-focused sales forces -> technical evangelists and developer engagement professionals 的转变。  以前企业卖产品，由于信息不对称，只需要搞定CIO就可以了，卖得再贵都没有关系。 现在开源来了，客户的能力也提升了， 虽然开发者手里没有钱，但是利用开源项目可以攒出来很多解决方案，企业级软件产品销售模式发生了改变，越来越向围绕着开发者进行公关。开发者生态，社区的价值就越来越大。  -- Apache PMC 姜宁

> 这是一本提高软件工程师对于软件认知的不可多得的好书，随着软件的复杂度的上升，作为个体的开发者或工程师越发的渺小，更可怕的是软件到底在社会中起着什么样的作用？在资本商业的时代，软件究竟是如何来被商业所利用的？直接的交易？间接的服务？开源软件为什么没有人给钱，就冲这一点就让人忿忿不平，然而，世界何其大，不妨了解一下，准确定位自己的位置。 ———— 开源之道作者  适兕

>

## 作者和图书背景介绍

### 作者介绍

[Stephen O'Grady](https://redmonk.com/sogrady/author/sogrady/) 是知名专注于开发者行业的分析公司[RedMonk](https://redmonk.com/about/) 的联合创始人，在RedMonk， Stephen 和诸如 IBM、DELL、VMWare、RedHat 等IT公司合作解决各种问题。有[超过十多年](http://redmonk.com/sogrady/2012/12/02/ten/)的丰富经验，他还有另外一本很著名的书籍[《王者归来（the new kingmaker)》](http://thenewkingmakers.com/)（开源之道暂译），文章经常被各大财经媒体引用，如纽约时报、NPR、波士顿全球、华尔街日报等，他也是各种会议的主持人和受欢迎的演讲者。

Stephen 的主要研究领域在开发者和开发者基础设施这块，从纵深细分的领域如编程语言、操作系统、数据库，到横向的行业趋势如开源、云计算等，具体来说，他与开发人员的合作产生了以下技术观察结果，这些观察结果成功的预测了主流市场趋势：

* [REST](http://redmonk.com/sogrady/2004/12/05/restians-unite/) 架构风格 和[Debian Linux ](http://redmonk.com/sogrady/2004/11/17/red-hat-linux) 发行版（2004）
* [动态语言](http://redmonk.com/sogrady/2005/08/12/wherefor-art-thou-scripters/)和[非关系型数据库](http://redmonk.com/sogrady/2005/03/07/breaking-the-relational-chains/) （2005）
* [AWS](http://redmonk.com/sogrady/2006/10/03/amazons-ec2/)(2006年)
* 诸如Git之类的[分布式版本控制系统](http://redmonk.com/sogrady/2007/06/26/dscm/)（2007）
* [企业采用开源关系型数据库](http://redmonk.com/sogrady/2008/03/27/open-source-databases-shallow-but-widespread/)（2008）
* [编程语言碎片化](http://redmonk.com/sogrady/2009/04/02/what-are-we-writing-to/)（2009）
* web 公司的[优先许可协议](http://redmonk.com/sogrady/2010/05/17/beyond-cassandra/)（2010）
* [开源的循环理论](https://redmonk.com/sogrady/2018/12/21/cycles-oss/)（2018）

在创立RedMonk之前，Stephen 是 Illuminata 的分析师，并曾担任领先系统集成商的高级职位。作为一名终身红袜队球迷，斯蒂芬是威廉姆斯学院的毕业生，与家人一起住在缅因州中部。

### 关于RedMonk公司

ReadWrite 站点发布的“[五大前沿敏锐咨询公司](http://readwrite.com/2012/05/03/boutique-chic-five-great-analysts-who-are-under-the-radar)” 之一。正如其官方所描述的，RedMonk 的存在是为了帮助公司了解并与开发人员合作。从采用编程语言、帮助市场人员传递开发者青睐的话语、到帮助高级领导层了解新兴的开发人员主导的趋势及其影响。

RedMonk 认为自己与众不同，看到的世界和主流是有着区别的：

* 这个世界越来越受到一线从业者的支配，他们有：开发人员、设计师、DBA、系统管理员以及运营人员。
* 自底向上的开源软件，基于云计算的硬件正在统领这个世界。
* 人们部署的大部分软件都是由 Web 公司所构建。
* 基于分布式和社交方式的决策正在占据主流。
* 打造这个全新的世界，不再是衣着讲究的销售人员，而是那些穿着T恤编写代码的黑客。

更多关于 RedMonk 的介绍和分析文章，请移步[RedMonk 官方介绍](https://redmonk.com/about/)。你一定欲罢不能！

### 本书的写作背景

开源之道既然荐读，就暂时先把目前的形式不妨整理一番：InfoQ 旗下电子杂志新年的卷首语是[开源路在何方？](https://mp.weixin.qq.com/s/JHY9cMz1jxQYS11YmMAXFA)阐述了近来几家Open Core 的公司更改许可证的故事？IBM 以高达349亿美元收购开源软件厂商红帽公司，创造了史上最贵收购案例；微软以75亿美元收购基于社交的代码托管站点GitHub；

## 内容梗概


## 开源之道的思考

### 技术的缺失

本文是分析师从整个的商业来进行分析的，而不是一名工程师所看到那样，从技术架构来探讨软件的未来的。这不得不说是一种缺憾，但是也是给技术人员们一个机会去补充。开源之道从两个角度来思考这个过程：

1. 开源技术栈的持续“腐蚀”性

正如书中所说： 如果每个业务都有三种类型的客户 —— 会付钱的、可能会付钱的、永远不会付钱的 —— 有可能使用软件来提取实际价值，即使是实际上从未支付过客户的客户也是如此。
If every business has three types of customers — those that will pay, those that might pay, and those that will never pay — it’s possible to use software to extract real value even out of customers that will never in fact be paying customers.

从编译器、操作系统、编程语言，再到开发框架、中间件、数据库，乃至客户端的SDK、IDE、浏览器，这样一整套完整的交付业务或客户价值的供应链条，有一样是采用了开源的项目，则就有可能慢慢的全部吞噬掉，可能的原因目前能考虑的有两条：

* 开发者愿意采用开源的代码和项目，来作为自己工作的。
* 开源社区的开放性，让开发者和用户可以任意的探讨、反馈、定制和改进。
* 没有人能在开始的时候拒绝得了几乎零成本的解决方案

于是乎，不论是从应用软件提供商，还是最终的各种行业用户，乃至个人的开发栈，纵观过去20年的发展，逐步的被开源所取代。如下几张技术发展图：

1、操作系统

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Operating_systems_used_on_top_500_supercomputers.svg/1000px-Operating_systems_used_on_top_500_supercomputers.svg.png)


2. 分布式、微服务架构的崛起

### 本土的对照

## 推荐阅读
0.  Marc Andreessen 著名的文章：Software Is Eating the World! 号称是软件界引用最多的文章。
1. 《创新者的窘境》
2. SaaS 的真相，为什么说权威人士错了  https://a16z.com/2014/05/13/understanding-saas-valuation-primer
3. 卖掉你的副产品：https://signalvnoise.com/posts/1620-sell-your-by-products
4. GitHub 创始人Tom Preston-Werner 的文章：几乎一切都会开源（http://tom.preston-werner.com/2011/11/22/open-source-everything.html）
5. Paul Graham 在2007年写下了微软已死（http://www.paulgraham.com/microsoft.html），不过2014年之后，微软拥抱开源之后又复活了，而且重归最有价值公司榜首。
6. Danny Rimer: How open source helped create the modern startup（https://pando.com/2013/03/07/danny-rimer-how-open-source-helped-create-the-modern-startup/）
7. Notes from Hadoop World （https://cowen.bluematrix.com/sellside/EmailDocViewer?encrypt=c731e27b-a589-441f-a9a9-a920527a7bff&mime=pdf&co=cowen&id=world-cowen-morningnotesdistribution@cowen.com&source=mail  ）
8. Interview with Donald Knuth（http://www.informit.com/articles/article.aspx?p=1193856）
9. Cloudera 的商业模式（https://www.linkedin.com/pulse/20131003190011-29380071-the-cloudera-model/）
10. 对于软件订阅的制度思考: Adobe’s Software Subscription Model Means You Can’t Own Your Software (https://www.scientificamerican.com/article/adobe-software-subscription-model-means-you-cant-own-your-software/)
11. 历史有的时候蛮有意思，十年前微软首席软件架构师的采访：https://gigaom.com/2008/03/10/the-gigaom-interview-ray-ozzie-microsoft-corp/
12. 看一家公司不仅要看当下的利润，还要看未来赚钱的能力：https://avc.com/2013/10/they-dont-make-any-money/
