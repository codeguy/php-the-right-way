---
isChild: true
anchor:  namespaces
---

## Namespaces {#namespaces_title}

As mentioned above, the PHP community has a lot of developers creating lots of code. This means that one library's PHP
code may use the same class name as another library. When both libraries are used in the same namespace, they collide
and cause trouble.

_Namespaces_ solve this problem. As described in the PHP reference manual, namespaces may be compared to operating
system directories that _namespace_ files; two files with the same name may co-exist in separate directories. Likewise,
two PHP classes with the same name may co-exist in separate PHP namespaces. It's as simple as that.

It is important for you to namespace your code so that it may be used by other developers without fear of colliding
with other libraries.

One recommended way to use namespaces is outlined in [PSR-4][psr4], which aims to provide a standard file, class and
namespace convention to allow plug-and-play code.

In October 2014 the PHP-FIG deprecated the previous autoloading standard: [PSR-0][psr0], which has been replaced with
[PSR-4][psr4]. Currently both are still perfectly usable and PSR-0 is not going away. As PSR-4 requires PHP 5.3 and
many PHP 5.2-only projects currently implement PSR-0. Luckily those PHP 5.2-only projects are starting to up their
version requirements, meaning PSR-0 is being used less and less.

If you're going to use an autoloader standard for a new application or package then you almost certainly want
to look into PSR-4.

* [Read about Namespaces][namespaces]
* [Read about PSR-0][psr0]
* [Read about PSR-4][psr4]


[namespaces]: http://php.net/language.namespaces
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr4]: http://www.php-fig.org/psr/psr-4/
