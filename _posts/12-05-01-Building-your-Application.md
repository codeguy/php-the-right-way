---
isChild: true
anchor:  building_and_deploying_your_application
---

## Building and Deploying your Application {#building_and_deploying_your_application_title}

If you find yourself doing manual database schema changes or running your tests manually before updating your files
(manually), think twice! With every additional manual task needed to deploy a new version of your app, the chances for
potentially fatal mistakes increase. Whether you're dealing with a simple update, a comprehensive build process or even
a continuous integration strategy, [build automation][buildautomation] is your friend.

Among the tasks you might want to automate are:

* Dependency management
* Compilation, minification of your assets
* Running tests
* Creation of documentation
* Packaging
* Deployment


### Build Automation Tools

Build tools can be described as a collection of scripts that handle common tasks of software deployment. The build tool
is not a part of your software, it acts on your software from 'outside'.

There are many open source tools available to help you with build automation, some are written in PHP others aren't.
This shouldn't hold you back from using them, if they're better suited for the specific job. Here are a few examples:

[Phing] is the easiest way to get started with automated deployment in the PHP world. With Phing you can control your
packaging, deployment or testing process from within a simple XML build file. Phing (which is based on [Apache Ant])
provides a rich set of tasks usually needed to install or update a web app and can be extended with additional custom
tasks, written in PHP.

[Capistrano] is a system for *intermediate-to-advanced programmers* to execute commands in a structured, repeatable way
on one or more remote machines. It is pre-configured for deploying Ruby on Rails applications, however people are **
successfully deploying PHP systems** with it. Successful use of Capistrano depends on a working knowledge of Ruby and
Rake.

Dave Gardner's blog post [PHP Deployment with Capistrano][phpdeploy_capistrano] is a good starting point for PHP
developers interested in Capistrano.

[Chef] is more than a deployment framework, it is a very powerful Ruby based system integration framework that doesn't
just deploy your app but can build your whole server environment or virtual boxes.

[Deployer] is a deployment tool written in PHP, it's simple and functional. Runs tasks in parallel, atomic deployment, keeps consistency between servers. Recipes of common tasks for Symfony, Laravel, Zend Framework and Yii.

#### Chef resources for PHP developers:

* [Three part blog series about deploying a LAMP application with Chef, Vagrant, and EC2][chef_vagrant_and_ec2]
* [Chef Cookbook which installs and configures PHP 5.3 and the PEAR package management system][Chef_cookbook]
* [Chef video tutorial series][Chef_tutorial] by Opscode, the makers of chef

#### Further reading:

* [Automate your project with Apache Ant][apache_ant_tutorial]

### Continuous Integration

> Continuous Integration is a software development practice where members of a team integrate their work frequently,
> usually each person integrates at least daily — leading to multiple integrations per day. Many teams find that this
> approach leads to significantly reduced integration problems and allows a team to develop cohesive software more
> rapidly.

*-- Martin Fowler*

There are different ways to implement continuous integration for PHP. Recently [Travis CI] has done a great job of
making continuous integration a reality even for small projects. Travis CI is a hosted continuous integration service
for the open source community. It is integrated with GitHub and offers first class support for many languages including
PHP.

#### Further reading:

* [Continuous Integration with Jenkins][Jenkins]
* [Continuous Integration with PHPCI][PHPCI]
* [Continuous Integration with Teamcity][Teamcity]


[buildautomation]: http://en.wikipedia.org/wiki/Build_automation
[Phing]: http://www.phing.info/
[Apache Ant]: http://ant.apache.org/
[Capistrano]: https://github.com/capistrano/capistrano/wiki
[phpdeploy_capistrano]: http://www.davegardner.me.uk/blog/2012/02/13/php-deployment-with-capistrano/
[Chef]: http://www.opscode.com/chef/
[chef_vagrant_and_ec2]: http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/
[Chef_cookbook]: https://github.com/opscode-cookbooks/php
[Chef_tutorial]: https://www.youtube.com/playlist?list=PLrmstJpucjzWKt1eWLv88ZFY4R1jW8amR
[apache_ant_tutorial]: http://net.tutsplus.com/tutorials/other/automate-your-projects-with-apache-ant/
[Travis CI]: https://travis-ci.org/
[Jenkins]: http://jenkins-ci.org/
[PHPCI]: http://www.phptesting.org/
[Teamcity]: http://www.jetbrains.com/teamcity/
[Deployer]: https://github.com/deployphp/deployer
