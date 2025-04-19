---
categories:
- 开源
- 感悟
date: 2025-02-16T19:42:32+08:00
description: "人们对 GitHub 经常有太多的忽略，仅仅把它当作一个代码托管平台，殊不知它的另一面：人才市场、训练材料、社交平台、分发内容，DeepSeek 的项目几乎就是以GitHub上的仓库为中心，进而发展的。借着DeepSeek 的风头，笔者打算和大家谈谈一直以来对GitHub的认知和理解。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "非官方观察：DeepSeek 的开放之路系列之二：重识 GitHub"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

![](/images/github-numbers.png)

<center>GitHub 的数字表述</center>


上期内容回顾：[非官方观察：DeepSeek 的开放之路系列之一：arXiv](/posts/opensource_engineering/deepseek-open-path-series-0/)

这次我们依然是从DeepSeek 官网上的“研究”一栏为出发点，这也是 DeepSeek 对外发布的入口处[1]，相对于其发布的研究项，代码仓库也不多，仅16个仓库，整体而言，这并非是一个非常活跃的组织和仓库，提交次数也屈指可数。当然，如果是深究起来的话，这里几乎没有代码，要么是论文的入口，要么是大模型的下载链接，GitHub 作为全球开发者的聚集之地，没有代码照样能引起瞩目。


用Git的创始人描述github，可能是比较贴合 DeepSeek 使用GitHub的：

> "Git comes with a nice pull-request generation module, but GitHub instead decided to replace it with their own totally inferior version. As a result, I consider GitHub useless for these kinds of things. It's fine for hosting, but the pull requests and the online commit editing, are just pure garbage."[2]

同济大学计算机博士，OpenRank 算法发明者，Open-digger 项目创始人赵生宇，也对DeepSeek的现象产生了极大的兴趣，其公众号沉寂了多年，并不想错过 DeepSeek 这个现象级的项目，第一时间对其进行了分析和解读，并给出了极其振奋的结论：《DeepSeek 全球渗透报告，GitHub 数据惊现东方崛起！》[3]

![](/images/deepseek-github-star-by-opendigger.webp)

当然，从DeepSeek 的star数增长来看吧，从默默无闻到一飞冲天，也就几十天的事，例如推理模型R1的增长，简直逆天：

![](/images/deepseek-r1-star-history-2025219.png)

## 从微软收购GitHub说起

2018年，微软花了75亿美金收购一直以来都在亏损的GitHub，即使是当年的HBR也仅仅说微软是战略投资[4]，并没有预料到 GitHub Copilot 的发布，距离微软收购GitHub 三年之后，2021年，作为开发者的代码检索工具上线，不过当OpenAI 发布GPT-3之后，微软就接入了此大模型，从此Copilot [5]飞跃式发展，因为有了巨大的代码仓库可以让大模型进行训练，到今天，该项目已经可以完成大部分的编码工作。

无论微软是否遇见到大模型时代的到来，就像当年人们并不明白搜索引擎的行为数据会成为搜索成为了数字垄断的霸主一样，或许代码仅仅是僵硬的对大多数人150Gigabytes 的数据没有任何意义，但是它却让工程师的效率更高了。当然，也让大多数复制粘贴式的开发者失去了劳动意义。尽管像很多事情一样，在法律许可上有一些争端[6]，但是并不能阻挠他们的发展。

用时候诸葛亮的角度解释微软收购是不道德的，但是即使是从战略上讲，微软当年的推理也不仅仅是一个代码托管平台，它看重的是人才市场，就像它花更高的钱收购linkedin那样。毕竟，得人才者得天下。

即使我们不用大模型时代的数据集训练的思路来考虑问题，我们回到搜索、社交媒体时代的分析数据行为也是可以洞悉这一行为的，作为全球的开源代码托管地带，除了代码本身之外，在GitHub网站上的动作有：star、fork、follow、watch、issue、pr、explore、action、page等等，当有1.5个亿的人做这些事的时候，它一定蕴藏着无穷的价值。

在《监控资本主义时代》[7]一书中，作者以如下一图做了最为精辟的总结：

![](/images/data-as-cpatial.png)

作者以Google 为例进行了说明：

> “簡言之，在谷歌發展初期，搜尋引擎使用者無意間提供谷歌的珍貴數據，都被拿來提升服務品質並全然回饋給使用者。在這種再投資循環中，為了提供使用者優異的搜尋結果，搜尋引擎必須「消耗」使用者創造的價值，而這些價值則是來自使用者提供的額外行為數據。使用者需要搜尋引擎，搜尋引擎也仰賴使用者，此一現象使谷歌與使用者之間達成完美的力量平衡。群眾被視為目的本身，也是非市場獨立循環中之主體，這個概念跟谷歌主張的宗旨完美吻合：「匯整全球資訊，供大眾使用，使人人受惠。”

这句话，照葫芦画瓢形容 GitHub 也是成立的，当我们免费使用GitHub所有功能时候，自己也是数据的生产者。

## GitHub 不仅仅是代码托管平台

人们往往是矛盾的，一方面肆意的破坏GitHub 的Star作用，另一方面在哪里搜寻对自己有用的代码，可是忘记了GitHub 是Web2.0时代的产品，基于社交属性是明线，真正的暗线是fork、PR组成的基于开源项目的网络[8]，换句话说，这是一个计算机相关的人才网络，同时也是一个巨大的市场，当然对于GitHub本身来说它更是一个平台：一个围绕源代码的协作平台。


![](https://user-images.githubusercontent.com/32434520/220118178-42017202-53a3-40ac-9f6c-96e83f4843ac.gif)

它通过多种机制，有效地连接和促进人与人之间的交流：

* 代码仓库： 知识的开放共享平台: GitHub 上的代码仓库，就像一个个开放的知识库，任何人都可以 浏览、学习、借鉴 他人的代码，获取最新的技术信息和最佳实践。 这种开放透明的环境，打破了知识垄断，加速了知识的传播和扩散，为创新提供了肥沃的土壤。 创新理论中的 知识溢出效应 (Knowledge Spillover) 在这里得到了充分体现。
* Issues： 问题的协同解决空间: GitHub 的 Issues 功能，提供了一个开放的问题讨论和协同解决平台。 用户可以提交 bug 报告、Feature Request、或者提出任何疑问，项目维护者和社区成员可以共同参与讨论、提供解决方案、协作修复问题。 这种 开放透明的问题解决机制，能够集思广益，加速问题解决，并从中产生新的思路和改进方向，推动创新。
* Pull Requests： 代码贡献与协作的桥梁: Pull Requests (PRs) 是 GitHub 上代码贡献和协作的核心机制。 当开发者想要为项目贡献代码时，需要提交 PR，请求项目维护者将自己的代码合并到主分支。 PR 机制不仅方便了代码贡献，更重要的是，它 搭建了一个代码审查和知识交流的平台
* Code Review： 知识的深度交流与技能提升: 项目维护者会对 PR 代码进行 Code Review (代码审查)， 检查代码质量、逻辑、风格，并提出修改意见。 Code Review 不仅仅是代码质量控制的手段，更是一种 宝贵的学习和交流机会。 贡献者可以从 Code Review 中学习到更规范的编码技巧、更深入的项目知识、以及更优秀的软件设计思想。 维护者也可以通过 Code Review 传播项目文化、指导社区贡献、提升整体代码质量。 这种 深度、互动、高质量的知识交流，是创新的重要催化剂。
* Discussions： 更自由、更广泛的交流空间: GitHub Discussions 功能，提供了一个更自由、更开放的交流平台，用户可以在这里发起各种话题讨论，例如技术选型、项目规划、社区发展、甚至行业趋势等等。 Discussions 突破了 Issues 的 “问题解决” 局限， 为更广泛的 灵感碰撞、 思想交流、 社区共建 提供了空间。
* Community Features： 社区连接与文化塑造的工具: GitHub 还提供了各种社区功能，例如 Projects (项目看板), Wiki (项目文档), Releases (版本发布), Stars (点赞), Followers (关注者) 等等， 这些功能不仅方便了项目管理和信息传播， 更重要的是， 它们 促进了社区成员之间的连接， 塑造了开源社区独特的文化氛围。 一个活跃、开放、友好的社区，本身就是创新的沃土。

GitHub 不仅仅是一个代码托管平台，更是一个 连接全球开发者、激发创新灵感的强大引擎。 它改变了软件开发的模式，加速了技术进步的速度，也深刻地影响着我们的生活。

## GitHub 作为交流的市场，创新加速器

GitHub：可谓是开源世界的创新引擎。想象一下，创新就像火花，需要碰撞才能迸发。而 GitHub，正是这样一个让全球开发者 “碰撞” 的平台。  创新理论告诉我们，人与人之间的连接和交流，是灵感的重要来源。  GitHub 就如同一个巨大的线上咖啡馆，汇聚了来自世界各地的程序员、设计师、研究者，甚至各行各业的爱好者。想象一下，创新就像火花，需要碰撞才能迸发。而 GitHub，正是这样一个让全球开发者 “碰撞” 的平台。  创新理论告诉我们，人与人之间的连接和交流，是灵感的重要来源。  GitHub 就如同一个巨大的线上咖啡馆，汇聚了来自世界各地的程序员、设计师、研究者，甚至各行各业的爱好者。GitHub 就是灵感碰撞之地：连接激发创新。

从创新理论的角度来看，GitHub 完美地印证了以下几点：

* 知识溢出效应： GitHub 的开放性让知识自由流动，促进了 知识溢出效应，激发更多创新。
* 组合创新： 海量的开源项目就像一个个 创新积木，开发者可以轻松组合复用，加速 组合创新。
* 开放式创新： GitHub 支持 开放式创新，任何人都可以参与贡献，集众人之智，降低创新风险。
* 网络效应： GitHub 用户越多，平台价值越大，形成 网络效应，进一步放大创新促进作用。
* 用户主导创新： GitHub 让普通用户也能参与软件开发，实现 用户主导的创新，更好地满足个性化需求。

## 全球技术移民

2020年，新冠疫情爆发，有一家公司走进了大家的视野，无论是工作和生活，都给了人们极大的帮助，那就是Zoom[9]。这是一家倡导远程工作的公司，和GitLab、37signals等一样，有一个现象也是被大家所关注的，那就是Zoom的研发中心在中国，尽管是一家注册在美国的公司，使用的开发工具是Git，也在GitHub上有组织[10]，GitHub 是全球性的协作平台，也意味着在这里可以构建地理位置无关的团队，这进一步的让发达国家的开发者失去了优势，某种程度上造成了类似制造业时期的失业[11]。

GitHub 也是让工程师素质凸显，但是工资未必是最高的，对于雇主来说，没有比这样的平台更加适合的了，既能降低开发成本，又能满足质量需求，还能及时的进入市场，即使没有全球视角，诺大一个中国，从一线城市往三、四线城市的技术转移，也是过去十年大部分互联网和IT公司的选择。

## DeepSeek 仍然以 GitHub 为主战场

在2025年2月21日中午12点，DeepSeek 在X社交平台上发布了如下内容[12]：

> Day 0: Warming up for #OpenSourceWeek!
> We're a tiny team @deepseek ai exploring AGl. Startingnext week, we'll be open-sourcing 5 repos, sharing oursmall but sincere progress with full
transparency
> These humble building blocks in our online service havebeen documented, deployed and battle-tested inproduction.
> As part of the open-source community, we believe thatevery line shared becomes collective momentum thataccelerates the journey.
> Daily unlocks are coming soon. No ivory towers -just puregarage-energyand community-driven innovation.

从 DeepSeek 的代码仓库来看，它仅仅利用了GitHub 平台众多功能中的一种，它仍然是孤岛项目（尽管它使用的英语），并没有和它所构建的项目形成网络，也很少接受外部的PR，issue 的数量也极少。提交次数更像是从内部切出来的分支，寥寥的几笔而已。即使是这样，DeepSeek 仍然以GitHub 为主要的承载，无论是吸引眼球还是炫技，GitHub 都是胜任的。

**DeepSeek走开放这条路，GitHub 并不能满足所有，这里只是一部分的代码，训练后的模型还需要其它的平台来实现，下一篇文章，我们就来介绍一下Hugging Face这个平台。**

## 参考资料

1. https://github.com/deepseek-ai
2. https://www.theregister.com/2021/09/06/github_merges_useless_garbage_says/
3. DeepSeek 全球渗透报告，GitHub 数据惊现东方崛起！ https://mp.weixin.qq.com/s/ptp47zJGea1zZcgr-_lz4A
4. https://hbr.org/2018/06/why-microsoft-is-willing-to-pay-so-much-for-github
5. https://en.wikipedia.org/wiki/GitHub_Copilot
6. https://sfconservancy.org/blog/2022/feb/03/github-copilot-copyleft-gpl/
7. 《監控資本主義時代》， 肖莎娜．祖博夫（Shoshana Zuboff），时报出版，2020.7.24
8. https://github.com/X-lab2017/open-galaxy?tab=readme-ov-file
9. https://en.wikipedia.org/wiki/Zoom_Communications
10. https://github.com/zoom
11. 《The Globotics Upheaval: Globalization, Robotics, and the Future of Work》，Richard Baldwin，W&N，2019-1-24
12. https://x.com/deepseek_ai/status/1892786555494019098 

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
