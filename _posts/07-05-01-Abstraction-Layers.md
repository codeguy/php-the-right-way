---
isChild: true
title:   数据库抽象层
anchor:  databases_abstraction_layers
---

## 数据库抽象层 {#databases_abstraction_layers_title}

许多框架都提供了自己的数据库抽象层，其中一些是设计在 [PDO][1] 的上层的。这些抽象层通常将你的请求在 PHP 方法中包装起来，通过模拟的方式来使你的数据库拥有一些之前不支持的功能。这种抽象是真正的数据库抽象，而不单单只是 PDO 提供的数据库连接抽象。这类抽象的确会增加一定程度的性能开销，但如果你正在设计的应用程序需要同时使用 MySQL，PostgreSQL 和 SQLite 时，一点点的额外性能开销对于代码整洁度的提高来说还是很值得的。

有一些抽象层使用的是[PSR-0][psr0] 或 [PSR-4][psr4] 命名空间标准，所以他们可以安装在任何你需要的应用程序中。

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Propel][7]
* [Zend-db][4]


[1]: http://php.net/book.pdo
[2]: http://www.doctrine-project.org/projects/dbal.html
[4]: https://packages.zendframework.com/docs/latest/manual/en/index.html#zendframework/zend-db
[6]: https://github.com/auraphp/Aura.Sql
[7]: http://propelorm.org/
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr4]: http://www.php-fig.org/psr/psr-4/
