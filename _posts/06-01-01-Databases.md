---
title: Databases
---

# Databases {#databases_title}

Many times your PHP code will use a database to persist information. You have a few options to connect and interact
with your database. The recommended option _until PHP 5.1.0_ was to use native drivers such as [mysql][mysql], [mysqli][mysqli], [pgsql][pgsql], etc.

Native drivers are great if you are only using ONE database in your application, but if, for example, you are using MySQL and a little bit of MSSQL,
or you need to connect to an Oracle database, then you will not be able to use the same drivers. You'll need to learn a brand new API for each
database &mdash; and that can get silly.

As an extra note on native drivers, the mysql extension for PHP is no longer in active development, and the official status since PHP 5.4.0 is
"Long term deprecation". This means it will be removed within the next few releases, so by PHP 5.6 (or whatever comes after 5.5) it may well be gone. If you are using `mysql_connect()` and `mysql_query()` in your applications then you will be faced with a rewrite at some point down the
line, so the best option is to replace mysql usage with mysqli or PDO in your applications within your own development schedules so you won't
be rushed later on. _If you are starting from scratch then absolutely do not use the mysql extension: use the [MySQLi extension][mysqli], or use PDO._

* [PHP: Choosing an API for MySQL](http://php.net/manual/en/mysqlinfo.api.choosing.php)

## PDO

PDO is a database connection abstraction library &mdash;  built into PHP since 5.1.0 &mdash; that provides a common interface to talk with
many different databases. PDO will not translate your SQL queries or emulate missing features; it is purely for connecting to multiple types
of database with the same API.

More importantly, `PDO` allows you to safely inject foreign input (e.g. IDs) into your SQL queries without worrying about database SQL injection attacks.
This is possible using PDO statements and bound parameters.

Let's assume a PHP script receives a numeric ID as a query parameter. This ID should be used to fetch a user record from a database. This is the `wrong`
way to do this:

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

This is terrible code. You are inserting a raw query parameter into a SQL query. This will get you hacked in a
heartbeat. Just imagine if a hacker passes in an inventive `id` parameter by calling a URL like
`http://domain.com/?id=1%3BDELETE+FROM+users`.  This will set the `$_GET['id']` variable to `1;DELETE FROM users`
which will delete all of your users! Instead, you should sanitize the ID input using PDO bound parameters.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT); //<-- Automatically sanitized by PDO
$stmt->execute();
{% endhighlight %}

This is correct code. It uses a bound parameter on a PDO statement. This escapes the foreign input ID before it is introduced to the
database preventing potential SQL injection attacks.

* [Learn about PDO][1]

You should also be aware that database connections use up resources and it was not unheard-of to have resources
exhausted if connections were not implicitly closed, however this was more common in other languages. Using PDO you
can implicitly close the connection by destroying the object by ensuring all remaining references to it are deleted,
i.e. set to NULL.  If you don't do this explicitly, PHP will automatically close the connection when your script ends -
unless of course you are using persistent connections.

* [Learn about PDO connections][5]

## Abstraction Layers

Many frameworks provide their own abstraction layer which may or may not sit on top of PDO.  These will often emulate features for
one database system that another is missing from another by wrapping your queries in PHP methods, giving you actual database abstraction.
This will of course add a little overhead, but if you are building a portable application that needs to work with MySQL, PostgreSQL and
SQLite then a little overhead will be worth it the sake of code cleanliness.

Some abstraction layers have been built using the PSR-0 namespace standard so can be installed in any application you like:

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [ZF2 Db][4]
* [ZF1 Db][3]

[1]: http://www.php.net/manual/en/book.pdo.php
[2]: http://www.doctrine-project.org/projects/dbal.html
[3]: http://framework.zend.com/manual/en/zend.db.html
[4]: http://packages.zendframework.com/docs/latest/manual/en/index.html#zend-db
[5]: http://php.net/manual/en/pdo.connections.php
[6]: https://github.com/auraphp/Aura.Sql

[mysql]: http://php.net/mysql
[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
