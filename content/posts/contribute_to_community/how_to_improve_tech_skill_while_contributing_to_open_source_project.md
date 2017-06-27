---
categories:
- 开源
- 感悟
date: 2017-06-19T21:32:24+08:00
description: "我今年不知是机缘巧合，还是所谓的注定，有多次机会和大家讲《开发者与开源社区的关系》的演讲。那么开源的生产方式，是高效的、高质量的，那么这些是怎么来的呢？其中，人是最主要的，那么我谈到的开发者是广义的开发者，包括项目生产过程中全部的过程参与者。那么从小白该如何晋级为高手？不妨按照文中作者的指引去做做。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: 如何在贡献开源项目的过程中提升自己的技术势力
url: ""
---

尽管有很多人认为开源项目只是需要程序员，而且是那种特别有经验的，然而，事实上是开源项目所需要的人才远远不止这些。比如测试人员、技术支持、文档工程师、营销人员等等。

不过本篇文章要说的是为开源项目做贡献，不仅可以提高技术技能，而且还能结识更多“臭味相投”的人，参与开源项目的一个障碍是不知道如何加入并开始使用，本篇文章就是为大家讲讲如何为开源项目做贡献。

我来举几个社区的榜样，参与社区一开始未必必须是程序员，比如[Con Kolivas](https://en.wikipedia.org/wiki/Con_Kolivas)，他是一名来自澳大利亚的麻醉师，他针对Linux内核开发了适合自己的任务调度器，因为现存的任务调度是通用的，并不能满足Kolivas的需求。又比如[Alexey Kuznetsov](http://openvz.livejournal.com/48014.html)，一名理论物理学家，但是却也是一名Linux hacker，系统程序员。还有Peter Semiletov，一名IT记者，撰写了自己的开源编辑器：[TEA](http://semiletov.org/tea/index.html)，已经十多年了。Lesya Novaselskaya，本来打算是成为一名汽车修理工的，现在参与了[开源项目的测试工作](https://bugs.openvz.org/browse/OVZ-4181)，还有很多很多这样的例子，个人通过在开源项目中找到自己的兴趣，同时获得经验和乐趣。

![](https://opensource.com/sites/default/files/styles/image-full-size/public/images/life/get_started_lead.jpeg?itok=r22AKc6P)

## 撰写新的代码

参与一个项目未必从一开始就必须得是专家，假如你对编程语言有一定对掌握，那么可以试着去提交一些新的特性，并让项目的其它成员看到。有些开源项目新手是比较容易上手的，但是有些则拥有很高的门槛。在门槛较低的项目中，一般是初学者、菜鸟较多，这个时候，如果你能够帮助到其他人，那么你的贡献就不会被忽视。

每个开源的项目内部的流程都是特别的，所以在做贡献之前一定要自己先熟悉他们的流程。举例来说，在[PostGreSQL](http://www.postgresql.org/)项目中，所有的流程都是被严格监管的，任何代码的更改，都要将补丁发送给所有的主要开发者做深入的研究。然而在项目[Parrot](http://developer.parrot.com/)中，就允许提交到主分支。还有，如果项目使用的是GitHub，那么就会提倡使用Pull Request。总而言之，世上没有完全相同的开源项目贡献法则。

在你每次更改代码的时候，你一定要记住，你是整个团队的一部分，并尽力使你的编码风格符合项目所采用的编码风格。你所添加和编辑的代码不应和其它部分格格不入，你可以在代码样式方面拥有自己的偏好，但是你提交的内容必须遵循常规规则。否则的话，你这么做的意思无疑是在挑衅：“我不喜欢你的风格。我更好，所以像我这样做。” 这会导致很多冲突的，相信社区经理或其它相关的人员会站出来解决的。

## 排定Bug的优先级

毫无疑问，代码是任何软件项目的基石。然而，撰写代码并不是唯一可以参与开源项目的事情。技术支持往往被忽视，因为每个人都专注于添加新功能和修复错误。但是，技术支持往往是一个新的贡献者入门上手的好的开始。

举例来说，OpenVZ在[站点bug.openvz.org](https://bugs.openvz.org/secure/Dashboard.jspa)实现了完整的bug追踪，它会收集所有的已知的问题——已经修复的和尚未修复的——近十多年的Bug都在，因为项目已经很多年了。bug系统是在开发者和用户之间建立沟通的良好渠道。对当前请求的持续工作提供了巨大的机会。请记住，您可能需要项目经理提供的某些访问权限（通常以精英为基础）。

## 测试中间版本

对测试感兴趣的同学，面对开源软件可能完全不知道该如何开始，但是，要知道，绝大多数的开源项目，无论是否具有商业背景，都是非常缺乏测试人员的。发现并将Bug排定优先级，可以大大帮助开发人员节省时间。

如果有用户作了类似的评论：“我按照文档所给出的步骤，无法工作。”测试人员就可以去检查问题，在发送给开发者之前，尝试找出为何会发生这种现象，测试人员决定那些是可再现的（以及需要那些步骤），或在特定的环境中触发了那些行为。即使测试人员并不知道这个Bug背后究竟发生了什么，但是缩小可能原因的列表对于解决实际问题的帮助是巨大的。无论您作为测试人员查找哪些细节，将其添加到所有人都看得到的地方。

根据我个人的经验，开源项目一般都会比较缺乏资源来测试全部的功能特性，所以在主干作出重大变化之前，项目会试图发出号召，让大家尽可能多的去做测试。没有那个开源拥有充足的软、硬件配置的，正因为如此，诸如[OpenBSD](http://undeadly.org/cgi?action=article&sid=20151013162536)、[OpenVZ](https://lists.openvz.org/pipermail/announce/2015-September/000624.html) 才会召唤测试人员帮忙测试新的功能特性。

你可以帮助开发者测试软件在不同的平台下是如何工作的，如果你使用的是非标准的硬件的话，你的反馈是非常有价值的。如果您确认构建工作即使在这样的环境中，您也可以使项目经理更容易地评估项目当前的发布状态。

## 提交测试

多数项目针对代码测试都会使用软件套件，当然，也会让用户去做一些测试，使用诸如可定位C的源代码[LCOV](http://criu.org/cov/)这样的工具，无法通过预设测试进行检查。然后创建自定义测试以覆盖这些代码部分。

## 修复bug、添加新功能

为开源项目做贡献，一直以来最为常见的莫过于工程师提交一个补丁，补丁要么是用来修复Bug的，要么是用来增加一个新的特性的。Odin的首席技术官 James Bottomley曾经撰文：[Linux内核开发者30个星期的经历](https://www.linux.com/news/special-feature/linux-developers/678568-30-linux-kernel-developers-in-30-weeks-james-bottomley)写道：那些不知道如何加入Linux项目的人们，建议去修改Bug和提交新功能。他还专门举例说明，他自己曾经遇到Android下没有SIP客户端，然而他自己需要这个功能，于是写了[补丁](https://code.google.com/p/sipdroid/source/detail?spec=svn672&r=459)，并提交给了[SIPdroid](http://sipdroid.org/)项目。

当你创建新的功能特性时，在所更改的代码中撰写相应的测试是一个非常好的行为。有一些项目要求所有错误修复都必须是有相应的测试用例的。在查看未知代码时记下笔记。即使是你无法修复的Bug，在提交的Ticket中尽可能的去详细的将之描述，因为这对于后面跟进的人会有很大的帮助。

## 帮助维护项目基础设施

你是否对DevOps感兴趣？一名优秀的DevOps工程师，是非常难求的（我之所以这么说是根据我自身的经验），一名DevOps可以通过开放的基础设施开发可以学习、改进其自身的技能，如[维基百科](https://wikitech.wikimedia.org/wiki/Main_Page)、[Fedora](https://fedorahosted.org/fedora-infrastructure/)，OpenVZ也有类似的[基础设施维护](https://github.com/ligurio/openvz-playbooks)，为项目组件设置持续集成、为Linux发行版创建组件[包](https://openvz.org/Packages)、开发者环境的自动配置这些统统都是 DevOps的任务。

## 撰写或翻译文档

维护文档对于任何项目都是非常重要的部分，但是就这么一点却是经常性的被忽视。还有更加常见的情形：文档是针对软件非常熟悉的资深人群的，而不是面对初学者和刚入门的。阅读诸如此类的文章，你的感觉是好像我应该什么都会似的。除此之外，迅速发展项目中的文档会变得过时，所以需要定期更新。

将文档视为不重要是犯大忌的事情，所有对开源项目的贡献都是重要的。文档甚至在某种程度上超越了代码。举例来说，来自CERN的 Ingo Schwarze，是一名OpenBSD 的开发者，创建了项目[mandoc](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man1/mandoc.1?query=mandoc)，现在此项目已经不至于用在OpenBSD 下，它还被广泛的应用于各个BSD发行版，如 FreeBSD、 NetBSD、以及 DragonFlyBSD，他还整理了项目中现有手册页的格式。（更多细节，请移步阅读[BSDCan 2015演讲](http://www.openbsd.org/papers/bsdcan15-mandoc.pdf)）。

因此，如果您有兴趣为项目做一些重要的事情，请帮助改进其文档。

## 帮助其他社区成员

随着项目的日益成长、进化，回答日常问题，尤其是针对新手的问题，就显得越发的重要。将时间花费在这里是值得的，哪怕是已经有了完善的文档。如果你能够成功的招募一名新的、活跃的成员，那真是善莫大焉！社区的每一位成员，几乎都是这么过来的。还有，任何项目都是由众多的人所完成的！

## 宣传项目

如果你有自己的博客的话，而且博客是用来和大家分享你在开源项目的相关经验的，那么你应该去撰写诸如在使用开源软件时遇到的问题，以及是如何解决的。作为博主的你，可以一举两得：

1. 能够让项目得到更多的关注。
2. 为未来的贡献者创造了相应的背景知识。

描述你的技术成果，研究和专业知识的博客也是分享在项目中获得的实际经验的好方法，以及在技术问题上发现的解决方案。（这对于你寻找下个工作机会会非常的有帮助）。

许多项目采用贡献者博客帖子聚合器，通常称为Planet，常见的开源社区有：

* OpenVZ:[https://planet.openvz.org/](https://planet.openvz.org/)
* Linux Kernel:[http://planet.kernel.org/](http://planet.kernel.org/)
* Perl:[http://planet.perl.org/](http://planet.perl.org/)
* FreeDesktop:[http://planet.freedesktop.org/](http://planet.freedesktop.org/)
* Gnome:[http://planet.gnome.org/](http://planet.gnome.org/)
* Debian:[http://planet.debian.net/](http://planet.debian.net/)

来自爱好者的文章，有的时候真的很有意思，哪怕是这位爱好者本身并非是项目的贡献者。

## 做一些设计的工作

设计是开源项目中永远的痛！这可能是很多项目失败的最大原因。令人厌烦的web站点，毫无生气的logo，都是困扰项目的主要原因，仅仅是贡献者们都将精力集中在了项目本身的功能上了，而不在乎它的外观如何，所以开源社区是非常欢迎设计师的。

StackExchange社区的成员尝试回答了一些问题：「[作为图形设计师该如何为开源软件项目做贡献？](http://graphicdesign.stackexchange.com/questions/46427/how-can-graphic-designers-contribute-to-open-source-projects)」和「[如何激励图形设计师加入开源软件项目？](http://graphicdesign.stackexchange.com/questions/21399/motivations-for-a-designer-to-get-involved-in-an-open-source-project)」，当然，观点各有不同，但是可以作为参考。

## 总结

如果读者您有意为开源项目贡献力量的话，正在寻找有兴趣的项目或者是帮助改进项目，都是非常受欢迎的。当然，每个项目有着不同的流程，一般情况下，项目都会设置如何参与贡献项目的指南和向导，请你仔细读一下，这里笔者为大家列出三个项目的贡献指南页面：

* [OpenStack: 如何贡献](https://wiki.openstack.org/wiki/How_To_Contribute)
* [OpenVZ 参与](https://openvz.org/Contribute)
* [如何为FreeBSD做贡献](https://www.freebsd.org/doc/en/articles/contributing/)

事实上，一个项目若是专门的撰写了相关如何参与的指南文章，就说明这个项目是开放的，欢迎所有人。

## 关于作者
![](https://opensource.com/sites/default/files/styles/profile_pictures/public/pictures/pers.jpg?itok=1cLTlvQB) Sergey Bronnikov 来自俄罗斯的首都莫斯科，个人站点：[https://bronevichok.ru/](https://bronevichok.ru/)，他是开源项目[OpepVZ](https://openvz.org/)的管理者，可以关注他的社交账号：Twitter:[@estet](https://twitter.com/estet)，[Google+](https://plus.google.com/106149801176769726783/)。

本文由作者[Sergey Bronnikov ](https://opensource.com/users/sergeyb)  发表在Opensource.com上：[How to improve tech skills while contributing to open source projects](https://opensource.com/life/16/1/open-source-skills)。在开源之道翻译共享。本文在[Creative Commons BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)许可证下发布。欢迎转载！
