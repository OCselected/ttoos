---
categories:
- 开源
- 历史
date: 2022-06-17T08:23:35+08:00
description: "终于到了该总结一下的时候了，在追溯了十几篇开源许可的演化，在软件市场的大的背景下，步履蹒跚的不断更新和发展着，让笔者产生无限感慨，人真是奇迹，在促进社会的发展不遗余力地努力推动。从积极自由的角度而言，我们必须去争取开源的发展，而不是被动的等待，等来的只有毁灭。当然，许可是一种保护和促进，但同时也是限制和保守，应该审时度势，务实地解决问题。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之十四/四：难辨真伪 —— 人人都可以开源许可下的困局"
url: ""
authors:
- 「开源之道」·适兕
---

> 版权不是超越世俗的道德观念，而是印刷技术、市场经济和以占有性个人主义为特征的经典自由主义文化共同制造的现代产物。...... 版权制度深深植根于我们的经济制度，而我们的经济很大程度上有赖于知识财产权制度本身。
>          ———— 《版权的起源》[1]

## 开源许可的泛滥

开放源码促进会认证的开源许可大约有80多种[2]，也有彻底抵抗开源许可的放任的许可，如unlicense，WTFPL这样的极端方式，在新的技术形势下，以SSPL、ElasticL等新的一波许可也正在占据一部分的市场，Apache 软件基金会的联合创始人之一，现任OpenSSF 基金会的GM：Brian Behlendorf 曾经在开源运动时撰文[3]中说道：

> 在今后的几年中随着人们发现什么可行或什么不可行，开源的许可空间肯定会有所发展。简单的事实是你有发明新许可的自由，许可确切地描述了你想要将它放置的（BSD在右侧，而GPL在左侧）谱系中的位置。只是你要记住，你给与那些使用并扩展你的代码的人的自由度越大，他们做贡献收到的鼓励也就越大。

Brian 的预言是完全正确的，可是他没有想到的是这个频谱不止开源许可，还要往右移动，专有软件的许可也应该算在内，比如EULA。也就是说许可可以有任意多的，于是，没有被OSI认证过的“边缘”自己号称的源代码可见的许可几千几百种的出现。

## 摆烂的新生代

Nadia Eghbal 在2020年根据自己在GitHub 的工作经验，以及访问了很多的开源开发者之后，撰写了一本书：《在所有人看得见的地方工作》[4]，她在书中将开源的开发者描述为三代，第一代是为争取自由而战斗的理想主义者，第二代事愤世嫉俗的反抗者，反抗垄断，反抗封闭，但是和商业有联合和妥协，第三代则是温驯的宠物养护者，只是写一份代码，工作而已，无所谓开源许可背后的关于自由、权利，更乐观的人们将这些描述为默认**开源的时代**。

开源是用脚投票出来的，但是这似乎是不准确的描述，是的，新的时代之下，代码已经远远没有那么重要，更重要的是代码处理的数据，以及代码运行的算力和存储，面对庞大的技术栈，个体的力量微不足道，于是有一部分干脆摆烂，不要和他们谈copyleft，他们不在乎。

## 木兰许可，何去何从

这里值得一提的是汉语为主的开源许可 ———— 木兰系列许可的发布，[5] 正如其引言中所说，该许可主要是满足日益增长的汉语群体参与开源世界的需求，针对广大从业者难以理解开源许可之间的差异而发布的一系列许可，参与许可的创建是按照典型的集体常见做法，由企事业单位合力完成，而并没有提及背后的主要撰写者和推动者人的姓名，不过我们可以从 OSI 申请的过程中得知 [6] ，是来自北京大学的周明辉教授[7]主导了此次工作。

法律具有地域性，当本土产生了开源许可侵权的时候，当地的法律来处理此事，也只能如此。因此本土的原生许可有其必要性的存在，木兰系列许可无疑是填补了这样的空白。但是如果横向对比历史上的许可，木兰系列许可的创新则是乏善可陈；另外一个区别于目前主流的开源许可则是，它几乎覆盖了学术性和互惠性许可的全部频谱，这几乎失去了特定知识财产权的主张。

这牵扯出本土的一个问题，也就是十四五规划纲要中提及的：**完善开源知识产权和法律体系**， 开源的许可对于普及背后知识财产权的意义也显得越发的重要，本土在此还有很长的路要走，木兰系列许可有效的促进开源项目的健康发展也有很长的路要走。

## 未来：人心不变，继续斗争

人的主体间性[9]，导致各种各样的差异，总是有人在不断拓展边界，也总是有人试图将边界固定下来，有人为了占有更有利益而选择保守不前，有人更加的激进想将现有的财富扩张，有人想成为多行星动物看看地球之外的世界，有人收于一隅而不愿意踏出舒适区半步，有人拒绝科学的任何成果，有人为了科学不惜牺牲所有.......

软件作为计算机发展壮大后的多人协作成果，缔造了伟大的商业公司，也形成了伟大的同行共同体，开源作为其中最为开放、公开透明、普遍的开发方式而获得了巨大的成就，但是，仍然需要维护自我，像所有人类社会需要做的那样：形成契约，获得社会的认可，换句话说，需要在法律的保护下继续前行。

保护自我：防止恶意的侵犯；不要消耗殆尽（burn out）：拒绝搭便车的一味索取；积极自由[10]：亲力亲为的打造开源世界；可持续发展：合理的商业化乃可取之道。

市场在不断的推动技术不断往前发展，相应的法律法规亦须不断演化，开源许可，无尽的前沿，无尽的斗争。在解决集体行动的逻辑之余，还要思考经济的发展，于是创新不断，世界继续。

开源许可，让开源不断促进发展的基石，在知识财产法下稳重前行。

## 参考资料

1.  《版权的起源》，[美] 马克·罗斯，商务印书馆，2018-1-1
2.  https://opensource.org/licenses/category ， 最后访问时间：2022-06-17
3.  《开源，一种商业策略》，节选自《开源革命之声》，Chris Dibona 等，中国电力出版社，2000-1 
4.  《Working in public：The Making and Maintenance of Open Source Software》，Nadia Eghbal，Stripe Press，2020-8
5.  http://license.coscl.org.cn/index.html ，最后访问时间：2022-06-14
6. https://opensource.org/licenses/MulanPSL-2.0 ，最后访问时间：2022-06-14
7. 《开源之迷》，适兕，人民邮电出版社，2022-02
8. 「开源」首次被列入“十四五”规划，未来大有可为， https://cloud.tencent.com/developer/news/790450 ， 最后访问时间：2022-06-17
9. 《商贸与文明:现代世界的诞生》,张笑宇,一頁folio | 广西师范大学出版社，2021-10-10
10. 《Liberty: Incorporating Four Essays on Liberty》， [英] 以赛亚·伯林，译林出版社，2011-3

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
