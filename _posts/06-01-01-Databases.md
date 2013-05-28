---
title: Databases
---

# Baze podataka {#databases_title}

Često će vaš PHP kod koristiti bazu podataka za čuvanje informacija. Na raspolaganju vam je nekoliko opcija za povezivanje i interakciju sa bazom. Preporučena opcija _do verzije PHP 5.1.0_ je bila korišćenje native drivers kao što su [mysql][mysql], [mysqli][mysqli], [pgsql][pgsql], itd.

Native drivers su sjajni ako koristite samo JEDNU bazu u aplikaciji, ali ako, na primer, koristite MySQL i malo MSSQL, ili vam je potrebno da se povežete sa Oracle bazom, onda nećete moći da koristite iste drajvere. Moraćete da naučite potpuno nov API za svaku bazu podataka &mdash; a to je prilično apsurdno.

Kao dodatna napomena u vezi native drivers, mysql ekstenzija za PHP više nije u aktivnom razvoju, a zvanični status od verzije PHP 5.4.0 je "Dugoročna zastarelost". To znači da će biti uklonjena u narednih nekoliko verzija, tako da će do verzije PHP 5.6 (ili šta god bude usledilo posle 5.5) verovatno biti uklonjena. AKo koristite `mysql_connect()` i `mysql_query()` u aplikacijama onda ćete u nekom momentu biti prinuđeni da prepravite kod, tako da je najbolja opcija da zamenite korišćenje mysql sa mysqli ili PDO u vašim aplikacijama u skladu sa sopstvenim tempom razvoja da ne biste morali posle da žurite. _Ako počinjete od početka onda apsolutno nemojte koristiti mysql ekstenziju: koristite [MySQLi ekstenziju][mysqli], ili PDO._

* [PHP: Biranje API-ja za MySQL](http://php.net/manual/en/mysqlinfo.api.choosing.php)

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
ie. set to NULL.  If you don't do this explicitly, PHP will automatically close the connection when your script ends
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
