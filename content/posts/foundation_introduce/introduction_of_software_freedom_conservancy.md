---
categories:
- 开源
- 基金会
date: 2020-03-09T18:58:12+08:00
description: "非正式、正式的开源组织究竟是怎么回事？令人眼花缭乱的Community、Forum、Group、Organization、Foundation、non-profit corpation等等该如何区分？或者再细分一下，那些个开源组织的法律权益由谁来维护？凡事不是有个主的吗？中国自古以来就是无主的事，就是官方的事，那么现代化的分工下，这个又该如何处理？"
keywords:
- Open Source
- Culture
- Reading
- News
- foundation
tags:
- 基金会介绍
- 开源之道
title: "以法律的名义捍卫自由软件的权益之一 —— 软件自由保护组织（SFC）的来龙去脉"
authors:
- 开源之道
---

##  违反GPL？来，我们法庭见！

### 中国 GPL 诉讼第一案

2019年12月，[中国 GPL 诉讼第一案：关于 GPL 问题的探讨](https://www.cnbeta.com/articles/tech/924045.htm)终于算是尘埃落定。这对于很多开源圈内的律师、相关人员是蛮开眼界的，要知道，GPL 已经将近三十多年的历史了，在盗版横行的中国，却仅仅才发生了一次诉讼！简直是苍天有眼啊！自由/开源软件似乎有了曙光的感觉。

不过等等，文中的原告和被告竟然是：

> 数字天堂（北京）网络技术有限公司（下称：数字天堂）诉柚子（北京）科技有限公司、柚子（北京）移动技术有限公司（下称：两柚子）侵犯计算机软件著作权纠纷案，由北京高级人民法院二审作出终审判决。

竟然是公司与公司的对簿公堂！

### 史上著名的GPL 案例概述

#### 思科产品（WRT54G） 违反GPL案

2003年9月，思科发布的路由器产品，遭到自由软件基金会起诉，称其产品中使用了GPL自由软件，但是违反了GPL相关条款。

#### OpenTV 违反GPL 案

同样是在2003年5月，在硅谷的厂商OpenTV ，被自由软件基金会起诉，称其产品使用了GPL的项目，但是却没有将最后的产品的源码以同样的许可证再发布。

#### BusyBox 起诉众多手机厂商

2009年12月14日，14家公司被起诉，其中包括[Best Buy](https://en.wikipedia.org/wiki/Best_Buy), [Samsung](https://en.wikipedia.org/wiki/Samsung),[Westinghouse](https://en.wikipedia.org/wiki/Westinghouse_Electric_Corporation_(1998))，因为其分发知名自由软件 BusyBox 时违反了 GPLv2 许可协议。在发布自己的产品时，并没有包括 BusyBox及其衍生的源代码。

## 谁来帮助开发者打官司？

看完以上的故事，那么问题来了，如果开源项目的作者是某个独立的个体，由于各种原因，惹上了官司，该如何处理？请各位看官，看下面一个故事：

> 本世纪初，[Phil Zimmerman](https://web.archive.org/web/20061107160224/http://news.zdnet.com/2100-1009_22-998728.html) 撰写了一款相当优秀的邮件加密程序[Pretty Good Privacy](https://web.archive.org/web/20061107160224/http://dw.com.com/redir?destUrl=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPretty_Good_Privacy&siteId=22&oId=2100-3513-6051589&ontId=3513&lop=nl.ex) (PGP)，但是根据美国的法律，可怜的Phil 还是违反了一条: 美国对于加密软件的出口做了严格的限制，是有法可依的。美国政府还是起诉了齐默尔曼（Zimmerman）， 理由就是在互联网上发布了 PGP ，其性质是违反了美国法规。辛亏Zimmerman 并非孤身一人，他最终得到了 **Eben Moglen** 的帮助，而且还是无偿的。最终的结果是美国政府撤诉了。

我们再来回忆另外一个结果截然不同的另外一个耐人寻味的故事：

>  身处Great firewall 之中的人，大概对于使用VPN等软件来获得被封锁的站点和服务都习以为常，其中有一款开源软件叫做Shadowsocks，以简单的配置和快速的安装而获得非常之多的用户，但是其作者有一天出来说，搞不下去了，于是删除了其在GitHub上的所有代码。这个作者据说只是被相关部门叫去喝了一次茶。Ta 连对簿公堂的机会都没有。

那么我们不妨细细的思考一番，如果一家公司或一个人所开发的开源项目，使用的是GPL或其它许可协议，而另外有一些公司或个人违反了这个协议里面的条款，那么谁可以来起诉这些公司？例如，最近中国发布了汉语版的开源协议——木兰许可证，那么如果有公司违反了其中的条款，谁来去法院状告？

## SFLC 的成立与发展

随着开源的日渐流行，相关的法律问题也日渐凸显，尤其是以Linux为首的重量级项目，尤其是和SCO 打官司的过程，当时的OSDL（Linux基金会的前身）斥资4百万美金，成立了软件自由法律中心（Software Freedom Law Center），由一直以来担当自由软件基金会的法律顾问 Eben Moglen 担任第一任主席。

要注意 ：SFLC 向免费软件/开放源代码软件的非营利开发者提供无偿法律代理和相关服务。

SFLC 可以说是自由软件的法律捍卫者的形象出现在世人面前的，当年的媒体报道都称 Eben Moglen 为 “光明骑士”，SFLC 可谓是功绩赫赫，如 GPLv3 的开发、BusyBox 的捍卫、思科的官司等等，包括当下对于自由软件的帮助。

关于SFLC 的详细介绍，我们将在[以法律的名义捍卫自由软件的权益之二—— 软件自由法律中心（SFLC）的来龙去脉](/posts/foundation_introduce_introduction_of_software_freedom_law_center)进行专门的描述。

### Eben Moglen 是谁？

大约是开发者的关系，很少有人提及这个名字，说起自由软件和GPL，大家想到的都是一个人，即 Richard Stallman，但是，在法律界，人们更多的想到的是：Eben Moglen ，这是一位非常传奇的人，据说他12岁就对编程产生了浓厚的兴趣，14岁就自己开始利用软件赚钱了。大学生涯都是有自己搞定的学费和生活费用，拿到的是历史学博士学位、法律学位。

毕业以后 Moglen 在 IBM 谋的一份编程的工作，这段时间之后，他就踏上了律师的道路。先是在在纽约地区法院和美国最高法院担任法律书记员，在上世纪八十年代末加盟哥伦比亚法学院，担任法律和法律史的教授。

在哥伦比亚工作期间，他处理了有关软件自由的第一起重大法律案件。也就是上文提及的 PGP案件，一举成名，通过处理 PGP 的过程中，Moglen 和 Richard Stallman 取得了联系，要知道当时的 Stallman也被法律缠身，双方一拍即合，Moglen 主动和 Stallman 提出可以提供更多的帮助，自此一发不可收拾。

开始的时候，Moglen 大约花日常的1/5时间来处理自由软件基金会方面的事情，但是随着自由软件的崛起，花的时间越来愈多，不过他以为：自己所付出的时间与许多自由软件开发人员为修改程序所付出的时间没有什么不同。

除了处理基金会的法律工作外，Moglen现在还通过Software Freedom Law Center与其他许多自由软件项目合作，他于2005年2月协助启动了该中心。他还是公共专利基金会（Public Patent Foundation）的董事，该组织旨在限制滥用美国专利制度。

关于 Eben Moglen ，开源之道在[以法律的名义捍卫自由软件的权益之二—— 软件自由法律中心（SFLC）的来龙去脉](/posts/foundation_introduce_introduction_of_software_freedom_law_center)进行更多的介绍。

## 软件自由保护 （Software freedom Conservancy）的成立与发展

上文提及的软件自由法律中心的成立，也促使一些项目也有类似的需求，不能天天打官司，或者盯上那些违反许可协议的组织，于是有了进一步的托管需求，2006年，（聪明的读者可以注意下这个年份的非营利软件基金会的成立）对于非营利软件基金会来说可谓是爆发之年，各个项目都在找“靠山”，除了各种基金会之外，还有一些没必要搞得那么夸张的，于是在非营利软件基金会的帮助下，成立了软件自由保护组织（下称SFC)。

主要的作用是和 SFLC区分开，为 FLOSS 项目提供资金和行政上的服务。我们可以从当时的发起者看到如下的描述，如Dan Ravicher 说道：

> SFC  的使命就是为 FLOSS 项目的开发人员能够获得免税实体的所有好处，还毋须处理那些繁重、无聊的行政事务，让开发人员专注于自己最擅长的事情：开发 FLOSS 软件。

Wine 项目的作者Alexandre Julliard 则如此评价：

> 大家都其实明白、了解关于法务、财政、以及行政管理等的重要性，但是作为开发者，更加专注的地方是代码本身，SFC 则帮助我们完成这一愿景，既能获得资金、法律的益处，又能节省那些繁琐的行政事务处理。

最初的项目有 SurveyOS、BusyBox 、Wine、 uClibc等非常重要的自由软件项目。十几年过去了，SFC 也在不断的扩张，不仅收下了诸如 Git 这样重量级的自由开源软件项目，董事会、法律顾问团也在不断的壮大。

对于软件自由保护组织的成长，我们不得不介绍两位至关重要的人物。

### Bradley M. Kuhn

在维基百科的一句介绍里，Kuhn 是被如此形容的：**美国的自由软件积极分子**。这可能对于关注开源的人，Kuhn 并不是被人们所熟知，但是在自由软件的世界里，Kuhn可谓是资深人士了，接下来，我们就来聊聊 Kuhn，非常有趣的人物。

Kuhn 是一位对扑克牌相当痴迷的爱好者，在2002~2007年之间，一度成为业余选手参加各种比赛。2008年之后，还陆续为PokerSource贡献了一些代码，PokerSource 是由[Loïc Dachary](https://en.wikipedia.org/wiki/Loïc_Dachary)所撰写的一款以GPL许可发布的在线系统，很可惜，后来没有继续。

我们不知道，后来 Kuhn 是否还玩扑克不玩了，不过这似乎不是我们所关心的话题。我们更看重的是他在自由软件的积极贡献，比如他是2012年的 [O'Reilly 开源人物奖](https://en.wikipedia.org/wiki/Google–O'Reilly_Open_Source_Award)，现在担任 SFC 的政策研究员和驻场黑客，当然他曾经担任过 SFC  的执行总监。在2010年之前，他是软件自由法律中心（SFLC）的FLOSS 共同体联络和技术总监。还曾于2001年至2005年3月担任自由软件基金会（FSF）的执行董事。并于 2010年3月当选为FSF董事会成员。

Kuhn 令人津津称道的是其执行 GPL 的能力，无论是自由软件基金会还是在软件自由法律中心，曾经创建了 FSF许可证清单，也是 Affero 通用公共许可证的原始作者。长期以来，他一直是FLOSS开发的非营利组织的拥护者，并通过 Software Freedom Conservancy 来作为实际的践行者而活跃着。

为了不至于将本文的主旨偏离的太远，这里仅介绍他早期的一些有趣的历史，希望能够显现出一个人的轨迹是如何决定成为自由的斗士的。

Kuhn 是辛辛那提Linux用户组的早期活跃成员，且于1998年在其董事会任职，并作了很多的演讲分享。库恩在整个研究生院都自愿参加了自由软件基金会的工作，并于2000年1月被兼职为理查德·斯托曼（Richard Stallman）的助手。在此期间也颇得 Stallman 的赏识，经常在邮件列表上以专业的身份被Stallman 转载。在2001年的读研究生期间，Kuhn 获得了由[USENIX](https://en.wikipedia.org/wiki/USENIX) 资助的研究计划：将Perl语言移植到Java虚拟机中，众所周知，Perl 是非常重要的自由软件项目，Perl 的创始人Larry Wall 指导了 Kuhn，Kuhn的论文显示了有关在Perl中使用基于堆栈的虚拟机的各种问题，并且这一发现成为启动 Parrot 项目的理由的一部分。顺利毕业。

### Karen Sandler

这位当前的 SFC 的执行总监，从2014年上任以来，让 SFC 壮大了不少，在项目的托管上，还是名誉上都走的非常的不错。

早担任 SFC 的执行总监之前，Sandler 可是大名鼎鼎的 Gnome 基金会的执行总监，除了带领 Gnome 让Linux 的桌面系统大放光彩之外，还成立了鼓励女性参与自由/开源软件的组织：[Outreach Program for Women](https://en.wikipedia.org/wiki/Free_and_Open_Source_Software_Outreach_Program_for_Women)。

不过在这之前，Sandle 的成长期，还是在软件自由法律中心担任无偿顾问的时候，除了接触各个基金会、非营利组织之外，这一阶段的演讲也让她声名大震于江湖。

她的演讲特别的受欢迎，淡定、坚持、有力，给人以鼓舞。她还是2017年的自由软件大奖的获得者。

### 旗下所托管的自由/开源软件项目

如果看官你过去没有了解过SFC 下项目的话，下面的列表可能会让你吃惊不小：

**[ArgoUML](http://argouml.tigris.org/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/argouml.jpg">
</p>

> ArgoUML 是一款 UML 建模工具，支持所有 UML 1.4图表标准。可以在任何的 Java 平台上运行，并且有十种语言可用。

**[Backdrop CMS](https://backdropcms.org/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/Backdrop-Logo-Vertical.png">
</p>

> 这是一款 Drupal fork 的项目，着重于功能，性能和可用性。

**[Bongo](http://bongo-project.org/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/bongo.png">
</p>

> Bongo 项目是一款创建有趣的、简化邮件、日历、以及联系人的软件。Bongo 提供了一个完全自由的软件解决方案，该解决方案与公司邮件场景无关，而更多地关注人们如何组织生活。

**[Boost](http://www.boost.org/)**

<p>
<img align="right" width="150" height="60" src="https://sfconservancy.org/img/projects/boost.png">
</p>

> Boost 提供了免费的经过同行评审的可移植的 C ++ 代码库。

**[Buildbot](http://buildbot.net/)**

<p>
<img align="right" width="150" height="60" src="https://sfconservancy.org/img/projects/buildbot.png">
</p>

> 是一款自动化构建、测试、发布流程的工具。2003就发布了第一版。

**[BusyBox](https://busybox.net/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/busybox.png">
</p>

> 这款大名鼎鼎的软件，该软件可以将 Unix/Linux 下常用的程序：`ls`、`cd`、等等打包为一个可执行文件就可以搞定。

**[Clojars](https://clojars.org/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/clojars.png">
</p>

> Clojars是 Community 维护的仓库，其中包含使用Clojure编程语言编写的免费和开放源代码库。

**[Etherpad](http://etherpad.org/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/etherpad.svg">
</p>

> Etherpad 是一个高度可定制的基于Web的编辑器，提供实时的协作编辑。

**[Git](https://git-scm.com/)**

<p>
<img align="right" width="150" height="100" src="https://sfconservancy.org/img/projects/git.png">
</p>

> Git是一个自由的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。
>
> Git 这个版本控制工具，改变了世界！

**[Homebrew](http://brew.sh/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/homebrew.svg">
</p>

> Apple 的 Mac OS X 操作系统下的软件包管理器，Homebrew 可以让 Mac OS X 用户可以使用开源软件
>
> ，那些Mac OS  X 默认不会安装和支持的。

**[Inkscape](https://inkscape.org/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/inkscape.svg">
</p>

> Inkscape 是一个开源矢量图形编辑器，使用开放标准的可伸缩矢量图形（SVG）文件格式，其功能与Illustrator，Freehand，CorelDraw 或 Xara X 相似。Inkscape的主要目标是创建一个功能强大且方便使用的绘图工具，该工具完全符合XML，SVG和CSS标准。

**[QEMU](http://qemu.org/)**

<p>
<img align="right" width="300" height="150" src="https://sfconservancy.org/img/projects/qemu.svg">
</p>

> QEMU是一个通用的开源计算机仿真器和虚拟器。
>
> 非常流行和强大的开源软件！开源之道献上自己的膝盖。

**[Teaching Open Source](http://teachingopensource.org/)**

<p>
<img align="right" width="60" height="60" src="https://sfconservancy.org/img/projects/teaching-open-source.png">
</p>

> 开源教学（TOS）存在的理由，就是希望能够为自由/开源软件共同体提供讲师，在一些机构来进行开源的布道和讲解。

**[Wine](http://www.winehq.org/)**

<p>
<img align="right" width="40" height="100" src="https://sfconservancy.org/img/projects/wine.png">
</p>

>Wine 是 X 和 Unix 之上 Windows API 的开源实现。

限于篇幅，这里就不为大家全部介绍了，仅就知名度高的项目做一简单描述，在我们所生活的世界起着非常之大的作用的项目，更进一步的信息，请移步具体的项目链接了解。

单单就 `git`项目而言，已经是影响这个世界的协作方式的工具了，全球几千万人都在日常使用这个软件。

### SFC  做什么？

SFC 从一开始就致力于在开源软件项目的代码和文档开发之外的所有事务，进而帮助到 FLOSS ，从而达到让开发人员可以专心的去做自己擅长的事情：打造优秀的公共产品（public good）的软件。以下内容是 SFC 为其旗下受托的 FLOSS 项目提供的服务和指导：

#### 免税的、专项捐赠

SFC 的成员项目可以通过 Conservancy 获得专项的捐款。Conservancy 是在纽约成立的501（c）（3）慈善机构，所有捐赠到 Conservancy 的款项均是免税的。此外，捐助者可以指定成员项目来进行捐赠，而且这些资金由 Conservancy 存放在该成员项目的单独帐户中，这种结构可以防止开发人员将项目资金与自己的个人帐户相混淆，也不必设置自己的项目专用帐户。

由于 Conservancy 是一个免税的组织，因此从法律上讲，成员项目可以使用其资产执行的操作有一些限制，当然，这些限制，和那些独立的非营利实体是一样的，没有啥差别。通常情况下，项目的领导成员会告诉 Conservancy 成员来如何使用项目的资金。根据 Conservancy 的501（c）（3）非营利性法则，Conservancy 可以将这些资金用于很多支出，几乎囊括了该有的所有活动，如:

* 资助项目开发商参加相关会议的差旅费用。
* 域名费用，带宽费用和计算机设备的购买。
* 在一些大型会议和开源活动当中，为分发项目软件的宣传渠道上的开销。
* 按合同向主要的开发人员付款，以改进项目的软件和文档。
* 为项目赞助会议，或者是组织会议。
* 商标注册和执行。
* FLOSS许可证执行和合规性相关。

#### 资产管理

Conservancy 可以代表为成员项目持有任何形式的财产，这包括版权、商标、域名、物理计算机设备或以项目名义所正式持有的任何物品。另外，成员项目不需要将所有财产都托付给 Conservancy 。 （举例来说，成员项目有权保留自己的版权。）一句话，Conservancy 可以满足那些希望受非营利实体控制、仅出于公共物品等的所有需求。

#### 合同谈判和执行

项目在这个社会起作用，有时难免会需要与公司进行谈判并签订合同。举个例子，当一个项目想要组织以及召开会议时，是需要特定的场所的，那么这些场所是属于某个组织的，通常需要签订一份用于租赁空间和服务的合同（通常条款蛮复杂）。那么这个时候，Conservancy 就有了用武之地，它可以帮助项目来进行谈判，并代表项目来签署这些合同。

#### 会议后勤支持

一个较为成熟的 FLOSS 项目，每年肯定会举行一次年度的研讨会，Conservancy 会提供靠谱的后勤支持，尤其是财务、涉及赔偿等方面，当然在管理之类的问题上, Conservancy 在能力范围内也会提供。

#### 基本的法律咨询和服务

当项目加入到 SFC 时，就成为了 SFC 的一部分了，因此 SFC 会通过本身的法律顾问、邀请的外部顾问、以及一些无偿提供服务的律师为这些成员项目提供基本的法律相关服务。例如，Conservancy 会协助成员项目处理与商标注册、商标政策制定和许可，商标执行，版权许可和执行以及非营利性治理等等相关的问题。

#### FLOSS 版权许可执行

遵守 FLOSS 许可证很容易，因为它们允许并鼓励非商业性和商业性的分发以及改进，但是，违反 FLOSS 许可证（尤其是GPL和LGPL）的情况也非常的普遍。根据项目负责人的要求，Conservancy 可以代表项目的版权所有者进行许可证的执行相关。

#### 筹款援助

Conservancy 为其成员项目提供各种工具、建议，即各种为项目的专用帐户筹集资金的方法。

#### 避免非营利行政管理

按照美国的相关法律，一旦成立了非营利的组织，需要有相应的组织架构，如董事会选择、层级式的管理、维护公司的日常记录、等等规定下必须做的事情，成员项目在加入 SFC 之后，可以毋须做这些繁琐的“政治”工作，完全由SFC 全权代理。专心的开发公共物品就好了。

#### 领导力辅导、咨询和指导

SFC 本身的主管均是来自 FLOSS 圈内的，有着丰富的经验。可以为项目在遇到困惑、增长挑战之类的提供一些建议和指导。

#### 个人责任保护

当项目加入 SFC  之后，就正式的成为了 SFC 的一部分了。从某种程度上说，项目也是 SFC 的一部分了，SFC也会为 项目的负责人承担一定的责任保护。

#### 主持共同体（Community）选举和投票倡议

SFC 会帮助项目来主持一些共同体的选举和投票的工作，当然也开发了在线的投票系统来辅助完成这一重要的工作。

### 一些运营和管理细节

Software Freedom Conservancy，Inc. 是在纽约成立的501（c）（3）非营利组织。SFC 旨在帮助、推广、改进、开发和捍卫自由、开源（FLOSS）项目。

具体的财务支出，可以参考[公开备案](https://sfconservancy.org/about/filings/)部分，自成立以来，理念的所有开销均在这里可以看出来。请允许笔者偷个懒，解读这些日常的细节，确实是非常考验人的工作，不过，另外有个好处，就是可以反过来去推敲一个非盈利的软件组织都会在哪里有开销，这在中国尤其实用，因为很多规划都是从预算开始的。

日常的事情，我们在上一节已经详细的讲了，董事会也好，Staff也罢，甚至是外围的法律顾问也好，没有那么多的规则和章程，反正有事情做就好了。真不知道，他们怎么可以做这么久，而且还蒸蒸日上的感觉。

### 组织架构

笔者根据 SFC 网站的公开信息，画出如下一副图：

![](/images/sfc-people-arch.png)

从此来说，SFC 威慑的作用更大于其实际的动作，当然除了能够获得免税的捐赠之外。另外一个就是这些人的介绍，笔者就不为大家一一翻译了，正是这些人捍卫了FLOSS 软件项目，才有诸如Homebrew、Git、QEMU、InkSpace这样优秀的自由/开源软件造福人类，保证其可持续性的发展。当然，赞助者文化更加的关键和重要，一个社会的健康度是体现在这些每一个细节当中。

## 反思：本土的法律土壤

这个是画外之音，我不清楚，也无法解答为什么本土的法律相关从事人员为什么不将一些 FLOSS 项目给保护起来。但是就我所知，甚至都没有相关的法律从业者，和开源相关的律师之类的，大多为了合规而寄生于某些企事业单位。也就是说本土的环境，是没有取得平衡的，就像很多事情，是一刀切的，堵住了所有的可能性。

木兰许可证已经发布，而且也获得了OSI的认可，那么接下来的事情，将会是什么样子的？如果有人违反了木兰许可的条款，谁来站出来为项目撑腰？去诉讼违法的个人或厂商？也就是说谁来捍卫本土FLOSS的开发者和组织？

法律是FLOSS的基石，所谓的基金会不过是个实体罢了。聪明的读者，这个时候是否能够明白些什么？

## 参考资料

1. **Moglen plans "general counsel's office for the entire movement"** https://web.archive.org/web/20061114183437/http://trends.newsforge.com/trends/05/02/11/2216239.shtml?tid=147
2. Free software's white knight https://web.archive.org/web/20061107160224/http://news.zdnet.com/2100-3513_22-6051589.html
3. An Effort to Help Free-Software Developers Avoid Suits https://www.nytimes.com/2005/02/01/technology/an-effort-to-help-freesoftware-developers-avoid-suits.html
4. 维基百科：Eben Moglen https://en.wikipedia.org/wiki/Eben_Moglen
5. 维基百科：自由软件基金会 https://en.wikipedia.org/wiki/Free_Software_Foundation
6. 维基百科：Software Freedom Law Center https://en.wikipedia.org/wiki/Software_Freedom_Law_Center
7. Software Freedom Law Center Launches Conservancy https://www.softwarefreedom.org/news/2006/apr/03/conservancy-launch/
8. 维基百科：Karen Sandler  https://en.wikipedia.org/wiki/Karen_Sandler
9. 维基百科：Software Freedom Conservancy  https://en.wikipedia.org/wiki/Software_Freedom_Conservancy
10. 维基百科：Bradley M. Kuhn  https://en.wikipedia.org/wiki/Bradley_M._Kuhn
11. Karen Sandler's LCA 2018 keynote "Hey, did you ever get the source code to that thing in your heart" https://www.youtube.com/watch?v=k2FNqXhr4c8
12. Linksys/Cisco GPL Violations https://lwn.net/Articles/51570/
13. openTV 违反GPL 案 https://web.archive.org/web/20030524174013/http://weblog.siliconvalley.com/column/dangillmor/archives/001029.shtml
14. Software Freedom Law Center Launches Conservancy https://www.softwarefreedom.org/news/2006/apr/03/conservancy-launch/
