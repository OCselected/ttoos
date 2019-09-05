---
categories:
- 开源
- 感悟
- 读后感
date: 2019-09-01T16:57:14+08:00
description: "华东师范大学数据与科学学院新学期开设了一门讲解开源的课程：《开源软件的设计与开发》，试图从成千上万个开放源代码软件项目中总结出一些个有关开放源代码软件的生产过程的因素，而早在2005年就有一位卓越的开发者兼作家开始了探索，他就是Karl，《生产开放源代码软件》的作者。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 图书推荐
- 开源之道
- 读后感
title: "开放源代码软件的生产之道"
url: ""
---

> 要真正理解任何思想，你都需要重建它第一次被表达时的上下文，这样，你就可以理清经历了这么多中间人而保留下来的思想的精髓。
>                       ———— 《软件开发者路线图》

## 开源之道2019图书共读历史书评

过去几个月的导读与书评：

* [《软件悖论:商业软件的崛起与陨落》](posts/paper_or_book_reading/the-software-paradox-book-review/)
* [Subscribed：为什么说订阅才是塑造贵司的未来的模式，如何实现它](posts/paper_or_book_reading/subscribed-why-subsctiption-it-your-future)
* [我们正处于开源的黄金时代 —— 《开放与共享》导读与书评](posts/paper_or_book_reading/thinking_of_open_source_innovation_economic)
* [得开发者得天下 ———— 开发者是如何征服世界的](posts/paper_or_book_reading/the_new_kingmaker_review)
* [开源开发者内在的素质：匠艺 —— 《匠人》书评与导读](posts/paper_or_book_reading/the-craftsman-book-review)
* [开源 -- 一部黑客伦理与商业资本相互妥协的融合史（《黑客》读后感）](posts/paper_or_book_reading/hackers-book-review)
* [开放源代码软件的三重境界 ———— 《大教堂与集市》读后感](posts/the_way_of_open_source/the_three_realm_of_open_source_software)

## 开源之道图书共读短评

> 这是一本所有了解开放源代码软件的人都不应该错过的好书！
>                  ---- 开源之道图书共读发起者 适兕

> Karl 所著的这本精彩纷呈的书，让我都怀疑来了我的沟通技巧是否能够胜任在开源项目中的日常。
>              -- [Steve McInerney](http://www.groklaw.net/articlebasic.php?story=20060105010817642)

## 作者 Karl Fogel 其人

Karl Fogel 因为这本被引用最多的书而驰名于开源界。显而易见的是，他是一名优秀的作家。当然就像大多数写开放源代码软件相关书籍的人一样，Karl同时也是一名程序员，他参与过的开放源代码项目列表简直让人崇尚不已，名副其实的黑客一名，我们不妨在这里做个列表：

* [Launchpad](https://launchpad.net/)，历史相当悠久的项目托管平台，其本身也是开放源代码项目。
* [Subversion](http://subversion.tigris.org/)，集中式版本控制系统，目前已捐赠给Apache 基金会。
* [GNU Emacs](http://www.gnu.org/software/emacs)，世界上最具扩展性的文本编辑器，Karl维护的包有[bookmark.el](http://cvs.savannah.gnu.org/viewcvs/emacs/lisp/bookmark.el?rev=HEAD&root=emacs&view=log)，[mail-hist.el](http://cvs.savannah.gnu.org/viewcvs/emacs/lisp/mail/mail-hist.el?rev=HEAD&root=emacs&view=log)，[savepace.el](http://cvs.savannah.gnu.org/viewcvs/emacs/lisp/saveplace.el?rev=HEAD&root=emacs&view=log)。
* 更多维护的项目，可参考Karl在[OpenHub的聚合账户](https://www.openhub.net/accounts/kfogel)。

Karl的图书和文章，就非常的多了，如讲解CVS、SVN的书籍，以及解释自由软件等，不过他最为人所知晓的还是我们共读的这本[《生成开放源代码软件》](http://producingoss.com/)。

Karl本身的工作也是兼具多种身份，他首先是[开放技术策略有限公司](http://opentechstrategies.com/)的合伙人，这是一件为营利性、非营利性、政府等组织提供参与开源项目的咨询和支持服务。在非营利组织方面，Karl创立了[QuestionCopyright.org](http://questioncopyright.org/)，一家旨在促进公众对版权历史和影响的理解，并鼓励适用于网络世界的基于自由的分发方法，这使得共享信息的成本可降至为零。

Karl 曾经担任过的非营利组织有：

* [开放源代码促进会](http://opensource.org/)的董事
* [开放互联网工具项目](http://openitp.org/)的成员

现在仍然在担任的非营利组织：

* [软件自由保护协会](https://sfconservancy.org/about/eval-committee/)的评估委员会成员
* [Apache软件基金会](http://apache.org/)成员

一言一概之：Karl 是一名兼具技术和社会双重技能的优秀人才！更多详情，请移步其[个人站点](https://www.red-bean.com/kfogel/)。

## 《生产开源软件》内容介绍

> 我们这次共读选择的是该书的第二版，第一版在2005年出版，且有相应的中文版。

全书分为九章：以及一个前言和附录A，以下由开源之道为大家做一个简单的章节大意总结:

### 前言

在短短的前言中，作者描述了自己写作本书的初衷，尝试去向世人解释，自由软件是意义重大，它本身就是值得一件追求的事情！换句话说，让更多的人了解到自由和开源软件的生产过程。

从言辞恳切的感谢篇幅中，可以看出作者的真诚！一本书的出版确实是群策群力的事情。

### 介绍

什么是自由软件？软件在现代社会中所起的作用如何？以及它和开源的区别是什么？并概要的介绍了其中的历史。当然，作为一名程序员，Karl对于软件的本质概括是及其精准的。

### 开放源代码入门

像开发其他的软件一样，整个工程应该涉及到：尝试要解决什么问题？是否已经有人解决了？一旦决定以后，要去选择一个很酷的名字，且要在描述的时候尽可能非常精准，撰写文档、下载列表、选择许可证、社区行为准则等等，从打造产品、构建社区、法律保护、开发布会等诸多角度来阐述开发一款开放源代码项目所有要做的事情。事实上，确实是缺一不可。

> Be Open From Day One.

很多人都会忘记这一点。

### 开源项目之技术基础设施

网站、邮件列表、版本控制系统、问题追踪、实时聊天工具。

### 社交和政治的基础

这是开放源代码软件非常重要的部分，从项目的决策方式、分支对待、共识机制，以及一些处理事情的原则等等社会语境，这是本书中非常重点的一章。

### 以公司、非营利组织、或政府部门的名义参与开源

开源的经济学，那些个组织为何要参与开源？怎么参与？Karl 所列出的利益有关的几点，乃真知灼见也。

### 沟通的艺术

软件开发活动中最为关键的部分：人与人之间的协作和沟通。Karl在本章描述了文字写作的重要性，这实在是太关键了，如果没有啥写作能力，参与开源迟早会吃亏。保持同理心。

### 打包、发布、和日常开发

常见的小技巧，大家约定俗成的习惯。

### 参与开源的管理

社区和激励！ 冲突解决与更好的引导新人，如何降低入门的知识门槛，这些都是开源管理所要思考的重大问题。Karl均有非常不错的建议。

### 法律相关：许可证、版权所有、商标和专利

Karl之版权所有的专家，对自由软件和开源软件所牵涉到的法律相关均有所解释。

### 附录A：版权所有

以本书为例，诠释了一下什么版权所有。

## 开源之道点评

超越技术的开放源代码软件讲解之道，这恐怕是这本书所能描述的精准语句了。

### 跳出软件行业之外的生产之道

在汽车这个行业的历史上，有两个非常著名的案例，第一就是福特流水线的发明，另外一个就是丰田的精益生产。我们不妨简单的回顾一下。

据说亨利·福特在20世纪初仔细观察过屠宰厂流水线，意外得到灵感，开发了世界上第一条汽车流水线，使得福特T型车开进了千家万户。此前，制造业很多是小作坊，汽车都是在小作坊里装配的。流水线带给汽车工业的是“规模化”，更是“流程革命”。福特把T型车的装配过程拆成了84个不同的步骤，每一个人都只做专门的一个环节，汽车在一条流水线上就可以完成组装，这个革命性的创造使汽车的装配时间从原先12小时减少至90分钟，而且一年一年各个环节操作时间都会在技术升级中不断缩短，20世纪20年代，福特工厂每24秒流水线就能制造一辆汽车。（内容来自网络）

而精益生产就是及时制造，消灭故障，消除一切浪费，向零缺陷、零库存进军。它是美国麻省理工学院在一项名为“国际汽车计划”的研究项目中提出来的。它们在做了大量的调查和对比后，认为日本丰田汽车公司的生产方式是最适用于现代制造企业的一种生产组织管理方式，称之为精益生产，以针对美国大量生产方式过于臃肿的弊病。（摘自：https://wiki.mbalib.com/wiki/%E7%B2%BE%E7%9B%8A%E7%94%9F%E4%BA%A7）

### 软件产业的方法论

软件工业或产业，自诞生以来，就一直是人们的难点和痛点，一路走来，从瀑布、迭代、到敏捷、到持续交付，再到现在大热的DevOps，某不都是在寻找最佳的生产和开发软件产品的效率，减少成本和风险。

从历史上来看，以成功的开发出软件并形成商业规模的公司或组织还是很多的，也积累的大量的财富，但是，依然不能够满足人的预设，因为开发仍然占据着巨大的开发成本，严重依赖于开发人员本身的素质，失败的案例也是屡见不鲜。

然而，非常令人惊奇的是，也让很多人感到意外和好奇的是，有一种开放式开放方法，甚至其生产出来最终的形式都是免费提供给人们的，竟然开发出来诸如Linux Kernel、GCC、Apache、Hadoop等等诸多的成功的软件项目来，而且随着历史的推进，还越发的展示出来强大的生命力，眼看着软件产业就要被开放源代码的方式吞并。

那么问题来了，如此之多的开放源代码项目，从技术、文化、管理、分发、持续性发展等等均有着非常之大的差异的情况下，有没有一套放之四海而皆准的方法论了呢？Karl就是尝试找出的先锋人物。

### 已经产出的方法论

目前为止，较为完善的谈生产开放源代码软件的方法论，有TODOGroup出品的企业开源指南系列，开源之道专门做了精心的翻译：

* [Linux基金会企业开源指南系列之一——公司如何创建开源项目办公室](posts/opensource_enterprise_guide/creating-an-open-source-program)
* [Linux基金会企业开源指南系列之二——企业如何启动自己的开源项目](posts/opensource_enterprise_guide/starting_open_source_project/)
* [Linux基金会企业开源指南系列之三-—开源相关书单](posts/opensource_enterprise_guide/open_source_reading_list/)
* [Linux基金会企业开源指南系列之四——度量开源项目的成功要素](posts/opensource_enterprise_guide/measuring_open_source_program)
* [Linux基金会企业开源指南系列之五——公司如何以利益最大化的姿态参与开源社区](posts/opensource_enterprise_guide/participating-in-open-source)
* [Linux基金会企业开源指南系列之六——开源管理工具集介绍和使用](posts/opensource_enterprise_guide/tools-for-managing-open-source-programs)
* [Linux基金会企业开源指南系列之七——正确的招聘开源人才](posts/opensource_enterprise_guide/recruiting-developers)
* [Linux基金会企业开源指南系列之八——公司如何正确的使用开源代码](posts/opensource_enterprise_guide/using-open-source)
* [Linux基金会企业开源指南系列之九——公司如何提升开源开发的影响力](posts/opensource_enterprise_guide/improve-open-source-dev-impact/)
* [Linux基金会企业开源指南系列之十 —— 企业如何优雅的关闭一个失败的开源项目](posts/opensource_enterprise_guide/shutting-down-an-open-source-project)
* [Linux基金会企业开源指南系列之十一 —— 在开源社区中树立领导力](posts/opensource_enterprise_guide/building-leadership-in-an-open-source-community)
* [Linux基金会企业开源指南系列之十二 —— 制定企业开源战略](posts/opensource_enterprise_guide/Setting-an-Open-Source-Strategy)

当然，另外一个就是适兕作为中文维护者的：[GitHub 开源指南系列](http://opensource.guide)。

熟悉这些内容的读者都明白，所有的这些方法论，均深受Karl的这本书的影响。

### 方法论真的管用吗？还是“知易行难”？

就目前来看，这些方法论，均是一个最为基本的条件，正如Karl自己所说，目前的开放源代码软件的开发，还是艺术，还无法整理出方法论，当然需要更多的数字化的支撑，以及人们不断的探索。开源之道还认为，除了这些前人整理出来的方法论之外，还有一些思想，或者是灵魂所在。尝试整理如下：

* 完善的法律体制，有法可依，有法必依，违法必究。
* 民主化的程度，民主不是那些看起来的选票，而是一种内在的拥有普遍常识的群体所体现出来的机制（浙江大学教授，杜威研究专家，陈亚军）
* 科学精神的体现，软件不是一些片段和拥有终点的物体，而是技术的本质体现，无限的组合和演化。
* 不是追求过于遥远的乌托邦式的奉献，而是解决现实问题的迫切需要
* 参与到世界文明的发展当中，而不是高高在上的用“反哺”的伪思路去害人害己
* 影响比控制更能获得好感
* 保持开放而信心十足的心态，大胆的表达自己的诉求和想法
* ......

这恰好印证了杜威哲学思想的三个总结：**”开放的、多元的、动态的”**，或许Karl在美国的语境下，将这些思想可以以默认的方式来进行阐述基于此的方法论，看起来一切是那么的自然和舒畅，只需要关注一些礼貌性的细节就更加完满了。而在其它的地方，尤其是拥有悠久历史的中国，这些方法论，看起来技术上没有任何的实现难度，但是实际上几乎不可行，举个例子：

* 邮件列表的讨论，这非常非常的难以推广。
* IRC/Slack 的讨论，总是有人不愿意离开WeChat之类的个人社交
* 放弃控制，建设社区

开放，才是开放源代码软件项目的核心，信息、知识、决策不能流动、透明起来，那么就不能称之为开放源代码软件，而仅仅是源代码可用软件。而方法论易学，思想却是要不知经历几代人才能改变。尽管我们对于文明的进程信心十足，但是仍然对浪费表示痛心。
