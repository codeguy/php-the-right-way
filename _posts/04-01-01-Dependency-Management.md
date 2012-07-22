---
title: 依赖管理
anchorid: dependency_management
---

<h1 id="dependency_management">依赖管理</h1>

如今有大量的PHP函数库、框架和组件可供选择，一个项目中可能会使用其中的若干——这就是项目的依赖。到目前为止，PHP还没有有效的
项目依赖管理方案。即使你手工的管理它们，你还不得不处理它们的自动加载问题。

目前主要有两个PHP包管理系统：Composer和PEAR，哪个适合你呢？答案是两个都需要。

 * 管理单个项目的依赖时使用**Composer**
 * 管理整个系统的PHP依赖时使用**PEAR**

通常情况下，Composer包只在你项目中明确指定时才可用，而PEAR包在所有的PHP项目中可用。尽管PEAR听起来似乎更简单，但是根据每个
项目制定方案可能更合适。
