---
isChild: true
---

## Namespaces {#namespaces_title}

As mentioned above, the PHP community has a lot of developers creating lots of code. This means that one library's PHP code may use the same class name as another library. When both libraries are used in the same namespace, they collide and cause trouble.

_Namespaces_ solve this problem. As described in the PHP reference manual, namespaces may be compared to operating system directories that _namespace_ files; two files with the same name may co-exist in separate directories. Likewise, two PHP classes with the same name may co-exist in separate PHP namespaces. It's as simple as that.

It is important for you to namespace your code so that it may be used by other developers without fear of colliding with other libraries.

One recommended way to use namespaces is outlined in [PSR-0][psr0], which aims to provide a standard file, class and namespace convention to allow plug-and-play code.

* [Read about Namespaces][namespaces]
* [Read about PSR-0][psr0]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
