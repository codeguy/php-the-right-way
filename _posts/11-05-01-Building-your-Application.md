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


### Outil de génération automatique

Build tools can be described as a collection of scripts that handle common tasks of software deployment. The build 
tool is not a part of your software, it acts on your software from 'outside'.

There are many open source tools available to help you with build automation, some are written in PHP others aren't. 
This shouldn't hold you back from using them, if they're better suited for the specific job. Here are a few examples:

[Phing](http://www.phing.info/) is the easiest way to get started with automated deployment in the PHP world. With 
Phing you can control your packaging, deployment or testing process from within a simple XML build file. Phing (which 
is based on [Apache Ant](http://ant.apache.org/)) provides a rich set of tasks usually needed to install or update a 
web app and can be extended with additional custom tasks, written in PHP.

[Capistrano](https://github.com/capistrano/capistrano/wiki) is a system for *intermediate-to-advanced programmers* to 
execute commands in a structured, repeatable way on one or more remote machines. It is pre-configured for deploying 
Ruby on Rails applications, however people are **successfully deploying PHP systems** with it. Successful use of 
Capistrano depends on a working knowledge of Ruby and Rake.

Dave Gardner's blog post [PHP Deployment with Capistrano](http://www.davegardner.me.uk/blog/2012/02/13/php-deployment-with-capistrano/) 
is a good starting point for PHP developers interested in Capistrano.

[Chef](http://www.opscode.com/chef/) is more than a deployment framework, it is a very powerful Ruby based system 
integration framework that doesn't just deploy your app but can build your whole server environment or virtual boxes.

Les ressources sur Chef pour les développeurs PHP:

* [Une série en trois parties sur la façon de déployer une application LAMP avec Chef, Vagrant, et EC2](http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/) (en)
* [Un aide-mémoire pour "Chef" sur la façon d'installer et de configurer PHP 5.3 et le gestionnaire de paquet PEAR](https://github.com/opscode-cookbooks/php) (en)

Allez plus loin:

* [Automatiser votre projet avec Apache Ant](http://net.tutsplus.com/tutorials/other/automate-your-projects-with-apache-ant/) (en)
* [Maven](http://maven.apache.org/), un framework de construction automatisée basé sur Ant et [comment l'utiliser avec PHP](http://www.php-maven.org/)

### Intégration continue

> Continuous Integration is a software development practice where members of a team integrate their work frequently, 
> usually each person integrates at least daily — leading to multiple integrations per day. Many teams find that this 
> approach leads to significantly reduced integration problems and allows a team to develop cohesive software more 
> rapidly.

*-- Martin Fowler*

There are different ways to implement continuous integration for PHP. Recently [Travis CI](https://travis-ci.org/) has 
done a great job of making continuous integration a reality even for small projects. Travis CI is a hosted continuous 
integration service for the open source community. It is integrated with GitHub and offers first class support for many 
languages including PHP.

Allez plus loin:

* [Intégration continue avec Jenkins](http://jenkins-ci.org/)
* [Intégration continue avec PHPCI](http://www.phptesting.org/)
* [Intégration continue avec Teamcity](http://www.jetbrains.com/teamcity/)
