---
categories:
- 开源
- 社区管理
date: 2018-02-05T21:54:47+08:00
description: "开源社区治理，正在逐渐的成熟，Linux、CNCF、OpenStack、Apache基金会等俨然成为软件业的中流砥柱，本土是不是应该潜心学习这些先进的管理/治理方式？精英制还是完全民主化？是不是应该以实际行动和理性思考来作出正确的判断？"
keywords:
- Open Source
- Culture
- Community Management
tags:
- 社区管理
title: "Kubernetes 社区是如何运作的系列之一——哲学及治理"
url: ""
---
## 引子

在2017年，关于容器的管理和调度平台，战火的硝烟渐渐的平息，Kubernetes 以压倒性的优势占据了这个细分领域的霸主，如下图来自 thenewstack 的调查：

![](https://storage.googleapis.com/cdn.thenewstack.io/media/2018/02/732c680a-hecht-redhat-coreos.png)

如果仅仅从纯技术的角度而言，Kubernetes 和其它平台是半斤八两，处于伯仲之间，那么在社区的运营和赢得人们信任的方面，Kubernetes绝对是No.1，没有哪家能够相提并论。即使是Docker本身拥有无数拥泵的情况下，是容器的默认事实标准，也无法抵挡透明、开放、协作的Kubernetes社区的魅力。开源之道在[Kubernetes 之所以成功的背后神秘力量](posts/contribute_to_community/how-the_kubernetes_community_drives_the_project_success/) 进行过专门的表述。

在上个月的中旬，Software Engineering Daily 的[Jeff](https://softwareengineeringdaily.com/author/jeff/) 撰写了一篇非常棒的文章：[Kubernetes 的“下沉”](https://softwareengineeringdaily.com/2018/01/13/the-gravity-of-kubernetes/)，意指Kubernetes已经像Linux在单机操作系统的地位一样，成为分布式系统平台的默认选择。成为了分布式系统事实上的标准。抛开技术的因素，我们不得不承认Kubernetes在社区的运作成功之处。这次我们就利用整个2月来论道一下Kubernetes的社区运作。

![](https://softwareengineeringdaily.com/wp-content/uploads/2018/01/pasted-image-0.png)

## 简单的历史回顾

2014年6月10日，Kubernetes [正式对外开源](https://cloudplatform.googleblog.com/2014/06/an-update-on-container-support-on-google-cloud-platform.html)，代码托管在GitHub上，2015年7月21日，Kubernetes 1.0 正式发布，伴随着这个版本的发布，有一个重量级的全新的社区运营模式出现——和Linux基金会共同组成云原生应用基金会，Kubernetes 成为该基金会下第一个种子技术。并且联合了业内的很多公司如CoreOS、RedHat、Intel、Docker等。

CNCF 是一种全新的模式，由Linux基金会来运营，旨在解决云原生应用的可移植性，避免厂商锁定。

2年多过去了，Kubernetes 社区已经成长为一颗”参天大树”，不仅线下会议火爆兴旺，而且线上的活动也是非常的活跃。具体详情可以看Google开源策略主管：Sarah Novotny 在KubeCon北美2017上的主题演讲[Kubernets社区](https://www.youtube.com/watch?v=-5R_GbGg1nI)。

## Kubernetes 社区的总则

Kubernetes社区坚持以下原则：

* 开放： Kubernetes 矢志不移的、始终如一的都是一款开源项目。可以参考仓库准则，所有的贡献者都须签署[贡献者许可协议](https://github.com/kubernetes/community/blob/master/CLA.md)。
* 相信文明的力量：欢迎任何人，也尊重任何人。具体请参考[CNCF 的行为准则](https://github.com/cncf/foundation/blob/master/code-of-conduct.md)
* 保持透明和所有人都可访问：所有的工作和协作都公开进行。
* 择优原则：想法和贡献根据技术优点来采纳，且要满足项目的目标、属于Kubernetes的技术范畴、也要与设计原则保持一致。

## Kubernetes 治理方式

Kubernetes 社区的治理安排有三类主要的工作组：

1. 特别兴趣小组，SIG
2. 工作组，WG
3. 委员会

### SIG

Kubernetes 的分布式架构，决定了其工作可以模块化的同时进行，按照不同的功能或设计进行了一定的划分，如架构、自动伸缩、集群生命周期等。

（开源之道将会在系列之二，专门解释SIG对于Kubernetes的重要性，特别从软件工程的角度来阐释。敬请期待。）

### 工作组

这类似于一个SIG的临时缓存区，或者说孵化区，在社区活动中，难免会有一些人是突发奇想，或者是比较小众的不起眼的观点，等等，先成立这么一个工作组，比如目前中国移动、华为等参与的一个叫做“政策规则”的工作组，它是临时的，可以说是随时解散的，创建时容易，解散时也不会影响到谁。

### 委员会

有一些重大的主题，比如安全或行为守则这类事情，就需要严肃、谨慎的去对待，我们知道SIG是开放式的，是任何人都可以加入的自愿组织。但是委员会就不是对所有人开放的，需要有一定的资格，或者是考核，对Kubernetes有积极的贡献方有资格加入。

谈到委员会，我们还必须说一下Kubernetes的指导委员会，这是在项目成立之初由业内权威人士所组成，后来逐渐的退出，然后交由社区来进行[选举](https://github.com/kubernetes/steering/blob/master/elections.md)。此指导委员会的使命就是为Kubernetes的治理制定流程，具体可参考其[章程](https://github.com/kubernetes/steering/blob/master/charter.md)。

那么委员会是指导委员会根据实际需要来进行组件，持续时间没有任何的硬性规定，委员会的成员由指导委员会决定。委员会也有自己的章程并会选出一名领导，定期会向指导委员会进行书面报告，也会按照章程的规定向社区公开报告。

## 总结

Kubernetes 有着非常成熟的治理方式，也很恰当的处理和基金会的关系，比如我们知道Kubernetes是CNCF下的种子项目，CNCF提供一些必要的标准，然后Kubernetes项目旨在满足CNCF毕业标准，然而Kubernetes自身的社区是完全自治的。这样的话，Kubernetes 就是一个纯粹的技术社区，秉着公开、开放、文明、进化论的哲学思想或总则，以解决程序健康、稳定运行为目标，努力成为分布式软件平台。
