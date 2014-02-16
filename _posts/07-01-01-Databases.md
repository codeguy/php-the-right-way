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
代替。<b>如果你正在开发新项目，请不要用mysql扩展，尝试用[MySQLi扩展][mysqli]或PDO来替代</b>

* [PHP: 选择MySQL API](http://php.net/manual/en/mysqlinfo.api.choosing.php)

## PDO

PDO是数据库连接抽象库，从PHP 5.1.0开始提供，提供多种数据库的统一的操作接口。PDO不会转化你的SQL查询或者模拟缺失特性；
它只是提供统一的API去连接不同的数据库而已。

更重要的是，`PDO`允许你绑定SQL查询语句中的变量，而无需担心SQL注入问题，这主要通过PDO statements和变量绑定来实现。

假设PHP脚本接收一个数字ID作为查询参数，从数据库取回一条记录。下面是一种错误的做法：

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

这是非常糟糕的代码，直接在SQL中插入一个原始输入变量，导致潜在的SQL注入风险。假如黑客构造URL：
`http://domain.com/?id=1%3BDELETE+FROM+users`来传入恶意参数id，则`$_GET['id']`的变量值为`1;DELETE FROM users`，
这将删除数据表中的所有用户！因此，你应该使用PDO的绑定参数功能来处理ID输入参数。

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT); // <-- Automatically sanitized by PDO
$stmt->execute();
{% endhighlight %}

这才是正确的代码，在PDO statement中绑定一个参数，使得查询被发给数据库之前，对输入参数进行转义，防止SQL注入攻击。

* [学习PDO][1]

另外一个要注意的问题是，如果数据库连接没有隐式地关闭，那么数据库连接数可能会超过数据库服务器的限制而连接失败，这种
错误在其他编程语言中比较常见。PDO对象在销毁的时候会隐式的关闭数据库连接，只要你把指向它的引用全部删除即可，如设置
为NULL。如果没有，PHP也会在脚本结束时关闭所有非持久化的数据库连接。

* [了解更多PDO连接][5]

## 抽象层

很多框架都提供了自己的数据库抽象层，有的是基于PDO，有的不是。它们通过PHP方法来包装实际的查询，能够模拟出只存在于
某些数据库系统的特性，给你一个真正的数据库抽象层。这么做会带来一些性能的损失，但是在一个需要支持MySQL、PostgreSQL
和SQLite的应用中，这个损失相对于由此带来的代码一致性而言是可以接受的。

有些抽象层遵循[PSR-0][psr0]或[PSR-4][psr4]命名空间标准，可以集成在任意的应用中：

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Propel][7]
* [ZF2 Db][4]
* [ZF1 Db][3]

[1]: http://www.php.net/manual/en/book.pdo.php
[2]: http://www.doctrine-project.org/projects/dbal.html
[3]: http://framework.zend.com/manual/en/zend.db.html
[4]: http://packages.zendframework.com/docs/latest/manual/en/index.html#zend-db
[5]: http://php.net/manual/en/pdo.connections.php
[6]: https://github.com/auraphp/Aura.Sql
[7]: http://propelorm.org/Propel/

[mysql]: http://php.net/mysql
[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
