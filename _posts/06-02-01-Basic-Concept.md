---
title:   Grundkonzept
isChild: true
anchor:  basic_concept
---

## Grundkonzept {#basic_concept_title}


Wir können das Konzept anhand eines einfachen, aber naiven Beispiels demonstrieren.

Hier haben wir eine `Database`-Klasse, die einen Adapter benötigt, um mit der Datenbank zu kommunizieren. Wir instanziieren den Adapter im Konstruktor und erstellen eine fest Abhängigkeit. Dies erschwert das Testen und bedeutet, dass die `Database`-Klasse sehr eng an den Adapter gekoppelt ist.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct()
    {
        $this->adapter = new MySqlAdapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

Dieser Code kann umgestaltet werden, um Dependency Injection zu verwenden und so die Abhängigkeit zu lockern. Hier injizieren wir die Abhängigkeit in einen Konstruktor und nutzen die [constructor property promotion][php-constructor-promotion], sodass sie als Eigenschaft in der gesamten Klasse verfügbar ist:

{% highlight php %}
<?php
namespace Database;

class Database
{
    public function __construct(protected MySqlAdapter $adapter)
    {
    }
}

class MysqlAdapter {}
{% endhighlight %}

Jetzt geben wir der `Database`-Klasse ihre Abhängigkeit, anstatt sie selbst zu erstellen. Wir könnten sogar eine Methode erstellen, die ein Argument der dependency akzeptiert und es entsprechend festlegt. Wenn die `$adapter`-Eigenschaft `public` wäre, könnten wir sie direkt festlegen.

[php-constructor-promotion]: https://www.php.net/manual/en/language.oop5.decon.php#language.oop5.decon.constructor.promotion
