---
categories:
- 开源
- 历史
date: 2022-06-07T08:19:11+08:00
description: "软件许可的发明和创建，和知识财产的其它方面是一个道理——保护创作者的权益，尤其是商业模式，Mozilla 公共许可是在各种紧迫的条件下所产生，有工程师自身的境遇思考，也有网络商业的法律不成熟，当然更有被强大的竞争对手利用霸权所欺负的愤怒和恐惧，更有甚者，是传统的律师参与了这个许可的创建，很明显了没有让步于开源共同体，而是更多的强调了公司自身的利益，预示着开源世界逐步被商业渗透扩大的开始。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之十/四：浏览器竞争下的创新模式——Mozilla公共许可"
url: ""
authors:
- 「开源之道」·适兕
---

## 引子

Tim Berners-Lee 放弃了走商业化的道路，并不意味所有人都站在他这一边，1993年，万维网给了所有冒险家希望，这意味着巨大的商机就摆在眼前，然而，历史并不是当事人所想的那样发展，不确定的未来充满了艰难。

## 伊利诺伊大学的决定

在《开源之史》系列之三：[开源的史前故事——高等院校和科研机构的代码开放与共享](posts/history-of-open-source/01-let-us-talk-os-in-high-school) ，我们知道了这所著名的大学，所开发的两个万维网的项目：web服务端NCSA Httpd[1] 和 浏览器Mosaic[2]，前者是后来大名鼎鼎的Apache Httpd 原型，后者则是改变万维网的利器Netscape Navigator 的创作团队的第一代浏览器。

话分两头，单说一方，本篇将阐述客户端浏览器的故事，下一篇将为大家讲述服务器端的许可演化。Mosaic 的技术实现，我们将会在「开源之史」系列的技术演变部分阐述，这里也暂且略过。

伊利诺伊大学NCSA 显然是拿着纳税人钱，搞国家基建类型的[3]，对于Mosaic这么先进的改变世界的应用显然并不在意，可能学生们开发出来，利用它来进行商业授权显然是他们的选择，风险创业或者支持学生们并没有发生，具体缘由，我们不得而知，作为后来者，我们只能按照事情所发生的情况来进行描述。

## Netscape 的崛起

Mosaic 的原始创作者 Marc Andreessen 在开发了三年之后，1994年出走硅谷，放弃了这个自己从零开始一手打造的项目，并且说服了Mosaic 的几位主要开发者：Robert McCool、Jon Mittelhauser、Aleks Totic 等[4]，Marc Andreessen 联合Jim Clark 成立了新的公司：**Mosaic Communications Corporation** ，并在一年后发布了全新的浏览器：*Mosaic Netscape 0.9*，在发布后的四个月内，就占据了浏览器市场的四分之三[5]。随后，由于商标的因素，该浏览器随后更名为 Netscape Navigator，公司取名为“Netscape”。

正在万维网风口上的Netscape，商业上在接下来的两三年是宛若坐上火箭般迅猛发展，1995 年 8 月 9 日，网景公司在公司成立仅 16 个月后进行了极其成功的IPO（首次公开募股）。当天网景市值达到29亿美元。

## 微软的捆绑策略

1995年6月，已经称霸PC桌面操作系统市场和办公套件市场的微软CEO Bill Gates 发表了《互联网浪潮》[6]，这也意味着微软公司在赢得了软件市场之后，要进军冉冉上升的互联网，显然，并没有满足电子邮件，而是盯上了万维网。

从新开发一个浏览器，显然并不是一家已经走上轨道的商业公司的最佳选择，果不其然，微软看上了在Netscape 成立不久之后，伊利诺伊大学将 Mosaic 商业授权交给了一家叫做 Spyglass 的公司[7]，微软在 1995 年以 200 万美元的价格获得了 Spyglass Mosaic 的许可，对其进行了修改，并将其重新命名为 Internet Explorer。在后来的审计纠纷之后，微软向 Spyglass 支付了 800 万美元。IE 7 之前的代码都是基于 Mosaic 的[2]。

尽管微软在浏览器的产品上落后Netscape 两年，而且也在人才上有差别，但是微软有两个得天独厚的优势：操作系统和雄厚的财力，Netscape 是独立的应用程序，需要在安装操作系统之后，再下载安装，也就是微软有分发的优势，而且还和AOL这样的ISP厂商联合[8]，让用户选择IE，事实证明，微软这样的手段是屡试不爽的，（在办公套件上），很快Netscape Navigator 就失去了阵地。网景在 1997 年底经历了第一个糟糕的季度，并在 1998 年 1 月经历了一轮大裁员。[4]

## 法律手段的无奈

Netscape 并没有束手就擒，而是采用了知识财产类竞争的常见做法，控告微软的不正当竞争，联合SUN、Oracle、IBM等公司成立了联盟，明确把微软的所作所为当成靶子。[8]

但是，这还不够，甚至美国司法部都出面了，1998年5月18日，美国司法部参与了由20个州政府发起的20世纪末涉及面最广的反托拉斯诉讼案。指控微软利用其在操作系统市场的垄断权控制了不断涌现的网络浏览器和其他互联网产品。这场官司打了两年，2000年6月，杰克逊法官判定微软违反了反托拉斯法案。微软不服，继续上诉美国最高法院，并于2001年6月28日宣判，维持原判，但不支持拆分，继续协商解决。  [8]

就在美国反抗的过程中，Netscape 已经撑不下去了，在1999年被AOL收购，黯然退场，其浏览器产品也退出了历史舞台。

## 开源，最后的倔强

就在1997年，Netscape 在商业上焦头烂额之时，后来被称之为开源圣经的“大教堂与集市”不久前发表了，在技术圈传播的沸沸扬扬，其中Netscape 的员工 Frank Hecker 就起草了供公司管理层的白皮书，其中直言称受到了Eric Raymond的启发[10]：

> 将Netscape 的源代码公布于世！

说到做到，很快就在公司内部达成了一致，并在1998年1月对世界宣布：将在本季度内开放源代码！在2月份，Netscape 邀请了自由软件圈内的重要人物，从Richard Stallman到Eric Raymond ，为他们建言献策，工程师们也紧锣密鼓的进行同步工作，只为兑现诺言。[9]

Netscape 的联合创始人Marc Andreessen 对于网络的理解至深，在创业之时，就对开放标准极为的重视，也一直践行到底：

> In a networked world, we're headed toward everything being interconnected,and in that world, anything that doesn't talk to everything else [gets killed]. [4]

即使这件事过去了20多年，我们仍然不能说是Netscape 商业上的失败，而开源了万维网客户端浏览器，以挽回服务器端的份额，进而拥抱W3C的标准。做这个决策一定经历了无数的思考、探讨和争论，作为历史的后来者，我们无法得知，我们只能承认最后的结果。

## 创建新许可

交待了前面那么多事情，终于到了我们这个章节的主题：全新许可的创建！ 这就呼应了「开源之史」作者的思路：知识财产权利下的软件许可，不是无缘无故产生的，而是被动抗争的结果。在1998年，可以选择的许可并不错，要么是宽松的BSD、MIT，要么是互惠性的GPL，更为完善的Apache 2.0 还没有被创建（下一节会论述），而Mozilla又面临全新的问题：

1. 包括不少于75个第三方模块
2. 与Java 语言的紧密集成
3. 有加密模块，法律上不允许公开

这是创建开源许可史上，第一次由商业公司律师主导开发的许可，并且在正式的开源许可之前，还做了一个过渡：Netscape Public License （NPL），这款许可的发布，有那么点纯粹是为了兑现3月份开源 Communicator 源代码的承诺，NPL 的一部分条款向Netscape 提供了特别的权力，让Netscape 在它的其他产品中使用这些受NPL约束的代码。又经历了一个月的讨论，经过修改的Mozilla Public License 发布了。

1998年3月31日，所有的代码都在NPL的许可下发布了，而且对代码的改进也是在NPL许可下发布的。新开发的代码将按照MPL许可发布。[10]

MPL的发布意味着商业公司希望和鼓励大家在自己的代码仓库上进行开发，显然是商业公司拥有更多的强权，尽管是有着类似GPL的互惠原则，但是更加强调商业公司本身的控制权。

这是专业的律师团队参与开发许可的第一次，当然不是最后一次，这意味着软件开源在工程上的胜利，逐渐被商业公司接受，商业公司开始了一定的妥协，从EULA的绝对控制进行了一定的妥协和让步。

## 参考材料

1. https://en.wikipedia.org/wiki/NCSA_HTTPd ,最后访问时间：2022-06-07
2. https://en.wikipedia.org/wiki/Mosaic_(web_browser) ,最后访问时间：2022-06-07
3. https://en.wikipedia.org/wiki/National_Center_for_Supercomputing_Applications ,最后访问时间：2022-06-07
4. 《Competing On Internet Time: Lessons From Netscape And Its Battle With Microsoft》，[Michael A. Cusumano](https://book.douban.com/search/Michael A. Cusumano) / [David B. Yoffie](https://book.douban.com/search/David B. Yoffie)，Free Press，12 January, 2000
5. https://en.wikipedia.org/wiki/Netscape ,最后访问时间：2022-06-07
6. 《互联网的商业化路径：创新与新型网络的诞生》，[Shane Greenstein](https://book.douban.com/search/Shane Greenstein)，[人民邮电出版社](https://book.douban.com/press/2609)， 2022-1-1
7. 《Rebel Code：Linux and the Open Source Revolution》，[Glyn Moody](https://book.douban.com/search/Glyn Moody)，Perseus Books Group，15 July, 2002
8. 《技术简史：从海盗船到黑色直升机》，[德伯拉·L·斯帕 (Debora L. Spar)](https://book.douban.com/search/德伯拉·L·斯帕)，[中信出版社](https://book.douban.com/press/2400)，2017-4-2
9. 《黑客的反击》，摘选自《大教堂与集市》，Eric·S·Raymond，机械工业出版社，2014-3
10. 《释放源代码——Mozilla的故事》，节选自《开源革命之声》，Chris Dibona 等，中国电力出版社，2000-1 

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
