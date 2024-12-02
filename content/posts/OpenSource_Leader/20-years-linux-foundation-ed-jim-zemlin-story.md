---
categories:
- 开源
- 感悟
date: 2024-11-25T13:51:49+08:00
description: "笔者在《开源之迷》中试图在开源人物中将Jim Zemlin 先生描述为开源世界起着特别作用的一类角色，只能从互联网零星的材料中以及他的个人演讲中获取和整理内容。可谓是生硬无趣，实为作者遗憾也。最近Linux 基金会开完了其2024年的成员大会，Jim Zemlin 分享了自己20年的职业生涯，发表了演讲，个人欣喜若狂，希望通过翻译和记录，来弥补一点遗憾。本文内容整理自演讲，仅供个人学习之用。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: " Humble，Hopeful，helpful ———— Jim Zemlin 的20年开源路"
url: ""
authors:
- Linux Foundation
translater:
- 开源之道
---

## Welcome

Linux 基金会董事主席 Nithya Ruff ，同时也是AWS 开源项目办公室的负责人，做开场欢迎辞：

![](/images/Jim-Zemlin-20-years/2004-jim-1.png)

> 欢迎大家来到 Napa[1]，也欢迎大家来参与LF成员峰会，屏幕上展示的是我的好友 Jim Zemlin 20年的照片幻灯,说明了他在过去20年为Linux 基金会所做的工作的缩影，20年前，Linux和开源并不为公司所欢迎，很多人认为开源不够安全，不能做到企业应用， 所以有两个组织成立，它们是开源发展实验室OSDL和自由标准组织，来推动Linux的向前发展， 正如大家现在在屏幕上看到的，年轻的Jim Zemlin 加入了OSDL，当这两个组织合并为Linux基金会之后，Jim 众望所归担任了LF的领导者，Jim 的愿景是为这个尚年轻的Linux Kernel 打造一个温馨的家，让它茁壮成长，推动Linux Kernel的发展，不负众望，Jim 在过去的20年里确实做到了，Jim 的vision，不仅让我们学习到了Linux的经验，还将之推广到了非常多的领域 ：软件定义网络、Autograde Linux、能源、医疗保健、人工智能、云原生等等，不胜枚举，谢谢你！Jim！我们现在在场的一千多个项目，一千多成员，真诚地我们是一个重要的技术和开源组织，我很荣幸能够成为Jim的朋友，我有个个人请求，那就是我数到三，大家一起喊：20周年快乐！Jim！
> 等等，我们不能仅仅的祝福他，我们还有礼物，一座企鹅的塑像摆件。

![](/images/Jim-Zemlin-20-years/2004-jim-2.png)

## Jim Zemlin 的自述

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-1.png)

这让我很慌张，今天有如此多的朋友汇聚一堂，大多在过去的20年里我们一起共事过，确实我们应该花点时间来回顾一下，我在Linux基金会工作的时间比我结婚的时间还长，如果可以回到过去的话，哪怕是一分钟，我会问自己一些问题：

* 我为什么在这里工作？
* 我能做什么？
* 我们能取得什么成就？

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-2.png)

我认为任何人都会在一个奋斗了20年的地方问相同的问题，Brian Fox[2] 为 Sonatype 工作了17年，在座的各位将大部分的职业生涯贡献给了开源，很多都是一整个职业生涯都在为开源工作， 问题来了：**我们为什么要这样做？** 

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-3.png)

以我个人为例，我出生并成长在技术世家， 上图中央的这位男士，是我的祖父，他是Cray Research [3]公司的创始人之一

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-4.png)

这张图是我父亲所工作过的地方，他所在的公司叫 Control Data[4]，职位是程序员。所以我认为我是成长于一个技术的家庭。 我和我的兄弟是伴随着BBS这样的先锋成长的，我们喜欢自己 DIY 电脑，我是早期支持 NVIDIA 的人，早在它如此爆发之前，我觉得我通过玩的游戏为 NVIDIA 的崛起作出了贡献。（观众笑） 但如果说在科技的氛围中成长，是我为Linux基金会工作的主要原因，未免有点勉强

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-5.png)

我以为主要原因，也就是大家所了解的原因，是我的祖母， 也就是上面图片中站在我父亲旁边的女士。她是在上世纪50年代就开创了非营利组织，1953年，我的叔叔Jim，也就是我的名字所跟随的，左边即是我的叔叔，自小患有精神障碍，我祖母悉心照料， 另外我的祖母也是位单亲妈妈，所以决定创办一家非营利组织，来帮助有残疾的成年人接受职业训练，以让他们可以顺利走上工作岗位，即使他们身体上有残疾，但仍然有工作的能力，所以，如果有时你看到患有唐氏综合症的人在工作，又可能是在星巴克，或者其它地方。我的祖母就是为残障人士培训走上工作岗位也可以过好一生的早期领导者之一，当我发现非营利性工作和技术整合时，这对于我来说，简直是完美的契合，这就是真正让我是：是的，是的，让我去尝试做些什么的事情。

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-6.png)

正如刚才 Nithya 所说，我最初是在 Free Standard [5]工作，Free Standard 是一家尝试创建一类可以跨不同Linux发行版的应用标准，大家知道，在彼时Linux有很多不同的发行版，对于应用程序的开发是一个真正的问题，Linux Standard Base [6]时好时坏，但是对于推广Linux是真的有用，而且让Linux迈上了新的台阶，

一直走到今天，

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-7.png)

大约在同一时间，我再次的坠入爱河，遇到了我现在的妻子，这张照片是我2004年唯一找到的合照，我们开始约会时，经常去滑雪。令我印象最为深刻的还是我第一次见 Sheila 的时候，她当时在一家科技公司做高管，就读于哈佛商学院，非常努力的做事，当我告诉她我在一家颇让人难以理解的非营利组织工作的时候，脸上失望的表情印到了我的脑海。但后来我们还是结婚了，这两段爱情发生在同一时间，真是美妙。

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-8.png)

我们现在去回顾2004年，那确实是一个有意思的年份，Ubuntu 发行了它的第一个版本，Firefox 发行了第一个可用版，Ruby on Rails 也发布了，当时最流行的社交工具MySpace， 说到这个工具，让我感觉到我是一位老人了，大家知道我并非社交狂人，或者是赶时尚的，如果在座的各位想要 ClubHouse 邀请的哈，请告诉我。

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-9.png)

2004年还有一部电视剧在ABC首发，那就是《Lost》，讲述的是一群被困在奇怪的岛屿上的普通人，发生了一些奇异的事情，我想隐喻的就是大家对巨大公司的恐惧，其实，从开源共同体角度而言，我完全无感。

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-10.png)

到2007年，正如 Nithya 指出，OSDL、Free Standard 和其它一些开源组织合并为Linux基金会，Ted Ts'o[7] 在哪里？他一定在这个会场的某个位置，当我们举行董事会会议的时候，在大厅，我们有一个非常简短的关于基金会名称的探讨，我不知道是谁提出的，但是我以为是Ted 首先说出的，称之为Linux基金会是理所当然，顺理成章的，Linux是一个相当令人惊叹的品牌，人们都喜欢Linux，在今天如果我穿着印有Linux的T恤 或者是其它Swag 的东西，人们看到都会惊呼：“I love Linux”！ Linux 确实令人惊艳！

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-11.png)

当然，对于开源的怀疑一直都存在，不仅仅是2004年，当前的情况也是如此。对于在座的很多人来说，都是记忆犹新的，我们依然面临着为大众解释为什么说开源是一种极佳的创新方式，它如何克服专有平台带来的缺陷，那时候的微软还不是开源的朋友，而是敌人，微软当时的言论是我不想在这里引述的。如果你呆在开源世界足够长，不间断一定会被问及：**开源根本不行**，但是

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-12.png)

我们坚持不懈，在过去的20年里，我们取得了一个又一个的成果：

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-13.png) 

Linux 已经是我们这个星球上最为流行的软件之一了，它简直是一个大满贯的本垒打，在最初Linux基金会成立时，它仅仅占有很小的超级计算市场的份额，而到今天，所有的超级计算平台都在使用它；在企业级计算平台，Linux也是不二的选择；在移动设备上，Linux也是独占优势，Linux总是能够丝滑的从一个领域切换到另一个领域，当然，这也是它强大的特点之一。一个月前，我们和NASA合作，开发太空级别的Linux，这只是一次非常常见的飞跃。但是，大家都懂，这是一场幸运的眷顾，并非我之努力，众所周知，我们当时的工作实际上就是围绕Linux做点必然性的工作，例如将Linux和Microsoft对立起来，使得二者处于战斗之中，这是一场大卫对抗格利亚的战役，

接到了 Brain Stevens[8] 和 Urs Hölzle[9] 打来的电话，
![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-14.png)

我们依然在保持增长，每一年都有更多的项目加入到Linux基金会，开源已经成为我们现代人生活重要的组成部分。

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-15.png)

我从未想到有一天，

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-16.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-17.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-18.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-19.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-20.png)

Linux 基金会所做事的风格中，或许在座的各位有以前听我讲过的，尤其是在我们的工作接触中，一定深有感触，必须具有这些特征：有助于他人并心怀感激，和你一起工作的大多数人并不是为你或为贵司工作，对他们有帮助的是把事情做好，你必须通过真诚地帮助来达到；充满希望这个部分，其实指的是乐观主义，回到2007年，有一位颇有声誉的记者，断言LF永远也不会成功，还说我们所做的一切是“癌症”之类可怕的事情，遭遇此种形式，你必须有一种乐观的心态，相信未来会更加美好，你必须想着我们可以做到，并坚持下去，要有勇气和决心，所以希望是非常重要的；当然，我认为更为重要的是在开源世界工作一定要谦虚，你懂得，我每天与成千上万人并不是Linux基金会的员工的人一起工作，Linux基金会也有数百名员工，其中有Linus torvalds，根本不会听我的，所以这是一个长期的保持的特质，这很好，我认为这可以升华自己的自我（ego），通过影响力进行领导是现代社会的一个标志，谦逊不仅是可以在开源的世界里有效，同样，它在我们的日常生活中也非常重要。这就是Linux基金会过去20年运行良好的秘密，如果你能洞察自己的自我（ego），可以接受他人的批评，开源实际上是一个相当有趣的可以在此工作的共同体。

我们花了一点时间回顾过去，接下来，我们展望一下未来。

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-21.png)

我们需要搞清楚接下来会发生什么，

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-22.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-23.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-24.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-25.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-26.png)

![](/images/Jim-Zemlin-20-years/state-of-open-source-slide-27.png)

## 参考资料

1. https://events.linuxfoundation.org/lf-member-summit/attend/about-napa-valley/ 
2. https://www.linkedin.com/in/brianefox/
3. https://en.wikipedia.org/wiki/Cray
4. https://en.wikipedia.org/wiki/Control_Data_Corporation
5. https://en.wikipedia.org/wiki/Free_Standards_Group 
6. https://en.wikipedia.org/wiki/Linux_Standard_Base
7. https://en.wikipedia.org/wiki/Theodore_Ts%27o
8. https://www.linkedin.com/in/brianmarkstevens/
9.  https://en.wikipedia.org/wiki/Urs_H%C3%B6lzle
10. https://www.linkedin.com/in/martin-robert-fink/ 


## 关于译者

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。
