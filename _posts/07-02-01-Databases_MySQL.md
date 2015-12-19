---
isChild: true
title:   MySQL 익스텐션
anchor:  mysql_extension
---

## MySQL 익스텐션 {#mysql_extension_title}

PHP의 [MySQL][mysql]익스텐션은 아주 오래되었고, 다음 두 익스텐션으로 대체되었습니다.

- [mysqli]
- [pdo]

[mysql] 익스텐션 개발은 오래전에 개발 중단되었을 뿐만 아니라, [PHP 5.5.0 부터는 공식적으로 사용을 권장하지 않는 상태(deprecated)][mysql_deprecated]였고, **[PHP 7.0에서는 공식적으로 제거][mysql_removed]** 되었습니다.

To save digging into your `php.ini` settings to see which module you are using, one option is to search for `mysql_*`
in your editor of choice. If any functions such as `mysql_connect()` and `mysql_query()` show up, then `mysql` is
in use.

Even if you are not using PHP 7.0 yet, failing to consider this upgrade as soon as possible will lead to greater
hardship when the PHP 7.0 upgrade does come about. The best option is to replace mysql usage with [mysqli] or [PDO] in
your applications within your own development schedules so you won't be rushed later on.

**If you are upgrading from [mysql] to [mysqli], beware lazy upgrade guides that suggest you can simply find and replace `mysql_*` with `mysqli_*`. Not only is that a gross oversimplification, it misses out on the advantages that mysqli provides, such as parameter binding, which is also offered in [PDO][pdo].**

* [PHP: MySQL을 위한 API 선택][mysql_api]
* [MySQL 개발자를 위한 PDO 튜토리얼][pdo4mysql_devs]

[mysql]: http://php.net/mysql
[mysql_deprecated]: http://php.net/migration55.deprecated
[mysql_removed]: http://php.net/manual/en/migration70.removed-exts-sapis.php
[mysqli]: http://php.net/mysqli
[pdo]: http://php.net/pdo
[mysql_api]: http://php.net/mysqlinfo.api.choosing
[pdo4mysql_devs]: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers
