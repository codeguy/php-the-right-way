---
isChild: true
anchor:  namespaces
title: 命名空间
---

## 命名空间 {#namespaces_title}

如前所述，PHP 社区已经有许多开发者开发了大量的代码。这意味着一个类库的 PHP 代码可能使用了另外一个类库中相同的类名。如果他们使用同一个命名空间，那将会产生冲突导致异常。

_命名空间_ 解决了这个问题。如 PHP 手册里所描述，命名空间好比操作系统中的目录，两个同名的文件可以共存在不同的目录下。同理两个同名的 PHP 类可以在不同的 PHP 命名空间下共存，就这么简单。

因此把你的代码放在你的命名空间下就非常重要，避免其他开发者担心与第三方类库冲突。

[PSR-4][psr4] 提供了一种命名空间的推荐使用方式，它提供一个标准的文件、类和命名空间的使用惯例，进而让代码做到随插即用。


2014 年 10 月，PHP-FIG 废弃了上一个自动加载标准： [PSR-0][psr0]，而采用新的自动加载标准 [PSR-4][psr4]。但 PSR-4 要求 PHP 5.3 以上的版本，而许多项目都还是使用 PHP 5.2，所以目前两者都能使用。

如果你在新应用或扩展包中使用自动加载标准，应优先考虑使用 PSR-4。

* [阅读命名空间][namespaces]
* [阅读 PSR-0][psr0]
* [阅读 PSR-4][psr4]

[namespaces]: http://php.net/language.namespaces
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr4]: http://www.php-fig.org/psr/psr-4/
