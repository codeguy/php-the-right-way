---
isChild: true
title:   PDO Extension
anchor:  pdo_extension
---

## PDO Extension {#pdo_extension_title}

[PDO] is a database connection abstraction library &mdash; built into PHP since 5.1.0 &mdash; that provides a common
interface to talk with many different databases. For example, you can use basically identical code to interface with
MySQL or SQLite:

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

PDO will not translate your SQL queries or emulate missing features; it is purely for connecting to multiple types of
database with the same API.

More importantly, `PDO` allows you to safely inject foreign input (e.g. IDs) into your SQL queries without worrying
about database SQL injection attacks.
This is possible using PDO statements and bound parameters.

Let's assume a PHP script receives a numeric ID as a query parameter. This ID should be used to fetch a user record
from a database. This is the `wrong` way to do this:

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
