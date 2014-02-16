---
title: 测试驱动开发
anchorid: test_driven_development
isChild: true
---

<h2 id="test_driven_development">测试驱动开发</h2>

[Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development)的定义:

> 测试驱动开发(TDD)是以非常短的开发周期，不断进行迭代的软件开发流程：首先开发者针对改进或新功能编写失败的自动化测试用例，然后编写代码使测试用例通过，
> 最后重构代码，让代码满足可接受的标准。Kent Beck，该技术的创建者或者说重新发现者，在2003年声明TDD鼓励简单的设计和提振信心。

目前对应用有多种类型的测试：

### 单元测试

单元测试是从编写开始，贯穿于整个开发周期的一种用于保证函数、类和方法的行为与预期一致的编程方法。通过检查各个函数和方法的输入和输出值，你可以保证它们
内部逻辑已经正确执行；通过依赖注入、编写mock类和stubs，你可以验证依赖是否已经正确处理，提高测试覆盖率。

在编写一个类或函数的时候，应该为它的每一个行为创建一个单元测试，至少你要保证它收到错误参数时能够触发错误，而参数正确时能正常工作。这可以帮你在后面
修改类或函数的时候，确认已有功能仍然正常工作。PHP中var_dump()的功能与此类似，但是它是无法用于创建应用的。

单元测试的另外一个用武之地是在给开源项目贡献代码时，如果你编写一个测试，证明代码存在bug，然后修复代码，让测试通过，这样该补丁被接受的概率要高很多。
如果你的项目接受人家的补丁，你应该把单元测试作为项目的一项要求。

[PHPUnit](http://phpunit.de)是PHP应用的单元测试框架的业界标准，其他几个可选框架是：

* [atoum](https://github.com/atoum/atoum)
* [Enhance PHP](https://github.com/Enhance-PHP/Enhance-PHP)
* [PUnit](http://punit.smf.me.uk/)
* [SimpleTest](http://simpletest.org)

### 集成测试

[Wikipedia](http://en.wikipedia.org/wiki/Integration_testing)的定义:

> 集成测试(也称集成与测试，缩写为I&T)是把各个独立模块集成在一起，作为一个整体进行测试的软件测试阶段，它处于单元测试和验收测试之间。集成测试把已经
> 做过单元测试的模块集成在一块，然后运行集成测试用例，最终输出一个可以进行系统测试的系统。

很多单元测试工具同时也可以用于集成测试，并且原理也是相通的。

### 功能测试

有时也称为验收测试，使用工具创建自动化的测试用例，然后在真实的系统上运行，这一点与单元测试验证单个模块的正确性和集成测试验证模块间交互的正确性是有
区别的，这些工具通常使用真实的数据集来模拟真实用户的使用行为来验证系统的正确性。

#### 功能测试工具

* [Selenium](http://seleniumhq.com)
* [Mink](http://mink.behat.org)
* [Codeception](http://codeception.com) is a full-stack testing framework that includes acceptance testing tools
* [Storyplayer](http://datasift.github.io/storyplayer) is a full-stack testing framework that includes support for creating and destroying test environments on demand
