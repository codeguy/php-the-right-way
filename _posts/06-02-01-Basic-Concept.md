---
title: Concepts de base
isChild: true
---

## Concepts de base {#concepts_de_base_title}

Nous pouvons démontrer le concept avec un exemple tout bête.

Imaginons que nous ayons une classe `Database` qui exige un adaptateur (adapter en anglais) pour communiquer avec la 
base de données. Nous instantions l'adaptateur à l'intérieur du constructeur et créeons une dépendance forte. Cela 
rend les tests compliqués étant donné que la classe `Database` est fortement couplée à l'adaptateur.

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

Ce code peut être refactorisé pour utiliser l'injection de dépendance et ainsi délier l'adaptateur de la classe.

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

Maintenant nous fournissons à la classe `Database` les dépendances nécessaires en argument au lieu de les créer nous 
même. Nous pouvons même créer une méthode qui accepterait les paramètres des dépendances afin de les fixer nous même, 
ou si la propriété `$adapter` était `public`, nous pourrions la définir directement.
