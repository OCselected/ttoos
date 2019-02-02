---
categories:
- 开源
- 感悟
- 读后感
date: 2019-02-02T22:30:31+08:00
description: "2019年1月份的共读开了一个不错的头，起码完成了原来预设的目标，完成阅读，并撰写了一篇书评，至于论文呢，就随缘了，我自己是读了四篇，收获颇丰，对于企业看待开源项目和社区有了更深一步的理解，也挖掘出了两本重量级的书籍来。愿你也和我一样有更多的收获。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 图书推荐
- 开源之道
- 论文阅读
title: "2019.1 开源之道论文共读笔记及探讨记录"
url: ""
---

## 一、 《the role of participation architecture in growing sponsored Open Source Communities》

### 开源之道引言：为什么要读这篇论文？

适兕观察本土企业活动开源，极少见到公司赞助某个开源社区或者是自己运营一个开源社区，大多数是公司的市场部门赞助一个会议之类的，即使是 OpenSSL 出了 Bloodheart 这样的问题之后，锤子的老板直接给了项目100万，也不过是哗众取宠罢了（因为后来再也未见持续性的投入，就非常的吃亏）。话说回来，既然是个人的观察，会有极大可能有偏见的，比如大多数公司会搞合作伙伴社区、用户论坛之类的，开源社区对于他们离盈利太远！多数人认为是一种慈善的行为，一般言称公司有了钱一定会去做的。但是，社区对于一家公司的益处是由来已久的，而且很多公司就是以社区的名义而成就的，如哈雷摩托等。

就是这样一个偏差，将我的思考带到了寻求这方面答案的探求上来。随着开源在软件开发占有的地位上升，本土越来越多的企业将自己的项目开源，那么面临的一个问题就是：只见代码，未见社区。于是尴尬的一批，慌的一批。那么我们不妨找出十年前研究开源和开放式创新的经济学家的论文看看，对于企业的决策者或许有一些参考。

在开始之前，开源之道推荐两篇文章：
1. 来自 forbes 的评论文：开源软件的商业化正站在迷茫的十字路口 https://www.forbes.com/sites/udinachmany/2019/01/16/thoughts-about-2018-the-year-of-open-source-teenagedom/#13701133393b
2. StrictlyVC Insider 系列 之一，http://haystack.vc/2015/09/17/transcript-chamath-at-strictlyvcs-insider-series/

至于论文本身，却是比较易懂的。开明宗义，企业赞助开源社区与自己所建立的合作伙伴究竟有何不同？通过研究了12个不同的开源项目的社区，来说明这一点。

技术社区其实由来已久了，很多重要的公司都非常的看中这点，毕竟技术是需要有受众的，也需要不同的反馈的，甚至也需要带来创新的灵感。

开源技术社区某种程度上就是技术社区的一种，它具有技术社区的机会所有的特征。

企业赞助建立和运营开源社区其实也有一段时间了，如Mozilla、Fedora等，研究他们的也有了一定的成果。

企业赞助开源社区要考虑的几件事:1、知识产权 2、开发方法 3、社区治理模式

开放环境的文化：透明度、可访问性，作为企业该如何考虑这些与自己控制权的问题。

既然是论文，就是抛出问题，给出研究方法，调查的过程，最后总结下接下来要做什么。大多数时候是没有结论的，需要读者根据自身情况进行探索和反思。

## 二、《Nonprofit Foundations and Their Role in Community-Firm Software Collaboration》

该文是 Siobhán 在2005年为《Perspectives on Free and Open Source Software》 一书写就，交待了个体开发者的历史传统和诉求，以及成立非盈利基金会的伦理、法律境遇，然后是基金会成立的借鉴场景，介绍了截止到2005年基金会发展的时间轴，并以Debian、Apache、Gnome三大典型基金会为案例详细讲述了理念、孵化项目的原则等，最后则阐述了商业公司对于这些组织的诉求，有关发展的平衡艺术。总而言之，这是一篇难得的质量上乘的文章。

![](images/nonprofit_foundation.png)

一图形象的解释了开源社区、基金会和商业公司的关系。实在是高明啊，我怎么原来没有读过这本书了呢？真是罪过。

## 三、《Contrasting Community Building in Sponsored and Community Founded Open Source Projects》阅读笔记

来源：38th Hawaii International Conference on System Sciences

作者：Joel West 和 Siobhán O’Mahony

开源项目有两种：
1. 完全草根式的项目，如Apache、Gnome、Linux等
2. 有企业发起，IBM (Eclipse), Sun (OpenOffice)和 Netscape (Mozilla)。

那么这两种情形去构建开源社区则面临完全不同的局面。论文的作者则试图比较这二者之间。并且以一个政府公共项目为例进行了试验性的探索。

### 第二部分

1. 介绍了基于草根发起的项目，并区分了几个阶段，如startup阶段：模块化的设计、早期的参与、创始人的声望、对参与者的考核等都是关键因素。成熟阶段：成立基金会（help oversee project direction but not day-to-day technical decision making）、约定俗成的治理等
2. 赞助形式项目，赞助的主题可以使公司、政府、非盈利组织等。定义：A sponsor of an internally developed software project releases its code to the public under an open source software license, inviting the external community tojoin the project. The sponsor could be a firm,government agency or a non-profit organization.

公司为什么要将自己的内部项目以某种OSI的协议开源？to win adoption, or to gain development assistance on non-critical areas.

> （开源之道注：当然现在企业开源的理由更多了）

企业赞助的项目面临的挑战：技术上、开发者关系、法律。讲了很有趣的几个方面，如 Sponsors that seek greater external participation must expend considerable time and money on community development.

### 第三部分

以观察一个实际的赞助项目VistA，美国联邦政府赞助的healthcare information system。

1. 介绍了VistA这个公共领域的项目（开源之道注：蛮有意思，绝对长见识）
2. 有一些历史局限性的问题，如Although VistA is in the public domain, the VHA’s development processes remain closed、forking 的混乱、平台的复杂等。
3. 众多因素的汇集，VistA走开源路线是不错的选择。
4. 如何达成技术上的合作？其实就是开源协作的那些工具、流程、发布和文化等。难题在于软件架构的模块化和组织结构之间的关系问题。（开源之道注：这确实是个值得深入探讨的领域）
5. 利益均衡的问题处理。当官僚机构不再时，directors cannot “order” volunteer contributors without losing their motivation and participation.
6. VistA 不是那些由计算机专业人员发起的项目，而是面向专业领域，由医生、护士使用的系统。
7. 许可证选择问题

### 第四部分：社区构建的权衡

1. 草根社区发起项目的挑战：随着商业公司的参与，协调社区和商业利益面临挑战。
2. 赞助形式的项目面临的挑战。外部贡献者的信任与激励问题。
3. 从VistA学到了什么？transferring knowledge、providing community leadership
4. 衡量赞助项目的标尺：1、商业优势 2、吸引外部开发者、3、做慈善 但是要记住：No one measure of success matches all strategies.

### 总结部分

As open source software becomes not only accepted by the computing industry but a model to adapt and modify in conjunction with traditional corporate strategy, more attention needs to be paid to the evolution of technical and social hybrids that are emerging.（开源之道注：开源远远不止于软件产业。）

> 开源之道思考：十几年过去了，以公司名义开源的项目经营社区成功的概率并不是很高，能够生存下来的最后都转到了基金会模式，但是基金会过度的市场宣传也成了开发者唯恐避之而不及的。所以这方面思考的内容还有很多。


## 四、《Why do commercial companies contribute to open source software?》

来源：https://www.sciencedirect.com/science/article/pii/S026840121100123X
作者：Morten Andersen-Gott、Gheorghita Ghinea、Bendik Bygstad

> 开源之道注：阅读此论文纯属偶然，是在检索一月共读的论文参考文献时，偶然间搜索到的。看看日期已经是月底了，而二月的共读论文也敲定了，于是就决定读一下这篇文章，算是一个过渡。）

概要介绍：商业公司为什么要为开源做贡献？这是有违于传统的经济学原理，也是有违于直觉的。但是总是有商业贡献的不是吗？而且比例还不小。那么这些公司的动机是什么了呢？商业公司毕竟是“无利不起早”的。作者找到了三个理由:提供服务、开放式创新、以及节省成本。

主要亮点：
* 售卖服务模式的公司，主要从开源的开发中进行获利。
* 在研究调查过程中，受访公司都表达了为开源做出贡献是道德上的义务驱动。
* 创新是开源软件开发的强大驱动力。
* 商业公司贡献开源是赚钱的一种方式，这个说法证据并不充分

### 一、介绍

按照历史的脉络来捋一下人们贡献自由/开源软件的动机。然后引出本论文主要论及的问题，最后则说明了论文的章节内容梗概。

### 二、相关研究的回顾

![](images/Graphical-representation-of-motivational-factors-for-each-of-the-case-studies.png)

> 开源之道注：要读一下 Eric von Hippel 先生的这本《Democratizing Innovation》，据说不亚于《Hacker》。

### 三、方法论
采用的案例研究，数据收集的方式主要是靠采访，三家公司分别是Arktekk、Accenture、Redpill Linpro。

### 四、动机的原因

根据采访的结果，详细的论述了商业公司贡献开源的真实动机：开放式创新、提供商业服务、OpenSourcing(OutSourcing 演变，有外包之意）。

> “Code is worthless; knowledge is the only real value.”  -- 匿名

关键发现结论如下图所示：

![](images/Motivational-factors-for-companies-contributing-to-FOSS.png)

> “Be a good citizen, contribute to open source.”  --匿名

五、讨论

分析了接下来可能要研究的内容，以及本论文所不足的地方。

> 开源之道注：就本土而言，开源的贡献研究还很少，就适兕所接触的和开源沾边公司而言，除了能力不足难以贡献到上游之外，有心贡献的最大原因还是提供基于免费的开源产品提供相关的商业服务（培训、认证考试、咨询、技术支持等），和创新以及OpenSourcing（社区）几乎难以见到。本文对于本土的和开源有关的软件公司具有很大的启发意义。尤其是身处这些公司的开源开发者而言。

## 开源之道阅读WeChat群组讨论

暂无！

> 这不无遗憾。说明目前的受众对于开源的认知或好奇探究之心还不足，或者是我的方向错位了。但我不认为是后者。
