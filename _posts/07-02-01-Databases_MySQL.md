---
isChild: true
title:   MySQL 扩展
anchor:  mysql_extension
---

## MySQL 扩展 {#mysql_extension_title}

PHP 中的 [mysql] 扩展已经不再进行新的开发了，并且已经[在 PHP 5.5.0 版本中正式被废弃][mysql_deprecated]，这意味着它将会在接下来的更新中被移除。如果你使用 `mysql_*` 开头的函数，例如 `mysql_connect()` 和 `mysql_query()` 的话，它们将会在后续的 PHP 版本无法使用。因此在以后的某个时间你需要重写你的代码。最好的办法是在你的开发计划中使用 [mysqli] 或 [PDO] 来取代 mysql 扩展，这样你才不会在后面手忙脚乱。

**如果你正从零开始，请一定避免使用 [mysql] 扩展：请选择 [MySQLi 扩展][mysqli],或者使用 [PDO]。**

* [PHP: MySQL增强版扩展][mysql_api]
* [MySQL 开发者 PDO 使用教程][pdo4mysql_devs]


[mysql]: http://php.net/mysql
[mysql_deprecated]: http://php.net/migration55.deprecated
[mysqli]: http://php.net/mysqli
[pdo]: http://php.net/pdo
[mysql_api]: http://php.net/mysqlinfo.api.choosing
[pdo4mysql_devs]: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers
