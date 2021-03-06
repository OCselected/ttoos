---
categories:
- 开源
- 基金会
date: 2019-02-13T12:31:27+08:00
description: "解读一份数据报告，要有横纵向的对比，历史数据、同行内的报告等等，看出点端倪，从自己的视角出发，挖掘出想要的才是阅读一份报告的真谛，CNCF 刚刚发布的年度报告，你是什么视角？想要从这份报告中佐证自己的所想？还是看出不利的征兆？看看开源之道怎么看。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 基金会介绍
- 开源之道
title: "云原生的旭日东升 —— CNCF 2018年度报告解读"
url: ""
---
## 引言

阅读非盈利基金会的年度报告有的时候是一种享受，如 [Apache 2018年度报告 （PDF）](https://s3.amazonaws.com/files-dist/AnnualReports/FY2018%20Annual%20Report.pdf) ，你想知道的全部都在，甚至会引导你进一步的探索。但是有的时候，却是一种折磨，如[OpenStack 2018年度报告](https://www.openstack.org/foundation/2018-openstack-foundation-annual-report/)，就是那种蹩脚的售前做的PPT一般，让人味同爵蜡。可是还有一种是位于两者之间，既遮遮掩掩，又欲说还羞，让你不得不去进一步的进行解读。于是有了这篇文章。

当然，著名的云原生布道师宋净超也做了为题：[CNCF年度报告解读（2018年）](https://jimmysong.io/posts/cncf-annual-report-2018-review/)，解读的非常不错，推荐大家阅读，我这边尽可能的读点和Jimmy不一样的视角。

## 阅读非盈利基金会报告需要的基础知识

我们可以肆无忌惮的说，非盈利性的、中立的开源软件基金会所生产的开源软件项目，将会是现在和未来的软件主流生产方式！这个无论是从公共产品的角度，还是商业联盟的角度，乃至天然的人类协作方式，都讲的过去。请允许我在这里再一次引用 Nathen Harvey 在 Information Week 中的文章中指出了三个问题：

> “项目应该由商业的赞助商驱动还是外围的贡献者驱动？商业利益是否应该凌驾于社区的意愿之上？该如何以及在哪里为商业实体和开源社区之间划上一个明确的界线？”

这三个问题确实是异常的尖锐，回答起来就显得非常的关键，但通过基金会的模式，开放的治理可以解决大多数的问题。

### 开源项目/社区、非盈利基金会和商业公司之间的关系

有人说一图胜千言，以下这张图来自 Siobhán 的研究：《Nonprofit Foundations And Their Role In Community-Firm Software Collaboration》论文。

![](images/nonprofit_foundation.png)

该图完整的说明了开源项目/社区和非盈利基金会以及商业公司之间的关系。也完整的定义了基金会的意义和功能所在，开发者信奉的哲学中，是不希望有过多的金钱和干涉，希望按照自己的意愿行事。而这让奉行实用主义、关注利润的商业公司是完全相悖的，而且和竞争对手合作，也需要有所约束。于是基金会在他们二者之间找到了位置。

### 非盈利基金会的性质

这个由于特殊的环境因素，比较难以理解，因为都是美国的组织，不过我们在阅读这些基金会年度报表的只需要知道一点即可，那就是 501(c)(6) 和 501(c)(3)之间的区别。

比如Linux 基金会就是 501(c)(6) ，而Apache 软件基金会就是 501(c)(3) 类型的。具体有什么区别，请有心的看官查阅相关资料。但是在年度报告体现出来的就是Apache 软件基金会会事无巨细的将财务报告写上，而CNCF就不会有这方面的任何材料。

### CNCF 的历史背景

这一点开源之道专门在2018年撰写过一篇文章：[CNCF 是如何工作的](/posts/foundation_introduce/how_cncf_works/)，请看官在进一步阅读之前，尽量先读一下该文，了解一下CNCF。

## CNCF 2018 年度报告

交待完上述内容，我们就看一下CNCF的年度成绩单。

### 孵化项目 -- 基金会存在的核心价值

除了顺利毕业的三个项目：Kubernetes、Prometheus、Envoy，以及一大波选择CNCF孵化的项目，如18年成功进入孵化和沙箱的16个项目：

![](images/cncf-annual-report/project-update-and-satisfaction.png)

那么就是下图所示这些项目的更新和发布信息：

![](images/cncf-annual-report/project-updates-and-release.png)

随着开源开发成为软件开发方式的主流形式，开源项目的良性发展成为所有人追求的对象，谁都知道开源项目的失败率是非常之高的，先进和设计良好的技术仅仅占据其中因素的部分而已，良好的社区发展也占据不亚于技术本身的分量，所以这是基金会重点关注的对象，尽管所创造的制度并不能够直接干涉项目和社区，但是可以为项目和社区制造一个良性运作的环境，开发者要肆无忌惮地发挥自己的创新的能力，是需要一个能够思考、实践和正负反馈的良性的环境的。这就是核心价值，如果没有被世界所需要，那么一切围绕这个核心的内容将不复存在。

另外值得一提的是CNCF提供了让人们公开查看项目进展的工具：[DevStat](https://k8s.devstats.cncf.io/)，以图形化的方式展示项目的活跃度，举个例子，如果你觉得那个项目被某个商业公司所控制的话，就来这里看看，相对于[RedMonk的分析](https://redmonk.com/fryan/2018/04/03/who-contributes-an-analysis-of-cncf-projects/)而言，这个是源头。当然这是帮助公司的社区经理、开源办公室等需要数据分析和报告的人们的利器！

### 发展会员 —— 基金会得以持续运转的财务保障

这就是本文命题的支柱：增长幅度是130%，简直不可思议。（看这个数据，最好是回忆一下2013~2015年的OpenStack基金会扩张速度。）

![](images/cncf-annual-report/cncf-member-growing.png)

企业会员是基金会发展的重要经济来源，也是衡量一个基金会在企业心目中重要标尺，Marketing 是一个非常讲究及时回报的行业，当然，这可能和公司具体的战略有关。当绝大多数的Marketing部门关注到了这个基金会的影响力，就会殷勤的掏出钱来帮助基金会。那么CNCF去年的会员发展，则说明了很多IT公司都看到了云原生这个新兴领域，竞争也是异常的激烈的。

### Marketing 工作 ———— 维持生态的重要手段

关于这点的内容，我这里就不为大家截图了，也就是说Marketing的数据可以大体上扫描一下，如：

* 举办了几场大型的技术研讨会？分别在那些个重要的国家？
* 会议赞助商，尤其是铂金、战略赞助商有几家?
* 会议的规模有多大？Meetup的活动次数？
* 文档、博客、认证等评估
* 社区奖励、最终用户社区、大使计划等

人们有追逐热点的惯性，如果有人招旗呐喊的话，那么就会吸引更多的人来。

## 为什么特地将中国写进去？

你很难讲清楚中国这个古老的国度的很多事情。但是没有人质疑她在近代的落后，以及当今的奋起直追。对于开源的项目而言，中国从来都是能赶个早班，如2000年后的Linux操作系统、2013年左右的 OpenStack 项目，但是故事的结局颇让人耐人寻味。开源给了中国同步世界的机会，但是却整整的错过了两次。第三次来袭，国内的厂家依然生猛，在花钱和贡献项目上位居第三。

中国是一个人口大国，就近几年的发展而言，拥有大量的开发者，据GitHub的数据考证，中国在2018年拥有的[开发者数量](https://octoverse.github.com/people)是全球第二多的，而且都是极为聪明和勤奋的，只要稍加教育，提高认知和获得延迟满足，都是非常高的生产力。

正如 RedMonk 著名分析师 Steve O'Grady [所言](https://www.crn.com/news/applications-os/ibm-ceo-and-friends-open-up-about-open-source-everything-that-can-be-open-source-we-d-prefer-to-be-open-source-?itc=refresh) ,企业现在不是说开源了多少，而是要将衡量的内容变为“还有多少闭源的项目”，软件的差异化本来就越来越少，那么本土的企业就面临项目开源，以存活下去。2018年选择CNCF来孵化的项目有三个：Dragonfly、Hoarbor、TiKV，而选择Apache基金会、Linux基金会其它子基金会的也不少。所以遵守CNCF的规则来孵化项目，借机让项目存活下去，也对公司的品牌有一定的贡献度，这是皆大欢喜的事情。而CNCF何乐而不为了呢？相信一旦尝到甜头，未来会有更多的项目选择CNCF来孵化。

正如我在前面提到的，当公司的Marketing部门看到了诸如会议、网站点击率、社区讨论等活动量非常大的时候，Marketing 是非常愿意花钱来博得眼球的，而中国从来不缺金主。以去年KubeCon的规模来看，国内对于CNCF的赞助是非常可观的。

~ 开发者的弯道超车，开源社区就像Apache的几位member所言，开源圈到处都是白色皮肤和白头发的白色皮肤的人，看看国内的媒体报道就知道了，李响成为Kubernetes 技术委员会成员，阿里巴巴的公关恨不能披上国家的外衣，像刘翔那样捧上天。~

我在去年的Open Infrastructure China Day上有一个分享，CNCF是新近成立的基金会，学习了很多前面的软件基金会，即如何在项目社区和商业之间取得平衡，显然CNCF是懂得其中厉害关系的。对于国内理解开源较少的公司而言，或者说懂开源的人在公司占据较少话语权的公司而言，造声势是必须的，否则将很难说服这些公司加入这一生态。

无论怎么样，CNCF 这样的国际非盈利基金会开始关注中国的公司和开发者，也非常重视中国这块市场，无论从哪个角度讲，对于中国而言都是好事，至少是机会均等！

> 开源之道观点：反而担心CNCF被国内的公司所制擎，至少我看到 Flink 项目就是破坏 Apache 规则的撕破口，而OpenStack不用说，已经被撕裂，CNCF 确实在具体的项目上没有被公司所干涉，但是只要是规则就有漏洞，而国人从来就不乏漏洞的投机者。拭目以待吧，要么CNCF把这些企业带上了正常的轨道，要么是CNCF被污染。而我希望是前者。祝好运！
