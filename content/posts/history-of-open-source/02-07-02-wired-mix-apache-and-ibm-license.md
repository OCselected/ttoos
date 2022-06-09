---
categories:
- 开源
- 历史
date: 2022-06-05T12:21:02+08:00
description: "Apache 许可2.0 是目前开源世界中选择最多的许可，它有着非常多的平衡性，没有GPL的强势，也没有BSD/MIT的任性，承认现实世界的各方力量，从商标到专利，再到著作权，以优雅的方式赢得了众多开发者的信赖，有人说Apache许可超过了Apache基金会的功劳，或许有点夸张，但是有其不可替代的重要作用。接下来我们就回顾一下这份许可创建的路径。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之十一/四：开源作为商业策略——Apache 许可的改进与‘完善’"
url: ""
authors:
- 「开源之道」·适兕
---

## 感谢

Apache 软件基金会董事会成员[姜宁](https://twitter.com/willemjiang)老师提供线索!   **Apache mail-list is great!**

## NCSA Httpd 惹众怒

紧接上一节，伊利诺伊大学校方的授权举动，引起了项目参与者的不满，浏览器Mosaic 核心开发者出走创业，其中跟着Marc Andreessen 到Netscape 的就有 NCSA的核心开发者：Robert McCool[1]， 我们知道在万维网的架构中，浏览器和服务是成对出现，这两个在NCSA的那段时间，一直都被认为是彼此不分离的。

但是，随着原始团队的分崩离析，这个配对也不再那么重要，Robert McCool 在Netscape 开发了闭源的服务器套件：企业服务器，而NCSA Httpd 则在Robert McCool 离开之后，则基本上停滞不前。既然无法获得校方的支持，那么就有一些NCSA Httpd  网站管理员们认为该重新组织起来继续。

## Apache Group 的坚持

这些网站管理员中的一小部分通过私人电子邮件联系在一起，以协调他们的更改（以“补丁”的形式）。Brian Behlendorf 和 Cliff Skolnick 在加利福尼亚湾区的一台机器上为核心开发人员整理了一个邮件列表、共享信息空间和登录信息，带宽由 HotWired 捐赠。到 2 月底，八位核心贡献者组成了 Apache Group [2]，这个小组后来彻底的改变了世界。

Apache Group 在1995年初发布Apache Httpd 的时候，采用了 原始 4 条款 BSD 许可[3]，我们可以看到这份许可仅更改了组织的名称，并附加了一条禁止衍生作品使用 Apache 名称的条款。

我们在前面章节介绍过BSD许可，属于学术类，这也某种程度上说明了Apache Group 对于这款软件的执念——除了完成自己的功能之外，没有其它诉求，反正大家都有自己的网站工作。

Apache Httpd 在万维网迅猛发展保持了同步，很快就成了众多机构假设网站的选择[4]：

> Apache 在万维网的最初发展中发挥了关键作用，[11] 迅速超越 NCSA HTTPd 成为主要的 HTTP 服务器。

## IBM 的介入 与 公益基金会的成立

互联网的浪潮势不可挡，基于web的商业模式逐步成形，以电子商务为主的企业应用是主流，IBM 也要进入这个市场，而其中web服务器的选择，让这家巨头在自己开发的项目上备受挫折：只有区区不到2%，市场被三个项目瓜分：微软的IIS、Netscape的企业服务和Apache Httpd，[5] 于是 IBM 开始在内部寻找突破，如何以最快的时间获得市场份额，正如James Barry 坦诚所言： 

> “You look at Netscape, and actually IBM had a talk with them about acquisition, but that for a lot of reasons didn’t work out. Microsoft—a little bit expensive to buy. And so that left Apache.”

选择 Apache 是最后的选择，那么如何将Apache Httpd 纳入到自己的WebSphere套件之中而毫无违和感，才是商业奇才们的重大举措，于是，他们找到了Apache Group 的核心成员之一：Brian Behlendorf ，并合力完成了这次改变历史走向的决定[5]，并在1998年6 月 22 日宣布了这一举措[6]。要知道1998年的Httpd 市场占有率遥遥领先，从历史的过来者看，IBM 这个决定是明智的，提供企业级的服务，7X24 的支持力度，毫不费力就处于领先地位。

但是，Apache Group 只是一个由几个志愿者组成的小的职业共同体，还不是正式的在政府注册的机构，这对于IBM 来说显然是难以应对的，IBM 是有所担忧的，但是Apache Group 本身也在考虑可持续发展的未来，比如需要法律保护，基础设施等机器的开销也需要获得捐赠，[7]Apache 软件基金会就在IBM 正式宣布加入不久之后就成立了,时间是1999年3月[8]。有了非营利的背景，就可以做更多的事情，其中就包括和开发、商业模式极为相关的许可。

不过，在笔者叙述后来最终重要的许可Apache 许可2.0 发布之前，还需要交代一点背景知识，那就是IBM 法律团队的许可创建。

## 更均衡的许可——CPL 的创建

在售卖许可和服务的商业产品中加入自由/开源软件，对于法律团队显然是一个挑战，这是一个全新的领域，要做到滴水不漏，才显得专业，WebSphere 团队需要将WebSphere Httpd ——即 Apache Httpd 的改进——需要不同的承诺，于是开发了一个许可：**IBM Public License** ，像所有律师修改法律条文一样 ，IBM 律师并不是从头起草一个许可，而是基于现有的开源许可协议，比如GPL 来进行改进，例如 IPL 与 GNU 通用公共许可证 (GPL) 的不同之处在于，它将责任置于许可软件代码的发布者或分发者身上。这背后的原因是为了促进开源软件的商业使用，而不会让贡献者承担责任。[9]

在发布 IPL 不久之后，IBM 在 2001 年 5 月又发布了被律师广受赞誉的：Common Public License [10]，相比于Mozllia 许可，CPL 更为完善，准备的也更为充分，并清晰的定义了开源开发当中的名词，特别在专利上有了清晰的界定。 CPL 是专业的律师引领开发的许可，也是从商业角度想的很周全的。

在软件许可的频谱之间[11]，有太多事项可以进行许可和授权，制定开源许可也不是一件特别困难的事情，光是获得OSI的认证，也出现了井喷式的发展，这充分说明了，对于软件的财产权，是有着无数的分歧的，究竟该如何收费？怎么才能够找到相对平衡的点，是所有人都在追求的目标。这个时候吵的是最厉害的，似乎每个人都对别人的项目都可以评头论足，放在自己身上之后，则完全是不同的考量。更多的律师参与，以及更充分的讨论才是解决思路。

## Apache 2.0 ，让世界安静下来

随着Apache Group 成为更为‘正式’的非营利慈善组织，Apache 许可1.1 已经不能满足，这是一份从BSD借鉴过来的，并没有经过时间推敲的许可，随着Apache之道[12]—— 也露出真容，是该进行一次大的整改了，于是发起了一次面向全世界的意见征求[13]，旨在满足：

* 让许可更加的普适，非Apache软件基金会项目亦可使用
* 提高与基于 GPL 的软件的兼容性，
* 允许通过引用包含许可证，而不是在每个文件中列出
* 明确亲力亲为的许可
* 在专利方面的明确

经过了大半年的讨论，获得了各界的反馈，有公司法务如IBM、HP等，也有自由软件基金会法律教授Eben Moglen的建议，最终在2004年一月敲定，也就是至今仍然没有任何改动的许可，也是目前开源项目中采用占比最多的许可。笔者认为，Apache 许可 2.0 所找到的平衡点，就是在采用许可项目本身品牌的保护，因为对于衍生版本，已经是非常宽松的了，甚至为此放弃和GPL的兼容性。笔者忍不住要将这个条款摘抄在这里：

> 6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

 ASF 另外的一个创举，就是需要参与ASF项目的亲力亲为者（contributor）签署许可协议，即CLA，这是一种法律上的成熟！也是开源融入世界的重要标志。

自此，开源世界之外的诟病的声音开始消弱，开源项目的创作者也不用过分纠结学术还是互惠，而是频谱中有了更多的选择，优雅但不失威严。站在2022年，开源占据软件主流的当下，回顾2004年的这个许可的发布，不得不感慨，就在开源的世界内部的分歧：自由还是技术之际，商业的力量以惊人的力量潜入，这一举动改变了很多，之后商业公司的项目，基本上默认都会选择Apache许可2.0，除非有其它特殊的原因，或者再创建一个。


## 参考资料

1. https://web.archive.org/web/20090416132804/http://hoohoo.ncsa.uiuc.edu/docs/acknowledgement.html ，最后访问时间：2022-06-08
2. https://httpd.apache.org/ABOUT_APACHE.html ，最后访问时间：2022-06-08
3. https://github.com/apache/httpd/blob/1.3/apache_1_0_1/LICENSE ，最后访问时间：2022-06-08
4. https://en.wikipedia.org/wiki/Apache_HTTP_Server，最后访问时间：2022-06-08
5. 《Rebel Code：Linux and the Open Source Revolution》，[Glyn Moody](https://book.douban.com/search/Glyn Moody)，Perseus Books Group，15 July, 2002
6. https://httpd.apache.org/press/22Jun98.html ,最后访问时间：2022-06-09
7. [Apache 基金会创始成员访谈录 ———— 回顾 Apache 20年历程！](posts/foundation_introduce/asf-founders-look-back-on-20-years/) 
8. https://en.wikipedia.org/wiki/The_Apache_Software_Foundation#History ,最后访问时间：2022-06-09
9. https://en.wikipedia.org/wiki/IBM_Public_License ,最后访问时间：2022-06-09
10. 《Open Source Licensing：Software Freedom and Intellectual Property Law》，Lawrence Rosen，Prentice Hall PTR，2004-07-22
11. 《开源之迷》，适兕，人民邮电出版社，2022-02
12. [Apache 之道，开源可持续成功的秘籍](/posts/foundation_introduce/the_apache_way_to_sustainable_os/) 
13. https://lists.apache.org/list.html?license@apache.org  ，最后访问时间：2022-06-08


## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
