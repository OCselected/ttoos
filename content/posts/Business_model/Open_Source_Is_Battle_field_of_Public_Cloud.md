---
categories:
- 开源
- 商业模式
date: 2017-06-28T11:26:33+08:00
description: "现在和未来是如何变成历史的？为什么去阅读历史？他们就发生在我的有生之年，个人是有限的，尤其是各个器官的功能，眼睛能看到的距离是有限的、耳朵听到的声音也是就近的、触摸更是必须接近。唯有思维是不设限的，想象力才是进步和视野开阔的源头。那么，从发生的几则新闻来看，串起来看。是不是有些许价值？"
keywords:
- Open Source
- Business Model
tags:
- 开放式创新
- 商业模式
title: 开源正在成为公有云巨头们的战场
url: ""
---

## 开源成为热门的由来

计算机编程在大型的项目中表现的至关重要，代码的优劣直接决定项目的成败，而编码本身是一项非常需要沉浸的艺术，优秀而卓越的工程师非常的难求。然而，资本所带来的技术变革，又非常的求才若渴，苦于寻找，鉴于目前的大学教育，毕业生需要花费很大的精力去培养，而且还不知道结果。突然有一天，人们发现开源社区简直是人才的巨大宝库，这里的优秀的编码人员实在是实打实的，有实际的架构设计、代码实现，于是乎，蜂拥而至！开源社区的人才成了企业争夺的对象。

时代变了，过去的软件产业是先有商业产品，然后社区有人重新实现，如操作系统，web服务器等，现在则是领先的技术先开源，如Docker、大数据生态、机器学习等。

技术社区所成立的基金会，开始渐渐的进入了商业化运作，如Linux基金会、OpenStack基金会，在培训、会议、宣传上推波助澜。更要一提的是GitHub代码托管站点，改变了人们的协作方式，影响已经不止于代码领域。

是的，开源是炙手可热的流行词汇。几乎每天都能看到很多关于开源的新闻和事件。开发者、技术人员热爱开源，公司愿意助力，这是一个开源的时代。

## 三则看似无关的新闻

1. 2017.6.16 Google开源了 TenSorFlow 的[对象发现](https://venturebeat.com/2017/06/16/google-open-sources-object-detection-tech-that-powers-nest-cam-image-search-and-street-view/)，继续完善人工智能方面的生态布局。
2. 同一周，AWS 更新了Blox ，媒体称[AWS Blox 进入竞争激烈的容器市场](http://searchaws.techtarget.com/tip/AWS-Blox-enters-crowded-open-source-container-market-amid-skepticism)。
3. 也就是在17号，微软公布了另外一则消息：[微软成为Cloud Foundry黄金会员](https://azure.microsoft.com/en-us/blog/microsoft-joins-cloud-foundry-foundation/)，并且支持更多的开源数据库，包括MySQL、PostgreSQL、Cosmos DB等。

是的，就是在同一周，仿佛是商量好的一样。

另外再补充一条，Azure在29号又发布了关于Azure支持的Linux操作系统系列的新闻：[Linux On Azure](http://www.zdnet.com/article/linux-on-azure-what-are-your-choices/)，支持几乎所有主流的Linux发行版。

## 是什么将他们放在一起了呢？

我们来看一章图：

![](https://raw.githubusercontent.com/OCselected/ttoos/master/content/public/Grtner_IaaS_2017.jpeg)

（图片来自Gartner（2017-6）

全球的公有云服务提供商的魔力象限，作为领导者的AWS和Azure，以及强有力的角逐者Google。换句话说，公有云三巨头正在展开激烈的竞争。

## 为什么会这样？

都想在未来取得领导地位和竞争优势，这是不争的事实。前十年的云计算，伴随着电商、大数据的发展，以虚拟机实例和存储空间为核心，基本上是AWS的天下。微软依靠一招“微软热爱Linux”，硬生生的将自己转型成为了公有云供应商，然而Google，却没有占到任何的便宜，虽然有着优越的技术优势和文化口碑，但是始终没有赢得大众用户的芳心。

于是，Google 痛下决心，从红帽挖来了高管来主持云计算业务，那么红帽的最大武器就是对于开源的理解。在2015年，发布了两大重量级的开源项目：[Kubernetes 1.0](https://en.wikipedia.org/wiki/Kubernetes#History)和[TensorFlow](https://en.wikipedia.org/wiki/TensorFlow#History) ，两年过后，这两个开源项目的发展的超乎意料的好。

先说Kubernetes，在容器编排领域，已经是事实上的王者，除了项目本身的技术优越之外，还有着超强的社区运营能力，赢得了业内的尊重和信任，已经构筑了完善的生态系统。最新的版本1.7刚刚发布，已经对于传统应用的支持上升了一个台阶。

然后是TenSorFlow，人工智能是当前技术、投资界炙手可热的话题，但是TenSorFlow已经占据先机，扛着人工智能的民主化的大旗，两年过去，也已是赢得了很多重量级的用户，尤其是来自学术界的青睐。

巨头总是在布局未来，AWS和微软有如此巨大的优势，当然不希望输掉未来，既然Google是用开源来作为武器，那么就用开源砸回去。于是就出现了争相开源相关项目：

容器编排：

|  公司    |     开源项目      |  备注|
| -------------  | ------------- |-----:|
|亚马逊|[Blox](https://blox.github.io/)||
|微软|[Deis](https://deis.com/)|收购Docker未果，收购了Deis|
|Google|[Kubernetes](http://kubernetes.io)|Kuberntes已经有Linux基金会旗下的CNCF基金会主持|


机器学习：

|  公司    |     开源项目      |  备注|
| -------------  | ------------- |-----:|
|亚马逊|[MXnet](http://mxnet.io/)||
|微软|[CNTK](https://www.microsoft.com/en-us/cognitive-toolkit/)||
|Google|[TenSorFlow](https://www.tensorflow.org/)|案例更多些|

除去开源项目之外，三家公司的云计算服务，均有对应的运行环境和服务，而这才是他们真正角逐的地方。因为这是能够给他们带来收益的地方。而开源本身，除了构建生态之外，就是对于知识的传播，外围生态、下游用户的“知识”捆绑。

## 号外：AWS 也开源

从15年开始，微软就开始高调宣称自己“热爱开源”，云平台Azure不断的接纳开源项目和产品，并且在今年成为了GitHub上排名最靠前的代码贡献公司，似乎微软并没有什么沉重的历史负担，一副赚到钱为原则，开源可以给我带来利润，那么就拥抱开源。我们就不用多说了。

Google 当然在开源的盛名是由来已久的，除了每年一度的GSoC之外，今年还特别的推出了Google[开源站点](https://opensource.google.com/)。读者可以参考我在InfoQ发表的文章：[Google 教你如何“做”开源](http://www.infoq.com/cn/news/2017/04/a-new-home-for-google-open-sourc)。

我们今天来细细的谈一下AWS对于开源的理解和相应的成绩。大体上分为如下几点：

### 基于开源项目的云服务（产品）

这才是AWS对于开源的理解的精髓所在，其实，话说回来，公有云的用户大多是开源技术的重度依赖者，因为其软件栈或者是LAMP架构，或者是LAMP架构的衍生，我们简单列个表格来看下AWS产品线，基于开源项目的产品都有那些：


|  ASW 产品名称    |     对应的开源项目      |  备注|
| -------------  | ------------- |-----:|
|Amazon EC2 |Linux，Xen ||
|Amazon EMR|Elastic Hadoop|这是更新最为频繁的产品，几乎和社区的同步。|
|Amazon ElastiCache| MemoryCached||
|Amazon RDS|MySQL／PostgreSQL，用于 MySQL &PostgreSQL 后端的可扩展的 Aurora||
|Amazon OpsWork|Chef 自动化服务平台||
|Amazon ECS|Docker 编排||
|Amazon CloudSearch|Elasticsearch||

上述的这些产品是严重依赖于开源项目的，而且还是整个IaaS服务的核心产品。

### 自己捐献的开源项目

除了我们在前面一章列举的在机器学习（MXNet）和容器编排（Blox）方面的两个开源项目之外，其实AWS还有很多开源的小项目，和现在很多的保守的公司一样，均是托管在GitHub之上，URL分别是[https://github.com/aws](https://github.com/aws)和[https://github.com/awslabs](https://github.com/awslabs)，多数是一些小的工具，如命令行管理工具aws-cli；Python的Serverless微服务架构，用于AWS的chalice，等等。

AWS 在捐献项目的运营方面明显要弱于Google，表现的基本和本土的企业差不多。

### 向上游贡献卓越的项目

我们在列举AWS产品的表格的时候，已经看出AWS是严重依赖开源项目的，那么作为精明的“两个比萨”团队，是不可能不考虑经济因素的，所以参与到上游是理所当然，我们就来看看对上游的项目贡献：

对Linux内核的贡献：

* ENA： 一个网络模块的驱动
* Annapurna ： ARM 64芯片支持
* 雇佣了Linux的一位卓越贡献者：David Woodhouse

最大的参与度还是Hadoop 生态系统，超过100个卓越贡献。

零星的项目就很多了：Docker、Boto、Apache系列等。

### 参与的开源组织

想很多传统公司一样，开始的时候都会参与一些开源的组织，AWS概莫能外，这是研究所决定的。

AWS 是Linux基金会的银牌会员，其中在Linux基金会下的项目成员有：

* Xen 项目的创始成员、咨询成员。
* CII（核心基础设施计划） 的创始成员。
* OCI （开放容器计划）的创始成员

同时参与的还有ToDo Group、开放媒体联盟、Open-MPI。

### 招徕开源人才

AWS还从Netflix请来了相关的开源人才：Adrian Cockcroft，曾任职于Netflix的开源团队；以及Zaheda Bhorat，曾经参与过Google GSoC和SalesForce的开源团队。

是的，无可否认的是，AWS也是开源的受益者，相对于Google和微软，AWS依然对于开源的拥抱还差了些，不过这种情况正在改变，让我们拭目以待吧。要知道，算经济账也是亚马逊的基因之一。相信终究有一天，亚马逊会全面拥抱开源的。

## 谁会赢？

这个还未可知，谁赢真的不重要，重要的是能够从竞争中获益，彼此通过创新，征服用户才是王道。在未来，随着技术的进一步发展，将会有更多的服务运行在云中，而云需要不断的变革、创新，方能满足需求，赢得未来。

## 谁是最终的受益者

大公司开源是有着明确的目标的，当然，所有的目标最后都可以归为一点：盈利。这是商业的核心所在，也是资本的精髓。让我们来看下企业通常考虑开源的益处：

* 参与到自己所依赖的项目，快速的增强产品特性。
* 吸引并留住优秀而卓越的人才。
* 改进代码质量、文档、模块化以及重用性。
* 将开发和测试的资源池化。
* 让大众来验证架构的设计决定。
* 在这个生态环境下保证能够跟上步伐和处于中心位置。
* 建立信任以及协作的基础。

从公司参与开源的角度，不外乎以上这几条，当然还存在，对自由软件有着独特的情怀等类似的使命。赢得名与利，这是企业最根本的益处之所在。

开源，从来就是一个双赢的局面，对于云计算的用户来讲，竞争导致拥有主动选择的权力，不会被锁定和捆绑，开源使得自己的技术不会落伍，保持跟上潮流。

至于开发者，从心所欲，选择自己认为技术、工程、设计最强的那个，将自己的才华、激情奉上，向成为大师的路上一路披荆斩棘即可！

## 结语

开源，无疑已经成为大厂商攻城略地的地方，成为未来布局的沙盘。反观本土的企业的如阿里云、腾讯等，也已经逐渐的开始布局开源，虽然相对走的比较艰难，但俨然慢慢的开始走了，因为在本土开源，最难的是认知和文化的问题，或许再加上一些伤痕的余波，所以开源布道任重道远。但有了企业的领衔，相信未来可以加快这一过程。

## 参考资料

来自AWS reInvent 2016 的演讲： [AWS re:Invent 2016: Open Source at AWS—Contributions, Support, and Engagement(ARC213)](https://www.slideshare.net/AmazonWebServices/aws-reinvent-2016-open-source-at-awscontributions-support-and-engagementarc213)
