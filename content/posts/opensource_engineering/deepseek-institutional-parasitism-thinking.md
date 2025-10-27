---
categories:
- 开源
- 感悟
date: 2025-10-26T16:50:10+08:00
description: "谈现代性，如果你是傅高义先生那样的论述，会被说成是来自西方的外围审视，这带来了尴尬的视角问题。我们在过去的几篇文章里阐述了制度环境下的DeepSeek发展之路，避无可避，我们还是要回到制度的探讨上来，DeepSeek 系列项目该如何描述其背景？"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "非官方观察：DeepSeek 的开放之路系列之六：制度寄生的未来建设之路"
url: ""
authors:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

## 前情提要

本文是系列文章的第六篇，如有需要，可先预习前五篇：

* [非官方观察：DeepSeek 的开放之路系列之一：arXiv](/posts/opensource_engineering/deepseek-open-path-series-0/)
* [非官方观察：DeepSeek 的开放之路系列之二：重识 GitHub](/posts/opensource_engineering/deepseek-open-path-series-1-github.md)
* [非官方观察：DeepSeek 的开放之路系列之三：模型市场Hugging face](/posts/opensource_engineering/deepseek-open-path-series-2-hugging-face.md)
* [非官方观察：DeepSeek 的开放之路系列之四：那些耀眼新星之下的开源项目](/posts/opensource_engineering/deepseek-open-path-series-3-open-source-infra.md)
* [非官方观察：DeepSeek 的开放之路系列之五：开源大模型能实现吗？](/posts/opensource_engineering/deepseek-open-path-series-4-effect-future/)

## “制度寄生”（Institutional Parasitism）

在当代很多批评中，“制度寄生”[1]被用来描述：某组织／项目表面看起来“制度化”、获得资源、享有合法地位，却不承担制度构建或规则维护责任，反而削弱、消耗宿主制度的活力。

作为笔者的一个分析框架，旨在用来说明某些组织或项目在开放制度生态中的“搭便车”或“掠夺式依赖”行为。简言之，它成为一个制度分析的隐喻工具：说明“制度里的搭便车者”“制度被内化侵蚀者”的样式。

「开源之道」一直以来都在尝试解释和呈现开源能够发展起来的法律、文化、伦理、精神、社会等，一言以蔽之，即“制度”，开源作为一种制度进行阐释，有了制度这个框架，我们再来看DeepSeek项目的崛起，上述几篇文章，不过是回顾了DeepSeek 赖以发展的基础。类似下面这张图：

![](/images/2025/institutional-3-layer.png)

DeepSeek 是最上层我们大多数人可以看到的成果，前几篇文章其实聊的是中间的几层，最下面的也就是所谓的根基，是人心，是信任，是法律。

## 聪明的借力者

DeepSeek 堪称轻盈，有种风流倜傥的那种片叶不沾身的自在，从过去的几篇文章中，我们可以看到DeepSeek 的模式是典型的“数字游牧式寄生”：

* 技术基础几乎全部源自开放、开源世界（PyTorch、Transformer、arXiv论文体系）；
* 研发和同行评审依托 GitHub、Huggingface 等全球开放协作平台；
* 但组织上又刻意避开国际合规（GPL、Apache 贡献链），在灰色地带运行。

它以速度与模糊性替代制度合法性，这正是寄生者的典型策略：

> 在宿主的神经网络中快速穿行，但绝不公开绑定。

这种寄生是灵活、短期、游击式的，但无法积累真正的制度信任。当人们为此兴奋不已之时，认为已经超越了制度，这其实是一种错搭，类似于上世纪改革开放之后，来自民营经济的活力[2]，当然，DeepSeek 火了之后，有一些言论也开始解释这是其它制度力量下的崛起[3]。当然这件事，见仁见智，需要历史最后给出答案。

## 缺乏制度建设的参与

“制度寄生”（Institutional Parasitism）这一概念中最关键、最容易被误解的那一层——寄生并不意味着剥削，而是指依附与非对称利用关系。这里首先声明，无意批评DeepSeek，技术发展本应站在巨人的肩膀上。

DeepSeek 是一种是向上寄生 —— 在更高文明的制度中生长、借力、学习，并反哺宿主（让平台更加的吸引人）。前几篇文章中，我们详细阐述了DeepSeek 是如何充分利用平台和制度来以小搏大，实现自己的横空出世般的效果的。

DeepSeek 仍然依附于全球知识与开源制度的宿主——它利用 arXiv 的开放论文体系、GitHub 的协作机制、Huggingface 的模型发布标准。虽然它不参与制度建设，但它在宿主制度中有效行动。

它是“寄生于开放制度的聪明生物”——它不破坏宿主，只汲取其中的知识流动性。它的输出成果（开源模型、论文、工具）仍然被宿主吸收，形成**“弱共生循环”**。

DeepSeek 并没有参与到建立制度，但它清醒地知道自己生长在何种制度土壤中。之所以这么说，我们并没有看到 DeepSeek 为arXiv等平台捐赠或参与治理，DeepSeek 虽然在“开源”宣传上有动作，但从 制度性参与（捐赠、治理、基础设施支持） 的视角来看，其与全球开放开源制度（如 arXiv、PyTorch 基金会、Python基金会）之间还没有建立起深度互动关系。它是“技术产品化”型的开源行动者（开放部分代码、模型），而非“制度建设”型贡献者（支持平台、参与治理）。

## 无意批判

作为一名开源制度的研究者，或者是经济学视角下的开源，笔者并没有批判DeepSeek的意思，只是纯粹智识上的好奇，在眼花缭乱纷扰的世界中，找到事情发生的真相。DeepSeek 并非孤例，很多开源项目，我们往深了挖，也并非参与到制度当中，字节跳动在 PyTorch 项目的表现[4]，是常见的现象。

同时作为一名布道者，其实也一直想和大家表达的是，想要在一个环境中更好的表现，也应该担任其维护环境的责任，如果一家组织或个体，本身从开源中受益了，然而，却试图破坏开源制度：践踏许可、无视行为准则、谩骂、污名化等等都是毁灭者，可能人类历史上，作为呼吁者，总是并不怎么受人欢迎。

## 反向的制度幻觉

这一小节可能是笔者最想表达，而又欠缺能力的部分了，或许今年的诺贝尔经济学奖的结果[5]，给了我们很大的鼓励，那就是创新本身固然重要，但是让创新发生和持续的环境也很重要。北京日报的一篇文章[6]，讲的道理非常清楚，诺贝尔奖是呈现给大家的一个结果，而能够获得诺贝尔奖的评估，或者是参与到诺贝尔奖的科学研究的过程，才是我们真正应该关注的，为什么在某种制度下，科研工作人员可以毫无顾忌的投身于研究当中？这才是我们更应该关注的。

回到开源，作为制度寄生，其实是颇为受益的，因为只需要下载开源项目的成果，直接运用即可，或者是按照项目的指示进行bug修复、新功能建议等等，换句话说，参与到已有的开源项目：Linux、Apache、Kubernetes、Python、PyTorch等是相对容易的，能够解决通常意义上的技术问题即可，或者更高一些的参与，如加入Linux Foundation 董事，参与开源治理等，也是有章可循的。正如我们在前面提到的，这些平台，也是在更高制度下的产物。

那就是复制我们前面几篇文章提到的平台，其实技术平台的复制也是相对容易的，我们看到当前互联网上的主流之外都有很多类似的平台，无论是论文发表，代码托管，还是模型托管，甚至是形式意义上的非营利基金会，但是这就有涉及到制度的学习、模仿和质疑、扭曲、再表演的过程。而这个挑战无疑是巨大的，目前为止，我们看到了很多扭曲的现象。

作为对比，无论是轻盈性的寄生，还是反向制度建设，都并非是适合更大范围的制度的合理建设，这进一步为我们迈向下一步做了警示：你如何赢得人们对未来的预期付出？


## 参考资料

1. Parasitism - the philosophy of immorality, unhappiness, disasters, self-destruction and opposition to the fulfilment of God's commandments, https://totalizm.info/parasitism.htm 
2. 《自下而上的变革：中国的市场化转型》，倪志伟 / 欧索菲，北京大学出版社，2016-8-30
3. 西方不愿公开承认：中国开源，早已不是我们当年的那个“学生”了！ https://mp.weixin.qq.com/s/fOiqTrOO7pMib9KWpdOmnA
4. Yue, Daniel and Nagle, Frank, Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration (September 10, 2024). Harvard Business School Strategy Unit Working Paper No. 25-013, Harvard Business School Working Paper No. 25-013, Available at SSRN: https://ssrn.com/abstract=4960578 or http://dx.doi.org/10.2139/ssrn.4960578
5. The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2025 https://www.nobelprize.org/prizes/economic-sciences/2025/summary/
6. 拿没拿洋奖，都不是定义中国发展水平的指标， https://mp.weixin.qq.com/s/kukGX__K6OJYynyCNexHYw

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Google Gemini、ChatGPT 、Kimi、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
