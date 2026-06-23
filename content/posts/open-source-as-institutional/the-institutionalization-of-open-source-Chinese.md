---
categories:
- 开源
- 哲学
- 智识
- 思考
date: 2026-06-22T14:11:57+08:00
description: "运用新制度经济学的概念，如交易成本经济学、制度经济学、产权理论和信息经济学，研究开源运动的发展。通过追溯开源中制度的演变，讨论这一模式的比较制度优势是什么。结论是，使开源成为组织软件及软件相关服务生产和分销的有吸引力的替代模式的，是开源的制度框架，而不仅仅是开源软件的低成本。替代性组织将会形成，现有组织也将转型以利用其优势。"
keywords:
- Open Source
- Culture
- Reading
- Insight
tags:
- 洞察分析
- 开源之道
- 阅读札记
title: "开源的制度化（译）"
url: ""
authors:
- Robert A. Gehring
translater:
- 「开源之道」·适兕 X 「开源之道」·窄廊
---

## 译者按

端午假期，适兕读到此文，颇感震惊，20年前已然有学者用新制度经济学理论解释过开源了，而且展望堪称神预测，适兕顿时感慨如果再2024年初遇到此文，则无须遭受半年折磨之久的痛苦经历，去摸索自己的经济学课程。读完之后，再读了两遍，仍然相见恨晚，还和窄廊合作写了一篇续作：[再谈开源的制度化：Hyper](/posts/open-source-as-institutional/the-hyper-institutionalization-of-open-source/)，仍然不过瘾，干脆翻译一遍，继续深挖作者的引用，以及后来人引用该文的作品。请各位看官细品！

本文仅供个人学习、温习、欣赏之用，有兴趣的读者，请阅读原文：Robert A. Gehring, The institutionalization of Open Source, Poiesis & Praxis, 2006.

## 1 引言

2005年6月，全球最大的软件开发公司之一IBM，宣布将开源开发方法整合到其软件生产过程中。在一次采访中，IBM软件集团战略与技术副总裁道格·海因茨曼表示：

> "我们基本上利用了我们在开源 Community 的丰富经验，借鉴了开源的许多理念、策略、工具以及大量的文化，从而实现转变IBM的内部开发实践，支持全球组件开发，并促进技术的协作和重用。"（Worthington 2005）

从历史的角度来看，开源的发展非常令人惊讶，甚至还带有一些讽刺意味，要知道就在几十年前，IBM 还保持着所有高科技企业中最封闭的态度之一。那么，为什么现在 IBM 要开放并重组其商业实践？开源模式对IBM（及其他行业巨头）有什么优势？**IBM 的决定背后所依托的开源经济学是什么？**

本文假设，吸引行业领袖的并非开源软件的某一单一属性，例如耳熟能详的许可成本极低。相反，是**开源的制度框架**使得开源成为了组织软件及软件相关服务生产和分销的颇具吸引力的替代模式。

### 1.1 "开源"起源

开源软件于1997年得名，当时一些非专有软件模式的支持者 —— 最纯粹地体现在自由软件基金会（见Stallman 1999）的"自由软件"概念中 —— 正在寻找更好的方式来向"系领带的人"推销这一概念（Perens 1999）。

对于非专有软件，不存在排他性知识产权，而排他性知识产权是专有软件模式的核心。相反，用户依法有权修改和重新分发软件。向用户提供程序的源代码，以促进相应软件的修改、重用和重新分发。从传统软件营销的角度来看，开源软件看起来几乎像是走在了完全的对立面，它几乎打破了原有的每一条规则。那么有人第一时间将其比作为共产主义，就显得一点也不怎么奇怪。

没有什么比这更错误的看法了。软件的版权保护是开源软件模式存在和可持续性的必要条件（Wall 1999，第142页）。如果没有版权，任何人都可以自由获取他人的工作成果并出售以谋取私利，而不补偿开发者社区。如果没有要求分发衍生作品时必须回馈某些东西，开源软件就会遭受"公地悲剧"（Hardin 1968）。

自由软件和开源软件运动有许多根源。其中一些可以追溯到20世纪60年代麻省理工学院的早期黑客，他们着手从根本上挑战并最终改变"在一家名为国际商业机器公司——IBM的非常大的公司中可以找到"的中央集权和"官僚世界"（Levy 2001，第41-41页）。黑客们反对这种等级制度。根据他们的伦理，信息应该是自由的，权威应该受到怀疑（Himanen 2001；Levy 2001，第40-41页）。黑客们提倡去中心化，而不是像IBM那样为"庞大的巨人"建造神秘而神圣的大厅来容纳计算能力：

> **"计算机权力归于人民！"**（Nelson 1974）

像IBM这样的行业巨头怎么会拥抱黑客精神呢？当然，"天下熙熙，皆为利来“。资本主义是关于利润的，而Linux现在是大生意，IBM持有Linux服务器市场的重要份额。然而，单凭利润尚无法解释整个图景，因为在同一时间，黑客们积极支持IBM和其他行业巨头对抗知识产权侵权索赔的竞争对手，而世界各国——挪威、巴西、秘鲁、印度等——宣布支持开源模式（anon. 2005；Ashurst 2004；Noronha 2003）。

在审视支持和反对的论点时，很难不产生一种印象：**开源首先是一个政策问题，一个关于如何最好地组织信息社会未来的争论**，而软件刚好处于杠杆位置。技术发展应该是专有的，由只顾自己业务的公司提供，不受国家干预吗？还是应该由公众指导和控制，因为公众对技术塑造的结果有正当的利益诉求？如果是这样，什么是最好的监管模式？公共利益应该像工业时代那样由政府机构代表吗？或者，开源运动是否成功地展示了一种塑造技术和产业的新方式，从而塑造信息社会，让公众直接参与？

社会用以治理其主体互动的手段就是制度。"制度构建人类交换中的激励，无论是政治的、社会的还是经济的。"（North 1990，第3页）。人类互动的结果由他们运作其中的制度框架所施加的（相对）成本所引导。如果开源已经成为组织软件生产、分销和使用的替代方式，那么开源框架的制度成本必须与传统模式相比具有竞争力。利用 Coase 1988a；North 1981, 1990；Williamson 1985 等伟大的经济学家们的新制度经济学框架，更仔细地审视开源运动内部制度的演变，将有助于我们找到上述问题的初步答案。这同时也为道格·海因茨曼的话赋予实际意义："开源的理念、策略、工具以及大量的文化"。

---

## 2 制度的重要性

人类互动受到制度的约束。制度既界定允许什么，也界定禁止什么（North 1990，第4页），它们减少了个人在特定情况下面临的选择集（North 1981，第201页）。"制度通过为日常生活提供结构来减少不确定性。"（North 1990，第3页）因此，它们使人类互动的结果更加可预测。

在一个围绕商品、服务和资本的市场交换建立的社会中，正如资本主义那样，制度与技术（Freeman and Louçã 2002；Williamson 1985，第86-90页）和交易成本（Coase 1988c）一起，决定了交换成本。而交换成本反过来决定了专业化的成本和工作分工的组织形式，即生产组织（Coase 1988c）。

法律、章程和其他正式规则惩罚违规行为，而更非正式的规则，如行为准则、习俗、常见做法和伦理规范，则通过使遵守规则比违反规则相对更便宜来隐性地执行。

追求目标的个人几乎总是面临遵守某些规则或违反它们的选择。根据新古典经济学的个人主义最大化模型（Homann and Suchanek 2000，第49页），这一决定是成本收益和风险分析的结果，在任何地方都以机会主义行为告终。

通过为逃避责任创造抑制因素并对不当行为施加惩罚，激励被引导向合作行为，搭便车问题（见Olson 1965）得到解决。但意识形态也发挥着重要作用（North 1981，第45-48页）。如果不考虑意识形态，个人效用函数就无法得到满意的解释。在没有意识形态补充正式规则和合规程序的情况下，稳定的政治系统将是不可能的（North 1981，第205页）。如果执法成本超过使用制度的收益，制度在没有其支持意识形态的情况下就不再可行。

制度并非是静态的，它们会随着时间的推移而演变和变化。制度由人类创造（North 1990，第205页），可以是显性的，如法律，也可以是隐性的，如市场。技术、资源可用性或人口规模和结构的变化，都可能通过改变制度的相对成本（价格）来诱导制度的重大变化。由于规则制定者的自私行为（North 1990，第7页）、路径依赖和显著的交易成本，低效的制度也可能会长期存在[North（1981，第14、60页）和North（1990，第7-8章）]。

### 2.1 制度与组织

制度定义合作与竞争的规则。组织是游戏的参与者，试图通过遵守规则、违反规则或试图改变规则来利用机会。在组织内部，交易成本低于替代的操作方式。从长远来看，制度与组织的相互作用决定了经济系统的绩效（North 1990，第4页）。组织围绕其形成的重要制度包括合同、企业、市场、国家、宪法、法律、产权、标准、惯例、规范、行为准则和意识形态。重要的组织包括经济实体、政治实体、社会实体和教育实体（North 1990，第5页）。中间形式确实存在。

---

## 3 在软件生产组织中探寻制度

迄今为止，软件生产的组织尚未在（本地或全球）商业视角之外得到广泛探索。明显缺乏的是，除了大量关于知识产权问题的论述外，对这一重要经济部门、其演变和特殊性的深入制度分析是不足的（McCormack 2001，第75页）。鉴于信息技术的一般经济相关性，以及软件行业的重要性，这一发现确实令人惊讶。

随着开源研究的增多，状况开始有了改变。由于开源软件生产不容易用新古典经济学术语解释，研究几乎自然而然地聚焦于制度经济学问题。激励、产权、组织和交易成本成为研究的主要焦点，其中产权主题吸引了最大的关注。与此同时，已有大量研究文献可供参考（Feller and Fitzgerald 2002）。

现在，两种相互可以替代且成功的软件大规模生产和分销模式的存在，为我们提供了独特的机会，可以"从不同制度框架内此类活动实际如何进行的研究中"进行概括（Coase 1988b，第211页）。通过采用比较制度方法，可以避免陷入关于软件生产和分销制度经济效率的"避免陷入那种以完美世界为参照来评判现实制度的无效争论"（Demsetz 1969）。幸运的是，技术作为变量可以被排除，因为它在专有开发和开源开发之间没有显著差异。软件仍然主要由开发人员手工编写代码。因此，**效率收益和损失必须归因于制度和组织因素，而非技术差异**。

将专有软件视为商品，管理其生产、分销和使用的最相关制度包括：

- **国家**，在其范围内制定和执行法律。
- **产权**，由国家设计。
- **合法合同**，受法律支持。
- **企业**，软件在其中生产。
- **市场**，知识产权、软件和劳动力在其中交易。
- **标准**，定义互操作性的空间。
- **规范**，定义可接受的行为。
- **代码本身**，约束人们处理软件的行为，以及用户与软件的交互和通过软件的交互。

所有这些制度都在一种或另一种情境中约束着处理软件的人的行为，无论是使用软件、销售软件还是开发软件。在个人成本收益核算中，制度所施加的成本与替代安排（如果存在）进行比较，个人效用得到优化。

在以下章节中，将讨论开源运动的基本制度及其演变。目的是论证开源不仅提供了大家都能看到的明显优势，如零许可费，还提供了一整套的替代制度。正是这一整套替代制度，在特定情况下，能够在软件开发中实现卓越绩效。**制度绩效的优势让软件生产的新组织形式成为了可能。**

---

## 4 制度与开源软件

开源（软件）运动从根本上说是关于合作的。在开源世界，一种组织信息密集型商品生产与分销的新方式被建立起来，尤其是软件[Weber（2004，第224-227页）和Benkler（2002），第371页]。理解开源模式的相对优势、其组织影响（Weber 2004，第16页）及其成功，意味着理解其制度和组织。

在开源方法中，资本主义的传统制度——产权、合同、规范——被修改以最小化信息和交易成本。它们还被用来最大化后续创新者和用户的激励，而不是将这些激励专门保留给原始创新者。与传统观念相反，即复杂商品的生产必须在企业的层级结构内进行管理，开源运动证明用户之间的自愿合作也能够胜任这项任务：

> "当然，这些志愿者不应该在世界上最大的、资金最雄厚的商业企业自己的游戏中击败它们。然而，这正是软件行业中正在发生的事情。"（Benkler 2002，第371页）

如果没有相对高效的制度，这样的成绩显然是不可能的。遵循其演变路径，将讨论开源运动最相关的制度。我从黑客的特定伦理开始，其发展早在20世纪50年代末就开始了。下一节继续讨论麻省理工学院黑客理查德·斯托曼在20世纪80年代初发明的特定产权制度。下一步是将这一产权范式应用于软件。自由软件及其姊妹开源软件的成功，通过采用或创建开放标准而得到进一步推进。最后，全球可用的开源开发工具和互联网门户建立了一个共同基础，使开发过程超越了地域限制。

### 4.1 伦理基础

《开源的成功》（Weber 2004）并非偶然发生，而是软件开发者理查德·斯托曼发起的巧妙制度构建的结果。斯托曼于1971年加入麻省理工学院人工智能实验室的黑客社区，并一直待到1983年，那一年他离开人工智能实验室创立了自由软件基金会（FSF）（Levy 2001；后记，第415-430页）。他决定离开人工智能实验室的原因是他认为黑客文化被日益增长的专有软件运动所腐蚀和侵害（Levy 2001）。

人工智能实验室的黑客传统可以追溯到20世纪50年代，当时学生和其他感兴趣的人在实验室安装的早期计算机上自学编程。作为对其款待的回报，黑客们帮助开创了交互式软件开发领域，并发明了许多现在熟悉的软件。

从制度分析的角度来看，更重要的是这群黑客创造的伦理 —— 黑客伦理。它基于一些简单的原则（Levy 2001，第39-49页）：

> 1. "对计算机的访问——以及任何可能教会你关于世界运作方式的东西——应该是无限和完全的。始终服从动手实践的必要性！"
> 2. "所有信息都应该是自由的。"
> 3. "不信任权威——促进去中心化。"
> 4. "黑客应该根据他们的黑客能力来评判，而不是根据学位、年龄、种族或职位等虚假标准。"
> 5. "你可以在计算机上创造艺术和美。"
> 6. "计算机可以改变你的生活，让它变得更好。"

基于这些原则的伦理显然包含了一种与马克斯·韦伯所认定的"新教伦理与资本主义精神"相比的替代世界观。技术实用主义、信息自由、非歧视、同行认可和"乐趣"而非利润最大化的价值观，帮助一个志同道合的 Community ——黑客们——凝聚在一起。

由于没有排他性产权，没有必要签订正式协议，如交换程序代码的合同。没有监控人们遵守合同条款的成本，也没有执行合同的成本。从交易成本的角度来看，重用他人的想法，结合数字表达的想法几乎可以无成本复制的特性，黑客伦理使软件的增量创新变得廉价开发。

然而，将产权引入这个社区被证明是破坏性的。当金钱作为动机变得 predominant（Levy 2001，第429页），黑客伦理被排挤出去。但黑客伦理继续存在，无论是以个人形式体现，例如理查德·斯托曼的形象，还是以组织形式存在于爱好者俱乐部中（Saxenian 1994）。

### 4.2 GPL、"copyleft"原则与代码公地的创建

理查德·斯托曼在黑客社区破裂后，主动离开了麻省理工学院的人工智能实验室，为的是以独立能够继续坚持黑客伦理。他打算"编写一个流行的专有计算机操作系统UNIX的版本，并将其免费提供给任何想要它的人。"（Levy 2001，第427页）

为了传播黑客伦理，为了将其可操作化，斯托曼发明了 copyleft 原则，并将其嵌入到将成为自由和开源运动最频繁使用的软件许可证中——GNU通用公共许可证（GPL）。GPL成为各种风格的开源许可证的蓝图。由于其在创建开源社区制度中的核心作用，GPL需要被进行更加深入的分析。

Copyleft 常被描述为反版权。然而，这并不正确。Copyleft 不如说是公开声明放弃对自己作品的排他性主张，以互惠为条件。互惠通过设定的条件性来实现。

GPL包含涵盖产权和许可的条款。它基于版权原则，以便国家在必要时执行它，这确实已经发生过（Ebinger 2005）。

在GPL文本的开头，序言回荡着黑客伦理的原则，表述如下：

> "大多数软件的许可证旨在剥夺你分享和更改软件的自由。相比之下，GNU通用公共许可证旨在保证你分享和更改自由软件的自由——确保软件对其所有用户都是自由的。"

用户被保证的基本自由是：

> 1. 出于任何目的运行程序代码的权利。（GPL，第0条）
> 2. 复制和分发程序代码的权利。（GPL，第1条）

所有这些权利的授予无需事先谈判以获得原始开发者的许可。任何人都可以使用代码，但没有人可以阻止他人以相同方式使用它。也就是说，只要用户遵守许可条件。

**GPL将软件的公共产品经济性质与法律制度相结合。** 由于复制数字信息密集型商品对于任何实际目的来说都是无成本的，因此不可能有"过度放牧"（Frey and Jegen 2000的意义上）的情况出现。因此，限制软件的使用并非不可或缺。如果从将信息或信息密集型商品保持为私有财产中获得的收益不值得其成本，那么放手并省去不必要的交易成本更为经济。

但GPL更进一步，授予副本用户额外的自由：

> 1. 修改程序代码的权利，从而创建衍生作品。（GPL，第2条）
> 2. 访问每个GPL许可程序源代码的积极权利。（GPL，第3条）

同样，这些权利的授予无需事先谈判以获得原始开发者的许可。

这四项条款共同赋予了用户在现行版权法和常见专有许可证下所不享有的行动自由。实际上，GPL条款为软件源代码划定了一个公地（Lessig 2001，第57页），代码可以从中复制而无需大量的前期投资。

为了防止这个公地变得停滞，这些权利被"某些责任"所补充（GPL，序言）：

- 通过专有许可证进行"占有"被排除。（GPL，第4条）
- 如果分发，修改后的程序代码也必须采用GPL许可。（GPL，第6条）

因此，对原始代码的增强会回流到公地中。公地不仅没有"过度放牧"，反而通过某些行为得到了扩展。

上述权利和义务的组合通常被称为**copyleft**。

从竞争的角度来看，GPL通过促进模仿和"正向工程"（Samuelson and Scotchmer 2002，第1653页）消除了市场进入壁垒。由于市场上有许多竞争供应商提供近乎完美的可替代商品，GPL许可程序副本的市场价格将是生产副本的边际价格加上其分销的额外费用，即在数字分发的情况下接近于零。

结果在供需两方都有影响：

1. **在供应方面**，GPL 隐含的经济学颠覆了纯预包装大众市场软件商业模式。简单地按副本收费在长期内是行不通的。如果没有额外的服务或与某些更难复制的产品的捆绑，或专有代码，开源软件供应商将很难从销售代码中获利。相反，服务和支持导向的商业模式将为成功奠定基础。
2. **在需求方面**，使用开源程序将软件安装的预付成本降低到大约为零。理性的软件用户——商业用户和家庭用户——都会被低价所吸引。而且由于允许复制，一旦某段代码被提供，供应就不存在稀缺性。完整的市场需求可以得到满足。

### 4.3 许可

许可是软件供应商避免与销售合同相关的法律责任的一种方式。根据合同法，供应商对销售商品中的缺陷负责。软件中的缺陷，或通常所说的bug，存在于所有打包软件中，因此供应商总是需要承担责任，特别是因为在大多数国家（与美国不同）不能否认默示保证。此外，在销售合同中，供应商必须指明他们拥有的产权范围以及实际转让的产权，这可能会限制他们自己的权利（OECD 1985，第167页）。这两种风险都通过不出售而是许可软件来避免。

GPL包含一个自由的许可框架。首先，GPL面向所有人。没有封闭群体，许可的使用是保留给特定群体的。第5条坚持认为GPL许可是全有或全无的解决方案，没有谈判空间。修改和分发GPL许可的程序构成接受许可条款的协议。

如果没有谈判，如在GPL代码的情况下，那么就没有因谈判而产生的交易成本。因此，许可开源代码是绝对廉价的。没有需要签署或"点击签署"的合同。接受标准许可条款就足够了。

### 4.4 产权与开源运动

产权是市场经济的新制度经济基石之一（Williamson 1985）。它们被建模为一束权利，其行使保留给权利持有者或资源所有者（Cooter and Ulen 2004，第77-78页）：

- 使用资源的权利
- 阻止他人使用资源的权利
- 转让产权的权利

根据新古典概念，产权是必要的，以便通过资产的自愿转让实现稀缺资源的福利最大化使用（Alchian and Demsetz 1973；Cooter and Ulen 2004）。

对于信息密集型商品，产权主要由知识产权法定义，授予作者对其作品的版权，授予发明者专利。与实物资产的产权不同，知识产权通常不是完全转让的，而是许可的。许可是权利持有者允许以通常非法的方式使用资源的许可（Garner 1999，第350页）。

信息密集型商品，尤其是信息商品，是公共产品，因为它们具有两个特征属性（Salvatore 2003，第611页）：

**非竞争性**：一个人对信息商品的消费不会干扰其他人在同一时间对同一商品的消费。

**非排他性**：排除搭便车者消费信息商品是困难且昂贵的，有时昂贵到令人望而却步。

鉴于这两个属性，对公共产品投资回报的私人占有可能是不可能的。亏损的预期使潜在投资者失去动力，从而增加了公共产品供应不足的可能性。结果将是市场失灵。

版权（一般知识产权）的传统经济学理由是防止这种市场失灵。它建立在假设之上，即如果没有对原始创作者强有力的货币激励，知识产品的供应不足将会发生（Landes and Posner 2003，第11页）。通过授予创作者一段排他性期限来销售其作品副本，创造了外在的（货币的）激励。作为出版的交换，他们获得保护以防止模仿者。这种特权允许知识产权创作者对副本收取高于复制边际成本的价格（Landes and Posner 2003，第11页）。因此，他们能够从销售其作品副本中提取租金，从而弥补制作原件的成本。

另一方面，开源模式建立在隐含假设之上，即在人类创造性活动的广泛领域中，内在动机已经足以"促进科学和实用艺术的进步"，首先不需要额外的货币（即外在的）激励。相反，如果被允许，内在动机驱动的人们会在他们发现的基础上进行构建。通过促进包容而非排他的产权概念，即通过将现有数字信息密集型商品视为共同池资源，产权被设计为节约现有资源。通过鼓励复制、共享和重用，旨在最大化资源使用。作为小规模、独立改进的累积结果，用户驱动的创新得到促进。

同时，GPL对软件的专利保护采取立场（GPL，序言）。如果重新分发不可能不侵犯专利或不必支付专利使用费，那么重新分发是不允许的（GPL，第7条）。为了避免专利侵权分发，版权持有者可以限制其GPL代码的分发，以排除某些国家。虽然专利期限比版权期限短得多，但专利提供了更强的保护机制，因为即使是独立和类似的开发也被覆盖。有了专利，开发过程将不得不包括成本密集的专利搜索，或将专利搜索外包给专利律师的额外（昂贵）分工步骤。两者都会增加开发成本。监控和执行合规的交易成本将是显著的，也许令人望而却步。

总之，如果正在重用现有代码，开源运动的产权模型对其用户施加了较低的制度成本。版权和copyleft许可作为防止代码公地被圈占的盾牌。它由此授予用户和开发者的更大自由显然满足了他们的需求，而它对他们的要求使该模式可持续。

### 4.5 标准

技术越复杂，其利益相关者的需求越分散，标准作为协调供需的手段就越重要（Foray 2004）。

标准本质上是降低交易成本的一种手段：首先，通过信号传递降低测量成本；其次，通过定义接口使组件和互补产品及服务的独立开发和生产成为可能（即专业化和劳动分工）；第三，通过促进大规模生产。因此，标准有助于防止投资重复和资源浪费。

在网络商品（如软件）的情况下，标准还有助于创造网络外部性。反之，网络效应有助于创建标准（Shapiro and Varian 1999，第9章，第261-296页）。在后一种情况下，所谓的**事实标准**出现，与正式商定的**法定标准**相对，通常是市场参与者主导地位的结果（OECD 1985）。

标准可能是促进竞争的或反竞争的。根据使用方式，标准可能促进或阻碍互补产品对主导平台的生产、传播和整合（David and Steinmueller 1994，第220页）。标准可以是开放的，即所有人都可以自由采用，也可以是专有的，即只有获得某人许可才能采用。

开放标准是"一个宣布的中立区……一个通过创新进行竞争不会发生的领域"（Clapes 1993，第264页）。如果某一特定技术要成为开放标准的一部分，现有知识产权必须被免费获取（Clapes 1993，第264、265页）。由于开放标准对所有人都是免费的，它们是促进竞争的。因此，开放标准带来了"在大多数情况下，更多的技术进步和更多的价格竞争。"（OECD 1985）

本质上，开放标准旨在减少供应商的选择集，以扩大客户的选择集——包括集成商和最终用户。开放标准的对应物是封闭的专有标准，即采用不是对所有竞争者免费的标准。这种标准通常是一个供应商（或一组供应商）持有主要市场份额并试图排除竞争者的结果。

开源社区的开发者来自世界各地。他们异步地处理复杂系统和网络的不同部分，其集成需要互操作性。因此，遵守一套共同的标准至关重要。为此，开源社区强烈推广开放标准，要么采用它们，要么创建它们。第二个重要原因是独立于专有标准的供应商。

### 4.6 代码

代码，像其他制度一样，定义用户和开发者可以在系统内和通过系统做什么（Lessig 1999）。

**代码**这一制度在我们的语境中呈现不同的形态。首先，有软件的源代码描述其功能，即包含计算机指令的代码行。在开源社区中，这段代码对任何人开放修改。因此，在开源中，纯源代码不是个人在做选择时的限制因素：功能的修改总是可能的。不过，需要适当的技能。

其次是开源工具和系统的架构。虽然关于架构这一术语在软件方面涵盖什么有很多定义，但其含义通常包括质量属性（Albin 2003，第9页）。

架构是代码的独立属性。不同的架构可以提供相同的功能。代码的组成、组件的交互以及对两者的约束，都是架构的一部分。由于开发者的技能不同，为架构所做的选择影响着开发者之间的关系（Hohmann 2003，第5-6页）。架构对特定知识的要求越低，潜在开发者的池子就越大。从某种意义上说，系统的架构是管理其代码的规范的集合，某种元代码。

第三，代码指的是实际处理开源开发和分发过程的技术手段。它是使开源模式可行的工具。互联网作为通信媒介、互联网上的代码仓库以及本地开发工具，都是这个工具箱的一部分。从经济上讲，中央仓库和门户网站作为进入开源代码库的入口点的存在，不仅降低了开发者的交易成本，也降低了其他用户的交易成本。搜索成本被最小化，项目属性变得透明。正如谷歌改变了互联网上的信息检索，开源门户网站改变了源代码检索。

**UNIX代码作为范式**

虽然还有其他重要项目，但由于其作为（间接地）开源运动起点的相关性，以及将其技术哲学法典印刻于开源运动之上，UNIX操作系统值得特别关注。

当理查德·斯托曼决定创建一个自由操作系统时，他选择了UNIX作为模板，如前所述。他选择的背景既是技术性的，也是政治性的。

最初，UNIX由三位AT&T贝尔实验室的研究人员——肯·汤普森、丹尼斯·里奇和鲁德·卡纳迪开发。肯·汤普森在1969年夏天用1个月时间实现了后来被称为UNIX的原型（Salus 1995，第10页）。

由于需要节约劳动力和计算能力，新操作系统遵循了"尝试构建简洁的小东西而不是宏伟的东西"的方法。有时被称为KISS哲学（"保持小而简单"），这种设计方法很快证明是非常有用的范式，支持创新的分发。

与美国政府的一项同意令实际上禁止AT&T销售软件。或者至少AT&T的律师是这样解读同意令的条款的："除了电话和电报，没有其他业务"（Salus 1995，第58页）。因此，当1973年肯·汤普森在一次关于UNIX的演讲后收到许多许可操作系统的请求时，它们得到了积极的回应，但条件非常基本：不提供支持，且需预付款（同上）。任何支持或错误修复都被拒绝，用户只能靠自己。这一政策

"立即产生了效果：它迫使用户彼此分享。他们分享想法、信息、程序、错误修复和硬件修复。"（Salus 1995，第65页）

UNIX迅速在AT&T计算部门之外取得成功，甚至在欧洲、澳大利亚和日本。除了其技术优势，UNIX本质上是免费提供的。复制费用是名义上的，系统附带源代码。UNIX在理查德·斯托曼哲学的意义上是自由软件。

对于用户来说，访问源代码使其能够将系统移植到其他平台。而拒绝支持使其有必要自己查找和消除错误。

UNIX是计算机科学研究的完美平台：其架构允许逐步开发和集成过程，接口有文档记录，其代码可以被研究。UNIX是一个通过设计赋予用户控制和灵活性的操作系统，其模块化架构对独立增强开放。

1983年"小贝尔"从AT&T母公司分离后，同意令失去了基础，AT&T决定进入硬件和软件业务。UNIX被商业化了。以前免费的东西现在变成了专有财产。对于理查德·斯托曼来说，在经历了麻省理工学院黑客社区被摧毁的经历后（Lohr 2001，第212-213页），UNIX几乎成为他"对抗专有软件的战争"的自然目标（同上，第212页）。斯托曼恰当地将他的项目命名为GNU，因为GNU's Not UNIX。

同样重要的因素是UNIX没有受到可能阻碍斯托曼努力的专利保护。即使AT&T持有UNIX的版权，独立实现也是完全合法的。通过在copyleft许可下亲自编写GNU操作系统，斯托曼可以消除他认为自由软件世界基石的最后障碍。GNU代码将是用户自由的关键：用户将从专有软件强加给他们的限制中解放出来。

正如今天充分记录的（Moody 2001；Torvalds and Diamond 2001），Linux操作系统内核，于1990年在芬兰学生林纳斯·托瓦尔兹的倡议和领导下开始开发，填补了斯托曼近十年前开始的项目的中心空白。现有的GNU部分和Linux内核，两者都使用UNIX接口，在技术上也适合地组合成一个完整的操作系统。它们在法律意义上也适合，因为托瓦尔兹已将他的代码置于GPL之下，从而将其捐赠给斯托曼所设想的代码公地。copyleft原则要求Linux代码库的所有其他贡献者也这样做——这是Linux内核快速成长和成熟的关键因素。

尽管只受到FSF主角们的部分欢迎，但GNU环境和Linux内核共同实现了斯托曼10年前向世界交付自由UNIX的计划。尽管他们个人存在分歧，斯托曼和托瓦尔兹都在同一制度框架内工作。这是一个与软件即商业环境根本不同的框架，在后者中，专有软件的巨头几乎不受挑战地统治。对开源社区内运作的开发者/用户施加的约束与专有模式中的对应者显著不同。有不同的选择要做，有不同的成本要承担，有不同的收益要获得。

---

## 5 总结与展望

"产业结构可能随着成本的变化而迅速改变"，这是一个不言而喻的道理（Carlton and Perloff 2000，第6页）。

随着开源运动及其创建和正在创建的制度框架的出现，软件生产和分销的成本结构已经根本改变。那么，没有理由期望软件生产的组织将保持不变。

如前文所述，开源制度体系建立的一个主要后果是，识别生产要素（信息制品）、测量其性能、判断其效用、转让使用副本的产权、复制它以及可能修改它的总交易成本，远低于市场/价格体系内的交易成本。每当软件不是专门生产或消费的，即每当软件被转化并重新投入生产过程时，开源运动的制度框架提供了一个有竞争力的选择。信息密集型商品的其他研究和生产领域也可能从采用开源方法中受益。

随着在专有产品竞争条件下采用开源解决方案，现在很清楚，大型关键任务软件系统的开发既不需要企业也不需要市场。通过普遍不鼓励使用价格市场机制进行要素配置，在传统结构内，尤其是在传统企业和市场内组织软件生产受到歧视。相反，利益相关者网络——个人以及其他类型的组织，包括企业和临时特设组织——可以将开源代码库作为共同池资源进行管理。在这个软件生态系统（Thomas and Hunt 2004）中，无谈判和无价格地从代码池中重用代码受到青睐。从长远来看，这降低了生产新代码和维护现有代码的成本。虽然排他性产权为自然资源共同财产困境提供了解决方案（North 1981，第86页），但开源公地为人工稀缺资源的排他性产权困境提供了补充解决方案，该困境是为了提高激励而限制获取的权衡（Landes and Posner 2003，第21-24页）。

关于产权，GPL并没有像常被误解的那样移除版权保护。GPL程序副本可以被占有，但程序不能被排他性地拥有。GPL及其后代，即所谓的开源许可证，将权力和效用转向副本的占有者，即用户。由此，它将代码制品更接近传统的财产模式，即信息制品的占有者而非其创作者可以行使产权，从而对抗将越来越多的权力集中在创作者和知识产权持有者手中的趋势。

基于现有知识，无法一般性地预测企业/市场模式和开源社区模式哪一种将在软件生产中占上风。利益相关者将根据具体情况做出决策。在代码重用重要性不大的地方，开源模式不太可能被偏好，因为承担参与社区的成本对于一次性投资没有意义。然而，在开放标准、现有信息的重用和资源共享促进技术进步的地方，类似开源的生产模式很可能在未来发挥重要作用。

替代性组织将会形成，现有组织也将转型以利用其机遇。IBM和其他公司已经开始。考虑到它们在联盟中的活动、正在进行的流程外包、与研究机构的合作伙伴关系以及它们对开源活动的承诺，网络化的作用日益明显。

传统的、自给自足的企业正在消失。即使是前行业领导者也无法在不成为创新网络一部分的情况下创新和生存。由于它们大多数既是技术的用户也是生产者，创新的焦点倾向于转移到用户（von Hippel 2005a）。传统的知识产权框架不适合信息社会中基于网络的创新和生产的要求。当成功的产品开发至少部分依赖于处理存在于需求侧的隐性知识时，当研发紧密结合时，正如软件项目的情况，将用户整合到生产过程中是成功的关键（McCormack 2001）。开源的制度框架——黑客伦理、copyleft、代码和工具池以及开放标准的集合——加上公共产品的经济学，为这些挑战提供了答案。

---

## 参考文献

Albin ST (2003) The art of software architecture: design methods and techniques. Wiley, Indianapolis
Alchian AA, Demsetz H (1973) The property rights paradigm. J Econ Hist 33(1):16–27
anon. (2003) Open source software: Microsoft at the power point. The Economist. http://www.economist.com/business/displayStory.cfm?story_id=2054746. 11 Sept 2003
anon. (2005) Norwegian minister: proprietary formats no longer acceptable in communication with government. Tatle. http://www.andwest.com/blojsom/blog/tatle/agenda/2005/06/27/Norwegian_Minister_Proprietary_Standards_No_Longer_Acceptable_in_Communication_-with_Government.html. 27 June 2005
Ashurst M (2004) Brazil falls in love with Linux. BBC News. http://news.bbc.co.uk/1/hi/business/3445805.stm. 01 Feb 2004
Bar M, Fogel K (2003) Open Source development with CVS, 3rd edn. Paraglyph Press,Scottsdale
Benkler Y (2002) Coase’s Penguin or Linux and the nature of the firm. Yale Law J 112(3):369–446
Besen SM (1987) New technologies and intellectual property: an economic analysis. RAND Note, Santa Monica
Carlton DW, Perloff JF (2000) Modern industrial organization, 3rd edn. Addison-Wesley,Reading
Carr NG (2005) The end of corporate computing. MIT Sloan Manag Rev 46(3):67–73
Castells M (2001) Das Informationszeitalter I: Die Netzwerkgesellschaft. Leske + Budrich, Opladen
Chesbrough HW (2003) The era of open innovation. MIT Sloan Manag Rev 44(3):45-41
Clapes AL (1993) Softwars: the legal battles for control of the global software industry. Quorum Books, Westport
Coase RH (ed) (1988a) The firm. The market. And the law. The University of Chicago Press,Chicago, London
Coase RH (1988b) The lighthouse in economics. In: Coase RH (ed) The firm. The market. And the law, chapter 7, pages 187–213. The University of Chicago Press, Chicago, London. Reprinted from The Journal of Law and Economics 17 no. 2 (October1974):357–376
Coase RH (1988c) The nature of the firm. In: Coase RH (ed) The firm. The market. And the law, Chapter 2, Pages 33–35. The University of Chicago Press, Chicago, London. Reprinted from Economica 4 (November 1937)
Cooter R, Ulen T (2004) Law & economics, 4th edn. Pearson Addison Wesley, Boston
David PA, Steinmueller WE (1994) Economics of compatibility standards and competition in telecommunication networks. Inf Econ Policy 6(3–4):217–241
Demsetz H (1969) Information and efficiency: another viewpoint. J Law Econ 12(1):1–22
DiBona C, Ockman S, Stone M (1999) Open Sources: voices from the Open Source revolution. O’Reilly, Sebastopol
Dunwoodie B (2005) The state of the server market. cmswire. http://www.cmswire.com/cms/industry-news/the-state-of-the-server-market-000599.php. 07 June 2005
Ebinger T (2005) Tragen die Juristen Open-Source-Software zu Grabe? In: Lutterbeck et al.(eds) Die GNU GPL vor Gericht, chapter 4. pp 249–269
Eggertsson T (1990) Economic behavior and institutions. Cambridge University Press, Cambridge, New York
Feller J, Fitzgerald B (2002) Understanding Open Source software development. Addison-Wesley/Pearson, London
Foray D (2004) The economics of knowledge. The MIT Press, Cambridge, London
Franke N, von Hippel E (2003) Satisfying heterogeneous user needs via innovation toolkits: the case of Apache security software. Res Policy 32(7):1199–1215
Freeman C, Louc¸a˜ F (2002) As time goes by: from the industrial revolution to the information revolution, 1st paperback edition. Oxford University Press, Oxford, New York
Frey BS, Jegen R (2000) Motivation crowding theory: a survey of empirical evidence (revised version). Institute for Empirical Research in Economics, University of Zurich, Working Paper No. 49
Garner BA (1999) A handbook of business law terms. West Group, St. Paul
Grad B (2002) A personal recollection: IBM’s unbundling of software and services. IEEE Annal Hist Comput 24(1):64–71
Hardin G (1968) The tragedy of the commons. Sci Mag 162:1243–1248
Himanen P (2001) The Hacker ethic. A radical approach to the philosophy of business. Random House, New York
von Hippel E (2001) Innovation by user communities: learning from open-source software. MIT Sloan Manag Rev 42(4):82–86
von Hippel E (2005a) Anwender-Innovationsnetzwerke: Hersteller entbehrlich. In: Lutterbeck et al (eds), chapter 7, pp 449–461
von Hippel E (2005b) Democratizing innovation. MIT Press, Cambridge
Hohmann L (2003) Beyond software architecture: creating and sustaining winning solutions. Addison-Wesley, Boston
Homann K, Suchanek A (2000) O¨ konomik: Eine Einfu¨ hrung. Mohr Siebeck, Tu¨ bingen
Jaeger T, Metzger A (2002) Open Source Software: Rechtliche Rahmenbedingungen der Freien Software. C.H. Beck, Mu¨ nchen
Kesan JP, Shah RC (2002) Shaping code. http://ssrn.com/abstract_id=328920. Sept 2002
Kooths S, Langenfurth M, Kalwey N (2003) Open source-software: an economic assessment, vol 4. MICE Economic Research Studies. http://mice.uni-muenster.de/mers/. Dec 2003
Kuchinskas S (2005) Study: cost not only open source driver. Internet News. http://www.internetnews.com/stats/article.php/3520066. 14 July 2005
Landes WM, Posner RA (2003) The economic structure of intellectual property law. The Belknap Press of Harvard University Press, Cambridge
Lessig L (1999) Code and other laws of cyberspace. Basic Books, New York
Lessig L (2001) The future of ideas: the fate of the commons in a connected world. Random House, New York
Levy S (2001) Hackers. Heroes of the computer revolution. Penguin Books, New York
Libecap GD (1998) Common property. In: Newman P (ed) The new Palgrave dictionary of economics and the law (vol I–III), vol 1. MacMillan Reference Limited, London, vol I, A–D.pp 317–323
Litman J (2001) Digital copyright. Prometheus Books, Amherst
Lohr S (2001) Go to: the story of the math majors, bridge players, engineers, chess wizards, maverick scientists and iconoclasts—the programmers who created the software revolution.Basic Books, New York
Lutterbeck B, Gehring RA, Ba¨ rwolff M (eds) (2005) Open Source Jahrbuch 2005. Lehmanns Media, Berlin
McCormack A (2001) Product-development practices that work: how internet companies build software. MIT Sloan Manag Rev 42(2):75–84
Moody G (2001) Rebel code: inside Linux and the Open Source revolution. Perseus Publishing, Cambridge
National Commission on New Technological Uses of Copyrighted Works (ed) (1979) Final report of the National Commission on New Technological Uses of Copyrighted Works (July 31, 1978). Library of Congress, Washington
Nelson TH (1974) Computer lib/Dream machines. Hugo’s Book Service, Chicago. Revised and updated edition reprinted by Microsoft (1987)
Noronha F (2003) Free software carnival: Latin america takes to FLOSS in a big way. Linux Journal. http://www.linuxjournal.com/article.php?sid=6915. 02 June 2003
North DC (1981) Structure and change in economic history. W.W. Norton, New York, London 
North DC (1990) Institutions, institutional change and economic performance. Cambridge University Press, Cambridge, New York
OECD (ed) (1985) Software: an emerging industry, volume 9 of Information computer communications policy. OECD, Paris
OECD (ed) (1996) Information technology outlook 1995. Information computer communications policy. OECD, Paris
OECD (2002) OECD information technology outlook highlights. OECD Publications Service
Olson M (1965) The logic of collective action. Harvard University Press, Cambridge
Osterloh M, Frey BS (2000) Motivation, knowledge transfer, and organizational form. Org Sci11(5):538–550
Ostrom E (1990) Governing the commons: the evolution of institutions for collective action. Cambridge University Press, New York
Perens B (1999) The open source definition. In: DiBona et al (eds), pp 171–182
Pool R (1997) Beyond engineering: how society shapes technology. Oxford University Press, New York, Oxford
Reidenberg JR (1998) Lex informatica: the formulation of information policy rules through technology. Texas Law Rev 76(3):553–593
Salus PH (1995) A quarter century of UNIX. Addison-Wesley, reprinted and corrected edition
Salvatore D (2003) Microeconomics: theory and applications, 4th edn. Oxford University Press, New York, Oxford
Samuelson P, Scotchmer S (2002) The law and economics of reverse engineering. Yale Law J 111(7):1575–1663
Saxenian A (1994) Regional advantage: culture and competition in Silican Valley and Route 128. Harvard University Press, Cambridge, London
Shapiro C, Varian HR (1999) Information rules. A strategic guide to the network economy. Harvard Business School Press, Boston
Stack M, Gartland MP (2003) Path creation, path dependency, and alternative theories of the firm. J Econ Issues (JEI) 37(2):487–494
Stallman R (1999) The GNU operating system and the free software movement. In: DiBona et al (eds), pp 53–70
Stobbs GA (2000) Software Patents, 2nd edn. Aspen Publishers, Gaithersburg, New York
Thomas D, Hunt A (2004) Open source ecosystems. IEEE Software 21(4):89–91
Torvalds L, Diamond D (2001) Just for FUN—the story of an accidental revolutionary. HarperCollins Publishers, New York
Wall L (1999) Diligence, patience, and humility. In: DiBona et al (eds) pp 127–147
Weber S (2004) The success of Open Source. Harvard University Press, Cambridge, London
Williamson OE (1985) The economic institutions of capitalism. The Free Press, New York
Worthington D (2005) IBM turns to open source development. BetaNews. http://www.betanews.com/article/IBM_Turns_to_Open_Source_Development/1118688437/1. 13 June 2005

## 关于译者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Social Hacker，协作机制设计者。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 AI 助手（如 Gemini 3.1 Pro、Kimi2.6 等），「开源之道」·窄廊 负责高密度的逻辑推演与文本具象化 ，在对话中作为镜像与反弹板，提出问题、提供理论切入点并对推演进行反馈。仅偶尔进行双重验证！