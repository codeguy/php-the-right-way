---
title:   어플리케이션 빌드와 배포
isChild: true
anchor:  building_and_deploying_your_application
---

## 어플리케이션 빌드와 배포 {#building_and_deploying_your_application_title}

여러분이 어플리케이션을 업데이트할 때, 업데이트도 수작업으로 하는데 데이터베이스 스키마 변경도 수작업으로 하고
테스트도 수작업으로 하고 있다면 다시 한 번 생각해 보시기 바랍니다. 어플리케이션 업데이트 때마다 사람이 직접해야 하는
작업이 있고, 그 작업의 수만큼 치명적인 실수가 발생할 가능성도 올라갑니다. 간단한 업데이트를 하는 상황이든지, 복잡한
빌드 과정을 수행하고 있든지, 지속적인 통합 전략을 사용하려고 하든지 간에 [빌드 자동화][buildautomation]가 여러분에게
꼭 필요할 것입니다.

아마도 다음과 같은 작업을 자동화하고 싶다는 생각이 들 것입니다.

* 의존성 관리
* 컴파일, 리소스의 최소화나 압축
* 테스트 수행
* 문서 제작
* 패키지 만들기
* 배포

### 배포 도구

배포 도구라는 건 소프트웨어 개발 과정에서 공통적으로 일어나는 작업을 다루는 스크립트들의 모음이라고 할 수 있습니다. 배포 도구는 여러분이 개발한 소프트웨어의 일부가 아니라 소프트웨어의 '밖에서' 필요한 동작을 수행해주는 녀석입니다.

빌드 자동화와 배포를 도와주는 많은 오픈소스 도구들이 있습니다. PHP로 작성된 것도 있고 그렇지 않은 것도 있죠. PHP로 작성되지 않았다는 것보다는 필요한 작업을 잘 수행해주느냐 하는 것이 중요할 것입니다. 여기에서 몇가지를 소개합니다.

[Phing]은 패키징, 배포, 테스팅 과정을 XML 빌드 파일 하나로 설정할 수 있습니다. [Apache Ant]를 기반으로 한 Phing은, 웹 어플리케이션을 설치하거나 업데이트할 때 필요한 PHP로 작성된 많은 종류의 작업을 기본적으로 지원하고 있고, 커스텀 작업을 추가하여 확장할 수도 있습니다. Phing은 오랜기간 유지된 단단하고 견고한 도구이지만, XML 파일로 설정을 다루는 방식때문에 약간 구식으로 보일 수도 있습니다. 

[Capistrano]는 하나 혹은 다수의 리모트 컴퓨터에서 구조화되고 반복가능한 커맨드를 실행시키려고 하는 *중고급 프로그래머*를 위한 시스템입니다. 기본적으로는 Ruby on Rails 어플리케이션을 배포할 수 있도록 구성되어 있지만, PHP 어플리케이션도 성공적으로 배포하고 있습니다. Capistrano를 잘 사용하려면 Ruby와 Rake에 대해서도 잘 알아야 합니다. Capistrano에 관심이 있는 PHP 개발자에게는 Dave Gardner의 [PHP Deployment with Capistrano][phpdeploy_capistrano]라는 블로그 포스트가 좋은 출발점이 될 것입니다.

[Rocketeer] gets its inspiration and philosophy from the Laravel framework. Its goal is to be fast, elegant and easy to use with smart defaults. It features multiple servers, multiple stages, atomic deploys and deployment can be performed in parallel. Everything in the tool can be hot swapped or extended, and everything is written in PHP.

[Deployer]는 PHP로 작성된 배포도구이며, 단순하고 함수형으로 작성되었습니다. 병렬적으로 태스크들을 실행하고, 원자적으로 배포하며, 서버간의 일관성을 유지하는 기능들을 포함하고 있습니다. Symfony, Laravel, Zend Framework, Yii를 위한 일반적인 레시피가 있습니다. Younes Rafie의 [Easy Deployment of PHP Applications with Deployer][phpdeploy_deployer]라는 글은 Deployer를 사용하여 어플리케이션을 배포하기 위한 좋은 튜토리얼입니다.

[Magallanes] is another tool written in PHP with simple configuration done in YAML files. It has support for multiple servers and environments, atomic deployment, and has some built in tasks that you can leverage for common tools and frameworks.

#### 더 읽어볼 만한 것들

* [Apache Ant를 이용한 프로젝트 자동화][apache_ant_tutorial]
* [Expert PHP Deployments][expert_php_deployments] - free book on deployment with Capistrano, Phing and Vagrant.
* [Deploying PHP Applications][deploying_php_applications] - paid book on best practices and tools for PHP deployment.

### Server Provisioning

Managing and configuring servers can be a daunting task when faced with many servers. There are tools for dealing with this so you can automate your infrastructure to make sure you have the right servers and that they're configured properly. They often integrate with the larger cloud hosting providers (Amazon Web Services, Heroku, DigitalOcean, etc) for managing instances, which makes scaling an application a lot easier.

[Ansible] is a tool that manages your infrastructure through YAML files. It's simple to get started with and can manage complex and large scale applications. There is an API for managing cloud instances and it can manage them through a dynamic inventory using certain tools.

[Puppet] is a tool that has its own language and file types for managing servers and configurations. It can be used in a master/client setup or it can be used in a "master-less" mode. In the master/client mode the clients will poll the central master(s) for new configuration on set intervals and update itself if necessary. In the master-less mode you can push changes to your nodes. 

[Chef] is a powerful Ruby based system integration framework that you can build your whole server environment or virtual boxes with. It integrates well with Amazon Web Services through their service called OpsWorks.

#### 더 읽어볼 만한 것들

* [An Ansible Tutorial][an_ansible_tutorial]
* [Ansible for DevOps][ansible_for_devops] - paid book on everything Ansible
* [Ansible for AWS][ansible_for_aws] - paid book on integrating Ansible and Amazon Web Services
* [Chef, Vagrant, EC2를 이용한 LAMP 어플리케이션 배포를 다룬 블로그 시리즈][chef_vagrant_and_ec2]
* [Chef Cookbook which installs and configures PHP 5.3 and the PEAR package management system][Chef_cookbook]
* [Chef 비디오 튜토리얼 시리즈][Chef_tutorial]

### 지속적인 통합

> 지속적인 통합이란 팀 멤버들이 서로의 작업 결과물을 자주 통합하는 소프트웨어 개발 기법입니다. 보통 한 명이 적어도
> 하루에 한 번은 통합을 하는 수준을 얘기하는데, 결국 팀 전체로 보면 하루에도 여러 차례 통합을 한다는 얘기가 됩니다.
> 이런 기법을 사용함으로써 통합 시 발생하는 이슈가 눈에 띄게 줄어들고, 잘 응집된 소프트웨어를 만들 수 있다는 것을 많은
> 팀이 체험하고 있습니다.

*-- Martin Fowler*

PHP 프로젝트에서 지속적인 통합 기법을 사용하는 방법에는 여러가지 방법이 있습니다. [Travis CI]가 작은 규모의
프로젝트에도 현실성있게 적용할 수 있도록 멋진 결과물을 내놓고 있습니다. Travis CI는 오픈소스 커뮤니티를 위한, 인터넷에서
호스팅되는 지속적인 통합 서비스입니다. GitHub와 통합되어 있기도 하고, PHP를 포함한 많은 프로그래밍 언어를 아주 잘
지원하고 있습니다.

#### 더 읽어볼 만한 것들:

* [Jenkins를 이용한 지속적인 통합][Jenkins]
* [PHPCI를 이용한 지속적인 통합][PHPCI]
* [Teamcity를 이용한 지속적인 통합][Teamcity]


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
