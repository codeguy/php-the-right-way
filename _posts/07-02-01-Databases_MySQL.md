---
isChild: true
title:   MySQL Extension
anchor:  mysql_extension
---

## MySQL Extension {#mysql_extension_title}

The [mysql] extension for PHP is no longer in active development, and is [officially deprecated as of PHP 5.5.0]
[mysql_deprecated], meaning that it will be removed within the next few releases. If you are using any functions that
start with `mysql_*` such as `mysql_connect()` and `mysql_query()` in your applications then these will simply not be
available in later versions of PHP. This means you will be faced with a rewrite at some point down the line, so the
best option is to replace mysql usage with [mysqli] or [PDO] in your applications within your own development schedules
so you won't be rushed later on.

**If you are starting from scratch then absolutely do not use the [mysql] extension: use the [MySQLi extension][mysqli],
or use [PDO].**

* [PHP: Choosing an API for MySQL][mysql_api]
* [PDO Tutorial for MySQL Developers][pdo4mysql_devs]


[mysql]: http://php.net/mysql
[mysql_deprecated]: http://php.net/migration55.deprecated
[mysqli]: http://php.net/mysqli
[pdo]: http://php.net/pdo
[mysql_api]: http://php.net/mysqlinfo.api.choosing
[pdo4mysql_devs]: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers
