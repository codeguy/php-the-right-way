---
title: 代码风格指南
anchor: code_style_guide
---

# 代码风格指南 {#code_style_guide_title}

PHP社区百花齐放，拥有大量的函数库、框架和组件。PHP开发者通常会在自己的项目中使用若干个外部库，因此 PHP代码遵循（尽可能接近）同一个代码风格就非常重要，这让开发者可以轻松地将多个代码库整合到自己的项目中。

[PHP标准组][fig] 提出并发布了一系列的风格建议。其中有部分是关于代码风格的，即 [PSR-0][psr0], [PSR-1][psr1], [PSR-2][psr2] 和 [PSR-4][psr4]。这些推荐只是一些被其他项目所遵循的规则，如 Drupal, Zend, Symfony, CakePHP, phpBB, AWS SDK, FuelPHP, Lithium 等。你可以把这些规则用在自己的项目中，或者继续使用自己的风格。

通常情况下，你应该遵循一个已知的标准来编写 PHP 代码。可能是 PSR 的组合或者是 PEAR 或 Zend 编码准则的其中一个。这代表其他开发者能够方便的阅读和使用你的代码，并且使用这些组件的应用程序可以和其他第三方的组件保持一致。

* [阅读 PSR-0][psr0]
* [阅读 PSR-1][psr1]
* [阅读 PSR-2][psr2]
* [阅读 PSR-4][psr4]
* [阅读 PEAR 编码准则][pear-cs]
* [阅读 Symfony 编码准则][symfony-cs]

你可以使用 [PHP_CodeSniffer][phpcs] 来检查代码是否符合这些准则，文本编辑器 [Sublime Text 2][st-cs] 的插件也可以提供实时检查。

你可以通过以下两个工具来自动修正你的程序语法，让它符合标准。
一个是 [PHP Coding Standards Fixer][phpcsfixer]，它具有良好的测试。
另外一个工具是 [php.tools][phptools]， 它是 sublime text 的一个非常流行的插件[sublime-phpfmt][sublime-phpfmt]，虽然比较新，但是在性能上有了很大的提高，这意味着实时的修复语法会更加的流畅。

所有的变量名称以及代码结构建议用英文编写。注释可以使用任何语言，只要让现在以及未来的伙伴能够容易阅读理解即可。


[fig]: http://www.php-fig.org/
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[psr2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
[pear-cs]: http://pear.php.net/manual/en/standards.php
[symfony-cs]: http://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: http://cs.sensiolabs.org/
[phptools]: https://github.com/dericofilho/php.tools
[sublime-phpfmt]: https://github.com/dericofilho/sublime-phpfmt
