---
categories:
- 开源
- 感悟
date: 2019-09-18T15:29:06+08:00
description: "这是一篇来自KeyDB的短文，逻辑混乱而缺乏历史知识，但是它似乎讲出了某些不为人知的道理，最起码作者经过了较为理智的分析。一篇可看可不看的文章，不疼不痒。"
keywords:
- Open Source
- Culture
tags:
- 开源文化
title: "威胁开放源代码的实力依旧强大 ———— 让我们聊聊开源的死里逃生史"
draft: true
url: ""
---

原文链接：[A Brief History of Existential Threats to Open Source](https://docs.keydb.dev/blog/2019/03/11/blog-post/)  作者：KeyDB 技术支持

> 一个问题处理好了，另外一个问题产生了，思维是一直活跃着的。
>           ———— 约翰.杜威 《确定性的寻求.方法至上》

开源从来就没有远离过威胁它本身的力量，近期`keyDB`的官方博客发表了一篇文章，算是为开放源代码的世界打一剂强心针，以下为该文的摘要：

时间是一往无前的，但是发生在过去的事件是无法抹去的，大概历史只有在这一点上才算是公平的。20年前的万圣节，一份称之为备忘录的文件从微软内部流出，称Linux是构成Windows的威胁力量，甚至时任CEO的Steve Ballmer一度称Linux为“cancer（一种致命的绝症。编者注）”，但是微软还不是对开源的最大威胁，除了开发者之外，其实它在当时并没有影响微软的生意。其实更为严重的是内部的处理，君不见一场激烈的争论，就可能引起混乱，进而破坏社区，乃至整个项目，（BSD 系统的分裂史是佐证这个论断的最佳材料。编者注），有几个问题，至今可能也是困扰人们的：

* 那些修改开源代码的人是否应该严格执行GPL许可证？
* 或者是将修改后的代码视为自己的专有财产？

争论进一步延续到开发者的自由，还是用户的自由，以自由软件基金会为代表的一派，以Apache基金会为代表的一派，以及以MIT、BSD为代表的更宽松派.......开源从来就没有形成过统一的战线，这或许是它失败的主要原因，正如微软所希望的那样。

就在没有人看好开源的时候，红帽出现了，以非常独特的方式：**软件本身是免费的，但是为用户提供服务和支持，进而获得利润**。在这样的商业模式之下，许可证的选择在很大程度上是无关紧要的，因为代码（以及代码编译后的软件）并没有产生收入。这样的话，就让上面的辩论无语了，它们原来是可以和平共处的，如BSD许可下的软件运行在GPL的linux内核和GNU用户空间是非常和谐的，它似乎真的变成了Richard Stallman所形容的"像免费的啤酒一样"，这可能完全超出了他和他创立的 FSF（自由软件基金会）的想象，红帽的崛起，让那些预言开源没有前途的人大感意外，甚至，红帽在服务器操作系统所取得的成绩在节节攀升的时候，微软在服务器领域却乏善可陈。

![](https://media.licdn.com/dms/image/C5612AQHHp9B9Y3hBzw/article-inline_image-shrink_1000_1488/0?e=1566432000&v=beta&t=vdnSlropNFHgw_2_lMS0wkxH0Zv6bnkR8MmcHk999KM)

> 完成一个目标，有发现前方的另一个目标。这是一场永无止境的追寻。
>          ———— 爱德华.威尔逊 《创造的本源》

但是故事并没有在这里结束，准确的说才刚刚开始。红帽的崛起的时代，还是每个人都购买服务器、安装操作系统、部署应用到自己的数据中心的时代，但是，技术从未停止它发展的脚步，Amazon 看到这其中巨大的商机，那就是不是所有人都愿意摆置自己的数据中心，维护服务器、操作系统应该交给更为专业的人来做，Amazon会管理人们的一切，从部署到运行的数据库，这样人们甚至都毋需购买其它供应商的产品，Amazon 可以提供一条龙的所有服务。

## 挑战者的出现

就在这个时候，红帽获得了另外一次垂青，IBM 以高达$340亿美元收购了它，然而，其它的那些相对小型的公司却没有这么的幸运，没有一个靠谱的商业模式，投资者们是不会搭理他们的，很多公司都希望坚持开源的底线，并尝试拿开源的许可证来开刀，比如MongoDB就发明了“服务器端公共许可证”，但是这么做，并没有获得大部分的支持，正如开放源代码促进会就并不认可类似的许可证，社区成员也强烈的地址（Fedora、Homebrew等著名分发版，均将MongoDB移除。--编者注），也就是说，修改许可证的做法，是无效的。

还有一些更为极端的公司，采取的是放弃走开源的路线，他们和开源唯一的瓜葛就是还能访问他们的代码，这可能是对开源的一种致敬方式。一些诸如“源代码可见”、“开放核心”的许可证当然也会被采用，期望成为授权模式的救命稻草，当然这离Richard Stallman所倡导的自由又远了几步，比如说其中的:"用户有权'运行，复制，分发，研究，更改和改进软件'"，这么做的话，就只能到学习为止。

## 一个不太可能的救主

就在看起来开源要走向毁灭的时候，Amazon 竟然抛出了另外的一种可能，如果说哪家开源软件背后的公司或实体不再保持开放，亚马逊自己接管并来维护它。Amazon在3月19号发布了[ElasticSearch 的开放版](https://aws.amazon.com/blogs/opensource/keeping-open-source-open-open-distro-for-elasticsearch/)，语气非常的居高临下，如："开源项目的维护者 **有责任** 保持源代码分发对所有人开放，而不是在中途改变规则"。（粗体是作者故意强调），大体一看似乎是开源还是颇有希望的。

但Amazon的这个做法是让人喜忧参半的，我们不妨想一下，加入某位软件的作者开源了一款新的项目，如果成长的足够快，且壮大起来，被Amazon发现了，Amazon就会接管它。那么这位作者还会去开发这款软件吗？而且Amazon这么做本身也是有很大问题的，如果Amazon在软件的运行和支持方面实现了垄断，他们是否还会以外部贡献的方式来获得开源的益处吗？要知道，对于每一位红帽的客户来说，他们是对其所运行的软件的上游项目是没有任何的支持和贡献的，那么问题来了，如果一家公司将所有的业务都外包给了Amazon，这种动态会持续下去吗？

## 无法确定的未来

开源对于普罗大众来说以为着解放，然而在很长一段时间，人们似乎对它的存在已经习以为常，将之视为理所当然和天经地义，哪位曾经是翩翩少年的芬兰大学生某种程度上打破了微软对操作系统的垄断，但是现实的情况是，微软现在也学会了开源的做法，并身体力行。其实过去的十年说明了一件事：如果你没有托管客户的基础设施，那么你也不会去支持客户所使用的开源软件。哪怕这些软件是你自己写的。AWS、Azure等等云计算厂商拥抱开源的做法，让事情变得越发的朴树迷离，难以捉摸。

无论怎样，有一件事我们是可以确定的，我们现在所处的世界，要比上世界微软垄断的时代好很多了，起码还有一些选择。作为开发者的你，就是拥抱云计算，然后在这之上进一步拥抱开源。
