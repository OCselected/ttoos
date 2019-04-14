---
categories:
- 开源
- 感悟
date: 2019-04-11T15:09:55+08:00
description: "大学里的开源状况是如何的？学生们对于开源是如何理解的？应该如何入手开源教育？或者说将开源融入到计算机专业？我为什么要去做这件事？"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 高校开源
- 开源之道
title: "历史上那些在高校里发生的开源项目的故事一二则"
url: ""
---

## 引言

我去年分别在苏州大学和郑州大学做过演讲分享，试图从就业方向入手来向同学们解释，开源有助于他们的就业。这是我主观的以为现在的学生比较关心未来的就业，因为这是媒体经常称道，也是和同学们打交道的时候，被问的最多的问题。但是演讲之后，并没有同学和我作交流，所以也就没有收集到任何有用的反馈。

布道这件事，恐慌的莫过于，没人搭理。正负的反馈均有效，最糟糕的情况就是没有人搭理。

今年索性就驻扎在高校，尽可能的布道开源，让学生们有一个选择的机会。这不，又要开始在高校搞开源相关的活动了，我这次该布道点什么了呢？

> 「人在教中學習。」—羅馬哲學家  塞尼加

恰好近期读到了关于[CROSS](https://cross.ucsc.edu/about/index.html)的故事，于是灵机一动，不妨就谈下大学里的开源故事。每个人都喜欢好的故事，好的故事不仅容易让人理解，而且可能会引起人们的兴趣。

既然是故事，不妨一个一个来讲：

## FreeBSD 和 Bill Joy

上世纪60年代，Unix诞生于Bell实验室，在1973年11月，Ken Thompson 和 Dennis Ritchie 在操作系统原理研讨会上发表了关于Unix的第一篇论文，当时也在会场的Bob Fabry 对该系统非常的感兴趣，并将之带回伯克利。并在伯克利开始了Unix的开发，随后，1975年 Ken Thompson决定在他的母校加州大学伯克利分校担任客座教授，为期一年。 Thompson和Jeff Schriebman以及Bob Kridle在新安装的11/70上推出了最新的Unix版本 6。

同年秋天，伯克利来了两名研究生，即Bill Joy 和 Chuck Haley，开始Unix 6 下工作，如Pascal编译器、ed编辑器等，在1976年，Thompson 离开了伯克利，Bill Joy 也转向了 Unix的内核。之后，他们专门为自己改进的Unix版叫“Berkeley Software Distribution”，即伯克利软件分发版，简称BSD，从此便落地生根了，直到现在，BSD 仍然是很多领域重要的操作系统，如 MacOS、Juniper交换机等。

![](https://upload.wikimedia.org/wikipedia/commons/c/c5/Unix_timeline.en.png)

这个故事的主人翁便是 Bill Joy，被人们称之为天才的开发者，1971年，Joy 以优异的成绩考取了密西根大学，那时他只有17岁，Joy 在这一年迷上了计算机，在整个大学生涯中，Joy都在学习编程，用他自己的话说就是：

> I lived in the north campus, and the Computer Center was in the north campus, How much time did I spend there? Oh, a phenomenal amount of time. It was open twenty-four hours. I would stay there all night,and just walk home in the morning. In an averge week in those years,I was spending more time in the Computer Center than on my classes. All of us down there had this recurring nightmare of forgetting to show up for class at all, of not even realizing we were enrooled.

当然后来的Bill Joy，成为了计算机的传奇人物，（一个周末写就的）Vi的作者、Java语言的创始人之一、Sun公司的联合创始人、将TCP/IP 移植到BSD......

以及著名的 Joy 法则：

>"No matter who you are, most of the smartest people work for someone else [other than you]."

耶鲁计算机科学家David Gelernter是如此评论Bill Joy的成就的：

> Bill Joy is one of the most influential people in the modern history of computing.

## Linus 和 Linux

1991年，GNU的项目已经包含了很多了，编译器、编辑器、Shell、以及各种各样的工具，但是其中的内核项目Hurd却是停滞不前。自由软件运动因为欠缺核心而大打折扣。

这个时候，一位就读于芬兰赫尔辛基大学的叫做 Linus Torvalds的大三学生在comp.os.minix 新闻组发了这么一篇帖子:

> Hello everybody out there using minix -

> I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones. This has been brewing since april, and is starting to get ready.

Minix 是 Andrew S. Tanenbaum 教授为了讲解其开发的课程《操作系统：设计与实现》一书而开发的教学用的操作系统，这本书对Linus影响非常之大。

关于Linux的开发过程，Linus在其自传中是如此评价的：

> "这花费了我大量的精力：编程――睡觉――编程――睡觉――编程――吃饭（饼干）――编程――睡觉――编程――洗澡（冲冲了事）――编程。"

Linus 不仅是优秀的程序员，也是社区管理的大师，除了Linux是这个世界上最大、最成功的开源项目之外，为了管理日渐壮大的、全球协作的Linux代码，他另外开发了一个版本控制系统Git。

2018年，有两家分别基于Linux和Git的商业公司：RedHat和GitHub，分别被 IBM 和 Microsoft 收购，价格分别是340亿美元和25亿美元。一时震惊了世界。而这也被称之为：**Linux效应**。

## 章文嵩 和 LVS

初中时痴迷街机游戏的章文嵩，家里给的零花钱全部都耗在上面了，（1987年的一天）有一位同学告诉他：“有一个地方打游戏不要钱”，然后就结伴前去了。那个地方就是上海青少年科学指导站，后来他们一起报名参加了计算机兴趣小组。那时候周末还是单休，只有周日休息，于是每个周末带一个面包到站里一待就是一天。整个高中三年，学会了Basic、Pascal、6502汇编和在苹果机上写中文操作系统等等。

进了大学以后，很快就开始进实验室跟着老师一起做项目。大一，用Macintosh为广州火车站编写了图形化界面的售票系统；大二，计算机系与台湾大众电脑联合建立大众电脑中心，开发了OCR识别软件中的编解码部分；大三，进入603教研室，教研室配备了全系列SUN计算机，虽然当时实验室没有连接互联网，但这些计算机都是内置TCP/IP的，他和实验室老师一起建立了所有计算机之间的网络连接。通过这个项目，章文嵩把网络协议摸的非常清楚。

1998年，就读博士的第二年，那时一套LocalDirector当时价值几万美元，那时心里有疑问——这东西并不难写，为什么卖那么贵？于是就用两个星期的课余时间创建了LVS。创建LVS是个人行为，无学校项目背景，所以在1998年5月，就自建网站做了开源。

最初开发 LVS 纯是为了好玩，另外也觉得服务器集群系统是解决网络服务超载问题非常有效的方法。当时章文嵩看到一篇关于MagicRouter的 Berkeley论文，颇受启发，于是决定在当时Linux 2.0内核上写一个。在1998年5月，花了大概两个星期时间写了一个简单的系统。由于当时在一家网络公司当技术顾问，有网络服务器可用，就将源代码在网上发布。出乎意料的是，很快就收到许多询问的电子邮件，Robert Thomas也很快告诉我他将该软件用到了真实运行的Web proxy集群系统中。这让他觉得开发LVS很有意义，于是持续不断花时间将系统做得更好、更完善。

LVS 在2012年之后就不再更新了，而章文嵩也在阿里、滴滴这样的公司身居高位。

## Sega Weils 和 Ceph

作为最酷、最先进的分布式文件系统，Ceph 在低成本的超融合方面有着无比的魅力，即使是在云原生的时代，OpenShift 后端，乃至很多的平台默认采用Ceph。

说起Ceph，就必须得聊聊 Sega Weils，Ceph 在2006年的 USENIX 操作系统设计大会（OSDI 2006）上首次亮相，由Weil，Brandt，Miller，Long和Maltzahn撰写; 更详细的描述于次年在 Sage Weil 的博士论文中发表。

作为网站托管公司 DreamHost 的创始人，Sage Weil 在2004年来到加州大学圣克鲁兹分校学习数据存储系统时，已经是一位成功的企业家了。Ceph 是其在就读博士学位时写就的，尽管只是一个雏形。

2015年，Sega Weils 捐赠给母校3百万美金，希望用于开源软件的研究和孵化，这也是[CROSS](https://cross.ucsc.edu/about/index.html)的来由。Weils是这么说的：

> 我们旨在证明一种支持学术研究的模式的可行性，并以最大化投资价值的方式来让自由和开源生态系统更加的丰富。如果我们能够成功，我们也希望更多的大学能够借鉴。

Weils 是一位非常执着的科学家：

![](https://community.redhat.com/blog/authors_over_time.png)

## Matei Zaharia 和 Spark

我们身处大数据的时代，当然也是身处开源的时代，就在 Hadoop 将大数据处理的生态建立之后，创新就从未停止过，专门针对流数据的 Spark 项目就是其中之一。一个开源集群运算框架，最初是由加州大学柏克莱分校AMPLab所开发。相对于Hadoop的MapReduce会在运行完工作后将中介数据存放到磁盘中，Spark使用了存储器内运算技术，能在数据尚未写入硬盘时即在存储器内分析运算。Spark在存储器内运行程序的运算速度能做到比Hadoop MapReduce的运算速度快上100倍，即便是运行程序于硬盘时，Spark也能快上10倍速度。Spark允许用户将数据加载至集群存储器，并多次对其进行查询，非常适合用于机器学习算法。

使用Spark需要搭配集群管理员和分布式存储系统。Spark支持独立模式（本地Spark集群）、Hadoop YARN或Apache Mesos的集群管理。 在分布式存储方面，Spark可以和HDFS、 Cassandra 、OpenStack Swift和Amazon S3等接口搭载。 Spark也支持伪分布式（pseudo-distributed）本地模式，不过通常只用于开发或测试时以本机文件系统取代分布式存储系统。在这样的情况下，Spark仅在一台机器上使用每个CPU核心运行程序。

Spark 是Apache 软件基金会最为活跃的项目之一，拥有超过几千的活跃开发者，也是最为活跃的大数据项目之一。如此成功的开源项目，它最初的创始者也是一名在校生。他就是如今已是声名显赫的Matei Zaharia，这位出身于罗马尼亚的加拿大人，Spark 仅是他在2009年读书期间的一个项目，在加利福尼亚大学伯克利分校深造时，加入著名的AMP实验室，他同时还是Apache Mesos的合作创始成员，并且也为Hadoop的调度系统做出过重大贡献。

Matei Zaharia 从高中开始就表现出计算机的天赋，并获得两枚IOI银牌，在就读大学期间，斩获 ICPC 2005获得金牌（全球第三名）。在2015年，他还获得了ACM博士论文奖。

除了是 Databricks 的联合创始人兼CTO之外，Matei Zaharia 还在斯坦福担任助理教授。关于这位传奇人物，以及学术成就，直接看他在斯坦福的[主页](https://cs.stanford.edu/~matei/)，了解更多信息。

## GitHub Octoverse 数据看美国院校对开源的贡献

GitHub 目前是这个世界上最大的代码托管服务商，其每年的Octoverse 大会简直就是软件产业、开发者的风向标，在2018年发布了关于代码贡献的组织，即按照提交签名的邮箱后缀而定，如下图所示排名前十的组织：

![](images/github_octoverse_organization.png)

赫然在列的是 UC 伯克利、华盛顿大学、MIT、密歇根大学、以及斯坦福，和IT 大型商业公司微软、Google、Intel、Facebook、红帽等并驾齐驱。

这从侧面反映了一个事实，优秀的计算机学生，在开源项目中如鱼得水，不仅能够获得实践（计算机是一门实践性非常强的学科），而且能够和世界一流的开发者进行互动和交流，当然在贡献中学习可以收获更多的声誉。

那么问题来了，本土的大学生们是不是也应该积极的参与到开源项目中来呢？

## 总结

正如著名计算机科学家、图灵奖得主 David A. Patterson 的建议：

> COURSE I WOULD LOVE TO TAKE #1: JOIN THE OPEN SOURCE MOVEMENT

计算机教育要积极的拥抱开源，而大学也是开源的主要发源地、发力的主力。计算机科学本身的实践特性，需要在学习基础理论的同时，还要有解决实际问题的能力培养，而开源项目无疑是实现这样的最佳方式之一。退一步讲，在人才竞争的今天，参与开源项目也是最厉害的简历！

Good Luck！ Happy hack！

## 参考材料

1.  McKusick, Marshall Kirk (1999). "Twenty Years of Berkeley Unix: From AT&T-Owned to Freely Redistributable". Open Sources: Voices from the Open Source Revolution. O'Reilly
2. Outliers: The Story of Success ,Malcolm Gladwell ,Back Bay Books (2009年7月1日)
3. [Bill Joy 在 TED 的演讲](https://www.ted.com/speakers/bill_joy)
4. [GNU Hurd 的维基百科介绍](https://en.wikipedia.org/wiki/GNU_Hurd)
5. [Linus Torvalds 告诉你Linux是如何诞生的](https://arstechnica.com/information-technology/2015/08/how-linux-was-born-as-told-by-linus-torvalds-himself/)
6. 只是为了好玩:Linux之父林纳斯自传， [美]Linus Torvalds，[美]David Diamond ，人民邮电出版社; 1 edition (August 1, 2014)
7. [章文嵩：开源，LVS，以及留下的无数传说](http://www.sohu.com/a/198730915_505802)
8. [Sage Weil: Opening doors for open source](https://news.ucsc.edu/2018/01/year-of-alumni-weil-sage.html)
9. [Ceph Turns 10: A Look Back](https://community.redhat.com/blog/2014/06/ceph-turns-10-a-look-back/)
10. David A. Patterson,[Computer Science Education in the 21st Century](https://people.eecs.berkeley.edu/~pattrsn/ACM/Computer%20Science%20Education/volume%2049_number3_files/volume49_number3.pdf) ACM 49, (3): 27-30 (March, 2006),
11. [Matei Zaharia](https://en.wikipedia.org/wiki/Matei_Zaharia)
