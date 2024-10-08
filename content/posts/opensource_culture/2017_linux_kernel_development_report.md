---
categories:
- 开源
- 感悟
description: "正如文中所说，Linux 内核无论从那个角度来看都是值得研究的对象，社会、人文、协作、工程、管理、技术本身等等。如此看来，这是人类非常了不起的创造！值得上帝为之惊叹！令所人赞扬、尊敬的工程。"
keywords:
- Open Source
- Culture
tags:
- 开源文化
title: "Linux 内核开发报告2017版"
date: 2017-10-30T15:41:51+08:00
url: ""
authors:
- 开源之道
---

## 摘要

**全球公有云上运行的负载有90%是Linux操作系统，在嵌入式市场的占有率是62%，而在超算的市场占有率更是达到了99%，还有，它运行在世界上超过82%的智能手机中，也是所有公有云厂商的主要支撑服务器（90%）。**

这一组百分比的数据能够激发你什么样的想象？这么形容，你觉得是否合理：“几乎整个（移动）互联网以及支撑它的云计算和大数据，都是由Linux来负责掌控的。” 这样一个神奇的系统的开发方式是什么样的？已经经过了26年的发展，它是如何保持活力的？庞大的社区又是如何协作的？我们不妨来解读一下Linux基金会刚刚发布的[Linux内核开发报告2017](https://www.linuxfoundation.org/2017-linux-kernel-report-landing-page/)

![](https://www.linuxfoundation.org/wp-content/uploads/2017/10/report_mockup.png)

> 我很荣幸能够在Linux社区和一些具有高水准的人打交道。  --Julia Lawall（来自 Inria 的高级研究员如是说）

## Linux 项目的现状

本次的报告，所统计的数据是从内核的4.7算起，到4.13止，先看看Linux都增加了那些新的特性吧：

* 透明 Huge 页现在可以支持基于文件的页，以及可编程的数据的页，可以更加高效的利用内存。
* 内核的文档系统切换到了新的工具链，即[ Sphinx](http://www.sphinx-doc.org/)：为了更好的组织和加强内核的文档。
* 内核的核心计时机制，被替代为新的更加高效。
* 网络栈中的“易捷版数据路径”机制的实现，可以处理用户 BPF 程序负载的高速网络包。
* BBR 拥塞控制算法改善了多种设置中的网络性能。
* ......

以及更多的驱动、更安全、更多的测试。

> 当你的代码是运行在数十亿台设备上的时候，感觉真的不一般。 ——Jens Axboe（Software Engineer, Facebook）

## 都有谁为Linux做的改变？

自从进入 Git 时代（即2005年 2.6.11 发布之后），共有15,637名开发者为 Linux 内核的开发做了贡献，这些开发者至少是来自1,513家公司。

尽管那些独立的开发者看起来是很多，但其实是少部分人做了大量的工作，在几乎所有的开发周期中，大约有1/3的开发者，每人仅贡献一个补丁。自2.6.11版本之后，贡献最多的前十位工程师，他们加起来的贡献有45,338次改变，大概占了总数的7.1%，前30名加起来的贡献是16%。他们的名字是：H Hartley Sweeten、Al Viro、Takashi Iwai、Mauro Carvalho Chehab、David S. Miller、Johannes Berg、Mark Brown、Tejun Heo、Russell King、Greg Kroah-Hartman、Thomas Gleixner、Christoph Hellwig、Hans Verkuil、Ingo Molnár、Chris Wilson、Arnd Bergmann、Geert Uytterhoeven、Dan Carpenter、Eric Dumazet、Joe Perches、Alex Deucher、Daniel Vetter、Laurent Pinchart、Axel Lin、Trond Myklebust、Ben Skeggs、Arnaldo Carvalho de Melo、Bartlomiej Zolnierkiewicz、Kuninori Morimoto、Linus Walleij。

（没有看到任何汉语拼音的贡献者）

Linux 仍然是存在这个人英雄主义色彩的，是的如此庞大的系统，必须是群体智慧的产物。但是精英们、英雄们付出了他们智慧与努力，理应得到荣耀。

> 我一直以来都喜欢底层的软件打交道，因为他们靠近硬件的边界。 ——Kees Cook(Software Engineer, 来自Google）

## 都有那些公司为Linux做了赞助？

没错，你能想到的IT公司基本都是Linux的贡献者，他们雇佣开发者专门来对内核进行开发，有芯片厂商如Intel、AMD、ARM、TI等，也有互联网巨头Google、Facebook，是谁并不重要。

正如有的评论家称，无论哪家公司，若是去说开源对于他们的发展相比于他们的贡献都是不成比例的，无论怎么反馈都是他们有利。商业公司考虑的因素更多，但是不能失去内核，内核的开发无论其处于何种目的。都是应该的。拿Intel来说吧，即使Intel在过去的一年贡献率达到13%，但相比于它的营收，这点都是微不足道的。

开源固然感激商业公司的赞助，但是反过来，商业公司更应该感激开源能够让他们有机会赞助，并赚取利润。

## 新的开发者

像很多的社区一样，或者更大范围的道理，很多人是浅尝辄止，从kernel的历史来看，在每个版本都会有新人提交那么一个或几个patch，然后绝大多数人都离开了，只有少部分人留下来。目前社区的贡献者人数是：4,319，而其中过去一年中的新人有：1,670位。另外，新人们所提交的patch均是设备驱动，按照数量排名依次是：网络驱动、文档、显卡驱动、USB驱动、和声音子系统。

这样我们可以有一个直观的推论，那就是能上手内核开发的，并没有传说中的那么难，更难的在于坚持下来一直去做。当然，这一点，有商业公司的支撑会好很多。

## 谁在做着review代码的工作？

到现在你是不是还没有看到 Linus Torvalds 的名字？

Linux 作为最大的开源项目之一，不是随便的无章法的，每一个补丁并非是直接就能进入主干的，而是要经过很多个子系统的。而每个子系统都是有对应的维护人员的，这些维护人员要审核人们的提交。每个补丁经过这些维护者审核之后，都会加上“Signed-off-by”，这意味着这个补丁可以进入内核。分析内核代码时，关注“Signed-off-by”，你就能明白都有谁是内核的守护者。

没错，Linus Torvalds 现在就是其中之一，由他本人“Signed-off-by”的补丁在过去的一年中有207，占总共的0.3%。

## Linux 在26年以来所学到的

很少有开发项目能够拥有这么久的历史，大多数的项目在经历了如此长的历史之后，都会有“稳定状态”这样感觉，会有日薄西山的感觉。但是 Linux 内核没有这样，26了，它依然保持活力和旺盛的生命力。是的，有很多的学术研究Linux社区的成功之处，但是在我们彻底的将它搞明白之前，我们先总结下我们的教训：

* 短的开发周期真的很重要。
* 流程的可扩展性需要一个分布式的、层级的开发模式
* 工具很关键
* 强烈的共识导向模式非常重要。要作为一般规则。
* 内核还有一个相关的因素是“无回归”规则。
* 企业的参与在过程中蛮重要。
* 项目内部不应有边界。

以上这7点，对于任何的大型开源都有重要的参考价值。26年，内核用实际行动告诉我们，持续、合作的努力能带来巨大的共享资源，这本身没有任何一家单独的公司可以做得到。

## 开源之道点评

Linux 迎来了巨大的成功，所有人都直接或间接的受益于它。Linux现在成了几乎整个IT领域的基石，当下发展的多数技术如云计算、大数据、IoT、机器学习，默认都是以Linux为基础，向上构建。然而就是这样的技术，其背后26年尤其是前13年，走过的曲折道路，艰辛道路。让我们重温下1998年的开源人物合影：

![](http://thevarguy.com/site-files/thevarguy.com/files/imagecache/galleryformatter_slide_penton/gallery_images/6_1.jpg?1505745541)

但是从技术和工程、协作、治理的角度讲，Linux 内核是人类史上的奇迹。其背后蕴含的哲学、方法都是我们值得挖掘的宝库。

Linux基金会所做的报告，看起来都是非常成功的数据。但是要知道，微观上是那些开发者殚尽竭虑、夜以继日的工作、调试、试验、沟通的结果，4319人共同打造的艺术品。难道这本身不应该被铭记和尊敬？感谢你们！
