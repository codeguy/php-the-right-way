---
isChild: true
title: Osnovni koncept
anchor: basic_concept
---

## Osnovni koncept {#basic_concept_title}

Možemo demonstrirati koncept sa jednostavnim, a ipak naivnim primerom.

Ovde imamo klasu `Database` koja zahteva adapter da bi komunicirala sa bazom podataka. Instancujemo adapter
u konstruktoru i kreiramo čvrstu zavisnost. Ovo čini testiranje teškim i znači da je klasa `Database`
usko povezana sa adapterom.

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

Ovaj kod se može refaktorisati da koristi Dependency Injection i prema tome olabavi zavisnost.

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

Sada klasi `Database` mi dajemo njenu zavisnost radije nego da ona to sama kreira. Mogli smo čak da napravimo
metod koji bi prihvatao argument zavisnosti i na taj način je postavljao, ili da je polje `$adapter` bilo
javno mogli smo da je postavimo direktno.
