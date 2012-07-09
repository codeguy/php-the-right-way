# Databases and PDO

Many times your PHP code will use a database to persist information. If you use a database, use `PDO` to talk with it. PDO is a database abstraction library &mdash; (usually) built into PHP &mdash; that provides a common interface to talk with many different databases.

More importantly, `PDO` allows you to safely inject foreign input (e.g. IDs) into your SQL queries without worrying about database SQL injection attacks. This is possible using PDOStatements and bound parameters.

Let's assume a PHP script receives a numeric ID as a query parameter. This ID should be used to fetch a user record from a database. This is the `wrong` way to do this:

    <?php
    $pdo = new PDO('sqlite:users.db');
    $pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!

This is terrible code. You are inserting a raw query parameter into a SQL query. This will get you hacked in a heartbeat. Instead, you should sanitize the ID input using PDO bound parameters.

    <?php
    $pdo = new PDO('sqlite:users.db');
    $stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
    $stmt->bindParam(':id', filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT), PDO::PARAM_INT);
    $stmt->execute();

This is correct code. It uses a bound parameter on a PDO statement. This escapes the foreign input ID before it is introduced to the database preventing potential SQL injection attacks.

* [Learn about PDO][1]

[Back to Top](#top){.top}

[1]: http://www.php.net/manual/en/book.pdo.php
