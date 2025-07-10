---
isChild: true
title:   PDO-Erweiterung
anchor:  pdo_extension
---

## PDO-Erweiterung {#pdo_extension_title}

[PDO] ist eine Biblieothek zur abstrakten Datenbankverbindung, welche eine gemeinsame Schnittstelle für die Kommunikation mit vielen verschiedenen Datenbanken bietet und seit Version 5.1.0 bestandteil von PHP ist.
Beispielsweise können Sie im Wesentlichen identischen Code für die Schnittstelle zu MySQL oder SQLite verwenden:


{% highlight php %}
<?php
// PDO + MySQL
$pdo = new PDO('mysql:host=example.com;dbname=database', 'user', 'password');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);

// PDO + SQLite
$pdo = new PDO('sqlite:/path/db/foo.sqlite');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);
{% endhighlight %}

PDO übersetzt nicht Ihre SQL-Abfragen und emuliert auch keine fehlenden Funktionen. Es dient lediglich zur Verbindung mit verschiedenen Datenbanktypen mit derselben API.

Noch wichtiger ist, dass Du mit `PDO` fremde Eingaben (z. B. IDs) sicher in Deine SQL-Abfragen einfügen kannst, ohne Dir über SQL-Injection-Angriffe auf die Datenbank Gedanken machen zu müssen. Dies ist mithilfe von PDO-Anweisungen und gebundenen Parametern möglich.

Nehmen wir an, ein PHP-Skript erhält eine numerische ID als Abfrageparameter. Diese ID soll verwendet werden, um einen Benutzerdatensatz aus einer Datenbank abzurufen. Folgendermassen solle man es **nicht** machen:

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

This is terrible code. You are inserting a raw query parameter into a SQL query. This will get you hacked in a
heartbeat, using a practice called [SQL Injection]. Just imagine if a hacker passes in an inventive `id` parameter by
calling a URL like `http://domain.com/?id=1%3BDELETE+FROM+users`. This will set the `$_GET['id']` variable to `1;DELETE
FROM users` which will delete all of your users! Instead, you should sanitize the ID input using PDO bound parameters.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT); // <-- filter your data first (see [Data Filtering](#data_filtering)), especially important for INSERT, UPDATE, etc.
$stmt->bindParam(':id', $id, PDO::PARAM_INT); // <-- Automatically sanitized for SQL by PDO
$stmt->execute();
{% endhighlight %}

This is correct code. It uses a bound parameter on a PDO statement. This escapes the foreign input ID before it is
introduced to the database preventing potential SQL injection attacks.

For writes, such as INSERT or UPDATE, it's especially critical to still [filter your data](#data_filtering) first and sanitize it for other things (removal of HTML tags, JavaScript, etc).  PDO will only sanitize it for SQL, not for your application.

* [Learn about PDO][pdo]

You should also be aware that database connections use up resources and it was not unheard-of to have resources
exhausted if connections were not implicitly closed, however this was more common in other languages. Using PDO you can
implicitly close the connection by destroying the object by ensuring all remaining references to it are deleted, i.e.
set to NULL. If you don't do this explicitly, PHP will automatically close the connection when your script ends -
unless of course you are using persistent connections.

* [Learn about PDO connections]


[pdo]: https://www.php.net/pdo
[SQL Injection]: https://web.archive.org/web/20210413233627/http://wiki.hashphp.org/Validation
[Learn about PDO connections]: https://www.php.net/pdo.connections
