---
categories:
- 开源
- 基金会
date: 2020-03-20T20:31:22+08:00
description: "这个题目应该反过来问：Debian 为什么需要成立非营利基金会？基于共同体驱动的项目，近二十年来运转一直良好。"
keywords:
- Open Source
- Culture
- Reading
- News
- foundation
tags:
- 基金会介绍
- 开源之道
title: "Debian 为什么没有成立非营利基金会？"
authors:
- 开源之道
---

## Debian 简介

Debian 是一款非常流行的[Linux 发行版](https://distrowatch.com/)，毫不谦逊的说，从技术上讲，Debian 包揽了排名前五的所有的版本，因为另外4个版本都是从[Debian系列]()的，如Ubuntu、Mint。这么说的话：

> **Debian 是世界上最受欢迎的Linux发行版。**

没有任何毛病。

关于 Linux 发行版的信息，我们以下图为例可以说明一下 Debian的重要性：

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Linux_Distribution_Timeline.svg/340px-Linux_Distribution_Timeline.svg.png" style="zoom:50%;" />

Debian 以其稳定精干的形象闻名于世，坚持以自由软件为选择的基调，拥泵无数。支持数十种处理器架构，而且根据不同的内核，整合了数个版本，当然基于Linux kernel 的发行版是最为受欢迎的，其也是GNU Hurd的忠实追随者。

熟悉Linux 发行版的读者，肯定明白发行版之间最大的不同在于其包管理器的异同，Debian 的`dpkg`、`apt`就是其特色的包管理器，也是区别于`rpm`、`port`等包管理器的发行版的明显特点。

Debian的版本号也是非常的有特色，它采用的是“玩具总动员”中角色的名称来命名各个发行版的，另外一个始终如一的版本是“sid”，意即不稳定的版本，而`sid`这个名称在玩具总动员中是一名破坏玩具的角色。

Debian 是相当迷人的，其共同体也是相当的有特色，这也是本文介绍的重点，使用Debian的同学，一般都具有非常高的忠诚度，当然更多的是有归属感的，常常引以自豪！

当然，Debian最为突出的特点，就是该项目是完全由共同体驱动的，背后没有任何的商业公司，如红帽之于Fedora、SUSE之于Open SUSE。这是令常人非常惊讶的一点：**实际上最流行的Linux发行版，是完全由共同体驱动的**！来，感受一下。

## Debian 的历史故事

Debian 是最早期的Linux发行版之一，其起源要追溯到1993年，当时最流行的发行版叫做：[SLS](https://en.wikipedia.org/wiki/Softlanding_Linux_System)，基于  [Slackware](https://en.wikipedia.org/wiki/Slackware)，[Ian Murdock](https://en.wikipedia.org/wiki/Ian_Murdock) 也是 SLS 的用户，但是他对于这个版本越来越不满，尤其是在bug的修复上，以及糟糕的包管理器，于是在1993.8.16发起了 Debian 项目，Debian 这个名词也是非常的浪漫，Deb 来自于[Ian Murdock](https://en.wikipedia.org/wiki/Ian_Murdock) 当时的女朋友：Debra Lynn ，后半段 ian 当然来自于他自己的名字 Ian Murdock。

过了差不多一个多月，Debian 发布了其第一个内部版本：0.0.1，其首个公开版本是0.0.9, 这个版本颇具特色的一点在于，不仅包含了可以运行的操作系统发行版，还包括了Debian Linux 宣言，以及Murdock对于一个操作系统的理解，其呼吁 Debian 是为了发扬 GNU 和Linux的自由精神而创建！

在1994年到1995年，Debian 发布了0.9.x若干个版本，同时这个时间段，也获得了自由软件基金会的资助，在此期间，Ian Murdock 将基础系统（Debian的核心软件包）交给了 Bruce Perens，自己则专注于包管理器的开发上，并在1996年发布1.x版本，同年，Bruce Perens 接管了项目的领导者，他还起草了Debian社会契约和Debian自由软件指南，在Debian 发布1.2版本时，Debian的志愿者达到了200多位，此时已经是2年后了，Perens 在1998年卸任了Debian领导者。

1998年 Debian 领导者的接替者是 Ian Jackson，这个期间，Debian 2.0发布，非Linux 内核版本 Debian GNU/Hurd 发布，12月2日，第一部 Debian 章程也获得批准。

时间进入1999年，Debian领导者变为每年选举一次，Debian2.1 也使用APT 包管理工具，也开始有了衍生版：[Corel Linux](https://en.wikipedia.org/wiki/Corel_Linux) 等，在2000年，Debian 重组了软件包池，并发行了`testing`版本，同年开始举办大会：[DebConf](https://en.wikipedia.org/wiki/DebConf) 。

2002年，Debian 发布了3.0系列，开始加入加密软件，以及进行了国际化，自那之后，Debian虽然历经坎坷，如遭遇火灾、Hacker攻击，技术的发布也有很多的争议，但是Community稳步发展。

3.1 Sarge发行于2005年6月，也有了新的安装程序，直到现在，目前Debian的稳定版是10.3，代号 (Buster)，于2020.2.28日发布。

和微软的关系这里稍微提及一下，在2015年的12月，微软称在其Azure云平台支持Debian，当然最让人所震惊的是，微软的Windows10操作系统，发布的linux子系统，就是Debian。

## 治理的故事：从选举共同体领导来观察 Debian

抛开Debian 技术上的发布，知名开源经济、组织学者 SIOBHÁN O’MAHONY 仔细的考察了Debian的发展，从共同体的组建和治理来观察得出如下结论：

Debian 共同体的发展基本上可以分为如下几个阶段：

1. 阶段一：1993~1997 **De facto** 的治理方式

|           阶段           |                             实例                             | 证据强度 |
| :----------------------: | :----------------------------------------------------------: | :------: |
| 独裁式领导出现并受到挑战 | Bruce Perens，在接任第二届DPL后，受到了很多的批评，主要是认为他独裁，几乎掌管着所有事情，也控制着所有事情，为了避免第三任DPL也变成这样，大家开始撰写 Debian 章程，不可以将权力集中于DPL一人身上。（Debian 开发人员） |    中    |

2. 阶段二：1997~1999 治理的设计

|             阶段             |                             实例                             | 证据强度 |
| :--------------------------: | :----------------------------------------------------------: | :------: |
|    正式的权威开始有了依据    | 详情参见Debian章程5.1，DPL可在特定的领域做出决定，但是须将之交付给另外的技术负责人。 |    高    |
| 正式权力通过民主手段受到限制 | 详情参见Debian章程4.1“开发者可以合力做如下事情:<br />1)任命或罢免项目负责人。<br />2)修改本章程，前提是他们同意3:1的多数。<br />”3)做出或推翻项目负责人授权的任何决定。 |    高    |

3. 阶段三：1999~2003 实现治理

|               阶段               |                             实例                             | 证据强度 |
| :------------------------------: | :----------------------------------------------------------: | :------: |
| 对正式的authority进行了各种讨论  | “目前还不清楚DPL到底应该做什么。人们期待什么?因为Debian太大了，每个人都期待着一些东西。因此，有些人会说，“是的，DPL 应该做的事情就是开开会之类的，并把 Debian 介绍给共同体之外的世界，但DPL 不应该具体的做事情，因为这样也是蛮有作用的。”(Debian开发人员成员) |    高    |
| 共同体成员通过民主方式选举领导人 | “我将像往常一样，在这个任期完结临近时，投票支持我的DPL [Debian项目负责人]。原因如下:在这个周期的开始，我还没有下定决心……我还没看完竞选纲领和辩论材料……今年，由于我又一次无法现场观看，我不得不在之后阅读，这需要时间……在Debian中投票就像在其他地方投票一样，你经常需要做大量的阅读来理解问题”(Debian开发人员成员) |    高    |

4. 阶段四：2003~今天 正式形成的治理方式

|             阶段             |                             实例                             | 证据强度 |
| :--------------------------: | :----------------------------------------------------------: | :------: |
| 较为正式的有着威权意味的出现 | 当社区成员对领导人的行为感到不满时，他们会在系统内提出召回领导人的一般性决议。但是，成员们投票进一步讨论了这个问题，并在第二次投票中再次确认了领导人的权威(一般性决议，2006年)。 |   中等   |

就像任何成熟的共同体一样，Debian已经是一个完整的社会体系，在高速的运转当中，从创始人的退出，再到各种章程的执行，以及可持续性发展的经济支持，乃至上下游的供应链形成，甚至是商业公司的介入如HP、Google，Debian 俨然是具备稳定架构的自由共同体。

## 选择 SPI以及 SPI 介绍

和我们前面所介绍的一样，任何一个自由/开源项目都需要资金的支持，Debian 在刚起步的时候，由于其对于自由软件原则的支持，或者说天然和GNU 项目的联系，自由软件基金会在 1994.9~1995.9 对项目进行了资助，之后则成立了SPI ，从而有了接受金钱赞助的通道。

关于SPI的建立，还是要归功于 [Bruce Perens](http://www.opensourceway.community/posts/opensource_leader/bruce_perens_open_source_definition/) ，这位缔造“开源”的人物，在Ian Murdock卸任了DPL 之后，Bruce接过了这杆大旗，这已经是1996年的事情了，Ian Murdock 是如此描述Bruce的：

> Bruce 是接替我的自然选择，他为Debian系统的维护已经有一年多了，而且他对Debian的投入越发的多，远远超过于我。

Bruce 接任之后，大刀阔斧的干了起来，我们知道 Bruce 不仅是一位开发者，他还是一名律师，所以除了移植Glibc、开发BusyBox等程序之外，他还起草了Debian自由软件指南、Debian社会契约等纲领性文件。当然发起[公共领域软件SPI](http://www.spi-inc.org/)、开放硬件项目等也是他的功劳之一。

SPI 发起的初衷非常的简单，为了不受制于自由软件基金会，当然该基金会资助Debian项目一年多，Debian需要资金，接收捐赠，于是成立了501（c）（3）非营利组织，在纽约注册，时间是1997年6月16日，距今已经接近23年。目的就是为自由/开源软件或硬件提供庇护，任何人都有资格申请会员资格，并且参与自由软件社区的人都可以使用贡献会员资格。

SPI 理解起来非常的简单，有心的读者可以参看其历年给政府的：[年度报告](https://www.spi-inc.org/corporate/annual-reports/)，不过最让大家可能感兴趣的是其所关联的项目，耳熟能详的项目、如雷贯耳的项目，赫然在列：



|                           项目名称                           |                           相关简介                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|             [Arch Linux](https://archlinux.org/)             | 一款独立的Linux发行版，开发侧重于简单性，简约性和代码优美性。拥有众多忠实的粉丝。 |
|         [Debian GNU/Linux](https://www.debian.org/)          |              本文开始的时候重点介绍的操作系统。              |
|                [FFmpeg](https://ffmpeg.org/)                 | 是一个领先的多媒体框架，能够解码，编码，转码，mux, demux，流式传输，过滤和播放人类和机器创建的几乎所有内容。没有人不知道这款项目，中国很多公司都上了这个项目的耻辱榜。 |
|                [Jenkins](https://jenkins.io/)                | 用于监视、执行重复执行的作业，常用于软件开发中的自动触发构建、测试等环节，是一款非常常见的DevOps 工具。 |
|                [MinGW](http://www.mingw.org/)                | 提供了一个完整的开源编程工具集，适用于本机MS-Windows应用程序的开发，即在Linux开发用于运行在Windows下的程序。 |
|             [OpenWrt](https://www.openwrt.org/)              | 是用于嵌入式解决方案的基于Linux的发行版，支持种类繁多的平台。常被人用于家用路由器的系统。 |
|          [PostgreSQL](https://www.postgresql.org/)           | 是一个企业级关系数据库系统，从加利福尼亚大学伯克利分校始，已有20多年的开发历史。 |
| [systemd](https://www.freedesktop.org/wiki/Software/systemd/) | 一款已经在几乎所有发行版中使用的服务托管工具，用于管理、启动、停止系统、用户服务。systemd支持Sys-V 和 LSB初始化脚本，并且可以替代sysvinit。 |
|  [X.Org Foundation](https://www.x.org/wiki/XorgFoundation/)  | X.Org社区使用以下主要组件创建了一个免费且开放的加速图形堆栈：<br />DRM内核图形子系统<br />Mesa 3D图形库<br />[Wayland compositor](https://wayland.freedesktop.org/)<br />[X.Org Window System](https://x.org/wiki/)<br /> |

有关SPI 董事会的信息，开源之道将在下一篇文章：[SPI  历年主席报告发言辞](posts/foundation_introduce/spi-annual-report-introduce)中作相应的介绍。

## Debian 项目领导者

本文没有打算为Debian的任何技术性内容进行介绍，甚至都不会涉及到它的开发、发布等流程，而是日常的共同体决策、探讨、商议等社会性的活动，那么从Ian Murdock发起，到其卸任，之后的每年一次选举，无论多么的民主，有一个代表人物是非常重要的。我们不妨从Debian 项目领导者(Project  Leader)来讲起，然后是社会契约、章程等内容。

要理解Debian 项目领导者（下称DPL），需简要理解一下 Debian 共同体的组织架构：

![](images/book-reading/debian-org-structure.png)

(图片来自Wikipedia)

DPL 由Debian章程所定义，是有Debian开发者每年选举出来作为一个组织的领袖，但是这个席位并没有绝对的权力，可以任命某人执行专门的任务，代表们在考虑技术标准和共识的情况下做出他们认为最佳的决定。如上图所示，DPL 是可以随时进行更换的，因为有一般决议（General Resolution）这样的通道，开发者可以重新呼吁DPL，撤销DPL 或代表的决定，修改基本文件并做出其他有约束力的决定。

虽然DPL 没有那么的重要，貌似是形式化的，这也确实体现了民主化的组织，削弱领导的绝对权力，以让ta更加的努力服务，争取最大的影响力让项目往更好的方向发展。我们不妨列个表格，看看历届的DPL 都是什么样的背景：



|      DPL 姓名      |                         背景概要介绍                         |  任职年份   |
| :----------------: | :----------------------------------------------------------: | :---------: |
|    Ian Murdock     | Debian 的创始人，担任过Linux 基金会的CTO，Sun公司的项目主管，也在一度大红大紫的公司Docker公司工作过。 |  1993~1996  |
|    Bruce Perens    | 这位重量级的人物，大家可以阅读开源之道过去专门对Bruce进行介绍的文章。 |  1996~1998  |
|    Ian Jackson     |      是长期的自由软件作者和Debian开发人员。`dpkg`的作者      |    1998     |
|  Wichert Akkerman  | 是一位荷兰计算机程序员，为`Debian`，`dpkg`，`Plone`和`strace`做出了贡献。也担任过SPI的秘书。 |  1999~2000  |
|    Ben Collins     |        来自美国的程序员，Linux开发人员和系统管理员。         |    2001     |
|    Bdale Garbee    |                    来自美国的计算机专家。                    |    2002     |
|  Martin Michlmayr  | 是一名自由和开源软件的布道者、Debian开发人员。Martin 拥有博士学位，研究的重点是提高自由软件和开源项目的质量，尤其是发布管理流程和实践。在2008年至2014年期间，他曾担任OSI 的董事会成员，并且是Software Freedom Conservancy评估委员会的成员。也担任过SPI的顾问。 |  2003~2004  |
|  Branden Robinson  |         以他对X Window系统打包的贡献而被人们所知晓。         |    2005     |
|   Anthony Towns    |        是一位计算机程序员，曾长期担任Debian发布经理，        |    2006     |
|    Sam Hocevar     |       是法国软件和视频游戏开发者，是WTFPL版本2的作者。       |    2007     |
|   Steve McIntyre   | 是一位软件工程师和Debian的长期贡献者，以在创建Debian CD / DVD映像方面的贡献而被人们所知晓。他是debian-cd小组负责人，负责生成正式映像。 |  2008~2009  |
| Stefano Zacchiroli | 是一位在巴黎生活和工作的意大利学术和计算机科学家。他于2001年成为Debian开发人员，主要参与 OCaml 打包和质量保证团队。 |  2010~2013  |
|   Lucas Nussbaum   | 是法国计算机科学工程师，洛林大学助理教授，LORIA实验室研究员。自2007年以来，他一直是Debian开发人员，从那时起，他一直活跃于Debian Ruby打包程序的开发工作中，与Universal Debian Database或Debian Archive的全面重建有关。 |  2014~2015  |
|   Neil McGovern    |                   一位来自英国的工程经理。                   |    2015     |
|    Mehdi Dogguy    | 来自法国，据说当年选举的时候竟然没有竞争对手，[毫无争议的情况下就当选了](https://www.debian.org/vote/2016/vote_001)。<br />（这么看，DPL 确实没什么卵用。——开源之道注） |    2016     |
|     Chris Lamb     |             一位来自英国的自由职业者，连任两年。             |  2017~2018  |
|    Sam Hartman     | Hartman曾在MIT Kerberos联盟担任首席技术员，并在Internet工程任务组担任安全区域总监。在2000年就加入了Debian。 | 2019~2020.3 |
|  Jonathan Carter   | 宣言写的挺好的：比如：**促成内部导师制度，在 Debian 中培养一种文化，在这种文化中，对他人代码的审查和指导同样受到重视，并且将有更多的 Debian 开发者被鼓励花更多的时间在这一点上**。 |    2020     |

余下的内容我们就来介绍一下Debian的支柱：三大重要的文档。

## Debian 社会契约

这是构成 Debian 项目道德议程的文件，Debian 社会契约所指出的价值观，不仅是 Debian自由软件准则的基本原则，也是开放源代码定义的基础。

目前的版本是Version 1.1 ，于2004年4月26日获准通过。

Debian 坚信，当用户委托他们控制计算机的时候，自由软件操作系统的制造商应提供保证：

1. **Debian 将始终是 100% 的自由软件**

   我们制订一个名为Debian 自由软件指导方针的标准便于我 们判定某项作品*自由*与否。我们保证 Debian 系统机器附带的软件包遵循这些自由软件的方针。我们将同时支持在 Debian 上开 发及使用自由或者非自由软件的用户。但是，我们决不让这个系统依赖于任何非自 由软件。

2. **我们将回报自由软件社群**

   当我们编写 Debian 系统的新的部件之时，我们将使其遵循 Debian 自由软件指导 方针的理念。我们将尽最大努力，打造最优秀的系统，以 利自由软件得到最广泛的使用及传播。我们将反馈那些作品被 我们系统收录的*上游*作者，例如缺陷的修正 、改良的意见以及用户的需求等这些信息。

3. **我们绝不隐瞒问题**

   我们将始终把我们整个的缺陷报告数据库开放给公众阅读。 由用户在线提交的报告，将会很快的出现在其他人的眼前。

4. **我们将优先考虑我们的用户及自由软件**

   我们由我们的用户及自由软件社群的需要所导向。我们将优先考虑他们的利益。我 们将在多种计算环境中支持我们的用户的操作需要。我们不反对在 Debian 系统上 使用非自由软件，我们也不会尝试向创建和使用这部分软件的用户索取费用。我们 允许他人，在没有我们的资金的参与下，制造包括 Debian 以及商业软件的增值套 件。为了达成这些目标，我们将提供一集成的、高质量的、100% 自由的软件，而 不附加任何可能阻止在这些方面使用的法律限制。

5. **哪些作品不符合我们的自由软件规范**

   我们明了，某些我们的用户需要使用不符合 Debian 自由软件指导方针的作品。 我们为这些作品，在我们的 FTP 库中留出了`contrib`以及 `non-free`目录。在这些目录下的软件包，并不属于 Debian 系统 尽管它们已被配置成可以在 Debian 下使用。我们鼓励光盘制造商阅读这些目录下 的软件的许可证，以判断他们是否可以在光盘中发行这些软件 。所以，尽管非自由软件并非 Debian 系统的一部分，我们仍支持它们的使用，并 且我们为非自由软件提供了公共资源 (诸如我们的缺陷跟踪系统以及邮件列表)。

## Debian 章程

Debian 章程，正如O'Mahony, Siobhán 所揭示的那样，是一个自发组织走上治理之路的指引，共同做事的法则、共识，遇事有章可循，那么它的细节和其它社会组织就没有什么差别了。

目前的版本是v1.7，于2016年8月14日发布。更多详情，请读者移步：[Debian Constitution](https://www.debian.org/devel/constitution) 进行细致的阅读，这里给出大体的轮廓：

*  Debian项目是由独立的个体开发的
* 角色定义：独立开发者、DPL、技术委员会、一般决议、项目秘书、
* 投票流程和系统
* 发布角色，具体的领导者

## Debian自由软件准则(DFSG)

和 OSI的定义“师出同门”，但是相比OSI 更加倾向于自由的重要性。

1. **自由的再次发行**

   Debian 组件的许可证不得限制任何一方将此软件作为含有 若干不同来源的程序的一套软件集合中的一个组件 用于销售或者捐赠。该许可证不得向诸如此类销售行为的销售方索取 专利费或者其它费用。

2. **源代码**

   程序必须包括源代码，而且必须允许以源代码以及预先编译好的形式发行 。

3. **作品的衍生**

   许可证必须允许对其所属作品的修改以及衍生，而且必须允许这些作品在原始 软件的许可证条款下发行。

4. **作者源代码的完整性**

   许可证**只有**在允许`补丁文件`随其所属作品的源代码一同发行，以便在编译时修改程序 的情况之下，方可限制对其所属作品的源代码在发行时的修改行为。 许可证必须清楚表明用已修改的源代码编译而成的软件，是允许发行的。 许可证可要求衍生软件使用有别于原来软件的名称或者版本号。( *这是一种妥协，Debian 组织鼓励所有作者不要限制任何源代码文件或者二进制文件的修改。*)

5. **禁止歧视人士或者组织**

   许可证不能歧视任何人士或者由多人组成的组织。

6. **禁止歧视用途**

   许可证不能歧视程序可以被用于的任何特定领域。例如， 许可证不得限制程序用于商业或者基因研究。

7. **许可证的发行**

   程序附带的权利必须适用于程序再次 发行的每一个受众，无需他们再执行一个附加的许可证。

8. **许可证不能特定于 Debian**

   程序附带的权利不能由该程序是否为 Debian 的一部分来决定。如果这个程序从 Debian 中摘取出 来，即使在 Debian 之外但仍然在该程序的许可证条款下使用 或者发行，那么它再次发行的每一个受众都将拥有和那些在该 程序与 Debian 系统结合时被授予的完全相同的权利。

9. **许可证的规定不得污染其他软件**

   许可证不得对其他与此软件一同分发的软件作出任何限制的规定。例如，许可 证不得要求所有与它在同一媒体中一同分发的软件都是自由软件。

10. **许可证示例**

    **[GPL](https://www.gnu.org/copyleft/gpl.html)**、 **[BSD](https://opensource.org/licenses/BSD-3-Clause)** 和 **[Artistic](http://perldoc.perl.org/perlartistic.html)** 均是我们视为*自由*的许可证的示例。

## 结论

说了这么多，还是要回答一下本文的标题的，Debian 完全没有必要成立基金会，为了最小化的商业公司干涉，只为商业公司和个体提供了赞助的通道，没有任何的坐席可言，想要在技术上主导，按照社会协约和章程，公开透明的进行贡献即可。开发者们按照自己的理解去进行开发。商业公司在技术之外几乎无法影响到Debian共同体。

优劣程度，我们暂且不去理会，正如Apache没有获得很多赞助一样，Debian 按照自己的方式形成了自己的特色，也获得了很多人的尊重，对于共同体的发展也赢得了商业公司、组织的信任。技术上也是以共同体所理解的方式有条不紊的进化着。

这不就是开源之道一直以来想告诉世人的共同体的力量吗?这个世界是存在着这样一种虚拟的组织的，其最终的表现就是一款计算机软件栈，平日里就是基于互联网的终端，协商出来的契约和章程，有着自己所理解的方式，推动着世界的发展。

技术是构建这个空间的媒介，而道德契约这样的哲学原则，才是凝聚Debian项目的核心力量，也是构建Debian共同体空间的核心要素，当然基于此发展出来的做事方式、经济来源、扎根于现实社会等等也要处理的恰到好处。

问题来了，什么样的现实社会能够让这样的共同体存在？或者说给予足够的容忍度?

## 参考资料

1. 维基百科英文版 https://en.wikipedia.org/wiki/Debian
2. 维基百科中文版 https://zh.wikipedia.org/wiki/Debian
3. Debian 文档 https://www.debian.org/doc/manuals/project-history/ap-manifesto.en.html#sA.1 
4. linux 发行版诠释 https://en.wikipedia.org/wiki/Linux_distribution#cite_note-11 
5.  O'Mahony, Siobhán; Ferraro, Fabrizio (2007).   https://web.archive.org/web/20080529081303/http://www.business.ualberta.ca/tcc/documents/TII_3_OMahoney_Ferraro_final.pdf
6. Debian 社会契约 维基百科 https://en.wikipedia.org/wiki/Debian_Social_Contract
7. https://www.debian.org/social_contract#guidelines
8. Jonathan Carter 当选新一任 Debian 项目负责人 https://www.oschina.net/news/115078/debian-project-leader-elections-2020