---
categories:
- 开源
- 思考
date: 2024-07-28T11:55:10+08:00
description: "历史往往就会和我们开大大的玩笑。适兕实在忍不住体验这个思维的实验,想象虚拟的历史，于是尝试花几个月的时间翻译。Enjoy！Happy Reading～"
keywords:
- Open Source
- Culture
- Reading
- book
tags:
- 书籍
- 开源之道
title: "《网络的财富：社会生产如何改变市场和自由》（中文版）(在线阅读) 第十一章第六节"
url: ""
authors:
- Yochai Benkler
translater:
- 「开源之道」·适兕
---

## 有关安全的问题

本书整体致力于探讨 Commons 信息生产的兴起及其对自由民主的影响。本章也必然强调工业化和网络化信息经济之间的冲突所引发的制度设计问题。与这一冲突直接相关,且又始终相关的是通信政策对安全和犯罪的长期关注。在 20 世纪 90 年代的大部分时间里，这种关注主要表现为对加密的冲突。这场所谓的“加密战争”围绕着美国联邦调查局强制工业界采用带有后门的技术（当时被称为“Clipper Chip”）展开，这种技术可以为窃听和调查提供便利。在阻碍了美国加密技术的采用近十年之后，联邦政府最终决定，为了确保联邦调查局能够更好地调查使用这种弱加密技术必然会导致的安全漏洞，而试图削弱大多数美国系统的安全性（即强迫每个人都采用较弱的加密技术）是一个坏主意。加密研究和业务转移到海外的事实——在美国加密行业落后的情况下，犯罪分子有了获得优秀加密工具的替代来源——对 FBI 的事业没有帮助。在某种程度上，同样的冲动再次发挥作用，更何况再加上 9/11 之后的安全思维。

一个令人担忧的问题是，开放的无线网络可供犯罪分子隐藏其踪迹——犯罪分子使用未加密的 WiFi 接入点来连接他人的互联网，当当局成功将互联网地址追踪到 WiFi 路由器时，他们发现的是无辜的邻居，而不是罪犯。这种担忧导致有人提议 WiFi 路由器制造商设置其默认设置，这样路由器在出厂时就已加密。考虑到技术产品中默认设置有多么“粘性”，这将对开放无线网络的发展产生极其有害的影响。另一个担忧是，自由和开源软件会将其设计泄露给任何想要阅读的人。这使得攻击者更容易找到可能利用的漏洞，而几乎不可能隐藏故意设计的弱点，例如易受窃听。第三，弹性、加密、匿名的对等网络（如 FreeNet 或一些主要的 p2p 架构）为犯罪分子或恐怖分子提供了通信系统，这些系统实际上不受执法和反恐行动的控制。就其形式而言，安全问题往往会成为专有生产商的生产议程。

然而，安全问题并不需要支持专有架构和实践。在无线方面，犯罪分子和恐怖分子可以使用各种匿名技术，他们利用互联网来掩盖自己的踪迹。关闭 WiFi 路由器的访问权限会给那些一心想掩盖自己踪迹的犯罪分子带来一些额外困难，但这种困难不太可能值得他们放弃为本地电信构建额外最后一英里环路的整个方法。安全的核心问题之一是保护作为关键基础设施的网络容量。另一个问题是确保关键安全人员的通信。由临时、自配置网状网络构建的开放式无线网络是目前可用的本地通信环路最强大的设计。在这样的网络中，本地通信几乎不可能被中断，因为这些网络的设计使得每个路由器都会自动寻找下一个可用的邻居来组成网络。这些系统将根据其基本的正常运行设计，自我修复以应对对通信基础设施的任何攻击。这样，它们既可以用于主要的关键任务，也可以作为备用数据网络供急救人员使用，即使主系统已经丢失——事实上，在世贸中心袭击后，曼哈顿市中心的主系统就丢失了。如果认为通过消除这种备用本地通信网络出现的可能性来增强安全性，以换取罪犯使用更多的匿名器和代理服务器而不是邻居的 WiFi 路由器，那么这种想法就太狭隘了。同样，自由软件的缺陷易于研究，因此潜在的恐怖分子或罪犯很容易发现这些缺陷，而开发者社区也很容易发现这些缺陷，从而迅速加强程序的防御。在过去十年中，专有程序的安全缺陷比自由软件的安全漏洞更为常见，因为专有程序无法接受如此多的开发人员和测试人员的检查。那些认为专有软件更安全、更易于监控的人似乎在很大程度上重复了 FBI 在 Clipper Chip 辩论中所持的立场。

更根本的是，安全问题代表着人们对网络信息环境所带来的巨大自由的不满。现在，一些人可以单独或与他人合作做更多事情，但他们却想损害美国，甚至损害发达的自由市场民主国家。还有一些人想交易纳粹纪念品或儿童色情制品。正如互联网使独裁政权更难控制其人民一样，网络环境的巨大开放性和自由度也要求采取新的方式来保护开放社会免受破坏性个人和团体的侵害。然而，特别是考虑到网络信息经济及其基于共享的开放生产实践对自由民主国家的核心政治承诺所带来的系统性和重大利益，通过消除能够支持改善所保护的自由的技术来维护这些社会的安全是错误的。然而，考虑到阿布格莱布和关塔那摩湾事件，压制开放的网络环境和经济的出现似乎并不是在保护自由社会的自由和人类尊严的战争中最明显的自毁之举。目前还无法判断安全需求最终是否会偏向工业信息经济的既有者，还是会走上密码战争的道路，导致安全问题转向支持网络信息经济提供可生存、冗余和有效的关键基础设施以及信息生产和交换能力的能力。如果是前者，这种冲动很可能对开放网络信息环境的出现构成巨大障碍。

## 参考资料

1. Paul Starr, The Creation of the Media: Political Origins of Modern Communications (New York: Basic Books, 2004).
2. Ithiel de Sola-Pool, Technologies of Freedom (Cambridge, MA: Belknap Press, 1983), 91-100.
3. Bridgeport Music, Inc. v. Dimension Films, 2004 U.S. App. LEXIS 26877.
4. 其它基于层的抽象也有被提出，其中颇有影响力的是 Lawrence Solum 和 Minn Chung 提出的《The Layers Principle: Internet Architecture and the Law,》，圣地亚哥大学公法研究论文第 55 号。他们的模型更接近 OSI 层，并且经过量身定制，更适用于特定的法律原则——永远不要在低于需要的水平上进行监管。我寻求一种更高层次的抽象，其作用不是作为约束特定规则的工具，而是作为理解各种制度要素之间关系的地图，因为它们与信息在社会中如何产生和交换的基本问题有关。
5. 第一个对这一现象进行重要论述的是 Michael Froomkin 的《互联网作为监管套利的源头》（1996 年）。http://www.law.miami.edu/froomkin/articles/arbitr.htm 
6. Jonathan Krim, "AOL Blocks Spammers' Web Sites," Washington Post, March 20, 2004, p. A01; also available at http://www.washingtonpost.com/ac2/wp-dyn?pagename=article&contentId=A9449-2004Mar19&notFound=true.
7. FCC Report on High Speed Services, December 2003 (Appendix to Fourth 706 Report NOI).
8. 216 F.3d 871 (9th Cir. 2000).
9. National Cable and Telecommunications Association v. Brand X Internet Services (decided June 27, 2005).
10. Turner Broad. Sys. v. FCC, 512 U.S. 622 (1994) and Turner Broad. Sys. v. FCC, 520 U.S. 180 (1997).
11. Chesapeake & Potomac Tel. Co. v. United States, 42 F.3d 181 (4th Cir. 1994); Comcast Cablevision of Broward County, Inc. v. Broward County, 124 F. Supp. 2d 685, 698 (D. Fla., 2000).
12. 经济学家们批评的典型案例是罗纳德·科斯的《联邦通信委员会》，《法律与经济学杂志》第 2 期（1959 年）：1。关于这些产权如何呈现，最完善的版本仍然是亚瑟·S·德·瓦尼等人的《电磁频谱市场配置的产权制度：法律-经济-工程研究》，《斯坦福法律评论》第 21 期（1969 年）：1499。
13. City of Abilene, Texas v. Federal Communications Commission, 164 F3d 49 (1999).
14. Nixon v. Missouri Municipal League, 541 U.S. 125 (2004).
15. Bill Number S. 2048, 107th Congress, 2nd Session.
16. Felten v. Recording Indust. Assoc. of America Inc., No. CV- 01-2669 (D.N.J. June 26, 2001).
17. Metro-Goldwyn-Mayer v. Grokster, Ltd. (decided June 27, 2005).
18. 请参阅 Felix Oberholzer 和 Koleman Strumpf 的《文件共享对唱片销售的影响》（工作论文），http://www.unc.edu/cigar/papers/FileSharing_March2004.pdf
19. Mary Madden 和 Amanda Lenhart，《音乐下载、文件共享和版权》（Pew，2003 年 7 月），http://www.pewinternet.org/pdfs/PIP_Copyright_Memo.pdf
20. 参见 111 F.Supp.2d 第 310 页，脚注 69-70；PBS Frontline 报告，http://www.pbs.org/wgbh/pages/frontline/shows/hollywood/business/windows.html
21. See 111 F.Supp.2d at 310, fns. 69-70; PBS Frontline report, http://www.pbs.org/wgbh/pages/frontline/shows/hollywood/business/windows.html .
22. A. M. Froomkin，《半私人国际规则制定：从 WIPO 域名流程中吸取的教训》，http://www.personal.law.miami.edu/froomkin/articles/TPRC99.pdf 
23. Jessica Litman, “The Exclusive Right to Read,” Cardozo Arts and Entertainment Law Journal 13(1994)： 29.
24. MAI Systems Corp. v. Peak Computer, Inc., 991 F.2d 511 (9th Cir. 1993).
25. Lawrence Lessig, Free Culture: How Big Media Uses Technology and the Law to Lock Down Culture and Control Creativity (New York: Penguin Press, 2004).  国内翻译为：《免费文化：创意产业的未来》， (美)劳伦斯·莱斯格，中信出版社，2009-10
26. Jessica Litman, "Electronic Commerce and Free Speech," Journal of Ethics and Information Technology 1 (1999): 213.
27. 请参阅司法部知识产权政策和计划， http://www.usdoj.gov/criminal/cybercrime/ippolicy.html .
28. Eldred v. Ashcroft, 537 U.S. 186 (2003).
29. Bridgeport Music, Inc. v. Dimension Films, 383 F.3d 390 (6th Cir.2004).
30. 383 F3d 390, 400.
31. Mark A. Lemley，“知识产权与 Shrinkwrap 许可”，《南加州法律评论》68 (1995)： 1239, 1248-1253.
32. 86 F.3d 1447 (7th Cir. 1996).
33. 有关更完整的技术解释，请参阅 Yochai Benkler 的《信息交易中的私人订购的从容视角》，《范德比尔特法律评论》53（2000）：2063
34. James Boyle, "Cruel, Mean or Lavish? Economic Analysis, Price Discrimination and Digital Intellectual Property," Vanderbilt Law Review 53 (2000); Julie E. Cohen, "Copyright and the Jurisprudence of Self-Help," Berkeley Technology Law Journal 13 (1998): 1089; Niva Elkin-Koren, "Copyright Policy and the Limits of Freedom of Contract," Berkeley Technology Law Journal 12 (1997): 93.
35. Feist Publications, Inc. v. Rural Telephone Service Co., Inc., 499 U.S. 340, 349-350 (1991).
36. Directive No. 96/9/EC on the legal protection of databases, 1996 O.J. (L 77) 20.
37. J. H. Reichman and Paul F. Uhlir, "Database Protection at the Crossroads: Recent Developments and Their Impact on Science and Technology," Berkeley Technology Law Journal 14 (1999): 793; Stephen M. Maurer and Suzanne Scotchmer, "Database Protection: Is It Broken and Should We Fix It?" Science 284 (1999): 1129.
38. See Stephen M. Maurer, P. Bernt Hugenholtz, and Harlan J. Onsrud, "Europe's Database Experiment," Science 294 (2001): 789; Stephen M. Maurer, "Across Two Worlds: Database Protection in the U.S. and Europe," paper prepared for Industry Canada's Conference on Intellectual Property and Innovation in the Knowledge-Based Economy, May 23-24 2001.
39. Peter Weiss, "Borders in Cyberspace: Conflicting Public Sector Information Policies and their Economic Impacts" (U.S. Dept. of Commerce, National Oceanic and Atmospheric Administration, February 2002).
40. eBay, Inc. v. Bidder's Edge, Inc., 2000 U.S. Dist. LEXIS 13326 (N.D.Cal. 2000).
41. 优先权模式可能类似于第二巡回法院在 NBA 诉摩托罗拉案（105 F.3d 841 (2d Cir. 1997)）中采用的模式，该模式将州挪用索赔限制在《版权法》中嵌入的联邦政策所划定的狭窄范围内。这可能需要实际证据证明机器人已停止服务或威胁到服务的存在。
42. New York Times v. Sullivan, 376 U.S. 254, 266 (1964).

