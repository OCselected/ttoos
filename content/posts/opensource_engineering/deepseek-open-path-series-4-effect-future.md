---
categories:
- 开源
- 感悟
date: 2025-03-05T20:18:53+08:00
description: "技术会撬动经济增长，经济增长会带来进一步的繁荣，大模型的成本降低，对于所有数字行业都是相当利好的事情，那么问题来了，大模型的使用能带来什么？代码本身将走向哪里？知识财产权的模糊地带能渐渐清晰吗？"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "非官方观察：DeepSeek 的开放之路系列之五：开源大模型能实现吗？"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

本文是系列文章的第三篇，如有需要，可先预习前四篇：

* [非官方观察：DeepSeek 的开放之路系列之一：arXiv](/posts/opensource_engineering/deepseek-open-path-series-0/)
* [非官方观察：DeepSeek 的开放之路系列之二：重识 GitHub](/posts/opensource_engineering/deepseek-open-path-series-1-github.md)
* [非官方观察：DeepSeek 的开放之路系列之三：模型市场Hugging face](/posts/opensource_engineering/deepseek-open-path-series-2-hugging-face.md)
* [非官方观察：DeepSeek 的开放之路系列之四：那些耀眼新星之下的开源项目](/posts/opensource_engineering/deepseek-open-path-series-3-open-source-infra.md)

从前面的几篇文章来看，各位看官很容易得出一个显而易见的结论：DeepSeek 是从开源世界诞生和发展的，无论如何我们不可否认开放科学、开放平台、开放市场和开源文化/许可的力量。但是这又是个不能提及的话题，所以笔者也就忽略这部分的论证和解释，直接跳到DeepSeek本身开放的部分。

技术总是能带来富裕的杠杆，但是技术的发明总是带来人群的极度不适应，在技术的历史上，商业从未缺席，就在法律尚未对新技术有任何的约束和遏制之时[1]，当然善于抓住机会者，如Microsoft、Google、FaceBook（Meta）等[2]。当2022年ChatGPT出现时，人工智能出现了一次浪潮，巨头开始进入角逐，作为新生事物的大模型，有很多前所未有的新的属性，作为本次观察的终极篇章，笔者打算和大家捋一捋过去这几年人们试图从大量着这头“怪兽”，而是寻找衡量的项，试图建立一种信任、控制、伦理的人类社会规则，一种接纳同时也出现了拒绝。

## 可信任的人工智能

抛开技术层面，全球很多组织都关注人工智能发展所带来的影响，如欧盟就发布过：发布《人工智能伦理准则》、《人工智能法案》；经济合作与发展组织 (OECD): 发布AI原则，促进国际合作，推动全球可信任AI共识。电气和电子工程师协会 (IEEE): 制定《Ethically Aligned Design》等标准，推动伦理设计，提供技术框架。

可信任人工智能的目标是构建对人类有益、负责任且值得信赖的人工智能系统，使其能够安全有效地服务于社会，并促进人类福祉。它强调在技术进步的同时，也要关注伦理、法律和社会影响，确保人工智能的发展方向符合人类共同的价值观。

## OSI 的努力：关于开源AI定义的始末

随着AI技术的快速发展，尤其是大型语言模型的出现，传统的“开源”定义已无法完全适用于AI领域。AI模型的复杂性，包括代码、数据和模型参数，使得“开源”的界定变得模糊。市场上出现了一些“开源洗白”现象，即某些模型声称开源，但实际上并未公开关键的训练数据和参数。因此，OSI为了应对这些挑战，重新定义了“开源AI”的标准。

OSI组织了一个由70多位专家组成的团队，包括研究人员、律师、政策制定者和大型科技公司代表，共同参与制定AI开源定义。经过广泛的讨论和协商，OSI于2023年6月开始着手准备为开源AI重新设置定义。2024年10月29日，OSI正式发布了开源AI定义（OSAID）1.0版本[4] 。

OSAID 1.0版本明确了开源AI系统的四大自由：使用自由、研究自由、分享自由和修改自由。强调了AI模型训练数据的透明性和可追溯性，要求提供足够的训练数据信息，以便他人能够重现该模型。要求公开完整的AI模型源代码和模型参数。

OSI的开源AI定义制定过程是一个全球性的合作项目，吸引了众多组织和个人的参与。

## Linux AI&Data 子基金会的贡献：MoF




## 行为数据巨头的野心：LLMa

## DeepSeek 的逼近

## 未来

## 参考资料

1. 《Ruling the Waves：From the Compass to the Internet, a History of Business and Politics along the Technological Frontier》，Debora L·Spar，Harvest Books，January 7, 2003
2. 《監控資本主義時代》， 肖莎娜．祖博夫（Shoshana Zuboff），时报出版，2020.7.24
3. 《弗兰肯斯坦》，玛丽·雪莱（Mary Shelley），人民文学出版社（2020年）
4. https://opensource.org/ai 

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
