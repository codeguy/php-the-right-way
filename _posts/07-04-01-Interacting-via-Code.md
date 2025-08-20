---
isChild: true
title:   Interaktion mit Datenbanken
anchor:  databases_interacting
---

_____________________________________________________________

## Interaktion mit Datenbanken {#databases_interacting_title}

Wenn Entwickler anfangen, PHP zu lernen, vermischen sie häufig ihre Datenbankinteraktion mit ihrer 
Präsentationslogik und verwenden Code, der beispielsweise so aussehen könnte:

{% highlight php %}
<ul>
<?php
foreach ($db->query('SELECT * FROM table') as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>";
}
?>
</ul>
{% endhighlight %}

Dies ist aus vielerlei Gründen eine schlechte Vorgehensweise, vor allem, weil es schwierig zu debuggen, 
zu testen und zu lesen ist und weil es zu einer Ausgabe vieler Felder kommt, wenn man hier keine Limits festlegt.

Zwar gibt es hierfür viele andere Lösungen – je nachdem, ob Sie [OOP](/#object-oriented-programming) oder [funktionale Programmierung](/#functional-programming) bevorzugen –, doch muss es ein gewisses Element der Trennung geben.

Betrachte den grundlegendsten Schritt:

{% highlight php %}
<?php
function getAllFoos($db) {
    return $db->query('SELECT * FROM table');
}

$results = getAllFoos($db);
foreach ($results as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>"; // BAD!!
}
{% endhighlight %}

Das ist ein guter Anfang. Speichere diese beiden Elemente in zwei verschiedene Dateien 
und Du erhältst eine saubere Trennung.

Erstelle eine Klasse, in die Du diese Methode einfügst, und Du hast ein „Modell“. Erstelle eine einfache 
`.php`-Datei, in welche Du die Präsentationslogik einfügst, und Du erhälst eine „View (Ansicht)“, 
die fast [MVC] entspricht – einer gängigen OOP-Architektur für die meisten [Frameworks](/#frameworks).

**foo.php**

{% highlight php %}
<?php
$db = new PDO('mysql:host=localhost;dbname=testdb;charset=utf8mb4', 'username', 'password');

// Make your model available
include 'models/FooModel.php';

// Create an instance
$fooModel = new FooModel($db);
// Get the list of Foos
$fooList = $fooModel->getAllFoos();

// Show the view
include 'views/foo-list.php';
{% endhighlight %}


**models/FooModel.php**

{% highlight php %}
<?php
class FooModel
{
    public function __construct(protected PDO $db)
    {
    }

    public function getAllFoos() {
        return $this->db->query('SELECT * FROM table');
    }
}
{% endhighlight %}

**views/foo-list.php**

{% highlight php %}
<?php foreach ($fooList as $row): ?>
    <li><?= $row['field1'] ?> - <?= $row['field1'] ?></li>
<?php endforeach ?>
{% endhighlight %}

Dies entspricht im Wesentlichen dem, was die meisten modernen Frameworks tun, wenn auch etwas manueller. 
Du musst dies möglicherweise nicht jedes Mal tun, aber eine zu starke Vermischung von Präsentationslogik
und Datenbankinteraktion kann ein echtes Problem darstellen, wenn Du Deine Anwendung [Unit-Tests](/#unit-testing)
unterziehen möchtest.

[MVC]: https://code.tutsplus.com/tutorials/mvc-for-noobs--net-10488
