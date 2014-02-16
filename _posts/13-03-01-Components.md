---
title: 组件
anchorid: components
isChild: true
---

<h2 id="components">组件</h2>

如前所述，组件是另外一种创建、实现和发布开源代码的方式，当前社区存在很多组件库，最主要的两个：

* [Packagist](/php-the-right-way/#composer_and_packagist)
* [PEAR](/php-the-right-way/#pear)

这两个库都有用于安装和升级的命令行工具，已经在[依赖管理][dm]部分讲述.

还有基于组件的框架，你可以使用其中的组件，它们相互之间依赖很少，或完全独立，如[FuelPHP验证包][fuelval]，
就可以脱离FuelPHP框架而独立使用。这些项目就相当于一个可重用的组件库：

  [dm]: /php-the-right-way/#dependency_management
  [fuelval]: https://github.com/fuelphp/validation

* [Aura](http://auraphp.github.com/)
* [FuelPHP](https://github.com/fuelphp)
* [Symfony Components](http://symfony.com/doc/current/components/index.html)
* [The League of Extraordinary Packages](http://thephpleague.com/)
* Laravel's Illuminate Components
    * [Eloquent ORM](https://github.com/illuminate/database)
    * [Queue](https://github.com/illuminate/queue)

<b>Laravel's [Illuminate components](https://github.com/illuminate) will become better decoupled from the Laravel framework.
For now, only the components best decoupled from the Laravel framework are listed above.</b>