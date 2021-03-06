---
categories:
- 开源
- 感悟
date: 2019-11-24T19:43:22+08:00
description: "中国的问题是独特的，因为中国本来就是独一无二的，拥有2000多年的封闭小农政体，也在近200年来经历了无数的苦难，还没有准备好以世界的眼光来看待自我，当遭遇挫折之时，依旧会往内看，一如当年马尔嘎尼来时的时候，不愿意以人类的多样性和社会的想象力来丰富自己，中国式开源究竟该怎么走？这大概将会是个历史性的难题，历史只能交给历史去解答。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "冰山露出海平面的小部分 ———— 开源生态论坛走进 NASAC"
url: ""
draft: true
---

## 引语

随着冬季的来临，北方逐渐进入供暖季，严重的雾霾天气开始侵袭整个华夏大地，而僵持的中美贸易战，也让这个冬天显得让人格外的阴郁。

让我们将视野抬至地球卫星的高度，我们非常幸运的处于开源的黄金时代！然而，作为地缘的本土参与的这个时代却是只能望洋兴叹、望尘莫及，作为全球最多的软件从业人员，对于开源这样全人类贡献是凤毛麟角。那么，该如何做才能和世界同步，乃至超越了呢？我们不妨看看来自国内业界的一线人员的观点。

## 开源大势

> “我们正处于开源的黄金时代！”

Linux 基金会的执行总监Jim 如此说到，基于开源协作的软件已经获得了所有行业的认可，从金融到好莱坞再到电力，Linux 基金会在近两年亲身见证了这一点，作为大雨伞下的子项目呈爆炸式的增长，也诞生了最具创新前沿，引领技术革命的云原生基金会。

> ”开源已经胜利了”！

在刚刚落下帷幕的 GitHub Universe 大会上，GitHub CEO Nat Friedman 如此说道，在今天，超过99%的软件项目都依赖于开源，无论是大公司、还是创业公司、科学家、研究生......开源也已从20年前的少数人，发展成为今天全球人的协作。

然后就是这样一个情势之下，作为全球第二大开发者的中国，有无数次的灵魂叩问：

* 为什么中国没有发展出一个类似 linux 基金会、Apache 基金会这样的保护、组织开源开发者 Community 的非营利组织？
* 作为火爆的搭上社交属性的代码托管平台 GitHub ，由于受美国出口管控约束，中国要不要、能不能发展出可控的代码托管平台？
* 国内的超级有钱、有人的大巨头公司均在大力鼓吹开源，从阿里巴巴到华为再到腾讯再到百度，而且都有相应的项目开源，这些开源是否有足够的实力？

中国是世界的一部分，开源乃世界大势，中国有如此之多的从业人员，理应倡导起来。而这也是我们这次开源生态论坛所讨论和关注的方面。

## 嘉宾分享概述

议程是这样的：

|  主题    |     分享人       | 备注 |
| -------------  | ------------- |:-------------:|
|中文开源社区建设思考|杨丽蕴，电子标准院云计算研究室主任、中国开源云联盟常务秘书长||
|面向下一代计算的开源芯片与敏捷开发实践   |包云岗，中科院计算所研究员、先进计算机系统研究中心主任   |   |
|麒麟操作系统开源之路的体会   |吴庆波，教育部国产基础软件工程研究中心主任   |   |
|开源生态贡献汇聚核心机理、方法与平台   |余跃，国防科技大学   |   |
|建立在开放基础设施之上的未来   |王庆，英特尔云计算开发总监兼OpenStack基金会个人独立董事   |   |
|Kata Containers 与开源容器技术生态   |王旭，蚂蚁金服资深技术专家、Kata Container 架构委员会创始成员   |   |
|PG的社会价值   |周正忠，阿里云数据库首席专家团队成员   |   |
|飞桨产业级深度学习平台和开源生态介绍   |张春雨，百度资深研发工程师   |   |

整体而言，嘉宾环境部分是没用的部分多于有用的部分，来自企业界的基本上是在介绍自己的产品了，而且是那种初级入门的练手级别的，下文会专门阐述。来自高校和研究院的教授们，则抛出的是自己的困惑，为什么开源在中国就行不通了呢？举个例子，来自麒麟操作系统的分享，吴庆波教授提到国产linux操作系统的困惑，有人、有资源，可是就是玩不转，始终难以同步上游，更谈不上超越的可能性了，年年就修改点皮肤，解决些升级带来的兼容性问题。

来自中科院的包云岗教授，则抛出了更多的希望，开源芯片和开源软件有一些不一样的地方，更涉及到了工业制造。

最有意思，也是质量最高的是来自Kata Container 的王旭，一上来就批判一下会议（这个真是棒！）：

> 一群不懂、不参与编码的人，在这里堂而皇之的谈论如何开源！不过话说回来，那些研究恐龙的人，本身也不是恐龙。似乎还说的过去。

王旭以自己的亲身经历，在安全容器的道路上，如何在最具创新性的容器技术和共同体当中，和各方的技术探讨和商议，其中有Google、CoreOS、AWS等，参与其中，也影响了最终的走向，如CRI项目的诞生，以实践验证了开源所谓的：”show me，not tell me.”的原则。

### 插曲：糟糕的企业代表

分别来自阿里巴巴和百度的分享，简直让人不敢恭维。不仅内容空洞无物，还严重拖堂，百度的演讲最终占用了最后圆桌的环节，哪里是在演讲，明明是在对着产品说明书念“经”。

至于那个阿里巴巴的工程师，上来就说自己是有家室的人了，女性观众不要有啥想法，这个确实有点冷，该工程师的演示文稿使用了Word文档的方式，使用较小的字体占据了，现场没有人听明白，他是怎么翻云覆雨将 PostgreSQL 开源项目，堂而皇之的和阿里云扯在一起的，也没有解释清楚云计算和开源之间的关系。

这两位企业界的人士，没有遵守会议的规则，严重拖堂。内容空洞无物，没有给自己保留任何的颜面。

## 圆桌论道

圆桌论道是本次论坛的重点，也是信息量巨大无比！本次的圆桌主题是：**如何建设中国开源生态——平台（社区）、项目、协议和基金会**，主持人业内知名的明星学者：北京大学教授周明辉，分享的嘉宾有：包云岗、王旭、赵振平、刘明（鹏程实验室AI开源平台办公室主任）。

问题早已有之，笔者这里就分享的嘉宾观点进行了整理，合集以形成观点：

### 开源是心理革命，开源是世界的。 ———— 鹏程实验室AI开源平台办公室主任 ———— 刘鹏

开源是一个永恒的话题，多年以来，我在很多场合下说过: **人类为什么做互联网？** 今年是互联网50年（1969~2019）也是开源的50年，当然互联网能把商业市场成本降低到非常之低，可能逼近极限，空间拓展到无限，同样没有开源就没有互联网，开源核心价值是把创新的成本降了无限，甚至无限逼近于零，把创新的能量空间可能也拓展到了无限，非常之广大，这是我认为不光是中国，对于全人类，都是有益的，我认为开源是我们人类命运共同体的共同财富，这就是我对开源的认识。

教育这块我三年前专门写过文章进行论述，开源从1.0、2.0、3.0，从软件到硬件包括芯片，开源硬件也颇具规模，现在到AI，以及数据，数据开源，前面说不同时代有不同开源特征，一直想办开源的大学，主持人也在做这个事，所以开源的根还是在人，归根结底还是人，不光是技术，还有人们的心理、认知、文化能不能开放。

托管平台明确是有国界的，世界上任何一个事情都有背后的力量，开源也不是那么理想化。中国要不要做代码托管平台这个事呢？答案是肯定要做，我们不能局限中国人做中国的东西，我们要做更有包容性、更具视野的平台， 当然前提是我们要有感恩的心态，感恩美国，心态很重要。怎么做呢？这个事并不是说一个有了不能做第二个，除了有私营就不能有政府，在以互联网运营来说，它是开源，最终体现商业化的服务，为什么是 GitHub 私营公司做的那么好，谷歌大企业做的不好，因为它不够专注，首先互联网这个事不在于大小，这个事有一个长期的坚持，这是 GitHub 为什么胜利的原因。原来说互联网为什么没有第一没有第二只有第三，中国是特殊的市场不像美国，美国是完全的市场化，你可以这么说，有了第一很难有第二，中国还有其他各种各样的力量，GitHub 在中国完全可以同时并存其它的仓库，私营企业的、政府的，让它长期走一半就好，最后肯定会出来一个很好的东西。

参与这是一个点，同时国内也有一些很好自己的项目，生态做的不太好，这个是吴庆波老师说的，很多生态关键要素，中国的基金会肯定不能学美国的，我们只能借鉴不能完全照搬，我们利用充分现有政府的，这是应用场景行业协会。

在中国建立基金会这个事我参与比较深，可以和大家分享一些历史。不光是个人大企业政府做开源，也不是一个个体行为，都是各自为政比较多。为什么这样，2011年到工信部去的时候我还在交流，当时大家都讨论一个共识：中国需要有这样的基金会，我发动5起都没有成功，然后被认为是非法集资，今年的中国开源基金会，据我作知，一个月左右可以公布。为什么成立基金会？我原来讲很多领导们不了解基金会跟基金有什么区别，现在才明白什么叫基金会，开源这个事需要一个脱离政府、社会、企业、任何一个个体之外的更中立的组织来推动这件事，它更中立。政府中立吗，它还是不完全那么中立，基金会正好在国外的一个模式，它是国外的土壤，现在难题就是怎么样平衡各方的利益，举个例子，BAT+华为有十多家，假如同样有开源项目，华为有100人百度100人，阿里200人，都要放这一个基金会来做。以前没有办法做，现在肯定要做，这是我们必须要有基金会。基金会干什么呢？要从非常中立的角度来看待，RISC-V宣布在瑞士，全世界现在中国、美国就在那个地方，要中立还要有能力，能力就是运营的能力，现在开源与最早的个人技术驱动和大企业商业驱动甚至现在各种力量驱动，生态驱动这个事，各种力量，这个时候就不像最早的基金会那样或者国外的基金会要三个维度建立客观中立评价机制，而且要有话语权，不是那么简单的事，例如，Open stack 在发布以前就做了至少一两年的工作，所以我们一直在努力，包括我们把所有基金会项目都分析遍了，我们当时就说这个事必须得做，我们要请国内有才华的人，把它做起来。在中国的环境做这个事怎么做呢，我刚才说的把这些机制评价机制尽快完善，据我所知这个事也会很快落地。

基金会要解决问题，开源是最严格的法律，本身就是法律合同，商标认证都是非常严格的，之前国家不当回事，现在刚才说开源的黄金时代来了，我们赶快抓住，不光是我们，从参与到贡献，我们就是引领未来要开源，不光是技术。

### 中国其实没有什么太大的问题，想做就做。 ———— 蚂蚁金服资深技术专家：王旭

因为这件事情做任何互联网服务都会被问这个问题，我觉得这个问题上是一个很开放的市场问题，本来就是创业公司来做，他们应该自己去找到自己的好地方，做这个服务并不是没有空间，空间是有的，但能不能做到GitHub一样，第一：它是一个 GitHub 交友平台你要有足够社区在里面参与活动，能不能产生足够多的社区需求，第二：GitHub 有非常强的集成性功能，各种各样的操作，你能不能做到这么好、稳定性超过它，所有这些都是基础的。空间肯定是有的，任何行业可以有足够的空间说容纳很多人来竞争，问题在于你能够不能有跟 GitHub 不一样的，这也是所有互联网要面临的问题。

我不担心被哪个大公司控制，最大问题你必须要有项目，这是最缺的，不缺别的，机制什么都好办，没有项目这个基金会没有人喜欢，这是我的看法。我觉得鸿蒙还处于对开源朦胧的状态，大家都不知道开源是什么东西，说它明星我不确定到底多明星。RISC-V 本身有自己的商标权，能不能移交基金会我还不确定，可能需要有一个权限的项目。

### 可以试一试，需站在世界的角度来看。 ———— 中科院计算所研究员：包云岗

开源这个问题我确实还是碰到过很多不同场合都会问这个问题，开源硬件行不行？开源硬件有什么价值？开源硬件开源芯片能不能做出英特尔这样的技术？很多时候都会提到这些个问题，我们也是自己被逼思考这样一个情况。 首先， 开源的价值已经从开源软件得到证实了，包括我自己原来前面也写过一篇经济学角度来看价值存在，只要出现一个能够收益相等，交易成本更低的技术，还有一个经济学原理英国两百多年前经济学家也是提到当你把一个技术能够把成本降下来的时候，它的应用市场规模会扩出去，到了一个转折点就会使得收益对企业来讲它的用户量增大以后带来收益会大于前面单个降低的成本，这是蒸汽机发明时候的现象，当时蒸汽机出来以后整个利用率提升了四倍，很多煤矿主很担心是不是以后我们的煤卖不出去，因为每一台蒸汽机煤就少了很多。因为你的煤蒸汽机的使用它的效率体征，它的成本下降，使得它在更多地方被用起来，使得煤的产量大大增加，这一点我觉得就是开源的意义所在，通过开源的方式去做，因为开源可以把门槛降下来，可以来使得更多人可以参与进来，芯片今天这个领域里面实在是门槛太高了，今天报告里面提到做创业公司，我们以创业公司来讲的话，也是要几万、上亿的融资才有底气说我做芯片，门槛降下来使得创新活跃度在提升，对整个产业有帮助，它是正向循环，你有更多创新在里面，资本愿意进来，资本愿意进来，相应进到这个领域里面可以带来的收益会增加，收入工资都会上来，这是正向循环，这是一方面，另外一方面我们在学术界人才培养，不光是开源人才培养，其实开源本身对人才培养非常有帮助。现在有一些你在同样刚才前面讲到它的帮助体现在几个方面，第一个方面我把门槛降低了，使得很多学校里面或者原来做不了的可以做了，前面讲的 MOSIS 就是很好例子，原来学校做不了芯片，后来做得了，这也是今天整个架构颠覆掉原来的架构。这是非常好的例子，这是一方面的价值。

另外一方面体现开放开源可以让我们整个学生学习过程当中可以有更好的资源可以获取，很多时候我们做研究的时候我自己有过这种经历，原来想法花了三年多时间在不同平台试，我们学生花很多力气在不断在这个平台上去重新实践，直到后来我们选择了 RISC-V 完全开放开源的平台，可以开放出来给全世界大家一起来做，这点上面对学生来讲也是非常好的可以获取到这种研究的包括教学的资源平台。

第一个从趋势来看，我们看看全世界现在有多少程序员，中国有多少，其他地方有多少，其实可以去做一个统计，现在没有数据，其实我原来看过另外一个统计，一共有将近一亿个项目，但是这一亿项目里面多少是美国自己本土的项目，多少来自美国以外的项目，多少是中国的项目，这里面美国本土并不是有这么多，所以从这个角度来看的话，如果能够形成一个相当于是说能够把这样一个发展的大势，能够把这些人吸引过来，能够以更开放的形式，现在相对来讲美国他们自己在给自己有点像以前打破自己的声誉，我们要是能够借这个势头把它建起来其实是有机会的。这里面有一点，如果一开始定位在就是为中国人服务，其实我们把自己的格局做小，因为现在为什么大家会想到要去我们来考虑这样一个问题，因为美国没有像以前那么开放，我们这个时候要做的是应该更开放，才能够把其他人吸引过来，一开始就应该抱着一种我以更开放的方式来建立，现在一开始定位只为中国人服务，这样反而不一定真的能够起到未来跟 GitHub 对抗的效果。这是我自己的观点。

现在开源项目背后都有大公司在推动，这里面我先回答，自由贡献者的开源项目，自由贡献者在我看来它是可以形成的，在早期的时候可以自由贡献者可以参与进来，但是后面真正做大起来还是需要有一些更多有组织能够参与进来，现在Linux自由贡献者在这里比例比较小，主要还是几个大公司，如英特尔、华为等，华为公司最高一次第四，这个问题不是很大，反而我们的企业要有这样拥抱开源的理念，现在越来越好了，总的来说还是属于大家对开源觉得用更好一点或者拿来用和贡献这两个比例之间，不是那么协调，总觉得还没有看到贡献以后对企业的价值，这块可能是对当前来讲我们也许是一个挑战，这种理念能不能转变过来，大家能找到背后对企业的价值，开源我把我贡献代码的时候对企业的价值或者是一个小的企业加入开源的时候对我企业成长的价值，也许可以让我们的开源变得更加蓬勃一些，这是一个后面的问题。RISC-V这是一个很好的机会，因为中国的市场其实真的非常大，我们在芯片领域是非常怪的一种局面，首先我们每天都听到卡脖子的一句话，芯片卡脖子，你有没有发现中国消耗三分之二的芯片，都在中国消化，这是一个我们举例，我们自己能够提供芯片的比例很高，我查了一个数字2014年是4%，芯片更低，像CPU，极端的芯片可以比较高，一些一中档往上的芯片是很低的，这个时候RISC-V反而有很大的机会，可以来做好，我们有一个很好的开源的主线，能够竖起来，能够让国内很多开发人员能够把这个主线做起来，这样未来的开发各个企业可以在这个主线上拿一个分支出来或者是分支下自己去做一些定制，这个模式是走得通，因为现在还没有，但是我们有这样的需求，这个更多我们是需要一个开源的主线，能够给大家一个很好的预期，我可以持续五年、十年，发展，让大家跟进去，持续一段时间RISC-V还是有可能可以做起来，在中国做起来。我们现在在做一些事情，很多中小企业都会找过来他们有很多这样的需求，非常多的需求，搞的我们应付不过来，现在没有到这个阶段，明年年初会有一个稳定版本放出来，大家可以一起来开放出来做，我觉得还是有这样的机会在里面。

事实上我们到底是谁成就谁，不管是哪个基金会都是从民间项目起来的，先有基金会再有项目，这个可能因为现在我们有各种力量，大家有这样的向心力，先把它给建立起来，然后再把项目放进去，这种模式我觉得可以试一试，关于刚才说到整个企业在一起怎么协调，这里面确实是有一些不是很成功的例子。成功的例子我们来看一下 Linux，Linux 那套代码审核机制还是非常严格的，确实还是在评价机制上面要建立一套非常规范的，这个一定程度上我以前还不太清楚，后来了解了整个 Linux 那套代码提交审核的机制，不比我们提交审核轻松，跟我们发表一篇论文，也是一起审核，审核以后再来判断，那是非常严格的，后来发现这个开源的代码也是这样的，整个过程也是非常严格，非常客观的方式。基于规则的体系大家都遵守，可能这些问题就不存在了。大家拼代码，谁的代码质量高谁的想法好，谁有创新性，程序员其实每个人心里都是评价的时候相对比较客观。

### 插曲：华为内核工程师的低级提问

**问题**： 国内做Linux内核有很多团队，包括华为，案例，各个厂商，实际使用，开源社区到真正可以商用有很大差距，两者之间包括华为、阿里各个厂商做很多工作，近期了解来看，有很多厂商实际上用的是相同版本的，但是社区到真正应用这之间很多厂商都在做重复的工作，借开源的这个事情，有没有什么说法让各个厂商能够合作共同做一些基础性的工作？现在各个厂商有这样几个工作，都需要支持，这些工作都需要从各个版本上包括没有进入到程序的特性都需要到一个商用版本上这之间需要做很多工作，包括阿里，需要把高版本的一些特性都需要放在传统版本上，这个工作很多公司都需要做。

**回答**：将软件的本质视为动态的、发展的、不断组合和进化的，其实这根本就不是一个问题。华为的工程师竟然这么问，显然是没有摆脱控制欲，缺乏同理心的缘故。

## 总结

作为能够迈出开放的第一步，让大家在会上畅所欲言，确实是难能可贵的活动组织。但是，开源是经历了全球的开发者近40年的累积，其中的经验和科学，绝非短时间内可以获得，当然，有了这些西方的成绩，可以当做目标去进行努力和奋斗。随着民智的进化、国家实力的增强，自上而下的领导是可以为开源的进一步发展添砖加瓦的。

正如本次论坛的组织者之一杨丽蕴主任所言:**开源在中国，任重道远。** 是的，还需要全民的努力，方能产出缔造社会幸福的生产力。期待明年有更多的成果！
