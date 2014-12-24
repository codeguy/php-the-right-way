---
isChild: true
title:   Abstraction Layers
anchor:  databases_abstraction_layers
---

## Abstraction Layers {#databases_abstraction_layers_title}

Many frameworks provide their own abstraction layer which may or may not sit on top of [PDO][1]. These will often
emulate features for one database system that is missing from another by wrapping your queries in PHP methods, giving
you actual database abstraction instead of just the connection abstraction that PDO provides. This will of course add a
little overhead, but if you are building a portable application that needs to work with MySQL, PostgreSQL and SQLite
then a little overhead will be worth it the sake of code cleanliness.

Some abstraction layers have been built using the [PSR-0][psr0] or [PSR-4][psr4] namespace standards so can be
installed in any application you like:

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Propel][7]
* [ZF2 Db][4]


[1]: http://php.net/book.pdo
[2]: http://www.doctrine-project.org/projects/dbal.html
[4]: http://packages.zendframework.com/docs/latest/manual/en/index.html#zend-db
[6]: https://github.com/auraphp/Aura.Sql
[7]: http://propelorm.org/
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
