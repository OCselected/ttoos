---
categories:
- 开源
- 感悟
date: 2020-09-01T14:48:37+08:00
description: "从文化演进的角度讲，我们人类就是一部合作的演化史，从村落到城市，从城市到全球化，从利维坦到历史的终结，从科层制到自由企业，从族阈共同体到合作共同体，堪称一部辉煌灿烂的美好剧本。开源作为合作的最高境界，让全球的陌生人在一起工作，产生了Linux、Apache、Kubernetes、等全球人类共享的伟大作品，我们为什么要排斥它们了呢？请给我一个充分的理由！"
keywords:
- Open Source
- Culture
- Reading
tags:
- 深度分析
- 开源之道
title: "请保持清醒：开源是和世界同步的绝佳机会！"
url: ""
authors:
- 开源之道
---

## 引子

近来网上流传了一篇贬损开源的文章，题目非常的污名化：“我们对开源软件最大的误解，就是以为它不会被美国断供”。该篇文章混淆视听，移花接木，犯了很多常识性的错误，本文是针对该文章所犯的错误的根源说起，然后进行定性和定量的分析，最终给出笔者的观点和结论。

其实，诸如此类这种在认知上的偏差算是很正常的现象，而拨乱反正就是我们布道师的职责所在，正本清源的将一些事情捋一捋，以让民众有一个全新的认识，所谓“群众的眼睛是雪亮的”，相信人们会作出正确的选择的。

## 软件只是开源的一小部分

我们通常讲的开源，其实指的是代码的那部分，而不是软件的那部分，因为开源的本质其实是不包括软件的那部分内容的，有了代码之后，将代码编译为软件，软件不过是一个附属品罢了。

代码作为信息时代的典型产物，是体现着工程师的劳动结晶的，有着知识的所有特征，比如在撰写、创作的时候是需要花费很大的精力和能量的，而copy 的时候，是不需要丝毫力气的，而且无限。但是，代码有一个非常特别的属性：它是动态的、生长的，一旦没有人维护，它就会被历史所淹没。

在本土讲开源的故事的时候，会有一个脍炙人口的故事：[宫敏博士从芬兰用软盘背回来一整个Kernel的源代码](https://www.infoq.cn/article/opensource03)，那么这个源代码和操作系统有什么样的关系了呢？

### 从 kernel 到发行版，需要走很长的路

仅仅有 Kernel 的源代码，对于用户和非kernel开发者而言是毫无用处的，那么到可以使用的软件又会经历什么了呢？让我们不妨从发行版的角度来看一下，都要经历哪些：

Kernel 本身的运行需要编译器，通常使用的GNU C，我们以最简单的[LinuxFromScratch](http://www.linuxfromscratch.org/lfs/view/stable/chapter03/packages.html)为例，想要搭建一个Kernel的编译环境，需要如下项目：

* autoconf
* automake
* bash
* binutils
* flex
* .....

每个项目都是必不可少的，成千上万行代码所组成，单独拎出来除了学习几乎没有任何的现实意义。然而进一步想要可用，如桌面可视化环境、打印机程序、日常办公等等，那就需要采用和编译更多的开源项目代码，以知名Linux发行版Fedora 为例，其最近发布的版本Fedora 32所包含的软件包（可以简单粗暴的认为一个包就是一个开源项目）为：**55281**[3]。

这是一条巨大的链条的，涉及到了成千上万、上百万个开源项目，上几百亿行的代码，价值几百亿美元的庞大软件工程。然而，如果人们仅仅是下载 Fedora 发行版去使用的话，是无法体会到开源从代码到软件的过程的。这里可以使用我们常见的露在水面上的不过是冰山上的一角，来比喻软件和开源的关系是颇为妥当的：

![](https://iknowkrupar.com/wp-content/uploads/2020/02/cropped-icebergpaid-scaled-1.jpg)

那么除了软件的部分，其余的是什么了呢？

当然，是参与到开源当中的工程师们了，开源的代码并不是真空中产生的，而是每一行都由具体的开发者和维护者进行的创造和劳动的结果。截止2020年8月15日，Linux Kernel的贡献者人数达到了：

![](../../images/kernel-contributor-per-year-2020.png)

 （图片截自Linux 基金会最新发布的Kernel报告[2]）

有了人之后，就需要大量的协作和沟通，那么这几千几万个人是如何做到沟通的了呢？

进一步思考：Linux 既然能完成这么多事，定然充满了无限的商机，那么是否有商业公司侵占或霸占了呢？答案是没有，Linux 在发展到2007年的时候，就成立了非营利的基金会来保证Kernel 的中立性，我们再看一组数据，即参与Kernel的整体29年的贡献度:

![](../../images/contribut-to-kernel-by-company.png)

（图片截自Linux 基金会最新发布的Kernel报告[2]）

商业公司的贡献已经超过60%，而且这些商业公司来自世界各地。

让我们在往外延伸一些，Linux 基金会为何可以保持其中立性? 那我们就需要追溯到GPL v2 这款许可证协议，正如Linus 在回答不会担心被微软接管时所答：[4]

> That's because Linux, by its very nature and its GPL2 open-source licensing, can't be controlled by any single third-party.

到此我们可以看到开源庞大的体系：开发者、工程师、法律、制度、社会、商业、等等诸多因素汇集而成的大成者。而且保持着现代科技的特征：生命的流动性！也就是说开源是有机的、动态的。而软件不过是其中一小部分罢了。

回到那个宫敏博士的故事：29年之后，那些软盘里的代码有没有生长？亦或是长埋于历史的洪流，不惊起一丝的浪花。再看 Linus 的分支，一直在野蛮生长，为现代世界撑起脊梁：

![](../../images/kernel-contribution.png)

（图片截自Linux 基金会最新发布的Kernel报告[2]）

同理，读者也可以将上述的思路推理到其它软件栈：Firefox、Chromium、Apache Hadoop、AOSP、FreeBSD、Postgresql、Debian...... 下载到的二进制部分，和整个开源比较起来，实在微不足道。

**在开源的世界，开源软件断供可怕吗？当你拥有冰山的时候，那一个小角落真的那么关键吗？**

## 回顾一下“孤岛”的时代

如果说1991年8月25日，Linus 写下了 Linux Kernel 第一行代码之后以 GPL v2的形式发布源代码，这天和中国的某个特殊事件有所关联的话，我可以想到1980年8月26日这一天[6]深圳正式成为经济特区，这也是我朋友圈上个月末都在庆祝深证40周年，庆祝改革开放带来的富足和有追求的生活。

1980年前的中国 IT 是什么样，或者说整个中国的状态是什么样，笔者就不在这里提及，有兴趣的读者可以找资料查查，然后和硅谷的历史进行一下对比。[25] 不过那个时候，所谓的孤岛的意思是中国大陆和世界上仅有的几个社会主义国家有往来，和世界上绝大部分国家是没有任何的往来的，在当时的情况下，中国就是一座大的孤岛。不过我这里讲的不是这个孤岛的意思，有兴趣的读者，可以查阅相关的历史书籍。

回到笔者要阐述的“孤岛”，在刚刚过去的8月份下旬，准确点说是22号，Ibrahim Haddad 博士发布了《技术债务和开放式开发》[26]，其中特别针对利用开源的技术债务进行了说明：

![](../../images/open-source-tech-debt.png)

我一般会解读为“孤岛”的开发模式，也就是说，将开源项目的Upstream 是有机的、进化的，而一旦fork下来，在自己的小范围内开发，就变成了“孤岛”，这方面的案例数不胜数，笔者亲身经历的Linux发行版时代，就是最好的说明，比如曾经将“国产操作系统”这个PR术语用到极致的中科红旗Linux的出局[27]就是最好的明证之一。中科红旗不是第一个倒下的基于开源的商业项目，也不会最后一个，因为孤岛依然存在，那么多的Linux发行版（读者可以自行查询），对于上游的贡献几乎找不到他们的身影：

![](../../images/percentage-linux-commits-by-company.png)



## 世界很大，不止中美

自从发现新大陆之后，人类打开探索地球的大门之后，从全球视野来观看现代世界的思路，就没有改变过。为了避免遭人说卖弄的嫌疑，我这里不打算给大家说什么空间、地理和现代交通的知识，我只想讲讲开源世界的人们。

不妨从下面这段经典的描述说起，尽管是来自一本经典的社会学图书：

> 人类的多样性也包含着个体的多样性；这些同样须被社会学的想象力所把握和理解。在此想象中，1850年的婆罗门与伊利诺伊州的拓荒者站在一起；18世纪的英国绅士和澳大利亚土著人比肩而立，同时在场的，还有一百年前的中国农民，当代玻利维亚的政治家，法国的封建骑士，参加1914年绝食抗议的英国女权运动者与一位好莱坞新星和古罗马贵族。写到“人类”，就不能不写到这些男男女女——既有不凡如歌德，也有平凡如邻家女孩。
>                            ——  C.赖特·米尔斯 《社会学的想象力》

在这里我会从[开源共同体内的角色分析（个人与机构分别来谈论）](posts/community_leadership_development/open_source_community_role-analysis/) 所分析的开源世界的英雄们讲起，因为这便于大家的理解，最后给大家一个全概念的图，分别来自Apache年度报告和GitHub 的2020年的报告。

### 开源领袖们的国籍考

我非常清楚我这么做是非常危险的，又可能被引入到国籍对于开源的影响之类的，但是没有人能够改变一些事实存在的，所以我还是把这些东西列出来的较好。

| 姓名                    | 开源项目或影响领域            | 原始国籍        |
| ----------------------- | ----------------------------- | --------------- |
| Linus Benedict Torvalds | Linux 和Git                   | 芬兰            |
| Guido van Rossum        | Python                        | 荷兰            |
| 尤雨溪                  | Vue.js                        | 中国            |
| Tim O’Reilly            | Open Source 、Web2.0          | 爱尔兰          |
| henry zhu               | Babel                         | 中国            |
| Fabrice Bellard         | FFmpeg、QEMU、Tiny C Compiler | 法国            |
| **Matei Zaharia**       | Apache Spark                  | 罗马尼亚-加拿大 |
| Igor Sysoev             | Nginx                         | 俄罗斯          |
| 吴晟                    | Apache SkyWalking             | 中国            |
| 松本行弘                | Ruby                          | 日本            |
| Avi Kivity              | KVM                           | 以色列          |
| ......                  | ...                           | ...             |

这个表格可以列出很长来，不过这不是本文的重点，或许有兴趣的同学可以考查一番。我们来看看Apache 软件基金会在2020度报告所提到的贡献，Apache 500多个顶级项目当中，来自欧洲和澳大利亚地域的占了大部分：

![](../../images/apache-annual-report-2020-region.png)

我们再来看一组目前来说汇聚全球最多程序开发者的商业平台 GitHub 给出的近期报告[5], 下图是来自各大洲的贡献者：

![](../../images/github-octoverse-region-2020.png)

回应一下这个主题，开源不是任何一个国家或者是任何一个大洲的事情，而是汇聚全球智慧。

> Hackers should be judged by their hacking, not criteria such as degrees, age, race, sex, or position .
>
> ​                         —— **Hacker** **ethic** **1/6** 

新的开源的时代下，这句话可能需要加上一个 “nation"。

【注：另外，适兕一直想将操作系统虚拟化、容器技术的隐喻来说明社会组织的关系，《利维坦》一旦完成它的使命，可能就会出现偏差，正在积极的准备中，敬请期待。】

## 社交平台与代码托管

在版本控制系统和云计算发展到今天的地步，搭建代码托管平台是一件成本极为低廉的事情，而且任何人都可以随时随地搭建（熟悉Git的朋友都明白： `git init` 一条简单的命令就可以成为一个开源仓库。）

### 这个世界上的代码托管平台

现代的互联网世界当中，有着非常多的可以用来当作代码托管的站点或平台，笔者给大家在这里简单列举一下：

| 名称         | 公开站点                   | 备注 |
| ------------ | -------------------------- | ---- |
| GitHub       | http://www.github.com      |      |
| GitLab       | http://www.gitlab.com      |      |
| BitBucket    | https://bitbucket.org/     |      |
| Gitee        | https://gitee.com/         |      |
| GNU Savannah | https://savannah.gnu.org/  |      |
| Sourceforge  | http://www.sourceforge.net |      |
| Launchpad    | https://launchpad.net/     |      |

换句话说，目前的代码托管，作为代码的生产者是拥有主动权的，也是可以选择适合自己口味的。比如是否介意这些平台本身是否是开源的项目，如不介意，那么选择GitHub、Gitee等都是可以的，如果介意，那么选择GitLab、Savannah也可以。以自身的意愿为主。

### 可以作为代码托管平台的开源项目

我需要为我刚才说的话（成本低廉）负责，优秀而卓越的可实现代码托管且拥有完善功能的开源项目十余种，起码从这个角度讲，当下技术实现上是较为简单的事情，以下我们就引用 Apache 旗下代码托管平台allura（知名平台 Sourceforge 所使用的技术）[所做的比较](https://forge-allura.apache.org/p/allura/wiki/Feature%20Comparison/)：

![](../../images/open-source-forge-platforms.png)

其中Allura、GitLab、Pagure均是有着承载几百万项目的实际案例的。而且这些平台的搭建，也就是几分钟的事情，当然和大多数开源项目的后续维护、改进、以及商业的支持等一样不可避免，是另外需要说明的事情了。

以上其实不是我想说的，只是顺嘴唠叨几句，我要表达的重点是下面：

### 重要的角度看代码托管

> The advantages of GitHub—that it’s easy to use, and easy to share and discover others’ code—are also the source of today’s challenges in open source.
>
>    ​              —— Eghbal, Nadia. 《Working in Public: The Making and Maintenance of Open Source Software》 (p. 41)

代码这个内容的生产者是比较特殊的群体，多数需要3~5年的训练，方能开始做一些颇具生产性和创造性的事情，也就是说这个群体是基于职业的、专门技能的群体，他们所生产的内容就是计算机可以运行的代码，这些最后运行所提供的服务恰是我们现代社会所依赖的：网站、社交、视频、支付等等的基础设施，所涉及的领域非常的广泛：

*  操作系统
* 科学计算
* 人工智能
* IoT
* 数据库
* 消息队列
* ......

就中国特殊的环境而言，如果不是需要特定的技能的，即任何人都可以生产的，当然也有特别的艺术家等，如YouTube、Twitter、FaceBook、instagram、Netflix、Medium、比如网红李子柒可以在YouTube上练成烧饭达人，继而在Youku上带货、贴品牌的成功路线，是无所谓平台的政策的......甚至是全民参与的知识生产 Wikipedia， 或由于使用习惯，或由于其它原因都是可以替代的，至少不会变的特别的难以忍受。几乎都可以复制甚至在某种程度上的超越，毕竟有些是和文化有很大关系的。但是毋需只说的是，这些基于web 2.0 的社交平台是被某种技术手段所割裂的，当然，换来的就是本土没有竞争。

那么不可回避的问题，就是说 GitHub 这个基于生产代码的社交平台，这些具备特殊技能的群体切换的可能性有多大？

> Mark Zuckerberg himself declared to a crowd at Facebook’s 2019 F8 conference that “the future is private,” insisting, “Over time, I believe that a private social platform will be even more important to our lives than our digital town squares.” [1]
>
> ​               ————脸书CEO  Mark Zuckerberg 在 2019年会上如此说道         

如果利用网络的优势，让这款汇聚全球代码精英的平台，变得访问缓慢，甚至干脆就和上述提及的社交平台一样凭空消失的话，那么能否接管起来？本土的2000万开发者（CSDN 蒋涛语[23]）能否承担起割裂之后所有的带来的后果？

代码是现代的流动性的一个非常具有典型特征的内容，也就是说代码托管这种基本的服务是任意可以获得的，因为它几乎是静止的、不变的，而恰恰开源的代码是有机的、演进的、不断生长的，而背后生产这些代码的是人——受过计算机科学训练的群体，才是关键。能否吸引更多这个群体的人在这个平台不断的进行创造，才是Social Coding 的核心！也是开源作为一种社会现象存在的内在原因。

任何一家想在本土复制 GitHub，而试图借鉴过往利用网络封禁的优势的经验，都是骑在刀刃上行走的，一方面对于本土的产出存在疑虑，另一方面又需要融入世界才能将代码激活。后者往往会被某些短期的诱惑和情绪化的口号所蒙蔽。这对于本土所有的商业公司、公共机构、教育组织等都是极大的挑战。稍一不慎，即堕入危险之境。



## 以人为本的开源

开源发展至今20余年，作为一种社会现象也好，作为一种文化倡导也罢，终究落地的是以计算机代码的开放为载体的，但是正如本文的第一个章节所提到的开源最后所能够让人们”眼见为实“得那部分不过是水面上露出冰山一角的部分罢了，水下的部分才是更为重要的部分，那么其中文化是其最为核心的部分，笔者在这里就从如下一些讲述开源文化的著述或文章中为大家抽取和挑选一番：

* GNU Free Software的定义和哲学[7]
* 开源的定义 [8]
* 《大教堂与集市》[9]
* 《黑客伦理》[10]

### 开源的胜利是人的胜利

在开源无处不在的今天，那些发起开源项目的开发者们，在最初的时候几乎都是以个人的名义发起来的：GNU 计划下的项目、Linux Kernel、Perl、Python、Apache HTTPD、Ceph...... 在这一点上，我们可以说是开源软件的革命。

不是商业公司、政治组织的胜利，是人本身的胜利！ 以人为单位所捍卫的权利，以生产者最后的尊严换取的历史的认可！尽管目前为止，仍然存在着很多的危险，时刻都有可能被侵占和吞噬，但是这些人仍然在战斗着：**欢迎任何人来使用和贡献，不管你来自哪里，什么性别、肤色、种族。**

### 由人组成的共同体

互联网让连接成为了可能，每个开源项目都可以组成一个开源共同体，在这个开源共同体当中，参与其中的人一致认同的文化：

*  多样性
*  友好
* Meritocracy
* 对所有人开放
* 开放
* 透明

### 人尽其用

在开源的世界里，作为开发者、工程师的角色而言，是鼓励倡导人尽其才的，由什么本事尽管使，而且所得的工作成果，是全世界都可以看得到的，这几乎接近人的理想境界，按照自己的自由意志做自己要做的事情：编码，以铸造自己的世界。为开源做贡献，是不会提出任何如下条件的：

*  学历认证
*  社会资格
*  教授特权

### 才配其位[24]

由于是在所有人看得见的地方工作，输出的质量和多少是有目共睹的，那么能够在一个项目中脱颖而出是依靠最后的贡献价值来衡量的，用周明辉老师的话说就是：在开源这个共同体当中，因为其有足够的多样性，和世界足够的大，所以参与其中的人是可以做到才华和位置相匹配的。



## 本土要更加拥抱开源

关于开源，应以《枢纽》的作者施展先生的话为钢：

> 中国必须在世界中，实现其自身！

中国有着非常丰富的历史遗产，在现代化的进程中也遇到很多的障碍，其中一个就是从”天下“思维”到“世界”思维的过程。这体现在很多日常生活的细节中，甚至是购物这样的事情上：

> 中国是从世界的文化中心——中央王国——转变成世界上众多平等的民族国家之一，这种意识上的转换不只是简单地因为多次战争失败所导致，至少重新界定商品也同样重要。.......这些与众多进口商品相关联的名称也是较早的那个自我想象瓦解的表现之一。
>
> ​                              ———— [葛凯 (Karl Gerth)](https://book.douban.com/search/葛凯) 《制造中国》

所以，在很多时候，我们看到一些商家，在世界的舞台遭遇挫折之后，打着民族爱国的旗号，试图抢夺本土市场和国际厂商一争高下，也是可以理解的。

但是这里面有一个充满诱惑陷阱的地方的，那就是如果对某个技术没有心理表征的话，就会产生自我的认知偏差，在这方面最为极端的情况，我以为就是红芯浏览器造假[21]和“木兰”编程语言[22]等荒谬的事情。

本土的 IT 技术非常的落后，在过去的20年，还是处于开源软件的下载和消费的地步，在代码的理解、贡献和影响力方面是非常非常的差[11] [12] [13] [14] [17]，当然更加不用提及商业上的差距了，在软件授权时代[15]，中国几乎没有发展出任何可以和微软、Oracle、IBM、SAP 等世界一流软件公司比肩的商业组织，当然，开源组织就相差更远了。

![](https://alc-beijing.github.io/alc-site/images/Apache-active-of-2019-annual-report.png)

​    （图像截自 Apache Annual Report 2020 ）

是的，要真实的认清自己的现状，努力学习，虚心请教，开放源代码是平等参与的绝佳机会，也是提高一代人的编码技能的大好机会。如果是拒绝开源，或者是试图将开源拒之门外，而只是将开源的副产品软件复制一份，正如过去20年的linux发行版一样死于角落[16]，不会有任何的提高，反而会将人坑害沦落为狭隘的、拒绝睁眼看世界现代的野蛮人。

我在[历史的维度——开源、拿来主义与自主可控的历史对比](posts/opensource/open_source_tao_and_way/latitude_of_history/)一文中，回顾了本土和世界的时间节点的对比，本土的IT技术发展晚，基础薄弱，恰逢互联网崛起，以及其孪生兄弟开源的应用，让本土在 Web2.0 之后的电子商务、现代物流、智能手机、云计算等方面，和世界同行业是站在同一起跑线，基础设施可以说是开源承揽了所有的功能。这恰恰验证了：

> 开源让中国与世界更加同步。 
>
> ​                                       ————吴晓敏

## 写在最后

身为一名开源布道师，写到此处，最大的感受竟然是 **First they came** [18] 这首诗。用来感慨一下本土的开发者，继续保持沉默，连开源都要被那些铸造高墙的人给剥夺了！这可能是我们这代人最后的机会。

![](https://upload.wikimedia.org/wikipedia/commons/5/51/Poem_by_Martin_Niemoeller_at_the_the_Holocaust_memorial_in_Boston_MA.jpg)

  （图片来自Wikipedia）

科学家兼历史学家特伦斯.基莱（Terence Kealey）指出，**“过去10000 年里的人类大战，一直是反垄断之战。”**[19] 一般认为，世界最大的商业软件公司微软拥抱开源[20]是开源瓦解商业软件授权的重大事件，但是视开源为洪水猛兽的人又何尝不是利用某些手段来尝试垄断只有一技傍身的可怜的计算机科学从业者和世界交流的机会了呢？

请保持清醒，正是有了开源，我们才得以和世界上所有的同行有了沟通的机会；正是因为开源的存在，我们略过了商业公司组织起来的技术壁垒进行正常的交流；正是因为开源，我们和世界上最顶级的开发者和科学家零距离接触和交流；正是因为开源，我们才可以站在巨人的肩膀上进行创新，打造我们美好的明天。

**请保持清醒，开源是和世界保持同步的绝佳机会，很难再找到比这个更好的窗口了。**

## 参考资料

[1]. https://www.theverge.com/2019/4/30/18524188/facebook-f8-keynote-mark-zuckerberg-privacy-future-2019. 

[2]. https://www.linuxfoundation.org/resources/publications/2020-kernel-history-report/ 

[3]. https://fedora.pkgs.org/

[4]. https://www.zdnet.com/article/linus-torvalds-isnt-worried-about-microsoft-taking-over-linux/

[5]. https://octoverse.github.com/ 

[6]. https://zhuanlan.zhihu.com/p/150285817

[7]. https://www.gnu.org/philosophy/free-sw.html 

[8]. https://opensource.com/resources/what-open-source

[9]. https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar

[10].  https://en.wikipedia.org/wiki/Hacker_ethic

[11]. https://www.apache.org/foundation/reports.html 

[12].  https://www.linuxfoundation.org/blog/2020/08/download-the-2020-linux-kernel-history-report/

[13]. https://www.redhat.com/en/enterprise-open-source-report/2020

[14].  https://insights.stackoverflow.com/survey/2020#technology

[15].  [得开发者得天下](posts/paper_or_book_reading/the_new_kingmaker_review/)

[16]. [为什么基于成功的开源项目的商业产品会失败？](posts/opensource_culture/why_product_failed_that_based_successful_open_source_project/)

[17]. [我们分析了GitHub上5.46 亿条日志，发现中国开源虽然贡献大但还有这些不足](https://cloud.tencent.com/developer/article/1590173)

[18]. https://en.wikipedia.org/wiki/First_they_came_... 

[19]. Kealey,T. 2008. Sex,Science and Profits. Random House. 

[20]. https://pulse.microsoft.com/nl-nl/business-leadership-nl-nl/na/fa1-microsoft-loves-open-source/ 

[21]. https://tech.qq.com/a/20180816/045211.htm

[22]. https://www.thepaper.cn/newsDetail_forward_5561516

[23]. COSCon'19 Keynote 蒋涛对话GitHub

[24]. [开源之道 Talking Episode #12：开源世界的Peer Review](posts/opensource_talking/2020-06-30-peer-review-in-open-source/)

[25]. [历史的维度——开源、拿来主义与自主可控的历史对比](posts/opensource/open_source_tao_and_way/latitude_of_history/)

[26]. https://www.linuxfoundation.org/blog/2020/07/solving-technical-debt-with-open-source/

[27]. https://www.lieyunwang.com/archives/33161