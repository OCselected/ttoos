---
categories:
- 开源
- 基金会
date: 2020-04-14T12:34:57+08:00
description: "市面上流行一种说法：开源是为了打造生态，那么我们就不妨来探究一番商业公司将开源项目分离公司，进而成立基金会的做法典范 CloudFoundry 为例，这篇文章会采用较为新的写法，想到哪里写到哪里，没有结构，没有顺序，甚至没有逻辑，但主题从一至终。"
keywords:
- Open Source
- Culture
- Reading
- News
- foundation
tags:
- 基金会介绍
- 开源之道
title: "商业公司主导下的非营利开源软件基金会之 ———— Cloud Foundry 基金会简史"
authors:
- 开源之道
---

## 为什么 OpenShift 没有成立基金会？

平台即服务（PaaS)，在容器之前的时代，竞争格局还是非常激烈的，尤其是中间件的市场，那么为什么 Spring 选择了成立基金会，而Redhat 却没有，而是自己的成立了开源共同体。其中滋味谁能体会？

基金会解决的是信任问题，这才是一个根本的问题，要让一个漂泊在江湖的个人去无缘无故的信任一个虚拟的团体，这不符合人的本性，也不符合社会常理。但是，当一个机构或组织已经赢得了信任，那么就毋需第三方站出来为之作担保。基金会的功能正如资本社会的银行一样，是一个确定信任关系的。

Cloud Foundry 在技术上当时使用的是BOSH 架构，支持多种开放框架，功能上非常的优越，但是为了获得共同体的支持（此共同体指的是整个开源技术栈形成的开源共同体），成立了501(c)(6) 基金会。

那么在PaaS平台上的角逐，同样适用的开源战略，这两家公司或这两个项目背后都走的是何种考量？究竟在开放的世界能够共存多久？我们不妨带着这个问题，来回顾一些Cloud Foundry 的发展。至于 OpenShift，这个让IBM 花了340亿美元的豪赌，开源之道会在未来给大家介绍红帽之道的时候，会挖一些内容的，敬请期待。

## IBM  为何对 CloudFoundry "始乱终弃"

在1998年的时候，IBM 非常精明的将WebSphere的web服务器采用 Apache HTTPD，从而在商业上取得了巨大的成功，在云计算崛起的时候，在2014年 IBM 推出了 Bluemix，在PaaS平台的服务上采用了 CloudFoundry，而当时的 CloudFoundary 是事实上的标准，除了IBM 还有很多大厂采用 CloudFoundry 作为 PaaS  服务的基础设施，尤其是先进的  BOSH 架构。

但是，几乎同时，Docker 的出现，以及随后的编排项目，Kubernetes的迅猛发展，彻底改变了这一结局，随着[CNCF](posts/foundation_introduce/how_cncf_works)的神话般的崛起，尤其是Google 和红帽在Community上的联姻，彻底地改变了整个PaaS 格局，云原生至今仍是炙手可热的云计算敛财的最佳技术手段。 

毫无疑问，红帽的基于Kubernetes及相关LandScape 开源项目下的OpenShift 成为了私有和混合云的胜出者，红帽在Kubernetes 的开发中，类似于Kernel的位置，不是最突出者，但是处于非常关键的贡献者行列。

随着，IBM 以340亿美元将RedHat收购，IBM 彻底的抛弃了CloudFoundry，拥抱OpenShift！

## 什么是 Linux 合作项目？

如果你注意一下基金会的宗旨的话，基本就能概括出这个基金会的主要任务了：

> **Build sustainable ecosystems around open source projects to accelerate technology development and commercial adoption. **

Linux 基金会并没有将自己固步自封到 kernel 这一个圈子里，所有人都希望复制Linux项目的成功，很显然，同样的条件几乎无法再现。但是，从来没有人放弃过对其成功的元素停止过探索。

那么Linux究竟有什么成功的要素可言？Linus 的工程师和纯粹的技术魅力？还是GPL v2 的法律约束所在？还是OSDL思想的延伸？基本上现在还处于隐性的知识，即使是从这几年Linux基金会发布的研究刊物来看，OSDL的指导原则更为有力一些，包括TODOGroup 编写的企业开源指南系列（开源之道精心翻译版），均是告诉企业参与到开源中来能够获得什么，如何参与等，并没有像[Apache way](posts/foundation_introduce/how_apache_works/)那样的哲学原则。

如此推论下来，Linux的合作项目就比较简单了：

* 背后有公司支撑
* 不排斥商业化
* 新兴领域: AI 、IoT、block chain等
* 将专利、著作权等愿意全付交付给Linux基金会

所以，每年Linux基金会都会在全球各地搜罗开源项目，而且成绩斐然！

## 什么是Linux 子基金会？

从Linux 基金会的网站上是看不出来项目和子基金会的差别的，也就是说从Linux基金会的角度来讲，无论是将项目托管在Linux基金会下，还是成立子基金会都是一视同仁，形式上并不太重要，比如Ceph基金会、TARS基金会，除了自行寻找会员之外，也可以进行项目的托管，但是相关的知识产权、商标等内容将由Linux基金会进行管理。当然，如果基金会发展到一定程度，如更多的捐赠进入，那么独立出来再成立单独注册的基金会也是没有问题的，比如我们这篇文章的主要内容：CloudFoundry 就是最初的定向子基金会，后来独立注册为501（c)（6），但是名义上仍然属于Linux基金会，合作仍然非常的紧密。

在没有很深入的了解具体的工作之间，我们可以暂时以最粗浅的方式来理解：

1. 组织架构角度，无论是项目还是子基金会，其实在共同体方面是一致的，Linux基金会并不会干涉太多，会议TODOGroup的方式做一些指导和帮助。
2. 法律方面，这是非常重要的，Linux基金会和我们前面介绍的[SFC](posts/foundation_introduce/introduction_of_software_freedom_conservancy/)、[SFLC](posts/foundation_introduce/introduction_of_software_freedom_law_center/)等就没有太大差别了，也就是说，最终的规则都是Linux基金会来帮助打理和托管的，保持中立毕竟是个法律问题，不是什么道德、誓言的问题。
3. PR方面，可以联合起来一起搞。也可以独立搞起来。
4. 资助方面，这点有所差别，子基金会可以独立拿赞助和收年费，而项目则只能通过Bridge项目获得捐赠。

## CloudFoundry 基金会年报解读

一般情况下，从基金会的年报上可以看出来发展的相关态势，也可以看出相关的成绩。比如笔者曾经对OpenStack 的年度报告吐槽过，基本上什么都没有说，而是说了几个项目的介绍情况，非常的敷衍。其实，年度报告最重要的共同体的增长，以及相关的开销。我们看到CloudFoundry在2019年的报告中大体内容:

1. 贡献者、用户、开发者等情况，以及版本发布的状态
2. 市场运营：发表文章、白皮书、调查、技术峰会、在线小型会议等
3. 基金会本身的动作
4. 营收状态

其中第二部分占据了很大篇幅，而且引用了大量发布在IT技术媒体上的文章，这点虽然有点无聊，但是说明了基金会的主要功能之一: 为项目造势！

我们可以关注一下其收支状况，这在Linux基金会会下是颇为罕见的，因为从来没有看到过Linux 基金会的收支状态，是没有到审查的年限？还是什么情况？总而言之，目前Google不到，CloudFoundry 算是例外：

![](images/cloudfound-financial-2019-report.png)

一年接近一千万的流水，确实是可以做很多事情了。不过从 Compensation 这样来看的，雇佣专业人才来运营整个基金会的运转还是不小的书目，接近全部收入的1/4。

一家基金会的运作，不次于一家小型公司的难度！

## CloudFoundry 母公司 Pivotal 诞生和消失的历程

我们先来看看这家公司的大事记：

* 2013年3月，在VMware投资者大会上，VMware和EMC联合宣布将成立Pivotal公司，由 VMware 前 CEO 保罗·马瑞兹出任新公司首席执行官，并宣布将专注开源 PaaS 和大数据应用的Cloud Foundry、Greenplum等业务。
* 2013年4月1日，Pivotal公司在美国正式宣布成立，开始作为一个独立的实体运营。
* 2013年4月24日，Pivotal宣布获 GE（通用电气）1.05 亿美元美元的投资。
* 2014年5月5日，在美国拉斯维加斯举行的2014年EMC World全球大会上，EMC宣布推出EMC联邦战略，联邦成员包括VMware、Pivotal和RSA。
* 2018年4月9日，Pivotal计划以每股14美元至16美元的价格发行3700万部A类普通股，最高融资5.92亿美元。在纽约证券交易所上市，交易代码为“PVTL”。
* 2019年8月22日 VMware 以27亿美元收购Pivotal

具体的资本，开源之道是缺乏这方面能力解读的，但是Pivotal 是VMware 将之利用开源战略来运作是再显而易见不过的了。公司将项目开源，希望获得全球社会的认可、信任、参与，人为有意的去做，是最明智不过的了，Pivotal 从VMware分离再回归合并的过程，已经完成了一项技术盈利的使命，在一个周期内，而且合并之后成立全新的业务 Tanzu。

这是一个将开源的供应链当做商业战略的非常成功的例子，VMware收购SpringSource是另外一个更成功的例子。降低用户的总TCO ，然后从主营业务中盈利，这在供应链中应该是个常见的打法，比如经典的案例：吉列剃须刀。

## 技术变化与项目品牌：CloudFoundry 和OpenShift 的故事

我们先来说说 CloudFoundry，该项目的原始技术，来自于 VMware 在2009年由一个小团队所研发，其实最初的项目名叫做：B29，名字看起来毫不起眼。而真正叫做 CloudFoundry 的项目，也是同名的创业公司，创始人叫做Chris Richardson，是可以运行在AWS  EC2上的PaaS 平台，由Java语言编写。 CloudFoundry 公司随后被一家叫做 SpringSource 的公司收购了，我们知道SpringSource 是做 Java 轻量级的开放框架的，在2009年 SpringSource 又被VMware 收购了，后来的结局就是：CloudFoundry 仅仅是原来项目的品牌名，VMware 放弃了B29这个听起来毫无生气的名称，但是原来的技术架构都被放弃了，B29更改为CloudFoundry！

OpenShift 最初是红帽内部发展出来的项目，由Ruby on Rails框架开发，虚拟机则是红帽支持的KVM，这可以说是一个失败的项目了，采用的人并不多，2013年，Docker 横空出世之后，红帽以其独特的敏锐度，全面转向这个全新的技术，随后拥抱Kubernetes，并且OpenShift 过去全部的架构都进行了重写和重构，语言也更改为Go，也就是说原来的技术被彻底抛弃，而只是沿用了一个OpenShift的品牌名，无独有偶，oVirt 也经历的同样的故事。

## BOSH 的成功，与整合Kubernetes的进退维谷

bosh 发起的时候，还是虚拟化IaaS 时代刚刚降临的2010年，当年也是PaaS 平台逐鹿的时代，BOSH 以其针对多平台虚拟化和云平台的架构设计，而迅速引领了整个市场：

![](https://upload.wikimedia.org/wikipedia/en/a/a8/Bosh-architecture.png)

不过要等到 Docker 的母公司在PaaS方面无所建树之后而无意之下开源的Docker，以dockfile几乎在一夜之间就征服了所有的开发者，紧接着Kubernetes横空出世，bosh 的优势不仅体现不出来，兼容VM和纯粹容器还是有太多的复杂性。

然而，bosh作为引擎，尽管和Kubernetes有很多竞争的地方，但是像所有的技术一样，bosh也有所不甘。那么到今天，所发起的兼容Kubernetes项目：

* 代号：Eirini 的项目，开发速度迟缓
* Garden 团队一直假装很努力
* 兼容带来了无比的复杂性，重构的难度实在太大

## CloudFoundry 之道（开源项目方法论）

熟悉非营利基金会和开源共同体之间关系的读者一定明白，基金会对于共同体的治理是不闻不问的，最多是像 Apache 基金会那样在项目的孵化阶段，有Mentor 给予一些指导，诸如合规、共同体建设等建议，大多数的基金会是不干涉任何开源项目方面的事务的，如技术、产业、共同体、沟通决策等，CloudFoundry 作为由上至下的基金会，在这方面做了一些努力：

* 对 Cloud Foundry 感兴趣的任何人都可以关注其邮件列表和 Slack 及时聊天。
* Cloud Foundry 项目是托管在GitHub上的，开发者或任何人都可以提交issue和PR ，当然也可以保持关注：点Star，保持监视（watch）。
* 每个项目都有一个产品负责人。产品负责人会负责所有的issue等事项，及时的进行回复。
* 共同体咨询委员会（Community Advisory Board）每月定期举行例会，所有的产品负责人汇聚一堂，报告更新状态，以及允许任何人的提问。任何人都可以参加。
* 采用机会均等原则，任何都可以提交PR，但是成为认可的贡献者，还是需要一些其他条件的，CloudFoundry 有着非常明确的路径。
* CloudFoundry 为潜在的贡献者提供了训练场地：Dojo（来源于日本空手道的道场），要提前申请，并进过一定的测试，测试通过则会有丰富经验的CloudFoundry 项目人员作为指导培训6周，然后就可以了。（有点类似公司的实习）。
* 成为正式的贡献者，就可以为Cloud Foundry 工作了，承诺期为一年。

更多内容，请参考CloudFoundry的网站。

大家可以看到，这个方法论指导非常类似于一般商业公司实习的，和自由/开源软件项目还是有很大差别的。是的，没错，这样的做法，在金钱驱动的基础上是非常合适的，这也说明了基金会的金主非常棒，但是持续性能保持多久，为什么不采用商业公司的做法来做，而是借着非营利基金会的名义来建设所谓的类似消费者/粉丝共同体的做法，这个我们不得而知。开源之道的责任是负责把这类事情给区别开来。

## CloudFoundry 未来何去何从？

2020年4月7日，CloudFoundry 基金会宣布其执行董事Abby Kearns 离职，具体原因没有透露，跑去Puppet 做CTO 去了，不过我们可以从外部的发生的事情来想想其中的复杂性。正如上面所介绍的 Pivotal 已经消失，VMware 将之重新合并，那么完全由Pivotal 所掌管的 CloudFoundry 经历一些人事上也是见惯不怪。我们不妨想一下CloudFoundry的未来面临的问题：

1. 整合 Kubernetes的进度，决定其能否和市场上其它平台的竞争能力。

2. 基金会董事会和下一任的执行董事，在基于1的情况下也变得朴素迷离。

3. 共同体的发展会遭遇瓶颈，这是一个非常依赖具体技术实现的共同体。

4. VMware 是否会放弃？取决于VMware 新的产品线的变革力度。

5. 失去 IBM 等钻石赞助商，未来的经费和持续性将面临颇大的挑战。

另外，CloudFoundry 所效仿的OpenStack，也几乎面临同样的囧境，这也是否代表着一种过分的商业化炒作的恶果？基金会被误读的失败教训？我们还要拭目以待，还需要几年的时间才能得出结论。

## 开源之道后记

关于开源软件非营利基金会的相关学习和调查，以此篇文章结束，此次专题研究历时两月有余，算上所读的书籍和资料，算是一次非常成功的知识探索，对于非营利基金会有了更加深入的认识，也对其工作本身有了很好的理解。希望日后能够以更加形象的方式和大家表达出来。以供大家可以快速的了解和利用，也希望帮助到愿意到中立的非营利基金会的人们，尤其是本土自由/开源软件的发展，如果有人通过这一系列的文章获得什么，悟到什么，那真是作者的万幸。

Cloud Foundry 基金会不是第一个商业公司主导的非营利软件基金会，也不会是最后一个，不是最成功的，也不是最失败的，它是在软件产业发展的历史上不可或缺的，也是开源供应链阐释的必然，功过自有后人评价，重要的是多少开发者、工程师在其中受益，帮助过企业解决过什么问题，这些问题是否是让人类更加的幸福。

## 参考资料

1. Game On - Pivotal Announces the Cloud Foundry Foundation https://www.forbes.com/sites/benkepes/2014/02/24/game-on-pivotal-announces-the-cloud-foundry-foundation/#5a4359a62f42
2. Cloud Foundry Foundation Matures--Becomes A Linux Foundation Collaborative Project https://www.forbes.com/sites/benkepes/2014/12/09/cloud-foundry-foundation-matures-becomes-a-linux-foundation-collaborative-project/#56fcc4bd452b
3. Foundation Positions Cloud Foundry PaaS As Enterprise Standard https://www.enterpriseai.news/2014/02/25/foundation-positions-cloud-foundry-paas-enterprise-standard/
4. Cloud Foundry renews its focus on developer experience as it looks beyond the enterprise https://techcrunch.com/2020/04/30/cloud-foundry-renews-its-focus-on-developer-experience-as-it-looks-beyond-the-enterprise/
5. Cloud Foundry Foundation 成立 https://www.infoq.com/news/2014/03/cloud_foundry_foundation/
6. Review: Cloud Foundry brings power and polish to PaaS https://www.javaworld.com/article/2455358/review-cloud-foundry-brings-power-and-polish-to-paas.html
7. The Cloud Foundry Way: Open Source, Pair Programming and Well Defined Processes https://www.cloudfoundry.org/blog/the-cloud-foundry-way/
8. Cloud Foundry 基金会年度报告 https://www.cloudfoundry.org/cloud-foundry-annual-reports/
