---
categories:
- 开源
- 感悟
date: 2021-11-20T09:38:00+08:00
description: "多样性是生物进化的重要准则，很多学者也从文化上证明了这一点，我们很难讲那种文明更先进，更多是求同存异，寻求彼此合作的机会，软件许可亦属于文化的一部分，要么全开要么全闭的方式显然并不能满足所有人，本文就试图按照分类来和大家谈谈各有所需。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 软件许可
- 开源之道
title: "从软件许可的分类理解开源许可的魅力：比较视野"
url: ""
authors:
- 开源之道
---

## 最简单的比较思维

笔者印象最为深刻的比较，来自于《黑客与画家》[1]这本书，Paul 在其中一篇文章中说，我们不仅仅局限于自己的周围来进行观察和对比，而应该利用时间与空间，以及时空的交叉，也就是说，在我们所处的地方，顺着时间追溯前人、古人，他们在思考什么？做什么？如何解决问题。然后就是在现在所处的时间，看看其他地方的人在做什么，想什么，如何解决问题，比如北京、硅谷、以色列等，当然更为复杂的就是，跳跃到某个时间或旅居到某个地方，将上述两种方法来混合。

如果你读到这篇文章，不妨试试这样的比较。

## 关于是否规制的两种哲学

在人性本身，从古至今，我们并没有达成一致的意见，中国古代有性恶、性善之争，欧美同样也是争论了几个世纪[2]：

> Thomas Hobbes 在他的经典著作《利维坦》中便提出，我们人类生来就是残忍的。因此，只有通过强化法律以及社会秩序，我们才能够遏制Hobbes所讲的人类攻击的本性。相反，让·雅各·卢梭则提出了高尚的原始人的观点，他主张人类生来本是一种善良的动物，正是社会约束使我们变得敌对和攻击。

非黑即白是一种二元对立的思维方式，也是最简单的分类法，在我们日常工作和生活中非常的常见。对于软件的许可分类也遵从着类似的哲学。

## 软件许可中的两个极端

在软件最初刚刚诞生的时候，人们并没有讲软件和代码特别的定义为什么类型，任何人都可以学习、修改、重新分发，大部分作者也不在意署名啥的，简而言之，和人类发明的任何新事物一样，最初并没有那么多的界定，也就是说这个时候的软件处于公共领域[3]，打个类比，莎士比亚的作品就是公共领域的作品，全人类都可以享用，即使出版也不需要经过任何人的允许。

处于公共领域的软件，该软件绝对没有版权、商标或专利等所有权。公共领域的软件可以被修改、分发或出售。具体的项目大家可以参考SQLite[4]，这个非常流行的项目，它几乎存在于我们日常使用的任何设备中。

![](https://www.shutterbug.com/images/2011_bb_seeing1.jpg)

在另外一个极端，则是现代的以商业秘密为外在表现的软件服务，归类于此种方式的软件，是具有非常强的严格的秘密性，人们几乎从外部无法获得任何信息，只有所使用的功能对外发布，这些软件采用人类社会常见的方式：大型的坚固的建筑物，相当的安保，严格审核的工作人员来进行保密工作，我们对此类软件的内部所知甚少。云计算时代的服务，就属于此类极端方式。

在此之间的我们会在下一节内容来阐述，处于此两个极端之外的软件，即没有申明任何许可的软件或代码不属于我们能够理解的范围，从法理的角度讲，这不应该在市场上流通。

## 那些算是折衷方案

有了极端的对比，我们再来看其它的软件许可，就更加的清晰明了，心里也有了一定的准绳，往那个极端偏一点，及时矫正即可。

### 离公共领域较近的

理解这个最好的案例是万维网的发明者蒂姆·伯纳斯·李在当年的考量[5]，究竟是更加宽松的交给业界，还是相对严格的必须他人遵守规则，然而也不是放任自流。没有比伯纳斯·李更为妥善的做法了，这也是我们现在看到的万维网的形式。

我们以Wikipedia上的许可授权分类[6]为例，将接近公共领域的软件许可区分为宽松型和严格型，二者在绝大多数是相同的，比如源代码可以被学习、修改、二次分发，copyright也一样，唯一的差别就是是否再许可（sublicense），或者是相互的兼容性。宽松型的项目目前来说是开源软件的主流，很多软件项目都采用了这样的方式来分发，如Kubernetes、Apache httpd等，而较为严格的项目也是非常成功的，如GNU、Linux kernel等。

对于经济学家来解释此类的项目，宁愿称之为共有（common goods），如Linux Kernel 这个项目，它的所有人是所有的kernel的提交者，如果要确认这个项目的最终许可，需要所有人的同意。这也是被经济学家所命名的对等生产[7]模式下的主要秩序。

### 离商业秘密较近的

与只使用服务相较，能够提供一份介质拷贝，如DVD光盘，将软件交付给用户，在上世纪90年代之后，是大家最为熟悉的方式，例如微软公司的操作系统产品Windows就是使用这样的方式来进行分发，Windows 的许可叫做最终用户许可，禁止购买的用户学习、修改和二次分发，也禁止拷贝和分享。用户接受许可，交付一定的费用，即可使用相应的产品和服务。

由于计算机对于复制的便利性，有的软件供应商采用了用户可以复制和分享，但是不允许修改的策略，也就是大家比较能够接受的共享软件、免费增值模式的项目，本土用户最为常见的可能是WinRAR这款压缩软件。此类软件通常的做法是免费提供欠缺功能的版本，或者是有完整功能但是有广告，这一类软件也是目前智能手机上的App常见的用法。

### 处于更为中间的方式正在崛起

在两个极端的中间，总是能够在不断的妥协中，区分出更多的中间选择，目前非常流行的Open Core 模式[9]就是如此，将软件实现的功能区分为开源模式和商业秘密两部分，也就是说用户想要使用全部的功能，则需要接受一部分开源，一部分闭源的情况，而且开源和闭源所占的比例也是不同的，有的项目开源的部分多些，如Ubuntu、SUSE等Linux发行版，有的项目开源的部分少些，如GitLab。

这样的造成的局面就是各类许可的软件混合，共同为用户/消费者提供服务，无论是作为个体的终端消费，还是企业级的软件服务，这里我们便可以纠正目前业界常用的一句话：“开源正在吞噬软件，云计算正在吞噬开源”，而正确的表达应该是：**开源正在逐步发挥更大的作用，以共存的方式为人类提供服务。** 用一张Swimmy的图示来形容的话，开源（红色）会和闭源（黑色）合作，让软件能够为人们服务。（当然，比喻往往是欠缺的。）

![](images/Swimmy28-29small.png)

(图片来自[9])

## “萝卜青菜”，各有所爱

处于公共领域的项目，基本上不会有人去付费的，甚至是参与都为极少数人做的事情，除非是政府出面来接管，但是政府在此也仅是维持某种过度的利用，犹如现实中的空气等自然资源。

商业的发展是伟大的，某种程度上说，这是人类发展的强大动力，通过交换可以获得自己所需，追求自由和幸福，但是，不设防交换的成功是有条件的。诺贝尔经济学奖得主道格拉斯·诺斯对于现代的崛起，主要是产权制度的建立和保护[10]。也就是说“一手交钱，一手交货”，防盗窃，防不劳而获是一种规则下的约束，从而进行自由的发展。

作为一名开源布道师，我的立场和著名法学家Lawrence Lessig的立场是一致的：**坚定的认为开源是必要的，有重大意义的。** [11] 但是世界远比我们的立场复杂的多。尽管从技术的角度讲，开源有着无与伦比的优势，但是在财产的分配上，人性的很多弱点就会暴露，搭便车的伤害行为无法去除；封闭的代码，会带来知识的垄断，进而产生损害某一部分的利益，以及影响技术的传播，但是它也可以激励更多的人为之奋斗。

对比下来，在所有的软件许可这个“频谱”上面，选择哪一种方式的都有，无论是生产方，还是消费方，均有让人们选择的余地。我们如何选择，取决于我们对软件的理解，对人性的理解，以及自身的弱点的思考。目前为止，处于商业秘密的一端并没有完全消灭公共领域的一端，而是不断的彼此借鉴、彼此融合，最能适应当下的往往能生存下来，不一定是技术最强的，也不一定是商业模式最好的。

除了这些之外，世界上还有其它伟大的力量来影响着人们的决策，比如政府的反垄断就是非常强大的力量[12]，任何一方独大都是危险的，重在制衡，重在让所有人受益，能够让人们能够发展，未来可期。

## 参考资料

1. 《黑客与画家：硅谷创业之父Paul Graham文集》，[保罗·格雷厄姆](https://book.douban.com/author/4610779/)，人民邮电出版社，2011-4
2. 《社会性动物》，[埃利奥特·阿伦森Elliot Aronson](https://book.douban.com/search/埃利奥特·阿伦森Elliot Aronson)，华东师范大学出版社，2007-12
3. https://en.wikipedia.org/wiki/Public-domain_software ，最后访问时间：2021.11.22
4. https://sqlite.org/index.html，最后访问时间：2021.11.22
5. 《编织万维网》，蒂姆·伯纳斯·李，上海译文出版社，1999-12
6. https://en.wikipedia.org/wiki/Software_license， 最后访问时间：2021.11.22
7. https://en.wikipedia.org/wiki/Peer_production， 最后访问时间：2021.11.22
8. https://en.wikipedia.org/wiki/Open-core_model， 最后访问时间：2021.11.22
9. http://blaine.org/sevenimpossiblethings/?p=2589， 最后访问时间：2021.11.22
10. 《西方世界的兴起》，[[美国\] 道格拉斯·诺斯](https://book.douban.com/author/4608808/)，华夏出版社，2009-6-1
11. 《Code V2》，https://lessig.org/product/codev2 ，最后访问时间：2021.11.22
12. http://www.news.cn/politics/2021-11/18/c_1128075788.htm，最后访问时间：2021.11.22
