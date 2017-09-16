---
isChild: true
title: 测试驱动开发
anchor:  test_driven_development
---

## 测试驱动开发 {#test_driven_development_title}

[Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development) 上的定义:

> 测试驱动开发 (TDD) 是一种以非常短的开发周期不断迭代的软件开发过程:首先开发者对将要实现的功能或者新的方法写一个失败的自动化测试用例，然后就去写代码来通过这个测试用例，最终通过重构代码让一其达到可接受的水准。**Kent Beck**， 这个技术创造者或者说重新发现者，在2003年声明TDD 鼓励简单的设计和激励信心。

目前你可以应用的几种不同类型的测试：

### 单元测试
单元测试是一种编程方法来确认函数，类和方法以我们预期的方式来工作，单元测试会贯穿整个项目的开发周期。通过检查各个函数和方法的输入输出，你就可以保证内部的逻辑已经正确执行。通过使用依赖注入和编写"mock" 类以及 stubs 来确认依赖被正确的使用，提高测试覆盖率。

当你创建一个类或者一个函数，你应该为它们的每一个行为创建一个单元测试。至少你应该确认当你输入一个错误参数会触发一个错误，你输入一个有效的参数会得到正确的结果。这会帮助你在开发周期后段对类或者函数做出修改后，确认已有的功能任然可以正常的工作。可替代的方法是在源码中使用 `var_dump()` ，但这种方法却不能去构建一个或大或小的应用。

单元测试的其他用处是在给开源项目贡献代码时。如果你写了一个测试证明代码有bug，然后修复它，并且展示测试的过程，这样补丁将会更容易被接受。如果你在维护一个项目，在处理 pull request 的时候可以将单元测试作为一个要求。

[PHPUnit](https://phpunit.de/) 是业界PHP应用开发单元测试框架的标准，但也有其他可选的框架：

* [atoum](https://github.com/atoum/atoum)
* [Kahlan](https://github.com/crysalead/kahlan)
* [Peridot](http://peridot-php.github.io/)
* [SimpleTest](http://simpletest.org)

### 集成测试

[Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development) 上的定义:

> 集成测试 (有时候称为集成和测试，缩写为 `I&T`)是把各个模块组合在一起进行整体测试的软件测试阶段。它处于单元测试之后，验收测试之前。集成测试将已经经过了单元测试的模块做为输入模块，组合成一个整体，然后运行集成测试用例，然后输出一个可以进行系统测试的系统。

许多相同的测试工具既可以运用到单元测试，也可以运用到集成测试。

### 功能性测试

有时候也被称之为验收测试，功能测试是通过使用工具来生成自动化的测试用例，然后在真实的系统上运行。而不是单元测试中简单的验证单个模块的正确性和集成测试中验证各个模块间交互的正确性。这些工具会使用代表性的真实数据来模拟真实用户的行为来验证系统的正确性。

#### 功能测试的工具

- [Selenium](http://docs.seleniumhq.org/)
- [Mink](http://mink.behat.org/en/latest/)
- [Codeception](http://codeception.com/) 是一个全栈的测试框架包括验收性测试工具。
- [Storyplayer](http://datasift.github.io/storyplayer/) 是一个全栈的测试框架并且支持随时创建和销毁测试环境。
