---
title: 数据库
anchorid: databases
---

<h1 id="databases">数据库</h1>

通常PHP代码使用数据库来持久化存储数据，并有多种方式去连接和操作数据库。在_PHP 5.1.0_之前，推荐的方式有[mysql][mysql]、
[mysqli][mysqli]和[pgsql][pgsql]等。

如果应用只是使用一个数据库的话，原生驱动就工作的非常好，否则使用MySQL的同时，还需要使用MSSQL或Oracle数据库的话，那么
就没有办法只使用一个原生驱动了，只能分别学习各个数据库驱动的API，这非常令人生厌。

另外需要注意，mysql这个原生驱动已经不在活跃开发状态了，从PHP 5.4.0开始被标记为不推荐使用，意味着将来版本如PHP 5.6可能会
移除这个扩展。如果你正在使用`mysql_connect()`和`mysql_query()`，那么将来可能要重写部分代码，所以最好用mysqli或PDO来
代替。_如果你正在开发新项目，请不要用mysql扩展，尝试用[MySQLi扩展][mysqli]或PDO来替代_

* [PHP: 选择MySQL API](http://php.net/manual/en/mysqlinfo.api.choosing.php)


[1]: http://www.php.net/manual/en/book.pdo.php
[2]: http://www.doctrine-project.org/projects/dbal.html
[3]: http://framework.zend.com/manual/en/zend.db.html
[4]: http://packages.zendframework.com/docs/latest/manual/en/index.html#zend-db
[5]: http://php.net/manual/en/pdo.connections.php
[6]: https://github.com/auraphp/Aura.Sql

[mysql]: http://php.net/mysql
[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
