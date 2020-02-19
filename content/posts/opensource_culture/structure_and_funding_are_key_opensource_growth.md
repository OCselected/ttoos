---
categories:
- 开源
- 感悟
date: 2017-09-12T22:33:24+08:00
description: "布道开源多年，绝大多数人的第一反应是，你让我的软件开源了，我该如何赚钱？或者是你让我贡献给上游，我没有那么多余的钱啊，我有心无力。直觉看起来，开源仿佛是不食人间烟火般和金钱对立。其实，绝大多数人都错了，这是违反直觉的。开源的代码确实是工程的重要部分，但是它没法交易。但是又必须投入，产出往往更高，相比于闭门造车，更能节省成本。"
keywords:
- Open Source
- Culture
tags:
- 开源文化
title: 大多数成功的开源项目都是用钱砸出来的，你信吗？
url: ""
---

## 引言

十年前，布道师Berdou's博士的论文：[集市的管理：社区主导的开源／自由软件项目、商业化以及外围的参与者](http://tieguy.org/blog/2008/02/14/evangelias-thesis-available-online/)就如此的论述：

> 基础设施模块是需要大量的、持续的贡献的，诸如桌面系统、平台的程序库，这些都是需要高深的知识和技术能力的。一个有能力全职在项目中贡献的人，若是有人付钱给他从而全身心的投入的话，在理解代码等需要专注和投入精力方面，要比业务时间的志愿者好很多。

是的，尤其是进入开源默认的时代，企业参与开源、贡献开源的力度是越来愈大。甚至Docker的创始人兼CTO：Solomon Hykes 认为：[开源和商业是一枚硬币的两面，缺一不可。](/posts/opensource_leader/Solomon_Hykes_and_The_Docker_Revolution/)。无论是否承认，资本或商业的力量成就了现代的世界，人们为之付出，为之奋斗。换句话说，现代的软件业界，被开源吞噬的软件，商业力量的驱动功不可没。

## 最成功的开源项目有哪些不同?

欣欣向荣、如日中天的开源项目，用户无疑是重要的一部分，也离不开成千上万活跃的贡献者们，据统计，现在全球开源的项目仓库有6千万，但是，绝大多数只是个人的一个工作空间而已。而那些卓越而成功的项目到底有何不同？经过我们观察，我们发现其中一个共同点：这些项目背后均是由一家公司开发，或者是多家公司共同开发。

![](https://raw.githubusercontent.com/OCselected/ttoos/master/content/public/opensource_velocity.jpeg)

来自CNCF的执行董事 Dan Kohn 和开发者Łukasz Gryglicki 将30多个最快发展的开源项目展示了一番，如上图所示。（项目的地址：[https://github.com/cncf/velocity](https://github.com/cncf/velocity) 囊括了所有的生成数据的脚本。）图中所展示的内容，其中五颜六色的气泡越大，表示此开源项目的作者数量多，比如最大的Linux Kernel共有3814名贡献者。X轴表示的总共的提交次数，而Y轴表示的是提交的PR和Issue的数量。

Dan的想法是，开源项目所展现出来的现象是，自然增长的越发的规模扩大，其中的原因是大多数的开发者都倾向于使用和参与那些较大的项目，而反过来，又由于参与的人数够多，Bug修复的就更快、增加功能也快，质量也高，一个完美的闭环，所以Dan选择了跟踪增长快速的项目，帮助说明在哪些方面可以参与其中，以及在接下来的几年中有可能成为成功的平台。

## 前30个增长最快速度的开源项目背后有何神秘？

现在，让我们来捋一捋这30个项目：

其中有9个项目，其背后是经营最成功的基金会，它们分别是：


| 项目    |     基金会       |
| -------------  | ------------- |
|[Linux 内核](https://www.kernel.org/)|Linux基金会|
| [Kubernetes](https://kubernetes.io/)  | CNCF  |
|[Cloud Foundry](https://www.cloudfoundry.org/)   | Cloud Foundry基金会  |
|[.NET](https://www.microsoft.com/net/)   |  .NET 基金会 |
|[Nova](https://docs.openstack.org/nova/latest/)、[Neutron](https://wiki.openstack.org/wiki/Neutron)、  [Cinder](https://wiki.openstack.org/wiki/Cinder) | OpenStack基金会  |
|[Node.js](https://nodejs.org/en/)   | NOde.js 基金会  |
|[](http://mesos.apache.org/)   | Apache软件基金会  |

第二种类型占的比例最多，这些项目背后都是由某家公司在背后支撑，但是外部公司的开发者和独立开发者也占有相当的比例，其中值得关注的一个现象就是，很多维护者都是受雇于某一家企业的。其中有14个开源项目：

| 项目    |     商业公司       |
| -------------  | ------------- |
|[Chromium](https://www.chromium.org/Home)、[TenSorflow](https://www.tensorflow.org/)、[AngulaJS](https://angularjs.org/)|Google|
|[React](https://facebook.github.io/react/)   | FaceBook  |
|[Docker/Moby](https://mobyproject.org/)   |  Docker |
|[VS Code](https://code.visualstudio.com/)[Office开发者](https://dev.office.com/)   |  微软 |
|[Ansible](https://www.ansible.com/)   | RedHat  |
|[ElasticSearch](https://www.elastic.co/products/elasticsearch)   |Elastic  |
|[Auth0](https://auth0.com/)   | Auth0  |
|[GitLab](https://about.gitlab.com/)   | GitLab  |
|[Ruby on Rails](http://rubyonrails.org/)   |Basecamp   |
|[ionic](https://ionicframework.com/)   |  ionic |
|[Terraform](https://www.terraform.io/)   | HashiCorp  |
|[Chef](https://www.chef.io/chef/)   | Chef  |

第三种类型的开源项目，背后并非是基金会，也没有公司支撑，比较特殊，不好来划分，6个项目：

* [HomeBrew](https://brew.sh/)
* [Definiteytyped](http://definitelytyped.org/)
* [Vue.js](https://vuejs.org/)
* [NixOS](https://nixos.org/)
* [Home-assistant](https://home-assistant.io/)
* [Odin项目](https://www.theodinproject.com/)

## 架构和投资是增长的关键

那么，Dan的结论是什么？软件的开发是困难的，主持开发大型的软件项目更是难上加难。因此，一家公司支撑开源然后让大伙共同来开发，或者是通过软件基金会的协助让来自全球的开发者协同工作，都是有极大的益处的。

管理大型的开源项目囊括了正如Linux基金会执行主席Jim Zemlin称之为“看门人”的工作，诸如督促Bug的修复、为新的用户和开发者回答问题、处理商标和许可证上的问题、以及处理那些通常在任何大型合作中都会遇到的摩擦，尽量不让它们发生。来自基金会和企业的赞助为项目的架构和投资，这保证了项目的足够信心，可以让项目在长期内保持活跃和稳定。理想情况下，这就形成了一个积极的反馈循环，项目的快速发展成为成功产品或服务的核心。这种采用有助于为公司创造利润，而且公司可以通过雇佣员工来进一步增加项目的发展，从而将这些利润进行再投资。如此的正向的循环恰是基金会所做的事情。

## 总结

问题的诀窍在于，成功的开源项目，既让企业参与进来，然而又不让他们完全控制结果。举例来说，由基金会主持下的开源项目，基金会就能保证企业过度的控制代码这样的行为。

这就是双刃剑效果，企业有资源和财力来进行代码开发，但是他们往往又是过度贪婪的。我们希望他们参与，但是又不能让他们将代码控制，如果一旦让公司控制来项目的走向，许可证就变成了空话。那是我们最不愿意看到的局面。

平衡之道！需要各位力量的参与。而平衡本身恰是我们要思考和所做的。

## 参考资料
1. [What Do the Most Successful Open Source Projects Have In Common?](https://www.linuxfoundation.org/blog/successful-open-source-projects-common/)
2. [Why open source success is increasingly dependent on corporate cash](http://www.techrepublic.com/article/why-open-source-success-is-increasingly-dependent-on-corporate-cash/)
