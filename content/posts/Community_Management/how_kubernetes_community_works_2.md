---
categories:
- 开源
- 社区管理
date: 2018-02-06T22:18:44+08:00
description: "生产关系能否决定生产力？为什么这个社会需要管理？Kubernetes 是如此的成功，它的开源治理和技术架构是有着非常密切的关系的。"
keywords:
- Open Source
- Culture
- Community Management
tags:
- 社区管理
title: "Kubernetes 社区是如何运作的系列之二——康威定律和SIG"
url: ""
---

## 康威定律（Conway's law）

随着信息技术的发展，以及现实的IT公司的成功，如Amazon、Netflix，以及云计算的普及，微服务的实践正在走向很多传统用户，然而，实施微服务的过程中，和DevOps的理念一样，人们发现并非仅仅是技术所能够解决的。还要涉及到组织架构。于是，伴随着微服务的发展，一位很少被人提及的科学家被推到了前端，也是被人忽视而尘封的科学家。

时间要拨回到1967年，Melvin Conway 以独特的视角观察到一个组织的组织结构会对其开发的系统有很大的影响。并撰写了["How Do Committees Invent"](http://www.melconway.com/research/committees.html) 这样一篇影响深远的论文，其中被人们广为知道的结论：

> 设计系统【这里也不仅仅是指信息系统】的组织，其产生的设计和架构等价于组织间的沟通结构。

该定律基于这样一个推理：为了能够让软件之间的模块相互作用，软件的撰写者们必须相互频繁的进行沟通，因此，系统的软件界面结构将会反映出打造此系统的组织的社会边界，要知道跨边界的沟通是比较困难的。Conway 定律的目的是试图说明这是蛮常见的社会学现象，尽管不够十分的严谨。

但是，Conway 的论文当年还是被HBR拒绝了，理由是没有证据可以证明他的推理的正确性。但是，这并没有淹埋这位才华横溢的结论。就在2015年，来自哈佛商学院和 MIT 的研究团队，用实际的研究和调查，证明了 Conway 定律的普适性，在其发表的论文：[“探索产品和组织结构之间的二元性：对”镜像“假说的检验”](http://www.hbs.edu/research/pdf/08-039.pdf) 中得到的结论是：**软件产品的模块化特征，往往是由分布式的团队所开发，而后者也更加的倾向于开发出模块化的产品。** 该团队分析对比了十几款开源和闭源软件，其中包括大名鼎鼎的Linux Kernel、MySQL、GNUCash等，以及Solaris、XNU、BerkeleyDB等，进而得出的上面结论。

不过值得庆幸的是，近几年，人们已经开始渐渐的理解组织结构和他们要开发的软件之间的这种微妙的关系，并且为了成功的开发出软件，开始对组织进行相应的调整。业界以亚马逊和Netflix为其中翘楚，如前者以“二块披萨”团队文化而享誉业界。

## Kubernetes SIG

如何组织社区的开发从来一直都是一门大学问，君不见开源项目五花八门、各有千秋，但是模块化是不变的宗旨。特别兴趣小组也是如此考虑的，设置特别兴趣小组是避免分层架构的限制，之所以如此设计是为了能够让开发者和社区的其他成员定期的进行聚会，也能够让人们在社区内部找到各自感兴趣和发力的地方。

我们来看下Kubernetes 目前已有的SIG：

|  SIG    |     简单描述       | 备注|
| -------------  | ------------- | -----:|
|API Machinery   | 涵盖了所有和API服务、API注册和发现、通用API CRUD语义、管理控制、编解码、转换、默认、持久层（etcd）、OpenAPI、CustomResourceDefinition、垃圾回收、和客户端程序库的一切。  |   |
|APPs   | 涵盖在Kubernetes中部署和运行应用程序。  |   |
|Architecture   | 维护和开发 Kubernetes 的设计原则，以提供必要的一致专业知识，以确保随时间推移，架构仍能保持一致性。  |   |
|Auth   |涵盖对Kubernetes授权，身份验证和群集安全策略的改进。   |   |
|AutoScaling   |涵盖集群的自动调节，集群的水平和垂直自动调节，为集群设置初始资源，与监控集群相关的主题以及收集其度量   |   |
|AWS   |维护，支持和使用AWS Cloud上托管的Kubernetes。   |   |
|Azure   | 在Azure上构建，部署，维护，支持和使用Kubernetes。  |   |
|Big Data   |涵盖在Kubernetes上部署和运行大数据应用程序（Spark，Kafka，Hadoop，Flink，Storm等）。   |   |
|CLI   |涵盖kubectl和相关工具。   |   |
|Clustr Lifecycle   |考察了我们应该如何改变Kubernetes，使其更容易管理和操作，重点放在集群部署和升级上。   |   |
|Cluster Ops   |提升Kubernetes集群的可操作性和互操作性。   |   |
|Contributor Experience   |发展和维持一个健康的贡献者社区对于扩大项目规模和发展生态系统至关重要。我们需要确保我们的贡献者高兴且高效。   |   |
|Docs   | 涵盖Kubernetes的文档，doc过程和doc发布。  |   |
|GCP   | 在Google云平台上构建，部署，维护，支持和使用Kubernetes。  |   |
|Instrumentation   |通过所有Kubernetes组件的指标，日志记录和事件以及相关组件（如Heapster和kube-state-metrics）的开发，涵盖了集群可观察性的最佳实践。   |   |
|Multicluster   | 专注于解决与管理多个Kubernetes集群有关的常见挑战以及其中存在的应用程序。  |   |
|Network   |涵盖Kubernetes的网络。   |   |
|Node   | 节点相关  |   |
|On Premise   |汇集Kubernetes社区的对Kubernetes运行的前提条件感兴趣成员。  |   |
|OpenStack   | 协调OpenStack和Kubernetes社区的跨社区工作。  |   |
|Product Management   | 侧重于产品管理的各个方面。  |   |
|Release   | 版本发布  |   |
|Scalability   | 负责回答与可伸缩性相关的问题  |   |
|Scheduling   | Kubernetes的调度  |   |
|Service Catalog   | CNCF服务的broker以及Kubernetes broker的实现。  |   |
|Storage   |  涵盖存储和卷的plugin。 |   |
|Testing   |测试Kubernetes在各种环境下运行的可靠与稳定。   |   |
|UI   |涵盖与UI有关的所有内容。   |   |
|Windows   | 重点是让Kubernetes 支持 windows 服务器容器。  |   ||

通过上面表格，我们可以看出，SIG真的是SIG，很随意，丝毫没有规律可循：

* 按照资源类型区分的如：网络、存储
* 按照功能类别区分的如：扩展性、稳定性、多集群、集群声明周期、集群运维、界面等
* 按照支持的云提供商又区别为：AWS、Azure、OpenStack、GCP、
* 按照项目角色区分：文档、产品经理、发布、测试
* 应用：大数据

这就是SIG的好处，看似有边界，然而却没有人规定边界，任何人都可以靠实际的证据来证明创建一个SIG的必要性，完全是分布式的。这样的SIG治理方式正如Kubernetes 社区经理 Sarah Novotny 所说：

> SIG 是社区治理和扩展的机制，随着Kubernetes变得越来越大，更多的人想要贡献成为可能，为了避免让Kubernetes成为一个单体的基础设施，我们希望Kubernetes的决策是分布式的。SIG就是我们的解决办法。

## 关系

Kubernetes 以特殊兴趣小组的方式来组织社区的开发和进化，和 Kubernetes 本身要解决的问题：为分布式应用提供足够健壮的平台，二者之间相辅相成。开发者和社区成员可以选择自己感兴趣的SIG，以特定的主题进行参与，如果现有的SIG无法满足个性化的想法，可以进行创建。然后，Kubernetes 自身的演化，以及容器编排本身的属性，决定着开发其组织是分布式的、决策透明的。二者相辅相成。

在开源社区的运营中，如Fedora社区，本身就是采用SIG来组织和治理的，而且是非常的成功。Kubernetes 并非是第一个采用SIG这样的方式的，而是根据自身的定位而采取了这样一种方式。审视自身的软件最终定位，然后将之分散化、模块化、标签会、个性化，以适配社区中各种类型的人才，让他们能够愉悦的、高效的、有成就的做出贡献。

康威定律的贡献并不在于它指出了系统架构和组织架构之间的关系，而是如何做才能让他们二者之间发挥彼此最大的能量，并相互产生正的影响。事实证明，Kubernetes 选择SIG又充分验证了康威定律的有效性，以及组织和系统之间的强相关性。

下篇文章我们来谈谈SIG治理的一些细则，从沟通、代码、协调、记录、角色等全方位角度来了解SIG的科学性和合理性。

## 参考资料

1. [The Real Success Story of Microservices Architectures](http://blog.christianposta.com/microservices/the-real-success-story-of-microservices-architectures/)
2. [揭开康威法则的神秘面纱](https://www.thoughtworks.com/insights/blog/demystifying-conways-law)
3. 康威定律维基百科 https://en.wikipedia.org/wiki/Conway%27s_law
4. SIG 和 Kubernetes 社区 https://thenewstack.io/sigs-and-the-kubernetes-community/
