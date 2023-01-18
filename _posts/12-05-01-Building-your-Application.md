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


### Deployment Tools

Deployment tools can be described as a collection of scripts that handle common tasks of software deployment. The deployment tool is not a part of your software, it acts on your software from 'outside'.

There are many open source tools available to help you with build automation and deployment, some are written in PHP others aren't. This shouldn't hold you back from using them, if they're better suited for the specific job. Here are a few examples:

[Phing] can control your packaging, deployment or testing process from within a XML build file. Phing (which is based on [Apache Ant]) provides a rich set of tasks usually needed to install or update a web application and can be extended with additional custom tasks, written in PHP. It's a solid and robust tool and has been around for a long time, however the tool could be perceived as a bit old fashioned because of the way it deals with configuration (XML files).

[Capistrano] is a system for *intermediate-to-advanced programmers* to execute commands in a structured, repeatable way on one or more remote machines. It is pre-configured for deploying Ruby on Rails applications, however you can successfully deploy PHP systems with it. Successful use of Capistrano depends on a working knowledge of Ruby and Rake.

[Ansistrano] is a couple of Ansible roles to easily manage the deployment process (deploy and rollback) for scripting applications such as PHP, Python and Ruby. It's an Ansible port for [Capistrano]. It's been used by quite a lot of PHP companies already.

[Deployer] is a deployment tool written in PHP. It's simple and functional. Features include running tasks in parallel, atomic deployment and keeping consistency between servers. Recipes of common tasks for Symfony, Laravel, Zend Framework and Yii are available. Younes Rafie's article [Easy Deployment of PHP Applications with Deployer][phpdeploy_deployer] is a great tutorial for deploying your application with the tool.

[Magallanes] is another tool written in PHP with simple configuration done in YAML files. It has support for multiple servers and environments, atomic deployment, and has some built in tasks that you can leverage for common tools and frameworks.

#### Further reading:

* [Automate your project with Apache Ant][apache_ant_tutorial]
* [Deploying PHP Applications][deploying_php_applications] - paid book on best practices and tools for PHP deployment.

### Server Provisioning

Managing and configuring servers can be a daunting task when faced with many servers. There are tools for dealing with this so you can automate your infrastructure to make sure you have the right servers and that they're configured properly. They often integrate with the larger cloud hosting providers (Amazon Web Services, Heroku, DigitalOcean, etc) for managing instances, which makes scaling an application a lot easier.

[Ansible] is a tool that manages your infrastructure through YAML files. It's simple to get started with and can manage complex and large scale applications. There is an API for managing cloud instances and it can manage them through a dynamic inventory using certain tools.

[Puppet] is a tool that has its own language and file types for managing servers and configurations. It can be used in a master/client setup or it can be used in a "master-less" mode. In the master/client mode the clients will poll the central master(s) for new configuration on set intervals and update themselves if necessary. In the master-less mode you can push changes to your nodes.

[Chef] is a powerful Ruby based system integration framework that you can build your whole server environment or virtual boxes with. It integrates well with Amazon Web Services through their service called OpsWorks.

#### Further reading:

* [An Ansible Tutorial][an_ansible_tutorial]
* [Ansible for DevOps][ansible_for_devops] - paid book on everything Ansible
* [Ansible for AWS][ansible_for_aws] - paid book on integrating Ansible and Amazon Web Services
* [Three part blog series about deploying a LAMP application with Chef, Vagrant, and EC2][chef_vagrant_and_ec2]
* [Chef Cookbook which installs and configures PHP and the PEAR package management system][Chef_cookbook]
* [Chef video tutorial series][Chef_tutorial]

### Continuous Integration

> Continuous Integration is a software development practice where members of a team integrate their work frequently,
> usually each person integrates at least daily — leading to multiple integrations per day. Many teams find that this
> approach leads to significantly reduced integration problems and allows a team to develop cohesive software more
> rapidly.

*-- Martin Fowler*

There are different ways to implement continuous integration for PHP. [Travis CI] has done a great job of
making continuous integration a reality even for small projects. Travis CI is a hosted continuous integration service
for the open source community. It is integrated with GitHub and offers first class support for many languages including
PHP.

#### Further reading:

* [Continuous Integration with Jenkins][Jenkins]
* [Continuous Integration with PHPCI][PHPCI]
* [Continuous Integration with PHP Censor][PHP Censor]
* [Continuous Integration with Teamcity][Teamcity]

[buildautomation]: https://wikipedia.org/wiki/Build_automation
[Phing]: https://www.phing.info/
[Apache Ant]: https://ant.apache.org/
[Capistrano]: https://capistranorb.com/
[Ansistrano]: https://ansistrano.com
[phpdeploy_deployer]: https://www.sitepoint.com/deploying-php-applications-with-deployer/
[Chef]: https://www.chef.io/
[chef_vagrant_and_ec2]: https://web.archive.org/web/20190307220000/http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/
[Chef_cookbook]: https://github.com/sous-chefs/php
[Chef_tutorial]: https://www.youtube.com/playlist?list=PL11cZfNdwNyNYcpntVe6js-prb80LBZuc
[apache_ant_tutorial]: https://code.tutsplus.com/tutorials/automate-your-projects-with-apache-ant--net-18595
[Travis CI]: https://www.travis-ci.com/
[Jenkins]: https://jenkins.io/
[PHPCI]: https://github.com/dancryer/phpci
[PHP Censor]: https://github.com/php-censor/php-censor
[Teamcity]: https://www.jetbrains.com/teamcity/
[Deployer]: https://deployer.org/
[Magallanes]: https://www.magephp.com/
[deploying_php_applications]: https://deployingphpapplications.com/
[Ansible]: https://www.ansible.com/
[Puppet]: https://puppet.com/
[ansible_for_devops]: https://leanpub.com/ansible-for-devops
[ansible_for_aws]: https://leanpub.com/ansible-for-aws
[an_ansible_tutorial]: https://serversforhackers.com/an-ansible-tutorial
