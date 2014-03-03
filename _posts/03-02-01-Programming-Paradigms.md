---
title: Les paradigmes de programmation
isChild: true
---

## Les paradigmes de programmation {#les_paradigmes_de_programmation_title}

Le PHP est un langage flexible, dynamique supportant une variété de technique de programmation. Il a énormément évolué au 
cours des années en ajoutant notamment un solide modèle orienté objet avec PHP 5.0 (2004), les fonctions anonymes et 
les espaces de noms avec PHP 5.3 (2009) et les "traits" avec PHP 5.4 (2012).

### Programmation orientée objet

Le PHP a un ensemble très complet de principe de programmation orienté objet en prenant en compte le support des classes, 
des classes abstraites, des interfaces, de l'héritage, des constructeurs, du clonage, des exceptions, etc. 

* [En savoir plus sur l'orienté objet][oop]
* [En savoir plus sur les "traits"][traits]

### Programmation fonctionnelle

Le PHP supporte les fonctions de "première classe" ce qui signifie qu'une fonction peut être affectée à une variable. 
Les fonctions définies par l'utilisateur ainsi que les fonctions intégrées au langage peuvent être référençées par une 
variable et invoquées dynamiquement. Les fonctions peuvent être passés en tant qu'argument à d'autres fonctions (on 
parle alors de fonctions d'ordre supérieure) et elles peuvent retourner d'autres fonctions.

La récursion est une fonctionnalité permettant à une fonction de s'appeler elle-même, cependant la plupart du code 
PHP se concentre sur l'itération.

Les nouvelles fonctions anonymes avec le support pour les fermetures (closures en anglais) sont présentes depuis 
PHP 5.3 (2009).

Le PHP 5.4 a rajouté la possibilité de lier les fermetures à la portée d'un objet et a aussi amélioré le support pour 
les "callables" de façon à ce qu'elles puissent être utilisés aussi bien avec les fonctions anonymes (dans la plupart des 
cas).

* Continuer la lecture sur la [programmation fonctionnelle en PHP](/php-the-right-way/pages/Functional-Programming.html)
* [En savoir plus sur les fonctions anonymes][anonymous-functions]
* [En savoir plus sur la classe Closure][closure-class]
* [Plus de détails sur Closures RFC][closures-rfc]
* [En savoir plus sur les callables][callables]
* [En savoir plus sur les fonctions invoquées dynamiquement avec `call_user_func_array`][call-user-func-array]

### Méta-programmation

Le PHP supporte différentes formes de méta-programmation à travers des mécanismes tel que l'API Reflection et les 
méthodes magiques. Il existe un grand nombre de méthodes magiques comme `__get()`, `__set()`, `__clone()`, 
`__toString()`, `__invoke()`, etc permettant aux développeurs d'interférer avec le comportement d'une classe. Les 
développeurs Ruby répètent souvent que le PHP manque de `method_missing` mais cela est pourtant disponible avec 
`__call()` and `__callStatic()`.

* [En savoir plus sur les méthodes magiques][magic-methods]
* [En savoir plus sur l'API Reflection][reflection]

[namespaces]: http://php.net/manual/fr/language.namespaces.php
[overloading]: http://php.net/manual/fr/language.oop5.overloading.php
[oop]: http://www.php.net/manual/fr/language.oop5.php
[anonymous-functions]: http://www.php.net/manual/fr/functions.anonymous.php
[closure-class]: http://php.net/manual/fr/class.closure.php
[callables]: http://php.net/manual/fr/language.types.callable.php
[magic-methods]: http://php.net/manual/fr/language.oop5.magic.php
[reflection]: http://www.php.net/manual/fr/intro.reflection.php
[traits]: http://www.php.net/traits
[call-user-func-array]: http://php.net/manual/fr/function.call-user-func-array.php
[closures-rfc]: https://wiki.php.net/rfc/closures
