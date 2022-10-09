---
categories:
- 开源
- 历史
date: 2022-10-07T15:39:58+08:00
description: "将人群区分出来，是商业的必经之路，总是有人愿意购买，无论是商品、服务、理念、承诺，开源项目所形成的能够有效解决问题的知识财产抽象物品，软件作者按照自己的意愿和理解，不同的使用者授予不同的许可，一切都是理所当然、合情合理的。"
keywords:
- Open Source
- Culture
- Reading
- Hitsory
tags:
- 历史故事
- 开源之史
title: "「开源之史」系列之三/七: 不同的群体采用不同的许可 —— 双重许可下的商业与共同体"
url: ""
authors:
- 「开源之道」·适兕
---

> 也许，我就像一条正在遭受风浪肆虐的船：尽管时不时地需要调整航向，很费力，速度也非常慢，但是仍然没有沉入水底，并且正大致沿着事先规划好的航线不断前进。
>     ———— 艾森豪威尔 [1] 

## 妥协与中庸

“入乡随俗”是一个相当普遍的观念，我们都知道在陌生的地方要遵守当地的习俗和约定。在商业领域更是如此，要根据当地的文化、制度等因素来进行相应的活动[2]，那么在软件这个全新的知识领域里，根据不同的派别，能否形成不同的群体？

如果这样的情形是放在我们自然的地理边界，貌似没有什么问题，毕竟很多商品都有地方保护，比如汽车、香烟、啤酒等。但是，放在不能设防的互联网上，如何主动的区别用户？如果是用不同的行为（不同的许可）来区别用户，这二者之间的公平性又该如何处理？以及如何处理其中的搭便车者？

对于世界的认知存在纯粹的群体，这是一件极为难堪和肮脏的事情，它混合了利益、道德、公平、隐藏等等不同的价值尺度，而根据实际情况来进行的决策与行动。

## 灰色地带与纯粹世界

人类的历史上，追求纯粹世界的人从未间断过，长期以来一直都前赴后继的出来过。自由软件运动的发起者 Richard Stallman 绝对是其中之一。为了实现软件的自由，他可以放弃任何表达软件自由的机会，例如来中国几次都因为转播平台的音视频格式而无法直播。他也践行自己的理想，远离所有非自由的硬件，从Apple 到Kindle。

最为著名的布道师 Eric S.Raymand 则在其论文中提及自由软件的商业维持需采用间接的模式[3]，也就是说不能从自由软件本身收取许可费用的模式在这里是行不通的，但是软件作为商品并不是只有这么一条路径[4]，还有：

* 售卖服务
* 授权品牌
* 订阅
* 订制

![](posts/history-of-open-source/medias/four-software-business-model.png)

等等，但是在具体的执行落地过程中，从来就没有这么清晰明了，这些不过是些学者们为了研究的方便而分类罢了。现实世界的买卖交易比这个要复杂的多，大多是混杂了更多的因素。于是，混合着这些模式也在摸索的发展，当然，作为主流的售卖许可副本的模式仍然是行之有效，也是印钞机模式的最佳例证。目前来说，世界上最大的软件公司，都是依靠这个模式来的。[5]

那么，有没有一种可能是混合着自由软件和软件副本授权模式的了呢？答案是有，而且走的远比我们想象中要远。

## 案例分析

在实用主义哲学所倡导的内容中，是务实的解决现实问题，而不是追求不可实现的乌托邦的美好愿景，脚踏实地的寻找道德和利润之间的平衡之处。

### Sleepycat Software Inc

在谈Sleepycat 这家公司之前，我们需要概要的交待一下Berkeley DB 这个项目，大家一定注意到Sleepycat 的公司口号就是：Berkeley DB的制造者（Maker of Berkeley DB）！

![](posts/history-of-open-source/medias/Sleepycat_logo.svg.png)

时间要回到UNIX开始收取商业费用开始，BSD 系统需要删除所有 UNIX 的实现，从BSD4.3开始，BSD 实现了包管理的数据库，并在BSD4.4的发布中包括了 Berkeley DB 1.85 [6]，时间是1992年，顺理成章的所选择的许可也是BSD学术型许可，软件的作者Margo Seltzer 和Keith Bostic夫妇在维护，在接下来的几年内，Berkeley DB 获得大量的用户，尤其是在自由和开源软件领域：Linux发行版等。

由于有着大量的用户基础，Berkeley DB 也有着广泛的信誉度和可靠性，在万维网爆发的1996年，Netscape 要做企业服务，选中了Key/Value的库，也需要企业级的支持，并找上了Seltzer 商议此事，于是经过一番协商：Sleepycat 软件公司应需而生[7]，既然是商业化，作为学术派出身的Seltzer夫妇重新修改了Berkeley DB 的许可，基于GPL做了Sleepycat License，但是这个对被许可方做了分类：

1. 如果将Berkeley DB 继续开源，强互惠许可是有效的，也就是说修改了Berkeley DB的代码再发行，必须仍然以Sleepycat 许可发布；
2. 如果是商业公司如SUN、Cisco这样的大公司商业产品包含Berkeley DB，则必须购买许可费用，并获得对应的商业支持。

看起来毫无违和感，在各个开源项目中，Berkeley DB 仍然蓬勃发展，Sleepycat 软件公司也为有需要的公司提供商业服务和收取一定的许可费用，并且获得一大批的商业客户[8]，公司直到2006年被数据库巨头Oracle收购，并根据技术的发展，又一次将Berkeley DB 修改许可为 AGPL，Oracle 继续为商业版的提供服务和开发[9]。

### TrollTech AS/ QT company

在Linux的发行版中，有两个非常著名的桌面环境：Gnome 和 KDE，其中 KDE项目就是使用的QT框架来实现的，QT本身是用C++预言编写，QT 始于1991年，在发布了几个版本之后，为了项目的可持续性，作者Eirik Chambe-Eng 和 Haavard Nord 创立了公司Trolltech，专注于项目的发展和改进，到1996年将QT的代码开源，采用的许可是其公司自己撰写的许可，这个许可是不允许修改和再发布的。但是随着KDE的流行，来自开源共同体的压力迫使其修改许可，在1998年，Trolltech 发布了基于GPL的QPL，仅通过分离的补丁再发行。但是这么做显然并不得人心，于是在2000年，Qt放弃了QPL，转而采用GPL。但是这些都是开源的故事，而另外一个许可的故事则是：

> 任何基于 GNU GPL 许可下的Qt ，以及衍生版，都仍然必须基于GPL 再发布，否则，如果打算创建闭源、专有的软件，则必须从 Trolltech 购买开发许可。[3]

这就是 TrollTech 的商业版本，随着移动互联网的崛起，鉴于图形库在各类设备上的刚需，TrollTech 从来都不缺商业用户，公司几经转手，从Nokia到Digia，再到独立的Qt Company，并于2016年公开上市，一直运营至今。

### MySQL AB

说起MySQL 可谓是无人不知，无人不晓，随着万维网崛起的技术栈，MySQL 凭借许可的优势，一举夺得了互联网站采用最多的关系型数据库系统，但是MySQL 本身从来都不是由共同体来主导开发的，从它诞生的第一天起，它就是商业公司的输出， Michael Widenius 早在1979年就开始了数据库的编写工作，基于其在TcX的十多年的积累[10]，在1995年和David Axmark、Allan Larsson一起成立了公司MySQL AB，并在1991年发布了MySQL的第一个版本，从这个时刻起，MySQL都是基于双许可发布的，不过这个时候的开源许可是基于Ghostscript public license，创始人对于开源的力量非常的认同，同时也对商业有着近乎执拗的偏执[11]：

> The licensing was set up to allow us to give MySQL away for free to the majority of our users, and get money from people who wanted to distribute MySQL as part of a closed source product.

在创始人的认知里，将再闭源付费是一件天经地义的事，对于人们遵守开源许可也是理所当然。将规则的定义如此的明确，也是如此的清晰明了，并行之有效的去执行。

MySQL AB 在2001年邀请Mårten Mickos加入并担任CEO一职，这位传奇般的CEO，让MySQL AB 声名鹊起，一路高歌猛进，最终10亿美金卖给了SUN。后来的SUN被Oracle收购，MySQL 系列产品也成为了Oracle 数据库产品的一部分。仍然以双许可叱咤江湖。

## “天桥卖把式”能走多远？

在一些武侠影视剧的桥段里，经常会看到英雄落魄，街头卖艺，胸口碎大石，然后和围观的群众收点小钱，有的还作为秀场进而卖点大力神丸之类的，也是屡见不鲜，但是通常不可持续，仅用来临时过渡。

![](http://image2.sina.com.cn/dy/c/2007-04-09/9ab2feb25b0c190dc923eaf9ecff0021.jpg)

(图片来源：新浪网)

从市场的隔离理论[12]来讲，在专有软件商家一般为区别为：个人版、家庭版、企业版、企业白金版之类的，当然价格不同，功能不同，但是许可是一致的，按照许可来区别和隔离不同的群体，也未尝不可，但是是不是和OSI所定义的第五条原则：

> No Discrimination Against Persons or Groups

有冲突和矛盾之处，还是需要进一步的讨论和分析的。

不过笔者更为担忧的是在法律不够完善（更多意义上的指不遵守、不执行），社会规范不够的时候，搭便车者会采用双重标准，即将MySQL 开源的许可来构建商品，但是再分发却按照专有软件闭源产品来进行售卖，这样的话，就完全违背了MySQL 原作者的意愿和合同。这就又回到了我们这个部分的开始部分：经济秩序的运行严重依赖于法律的遵从。那么这样最后所导致的局面就是，最上游的项目被无限fork，开源的优势完全无法利用，而商用许可却被无限的分割，眼看着项目不可持续，无以为继。

## 参考资料

1. 《品格之路》，[美]戴维·布鲁克斯，中信出版社，2016-8-15
2. 《认识商业》，[美] 威廉·尼克尔斯（William G.Nickels） / 吉姆·麦克修（James M.McHugh） / 苏珊·麦克修（Susan M.McHugh），世界图书出版公司，2016-1
3. 《The Rise of Open Source Licensing：A Challenge to the Use of Intellectual Property in the Software Industry》，Mikko Valimaki，Turre Publishing，2005-05
4. Rajala, Risto – Rossi, Matti – Tuunainen, Virpi Kristiina – Korri, Santeri (2001), Software Business Models. A Framework for Analysing Software Industry .Technology Review 108/2001. Finnish National Technology Agency
5. List of the largest software companies, https://en.wikipedia.org/wiki/List_of_the_largest_software_companies ，最后访问时间：2022.10.08
6. Olson, Michael A.; Bostic, Keith; Seltzer, Margo (1999). "Berkeley DB" (PDF). Proc. FREENIX Track, USENIX Annual Tech. Conf. Retrieved October 20, 2009.
7. A Berkeley DB primer， https://web.archive.org/web/20060531032337/http://searchopensource.techtarget.com/originalContent/0,289142,sid39_gci1071880,00.html ，最后访问时间：2022.10.08
8. https://web.archive.org/web/20060315211506/http://www.sleepycat.com/company/pdfs/sc_about_1205.pdf ，最后访问时间：2022.10.08
9. https://www.oracle.com/database/technologies/related/berkeleydb-downloads.html ，最后访问时间：2022.10.08
10. MySQL History and Architecturel， https://www.oreilly.com/library/view/understanding-mysql-internals/0596009577/ch01.html ，最后访问时间：2022.10.09
11. From Visions to Reality - an interview with David Axmark, Co-Founder of MySQL AB ,https://web.archive.org/web/20100326075814/http://dev.mysql.com/tech-resources/interviews/david-axmark.html ，最后访问时间：2022.10.09
12. 《经济解释（二O一九增订版）》，张五常，中信出版社，2019.8.31


## 关于作者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)已出版，《开源之道》《开源之思》撰写中。）作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者（2022年度团队主席），云计算产业联盟（中国信息通信研究院发起)个人开源专家，Apache 本地共同体北京成员，CCF 开源技术丛书编委会委员 。
