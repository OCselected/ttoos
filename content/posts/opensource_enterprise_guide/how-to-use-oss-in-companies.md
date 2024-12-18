---
categories:
- 开源
- 企业指南 
date: 2021-08-25T17:15:25+08:00
description: "行为经济学的研究告诉我们，人们并不是理性消费的，而是根据自己的习惯、偏好、文化等等方面来决策的，那么人们是否会正确的消费开源项目，也是一个值得探究的话题，比如是不是会将开源当成固态的没有成本的物体？比如会不会在不了解一个软件的原理之前就贸然行动？或者讲在数字的世界，自主权有那么需要了解的吗？这是一个饶有趣味的领域～"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 开源企业指南
- 开源之道
title: "为自主权作准备：企业使用开源软件的正确姿态"
url: ""
---
## 引言

个人和集体在决策的时候，是两回事。当我说这句话的时候，大概是没有人提出反对意见的。当一个个体去购买闭源软件，或者是下载源代码编译、调试、整合，是个体的事情，这个动机往往也比较好解释，大多数时候是以下几种：

* 学习，了解软件的内部机理
* 修改，根据自己独特的需求和想法，修改以满足
* 喜欢掌控感和自主权
* 节省成本
* 炫技，获得同行的夸赞
* 互惠，期望获得他人的帮助
* 赢得社会资本，换句俗话就是，赢得认可和尊重。

当然，也有极端例外的情况，为了理想社会、信息完全自由等等。但无论什么样的个体决策都是可以解释的，也是容易理解的。但是我们一旦谈到由个体组成的组织，如现代的商业公司，拥抱开源或者是其它和开源发生关系的情况，决策就复杂了起来，也变得扑簌迷离。本文就打算从万千事件，挑选出较为常见的一种情况，即企业使用开源的决策的情况分析。

## 选型时的路径

自20世纪70年底早期以来，著名经济学家Milton Friedman的拥护者们及芝加哥经济学派，倡导了成为现代商业世界主导的模式：

> 企业有且只有一个社会责任——利用其资源从事旨在（为股东）提高利润的活动。[1]

基于这个大的框架，现代企业所设立的支撑部门或服务部门，信息部、技术部等等科层制下的部门也要服务于这个目标，也就是说要在有限的资源下实现企业高层下达的目标，例如比较笼统的：实现承载亿级流量的交易。当架构师和IT主管思考这个问题的时候，会全方位的思考，是否采用云计算？自建机房？业务系统开发需要多少人力？支撑系统采用开源，是否需要供应商？

即使是在选择中间件、程序类库等组件时，程序员的思维模式也是如下这样的：[2]

![](images/choose_software_style.jpg)

这也是常见的程序设计用的，我们看到程序员在使用开源时是非常理性的，不仅考虑了企业的业务，还考虑到核心的竞争力，一个能省则省的原则。

当然，这是一个理想的技术路径，事实上，要比这个情况复杂的多。商业会引入其它更多的元素：制度、政策、法规、文化、习俗、环境等等诸多因素的考量，不过这些变量的考察已经超过了本文的范畴，有机会笔者再进行展开论述。

## 何为自主权？

在上面的图示中，我们看到，作为开发者或程序员的思维模式是，一旦采用了开源项目，就会尽量的将修改保持和上游同步。这就是我们今天讨论的自主权的问题。

我们先从字面上来理解下这个词汇，来自维基百科的定义[3]：

> **自主权**（希腊语：νόμος; αὐτονομία; αὐτόνομος，英语：Autonomy，直译为“法”、“自我设置并约束自我的法律”），也称**自治权**、**自决权**，是一种广泛存在于[道德](https://zh.wikipedia.org/wiki/道德)、[政治](https://zh.wikipedia.org/wiki/政治)、[生物](https://zh.wikipedia.org/wiki/生物)、[伦理](https://zh.wikipedia.org/wiki/伦理)、[政治](https://zh.wikipedia.org/wiki/政治)等领域的[哲学](https://zh.wikipedia.org/wiki/哲学)。在这些领域中，它往往指的是一个理性个人有能力作出成熟的、不被胁迫的决定。

那么，对于能否对于一款软件的掌握是否精通，不仅仅是使用上的，而是匠艺上的、机理上的、源头上的掌握，才能做到随心所欲的驾驭之道，那么这里的针对一家企业使用一个软件信息系统的自主，就在于不被任何外力所左右的系统。

那么将这个意思带入到现代企业的基石——科斯定理：

> 一家企业会持续扩张直到企业内部组织交易的成本超过在外部市场的交易成本。只要在公司内部展开交易比较便宜，那就保留企业。但是如果在市场上比较便宜，就不要试图在内部做。

众所周知，采用开源，若不能和上游保持同步，会欠下相当的技术债务[4]，如果引入开源项目而没有彻底掌握和精通，那么就难以谈自主，必须严重依赖于外部的合作伙伴或交易。那么想要达到自主权和满足科斯定理的，那么可以从如下几种方式进行选择：

*  雇佣相应的开源项目开发者，做到完全的自主，甚至影响项目的走向。
* 购买开源厂商的服务，这里的厂商是指严格遵照开源许可的厂商，自己雇佣少部分人才

## 自主权重要吗？

询问自主权是否重要，其实对于追求技术的人员来说，这是个很冒犯的问题，可以说是技术人的心血都在代码和设计里，解决问题的主要手段和途径，自主当然是最为重要的，但是非技术人员，或者对于技术解决问题不在乎的，这个自主权就显得不是很有必要，是不是花钱更能解决问题？还是控制乙方“七寸”更为妥当？

回到使用开源项目软件这个话题上来，和上游同步，乃至上游优先的方式重要？还是只是简单的下载项目提供的二进制版本，直接使用即可？亦或者是下载源码，然后自行编译，甚至还修改点什么的方式？

本文给出的解决问题的思路是，这要从具体实际的情况出发，我们很难有最优方案，除非满足所有条件。一家公司对于自己的软件架构是否具有自主权究竟是否重要，需要衡量所有的情况，没有最理想的情况。但是，有一条笔者是确定的，那就是经济成本的考量。

软件是一个不断生长的人类思维协作的产物，也就是说只要业务不停，软件就会不断的修改、增加、删除，进行变更。在不断的变化中，寻求自身业务的增长，对于所有企业都是挑战，那么对于理解软件本身，并且不能被其它厂家锁定，成了很重要的决策。换句话说，我们的结论是：自主权相当重要！

## 如何做准备？

既然很重要，那么我们就要征服它，让开源成为企业的有生力量，推动发展进步。接下来，我们就聊聊该如何做。

开源不是啥特殊的“洪水猛兽”，它是可被解释和理解的。所以，我们先要从了解它开始。

对开源而言，复杂性是它的特色，也是其缺陷。开源的三个规则——没有人拥有它，人人使用它，而且任何人可以改善它——是不断创新的来源，但是它们同时也让那些负责管理这些软件的IT技术人员陷入不断的麻烦之中。[5] 开源最被人们难以理解的部分，并非其作为计算机软件的部分，而是它的所有权和协作方式的部分[6]。也就是说，要尊重开源世界里的规则和规范。

当理解了开源的互惠、合作的生产方式和发布方式，以及做事的风格，那么就可以给自己所要引进的开源项目列一个规划，类似下图所示：

![](./images/upward-spiral-of-os.jpeg)

也就是说，当我们采用开源软件的时候，要真的从源代码开始做起，即使现在做不到，也要为将来做到提供尽可能大的可能性，如可以在选择供应商方面要做细致的考察，尤其是供应商本身在上游项目/共同体的影响力。

这里给出的不建议选择的方案是：

* 使用不能提供源代码的二进制版本
* 不应该选择那些供应商在上游没有任何的影响力，即缺乏contributing

当然，每家公司的组织形式不一，决策机制不同，但是在精算知识方面，较少成本等方面的诉求是一致的，那么为正确的使用开源而了解开源，掌握开源相关的知识，是十分有必要的。

9·17 由信通院主办的OSCAR 可信开源峰会即将举办，欢迎参与了解，为如何正确的使用开源而学习、交流。

## 参考资料

1. 《互惠资本主义：从治愈商业到治愈世界》，[布鲁诺•罗奇](https://book.douban.com/search/布鲁诺•罗奇)，中信出版集团股份有限公司，2018-11-1
2. 《Hello, Startup: A Programmer's Guide to Building Products, Technology, and Teams》， [[美\]叶夫根尼·布里克曼（Yevgeniy Brikman）](https://book.douban.com/search/叶夫根尼·布里克曼)，人民邮电出版社，2018-7
3. https://zh.wikipedia.org/zh-sg/%E8%87%AA%E4%B8%BB%E6%AC%8A， 最后访问时间：2021.8.26
4. https://linuxfoundation.org/wp-content/uploads/TechnicalDebtandOpenSourceDevelopment_Whitepaper_062220.pdf ,最后访问时间：2021.8.27
5. 《维基经济学：大规模协作如何改变一切》， [[加\] 唐·泰普斯科特](https://book.douban.com/search/唐·泰普斯科特) / [[英\] 安东尼·D·威廉姆斯](https://book.douban.com/search/安东尼·D·威廉姆斯)，中国青年出版社，2007-10
6. [拥抱开源真正的要义：那些计算机技术之外的技术](https://www.opensourceway.community/posts/opensource_culture/2021-oscar-culture-need-sponsor/)，最后访问时间：2021.8.27
