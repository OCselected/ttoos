---
categories:
- 开源
- 感悟
date: 2023-12-29T16:08:09+08:00
description: "2023年是疫情后疯狂走动的一年，像是发泄又像是斗气，又仿佛是打算将三年多以来的失去的东西抓回来一样，忙碌奔波的一年，现在年终了，终于可以坐下来，回忆一下自己过去一年的所作所为。当然，过去的只有经验和教训，未来才是更为重要的，能否抓住机遇，则要看当下。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "「开源之道」·适兕 2023年工作总结及2024年展望"
url: ""
authors:
- 「开源之道」·适兕
---

## 引子

其实年度总结是蛮难的，因为总是想一下子将所有的过去465天发生的事情回忆是困难的，脑海中闪现的幻灯很多，而且也未必是真实的按照时间线排列的（如果不是云存储带来的便捷，是无法验证的），所幸遇到了《软技能》[1]这本书，教会了我可以每天写一点，不用一下子就完成，甚至可以利用版本控制系统不断的删了，于是，就利用2024年元旦假期回顾一下。不过在这里我还有个问题需要解决，那就是像[去年的总结](/posts/the_way_of_open_source/2022-annual-report-and-2023-vison/)一样按照项目去描述了呢？还是按照时间轴每个月干了什么了呢？

想来想去，小孩子才做选择题，成年人都要～ 先按照项目来描述，然后再用时间轴和照片之类的回忆，这样就更加的清晰和使用了不同的视角。不过无论如何，首先还是要感谢！

## 感谢&&致谢

* 思否Segmentfault
* 开放原子开源基金会
* 信通院云大所
* 安势信息
* 华为开源
* Linux 基金会 APAC 
* 腾讯云
* 人民邮电出版社
* 蚂蚁开源技术委员会
* 中关村创业大街创新协会
* 字节跳动 OSPO

以及在开源之路上帮助和支持我的朋友和同事、同行们：

* 孙振华、郁志强、郭雪、赵海玲、刘洁、Keith Chan、王哲、杨振涛、薛植元、Bruce Perens、王厚、淮景阳、朱中华、江波、庄表伟、郭旭东、杨东杰、Maggie Cheung、陈阳、马乐、边思康、杨轩、徐剑敏、朱其罡、Shane Coughlan、过泳安、何苗、王旭、范凡、侯佩秀、王峰、龚宇华、范晶晶、夏小雅、孟伟、胡捷、靳东颖、梁辰晔、高琨、程勇、刘天栋、付钦伟、刘伟、张家驹、AlphaTu、范小青、罗广明、李小明、Ana Jiménez Santamaría、陈锐......

以及所有支持「开源之道」而没有被适兕认识和见面朋友。

## 2023年总结之项目篇

「开源之道」是一系列的项目，它不是指一篇文章，也不是指一场活动，更加不是一次策划，或者是一次布道，它是所有行动的集合。

### 「开源之史」的写作

发现开源三部曲的创作需要更多的历史素材，于是「开源之史」的创作便成为了当前的重要工作。撰写历史是艰难的，虽然是公开透明有记录的开源的历史，并不是说罗列开源的事件有多么困难，而是说要从中找到一定的逻辑和叙事是困难的。但是艰难并不能代表停止进步。

[「开源之史」目录](https://opensourceway.community/posts/history-of-open-source/summary/)

### 「OSCAR·开源之书·共读」

秉承「开源之道」的宗旨：致力于开源相关思想、知识和价值的探究和推动，读书仍然是适兕的重要活动，不仅读而且要分享，关于「OSCAR·开源之书·共读」的日常记录和维护，从其GitHub的[提交记录](https://github.com/oscar-open-source-book)即可看出一年的工作。当然，网站[https://osbook.club/](https://osbook.club/)才是信息的集中之地。

对于我个人来讲，没有什么比分享读书心得更让人成长的事情了，认知觉醒这几个字形容确实非常的恰当，一下演示文稿是我2023年的分享列表：

* [「开源之书」:我们该读哪些书来了解开源](https://1drv.ms/p/s!Arg2k_5HJFrbgecHIjr9hHTVnrXzrg)
* [交易成本与开源经济](https://1drv.ms/p/s!Arg2k_5HJFrbgehDIjr9hHTVnrXzrg)
* [开源的核心：为了把事情做好而做好](https://1drv.ms/p/s!Arg2k_5HJFrbgek-Ijr9hHTVnrXzrg)
* [压迫下的天才创新- GPL的诞生和发展](https://1drv.ms/p/s!Arg2k_5HJFrbgepvIjr9hHTVnrXzrg)
* [异军突起：Linux和开源革命](https://1drv.ms/p/s!Arg2k_5HJFrbgeZkIjr9hHTVnrXzrg)
* [数字商品所有权思考](https://1drv.ms/p/s!Arg2k_5HJFrbge4FIjr9hHTVnrXzrg)
* [秩序、信任与商业:开源许可背后的哲学](https://1drv.ms/p/s!Arg2k_5HJFrbge1hIjr9hHTVnrXzrg)
* [开源到底改变了什么？————《The Success of Open Source 》深度解读](https://1drv.ms/p/s!Arg2k_5HJFrbge11Ijr9hHTVnrXzrg)
* [开源人画像：人类学视角](https://1drv.ms/p/s!Arg2k_5HJFrbge9vIjr9hHTVnrXzrg)
* [从上游思维到上游优先：开源黄金法则的哲学](https://1drv.ms/p/s!Arg2k_5HJFrbgfArIjr9hHTVnrXzrg)
* [互惠经济学 ——— 关于开源的思考与感悟](https://1drv.ms/p/s!Arg2k_5HJFrbgfQNIjr9hHTVnrXzrg)
* [如何以「开源之道」构建一个阅读共同体](https://1drv.ms/p/s!Arg2k_5HJFrbgfQmIjr9hHTVnrXzrg)
* [阅读《知识产权正当性解释》：如何将法律、制度、经济和技术联系起来思考](https://1drv.ms/p/s!Arg2k_5HJFrbgfRGIjr9hHTVnrXzrg)
* [开源——数字时代伟大的权利让渡](https://1drv.ms/p/s!Arg2k_5HJFrbgfU7Ijr9hHTVnrXzrg)
* [2023年度总结与未来规划](https://1drv.ms/p/s!Arg2k_5HJFrbgfo9Ijr9hHTVnrXzrg)

### KCC 全国城市巡讲

获得开源社的差旅赞助和全方位支持，[开源全国九城巡讲](https://flxgeaiudp.feishu.cn/docx/ViindWgGiozy3exPGZucShexnAg?from=from_copylink)得以顺利完成。这里罗列一下我为这次巡讲所准备的演示文稿吧：

* [开源人画像：人类学视角](https://1drv.ms/p/s!Arg2k_5HJFrbgfFJIjr9hHTVnrXzrg)
* [《恶魔、角马与企鹅:自由和开放软件如何改变世界》](https://1drv.ms/p/s!Arg2k_5HJFrbgfFLIjr9hHTVnrXzrg)
* [揭开软件许可的神秘面纱：法律如何通过许可控制软件访问的](https://1drv.ms/b/s!Arg2k_5HJFrbgfJLQp8qNiN8SlQUow?e=h9gXoP)
* [商业开源的合理性解释](https://1drv.ms/p/s!Arg2k_5HJFrbgfIsIjr9hHTVnrXzrg)
* [音乐是怎样成为免费午餐的:一个行业的终结，世代的交替，盗版的零号病人](https://1drv.ms/p/s!Arg2k_5HJFrbgfIvIjr9hHTVnrXzrg)
* [Linus torvalds ：两次改变世界的工程师](https://1drv.ms/p/s!Arg2k_5HJFrbgfJJIjr9hHTVnrXzrg)
* [开源许可(Licensing)：软件自由和知识财产权法](https://1drv.ms/p/s!Arg2k_5HJFrbgfMcIjr9hHTVnrXzrg)
* [开源之商： 开源在软件市场的份额扩张之道](https://1drv.ms/p/s!Arg2k_5HJFrbgfNSIjr9hHTVnrXzrg)
* [《开源之史》——如何将开源放在经济和社会中思考](https://1drv.ms/p/s!Arg2k_5HJFrbgfJRIjr9hHTVnrXzrg)

输出是建立在更多的输入的基础之上的，我在两个月完成了看起来不可能完成的任务：2023.7～2023.9。

### 「开源之书·走进组织」

在思否Segmentfault和华为OSPO的赞助之下，「开源之书」尝试以企业定制的方式专门系统的进行开源文化的传播与知识的讲解。该项目要比想象中的艰难的多，走进大企业进行布道是相当艰难的事情，但是事情在于做，慢慢的来。

* [《开源之迷》作者谈开源之迷](https://1drv.ms/p/s!Arg2k_5HJFrbgegPIjr9hHTVnrXzrg)
* [《发现开源系列图书》创作者言](https://1drv.ms/p/s!Arg2k_5HJFrbgfAmIjr9hHTVnrXzrg)
* [《Linux和开源的商业与经济》](https://1drv.ms/p/s!Arg2k_5HJFrbgfFjaEDKmJi5WcjvCA)
* [企业开源正当时](https://1drv.ms/p/s!Arg2k_5HJFrbgfVBIjr9hHTVnrXzrg)
* [开源软件的商业化之路：市场形成的重要因素探析](https://1drv.ms/p/s!Arg2k_5HJFrbgfV1Ijr9hHTVnrXzrg)

相关的照片，请访问：[「开源之书·走进组织」现场直击](https://1drv.ms/f/s!Arg2k_5HJFrbgecIJD5V8M50XbJR5w?e=3KxdpI)。

### 「开源之声」文章合集

尝试做一次编者，那种从各类关注开源的写作者们寻找点点星火的感觉非常棒，我们都知道，每一位拥抱开源的人都有一些打动他们选择开源的坚实理由，能让他们描述出来这些理由是非常之大的挑战，直觉性的价值观、态度、对人性的理解，要远远大于现代人鼓吹的数字、工具理性等。

![](/images/kuosi-2023/voice-open-source-writer.jpg)

作为项目的一部分，我们隆重的举行了一次仪式。更多关于作者们的思考等，请访问项目地址：[开源文集项目介绍](https://osbook.club/posts/open-source-way-collection/)。

### OSPO Group && OSPO Summit

尝试创建个人组织：OSPO Group，买了域名，注册了GitHub 组织，这是一个巨大的挑战，OSPO Group 甚至连一次完整的会议都没有组织起来。好歹**First OSPO Summit** 成功的举办了，当然这是在筹备组所有成员共同努力的结果。

作为发起者，这是我今年非常自豪的成绩。活动照片，可访问：[照片直播丨OSPO Summit 2022](https://as.alltuu.com/album/1243624435/?from=link&menu=live)

### LFAPAC 开源布道者 && LFAPAC OSPO SIG

LFAPAC 开源布道者团队本身，在2023年就开了12次的会，基本上就是沟通，由于大部分布道者都忙于自己的本职工作，也没有任何的指导和管理任务。

相对LFAPAC OSPO SIG ，虽然没有刻意为之，但仍然作了很多事，更多详情，请参考：[LFAPAC OSPO SIG 2023 年报告](https://flxgeaiudp.feishu.cn/docx/SZdYdQLKAoZVO9xOIYncq7XtnUh?from=from_copylink)

### 其它

#### 《开源之迷》作者见面会

如果连自己都不认可自己的作品，那恐怕也不能指望有任何人认可了。本着这样一个思路，2023年尝试着和读者见面交流，但仅仅只做了一场活动。不能算失败，但是也说明了开源理论的小众特性。

![](/images/speech-for-sale-books.jpg)

#### 「开源之法与经济」

适兕在2023年最大的收获，就是学习了法律的重要作用，将「开源之法」小组转变为「开源之法与经济」小组，《知识产权正当性解释》[2]《所有权的终结》[3]以及以下关于开源许可的书籍都是让我重新转换视角理解开源的重要知识基础和背景：

* 《Open Source Licensing》[4]
* 《Intellectual Property and Open Source》[5]
* 《Understanding Open Source and Free Software Licensing》[6]
* 《商业开源》[7]
* 《The Software License Unveiled》[8]

#### 「开源之商」

商业是一个非常奇妙的事情，2019年之后，开源相关的项目遇投资者的冷，那么就又回到了2019年之前到那种难得被人关注的状态，那么关于开源项目如何商业化的探讨也就冷清了很多，Meetup并没有组织起来，甚至高质量的讨论都少了很多，毕竟正在创业的人们还是想将有限的精力用到MBA之类的高端课程上。

但是，缺乏了知识财产法的大前提，讨论具体的商业技巧，还是回归到了排他性/护城河的老路上了，毕竟这个深入人心。所以，「开源之商」小组的没落一点都不意外。

#### 「开源·文化」

毫无疑问，拥抱开源，需要积极实践开源文化、价值观、方法论，但是将这些抽象的内容整理出来，并探讨，其实距离实际的践行就产生了。「开源·文化」在异域中反观各类现象，记录并探讨。

「开源·文化」在COSCon‘23 成都的大会上设立了分论坛，并获得了一众分享者的支持，另外，「开源·文化」还成功协助民族大学范小青老师完成了对开源人的[采访项目](https://flxgeaiudp.feishu.cn/docx/NAaXdHarLov7ezxEnW0cvq9an5d?from=from_copylink)。

## 2023年总结之幻灯篇

人的大脑很奇特，漫长的时间里，回忆的时候只能是一帧一帧的画面，2023是忙碌的一年，是疲于奔命的一年，是重拾希望的一年，以下是「开源之道」·适兕的moment。

### 在Linux 基金会 APAC Leadership Summit上英文演讲

![](/images/kuosi-2023/kuosi-speech-in-lfapac-leadship-summit.jpg)

很难想象我会用英文去做一次演讲，聊聊自己以及过去两年所带领的LFAPAC 布道者团队，在 Maggie Cheung 等一干朋友的帮助下，我还是迎接了这次挑战，尽管花了很长的时间进行准备，但是仍然无法克服紧张，那种肚子疼的感觉又找到了。

### 成功发起了 First OSPO Summit

![](/images/kuosi-2023/ospo-group-member.jpg)

在OSPO Group的共同努力下，成功举办OSPO Summit。 对我个人来说，这是一个从想法到具体实现的全过程经历者，学习到的东西要远远多于自己所付出的。

### 入选《开源蓝皮书》开源杰出人物

[2023 中国开源发展蓝皮书](https://copu.gitcode.host/copu/2023/1/) 第264页，独立作者。

### 文章被《新程序员》约稿并刊登

[《新程序员005》](https://mall.csdn.net/item/100492) 期，编辑选取了《开源之史》中一篇文章：[开源的发展镶嵌在更大的文化背景之中](/posts/history-of-open-source/04-04-rethink-open-source-culture/)。

《开源之史》的创作远比想象中要慢许多。

### 《开源之迷》被信息周刊推荐

![](/images/kuosi-2023/digested-by-weekly.jpg)

代际更新永远是个问题，我们很难想象还有人在阅读传统纸媒，虽然少，但仍然有，就像书一样。《开源之迷》的传播已经远超我之想象。

### 人民邮电出版社优秀作者

![](/images/kuosi-2023/kuosi-is-a-good-writer.jpg)

异步社区没有说明我为啥会获得这份荣誉，极大可能是鼓励我继续写下去。毕竟书的销量是显然无法获得这个奖的。

### 开源全国巡讲被开源社认可

![](/images/kuosi-2023/emily-speech-at-kuosi.jpg)

两个月，九座城市，[开源巡讲](https://flxgeaiudp.feishu.cn/docx/ViindWgGiozy3exPGZucShexnAg?from=from_copylink)，对于个人来说，不仅是体力上的极限，也是智识上的极限，这九场演讲都是全新的准备，没有任何的重复。每场至少2小时。

完成意味着一种蜕变，对于开源的理解和演讲的认识，有了不一样的感受。

能获得 Emily 的认可是极为不易之事。

## 2024年「开源之道」·适兕规划

2024年，将恢复疫情前的平稳和聚焦，不能像2023年那样疯狂，报复般的分享和到处参加meetup，而是尽可能的减少抛头露面的，除非是被邀请和无法推辞。当然，作为开放原子开源基金会资深顾问，需要花更多的时间服务于该基金会，虽然我很想画一条明确的界线，但是，这将是非常困难的事，那么不妨结合起来。

### 组织研究

管理学的宗师：彼得·德鲁克，在撰写那么多管理书籍之前，是通用公司聘请的顾问，杰克韦尔奇赞助的，也成就了他一声的事业：全新的社会学研究，并归纳为“管理学”。开放原子开源基金会是难得一见的组织，它要完成的使命：推动开源生态在世界的发展，这是个特别值得关注的现象，有非常多的冲突、拧巴、知识误区、认知盲区等等。

作为一名被聘请的专职顾问，有义务和责任去为每一位成员服务，提供任何可能的帮助，当然，每一位其中的参与者都值得被记录、分析和研究。作为拥抱开源生态的倡导者，是有着深刻的历史意义的。

### 「开源之史」的写作继续

2024年的写作重点仍然是「开源之史」，开放原子开源基金会的员工大多没有任何的开源从业经验，或许提供一些历史知识，对于大家的工作开展有帮助，起码不能引起文化上的不适。每双周，和基金会的员工聊聊开源历史上的各种细节。在准备分享的过程中，进行著作的构思。

### 开源经济学12讲座

这是一个相对非常清晰的项目，就是通过回顾开源的历史，用经济学的方法来阐释开源的价值和意义，每个月一次。更多详情请参考项目提案和大纲以及讲义：[开源经济学12讲](/posts/open-source-economic/12-lectures-of-open-source/)。


### OSPO Group && OSPO Summit

OSPO Group 成立，至今成员们还没有一个正式的会面，连议程都没有提及，成员也不知道干什么，做什么。2024年争取组织召开一场会议，在寻求共识中前进。

第二届 OSPO Summit 筹备、进行及后面跟进，都是极为繁重的任务，仍然希望能够尽任何自己所能尽到力。

### 「OSCAR·开源之书·共读」

作为一个运转了5年的项目，该突破和变革的时候了，该项目将开启新的路线：「OSCAR·开源之书·重读」和「OSCAR·开源之书·突破」两个项目，前者面向开源世界，围绕阅读进行 meetup 活动，后者则倡导学习和分享，读书作为生活和工作的一部分，旨在突破和提高，解决一些开源实际中遇到的问题。

### 「开源之书」·走进组织

2023年进入了6家组织，没有完成预期中的每月一期，实践比预想中遇到的问题要多，例如在大型公司里组织到人本身就是非常大的挑战，更为麻烦的是，不是为大家带来非常实用的技巧，而是让人思考和作出选择，确实是非常难以让急躁不安的组织决策者接受的，2024年要继续改变策略，争取还能进入6家组织，完成使命。

### 作为熟悉的日常

* 「开源之道」文章撰写：学习新的表述方式，使用English等；
*  LFAPAC OSPO SIG Chair 主持工作：分享信息、召集 meetup；
* 「开源之法与经济」小组：组织一次meetup，倡导Copyleft思想；
* 「开源·文化」小组：在COSCon、开放原子大会等策划分论坛；
* 「开源之商」小组：日常讨论；

### 诚恳接受您的建议和反馈

[开源的思想市场](/posts/open-source-market/lets-talking-open-source-idea-market)并没有那么的宽广，需要融入现有的市场体系：短视、务实、守法和寻求确定性，不能指望任何的商业公司、学术组织、顶级智库、非营利组织都能够重视起这块，当然更加不能指望如今彷徨失措的教育系统，唯有寄托于每一为「开源之道」的读者，才可能有渺茫的希望。

思想和观念的市场很重要，但是其本身的生存空间在不断的缩小，从实用主义的角度而言，这是正常的，就是这个局面，那么显然「开源之道」·适兕需要广开言路，认真听取各类意见和建议，能够在可持续发展上不断的进取和尝试。

## 参考材料

1. 《软技能》，刘擎等，新星出版社，2023-6-9
2. 《知识产权正当性解释》，[美]罗伯特·P.莫杰思，商务印书馆，2023
3. 《所有权的终结：数字时代的财产保护》，[美] 亚伦·普赞诺斯基 / [美] 杰森·舒尔茨，北京大学出版社，2022-3
4. 《Open Source Licensing：Software Freedom and Intellectual Property Law》， Lawrence Rosen，Prentice Hall PTR，2004-07-22
5. 《Intellectual Property and Open Source：A Practical Guide to Protecting Code》，Van Lindberg，O'Reilly Media，2008-7-25
6. 《Understanding Open Source and Free Software Licensing》，Andrew M. St. Laurent， O'Reilly Media，2004-8
7. 《商业开源：开源软件许可实用指南》，【美】希瑟·米克（Heather Meeker），人民邮电出版社，2023-02
8. 《The Software License Unveiled：How Legislation by License Controls Software Access》，Phillips, Douglas E.，Oxford University Press，2009-6

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，开放原子开源基金会资深顾问，Linux基金会亚太区开源布道者（2022/2023年度团队主席）， 云计算开源产业联盟OSCAR（中国信息通信研究院发起)个人开源专家，OSPO Group 联合发起人。
