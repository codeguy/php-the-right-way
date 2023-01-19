---
isChild: true
title:   MySQL Extension
anchor:  mysql_extension
---

## MySQL Extension {#mysql_extension_title}

The [mysql] extension for PHP is incredibly old and has been superseded by two other extensions:

- [mysqli]
- [pdo]

Not only did development stop long ago on [mysql], but it
**has been [officially removed in PHP 7.0][mysql_removed]**.

To save digging into your `php.ini` settings to see which module you are using, one option is to search for `mysql_*`
in your editor of choice. If any functions such as `mysql_connect()` and `mysql_query()` show up, then `mysql` is
in use.

Even if you are not using PHP 7.x or later yet, failing to consider this upgrade as soon as possible will lead to greater
hardship when the PHP upgrade does come about. The best option is to replace mysql usage with [mysqli] or [PDO] in
your applications within your own development schedules so you won't be rushed later on.

**If you are upgrading from [mysql] to [mysqli], beware lazy upgrade guides that suggest you can simply find and replace `mysql_*` with `mysqli_*`. Not only is that a gross oversimplification, it misses out on the advantages that mysqli provides, such as parameter binding, which is also offered in [PDO][pdo].**

* [MySQLi Prepared Statements][mysqli_prepared_statements]
* [PHP: Choosing an API for MySQL][mysql_api]

[mysql]: https://www.php.net/mysqli
[mysql_removed]: https://www.php.net/manual/migration70.removed-exts-sapis.php
[mysqli]: https://www.php.net/mysqli
[pdo]: https://www.php.net/pdo
[mysql_api]: https://www.php.net/mysqlinfo.api.choosing
[mysqli_prepared_statements]: https://websitebeaver.com/prepared-statements-in-php-mysqli-to-prevent-sql-injection
