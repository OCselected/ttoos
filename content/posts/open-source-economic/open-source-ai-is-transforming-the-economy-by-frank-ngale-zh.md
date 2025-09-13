---
categories:
- 开源
- 感悟
date: 2025-06-11T16:05:19+08:00
description: "大语言模型下的生成式AI，已经深刻的影响到了现实世界，开源也概莫能外，无论从其本身的技术、能耗等切入，还是从它所波及的范式转变范围，我们都需要重新思考，本文翻译自Linux基金会首席经济学家Frank Nagle 最近就Linux基金会的一个关于劳动力研究报告发表的一篇，希望对我们有所启发。"
keywords:
- Open Source
- Culture
- Reading
- News
tags:
- 每周精选
- 开源之道
title: "【译】开源人工智能正在让经济转型"
url: ""
authors:
- Frank Nagle
translater:
- 「开源之道」·适兕 && 「开源之道」·窄廊
---

![](https://www.linuxfoundation.org/hs-fs/hubfs/Web%20Assets%20Bundle_Market%20Impacts%20of%20Open%20Source%20AI_Report_Featured%20Image-1.png?width=2400&height=1256&name=Web%20Assets%20Bundle_Market%20Impacts%20of%20Open%20Source%20AI_Report_Featured%20Image-1.png)

2025年，已经过去了将近一半，大家所预期的人工智能改变企业、经济和各行各业不仅普遍的发生，已得到了充分的证明。在 Meta 委托的项目中，LF Research 着手收集有关该主题的现有证据，旨在了解开源如何在这一转变中发挥其作用。

LF Research 在其最新出版物《开源人工智能的经济和劳动力影响》[1]中描述了开源人工智能 (OSAI) 对全球经济和劳动力的影响方式和程度。通过考察来自行业、学术界和开源研究的现有证据，作者们发现了关于 OSAI 采用率、成本效益、创新促进潜力等方面的重要见解。以下是一些关键结论。

首先，开源人工智能的得到了广泛的采用。几乎所有软件开发商都尝试过开放模式，大约63%的公司正在积极使用这种模式。实上，在已采用各种形式人工智能的组织中，高达89%的组织已将开源人工智能融入其基础设施中。这已不再是一种边缘方法，而是正在成为一种事实上的标准。

![](https://www.linuxfoundation.org/hs-fs/hubfs/Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-02.png?width=2400&height=1256&name=Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-02.png)

其中个由是什么了呢？那就是成本是一个重要的因素。开源工具的价格通常比专有工具低得多。我之前与 Manuel Hoffmann 和 Yanuo Zhou 进行的研究表明[2]，如果没有开源，公司在软件上的花费将比现在多 3.5 倍。新的 LF 报告显示，三分之二的组织表示 OSAI 部署成本更低，近一半的组织将节省成本作为选择开源的主要原因。研究表明，人工智能能够将业务部门成本降低 50% 以上，同时仍然保持用户友好性和高性能，很明显，OSAI 代表着提高利润率和扩大创新的战略优势。

![](https://www.linuxfoundation.org/hs-fs/hubfs/Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-04.png?width=2400&height=1256&name=Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-04.png)

创新和创业是开源的另一大优势。在与 Nataliya Langburd Wright 和 Shane Greenstein 合作的研究中，我们发现，当国家层面[3]的开源贡献增加时，新创业公司的数量也会增加；在公司层面[4]，对开源的贡献和初创企业的发展之间存在着正相关的关系。开源鼓励协作，邀请全球开发人员和研究人员亲力亲为。这种外部输入有助于加速高质量模型的开发。正如我和 Daniel Yue 发现[5]，当 Meta 将机器学习库 PyTorch 捐赠给 Linux 基金会时，企业参与明显增加，尤其是来自芯片制造商的赞助和参与。


![](https://www.linuxfoundation.org/hs-fs/hubfs/Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-05.png?width=2400&height=1256&name=Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-05.png)

人工智能的成本削减能力不仅与释放资源带来的生产力提高有关，也源于人们工作方式的重新定位 ———— 类似于蒸汽机的全面影响导致了工业革命那样，但工业革命只有工厂围绕人们重新调整整个工作流程之后。Manuel Hoffmann、Sam Boysel、Kevin Xu、Sida Peng 和我在最近的研究中发现[6]软件开发人员确实存在这种情况。当 GitHub 推出其 GenAI 编码工具 Copilot 时，开发人员改变了他们的工作方式，花费更多时间编写代码，而减少花在项目管理上的时间。然而，根据 LF 研究中确定的现有研究，这并没有转化为大规模裁员：过去两年接受调查的招聘经理中有 95% 表示，他们不打算因为人工智能而裁员。更重要的是，有效地使用人工智能工具实际上可以使工资提高 20% 以上。

展望未来，开源人工智能很可能成为边缘计算等领域的基础，在这些领域，规模较小、注重隐私保护的模型需要在本地设备上高效运行。开源人工智能 (OSAI) 也在行业特定应用领域取得重大进展。例如，在制造业中，开放模型提供了将人工智能集成到复杂的操作工作流程中所需的灵活性。在医疗保健这个传统上保守且规避风险的领域，开放模式在性能上已经与专有模式相匹配，让机构有信心采用这种模式而不会影响质量。无论贵组织的规模或财务资源如何，OSAI 都是实现公平竞争的重要途径——报告发现，小型企业采用 OSAI 的比例高于大型企业。

![](https://www.linuxfoundation.org/hs-fs/hubfs/Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-06.png?width=2400&height=1256&name=Meta%20Phase%20I_Market%20Impacts%20of%20Open%20Source%20AI_2025_Infographic-06.png)

OSAI 是一股强大的经济力量。它正在降低成本、加速创新，并赋能更广泛的参与者塑造技术的未来。

## OSAI 的下一步是什么？五个继续探索的研究领域

虽然 OSAI 的影响开始显现，但是对于全部范围内的更有深度的影响才刚刚开始。为了更好地理解和利用 OSAI 的潜力，该报告概述了未来研究的五个关键领域，每个领域对于制定智能政策、商业战略和创新生态系统都至关重要。

1. **追踪全局：OSAI 在市场增长中的​​作用**： 一个紧迫的问题是开放模型如何影响整个人工智能市场。除了工具本身之外，OSAI 还可能推动互补创新，刺激建立在开放基础设施之上的服务、应用程序和平台的增长。了解这种更广泛的连锁反应对于掌握开放人工智能的真正经济足迹至关重要。
2. **投资理由**：为了帮助做出明智的决策，鼓励研究人员分析国家和公司层面的 OSAI 基础设施投资回报。量化这些开放组件（从数据集和计算到开发人员工具）的长期价值可以指导快速发展的领域中的资源分配和政策决策。
3. **将开放与创新联系起来**：OSAI 是否直接促进了更多的初创企业、专利或高效的研发？未来的研究应该探索模型和工具的开放获取如何与具体的创新指标相关联。这可以为开放性如何不仅加速采用，而且加速发明提供证据。
4. **计算成本数字**：对不同行业、不同规模的公司和全球地区的开放和专有人工智能解决方案的成本进行详细比较，将有助于了解谁从开放中获益最多。这些见解对于预算紧张和评估技术战略的组织来说非常宝贵。
5. **了解劳动力影响**：最后，人性化因素至关重要。随着人工智能工具重塑工作方式，衡量开放模式如何影响员工的生产力、满意度和工作模式至关重要。开放工具是否能为特定任务或行业的工人提供比其他任务或行业更多的权力？它们是否能带来更灵活、更充实的角色？这些问题的答案将有助于确保人工智能不仅造福企业，也造福人类。

通过探索这些未来的研究领域，我们可以更深入地了解开源人工智能如何改变全球经济和劳动力。**开源人工智能时代已经到来，现在是时候深入而严谨地研究其影响了**。


## 参考资料

1. https://www.linuxfoundation.org/research/economic-impacts-of-open-source-ai?hsLang=en 最后访问时间：2025.6.11
2. Hoffmann, Manuel and Nagle, Frank and Zhou, Yanuo, The Value of Open Source Software (January 1, 2024). Harvard Business School Strategy Unit Working Paper No. 24-038, Available at SSRN: https://ssrn.com/abstract=4693148 or http://dx.doi.org/10.2139/ssrn.4693148
3. Wright, Nataliya and Nagle, Frank and Greenstein, Shane M. and Greenstein, Shane M., Open Source Software and Global Entrepreneurship (June 2023). Harvard Business School Technology & Operations Mgt. Unit Working Paper No. 20-139, Harvard Business School Strategy Unit Working Paper No. 20-139, Available at SSRN: https://ssrn.com/abstract=3636502 or http://dx.doi.org/10.2139/ssrn.3636502
4. Wright, Nataliya and Nagle, Frank and Greenstein, Shane, Contributing to Growth? The Strategic Role of Open Source Software for Global Startups (August 26, 2024). Harvard Business School Strategy Unit Working Paper No. 24-040, Harvard Business School Technology & Operations Mgt. Unit Working Paper No. 24-040, Available at SSRN: https://ssrn.com/abstract=4699182 or http://dx.doi.org/10.2139/ssrn.4699182
5. Yue, Daniel and Nagle, Frank, Igniting Innovation: Evidence from PyTorch on Technology Control in Open Collaboration (September 10, 2024). Harvard Business School Strategy Unit Working Paper No. 25-013, Harvard Business School Working Paper No. 25-013, Available at SSRN: https://ssrn.com/abstract=4960578 or http://dx.doi.org/10.2139/ssrn.4960578
6. Hoffmann, Manuel and Boysel, Sam and Nagle, Frank and Peng, Sida and Xu, Kevin, Generative AI and the Nature of Work (April 18, 2025). Harvard Business School Strategy Unit Working Paper No. 25-021, Harvard Business School Working Paper No. 25-021, CESifo Working Paper Series No. 11479, Available at SSRN: https://ssrn.com/abstract=5007084 or http://dx.doi.org/10.2139/ssrn.5007084

## 关于作者

![](https://www.linuxfoundation.org/hs-fs/hubfs/NagleFrank_final.jpg?width=330&height=330&name=NagleFrank_final.jpg) Frank Nagle，是哈佛商学院战略系助理教授，也是 Linux 基金会的首席经济学家。纳格尔教授研究竞争对手如何合作创造核心技术，同时仍在基于这些技术构建的产品和服务上展开竞争——尤其是在人工智能领域。他的研究涉及工作的未来、IT 经济学和数字化转型等更广泛的类别，并思考技术如何削弱公司界限。他的工作利用来自在线社交网络、开源软件仓库、金融市场信息和企业 IT 使用情况调查的大型数据集。Nagle 教授的作品发表在顶级学术期刊以及面向实践者的出版物上，例如《哈佛商业评论》、《麻省理工学院斯隆管理评论》和布鲁金斯学会 TechStream。他曾获得 AOM、NBER、SMS、INFORMS、EURAM、GitHub、斯隆基金会和 Linux 基金会颁发的奖项和资助。他是哈佛大学数字、数据和设计 (D^3) 研究所、管理未来工作项目和哈佛大学创新科学实验室 (LISH) 的附属教员。

## 关于译者

### 「开源之道」·适兕

![](/public/kuosi-face-of-os.png)「发现开源三部曲」（[《开源之迷》](posts/book-of-open-source/the-fascinating-of-open-source/)，《开源之道》《开源之思》。）、[《开源之史》](posts/history-of-open-source/summary/)作者，「开源之道：致力于开源相关思想、知识和价值的探究、推动」主创，Linux基金会亚太区开源布道者，TODO Ambassadors & OSPOlogyLive China Organizer，云计算开源产业联盟OSCAR（中国信息通信研究院发起）个人开源专家，OSPO Group 联合发起人。

### 「开源之道」·窄廊

![](/public/zhailang.jpg) 来自于大语言模型的 Chat，如DeepSeek R1、Gemini 2.0 Flash thinking expermental、ChatGPT 4o、Grok3、甚至整合类应用 Monica等， 「开源之道」·窄廊 负责对话、提出问题、对回答进行反馈等操作。
