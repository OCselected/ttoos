---
categories:
- 开源
- 历史
date: 2022-06-02T08:52:27+08:00
description: "知识财产法律可以重塑市场，书、音乐、艺术作品都是通过这个方式来实现的，软件也不例外，在个人电脑发起革命式的市场之下，著作权再一次起到了重要的作用，软件供应商不断的建立保护自身的机制，从技术实现到加密，再到强制的合同签署，商业建立壁垒，就是立法的过程。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之一/七/四：软件版权的自我保护完善还是霸权的扩张 —— 二进制被正式纳入版权法"
url: ""
authors:
- 「开源之道」·适兕
---

## “致电脑爱好者的一封信” 后续—— 寻求保护的软件供应商

 Intel 的 x86，开辟了全新的个人计算机市场，硬件以大众可以承受的价格开始在70年代后期，80年代早期极速的发展，软件供应商也在这个冉冉上升的市场中逐步发展起来，1976年，Bill Gates 发表了那封响彻圈内的公开信之后，法律并没有什么变化，软件供应商只能在现有的法律框架内进行，例如商业保护等，在技术上则寻求更多不让用户看到源代码的方式，固化ROM和磁带的出现解决了燃眉之急。[1]

但是，个人的需求越来越大，和每一个用户签署一份秘密保护合同，显然是不现实的事情，Bill Gates 的原话是：

> Because there are certain things that are not suitable for covering under, covering with trade secret protection. You don't want to go out for every $14 piece of software you sell, get a non-disclosure agreement from the guy. That's bad news. 

这中间有一个很重要的原因，那就是软件的源代码是受著作权保护的，根据1976年的版权法：“适用于流程图、源代码和组装阶段的计算机程序，但不适用于对象阶段。”

也就是说，这个时候整个个人计算机市场，也像大型机市场那样，在售卖完成之后，是需要提供源代码的，这是一种继承或延续，比如AT&T 在早年间的Unix ，以及IBM  仅目标代码策略（ODC），[2] 也就是说，如果某些投机者，只要不提供源代码是可以窃取软件供应商的成果的。

这其中一个案例就是 Datacash vs. JS&A (79 C 591, September 26, 1979)，宣判的结果就是：“计算机程序的对象阶段不是 1909 年版权法或普通法意义上的‘副本’”。

但是，技术的发展会让法律走向前沿，既然二进制也需要保护，那么一定有人在推动，微软就是其中之一，但是，改变这种局面的却是另外一个诉讼。甚至都不是软件，而是（从技术的角度讲）从硬件到软件过渡的程序——固化在主板上的BIOS系统的程序，但是这已经足够了。

## 一场重要的官司

Apple II [3]的发布被认为是个人计算机历史重要的里程碑，也是传奇企业家乔布斯一举成名的重要机会，但是，就是其发布不久，一家叫做 *Franklin Computer Corp.* 发布了Franklin Ace 1000，这事Apple II的克隆制品，Apple 很快确定 Franklin ROM 和操作系统的大部分内容是直接从 Apple 的版本中复制而来的，1982年5月12日，向美国宾夕法尼亚州东区地方法院提起诉讼。它引用了一些相同的嵌入字符串，例如名称“James Huston”（Apple 程序员）和“Applesoft”，在 Apple 和 Franklin 系统磁盘上都存在。

![](https://m.blog.hu/ap/appleblog/image/200901/per_ace-apple_final_01.jpg)

证据确凿！ 但是 Franklin Computer 辩称，由于 Apple 的软件仅以机器可读形式存在，而不是以印刷形式存在，而且由于某些软件不包含版权声明，因此可以自由复制。Apple II 固件被比作一个机器部件，其形式完全由兼容性要求决定，因此不具有版权。

地方法院裁定 Franklin Computer 胜诉！但Apple 没有就此打住，Apple 继续向美国第三巡回上诉法院上诉，上诉法院推翻了地区法院在 Franklin Computer 案中的裁决，Apple 在 1988 年之前迫使 Franklin Computer 撤回其克隆产品。

该官司有两个重要的裁决：

* 这是美国上诉级法院首次裁定计算机的 BIOS 可以受版权保护。
* 该裁决澄清了二进制代码，即软件和固件的机器可读形式，也具有版权，而不仅仅是软件的人类可读源代码形式。

更多详细内容，看官可以看当年的裁决书[5]。

## 市场概要

法律塑造了软件市场，二进制文件受到版权的保护，直接的影响就是 [shrink-wrap](https://en.wikipedia.org/wiki/Shrink-wrap) 售卖专有软件的商业模式崛起[2]！再也不需要签署繁琐的合同，遮遮掩掩了，直接就不再提供源代码了。接下来就是专有软件时代的到来！

 二进制纳入版权与 shrink-wrap 的商业模式之间的关系，在源代码时代是不可行的，因为让用户复制二进制版本是无法限制的，只能是提前的商业合同，犹如我们在前面看到的IBM 为其S/360客户提供的合同，一旦到了最终用户手里，就失去了所有的法律效力，无法限制。有了二进制版权，就有了一种威慑力，使用即同意，如果用户违反了其中的版权，犹如复制图书一样，是违反了版权法的，软件供应商有权追究所有责任。

所谓的 shrink-wrap 模式，就是将许可置于封装后的盒子里，客户在购买之前无法访问。通常，许可协议印在盒装软件内的纸上。当然，再往后又发展出了：点击-wrap模式，也是我们现在常见的专有软件的模式，在安装前或后，问你是否同意，不同意就没法用。

一个轰轰烈烈的软件开发时代的来临，软件封装即可一本万利的赚钱，一时之间，不仅是操作系统、编译器开始了大行其道，杀手级的应用如Visicalc等也出现在了市场之上。开启了一个时代。但是并不是所有人都认同这样的模式。

## 完全胜利了吗？

在这个新到来的市场中，过去学习编程的大学生和研究生们大受欢迎，像过去MIT AI Lab 、伯克利系统实验室之类的都是抢手的宝贝，大家也纷纷加入这些不断崛起的、待遇丰厚的公司，当然，这些公司对于源代码的控制也是强有力的，即使在硅谷这样分享文化浓厚的地方，源代码仍然是公司的私有财产，虽然人可以自由的跳槽，但是代码是无法共享的。

但是，不是所有人都能接受这种变化，Richard Stallman 就是其中之一，他自己认为代码分享是一种人类不可剥夺的自由权力，在这个时候他也和封闭的风气有了冲突，或许面向个人的应用和程序，压根就不在Stallman的视线里，但是，专有厂商还是没有放过这位开发者的领地：Lisp 和Emacs——他花了数十年学习和享受的技术。

于是，共享代码的复兴运动，就隐藏在这场法律塑造的庞大计算机市场之下。

## 参考资料

1. https://features.slashdot.org/story/00/01/20/1316236/b-gates-rants-about-software-copyrights---in-1980 ，最后访问时间：2022-06-02
2. http://landley.net/notes-2009.html ，最后访问时间：2022-06-02
3. https://en.wikipedia.org/wiki/Apple_II ，最后访问时间：2022-06-02
4. https://en.wikipedia.org/wiki/Apple_Computer,_Inc._v._Franklin_Computer_Corp. ，最后访问时间：2022-06-02
5. http://digital-law-online.info/cases/219PQ113.htm ，最后访问时间：2022-06-02

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。