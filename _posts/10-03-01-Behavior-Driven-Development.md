---
title: 行为驱动开发
anchorid: behavior_driven_development
isChild: true
---

<h2 id="behavior_driven_development">行为驱动开发</h2>

行为驱动开发(BDD)有两种方式：SpecBDD和StoryBDD。SpecBDD关注代码的技术行为，而StoryBDD关注业务、特性和交互，这两种方式都有对应的PHP框架。

采用StoryBDD，开发者编写人类可读的故事来描述应用的行为，然后这些故事可以作为应用的测试用例。PHP中用于StoryBDD编程的框架是Behat，从Ruby
的[Cucumber](http://cukes.info/)项目演化而来，实现了Gherkin DSL来描述特性行为。

采用SpecBDD，开发者编写规格说明来描述实际代码的行为，与测试一个函数或方法不同，规格描述了一个函数或方法应该具有的行为。PHP中的PHPSpec框
架提供该编程方式的支持，它也是从Ruby的[RSpec project](http://rspec.info/)演化而来。

### BDD链接

* [Behat](http://behat.org/), the StoryBDD framework for PHP, inspired by Ruby's [Cucumber](http://cukes.info/) project;
* [PHPSpec](http://www.phpspec.net/), the SpecBDD framework for PHP, inspired by Ruby's [RSpec](http://rspec.info/) project;
* [Codeception](http://www.codeception.com) is a full-stack testing framework that uses BDD principles.
