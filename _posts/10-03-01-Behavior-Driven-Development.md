---
title: Behavior Driven Development
isChild: true
---

## Behavior Driven Development {#behavior_driven_development_title}

Il existe 2 types de développement orienté comportement (BDD en anglais) : SpecBDD et StoryBDD. SpecBDD se concentre les 
aspects techniques du code alors que StoryBDD lui se concentre sur la partie métier, les fonctionnalités apportées ou 
bien encore les interactions. Le PHP possède des frameworks pour ces  types de BDD.

Avec StoryBDD, vous écrivez des histoires "humainement" lisibles qui décrivent le comportement de votre application. 
Ces histoires peuvent ensuite être transformées en tests se lançant sur votre application. Le framework utilisé dans 
les applications PHP pour StoryBDD est Behat qui s'inspire de [Cucumber](http://cukes.info/) pour Ruby et implémente 
le language Gherkin DSL pour décrire les fonctionnalités.

Avec SpecBDD, vous écrivez des spécifications décrivant comment votre code devrait se comporter. Au lieu de tester 
une fonction ou une méthode, vous décrivez comment cette fonction ou méthode devrait s'exécuter. Pour atteindre ce but 
il existe un framework qui s'appelle PHPSpec. Ce framework s'inspire lui aussi d'un projet Ruby, 
[RSpec](http://rspec.info/).

### Liens sur le BDD

* [Behat](http://behat.org/), le framework StoryBDD pour PHP, inspiré de [Cucumber](http://cukes.info/);
* [PHPSpec](http://www.phpspec.net/), le framework SpecBDD pour PHP, inspiré de [RSpec](http://rspec.info/);
* [Codeception](http://www.codeception.com) est un framework de test complet utilisant les principes du BDD.
