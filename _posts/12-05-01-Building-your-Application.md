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

[Ansistrano]는 PHP, Python 및 Ruby와 같은 스크립팅 응용 프로그램의 배포 프로세스(배포 및 롤백)를 쉽게 관리할 수 있는 Ansible과 같은 역할을 합니다. [Capistrano]를 위한 Ansible 포트입니다. 이미 많은 PHP 회사에서 사용되고 있습니다.

[Rocketeer]는 라라벨 프레임워크로부터 그 철학과 영감을 얻었습니다. 빠르고, 우아하며, 효과적인 기본값으로 쉽게 사용할 수 있는 것이 목표입니다. 여러 서버, 스테이지(stage), 원자적 배치와 배포를 병렬적으로 수행할 수 있습니다. 이 도구의 모든 것은 핫 스왑(hot swap)하거나 확장할 수 있으며, PHP로 작성되었습니다.

[Deployer]는 PHP로 작성된 배포도구이며, 단순하고 함수형으로 작성되었습니다. 병렬적으로 태스크들을 실행하고, 원자적으로 배포하며, 서버간의 일관성을 유지하는 기능들을 포함하고 있습니다. Symfony, Laravel, Zend Framework, Yii를 위한 일반적인 레시피가 있습니다. Younes Rafie의 [Easy Deployment of PHP Applications with Deployer][phpdeploy_deployer]라는 글은 Deployer를 사용하여 어플리케이션을 배포하기 위한 좋은 튜토리얼입니다.

[Magallanes]는 YAML 파일로 간단하게 설정할 수 있는 PHP로 작성된 도구입니다. 여러 서버와 환경, 원자적 배포와 함께, 일반적인 도구와 프레임워크에 활용할 수 있는 몇몇 내장 태스크가 있습니다.

#### 더 읽어볼 만한 것들

* [Apache Ant를 이용한 프로젝트 자동화][apache_ant_tutorial]
* [Deploying PHP Applications][deploying_php_applications] - PHP 배포의 모범 사례와 도구에 관한 유료 도서

### 서버 프로비저닝

많은 수의 서버를 맡게 되었을때 서버를 관리하고 구성하는 일은 곤란한 일이 될 수 있습니다. 알맞은 서버를 적절히 구성할 수 있도록 인프라를 자동화하여 이것을 해결할 도구들이 있습니다. 이 도구들은 보통 매우 쉽게 어플리케이션을 스캐일링하는 것과 같은 인스턴스 관리를 위해 대형 클라우드 호스팅 제공업체(아마존 웹 서비스, 헤로쿠, 디지털오션 등)와 연동됩니다.

[Ansible]은 YAML 파일로 인프라를 관리하는 도구입니다. 시작하기 쉬우며, 복잡하고 커다란 규묘의 어플리케이션도 관리할 수 있습니다. 클라우드 인스턴스를 관리하기 위한 API가 있고, 특정 도구들을 사용하는 다이나믹 인벤토리(dynamic inventory)를 통해 관리할 수 있습니다.

[Puppet]은 서버를 관리하고 구성하기 위한 자체 언어와 파일 형식을 가진 도구입니다. 마스터/클라이언트 혹은 "master-less" 모드로 설치하여 사용할 수 있습니다. 마스터/클라이언트 모드에서 클라이언트는 중앙 마스터에서 새로운 설정을 일정 주기로 가져오고 필요할 경우 자신을 업데이트 합니다. master-less 모드에서는 노드들에 변경사항을 직접 전달합니다.

[Chef]는 전체 서버 환경이나 가상 머신을 만들 수 있는 루비 기반의 강력한 시스템 통합 프레임워크입니다. OpsWorks라고 불리는 아마존 웹 서비스 내의 서비스를 통해서 잘 연동됩니다.

#### 더 읽어볼 만한 것들

* [An Ansible Tutorial][an_ansible_tutorial]
* [Ansible for DevOps][ansible_for_devops] - Ansible의 모든 것에 대한 유료 도서
* [Ansible for AWS][ansible_for_aws] - Ansible과 아마존 웹 서비스의 연동에 대한 유료 도서
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
* [PHP Censor를 이용한 지속적인 통합][PHP Censor]
* [Teamcity를 이용한 지속적인 통합][Teamcity]

[buildautomation]: https://wikipedia.org/wiki/Build_automation
[Phing]: https://www.phing.info/
[Apache Ant]: https://ant.apache.org/
[Capistrano]: http://capistranorb.com/
[Ansistrano]: https://ansistrano.com
[phpdeploy_deployer]: https://www.sitepoint.com/deploying-php-applications-with-deployer/
[Chef]: https://www.chef.io/
[chef_vagrant_and_ec2]: http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/
[Chef_cookbook]: https://github.com/chef-cookbooks/php
[Chef_tutorial]: https://www.youtube.com/playlist?list=PL11cZfNdwNyPnZA9D1MbVqldGuOWqbumZ
[apache_ant_tutorial]: https://code.tutsplus.com/tutorials/automate-your-projects-with-apache-ant--net-18595
[Travis CI]: https://travis-ci.org/
[Jenkins]: https://jenkins.io/
[PHPCI]: https://github.com/dancryer/phpci
[PHP Censor]: https://github.com/php-censor/php-censor
[Teamcity]: https://www.jetbrains.com/teamcity/
[Deployer]: https://deployer.org/
[Rocketeer]: http://rocketeer.autopergamene.eu/
[Magallanes]: https://www.magephp.com/
[deploying_php_applications]: https://deployingphpapplications.com/
[Ansible]: https://www.ansible.com/
[Puppet]: https://puppet.com/
[ansible_for_devops]: https://leanpub.com/ansible-for-devops
[ansible_for_aws]: https://leanpub.com/ansible-for-aws
[an_ansible_tutorial]: https://serversforhackers.com/an-ansible-tutorial
