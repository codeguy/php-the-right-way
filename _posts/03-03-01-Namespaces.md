---
isChild: true
anchor:  namespaces
---

## Namespaces {#namespaces_title}

As mentioned above, the PHP community has a lot of developers creating lots of code. This means that one library's PHP
code might use the same class name as another. When both libraries are used in the same namespace, they collide
and cause trouble.

_Namespaces_ solve this problem. As described in the PHP reference manual, namespaces may be compared to operating
system directories that _namespace_ files; two files with the same name may co-exist in separate directories. Likewise,
two PHP classes with the same name may co-exist in separate PHP namespaces. It's as simple as that.

It is important for you to namespace your code so that it may be used by other developers without fear of colliding
with other libraries.

One recommended way to use namespaces is outlined in [PSR-4][psr4], which aims to provide a standard file, class and
namespace convention to allow plug-and-play code.

In October 2014 the PHP-FIG deprecated the previous autoloading standard: [PSR-0][psr0]. Both PSR-0 and PSR-4 are still perfectly usable.  The latter requires PHP 5.3, so many PHP 5.2-only projects implement PSR-0.

If you're going to use an autoloader standard for a new application or package, look into PSR-4.

* [Read about Namespaces][namespaces]
* [Read about PSR-0][psr0]
* [Read about PSR-4][psr4]


[namespaces]: https://www.php.net/language.namespaces
[psr0]: https://www.php-fig.org/psr/psr-0/
[psr4]: https://www.php-fig.org/psr/psr-4/
