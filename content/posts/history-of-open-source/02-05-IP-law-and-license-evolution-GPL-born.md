---
categories:
- 开源
- 历史
date: 2022-05-17T14:52:05+08:00
description: "要提出自己的主张，当认为自己受到了不公，就要站出来反抗，用实际行动证明自己的期望，GPL的被发明和创造，并不是天才一下子想到的，而是一位意志坚定的普通人，遭受了不公平的待遇，破坏了自己所热爱的共同体生活，不过是选择了软件自由的方式来捍卫自己的尊严和主张罢了，GPL威胁到了谁？历史赋予它公正的评价了吗？"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之八/四：夹缝中求生存——自由软件及GPL的艰难抗争"
url: ""
authors:
- 「开源之道」·适兕
---

## 闭源专有条款的扩张与捍卫自由的反抗

随着软件的著作权（源代码和二进制）受到保护，以及申请专利的合法化，这为软件开发商提供了相当的利润，一发不可收拾，在行业渐成壁垒，在这些专有的条款中，有非常强势的禁止项：不可学习源码，了解原理和修改以适应自己的需求。而学术上的许可，基本上就是继承了科学的共有主义[1]，对于没有在科学圈工作的人，获取可持续发展的必须的资源几无可能。

有需求的地方，必然有人站出来满足，其中影响整个软件历史的人物走上了舞台：Richard Stallman 在一次被人拒绝提供打印机源代码的情况下[2]，愤然发起了GNU项目，并在随后成立了基金会，继而发展出石破天惊的全新许可。

我们要从一个软件作者差点失去自己的软件控制权的故事说起。不过在讲述这个故事之前，还有一件事情需要叙述，笔者之所以这么啰嗦，是有一个个人的基本观点：“根本就没有所谓的横空出世，都是无数事情的累积。“ 如果说打印机事件是个转折点的话，那么Stallman 使用多年的Lisp语言，被商业环境竞争所导致无法查看源代码的事件可能就是一个点燃导火索的火种。

## 将 Stallman 逼到墙角

### MIT AI Lab Lisp

Richard Stallman 在1971年加入 MIT AI Lab，并开启了其十多年的黑客生涯，到1981整整十年间，他就活在这个理想的黑客共同体中，有程序可以编写，也有智力的挑战，也有一群秉持同一种价值观的同行，这个实验室使用的编程语言是自身开发的Lisp 的方言：Lisp Machine Lisp [3]，在PDP-11上进行探索。正如我们在上一章看到的，软件的商机已经被资本发现，很多计算机相关毕业的同行都在进行商业化。

其中一家叫做Symbolics 的公司，雇佣了大部分MIT AI Lab的人[4]，另外一家叫Lisp Machines, Inc., 也拉走了另外一部分人，这两家公司开发了 Lisp 方言：ZetaLisp， Richard Stallman 看到Symbolic 的版本，希望获得源代码看个究竟，显然Stallman并没有意识到黑客群体的衰落，得到过去同事的答复和打印机的故事是类似的：**要求Stallman签署保密协议，可以浏览源代码，但是不可以将实现移植到Stallman 所维护的版本——MIT Lisp“ **，这是一种严重不对等的协议，甚至是歧视性的，换句话说就是：**”Symbolic 可以无限复制 MIT AI Lab 的代码，但是MIT AI Lab 不可以复制Symbolic的代码。“ ** [5]

Stallman 在文章中如此形容此时的心境：群体的崩溃。[4]

### Gosling Emacs 威胁到 Emacs 原创者

1976年，Richard Stallman 作为联合作者开发了EMACS[6]，以共享源码的方式在圈内流传，其中一个版本，是后来设计Java 语言的James Gosling 开发的衍生版，于 1982 年编写了第一个在 Unix 上运行的基于 C 的 Emacs (Gosling Emacs)。稍后 Gosling 将这个版本的版权卖给了UniPress 公司，于是 Gosling Emacs 不再存在，而只有 UniPress Emacs，UinPress 决定不再让人们自由的分发，而是以专有软件付费的方式进行。

Richard Stallman 几番沟通无果之后，决定自己基于最后可自由分发的Gosling 版本重写 ，几经波折，终于在1985年发布了，并且成为其庞大的GNU 计划的龙头项目——GNU Emacs，但是这次惨痛的教训，让Stallman 明白，需要在道德之外来进行约束，因为那个他认为的理想群体，已经衰落，而自己成立人们眼中：**最后的黑客！**[7]

在发布软件的同时同步发布了许可：Emacs  通用公共许可[8]。这就是后来在1989年1月发布的完整版的 GNU 通用许可的原始雏形。

像所有人类创造的事物一样，Stallman 并不是全新的写作，而是借鉴了自己熟悉的内容，比如我们可以在 Emacs  通用公共许可的免责部分还可以看到 MIT 许可的影子，毕竟 Richard Stallman 当时的Emacs 源代码还放在MIT的服务器上。以下是笔者整理的几个关键点：

1. Emacs 是自由的
2. Emacs 不是公有领域的：它受版权保护，并且对其分发有限制，但这些限制旨在允许一个良好而合作的公民想要做的一切。
3. 建议且应该付分发费用给分发者
4. 可自由的修改和学习
5. 除非本许可协议明确规定，否则您不得复制、分许可、分发或转让 GNU Emacs。

这个显得粗糙的文本，需要经过律师的加入，才能成为被世人所识别和解读，也就是改变软件产业的GPL 的诞生。


## 自由软件许可 GNU GPL——天才般的创举

学术许可显然是非常宽松的了，但是对于 Richard Stallman 而言，这么做显然不够，根据自身遭受的经历，学术许可显然无法保证分发之后的用户自由，因为能够修改的厂商仍然可以把学术许可的代码包装成闭源专有软件的，而这是违背 hacker 精神的，既然现有的许可无法满足，那么只能自己开发了。

Richard Stallman 显然不是一般角色，而是那种人类的翘楚，虽然对于现有的著作权应用于软件严重不满，但是他并没有尝试去否定它，而是利用hacker的思路来应对，发明出了“copyleft”这个令大部分接受了“copyright”的人理解起来颇费周折的革命性概念。如果这个名词带有聪明的狡辩嫌疑的话，那么通用公共许可的起草与发布，算是一场正式的社会运动了。

《礼记·曲礼上》有云：***礼尚往来。往而不来，非礼也；来而不往，亦非礼也。\***  几千年的文化积淀，理解起来这样的互惠性，实在是太容易了。有了这个基础，对于GPL这样的许可，不过是实现了这个日常礼仪罢了。

没错，GPL 就是互惠性，而且在许可中强调修改、重新分发的衍生作品也必须采用GPL，这样保证了软件的自由可以一直延续下去。这是一种有条件的许可，如果你符合条件，你就有权使用；如果你不符合，你就是侵权。[9]

## 许可之上的哲学

如果我们只是把GPL当作一般的软件许可的话，那么真的是低估了改变世界的自由软件运动和开源软件运动的背后的深层逻辑。 GPL 绝非那些字面上的条款，而是其解决了人们集体行动的重要的后顾之忧。

GPL 是自由软件共同体的哲学基石，它确保人们可以放心的付出劳动，而毋需为他人做嫁衣裳，如果认同的话，还可以是这力量的一部分。

## 一场改变历史的运动

GPL 1.0 并不完善，至少对于自由软件共同体来说，还是显得有点拖沓和不够坚决，稍后，1991年7月，发布了GPL v2.0 ，这一划时代的许可，引领了一场改变历史的运动。尤其是内核项目Linux 选择了GPL V2.0。

在上世纪整个90年代，GPL v2.0 给人以启迪和奋进，工程上不断前进，共同体发展逐步壮大，直到下一波浪潮来临，面临了新的局面与挑战。

正如一位撰写GPL 历史的同仁评价道：

> The GPL has become a powerful force in the information age. A hack on the copyright system, it turns the concept of copyright upside down, creates a whole community cooperating around the world and enables the development of *software by the people, of the people and for the people.* Many new licenses were modeled after or influcenced by the GPL. [10]

 历史，从此改变了轨迹。

## 参考资料

1.  《社会理论和社会结构》，[[美\] 罗伯特·Ｋ.默顿](https://book.douban.com/author/4609490)，[译林出版社](https://book.douban.com/press/2331)，2015-2-1
2.  《若为自由故：自由软件之父理查德·斯托曼传》，[人民邮电出版社](https://book.douban.com/press/2609)，[[美\] Sam Williams](https://book.douban.com/search/Sam Williams)，2015-4
3.   https://en.wikipedia.org/wiki/Lisp_Machine_Lisp ，最后访问时间：2022-06-01
4.  《GNU 操作系统和自由软件运动》节选自《开源革命之声》，Chris Dibona 等，中国电力出版社，2000-1 
5.  《Understanding Open Source and Free Software Licensing 》，[Andrew M. St. Laurent](http://www.oreillynet.com/pub/au/1838)， O'Reilly Media, Inc.，2004-08，在线访问地址： https://www.oreilly.com/openbook/osfreesoft/book/ 
6.  https://www.jwz.org/doc/emacs-timeline.html ，最后访问时间：2022-05-11
7.  《黑客：计算机革命的英雄》，[[美\] Steven Levy](https://book.douban.com/author/646670)，[机械工业出版社](https://book.douban.com/press/2793)，2011-10-31
8.  https://www.free-soft.org/gpl_history/emacs_gpl.html ，最后访问时间：2022-05-11
9.  《知识财产法哲学》，[[澳\] 彼得·德霍斯](https://book.douban.com/search/彼得·德霍斯)，[商务印书馆](https://book.douban.com/press/2851)，2017-3
10.   https://www.free-soft.org/gpl_history/ ，最后访问时间：2022-06-01

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
