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


# 训练模型环境

环境和能力所限，笔者并不能也没有条件，复现一个所有的过程，从其发表的论文、GitHub发布的仓库[1]中的代码、Hugging Face 发布的模型，以及安装需求等来**推测**其所使用的开源项目。

## PyTorch[2]

PyTorch 是一个由 Meta (原 Facebook) 开发和维护的开源深度学习框架，如今已成为人工智能研究和应用领域中最受欢迎的框架之一，这在 DeepSeek 近期开源的项目中得到了充分体现。DeepSeek 开源的 FlashMLA [1]项目，是为了优化 Flash Attention 而设计的 CUDA 内核实现，它完全构建于 PyTorch 之上，作为 PyTorch 的扩展库而存在。DeepSeek-R1 推理模型，也明确使用了 PyTorch 框架进行模型的加载和推理计算。这两个项目都直接证明了 PyTorch 在 DeepSeek 技术栈中的核心地位。

PyTorch 之所以能被 DeepSeek 以及众多AI 机构如此青睐，得益于其卓越的特性。它以灵活性和易用性著称，采用 Python 优先的设计理念，动态图机制使得模型构建和调试过程更为直观高效。PyTorch 拥有强大的社区支持，活跃的开发者社区贡献了大量的教程、工具和预训练模型，极大地降低了学习和使用门槛。此外，PyTorch 生态系统蓬勃发展，衍生出如 Torchvision, TorchText, TorchAudio 等丰富的工具库，覆盖计算机视觉、自然语言处理、音频处理等多个领域，为开发者提供了全方位的支持。  PyTorch 对 GPU 的强大支持 也是其关键优势，能够充分利用 GPU 加速深度学习计算，满足大模型训练和推理的需求。

##  Hugging Face Transformers

Hugging Face Transformers 库是自然语言处理 (NLP) 领域最重要的开源项目之一。 它提供了预训练的 Transformer 模型、模型微调工具、以及各种 NLP 任务的实用工具。 正如之前的分析推测，DeepSeek 很可能大量使用了 Hugging Face Transformers 库。 在DeepSeek v3 的源代码，在推理代码中明确依赖 transformers 库，进一步证实了这一点。 版本要求 4.35.2 或更高，表明 DeepSeek-V3 推理代码使用了 Transformers 库 4.35.2 版本或更新的版本，可以利用 Hugging Face Transformers 库最新的模型和功能。

## SentencePiece

SentencePiece 是一个开源的文本分词器，主要用于自然语言处理任务。 它由 Google 开发，支持多种分词算法，包括 Byte-Pair Encoding (BPE)、WordPiece 等。 推测 DeepSeek-R1 模型可能使用了 SentencePiece 或 tiktoken 分词器。  在DeepSeek v3 的源代码，推理代码明确依赖 sentencepiece，表明 DeepSeek-V3 模型很可能使用了 SentencePiece 分词器进行文本 tokenization。 版本要求 0.1.99 或更高，表明使用了 SentencePiece 0.1.99 版本或更新的版本。

## Kubernetes 和 Docker (容器化和集群管理)

大规模的推理服务通常需要部署在 GPU 集群上，并使用容器化技术进行管理和部署。  Kubernetes 是容器编排领域的标准，用于自动化部署、扩展和管理容器化应用。  Docker 是流行的容器化技术。  DeepSeek  极有可能使用 Kubernetes 和 Docker 来管理其推理服务的部署、扩展、负载均衡和监控。

# 运行模型环境

对于运行一个大模型的环境来说，无论是本地还是云服务，都有着更为广泛的应用，我们回归到运行DeepSeek 的模型这个范围，也能看到DeepSeek需要大量的开源项目来支持和运行。

## vLLM[3]

vLLM 是一个新兴的、专门为大语言模型 (LLM) 推理和服务而设计的 快速且高效 的框架。  它最大的亮点在于采用了 Paged Attention 技术，这项创新技术有效管理 attention 计算过程中的 key 和 value，极大地优化了内存使用和推理速度。  相较于传统的推理方式，vLLM  显著提升了吞吐量和降低了延迟，尤其在处理长文本输入和高并发请求时优势更为突出。

DeepSeek 在其 Hugging Face 模型仓库的 Readme 文件中推荐 vLLM，正是因为 vLLM 能够 充分发挥 DeepSeek 大模型的推理性能。  对于追求极致性能和效率的用户而言，vLLM 提供了一个理想的运行环境，可以更流畅、更快速地体验 DeepSeek 大模型的强大能力。  此外，vLLM 易于部署和使用，与 Hugging Face 生态系统良好兼容，使得用户可以便捷地结合 Hugging Face Transformers 库和 DeepSeek 模型，快速搭建高性能的推理服务。

## SGLang[4]

SGLang (Structured Generation Language)  是一个新兴的、专注于高效且可控的大语言模型结构化生成的框架。与 vLLM 主要侧重于推理加速不同，SGLang 的核心优势在于精细化的控制模型生成过程。它允许开发者通过类似编程的语法，精确定义模型的输出结构、约束生成内容、并灵活融入外部工具和知识库。

DeepSeek 在 Hugging Face Readme 文件中推荐 SGLang，是看中了 SGLang 在复杂任务处理上的潜力。DeepSeek 大模型能力强大，而 SGLang  能够引导模型更精准地完成指令，尤其在需要多步骤推理、数据提取、以及与环境交互等场景下，SGLang 的结构化生成能力能够更好地发挥 DeepSeek 大模型的优势，产出更可控、更可靠的结果。  虽然 vLLM  在推理性能上表现出色，但对于追求生成质量和任务复杂性的应用，SGLang 提供了一个更强大的编程模型和控制能力。

## Python

Python 作为一种通用编程语言，早已成为人工智能和机器学习领域的首选语言。 这得益于 Python 语法的简洁易读，以及其背后庞大而活跃的开源社区。 社区贡献了海量的库和工具，极大地简化了人工智能应用的开发流程。

DeepSeek 近期开源的 FlashMLA、DeepSeek-R1 等项目，都清晰地展现了对 Python 生态的深度依赖。 NumPy, SciPy, Pandas 等库为 DeepSeek 提供了强大的数值计算和数据处理能力，这是构建机器学习模型的基础。 更为核心的是，DeepSeek  深度学习框架 PyTorch 作为模型构建和训练的基石，而如 Hugging Face Transformers 等高阶库则提供了预训练模型、模型组件和便捷的开发工具，加速了 DeepSeek 大模型的研发进程。

可以说，Python 语言凭借其丰富的生态和强大的功能，已经成为 DeepSeek  乃至整个 AI 领域进行技术创新的基石和首选工具。

## Linux

DeepSeek 的 FlashMLA 项目专注于优化 CUDA 内核，DeepSeek-R1 和 V3 推理模型也明确依赖 PyTorch 和 CUDA 环境，这都指向 GPU 集群 是其核心算力支撑。  考虑到大语言模型训练和推理对算力的巨大需求， DeepSeek 的集群规模必然是 大规模 的。 这不仅仅是几台服务器，而很可能是 数百甚至数千个GPU节点 组成的大型集群。

所有的这些都运行的是Linux环境。Linux  并非单一操作系统，而是一款开源操作系统内核的名字，亦指基于该内核构建的众多 Linux 发行版操作系统家族。  Linux 以其开源、灵活、稳定、安全和强大的特性，成为了现代数字世界的基石。

在服务器领域，Linux 占据绝对主导地位，驱动着互联网的运转。云计算基础设施，如亚马逊云 (AWS)、谷歌云 (GCP) 和阿里云，均大量采用 Linux。  移动设备操作系统 Android  同样基于 Linux 内核。  从嵌入式系统到超级计算机，Linux 无处不在。  在 人工智能、大数据、物联网 等新兴技术领域，Linux 更是扮演着关键角色。

Linux 的成功源于其开源模式带来的社区力量和创新活力，以及其卓越的稳定性和安全性，和极高的定制灵活性。  它降低了技术门槛，促进了技术共享，推动了数字技术的普及和发展，在现代数字世界中拥有无可替代的地位。

# 数据集

大语言模型的训练需要海量的数据。  DeepSeek 可能会使用以下类型的开源数据集：

* Common Crawl[5]: Common Crawl 是一个巨大的网络文本数据集，包含了来自互联网的大量网页内容。 它是训练很多大型语言模型的基石数据集之一。
* Wikipedia (维基百科)[6]: 维基百科是一个高质量的知识库，常被用于语言模型的训练，以提升模型的知识性和事实性。
* 来自 Hugging Face Datasets Hub 的数据集[7]: Hugging Face Datasets Hub 上托管了大量的开源数据集，涵盖各种 NLP 任务和数据类型。

Hugging Face Datasets Hub 是一个极其宝贵的资源，它汇集了海量、多样化、高质量的开源数据集，覆盖了机器学习的多个领域和任务。其数据集来源广泛，内容丰富，并提供了便捷的数据访问和处理工具。无论是学术研究人员还是工业界开发者，都可以从 Datasets Hub 中找到所需的数据资源，加速其机器学习项目的开发和迭代。Hugging Face Datasets Hub极大地 促进了数据共享，降低了数据获取的门槛，推动了整个机器学习领域的进步和繁荣。

## 小结

向上游出发，是开源的一个重要的精神内核，理解 DeepSeek 背后所使用到的开源项目、开放数据集，以及开放科学等等是一个重要的背景，而这就是人类继承的力量，创新的力量。根本就没有所谓的横空出世，都是经过了大量的累积，然后才会在某个点上爆发，DeepSeek 恰好找到了一个。

换一个角度讲，DeepSeek 是站在巨人的肩膀上，或者说通过免费的午餐[8]来实现了突破，这就是技术进步的本质，新发现就是以旧有的为基础的，如果我们将目光集中在新的发明上，而彻底放弃关注这些开源项目，那么贪婪成性[9]会毁掉我们的文明，我们需要有“同舟共济”的思想，开源是一个大的共同体，进步是共同体的进步。需要共同体的文化来维系所有取得的成绩。

## 参考材料

1. https://github.com/deepseek-ai/open-infra-index
2. https://pytorch.org/
3. https://github.com/vllm-project/vllm?tab=readme-ov-file
4. https://github.com/sgl-project/sglang
5. https://commoncrawl.org/
6. https://www.wikipedia.org/
7. https://huggingface.co/datasets
8. 《富裕的杠杆：技术革新与经济进步》，乔尔·莫基尔，华夏出版社，2008-1
9. 《Greed Is Dead：Politics After Individualism》，[英]保罗·科利尔 / [英]约翰·凯， 上海三联书店，2022-8

## 关于作者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
