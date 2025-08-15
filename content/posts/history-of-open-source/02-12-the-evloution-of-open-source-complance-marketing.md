---
categories:
- 开源
- 感悟
date: 2025-08-05T10:46:49+08:00
description: "我们能否发挥想象力？将历史上的一些事件联系起来，这恰恰是历史应该去做的事情，我们在开源软件知识财产相关法律的文章回顾了十几篇文章，我们仍然没有说到关键的地方，那就是开源市场的形成，有没有公司公然违反许可。无处不在的开源软件是如何在法律的威严下一步步渗透到今天的地步的？本文试图解释一下这个。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "「开源之史」系列之十六/四：开源遵从（合规）市场的形成与演变：开源的商业或信任基石"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

## 引子：闭源软件市场的诞生与秩序塑造

在今天的视角看来，软件是一个天然可以售卖的商品，但这在1970年代并不是显而易见的。那时，软件更多是硬件的附属品，源代码常随手附送，开发者之间共享修改的做法十分普遍。真正改变这一切的，是两股力量的汇合——法律制度的确立与技术封锁能力的成熟。

1976年，美国《版权法》修正案明确将计算机程序纳入版权保护，从此软件得以在法律上被视为与文学作品同等的创作物。版权法赋予了开发者和厂商排他性的复制、分发、修改权利。这一制度化的转折，意味着软件可以不再免费附送，而是成为独立的商品。

如果说法律是地基，那么技术封锁就是建造房屋的砖瓦。随着编译技术、加密机制和分发渠道的出现，软件厂商发现可以通过封闭源代码、交付二进制文件、控制介质和授权账号，将产品牢牢握在手中。这不仅防止了未经许可的使用，还让升级与续费成为稳定的现金流来源。

微软、Oracle、SAP是这一模式的代表。微软的OEM授权将 Windows 预装进几乎每一台个人电脑；Oracle的数据库通过严格许可和高技术壁垒锁定了企业用户；SAP则将ERP与实施服务绑定，使客户迁移成本高到望而却步。三者共同构筑了闭源软件的经典市场逻辑：

> 版权（Copyright）+ 技术封锁（Technical Restriction）+ 分发控制（Delivery Control）

到了1990年代末，这一模式不仅带来了数千亿美元的商业软件市场，还塑造了一种行业文化 —— **控制等于收益，源代码的流动必须被阻断**。

即使如此，闭源软件也并未完全垄断整个软件市场，开源的市场仍然是不断地扩大自己的版图，不过在相比与闭源软件市场的三角逻辑，开源则主要是依靠许可、合规来形成的，以下是一个直观的对比：


| **维度**    | **闭源软件市场形成机制**                   | **开源合规市场形成机制**                           | **核心差异**                     |
| --------- | -------------------------------- | ---------------------------------------- | ---------------------------- |
| **法律基础**  | Copyright + EULA（商业许可协议），未经授权即侵权 | Copyright + OSS License（开源许可协议），违规即违约/侵权 | 两者法律效力相同，都是合同 + 著作权，只是商业模式不同 |
| **技术控制**  | 技术封锁（加密、编译二进制、DRM）、功能限制          | 无技术封锁，源代码开放，但依赖许可条款的法律约束                 | 闭源靠“锁门”，开源靠“约定”              |
| **交付介质**  | 实体介质（磁盘、光盘）或云账号绑定，物理控制分发         | 开放仓库、Git 分发、自由复制                         | 闭源的控制在“入口”，开源的控制在“使用场景”      |
| **收入模式**  | 售卖许可（一次性/订阅）+ 支持服务               | 售卖增值服务 + 提供合规、支持、认证                      | 闭源直接收授权费，开源的商业价值转向合规与信任      |
| **市场驱动力** | 供给端掌握技术稀缺性，用户必须付费才能用             | 需求端依赖开源构建商业产品，但必须合法使用                    | 闭源靠“不能不用”，开源靠“不能违规”          |
| **合规痛点**  | 未授权盗版、破解                         | 未履行许可义务（如 GPL 传递开源义务）                    | 闭源违规易被查，开源违规易被忽视，但风险后果越来越大   |
| **治理模式**  | 厂商单方面执法（法务 + 技术）                 | 社区、权利人、NGO（FSF、SFC）和工具公司共同执法             | 开源执法更分散，依赖市场压力与公共舆论          |

在本章节，我们就聚焦于开源合规市场的形成和演化进行一番历史经济的回顾。

## 从一次度假说起

说起由度假而诞生的传奇，莫过于UNIX的创始人 Ken Thompson 的故事更为人津津乐道了[1]。接下来的故事或许会带给我们灵感，那就是想做事情之前，先要修一个什么也不做的假。

2002 年底，在墨西哥坎昆温热的海风中，一位技术创业老兵正独自坐在沙滩上，脑中却盘旋着一场融资尽调中始终未能解答的问题：

> “你能证明这些代码没有违反任何开源许可吗？”

Doug Levin [2]，那时刚刚完成一次软件创业项目的出售，但这次收购过程中的种种不确定性，让他心生警惕：现代软件如此依赖开源组件，却没有一家企业能说得清楚，他们使用了什么、从哪儿来、又是否符合原始许可。

那一刻，他意识到——企业对开源的依赖正在飙升，而对合规的理解却接近空白。我们常常说灵感来自于长时间的累积，其实 Levin 在此前参与两家公司出售过程中，发现潜在收购方询问是否使用开源代码时，团队只能靠口头访谈无法提供数据证明。真正的技术审查工具不存在，使他深刻觉察到一个真实市场需求。

## 违反许可使用开源软件是个常态

自从自由软件基金会发布GPL许可以来，违反许可的使用者便没有断过，在1991到2001这段时间内，GPL 的起草者、GNU运动发起人 Richard Stallman 主要通过非正式的邮件来处理这些事，偶尔也会由FSF的律师 Eben Moglen 来处理[3]，例如在1994年在邮件列表里的一个回复[4]：

> I've been told that people are distributing CD-ROMS of Linux binaries which include neither the source code nor a written offer to supply source code later.

> The GPL says that any distribution of binaries must contain either the source code or a written offer to supply source code (see the GPL for details of what is required).
> ......

从技术内幕收集的 GPL 执法的事件来看，这一阶段确实不多，随着www的崛起，LAMP 的广泛应用，违规的事件越来越多了，当有一定规模的公司开始“不知不觉”中采用了或收购了采用开源项目的代码时，就有了更多的

### 一些引人注目的官司



## 作为应对违反许可的方法

在现代的观念中，出现问题并不是尝试掩盖或逃避，而是积极的应对，作为软件的后起力量，自由/开源世界的人们不会坐视不管。这就是合规市场形成的源头。

自由软件基金会先是在2001年成立了GPL Compliance Labs，自由软件基金会的做法是相当宽容的，主要是说服和教育，显然随着2002～2004的更加夸张的巨头违规行为，自由软件基金会无意也没有兴趣处理这些事，这也就意味着外溢到社会的其它力量来承担，其中颇有建树的是2004年，Harald Welte 成立了 gpl-violations.org ，以及2006年成立的软件自由管理委员会[5]，后者也是自由软件基金会指定的发现违反许可情况的维权机构。[6]

但是这还不够，遵守法律还是要从主体的自觉执行才能运转的，光是执法者在外围呼吁并不能形成一个市场，那么就需要有工具的支撑，以及律师和法务们的共识，整个市场才能将每一块拼图找到。

## 没有那家公司更能比微软理解开发者的优势

作为积极推动软件作为版权保护和技术锁定的公司，微软从其创始人的“致电脑爱好者的一封信”就开启了和盗版作斗争的姿态，当然，自由软件开始的时候并没有引起微软的重视，直到1998年，NetScape 开源其浏览器，以及Linux被广泛采用，甚至是IBM的加入，据微软爆料出来的“万圣节文档”[7]来看，开源的开放方式确实是微软相当羡慕的一种卓越方式。

>Recent case studies (the Internet) provide very dramatic evidence ... that commercial quality can be achieved / exceeded by OSS projects.

到了2000年的时候，时任微软CEO的Steve Ballmer 则在接受采访时，对GPL授权下的软件做了如下的解读[8]，

> "Linux is a cancer that attaches itself in an intellectual property sense to everything it touches,The way the license is written, if you use any open-source software, you have to make the rest of your software open source,"

是相当的负面了。目前为止，癌症仍然是大多数不可治愈的致命疾病。

无巧不成书的是，Doug Levin 在微软工作多年，[9] 作为Windows的布道者，对于软件的许可理解，有着多年的训练痕迹。

> "跟踪特定贡献的个人许可，以确保衍生作品符合原始代码所附带的任何许可限制，这可能有助于开源。任何能让应用许可和确保合规的过程变得更简单的东西都是好东西。"[10]
>
>   Steve O’Grady ,Red Monk 联合创始人，《Kingmaker》

## BlackDuck 与OpenHub

我们不能坐而论道，以开源解释开源，而是要在具体的经济系统中找到合适的位置，开源项目不断发展：GCC、Kernel、Apache......，那么正如我们现实中的感觉一样，是空口无凭的，想要解决这些问题，需要从一家IT系统中使用的开源项目作为起点，没有这个我们一切都无从谈起。

作为连续创业者的Doug Levin 开始寻找能做此工具的工程师，不断的寻找投资，利用一切能用的资源，甚至在公司的命名上都使用了他儿子最喜花的玩具————一只黑色的鸭子。[12]

公司的第一个产品 Protex 立即获得了包括 Oracle 和 SAP 在内的众多知名客户的青睐，后来又获得了Fidelity 的青睐，Fidelity 不仅是公司的主要客户，还主导了BlackDuck的 B 轮融资。Black Duck 产品的采用率持续上升，它既是并购方希望审查并购软件时使用的工具，也是公司开发周期的一个组成部分。


### 开源情报前哨 —— OpenHub

经济学的互补理论，没有哪个行业能像软件这么分工的让人难以琢磨，当然，计算机信息产业将这个理论是玩出了新高度，尤其是和开源相关联的，我们现在对于芯片和硬件厂商支持开源的情况已经理解的非常透彻了，但是作为SCA工具厂商收购开源代码分析网站Ohloh，也就是现在的OpenHub，那么就有很多人难以理解了。这里的一个鲜明的例子就是，中国有十几家作开源代码扫描的厂家，但是没有一家提供开源代码项目的，当然对OpenHub也没啥贡献。

BlackDuck 之所以能够成为业界的王者，对于代码匹配的知识库建设可谓是煞费苦心，Ohloh 是 2006 年由 Jason Allen 和 Scott Collison (前微软产品经理)创立的开源项目分析平台，2009 年 5 月 28 日，Ohloh 被流行开源开发平台 SourceForge 的所有者 Geeknet 收购，Geeknet 于 2010 年 10 月 5 日将 Ohloh 出售给了开源分析公司 Black Duck Software，Black Duck 将 Ohloh 的功能与其现有产品相结合，将该网站发展成为 FOSS 开发的主要资源，并于2014年改名为Black Duck OpenHub [11]。

OpenHub 可以视为“开源项目的 GitHub + Crunchbase + Alexa 排行榜”的混合体。收录了大量开源项目的：

* 开发者活动
* 代码规模
* 技术栈构成
* 许可信息
* 贡献图谱

作为历史的后来者，我们可以总结一下BlackDuck 收购Ohloh的战略精彩之处：

* 战略目的 1：构建“情报中台”

Ohloh 是 Black Duck 的开源情报采集前哨站：自动同步 Git、SVN、CVS、Mercurial 等项目代码；为 KnowledgeBase（代码指纹库）持续补充元数据；从开源项目自然爬取许可证变更、贡献者、维护活跃度等指标。 这是 Black Duck 能维持数据库新鲜度和广度的关键，后来者难以用商业手段快速复制。

* 战略目的 2：建立公信力和开放性门面

虽然 Black Duck 是闭源商业公司，但 OpenHub 是开放平台；它向开发者展示“我们不是黑盒审查，我们也是贡献者的一部分”；增强客户信任，也为销售提供“前门导流”（软着陆）。

* 战略目的 3：反哺销售线索

企业 CTO、合规官在使用 OpenHub 查开源项目信息时，容易转化为 SCA 产品潜在用户；形成从“开源可视化”到“合规扫描”的一站式路径。

所以，OpenHub 是 Black Duck 真正构筑“全球开源雷达网”的关键资产。它不直接赚钱，但提供数据、信誉与引流，是战略级“情报高地”。

有人总结这个收购的神来之笔：

> “Black Duck 的核心资产不是软件，而是它所掌握的开源世界的结构性知识图谱——而 OpenHub 正是这幅图谱的探照灯。”


## 说服律师和法务

法律市场的形成，除了那些已经成为既定事实的主张，还需要形成行业共识，也就是说，GPL 有自己的主张，Copyleft 哲学也罢，最后总是要落地到具体的项目中，这样就产生了我们所熟知的法律经济的成本问题。BlackDuck 开展开源项目代码的合规审计业务，没有律师和法务们的支撑，无异于在沙滩上建高楼，BlackDuck 作为一家美国公司，深知法律才是财富的根基，于是他们开始招募法律界的人才，Doug 找到了Karen Copenhaver， 一位1979年就在IBM工作的律师，经历过IBM混乱的操作系统开发和市场，对于开源有着极为深刻的理解和热情。我们不妨看一下十几年后，BlackDuck成功后，最Karen Copenhaver的总结[12]：

> 道格在组建团队和宣传开源合规理念方面做得非常出色。他招募了凯伦-科本哈弗（Karen Copenhaver），她是一位非常著名的开源律师，作为这一使命的忠实信徒，她与各大科技公司的法律顾问就开源的适当使用进行了交谈。

Karen Copenhaver 加入BluckDuck 之后，到离开后加入Linux基金会[13]，一直都致力于说服企业法务要在并购、诉讼之前最好开源代码的合规工作。

![](https://cdn.facesofopensource.com/wp-content/uploads/2017/02/09202156/karencopenhaver.faces22359.web_.jpg)

> “winning the right hearts and minds before charting a course of action. You should also avoid mandating a course of action advocated by lawyers alone,” 

Karen Copenhaver 在2005年度OSDL Enterprise Linux Summit上的分享时如此倡导[14]。



## SPDX 与SBOM



## OpenChain


## 总结一下：

当人们讨论 GPL、MIT、Apache 这些“开源许可证”时，常误以为这不过是一套“开发者友善的建议规范”。但法律与合约的角度提供了全然不同的解释：

> 每一份开源许可，都是一纸授权合同（license agreement），其作用等同于商业软件的授权合同，只不过其“对价”不是金钱，而是责任（obligation）与协作。

Copyleft（如 GPL）更进一步，它将“继承义务”写入法律结构：凡是使用、修改 GPL 代码者，必须将其修改后的衍生代码也在同样许可下开源。这种“传染性”设计，被视为法律合约中的“持续义务条款（perpetual obligation clause）”。

在法经济学家波斯纳（Richard Posner）所强调的契约自由原则下，开源开发者对其代码拥有完整的授权支配力。这种支配力并未因其“免费”而消失，反而通过精妙的许可机制，构建了一个庞大的“合约网络”——这正是 SCA 工具要审查和追踪的核心。

SCA 工具的崛起、SBOM 的标准化、合规工作的职业化，本质上是对这套经济逻辑的制度回应。没有合规，开源就无法大规模融入商业供应链，也无法获得法律上的可托付性（legitimacy）。

这也是为什么波斯纳所强调的“效率导向的法律制度”理念，能在开源治理中找到深刻映射：

* 开源的制度效率不靠警察和法院，而靠许可可视性 + 合规自动化；
* 合规工具的出现，降低了交易成本，使软件生态中的信任可持续。

简而言之，**开源合规就是对“代码即契约”这一新型制度结构的工程回应**，它不是对开源自由的约束，而是让自由得以在商业世界中被托付、被执行、被依赖。

如果说专有软件时代，开发者的权力来自于许可收费的控制权，那么在开源时代，权力则来自于社区秩序的约束性执行。

开源不是“无政府主义”，也不是技术乌托邦。它是一种对“自愿协作”与“责任结构”高度敏感的制度工程。开源合规不是破坏自由，而是维护自由赖以运作的最低秩序。

从 GPL 诞生的那一刻起，这种秩序就已嵌入开源世界的 DNA。而 Doug Levin 之所以创办 Black Duck，是因为他看到了——在全球商业正面临“开放转型”之际，最宝贵的不是更多的自由，而是更多 对自由的尊重。

## 番外：中国市场的形成尚待时日

想了解当前猪肉的价格，就去家附近的农贸市场，就是这么简单。想了解本土开源合规的市场，就去看看类似BlackDuck 的SCA工具的提供商。自由市场非常的神奇，其实是一环扣一环，也可以通过各家公司的法务的职位情况来观察。

笔者看到的情况是，作为整体的开源搭便车状态，以及对开源知识财产权的敌意，尤其是刻意贬低GPL和Copyleft的观念占据上风，这个市场还不存在，拓展和开拓也将面临极大的挑战，这是经济系统的结构性问题。只能说期待未来会有可能～ 尊重互惠的市场规范。

## 参考资料

1.  Salus, Peter H. (2005). The Daemon, the Gnu and the Penguin. Groklaw. 
2.  Doug Levin Looks Back https://medium.com/%40gcvp/doug-levin-looks-back-6f0a3c867803
3.  https://en.wikipedia.org/wiki/Free_Software_Foundation 
4.  https://www.tech-insider.org/free-software/research/1994/0104.html
5.  Conservancy's Copyleft Compliance Projects https://sfconservancy.org/copyleft-compliance/ 
6.  违反GNU许可证的情况 https://www.gnu.org/licenses/gpl-violation.html
7.  https://en.wikipedia.org/wiki/Halloween_documents
8.  https://www.theregister.com/2001/06/02/ballmer_linux_is_a_cancer/
9.  https://www.linkedin.com/in/bduck1/details/experience/
10. https://www.linuxinsider.com/story/black-duck-provides-open-source-legal-tool-37427.html
11. https://en.wikipedia.org/wiki/Open_Hub
12. https://www.generalcatalyst.com/stories/congratulations-black-duck
13. https://www.linux-magazine.com/Online/News/Legal-Experts-Join-Linux-Foundation-Team
14. https://www.eweek.com/servers/black-duck-lawyer-due-diligence-can-help-avoid-ip-disputes/
15. 


## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
