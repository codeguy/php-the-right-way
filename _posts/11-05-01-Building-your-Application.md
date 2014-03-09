---
title: Constuire et déployer votre application
isChild: true
---

## Constuire et déployer votre application {#construire_et_déployer_votre_application_title}

Si vous vous retrouvez à faire des changements sur le schéma de la base de données vous-même ou que vous exécutez vos 
tests manuellement avant de mettre à jour vos fichiers (là aussi manuellment), vous devriez sans doute repenser votre 
méthodologie de développement! Avec l'ensemble des étapes manuelles que vous devez réaliser pour déployer une 
nouvelle version de votre application, il y a de fortes chances pour que des erreurs potentiellement fatales viennent 
se glisser durant l'une des étapes. Que ce soit une simple mise à jour, un processus de construction et de déploiement 
voir même une stratégie d'intégration continue, le [moteur de production](http://fr.wikipedia.org/wiki/Moteur_de_production) 
 est votre ami.

Parmi les tâches que vous pourriez vouloir automatiser, vous trouverez:

* le gestionnaire de dépendances
* la compilation, la minification de vos ressources
* l'exécution des tests
* la création de la documentation
* le "packaging"
* le déploiement


### Outil de construction automatique

Les outils de contruction automatique ("build tools" en anglais) peuvent être souvent vus comme un ensemble de scripts 
gérant les tâches les plus répétitives pour le déploiement d'un logiciel. Il ne fait généralement pas parti du logiciel 
en lui-même, agissant ainsi depuis l'extérieur.

Il existe beaucoup d'outils open-source disponible pour vous aider à automatiser la construction de votre application, 
certains étant même écrit en PHP. Cela ne devrait pas vous empêcher de les utiliser, si jamais ils correspondent mieux 
au travail demandé. Voici quelques exemples:

[Phing](http://www.phing.info/) est le moyen le plus facile pour commencer à utiliser le déploiement automatisé avec PHP. 
Avec Phing, vous pouvez contrôler les processus de "packaging", de déploiement et d'exécution de tests à l'aide d'un 
simple fichier XML. Phing (qui est basé sur [Apache Ant](http://ant.apache.org/)) fournit un riche ensemble de tâches 
généralement nécessaire pour installer ou mettre à jour une application web et peut être amélioré avec l'ajout de 
tâches personnalisées, écrit en PHP.

[Capistrano](https://github.com/capistrano/capistrano/wiki) est un système pour les *programmeurs de niveau intermédiaire 
à avancé* pour exécuter des commandes de façon structuré et répétable sur une ou plusieurs machines distantes. Il est 
pré-configuré pour déployer des applications Ruby On Rails, cependant nombreux sont ceux à l'utiliser pour *déployer 
avec succès des applications PHP*. La bonne utilisation de Capistrano dépend de vos connaissances en Ruby et Rake.

Le post du blog de Dave Gardner sur le [déploiement PHP avec Capistrano](http://www.davegardner.me.uk/blog/2012/02/13/php-deployment-with-capistrano/) 
est un bon point de départ pour les développeurs qui seraient intéressés.

[Chef](http://www.opscode.com/chef/) est plus qu'un framework de déploiement basé sur Ruby car il peut aussi générer 
l'ensemble de l'environnement de votre serveur ou de votre machine virtuelle.

Les ressources sur Chef pour les développeurs PHP:

* [Une série en trois parties sur la façon de déployer une application LAMP avec Chef, Vagrant, et EC2](http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/) (en)
* [Un aide-mémoire pour "Chef" sur la façon d'installer et de configurer PHP 5.3 et le gestionnaire de paquet PEAR](https://github.com/opscode-cookbooks/php) (en)

Allez plus loin:

* [Automatiser votre projet avec Apache Ant](http://net.tutsplus.com/tutorials/other/automate-your-projects-with-apache-ant/) (en)
* [Maven](http://maven.apache.org/), un framework de construction automatisée basé sur Ant et [comment l'utiliser avec PHP](http://www.php-maven.org/)

### Intégration continue

> L'intégration continue est une pratique en génie logiciel où les membres d'une équipe intègrent leurs travaux 
> fréquemment, souvent plusieurs fois par jour. Beaucoup d'équipes trouvent que cette approche permet de réduire de 
> façon significative les problèmes d'intégrations et ainsi permet un développement plus cohérent et rapide.

*-- Martin Fowler*

Il existe différents moyens pour faire de l'intégration continue en PHP. [Travis CI](https://travis-ci.org/) a récemment 
fait un excellent travail pour faire de l'intégration continue une réalité et ceux même pour de petits projets. Travis 
CI est un service hébergé d'intégration continue pour la communauté open-source. IL est intégré à Github et offre un 
support de haut niveau pour de nombreux langages (incluant PHP).

Allez plus loin:

* [Intégration continue avec Jenkins](http://jenkins-ci.org/)
* [Intégration continue avec PHPCI](http://www.phptesting.org/)
* [Intégration continue avec Teamcity](http://www.jetbrains.com/teamcity/)
