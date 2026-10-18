---
categories:
- 开源
- 哲学
- 智识
- 思考
date: "2026-10-18T19:30:00+08:00"
description: "当「Open is for the Weak」与「内行不开放」成为本土技术精英的潜意识，我们面对的不只是计算机史的盲区，而是一整套由应试筛选、秘方传统与搭便车惯性拧成的思维巨链。本文从一段技术山寨顺口溜切入，还原 UNIX、AWS 与大模型真实的开放公地谱系，并用莱考夫的框架理论跳出轨辩论，解构四根锁住认知的巨链。"
keywords:
- Open Source
- Commons
- Open Science
- Institutional Economics
- Framing Theory
tags:
- 洞察分析
- 开源之道
- 思想札记
- 开源治理
title: "对抗开源——那些错误的观念与行为"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
comments: true
draft: false
---

![](/images/2026/10/against-open-source-false-beliefs.jpg)

> （本图由大模型 sensenova-u1.5-lite 和 skill sn-image-base 生成。）

**摘要**

当“Open is for the Weak”与“内行不开放”这类说法在技术社群中流行起来，它折射出的已经不是计算机史的盲区，而是一整套由零和博弈、应试筛选与搭便车惯性共同塑造的思维结构。本文从一段技术山寨的顺口溜入手，还原 UNIX、macOS、AWS 乃至大模型背后真实的开放科学与公地谱系；借助莱考夫的框架理论，说明为什么不必在“原创还是山寨”这个题目上纠缠；进而拆解四根让本土技术精英对开放秩序产生排异的观念链条，并回到古希腊的客道法则与现代的开放准入秩序，讨论开放对技术文明演进究竟意味着什么。

## 一、引子：一段充满硬伤的顺口溜

近日，某个技术与商业精英云集的社群里流传着这样一段排比：

“UNIX不是开放的，UNIX的前身Multics也不是开放的；UNIX的山寨版Linux是开放的；
Windows不是开放的，Windows的前身MacOS也不是开放的，MacOS的前身PARC GUI也不是开放的；Windows的山寨版Red Hat是开放的；
iOS不是开放的，iOS的前身多点触控技术也不是开放的；iOS的山寨版Android是开放的；
AWS不是开放的，AWS的前身大型机系统也不是开放的；AWS的山寨版OpenStack和Docker是开放的；
ChatGPT不是开放的，ChatGPT的前身GPT-3也不是开放的；ChatGPT的山寨版Llama和DeepSeek是开放的；
美国不是开放的，美国的前身英国也不是开放的；
所以，Open is for the Weak. :)”

紧接着，另一位业界人士补充了一句更凝练的总结：“开放属于外行，内行是不开放的。”
熟悉计算机工程史与现代科学制度史的人，读到这段话大概都会愣一下。这里用三段论式的排比，拼出了一部指鹿为马的技术族谱；为了凑出“强者皆封闭，弱者才开放”这个结论，半个世纪的信息技术演进史被整体改写了。
首先，**UNIX与Multics绝非“不开放”的产物，恰恰相反，它们是学术公地与源码开放的结晶**。1964年启动的Multics项目由麻省理工学院（MIT）、通用电气（GE）与贝尔实验室联合研发，作为一个典型的学术驱动型工程，Multics前后发表了近百篇公开学术论文与技术报告，其模块化设计、分层安全机制与动态链接思想毫无保留地馈赠给了整个计算机科学界 [1]。1969年诞生的UNIX，则是在美国司法部与AT&T于1956年达成的反垄断和解协议（1956 Consent Decree）约束下成长起来的：该法令禁止AT&T从事电信之外的商业软件销售，贝尔实验室便以只收取磁带介质与邮寄工本费的方式，向全球高校公开提供UNIX的完整C语言源代码 [2]。1975年，UNIX之父肯·汤普森（Ken Thompson）回到母校加州大学伯克利分校（UC Berkeley）休假任教，亲自带着年仅21岁的研究生比尔·乔伊（Bill Joy）一行行研读UNIX源码，这才直接催生了后来撑起整个互联网TCP/IP协议栈的BSD（Berkeley Software Distribution）体系 [3]。把这样一段由大学实验室共同推进、源码长期公开的历史称为“不开放”，只能说与事实相去甚远。
其次，**把Red Hat说成是Windows的“山寨版”、把Android简单归结为iOS的“山寨版”，暴露出发言者对操作系统内核与商业发行版基本概念的错乱**。Red Hat（红帽）自1993年由鲍勃·杨（Bob Young）与马克·尤因（Marc Ewing）创立以来，其核心产品Red Hat Enterprise Linux（RHEL）走的是纯正的POSIX标准与企业级UNIX服务器替代路线，与主攻个人桌面图形界面的微软Windows在技术谱系上风马牛不相及 [4]。至于macOS与iOS，这里恰好漏掉了一个关键事实：**乔布斯1997年重返苹果后能够挽救濒临破产的Mac体系，靠的正是NeXTSTEP；而NeXTSTEP以及后来macOS/iOS的核心——Darwin（XNU内核），建立在卡内基梅隆大学开源的Mach微内核与开源的FreeBSD之上** [5]。换言之，被奉为“封闭强者”的iOS，其内核恰恰来自开源的 BSD 血脉。而Android Inc.由安迪·鲁宾（Andy Rubin）创立于2003年，2005年被Google收购，其底层直接基于Linux内核构建；初代iPhone直到2007年才问世 [6]。两者在底层架构上都出自类 UNIX 的开源谱系，所谓“系统级山寨”并不成立。
云计算与人工智能领域的因果倒置更为明显。**没有开源，亚马逊AWS在2006年根本不会出现**。AWS最核心的计算服务EC2（Elastic Compute Cloud），其早期的底层虚拟化引擎完全构建在剑桥大学计算机实验室开源的**Xen项目**之上，其客户机（guest）操作系统与宿主机底座则是Linux [7]。至于2013年由所罗门·海克斯（Solomon Hykes）创立的Docker，它是基于Linux内核原生的cgroups与namespaces机制开创的容器化（Containerization）新范式，它算不上AWS的“山寨版”，反倒是它那套轻量交付方式，迫使AWS等公有云厂商重构产品线（先后推出ECS与兼容开源Kubernetes的EKS）以应对容器时代 [8]。
同理，在生成式AI浪潮中，无论是OpenAI的GPT系列，还是Meta的Llama、中国的DeepSeek，它们共同的技术母体是2017年Google Brain团队公开发表在arXiv上的划时代论文《Attention Is All You Need》（Transformer架构）[9]，它们赖以训练的工程底座同样来自开放生态：PyTorch、Linux、Kubernetes，以及社区长期积累的数据集与工具链。OpenAI在2015年成立之初正是打着“非营利开源研究机构”的旗号，广泛吸纳全球开放科学（Open Science）共同体的智慧才得以起步；从GPT-3、GPT-4 起转向闭源（业界戏称“ClosedAI”），那是商业化摘果阶段的变现选择，并非技术得以诞生的源头 [10]。
最后这段滑坡一路推到了主权国家，说“美国不是开放的，美国的前身英国也不是开放的”。诺斯（Douglass C. North）等人在《暴力与社会秩序》中用大量历史数据说明的是另一回事：近代大英帝国与美国之所以能超越西班牙、法国路易十四王朝等昔日庞大的大陆专制帝国，核心原因正在于它们在光荣革命与立宪之后，率先从“自然国家（Natural States，即依赖特权垄断与封闭寻租的体制）”演化为了“开放准入秩序（Open Access Orders）”——通过建立现代专利制度（以公开技术细节换取有限期的排他保护）、保护学术自由、允许非人格化的组织自由设立、保障思想与资本的自由流动，从而激活了全社会的熊彼特式“创造性破坏”[11]。
一段在史实上几乎站不住、在范畴上把操作系统、图形界面、公有云服务、容器工具、大语言模型与主权国家混作一谈的顺口溜，本可以一笑置之。真正让人在意的不是这段话本身，而是**当它带着那个居高临下的表情符号出现在群聊里，竟然引起了相当一部分技术精英、企业高管乃至“做题家”群体的共鸣**。
为什么在享受了全球开源生态与开放贸易长达数十年的红利之后，“Open is for the Weak（开放属于弱者）”与“内行是不开放的”反而成了本土精英阶层深信不疑的潜意识？在表面荒唐的言语之下，究竟盘踞着怎样一条看不见的“思维巨链”？这正是本文试图解剖的核心命题。

## 二、破局：别想那只“山寨”的大象

在进入制度与心理层面的分析之前，有一个方法论问题需要先解决：**面对“Linux 是 UNIX 的山寨版，所以开放属于弱者”这类说法，为什么不该顺着对方的路子去争“Linux 到底算不算山寨”？**

莱考夫（George Lakoff）在《别想那只大象！》（*Don't Think of an Elephant!*）里提出过一条框架铁律：**当你用对方的词汇去否定对方的命题时，你其实是在激活并强化对方预设的那个框架（Frame）**[12]。

在“Open is for the Weak”的言说者那里，底层的框架是一套丛林式的私产观。它包含三个默认前提：

> 1. 技术是一件孤立的、仿佛从石头缝里蹦出来的“私人物品”；
> 2. 谁先把它锁进保险柜、挂上大锁收门票，谁就是“原创的强者（内行）”；
> 3. 任何在保险柜之外，通过协作、公开接口与透明源码重新实现同一功能的后来者，都被归入“山寨（Knockoff）”与“弱者（Weak）”。

顺着这个框架去辩解“Linux 不是山寨，Linus 重写了每一行代码”，听众听见的仍是大象，而我们默认的仍是“封闭垄断＝原创正统，开放开源＝廉价替补”这个价值排序。

要跳出这个局，办法不是辩赢，而是**换一个框架**——把视线从商业切面移到历史全貌。同一个技术世界，在不同的尺度下会呈现为两幅完全不同的风景。

### 第一幅风景：商业切面上的私家花园与收费站

把时间尺度压缩到五年的财报周期，视野局限在某家跨国巨头的围墙之内，你看到的确实是一座座修得很精致、戒备也很森严的私家花园。微软靠锁住 Windows API 与文档格式收了几十年的高额利润；苹果靠封闭的 iOS 软硬件生态维持着硬件溢价；OpenAI 靠不公开 GPT-4 的权重与训练细节，在资本市场拿到了千亿美元级估值。

在寻租这件事上，“闭锁”是个聪明的技巧。威廉姆森（Oliver E. Williamson）分析过其中的机制：企业通过制造信息不对称、提高转换成本与资产专用性壁垒，可以锁定用户并持续榨取垄断租金 [13]。**但这只是商业意义上的护城河，不是科学意义上的生命力。**

### 第二幅风景：历史全貌中的公地与铺路人

把尺度拉长到五十年乃至三百年，镜头从某家公司拉到整个人类的知识版图，浮现出来的是另一幅风景：**没有哪座私家花园是悬在半空的。**

在数字文明的地表之下，流淌着由开放协议（TCP/IP、HTTP、DNS、POSIX）、开源操作系统（Linux、BSD）、开源编译器与语言（GCC、LLVM、Python、Rust）、开源数据库与中间件（PostgreSQL、Apache、Git）以及公开学术论文构成的庞大水系——奥斯特罗姆（Elinor Ostrom）与本科勒（Yochai Benkler）把它称作“知识公地（Knowledge Commons）”与“基于公地的同侪生产（Commons-based Peer Production）”[14, 15]。

站在这幅风景里再去看那些自诩“不开放”的强者，处境就很清楚了：**他们无一例外都是吃着开放公地的百家饭长大的。** 技术萌芽期从开放科学与开源社区汲取养分，等果实快要成熟、商业价值显现，就往前挪半步，把自家的厨房锁起来，在公共主干道的出口处设一个收费站。

先靠开放把技术孵化出来，再靠闭锁把商业围起来——过河拆桥是商业的本能，这并不稀奇。但把拆桥当成过河的原因，把竖栅栏的园丁当成创造物种的上帝，就是另一回事了。

值得留意的是，在长时段的演化里，**封闭往往不是因为强大，而是因为脆弱**。一家机构死死捂住源码、拒绝公开细节，通常是因为里头攒了经不起同行审视的拼凑代码，或者护城河浅到一旦公开参数配比，溢价在二十四小时内就会消失。反过来，敢把底层架构、源码乃至路线图摊在阳光下，任人挑错、分叉（Fork）与复用，才需要真正的工程自信。

格局的结局其实早已写就。当年那些不可一世的商业 UNIX 帝国（Sun Solaris、HP-UX、IBM AIX），如今被它们口中的“山寨弱者” Linux 挤到了边缘——全球 TOP500 超级计算机 100% 运行 Linux，超过 90% 的公有云负载也是如此 [16]。曾把 Linux 公开称作“知识产权癌症”的微软，如今 Azure 上跑着过半数的 Linux 虚拟机，还得在 Windows 里内置 WSL（Windows Subsystem for Linux）来留住开发者 [17]。

在城墙上紧握秘籍、嘲笑城外是“弱者”的人，往往看不见脚下的崖壁正因为隔绝了水土循环而一点点干裂。

## 三、深挖：缠住“内行不开放”的四根观念链条

既然事实并不难查，为什么“Open is for the Weak”与“开放属于外行，内行是不开放的”这类说法，仍能在中国受过良好教育的理工科精英、大厂高管与技术专才中间引起共鸣？

观念史学者洛夫乔伊（Arthur O. Lovejoy）提出过“存在巨链（Great Chain of Being）”的概念，用来描述那些隐在文明表象之下、支配人们不假思索作出判断的深层观念结构 [18]。把问题放到这个层面看，他们对开放的抵触与智商无关，而是四根在特定土壤与筛选机制中长成的观念链条，把判断力锁住了。

### 第一根：应试筛选留下的零和烙印

中国当代多数技术与管理精英，是从标准化应试教育（高考与层层选拔）中杀出来的优胜者。这一群体前半生最核心的成功经验是什么？是**零和博弈下的排名竞争**。

标准化考试的制度设计里，考纲是给定的，答案是唯一的，录取名额是固定的。这意味着**一个人的成功直接建立在同龄人的失利之上；多一个人掌握了某道压轴题的解法，他的相对排名就往下掉一位**。在这种存量筛选的机制下，一个学霸如果总结出独门解题思路，最符合个体理性的做法当然是藏起来自己练，绝不分享给同桌。一旦公开，所有人都学会，分数线水涨船高，排他性优势瞬间清零。

十多年高强度的应试训练下来，“知识＝甩开他人的筹码”已经写进了这批人的条件反射。等他们带着这套做题家的心智进入产业，看到欧美开源社区的工程师把耗时数年写就的操作系统内核、编译器架构和算法源码免费公开在 GitHub 上任人取用，认知上会出现明显的不协调。消解这种不协调最省事的办法，是用唯一熟悉的考场逻辑去揣度对方：**公开出来的大概都是不值钱的基础题（外行玩具），真正拉开差距的压轴题秘籍（内行核心），人家一定锁在抽屉里。**

问题在于，现实的科学探索与前沿工程并不是一张有标准答案的考卷，而是一片没有边界的地带。在这片地带里，没有哪个“内行”能靠闭门造车穷尽所有路径；真正降低试错成本、把认知边界往外推的，是开放协作。

### 第二根：秘方传统与行会式的神秘感

除了应试教育的规训，更深一层的文化基因来自农业与手工业社会延续千年的祖传秘方思维与行会传统。

经济史学家莫基尔（Joel Mokyr）在《增长的文化》与《雅典娜的礼物》中讨论过一个历史之谜：中国古代有那么多精巧的工匠技艺，为什么没能自发孕育出现代工业革命与持续的技术增长？原因之一在于，前现代社会的技术属于“默会工匠知识（Tacit Artisanal Knowledge）”，高度依赖师徒之间的人身依附，奉行“传男不传女”“教会徒弟，饿死师傅”的封闭守则 [19]。由于缺少一套把命题知识（科学原理）与指令知识（工程方法）公开交流、相互验证的制度平台，大量精湛技艺随着工匠家族的衰落或战乱而失传，人类不得不一次又一次地重新发明轮子。

十七世纪的欧洲之所以能开启现代科技的加速，关键一步是培根、牛顿等人促成的跨国界“信件共和国（Republic of Letters）”与皇家学会的同行评议制度。这套制度完成了一次激励结构的置换：**科学家与工程师不再靠藏匿秘方获取垄断暴利，而是靠率先公开全部发现来赢得学术共同体的优先权与声誉（Priority and Reputation）** [19]。开放科学的公地由此成形，后来的自由软件运动与开源生态，正是从这片土壤里长出来的。

遗憾的是，在不少自封“内行”的技术圈层里，运行的仍是中世纪行会与钦天监的逻辑。在他们看来，**“内行”之所以高人一等、之所以掌握预算分配权与话语权，靠的就是“外行看不懂”这层信息不对称**。一旦系统完全开源、架构透明、文档详尽、讨论过程在邮件列表里公开留痕，任何人凭代码质量（Meritocracy）就能指出架构师的疏漏，那层神秘感立刻祛魅，赖以寻租的圈层壁垒也就散了。

所以“开放属于外行，内行是不开放的”这句话，本质上是一种**身份防御**。哪怕锁在内网里的代码是一团没人敢碰的“屎山（Spaghetti Code）”，只要门锁着，外人就会以为高墙之内藏着绝世武功。

### 第三根：局部挫败的投射——只见器用，不见制度

还有一部分工程师之所以相信“真内行不开放”，是源于产业实践中的真实挫败感：在逆向工程与国产替代的过程中，他们确实撞上过“最后一公里”的黑盒。

过去几十年追赶型工业化的进程里，许多中国工程师承担的任务是：拿着公开的论文、标准规范或开源底座，去复现某个成熟的商业级产品——高端芯片、工业软件或者商业大模型。在这个过程中，他们反复撞上同一堵墙：理论公式和基础框架是公开的，但要让系统达到 99.999% 的工业可靠性，往往取决于极细微的工程参数、材料配方、良率控制经验，或者一份未公开的高质量清洗数据集。这些属于商业公司的机密（Trade Secrets）或工艺 Know-how，确实没有公开。

于是，最后一公里的挫败被放大成了一种带怨气的领悟：**“洋人鼓吹开源全是幌子，把 90% 不值钱的大路货开放出来让我们当外行免费测试，却把最关键的 10% 内行绝活锁在保险柜里卡脖子。”**

这种认知偏差的要害，在于**把商业落地最后 10% 的工艺黑盒，当成了人类技术演进的 100% 全貌**。它是“中体西用”在数字时代的变体——**只看得见终端的器用（Artifact），看不见孕育器用的制度（Institution）与生态（Ecosystem）**。他们盯着台积电不公开光刻机调校工艺、OpenAI 不公开 GPT-4 的训练数据配比，却对脚下那 90% 由全球开放科学与开源社区铺就的水系视而不见：从量子力学、固体物理论文，到 EDA 算法的学术积累，再到 Linux、RISC-V、PyTorch、Transformer 架构。没有这 90% 作为基座，那 10% 的工艺秘方就成了无源之水。

### 第四根：搭便车者的精明幻觉

最后这一根，与长期处在“只取不予（Take without giving）”状态下的搭便车者（Free-rider）密切相关。

奥尔森（Mancur Olson）在《集体行动的逻辑》里指出，任何公共物品与开放公地都面临搭便车的威胁 [20]。过去三四十年，无论是 WTO 框架下的全球贸易秩序，还是 GPL、Apache、MIT 许可证构建的开源生态，都向后发者敞开了大门。许多企业靠免费下载、修改和封装全球开源社区的代码，省下百亿级的基础研发成本，迅速搭起了自己的商业版图。

问题在于，当一个人或一个群体长期免费享用某种公共基础设施，却从未参与规则制定、维护公地，也没支付过相应的制度成本时，他往往不会对修路人产生敬畏，反而容易滋生出一种“海盗式的精明”：既然我不必遵守开源契约回馈代码、不必开放自己的核心模块，就能白白拿走你公开的成果封装成闭源产品赚钱，那就说明**开放的你是傻缺（Weak），封闭白嫖的我是强者（Strong）**。

把规则的宽容读成对手的软弱，把契约精神当成宋襄公式的迂腐，这正是“Open is for the Weak”得以流行的心理温床。他们得意于占尽了开放世界的便宜，却没有意识到：**当一个生态里的搭便车者超过临界点，并且开始公开羞辱守规则的贡献者时，公地会向它关上门，而他们引以为傲的封闭城堡，也会因为失去外部活水而逐渐沦为技术孤岛。**

## 四、结语：宙斯的客道法则

在荷马史诗里，宙斯除了掌管天空与雷霆，还有一个更古老的称号——**“宙斯·克塞尼俄斯（Zeus Xenios）”**，即客道法则（Xenia）的守护神 [21]。

古希腊人很清楚，在充满未知的世界里，如果每个城邦、每个家庭都高筑围墙、闭关自守，把外来者当作猎物或威胁，文明会迅速退回到丛林状态。于是 Zeus Xenios 立下了一条不可违背的规矩：主人必须对远道而来的客人敞开门户、提供庇护、交换信物与知识，主客之间要保持跨城邦的开放与互信。在《奥德赛》里，遵循客道的邦国（如斐涯喀亚人）享有繁荣；而自恃武力、住在封闭洞穴里蔑视这条法则的人——独眼巨人波吕斐摩斯（Polyphemus）就是典型，他狂妄地宣称“我们独眼巨人力量强大，根本不在乎宙斯的法则”——无一例外地落得毁灭的下场 [21]。

放在数字文明里，**开源（Open Source）与开放科学（Open Science）就是现代的客道法则**。它不是弱者乞求来的慈善，而是一套把全球数十亿大脑的协作交易成本降到最低、让知识得以突破地理与科层制垄断的制度安排 [22]。

理解了这一点，当下的图景就清楚了：

那些站在铁锁与高墙之上、捏着几页局部工艺图纸、朝城外的开源地带指点“Open is for the Weak”“内行不开放”的人，处境其实很像洞穴里的独眼巨人。这套闭锁的逻辑，或许曾在存量竞争的考场和局部寻租的商场上帮他们赢过，但也把演化的上限一起封死了——**他们只能做在别人划定的考纲里拿满分的那个人，却很难理解那些写考纲、开辟新大陆的人，为什么一开始都跑在开放的旷野上。** 脚下因拒绝流动而干裂的崖壁，他们看不见；乌云里正在凝聚的雷霆，也看不见。

对身在这片土地上、想把事情讲清楚的“开源诠释者”来说，面对一套由应试教育、秘方传统与搭便车惯性拧成的观念结构，感到困顿和孤独几乎是必然的。在一个普遍相信“藏私才是本事”的环境里谈公地治理、契约精神与开放秩序，本来就是一桩逆风的事。

但正如庄子所说，夏虫不可语冰。没必要在充满噪音的群聊里，为纠正一段错漏百出的顺口溜耗掉自己的心力。面对执意要在封闭堡垒里自得其乐的“内行”，体面而从容的做法，大概就是留下一句：

**“商业切面和历史全貌看出去，确实是两幅风景。求同存异，各自安好。”**

然后转身，回到开放的公地上继续种树、引水、铺路，把真实的科学史与制度逻辑写下来，留给愿意睁开眼看世界的后来者。历史已经反复证明，还会继续证明一件事：**封闭的私家堡垒终究会在傲慢中荒废，而开放的公地，会慢慢长成人类共同的基础设施。**

## 参考文献与出处（References）
[1] Corbató, F. J., & Vyssotsky, V. A. (1965). *Introduction and overview of the Multics system*. In Proceedings of the November 30–December 1, 1965, fall joint computer conference, part I (pp. 185-196). ACM. （关于Multics作为MIT、GE与贝尔实验室公开学术研究项目的历史文献与百余篇公开论文记录，详见 Multics.org 档案库）
[2] Salus, P. H. (1994). *A Quarter Century of UNIX*. Addison-Wesley. （详述1956年美国司法部与AT&T反垄断和解协议 *1956 Consent Decree* 如何禁止AT&T进入商业软件市场，进而促使UNIX源码以极低工本费向全球大学开放的历史过程）
[3] McKusick, M. K. (1999). *Twenty Years of Berkeley Unix: From AT&T-Owned to Freely Redistributable*. In *Open Sources: Voices from the Open Source Revolution* (pp. 31-46). O'Reilly Media. （记录1975年Ken Thompson赴UC Berkeley任教并公开指导Bill Joy等人研读UNIX源码、孕育BSD与现代TCP/IP网络栈的史实）
[4] Young, B., & Rohm, W. G. (1999). *Under the Radar: How Red Hat Changed the Software Business—and Took Microsoft by Surprise*. Coriolis Group Books. （红帽联合创始人Bob Young对Red Hat企业级Linux路线及商业模式的自述）
[5] Singh, A. (2006). *Mac OS X Internals: A Systems Approach*. Addison-Wesley Professional. （第1-2章详细解析苹果NeXTSTEP、Darwin及XNU内核如何直接构建于开源的Mach微内核与FreeBSD系统之上）
[6] Haase, C. (2021). *Androids: The Team That Built the Android Operating System*. Chezious Press. （Android核心研发团队成员撰写的官修级历史，记录2003年Android基于Linux内核立项至2007年iPhone发布前后的真实时间线与架构演进）
[7] Barham, P., Dragovic, B., Fraser, K., Hand, S., Harris, T., Ho, A., ... & Warfield, A. (2003). *Xen and the art of virtualization*. ACM SIGOPS Operating Systems Review, 37(5), 164-177; 另见 Barr, J. (2006). *Amazon EC2 Beta*. AWS Official Blog. （证实早期AWS EC2底层完全构建于剑桥大学开源的Xen虚拟化引擎与Linux之上）
[8] Merkel, D. (2014). *Docker: lightweight linux containers for consistent development and deployment*. Linux Journal, 2014(239), 2. （阐述Docker如何基于Linux内核cgroups与namespaces开创容器化范式，而非模仿公有云IaaS）
[9] Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., ... & Polosukhin, I. (2017). *Attention is all you need*. Advances in Neural Information Processing Systems (NeurIPS), 30. （Google Brain团队公开发表的Transformer架构奠基论文，构成ChatGPT、Llama、DeepSeek等所有现代大语言模型的共同技术源头）
[10] Brockman, G., Sutskever, I., et al. (2015). *Introducing OpenAI*. OpenAI Official Blog (December 11, 2015). （OpenAI成立声明中明确宣称其使命是依托并回馈开放学术共同体、公布研究成果与代码，对比其后期的商业闭源转向）
[11] North, D. C., Wallis, J. J., & Weingast, B. R. (2009). *Violence and Social Orders: A Conceptual Framework for Interpreting Recorded Human History*. Cambridge University Press. （中译本：《暴力与社会秩序：诠释有文字记载的人类历史的一个概念性框架》，格致出版社。提出英美等现代国家崛起的核心在于从封闭特权的“自然国家”转型为“开放准入秩序 Open Access Orders”）
[12] Lakoff, G. (2004). *Don't Think of an Elephant! Know Your Values and Frame the Debate*. Chelsea Green Publishing. （中译本：《别想那只大象！》，浙江人民出版社。提出认知框架理论与避免落入对手语言陷阱的重塑框架策略）
[13] Williamson, O. E. (1985). *The Economic Institutions of Capitalism: Firms, Markets, Relational Contracting*. Free Press. （中译本：《资本主义经济制度》，商务印书馆。剖析资产专用性、信息不对称与交易成本在商业闭锁寻租中的作用机制）
[14] Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press; 及 Hess, C., & Ostrom, E. (Eds.). (2007). *Understanding Knowledge as a Commons: From Theory to Practice*. MIT Press. （埃莉诺·奥斯特罗姆关于公共池塘资源治理与“知识公地”的经典理论）
[15] Benkler, Y. (2006). *The Wealth of Networks: How Social Production Transforms Markets and Freedom*. Yale University Press. （中译本：《网络的财富：社会生产如何改变市场和自由》，中国人民大学出版社。系统提出“基于公地的同侪生产 Commons-based Peer Production”范式）
[16] TOP500.org. (2025). *Operating System Family Share in TOP500 Supercomputers*. （统计数据显示自2017年11月起，全球前500强超级计算机100%运行Linux操作系统，传统闭源商业UNIX份额归零）
[17] Warren, T. (2015). *Microsoft: More than half of Azure cloud workloads are now running on Linux*; 及 Nadella, S. (2014). *Microsoft Loves Linux*. Microsoft Official Press. （记录微软从史蒂夫·鲍尔默时期在2001年称“Linux是癌症”，到纳德拉时期全面拥抱Linux并推出WSL的历史转折）
[18] Lovejoy, A. O. (1936). *The Great Chain of Being: A Study of the History of an Idea*. Harvard University Press. （中译本：《存在巨链：对一个观念的历史研究》，生活·读书·新知三联书店。观念史学派奠基之作，用以分析支配特定时代与群体潜意识的深层思维结构）
[19] Mokyr, J. (2016). *A Culture of Growth: The Origins of the Modern Economy*. Princeton University Press; 及 Mokyr, J. (2002). *The Gifts of Athena: Historical Origins of the Knowledge Economy*. Princeton University Press. （中译本：《增长的文化：现代经济的起源》、《雅典娜的礼物：知识经济的历史起源》。深刻对比前现代工匠行会“秘方闭锁思维”与17世纪欧洲“信件共和国”开放科学制度对技术演进的决定性分野）
[20] Olson, M. (1965). *The Logic of Collective Action: Public Goods and the Theory of Groups*. Harvard University Press. （中译本：《集体行动的逻辑》，格致出版社。分析公共物品供给中的“搭便车者 Free-rider”困境）
[21] Homer. *The Odyssey*, Book 9 (Translated by Robert Fagles, 1996, Penguin Classics); 另见 Finley, M. I. (1954). *The World of Odysseus*. Viking Press. （解析古希腊神话中宙斯守护的客道与开放法则 *Xenia*，以及独眼巨人波吕斐摩斯因狂妄封闭、蔑视宙斯法则而招致毁灭的古典隐喻）
[22] Raymond, E. S. (1999). *The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary*. O'Reilly Media; 及 Weber, S. (2004). *The Success of Open Source*. Harvard University Press. （从软件工程与政治经济学双重视角论证开源协作如何通过透明性降低交易成本、击败封闭大教堂模式）

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](/posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》）、[《开源之史》](/posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Social Hacker，协作机制设计者。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 AI 助手（如 SenseNova 6.8 Flash Lite 等），「开源之道」·窄廊负责高密度的逻辑推演与文本具象化，在对话中作为镜像与反弹板，提出问题、提供理论切入点并对推演进行反馈。仅偶尔进行双重验证。
