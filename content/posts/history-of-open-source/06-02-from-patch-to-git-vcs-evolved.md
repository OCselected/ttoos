---
categories:
- 开源
- 历史
date: 2022-07-27T13:59:40+08:00
description: "我们无法脱离计算机程序而大谈特谈开放源代码，至少不应该偏离太远，正如『开源之道』主创适兕经常举的例子一样，用文言文到白话文的比喻，也是和语言有关。我们的这个大章节是讨论关于程序开发的协作的，万变不离其宗，或许我们需要转换完全不同的视角来看这个。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之四/八：从文本差异补丁到分布式版本控制"
url: ""
authors:
- 「开源之道」·适兕
---

> The "source code" for a work means the preferred form of the work for making modifications to it.
>       ——— "The GNU General Public License v3.0"

## 重新认识源代码

`hello,world!` 是所有计算机语言教学的经典表述，我们都知道他是来自经典的计算机科普专家Brian Kernighan 的在《C语言编程》[1]这本书的表述：

```
main() {
    printf ("Hello,World!");
}
```

但这并不是人们日常使用计算机所能看到的，这是针对开发者的语言，由编译器处理之后交给计算机来运行的文本，我们通常称之为“源代码”[2]。

源代码就是计算机工程师们为计算机撰写的指令，实现我们日常用计算机来处理的事务，撇开具体的事物，撰写源代码的过程，和作家撰写文章没有任何的差别[3]，或者说任何利用符号来进行表述的创作者没有什么不同：

* 不断的进行变更；
* 长时间的增加
* 有可能回去修改过去一年的代码，也有可能修改昨天刚刚写的；
* 修改错误的语法、逻辑等
* 实现新的功能；

随着时间的累积，一定会超过人类记忆的限制，改变文本/源代码本身也将变得成为人的负担，那么计算机的主要功能：存储，恰是发挥这些最好的地方。累积的另外一个结果就是计算机可以处理更为复杂的事物，那么就需要撰写更多的代码，也需要更多的人参与，大型的项目，或者某个组织下的多个项目，那么只有分模块才能解决这样的问题，于是“codebase”[4]这样的工程构建也开始进入了视野。

## 文本的差异与补丁

开源的核心就是代码的修改与合并，其中的`diff`和`patch`[5]是这个思想的核心，不过，从历史发展的角度看，这些现在看起来是最为基本的程序，也是花了很久，以及很多人的工程实战经验，我们不妨向历史深处发展，工具是从劳动中来的，而不是任何的别处。

C 语言诞生于开发Unix操作系统，同样Unix系统的诞生地Bell lab也诞生了其它重要的应用，`diff`的算法就是从这里开始的[6]，从 1974 年发布的 Unix 第五版开启，由著名的早期操作系统开发者Douglas McIlroy （经典的`pipe`就是他开发的）和 James Hunt 撰写，随后在1975年，发表了`diff`的算法。

随着软件项目的开发，频繁的变更，使得开发者不得不思考每个版本的细节保留，以及任意的回滚，源代码管理系统[3]应用而生，受限于大型机的设备，科学家们对于源代码的管理并没有分支、基线这样的概念，不过，随着软件需求的增加，以及技术的发展，这样简单的系统显然无法满足需求。

`patch` 并不是和`diff`成对出现的，在十多年之后，由于合并的需求，著名的 Perl 作者 Larry Wall 开发了 `patch`，这样组合的出现，基本满足了工程的需要，要知道，在e-mail出现之后，自由和开源项目的维护是这两个程序最频繁的操作。

## 永久存储技术的发展——版本控制系统的出现

工具是随着技术环境的变化而出现的，工具本身就是目的，代码的频繁变更，经常性的出错，以及时间的延误，人还是要承认自己的记忆的不可靠性的，围绕文本变更的一系列工具开始被制作：

###  Source Code Control System 

说起最早的代码控制系统，我们需要提起一位Unix早期的开发者——Marc Rochkind [7]，作为 Bell 实验室的一名成员，代码频繁的变更使得这些工程师们必须想办法解决，于是在当时颇为符合条件的运行 OS/360 MVT 的 IBM System/370 计算机上，使用SNOBOL4语言开发了源代码控制系统，随后将之移植到了更为通用和先进的Unix系统上，采用C语言，运行在PDP-11上。Marc Rochkind 在1975年将实现整理成文章，发表在了IEEE上：“ "The Source Code Control System”[3]。

SCCS 的开源版本是 1977 年 2 月 18 日发布的 SCCS 第 4 版，之后一直都是Unix系统默认的版本控制系统，直到它无法满足需求，因为这个系统是在大型机上开发的，根本没有考虑网络的任何因素。

尽管 SCCS 的时代已经过去，正如它所依赖的 IBM 大型机，但是它仍然留给我们丰富的遗产，比如版本号：主版本号与次版本号，中间用句号隔开，一直沿用至今。  

### Revision Control System

我们看到 SCCS 开源并非是在Day 0,而是经历了多年的发展，它本身也有一些设计上的问题，那么替代它的系统，从最开始就开源，还有效的避免了其存在的问题，不过时间上已经是SCCS的10年后了，1982年由普渡大学的Walter F. Tichy 开发[8]，其最开始就是弥补了SCCS没有reverse deltas的功能，RCS 尽管是完美的替代了SCCS，但是它并没有超越SCCS，仍然局限在没有网络的单机中。 


## 服务器-客户端模式的版本控制系统

互联网的杀手级应用——e-mail，同时也诞生了点对点的邮件列表、新闻组等试图将信息平均分散的技术出现，互联网所拓展的空间——连接远在天边的计算机，成为了新的协作的可能性，此处有两个分野：继续保持分布式的互联网设计初衷，还是采用集中式的收集模式，后者永远是效率优先的典范，毕竟点对点是需要大量的沟通的。除了Linux之外，大多开源项目还是选择了集中式的客户端-服务器模式的版本控制系统：

### Concurrent Versions System

作者 Dick Grune 回忆自己开发系统的缘由[9]：

> 我创建 CVS 是为了能够与我的学生 Erik Baalbergen 和 Maarten Waage 合作开发 ACK（Amsterdam Compiler Kit）C 编译器。 我们三个人的日程安排截然不同（一个学生是朝九晚五的稳定工人，另一个则不规律，我只能在晚上做这个项目）。他们的项目从 1984 年 7 月持续到 1985 年 8 月。CVS 最初被称为 cmt，原因很明显，它允许我们独立提交版本。

现实的环境以及满足了人们可以异步进行合作开发的条件：各自运行的个人计算机或服务器、互联互通的网络、出色的编程语言，那么接下来的就是需要一个能够解决彼此的冲突、记录和撤销的友好系统。CVS 的出现一点也不奇怪，不过正如Linux 创始人 Linus 所言：

> 总是有多种方法实现的！[10]

### Subversion

SVN 的出现就是为了做到：“目标是成为广泛使用的并发版本系统 (CVS) 的最兼容的后继者。“

相比于CVS的学术出身，SVN 是由商业公司 CollabNet 开发的，那么权限的细粒度控制肯定有所长，这也是很多软件公司选择SVN来进行代码模块的控制的缘故，客户端-服务端的模式的协作是典型的大教堂式的做法，小范围的维护项目是完全满足的，但是说到真正利用开源和社交网络的优势，那显然是无法满足的。 

## 分布式版本控制系统

分布式的优势是显而易见的，但是仍然取决人参与者的态度与价值观，也要看项目的规模和设计模式，Git 的创始人 Linus 在Google的一次内部分享中[11]，谈及了关于分布式版本控制系统的表达，以及对CVS的不满，也就是对有中心的不满。

> 分布式版本控制系统可能是[过去]十年来软件开发技术的最大进步！
>     —— Joel Spolsky [12]



## 参考资料

1.  《C程序设计语言》，（美）Brian W. Kernighan / （美）Dennis M. Ritchie， 机械工业出版社，2004-1
2. https://en.wikipedia.org/wiki/Source_code ，最后访问时间：2024.5.7
3. Rochkind, Marc J. (December 1975), "The Source Code Control System" (PDF), IEEE Transactions on Software Engineering, vol. SE-1, no. 4, pp. 364–370,
4. https://en.wikipedia.org/wiki/Codebase ，最后访问时间：2024.5.7
5. 《开源之迷》，适兕，人民邮电出版社，2022-3
6. https://en.wikipedia.org/wiki/Diff ，最后访问时间：2024.5.8
7. https://www.mrochkind.com/mrochkind/index.html ，最后访问时间：2024.5.10
8. https://en.wikipedia.org/wiki/Revision_Control_System ，最后访问时间：2024.5.10
9. https://dickgrune.com/Programs/CVS.orig/ ，最后访问时间：2024.5.10
10. 10 Years of Git: An Interview with Git Creator Linus Torvalds , https://www.linux.com/news/10-years-git-interview-git-creator-linus-torvalds/ ，最后访问时间：2024.5.10
11. Tech Talk: Linus Torvalds on git， https://www.youtube.com/watch?v=4XpnKHJAok8&t=90s ，最后访问时间：2024.5.10
12. Distributed Version Control is here to stay, baby, https://www.joelonsoftware.com/2010/03/17/distributed-version-control-is-here-to-stay-baby/ ，最后访问时间：2024.5.10
13. 


## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出版，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
