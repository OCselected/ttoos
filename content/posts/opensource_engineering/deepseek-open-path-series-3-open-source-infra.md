---
categories:
- 开源
- 感悟
date: 2025-02-24T11:48:05+08:00
description: "何谓站在巨人的肩膀上？那就是当我们看到DeepSeek这颗耀眼一时的明星，我们也要寻找哪些成就它的基础设施，正如我们看到电商、超级App等IT巨头时，也要看到他们数据中心运行的软件：都多少是开源的？占多大比例。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "非官方观察：DeepSeek 的开放之路系列之四：那些耀眼新星之下的开源项目"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

本文是系列文章的第三篇，如有需要，可先预习前三篇：

* [非官方观察：DeepSeek 的开放之路系列之一：arXiv](/posts/opensource_engineering/deepseek-open-path-series-0/)
* [非官方观察：DeepSeek 的开放之路系列之二：重识 GitHub](/posts/opensource_engineering/deepseek-open-path-series-1-github.md)
* [非官方观察：DeepSeek 的开放之路系列之三：模型市场Hugging face](/posts/opensource_engineering/deepseek-open-path-series-2-hugging-face.md)

DeepSeek 作为现象级的流行和热议、热捧，笔者更愿意去探究哪些被大众所忽略的背景，坚信制度才是创新和发展的根本，而不是表面上看起来那些花哨的过眼云烟。

## 分析方法

DeepSeek 所生产的东西不是软件，尽管它是构建在软件之上的，所以我们并不能完全以软件的思路来进行考察，首先区分为两种：

1. 从零开始构建DeepSeek大模型，不仅需要DeepSeek 的代码、数据集、工作流，还需要知道其所有的服务器硬件架构的细节；
2. 从Hugging face上下载到它的模型，将模型作为服务运行起来；

环境所限，笔者并不能也没有条件，复现一个所有的过程，仅从其GitHub发布的仓库[1]中的代码，安装需求来推测其所使用的开源项目。

# 训练模型环境

## PyTorch

# 运行模型环境

## vLLM

## SGLang

## Python

## Linux

# 数据集



## 参考材料

1. https://github.com/deepseek-ai/open-infra-index

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
