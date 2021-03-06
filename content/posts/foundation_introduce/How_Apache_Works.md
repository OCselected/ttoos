---
categories:
- 开源
- 基金会
date: 2018-03-15T15:30:38+08:00
description: "亲爱的读者，你有没有像很多人一样对开源的基金会是如何工作的有强烈的好奇心了呢？如果有的话，不妨跟随译者的思路，探询一下“Apache之道”是怎么回事。这是一个什么样的虚拟社会？共识的原则是什么？有哪些角色？分别做什么？遵循的原则是什么？项目孵化的流程是怎样的情况？"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 基金会介绍
- 开源之道
title: "Apache 是如何运作的？"
url: ""
---

![](https://www.apache.org/img/asf_logo.png)

## 引言

本文将会以概述的形式为读者您提供 Apache 软件基金会的一切内容，相信一定是您一直以来都存有疑问，但还没有来得及细问的内容。涵盖：member 与 committer 的区别、谁决定什么事、选举是如何进行的、基础设施又是如何工作的、董事会又是什么、什么是PMC、孵化器背后的哲学思想又是什么、以及ASF是如何处理多年以来新项目和贡献者的惊人增长所带来的挑战。本文将带你走近 Apache 软件基金会的幕后，一探其背后的运作机理。

## Apache 软件基金会是什么？

[Apache 软件基金会](http://www.apache.org/foundation/) 是美国注册的503(c)3 的非营利的公共慈善组织，于1999年成立，目的主要有：

* 通过提供硬件、沟通工具以及业务基础架构，从而为开放式协作开发软件项目提供后盾
* 创立独立的法律实体，这样就可以接受个人或公司的赞助，并能够确保这些资源将用于公共利益
* 为个人志愿者提供避免针对基金会项目的法律诉讼
* 保护“apache”的品牌，适用于其软件产品，免遭其他组织滥用

敬告读者，以下内容将会是干巴巴枯燥的事实说明，但是相信很多人对于Apache还是保持好奇的，这一切是如何发生的呢？它的细节究竟是怎么回事? 不过不要着急，让我们先来回味一小段历史。

## Apache 软件基金会简史

基金会是在1999年创立的，当时只有几个人，他们给自己起了个名称叫做：“Apache 小组”，之所以这么叫，是因为若干年前他们为了维护和支持当年由NCSA所开发的 HTTPD web 服务。

当年的情形是这样的，HTTPD web服务软件是以自由的方式向大家提供的，不仅包括源代码，还包含一份允许人们自由的修改并进行二次发行的许可协议，但是随着时间的流逝，当年的开发者渐渐的转移了兴趣，开始去忙其他事情了，结果导致的局面就是项目有用户，但是没有人支持。

这是开始有一些用户交换彼此对软件的修复（称之为”补丁”），以及如何修复问题和改进代码的信息，这时，Brian Behlendorf 就在自己的机器上创建了一个邮件列表，从而让大家可以协作去修复bug、维护和改进 HTTPD web服务。

之所以选择 “Apache” 这样一个名称，主要是对美国原住民一个部落的尊敬，Apache部落以其在战争策略方面的卓越技能和无尽的耐力而闻名于世。不过很有意思的是，它也是一个双关语，"a patchy web server" 即一个修修补补的web服务，但是，说实话，这并不是大家的初衷。就这样，过了没有多久，这些开发和维护Apache软件的人们就自称为"Apache 小组"了。

从1995到1999年，Apache HTTPD web服务，这个由“Apache小组”所领导开发的web服务器软件成为了市场的领导者，一直持续到现在，即使是现在也占据了市场65%的份额。

但是，世界从未停止发展，随着网络规模的增长，相应的经济利益也得到了发展，Apache 开始托管一些新的相关的项目（如mod_perl项目、php项目、java项目等），越来越需要一个更加连贯和有组织的组织来防范潜在的法律攻击。于是，Apache 基金会应势而生。

你可以阅读更多关于[ASF 历史](https://www.apache.org/history/)的内容。

## 精英主义

Apache web 服务器，并不像和其它的在开源许可协议下开发的软件一样，它最初并非是由某位“英雄”（诸如Linux内核、Perl或Python语言）独立发起的，而是由几个拥有共同想法、彼此了解的人，通过交换信息、修修补补、不断接受各方建议而创建的。

随着小组开始开发他们自己的软件版本，抛弃了原来的 NCSA 的版本，越来越多的人被吸引并开始提供帮助，首先通过发送很少的补丁或建议，或者在邮件列表中回复电子邮件，后来则可以提供更重要的贡献。

当小组认为某位开发者，已经“赢得”了成为社区的一员的资格时，他们就授予此开发者对代码仓库的直接访问权限，这样不断的增加团队的力量，也提高了团队开发项目的能力，进而更有效地维护和发展了团队。

我们把这个基本原则称为“精英主义”：从字面上看，这是政府的主要优势或常见称呼。

值得注意的是，这个模式发展的非常好，没有产生太多的摩擦，这是因为和其它的方式不同，在这里权力并没有集中和变得保守，在 Apache 团对中，新人被视为希望提供帮助的志愿者，而不是那些想窃取职位的人。

因为没有那些让人迷惑的资源（金钱、能量、时间），所以Apache团队非常希望有新来的人能够帮忙，他们只是筛选他们认为足够完成这项任务的人，并匹配与他人合作所需的友好态度，特别是在有分歧的时候。

在接下来，我们来看看ASF的组织架构，接着我们再来梳理一下角色。

## 基金会的组织架构

随着Apache Web Server的市场份额和流行度开始逐步增长，由于其技术优势和项目背后的社区的开放性，人们开始围绕 Apache web server 创建了一些周边的项目。由于他们本身受到了一直以来的社区文化影响，这些周边的项目也采用了相同的社区管理模式。

所以，在创建ASF时，虽然有几个各自独立的社区，每个社区都关注web服务的不同的问题，但是这些社区都一致同意:同时在沟通和流程上，建立一个共同的目标，遵循同样一套文化法则。

这些独立的社区被称为“项目”，虽然相似，但每个社区都表现出很小的差异，这使得它们变得特别。

为了减少摩擦，并鼓励多样性的发展，ASF并没有选择单一的强迫性的所谓的高级文化，所以在Apache的世界里，每个项目都是自己的中央决策机构。每个项目都是自己软件开发的权威，并在设计自己的技术章程和自己的治理规则方面有很大的自由度。

就这样走过很多年，原生的Apache小组的文化影响力非常之深且广，以至于现在的各社区之间依然具有极高的相似度。

基金会由以下实体进行管理：

* 基金会由董事会来管理，董事会由成员构成。
* 项目管理委员会（PMC）管理具体的项目，他们由提交者构成，（请注意，每个成员根据定义也是提交者。）
* 由董事会任命的公司的各种主管人员在基金会的特定领域（法律，品牌，筹款等）制定政策，

更多内容和详情，请阅读[社区治理](http://www.apache.org/foundation/governance/)

### 董事会(Board)

董事会负责根据基础[章程](https://www.apache.org/foundation/bylaws.html)管理和监督公司的业务和事务。这包括管理基金会的资产（资金，知识产权，商标和支持设备）以及为项目分配资源。

但是，有关Apache项目的内容和方向的技术决策权被分配给各个项目管理委员会。

董事会目前由九名成员组成，由基金会成员选出。细则没有规定董事会应该具备的高管人数，但从历史上看，这是第一次的董事会的人数，从未改变。董事会每年都会进行选举。

董事会[页面](https://www.apache.org/foundation/board/)提供了更多信息，如现任董事名单、会议日程和过去的会议记录。

### 项目管理委员会（PMC）

项目管理委员会由董事会决议设立，负责一个或多个社区的积极管理，这也由董事会决议确定。

每个PMC由至少一名ASF官员组成，他们将被指定为主席，并可能包括一个或多个ASF的其他成员。

PMC的主席由董事会和ASF的管理人员（VP）来任命，主席对董事会负主要责任，并有权制定PMC负责的社区日常管理的规则和程序，包括PMC本身的组成。进一步的讨论，请移步[为什么主席均是管理人员](https://www.apache.org/foundation/faq.html#why-are-PMC-chairs-officers)。

ASF[章程](https://www.apache.org/foundation/bylaws.html)定义了PMC和主席的使命，通过过去的邮件列表的信息可以获得进一步的澄清：[这里](http://www.mail-archive.com/community@apache.org/msg03961.html)和[这里](http://www.mail-archive.com/community@apache.org/msg04005.html)。

从基金会的角度来看PMC的作用是监督。PMC的主要作用不是代码，也不是编码，而是要确保所有的法律问题得到解决、程序是被遵循的、每个发布的版本都是完全社区化的。这是我们诉讼保护机制的关键所在。

其次，PMC的作用是促进整个社区长期和健康的发展，并确保获得一定的平衡，以及获得同行们的好评，并能够让协作进行下去。在ASF内部，我们所担心的是在社区的中心有着无可争议的几个人在工作，因为这样对于社区的长期发展来讲是，无论从健壮性还是稳定性都是有害的，不论是从代码的角度，还是社区本身的结构来讲。

我们坚信[角色](https://www.apache.org/foundation/how-it-works.html#hats)的作用，你在ASF里的角色，是由你自己的个人来决定的，且是由ASF的同伴所授予的，它与你的工作或现任雇主或公司无关。

ASF 对于 PMC 是有着很高的标准的。作为一名PMC，尤其是PMC主席的话，其实就是ASF董事会的“眼睛”和“耳朵”，所以依赖并信任这个角色所提供的法律监督。

董事会有权随时通过决议终止PMC。

在[Apache 开发者信息](http://www.apache.org/dev/)页面有更多关于PMC工作的情况，当然你也可以浏览目前[Apache所有的顶级项目](http://projects.apache.org/)。

### 管理人员

[Apache 软件基金会的管理人员](https://www.apache.org/foundation/) 负责监督基金会的日常事务，管理人员由[董事会](https://www.apache.org/foundation/how-it-works.html#board)选举产生。

## 角色

在每个 Apache 项目的社区中，精英制意味着需要区分不同的角色：

### 用户

**用户** 就是使用 Apache 软件的大众。他们通过以错误报告和功能建议的形式向开发人员提供反馈，从而为 Apache 项目做出贡献。用户还可以通过在邮件列表中帮助其他用户来为项目作出贡献。

### 开发者

**开发人员** 就相对的很好理解，就是以写代码或写文档的形式为项目做贡献的人们，他们有更加多样的参与项目的形式，如积极的在开发者邮件列表中、进行讨论、提交代码补丁、提交文档、建议、乃至批评。开发人员通常也被称之为 **贡献者**。

### 提交者

**提交者** 是指拥有代码仓库写操作权限的开发者，而且他们也签署了[贡献者许可协议（CLA）](http://www.apache.org/licenses/#clas)文件，他们拥有以apache.org为后缀的邮箱地址，他们在提交补丁的时候，不需要依赖其他人，实际上他们可以为项目做一些较小的短期决定。项目管理委员会成员（PMC）可以同意（其实是默认）并批准某些开发者为提交者，可以是永久性的，当然PMC也可以拒绝某开发者成为提交者。这里请注意一点：是PMC做出决定，而不是某个独立的成员。

### 项目管理委员会成员

PMC 成员是由在项目的开发中表现突出的开发者或提交者选举出来的优胜者，他们拥有写入代码仓库的权限、以apache.org为后缀的邮箱地址、拥有社区相关事务的投票权、以及有权提出积极的用户参与提交。PMC 是作为其项目走向的唯一的实体，再没有其他团体可以参与。特别强调的是，PMC必须对其项目软件产品的正式发布进行投票。

### 项目管理委员会主席

项目管理委员会（PMC）的主席由董事会从PMC成员中任命。PMC 是整个项目的控制和领导的实体。而主席的左右就是充当董事会和项目之间沟通的桥梁，当然，作为项目管理委员会主席还有[其它的一些特定的职责](https://www.apache.org/dev/pmc.html#chair)。

### ASF 成员

**ASF 成员** 是由现在的成员所提名，然后根据对基金会的推进和演化来进行选举而定。ASF 的成员关注的是Apache 基金会本身，这通常通过项目相关和跨项目活动的根源来证明。从法律上讲，成员是基金会的“股东”，也是业主之一。他们有权选举董事会，成为董事会选举的候选人，并提出成为会员的提议者。他们也有权提出一个新的孵化项目（我们稍后会看到这意味着什么）。ASF 成员通过邮件列表和年度会议来进行日常的工作协调。

## 项目管理和协作

Apache 的项目是基于共识的协作流程来进行管理的。Apache 是没有层级结构的，当然了，不同的贡献者群体在组织中拥有不同的权利和责任。

由于指定的项目管理委员会有权制定自己的自治规则，因此对于项目管理委员会如何运行项目及其所在社区没有单一的愿景。

同时，虽然存在一些差异，但所有项目都有一些相似之处：

### 沟通

沟通是通过邮件列表来完成的。这也就意味着，所有的“虚拟会议”都是异步进行的，这是因为当开发者们分布于世界各地时，异步通信就显得格外的重要。（而对于Apache的各个项目来讲，来自全球各地开发者是常见的情况）

有一些项目也在使用可以同步进行沟通的工具，（如IRC或其它的一些即时聊天工具），使用语音沟通的方式非常罕见，这通常是因为成本和语言上的障碍（言语比书面文本更难理解）。

一般来说，异步的沟通更重要，因为它可以创建归档（用于搜索和查阅），并且更加重要的是异步的通信方式符合社区志愿者的本性。

### 文档

每个项目都有其自己所负责的[项目站点](https://www.apache.org/foundation/projects.html)，更多信息可访问[ASF 基础施](https://www.apache.org/dev/)——那里有辅助提交者、开发者、PMC等相关的信息。

### 决策

项目通常是自我进行管理的，即由志愿者来驱动去做一些工作。这就是通常所说的"do-ocrac"模式，意即自己选择任务自己来完成，没有人分配也没有人监督。它通常运转良好！

当需要协调的时候，最终的决定采用的是较懒惰的共识法：一些没有反对票的正面投票就足够了。

投票的形式有下面三种：

* +1 —— 表示同意的投票
* 0 —— 表示弃权，没有意见
* -1 —— 表示反对

当投反对票的时候，要明确提出替代方案，以及投反对票的详细解释。社区然后试图就解决问题的备选提案达成共识。在绝大多数情况下，此方式可以解决导致投票反对的担忧。

此过程我们称之为：“共识搜集法”，而且我们认为这是一个让社区健康运转的重要标志。

具体的案例中还有一些更为详细的内容，请移步:[投票细则](https://www.apache.org/foundation/voting.html)。

### 原则（哲学思想）

虽然没有明确的官方认可或指定的，但是以下六条原则是基金会背后的哲学的核心理念。这也就是被众人所称颂的”Apache之道”：

* 通过协作来进行软件开发
* 商业友好的标准许可证
* 要保持一贯的生产高质量的软件
* 尊重、诚实、以技术为基础的交流
* 忠实执行标准
* 安全性作为强制性功能

所有的 ASF 的项目都遵循这六条原则，同样，Apache 的项目需要[独立来治理](http://community.apache.org/projectIndependence.html)，尽可能远离不合适的商业影响。

## 运营

Apache 所有的项目均是由志愿者组成的，没有人（哪怕是Apache成员或管理员）是由基金会付出报酬的，或许有一些提交者是由获得报酬来进行贡献的，但是那不是Apache基金会所付的。付报酬的一方是那些使用Apache软件的企业，希望软件能够更加的健壮，从而进行一定的改进。

郑重提示：ASF会通过合同外包了一些服务，如会计、新闻、媒体关系以及基础设施管理等。

### ASF 的个人组成原则

所有的ASF的参与成员：董事会席位、管理人员、提交者、以及成员，统统都是独立的个人，这是ASF的一个优势，隶属关系不会影响个人贡献。

除非他们另有具体说明，任何他们在邮件列表中提及的事情都有他们自己来完成。这完全是个人的独立观点，代表ta个人，而不是作为发给ta薪水的公司的代表，甚至也不能是 ASF 董事的观点。

其实，所有的ASF成员都有各自的角色：特别是理事会，管理人员和PMC主席。他们有时需要谈论一个政策问题，所以为了避免表达个人意见，他们会说他们正在以他们的特殊身份说话。但是，大多数情况下这不是必要的，因为个人意见通常很有效。

有些人通过在他们的电子邮件中使用特殊页脚来声明自己的角色，也有一些人则是将他们的陈述用特别的引号括起来，也有一些人使用以apache.org后缀的邮件地址，尽管他们可以使用个人的邮箱，最后一种方法并不被提倡，因为有很多人拥有apache.org后缀的邮箱。

### 关于保密和公开讨论之间的平衡

我们尽可能在公开场合进行尽可能多的讨论，这鼓励开放，提供公共记录，并激励更广泛的社区。

但是有时候内部私人邮件列表是必要的，未经名单明确许可，您绝不能在公开场合泄露这些信息。也不要在私人和公共清单之间复制电子邮件（不需要抄送）。这样的事件将超出对电子邮件礼节的正常需求，并且会丢失信任。它可能会产生严重的后果，造成不必要的混淆和不明智的讨论。

私人名单通常只用于与个人有关的事务（如新提交人的投票）以及需要保密的法律事务。

## 基金会项目孵化

为了新的项目能够顺利的创建，ASF 专门设立了[孵化器](http://incubator.apache.org/)这样一个项目，用来帮助新项目能够顺利的加入ASF。

由于精英规则在 ASF 是自底向上的运转着，对于这样的治理方式的长期稳定是至关重要的，在项目的起步阶段时所参与的贡献者是必须明白这一点的，同样，ASF对其项目期望的合作和开放态度具有相同的哲学态度。

孵化器的职责包括如下内容：

* 过滤关于创建新项目或子项目的意向书
* 帮助创建项目及其所需的基础设施
* 监督和指导被孵化的社区，已让他们实现开放的优秀文化氛围
* 评估孵化项目的成熟度，或者将其提升为官方项目/子项目的状态，反之若项目失败，则通过退役来解决。

必须指出的是，孵化器（就像董事会）不会根据技术问题执行过滤。这是因为基金会尊重和建议各种技术方法。它并不担心创新，甚至会允许在功能上重叠的项目之间进行内部的相互竞争。

孵化器是基于那些成为成功的精英群体的可能性来过滤项目的，项目孵化的最基本的需求是：

* 一个可用代码仓库 —— 多年以来，也是经历了各种失败之后，基金会渐渐的开始明白了一件事：**如果没有一个初始可用的代码仓库，想要启动一个社区基本上非常困难的。** 其实这个道理很简单，那就是你连代码仓库都没有，开发人员想要了解你都无从下手，另外，仅仅依靠谈论想法，那么摩擦一定多得不得了，会在早期就将社区的氛围给破坏掉。
* 有意的将包含有版权的软件和知识产权捐赠给基金会 —— 这为基金会获得不可撤销的和永久的权利来重新分配和处理代码提供了条件，而毋须担心被其本身或其用户锁定。
* ASF成员或官员所支持 —— 此人将担任主要的导师，为项目提供指导，帮助处理日常的细节，以及与孵化器 PMC 保持联系。

决定项目的孵化期的长短主要是看：

* 该项目能够增加其贡献者的多样性
* 能够很好的按照基金会制定的精英规则运转

这一切看起来实现起来并没有那么的难，但是请一定要记住，在全部都是志愿者，并且有着苛刻晋升条件的环境中，吸引新的贡献者可不是那么容易的事情。

贡献者的多样性非常之重要，主要由下面两条原因：

* 它为项目的开发提供了长期稳定性：事实上，那些来自同一家公司或组织的开发者同时一起离开项目的几率，要远远大于各个个体分散在不同的公司或组织的。
* 它提供了更多的技术愿景：这可以更好地保证遵守环境约束以及满足用户的需求，进而更有效地把握软件的实际使用情况。

## 基金会其它事项

与孵化器一样，基金会还另外有几个跨基金会的项目，举例来说，ASF 并没有实际的办公场所或大楼，它是一个虚拟的实体，仅仅存在于互联网，而让着一切能够正常运行的基础设施均是由[基础设施团队](https://www.apache.org/dev/infrastructure.html)来运维和管理的。

这些跨基金会的项目的详细描述，请移步[基金会项目页面](https://www.apache.org/foundation/foundation-projects.html)。

ASF 也托管着整个基金会的邮件列表，同样了解更多详情，请移步[邮件列表页面](https://www.apache.org/foundation/mailinglists.html)。

## 奋斗仍在继续......

Apache 软件基金会已经运营了19年了，事实证明，Apache 软件基金会代表了在组织结构和灵活性之间找到平衡的开放性组织的最佳实践之一。我们从200位贡献者持续增长到3000以上，而且这个数字还在持续的增长，我们创建了多个在其相应市场上处于领先地位的软件产品，我们也在开放性和经济可行性之间找到了很好的平衡点，而目前我们赢得了大家的尊重和认可，他们包括某个独立的个人，也包括某些大型的跨国公司，我们也希望能够为未来的企业，政府，教育和其他软件基金会提供灵感。

## 本文出处

https://www.apache.org/foundation/how-it-works.html
