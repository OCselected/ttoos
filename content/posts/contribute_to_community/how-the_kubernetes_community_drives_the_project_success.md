---
categories:
- 开源
- 感悟
date: 2017-03-03T19:57:37+08:00
description: "Kubernetes 如日中天，网易、百度、京东等等互联网公司均采用了这样一个优秀的框架，然而距它发布1.0版本还不满2周岁。而能够在残酷的竞争中脱颖而出，不仅仅是优秀的技术，因为从项目启动就非常注重社区的运营，这是区别于过去Google的如Android、Chrome等项目的。如果你很好奇，不妨跟随笔者来总结一下K8s社区的用心经营。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: Kubernetes 之所以成功的背后神秘力量
url: ""
---

## 引言

Kubernetes 的出现，一扫 Google 过去对于开源项目的“矜持”，相比于那些几乎是 Google 一家独占的开源项目：Android、Chrome等，可谓是一缕清风。

立即吸引了众多的开发者、商业公司、学术界的青睐，大家奔走相告，自1.0发布后，不到短短两年的发展，就大量的被应用于生产环境，如京东、百度，甚至是云计算的服务，如网易、Google的容器服务。

> Kubernetes 能有今天，绝非仅仅是依靠技术，我们认为更多的原因是因为社区的驱动成就了 Kubernetes 如此杰出的今天。

>                                          --Gogole 工程总监 Chen Goldberg

这些成功背后主要的驱动力————来自社区的力量！

## Kubernetes ，一些数据

Kubernetes 是GitHub 上的顶级项目，围绕它衍生的项目超过3000多个。下面这张Chen在演讲时使用的Slide图片充分的说明了 Kubernetes 所取得的成绩：

![](https://www.linux.com/sites/lcom/files/styles/rendered_file/public/chen-goldberg-kubernetes.png?itok=WM9rKiGa)

### 一些应用的案例

Kubernetes 是 Google Container Engine 的支撑技术，Azure、AWS 均支持，京东前几日发布了切换到Kubernetes平台的使用经验，百度的人工智能后端支撑技术也是使用的，同样提供容器即服务的网易云、腾讯、去哪儿等等。

Kuberenets 以其卓越的集群理念和对于应用的高可用包装，无与伦比的灵活性征服了很多工程师，也解决了很多的令人头痛的运维问题。然而，和Google过去的开源项目相比，Kubernetes 有了更加完善的生态圈：

![](https://raw.githubusercontent.com/OCselected/ttoos/master/content/public/commiunty_contributor_growth.png)

## 上述情况之所以能够发生背后的驱动力

### 特别兴趣小组

说起特别兴趣小组，在Linux社区发行版，如Fedora、CentOS等社区是很常见的，主要是因为操作系统涉及的面比较广，不像一个应用那么单一，比如Fedora社区的特别兴趣小组分为：艺术、翻译、ISO制作、打包等等。

然而，Kubernetes 从一开始就定下来基调，可以运行在很多的基础设施平台中，如公有云AWS、GKE，操作系统Fedora、CentOS，开源基础设施云平台OpenStack等。那么根据不同的云平台、基础设施来划分出不同特别兴趣小组，实在是明智之举。既能满足让有相同背景和需求的人聚在一起讨论，又避免了因为底层的环境不同而增加无谓的争吵。

Kubernetes 的特别兴趣小组，和操作系统不同之处，彼此之间是相互交织，可以相互借鉴的，当然也没有去将GitHub上的仓库给按组给分离了。

社区的运转都是基于这些特别兴趣小组的，功能特性由他们讨论而定，开发路线策略也是他们规划，他们发布版本是将存在的问题的归类，作出重大决策。

这样的兴趣特别小组，还能体现的优势是，随着社区的日渐扩张，分布式的策略渐趋明朗。

### 高度的透明度

与分布式理念，相辅相成的是社区的高度透明！通过在GitHub的仓库的开放性，以及特别兴趣小组确保了一致的步调，能够让新加入的成员赶上进度。项目管理工作组会审核所有的功能项，标记新的突破，确保特别兴趣小组很好的工作在一起。

尽量使所有的事情在一个页面上大家都可以看得到！

这是开源社区、项目经营的最为关键的！保持所有的讨论过程、决策过程、审核过程都是开诚布公的，这对于社区的健康程度一个非常重要的考量。时间正面，Kubernetes做到了这一点。

### 分享、学习的文化

一个不争的事实是：我们都处于一个新技术全新的未知领域，就Kubernetes所能够做到的，相比于可能做到的相差悬殊。我们每个人不可能知道所有，这个世界的知识和变化超出了个人的能力所掌控，合作的前提就是分享和相互学习！而这也恰是开源的根本所在，也是开放式创新所倡导的根本。

让我们彼此分享、共同进步！持续改进，而这不就是科学的真正精神之所在吗？

### 社区的良性发展

Kubernetes 相比于Google过去的开源项目，没有由公司出面来建设，如Chrome、Android等，而是捐赠给了CNCF——Linux基金会下属的云原生计算基金会，这样的举动更是显示了建立生态的决心，以至于社区的发展超乎想象：

![](https://raw.githubusercontent.com/OCselected/ttoos/master/content/public/commiunty_static.png)

## 来自Google高层的激情

说起 Kubernetes 社区，不得不提一位举足轻重的人物，她就是 Chen Goldberg，Google的工程总监，主导Google容器服务和Kubernetes项目。对于容器和Kubernetes， Chen 在 [Google的官方站点](https://careers.google.com/stories/goldberg-cloud-containers-kubernetes/)有着非常隆重的诠释：

1. Chen 在当时首次接触到 Kubernetes 项目组的人，就被深深的吸引，无论是才华、性格、还是相处。而且坚定开源路线！她感觉找到了归属。
2. Google 非常重视开源，认为这是创新和卓越技术的非常好的途径。
3. 开源绝非是仅仅将代码开放，重视社区的经营。
4. 容器和容器编排技术，将极大的改变现在软件的运行方式。这非常的cool。
5. Google拥有将近900人的团队在为Kubernetes作贡献，而且都是非常开心，并充满激情的工作。非常享受开源！以及开放的合作。

> 注：本文的灵感，主要来源于Chen Goldberg 在 CloudNativeCon 上的演讲分享。
