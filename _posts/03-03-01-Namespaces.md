---
title: 命名空间
anchorid: namespaces
isChild: true
---

<h2 id="namespaces">命名空间</h2>

如前所述，PHP社区的众多开发者已经开发了大量的代码。这意味着一个函数库中的PHP代码可能使用了另外一个库中相同的类名，如果它们共享一个命名空间，则会产生冲突导致异常。

_命名空间_解决了这个问题。如PHP手册里描述的那样，命名空间类似于操作系统中的目录，两个同名文件可以共存于不同的目录。同理，同名的PHP类可以在不同的PHP命名空间下共存，就这么简单。

因而把代码放在自己的命名空间下就显得非常必要，这样其他人就可以放心的使用这些代码，而无需担心与其他函数库的命名冲突。

[PSR-0][psr0] 里提供了命名空间的推荐使用方式, 它试图提供一个标准的文件、类和命名空间的使用惯例，从而让代码做到即插即用。

2013年12月，PHP-FIG发布了新的自动加载标准：[PSR-4][psr4]，将来可能会替换旧的PSR-0标准。PSR-4要求PHP5.3版本以上，而目前很多项目用的都是PHP5.2，
因此当前两个标准都可用，但是对于新应用或者包的话，应优先考虑PSR-4.

* [了解更多命名空间][namespaces]
* [了解更多PSR-0][psr0]
* [了解更多PSR-4][psr4]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
