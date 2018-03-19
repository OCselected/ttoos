---
categories:
- 开源
- 社区管理
date: 2018-03-18T22:09:17+08:00
description: "所谓的细则，就是那些具体的规定，恍若路边的警示牌：“请不要不戴头盔驾驶摩托车”！“请不要酒后驾车”！细则思考之上，是有个大前提的，比如说要珍惜生命！那么热爱自由呢？"
keywords:
- Open Source
- Culture
- Community Management
tags:
- 社区管理
title: "Kubernetes 社区是如何运作的系列之三——治理细则"
url: ""
---
## 关于治理

忘记在哪里看到的了，说是搞开源，第一文化，第二流程，第三是工具。我们今天就 Kubernetes 的 SIG 治理细则，来看下具体的工具使用。至于原因吗，开源之道也不免唠叨几句：

文化的学习和习得绝非一日之功，可能需要数十年，数百年，甚至有些文化根本就无法移植。既然文化是一个很漫长的过程，还要比拼耐心，那么我们就退而求其次，学习下流程，然后，流程没有文化的支撑，仿佛鱼离开了水般的难以适应，需要大概经历好多年，才能慢慢习惯。举例来讲，开源社区讲究透明和影响力，那么很多事情就需要公开，这在某种文化背景下是非常难以实施的。然后，再退而求其次，只使用工具：邮件列表、可以存档的即时在线多人聊天、GitHub等，这是所有人都可以稍微花些时间就可以掌握的，因为是实实在在的规划好的路，而这点是非常符合所谓的落地的、可见的。

这就是开源之道愿意花时间和精力来讲治理细则的根本来由。废话颇多，不如见见实际的内容，以下为 Kubernetes SIG 的治理细则，细到如何上传YouTube视频。那么问题来了，对 Kubernetes 的技术本身有多深的理解和沟通能力才能有计划创建一个SIG？

![](http://i.imgur.com/WtQUow0.jpg?1)

## 总则说明

为了规范特别兴趣小组（SIG）的工作，也为了创建最具透明性的社区，以及为了能够让贡献者能够找到最合适的SIG，SIG应遵循以下指导原则：

* 要有定期的会议，每三周至少要有半小时，尤其是在11月、12月。
* 会议记录要保持更新，且要在社区仓库页面链接到 SIG 的页面。
* 在 SIG 相应的邮件列表中，要提前说明会议的议程，而且要在会后发布会议记录。
* 记录SIG会议并公开发布
* 要确保 SIG 的邮件列表和 Slack 频道均已归档
* 每周社区会议至少每6周报告一次活动
* 根据需要参与发布计划会议和回顾，并结束会议
* 确保项目中发生的相关工作，如 GitHub组织的所有者、仓库的权限、代码、测试的负责人，SIG的支持的内容：包括issue、PR review、测试失败的响应、bug修复等
* 使用上述的形式作为工作、沟通和协作的主要手段，而不是私人间邮件来往和会面
* 要为 SIG 选一名代表出来。—— 目前的[SIG代表名单和职责](https://github.com/kubernetes/community/blob/master/sig-product-management/SIG%20PM%20representatives.md)

## SIG 角色

SIG 中的角色区分为如下两类：

* **SIG 参与者** ：一个或多个项目的积极参与者；可代表较宽泛的角色
* **SIG lead**：SIG 的组织者

## SIG 创建和管理流程

### 前提准备

* 公开的发起创建 SIG的声明，包括一份简短的任务说明，然后发送邮件给[kubernetes-dev@googlegroups.com](mailto:kubernetes-dev@googlegroups.com)和[kubernetes-users@googlegroups.com](mailto:kubernetes-users@googlegroups.com)，发送完毕后，耐心的等个两三天。
* 找到仓库的维护者，申请创建GitHub的标签，这里假设叫做foo的sig组，应该是：sig/foo
* 到[http://kubernetes.slack.com/](http://kubernetes.slack.com/)上申请一个新的频道:#sig-foo，slack的管理员是[@parispittman](https://github.com/parispittman)和[@castrojo](https://github.com/castrojo)。新用户可加入[slack.kubernetes.io/](http://slack.kubernetes.io/)。
* Slack 的相关内容都会记录到[kubernetes.slackarchive.io/](http://kubernetes.slackarchive.io/)，要创建一个新的归档频道的话，请通过```/ invite @slackarchive```来邀请```slackarchive bot```加入到该频道。
* 根据需要组织视频会议。毋需等待[每周社区视频会议](https://github.com/kubernetes/community/blob/master/community/README.md)来进行讨论，还有就是在视频会议上要总结一下近期的活跃度。
* 向Paris Pittman(parispittman@google.com) 和 Jorge Castro(jorge@heptio.com)发邮件申请Zoom账号，你必须为所有的SIG 创建相应的Google Group（详情见下文），以便所有SIG主管有权在必要时重置密码。
* 请仔细阅读[如何使用YouTube](https://github.com/kubernetes/community/blob/master/community/K8sYoutubeCollaboration.md)，然后实际操作将录制的视频上传到Kubernetes频道上。
* 日历
    - 使用Google日历的账户创建新的日历，并将之公开。
    - 将日历所有权与所有的SIG主管共享 - 他们可以编辑，重命名甚至删除它。
    - 分享给您sc1@kubernetes.io，sc2@kubernetes.io，sc3@kubernetes.io，并赋予他们完整的所有权。这是为了防止 SIG 主管们的消失。
    - 将之在 SIG 的邮件列表上共享，较低的权限。
    - 与 cgnt364vd8s86hr2phapfjc6uk@group.calendar.google.com 分享个别事件，以让其在 Kubernetes 通用的日历上发布。
* 使用现有的建议书和 PR 流程
* 在邮件列表[kubernetes-dev@googlegroups.com](mailto:kubernetes-dev@googlegroups.com)上公布新的SIG成立。
* 向 kubernetes/community 仓库提交 PR，将新的SIG添加到其 README文件的表格中。在 kubernetes/community 创建一个新的目录，sig-foo,并将sig相关的内容放入其中：文档、时间/日程表、路线图等。

### 为 SIG 创建相应的服务账户

为了尽可能多的涵盖各种主题的通知和讨论渠道，每个 SIG 都会使用多个GitHub的账号，用来提及和通知。一下步骤将会逐步解释：

#### 创建Google Group

在[Google Group](https://groups.google.com/forum/#!creategroup)上创建邮件讨论组，请遵循如下步骤：

* 每一个 SIG 都需要至少有一个邮件讨论组，和一些用于镜像相关github通知的组;
* 使用下面的名称约定创建邮件讨论组;
* 所创建的讨论组，至少需要有三位所有者（包括 sarahnovotny at google.com 和 ihor.dvoretskyi at gmail.com）
* 要将讨论的主题设置为公开。

名称约定：

* kubernetes-sig-foo (邮件讨论组)
* kubernetes-sig-foo-leads (管理者的名单，用于Zoom和日历。)
* kubernetes-sig-foo-misc
* kubernetes-sig-foo-test-failures
* kubernetes-sig-foo-bugs
* kubernetes-sig-foo-feature-requests
* kubernetes-sig-foo-proposals
* kubernetes-sig-foo-pr-reviews
* kubernetes-sig-foo-api-reviews

#### GitHub 用户创建

在 [GitHub](https://github.com/join)上创建SIG相关的账户，同样使用下面的名称约定：

这其实是用来做机器人的，主要还是要和邮件列表讨论组一一对应上，所以名称显得特别的关键：

* k8s-mirror-foo-misc
* k8s-mirror-foo-test-failures
* k8s-mirror-foo-bugs
* k8s-mirror-foo-feature-requests
* k8s-mirror-foo-proposals
* k8s-mirror-foo-pr-reviews
* k8s-mirror-foo-api-reviews

#### 创建 GitHub 团队

到 [kubernetes 的 GitHub 组织](https://github.com/orgs/kubernetes/new-team)按照如下名称约定创建相应的组织，请将 GitHub 的用户分别添加到相应的 GitHub 组织：

* sig-foo-misc
* sig-foo-test-failures
* sig-foo-bugs
* sig-foo-feature-requests
* sig-foo-proposals
* sig-foo-pr-reviews
* sig-foo-api-reviews

## 原则总结：

* 保持高度透明
* 尽最大可能在高度复杂的技术体系架构中，让开发者和相关贡献者能够找到最感兴趣或最擅长的内容
* 将流程减少到最小，但不能没有


## 参考资料

1. Kubernetes 社区 SIG 治理文档 https://github.com/kubernetes/community/blob/master/sig-governance.md
