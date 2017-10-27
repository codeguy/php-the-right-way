---
isChild: true
anchor:  building_and_deploying_your_application
---

## 构建及部署应用 {#building_and_deploying_your_application_title}

如果你在手动的进行数据库结构的修改或者在更新文件前手动运行测试，请三思而后行！因为随着每一个额外的手动任务的添加都需要去部署一个新的版本到应用程序，这些更改会增加程序潜在的致命错误。即使你是在处理一个简单的更新，全面的构建处理或者持续集成策略，[构建自动化][buildautomation]绝对是你的朋友。

你可能想要自动化的任务有：

* 依赖管理
* 静态资源编译、压缩
* 执行测试
* 文档生成
* 打包
* 部署


### 构建自动化工具

构建工具可以认为是一系列的脚本来完成应用部署的通用任务。构建工具并不属于应用的一部分，它独立于应用层 '之外'。

现在已有很多开源的工具来帮助你完成构建自动化，一些是用 PHP 编写，有一些不是。应该根据你的实际项目来选择最适合的工具，不要让语言阻碍了你使用这些工具，如下有一些例子：

[Phing] 是一种在 PHP 领域中最简单的开始自动化部署的方式。通过 Phing 你可以控制打包，部署或者测试，只需要一个简单的 XML 构建文件。Phing (基于[Apache Ant]) 提供了在安装或者升级 web 应用时的一套丰富的任务脚本，并且可以通过 PHP 编写额外的任务脚本来扩展。

[Capistrano] 是一个为 *中高级程序员* 准备的系统，以一种结构化、可复用的方式在一台或多台远程机器上执行命令。对于部署 Ruby on Rails 的应用，它提供了预定义的配置，不过也可以用它来 **部署 PHP 应用** 。如果要成功的使用 Capistrano ，需要一定的 Ruby 和 Rake 的知识。

对 Capistrano 感兴趣的 PHP 开发者可以阅读 Dave Gardner 的博文 [PHP Deployment with Capistrano][phpdeploy_capistrano] ，来作为一个很好的开始。

[Rocketeer] 从 Laravel 框架中得到了很多灵感。 目标是默认智能化配置、高速、优雅的自动化部署工具。他支持多服务器，多阶段，并行部署等功能。工具的扩展性极强，并且是由 PHP 编写。

[Deployer] 是一个用 PHP 编写的部署工具，它很简单且实用。并行执行任务，原子化部署，在多台服务器之间保持一致性。为 Symfony、Laravel、Zend Framework 和 Yii 提供了通用的任务脚本。推荐阅读 Younes Rafie 的博文 [快速使用 Deployer 部署 PHP 应用][phpdeploy_deployer]。

[Magallanes] 是另一个由 PHP 编写的自动化部署工具。使用 YAML 作为配置信息，支持多服务器和多环境，自动化部署。并且自带了许多通用的任务。

#### 延伸阅读：

* [Automate your project with Apache Ant][apache_ant_tutorial]
* [Expert PHP Deployments][expert_php_deployments] - free book on deployment with Capistrano, Phing and Vagrant.
* [Deploying PHP Applications][deploying_php_applications] - paid book on best practices and tools for PHP deployment.

### 服务器布置 Server Provisioning

在多台服务器的场景下，管理服务器系统配置信息将会是一个令人棘手的事情。接下来介绍几种工具来让你自动化这些工作。一般情况下，一些大型的云托管商（如：Amazon Web Services, Heroku, DigitalOcean 等）会集成自动化管理工具。

[Ansible] 让你使用 YAML 配置文件来管理你的服务器基础设施。简单上手，功能强大，能支持复杂和大型应用场景。甚至支持 API 来动态管理云主机实例。

[Puppet] 拥有自定义语言和文件类型来管理服务和配置信息。支持 主从结构或者是 `无主结构`。在主从结构中，从属机器会在设定周期内更新主机上的配置信息。在无主架构中，你需要 `push` 推送修改到各个节点。

[Chef] 不仅仅只是一个部署框架， 它是一个基于 Ruby 的强大的系统集成框架，除了部署你的应用之外，还可以构建整个服务环境或者虚拟机。AWS 提供一个服务叫 OpsWorks，其集成了 Chef。

#### 延伸阅读：

* [An Ansible Tutorial][an_ansible_tutorial]
* [Ansible for DevOps][ansible_for_devops] - paid book on everything Ansible
* [Ansible for AWS][ansible_for_aws] - paid book on integrating Ansible and Amazon Web Services
* [Three part blog series about deploying a LAMP application with Chef, Vagrant, and EC2][chef_vagrant_and_ec2]
* [Chef Cookbook which installs and configures PHP and the PEAR package management system][Chef_cookbook]
* [Chef video tutorial series][Chef_tutorial]

### 持续集成

> 持续集成是一种软件开发实践，团队的成员经常用来集成他们的工作，
> 通常每一个成员至少每天都会进行集成 — 因此每天都会有许多的集成。许多团队发现这种方式会显著地降低集成问题，
> approach leads to significantly reduced integration problems and allows a team to develop cohesive software more
> 并允许一个团队更快的开发软件。

*-- Martin Fowler*

对于 PHP 来说，有许多的方式来实现持续集成。近来 [Travis CI] 在持续集成上做的很棒，对于小项目来说也可以很好的使用。Travis CI 是一个托管的持续集成服务用于开源社区。它可以和 Github 很好的集成，并且提供了很多语言的支持包括 PHP 。

#### 延伸阅读：

* [使用 Jenkins 进行持续集成][Jenkins]
* [使用 PHPCI 进行持续集成][PHPCI]
* [使用 Teamcity 进行持续集成][Teamcity]

[buildautomation]: http://en.wikipedia.org/wiki/Build_automation
[Phing]: http://www.phing.info/
[Apache Ant]: http://ant.apache.org/
[Capistrano]: https://github.com/capistrano/capistrano/wiki
[phpdeploy_capistrano]: http://www.davegardner.me.uk/blog/2012/02/13/php-deployment-with-capistrano/
[phpdeploy_deployer]: http://www.sitepoint.com/deploying-php-applications-with-deployer/
[Chef]: https://www.chef.io/
[chef_vagrant_and_ec2]: http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/
[Chef_cookbook]: https://github.com/chef-cookbooks/php
[Chef_tutorial]: https://www.youtube.com/playlist?list=PL11cZfNdwNyPnZA9D1MbVqldGuOWqbumZ
[apache_ant_tutorial]: http://net.tutsplus.com/tutorials/other/automate-your-projects-with-apache-ant/
[Travis CI]: https://travis-ci.org/
[Jenkins]: http://jenkins-ci.org/
[PHPCI]: http://www.phptesting.org/
[Teamcity]: http://www.jetbrains.com/teamcity/
[Deployer]: http://deployer.org/
[Rocketeer]: http://rocketeer.autopergamene.eu/
[Magallanes]: http://magephp.com/
[expert_php_deployments]: http://viccherubini.com/assets/Expert-PHP-Deployments.pdf
[deploying_php_applications]: http://www.deployingphpapplications.com
[Ansible]: https://www.ansible.com/
[Puppet]: https://puppet.com/
[ansible_for_devops]: https://leanpub.com/ansible-for-devops
[ansible_for_aws]: https://leanpub.com/ansible-for-aws
[an_ansible_tutorial]: https://serversforhackers.com/an-ansible-tutorial
