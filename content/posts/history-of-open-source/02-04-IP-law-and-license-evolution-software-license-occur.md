---
categories:
- 开源
- 历史
date: 2022-05-17T14:50:16+08:00
description: ""
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之"
url: ""
authors:
- 「开源之道」·适兕
draft: 
- true
---

## 学术许可：来自科学共同体的产物

在科学共同体之内[]，对于著作权有着完全不同的解释，科学家们更加在意的是谁首先发表的，因为科学家们大多是受到政府或基金的支持的，并不在意商业化，计算机科学界在开始的时候也继承了这一点，在彼此分享代码的时候，这是一个默认的行为，就像自己的预览论文被同行阅读一样，是非常受欢迎的，例如Unix的源代码在上世纪70年代，都是没有任何的许可或规则遵循的，大家只是在彼此学习、改进，不过很可惜的是，那个时候并没有一个形容这种现象的词汇[]。

### 从无到有：史上第一个开源许可 BSD 的出现

在充满传奇色彩的贝尔实验室发明的Unix操作系统[]，是具有划时代意义的技术设计和实现，宽松的环境，给予研究人员最大的自由度，不仅发布学术论文，还到高校交流，并分享源代码并改进。在1973年，加州大学伯克利分校 Bob Fabry 教授就在倾听 Ken Thompson和 Dennis Ritchie 发表的论文时获得了一份Unix的拷贝，随后安装在了学校的PDP-11/45上，供计算机系、数学系和统计系的教授和学生们使用。在1975年，Ken Thompson回到伯克利分校做访问教授，这个秋天，还有两名当时还是初出茅庐的研究生：Bill Joy 和 Chuck Haley，两个人在Ken Thompson指导下，将Pascal 移植到了新开发的系统上，在1976年夏末，Ken Thompson 结束了其访问教授的工作，然而Bill Joy 和 Chuck Haley 开始对Unix的内核有了更深的兴趣，在另外一位教授 Schriebman 悉心指导下，他们将来自贝尔实验室的经过了“50次变化”磁带的修正和改进部分第一次成功地安装到了系统上。**他们认真地研究了源代码，并建议完成几处小的改进，以在某种程度上解决内核瓶颈的问题。**

到1977年初，Bill Joy 完成了第一个“Berkeley Software Distribution”的版本，并发布了大约三十个拷贝，这等于在伯克利发生了一个Unix的独立发展分支，此后伯克利并没有停止，而是不断的加入新的特性和功能，而且还不断的得到其它大学和科研机构的认可，随着版本的发布，拷贝也越来越多，甚至在1979年还获得DARPA的订单，加入了独特的网络支持，如TCP/IP栈。

到1980年十月，推出了一个焕然一新的发行版本，称为4BSD，其中包括Pascal编译器、Franz Lisp 系统、以及一个增强的邮件处理系统，**最主要的是 Bob Fabry 和AT&T 以及加州大学的律师合作制定了所有人都能接受的正式版本的条款**，这就是BSD许可正式的出现，并被集成到这个版本，在其9个月的生命周期中，差不多发行了150份拷贝，版权控制是以大学为单位的，而不是以每台机器为基础来计算，因此以当时的情况，粗略估算，该发行版在近500台机器上运行。[]

BSD 许可也是极为简单的，极具学术气质的许可，另外 BSD 既是一种许可证，又是一类许可证（通常称为 BSD-like）。修改后的 BSD 许可证（今天广泛使用）与最初用于 Unix 的 BSD 版本的许可证非常相似。仅要求所有代码如果以源代码格式重新分发，则保留 BSD 许可证通知，或者如果以二进制格式重新分发，则复制该通知。BSD 不要求衍生版本必须再次开源。[] []

### MIT 的出现与发展

1983年的MIT 计算机科学实验室旗下的 计算系统研究（Computer Systems Research (CSR)组开发出了一些重要的网络软件，如在Xerox Alto 实现的TCP/IP 栈的 BCPL、以及在IBM PC上的PC/IP 、路由实现External Gateway Protocol (EGP)等，当时面临的问题是，索要软件的人不仅有来自研究机构，还有来自商业公司，本来原本是随意拿的，但是国会和美国版权局要求在软件及其文档上附加版权声明的选项。于是几位MIT的软件作者和律师讨论了一个简单的许可，当年的邮件截图[]

![](/Users/lee/developing/ttoos/content/posts/history-of-open-source/posts/history-of-open-source/medias/mit-license-draft.png )

在1984年2月1日正式的写进 PC/IP源码中 include.h  中，这就是世界上第一份 MIT 许可，紧随其后，MIT 另外一个重量级项目 X Window系统，也采用这个协议，并正式在1986年2月在版本10中采用：

![](/Users/lee/developing/ttoos/content/posts/history-of-open-source/posts/history-of-open-source/medias/mit-license-second-for-x-window.png)

早期采用的还有MIT的另外一个重大项目：Kerberos， 一个应用极为广泛的认证系统。后来有更多采用MIT许可的项目，笔者就按此不表。

### 学术型许可的特点

有一些法律学者使用“宽松”来形容学术型许可，也就是说学术型许可，基本不会对接受许可方有任何的要求，即使有要求也很低，比如保留声明、承认使用了代码等，来自科学共同体的精神：无私利性决定了学术型许可的普惠特性，哪怕是商业上的使用，也不会有多余的要求。

## 参考资料

1. http://www.linfo.org/bsdlicense.html ，最后访问时间：2022-04-22
2. https://en.wikipedia.org/wiki/BSD_licenses ，最后访问时间：2022-05-10

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
