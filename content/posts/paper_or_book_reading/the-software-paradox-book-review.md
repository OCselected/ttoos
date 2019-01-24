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
title: "《软件悖论:商业软件的崛起与陨落》书评"
url: ""
draft: true
---

![](https://softwareparadox.files.wordpress.com/2014/05/cover-w-border.png?w=400&h=600)

## 开源之道共读圈精彩评论

> 很是认同 ”The Challenge of Developer Empowerment” 的讨论。我很认同 Enterprise-focused sales forces -> technical evangelists and developer engagement professionals 的转变。  以前企业卖产品，由于信息不对称，只需要搞定CIO就可以了，卖得再贵都没有关系。 现在开源来了，客户的能力也提升了， 虽然开发者手里没有钱，但是利用开源项目可以攒出来很多解决方案，企业级软件产品销售模式发生了改变，越来越向围绕着开发者进行公关。开发者生态，社区的价值就越来越大。  ———— Apache PMC 姜宁

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

Stephen O'Grady 在本书出版后，在RedMonk上撰文：[《软件悖论——现已上市》](https://redmonk.com/sogrady/2015/06/03/software-paradox/)中如此描述自己的：

作为一名分析师，每天的工作就是和各家公司进行会谈，当然所谓的各家公司是指自己所在领域的尽可能都能打上交道的（毕竟不能所有都覆盖），在各种沟通的过程中，还得研究他们。通过整理各种指标，来衡量他们的产品的轨迹相对于彼此是什么样的？从他们的财务报告中读出故事来，等等。就这样此经数年，在数百个小时的谈话、几千个小时的研究之后，不出什么意料之外的话，总能发现点什么，事情不总是偶然，还是有规律可循的。话说回来，这也是一个分析师份内的工作。

于是在从业5年多以来，发现了一件蛮有意思的事情：**软件公司越来越难从软件中获利了。** 尽管说诸如 Oracle、Microsoft 以及其它软件公司依然从授权中获利，但是份额在下滑，传统上的软件公司面临着来自 SaaS 和开源的竞争压力；基于开源的商业公司，无论是双许可、还是 Open Core、以及正在进行的各种各样的创新，都是想方设法、使出浑身解数尝试以免费作为诱饵，以从客户身上套现；当下那些能够开发出最酷、最创新软件的公司，也是商业上非常成功的公司，均不销售软件，这些公司甚至将他们内部最具创新的软件资产以开源的方式提供给全世界，这也就意味着他们从其它地方看到了更多的商业利益，并没有从软件本身获利。

所有的证据都指向一个结论 —— 软件的内在商业价值正在下降 —— 至少从传统的永久授权许可的意义上来说是。（关于这点内容，Stephen 在当年5月份的开源商务研讨会上做了题为[《欢迎来到数据时代》](https://redmonk.com/sogrady/2011/05/24/the-age-of-data/)的演讲分享。）

但是更为奇怪的是，尽管软件越来越难卖了，但是它对于所有公司的重要性却越来越高，甚至是战略性质的。就在我与OSBC（开源商务研讨会）的观众讨论软件公司市场估值的可观察转变后不到三个月，马克安德森在华尔街日报上发布了日后影响深远的：“[软件正在吞噬世界](http://www.wsj.com/articles/SB10001424053111903480904576512250915629460)”一文。在这篇文章中，安德森简明扼要地阐述了许多人现在认为理所当然的立场：**软件正在改变整个行业，非技术的公司要么努力加速追赶，要么被技术公司所取而代之。**

在过去的五年的时间里，这个悖论一直占据着我的心思。盯着这些软件公司、SaaS 公司、不销售技术的科技公司的财务，以及与对软件有着不同看法的公司进行交流，这些公司有传统商业公司、也有基于开源项目的商业公司，到专有软件，再到 IaaS 服务商。当然，还有和大量开发人员的沟通，以及阅读他们大量的作品，从而了解这些开发者们关注的东西在哪里，他们更重视那些更具价值的内容。所有的这一切都为了回答这个问题：**软件是如此的重要，是上升到公司战略层次的重要，然而其商业价值却在降低？是什么导致这样的一种情况？**

## 内容梗概

该书甚至都不能称之为一本书，但是又比小册子的内容多了点，篇幅不大，却振聋发聩。全书公有六章内容。

第一章，作为开篇，像很多好书一样，讲了一个精彩的故事，引起读者的思考。

内容就是从大历史的视角来看商业软件市场的起伏，以典型的公司为例说明，开篇以微软分离出操作系统作为软件许可证分发的商业模式，创造了商业上的神话，创新性的颠覆了当年的巨头IBM售卖硬件的模式。但是三十多年过去了，软件越发的重要，但是售卖软件，或者说传统的售卖授权的方式却越来越难了。

第二章，作者比较了两个时代的软件公司，一类是以收取软件许可费用或服务形式的大型商业公司，如微软、IBM、SAP等，另外一类是巨大的软件公司，但是并不依赖软件本身来赚钱，甚至很多项目都是开源的，如Google、Apple、FaceBook等。并以断代史的方式来说明软件商业化的变迁。

第三章，开始具体的阐述软件市场沉浮的背后运行机制。如

* 没有谁能挑战得了免费。
* 来自X as  a service 的挑战
* 来自客户本身的挑战
* 来自开发者本身


> The success of open source code is perhaps the only thing in the computer field that hasn’t surprised me during the past several decades. But it still hasn’t reached its full potential; I believe that open-source programs will begin to be completely dominant as the economy moves more and more from products towards services, and as more and more volunteers arise to improve the code.               
                                    —    Donald Knuth Professor Emeritus at Stanford University

第四章，讲述的是具体的商业公司来如何利用软件来进行盈利。时代变了，创新也在不断的发生变化，看这些优秀的公司是如何脱颖而出的。针对不同的群体和软件类型，做了分门别类。如Adobe、Amazon、Apple、Atlassian、IBM、Nest、Oracle、Salesforce、VMware/Pivotal等。

第五章，主要是告诉读者，如果你想以生产软件安身立命，或者改变世界，那么需要变化思路，有几条可能的方案是出路。当然你也可以选择不变，认为世界没有变也不会变。无论你承认与否，单单依靠软件来赚钱是越来越难了。现在考虑一下售卖许可证之外的商业模式吧，多样化总是没有错的：

* 订阅模式
* 提供自己的软件即服务
* 围绕数据来构建
* 将软件视为一种固定资产，而不是现金
* 全栈创业

第六章，也是最后一章，祝福之类的，生于一个软件时代，要把握机遇！

基本的思路也是一个分析师的思路，书的撰写思路和脉络属于常规，但是内容绝对值得你认真审视！并作出反思。

## 开源之道的思考

开源之道既然荐读，就暂时先把当下发生的事件不妨整理一番：InfoQ 旗下电子杂志新年的卷首语是[开源路在何方？](https://mp.weixin.qq.com/s/JHY9cMz1jxQYS11YmMAXFA)阐述了近来几家 Open Core 的公司更改许可证的故事？IBM 以高达349亿美元收购开源软件厂商红帽公司，创造了史上最贵收购案例；微软以75亿美元收购基于社交的代码托管站点GitHub；Linux 基金会的注册会员高达1000多家，并在去年成立了Ceph基金会、GraphQL基金会、（好莱坞动画）Academy软件基金会......

所有的事情似乎都指向了一条路径：**开源正在成为现代企业的主要软件开发生产方式** 作为副作用，它也蚕食了传统意义上的销售授权的软件公司。软件的开发，从来就是一件很难的事情，历史上无数的工程和项目证明，软件工程是极为耗资源的工程。开放式创新和协作、开发者的觉醒、以及作为资产的非盈利机构托管似乎是一条很不错的路径，这样公司就可以专心的放到业务上了。

开源的发展和壮大，无论从思想，还是方法论，都是史前的，有很多的内容值得去挖掘！而这也恰是开源之道的使命和价值所在。

开源之道还认为《软件悖论:商业软件的崛起与陨落》没有论及两件事：

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

大家都应该记得，最初的Unix系统上的软件运行了一些 GNU的程序，后来慢慢渗透到编译器，最后便是整个操作系统的替代。

2、Web 服务器

![](https://d3ansictanv2wj.cloudfront.net/market-share-top-million-webservers-2008-2015-32e5f7d0e17b60a27dd5f2ec74a3143b.png)

3、编程语言

4、大数据生态


2. 分布式、微服务架构的崛起

### 本土的对照

想要理解商业，就不能离开一个地区的独特的文化和风俗环境。这是商业课的必修内容。本土有着独特的环境和文化，所有软件悖论一书所列举的内容，没有任何一家本土的公司。所以软件悖论在本土则会引入其它的一些外延现象，需要具体问题具体分析，不可生搬硬套。


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
