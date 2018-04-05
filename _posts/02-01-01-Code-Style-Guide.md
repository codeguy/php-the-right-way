---
anchor: code_style_guide
title: 代码风格指南
---

# 代码风格指南 {#code_style_guide_title}

PHP 社区百花齐放，拥有大量的函数库、框架和组件。PHP 开发者通常会在自己的项目中使用若干个外部库，因此 PHP 代码遵循（尽可能接近）同一个代码风格就非常重要，这让开发者可以轻松地将多个代码库整合到自己的项目中。

[PHP标准组][fig] 提出并发布了一系列的风格建议。其中有部分是关于代码风格的，即 [PSR-0][psr0], [PSR-1][psr1], [PSR-2][psr2] 和 [PSR-4][psr4]。这些推荐只是一些被其他项目所遵循的规则，如 Drupal, Zend, Symfony, CakePHP, phpBB, AWS SDK, FuelPHP, Lithium 等。你可以把这些规则用在自己的项目中，或者继续使用自己的风格。

通常情况下，你应该遵循一个已知的标准来编写 PHP 代码。可能是 PSR 的组合或者是 PEAR 或 Zend 编码准则中的一个。这代表其他开发者能够方便的阅读和使用你的代码，并且使用这些组件的应用程序可以和其他第三方的组件保持一致。

* [阅读 PSR-0][psr0]
* [阅读 PSR-1][psr1]
* [阅读 PSR-2][psr2]
* [阅读 PSR-4][psr4]
* [阅读 PEAR 编码准则][pear-cs]
* [阅读 Symfony 编码准则][symfony-cs]

你可以使用 [PHP_CodeSniffer][phpcs] 来检查代码是否符合这些准则，文本编辑器 [Sublime Text][st-cs] 的插件也可以提供实时检查。

你可以通过任意以下两个工具来自动修正你的程序语法，让它符合标准：

- 一个是 [PHP Coding Standards Fixer][phpcsfixer]，它具有良好的测试。
- 另一个是随 PHP_CodeSniffer 安装的 [PHP Code 美化修整器][phpcbf]。

你也可以手动运行 phpcs 命令：

    phpcs -sw --standard=PSR2 file.php

它会显示出相应的错误以及如何修正的方法。同时，这条命令你也可以用在 git hook 中，如果你的分支代码不符合选择的代码标准则无法提交。

如果你已经安装了 PHP_CodeSniffer，你将可以使用
[PHP Code 美化修整器][phpcbf] 来格式化代码：

    phpcbf -w --standard=PSR2 file.php

另一个选项是使用 [PHP 编码标准修复器][phpcsfixer]，他可以让你预览编码不合格的部分：

    php-cs-fixer fix -v --level=psr2 file.php

所有的变量名称以及代码结构建议用英文编写。注释可以使用任何语言，只要让现在以及未来的小伙伴能够容易阅读理解即可。

[fig]: https://psr.phphub.org/
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr1]: https://laravel-china.org/topics/2078
[psr2]: https://laravel-china.org/topics/2079
[psr4]: https://laravel-china.org/topics/2081
[pear-cs]: http://pear.php.net/manual/en/standards.php
[symfony-cs]: http://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[phpcbf]: https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: http://cs.sensiolabs.org/
