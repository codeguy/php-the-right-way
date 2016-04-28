---
isChild: true
title:   MySQL Extension
anchor:  mysql_extension
---

## MySQL Extension {#mysql_extension_title}

The [mysql] extension for PHP is incredibly old and has superseded by two other extensions: 

- [mysqli]
- [pdo]

Not only did development stop long ago on [mysql], but it was [deprecated as of PHP 5.5.0]
[mysql_deprecated], and **has been [officially removed in PHP 7.0][mysql_removed]**.

To save digging into your `php.ini` settings to see which module you are using, one option is to search for `mysql_*` 
in your editor of choice. If any functions such as `mysql_connect()` and `mysql_query()` show up, then `mysql` is 
in use.

Even if you are not using PHP 7.0 yet, failing to consider this upgrade as soon as possible will lead to greater 
hardship when the PHP 7.0 upgrade does come about. The best option is to replace mysql usage with [mysqli] or [PDO] in 
your applications within your own development schedules so you won't be rushed later on.

**If you are upgrading from [mysql] to [mysqli], beware lazy upgrade guides that suggest you can simply find and replace `mysql_*` with `mysqli_*`. Not only is that a gross oversimplification, it misses out on the advantages that mysqli provides, such as parameter binding, which is also offered in [PDO][pdo].**

* [PHP: Choosing an API for MySQL][mysql_api]
* [PDO Tutorial for MySQL Developers][pdo4mysql_devs]

[mysql]: http://php.net/mysql
[mysql_deprecated]: http://php.net/migration55.deprecated
[mysql_removed]: http://php.net/manual/en/migration70.removed-exts-sapis.php
[mysqli]: http://php.net/mysqli
[pdo]: http://php.net/pdo
[mysql_api]: http://php.net/mysqlinfo.api.choosing
[pdo4mysql_devs]: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers
