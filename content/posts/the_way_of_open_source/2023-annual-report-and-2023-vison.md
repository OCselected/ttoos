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

以及在开源之路上帮助和支持我的朋友和同事、同行们：

* 孙振华
* 郁志强
* 郭雪
* 朱其罡
* 赵海玲
* 刘洁
* Keith Chan
* 王哲
* 杨振涛
* 薛植远
* Bruce Perens
* 王厚
* 淮景阳
* 朱中华
* 江波
* 庄表伟
* 郭旭东
* 杨东杰
* Maggie Cheung
* 陈阳
* 马乐
* 边思康
* 杨轩
* 


## 2023年总结之项目篇

「开源之道」是一系列的项目，它不是指一篇文章，也不是指一场活动，更加不是一次策划，或者是一次布道，它是所有行动的集合。

### 「开源之史」的写作

撰写历史是艰难的，虽然是公开透明有记录的开源的历史，并不是说罗列开源的事件有多么困难，而是说要从中找到一定的逻辑和叙事是困难的。

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



### LFAPAC 开源布道者 && LFAPAC OSPO SIG

LFAPAC 开源布道者团队本身，在2023年就开了12次的会，基本上就是沟通，由于大部分布道者都忙于自己的本职工作，也没有任何的指导和管理任务。

相对LFAPAC OSPO SIG ，虽然没有刻意为之，但仍然作了很多事，更多详情，请参考：[LFAPAC OSPO SIG 2023 年报告](https://flxgeaiudp.feishu.cn/docx/SZdYdQLKAoZVO9xOIYncq7XtnUh?from=from_copylink)

### 其它

#### 《开源之迷》作者见面会

如果连自己都不认可自己的作品，那恐怕也不能指望有任何人认可了。本着这样一个思路，2023年尝试着和读者见面交流，但仅仅只做了一场活动。不能算失败，但是也说明了开源理论的小众特性。

#### 「开源之法与经济」



#### 「开源之商」


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

2024年，将恢复疫情前的平稳和聚焦，不能像2023年那样疯狂，报复般的分享和到处参加meetup，而是尽可能的减少抛头露面的，除非是被邀请和无法推辞。

### 「开源之史」的写作继续



### 开源经济学12讲座

这是一个相对非常清晰的项目，就是通过回顾开源的历史，用经济学的方法来阐释开源的价值和意义，每个月一次。更多详情请参考项目提案和大纲以及讲义：[开源经济学12讲](/posts/open-source-economic/12-lectures-of-open-source/)。


### 诚恳接受您的建议和反馈

[开源的思想市场]()并没有那么的宽广，需要融入现有的市场体系：短视、务实、守法和寻求确定性，不能指望任何的商业公司、学术组织、顶级智库、非营利组织都能够重视起这块，当然更加不能指望如今彷徨失措的教育系统，唯有寄托于每一为「开源之道」的读者，才可能有渺茫的希望。

思想和观念的市场很重要，但是其本身的生存空间在不断的缩小，从实用主义的角度而言，这是正常的，就是这个局面，那么显然「开源之道」·适兕需要广开言路，认真听取各类意见和建议，能够在可持续发展上不断的进取和尝试。

## 参考材料

1. 《软技能》，刘擎等，新星出版社，2023-6-9

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，开放原子开源基金会资深顾问，Linux基金会亚太区开源布道者（2022/2023年度团队主席）， 云计算开源产业联盟OSCAR（中国信息通信研究院发起)个人开源专家，OSPO Group 联合发起人。
