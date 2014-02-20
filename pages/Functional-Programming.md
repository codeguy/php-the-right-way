---
layout: page
title: Programmation fonctionnelle en PHP
---

# Programmation fonctionnelle en PHP

PHP supporte les fonctions d'ordre supérieur, c'est-à-dire les fonctions qui peuvent être définies en tant que variable.
 Les fonctions internes et définies par l'utilisateur peuvent être référencées par une variable et être ainsi 
invoquées dynamiquement. Les fonctions peuvent être passées en tant qu'argument à d'autres fonctions et une fonction 
peut retournée une autre fonction.

La récursivité, qui est une démarche permettant à une fonction de s'appeler elle-même, est supportée par le language 
mais PHP s'attarde le plus souvent sur la partie itératif.

Les fonctions anonymes avec le support des fermetures (closures en anglais) sont présentes dans PHP depuis la version 
5.3 (2009).

PHP 5.4 a rajouté la possibilité de lier les closures à la portée d'un objet et aussi d'améliorer le support pour les 
fonctions de rappel de façon à ce qu'elles puissent être utilisées de façon interchangeable avec les fonctions 
anonymes dans la plupart des cas.

L'usage le plus courant des fonctions d'ordre supérieur est lors de l'implémentation du motif de conception "Strategy". 
La fonction interne `array_filter` demande en entrée à la fois un tableau de données et une fonction (la fonction de 
rappel) utilisé comme fonction de filtrage sur chacun des éléments du tableau.


{% highlight php %}
<?php
$input = array(1, 2, 3, 4, 5, 6);

// Creation et assignation d'une fonction anonyme
$filter_even = function($item) {
    return ($item % 2) == 0;
};

// la fonction array_filter accepte à la fois le tableau et la fonction
$output = array_filter($input, $filter_even);

// La fonction n'a pas besoin d'être assignée à une variable. Ceci est valide aussi:
$output = array_filter($input, function($item) {
    return ($item % 2) == 0;
});

print_r($output);
{% endhighlight %}

Une closure est une fonction anonyme qui peut accéder aux variables déclarées en dehors de sa portée sans utiliser de 
variables globales. Théoriquement, une closure est une fonction avec un certain nombre d'arguments "fermés" par 
l'environnement lorsqu'elle est définie. Les closures peuvent outrepasser certaines restrictions sur les portées des 
variables de façon élégante.

Dans l'exemple ci-dessous, nous utilisons des closures afin de définir une fonction retournant une unique fonction de 
filtrage pour `array_filter` à partir d'un ensemble de fonctions de filtrage.

{% highlight php %}
<?php
/**
 * Créer une fonction de filtrage anonyme acceptant des éléments > $min
 *
 * Retourne un ensemble de valeurs "plus grand que $min"
 */
function criteria_greater_than($min)
{
    return function($item) use ($min) {
        return $item > $min;
    };
}

$input = array(1, 2, 3, 4, 5, 6);

// Utilisation d'array_filter sur une entrée associée à la fonction de filtrage
$output = array_filter($input, criteria_greater_than(3));

print_r($output); // valeurs > 3
{% endhighlight %}

Chaque fonction de filtrage dans cet ensemble n'accepte que les éléments plus grand qu'une valeur minimum. Le filtre 
retourné par `criteria_greater_than` est une closure avec l'argument `$min` "capturé" dans sa portée (passé en argument 
lors de l'appel de `criteria_greater_than`).

La liaison statique (_early binding_ en anglais) est utilisée par défaut lors de l'import de `$min` dans la fonction 
créée. Les véritables closures avec la liaison dynamique (`late binding` en angais) doivent utiliser une référence 
lors de l'import. Imaginer une bibliothèque de validation d'entrée ou de templating, où la fermeture est définie pour 
capturer les variables dans sa portée afin de pouvoir y accéder plus tard quand la fonction anonyme sera évaluée.

* [Plus de détails sur les fonctions anonymes][anonymous-functions]
* [Plus de détails sur les RFC "closures"][closures-rfc] (en)
* [Plus de détails à propos des fonctions invoquées dynamiquement avec  `call_user_func_array`][call-user-func-array]

[anonymous-functions]: http://www.php.net/manual/fr/functions.anonymous.php
[call-user-func-array]: http://php.net/manual/fr/function.call-user-func-array.php
[closures-rfc]: https://wiki.php.net/rfc/closures
