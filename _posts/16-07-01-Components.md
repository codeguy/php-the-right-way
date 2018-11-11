---
title:   컴포넌트
isChild: true
anchor:  components
---

## 컴포넌트 {#components_title}

"컴포넌트"는 공유될 수 있는 코드를 작성하고 배포하기 위한 또다른 접근 방식입니다. 다양한 컴포넌트 저장소가 존재하지만
주요한 것은 두 가지가 있습니다.

* [Packagist]
* [PEAR]

두 저장소 모두 커맨드라인 도구를 사용하여 컴포넌트(혹은 패키지)를 설치하고 업그레이드할 수 있게 되어 있습니다. 자세한
내용은 [의존성 관리][Dependency Management] 섹션에서 설명했습니다.

또한 컴포넌트 기반의 프레임워크들도 있으며, 프레임워크는 전혀 제공하지 않는 컴포넌트 제공사들도 있습니다. 그런
프레임워크나 컴포넌트들은 다른 프레임워크나 패키지에 대한 의존성이 전혀 없거나, 최소한의 의존성만으로 사용할 수 있는
패키지 소스가 된다고 할 수 있습니다.

예를 들면 [FuelPHP Validation package][FuelPHP Validation package]는 FuelPHP 프레임워크를 사용하지 않더라도 여러분의
프로젝트에서 사용할 수 있게 되어 있습니다. 이러한 프로젝트들은 재사용 가능한 컴포넌트들을 별도의 저장소에서 관리하고
있습니다.

* [Aura]
* CakePHP Components
    * [Collection]
    * [Database]
    * [Datasource]
    * [Event]
    * [I18n]
    * [ORM]   
* [FuelPHP]
* [Hoa Project]
* [Symfony Components]
* [The League of Extraordinary Packages]
* Laravel's Illuminate Components
    * [IoC Container]
    * [Eloquent ORM]
    * [Queue]

_Laravel의 [Illuminate 컴포넌트][Illuminate components]는 Laravel 프레임워크로부터 좀더 디커플링 될 것입니다.
현재로서는 위에 언급된 것들만이 Laravel 프레임워크로부터 가장 잘 디커플링 되어 있는 컴포넌트들입니다._

[Packagist]: /#composer_and_packagist
[PEAR]: /#pear
[Dependency Management]: /#dependency_management
[FuelPHP Validation package]: https://github.com/fuelphp/validation
[Aura]: http://auraphp.com/framework/
[FuelPHP]: https://github.com/fuelphp
[Hoa Project]: https://github.com/hoaproject
[Symfony Components]: https://symfony.com/doc/current/components/index.html
[The League of Extraordinary Packages]: https://thephpleague.com/
[IoC Container]: https://github.com/illuminate/container
[Eloquent ORM]: https://github.com/illuminate/database
[Queue]: https://github.com/illuminate/queue
[Illuminate components]: https://github.com/illuminate
[Collection]: https://github.com/cakephp/collection
[Database]: https://github.com/cakephp/database
[Datasource]: https://github.com/cakephp/datasource
[Event]: https://github.com/cakephp/event
[I18n]: https://github.com/cakephp/i18n
[ORM]: https://github.com/cakephp/orm
