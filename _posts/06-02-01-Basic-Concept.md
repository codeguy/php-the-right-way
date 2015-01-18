---
isChild: true
title: Osnovni koncept
anchor: basic_concept
---

## Osnovni koncept {#basic_concept_title}

Ovaj koncept se može demonstrirati jednim jednostavnim, a opet naivnim primerom.

Imamo klasu `Database` koja zahteva adapter kako bi komunicirala sa bazom podataka. Instanciranjem adaptera
direktno u konstruktoru kreiramo čvrstu zavisnost. Ovo znatno otežava testiranje i čini klasu `Database`
usko vezanu za adapter.

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

Ovaj kôd se može refaktorisati na način da koristi Dependency Injection, kako bi "olabavio" zavisnost.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct(MySqlAdapter $adapter)
    {
        $this->adapter = $adapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

Sada klasi `Database` dostavljamo njenu zavisnost umesto da je ona sama kreira. Mogli smo da napravimo i
metod koji bi prihvatao argument zavisnosti i na taj način je postavljao, ili da je polje `$adapter` bilo
javno, mogli smo da je postavimo direktno.
