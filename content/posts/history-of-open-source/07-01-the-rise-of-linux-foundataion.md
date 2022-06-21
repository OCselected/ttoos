---
categories:
- 开源
- 历史
date: 2022-06-21T15:31:53+08:00
description: "不让公地悲剧上演，是人类社会重要的积极主动的解决问题的举措，开源的代码不仅可用，而且有利于进一步的创新，那么将这些有用处的项目可持续的发展，是政府、民间团体、立法等想办法去解决的，而不是等待让坏的事情发生。Linux基金会不仅证明了这点可行，而且是共同利益的重要表率。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之九/九：推动 GNU/Linux —— 企业联盟式的非营利基金会"
url: ""
authors:
- 「开源之道」·适兕
---

## comps.os.linux 

Linux 诞生于互联网，利用了当时的最佳应用程序（killer app）—— 邮件列表，Linus Torvalds 写的第一封邮件是在 `comps.os.minix` 邮件列表[1]，当拥有了自己独立的邮件列表 `comps.os.linux` 时，时间已经是1992年底，[2] 有了这个邮件列表，意味着更多的人参与进来，除了日常开发、各种平台支持之外，也有更多信息需要处理[3]。

经过数年的发展，在围绕Linux这个大的上下游就开始出现了：

![](images/book-reading/open_source_software_ecosystem.gif)

也就是说在开发共同体之外，也有了更多需要处理的事情。

## Linux 与开源的崛起

Eric Raymond 的论文《大教堂与集市》将GNU/linux 的有效开发模式介绍给了大众，开发者们也默默的打造出了可用的自由/开源的操作系统，随着Apache 和Perl 的被众多发行版的整合，以及Intel 芯片的突破，以及华尔街的推波助澜，开源崛起，据IDC当年的调查：

> Linux 是增长最快的服务器操作环境。 1998 年，安装了大约 750,000 台 Linux 服务器，增长率为 212%，占所有新服务器布局的 17%。[4]

## IBM 豪赌十亿美金 与企业的逻辑

1998年是个技术市场的转折点，离Bill Gates 撰写《互联网浪潮》已经过去了三年，而且浏览器战争，Netscape 已经被逼拥抱了开源，作为企业系的巨头IBM，不经在3月份宣布了支持Linux[4]，还紧接着在7月，IBM 宣布加入 Apache Group，使 Apache Web 服务器成为其 WebSphere 产品线的核心。[5]

在参与Apache Httpd 的开发中，为了保持上游优先，以及鼓励员工参与，IBM 协助 Apache Group 注册成立了503c（3）的慈善组织：Apache 软件基金会（详见上一章），那么对Linux的支持该如何处理？IBM 是一家现代商业公司，而Linux是一个宽松的基于互联网的职业共同体，即使在2000年高调发布十亿美元支持Linux，大部分其实是对自己产品线的支持，如硬件。[6]

作为法人的商业机构，企业为了保护自我，以及避免法律风险，需要中立的法人机构来进行担保和协作，这是现代经济的基本运行逻辑。显然基于邮件列表的共同体无法满足这个需求。需要联合业界共同推动成立联盟，显然是最合适不过。

## 自由标准组 （FSG）成立

标准组织的工作组，尤其是和开放标准相关的，我们可以参考IETF的工作之道，[8] GNU项目、Linux以及Perl语言等整合的发行版，众多的硬件和应用厂商，显然如此有点杂乱不堪的自由/开源软件需要一些业界标准来做这件事，于是按照标准的方式方式成立非营利组织，1998年，旨在通过制定和推广此类软件的国际标准来促进自由软件的使用[9]。

FSG 最初的项目来自于开源先锋 Bruce Perens 主担的LSB：Linus标准库[10]工作组，后来又逐步成立：

* 开放国际化倡议 (OpenI18N)， 国际化是对每个国家和地区潜在用途的产品进行调整，包括增加一个支持多种语言和文化的框架。
* Linux 名称和数字分配机构 (LANANA)
* OpenPrinting 工作组正在开发和推广一套标准，以满足 Linux 企业级打印的需求，
* Accessibility 辅助工作组
* Open Cluster Framework

FSG 得到了多家硬件和发行版厂商的支持，Intle、IBM、RedHat、Dell 等均是赞助商，使得这个非营利组织得以运营，除董事会成员之外，还雇佣了专门人才来经营，其中就包括刚刚从互联网公司出来的Jim Zemlin[11]。

## 牵头成立企业联盟 OSDL 

从 Linux 共同体的角度来看，以个体和开发者为主，以代码和实现功能为沟通语言，但是在应用界，或者是打算利用计算机和互联网实现自己业务的运行逻辑不是这样的，他们更需要权威的可信的认证机构，那么IBM、HP这样的厂商也同样需要第三方的机构来确认开源项目的最终产品能否可用？是否会带来知识财产、安全、以及是否能满足常见需求，如下图所示：

![](posts/history-of-open-source/medias/osdl-works.png)

IBM 犹如将 Apache Group 注册为 Apache 软件基金会一样，联合HP、Intel、NEC 共同成立了开源开发实验室，主要是针对Linux的企业级、电信级应用作测试和保障.[12]，并推出一系列的项目：

* Linux扩展性
* Linux 基准套件
* Linux 硬件/软件兼容性测试

随后，还在日本成立了分部，并吸纳了更多的发行版加入。

### Linux 创始人成为OSDL Fellow

Linus 为了保持中立的身份，拒绝加入任何一家发行版厂商，而是选择了一家并不知名的芯片厂商 Transmeta ，在1997～2003 年这段工作时间，Linus 虽然也在kernel做着维护工作[13]，但是随着Kernel的发展，延迟的时间也越来越长，OSDL 邀请Linus 加入，并资助他全部精力投入到Kernel的开发中，于是在2003年以fellow 的身份加入了OSDL，这是一个双赢的举动。

OSDL 还在后来雇佣了kernel的维护者：Andrew Morton ，以及SAMBA的创始人 Andrew "Tridge" Tridgell等加入。

## 标准和商业推广促进开源

互联网随着web2.0的到来，迎来了新的繁荣，而这些新的厂商都是采用开源来架设自身的基础设施，当然，这也是开发人才自身的知识体系所带来的积极效果，这个效应进一步的影响到了传统的信息采购和数字化，而这些厂商更能识别的是传统的服务模式，不仅是发行版、数据库提供商，都需要从开源共同体中获得相应的知识，那么OSDL和FSG的工作：测试、发行标准、组织大会、教育、认证等获得了业界的认可，进一步推动了整个产业。

但是，OSDL 和 FSG 的工作有很多重复的地方，比如集中在Linux的上下游，赞助商都是相应的硬件制造商和发行版，众人商量之余，不如合并了做大做强。

## OSDL 和 FSG 的合并 ———— Linux 基金会的诞生

两个中立的组织合并了之后，成立了非营利503c（6）机构：Linux基金会[14]，随着开源的进一步发展，Linux基金会从围绕Kernel单独的项目，逐渐扩展到更大范围的开源软件，近年来更是引领技术前沿，如云原生、人工智能和区块链，以及基础设施安全。成立信息产业中的中流砥柱。[15]


## 参考资料

1. LINUX's History, https://www.cs.cmu.edu/~awb/linux.history.html ，最后访问时间：2022-06-20
2. https://groups.google.com/g/comp.os.linux.announce/c/F8U96SD65RU ，最后访问时间：2022-06-20
3. What News Groups Are There for Linux? https://tldp.org/FAQ/Linux-FAQ/online-resources.html ，最后访问时间：2022-06-20
4. IBM launches biggest Linux lineup ever， https://web.archive.org/web/19991110114228/http://www.ibm.com/news/1999/03/02.phtml ，最后访问时间：2022-06-19
5. The Open-Source Revolution ， https://web.archive.org/web/20000815230603/http://www.edventure.com/release1/1198.html ，最后访问时间：2022-06-19
6. Linux：The Era of Open Innovation ， https://www.ibm.com/ibm/history/ibm100/us/en/icons/linux/ ，最后访问时间：2022-06-19
7. https://en.wikipedia.org/wiki/Open_Source_Development_Labs ，最后访问时间：2022-06-19
8. The Tao of IETF， https://tools.ietf.org/rfcmarkup?doc=fyi17 ，最后访问时间：2022-06-20
9.  The Free Standards Group: A Brief Introduction , http://www.linfo.org/free_standards_group.html ，最后访问时间：2022-06-19
10. https://en.wikipedia.org/wiki/Linux_Standard_Base ，最后访问时间：2022-06-20
11. About FSG，https://web.archive.org/web/20060116212850/http://www.freestandards.org/about/staff.php ，最后访问时间：2022-06-20
12.  Forming Open Source Development Lab For Linux， https://web.archive.org/web/20030607050006/http://osdl.org/osdlpress/2000_aug_30_santa_clara.html  ，最后访问时间：2022-06-21
13.  About Linus Torvalds，https://web.archive.org/web/20040626044423/http://www.linux.org/info/linus.html ，最后访问时间：2022-06-21
14. OSDL/FSG announce collaboration ， https://lwn.net/Articles/102025/ ，最后访问时间：2022-06-14
15. The Linux Foundation became a force in enterprise tech. Is that a problem? https://www.protocol.com/enterprise/linux-foundation-open-source-enterprise ，最后访问时间：2022-06-21

## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
