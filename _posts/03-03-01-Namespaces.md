---
title: Les espaces de noms
isChild: true
---

## Les espaces de noms {#les_espaces_de_noms_title}

Comme mentionné plus haut, la communauté PHP a beaucoup de développeurs créant beaucoup de code. Cela signifie que le 
code d'une bibliothèque PHP peut utiliser le même nom de classe qu'une autre bibliothèque. Quand plusieurs bibliothèques 
sont utilisés dans le même espace de noms, il peut y avoir des collisions de noms ce qui pose problème.

_Les espaces de noms_ résolvent ce problème. Comme décrit dans le manuel de référence PHP, les espaces de noms peuvent 
être comparés aux répertoires d'un système de fichiers. De même, 2 classes PHP peuvent avoir le même nom si elles sont 
créées dans des espaces de noms distincts.

Il est important pour vous que vous utilisiez les espaces de noms dans votre code. Ainsi vous et d'autres développeurs 
pourrez utiliser ce code sans crainte d'entrer en collision avec d'autres bibliothèques.

Une bonne manière d'utiliser les espaces de noms se trouve dans [PSR-0][psr0] qui vise à fournir une fichier standard, 
une convention pour les classes et les espaces de noms pour permettre d'avoir du code "plug-and-play".

En décembre 2013, le PHP-FIG a crée un nouveau standard d'autochargement: [PSR-4][psr4], qui un jour va probablement 
remplacer PSR-0. Pour le moment, les 2 sont utilisables étant donné que PSR-4 ne tourne que sur PHP 5.3+ et que 
beaucoup de projets implémente PSR-0. Si vous allez utiliser un standard d'autochargement pour une nouvelle 
application ou un paquetage alors vous devriez certainement voir du côté de PSR-4.

* [En savoir plus sur les espaces de noms][namespaces]
* [En savoir plus sur PSR-0][psr0]
* [En savoir plus sur PSR-4][psr4]

[namespaces]: http://php.net/manual/fr/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
