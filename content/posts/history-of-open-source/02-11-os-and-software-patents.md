---
categories:
- 开源
- 历史
date: 2022-06-24T14:24:00+08:00
description: "古人教我们不要走极端，凡事有个平衡之道，专利的作用是保护创新，但是过度保护就是阻碍，在计算机领域专利之争从通信领域就开始了，这并非一片净土，而是你死我活的法律之争，开源共同体如果学不会，又可能出现悲剧，面临巨额罚款，甚至牢狱之灾，都是有可能的。但是，也没有必要因噎废食，拒绝它或恐惧它，社会问题就通过社会创新来解决它。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之十五/四：君子协定 —— 联盟以对抗万恶的专利"
url: ""
authors:
- 「开源之道」·适兕
---

## 刺激响应式 —— 自由/开源软件阵营面对专利制度的无奈之举

著名汉学家费正清教授提出了针对中国近代的“冲击-回应”模型[1]，这个理论认为传统中国的社会和制度都非常稳定，缺乏向现代转型的内在动力，是个停滞的帝国，西方的入侵，刺激了中国的回应，中国为了保存自己的种族，开始变革，向现代转型。笔者经常也会对此进行思考，**为什么不能去做到未雨绸缪了呢？总是慌张地不断应对**。即使在开源这个很小的领域里，现代中国也仍然是只有应付的份，这也是《开源之史》回溯的缘由之一，究竟是怎么回事了呢？

其实，前面的十几篇关于开源许可、商标等演化的历史，聪明的读者想必也已看出来，其实知识财产法的形成就是如此的“冲击-回应”模式。笔者对于费正清教授的说法也有了新的思路。和中国或东亚无关，是新的知识和视角以及处理利益的方式在发生着变化。

如果说在版权方面，Richard Stallman 以天才般的 Hacking 之道巧妙的保证了自由软件的开发和持续，创造性的发明了 Copyleft 和 GPL，但是在专利方面，却显得毫无办法，除了发表反对的观点之外，就是警告大家要警惕软件专利对于 —— 软件的伤害[2]，并为开发者提供了三个建议：

1. 避免专利
2. 专利授权
3. 在法庭上推翻专利

也就是说，面对古老的专利制度，连伟大的哲学家 Richard Stallman 都显得无奈，只能被迫应对 —— 当出现问题的时候，比如被诉讼了，然后再想办法应对。

关于软件申请专利的是否被批准，科学家高德纳就是非常反对这一举动，作为计算机算法的泰斗，是坚决反对将算法申请为专利的[3]。但是呼吁也好，反对也罢，没有改变立法，就是无力的。

## 凡事总有解决之道

古语有云：“车到山前必有路”， 面对传统知识财产法的专利制度，全新数字领域的信息产业就需要另辟蹊径，在没有更好的办法之前，只能装作“敌不动，我不动“的姿态了。 因为如此巨大的市场，该来的总会来的。

### RedHat 最初提出的 patent commons

计算机图片显示格式有一个规范叫做 GIF，该格式在压缩算法上使用了一种叫做 LZW 的算法，拥有LZW 压缩算法专利的是一家叫做Unisys的公司，2001年初，该公司更改了最初的想法，希望采用GIF的开发者能够付给Unisys公司专利费用。[4] 而且以高达 5,000 美元的价格才能获得许可（最多可覆盖 2 台服务器）。这可吓坏了一干刚刚兴起的web开发者，他们放弃了GIF格式，而选用了更为自由的 PNG 格式。

尽管 LZW 的专利很快就过期了，但是这给了开源圈内一个警示，其中就包括敏锐的 RedHat 公司，作为开源共同体关系运营的 Greg DeKoenigsberg 提出了 patent commons 的想法[5]，倡议采用开源的商业公司，共同维护，并做到：

* 承诺应明确表示：作出承诺的一方不会提起诉讼；
* 该承诺应仅适用于为开源项目贡献代码的开发人员；
* 承诺应定义其覆盖范围；
* 该承诺明确定义了什么是可接受的开源项目；
* 承诺包含在反诉讼情况下撤销承诺的语言

而且这个patent commons 不止 RedHat一家，起步就有巨头IBM 500个专利的支持。

### 尝试：OSDL 发起 patent- commons 项目

patent commons 显然不是一家商业公司可以推进的，于是，IBM和RedHat 将目光转向了新成立的OSDL（详见[「开源之史」系列之九/九](posts/history-of-open-source/07-01-the-rise-of-linux-foundataion/)），并高调联合其它公司，成立了 patent commons项目（https://patentcommons.org/）[6]，这是当年的大事件，获得了软件自由法律中心（SFLC）的主席Eben Moglen的大力支持：

> "OSDL 是patent commons项目等重要法律倡议的理想管理者，无论你对软件专利持什么立场，我都反对,我呼吁开发人员为 OSDL patent commons项目做出贡献，因为人数众多，当个人贡献聚集在一起时，它会创建一个保护性的避风港，让开发人员可以无所畏惧地进行创新。”

时任OSDL CEO Stuart Cohen 介绍，成立之初就拥有3000个专利，并阐明了patents commons 项目的主要目的：

* 汇总公司作出的专利承诺的 library 和数据库。该 Library 还将汇总其他法律解决方案，例如开源软件供应商提供的赔偿计划。
* 一个为了开源共同体的利益而持有的软件专利许可和软件专利（已发布和待定）的集合。

## 世纪之战 —— SCO 诉 IBM

从1998年，IBM 就开始拥抱开源，在2000年10亿美金投入，更是加大了力度，投入较多的人力和物力来拥抱开源，[7] 树大招风的IBM，本来就拥有 AIX 产品，在2003年被告上了法庭。 而提起诉讼的是一家叫做 SCO 集团的公司，随着AT&T的分拆，Bell 实验室的衰落，Unix 的版权归属，历经多次易手，辗转到了SCO 手中。[8]  SCO 原本还是一家做Linux 发行版的公司，就这么走上了敌对整个GNU/Linux乃至整个开源的道路，有很多人猜疑SCO背后是微软，尽管到现在仍然没有被证实，但是SCO确实是得到过微软的资助，而微软在被曝光了“万圣节文档”之后，对于linux采用的战略就是FUD。[9]

SCO 狮子大开口，10亿美金的索赔，这还不够，还给Linux的用户去了信[10]，还和Novell、RedHat 等打起了官司，自己的业务也不搞了，这个官司一下子让开源共同体的人们警觉了起来，他们是前所未有的团结一致，来辩护和捍卫自己的权益，Linus Torvalds、Bruce Perens、 Richard Stallman 等都在 groklaw 上阐明了自己的观点。[11]

像所有的专利官司一样，2003年只是一个起点，然后是漫长的取证和庭审过程，18年之后的2021年，以和解告终。[12]

### OIN 之成立

SOC诉Linux相关厂商的事件，触动了很多开源共同体成员们的神经，也呈现出了软件专利的荒唐的一面，为此而成立了一个专门讨论该案件进展的geek网站：groklaw，如此下去显然不是办法，势必会影响到Linux在消费者心目中的地位，不能让 FUD 的策略得逞。除了OSDL 成立的专利共享项目之外，IBM、Novell、 Red Hat、 和 Sony 联合成立了一家公司[13]：Open Invention Network，简称OIN，并雇佣了颇为传奇的Keith Bergelt[14]来掌舵，OIN 的目的非常的明确[15]：

* 围绕 Linux 和 Linux 相关应用程序提供网络或公共资源；
* 确保由此产生的、大的、无专利的“安全区域”仍然是大的、安全的、无专利的。

相比于OSDL仅仅是一个承诺的专利池而言，OIN则更进了一步，加入OIN 需要承诺：“不要针对 Linux 操作系统或某些与 Linux 相关的应用程序主张其专利。”作为回报，参与者可以使用 OIN 拥有的专利。OIN很快就获得了大型开源项目的支持：Apache, Eclipse, Evolution, Fedora Directory Server, Firefox, GIMP, GNOME, KDE, Mono, Mozilla, MySQL, Nautilus, OpenLDAP, OpenOffice.org, Perl, PostgreSQL, Python, Samba, SELinux, Sendmail, 以及 Thunderbird等[16]

当然OIN 还以持之以恒的谈判著称。经过数年的耕耘，伴随着开源的崛起，OIN 也赢得了更多厂商的信任：2013年Google加入，2018年微软加入。自从开源的专利有了OIN 保护伞，才放心大胆的进行创新，不断前进。

OIN 的出现和发展，一方面是开源的技术势力的不断发展和展现，另一方面也是卓越的社会创新，大家对于专利的保护作用不可否定，但是对于专利的反面作用也心知肚明，通过这样的君子协定来实现暂时的平衡，只用开源共同体能够促进技术的发展，OIN的现实意义就非常之大，反正过了20年，专利总是要过期的。不求永恒，但求当下。

## 摆脱不了的专利流氓

著名内存存储开源项目 redis ，被专利厂商控告侵权,[17] 因为加速内存技术专利 \#6,513,062被知名专利流氓：”知识产权投资集团“ 所拥有，但是Redis并没有钱让他们索赔，于是转而控告使用Redis的6家厂商：Hulu, Citrix Systems, Barracuda Networks, Kemp Technologies 和 F5， 最后这个官司不了了之。但这只是众多软件专利案件中的九牛一毛，开源概莫能外。

只要软件的专利存在一天，那么专利 trolls 就会存在，据 Unified Patents 称，80%的来自专利 Trolls，而且还有专门的名称： Patent trolls，又称 Patent Assertion Entities (PAE)。特别是针对开源程序的 trolls 诉讼在 2021 年达到了 721 起的历史新高。这比 2020 年增加了近 22%。[18]

随着开源软件的崛起，这些Trolls就会找上门来，开源共同体仍然不能松懈，2022年，Linux基金会、OIN、微软，联合Unified Patents这家国际组织，成立了开源软件专区（oss zone）[18]，继续降低来自这些Trolls的威胁的可能性。

## 另外一种可能：特斯拉之开放专利的意义与启示

随着人工智能、制造工艺等技术的发展，汽车领域也正在完全接受全新的理念，软件化是重要的因素，甚至有人形容 Tesla 为代表的新一代电动汽车为：“装有四个轮子的超级计算机。”[19] 这部分的专利也面临着新的变化。

2014年6月12日，创新电动汽车公司Tesla CEO Elon Musk 发文：旗下专利向全世界开放[20]，而且在文中称，这是受到开源运动精神的召唤。这是一份让人热血的文章，而且充满了自信与让人奋进的色彩。

> We believe that applying the open source philosophy to our patents will strengthen rather than diminish Tesla’s position in this regard.

笔者是认同这一点的，在数字的世界里，我们需要重塑对于知识财产的观念，在竞争中合作，打造有益于人们的产品，而不是通过树立高墙来停滞不前。截止笔者撰写本文，tesla 电动车开放专利已经过去了8年，在技术领先方面，目前尚无能够超越，而是更多的受益者，重塑了汽车市场，这一点是确凿无疑的。

但是，我们也会相信软件的相关专利不会消失，每家公司仍然会去专利局申请，并会花费巨资来维护它，但是，和同行一起约定共享池的方式确实是一种共同进步的上佳选择，毕竟未来迎接挑战的不是竞争对手，而是前所未有的各种挑战，开放才是创新的最佳出路。

## 参考资料

1. 《冲击与回应：从历史文献看近代中国》，费正清 / 邓嗣禹 编著， 民主与建设出版社，2019-6
2. 软件专利——软件开发的障碍， https://www.gnu.org/philosophy/software-patents.zh-cn.html ，最后访问时间：2022-06-25
3.  《开源之迷》，适兕，人民邮电出版社，2022-02
4. The Unisys LZW Patent and GIF files ，https://www.cl.cam.ac.uk/~jw35/docs/gif_patent.html ，最后访问时间：2022-06-24
5. Building the patent commons，https://web.archive.org/web/20120927021800/http://www.redhat.com/magazine/004feb05/features/patents/ ，最后访问时间：2022-06-24
6. OSDL Announces Patent Commons Project，http://www.groklaw.net/article.php?story=20050809221240129 ，最后访问时间：2022-06-24
7. IBM launches biggest Linux lineup ever， https://web.archive.org/web/19991110114228/http://www.ibm.com/news/1999/03/02.phtml ，最后访问时间：2022-06-19
8. Who really owns Unix? https://www.zdnet.com/article/who-really-owns-unix/ ，最后访问时间：2022-06-24
9. SCO v. IBM and related bad publicity ,https://en.wikipedia.org/wiki/History_of_free_and_open-source_software#SCO_v._IBM_and_related_bad_publicity_(2003%E2%80%93present)  ，最后访问时间：2022-06-25
10. SCO-Linux 纠纷 ，https://en.wikipedia.org/wiki/SCO%E2%80%93Linux_disputes#SCO_v._IBM ，最后访问时间：2022-06-25
11. SCO Falls Downstairs, Hitting its Head on Every Step，http://www.groklaw.net/article.php?story=6 ，最后访问时间：2022-06-25
12. https://www.zdnet.com/article/after-almost-20-years-the-sco-vs-ibm-lawsuit-may-finally-be-ending/ ，最后访问时间：2022-05-17
13. OIN 官宣， http://xml.coverpages.org/OIN-Announce.html ，最后访问时间：2022-06-25
14. https://en.wikipedia.org/wiki/Keith_Bergelt  ，最后访问时间：2022-06-25
15. Open Invention Network (OIN), software patents, and FLOSS, https://dwheeler.com/blog/2006/ ，最后访问时间：2022-06-25
16. The Open Invention Network ，https://web.archive.org/web/20070501210153/http://www.linux-mag.com/id/2497 ，最后访问时间：2022-06-25
17. Accelerated Memory Tech patent challenged as likely invalid ， https://www.unifiedpatents.com/insights/2019/12/4/accelerated-memory-tech-patent-challenged-as-likely-invalid ，最后访问时间：2022-06-25
18. Open Source Zone grinds away at patent trolls， https://www.zdnet.com/article/open-source-zone-grinds-away-at-patent-trolls/ ，最后访问时间：2022-06-25
19. 汽车=四个轮子+超级计算机？ https://twgreatdaily.com/zh-hans/ydRIG3gBDlXMa8eqXq_Y.html ，最后访问时间：2022-06-24
20. All Our Patent Are Belong To You ， https://www.tesla.com/blog/all-our-patent-are-belong-you ，最后访问时间：2022-06-24

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
