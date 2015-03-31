---
isChild: true
title: 构建及部署应用
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

[Chef] 不仅仅只是一个部署框架， 它是一个基于 Ruby 的强大的系统集成框架，除了部署你的应用之外，还可以构建整个服务环境或者虚拟机。

[Deployer] 是一个用 PHP 编写的部署工具，它很简单且实用。并行执行任务，原子化部署，在多台服务器之间保持一致性。为 Symfony、Laravel、Zend Framework 和 Yii 提供了通用的任务脚本。

#### 适用于 PHP 开发者的 Chef 资源：

* [Three part blog series about deploying a LAMP application with Chef, Vagrant, and EC2][chef_vagrant_and_ec2]
* [Chef Cookbook which installs and configures PHP 5.3 and the PEAR package management system][Chef_cookbook]
* [Chef video tutorial series][Chef_tutorial] by Opscode, the makers of chef

#### 延伸阅读：

* [Automate your project with Apache Ant][apache_ant_tutorial]

### 持续集成

> 持续集成是一种软件开发实践，团队的成员经常用来集成他们的工作，
> 通常每一个成员至少每天都会进行集成 — 因此每天都会有许多的集成。许多团队发现这种方式会显著地降低集成问题，
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
