---
categories:
- 开源
- 感悟
- 读后感
date: 2019-02-23T19:14:41+08:00
description: "平日里读书的摘要和笔记。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 图书推荐
- 开源之道
- 论文阅读
title: "《Subscribed》读书笔记（草稿类）"
url: ""
draft: true
---

> 开源之道声明：这是一本有关产品、服务、消费者、公司、管理、信息技术等的商业类图书，宏观的视野也有，微观的细节也有所涉猎。重要的是和现在的生活息息相关，能引起思考最好！其实开源又何尝不是呢？

# 序言

作者的观点非常的犀利，不带一点拖泥带水，就是这么自信，这个世界正在变化，如果你没有意识到，或者意识到了没有做出及时的改变，那么有可能被历史所淘汰：

> Simply put, the world is moving from products to services. Subscriptions are exploding because billions of digital consumers are increasingly favoring access over ownership, but most companies are still built to sell products. They’re not set up correctly for the next hundred years of business. As a result, huge opportunities are up for grabs. If you’re not shifting to this business model now, chances are that in a few years you might not have any business left to shift.

NetFlix、ZipCar、Uber、Lyft、Zendesk、Okta、Xero、Salesforce、等

> changing the fundamental question from “How many products can I sell?” to “What does my customer want, and how can I deliver that as an intuitive service?”

作者从Salesforce 十几年时间所学到的，Zuora 所服务的对象和业务，是这本书之所以出版的重要基础。

After all, competitors can steal your product features, but they can’t steal the insights you gain from an active, loyal subscriber base.

* How the subscription model is transforming every industry on the planet, including retail, journalism, manufacturing, media, transportation, and enterprise software
* The basic financial model and most important growth metrics for subscription businesses
* How the subscription model changes your approach to engineering, marketing, sales, finance, and IT
* The eight core growth strategies of all subscription businesses
* A customer-centric operating framework for subscription businesses


# 第一部分第一章：一个时代的结束

数字化转型是什么？ It could mean everything, it could mean nothing.

more than half of the companies that appeared on the Fortune 500 list in the year 2000 are now gone.In fact, 12 percent of the companies on the 1955 Fortune 500 list are still on it today, and most of them have similarly transformed.

|  公司名称    |     过去业务      | 转型后 | 备注|
| -------------  | ------------- |:-------------:| -----:|
|GE|lightbulbs, electrical fixtures, and dynamos.|“The digital company. That’s also an industrial company.”||
|IBM   |commercial scales and punch card tabulators.   |sells IT and quantum computing services.cognitive service。   |   |
|Xerox   |manufacturing photographic paper and equipment   |信息服务   |   |
|McGraw-Hill   |printing textbooks and magazines   | financial services and adaptive learning systems.  |   |
|NCR   |selling cash registers to saloons   |creating digital payment services   |   

>“It’s one thing to be as fortunate as we are to have Disney, ABC, ESPN, Pixar, Marvel, Star Wars and Lucasfilm, but in today’s world, it’s almost not enough to have all that stuff unless you have access to your consumer.”  —— Bob Iger ，CEO 迪士尼


当下的时代是：**We prefer outcomes over ownership. We prefer customization, not standardization. And we want constant improvement, not planned obsolescence. We want a new way to engage with business. We want services, not products. The one-size-fits-all approach isn’t going to cut it anymore. And to succeed in this new digital world, companies have to transform.** 这一段描述的非常好！

产品的时代已经过去，围绕客户的时代已经来临。

Today the glory days of the soulless, all-powerful corporation are long gone. Today’s customers are more informed by an order of magnitude. Most of them have researched, assessed, and categorized you before you can even say hello.

客户是这样子的：“The expectation that any desired information or service is available, on any appropriate device, in context, at your moment of need.” Customers have new expectations (and yes, those expectations have certainly been driven by millennials, but at this point, almost everyone shares them). They want the ride, not the car. The milk, not the cow. The new Kanye music, not the new Kanye record.

新的商业模式图示：

![](images/book-reading/subscribed_the_new_business_model.png)

(开源之道注：这个新的模式，对于开源圈的人来说并不陌生。）

![](images/book-reading/open_source_software_ecosystem.gif)

今天能够成功的公司均是围绕客户起步的，They recognize that customers spend their time across many channels, and wherever those customers are, that’s where they should be meeting their customers’ needs. And the more information you can learn about the customer, the better you can serve their needs, and the more valuable the relationship becomes. That’s digital transformation: from linear transactional channels to a circular, dynamic relationship with your subscriber.

之所以订阅模式能够有效，是因为：Because of the way those subscriptions are being delivered—digitally—and the huge amount of data those digital subscriptions are generating.

数字化带来的红利正式推动这次变革的基础。

想想也是，iPhone 才十年多点，想想智能移动设备对于人们的改变吧；云计算从提出到今天也不过是13年的光景，看看它对公司考虑IT基础设施、专业服务、维护费用等的影响吧！而且Mary Meeker noted in her latest Internet Trends report, digital consumer subscriptions are exploding because of massive new improvements in digital user experiences, particularly for mobile phones.

# 零售业要翻阅篇章了！

没错，翻阅下一篇的意思，并不是人们常常说的”实体经济已死“，而是说新的模式的来临，传统的零售店如果不改变的话，就会被历史所淘汰。

相反，以电子商务起家的公司，现在却在发展实体店。这个其实在国内也常见，京东、天猫都有相应的线下商店。

作者举了一个非常生动的例子，Amazon知道他在1997年网上购书的第一次购物，20多年过去了，Amazon知道他第一次所购买的两本书！这也意味着作者只要是在Amazon上购买过的东西，Amazon都知道：兴趣是什么！偏向于那些学科！也可以提供更智能的推荐服务！相反沃尔玛，没有你任何的数据！沃尔玛懂得在什么季节在门口摆置什么商品，但是对于顾客你个人而言：Once you pass the cash register, you vanish off the map.

作者引用了Jeff Bezos的两句话：

> “We’ve had three big ideas at Amazon that we’ve stuck with over the years,” “Put the customer first. Invent. And be patient.”

> “I don’t know about you, but most of my exchanges with cashiers are not that meaningful.”

针对Amazon和Walmart的竞争，作者的视角也和我们常常听到的大相径庭：

The Amazon versus Walmart battle has been framed as ecommerce versus traditional retail, but that’s always been a false dichotomy. **It’s about starting with the customer instead of the product.** It’s about flipping the script—starting with the digital experience,experience, and then building the store.

### 关于苹果的商业模式重新解读

Goldman Sachs 分析师Simona Jankowski 断言：“The smartphone battleground is shifting from unit land grab to user monetization.” 作者表示深为赞同。

Apple就是服务，想想Apple 拥有的ID数量吧，Apple has cleverly integrated those IDs into its retail experience as well.

### 关于零售业的一些论据

引用了《The Membership Economy》的话：“Make it easy for customers to leave if they want to. You can certainly ask them why they’re leaving, or try to win them back, but don’t get in their way—the digital equivalent of blocking the exit with a hulking security guard.” 不能赞同更多！！

Unclear billing practices, difficult cancellation processes, poor communication— 像这样的公司，作为消费者的我们是非常不愿意和他们打交道的，有种被欺骗的感觉。

> OFO 小黄车 的退款事件大家还是否有记忆？

### FENDER: 从售卖吉他到塑造音乐人

作者给了一个非常振聋发聩的建议：Well, you wrap compelling digital services around them.

Fender 的商业创意实在是高明：吉他说实话，很多人都是冲动型消费。就是因为它太难了，需要大量的训练！Fender 不想是一锤子买卖，于是干脆成立Fender Play线上培训服务。

这个生意做得真是没话说：“Having a continual dialogue with our customers through learning is really key,” Kaplan says. “I don’t want to just sell people guitars and then hope they play it.”

关于“showrooming”，即人们往往逛线下商店，网上下单。这样的恶性竞争怎么治？Why did Gillette’s share of the US men’s razor business fall to 54 percent in 2016 from 70 percent in 2010? Because more men are buying online from Harry’s and Dollar Shave Club. （反斗城的大面积关闭店面等等）

唯一的出路就是重视线上的数据，线下的服务，all of these companies are taking advantage of online data to inform the design and presentation of their physical stores.

**Pickup and subscription delivery services are increasingly becoming the norm. 是的，这就发生在我们的身边，网上优先，正在成为我们的常态，塑造我们的思维定势。**

### 重生的实例：HUSQVARNA

一家拥有300多年历史的老牌企业的重生之旅，The new winners are using their physical stores as extensions of their online experiences, not the other way around. They’re flipping the script.

开源之道注：这么说似乎是老生常谈了，很多人对于线上的业务是革命性的冲击，如外卖对餐饮业、淘宝店对各种小商小贩的摊位等持悲观态度，甚至是一些专门的如家具店、小商品城等也持同样看法。但是，愿意积极拥抱的，反而是多了一个渠道，将限制于地理空间一隅的商业，经营到无限的互联网上！订阅的理念，更多的围绕顾客本身，和顾客一起提升服务，实现双赢！

# 媒体新的黄金时代

开篇作者回顾了好莱坞在上世界20年代到60年代的辉煌时期！随后即是电视的时代，但是好莱坞并没有放弃，而是创新性的建立了：Hollywood business model: Score the big hit, then make money off residuals like TV licensing and action figures and novelizations and Halloween costumes and candy tie-ins.

音乐同样经历了很多创新：从烧制唱片、CD、再到如今的包月。

在历史的十字路口，总是有把握的住机会的人或团队：No one noticed at the time, but a few smart, canny start-ups started making it actually easier to consume online media legally through streaming and simple monthly subscriptions.
其中的翘楚无疑是Netflix、Spotfiy

然后作者提及，媒体新的黄金时代正在来临，因为By and large, artists still need to be paid more, but there is so much more music to explore, so many new movies and shows to discover.

这里谈及一个细节，那就是Netflix 对于创作的重视：Netflix now spends $8 billion a year on original content.

说明了一个很重要的道理：这个世界有些规则在变化，有些核心的需求却永远不变：Leave the Hollywood stuff to the Hollywood people and stick to the Silicon Valley thing of “leveraging platforms.

接下来，作者讲了几个故事，说明订阅对于垂直模式的重要性

### NO LONGER SO NICHE: CRUNCHYROLL AND DAZN

Crunchyroll is actually big everywhere except Japan—they specialize in overseas rights and have viewers in more than 180 countries, from Brazil to Botswana.这家公司的成长史，和国内的B站很相似。

When you’re trying to cut through, building community is key.

DAZN (pronounced “Da Zone”), a UK-based sports-only streaming site owned by the Perform Group.
同理，专注于体育的订阅流媒体公司。

看一个数据：Today, SVOD subscriptions generate more than $14 billion in video revenue compared with nothing ten years ago. Nearly half of American online shoppers pay for streaming media services.

中国的情形，我不知道，但是爱奇艺、优酷、腾讯视频等购买会员服务，一定是非常大的份额的。

### STEVE JOBS VERSUS PRINCE

The music industry is managing three transitions at the same time: from physical to digital, PC to mobile, and download to streaming.

所谓的变化，就是这么的明显。

Prince 是如何失败的？这才是本节的重点所在，尽管很悲壮、有情怀，但最后还是消失在历史的舞台。

营销/市场的精髓之处：The question was how do we make them feel more like members, and less like customers?”

# 物联网，以及制造业的崛起与陨落

Media and software moving to subscriptions was a no-brainer, but that was all just ones and zeros.

我怎么觉得理解起来这句话有点费解，新生的东西就能采用subscription模式？人们更为容易接受？

那么传统的工业了呢？如电冰箱、屋顶、挖掘机等等重工业产品了呢？似乎转变思路，将人更为本质的需求拉近了，更容易理解：

It works for everything. So instead of a refrigerator, it’s the guarantee of fresh, cold food. Instead of a roof, maybe it’s a guaranteed source of solar energy. Instead of excavators, it’s the expeditious removal of a certain amount of dirt.

接下来，作者介绍了Komatsu（小松制作所）这家创立于1921年日本公司的建筑和挖掘设备制造商的案例。一段对于我来说蛮科幻的描述：飞行器、3D渲染采样、建模之后：The result is a finished project plan, with materials, equipment, labor, and a work schedule detailed down to the last hour.

change the question from “How many trucks can I sell you?” to “How much dirt do you need moved?”

Removal as a Service： 搬迁即服务，

同样的模式也适用于另外一家重工公司：卡特彼勒有限公司，采用信息技术，和历史数据做比对，让客户更节省。

以上两个例子，引出了作者的意图：Manufacturers and original equipment manufacturers (OEMs) all over the world are waking up to the fact that there are dozens of potentially new value-added services that are sitting right inside their servers

### 所有的事情都面临最大的转型

制造业仍然举足轻重：According to the National Association of Manufacturers, manufacturers contributed $2.2 trillion to the US economy in 2016, or almost 12 percent of the GDP.

### 物联网IoT

传感器正在进入所有的可制造的设备中：门、椅子、灯、鞋、瓶子、桌子、...... 这些设备可不止于设备，它们Collect and transmit data—lots of it. All of these products will be beaming information back into centralized servers, so companies can start using analytic platforms to look for patterns and ways to improve things。这一整个体系就是物联网！

不远的将来，Eventually, all the manufactured objects on the planet will be able to receive and transmit data.

作者在这里引用了olivier scalabre 在2016年的TED演讲： https://www.ted.com/talks/olivier_scalabre_the_next_manufacturing_revolution_is_here

数码双胞胎

通用电气的subscription故事：But IoT isn’t just about efficiency and diagnostics. IoT is allowing manufacturing companies to reimagine their businesses in really profound ways.

（开源之道注：有心的看官可以了解一下通用电气在开源方面的参与）

### 从产品到价值输出

The milk, not the cow.

在举了一连串的例子之后，作者给出了预言：Every manufactured environment on the planet is turning into a data-driven test bed.

所有的事情对于商业而言，均指向：connectivity turns products into services, which allows businesses to build around outcomes, not assets.

作者还举了一个Arrow Electronics的例子，

是的，重要的是如何从数据中获得服务的可能：What’s the value I can create from the information generated by my connected device? That’s where you should focus.”

### 制造业的未来

一上来就推荐了KK的《 The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future》

《开源之道注：KK的这本书，适兕也在考虑是否纳入阅读，但是今年的主题并没有涵盖到这本书。）

再次引用olivier scalabre的演讲。

* Schneider Electric (founded in 1836)监控电梯的例子
* Heidelberg Druckmaschinen (founded in 1850)远程监控超过25000个高端打印机
* Symmons Industries (founded in 1939)制造智能淋浴设备
* Gerber Technology (founded in 1968),textile industrial equipment that creates many of the clothes we wear

IoT is about to change the world. But in order to be truly successful at it, we’re going to have to rediscover the people who are buying the things that we make.

# 第八章 所有权时代的终结

（开源之道疑虑：这个标题有点“惊悚”，从进化人类学的角度来讲，占有是人的本能与文化习得。放弃所有权这件事本身似乎和前苏联的集体一样荒诞不经。）

> Ownership is dead. Access is the new imperative.

IDC 预测到2020年，50%的这个世界上最大的企业，都会将他们主营的业务依赖于产品、服务、和经验的数字化。将聚焦于服务而不是产品。

Zuora’s Subscription Economy Index, 本书的附录部分，一定要看哦。Zuora 不是空口说的，有数据傍身的！！

除了上面提到的零售、娱乐媒体、交通、制造业，下面的行业也将是订阅的采用者：

* 医疗：fitness tracker,alert first response...
* 美国政府： paying taxes, registering a business, getting a driver’s license, paying a toll.
* 教育：
* 保险：
* 宠物看护：Retail pet food companies are turning into digital pet health services.
* 公共水、电、煤气等：New consumption-based digital services like SolarCity are enabling solar-powered homes to sell electricity back into the grid, （这个确实厉害！受益普罗大众）还有A new solar start-up in Brooklyn called LO3 Energy is using blockchain technology that lets you sell your solar energy to your neighbors.（Blockchain的正确用途之一。）
* 房地产：Every day, more than 1.2 million people go to an “office” that’s full of other freelancers or small corporate  teams。（这也是我目前的状态哈！）
* 金融业：记住这些新型的创业公司Robinhood，Adyen，Venmo。Everything is up for grabs, including the whole concept of fiat currency.

### 一条新的成长之路

Subscription 就是这条成长之路！！

来自德勤的Andy Main :

> It’s an open playing field today. And that open playing field has resulted in brand-new experiences, different models. And that means you need to wire up your business in different ways. It’s all about competing on experience, and thinking about your value proposition, and how you orchestrate your business in order to bring that value to life. Experience is the new frontier of competition.


那么这也到了本书第一部分的终结篇，说了这么多Subscription的好处，如何在这个全新的开放式的新蓝海实现了呢？请耐心的接着读第二部分：

（开源之道注：作者所指的所有权，不仅仅是作为消费者的个体，也只企业售卖产品的过气模式。）

# 第九章 关注未来的时刻

开篇即来数字化转型，这个终究是一位着变革。

作者这次选择电子游戏行业的案例，并引用了《最终幻想》出品人的话:

> With the subscription model, you have that constant flow of revenue. As game developers, creators of games, we want to be able to continue providing the best gameplay experience and sustain that. Of course, the initial subscriber numbers might not be as many as the free-to-play model, but we have that constant stream. We’re not thinking just about the business of the moment. We want to think about the long term and being able to have the funding to continue making updates. Some people might be focused on quickly gaining revenue, but you have to think about the long term.

接着作者再次将第一章的那张图拿过来：

![](images/book-reading/subscribed_the_new_business_model.png)

那么作为公司该如何拥抱subscribed模式？

然后开始问各种角色应该如何转变思路！产品、工程师、CFO等

推荐了一本书《Subscription Marketing Strategies for Nurturing Customers in a World of Churn》，不知道有没有时间读。

> “Marketing is no longer just about getting to the sale. To keep subscription subscription customers renewing and re-engaging, you have to provide real value and solve problems.”

### 打破壁垒

20世纪的公司的体制原因，到处都是部门壁垒：The twentieth-century organization resembled a sequence of stovepipes—various business departments that generally kept to themselves. And in the past, these strictly siloed functions made sense. Marketing did the research and passed it off to the product group, which took the specs and made it happen. They passed it off to the sales team, which pitched it like crazy. Finance counted the beans. IT got called when someone forgot their password.


How can you create a new subscriber experience that delivers outcomes if everyone has their heads down? How can you deliver business model innovation, make the right choices across how you innovate, how you go to market, how you approach your fundamental business model, if teams are separated by walls?

 InnerSource 也试图解决的是软件工程的silos的问题。Subscription 在数字化转型的发展。都有着借鉴开源的思想的痕迹。

Open 的思想，可以让人的距离更为接近。

# 第十章 创新：永远Beta

加速：We instantly became hungry for more information, and it profoundly changed the way we made decisions, allocated resources, and built new services. It changed everything.

这一切都应验了物理学的概念：熵！

信息技术的革命，在于它加速了一切！那加速后的思维方式和生活都将面临更快的挑战和变化。

### Gmail 和它的永远没有完成日理念

这个看起来虽然是很古老的理念了，但是它一直影响着现代互联网的发展和文化。

看到一个让和会心一笑的笑话：

The real reason was that big Fortune 500 companies that were used to buying Lotus Notes or Microsoft Exchange wanted to buy Gmail for their companies, but their procurement offices wouldn’t let them buy a beta product! Google’s response? Just update the logo.

这是嘲弄500强的腐朽呢？还是Google也会为五斗米折腰了呢？ 这些都不重要了，重要的是forever beta的理念仍在进行，logo也让人放心了。（当然，这个logo也是可以配置的:-)

作者也带领我们重温了July 7, 2009年Google发表的声明blog。这充分说明了软件的本质！

以及敏捷宣言：

* individuals and interactions over processes and tools,
* working software over comprehensive documentation,
* customer collaboration over contract negotiation,
* and responding to change over following a plan.

Kanye West 和他的第一个 SaaS 专辑

Kanye West 的专辑 The Life of Pablo, 放在Tidal的平台上。the reviews came in, the fans either loved it or hated it, and that was it.

（开源之道注：这让我想起来漫威的电影《美国队长3》的编剧，和观众一起来编剧。）

精髓在于：Kanye put his listeners, not his album, in the center of his creative process.

### Graze：敏捷工厂

作者这次给我们举得例子是一家英国的snack box公司，根据客户的反馈。来改进这些，直到客户满意度高。

这个方式的精髓在于：Because the market research is already baked into the service.

When you design your service in conjunction with your subscribers, and inform that service with usage and behavioral data, you can make something that they really love and that evolves with their needs.

### Netflix：取消Pilots

“We have nothing to do with advertising, it becomes less about ratings. The days of pure popularity as a yardstick of success are over. It leaves the individual quirks and quirks of people’s taste in the dust. We share all the data with the Los Angeles programming team, to see how it compares to the shows they are thinking about. User data helps us decide to initially buy the show and to renew it for another season. Traditional networks and cable networks don’t know that stuff.”

### 星巴克和星巴克ID

Once you establish a secure identity with a customer that includes things like purchase activity, payment information, perhaps some demographic details, or maybe some location alerts, then you can do amazing things.

（开源之道注：围绕订阅的就是让别人收集的购买行为，并记忆，然后进行分析，然后对你进行定制化的服务。）

GAFA 和 BAT: Google、Amazon、Facebook、Apple，和baidu、alibaba、Tencent 都有以一个共同的特征：Subcriber ID。

这些公司都可以看到使用他们服务的人的行为、所以能够做出更好的决策，然后提供新的服务。

# 第十一章 Marketing：重新思考经典的四P

（开源之道注：这里稍微偏离一点主题，开源需不需要Marketing?当然需要了，只是在丰裕的年代，想要脱颖而出确实不容易，而尤其是在默认开源的时代，就更加不容易了，软件项目在开始的时候，由个人或小团队做的东西，很快就消失在茫茫多的代码库中。（电影《inside out》里的垃圾场）搞开源的同事要和Marketing的人学习很多东西，比如人性、从众心态等）

说起Marketing，你会想到什么？ Apple 的1984那个打破铁幕的经典广告吗?还是王老吉、史玉柱的央视轰炸？

传统意义上的售卖产品的公司，比如经典的可口可乐公司的发展史，就是一部品牌发展史。可是时代变了。当下的人们是抵御广告的时代，靠的是口碑和体验！！

先来解释下什么是四P

Product（产品）：你需要生产或打包顾客所需要的内容。
Price（价格）：你的产品需要有一个具有竞争力的价格:让你的公司和客户均能接受。
Promotion（推销）：你的产品品牌需要广而告之，通过各种吸引力的渠道。
Place（场所）：您的产品应在方便和引人注目的地方分发和销售。

以上这是经典的解释，作为大学课程的Marketing101的必修课。问题来了，当产品转变为服务的时候，事情是不是有所转变？

### Place

渠道的重要性，Channels are a big part of the world we live in. General Motors relies on car dealerships. Cisco relies on software resellers. Procter & Gamble relies on retailers. Magazines still depend on newsstands. Taylor Swift relies on Spotify

（开源之道注：在成功的开源商业公司中，将开源作为分发渠道取得了非常不错的成绩，如ElasticSearch、JBoss等。托马斯.索维尔 称：“一家公司无法消除中间商的“，那么现在很多这样模式的公司都遇到了云计算公司的挑战：MongoDB、Redis等，于是改变商业战略，开始了闭源的路线。）

Autodesk 的转型之路：从产品转向 subscribed ID。 （AutoDesk处理分销商的策略非常之赞。）

The Subscription Economy isn’t just about win-win models. It’s also about win-win-win.

### Promtion（推销）

Brands are still important.But these days, they are increasingly communicated through experiences.
那么问题来了，如何让目标客户来进行体验？

You need the story of your product—the how. You need the story of your market—the who. But most important, you need an overarching story that puts your service and your users within a broader social narrative—the why.

### Price 价格和打包

这个当然是Tzuo 公司的核心商业价值了：卖关子！ 不过还是讲了两条原则：

First, there is consumption-driven growth, which simply means your subscriber is using more of the same base set of capabilities. This is done through pricing.（作者使用Drapbox的例子）
Next you’ll need to consider the unit price, which can be as simple as price per unit, or it could be expressed in usage tiers.

### Marketing 的黄金时代

We are swimming in new information. The skills you have as a marketer—storytelling, data analysis, customer knowledge—all of them are crucial to the success of your company.

处于信息爆炸的时代，究竟是一种幸运，还是一种悲剧？这要看你自身的思维模式：成长型，则看到无穷的机会！

Because in the Subscription Economy, there’s no more looking elsewhere for answers. No more customer surveys, no more paying for lists, no more waiting six months for a campaign to finish. All the information you need is right there in front of you. Now it’s up to you to write the story.

一切都取决于你自身！

# 第十二章 销售：8条成长战略

论一锤子买卖和长久的客户关系之间的差别！！

（开源之道思考：订阅将改变世界，特别适合这个古老的国度！人情大于一切！）

订阅经济悖论：**On the one hand, people already know so much about your company because there’s so much information out there. On the other hand, they’re more confused than ever before because there are too many choices and too much information.**

怎么破？

 > “With subscriptions, you’re never off the hook.”

销售的真谛在于：sales is about growth—you’re selling a service in order to help your company grow, and your customer is buying a service in order to help themselves grow.

当今世界的新的三原则：

* acquire more customers,
* increase the value of those customers,
* and hold on to those customers longer.

### 努力获取你的首批客户

Because someday, your future customers will be looking very closely at your first set of customers in order to gauge whether you’re really long-term partnership material.

要珍惜你的第一批客户，因为未来所有的人都会看他们的反应和口碑。

这里作者提到一个反例：传统的销售on-premise的软件公司在SaaS来临的时代是如何转型失败的。值得借鉴。

### 减少你的回合率

That marks the transition from adolescence to adulthood,

我非常喜欢这样的风格：Are there customers you should not be pursuing (at least not right now)? Are there customers you should fire? What are the real features and usage patterns that really equate to customers finding ongoing value? Are your customers just kicking the tires but never really becoming true ongoing subscribers? Do they need a little push? Could your service be designed or packaged in a different way?

这个世界不存在一只能够满足所有人的鞋！  所以很多是原则的问题，

### 扩大你的销售队伍

要扩张销售团队，要搞明白两件事：you need to set up a hybrid sales model, and you need to invest in automation.

### 通过UPSELLS和CROSS-SELLS增加价值

啥意思呢？While upselling is a strategy designed to sell a more feature-rich (and expensive) service edition, cross-selling is a strategy designed to sell additional services to provide a more comprehensive solution.

麦肯锡的报道证明：the ability to solve for a broad range of customer problems, with a broad range of solutions, increases retention.

> The real work starts after the sale.

实例：New Relic ,

### 进入新的阶段

Box ，CEO Aaron Levie 成功的经验分享：
“You make your service as easy as possible to adopt but you make it so a large enterprise can fully adopt it across their entire company.” According to Levie, “There’s probably not a single enterprise that we ever sold to that didn’t start with users in that organization having adopted Box.”

> selling today is about building, maintaining, and deepening long-term relationships.

### 国际化

（开源之道注：互联网所带来的全球化冲击，不只是信息的快速传播、迅速流动，还有思维的转变。比如开源，从一开始就必须有全球化的思考方式，居于一隅的时代已经一去不复返了，甚至考虑一国之内都是失误的开始。）

First, the regulatory stuff—business licenses, taxes, data residency requirements. Second, the payments stuff—alternative payment gateways, local currencies, credit cards. Chinese prefer e-wallets, Indians prefer debit cards, South Koreans are more likely to charge smartphone purchases directly to their phone bill, etc. Third, the shop itself—HR, staffing, etc.

请注意，英语几乎是这个世界的通行语言：The key is to realize that if you are selling in an English-speaking country, you are selling to all English-speaking countries.

尤其对于软件行业来书，你写的代码就是英语。

### 最大限度地提高您收购的增长机会

这个在中国本土还没有形成一种气候，快速的模仿和学习能力、对于版权的无视、知识产权的官司成本等等众多因素显示，照着山寨是常见的做法，尤其是一些已经成为大鳄的公司的举动。这大约是可以解释为经济被政治所掣肘。所以本章不看也罢。

SurveyMonkey，成功的案例！

### 优化你的价格和打包

人们很少为自己的产品价格思考：the average amount of time a company spends per year on pricing is less than ten hours.

以下这个数据蛮有意思，每年20%的增长率！！
According to McKinsey, if a software company grows less than 20 percent annually, it has a 92 percent chance of failure. Because at the end of the day, it’s grow or die.

# 第十五章 使用 PADRE 运营模式来构建订阅文化

哦，看了这么多，各个团队是不是已经摩拳擦掌了？ 不要着急，没有相应的文化，说啥都是扯淡。

### 订阅文化

说起来容易，做起来难！什么是以客户中心？It turns out that being a “customer-focused company” is a simple concept that is, in fact, very difficult to realize.

首当其冲的就是组织架构，因为这是做事情的根本。正如我们前面讲到的竖井式的组织结构一样，是难以满足需求的，而客户才管不了你这些了。But today’s customers are telling you to do things differently, and they couldn’t care less about your org structure.

We wanted clear functional roles, but also a way of looking at our company that transcended org charts and put the customer squarely in the middle. We also wanted every employee to feel a sense of ownership over the entire company. 订阅对于公司的组织要求是非常高的。所以需要做很多的创新和变革。

### PADRE 介绍

* Pipeline： The key goal of the pipeline subsystem is to build market awareness and translate that into demand.

你是谁？你为何而存在？你做什么？能够提供什么有益的内容？

* Acquire： encompasses the so-called buyer’s journey.
* Deploy：The key is to get your subscribers up and running, so they can quickly get invested in your service.
* Run： Anything you do that doesn’t feed into the customer success flywheel is detrimental to the growth and value of your business.
* Expand： You want three things out of your subscribers: retention, growth, and advocacy.就要不断的扩展自己的边界。

团队要有跨功能的交付能力。

### 组织 PADRE

作者开始分享 Zuora 的组织上的经验！

### 快乐Business 的新世界

Because subscriptions are the only business model that is entirely based on the happiness of your customers.


## 好文荐读

1.  The Thought Leader Interview: Henry Chesbrough   https://www.strategy-business.com/article/11210?gko=af24f
2.  Grow fast or die slow https://www.mckinsey.com/industries/high-tech/our-insights/grow-fast-or-die-slow
