---
categories:
- 开源
- 工程
date: 2023-01-15T16:35:18+08:00
description: "我们常常听到有部分人持‘仅使用开源’的观念与行动，那么他们最后的结果怎么了呢？"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 开源工程
- 开源之道
title: "使用开源与技术债务及其解决(附电子书下载）"
url: ""
authors:
- 「开源之道」·适兕
---

## 常见的开源项目发布后，使用者们的对话

### 场景1:

> 开发者A：“上游共同体最近发布了最新版本，有一些新的改进和功能。“
> 开发者B：”都有哪些新增功能和优化？“
> A：”去年到现在我们所修改的，上游都做了。“
> B：”哪我们git upstream pull岂不是到处都是冲突？“

### 场景B：

> 管理员：“xx Linux发行版，最近更改了发展路线，以适应日益加速的数字创新。”
> 公司总裁：“那接下来的升级，我们该怎么办？”
> 管理员：“没办法，需要自行维护，或者做好更新替换。”
> 公司总裁：“早知如此，还不胜购买专业的服务。”


![](https://imgs.xkcd.com/comics/troubleshooting.png)

### 场景X

读者根据自己的经验，尝试描述一下自己的感受。

## 开源是不是上线就万事无忧了呢？

软件的特性之一就是构建[1]：没有终点，只有持之的变化以应对和解决当前的问题， 如果您对这个理解有疑惑的话，去哪些超过20年的老旧小区楼里看看就明白了，新的设施爬满了外墙：网线、暖气......开源是软件的一种重要的形态，构建而永无止境这个属性对于开源软件来说仍然有效。

这样的话，当一位开发者或管理员从开源站点上下载到项目的可运行的程序或源代码时，意味着会采取试图保持主动的决策，其中最大的两类便是：

1. 从源代码构建，然后从此自行维护这个下载到的版本
2. 直接采用上游的二进制程序，放弃构建

这两种方式都是错误的做法，一种欠下债务的不负责任的常见操作。第一种情况，其实是将软件工程中最为耗费资源的阶段：维护，全部由自己或自己所在公司来承担，如果是超过百人的项目的话，这个债务将是巨大的，很可能将整个的团队置于救火状态。第二种就显而易见了，一旦部署即面临升级问题，一旦升级还会遭遇需求和不兼容问题，除非系统长时间停滞，业务没有变化，否则，业务便会陷入抓狂。

如果你看到过各类公司的软件仓库的话，会看到各种“横尸遍地”的开源项目静静的放在哪里。聪明的管理者会关注这些仓库的价值，将之作为精细化的财务来管理清晰起来，进而挽救自己的损失，愚蠢的管理者，则不会发现这些，而是任由无知的开发者继续招聘维护人员，美其名曰创新，直到无法承受。

## 何为开源的技术债务

在谈开源的技术债务之前，我们先来了解一下技术债务，据**Thoughtworks**洞见的一篇文章[2]称：

> 在1992年Ward Cunningham在博客中提出技术债这个概念后，技术债这个比喻因完美地表达了遗留技术问题的影响，被一直沿用至今，且一直是行业内关注的焦点。如今各大企业为了建立持续交付的能力，快速响应市场的变化，也纷纷开始提升研发效能，技术债更是不可忽视的关键因素。

![](/images/tech-debt-cause-by.jpg)
(图片源自MartinFowler的博客：TechnicalDebtQuadrant)

这个定义非常的清晰，也就是说我们在构建系统时，总会因为各种原因，无法做到面面俱到，而总是会遗留点什么，承诺会在未来偿还。但是事实上，技术债务的解决从来不止技术本身：

> 为了保证产品持续的竞争力，上面几点只是方法，如果没有成本上的投入，只能沦为空谈。从整个产品团队，都要提升对技术的正确理解，技术的构建并不是一劳永逸的，是需要不断的成本投入来维护的。

我们都对自己所从零构建的系统信心满满，似乎是一种尽在掌握的感觉，但是，软件系统从来没有停止过演化，这是技术的本质[3]，随着全球化的进展，数字化转型的加速，对于信息系统的复杂性进一步提高，分工也进一步细化，例如云原生的全景图：

![](https://landscape.cncf.io/images/landscape.png)

也就是说，信息系统的创新要大量依赖于开源的项目和系统，这就是说，技术债务不仅体现在正在开发的业务系统，也意味着要去洞察业务系统所依赖的基石：开源[4]。那么留给企业的最佳决策就是，要重视开源这只房间里的大象，否则，被挤掉的是自己。[5]

## Upstream first （上游优先）

笔者一直在倡导  Upstream first ，去年还专门撰文[6]来说明这是开源布道者的基本素养，从现实生活、病毒防疫、社会控制、工程学等角度探讨了上游的诸多益处，其中也介绍了英文版的《技术债务与开源开发》这份几年前的绝佳小书，2022年底，终于有机会和 LFAPAC 译道师团队[7]合作将之翻译为中文，期望能够让更多工程师、企业高管理解这一重要的范式转变。

## 锦囊妙计：《技术债务与开源开发》

来自Linux基金会的 Ibrahim Haddad 博士[8]，将自己在企业十多年的开源项目经验分享给大家，如何丝滑的解决和开源相关的技术债务。请点击下面图片，抵达下载页面。（公众号则请从“阅读原文”下载）

[![](/images/the-face-of-os-debt-and-developement.png)](https://training.linuxfoundation.cn/downloads/596aaa96562f6c545899b26bf3f63d86)

## 参考资料

1. 《开发者思维：技术如何驱动企业的未来》，[美]杰夫·劳森，中信出版社，2022-3-1
2. 技术债的前世今生，  https://mp.weixin.qq.com/s/KFAv3lR12BFW2RqjItUi7Q ，最后访问时间：2023.1.16
3. 《技术的本质：技术是什么，它是如何进化的》，布莱恩•阿瑟（Brian Arthur）， 浙江人民出版社，2014-4-1
4. 《Hello, Startup：A Programmer's Guide to Building Products, Technologies, and Teams》，Yevgeniy Brikman，O'Reilly Media，2015-9-25
5. 《深入理解开源项目办公室 中文版》，https://training.linuxfoundation.cn/downloads/d1895d027c54a9e56ff41d428289b9ea ，最后访问时间：2023.1.16
6.  [LF APAC 开源布道者分享系列之十一：上游思维与上游优先](/posts/lfapac-evangelist-sharing/upstream-first-and-be-upstream-in-os/)
7.  https://mp.weixin.qq.com/s/LhUZcKLR-KxDdEeBh3utpg ，最后访问时间：2023.1.16
8.  https://www.ibrahimatlinux.com/ ，最后访问时间：2023.1.16

