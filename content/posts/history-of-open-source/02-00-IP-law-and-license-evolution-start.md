---
categories:
- 开源
- 历史
date: 2022-05-16T15:05:48+08:00
description: "伟大的卢梭说「人生而自由，却无往不在枷锁之中。」软件亦是如此，为共享和协作而生的代码，最终被各种势力所禁锢，也有人不断的试图向挣脱，于是一场场残酷的斗争上演了，尽管不是暴力那样的流血，但是紧张和压迫却让人有点透不过气来，除非能够跳出来做个旁观者。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之一/四：被迫的反击——捍卫开源知识财产的历程"
url: ""
authors:
- 「开源之道」·适兕
---

## 从几则故事说起

叙述故事，或许是最为让人感同身受，能有直观感受的一种方式。让我们进入历史的隧道，用幻灯的方式寻找几个案例来看看。

### 那个改变世界的打印机的故事

1970年代，施乐公司发明了复印机，也生产打印机，如日中天的施乐也不忘在高校中做点事情，毕竟在学校中宣传自己的产品，影响年轻人是非常划算的事情，其中一台就放在了MIT 人工智能实验室，施乐提供全方位的服务，如果打印机坏了，他们会派专业的人员修复，无论是硬件故障，还是软件缺陷。但是作为Hacker 的诞生之地 [1]，软件是以源代码共享的，是自由流动和交换的，这个矛盾换个地方可能就不会发生。

果不其然，一天，27岁的程序员 Richard Stallman 打印了一些内容 [2]，遭遇了卡纸，于是想和施乐要下源代码修复一下，至少卡的时候，给人发个通知啥的。结果遭到了同事的拒绝，稍后也遭到了施乐的老同行的拒绝，这位对自由看得无比重要的人，意识到了问题的严重性！ 这是剥夺人们的软件自由！

Richard Stallman 后来屡次提及这次事件给他的影响，是因为人们破坏了他参与的早期的代码共享共同体——自由至上，被剥夺的滋味并不好受，为了自由，必须站出来捍卫它。

### Elastic 向 AWS 宣战：更改许可

Elastic 是一家做搜索分析的商业公司，旗舰产品叫做Elastic Search ，是基于开源项目，使用Apache 许可2.0方式，十多年来积累了很多用户，云计算时代来临，和往常一样，发行版有很多，其中巨头AWS也发布了基于开源项目的发行版 [3]：

![](https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/bltc3e3a971d3b695d3/6006e46a0069f70f7771dab5/amazon-cto-tweet-license-change.jpg)

这背后的抱怨是AWS 坐收渔利，而参与项目的开发则很少。但是AWS 并不甘示弱，在Elastic 更改了许可之后，选择了对抗式的fork——发起了OpenSearch项目[4]：**SSPL 许可证不是开源的，不会为用户提供同样的自由。** 

在利益面前，都有自己的理由，分道扬镳，彻底对抗。

### SCO 诉 IBM：Linux 侵犯了Unix的专利？

![](https://cerebrux.files.wordpress.com/2016/02/sco-ibm.jpg)

2021 年 8 月 30 日 ，SCO诉IBM案历时18年终以1425万美元和解[5]， 这个案子拖的时间太久太长了，SCO都破产了。甚至都淡出了人们的视野，当年究竟发生了什么？ 为什么IBM 支持Linux 竟然被诉讼？是谁害怕Linux的发展壮大？

笔者看到了SCO的索赔数字，被吓到了：**50 亿美元**！ 简直是天文数字啊！ 

### 呐昵？开源项目被专利流氓勒索

![](https://itsfoss.com/wp-content/uploads/2019/09/patent-troll-attacks-gnome-foundation.png)

Gnome 作为一款友好的自由开源软件桌面程序，备受开发者青睐和喜爱，也是Linux 发行版中支持的主要的桌面，GNOME 基金会还是收到了来自 Rothschild Patent Imaging (RPI) 的诉讼，指控其涉嫌侵犯有关图像无线分发的专利[6]。

Gnome 基金会获得很多来自开源界的帮助，尽管战胜了这场胜利，[7] [8] 但是也让人心有余悸，不仅浪费了大量的时间和精力，甚至还产生了负面影响。感觉非常的不爽，有点儿被恶心到的感觉。

......

>  没有任何东西像财产权这样，能如此广泛地激发人类的想象力并吸引人类的激情。     
>
> ​     ——【英】威廉·布莱克斯通

类似的故事，过去发生了很多，充满了戏剧性与现实的张力。如果看管采用法律的思考方式的话，环顾四周，仍然能看到这种弥漫着硝烟的财产保护与破坏的角逐。

在接下来的几个小节里，请各位看官和笔者一起，从表象到本质，让我们深度挖掘这些角逐、争斗案例的背后，看看历史上的开源世界前辈们是如何使用自己的智慧来保护自我的，当然，我们也尝试从侵犯者的视角来捋一捋哪些转折点——关键事件的发生。

## 永无休止的斗争与妥协

知识财产权引发了许多激烈的争论，而且这种争论似乎永远也不会结束。经济学家John McMillan如此说道[9]：

> 其原因在于，不论采取怎样的行动，都难免有不足之处。支持严格保护知识财产权的人认为：“弱化知识财产权就意味着减少创新。”他们是对的。而反对者则认为：“过分强化知识产权的保护会排斥某些用户，从而降低知识创新产品的总体价值。”他们说的也有道理。

隔离起来收费[10]，是最为常见的一种商业手段，这就是剧场、戏院、电影院、马戏团、以及现代迪斯尼游乐园的做法，只有购买了门票，才能享受其中提供的服务、设施，在知识的产品和服务中，软件也走了这样的老路：授权用户，禁止拷贝、分发，以及禁止获得源码学习。哪里有压迫，哪里就有反抗。于是一场场此消彼长的争斗便启动了，和人类历史上所有的事情一样，不同的人有不同的看法和价值观，人们为不同的见识而抗争和压迫，从未停歇。

在短短的的开源历史，这也不可避免，为了应对局面，开源世界的人们除了做好软件项目、构建共同体之外还要在法律上不断的进行抗争：

* 认清现实世界的法律和规定
* 为了应对不同的著作权局面，开发出不同的许可
* 为了应对专利的问题，进行社会创新和改进
* 为了应对更为复杂的数字世界，进行法律游说
* 抵抗专利流氓而团结一致

但是利益集团从未远离，开源并非一片净土和与世无争之地，但凡有可能被认为威胁到利益的减少，就会使用各种手段来进行打压：

* 利用媒体，污名化开源，FUD策略使用尤其娴熟
* 捆绑组合产品，进行各种围剿开源
* 雇佣专门的法律团体，游说国会立法
* 重塑许可，寻找可乘之机，和现有的商业整合

## 参考材料

1. 《黑客：计算机革命的英雄》，[[美\] Steven Levy](https://book.douban.com/author/646670)，[机械工业出版社](https://book.douban.com/press/2793)，2011-10-31
2. 《若为自由故：自由软件之父理查德·斯托曼传》，[人民邮电出版社](https://book.douban.com/press/2609)，[[美\] Sam Williams](https://book.douban.com/search/Sam Williams)，2015-4
3.  Amazon：完全不能接受 — 为什么我们必须变更 Elastic 许可协议 ：  https://www.elastic.co/cn/blog/why-license-change-aws ，最后访问时间：2022-05-16
4.  https://aws.amazon.com/cn/opensearch-service/the-elk-stack/what-is-opensearch/ ，最后访问时间：2022-05-17
5. https://www.zdnet.com/article/after-almost-20-years-the-sco-vs-ibm-lawsuit-may-finally-be-ending/ ，最后访问时间：2022-05-17
6. https://www.zdnet.com/article/gnome-faces-baseless-lawsuit-from-patent-troll/ ，最后访问时间：2022-05-16
7.  https://blog.opensource.org/gnome-patent-troll-stripped-of-patent-rights/ ，最后访问时间：2022-05-16
8.  https://foundation.gnome.org/2020/05/20/patent-case-against-gnome-resolved/ ，最后访问时间：2022-05-16
9. 《重新发现市场：一部市场的自然史》，John McMillan，中信出版社，2014-02
10. 《经济解释（二O一九增订版）》第一卷：科学说需求，张五常，中信出版社，2019-8-31

## 关于作者

![](/public/kuosi-face-of-os.png) 适兕，「发现开源三部曲」（《开源之迷》已出，《开源之道》《开源之思》撰写中。）作者，**「开源之道：致力于开源相关思想、知识和价值的探究」**主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。