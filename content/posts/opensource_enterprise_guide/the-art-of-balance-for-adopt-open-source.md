---
categories:
- 开源
- 企业指南 
date: 2021-09-04T12:20:53+08:00
description: "很多企业调查都说开源软件占据了他们技术栈，超过75%的份额，那么这些企业是如何评估、采购、维护的了呢？和过去几十年的专有软件的模式有什么区别？是真的节省了成本，还是增加了开销？管理的难度到底如何？其实答案本身不重要的，重要的是开源，让企业当一件事情的去处理，再也不能无视其存在了。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 开源企业指南
- 开源之道
title: "开源治理：企业采用开源的激进与保守"
url: ""
---
![](./images/the-walk.jpg)

（图片来自电影《云中行走》[1]）

## Unix的消亡与Linux的崛起

当我们以现在为起点，回顾服务器操作系统的历史的时候，似乎并没有感觉到服务器市场的变化，好像一切都是那么的顺其自然，例如Unix 的不断降低，Linux的不断升高，如果你不是一名进化论的复杂经济学视角的话，会错以为是Linux简单的替代了Unix而已：

![](./images/1000px-Operating_systems_used_on_top_500_supercomputers.svg.png)

可事实上，完全不是看起来这个样子的，Linux的应用远远超越Unix的使用率，因为有互联网的崛起、云计算的流行、海量数据的运算和存储，相比而言，Unix的企业服务简直是九牛一毛，不值一提。

换句话说，Unix 被替代是因为自身的原因，封闭、硬件锁定、厂商锁定、教育成本奇高、开发缓慢，无法满足快速发展的市场需求。

## 加速：软件交付的变更

作为消费社会的标志性事件，电商零售的狂欢节，6·18，双十一之类的以海量和折扣为亮点的营销模式，动辄都是几百亿的销售，同样社交媒体的移动应用，也在不断的迎接更多的访问高峰，尤其以明星出轨为标志。

这是一个加速应对变化的时代，后台的程序和用户界面都在不断的迎合着古怪的世人心理，以至于程序的交付出现了按天、按小时为周期的部署和交付，想想上个世界的程序交付，那都是以年为单位的。

以新一代互联网应用为代表的诸如Netflix、Etsy等对于持续交付的要求更是过之而无不及。

这样的情况直接诞生了DevOps这样的文化和流程以及一系列的工具，将软件这种难以形式化表述的生产流程，以传统工业制造时代可以理解的虚构的形势呈现给了世人。

![](https://www.techgeeknext.com/img/cicd/devops-tools.png)

但是，新的技术未必是所有经济模式的表达，传统的企业是不愿意，也无法加速的。

## 开源，创新和整合的绝佳之路

开源是一种天然符合程序协作生产的模式，是一种对等的基于共同体的模式，总结起来的一些特性就是：

*  开放
*  Meritocracy 
* 透明
* 共享
* 基于互联网
* 充满hacker精神的伦理与许可协议
* 最优秀的技术胜出
* 多样性

所有的特性，都指向了开源之所以能够不断发展的核心——创新。但是创新就意味着做过去没有发生的事情，那么在某种程度上讲，就会带来不安、混乱，以及不确定性，对于新奇的创造者、缔造者而言，这是一种兴奋之情，一种心流的体验，一种对于世界的人间值得的反应。

我们在任何的上游开源项目当中都能体验到这些：Linux Kernel、Kubernetes、GCC、Apache Spark、Python、Fedora、Arch/Getoo Linux等。

但是，对于稳中求胜的企业应用者来说，这简直是噩梦般的存在。

## 求稳：政策与制度下的姿态

当将软件视为工业时代的产物的时候，比如一辆汽车、一部电梯，那么软件供应商将一个半成品交付给消费者即可，而这也是很长一段时间的思路和实际的方式，本文开始提及的Unix就是这样的交付方式。

在传统的规章制度和企业管理模式下，是不可能直接采用开源项目，除了从代码到软件的整合难度之外，功能尚未经过各种验证，那就是还有知识产权的风险。总而言之，企业采用开源，除非是像过去那样的方式来交付，比如著名的RedHat Enterprise Linux就是其中的最为典型的代表，它也是替代Unix市场的主要代表。而上述说有的风险，均由RedHat 这家公司来承担。

稍具规模的企业还有冗长的采购流程、审批流程、评估流程、验收流程，要是DevOps 能够顺利进入这样的流程，恐怕是要进行一场深度的革命。但是用户的需求可以扛过一切，企业不变，那就是自毁前程。于是，一场拉锯般的各种斗争开始上演。

尽管，疫情之下，加速了我们进入数字化时代的节奏，但是，不是所有公司都能驾驭软件，更多的是以业务为主，即使引入开源，也仍然是按照固有的思路来进行。

## 平衡之道：科学的管理与适应

> 当然，在可预见的未来中，等级制度不会从经济体制中消失，我们也不太可能会看到大量自上而下的官僚机构从社会蓝图中抹除。然而，自下而上的合作方式在创造信息产品和服务以及解决一些全球性的严峻挑战的能力上已经足以匹敌等级化的组织结构。
>
> ​     ———— 《维基法则：互联世界的新解决方案》[2]

开源的运动，是一项了不起的加速创新的人类进步，和互联网同步改变我们的世界，但是它所波及的范围，并没有深入到传统企业，而是以一种妥协的方式，慢慢的渗透的方式，在企业走过信息化、数字化转型的艰难路程时，开源作为一种解决方案，以自下而上的方式默默地做着一切，分析师[Stephen O’Grady](https://redmonk.com/sogrady/author/sogrady/) 戏谑的说：CIO 是最后一个知道技术架构的。[3]。这引起了一些传统部门当中警觉者的注意，开源必须被认真的对待，在强大的力量之间进行周旋与化解，并为自身所用。

那么企业该如何做了呢？当然是治理了，这是传统的等级分明的看到自发的无人指挥的第一想法，是的，因为这也是企业的成功之道，治理之路上企业通常会按照如下方式来按部就班的做：

* 从其他部门找一些熟悉开源的人来做报告
* 从外部寻找专家来进行咨询
* 招聘开源圈的人来进行相关工作辅导
* 购买代码扫描工具，配置专门的法律人才
* 寻找以开源项目为商业为生的合作伙伴，尤其是声誉俱佳的
* 在开发流程上进行适当的改变，比如引入DevOps工具
* 直接使用开源项目，引入或招聘大量人才
* 成立开源项目办公室（OSPO）
* 倡导开源文化，积极拥抱上游
* 开源自己的项目，吸引更多的开发者
* 利用开源创新，引领行业，保持竞争优势

那么问题来了，具体要怎么做了呢？ 无论贵司所处上述任何阶段，2021.9.17 日来由中国信通院主办的OSCAR 开源大会上，听经验分享，认识同行，看行业动向，都是一个不错的选择。

## 参考资料

1. 《云中行走 The Walk 》，导演: [罗伯特·泽米吉斯](https://movie.douban.com/celebrity/1053564/)，IMDb: tt3488710
2. 《维基法则：互联世界的新解决方案》，[[加\]唐·泰普斯科特（Don Tapscott）](https://book.douban.com/search/唐·泰普斯科特) / [[英\]安东尼 D.威廉姆斯（Anthony D. Williams）](https://book.douban.com/search/安东尼 D.威廉姆斯)，机械工业出版社，2019-7
3. [得开发者得天下 ———— 开发者是如何征服世界的](/posts/paper_or_book_reading/the_new_kingmaker_review/), 最后访问时间：2021.9.7