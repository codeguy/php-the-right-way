---
isChild: true
anchor:  components
---

## Components {#components_title}

As mentioned above "Components" are another approach to the common goal of creating, distributing and implementing
shared code. Various component repositories exist, the main two of which are:

* [Packagist]
* [PEAR]

Both of these repositories have command line tools associated with them to help the installation and upgrade processes,
and have been explained in more detail in the [Dependency Management] section.

There are also component-based frameworks and component-vendors that offer no framework at all. These projects provide
another source of packages which ideally have little to no dependencies on other packages, or specific frameworks.

For example, you can use the [FuelPHP Validation package], without needing to use the FuelPHP framework itself.

* [Aura]
* [FuelPHP]
* [Hoa Project]
* [Orno]
* [Symfony Components]
* [The League of Extraordinary Packages]
* Laravel's Illuminate Components
    * [Eloquent ORM]
    * [Queue]

_Laravel's [Illuminate components] will become better decoupled from the Laravel framework. For now, only the
components best decoupled from the Laravel framework are listed above._


[Packagist]: /#composer_and_packagist
[PEAR]: /#pear
[Dependency Management]: /#dependency_management
[FuelPHP Validation package]: https://github.com/fuelphp/validation
[Aura]: http://auraphp.com/packages/v2
[FuelPHP]: https://github.com/fuelphp
[Hoa Project]: https://github.com/hoaproject
[Orno]: https://github.com/orno
[Symfony Components]: http://symfony.com/doc/current/components/index.html
[The League of Extraordinary Packages]: http://thephpleague.com/
[Eloquent ORM]: https://github.com/illuminate/database
[Queue]: https://github.com/illuminate/queue
[Illuminate components]: https://github.com/illuminate
