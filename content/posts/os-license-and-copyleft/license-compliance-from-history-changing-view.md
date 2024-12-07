---
categories:
- 开源
- 感悟
date: 2024-12-07T11:31:38+08:00
description: "《开源之史》回顾了一些开源许可的诞生和发展路径，包括GPL、APL等，但是MPL是忽略的，2024.12.6 LFAPAC OSPO SIG 开源万里行走进ViVo Open Source，恰好听到了Blouger的分享，也是弥补了不足，故将他分享的内容经授权发布在这里，供有兴趣的朋友参考学习。Blouger 是难得的接触开源许可之后，愿意探究背后发生的缘由的律师，搞清楚为什么这么写，比条文本身更重要。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "从历史沿革角度看许可证合规治理"
url: ""
authors:
- Blouger
---

## 一、从封闭到开放的网景浏览器

在尝试与网景达成合作失败后，微软投入20亿美元，通过购买、兼并和开发等多种方式，推出了自己的浏览器产品IE2.0。为了击败网景，微软将IE免费开放。而在当时，网景浏览器的售价是45美元，IE据此迅速获得了可观的市场份额。作为回应IE的举措，网景决定开源浏览器，并于1998年推出MPL1.1许可证。

## 二、网景的顾虑

### 涉三方代码

部分三方代码是由网景公司自他人处取得授权后才能使用，部分受限代码虽为网景公司自己拥有，但因涉及合作厂商的权益，也难以开源。

### 法律障碍

部份代码涉及加密及解密技术(cryptography)，依据美国法律不得输出到美国境外。

## 三、MPL1.1的对策

### 选择拥有完整版权、处置权的代码

* Original Code：初始作者提供的原始码。
* Covered Code：原始码或者修改，或原始码与修改的组合，前述的整体或部分均属于本概念。
* Larger Work：整体或部分的Covered Code与非MPL代码的组合，**将Larger Work作为单一产品分发时，Covered Code需满足MPL**。

### 明确劣后于法律 

如果由于法律、司法命令或法规的原因，无法遵守本许可证中有关部分或全部covered code的任何条款，则您必须：(a) 尽可能遵守本许可证的条款；(b) 描述限制及其影响的代码。此类描述必须足够详细，以便具有普通技能的接收者能够理解。

### 第三条路

对比Larger Work概念的宽范围和少限制，Covered Code有着窄范围和多限制的特点。即在有限的Covered Code范围内，遵循MPL的要求。而对于宽范围的Larger Work，使用者有着很高的自由度。MPL通过此种设计，在BSD、MIT为代表的“衍生物不受传染”和GPL为代表的“衍生物受传染”之间，找到了“部分衍生物（Covered Code）受传染”的第三条路。

### 多重许可

常见的许可证往往只有一种许可，为进一步保障许可的灵活性，MPL创设性地提出了多重许可的方案。即初始作者可将Covered Code的某些部分的许可设定为MPL的其它版本或者其他。

## MPL2.0的发展

随着GPL系列（GPL、LGPL、AGPL）许可证的发展壮大，MPL有意兼容GPL，同时为了减轻MPL-1.1 多重许可所带来的复杂问题，MPL因此升级了以下条款。

1. 不再强制附上许可证原文
  1.1：必须在您分发的每份源代码副本中附上本许可的副本。
  2.0：必须告知下游，如何获取本许可证的副本。

2. Larger Work是否有变？

**You may create and distribute a Larger Work under terms of Your choice, provided that You also comply with the requirements of this License for the Covered Software.**

3. 次级许可的灵活可选

次级许可：GPL2.0+、LGPL2.1+、AGPL3.0+

次级许可不兼容：   a、初始作者利用多重许可声明不兼容；
                 b、Covered Software根据MPL1.1-提供的，且不适用次级许可。

Larger Work：Covered Software与其他的组合构成Larger Work，如其他属于次级许可不兼容，允许根据次级许可分发Covered Software，以便下游自行选择依据MPL2.0或次级许可分发Covered Software。


## 关于作者

![](/posts/os-license-and-copyleft/blouger-sharing-20241206.jpg)



