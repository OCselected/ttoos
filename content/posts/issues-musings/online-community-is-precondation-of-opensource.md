---
categories:
- 开源
- 制度
- 洞察
- 札记
date: 2026-11-20T09:00:00+08:00
description: "当我们把目光从代码仓库（Git Repo）移向社会学与计算传播学的深处，一个被长期倒置的因果关系便浮出水面：并不是有了开源代码才长出了社区，恰恰相反，先有具备低摩擦、痕量协同与透明契约的线上社区（Online Community），开源作为一种大规模对等生产方式才成为可能。"
keywords:
- Open Source
- Online Community
- Jeremy Foote
- Stigmergy
- Peer Production
- Technical Affordances
tags:
- 洞察分析
- 开源之道
- 思想札记
- 社区治理
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
comments: true
title: "【思想札记】没有线上社区，就没有开源：从 Jeremy Foote 的实证研究看协作的先决条件"
url: ""
---

![](/images/2026/11/online-community-precondition.png)

> （配图隐喻：深普鲁士蓝的夜空下，一片翻开的土壤剖面。地表刚刚破土一株嫩芽，而在土壤深处，一张发光的琥珀色菌丝网络正彼此连通、无声蔓延——树，是先由这张网络撑起来的。）

在过去十余年的商业布道与大厂叙事中，人们形成了一种极其顽固的线性错觉：**以为开源的起点是“代码”**。

按照这种工业时代的思维剧本，只要一家公司把内部攒了几年的代码库整理干净，挂上一个许可证，推到 GitHub 上（Open Access），再由公关部门发几篇通稿，就算“做开源”了；至于社区，那是代码放出去之后“顺便运营”出来的附属品。

然而，今天系统梳理了普渡大学计算社会科学家 **Jeremy Foote** 教授过去十余年关于线上社区（Online Communities）与对等生产（Peer Production）的系列实证研究后，这种线性的因果链条被彻底颠覆了。

把他的论文一篇篇串联起来，一个极其冷酷却又无比清澈的本体论判断跃然纸上：

**线上社区（Online Community），从来不是开源的“副产品”，而是开源得以成立的“先决条件”。没有先行的、具备特定社会与技术可供性的线上共同体土壤，所谓“开源”不过是一堆无人问津的静态文件倾倒。**

## 一、 为什么前数字时代没有“开源”？社会协作的物理边界

人类历史上从来不缺乏无私分享知识的匠人与学者，从 17 世纪欧洲启蒙时代的“文人共和国（Republic of Letters）”跨国信件往来，到 19 世纪英国康沃尔郡矿山工程师自发出版共享蒸汽机图纸的《Lean's Engine Reporter》[cite: 4]，人类一直在尝试跨越组织边界的集体发明[cite: 4]。

但这些早期的协同，始终被死死锁在地理距离、信件延迟和高昂的面对面协调成本之中。在传统的科层制企业或线下工作组里，要让几百个互不相识的人共同打磨一件极其复杂的精密造物，必须依赖密集的同步沟通、层级汇报与行政命令。

直到互联网催生了现代意义上的**线上社区**，人类才第一次突破了科斯（Ronald Coase）所界定的“企业边界”与“交易成本”铁律[cite: 4]。

Jeremy Foote 在《A Systems Approach to Studying Online Communities》（2022）中指出，线上社区之所以成为一种全新的社会组织形态，是因为它同时具备三个传统离线组织绝无仅有的系统特征：**低准入与低退出壁垒（Low Barriers to Entry and Exit）**、**高度模糊的组织边界（Fuzzy Boundaries）**，以及**由软件平台塑造的技术可供性（Technical Affordances）**。

正是这三个特征，为开源准备了第一块基石：它允许全球范围内拥有不同背景、互不隶属的个体，无需经过 HR 面试、无需签署雇佣合同、甚至无需彼此认识，就能以近乎零摩擦的成本汇聚到同一个数字空间里。

## 二、 痕量协同（Stigmergy）：线上社区如何替代昂贵的“开会”？

很多习惯了传统管理的管理者一直想不通：为什么几千名分布在世界各地、操着不同语言的开源开发者，不需要每天开早会、不需要写周报，却能协作写出 Linux 内核或 Kubernetes 这样复杂度惊人的系统？

Foote 与 Aaron Shaw、Benjamin Mako Hill 在《Communication Networks Do Not Predict Success in Attempts at Peer Production》（2023）中，通过对 999 个早期 Wiki 对等生产社区的实证分析，给出了一个反直觉的答案：**在早期对等生产社区中，密集的人际沟通网络并不预测项目的成功与存续。**

真正支撑起大规模陌生人协同的，是昆虫学与社会计算中的一个核心机制——**“痕量协同”（Stigmergic Coordination）**。

白蚁在建造复杂的蚁丘时，并不需要蚁后在旁边拿着大喇叭开会指挥；每一只白蚁通过感知环境（蚁丘当前的形状与信息素浓度），直接在环境上做出修改，而这个被修改后的环境本身，就成了向下一只白蚁发出的精确指令。

成熟的线上社区（如邮件列表、GitHub、Wiki、Bugzilla），本质上就是一套为人类大脑设计的**“痕量协同基础设施”**。在这里，代码仓库的 Commit 历史、Issue 的状态标签、Pull Request 的 Diff 对比、自动化测试的绿灯，构成了共享的外部环境。开发者不需要为了对齐颗粒度而无休止地扯皮，他们只需要观察共享环境留下的“痕迹”，就能准确知道哪里有缺陷、哪里需要重构，并在修改后为下一位同行留下新的线索。

反观某些本土大厂的“伪开源”项目，为什么一旦离开内部研发团队就寸步难行？因为他们根本没有在线上社区中建立起这套“痕量协同”环境——**他们把真正的设计讨论、需求变更与决策逻辑全部锁在封闭的内部 IM 和私人微信群里**。外部开发者面对的是一个信息残缺、痕迹断裂的黑箱，既看不见上下文，也无法感知演进方向。没有透明的线上协同场域，开源的飞轮根本无从转动。

## 三、 警惕“唯规模论”与“自我推销”：小社区的尊严与创始人的初心

当我们用“线上社区是开源的前提”这把尺子去丈量当下的开源生态时，Foote 的另外两项实证研究，更是精准刺破了商业世界里的两个流行迷思。

**第一个迷思，是对“规模与流量”的病态崇拜。**
在资本与 KPI 的语境里，一个开源项目如果不追求十万个 Star、不追求庞大的社区 DAU，似乎就是失败的。但 Sohyeon Hwang 与 Foote 在《Why Do People Participate in Small Online Communities?》（2021）中指出，互联网上存在海量**“持续保持小规模（Persistently Small）”的线上社区**，它们不仅没有死掉，反而展现出惊人的韧性。这些小社区之所以吸引人，恰恰是因为它们避开了大平台的噪音与浅薄，凭借**高度垂直的专业利基（Hyperspecific Niches）**、高信噪比的严肃技术切磋，以及基于共同专业志趣的群体认同，构建了一个个自给自足的微观生态系统。开源世界里绝大多数真正解决痛点的基础设施软件，最初都是生长在这样小而美、高纯度的极客社区里的。

**第二个迷思，是把开源当成“品牌营销与获客漏斗”。**
Sanjay Kairam 与 Foote 在 CHI 2024 发表的《How Founder Motivations, Goals, and Actions Influence Early Trajectories of Online Communities》中，调研了 **951 位** Reddit 社区创始人。数据给出了一个比“自我推销有害”更微妙、也更尖锐的结论：动机清单里排得最靠前的是**“话题热爱（Topical Interest）”**，其后是**“信息交换”**与**“与他人连接”**——而**“自我推销（Self-Promotion）”虽然存在，却并不是最能催生早期核心贡献者的那一类动机**。更值得玩味的是他们对“什么叫成功”的测量：创始人把**“社区质量”与“参与深度”**排得明显高于**“大量用户”“大量信息”“大量贡献者”**这三项规模指标（虽然规模指标仍被相当一部分人列为首要优先级）。

这几乎是对“KPI 开源”最直接的学术判决：当创始人把社区当作给公司产品导流的漏斗、当作刷高管影响力的工具、当作完成年度开源指标的交差点时，社区里的每一个人都能嗅出那种工具理性的算计。而嗅出算计的人，恰恰是最有可能成为早期核心贡献者的人——他们是最先离开的那批人。在算计之上，永远长不出真正的信任。

## 四、 过程透明：把“人际信任”转化为“制度信任”

既然线上社区如此依赖陌生人的自愿协作，那么在充满不确定性的网络空间里，信任究竟从何而来？

Sorin Adam Matei 与 Foote 在《Transparency, Control, and Content Generation on Wikipedia》（2015）中探讨了一个极具张力的话题：维基百科表面上标榜“人人可编辑”，但其内部依然存在着编辑权限与隐性的权力结构。他们指出，维基百科之所以没有因为这种权力不对称而失去公信力，是因为它的版本历史与讨论页记录了**每一个词条是如何被争论、修改和打磨出来的**——即**“协作过程的透明化”**。

这与你昨天在《拿出办法来》读书笔记中感悟到的“踏脚石”逻辑高度同构[cite: 3]：人们之所以信任一个开源项目，从来不是因为某个巨头为它做了 PR 背书，而是因为在线上社区的公共档案里，每一块“踏脚石”的铺设过程、每一次争议的化解、每一个补丁的审查都清晰可见、有迹可循。

而这恰恰指向一个更冷酷的推论：**透明的协作过程，本身就是一种稀缺的制度资产**。它无法被采购，无法被授权，只能在一群陌生人真正愿意把分歧摊在明面上的漫长岁月中，一点一点地沉淀出来。

## 五、 创始人效应：社区为何无法被“规划”出来？

如果“线上社区是开源的前提”，那么问题就变得非常现实：**社区能不能像产品一样被规划、被立项、被 KPI 化？**

Foote 的实证研究给出了一个近乎决定论的否定答案。

在《The Behavior and Network Position of Peer Production Founders》（2018）中，他测量了 Wikia 平台上 **60,959 名用户**两个月内的行为与网络位置，专门比较了“未来的创始人”与“非创始人”的活动量、局部网络位置与全局网络位置。在《Starting Online Communities: Motivations and Goals of Wiki Founders》（CHI 2017）中，他对 300 余名新建社区创始人做了问卷。两份研究拼在一起，勾勒出一幅清晰的图景：

**社区不是被“决定创建”的，而是在创始人的日常行为轨迹中自发涌现的。** 创始人在成为创始人之前，就已经在平台的网络结构中占据某种特定位置、从事某种特定活动——社区是他们行为轨迹的一个结果，而不是一个预先设定的目标。[cite: 11]

把这个发现和第三章的“创始人动机”合起来读，会得到一个制度层面的判断：**一个在线社区的起点，是某个具体的人的动机结构，而不是一份组织章程。**

这与传统企业组织学形成了有趣的对照。按照威廉姆森（Oliver E. Williamson）的框架，当**不确定性高、资产专用性高、机会主义风险高**时，交易会从市场移向层级治理——即企业内部化，因为层级监督能压低机会主义成本。而一个在线社区的交易结构参数几乎恰好相反：

- **不确定性极高**（社区会不会有未来，创始人自己也不知道）
- **资产专用性极低**（社区内容是可移植的公地，不绑定任何专有资产）
- **监督几乎不可行**（没有委托方，无法审计）

这组参数**既不支持层级治理，也不支持市场定价**。于是社区演化出第三种治理形态：**靠 copyleft 式的互惠外化 + 创始人作为初始激励的提供者**。

这也解释了为什么“行政式开源”始终难以长出真正的社区：**创始人的持续在场，是社区最初的协调成本承担者；而当创始人倦怠，社区并不会被“接管”，只会自然蒸发。** 因为社区从来就没有一个可以转移的治理权——它属于一群具体的人的行为习惯，而不属于任何组织。

## 六、 当界面隐藏协作成本：开源项目的“不可见债务”

顺着透明这条线再往前走一步，Foote 与 Sorin Adam Matei 在《Transparency, Control, and Content Generation on Wikipedia》（2015）中提出了一个极具反讽意味的观察。

维基百科的主内容界面，呈现的是干净、条理分明的信息框与层级标题——一种**“少即是多（less is more）”**的设计意识形态。可是支撑起这份干净表象的，是一场充斥着编辑权限争夺、回滚战争、内容交易与协调努力的粗糙社会生产过程。这些过程**一概不出现在文章页面上**。

换言之：**维基百科把协作的社会成本，从贡献者的视野里彻底隐藏了起来。**

这个设计选择的制度后果远不止审美。奥斯特罗姆（Elinor Ostrom）的公共资源治理原则中，“监视”与“分级制裁”两项，都以**参与者能够观察到彼此的行为与成本**为前提。一旦界面把相互性遮蔽了，这两项原则就失去了作用对象——治理成本并没有消失，它只是被**外部化**给了另一群人：管理员、巡查员、政策委员会这套后台官僚机器。

这对开源治理的启示非常具体，也非常容易被忽视：

**任何追求“界面简洁”到隐藏协作成本的社区设计，都在制造治理真空。** 当讨论被搬进私聊群组、当决策过程不出现在公开记录里、当新人只能看到结论而看不到结论如何形成的漫长争论——那些看起来是“效率提升”的设计，实际上是在把不可见的债务积累起来。

## 结语

开源从来不是一种可以脱离社会土壤而独立存在的“软件分发技术”。

正如配图所示：在那株刚刚破土的嫩芽之下，是一整张在黑暗中发光、彼此连通的菌丝网络。**是网络先在那里，树才可能长出来。**

在代码被写出来之前，在许可证被贴上去之前，必须先有一个允许陌生人低门槛进入、允许异步痕量协同、尊重小众专业利基、并且把一切决策与努力暴露在阳光下的**线上社区（Online Community）**。

在这个意义上，先有自由、开放、自发涌现的线上共同体，而后才有开源软件的参天大树。任何试图跳过社区培育、绕开公共讨论、在封闭黑箱里闭门造车却奢望收获开源红利的做法，无异于在没有空气的真空里点火——无论火柴划得多么用力，注定瞬间熄灭。

---

## 参考资料

1. Foote, J. (2022). *A systems approach to studying online communities*. Media and Communication, 10(2), 29–40. — https://docs.lib.purdue.edu/cgi/viewcontent.cgi?article=1036&context=fund
2. Foote, J., Shaw, A., & Hill, B. M. (2023). *Communication networks do not predict success in attempts at peer production*. Journal of Computer-Mediated Communication, 28(3), zmad002. — https://jeremydfoote.com/files/foote_communication_2023.pdf
3. Hwang, S., & Foote, J. (2021). *Why do people participate in small online communities?* Proceedings of the ACM on Human-Computer Interaction, 5(CSCW2), Article 462. — https://jeremydfoote.com/files/hwang_why_2021.pdf
4. Kairam, S. R., & Foote, J. (2024). *How founder motivations, goals, and actions influence early trajectories of online communities*. Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems (CHI '24). — https://sanjaykairam.com/pdf/Kairam-CHI2024.pdf
5. Foote, J., Gergle, D., & Shaw, A. (2017). *Starting online communities: Motivations and goals of wiki founders*. Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI '17), 6376–6380.
6. Foote, J., & Hwang, S. (2023). *Online communities and big data*. In T. Reimer, E. S. Park, & J. A. Bonito (Eds.), Group Communication: An Advanced Introduction. Routledge. — https://jeremydfoote.com/files/foote_online_2023.pdf
7. Matei, S. A., & Foote, J. (2015). *Transparency, control, and content generation on Wikipedia: Editorial strategies and technical affordances*. In S. A. Matei, M. G. Russell, & E. Bertino (Eds.), Transparency in Social Media (pp. 239–253). Springer. — https://jeremydfoote.com/files/matei_transparency_2015.pdf
8. Foote, J., Treem, J. W., van den Hooff, B. J., & Honcoop, M. (2024). *Motivations to use multifunctional public goods in organizations: using agent-based modeling to explore differential uses of enterprise social media*. Human Communication Research, 50(1), 108–122. — https://research.vu.nl/ws/portalfiles/portal/367342788/Motivations_to_use_multifunctional_public_goods_in_organizations_using_agent-based_modeling_to_explore_differential_uses_of_enterprise_social_media.pdf
9. Chiu, H.-C., & Foote, J. (2026). *Chatting with confidants or corporations? Privacy management with AI companions*. Journal of Computer-Mediated Communication, 31(3). — https://jeremydfoote.com/files/chiu_chatting_2026.pdf
10. Foote, J., Bitsikokos, L., Goel, H., & Kumar, D. (2026). *Reddit Conversation Laboratory: Field experiments with conversational AI agents*. Computational Communication Research, 8(2), 1–18. — https://www.aup-online.com/content/journals/10.5117/CCR2026.2.5.FOOT?crawler=true&mimetype=application/pdf
11. Foote, J., & Contractor, N. (2018). *The behavior and network position of peer production founders*. In Proceedings of iConference 2018. — https://jeremydfoote.com/files/foote_behavior_2018.pdf
12. Foote, J., Gergle, D., & Shaw, A. (2017). *Starting online communities: Motivations and goals of wiki founders*. Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI '17), 6376–6380. — https://jeremydfoote.com/files/foote_starting_2017.pdf

## 关于作者

### 「开源之道」·适兕

{{< kuosi-bio >}}

### 「开源之道」·窄廊

{{< zhailang-bio >}}