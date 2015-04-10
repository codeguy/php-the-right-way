---
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


### 빌드 자동화 도구

빌드 도구라는 건 소프트웨어 개발 과정에서 공통적으로 일어나는 작업을 다루는 스크립트들의 모음이라고 할 수 있습니다.
빌드 도구는 여러분이 개발한 소프트웨어의 일부가 아니라 소프트웨어의 '밖에서' 필요한 동작을 수행해주는 녀석입니다.

빌드 자동화를 도와주는 많은 오픈소스 도구들이 있습니다. PHP로 작성된 것도 있고 그렇지 않은 것도 있죠. PHP로 작성되지
않았다는 것보다는 필요한 작업을 잘 수행해주느냐 하는 것이 중요할 것입니다.

[Phing]은 자동화된 배포를 처음으로 적용해보려고 할 때 PHP 세상에서 찾을 수 있는 가장 쉬운 방법이라고 할 수 있습니다.
Phing을 사용하면 패키징, 배포, 테스팅 과정을 간단한 XML 빌드 파일을 사용하여 설정할 수 있습니다. Phing은 PHP로
작성되어 있는데, [Apache Ant]에 기초를 두고 웹 어플리케이션을 설치하거나 업데이트할 때 필요한 많은 종류의 작업을
기본적으로 지원하고 있고, 커스텀 작업을 추가하여 확장할 수도 있습니다(PHP로 작성해서요).

[Capistrano]는 하나 혹은 다수의 리모트 컴퓨터에서 구조화되고 반복가능한 커맨드를 실행시키려고 하는 *중고급
프로그래머*를 위한 시스템입니다. 기본적으로는 Ruby on Rails 어플리케이션을 배포할 수 있도록 구성되어 있지만, **PHP
어플리케이션도** 성공적으로 배포하고 있습니다. Capistrano를 잘 사용하려면 Ruby와 Rake에 대해서도 잘 알아야 합니다.

Capistrano에 관심이 있는 PHP 개발자에게는 Dave Gardner의 [PHP Deployment with Capistrano][phpdeploy_capistrano]라는
블로그 포스트가 좋은 출발점이 될 것입니다.

[Chef]는 소프트웨어 배포 프레임워크라기 보다는 아주 강력한 시스템 통합 프레임워크라고 볼 수 있습니다. 어플리케이션을
배포해주기만 하는게 아니라 서버나 가상 머신 환경 자체까지도 구성할 수 있습니다. Chef는 Ruby로 구현되어 있습니다.

[Deployer] is a deployment tool written in PHP, it's simple and functional. Runs tasks in parallel, atomic deployment, keeps consistency between servers. Recipes of common tasks for Symfony, Laravel, Zend Framework and Yii.

#### PHP 개발자를 위한 Chef 참고 자료들입니다.

* [Three part blog series about deploying a LAMP application with Chef, Vagrant, and EC2][chef_vagrant_and_ec2]
* [Chef Cookbook which installs and configures PHP 5.3 and the PEAR package management system][Chef_cookbook]
* [Chef video tutorial series][Chef_tutorial] by Opscode, the makers of chef

#### 더 읽어볼 만한 것들

* [Automate your project with Apache Ant][apache_ant_tutorial]

### 지속적인 통합

> 지속적인 통합이란 팀 멤버들이 서로의 작업 결과물을 자주 통합하는 소프트웨어 개발 기법입니다. 보통 한 명이 적어도
> 하루에 한 번은 통합을 하는 수준을 얘기하는데, 결국 팀 전체로 보면 하루에도 여러 차례 통합을 한다는 얘기가 됩니다.
> 이런 기법을 사용함으로써 통합 시 발생하는 이슈가 눈에 띄게 줄어들고, 잘 응집된 소프트웨어를 만들 수 있다는 것을 많은
> 팀이 체험하고 있습니다.

*-- Martin Fowler*

PHP 프로젝트에서 지속적인 통합 기법을 사용하는 방법에는 여러가지 방법이 있습니다. 최근에는 [Travis CI]가 작은 규모의
프로젝트에도 현실성있게 적용할 수 있도록 멋진 결과물을 내 놓았습니다. Travis CI는 오픈소스 커뮤니티를 위한, 인터넷에서
호스팅되는 지속적인 통합 서비스입니다. GitHub와 통합되어 있기도 하고, PHP를 포함한 많은 프로그래밍 언어를 아주 잘
지원하고 있습니다.

#### 더 읽어볼 만한 것들:

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
