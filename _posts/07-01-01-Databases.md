---
title:  Databases
anchor: databases
title:  数据库
---

# 数据库 {#databases_title}

绝大多数时候你的 PHP 程序都需要使用数据库来长久地保存数据。这时你有一些不同的选择可以来连接并与数据库进行交互。在 **PHP 5.1.0 之前**，我们推荐的方式是使用例如 [mysqli]，[pgsql]，[mssql] 等原生驱动。

原生驱动是在只使用 _一个_ 数据库的情况下的不错的方式，但如果，举个例子来说，你同时使用了 MySQL 和一点点 MSSQL，或者你需要使用 Oracle 的数据库，那你就不能够只使用一个数据库驱动了。你需要为每一个数据库去学习各自不同的 API &mdash; 这样做显然不科学。

[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
[mssql]: http://php.net/mssql
