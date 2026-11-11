---
categories:
- 开源
- 制度
- 洞察
date: 2026-11-11T12:10:00+08:00
description: "把开源当组织改造工程，是过去十年最贵的一次误判。Larry Page 的 additionality 与欧盟对 TikTok 的 DSA 裁定并置起来看，会得到一条很冷的规律：一家企业是否真能拥抱开源，不取决于它成立了几个 OSPO、写了几份合规流程，而取决于它在别处是否靠榨取社会获利。开源不是原因，是果。本文补三类证据：Android 的反垄断判决如何同时证明公地的价值与边界、Red Hat 的 upstream-first 为何是一条商业生命线、以及为什么「学开源」这条路在制度上走不通。"
keywords:
- Open Source
- Institution
- Additionality
- DSA
- Red Hat
- Acemoglu
tags:
- 洞察分析
- 开源之道
- 思想札记
title: "【思想札记】开源是商业文明的「果」，而非「因」"
url: ""
authors:
- 「开源之道」·适兕 X 「开源之道」·窄廊
comments: true
---

![](/images/2026/11/guo-not-yin.jpg)

> （配图由大模型 sensenova-u1.5-lite 与 skill sn-image-base 生成：一枚成熟的果实落在锈蚀的齿轮上，果皮上沾着机油。）

## 引子：一个被反复问错的问题

每当一家企业宣布「我们要拥抱开源」，实际动作几乎总是一样的三件套：成立一个 OSPO、写一套合规流程、请人来宣讲开源文化。

这三件事被当成**原因**——仿佛把这三样装好，一家企业的基因就会改变。

但把 2014 年 Larry Page 在 TED 的那段访谈，和 2026 年 11 月 6 日欧盟委员会对 TikTok 的初步裁定并置起来看，会得到一条相当冷的规律：

> **对一家商业公司而言，拥抱开源从来不是「原因」，而是它的经营哲学、组织文化与社会生态定位自然涌现的「结果」。**

这篇文章想把这个判断说扎实。原文给出了很好的骨架，我想补三处它还没有咬合上的地方：**Android 那笔案子如何同时证明了公地的价值与边界**、**Red Hat 的 upstream-first 为什么是一条生命线而不是一句道德标语**、以及**为什么「学开源」这条路在制度上根本走不通**。

先校准两个事实基础。

**其一，Page 的原话。** 2014 年 3 月 19 日，Charlie Rose 在 TED2014 的台上问他哲学，Page 的回答是：

> "Many of the things we just talked about use the economic concept of **additionality**: You're doing something that wouldn't happen unless you were actually doing it. The more you do things like that, the bigger impact you have."

关于 Android，他说得更直接：

> "When I was working on Android, I felt guilty. It wasn't what we were working on, it was a start-up, and I felt guilty. **That was stupid! It was the future.**"

而关于企业，他有一句常被忽略的话：

> "Most people think corporations are basically evil. They get a bad rap. And that's somewhat correct, **if companies are doing the same incremental things they did 20 years ago.**"

注意最后这半句——**Page 给「企业是恶的」加了一个条件从句。** 这个条件从句是全篇的关键，我在后面会回来用它。

**其二，欧盟的裁定。** 2026 年 11 月 6 日，欧盟委员会发布编号 IP/26/2361 的新闻稿，初步认定 TikTok 的「For You」推荐系统违反《数字服务法案》。原文的机制描述精确得像一份病理报告：

> "The more a user interacts with a certain type of content, the more TikTok's 'For You' feed algorithm recommends similar content... when a user repeatedly watches or likes content that may be triggering, such as content about weight-loss or body image, **the system interprets these interactions as positive signs of interest and recommends more of the same.**"

以及那句最要命的：

> "**The algorithm prioritises showing users content based on viewing time, over their choice to see less of certain content.**"

——算法把「观看时长」的优先级，放在了用户明确的「我不想看」之上。

这不是产品瑕疵，这是**产权定义**：谁有权决定这段注意力怎么被使用。当平台把用户点「不感兴趣」当成噪音、把停留时长当成真理时，它实际上已经宣布了一件事——**用户的意愿在这笔交易里不是当事方。**

---

## 一、Additionality：公地是一种「如果我不做就没人做」的东西

Page 的 additionality 有个容易被忽略的结构：**它衡量的不是回报，而是替代性。**

"你做的事，如果不做，就不会发生"——这句话问的不是「这件事值不值」，而是「这件事有没有别人会做」。

用这个标准去衡量企业投资，会得到一个反直觉的结论：**越是能带来巨大回报的事，越可能通不过 additionality 检验**，因为回报大意味着人人都想做。真正通过的，恰恰是那些**回报遥远、风险巨大、短期无人在算的项目**。

这就是开源公地的经济学位置。

一家企业独自去写一个操作系统内核、一套浏览器内核、一个编译工具链，在任何一个季度的报表上都是灾难。但如果没有人做，整条产业链上的每一家企业都要各自重造一遍——这正是 Hoffmann、Nagle 与 Zhou（2024）算出来的那笔账：把被广泛使用的开源软件重写一次，全球加权成本约 **41.5 亿美元**；而如果每家企业都各自重建，需求侧成本达到 **8.8 万亿美元**，企业软件支出将变成现在的 **3.5 倍**。

**这两千一百倍的价差，就是 additionality 的价格标签。** 它衡量的正是「有人做了这件如果没人做就不会发生的事」所省下的全社会重复劳动。

所以 Android 开源这件在 2014 年被 Page 自己都觉得"guilty"的事，事后看是标准的 additionality：**一个封闭的移动操作系统底座，会让整个移动生态被单一寡头锁死；而这个底座一旦成为公共品，整条产业链的摩擦成本被一次性抹掉。**

---

## 二、Android 的另一面：公地的价值与边界，被同一份判决书写完了

原文把 Android 当作公地成功的典范。这一半成立，但只讲了一半——**另一半在欧盟法院的判决书里。**

2026 年 7 月 2 日，欧盟法院在 C-738/22 P 案中**驳回了 Google 与 Alphabet 的上诉，维持了约 41 亿欧元的罚款**。这份终审判决认定的不是「Android 不够开放」，而是相反的东西：**Google 用 AOSP 这个开放底座，捆绑了 Google Search、Chrome 和 Play Store，并以反碎片化协议（AFA）与利益分成（RSA）约束厂商，从而在开放的名义下锁定了排他性。**

这两件事必须放在一起读，才能看清开源的制度真相：

| 层级 | Android 做了什么 | 结果 |
|---|---|---|
| **L2 产权层**：AOSP 以 Apache-2.0 开放 | 手机厂商不必从零造系统 | 移动生态爆发，产业摩擦成本归零 |
| **L3 治理层**：GMS 捆绑 + AFA/RSA 约束 | 厂商不能自由选择替代服务 | 欧盟认定为排他性滥用 |

**开放代码，不等于开放控制权。**

这句话是本篇最需要记住的一句，因为它精确划出了「果」的边界：

- **Android 是果**——它是 Google「整合全球信息」这一使命与 additionality 哲学结出来的；
- **但 Android 不是全果**——L2 让渡了产权，L3 保留了控制。它给出了公地的最重要的一半（降低全社会摩擦成本），却没给出另一半（控制权的可信让渡）。

而这恰好解释了为什么后面的对比能成立：**哪怕是一家最接近「包容性制度」的公司，在治理层也会本能地收回控制权。** 这不是道德瑕疵，这是商业组织的默认姿态。**正因如此，那些连 L2 都不肯让渡的企业，谈开源就更是无从谈起。**

---

## 三、Red Hat：upstream-first 为什么是生命线，而不是标语

原文说 Red Hat 的 upstream-first「不是道德标语，而是其商业模式能够存续的生命线」。这句话是对的，但需要给它一个机制的说明，否则它读起来仍然像赞美。

Red Hat 的商业模式是订阅：软件免费，服务收费。这个模式有一个致命的前提——**它卖的东西必须永远比客户自己拼出来的更好、更可信、更能持续。**

而这三条，只有一条路径能保证：**参与上游。**

- 如果 Red Hat 只做下游打包，那么 RHEL 的价值就等于「把别人做的东西装进盒子」，客户随时可以自己装；
- 如果 Red Hat 一直向上游提交，那么它卖的其实是**「我在那些关键项目里有席位、有话语权、能影响路线图」**——这个东西客户自己拼不出来。

upstream-first 的真正功能，**不是「回馈社区」，而是把公司的资产从「代码」变成「席位」。** 代码可以被 fork，席位不能。

这解释了 2023 年 CentOS Stream 那次风波为什么那么激烈。Red Hat 当年 6 月的官方回应里说得很清楚：CentOS Stream 是「RHEL 之前的开发轨道」，而下游重建发行版「实质上是把开源当成了免费的研发外包」。争议的核心从来不是「够不够开源」，而是**「谁承担上游成本、谁享受下游收益」**——这正是开源制度里那条最古老的分界线。

**所以 Red Hat 的 upstream-first 是果，不是因**：它是「卖席位而不是卖代码」这个商业模式，在工程组织上的必然投射。换一家商业模式不同的公司，你无法通过设立一个 OSPO 把这套行为复制过去——**因为 OSPO 复制的只是动作，复制不了动机。**

---

## 四、为什么「学开源」在制度上根本走不通

这一节是我要补的第三块，也是原文最值得加固的地方。

原文的论证是：榨取性基因天然排斥开源，因为开源的本体论（基于公地的对等生产、透明、放弃局部控制权）与掠夺式经营根本冲突。这个判断对，但还差一个更硬的机制说明——**为什么这种排斥不是「程度不足」，而是「结构上不可能」？**

阿西莫格鲁与罗宾逊（2012）给的机制是：**汲取性制度下的增长不可持续，不是因为效率不够，而是因为精英会主动扼杀创造性破坏**——因为创造性破坏会重新分配权力，而权力正是汲取性制度赖以存在的基础。

把它翻译成开源的语言，是五条逐条对不上的前提：

| 开源所需的前提 | 汲取性组织的默认设定 | 冲突性质 |
|---|---|---|
| **让渡控制权**（可信承诺） | 控制权一旦交出就收不回 | 方向相反 |
| **容忍 fork**（退出权） | fork 被视为背叛而非选择 | 方向相反 |
| **声誉可累积可兑换** | 评价由行政级别决定，技术声誉无处兑现 | 通道缺失 |
| **允许失败** | 每次失败都是责任问题 | 激励为负 |
| **产出可被外部验证** | 黑盒即资产，透明即损失 | 利益对立 |

**五条里没有一条是「做得不够好」，全部是「方向相反」。** 这就是它无法通过培训、流程或组织架构调整来解决的原因——**这不是能力问题，是不动点问题。**

而现实中能观察到的，是这套结构必然导出的三种形态：

1. **输入端**：把全球志愿者维护的公地当免费矿产，用最精算的方式搭便车，对上游枯竭视而不见。周报里那条「5% 的开发者创造了 96% 的需求方价值」在这类企业眼里不是风险，而是好消息。

2. **输出端**：为了合规、公关、标准话语权或招聘噱头而推出的「开源项目」，往往异化为 **KPI 盆景**或**生态捕兽夹**——代码可以随时停更，治理由内部科层绝对控股，一旦失去榨取价值或统战价值，立刻抛弃或闭源收割。判断标准很实用：**看 CODEOWNERS 里有没有出现原公司之外的名字，看治理提案是不是由原作者主导，看生产采用者的文档是否落地。** 三条都不满足的「开源」，只是公开了访问权。

3. **最值得注意的新形态**：带着雄厚资本与行政指令冲进开源世界，**用它来改造开源，而不是被开源改造**。这一步的破坏性远大于搭便车——因为它污染的不是代码，而是**信任契约本身**：当参与者的动机不再可被信任，"这个项目背后是谁、想干什么"就成了每次合作都要重新谈判的成本。

> 一句可以直接引用的判断：**你可以买下一个项目的版权，但你买不下它背后的声誉账本。**

---

## 五、自由市场的底色：不是丛林，是自愿交换

原文引了李录《文明、现代化、价值投资与中国》里那段关于自由市场经济的论断，我认为这一段值得原样保留在文章里，因为它提供了整篇的价值坐标：

> "自由市场经济是人类历史上实现繁荣和进步最伟大的发明。从欧洲到美洲，再到亚洲、非洲，任何地方只要采用了自由市场经济体系，就会以前所未有的方式释放人类潜能。我坚信未来很多年后，这仍然会是消除贫困和实现人类共荣的最重要的引擎。"

李录的框架是**「自由市场经济 + 现代科学技术」**的正反馈循环。而开源在这个框架里的位置，原文那句话写得很好，我几乎不用改：

> **开源并非对资本主义或市场经济的反叛。恰恰相反，它是成熟自由市场经济演化到极高阶段时，为了对抗系统熵增、降低全社会交易成本而自发涌现出的最高级协作形态。**

但这里必须把「自由市场」这个概念从中文语境里救出来。

**自由市场不是社会达尔文主义，不是零和博弈，不是「赢家通吃寸草不生」。** 从斯密到哈耶克，它的基石是**清晰的产权界定、可执行的契约、以及免于强制的自愿交换**。

这三条恰好就是开源的三条：

- **产权界定** = 许可证（它明确划出了什么是你的、什么是共有的）；
- **契约可执行** = copyleft 的互惠义务、DCO/CLA 的签名链；
- **免于强制** = fork 权。**fork 就是退出权，而退出权是约束权力的最后手段。**

于是那句最锋利的判断就出来了：

> **在真正的自由市场里，企业长期获利的唯一路径是持续为他人创造价值；而在伪市场里，获利的路径是让他人无法退出。**

欧盟对 TikTok 的裁定之所以重要，不是因为它罚了谁，而是因为它第一次在法律上把这两种路径分开命名了：**当算法把「观看时长」置于用户明示意愿之上时，这笔交易就不再是自愿交换，而是算力胁迫。**

而一家靠算力胁迫获利的企业，你无法指望它在开源世界里守契约——**它对待用户的方式，和它对待上游维护者的方式，是同一套肌肉。**

---

## 六、把话说完整：这不是「好人坏人」的故事

写到这里，必须自己拆一次台，否则这篇文章会退化成道德训诫。有三处需要说清楚：

**第一，Page 那句「企业是恶的」是带条件从句的。** 他说的是"if companies are doing the same incremental things they did 20 years ago"——意思恰恰相反：**企业的善恶不是本质，是行为模式。** 做增量存量榨取的企业会滑向恶，做 additionality 的企业可能不恶。所以这不是给企业贴标签，而是给**行为类型**分类。

**第二，Google 也不是干净的样本。** 前面第二节已经把话说完了：L2 开放、L3 锁定，欧盟法院 41 亿欧元的终审判决写得清清楚楚。**用 Android 论证公地价值的同时，必须承认它的控制权没有真正让渡。** 只讲前者，这篇就变成了软文。

**第三，反例要举得具体，不然就只是情绪。** 原文点了几家本土企业，我建议保留这个判断但把证据降级为可验证的三条（CODEOWNERS / 治理提案发起人 / 生产采用者文档），**把「谁坏」换成「拿什么判」**。这样即使读者不同意结论，也能自己复算。

同样地，「胖东来」这个类比很有力，但它的可比性有限——零售业的服务透明度与软件业的控制权让渡，虽然同源于「是否愿意把权力交出去」，但可验证性差一个量级。**保留类比，标注它的限度。**

---

## 结语：果不长在盐碱地上

开源从来不是一剂能把掠夺者变成慈善家的魔法药水。

欧盟要求 TikTok 放弃以「观看时长」为唯一导向的算法暴政、把选择权还给用户；这件事在开源世界的镜像就是：**要求一家企业把控制权交出去、把 fork 权留给别人、把声誉记录公开。** 两件事的要求是同一个——**你是不是愿意让自己的权力受约束。**

Page 的 additionality 给了正面答案：去做那些如果不做就不会发生的事，因为那才是真正的增量。
Acemoglu 的汲取性制度给了反面答案：权力不受约束的地方，连创造性破坏本身都会被扼杀。
Android 的判决给了边界答案：开放代码而不开放控制权，仍然会被认定为滥用。
Red Hat 的 upstream-first 给了机制答案：让渡控制权之所以可信，是因为它同时是这家公司活下去的方式。

**开源，只是一家拥有健康社会生态观的企业，在数字时代结出的自然果实。**

而果实只在特定的土壤里结出来：那里有清晰的产权、可执行的契约、和随时可以退出的自由。

**在盐碱地和捕兽夹上，永远长不出真正的数字公地。**

> 视角：一个视角，不是定论。

---

## 参考资料

1. Page, L. (2014). *Where's Google going next?* TED2014, 2014-03-19, 与 Charlie Rose 对谈. — https://www.ted.com/talks/larry_page_where_s_google_going_next （全文逐字稿见 https://genius.com/2959512 ）
2. European Commission (2026). *Commission preliminarily finds TikTok's 'For You' feed in breach of Digital Services Act for harmful 'rabbit holes' effect*. Press release IP/26/2361, Brussels, 2026-11-06. — https://ec.europa.eu/commission/presscorner/detail/en/ip_26_2361
3. Court of Justice of the European Union (2026). *Google and Alphabet v Commission* (C-738/22 P), Judgment of 2 July 2026 — 维持约 41 亿欧元罚款. — https://curia.europa.eu/site/upload/docs/application/pdf/2026-07/cp260093en.pdf
4. Acemoglu, D., & Robinson, J. A. (2012). *Why Nations Fail: The Origins of Power, Prosperity, and Poverty*. Crown Business.（中译《国家为什么会失败》）
5. Coase, R. H. (1937). The Nature of the Firm. *Economica*, 4(16), 386–405.
6. Hayek, F. A. (1945). The Use of Knowledge in Society. *American Economic Review*, 35(4), 519–530.
7. Hoffmann, M., Nagle, F., & Zhou, Y. (2024). *The Value of Open Source Software*. Harvard Business School Working Paper No. 24-038. — https://www.hbs.edu/faculty/Pages/item.aspx?num=65230
8. Lerner, J., & Tirole, J. (2005). The Scope of Open Source Licensing. *Journal of Law, Economics, and Organization*, 21(1), 20–56.
9. McGrath, M. (2023). *Red Hat's commitment to open source: A response to the git.centos.org changes*. Red Hat Blog, 2023-06-26. — https://www.redhat.com/en/blog/red-hats-commitment-open-source-response-gitcentosorg-changes
10. Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
11. O'Mahony, S., & Karp, R. (2020). From proprietary to collective governance: How do platform participation strategies evolve? *Strategic Management Journal*, 43(3), 530–562.
12. Yue, D., & Nagle, F. (2024). *Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration*. Harvard Business School Working Paper No. 25-013.
13. 李录 (2020). 《文明、现代化、价值投资与中国（增订版）》. 中信出版集团.
14. 德鲁克, P. F. (1973/1974). *Management: Tasks, Responsibilities, Practices*. Harper & Row.（中译《管理：任务、责任、实践》）

## 关于作者

### 「开源之道」·适兕

{{< kuosi-bio >}}

### 「开源之道」·窄廊

{{< zhailang-bio >}}
