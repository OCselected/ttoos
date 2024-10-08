---
categories:
- 开源
- 历史
date: 2022-05-17T14:42:52+08:00
description: "起源，是解释任何事物的重要源头，作为一名现代数字人，每天都会和各式各样的软件打交道，但是除了同意之外别无选择，那么究竟同意了什么？动不动几十万字的法律文本肯定是看不了了，但是最原始最简单的文本，我们还是应该了解一下的。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之四/四：软件交易的需求——许可的诞生"
url: ""
authors:
- 「开源之道」·适兕
---

## 软件尚不存在的时代

在上世纪50、60年代，软件刚刚出现在各个研究所和学术论文中[1]，大多数时候，还不能存放在硬盘中，因为硬盘还没有被发明，而且懂计算机编程的人也极少，基本上是科学前沿的研究，所以程序在科研机构和高校学术圈内是默认“开放”共享的[2]，这些计算机同行们通力协作，保持着透明、分享和合作的精神。

然而，计算机从来没有停止过发展，硬件在不断的更新，软件也随之出现，并开始分离独立的功能。

## 软件许可的诞生

随着操作系统和编译器的进化，以及日益增长的对于计算机的应用，软件的需求和增速远远大于了硬件的增长速度，随着软件复杂度的提高，需要专业的人才和服务日渐高涨，尤其是售后当中，软件调试和维护的成本在不断上升，这样的话，就等于放开了软件开发商的巨大机会，围绕软件的商业迅速崛起。

IBM 作为那个年代最具创新能力的公司，在计算机领域的商业化中拨得头筹，那么软件在整个60年代都是随着硬件一起售卖的，直到一件事情的出现。

### IBM 面临的问题

在1956年，美国的司法部门就强制勒令IBM提供其租赁的硬件产品进行销售，并单独为其硬件维护和备件定价，此外还需要提供维护的信息给第三方提供商。

时间要回拨到1960年代，1964年 IBM 发布了 S/360 系列主机，新的兼容 S/360 系列的目标是让客户升级到更大的系统，而无需更换或修改其应用程序。不久之后，RCA 高调宣布了要生产兼容 S/360 的 Spectra 70系列主机 ， 也就是说在 S/360上运行的程序，可以完全运行在 Spectra 70上，这样的话，RCA 根本就不需负担开发应用程序的大量成本。要知道，这可是笔极大的费用。

这样的话，IBM 所面临的问题就是无法阻止 RCA 使用IBM开发的软件，这也就是说面对竞争对手，此时的IBM 是处于被动状态；时已家大业大的IBM正在面临反垄断的诉讼，并且在之后的1969年1月17日，正式被美国政府提起 IBM 反垄断诉讼，美国政府指控捆绑软件是反竞争的[3]。

但是事情总是有办法的，于是在1966年12月成立了一个任务组[4]，并决定采用许可的手段来解决。

### 开拓新市场

无论是迫于形势，还是主动出击， IBM 还是在1969年底做了一个计算机历史上非常重要的决定：解绑（**unbundled**）[5]——将服务和软件从硬件中剥离出来进行销售。

软件和硬件有着本质上的不同：复制的成本为零，但是开发却昂贵无比，一次复制可以运行到无数台机器，面对这样一个全新的知识产品，该如何售卖？其实所有人都没有想好，但是大家都知道价值非凡，只有创新者才能找到机会。

另外，还有一个问题，那就是软件的销售部分，要如何防止竞争对手？这个只有法律能够做到，就像以往保护人们的知识产品一样，只是在细则上可能需要更多的思考。

### 世间第一份软件许可诞生

时任 IBM 系统和应用工程总监的 Watts S. Humphrey [6] (软件质量之父) ，奉命领导开发了软件许可，后来有学者验证，这是历史上第一份软件许可 [7]（见下图）

![](https://www.create.ac.uk/wp-content/uploads/2018/11/Software-Agreement-Screen-Shot-221x300.png)

我们可以清晰的看到：这是一份合同，需要销售方和客户同时签署才能生效。软件也尚未成为商品（名称上叫做Program product），这是一种为解除绑定了而做的保护措施，显然当时并没有针对软件的任何法律存在。接下来我们就这份许可进行一番解读。

## 许可内容的细节

合同的正文中，除了规定月度收取费用，以及许可安装之外，特别值得注意的是关于“编程服务”项，这确实说明了当时没有使用软件这个名词，而并未走出计算机整体这个思路，编程的服务区分了三大类别：

* 问题修复
* 修复问题的收费
* 收费编写新的需求

我们重点关注一下，许可的授权：

> 在本合同下的程序，客户不得复制任何程序，印刷材料的其他副本可以从 IBM 获得许可，但需收取当时有效的费用。
>
> 客户不可以给其它任何人或单位提供包括但不限于源代码、逻辑图、流程图的内容。
>
> 关于专利的声明。

合同的底部是关于编程产品的清单，以及IBM和客户双方的签字等内容。

正如 Watts S. Humphrey 所言[8]：

> “While we thought that cryptography might be technically feasible, particularly with special hardware assists, every approach we could think of would have made it difficult for reputable customers to use our programs. Large businesses often needed backup copies, programs were frequently moved among machines, and IBM encouraged upgrading to larger systems. With cryptography, these activities would all require IBM permission. We felt that this would be impractical and inconvenient for users and expensive for IBM. We also concluded that any single-machine locks and keys, or special time-out and self-destruct programs, would be onerous to our best customers and not effective against clever thieves. Because we could not devise practical physical security measures, we had to rely on the
inherent honesty of our customers. Our hope was that legal protection and criminal prosecution would limit the piracy problem.”

最终还是选择法律手段作为开拓新市场的基石，而不是加密技术～ 这是个值得深思的问题。它的影响非常之深远。

## 小结

软件的发展超出了那个时代所有人的意料，不得不说可编程是一次伟大的进步，在和硬件松绑可以独立授权和销售之后，软件开始有了大量的商业机会，大量的中小型公司开始涌现[9]，其中就有微软这样日后的巨头公司。

但是，这仍然有很多的争议，例如这份双方签署的合同没有涉及再分发等等，那么需要立法。这就是我们在接下来的一节，来探究一下美国的软件著作权法以及专利等知识财产权的早期立法情况。

无可置疑的是，就是这份创新性的软件许可，从此IBM重塑了软件的市场，也改变了自己的模式，以服务为主从此成为了重要的营收来源。

## 参考资料

1. https://en.wikipedia.org/wiki/Software#History ，最后访问时间：2022-05-27
2. https://onlinelibrary.wiley.com/doi/10.1111/jwip.12114 ，最后访问时间：2022-05-27
3. https://en.wikipedia.org/wiki/History_of_free_and_open-source_software#Sharing_techniques_before_software ，最后访问时间：2022-05-27
4.  Watts S. Humphrey, Software unbundling: a personal perspective,  2002
5. https://www.ibm.com/ibm/history/history/decade_1960.html ，最后访问：2022-05-07
6. https://en.wikipedia.org/wiki/Watts_Humphrey ，最后访问时间：2022-05-27
7. https://www.create.ac.uk/blog/2018/11/14/the-first-software-licensing-agreement-and-its-relationship-with-copyright-law/ ，最后访问时间：2022-05-06
8. 《The Rise of Open Source Licensing:A Challenge to the Use of Intellectual Property in the Software Industry》，Mikko Valimaki，Turre Publishing，2005-05
9. https://en.wikipedia.org/wiki/History_of_software ，最后访问时间：2022-05-27

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
