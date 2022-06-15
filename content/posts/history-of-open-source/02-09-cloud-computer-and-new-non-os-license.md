---
categories:
- 开源
- 历史
date: 2022-06-07T08:22:38+08:00
description: "法官如何思考？这是著名的法学家和大法官波斯纳写的一本书，面对此起彼伏的开源许可，背后是市场的繁荣和利益的争夺，从更大的视角看是法律经济秩序的正常局面，因为软件的作者有权利处理自己的作品，不过是要兼容更多的社会因素：法律、政治、利益分配等，开源许可该往何处走？历史告诉我们尚无定论。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之十三/四：如何限制基于网络服务的闭源？从AGPL到SSPL，开源许可正在失控？"
url: ""
authors:
- 「开源之道」·适兕
---

> 道高一尺，魔高一丈。
>  《初刻拍案惊奇》卷三六

## 通过网络提供服务——GPL 的loophole

伴随着互联网、万维网的技术迅猛发展，软件提供商可以不需要分发软件即可为用户提供服务，通过标准的浏览器即可完成诸如电子购物、交友等服务，这也就意味着这些软件服务提供商可以利用GPL条款中没有覆盖到的内容而堂而皇之的违反GPL条款，还不被抓住任何证据，更何况在 GPL 的FAQ中，我们也可以看到关于：“GPL 是否要求将修改版本的源代码公开？”时的回答[1]

> GPL不要求你发布你的修改版或者任何一部分修改版。你有自由修改并自用，而不必发布。这个规则也适用于机构（包括公司）；机构可以做出修改版并在内部使用而不向其他外部组织发布。

这也就是意味着，在提供网络服务的技术栈里，可以肆无忌惮的搭便车，在2000年的一次会议上，Linux 发行版 MandrakeSoft 的 CEO Henri Poole[2]在阿姆斯特丹的会议上遇到了 Richard Stallman，并就上面的GPLv2关于提供网络服务不能阻止搭便车者的loophole而进行了探讨，2001 年，Poole 创立了 Affero Inc.（一家 Web 服务企业），他迫切地需要一个许可，能够满足类似GPLv2 在传统软件分发过程的保证软件一直自由，但是现实中没有一款开源或自由软件许可能够做到。

## AGPL的诞生：网络服务亦须开源

Henri Poole 在Stallman的劝说下加入了自由软件基金会，这样就有更多的机会和自由软件阵营的人进行沟通，尤其是法律人士，尤其是旗帜人物Eben Moglen 和 Bradley M. Kuhn，他们一直都在探讨 GPLv2 “应用服务提供商 (ASP) 问题”，有一天早上，Kuhn 在和Moglen 通电话的时候，突然想起了计算机著名的Stet[3]，即自我复制的Quine [4]，这就为解决这个问题找到新的思路。于是赶紧和 Poole 说了他们的意见，几周之后的2002年3月份，在自由软件基金会发布了称之为第一个 copyleft 的web service 的许可：Affero 通用许可证[5]，即 AGPL：

> AGPL 将 GNU 通用公共许可证 (GNU GPL) V2 与一项附加条款相结合，以解决公众通过网络使用的软件。新规定通过提供下载源的机制和限制删除机制，使作者能够确保用户有权使用、学习、复制、修改和重新分发该软件。

AGPL 在 GPL 中增加了一个新条款——第 2(d) 节。该条款规定，如果该软件旨在托管在网络上，需提供下载源码的方式。果不其然，发布之后引起轩然大波，一方认为这是自由软件的伟大的进步，找到了新的方法让自由软件仍然能够在新的技术框架下有效[6]，有的就做出了完全不同的反应，以在开源世界有着良好声誉的搜索巨头Google 就直接贴出来敬告员工禁止引入 AGPL 许可下的软件项目。[7]

稍后GPLv3发布，并没有包含网络服务方面的内容，而是将AGPLv1更为为GNU AGPLv3，并在2008年2月获得 OSI的批准[8] ，在2013年的时候，有人总结这是一款成功的许可[9]:

> AGPLv3 取得了巨大的成功，特别是那些初创的开源项目和共同体，简直是完美的开源和商业的结合，MongoDB、RethinkDB、OpenERP、SugarCRM 以及 WURFL 现在都使用 AGPLv3 作为双重商业许可的工具。

## AGPL 的限制仍然不够

随着云计算在技术上的成熟和市场的接受度，IaaS 提供商也在提供基于开源项目的商业服务，事件起因于 MongoDB，绝大多数的IaaS都提供基于 MongoDB 的商业服务：AWS、IBM Cloud、ScaleGrid等[10]，MongoDB 认为自己拥有这个项目100%的版权，认为这些厂家仅仅供源代码下载是不够的，应该来提供托管服务的代码一同发布，并发布了新的许可：服务器端公共许可证（SSPL）[11]，并找到了著名的律师 Heather Meeker 将之提交给 OSI 审批，SSPL 是基于 GNU AGPLv3 的许可，增加了一条：

> 13.Offering the Program as a Service.
> 如果您将本程序的功能或修改版本作为服务提供给第三方，您必须根据本许可的条款通过网络下载免费向所有人提供服务源代码。

OSI 经过了数月的争论，并没有接受这款许可，也没有明确而清晰的反驳。MongoDB 则遭到了一些抵御，RedHat 、Fedora 、Debian等Linux发行版率先声明放弃MongoDB，紧接着，云计算巨头 AWS 则fork了这个项目，发布了兼容版本的 DocumentDB[12]。一场针锋相对的竞争开始了，但是，这还不是最后的谢幕。

## 抢夺利益：针对巨头的许可

MongoDB 并非个案，和它一样的ISV，如Redis、Confluent、CockroachDB、以及Elastic都遇到开源项目，在商业化遭遇了云巨头的竞争，他们的抱怨冲天，一致认为 Apache 许可2.0 对于在云计算场景下，保护上游原创方太弱了，自己干活，为他人赚钱，这些厂商都发布了自己认为的许可，但是没有像MongoDB一样，去试图获得OSI的认可，而是直接进行了直接的针对性，例如 Elastic 许可2.0（ELv2），直接增加了：

> 您不得将软件作为托管或托管服务提供给第三方，该服务为用户提供对软件任何实质性特性或功能的访问权限。

> 您不得移动、更改、禁用或规避软件中的许可密钥功能，也不得删除或隐藏软件中受许可密钥保护的任何功能。

是的，这是非常具有针对性的许可，其它和Apache 许可等学术没有任何的差别，这是具有很大争议的，而被针对的一方，AWS 则又选择了fork 的方式来应对这一局面。即使没有OSI出面，我们也知道这些条款违反了开放源代码定义的中立原则，当然也被开源世界所拒绝。[14]

## OSI 认证的意义

当1998年，Eric Raymond 申请“Open Source”的商标未果转而以认证标识许可的“开放源码促进会（OSI）“的建立[15]，简直是有先见之明，神来之笔形容一点也不为过。那么一个软件项目，符合何种特征就可以称之为“开源”，即需要满足OSI 提出的十条原则[16]。

20多年过去了，这个组织成绩斐然，获得了一致的名声和口碑，并维护着认证这个重要的功能。但是随着技术的发展，和市场的需求，也开始有了质疑的声音，以公平、伦理为武器的不断的轰击着，在不同文化和地域下的国家，甚至要提出另外独立建立一个组织，来取代OSI的功能。

## 还和自由有关系吗？

这是一个思考题，笔者并没有答案，为了自由会牺牲很多，甚至要做出平衡和取舍，在今天复杂的数字技术面前，软件自由显然无法保证和覆盖所有面：数据、算法都表现出更为强有力的发展，OSI 的十大原则，在商业利益冲突和垄断集团之间是无力的，虽然它相对于自由软件已经做出了妥协，并让软件技术的开发野蛮生长，开辟了繁荣的场景，但是，有些地方已经无法保护项目的成长。要不要修改？我们所看到的本质是真实的本质吗？

## 参考资料

1.  https://www.gnu.org/licenses/gpl-faq.html#GPLRequireSourcePostedPublic ，最后访问时间：2022-06-14
2.  https://en.wikipedia.org/wiki/Henry_Poole_(technologist) ，最后访问时间：2022-06-15
3.  https://web.archive.org/web/20080315231323/http://www.softwarefreedom.org/technology/blog/2007/nov/21/stet-and-agplv3/ ，最后访问时间：2022-06-15
4.  https://en.wikipedia.org/wiki/Quine_(computing) ，最后访问时间：2022-06-15
5.  https://www.gnu.org/press/2002-03-19-Affero.html ，最后访问时间：2022-06-15
6.  https://web.archive.org/web/20050903133132/http://www.devchannel.org/webserviceschannel/02/05/21/2245226.shtml?tid=52 ，最后访问时间：2022-06-15
7.  https://opensource.google/documentation/reference/using/agpl-policy ，最后访问时间：2022-06-15
8.  https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License ，最后访问时间：2022-06-15
9.  https://web.archive.org/web/20130727124604/http://lucumr.pocoo.org/2013/7/23/licensing ，最后访问时间：2022-06-15
10. https://www.zdnet.com/article/mongodb-open-source-server-side-public-license-rejected/ ，最后访问时间：2022-06-15
11. https://www.mongodb.com/press/mongodb-issues-new-server-side-public-license-for-mongodb-community-server ，最后访问时间：2022-06-15
12. https://aws.amazon.com/cn/blogs/aws/new-amazon-documentdb-with-mongodb-compatibility-fast-scalable-and-highly-available/ ，最后访问时间：2022-06-15
13. https://www.coss.community/cossc/elastic-license-2-0-and-the-evolution-of-open-source-licensing-3jb3 ，最后访问时间：2022-06-15
14. https://lwn.net/Articles/844016/ ，最后访问时间：2022-06-15
15. 《开源软件的定义》，节选自《开源革命之声》，Chris Dibona 等，中国电力出版社，2000-1 
16. https://opensource.org/osd ，最后访问时间：2022-06-15

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
