---
categories:
- 开源
- 历史
date: 2022-07-27T13:59:40+08:00
description: "我们无法脱离计算机程序而大谈特谈开放源代码，至少不应该偏离太远，正如『开源之道』主创适兕经常举的例子一样，用文言文到白话文的比喻，也是和语言有关。我们的这个大章节是讨论关于程序开发的协作的，万变不离其宗，或许我们需要转换完全不同的视角来看这个。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之四/八：从文本差异补丁到分布式版本控制"
url: ""
authors:
- 「开源之道」·适兕
---

> The "source code" for a work means the preferred form of the work for making modifications to it.
>       ——— "The GNU General Public License v3.0"

## 重新认识源代码

`hello,world!` 是所有计算机语言教学的经典表述，我们都知道他是来自经典的计算机科普专家Brian Kernighan 的在《C语言编程》[1]这本书的表述：

```
main() {
    printf ("Hello,World!");
}
```

但这并不是人们日常使用计算机所能看到的，这是针对开发者的语言，由编译器处理之后交给计算机来运行的文本，我们通常称之为“源代码”[2]。

源代码就是计算机工程师们为计算机撰写的指令，实现我们日常用计算机来处理的事务，撇开具体的事物，撰写源代码的过程，和作家撰写文章没有任何的差别[3]，或者说任何利用符号来进行表述的创作者没有什么不同：

* 不断的进行变更；
* 长时间的增加
* 有可能回去修改过去一年的代码，也有可能修改昨天刚刚写的；
* 修改错误的语法、逻辑等
* 实现新的功能；

随着时间的累积，一定会超过人类记忆的限制，改变文本/源代码本身也将变得成为人的负担，那么计算机的主要功能：存储，恰是发挥这些最好的地方。累积的另外一个结果就是计算机可以处理更为复杂的事物，那么就需要撰写更多的代码，也需要更多的人参与，大型的项目，或者某个组织下的多个项目，那么只有分模块才能解决这样的问题，于是“codebase”[4]这样的工程构建也开始进入了视野。

## 文本的差异与补丁

开源的核心就是代码的修改与合并，其中的`diff`和`patch`[5]是这个思想的核心，

## 永久存储技术的发展——版本控制系统的出现



## 分布式版本控制系统




## 参考资料

1.  《C程序设计语言》，（美）Brian W. Kernighan / （美）Dennis M. Ritchie， 机械工业出版社，2004-1
2. https://en.wikipedia.org/wiki/Source_code ，最后访问时间：2024.5.7
3. Rochkind, Marc J. (December 1975), "The Source Code Control System" (PDF), IEEE Transactions on Software Engineering, vol. SE-1, no. 4, pp. 364–370,
4. https://en.wikipedia.org/wiki/Codebase ，最后访问时间：2024.5.7
5. 《开源之迷》，适兕，人民邮电出版社，2022-3
6. 


## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出版，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
