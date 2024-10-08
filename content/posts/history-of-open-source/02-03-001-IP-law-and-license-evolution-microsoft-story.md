---
categories:
- 开源
- 历史
date: 2022-05-26T11:43:26+08:00
description: "对于软件这个新事物而言，在和硬件割舍的过程中，出现了大胆的叛逆者，指出了其中不合理的地方，虽然在商业中的许可仍然是像商业公司那样签订合同的方式来售卖，但是我们能够在重大事件中，看到其中的矛盾和冲突，也预示着未来的商机，以及最后针对最终用户许可同意书EULA的出现打好了伏笔。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之六/四：直面人性的暗面——致软件爱好者公开信始末"
url: ""
authors:
- 「开源之道」·适兕
---

> 我想我们应该只做软件，微处理器的能力每两年就翻一番，在一定意义上说来你可以把计算机能力想象成几乎是免费的。这样你就该问问自己了，为什么要掺和进几乎是免费的生意中去呢？什么是稀缺的资源？是什么限制了对无限的计算能力的利用？
>
> 答案是：软件。
>
>  ———— 比尔·盖茨 在一次采访中说[1]

## 家酿俱乐部

 在个人电脑发展初期，家酿俱乐部（homebrew club）有着巨大的作用，这家诞生在反主流文化下的社会团体，将分享精神发挥到底，也是交换程序设计和创新思想的集中地，任何成员在今天拿走一份程序，明天都会带来另外两份，用于相互交流。

这也是信息产业重要的hacker 文化发源地[2]，在后面会有专门的介绍。

## Micro Soft 的Basic 

在1972年，有个重大的后来改变世界的突破，那就是Intel生产出了8086CPU，而且个人可以组装出廉价的计算机，其中以Altair最为出色。但是，这样的计算机还没有发展出操作系统来管理它，人们要完成任务，则需要编译器来解析自己所写的程序，其中有两位年轻人脱颖而出，成为的成为了MITS 的BASIC [3]语言提供商。[4]

而这两位年轻人就是微软的创始人Bill Gates 和 Paul Allen，两位中学时的校友, 曾经痴迷于PDP-10上编写程序而结识，当看到个人计算机出现的时候，他们敏锐的认为这是属于他们的机会。[5]

### MITS “专属许可权”

当 Altair 大火的时候，Bill 和 Paul 抱着试一试的心态给MITS创始人爱德华·罗伯特打电话，谎称自己开发出了可运行的BASIC ，并最终兑现了承诺，微软唯一的产品 运行在8080 芯片上的BASIC，MITS 是他们唯一的客户。聪明的Bill Gates 找来了专业的律师，授权MITS 10年的“专属许可权”，可在全世界范围内销售BASIC程序。作为回报，MITS 需要预先支付3000美元，再根据程序版本的不同，每份程序支付30到50美元不等的专利费。若是客户没有购买机器而只是购买了BASIC程序，两家五五分成。当微软把BASIC 卖给其它OEM厂家时，也是五五分成。微软保留软件的所有权。而且微软占尽了先机：

> 第5款  公司责任义务：
>
> 乙方（MITS）同意尽最大努力将本程序发放许可、推广及商业化，若未尽到以上义务，许可持有人有足够的理由依据终止本合同。[4]

### 面临的营销问题

然而，市场还是只认为硬件更有价值，当Altair卖出100万美元时，微软的收入却区区不到17，000美元，根据Bill Gates 的计算，购买计算机的客户中只有1/10的人购买了BASIC程序。

> 最后Bill 和 Paul 终于明白了销量如此低的原因了，人们可以免费获得他们的程序。[5]

## 导火索：MITS  宣传车队不寻常的一天

1975年，MITS 的宣传大篷车到了Palo Alto，所谓的大篷车是MITS公司的一种创新型营销手段（要知道1975年的互联网还处于只有少数人可用的阶段），几名MITS工程师开着活动房车从一个城市到另外一个城市，他们在汽车旅馆的会议室设置好 Altair 计算机,邀请大家都来欣赏这些价格出奇低廉的计算机是如何工作的。而当时用作展示的Altair 计算机上运行着如下图所示的BASIC，也就是微软的产品。

![](https://upload.wikimedia.org/wikipedia/commons/9/9a/Altair_BASIC_Paper_Tape.jpg)

这是在软盘没有出现之前的穿孔纸，对于普通人来说这可能没什么，但是对于家酿俱乐部的成员们，这意味着获得这些纸就能改进程序，使之可以为自己工作。成员之一的丹·索科尔开始为家酿俱乐部的成员们复制：

> 索科尔把纸带拿到自己的半导体公司，坐在一台PDP-11计算机前，把纸带装好，忙乎了整整一夜，复制出了很多卷纸带。在紧接着的一次家酿俱乐部聚会时，他带了一大盒复制好的纸带过去，按照黑客的规矩软件是免费的，他提出的唯一要求是：这次你带回去一卷纸带，制作副本，下次开会的时候就要带两卷纸过来免费分发给他人。大家争先恐后地索要纸带，并且不仅在下次聚会的时候带来了复制好的纸带，而且还送给其他计算机俱乐部使用。[2]

本来就因为被Paul指责的Bill 心生闷气，觉得自己和合伙人的付出和收获不成比例，当得知Altair BASIC 已经免费流传起来，自己收不到足够的授权费之后，Bill 开始了反抗，并在个人计算机圈内流传十分广泛的杂志发表了著名的：

## 致电脑爱好者的公开信

![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Bill_Gates_Letter_to_Hobbyists_ocr.pdf/page1-463px-Bill_Gates_Letter_to_Hobbyists_ocr.pdf.jpg)

这是一封思路清晰的慷慨激昂的讨伐公开信，开始的时候，还是颇为文雅和礼貌的，Bill Gates 表示他本人和合伙人收到了大量针对BASIC 解释器富有建设性的反馈意见，其中大部分的鼓励自来那些没有花钱购买这款软件的爱好者。然后直奔主题：

> 怎么会这样？大家心里一定十分清楚，你们中很多人的软件是盗窃所得。硬件必须花钱购买，但软件就是可以和别人共享的东西。谁会关心编软件的人是否获得了报酬？
>
> 谁能不计报酬地从事专业性工作呢？哪个纯粹的‘爱好者’会花费3个人一年的工作量或一个人3年的工作量心无旁骛地编写程序、调试、录入和发布？我们也要吃饭的呐。

## 软件财产权的确定与巩固

面对Bill Gates 的责难，黑客们并没有做出任何的辩解，只有少数人回复称他们不是窃贼，还附上了钱款，但这样的回复不足1%，黑客们继续在自己的圈子里分享着源代码，并发展出了Tiny BASIC 分支[2]。当然，也有完全站在Bill Gates 对立面的，他们反过来指责微软才是盗版者，指控微软盗用了本应属于公众的东西，BASIC 语言是花了几百个人几年的时间才创造出来的，而微软却把这种公共财产变成了私有物品。

这恰如Spar 所总结的[7]:

> 这是技术前沿的一种典型的僵局：财产权得到确定的同时，先驱者遭遇了强盗。

稍后的1977年，MITS 将自己出售给了Pertec公司，这家公司也发现了Altair 需要BASIC语言，也发现了商机，但是他们没有仔细看当年爱德华·罗伯特和微软签订的合同就声称Pertec拥有BASCI，并且拒绝其他生产商使用。盖茨再次大发雷霆，并拿出了当年的合同，Altair版本的BASIC属于微软！经过了6个月的官司，微软胜诉！结果就是微软随意的销售BASIC，而MITS的母公司Pertec则犯了商业盗版罪。

至此，软件是私有财产这个法律界限已经非常的清晰了，而Bill Gates 也发挥着他在法律经济秩序上的天分和耳濡目染的熏陶，在法律上不断巩固其合法性。同时微软在分发上更为谨慎，随着80年代，计算机存储计算的发展，以及二进制进入著作权保护，软件授权的加密进一步的收紧，微软也能收到更多的授权费。

## 参考材料

1. 《微软的秘密》，[〔美〕迈克尔.科索马罗 理查德.基尔比](https://book.douban.com/search/迈克尔.科索马罗 理查德.基尔比),[北京大学出版社](https://book.douban.com/press/2690),1997-1
2. 《黑客：计算机革命的英雄》，[[美\] Steven Levy](https://book.douban.com/author/646670)，[机械工业出版社](https://book.douban.com/press/2793)，2011-10-31
3. http://www.virtualaltair.com/virtualaltair.com/PDF/AltairBasic_1275.pdf ，最后访问时间：2022-05-31
4. 《我用微软改变世界》，[保罗·艾伦](https://book.douban.com/search/保罗·艾伦)，[浙江人民出版社](https://book.douban.com/press/2507)，2012-3
5.  《硅谷之火：个人计算机的诞生与衰落（第3版）》， [迈克尔·斯韦因](https://book.douban.com/search/迈克尔·斯韦因) / [保罗·弗赖伯格](https://book.douban.com/search/保罗·弗赖伯格)，[人民邮电出版社](https://book.douban.com/press/2609)，2019-10-30
6. https://en.wikipedia.org/wiki/Open_Letter_to_Hobbyists ，最后访问时间：2022-04-18
7. 《Ruling the Waves：From the Compass to the Internet, a History of Business and Politics along the Technological Frontier》，[Debora L. Spar](https://book.douban.com/search/Debora L. Spar)，Harvest Books，January 7, 2003

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
