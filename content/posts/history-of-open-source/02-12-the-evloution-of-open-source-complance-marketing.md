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

那一刻，他意识到——企业对开源的依赖正在飙升，而对合规的理解却接近空白。

## 违反许可使用开源软件是个常态

自从自由软件基金会发布GPL许可以来，违反许可的使用者便没有断过，在1991到2001这段时间内，GPL 的起草者、GNU运动发起人 Richard Stallman 主要通过非正式的邮件来处理这些事，偶尔也会由FSF的律师 Eben Moglen 来处理[3]，例如在1994年在邮件列表里的一个回复[4]：

> I've been told that people are distributing CD-ROMS of Linux binaries which include neither the source code nor a written offer to supply source code later.

> The GPL says that any distribution of binaries must contain either the source code or a written offer to supply source code (see the GPL for details of what is required).
> ......



## 作为应对违反许可的方法

从技术内幕收集的 GPL 执法的事件来看，这一阶段确实不多，随着www的崛起，LAMP 的广泛应用，违规的事件越来越多了，自由软件基金会先是在2001年成立了GPL Compliance Labs，自由软件基金会的做法是相当宽容的，主要是说服和教育，显然随着2002～2004的更加夸张的巨头违规行为，自由软件基金会无意也没有兴趣处理这些事，这也就意味着外溢到社会的其它力量来承担，其中颇有建树的是2004年，Harald Welte 成立了 gpl-violations.org ，以及2006年成立的软件自由管理委员会[5]，后者也是自由软件基金会指定的发现违反许可情况的维权机构。[6]

## 没有那家公司更能比微软理解开发者的优势

作为积极推动软件作为版权保护和技术锁定的公司，微软从其创始人的“致电脑爱好者的一封信”就开启了和盗版作斗争的姿态，当然，自由软件开始的时候并没有引起微软的重视，直到1998年，NetScape 开源其浏览器，以及Linux被广泛采用，甚至是IBM的加入，据微软爆料出来的“万圣节文档”[]来看，开源的开放方式确实是微软相当羡慕的一种卓越方式。

>
> 

到了2000年的时候，时任微软CEO的Steve Ballmer 则在接受采访时，对GPL授权下的软件做了如下的解读[]，

> "Linux is a cancer that attaches itself in an intellectual property sense to everything it touches,The way the license is written, if you use any open-source software, you have to make the rest of your software open source,"

是相当的负面了。目前为止，癌症仍然是大多数不可治愈的致命疾病。

无巧不成书的是，Doug Levin 在微软工作多年，[]

## 一些引人注目的官司


## BlackDuck 与OpenHub



## SPDX

## OpenChain



## 参考资料

1.  Salus, Peter H. (2005). The Daemon, the Gnu and the Penguin. Groklaw. 
2.  Doug Levin Looks Back https://medium.com/%40gcvp/doug-levin-looks-back-6f0a3c867803
3.  https://en.wikipedia.org/wiki/Free_Software_Foundation 
4.  https://www.tech-insider.org/free-software/research/1994/0104.html
5.  Conservancy's Copyleft Compliance Projects https://sfconservancy.org/copyleft-compliance/ 
6.  违反GNU许可证的情况 https://www.gnu.org/licenses/gpl-violation.html
7.  
8.  https://www.theregister.com/2001/06/02/ballmer_linux_is_a_cancer/


## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
