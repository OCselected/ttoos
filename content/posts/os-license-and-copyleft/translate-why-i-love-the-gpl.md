---
categories:
- 开源
- 感悟
date: 2023-11-07T15:45:57+08:00
description: "Kata Container 的创始人王旭在演讲中或者是线下交流，总是会提到一个称述，这个世界上最成功的开源项目Kernel采用的是GPL许可，为什么会是这样？能回答的了这个问题的没有几位。笔者也无法给出确定的答案，但是笔者愿意去收集Kernel成功与GPL的功用之间的关系证据。此篇就是其中之一。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "GPL 让人爱的是什么？"
url: ""
authors:
- Joe Barr 
translater:
- 开源之道
---

原文地址：[https://www.linux.com/news/why-i-love-gpl/](https://www.linux.com/news/why-i-love-gpl/)，发表于2005年1月

## 引子

我们真是有太多的理由去喜欢GPL：[GNU 公共通用许可](http://www.gnu.org/copyleft/gpl.html#TOC1)了。首先，这是一个大卫与歌利亚的故事，那些企业巨头凭借其对政府的影响，无论是法律上的还是其他方面的影响，在我们的日常生活中横行霸道。另外一方面，它也是良性的。这类似于一项医疗保险法案，它实际上为老年人提供了更多更好的医疗保健服务，而不是简单地将公共资金直接注入制药业贪婪的大口中。当然，我们也理解它为有关领地的问题，是“Don’t Tread on Me” （ "别踩我"）在软件界的应用。GPL 为不断改进，自由的软件基础设施提供了一个法律框架。此外，Linus 为 Linux 选择了 GPL，目的是让后来者能够使用他的工作。我个人对 GPL 的偏爱，则和微软和其他企业掠夺者对它的恨意同出一辙：它很有效果。

## GPL 能够保护什么？

正如 GNU/FSF 网站上所介绍的那样，“自由软件”的定义包括四种不同的自由。但无论是哪一条，都无关乎价格和啤酒，接下来，我们就过一遍这四项自由（强调多少遍都不为过）：

* 自由度0：无论用户出于何种目的，必须可以按照用户意愿，自由地运行该软件。
* 自由度1：用户可以自由地学习并修改该软件，以此来帮助用户完成用户自己的计算。作为前提，用户必须可以访问到该软件的源代码。
* 自由度2：用户可以自由地分发该软件的拷贝，这样就可以助人。
* 自由度3：用户可以自由地分发该软件修改后的拷贝。借此，用户可以把改进后的软件分享给整个社区令他人也从中受益。作为前提，用户必须可以访问到该软件的源代码。

或许，有些读者会想：“我已经可以用公有领域的软件或其他开源许可证（如 BSD 式许可证）来做这些事了"，是的，没错，人们可以选择这些许可，但是我要说明的是，公有领域的软件和 BSD 式许可证所涵盖的软件是得不到任何保护的，它们无法确保下一个用户、下下一个用户或下下下一个用户享有同样的自由。

## GPL 是如何工作的

GPL 要求任何获取和重新发布 GPL 许可软件的人都必须以同样的条款发布该软件，从而使这些自由得以自我延续。当然，这个特性也被一些心怀叵测的人贬义地称为 "病毒性"。我们没法阻止别人怎么说，不过这一特点也恰恰能够为四项基本自由提供了强有力的保护。而这也正是 Linus 和其他成千上万的自由软件作者为他们的软件提供强有力保护的根由。

举个相反的例子，微软从公开的地方采用了 BSD 许可的 TCP/IP 协议栈，然后将其吞没在自己的专有产品线中。最后再把这些卖回给人们。当然，这一切都是合法的。BSD 式许可证对这类事情没有提供任何的保护。

Kerberos 的案例是另外一个更为糟糕的情况，微软的 Kerberos 版本只能在微软的服务器上运行。来自公众的压力迫使微软为其封闭的专有版本提供文档，但微软对文档附加了限制性许可，使其无法用于自由软件。

Kerberos 的案例再一次说明了公共软件的弱点，从公共的地方获取是为了增加比尔-盖茨的个人财富。但这是合法的盗窃行为。涵盖 Kerberos 的 MIT 许可证并不提供针对此类行为的保护。

我喜欢 GPL，因为它保护 Linux 和其他优秀软件不落入那些真正的软件盗版者的魔掌。

## 效果如何？

Linux 内核是以 GPL 发布的软件代表。它已成为一个可用的操作系统，一只会飞的大黄蜂，一群互联网上的孩子就能创造出史上最成功的操作系统这一不可能实现的梦想成真了。所有这一切的发生，至少有一部分是因为 GPL。

Linux 的流行有很多原因，但其中最主要的原因是它的开发者共同体，这是其他任何平台都无法比拟的。如果我们问这些开发者：你们是被一个有魅力的领导者吸引到 Linux 中来的吗？答案毫无疑问是。在我看来，Linus Torvalds 最伟大的天才并不在于代码，而在于他创造了一个环境，让许多有天赋的程序员能够为了共同的利益而合作。但别忘了，托瓦尔兹骨子里是位 Geek：一个不以温情脉脉著称的那类人。

另外的一个原因是许可的选择，对于懂得互惠和知识财产法的人来说，是的。尽管 GPL 经常被描述为理想主义和利他主义。如果说Linux kernel 的开发者仅仅是只对代码感兴趣的话，那么为什么参与人员更多的不应该是BSD吗？ 众所周知，BSD 的大佬们总是和我们说，相比于Linux来说，BSD 的技术更胜一筹。

但他们感兴趣的不仅仅是代码。GPL 为 Linux 社区增添了一种神奇的粘合剂，那就是为他人做好事所带来的美好感觉，而且知道只要有人使用，这种美好感觉就会一直持续下去。如果你还不明白我在说什么，那么你应该现在就去下载Linux，只有得到它，你才能真的理解它。

GPL 的覆盖范围远不止 Linux 内核。请查看统计数据。Freshmeat.net 列出了 50 多种不同许可证覆盖的近 36000 个项目。显示特定许可证覆盖百分比的页面显示，其中超过 68% 的项目采用 GPL 许可证。排名第二的是什么？GPL的兄弟许可证--GNU Lesser GPL，占近6%的份额。排在第三位的是原始 BSD 许可证，占 3.57%。GPL 不仅是最流行的开放源代码或自由软件许可证，而且是绝大多数人的选择。

## 为什么GPL 会受到诋毁？

盖茨和鲍尔默一有机会就攻击 GPL。他们经常用我们熟悉的法西斯软鞋套路，把 GPL 或 Linux 说成是共产主义。嘿，这能怪谁呢？当他们垄断了本世纪最炙手可热的技术时，他们误打误撞地走进了金矿。现在，他们的一生都在致力于保护这项垄断，不让任何人染指。

他们在这方面也做得很好。有时，他们在法庭上赢得了反垄断斗争的胜利，有时，他们在与神秘政府的密室交易中赢得了反垄断斗争的胜利。但是，一些卓越的技术解决方案--例如 DR DOS 和 OS/2--的出现和消失，并没有给微软的垄断地位带来多大影响。

但是，Linux 对微软最喜欢使用的破坏膝盖骨、切断气源、扼杀婴儿的卑鄙无耻的手段具有免疫力。Linux 不是一个可以被收买的公司或个人。它是一个共同体，主要由那些认为软件不应该被垄断的人群组成。Geek 喜欢能用的东西，鄙视那些在性能、安全性、健壮性和可用性上空谈的人。而且，与 TCP/IP 协议栈和 Kerberos 不同，它受到 GPL 的保护。

你知道那些被微软称为 "了解事实 "的虚假和误导性广告吗？这不仅是微软的拿手好戏，也是它在反对 Linux 的运动中所能做的最好的事情。从我在评论中看到的反馈反应来看，这些广告并没有为它们赢得任何皈依者。


## Stallman 作为替代目标

GPL 是一种软件的许可： 一连串的人类词语、声明、条款、和一份法律文件。而 Richard Stallman 是一位人类：他聪明、有主见、不妥协。许多对 GPL 的攻击都是间接针对 Richard Stallman 的，原因无非是人更容易受到攻击，而许可本身通常对于攻击无动于衷。

如果你不把这两者区分开来，那么 GPL 在你心目中的地位就会随着你与 Stallman 的相处情况而起起落落。请记住，当我们谈论人时，这位个性鲜明的人是那种只需走过，就能把一个房间分化成交战派系的人。人们都非常钦佩 Richard Stallman，但不一定总是同意他的观点。喜欢 GPL 和不喜欢 Stallman 都没问题。这本来就是两码事。

## 底线思维

我之所以喜欢 GPL，是因为它使世界上最富有的人之一 -- 有人会说这使他成为世界上最有权势的人之一 -- 在 Linux 及其用户群的迅猛发展面前无能为力。

由于 Linux 和其他自由软件的存在，我得以摆脱垄断企业强加给客户的有害条款和条件。例如，临时更改许可条款。因为不接受它们就意味着你得不到最新的服务包，而服务包中包含了对数十个安全漏洞的修复，这些漏洞每时每刻都被人知道并不断被探测。

垄断者痛恨 GPL 为我提供的逃生通道。这就是他们不断攻击 GPL 的原因。毫无疑问，这些攻击还将继续。有些将是法律上的挑战，有些只是疯狂的叫嚣。有时，微软之手是显而易见的--就像它对 SCO 的财政支持和支持那样--有时则不是，隐藏至深的。但这并不重要，GPL 正在获胜，为此，我会更加热爱它。

## 关于作者

Joe Barr 的站点是：[http://clifornoobies.com/](http://clifornoobies.com/)。

## 关于译者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，开放原子开源基金会资深顾问，Linux基金会亚太区开源布道者（2022/2023年度团队主席）， 云计算开源产业联盟OSCAR（中国信息通信研究院发起)个人开源专家，OSPO Group 联合发起人。