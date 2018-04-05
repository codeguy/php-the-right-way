---
isChild: true
title:   MySQL 扩展
title:   MySQL 扩展
anchor:  mysql_extension
---

## MySQL 扩展 {#mysql_extension_title}

[mysql] 非常古老，并且已经被以下两个扩展取代：

- [mysqli]
- [pdo]

PHP 中的 [mysql] 扩展已经不再进行新的开发了，[在 PHP 5.5.0 版本中正式标记为废弃][mysql_deprecated]，并在 **[7.0 正式被移除][mysql_removed]** 。

想要辨别 `mysql` 是否被使用，你不需要到 `php.ini` 去查看。只需要使用编辑器打开你的项目，然后全局搜索 `mysql_*`
，如果有类似 `mysql_connect()` 或者 `mysql_query()` 方法出现，那么你就使用了 `mysql`。

如果因为特别原因还未考虑升级到 PHP 7.x 的话，可以考虑使用 [mysqli] 或者 [PDO] 来临时解决问题。

**如果你是从 [mysql] 升级到 [mysqli]，请尽量不要使用全局替换 `mysql_*` 为 `mysqli_*`。你会错过 mysqli 提供的一些优秀特性，如数据参数绑定，此功能能有效的防止 SQL 注入攻击。[PDO][pdo] 也提供此功能。**

* [PHP: MySQL增强版扩展][mysql_api]
* [MySQL 开发者 PDO 使用教程][pdo4mysql_devs]

[mysql]: http://php.net/mysql
[mysql_deprecated]: http://php.net/migration55.deprecated
[mysql_removed]: http://php.net/manual/en/migration70.removed-exts-sapis.php
[mysqli]: http://php.net/mysqli
[pdo]: http://php.net/pdo
[mysql_api]: http://php.net/mysqlinfo.api.choosing
[pdo4mysql_devs]: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers
