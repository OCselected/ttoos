---
categories:
- 开源
- 基金会
date: 2020-04-07T11:43:19+08:00
description: "赞助者文化、法律支撑、社会自组织、信任关系、工程技术等等关系铸就了开源软件非营利基金会机构的建立，这不是一个章程、一笔资金、一条中央指示的事情，就让我们来从技术的角度出发，来看看一个优秀的基金会的演变史。"
keywords:
- Open Source
- Culture
- Reading
- News
- foundation
tags:
- 基金会介绍
- 开源之道
title: "专注于开源数据科学软件的非营利基金会—— NumFOCUS 的来龙去脉"
authors:
- 开源之道
---

## 从开源项目说起

读者你如果是顺着开源之道关于介绍开源软件非营利基金会一路过来的，那么可能会明确的感受到了一点，那就是目前较为成功的基金会都是从小发展起来的，和世界上所有的机构组织的发展路径类似，可以总结为一个模式：

**发起开源项目 -> 以共同体的方式进行协作 -> 共同体发展的很不错 -> 建立治理和决策方式 -> 为了资助，建立法律实体 -> 法律实体分离出非营利软件基金会 -> 状大开源项目，孵化更多优秀的项目。** 

 而极少出现反过来的情形，也不清楚反过来的路径是否可行？尽管有一些尝试，也已失败而告终。如[Outercurve Foundation](posts/foundation_introduce/the-rise-and-evolution-of-open-source-foundation/)，不过中国的情况要特殊许多，如果有机会的话，我也希望给大家介绍一些中国的组织，我指的是类似开源软件非营利基金会这样的组织，如[开源社](https://kaiyuanshe.cn/)、[**中国开源软件推进联盟** COPU](http://www.copu.org.cn/)、[中国开源云联盟](http://www.coscl.org.cn/)、[云计算产业开源联盟](http://opensourcecloud.cn/)、[启智开源社区](https://openi.org.cn/)等等，以及工信部可能会在今年成立的中国开源软件基金会之类的，这些组织的发展思路，就是想跳过1、2、3步，直接进入第5步。当然，就和中国现代所有的社会试验一样，开源非营利基金会也是同样的命运，要找到适合中国文化和环境的组织机构和运转方式，仍然需要很长的一段路要走。

在此埋伏完伏笔之后，让我们进入本文的正题—— 开源项目说起，从务实的角度讲，工程师很少相信意识形态、形而上的内容，这就是在开源界非常流行的那句Linus 的经典语录：

> Shut your f**k up, Show me your code.

### IPython

从开源之道发起人适兕个人来讲，IPython 曾经是他最喜爱使用的一个交互式Shell，一度在自己的工作站上Gnome环境一登录就启动 IPython。

IPython 可以说是一个Python和 Bash的一个整合，不仅对数字计算更加的友好，也可以直接调用操作系统的命令，当然后来作者基于IPython又开发了 [Jupyter](https://en.wikipedia.org/wiki/Project_Jupyter)，而IPython就是Jupyter的默认内核。

还有更为被人们喜欢的特性就是和其它可视化的工具直接的整合，如 [matplotlib](https://en.wikipedia.org/wiki/Matplotlib) 。

IPython 在2012年获得自由软件基金会颁发的自由软件奖，而Jupyter 则在2017年获得了ACM 软件系统奖。

关于IPthon 和Jupyter 的具体细节，笔者这里就不赘述了，有兴趣的读者可以下载体验，由于其流行程度较高，文档、书籍也比较的全面。

另外，我们还要提及IPython的作者：Fernando Pérez， 这位物理科学家，也是一位自由软件开发者，同时也是自由软件的布道师，目前在加州大学伯克利分校统计系助理教授。在2001年开始启动了IPython项目，并在4年后开发Jupyter，直到现在。他也是Python基金会的Fellow，同时是 NumFOCUS 的创始成员。

### SciPy

这是一个被广泛使用的Python类库，用于科学计算，它提供了许多用户友好且高效的数值例程：[最优化](https://zh.wikipedia.org/wiki/最优化)、[线性代数](https://zh.wikipedia.org/wiki/线性代数)、[积分](https://zh.wikipedia.org/wiki/积分)、[插值](https://zh.wikipedia.org/wiki/插值)、[特殊函数](https://zh.wikipedia.org/wiki/特殊函数)、[快速傅里叶变换](https://zh.wikipedia.org/wiki/快速傅里叶变换)、[信号处理](https://zh.wikipedia.org/wiki/信号处理)和[图像处理](https://zh.wikipedia.org/wiki/图像处理)、[常微分方程](https://zh.wikipedia.org/wiki/常微分方程) 求解和其他科学与工程中常用的计算。

### Matplotlib

**matplotlib** 是Python编程语言及其数值数学扩展包 NumPy的可视化操作界面。它利用通用的图形用户界面工具包，如Tkinter, wxPython, Qt或GTK+，向应用程序嵌入式绘图提供了应用程序接口（API）。此外，matplotlib还有一个基于图像处理库（如开放图形库OpenGL）的pylab接口，其设计与MATLAB非常类似。SciPy 就是用matplotlib进行图形绘制。

### NumPy

这可以明星项目了，创始人Travis Oliphant 甚至创建了著名的数据公司 Anaconda ，2006年创建以来，项目非常活跃，也是科学共同体驱动的开源项目的典范，Python默认一般都带这个库。

上述项目在科学界有着非常广泛的应用，免费分发给全世界，也获得了广大学界的认可。但是怎么保证其可持续性的发展了呢？公益组织如何帮助这些优秀的自由/开源软件项目了呢？	

## 科学计算共同体

> NumFOCUS 设想了一个具有包容性的科研共同体，该共同体将利用积极支持的开源软件来做出有意义的发现，从而创造一个更美好的世界。
>
> ​               ———— NumFOCUS 愿景

随着上述这些项目的成长，它们也渐渐的发展成为了一个更大的共同体，因为他们有着相同的部分：**开放的科学计算**，基于这样一个共识，那么为什么不成立一个法律实体了呢？大家抱团取暖：

于是Travis Oliphant (NumPy的作者), Fernando Pérez (IPython的作者), Perry Greenfield (Numarray 和 Astropy的作者), John Hunter (Matplotlib 的作者), Jarrod Millman (SciPy 发布经理), 以及 Anthony Scopatz （撮合者），坐在一起一商量，一拍即合。

于是成立了NumFOCUS基金会，注册在美国的501(c)(3)，是公共慈善组织，这5个人就是第一届的董事会成员。

## 怎么做？

通过我们第一批公司赞助商的慷慨捐助和PyData教育活动系列的推出，为NumFOCUS提供了早期的财务支持。

早期的时候，Continuum Analytics (现在叫做 Anaconda) 提供了非常多的帮助，包括为 NumFOCUS 提供办公室、技术支持人员、以及执行总监的工资，乃至启动第一届的PyData，为早期的活动提供资源和资金，这也间接的资助了 NumFOCUS， 因为大会的收入算做是 NumFOCUS 运营的费用。

微软在2013年为 NumFOCUS 提供了一笔大笔捐款，用于支持我们的第一个财政资助项目 IPython。同年，摩根大通也捐助了一笔捐款，以支持我们的女性参与技术计划（现在称为“科学计算中的多样性与融合” — DISC）和约翰·亨特技术奖学金。

嗯，就这样一年一年的经营起来了，后面我们会给大家介绍去年2019年，整个基金会的年度报告，即所谓的成绩。

####  使命宣言 （共同体的必需项）

**NumFOCUS 的使命是倡导在研究、数据和科学计算方面的开放实践，通过为开源项目提供财务上的赞助，以及基于共同体驱动的教育计划来达到此一目的。**

NumFOCUS 设想了一个具有包容性的科研共同体，该共同体将利用积极支持的开源软件来做出有意义的发现，从而创造一个更美好的世界。

未来的愿景和现实的任务，有了这两条，基本上一个组织就不会有很大问题，剩下的都是细节处理，正如我们下面要交代的一样。

#### 董事会成员和选举

NumFOCUS  和其它我们介绍过的非营利软件基金会没有啥差别，有三种类型：

* 董事会成员
* 雇员
* 顾问委员会

关于选举的过程，就是你首先需要成为[共同体的一员](https://numfocus.org/membership)，然后做贡献，开会，进行选举。而所有的会议都是公开的，历次会议大家可以参考：[选举过程](https://numfocus.github.io/numfocus-board/resolutions/)，具体的章程，笔者就不在这里介绍了，有兴趣的读者可以将其所有的过程进行复审。

当前的所有NumFOCUS成员列表：[https://numfocus.org/community/people](https://numfocus.org/community/people)，理解董事会成员[列表](https://numfocus.org/board-history)。

#### NumFOCUS 自身发起的活动

* PyData ，是一个教育类活动，在全球都有非常活跃的教学，而且还有大型的会议。也是基金会主要的收入来源。
* 接受资金赞助，这也是NumFOCUS注册为慈善机构的最大益处。
* 和Google编程之夏有着不错的合作
* 支持关联项目
* 举办活动，包括**多样性DISC**、**FEniCS Con** 、**Python in Astronomy** 、**JuliaCon** 、**StanCon** 、**rOpenSci Unconference, Ozunconf** 、**JuMP-dev Workshop** 等等

#### 如何选取项目以及项目类型

NumFOCUS 对于项目的支持有着非常明确的态度和方法，有如下三类，

* 共同体
* 推广
* 资助

从项目领导者的角度来讲，能够参与到 NumFOCUS 网络中来，这意味着能够和面向科学的开源项目共同体中人进行日常的沟通，NumFOCUS 会充分利用这一点，将多年以来建立起来的面向全球的汇聚有所发挥。

NumFOCUS 已经拥有了足够的曝光度，尤其是这么多年的努力，在业界赢得了不错的口碑，致力于通过各种交流和市场活动来推广相关的项目，尤其是潜在的赞助商的连接。

所有 NumFOCUS 支持的项目都有资格通过我们的以下两个计划获得资助：

##### 小型开发补助

NumFOCUS 会提供少量开发捐赠款项，以帮助我们的项目提高可用性，发展其共同体并加快主要版本的发布时间。 当然仅限于已成为 NumFOCUS 的资助项目和关联项目，征集建议书每年进行3次。 NumFOCUS 的个人捐助者和公司赞助者的慷慨捐助使小额发展补助计划的资金成为可能。

##### 参与Google 编程之夏

自 2015 年以来，NumFOCUS  就一直是 Google 编程之夏的主要参与者， NumFOCUS 的资助项目和关联项目都有资格参与到其中，NumFOCUS 负责一些琐碎的事情，参与的项目可以专注于指导学生和项目本身。

NumFOCUS 有两种项目类型，接下了笔者就简单解释一下：

##### 资助项目

资金资助的项目是NumFOCUS 正式的一部分。 NumFOCUS 为资助项目提供许多服务，包括财务管理、运营和法律上的支持。 资助项目也有资格使用 NumFOCUS 资源和基础设施来帮助该项目筹集资金。

要获得财政赞助资格，首先要成为关联项目，然后视表现而定，从而确保 NumFOCUS 可以合法代表该项目。

##### 关联项目

关联项目受益于它们与 NumFOCUS 的搭上的关系（如上所述）：有共同体、资金和推广。 关联项目在法律上与NumFOCUS 是撇清的。 NumFOCUS 对附属项目不承担任何法律或信托责任，也不为这些项目提供任何额外服务。当然，合作达到要求，是有机会成为资助项目的。

### NumFOCUS 对项目的要求

正如所有的基金会对项目的重视一样，NumFOCUS 对于项目也有自身的标准，

#### 面向科学

NumFOCUS 旗下的项目旨在为科学研究的发展做出贡献。 这意味着这些项目用于或者是解决一些新的研究难题，或者是使解决研究难题的能力大大提高（例如：更快、更轻松、更简单）。 这也通常意味着你的项目依赖于现有的 NumFOCUS 项目，或者是相互集成。

尽管 NumFOCUS 是采用开放式共同体的方式来维护一些软件项目的，但是不是软件的项目也是可以的，例如针对科学的教育类项目，是非常欢迎的。

NumFOCUS 支持更广泛共同体中的项目； 对于软件项目，这意味着可以与同一生态系统中的其他项目是互操作的。 支持多种语言的项目，包括Python，Julia，R，C ++和JavaScript。 由于NumFOCUS专注于科学工具，因此通用项目（IDE、实用程序、编程语言、构建系统等）通常不太适合。

#### 保持开放

“开放”，似乎对于开源界里是个不言而喻的词汇，但是这里还是有必要按照 NumFOCUS 的方式解读一番，意指项目是在标准的开放源代码许可下发布的，且将寻求所有人都可能参与是其核心的部分，以下是我们的共识：

* 项目是托管在公开的平台
* 一个网站或自述文件，以指导新的潜在项目开发者
* 开放给所有人可以参与的沟通渠道（邮件列表、论坛、Slack等）
* OSI 认可的许可证

以上内容并不是一个特定的清单列表，而是开源圈内大家通常对于一个开源项目的理解。

NumFOCUS 认为分布式决策是任何开放项目的关键属性，因此要求项目负责人不可以集中在单一的机构/公司之中。

另外，NumFOCUS 对于资助的项目，还有额外的要求：

* 透明，公开可见的治理模式。
* 对项目有一定的规划

#### 向善而行

NumFOCUS 希望建立一个健康、活跃的共同体。 NumFOCUS 坚信，只有每个项目都积极致力于使其共同体友好、包容和尊重每个参与者，才能实现这一目标。 例如，在公共论坛上欢迎新来者以及作出友好的回应。

对 NumFOCUS 而言，“向善”的重要组成部分是公开声明项目共同体的价值观和标准，并坚定的执行下去。 为此，NumFOCUS 项目必须具有行为准则：关于包容性和项目文化的面向用户的公开声明。

行为准则应包括禁止行为类型的解释（理想情况下应鼓励采取哪种行为），以及报告行为准则投诉的程序，解释由谁负责解决行为准则投诉（例如，委员会、项目负责人等），以及处理行为准则投诉的过程。

#### 支持/捐赠 NumFOCUS 的方式

支持一家非营利软件基金会的方式主要有以下几种重要的方式：

* 以实际行动参与到该组织当中，花时间为项目、组织本身、活动做贡献。
* 有钱的企业就捧个钱场，
* 也接受个人的捐赠，这一点和Wikipedia、SFC 等组织没有区别
* 有项目支持是最好不过得了
* 来 NumFOCUS 购买点什么
* 帮忙做宣传

这个世界上有许多形形色色的组织，组织也在做各种各样的活动，不过在中国要稍微麻烦和复杂些，首先没有非营利软件基金会这种组织，另外除了政府之外，人们之间的信任是无法建立起来的，目前来说，只有商业公司受到法律的保护。这一点需要改变的部分还有很长的路要走。

## 现在的成绩

我们不妨解读一番其在2019年的年度报告吧，这个是最有价值的部分了。

#### 赞助项目

正如开源之道前期介绍的开源组织一样，NumFOCUS 是政府注册的合法的法律实体，可以接受财务上的捐赠，那么这也就意味用于科学计算的开源项目是可以获得捐助的，而且 NumFOCUS 还提供法律、运营等方面的支持或服务。

这里不妨列一下 NumFOCUS 旗下所赞助的项目，这也是笔者为什么选择这个组织的重要原因，尤其是看过 SFC 的文章，看完之后就明白这些开源项目对于我们的世界是多么的重要了。

![](images/numfocus-annual-report-2019/sponsor-projects.png)

除了我们开始的引言部分的项目之外，还有诸如[Open Journals](https://numfocus.org/project/open-journals)、Pandas、Julia这些耀眼的明星项目。

#### 关联（affiliated）项目

关联项目意味着不能直接获得 NumFOCUS 的赞助支持，不过可以获得如下好处,当然前提也要满足 NumFOCUS 对项目的基本要求：**科学、开放、友善**：

* 在 NumFOCUS 的网站上列出项目
* 隶属于 NumFOCUS内部项目开发人员邮件列表
* 有机会获得 NumFOCUS 小型开发资助
* 有机会以 NumFOCUS 名义下参与Google 暑期开发

相对来说，这里的项目类似于其它基金会的孵化阶段，这和SPI的关联项目完全是不同的待遇，有的时候，同一个名词在不同的人或不同的组织下，是完全不同的意思，可能项目的活跃度、使用者数量等不是那么的明星，因为 NumFOCUS 仅仅列出的是项目简介，所以具体的答案无从得知，从关联到赞助项目是否有一个门槛还未得知。

比如 http://cython.org/ 这个项目是非常不错的，加速Python的运行，重新编译。是一个关联项目，但不是赞助项目。这其中的玄机还需要慢慢挖掘。

#### 资助者来自哪里？

![](images/numfocus-annual-report-2019/revenue.png)

我们看到 NumFOCUS  的资助比例，和以前聊到的SFC、SPI 等是完全不同的，NumFOCUS 最大的资助来自于其它的基金会，如2019年有如下四家大的资助：

* **Gordon and Betty Moore 基金会**：在2019年，该基金会赞助了 NumFOCUS 项目 [**Astropy**](http://numfocus.org/project/astropy) [90万美元](https://numfocus.org/blog/astropy-receives-900k-grant-from-moore-foundation)，这也是 NumFOCUS 迄今为止接收到的最大金额的单笔捐赠。
* **Chan Zuckerberg Initiative** : 这是Facebook 创始人 夫妇创立的慈善组织，为科学研究的开源项目软件pandas、**Project Jupyter** 、Matplotlab、SciPy、NumPy、Zarr等6个项目提供了资金捐助。
* **Alfred P. Sloan 基金会** : 通过赞助大会的方式提供捐助，其中为 NumFOCUS summit 2019捐助了3万美金，为JuliaCon提供了2万美金。
* **NASA -[太阳物理学数据环境增强计划](https://science.nasa.gov/heliophysics/programs/research)**: 该计划的全称是：“为太阳物理学提供支持和扩展的 SunPy 共同体”，资助为期一年，该项目将创建光谱数据类型， SunPy 会提供更多的坐标系统。此外，还将创建演示SunPy和其他面向太阳物理学的Python包的使用的代码片段。最后，为了提高 SunPy 的长期可维护性，还会对代码库进行大量的改进。

除了最大的间接的捐助之外，第二大来源来自于企业的赞助，这和其它基金会没有区别：

![](images/numfocus-annual-report-2019/Corporate-Sponsors.png)

看起来重视科学计算的企业都在内了，云计算的巨头都在。

还有一个收入来源就是 [PyData](https://pydata.org/) 教育平台了，赞助商还真是大牌在列啊：

![](images/numfocus-annual-report-2019/pydata-sponosrs.png)

以及个人赞助，这些名字应该被我们记忆，尤其注意这点和本土的不同：

![](images/numfocus-annual-report-2019/personal-sponsors.png)

更多的名单，请参阅其年度报告。

## 开源之道后记

对于一家机构，从时间、事件、人物、社会意义、活动等等形式来进行描述，但是直白的讲解这些总是显得苍白无力，故事哪里去了？这大概是一个作为只能从网站、Wikipedia渠道来了解这些的悲哀之处了。有机会和这些董事会的接触，进行一番开源之道talking，那该是多么美妙的一件事，可以更加深入的了解这些人，以及他们做的伟大的事！

## 参考资料

1. IPython: A System for Interactive Scientific Computing  http://fperez.org/papers/ipython07_pe-gr_cise.pdf 
2. 维基百科 John D. Hunter  https://en.wikipedia.org/wiki/John_D._Hunter
3. 维基百科 SciPy https://en.wikipedia.org/wiki/SciPy
4.  NumFOCUS 年度报告 https://numfocus.org/community/mission/annual-reports
5. PyData 网站 https://pydata.org/ 
6. 维基百科 Fernando Pérez   [https://en.wikipedia.org/wiki/Fernando_P%C3%A9rez_(software_developer)](https://en.wikipedia.org/wiki/Fernando_Pérez_(software_developer))
7. 维基百科 Matplotlib  https://zh.wikipedia.org/wiki/Matplotlib 
8. 维基百科 NumPy https://en.wikipedia.org/wiki/NumPy 
9. 维基百科 Travis Oliphant  https://en.wikipedia.org/wiki/Travis_Oliphant 