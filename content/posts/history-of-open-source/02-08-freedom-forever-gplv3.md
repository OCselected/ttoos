---
categories:
- 开源
- 历史
date: 2022-06-07T08:22:10+08:00
description: "技术从来就没有停止过发展，由技术形成的市场也在不断的扩展，GPLv2许可在一些新的领域无法做到软件自由，比如智能终端、更多许可的兼容性等等，已经是乏力，这意味着无法促进项目和共同体的发展了，那么就需要求变，变化就意味着有人追随有人反对，这会带来分裂，那么是否能吸引到新生力量了呢？这也意味着一种创新的冒险。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之十二/四：GPLv3 —— 软件自由的分裂还是捍卫？"
url: ""
authors:
- 「开源之道」·适兕
---

2005年，以GPLv2 发布的自由/开源软件项目是占据绝对的上风[1]，但是世界并没有按照当初的人们一劳永逸的没有任何发展，技术的更新迭代，以著作权为代表的知识财产法总是会晚一步，GPLv2亦不可避免。Richard Stallman、Eben Moglen 等自由软件的倡导者们，开始迎接新的一轮挑战！

### 重温 GPLv2 的保障

在一次采访中，Richahd Stallman 如此形容说[2]：

>  1989年，制定GPL 第一个版本的时候，我们是有非常大明确对象的，就是防止中间商限制了最终用户的自由：添加限制性许可条款，或隐藏源代码。而稍后在1991年改进发布的GPLv2，主要是保护自由软件作者和使用者免受专利的困扰。

在过去的十几年中，GPL 做到了，除此之外，GPL 还成为了自由和开源世界的团结保障，天才般的 Copyleft 保证作者的权益，也赢得了很大一部分开发者的认可和信任，包括Linux kernel、GNU工程[3]等等可以占据市场一角的优秀项目。GPL 的法律因素保证所有参与方的利益，这就是自由/开源项目，尤其是大型项目，Kernel 能迅速成功的原因之一[4]：

> GPL 提供的 copyleft 对基于 Linux 的系统的成功至关重要，GPL 能够为内核做出贡献的程序员保证他们的工作将造福整个世界并保持自由，而不是被不需要向社区回馈任何东西的软件公司所利用。

## 技术的发展

互联网的迅猛发展，在.com 泡沫[5]过去之后，普及了最后一公里，这也给万维网的服务器和客户端带来了新的变化，web2.0、搜索引擎、大数据开始发展，终端的芯片价格在降低，能实现的功能越来越多，软件的交付和分发在发生着天翻地覆的变化。

在2005年的时候，软件的分发和1992年已是大不同，人们不再采用邮寄或购买软盘、光盘的方式，而是提供网络下载；随着移动终端设备的演进，内置程序的升级和维护也可以通过互联网完成，这意味着从技术本身的分发上，GPLv2 已经在基于互联网提供的服务上失去了当年所防止的做法。

## 专利的威胁

Richard Stallman 坦承GPL最大的威胁来自于软件专利[6]，但是，有的时候并不是直接的进攻，而是对参与开源项目的亲力亲为方，甚至是最终的消费者，史上著名的SCO诉IBM案就是这样的情形，SCO 并没有去控告GNU或Linux等项目背后的组织，而是转而控告参与Linux开发的法律实体：具有影响力的巨头IBM，[7] 虽然最后SCO 输掉了官司，但是这样的事情很明显会让商业公司提起警觉，认为参与开源的举动实在是风险太高，使得开源世界的人不得不重新审视GPLv2中关于专利的问题。

IBM和RedHat 等公司的做法，是采用了更加折衷的办法，成立一个中立的管理专利池的联盟组织（关于OIN的故事，笔者会在另外一节专门阐述），而自由软件共同体的同仁们则是采取对抗的方式来——改进GPLv2。

## 数字千年版权法 与 Tivoization

我们在前面的几个章节已经了解到，商业公司无论是利用加密技术，还是立法，都在不遗余力的试图保护自己的知识财产，软件虽然和硬件分离销售了，但是技术上可以通过签名技术实现绑定，数字千年版权法就是这样的一条立法，数字千年版权法案 (DMCA) 是 1998 年的美国版权法，实施了世界知识产权组织 (WIPO) 的两项 1996 年条约。它将旨在规避控制访问受版权保护作品的措施（通常称为数字版权管理或 DRM）的技术、设备或服务的生产和传播定为犯罪。它还将规避访问控制的行为定为刑事犯罪，无论是否实际侵犯版权本身。此外，DMCA 加大了对互联网版权侵权的处罚力度。

一家叫做TiVo 的公司， 将 Linux 用于其数字视频录像机产品。根据 GPLv2 的要求，TiVo 公开了修改后的源代码，但是人们无法进一步修改 TiVo 源代码并使其在 TiVo 硬件上运行的事实，因为数字签名阻碍了用户自由部署系统。这个现象被人们称之为：Tivoization[8] (Richard Stallman 创造的术语)，指代这种硬件限制代码修改和分发的做法，这其实并没有违背GPLv2的条款，但是这明显不符合自由软件的精神——保证用户使用、修改和分发软件的自由。

Tivoization 是遵守DRM，但是却采用了GPLv2的系统，DRM 并不受自由共同体的欢迎，是强烈反对的。这样的结果就是水火不容。

## 软件自由的保障亦需要更新

基于这些情况，自由软件基金会（FSF）和软件自由法律中心（SFLC）的相关成员们，认为是时候更新下一代许可了，Richard Stallman 和 Eben Moglen 联合发布一封公告，旨在阐明为什么GPL需要更新，从全球视角、行为准则、共同体章程等角度出发，期望通过修订GPL以满足更多的诉求[9]。

于是在2006年1月向全世界发起一份征求意见的草稿。主要的希望解决的问题有以下几点：

* 软件专利的威胁
* 自由软件许可的兼容性
* “源代码”的定义
*  硬件对代码修改的限制

这次修改的参与方，就像我们看到IBM 制定CPL一样，有了专业的律师参与。即使这样，也仍然困难重重。

## GPLv3 创建过程

作为自由软件运动的共识，GPL的修订无疑于动了很多人长久以来所遵循的规范，GPLv3 的制定过程也是一项很了不起的工程，通过 gplv3.fsf.org 门户网站，使用专门编写的名为 stet [10] 的软件从公众那里收集评论。收到了大量的反馈，光是草案就发布了四次，[11]花了一年半多的时间才最终定下来，在2007年6月29日正式发布。

这次修订过程，我们看到不同利益方的争夺，也看到了最后的妥协，事实上，有几项内容被完全否决了，比如AGPL 最终和 GPLv3 并行发布，而不是合成一个许可；专利部分取消了有争议的 Microsoft-Novell 专利协议；反tivoization 条款限制为“用户”和“消费品”的法律定义等等。

但是，GPLv3 的修订像很多事情一样，不能令所有人满意。

## 后果与影响

果不其然，GPLv3 的发布，引起了巨大的争议，甚至如Linux Kernel 的开发者的反对，说GPLv3是在分裂开源世界[12]，Linux kenrel 对于涉及 DRM/Tivoization、专利和“附加限制”的 GPLv3 部分，认为是开源世界的孤立化（Balkanisation）;还有一群记者大作文章，批评说随着 GPLv3 的引入，开源和自由软件共同体之间的分歧比以往任何时候都更大。结果就是Linux Kernel为代表的一批开源项目并没有采用升级GPLv3，GPLv2就是满足现状的最佳许可。

当然，有反对的就有支持的，Lawrence Rosen ，即是律师也是开发者的他，写过一本特别棒的书：《 Open Source Licensing: Software Freedom and Intellectual Property Law》[13]，还撰写了两个被OSI批准的开源许可： Academic Free 许可 和 the Open Software 许可，就对GPLv3表示非常的赞同，尤其是认为解决了和Apache许可的兼容性问题：

> "我预测 GPLv3 最大的成功案例之一将是实现整个自由和开源软件领域可以因此组合成面向全球客户的全面开源解决方案。”

另外支持GPLv3 的重要人物，还有Alan Cox，知名的Linux kernel开发者。

即使如此争议、分裂不断的自由与开源阵营， 还是有技术领域没有覆盖到，GPLv3 仍然忽略了一个重要的阵地：渐渐崛起的网络服务，即云计算 —— 一切皆服务的模式，我们在下一节详述这个领域。

## 参考材料

1.  https://web.archive.org/web/20160719043600/https://www.blackducksoftware.com/top-open-source-licenses ，最后访问时间：2022-06-17
2.  Interview with Richard M. Stallman，https://web.archive.org/web/20171120024741/http://freesoftwaremagazine.com/articles/interview_with_richard_stallman/ ，最后访问时间：2022-06-17
3.  "Freecode's statistics page" , https://web.archive.org/web/20080828100318/http://www.freecode.com/stats/ ，最后访问时间：2022-06-17
4.  why the GPL rocketed Linux to success， https://web.archive.org/web/20130516005712/http://www.dwheeler.com/blog/2006/09/01/#gpl-bsd ，最后访问时间：2022-06-17
5.  https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91%E6%B3%A1%E6%B2%AB ，最后访问时间：2022-06-17
6.  The Danger of Software Patents (2001) ，https://www.gnu.org/philosophy/stallman-mec-india.en.html#top  ，最后访问时间：2022-06-17
7.  https://en.wikipedia.org/wiki/SCO_v._IBM  ，最后访问时间：2022-06-17
8.  An Introduction to Tivoization，http://www.linfo.org/tivoization.html  ，最后访问时间：2022-06-17
9.  GPL Version 3: Background to Adoption，http://www.groklaw.net/article.php?story=20050610031442331 ，最后访问时间：2022-06-17
10. Stet 解释， https://en.wikipedia.org/wiki/Stet_(software) ，最后访问时间：2022-06-17
11. A History of the GPLv3 Revision Process，Dr Eben Moglen, JD. 2013
12. Kernel developers' position on GPLv3 ， https://lwn.net/Articles/200422/ ，最后访问时间：2022-06-14
13. http://www.rosenlaw.com/rosen.htm ,最后访问时间：2022-06-17


## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
