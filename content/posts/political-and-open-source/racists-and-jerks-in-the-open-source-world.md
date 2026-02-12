---
categories:
- 开源
- 历史
date: 2026-02-11T14:40:59+08:00
description: "作为一名观念的兴趣爱好者，对于人们日常的谈话言辞总是有着思考，他们为什么这么说？和ta所代表的社会角色匹配吗？为什么会有这样的错位？有什么问题需要解决的吗？发生冲突和争执了该如何处理？开源为什么被认为是可以为所欲为？想说什么就说什么？"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "悖论与裂痕：开源世界的种族主义幽灵、硅谷权力变迁与制度性排斥的深层社会学报告"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
---

## 引言

本文的产生来自于一次 LFAPAC 开源布道者[1]的内部沟通，KubeCon+CloudNativeCon+OpenInfra Summit+Pytorch Conference China 将在今年9月在上海举办，网站已经发布:[2]，下面是摘要对话：

> albert: 太离谱了,中国的KubeCon封面是一群阿三
> 杨轩@LFAPAC： 首页封面不是，这是注册那一页，从T-shirt来看，应该是从香港KubeCon时拍的照片中选的
> albert: 印度人要殖民全世界了
> 杨轩@LFAPAC：开源是全球合作，咱们别在群里用冒犯的言语
> albert: 冒犯谁了？ 群里有印度人？

这位叫做`albert` 的发言，不仅让我想起了，去年对一篇关于印度CEO的文章[3]的解构:

![](/images/2026/indian-ceo-myth.png)

仔细一想，这并非孤例，而是代表了一类人的观念，今天就打算深入剖析为何在标榜“开放”、“以人为本”的开源世界中，种族主义者不仅存在，甚至在某些亚文化中占据话语权。以下文章将全景式地解构这一现象的意识形态根源（如“加州意识形态”与“黑暗启蒙”）、社会心理机制（如对印度裔管理精英的替代性焦虑）、以及“技术精英主义”如何成为排斥异己的遮羞布。同时，将详尽梳理从历史上的行会制度到现代法律框架（如第230条、雇佣法及行为准则CoC）如何应对此类群体。

同时我们也要思考一个问题：***为什么这些人会混迹在开源世界？***

## 开源乌托邦的破碎与“阿尔伯特”现象

### 核心冲突

引言中的对话虽短，却极度精准地刺破了开源社区长期维持的温情面纱，暴露了三个深层次的矛盾：

* 全球化与部落主义的冲突：开源名义上是无国界的，但参与者却深受地缘政治和民族主义叙事的影响。
* 感知与现实的脱节：albert的言论反映出一种典型的“技术唯我论”（Techno-solipsism），即认为如果在场的（visible）没有受害者，那么伤害就不存在。这种逻辑直接否定了“冒犯”的公共性与制度性后果。
* 对“印度崛起”的深层焦虑：这句话并非孤立的种族歧视，而是对硅谷及全球科技界权力结构变迁——即印度裔高管（CEO）群体崛起——的一种应激性、防御性反应。

### 核心悖论：“以人为本”的误读

我们通常对于参与开源的人有一种直觉上的信任：***“开源天生是基于互联网的以人为本！“***

事实并非如此，开源（Open Source）并不天然等同于“以人为本”（Human-Centric）。 事实上，开源运动的历史定义（Open Source Definition, OSD）在诞生之初，就是为了剥离自由软件运动（Free Software Movement）中的道德和政治色彩，转向一种更务实、更亲商的“技术效能主义” [4][5]。
在很多早期极客（Geek）和黑客（Hacker）眼中，“以人为本”并不是指“关怀人的情感与尊严”，而是指“解放个体的技术能力”。这种对消极自由（Negative Liberty，即免受限制的自由）的极端推崇，导致了开源社区在很长一段时间内缺乏对积极自由（Positive Liberty，即平等参与的自由）的制度保障。这就解释了为什么种族主义者可以毫无心理负担地混迹其中：他们认为自己在捍卫“言论自由”的纯粹性，而反对“政治正确”的入侵。

### 本文接下来的内容结构和分析框架

本文试图超越简单的道德谴责，采用社会学、政治经济学与法律史的交叉视角进行分析：
* 第二章将结合“LFAPAC”的具体语境，深度解析针对印度裔的种族主义并非简单的肤色歧视，而是对硅谷“管理阶层”权力更迭的政治反弹。
* 第三章将回答“观念混搭”的问题，剖析“加州意识形态”、“黑暗启蒙”（NRx）与“技术自由主义”如何构成了种族主义者的理论武装。
* 第四章将解构开源文化的“精英主义陷阱”，论证“唯才是举”（Meritocracy）如何被异化为排斥异己的工具。
* 第五章将回溯历史，从欧洲中世纪行会的驱逐令到现代科技公司的行为准则（CoC），梳理人类组织处理此类“害群之马”的制度演进。

## 第二章 硅谷的“印度焦虑”：从技术劳工到管理精英的权力置换

根据笔者在去年的解构中，我们需要将`albert`的言论置于一个宏大的产业社会学背景下。那句“印度人要殖民全世界了”并非一句无厘头的谩骂，它折射出的是西方（及部分东亚）技术阶层面对硅谷权力结构剧变时的集体恐慌。

### “竹子天花板”与“管理拉吉”（Managerial Raj）

在过去的二十年里，硅谷经历了一场静悄悄的革命。虽然亚裔整体在科技公司中占据了很大比例的劳动力，但东亚裔（华裔、韩裔）往往被视为优秀的“执行者”或“技术专家”，面临着难以突破的“竹子天花板”（Bamboo Ceiling）。相比之下，南亚裔（主要是印度裔）却在管理层取得了惊人的成功 [6][7]。

从微软的Satya Nadella、Google的Sundar Pichai，到Adobe的Shantanu Narayen，乃至IBM和Palo Alto Networks，印度裔CEO几乎掌管了美国科技界的半壁江山 [8]。这种现象在某些白人至上主义者或竞争失利的群体眼中，不再被视为“个人奋斗”的成功，而被阴谋论化为一种“接管”（Takeover）或“殖民”。

数据支撑的焦虑：尽管印度裔仅占美国人口的约1%，但他们掌管的公司市值总和曾一度超过除美国和中国以外任何国家的GDP。对于崇尚零和博弈的种族主义者来说，这被解读为一种威胁。
反向刻板印象的异化：在开源社区的某些阴暗角落（如4chan的/g/板块或某些Reddit讨论区），针对印度裔的攻击已经从早期的“技术能力质疑”（如嘲笑外包代码质量）演变为现在的“政治手腕质疑” [9]。种族主义者声称，印度裔的成功并非源于技术能力（Merit），而是源于一种“部落主义的裙带关系”（In-group favoritism）和对西方公司政治的过度适应 [10]。

### “殖民”修辞的心理投射

albert的言论：“印度人要殖民全世界了”。这种修辞具有极强的讽刺性和心理投射意味。历史上，西方列强是殖民主义的主导者。如今，当来自前殖民地国家的精英通过教育和职业竞争站上权力顶峰时，原本的优越感持有者产生了强烈的地位剥夺感（Status Deprivation）。

在开源世界中，这种焦虑尤为具体。开源项目往往由志愿者或松散的组织维护，但随着大型科技公司（Big Tech）对开源项目的掌控力增强（如Kubernetes之于Google，VS Code之于Microsoft），原本“自由散漫”的黑客文化开始受到“企业管理主义”的规训。由于大量高管和中层管理者是印度裔，这种对“大公司官僚主义”的厌恶，便被种族主义者具象化为对“印度人”的仇恨 [11]。

表 2.1：硅谷针对印度裔的刻板印象演变与开源社区的映射


|阶段 | 刻板印象特征|开源社区中的具象化攻击 (Manifestation in Open Source)|心理根源 |
|----|-----------|--------------------------------------------------|-------|
|早期 (2000-2010)|“廉价劳动力”、“外包码农”|嘲笑代码风格、注释英语水平、质疑提交质量|技术优越感、对低端职位流失的恐惧|
|中期 (2010-2018)|“H-1B抢夺者”、“中层管理者”|抱怨项目管理风格繁琐、指责“不仅写代码还搞政治”|资源竞争焦虑、对管理介入技术的不满|
|当前 (2018-至今)|“CEO阶层”、“殖民者”、“文化入侵”|阴谋论（如albert言论）、指责CoC是印度裔高管引入的“控制手段”|权力失落感、对“白人/本土技术男性”地位下降的应激反应|

### LFAPAC群组的特殊语境

这是一个极具反讽意味的场景。

LFAPAC（Linux Foundation Asia Pacific）：代表了Linux基金会在亚太地区的分支。这意味着该群组本应是多元文化的交汇点，涵盖中国、韩国、印度、东南亚等多个国家。

布道者（Evangelist）：这个角色的核心任务是“传播福音”，即推广开源文化，吸引更多人加入。然而，albert作为一名“布道者”，其言行却是在“驱逐”潜在的贡献者。

杨轩的介入：LF工作人员的反应（“开源是全球合作”）代表了机构的官方立场。但albert的反问（“群里有印度人？”）暴露了开源社区治理的一个痛点：如果受害者不在场，种族主义是否还构成违规？ 对于albert这类人来说，只有当面侮辱才算冒犯，而针对群体的系统性羞辱则被视为“观点表达”或“玩笑”。这种逻辑在缺乏强有力行为准则（CoC）执行的早期社区中非常普遍 [12][13]。

## 第三章 观念的混搭：种族主义者在开源界的思想图谱

混迹于开源界的种族主义者并非传统的“三K党”式暴徒，他们的歧视链条通常披着高深莫测的哲学外衣。他们将技术崇拜、自由意志主义和反动政治理论进行了一种危险的“混搭”（Mashup）。

### 加州意识形态（The Californian Ideology）的阴暗面

995年，理查德·巴布鲁克（Richard Barbrook）和安迪·卡梅伦（Andy Cameron）提出了著名的“加州意识形态”概念，指出了硅谷早期文化中一种奇特的融合：波西米亚式的反主流文化（嬉皮士精神）与激进的自由市场新自由主义（尤皮士精神）的结合 [14] [15]。

* 核心信条：相信技术（特别是互联网）能赋予个体超越国家和法律的力量。认为“信息渴望自由”，因此任何形式的监管（包括反歧视法）都是对自由的侵犯。
* 混搭逻辑：对于开源界的种族主义者来说，他们继承了这种对“绝对自由”的崇拜。他们认为，我有权写出改变世界的代码，也有权发表任何我想发表的言论（包括种族主义言论）。在他们看来，这二者是同构的——都是“不受限制的意志表达”。因此，LF杨轩的劝阻被他们视为一种“审查制度”（Censorship），是对黑客精神的背叛 [16]。

### 技术自由意志主义（Techno-Libertarianism）

这是加州意识形态的变体，更强调技术本身的“中立性”。

* 工具理性至上：这类人认为技术没有价值观。代码就是代码，它不关心写作者是圣人还是纳粹。
* 道德虚无主义：既然代码是中立的，那么社区也应该是“道德中立”的。他们反对将“社会正义”（Social Justice）引入技术讨论。当有人提出要清理代码中的种族歧视术语（如master/slave）时，他们会暴跳如雷，因为这打破了他们心中“技术纯洁性”的幻想。albert的言论在他们看来只是“噪音”，不应干涉，否则就是“政治挂帅” [17] [18]。

### 黑暗启蒙（Dark Enlightenment）与新反动主义（NRx）

这是近年来在极客圈子中兴起的一种更为极端的思潮，其代表人物如柯蒂斯·雅文（Curtis Yarvin，网名Mencius Moldbug）和尼克·兰德（Nick Land）本身就是程序员或与科技界关系密切 [19] [20]

* 核心观点：认为民主是失败的，平等是谎言。社会应该像公司一样由CEO（独裁者）管理。他们公开拥抱“种族现实主义”（Race Realism）或“人类生物多样性”（HBD），认为不同种族的智商和能力天生不平等。
* 与开源的混搭：
  * 精英统治：他们迷恋开源社区的“仁慈独裁者”（BDFL，如Linus Torvalds早期形象）模式，认为这是最符合“自然秩序”的治理方式。
  * 反平等：他们认为印度裔CEO的崛起不是因为能力，而是因为民主制度下的“多元化政策”（DEI）扭曲了自然选择。albert口中的“殖民”，在NRx的话语体系里，被描述为“低效的多数”通过政治手段取代了“高效的精英” [21]。 
  * 加速主义：部分人甚至希望通过激化种族矛盾来加速现有社会秩序的崩溃，以便在废墟上建立技术封建主义。
  
### 技术沙文主义（Techno-Chauvinism）

Meredith Broussard提出的“技术沙文主义”指出，这类人坚信“技术解决方案优于社会解决方案” [22] [23]。

缺乏共情：他们习惯于像处理Bug一样处理问题。如果“种族歧视”不能被量化为一个编译错误，他们就拒绝承认它的存在。albert反问“群里有印度人？”正是这种思维的体现——如果没有收到具体的“错误报告”（来自在场印度人的投诉），那么系统就是正常运行的。

表 3.1：开源界种族主义者的“观念混搭”图谱

|意识形态流派|核心信条|如何为种族主义辩护|对开源精神的扭曲解读|
|----------|-------|---------------|----------------|
|技术自由主义|绝对言论自由|反监管,认为CoC（行为准则）是思想审查，不仅保护代码自由，也要保护仇恨言论自由|“Open” = “无规则” (Lawless)|
|黑暗启蒙 (NRx)|反民主，信奉智商等级论|认为某些族群天生不适合高端技术，反对多元化是捍卫“基因质量”|“Meritocracy” = “生物决定论”|
反动现代主义|拥抱技术|拒绝启蒙价值观,享受现代科技成果，但在社会观念上回归部落主义和封建等级|“Community” = “封闭的精英俱乐部”|

### “以人为本”的幻象：开源定义的先天缺陷

开源的历史基因里，并没有明确的“以人为本”条款。

### 实用主义的胜利：OSD与FSF的分野

1998年，“开源”（Open Source）这一术语的诞生，本身就是为了与理查德·斯托曼（Richard Stallman）领导的“自由软件运动”（Free Software Movement）划清界限。

* FSF的道德观：斯托曼强调“自由”（Freedom）是道德义务，关注用户的权利。这在某种程度上是“以人为本”的，但也仅限于“使用软件的人”，而非“编写软件的人的社会身份” [24]。
* OSI的实用观：开源促进会（OSI）成立时，为了吸引商业公司（如Netscape, IBM），特意淡化了道德色彩，强调“开发效率”和“代码质量”。开源定义（OSD） 中的十条标准，主要关注代码的分发、修改和不歧视使用领域 [4] [5]。

### 第5条与第6条的悖论

OSD第5条（不歧视个人或团体）和第6条（不歧视活动领域）常被误读为包容性条款。实际上，它们的设计初衷是保护使用者，甚至是保护“坏人”的使用权。

* 原意：这两条规定意味着你不能禁止纳粹使用你的Linux代码，也不能禁止军事机构用你的代码制造武器，更不能禁止遗传学研究使用你的数据库。
* 后果：这种“绝对中立”导致了道德真空。种族主义者利用这一点辩护：既然开源协议允许任何人（包括纳粹）使用代码，那么开源社区也应该允许任何人（包括持有纳粹观点的人）贡献代码。他们将“代码的使用权”偷换概念为“社区的话语权” [25] [26]。

### “优绩主义”（Meritocracy）的异化

“优绩主义”曾是开源界的金科玉律。Red Hat的口号“最好的想法获胜”和Apache基金会的“社区胜于代码”（Community Over Code）原本旨在打破传统层级。但在实践中，Meritocracy变成了一块遮羞布 [27] [28] 。

* 遮蔽特权：正如Patricia Torvalds 所指出的，“优绩主义”假设所有人都在同一起跑线上。它忽略了并非所有人都有闲暇时间（Free Time）无偿贡献代码，也忽略了女性和少数族裔在技术圈面临的骚扰成本 [29]。
* 代码作为赎罪券：在被异化的Meritocracy中，只要你的代码够好（Merit高），你就可以是个混蛋。Linus Torvalds本人在2018年之前长期的辱骂行为被容忍，就是因为他是内核之父。albert之所以敢在群里叫嚣，很可能也是自恃有技术背景，认为“言语冒犯”相对于“技术贡献”来说微不足道 [30]。

## 历史的审判：处理这类人群的制度与法律演进

笔者经常会遇到人们对人性中的恶的遏制感到无能为力，但是仔细想想，我们可能真的是从霍布斯说的那种困境中走到今天的。历史一定有方法处理这些事情的。确实人类社会在处理职业共同体中的败类（Bad Actors）方面，积累了丰富的制度经验，从行会时代的严厉驱逐到现代法律的精密制衡。接下来我们就粗略的回顾一番。

### 行会时代（12-19世纪）：荣誉与驱逐

在现代公司诞生之前，工匠和专业人士通过行会（Guilds）组织起来。

* “不体面行为”（Unbecoming Conduct）：行会极其看重集体荣誉。如果一名成员酗酒、撒谎或有辱没行会声誉的行为（哪怕与其手艺无关），行会有权将其除名。例如，皇家学会（Royal Society）或早期的工程师协会，都有权因成员的道德瑕疵而将其驱逐。
* 黑球投票（Blackballing）：在18-19世纪的绅士俱乐部和专业协会中，成员可以通过投“黑球”来匿名否决新成员加入或驱逐旧成员。这是一种残酷但有效的社区自净机制，虽然它常被滥用于歧视，但也确立了一个原则：专业技能不能作为品行不端的豁免牌 [31] [32]。

### 现代法律框架：自由与边界

在法治社会，处理开源界的种族主义者面临着复杂的法律博弈，尤其是在美国法律体系主导的互联网世界。

A. 第230条与平台责任（Section 230）
  * 盾牌：美国《通信规范法》第230条赋予了GitHub、Slack、微信（WeChat，作为平台方）豁免权。平台不必为albert的言论负责，这在早期导致了管理的松懈 [33] [34]。   
  * 剑：但第230条同时也赋予了平台“善意调节”（Good Samaritan）的权力。平台有权删除他们认为令人反感的内容（包括种族主义），而无需承担审查责任。这是现代开源平台（如GitHub）大规模封禁种族主义账号的法律基石。

B. 雇佣法与“随意雇佣”（At-will Employment）
  * 最有效的制裁：历史上，法律对“仇恨言论”的制裁往往受限于第一修正案（言论自由）。但在美国，“随意雇佣”制度成为了最锋利的剑。
  * 案例机制：当一名开源贡献者发表种族主义言论时，他不仅仅是个体，往往还受雇于某家科技公司（如Google, Intel）。一旦言论曝光，雇主为了维护品牌形象（Brand Safety）和避免“敌意工作环境”（Hostile Work Environment）诉讼，通常会依据员工手册中的“反歧视条款”将其解雇。
  * 社会性死亡：这种机制事实上复刻了古代的“流放”。虽然没有法律禁止你写代码，但没有公司敢雇佣你，你实际上被逐出了职业社区[35] [36] 。

C. 行为准则（Code of Conduct, CoC）的崛起（2014-至今）

这是开源界自身的制度创新，标志着从“丛林法则”向“文明法治”的转型。

   * 贡献者公约（Contributor Covenant）：由Coraline Ada Ehmke起草，明确规定了什么行为是不可接受的（包括基于种族的侮辱）。它填补了OSD的道德真空。
   * 2018年Linux内核事件：这是历史的转折点。Linux社区废除了旧的“冲突准则”（Code of Conflict，实际上默许攻击），采纳了标准的CoC。尽管遭到了保守派（包括威胁要撤回代码的种族主义者）的激烈反弹，但Linus Torvalds的道歉和制度的落地，确立了**“社区健康高于代码贡献”**的新宪法 [37] [38]。

### 针对“混迹者”的综合治理体系

针对像`albert`这样的“混迹者”，现代开源治理体系已经形成了一套层层递进的处理机制：

表 5.1：从历史到现代的“害群之马”处理机制

|制度层级|历史形态 (Historical Form)|现代开源形态 (Modern Open Source Form)|法律/制度依据|针对`albert`的潜在后果|
|-------|------------------------|------------------------------------|-----------|--------------------|
|社区规范|行会章程 (Guild Statutes)|行为准则 (CoC)|社区契约、私法自治|警告、禁言或被踢出LFAPAC群组|
|职业资格|吊销执照 (Revocation)|维护者权限剥夺|项目治理章程|失去对代码库的Commit权限|
|经济制裁|行业封杀 (Blackballing)|雇主解雇 (Firing)|劳动法、雇佣合同|失去工作，被行业列入“不可雇佣”名单|
|法律制裁|诽谤/骚扰罪|网络骚扰/仇恨犯罪诉讼|刑法、反歧视法 (Title VII)|若涉及具体威胁，可能面临法律指控|

第六章 结论：不仅仅是代码的战争

回到最初的问题：为什么种族主义者会混迹在开源世界？因为在很长一段时间里，我们为了追求代码的极致效率，构建了一个道德中立的温床。我们不仅容忍了他们，甚至通过“优绩主义”的神话赋予了他们特权。

`albert`在LFAPAC群里的言论，以及他对“印度人殖民”的焦虑，是旧时代特权阶层面对全球化技术权力再分配时的垂死挣扎。他们试图用“加州意识形态”的自由外衣包裹“黑暗启蒙”的种族内核，将每一次对多元化的呼吁都污名化为恐怖的迫害。

然而，历史的车轮正在转动。从行会的驱逐令到Linux基金会的行为准则，人类协作系统总是在不断进化以排除破坏性分子。今天的开源世界正在经历一场痛苦但必要的“重构”（Refactoring）——不仅重构代码，更重构人与人之间的连接协议。

未来的开源，必然是“以人为本”的。但这不再是一个基于假设的“天生”属性，而是一个需要通过制度（CoC）、法律（反歧视）和文化博弈去主动争取的“后天”成就。 对于旧时代的人们来说，如果不更新他们的观念，用现代的方式来处理协作文明，他们终将被这一进程如旧时代的遗留代码（Legacy Code）般废弃。

文章的最后，笔者想用一张图来表达一番：

![](/images/2026/discrimination-is-weakness.png)

## 参考资料

1. https://evangelists.linuxfoundation.cn/evangelists
2. https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/
3. 第一批混日子的印度CEO，正被欧美“清算” https://mp.weixin.qq.com/s/cFL5qm18bqGrVfruq8eAnQ
4. Ethics of Open Source Software Licensing - Escrow London, accessed February 11, 2026, https://www.escrowlondon.com/news/ethics-of-open-source-software-licensing/
5. Should open source be ethical? - InfoWorld, accessed February 11, 2026, https://www.infoworld.com/article/2256299/should-open-source-be-ethical.html
6. No, I Do Belong: How Asian American and Asian Canadian Professionals Defy and Counter Workplace Racial Violence during COVID‐19 - PMC, accessed February 11, 2026, https://pmc.ncbi.nlm.nih.gov/articles/PMC9877971/
7. Racializing “honorary whites”: Considering the Asian American experience in high-tech organizations - eScholarship.org, accessed February 11, 2026, https://escholarship.org/uc/item/72x135q1
8. Why Does The US Call Indian CEOs Toxic? - YouTube, accessed February 11, 2026, https://www.youtube.com/watch?v=E0ZOx9rumVI
9. Why Indian-born CEOs dominate Silicon Valley : r/siliconvalley - Reddit, accessed February 11, 2026, https://www.reddit.com/r/siliconvalley/comments/r94zo6/why_indianborn_ceos_dominate_silicon_valley/
10. Is there a sinister reason why big companies have Indian CEO as their face? - Reddit, accessed February 11, 2026, https://www.reddit.com/r/ABCDesis/comments/rrgynp/is_there_a_sinister_reason_why_big_companies_have/
11. Why Indian-Origin Executives Are Being Ousted from the Top U.S. Companies | by parth bedmutha | Medium, accessed February 11, 2026, https://medium.com/@bedmuthaparth/why-indian-origin-executives-are-being-ousted-from-the-top-u-s-companies-3985e48d3658
12. Code of Conduct - Linux Foundation Events, accessed February 11, 2026, https://events.linuxfoundation.org/embedded-linux-conference-asia/attend/code-of-conduct/
13. Code of Conduct | LF Events, accessed February 11, 2026, https://events.linuxfoundation.org/open-source-congress/attend/code-of-conduct/
14. Silicon Valley schreibt Geschichte • Körber-Stiftung, accessed February 11, 2026, https://koerber-stiftung.de/en/projects/ecommemoration/silicon-valley-schreibt-geschichte/
15. The Californian Ideology - Wikipedia, accessed February 11, 2026, https://en.wikipedia.org/wiki/The_Californian_Ideology
16. “Upgrading” Market Legitimation: Revisting Habermas's 'Technology as Ideology' in Neoliberal Times - Fast Capitalism, accessed February 11, 2026, https://fastcapitalism.journal.library.uta.edu/index.php/fastcapitalism/article/view/90/82
17. Podcast Episode: The Revolution Will Be Open Source | Electronic Frontier Foundation, accessed February 11, 2026, https://www.eff.org/deeplinks/2021/11/podcast-episode-revolution-will-be-open-source
18. Decentralization: Technology's Impact on Organizational and Societal Structure 9783110673937, 9783110673920 - DOKUMEN.PUB, accessed February 11, 2026, https://dokumen.pub/decentralization-technologys-impact-on-organizational-and-societal-structure-9783110673937-9783110673920.html
19. Spiritual Technologies: The Religious Symbolism of the Digital Universe - MDPI, accessed February 11, 2026, https://www.mdpi.com/2077-1444/15/11/1320
20. Dark Shadows under the Ivory Tower: An Approach to Elon Musk's Ideology | illiberalism.org, accessed February 11, 2026, https://www.illiberalism.org/dark-shadows-under-the-ivory-tower-an-approach-to-elon-musks-ideology/
21. The Ideologies of Silicon Valley - Crooked Timber, accessed February 11, 2026, https://crookedtimber.org/wp-content/uploads/2023/11/svseminarfinal.pdf
22. More than a Glitch, Technochauvanism, and Algorithmic Accountability with Meredith Broussard - The Radical AI Podcast, accessed February 11, 2026, https://www.radicalai.org/more-than-a-glitch
23. Why Sexism, Racism and Ableism in Tech is 'More than a Glitch' with Meredith Broussard, accessed February 11, 2026, https://www.thegoodrobot.co.uk/post/meredith-broussard-on-why-sexism-racism-and-ableism-in-tech-is-more-than-a-glitch
24. The Open Source Definition - Wikipedia, accessed February 11, 2026, https://en.wikipedia.org/wiki/The_Open_Source_Definition
25. Can you stop your open-source project from being used for evil? - The Stack Overflow Blog, accessed February 11, 2026, https://stackoverflow.blog/2022/08/08/can-you-stop-your-open-source-project-from-being-used-for-evil/
26. Ethical Open Source: Is the world ready? - Torkin Manes, accessed February 11, 2026, https://www.torkin.com/insights/publication/ethical-open-source-is-the-world-ready
27. The Ultimate Guide to the Open-Source Apache Data Stack | by David Regalado | Medium, accessed February 11, 2026, https://davidregalado255.medium.com/the-ultimate-guide-to-the-open-source-apache-data-stack-29b4d88f3451
28. The ASF @ 15 - Community Over Code - The ASF Blog - Apache Software Foundation, accessed February 11, 2026, https://news.apache.org/foundation/entry/asf_15_community_over_code
29. Open Source and Diversity. Open source still has a long way to go ..., accessed February 11, 2026, https://jocelyn-j-shen.medium.com/open-source-and-diversity-8a77cd7b0b70
30. Linux kernel hastily adopts standard Code of Conduct - Otter Tech, accessed February 11, 2026, https://otter.technology/blog/2018/09/20/linux-kernel-hastily-adopts-standard-code-of-conduct/
31. The Project Gutenberg eBook of The Armies of Labor, by Samuel P. Orth, accessed February 11, 2026, https://www.gutenberg.org/files/3038/3038-h/3038-h.htm
32. SUBJECT: 90 Day Rule - Applied - New Jersey School Boards Association, accessed February 11, 2026, https://www.njsba.org/wp-content/uploads/2016/03/sld4.pdf
33. Section 230 - Electronic Frontier Foundation, accessed February 11, 2026, https://www.eff.org/issues/cda230
34. Section 230 - Wikipedia, accessed February 11, 2026, https://en.wikipedia.org/wiki/Section_230
35. EuroStack – A European Alternative for Digital Sovereignty - Bertelsmann Stiftung, accessed February 11, 2026, https://www.bertelsmann-stiftung.de/fileadmin/files/user_upload/EuroStack__2025_final__1_.pdf
36. Online Harassment Case Studies, accessed February 11, 2026, https://onlineharassmentfieldmanual.pen.org/online-harassment-case-studies/
37. Linux kernel hastily adopts standard Code of Conduct https://otter.technology/blog/2018/09/20/linux-kernel-hastily-adopts-standard-code-of-conduct/ 
38. On the Linux Kernel's Code of Conflict, accessed February 11, 2026, https://www.linuxfoundation.org/blog/blog/on-the-linux-kernels-code-of-conflict

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
