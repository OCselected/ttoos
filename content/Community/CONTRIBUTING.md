---
categories:
- 开源
date: 2020-02-07T14:45:05+08:00
description: ""
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "开源之道文章贡献指南"
url: ""
authors:
- 开源之道
---

## 前提

最好是对于开源之道的风格和内容有所了解，强烈建议阅读：[开源之道阅读指南](http://ocselected.org/posts/ocselected-reading-guide/)

## 开发者

开源之道目前所使用到的技术栈：Markdown + [hugo](https://gohugo.io/) + GitHub page + [Travis-CI](https://travis-ci.org/)

你我都知道，开发者的特点：无限！ 作为发起者，我对开发者是持敬畏态度的，因为他们总是能够带给我惊奇，让他们充分的施展自己的想象力，这是我唯一能做的事情。

* 看 [issue](https://github.com/OCselected/ttoos/issues)
* 前端有点丑陋[🤦‍♂️]

## 翻译或撰写文章

请点击右上角的`fork`按钮，将本项目`fork`到自己的账户下，如果不知道`fork`,请阅读GitHub相关文档，或到 [ `communication.md`](communication.md) slack 寻求帮助。

### 模板介绍

开源之道根据文章的分类而做了几个不同的模板，均放在目录：`../archetypes` 下：

* **business_model.md** ：关于开源和商业模式方面的介绍
* **enterprise_guide.md**：企业如果搞开源。
* **opensource_culture.md**：开源文化，开源之道重点攻关突破。
* **opensource_technology.md**：关于开放源代码技术的，尽量采用抽象程度高的语言来讲述，避免技术细节。
* **supply_chain.md**： 软件供应链也是开源之道非常愿意关注的内容。
* **community_management.md**：开源共同体方面的内容，领导力、亲和力等。
* **foundation_introduce.md**： 开源非营利基金会介绍
* **opensource_economic.md**：开源经济学
* **paper_reading.md**： 学术论文阅读
* **ttoos.md**： 如果你不知道分类，使用这个模板就好。
* **default.md**： 废弃不用，你想删除它也没有问题。
* **opensource_com.md**：翻译来自opensource.com站点上的文章，
* **opensource_hero.md**： 那些个为开源做出过重大或突破性贡献的人，当然风格尽量保持在民主的基础上。
* **weekly_template.md**： 开源之道每周评论模板。
* **osw_podcast.md**：开源之道Talking Podcast 节目的模板
* **redmonk.md**:  与晨兴资本副总裁一起翻译来自 RedMonk 合伙人 Stephen 先生的文章。

### 根据模板创建文件

在终端下执行命令：

```bash
hugo -k 模板名 new posts/文件路径
```

例如，开源之道每周评论使用的模板名称：`weekly_template` ，路径是 `OpenSource/daily_reading/2020/开源之道一周精选\` , 要创建的文件名为：`\(2019-02-02\).md` ,则执行命令为：

```bash
hugo -k weekly_template new posts/OpenSource/daily_reading/2020/开源之道一周精选\(2019-02-02\).md
```

### 开始撰写

使用你喜爱的`Markdown`编辑器，添加相应的内容即可。

### 本地预览

`hugo` 内置了web服务，且会编译`markdown`文件为`html`，在提交之前，在本地先看看有没有格式之类的问题，如图片加载、表格等，执行如下命令即可：

```bash
hugo server
```

然后使用你心爱的浏览器，在地址栏输入：`http://localhost:1313/` 访问即可。

### 提交

先执行本地提交：

```bash
git add xx.md
git commit -s -m 'add new article xxx.'
git push origin branch_name
```

然后使用 GitHub 提交PR 即可。

### Review

到slack频道上`ping` 适兕或其他`reveiwer`，然后互通有无，文章没有大的布局问题，通过的效率还是非常快速的。

### 发布

[Travis-CI](https://travis-ci.org/) 和 Slack 深度集成，在`review`完成之后，进行了`merge`之后，[Travis-CI](https://travis-ci.org/)会自动编译，完成之后会通知到Slack，（所以slack最好是处于活跃状态），然后访问：[http://ocselected.org/](http://ocselected.org/) 看最后的效果如何。

如果没有及时出现，请尝试使用 `chrome`的无痕浏览。

# Have Fun ,Enjoy！
