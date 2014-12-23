---
title:   컴포넌트들 
isChild: true
---

## 컴포넌트들 {#components_title}

"컴포넌트"는 공유될 수 있는 코드를 작성하고 배포하기 위한 또다른 접근 방식입니다. 다양한 컴포넌트 저장소가 존재하지만 주요한 것은 두 가지가 있습니다.

* [Packagist](#composer_and_packagist)
* [PEAR](#pear)

두 저장소 모두 커맨드라인 도구를 사용하여 컴포넌트(혹은 패키지)를 설치하고 업그레이드할 수 있게 되어 있습니다. 자세한 내용은 [의존성 관리][dm] 섹션에서 설명했습니다.

포함된 컴포넌트들을 요구사항 없이, 혹은 최소한의 요구사항만으로도 사용할 수 있게 해주는 '컴포넌트 기반의 프레임워크'들도 있습니다. 예를 들면 [FuelPHP Validation package][fuelval]는 FuelPHP 프레임워크를 사용하지 않더라도 여러분의 프로젝트에서 사용할 수 있게 되어 있습니다. 이러한 프로젝트들은 재사용 가능한 컴포넌트들을 별도의 저장소에서 관리하고 있습니다.

  [dm]: #dependency_management
  [fuelval]: https://github.com/fuelphp/validation

* [Aura](http://auraphp.github.com/)
* [FuelPHP](https://github.com/fuelphp)
* [Symfony Components](http://symfony.com/doc/current/components/index.html)
* [The League of Extraordinary Packages](http://thephpleague.com/)
* Laravel's Illuminate Components
    * [Eloquent ORM](https://github.com/illuminate/database)
    * [Queue](https://github.com/illuminate/queue)

_Laravel 의 [Illuminate 컴포넌트](https://github.com/illuminate)는 
Laravel 프레임워크로부터 좀더 디커플링 될 것입니다. 현재로서는 위에 언급된 것들만이 Laravel 
프레임워크로부터 가장 잘 디커플링 되어 있는 컴포넌트들입니다._
