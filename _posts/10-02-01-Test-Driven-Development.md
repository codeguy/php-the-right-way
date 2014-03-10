---
title: Développement dirigé par les tests
isChild: true
---

## Développement dirigé par les tests (TDD) {#développement_dirigé_par_les_tests_title}

Citation tirée de [Wikipedia](http://fr.wikipedia.org/wiki/Test_Driven_Development):

> Le Test Driven Development (TDD) ou en français développement piloté par les tests est une technique de développement 
> de logiciel qui préconise d'écrire les tests unitaires avant d'écrire le code source d'un logiciel.

Il existe différents types de test que vous pouvez faire sur votre application.

### Test unitaire

Le test unitaire est une approche dans la programmation qui s'assure que les fonctions, les classes et les méthodes 
écrites fonctionnent comme prévues tout le long du cycle de développement. En vérifiant les valeurs en entrée et en sortie 
des différentes fonctions, vous vous assurez du bon fonctionnement de la logique interne. En utilisant l'injection de 
dépendances et en construisant des classes [mocks](http://fr.wikipedia.org/wiki/Mock_%28programmation_orient%C3%A9e_objet%29) 
et des classes [stubs](http://fr.wikipedia.org/wiki/Stub), vous pouvez vérifier que les dépendances sont correctement 
utilisées pour une meilleur couverture du code.

Quand vous créez une classe ou une fonction, vous devriez aussi créer un test unitaire couvrant l'ensemble des états 
possibles. À un niveau très basique, vous devriez vous assurer que les changements effectués sur une fonction ou une 
classe ne modifieront pas le comportement attendu de l'application. La seule alternative pour les tests unitaires serait 
l'utilisation de la fonction `var_dump()` ce qui n'est pas viable que ce soit pour une petite ou une grande application.

L'autre cas d'utilisation des tests unitaires est la contribution à la communauté open-source. Vous pouvez ainsi 
écrire un test montrant une fonctionnalité boguée puis la réparer en montrant cette fois qu'elle passe le test. Les 
patches auront plus de chances d'être acceptés de cette manière. Si vous travaillez sur un projet acceptant les 
"pull requests" alors vous devriez exiger un (ou plusieurs) test avant chaque patch.

[PHPUnit](http://phpunit.de) est le framework de test standard (de facto) pour écrire des tests unitaires pour des 
applications PHP mais il existe d'autres alternatives :

* [atoum](https://github.com/atoum/atoum)
* [Enhance PHP](https://github.com/Enhance-PHP/Enhance-PHP)
* [PUnit](http://punit.smf.me.uk/)
* [SimpleTest](http://simpletest.org)


### Test d'intégration

Citation tirée de [Wikipedia](http://fr.wikipedia.org/wiki/Test_d%27int%C3%A9gration):

> Un test d'intégration est un test qui se déroule dans une phase d'un projet informatique suivant les tests unitaires. 
> Il consiste, une fois que les développeurs ont chacun validé leurs développements ou leurs correctifs, 
> à regrouper leurs modifications ensemble dans le cadre d'une livraison.

Beaucoup des outils utilisés pour les tests unitaires peuvent aussi l'être pour les tests d'intégration étant donné 
qu'ils partagent les mêmes principes.


### Test fonctionnel

Les tests fonctionnels servent à vérifier que chaque fonction est correctement implémentée, c'est-à-dire conforme aux 
exigences et aux spécifications. On vérifie chaque fonction indépendamment les unes des autres, 
généralement en terme d'entrées/sorties.

Une autre variante connue est le test d'acceptation qui lui vérifie que le produit répond aux attentes de l'utilisateur, 
c'est-à-dire qu'il est conforme aux besoins et au cahier des charges. On vérifie le produit dans son ensemble, 
généralement avec des scénarios réalistes d'utilisation.

#### Outils pour les tests fonctionnels

* [Selenium](http://seleniumhq.com)
* [Mink](http://mink.behat.org)
* [Codeception](http://codeception.com) est un framework de test complet incluant aussi des outils pour les tests d'acceptance
* [Storyplayer](http://datasift.github.io/storyplayer) est un framework de test complet qui inclue un support pour 
créer et détruire des environnements de test à la demande
