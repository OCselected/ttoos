---
categories:
- 开源
- 历史
date: 2022-07-19T14:58:42+08:00
description: "理解自下而上，没有比Apache 软件基金会更好的例子了，从治理的角度讲，这是一个优绩制堪称完美的演化，从8+3的小组，发展为如今几千人的开发者团队，掌控着互联网半壁江山的运行，而所遵守的Apache之道也不过寥寥数语，为道日损也不过如此。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之八/九：Apache 软件基金会的诞生与崛起"
url: ""
authors:
- 「开源之道」·适兕
---

## Apache HTTPD 史前故事

关于Apache 的故事，本书在[「开源之史」系列之十一/四：开源作为商业策略——Apache 许可的改进与‘完善’](./posts/history-of-open-source/02-07-02-wired-mix-apache-and-ibm-license/)有过一点短暂的介绍。但是仍然要从开头讲起。

在科学家 Tim Berners-Lee 实现了万维网的架构之后，也在其 NeXT Computer 撰写了第一个web 服务的实现：CERN httpd [1]，紧随其后，也有其它学术机构实现了web服务，其中最为强劲的莫过于来自伊利诺伊大学厄巴纳-香槟分校所实现的 NCSA HTTPD，在1993年发布了可用的第一版，其中核心开发者均是来自NCSA的学生和教授。

1994年，对于万维网是重要的一年，Marc Andreessen 出走硅谷，万维网商业化道路开始，而伊利诺伊大学的授权机制让NCSA的成果出现了分叉，不仅是 Mosaic 浏览器[2]，还有web 服务，Marc Andreessen 几乎挖走了所有的核心开发者，其中httpd的核心开发者Robert McCool 就是其中之一，Robert McCool  离开学校到硅谷为 Netscape 开发服务器，而 NCSA 的仓库则处于了停滞状态[3]。

此刻 NCSA 的版本是1.3。

## Apache HTTPD 的诞生

万维网的发展是惊人的[4]，对于web服务的需求是惊人的，一些大学和机构的管理员们由于NCSA的停滞，开始了“挠自己的痒”，时间稍长，手上积攒了不少各自的扩展和错误修复，都希望分享出来，于是，这些网站管理员中的一小部分通过私人电子邮件联系在一起，以协调他们的更改（以“补丁”的形式）。随着人数的增加，私人邮件的往来无法满足需求，于是其中两位：Brian Behlendorf 和 Cliff Skolnick 在加利福尼亚湾区的一台机器上为核心开发人员整理了一个邮件列表、共享信息空间和登录信息，带宽由 HotWired 捐赠。[5]

1995年2月，加州大学尔湾分校的web服务维护者 Roy T. Fielding，发送了第一封Apache Group 的Httpd 开发邮件，基于NCSA HTTPD 1.3，两个月后，发布了 Apache web 服务的第一个正式公开版本（0.6.2），这两个月还在处理诸如域名、许可等事情，我们现在看到邮件列表的讨论，完全是移植和集成的过程，但是并没有太多的冲突，仿佛一切都很顺畅。

## Apache Group 

邮件列表的建立，意味着一小组围绕着开发开源的web服务而建立了起来，所有的亲力亲为的人即是这个小组的成员，那么发起者：

* Brian Behlendorf
* Roy T. Fielding
* Rob Hartill
* David Robinson
* Cliff Skolnick
* Randy Terbush
* Robert S. Thau
* Andrew Wilson

以及稍后加入的亲力亲为者：
* Eric Hagberg
* Frank Peters
* Nicolas Pioch

有了第一个可用的版本之后，这个小组越发的发展迅猛，在接下来的半年多的时间，不仅重新设计了架构（意味着和NCSA HTTPD的彻底分道扬镳），并新增了更多的功能，以及模块，邮件列表的活跃度是相当的高，到1995年底，发布了1.0版本。在这近一年中，我们中邮件列表的信息得知[6]：

* 开始有了第一个用户
* 有了apache.org 域名
* 选择和定义了软件许可
* 支持更多的操作系统
* CGI、virtual host等更多功能
* 发布版本的代号与习惯
* 参与的开发者、维护者越来越多
  
一个开发者的邮件列表已经无法满足，开始分离出用户、测试、以及发布等子列表，这也就意味着Apache 小组在不断的增长，随着项目的成熟，使用者的增多（其实在成立不到一年后就超越了NCSA Httpd），而万维网的市场也渐趋成熟，对于web服务来说是刚需，不仅微软、网景等公司希望获得更多份额，其它老牌厂家也对web市场发展的电子商务、信息系统等产生了极大的兴趣。

## IBM 的介入

市场的变化，总是充满了变数，当微软进军万维网后，该变了格局，让Netscape作出了惊天的决定：开源浏览器项目，希望在服务器保持自己的竞争优势，然而，web服务器当时的市场角逐者：微软有IIS，以及开源的Apache httpd服务，当IBM要进入这个市场的时候，选中了一位，那就是已经从微软离职的James Barry. James Barry 在通过微软收购其创业公司ResNova而加入的， 而ResNova团队则是微软的web服务产品：Windows NT Internet Information Server (IIS) 的主要开发团队。再离开微软之后，James Barry 进行了短暂的调整，加入了IBM。[7]

IBM 要进入应用服务市场，而应用服务需要web服务，当时IBM也自行开发了web服务：Internet Connection Server（ICS），但是仅占所有市场2%不到，James Barry 和团队分析了情况，尤其是Yen-Ping Shan， 最佳方式是拥抱Apache项目，各种利弊分析，获得了IBM的一些高层支持之后，尤其是销售团队的Steve Mill，然后二人就去找Apache 小组的创始人之一：Brian Behlendorf，1998年3月20日，他们三位相见了。都是技术背景的，相谈甚欢，大多是聊Apache 的架构设计、功能支持等，最后IBM做了一个决定：将旗舰级产品WebSphere内置Apache web服务，而商业模式就是：可以获得IBM 7X24小时的支持。在1998年6 月 22 日宣布了这一举措[8]

但是这故事并没有那么的简单，商业产品内置开源项目，IBM 如何确保Apache 的持续发展？IBM 又该如何平衡商业产品的功能和Apache小组的平衡？决定多少人参与到Apache项目，毕竟版本的细节了解还是必须的。

商业的世界，需要法律的支撑，此时的IBM可以信心十足的参与到Apache 项目，得益于此前一个项目的开源，那就是Java的编译器Jikes[9]，该项目的许可叫做IBM Public License，这一切的背后都是一位科学家来推动的，他就是David Shields， 这位在1987年就加入IBM研究部门。在将Jikes开源的过程中，David Shields推动了IBM的律师完成了IBM 公共许可，当然作为起步的许可并没有被普遍推广，IBM稍后提出了更为完善的Common Public License。

## 成立基金会

基于邮件列表讨论和版本控制系统CVS，Apache Httpd 已经建立了一些议事的规则，也就是说Apache之道慢慢的在开发的过程中，核心开发者们所达成的共识，只是直到20年后才会被人总结出来。作为一个共同体 ，Apache 小组似乎已经完全可以自给自足了，赞助也不缺，核心人员都有自己的本职工作，而且日常事务，甚至是代码合并也并不需要一个全职的人来做。但是依然有个大问题，那就是如何得到主流社会的承认和信任。

IBM 加入 Apache 之后，从各方面来说都需要更为“正式”的组织来平衡各方的利益，用他们核心的话就是：“目前为止，还没有Apache这个组织的存在”。[10]虽然所有代码都被描述为由“Apache Group”拥有，但除了构成核心开发人员的个人群体之外，这在法律上是不存在的。迫切需要创建一个真实的实体来持有 Apache 源代码的版权。该实体还可以持有 Apache 商标，确保执行 Apache 许可证，并为 Apache 贡献者和开发人员提供法律保障。换句话说，Apache的壮大，需要法律和社会的保护，不再是某个人或某几个人的事情了。

另外，我们从最初的成员采访中得知，各家商业公司也需要一个合法的实体（政府注册的机构）来确保自身的利益。[11]于是，在ApacheCon 第一次聚会没有过多久，以Roy T. Fielding 为代表，注册为一个慈善组织机构，从此以后可以享受免税优惠，也可以得到政府的保护。[12]

## 孵化：复制 Apache HTTPD的成功

成立了基金会，对于项目并没有任何的影响，除了版权有了实体保护之外，但是Apache Httpd 的成功，吸引了相当人的瞩目，并和Linux、Python、MySQL等项目联合，形成了web1.0时代的主流技术栈，当然，编程语言Java的一些库，随着各种业务等崛起，仅仅放在sourceforge上显然并不是开源的最佳实践，Apache httpd 本身的模块话也衍生出了独立的项目如Mod_perl、tcl等[17]。

随着需求的日渐高呼，Apache 董事会成员在2002年通过了一项决议，[13]成立专门孵化的项目：Apache Incubator ，随后11月就入驻了第一个构建项目ant，之后发展非常迅速，以java类库和web service为主的Jakarta[14]项目明显增多。2008年之后，大数据项目Hadoop正式入驻，一发不可收拾。

Apache 孵化项目具备完整的议程，从工程到法律相关，当然，最终一个项目是否成为正式的顶级项目，我们可以称之为“Apachelizaiotn”，即Apache化，以Apache之道的方式发展项目[15]。

## 崛起：品牌胜过分叉

开源项目的分叉，或者叫分裂问题，是项目原创者最为头痛的事情，尤其是在平衡商业化，在Apache之前，出了GNU的项目之外，BSD、MIT等学术型许可的项目都有被商业公司分裂后，甚至完全被商业公司掌控，Apache需要吸取教训，不仅开发了Apache 2.0 许可，还利用基金会的法律实体将所有的项目都置于保护之下。

这使得即使是像IBM这样的商业巨头，也要保持Upstream first 才是双赢的局面[16]，不仅让IBM 能够心甘情愿的投入人力，也能保障商业的成功。而不会出现像kerberos、BSD Unix 那样被大公司夹持的结局。

## 参考资料

1. https://en.wikipedia.org/wiki/CERN_httpd ，最后访问时间：2022-04-19
2. https://en.wikipedia.org/wiki/Mosaic_(web_browser) ，最后访问时间：2022-04-19
3. https://en.wikipedia.org/wiki/NCSA_HTTPd ，最后访问时间：2022-04-19
4. 《编织万维网》，［英］蒂姆・伯纳斯―李 /马克·菲谢蒂，上海译文出版社，1999-12
5. https://httpd.apache.org/ABOUT_APACHE.html ，最后访问时间：2022-04-19
6. three part patch for other enhancements， https://lists.apache.org/list?dev@httpd.apache.org:1995-2 ，最后访问时间：2022-04-19
7. 《Rebel Code：Linux and the Open Source Revolution》(p. 206). Moody, Glyn.  Basic Books. 15 July, 2002
8.  IBM joins the Apache Project， https://httpd.apache.org/press/22Jun98.html ,最后访问时间：2022-06-09
9.  https://en.wikipedia.org/wiki/Jikes ，最后访问时间：2022-04-19
10. apacheweek issue 121,  http://www.apacheweek.com/issues/98-07-10#coremeeting ，最后访问时间：2022-04-19
11. Apache 基金会创始成员访谈录 ———— 回顾 Apache 20年历程！ https://opensourceway.community/posts/foundation_introduce/asf-founders-look-back-on-20-years/，最后访问时间：2022-04-19
12. CERTIFICATE OF INCORPORATION OF THE APACHE SOFTWARE FOUNDATION, https://www.apache.org/foundation/records/certificate.html ，最后访问时间：2022-04-19
13. ASF 董事会例会 16 October 2002 ，https://www.apache.org/foundation/records/minutes/2002/board_minutes_2002_10_16.txt ，最后访问时间：2022-04-19
14. https://jakarta.apache.org/ ，最后访问时间：2022-04-19
15. https://incubator.apache.org/ ，最后访问时间：2022-04-19
16. 《Understanding Open Source and Free Software Licensing》，Andrew M. St. Laurent，O’Reilly Media, Inc.，2004-08
17. Welcome to the Apache Projects Directory，https://projects.apache.org/ ，最后访问时间：2022-04-19


## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
