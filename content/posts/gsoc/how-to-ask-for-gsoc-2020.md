---
categories:
- 开源
- 大学生编程
date: 2020-02-25T16:16:01+08:00
description: "这是一篇 Google Summer of Code「简称 GSoC」申请攻略。"
keywords:
- Open Source
- Culture
- Reading
- Google Summer of Code
tags:
- 大学生编程
- 编程之夏
- 软件开发
- 开源之道
title: "【编程之夏】GSoC申请全攻略：14位入选者访谈、近10所大学讲座综合整理"
url: ""
authors:
- 编程之夏——周迪之
---

## 前言

文章中的观点与实例均建立在以下两类数据基础之上。

- 2018 年 10 月至 2019 年 2 月，自媒体所发布的 **14 位 GSoC 入选者访谈。**
- 2018 年，自媒体成员从中国**近 10 所大学**举办的国际**开源实习讲座**中所获取的学生反馈

我们对这些参与访谈的同学，以及为我们提供讲座机会的中国大学老师们表示衷心地感谢！

*注：文中所列举的开源社区均为 GSoC 2019 入选组织*。

## **正本清源，GSoC 是怎样一种编程活动** 

知己知彼，百战不殆。大家申请 GSoC，首先要清楚 GSoC 的特点。

在这项大赛中，尽管 Google 定义了 GSoC 的运作框架并提供了所有的资金支持，但具体的实施则全部交由开源社区完成。

- 例 1，Google 虽然规定了项目申请的形式，即提交申请书「proposal」，但申请书的审核、筛选，甚至包括项目最后是否通过，则完全由开源社区负责。
- 例 2，Google 虽然为 GSoC 提供全部的资金支持，但 GSoC 中所有的项目题目，都是由开源社区自行制定。

这种由开源社区驱动的运作模式，导致 **GSoC 没有一个严格统一的审核标准与难度级别**。这并非缺点，恰恰相反，我们认为这是 GSoC 最有魅力之处。因为这本来就是现实世界的模样。

> GSoC 的这种模式并非毫无破绽。我们的一位受访者就曾表示这种模式导致了 mentor 拥有过大的权力。但这不是我们今天讨论的重点。

### 一、没有统一的审核标准

要求上千名来自不同国家、不同年龄、不同背景的 mentor 以统一的标准审核学生是不现实的。尽管 Google 推出了 mentor guide，但也只是一个建议，且很难保证所有人都有相同的理解。

此外，一些开源社区除了申请书外还有附加申请要求，如完成一个指定小项目「如ns-3社区」，阅读相关参考文献「如Framenet」，回答指定问题「如TensorFlow」等等。

![](https://mmbiz.qpic.cn/mmbiz_png/ibNhs76xTHOztQE2a8E5nU7TGHk7uo73KEZb0V3fpL351dNhkEVUMVWSEmWYYSrDCBV465NZgPkAPjbiaWttDS8w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在 GSoC 2016 中，年龄最大 mentor 为 78 岁，最小的只有 14 岁，相差达半个多世纪！

### 二、没有统一的难度级别

GSoC 难吗？这是很多学生的一个疑问。其实我们认为这是一个意义不大的问题，因为它对选择社区、制定 GSoC 申请策略其实并无太大关系。

抛开申请人自身能力对项目难度的影响，单看 GSoC 中的项目本身，也难有一个统一的难度指数。这是由 GSoC 项目的来源多样性与边界模糊性所决定的。

**来源多样性**：通常，一个入选 GSoC 的开源社区会维护一个 idea list，列出今年供学生申请的项目题目。这些题目有些来自于 mentor 感兴趣的新功能，有些来自于有待改良的现有功能，更有些直接就是学生自己提出的题目。他们涉及一个大项目的不同组件，技术需求也不一而足。

**边界模糊性**：通常 GSoC 中的项目只有一个大目标，没有一个清晰的边界，需要申请人与 mentor 在不断的沟通中细化。下面是笔者所在的网络模拟器 ns-3 社区在今年 GSoC 中的一个项目实例，显示了 GSoC 中这种题目模糊性的特点。

> 项目题目：Usability improvement
>
> 简化描述：**Usability of ns-3 can always be improved,** whether it is help with improving the user experience, visualizing data or software packaging (e.g. Docker containers). 
>
> **We don't want to limit the scope of proposals here**; we will consider any project ideas that improve ns-3 usability in some way (please **describe how you plan to get it done during the timeframe of GSoC**). 
>
> 链接：
>
> https://www.nsnam.org/wiki/GSOC2019Projects#Usability_improvements

这两个特点决定了我们在申请阶段很难评定一个项目的难易，因为项目要求本身并不完整，需要在学生与 mentor 的沟通过程中不断地细化，甚至颠覆。

从这个角度上讲，**GSoC 的难度，可以看作是申请人与 mentor 共同制定项目目标、解决方案等细节的难度**，而全非项目本身的技术难度。这与那种有标准答案的考试完全不同。

这么看来，申请人与 mentor 更像是合作者，而非雇员与老板的关系。

> 也许有些同学会问，不是很多社区在 idea list 中会给出项目的难易级别吗？这其实只是 mentor 自己对项目难度的评估，并不具备普世意义。我们也不建议以这些主观评定的难易度作为选择项目的主要考虑因素。

这种看似松散的模式赋予了申请者极大的自由权，让每位同学可以自由地选择适合的项目，定义符合实际的项目目标。**这也对申请者提出了一个要求，即主动的思考与交流**。要参与 GSoC，就必须对这点有清晰的认识。

![](https://mmbiz.qpic.cn/mmbiz_png/ibNhs76xTHOzlFPC4gacHibZU9rMe21z7nqNiatXyTbcUwzHjricoaENx32TASTpAZQLmQVmzxg3gHTZv6Jl08ic7BA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## **社区选择：适合自己的，就是最好的** 

“选择什么开源社区才能增大录取几率？哪个社区的项目经历对以后找工作最有利？老师，您有什么社区可以推荐吗？申请多个社区更容易被录取吗？”

这些都是我们经常收到的学生提问。其实这些问题归根结底就是一句话：哪个社区适合自己？**而****适合，取决于申请 GSoC 的目的**。单纯为了入选 GSoC 而申请，会让 GSoC 的效果大打折扣。

不可否认，Google 的奖学金是吸引很多同学参赛的目的之一，但绝不是唯一，甚至不是最重要的。

这是自媒体在采访了 14 位 GSoC 入选者之后的一个体会。GSoC 所能带来的也远超于此。我们把这些受访者的申请主要目的分为 5 类，供大家参考。

### 一、学习导向型

这类申请人往往并不具备很丰富的开源开发经验，但希望通过 GSoC 提升实战技能。这其实就是 GSoC 成立之初的目的之一：

> ”helping students find **work related** to their academic pursuits during their school holidays“

GSoC 的目的是教育。不要担心自己因为没有相关经验而不去申请感兴趣的项目，申请 GSoC 本身，就是一种学习技能的过程。

> 抱着学习的态度，我连续参加了两届GSoC。
>
> [两届GSoC入选者 - 广东药科大学陈景飘与strace项目](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247483927&idx=1&sn=24c5d53200c49cef7639b70dda692557&chksm=fb14b70bcc633e1d4f44a6b50acf3f60cfe2a31a790f47f3d455d06251ab61f82cb3704e0c99&scene=21#wechat_redirect)

很多成功的入选者，并非因为是技能出众，而是在申请的过程中展现了这种学习的能力与激情！

### 二、兴趣导向型

因为对某种技术的浓厚兴趣而申请 GSoC。

> 我也希借此机会进一步发展对计算机（如编程技术，集群计算）的兴趣
>
> [英国帝国理工大学杨泽宇，「代码」与「基因」](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247484140&idx=1&sn=aeeb689279144c9a8ec18420f89a5beb&chksm=fb14b7f0cc633ee6a9005deb2431f2050f852a94ad51dd5d2155fa52efa92a3bf80f94183381&scene=21#wechat_redirect)
>
> Xu Jiacheng：我之所以申请 CoreDNS 项目是因为我本身对分布式系统比较感兴趣，而且我也比较喜欢 Go 语言。
>
> [这次，我们与四位欧洲的华人留学生聊了聊Google Summer of Code](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247483975&idx=1&sn=44d883a0f4d837d01e24cb73f6cb9817&chksm=fb14b75bcc633e4dc8c7d6ebced3959b900b5a26c00c9accf2213f79b715c585fad87f915338&scene=21#wechat_redirect)

### 三、求职导向型

为找工作增加竞争力而申请 GSoC。这类申请人往往需要对日后求职方向有一个初步预判，然后在 GSoC 中寻找在该领域有影响力的开源社区。

> Yin Simei：我以后希望在游戏行业工作，而 ScummVM ... ... 在西方的游戏从业者中还是有很高知名度的。而从这次GSoC经历 ... ... 确实对我的求职面试帮助很大。
>
> [这次，我们与四位欧洲的华人留学生聊了聊Google Summer of Code](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247483975&idx=1&sn=44d883a0f4d837d01e24cb73f6cb9817&chksm=fb14b75bcc633e4dc8c7d6ebced3959b900b5a26c00c9accf2213f79b715c585fad87f915338&scene=21#wechat_redirect)

另外如果同学们有申请国外硕士或博士项目的计划，其实也可以通过申请 GSoC 中的大学研究团队项目来获取相关的学术界经验。

### 四、背景匹配型

选择那些与自己背景匹配的 GSoC 社区也是一种很好的策略，会增加录取几率。

> Benda个人的热情加上专业，以及本人长久的Gentoo用户经验使得我决定申请Gentoo的GSoC项目。
>
> [Gentoo开发者许朋程 -- 来自未名湖畔的GSoC故事](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247483806&idx=1&sn=10a5d2f8c2a02b85fb06b709e5777068&chksm=fb14b482cc633d945b58f16a77d38824105860bfdc2261b115d4979bbe7fe7c1dbbc69a10ec3&scene=21#wechat_redirect)

这类申请人往往已经在某个领域有了一定的积累，因此在硕士生与博士生中很普遍。

> 我的研究课题需要大量使用到CGAL库。申请该项目前我就对它有比较深入的了解。
>
> [学术GSoC - 中科院自动化所计算机视觉博士生Zhu Lingjie](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247483864&idx=1&sn=d096671c7bc2f45a93a4ef814e6154e9&chksm=fb14b4c4cc633dd2df1fcf6e7d2dd437626e54dcfedd28c736d3d37952c13981abecdedb5afe&scene=21#wechat_redirect)
>
> 实验室的研究方向和网络协议相关，加上之前参加了IETF 100，对于实现协议挺感兴趣的，就选择了实现AccECN和ECN++这两个草案（draft）的子项目
>
> [清华大学Wennie Dai - GSoC 2018 ns-3项目入选者](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247483777&idx=1&sn=ddbbcb85bedd17373baec7964e911e0c&chksm=fb14b49dcc633d8b3d1679cbc99659ae4d38b22431abeed9075feea28f19e3abb3777d9c8b9f&scene=21#wechat_redirect)

很多博士与硕士研究生申请人把 GSoC 当作自己科研课题的一个补充。很多人还在项目结束后与 mentor 联合发表了论文。

### 五、价值观导向型

因对开源价值观的认可而申请 GSoC。这种申请人往往可以较为长久的对开源社区做贡献。很多人从 GSoC 参赛者最终成长为开源社区的 mentor。受益开源，回馈开源。

> 一直以来我对开源软件的理念和运作方式都非常认同。... … GSoC可以说非常符合我的口味。
>
> [GSoC成长系列 - 从学生到导师（上）：上海交通大学研究生高策](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247484031&idx=1&sn=42136fedc8de4d784fd39418181698d7&chksm=fb14b763cc633e757c06289cab41560892fe08882748d0b57ca4af99b573f321da9819172a41&scene=21#wechat_redirect)
>
> Debian 的社區非常吸引我，因為他們是一群聰明而且包容的黑客，而且還資助我飛到比利時和南非參加峰會。於是我決定繼續參加 GSoC，並且也申請成為了 Debian 開發者。
>
> [GSoC成长系列 - 从学生到导师（下）：中国台湾國立臺中教育大學殷啟聰](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247484032&idx=1&sn=e2cedc29bc318534496a33742e1c2471&chksm=fb14b79ccc633e8a90948a3b34a659736ed92eae855868530255c7ddd60336acd5ca6608335b&scene=21#wechat_redirect)

诚然，这些目的分类仅仅是冰山一角，抛砖引玉。但清晰地了解参与 GSoC 的动机至关重要。它不仅仅影响到社区的选择，还会很大程度上决定你是否能够走完项目全程。毕竟 GSoC 是远程在线模式，在 3 到 4 个月的时间里，你需要有一定的自我管理能力。

而明确目的的过程，也就是自我审视的过程。前文所述的 GSoC 对申请人主动思考能力的要求，从社区选择便已开始。

> 关于申请多个社区，或一个社区的多个项目：GSoC 官方规定每人最多可以申请 3 个项目。我们对此的观点是申请书的质量大于数量。如果你想通过申请多个项目增加录取几率，最好尽可能保证每一份申请书都是你能达到的最高标准，并且经过与 mentor 的充分讨论。

![](https://mmbiz.qpic.cn/mmbiz_png/ibNhs76xTHOw7eNEibqvBzpFRJrgRnTFH0IfPErGznI4kLPHZhHxp5DtJjEj8vCdLE40jcIDDolxDGrPDeicchNRA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

延伸阅读：

[盘点28个首次入围GSoC的国际开源社区「上」：企业篇](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247484218&idx=1&sn=d3bfe1e7ac917ac6066337345116a655&chksm=fb14b626cc633f301922bde7dfc09a2ce10cd3a05ecf1647b84ae5a81d3bae2f8ee455aaa19e&scene=21#wechat_redirect)

[「大学」与「NPO」，GSoC中那些首次入围的国际开源社区「下」](http://mp.weixin.qq.com/s?__biz=MzU0Mjc0NTcxNQ==&mid=2247484293&idx=1&sn=ea835fac5f390bcc624ff8030dc41605&chksm=fb14b699cc633f8f0d9cff82260c532a2fff093b45043b6a7cf6126dcf9a3268e75a21025224&scene=21#wechat_redirect)

## **申请的策略：主动！主动！主动！**

我们认为，越早融入社区，申请 GSoC 成功的可能性就越大。例如从半年前就开始参与开源社区的日常技术讨论，修改 bug 等。但并非每个人都有这么强的先觉性。这里我们主要讨论的是**申请截止日期前这一个月时间段内的申请策略。**

正确的申请策略可以在有限的时间内显著地增大录取几率。

### 第一步：阅读社区申请指南

几乎每一个开源社区都会提供一些申请指南，例如如何熟悉该社区的开源项目，如何与 mentor 联系，申请书的写作格式等等。在第一次联系社区之前，最好仔细阅读这些资料，对社区有一个基本的了解。

> 一些首次参与 GSoC 的社区可能由于经验不足，这方面的资料不是很充分。对于这种情况，我们建议大家直接在社区邮件列表或 slack 等在线聊天频道里提问。

### 第二步：第一份公开信：主动向社区介绍自己

向社区公开发信，简要介绍自己的一些基本情况，如姓名、专业背景、学校与学历等等，**然后是这封信的重点：告诉大家自己准备申请哪个项目「*****\*或哪几个项目\******」，对该项目的一些初步想法，下一步计划并征求 mentor 意见**。

很多学生在这封信中大篇幅陈述自己过去的项目经验，这是一个误区。相比于曾经的经验，mentor 更加关注申请人对当前项目的理解。

这一步我们建议越早越好，即使你对预申请的项目还处于初步了解阶段。因为这样你可以尽早得到 mentor 的指点，并且避免其它同学申请同一项目，减少竞争。

下面我们整理了 2018 年一位 GSoC 入选者的自我介绍信件「经删减」。他向网络模拟器 ns-3 社区提出了一个自己设计的项目，最终被接收并成功完成。

Hello everyone,

My name is X. I am a student at the University of X, and so far I have been working with ns-3 to develop a module to X.

点评：一句话概括了个人背景、开源社区相关经历。

I wanted to get some feedback from the community on a couple ideas that I think could fit as a GSoC project:

点评：说明感兴趣项目，提出获取社区修改意见的愿望。

1. Essentially, what I have in mind is a program that can … I have several features in mind, however I would first like to get some feedback about the interest of the community in this tool.

点评：给出第一个项目想法，最后明确提出欢迎社区意见反馈。

2. Integration with ... I've been unable to find the relevant source code - maybe someone had more luck with that and can point me in the right direction?

点评：给出第二个项目想法，同时就自己不懂之处勇敢发问。

Once I get some feedback, I'll write down in greater detail the proposal the community deems most important among the two. Of course, I am open to discuss the details of both proposals if you have any questions.

点评：指出下一步计划：在获取反馈后最终选择一个项目题目，完成申请书初稿，并欢迎任何讨论。

Thanks!

这封 Email 很好地展示了申请人主动思考的能力。1）给出了自己对项目的见解；2）明确提出希望得到社区反馈；3）让社区清楚地知道自己的下一步计划。

这里不要害怕提出问题太简单，太naive。GSoC 的目的就是教育，**一个主动发表个人意见，愿意学习，渴望得到指导的学生，远远胜过一个拥有丰富经验，但没有想法的申请者**。

### 第三步：公开申请书，获取建议，反复迭代

申请书的写作模式：公开发布，快速迭代

![](https://mmbiz.qpic.cn/mmbiz_jpg/ibNhs76xTHOztQE2a8E5nU7TGHk7uo73KsED10MZkKLyyiaIvAwicOdWxbib6PmzPfkMetfSE3bYz1VhCtgTWJOwbg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

有一些同学对这种模式存有疑虑：公开发布自己的申请书，会不会导致其它人效仿，影响自己的竞争力。确实有这种隐患，但除非是社区有特殊要求，我们认为这依然是一个利大于弊的选择。因为这样可以获取最大社区的反馈，加快申请书的迭代速度。这也是开源软件相对于闭源软件的优势。

还有一些同学对这种模式比较惊讶：mentor 真的会在评审前帮助我修改申请书吗？其实申请书写作过程，也属于面试的一环。除了技术背景，申请人独立思考、沟通能力等综合素质也很重要。 

最后还需要注意一点，发送给 mentor 的申请书，一定是自己当时最满意的版本。例如，你可以有技术上的硬伤，但绝不能依靠 mentor 来帮你修改语法错误，这是一个减分项。

2，申请书的核心内容：项目目标，解决方案以及时间表

一篇完整的申请书包含很多内容，如个人简介、相关经验等等。我们认为其中最重要的是下面这三部分。

> 很多同学把个人简介、项目经历写成了重点，这是一个误区。

1）项目目标「deliverables」重在完整，而非数量

项目目标即为在最后结题时要实现的功能列表。很多同学也许是为了增加录取几率，将目标定的很多。但若没有全部完成，会影响到最终项目是否评审通过。

其实项目目标不光要包括要实现的功能本身，测试用例、用户文档的编写也同等重要。一个优秀的 GSoC 项目，往往完成后可以直接并如发行版，而非一个半成品。

2）解决方案重在可行性

提出的解决方案一定是可行的。但如何说服 mentor 相信这点很关键。一个比较实际的做法是尽可能的给出解决方案的细节。我们曾遇到一个比较极端的例子，申请人直接给出了需要修改哪些 C++ 类，需要添加哪些核心变量。当然这么细致的申请书并非必须，但大家可以向这个方向努力。

3）充分利用时间表，增加项目灵活性

很多人认为时间表不重要。但我们认为这是一个可以充分利用的部分。GSoC 项目时间为 12 周。共有三轮评估。时间表需要设定每周预期达到的目标。大家可以在评估前预留一些时间，用于处理一些拖后的进度。也可以将一些目标设置为可选，这样不至于因没有完成而导致评审不通过。

**一份优秀的申请书一定是在不断的与社区成员、mentor 反复沟通、细化、调整甚至重构之后的产物，很少有人能一蹴而就**。

## 总结

GSoC 是一个开放平台，没有统一的筛选标准与难度级别，这就需要大家主动地去思考，与社区交流。申请人需要了解自己，明确参加 GSoC 的目的，选择最适合自己的社区。在申请的过程中，应尽早向社区发送自我介绍信，及时获取社区、mentor 反馈。在申请书写作过程中，保持与社区的定期沟通，在 mentor 反馈的基础之上不断地快速迭代，同时注意项目目标、解决方案以及时间表这三个核心内容的制定与细化。在 GSoC 中，申请人与 mentor 的关系，更像是项目合作者，而非雇主与员工。

**最后，祝大家 GSoC 申请成功****![img](https://res.wx.qq.com/mpres/htmledition/images/icon/common/emotion_panel/emoji_ios/u1F389.png?tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![img](https://res.wx.qq.com/mpres/htmledition/images/icon/common/emotion_panel/emoji_ios/u1F381.png?tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![img](https://res.wx.qq.com/mpres/htmledition/images/icon/common/emotion_panel/emoji_ios/u1F4AA.0.png?tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)**

## 关于作者

周迪之，博士，公众号”编程之夏“的主编，倡导”快乐开源“，目前在Synopsis（加拿大）担任资深高级工程师。
