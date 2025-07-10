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

Nehmen wir an, ein PHP-Skript erhält eine numerische ID als Abfrageparameter. Diese ID soll verwendet werden, um einen Benutzerdatensatz aus einer Datenbank abzurufen. Folgendermaßen solle man es **nicht** machen:

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

Das ist schrecklicher Code. Sie fügen einen rohen Abfrage-Parameter in eine SQL-Abfrage ein.
Das führt im Handumdrehen zu Hackerangriffen, die sich [SQL-Injection][SQL Injection] nennen.
Stell Dir vor, ein Hacker übergibt einen erfinderischen `id` -Parameter, indem er eine URL wie `http://domain.com/?id=1%3BDELETE+FROM+users` aufruft.
Dadurch wird die Variable `$_GET['id']` auf `1;DELETE
FROM users` gesetzt, was alle Ihre Benutzer löscht!
Du solltest stattdessen die ID-Eingabe mit PDO-gebundenen Parametern bereinigen.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT); // <-- filter your data first (see [Data Filtering](#data_filtering)), especially important for INSERT, UPDATE, etc.
$stmt->bindParam(':id', $id, PDO::PARAM_INT); // <-- Automatically sanitized for SQL by PDO
$stmt->execute();
{% endhighlight %}

Dies ist der korrekte Code. Er verwendet einen gebundenen Parameter in einer PDO-Anweisung.
Dies verhindert den Eintrag der Fremdeingabe-ID in die Datenbank und schützt so vor potenziellen SQL-Injection-Angriffen.

Bei Schreibvorgängen wie INSERT oder UPDATE ist es besonders wichtig, zunächst [die Daten  zu filtern](#data_filtering) und für andere Zwecke (z. B. Entfernung von HTML-Tags, JavaScript usw.) zu bereinigen.
PDO bereinigt die Daten nur für SQL, nicht für Deine Anwendung.

* [Learn about PDO][pdo]

Beachte auch, dass Datenbankverbindungen Ressourcen verbrauchen. 
Es kam schon vor, dass Ressourcen erschöpft waren, wenn Verbindungen nicht implizit geschlossen wurden. Dies war jedoch in anderen Sprachen häufiger der Fall.
Mit PDO kannst Du die Verbindung implizit schließen, indem Du das Objekt destroyst und sicherstellst, dass alle verbleibenden Referenzen darauf gelöscht, d. h. auf NULL gesetzt werden. 
Wenn Du das nicht explizit machst, schließt PHP die Verbindung automatisch, wenn Dein Skript endet – es sei denn, Du verwendest persistente Verbindungen.

* [Learn about PDO connections]


[pdo]: https://www.php.net/pdo
[SQL Injection]: https://web.archive.org/web/20210413233627/http://wiki.hashphp.org/Validation
[Learn about PDO connections]: https://www.php.net/pdo.connections
