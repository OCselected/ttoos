---
categories:
- 开源
- 感悟
date: 2024-03-05T09:54:31+08:00
description: "古往今来，人类社会的演进，毋宁说是一种不断保护自我的演化史，生产，有人会去破坏生产；秩序，有人会去破坏秩序，物理学上有个名词：墒增，貌似置放在社会上也能够解释。开源，如果放任自流，显然也不会有什么发展，在众多的共同的解决方式中，Open Source Program Office 显然不可或缺。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "制度变迁下的开源创新： OSPO 的目标与使命"
url: ""
authors:
- 「开源之道」·适兕
---

## 引子

人性的善恶与“扯平”执念的追求[1]，以及搭便车的偏好，我们在无数的历史事件中都能看到，现实中也仍然是无处不在的，为了发展人们发明了民族、共同体、公司、企业集团、宗教等等来让社会得以延续。

经济增长的秘诀，也是经济学家们孜孜不倦探求的命题：法律、民主、文化、地理、风俗、资本等等都是重要的因素，任何单一的拎出来都可能无法让人信服。[2]

> 制度是一个社会的博弈规则，或者更规范地说，它们是一些人为设计的、型塑人们互动关系的约束。从而，制度构造了人们在政治、社会或经济领域里交换的激励。制度变迁决定了人类历史中的社会演化方式，因而是理解历史变迁的关键。
>          ———— 道格拉斯·C·诺思 《Institution，Institution change and Economic Performance》

![](https://www.opensourceforu.com/wp-content/uploads/2017/01/Rise-of-OpenSource-illustration.jpg)

无论人们怎么不看好开源，仍然无法离开开源而生活，开源融入人们的日常，是如何做到的？纯粹的金钱激励在这里失效了吗？还是利他主义的胜利？

## 最初的分歧与最后的角逐

回顾软件的历史，在“混沌未开”之时，软件并不被当作是一种知识，当然也就谈不上财产权的问题了，当时占据主流的看法是软件是计算机硬件上不可分的附属物（分离后则毫无价值）：

> 好比“三明治上的蛋黄酱”————这是内森·梅尔沃德令人难忘的论断。“你不会只吃一整碗的蛋黄酱，”当时谈到对软件的态度，梅尔沃德如是说，“你也不必为了在三明治上抹蛋黄酱而额外付钱。“因此，大多数的计算机使用者只是免费地传送......软件。
>   ———— 马歇尔·菲尔普斯 / 戴维·克兰 《Burning the Ships：ransforming Your Company's Culture Through Intellectual Property Strategy》

但是另外一些人就认为这是落后的想法，认为软件是人类劳动的产物，价值非凡，比如具有相当知识产权直觉的微软创始人比尔·盖茨， 他那封备受争议《致电脑爱好者的一封信》赢得了胜利，经历了版权法的修订，《数字版权千年法案》等等一系列的立法[5]，数字权力的扩张，是我们过去几十年所经历的主流[3]，软件收取许可费用的时代自IBM Unbundling 开启以来[4]，无论当年的黑客们多么的不屑一顾，建立在软件之上的数字所有权是扩张的。

但是这并不是故事的全部，软件相比于书籍等无形知识财产，有其独特之处，将软件编译后，源代码不再提供给用户的模式，售卖许可费用，是大家已经非常熟悉的情况。也是塑造了庞大的独立软件市场的主要方式，许可的模式也是从限制入手：从安装绑定机器到限制网络用户，以及各种加密手段，变本加厉的从消费者哪里去的超额的回报。这样也伴随着无限长的难以阅读和理解的许可[6]。

到这里就有了新的分野，那就是承认软件是知识财产，但是不能将源代码封闭起来，持有这样观念的人们有另外一种选择：自由与开源。

## 开源的崛起

开源让渡了很多的权力，几乎是将人性的假设放在了一个非常自律和高度文明的姿态，目的就是协作开发出优秀的软件项目，让更多人受益。但是，人性总是不可靠的，是需要制度约束的，无论是正式的还是非正式的。

与其说是崛起，不如说是艰难的求生，相比于闭源许可的各类模式，开源的可持续发展确实是困难重重，但是也不是完全的不可行，接下来请看官跟随笔者回顾一下，为了让项目能够运行下去，伟大的开源先驱们都做了哪些**制度**上的创新。

### 天才般的稳定三角创新

回顾开源的过去，没有人觉得绕过Richard Stallman 是合适的一件事，他开创性的伟大创举，无疑是历史性的。尽管所有的行动，均是被动的做出回应：为了保护自己的Emacs，而撰写了GPL[7];为了自由软件，而发起了GNU 运动和项目计划[8]；为了实现上述目的而成立了自由软件基金会[8]，这就是其屹立40年的秘诀：

![](/images/fsf-gpl-gnu.png)

三角形具有稳定性，这是学习几何原理的早期掌握的定理，用到制度创新上仍然实用：三者之间相互依赖，相互支撑。

### 巧妙的社会契约设计

GNU/Linux 发行版是一个完整的操作系统实现，是可以直接运行在各类服务器上，并为数据库、中间件等提供支撑，换句话说，这是一个离交易非常相近的项目，几乎接近于产品，如果加上商业的服务、咨询和培训的话。

Debian 就是这样一个基于共同体的实现，它的创始人和开发者们并不愿意被资本所左右，希望能够实现共同体自我维持的自由操作系统项目，于是，他们设计了《Debian社会契约》[9]，并将社会捐赠渠道非常巧妙的隐藏在一个专门的机构[10]。通过设置的组织章程，而保持管理上的延续，但是对技术方向没有任何的直接影响，这样稳步向前，一个淡定的自由操作系统从容的走过了它的30年。

### 想象的共同体：统一的名词

1997年，业余人类学家 Eirc S·Raymond 的一篇文章《大教堂与集市》，将基于互联网的开放式协作方式呈现于世人，随着www的兴起，不同于GNU的项目开始显山露水，Perl、MySQL、Apache、Python....... 然而并不是所有这些项目都叫自由软件，不同的许可，不同的描述，让外界看来，这些就是些不入流的江湖术士。

对于统一这些，没有比深谙集体行动的重要性的O‘Reilly 更能理解的了，在一次聚会中，他们创造了”Open Source“这个词，并从Debian 的描述中发展延续出了其定义，还为之成立了对应的促进组织。

### 服务与订阅：商业上的创新

商业作为解决方案，从来都不会缺席，伟大的企业家们总是不断在探索，自由和开源软件从思想和理念上并不是和商业完全冲突的，但是相比于售卖许可的模式，确实需要很多模式上的创新和发掘。铂铱矿泉水的例子是被津津乐道的，那么既然开源软件的价值是在的，那么从这个价值中找到合适的定位，是可以有利润和空间的。

Michael Tiemann 在GNU的编译项目中找到了其中的价值[11]，创立了Cygnus 公司；无独有偶，Robert Young 则发现了用户喜欢控制权的诀窍，从自己的厨房开启了创业之路，并将 RedHat 送上了纳斯达克，后来的故事大家都知道了，RedHat 发展为价值几百亿美元的公司，并为数万家企业提供开放的解决方案，依靠的就是订阅服务。 

### 慈善组织与商业诉求

在科学共同体维护的项目中，被商业所利用，尽管从道德和情感上人们难以接受，但是商业团体并没有冒犯科学共同体，历史上的Kerberos、X11等项目，确实是司空见惯，当然，这也给商业公司留下了污点。那么是不是还有既有让项目可持续发展，脱离科学共同体的范畴，然后，商业上进行一定的捐赠和投入？

当然有，而且非常的成功，在web服务爆发的时候，IBM 决定投入web服务的时候，没有选择投入资源从头开始开发web服务，而是选择了当时市场占有率极高的 Apache Httpd服务，[12] 并持续推动 Apache 软件基金会的建立，毕竟作为公司的法律实体是无法和所谓的Community非正式组织进行一些业务往来的，并推动了Apache 软件许可2.0的发布和维护。

Apache 软件基金会是纯粹的慈善机构，旗下托管软件项目均是免许可费用，自己负责的情况下，可任意使用的，专利等条款例外。这是企业最为认可和喜欢的模式，并为后来的Open Core 模式铺平了道路，当然，它也带来了另外的问题，那就是当商业成功后，修改许可为对商业更有利的方向成为了该模式的发展软肋[13]。

### 商业私人联盟

> 哪怕是为了欢乐和消遣，相同行业的人也很少聚在一起，但他们的谈话总是会达成针对公众的合谋，或者商定提高价格的计谋。
>     ———— 亚当·斯密 《国富论》

商业中的互补模式，开创性的如吉列剃须刀模式，在硬件利润丰厚的情况下，软件如何能够将初始成本降下来，还是很具竞争力的，这就是IBM当年投入Linux的原因，Intel 卖芯片的逻辑也很容易理解：只要足够多的开源软件运行在X86架构上，就可以卖出更多的CPU，相应的互联网厂商也是同样的道理，软件成本稳定且能降下来，就可以有更多的精力投入业务，思考用户的需求。

不如我们结盟吧，Kernel 这样的项目不应该被某一家厂商所霸占，开发Kernel的人也不应该被饿死，不仅可以嵌入在当前的业务中，还能确保市场不被垄断，Linux基金会、OpenStack（Open Infrastructure Foundation）、Eclipse、CNCF等基金会应用而生。

通过建立透明的规则，以及设置对应的席位，大家共同治理和投入，确保项目的可持续发展、可靠性和安全性。

## 无处不在的开源

接下来，让我们从开源的生产方视角转移到对面：开源软件的消费方。据最新研究结果，这是一个和消费方有着严重不对称的故事[14]:

> A great paper that quantifies the economic impact of Open Source Software by evaluating both its supply-side value ($4.15 billion) and its significantly larger demand-side value ($8.8 trillion). 
> The study leverages global data to assess the costs firms would incur if they had to internally develop software in the absence of OSS, revealing that firms would spend 3.5 times more on software without OSS. 
> A notable finding is that a small group of developers (5%) contributes to 96% of OSS's demand-side value, with the top six programming languages accounting for 84% of this value. 

具备敏锐直觉的可能会觉察到不对劲的地方，这不是生产方的问题，而是中间发生了某种错位，消费方也面临着诸多问题。

也就是说伴随着数字化转型，在软件定义一切的时代，开源项目的被大范围广泛使用，开源不再是项目及其共同体的事情了，而是每一个使用开源软件的组织： 商业公司、政府、高校、科研机构、非营利/慈善机构...... 开源软件项目是现代数字世界的道路与桥梁[15]：**数字世界的基础设施**。

### 开源项目办公室 OSPO 

对于这样一个庞然大物，忽略其存在显然是将垃圾扫到地毯下的拖延症行为，想要驾驭这样的力量，还是需要专业的人进行。既然没有一个组织不使用开源软件项目，那么第一件事就是那句管理界的说法：

> 你无法衡量它，就无法管理它。

我们首要做的事情是：识别和收集，到底使用了哪些开源软件？版本是多少？是否是交付业务？ 接着要做的事情是，有没有合规问题？是否将潜在风险留给了我们的客户？是否会影响到业务？答案如果是的话，接下来要做的是：是否选择供应商或合作伙伴？不选择的话是否可以参与到开源共同体中？去哪里招人？招什么样的人？有没有对应的机构可以加入和参与？ 都走到这一步了，接下来就是现代开放式创新的典型做法：是否在开源世界拥有声誉？是否赢得开发者的信赖？平台或生态的构建是否走开源路线？

没错，以上就是笔者描述的开源项目办公室在常见组织中的攀登阶梯的粗略描述，OSPO 不是一个任何管理或组织上的一个部门，也不是管理或组织课程上的必修内容，它是一个市场需求平衡的自然历程，是人们为解决问题而将无形的流程、处理、知识作为一种描述而出现的名词，它仍然有更多的知识需要我们学习，更多棘手的情况，需要我们审时度势进行理性的处理。

OSPO 的未来如何，笔者无从预测，正如开源的未来一样，但是，这是一个值得为之努力的方向，它试图平衡某种“扯皮”，是为我们造福和经济增长的方向的科学方式和方法。

## 参考或引用资料

1. 《无需法律的秩序》，罗伯特•埃里克森，中国政法大学出版社，2016-7-1
2. 《经济增长的迷雾：经济学家的发展政策为何失败》， [美] 威廉·伊斯特利， 中信出版社，2016-7-1
3. 《知识产权法的经济结构》，【美】威廉•M. 兰德斯 / 理查德•A. 波斯纳，北京大学出版社，2016-8
4. [「开源之史」](/posts/history-of-open-source/summary/)
5. [Legal Protection of Digital Information](https://digital-law-online.info/lpdi1.0/treatise17.html) ，最后访问时间：2024-03-06
6. 《The Software License Unveiled》，Phillips, Douglas E.，Oxford press，2009-6
7. [夹缝中求生存——自由软件及GPL的艰难抗争](https://www.opensourceway.community/posts/history-of-open-source/02-05-ip-law-and-license-evolution-gpl-born/)
8. [以法律的名义捍卫自由软件的权益之二 —— 软件自由法律中心（SFLC）的来龙去脉](posts/foundation_introduce/introduction_of_software_freedom_law_center/)
9. Debian 社群契约， https://www.debian.org/social_contract ，最后访问时间：2024-03-07
10. [Debian 为什么没有成立非营利基金会？](/posts/foundation_introduce/how-debian-growing-without-foundation/)
11. Future of Cygnus Solutions: An Entrepreneur's Account，节选自《Open Sources: Voices from the Open Source Revolution》，1999-01，O'Reilly & Associates, Inc.
12. 《Rebel Code：Linux and the Open Source Revolution》，Glyn Moody，Perseus Books Group，2002-7-15
13. A historic view of the practice to delay releasing Open Source software: OSI’s report ,  https://opensource.org/blog/a-historic-view-of-the-practice-to-delay-releasing-open-source-software-osis-report , 最后访问时间：2024-03-08
14. Hoffmann, Manuel, Frank Nagle, and Yanuo Zhou. ["The Value of Open Source Software."](https://www.hbs.edu/faculty/Pages/download.aspx?name=24-038.pdf) Harvard Business School Working Paper, No. 24-038, January 2024.
15. Roads and Bridges: The Unseen Labor Behind Our Digital Infrastructure / Ford Foundation
 


## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，开放原子开源基金会资深顾问，Linux基金会亚太区开源布道者（2022/2023年度团队主席）， 云计算开源产业联盟OSCAR（中国信息通信研究院发起)个人开源专家，OSPO Group 联合发起人。