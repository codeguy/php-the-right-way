---
title: 代码风格指南
anchorid: code_style_guide
---

<h1 id="code_style_guide">代码风格指南</h1>

PHP社区百花齐放，拥有大量的函数库、框架和组件。PHP开发者通常会在自己的项目中使用若干个外部库，因而PHP代码遵循或尽量接近
同一个代码风格就非常重要，可以让开发者方便地把多个代码库集成在自己的项目中。

[框架互操作组][fig](即PHP标准组)发布了一系列推荐风格。其中有部分是关于代码风格的，即[PSR-0][psr0]，[PSR-1][psr1]，[PSR-2][psr2]和[PSR-4][psr4]。
不要让这些名称所混淆，这些推荐仅是一些被其它项目所遵循的规则，如Drupal, Zend, Symfony, CakePHP, phpBB, AWS SDK, FuelPHP,
Lithium等，你可以把这些规则用在自己的项目中，或者继续使用你自己的风格。

通常情况下，你的PHP代码应该遵循其中一项或多项标准，从而其他开发者可以方便地阅读和使用你的代码。这些标准都是在前一个标准
上附加新的规则，所以使用PSR-1就同时要求遵循PSR-0，但可以不遵循PSR-2。

* [阅读PSR-0][psr0]
* [阅读PSR-1][psr1]
* [阅读PSR-2][psr2]
* [阅读PSR-4][psr4]
* [Read about PEAR Coding Standards][pear-cs]
* [Read about Zend Coding Standards][zend-cs]
* [Read about Symfony Coding Standards][symfony-cs]

可以使用[PHP_CodeSniffer][phpcs]来检查代码是否符合这些标准，文本编辑器插件[Sublime Text 2][st-cs]还能
提供实时检查。如果不符合规范，可以使用Fabien Potencier提供的工
具[PHP Coding Standards Fixer][phpcsfixer]自动修复，不用自己手工修复。

变量名和代码结构建议使用英文符号编写，注释则可以使用各种语言，没有限制。

[fig]: http://www.php-fig.org/
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[psr2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
[pear-cs]: http://pear.php.net/manual/en/standards.php
[zend-cs]: http://framework.zend.com/wiki/display/ZFDEV2/Coding+Standards
[symfony-cs]: http://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: http://cs.sensiolabs.org/
