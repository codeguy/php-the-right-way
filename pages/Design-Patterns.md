---
layout: page
title: Motif de conception
---

# Motif de conception

Il existe de nombreuses façons de structurer votre code pour votre application web et vous pouvez passer plus ou moins 
de temps à concevoir son architecture. Mais il est de bonne augure de suivre les motifs de conception (pattern en 
anglais) les plus courants car ils permettrent de faciliter la maintenance de votre code 
et de le rendre plus facile à lire pour les autres.

* [Les patterns architecturaux sur Wikipédia](https://fr.wikipedia.org/wiki/Patron_d%27architecture)
* [Les patrons de conceptions sur Wikipédia](https://fr.wikipedia.org/wiki/Patron_de_conception)

## Fabrique

Un des motifs de conceptions les plus utilisés est le motif "fabrique". Dans ce pattern, on délègue la création des 
objets que vous souhaitez utiliser à une classe précise. Prenez l'exemple suivant :

{% highlight php %}
<?php
class Automobile
{
    private $vehicle_make;
    private $vehicle_model;

    public function __construct($make, $model)
    {
        $this->vehicle_make = $make;
        $this->vehicle_model = $model;
    }

    public function get_make_and_model()
    {
        return $this->vehicle_make . ' ' . $this->vehicle_model;
    }
}

class AutomobileFactory
{
    public static function create($make, $model)
    {
        return new Automobile($make, $model);
    }
}

// La fonction create de la fabrique nous permet de créer une voiture
$veyron = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($veyron->get_make_and_model()); // affiche "Bugatti Veyron"
{% endhighlight %}

Ce code utilise une fabrique afin de créer l'objet Automobile. Il y a 2 bénéfices à construire votre code de cette 
façon; la première est que si vous souhaitez changer, renommer ou remplacer votre classe Automobile plus tard, vous 
n'aurez qu'à modifier le code à l'intérieur de la fabrique au lieu de le faire à chaque fois que cette classe est 
appelée dans votre projet. Le second bénéfice est que si la création d'un objet est une tâche compliquée, vous pouvez 
réaliser tout le travail dans un seul endroit au lieu de vous répéter à chaque fois que vous voulez instancier une 
classe.

L'utilisation d'une "fabrique" n'est pas toujours nécéssaire (ou utile). Le code d'exemple utilisé ici est tellement 
simple qu'une fabrique ne rajoute que plus de complexité inutilement. Cependant si vous réalisez un gros projet alors 
l'utilisation d'une fabrique peut vous sauver de beaucoup d'ennuis.

* [Le pattern fabrique sur Wikipédia][1]

## Singleton

Quand on développe des applications web il arrive souvent que l'on souhaite n'avoir accès qu'à une seule et même 
instance d'une classe. Le motif singleton permet de réaliser cela.

{% highlight php %}
<?php
class Singleton
{
    /**
     * Retourne l'instance *Singleton* de cette classe.
     *
     * @staticvar Singleton $instance L'instance *Singleton* de la classe.
     *
     * @return Singleton L'instance *Singleton*.
     */
    public static function getInstance()
    {
        static $instance = null;
        if (null === $instance) {
            $instance = new static();
        }

        return $instance;
    }

    /**
     * Constructeur non publique afin d'éviter la création d'une nouvelle instance du *Singleton* via l'opérateur `new`
     */
    protected function __construct()
    {
    }

    /**
     * La méthode clone est privée afin d'empêcher le clonage de l'instance *Singleton*.
     *
     * @return void
     */
    private function __clone()
    {
    }

    /**
     * La méthode de désérialisation est privée afin d'empêcher le clonage de l'instance *Singleton*.
     *
     * @return void
     */
    private function __wakeup()
    {
    }
}

class SingletonChild extends Singleton
{
}

$obj = Singleton::getInstance();
var_dump($obj === Singleton::getInstance());             // bool(true)

$anotherObj = SingletonChild::getInstance();
var_dump($anotherObj === Singleton::getInstance());      // bool(false)

var_dump($anotherObj === SingletonChild::getInstance()); // bool(true)
{% endhighlight %}

Le code ci-dessus implémente le motif singleton en utilisant une 
[variable *statique*](http://php.net/language.variables.scope#language.variables.scope.static) et la methode statique 
`getInstance()`.
Notez ceci:

* Le constructeur [`__construct`](http://php.net/language.oop5.decon#object.construct) est déclaré en tant que méthode 
"protected" afin d'éviter la création d'une nouvelle instance en utilisant l'opérateur `new`.
* La méthode magique [`__clone`](http://php.net/language.oop5.cloning#object.clone) est déclarée privée afin d'éviter 
le clonage d'une instance de cette classe via l'opérateur [`clone`](http://php.net/language.oop5.cloning).
* La méthode magique [`__wakeup`](http://php.net/language.oop5.magic#object.wakeup) est déclarée privée afin d'éviter 
la désérialisation d'une instance de cette classe 
via la fonction globale [`unserialize()`](http://php.net/function.unserialize).
* Une nouvelle instance est créée via [liaison dynamique](http://php.net/language.oop5.late-static-bindings) dans la 
méthode de création statique `getInstance()` via le mot-clé `static`.
Cela permet d'hériter de la classe `Singleton` dans l'exemple.

Le motif Singleton est utile quand on a besoin de s'assurer que seule une instance de classe est requise pour 
l'ensemble du cycle de vie d'une application web. Cela arrive typiquement lorsque l'on a des objets globaux (tel 
qu'une classe de configuration par ex.) ou une ressource partagée (comme un file d'évènement).

Vous devriez faire attention lorsque vous utilisez le motif Singleton étant donné qu'il induit un état global à votre 
application reduisant ainsi sa testabilité. Dans beaucoup de cas, l'injection de dépendances peut (et devrait) être 
utilisé à la place d'un singleton. Utiliser l'injection de dépendance signifie que nous n'introduisons pas de couplage 
inutile dans la conception de notre application car l'objet utilisant une ressource partagée ou globale ne nécéssite 
aucune connaissance de la classe concrète.

* [Le pattern singleton sur Wikipédia][2]

## Stratégie

Avec le motif stratégie vous encapsulez une famille spécifique d'algorithmes permettant à la classe cliente 
responsable de l'instanciation d'un algorithme particulier de ne pas avoir connaissance de son implémentation. 
Il existe différentes variantes du motif stratégie, la plus simple se trouvant ci-dessous:

Ce premier bout de code expose une famille d'algorithmes; vous pourriez avoir besoin d'un tableau sérialisé, d'objets 
JSON ou bien juste d'un tableau de données:
{% highlight php %}
<?php

interface OutputInterface
{
    public function load();
}

class SerializedArrayOutput implements OutputInterface
{
    public function load()
    {
        return serialize($arrayOfData);
    }
}

class JsonStringOutput implements OutputInterface
{
    public function load()
    {
        return json_encode($arrayOfData);
    }
}

class ArrayOutput implements OutputInterface
{
    public function load()
    {
        return $arrayOfData;
    }
}
{% endhighlight %}

En encapuslant les algorithmes ci-dessus vous simplifiez l'utilisation de ce code par d'autres développeurs, ces derniers 
pouvant ajouter de nouveaux types sans affecter le code client.

Vous verrez comment chaque classe de 'sortie' concrète implémente l'interface OutputInterface - cela sert 2 buts, 
premièrement, cela fournit un contrat simple qui doit être respecté par toutes les implémentations. Deuxièmement, en 
implémentant une interface commune vous verrez dans la prochaine section que vous pouvez utiliser le 
[typage objet implicite](http://php.net/manual/fr/language.oop5.typehinting.php) pour vous assurer que le client qui 
est en train d'utiliser ces comportements est du bon type, dans notre cas 'OutputInterface'.

Le prochain bout de code montre comment une classe cliente peut utiliser un des algorithmes et même mieux, fixer le 
comportement requis à l'exécution:
{% highlight php %}
<?php

class SomeClient
{
    private $output;

    public function setOutput(OutputInterface $outputType)
    {
        $this->output = $outputType;
    }

    public function loadOutput()
    {
        return $this->output->load();
    }
}
{% endhighlight %}

La classe cliente ci-dessus a une propriété privée qui doit être fixée à l'exécution et doit être de type 
'OutputInterface'. Une fois que cette propriété est fixée, un appel à loadOutput() va appelée la méthode load() de 
la classe concrète du type de sortie demandé.
{% highlight php %}
<?php

$client = new SomeClient();

// Besoin d'un tableau ?
$client->setOutput(new ArrayOutput());
$data = $client->loadOutput();

// Besoin d'un objet JSON ?
$client->setOutput(new JsonStringOutput());
$data = $client->loadOutput();

{% endhighlight %}

* [Le pattern stratégie sur Wikipédia][3]

## Contrôleur frontal

Le motif "contrôleur frontal" est utilisé quand vous ne souhaitez qu'un seul point d'entrée pour votre application 
(par ex. index.php) gérant l'ensemble des requêtes. Ce code est responsable du chargement de toutes les dépendances, 
du traitement des requêtes et des réponses envoyées au navigateur. Le contrôleur frontal peut être bénéfique car il 
encourage la modularisation de votre codde et vous donne un accès centralisé pour la gestion de chaque requête (comme 
le nettoyage des données entrées).

* [Le contrôleur frontal sur Wikipédia](https://en.wikipedia.org/wiki/Front_Controller_pattern) (en)

## Modèle-Vue-Contrôleur

Le motif Modèle-Vue-Contrôleur (MVC) et ses variantes HMVC et MVVM vous permettent de découper votre logique de 
vos objets de façon à révéler plus facilement leurs buts. Le modèle sert de couche intermédiaire entre 
l'accès aux données récupérées souvent à partir d'une base de données et leurs utilisations au sein de votre application.
 Les contrôleurs gèrent les requêtes, traitent les données retournées par les modèles et chargent les vues qui seront 
renvoyées aux clients. Et les vues sont des templates (balisage, xml, etc) qui sont renvoyés au navigateur.

Le motif MVC est le motif architectural le plus utilisé parmi 
les différents [frameworks PHP](https://github.com/codeguy/php-the-right-way/wiki/Frameworks).

En apprendre plus à propos de MVC et de ses variantes:
* [MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur)
* [HMVC](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller) (en)
* [MVVM](https://fr.wikipedia.org/wiki/Mod%C3%A8le-Vue-VueMod%C3%A8le)

[1]: https://fr.wikipedia.org/wiki/Fabrique_(patron_de_conception)
[2]: https://fr.wikipedia.org/wiki/Singleton_(patron_de_conception)
[3]: http://fr.wikipedia.org/wiki/Strat%C3%A9gie_(patron_de_conception)
