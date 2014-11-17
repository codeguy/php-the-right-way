---
isChild: true
anchor: opcode_cache
---

## Opcode Cache {#opcode_cache_title}

When a PHP file is executed, under the hood it is first compiled to opcodes and, only then, the opcodes are executed.
If a PHP file is not modified, the opcodes will always be the same. This means that the compilation step is a waste of CPU resources.

This is where opcode caches come in. They prevent redundant compilation by storing opcodes in memory and reusing it on successive calls.
Setting up an opcode cache takes a matter of minutes, and your application will speed up significantly. There's really no reason not to use it.

As of PHP 5.5, there is a built-in opcode cache called [OPcache][opcache-book]. It is also available for earlier versions.

Read more about opcode caches:

* [OPcache][opcache-book] (built-in since PHP 5.5)
* [APC](http://php.net/manual/en/book.apc.php) (PHP 5.4 and earlier)
* [XCache](http://xcache.lighttpd.net/)
* [Zend Optimizer+](http://www.zend.com/products/server/) (part of Zend Server package)
* [WinCache](http://www.iis.net/download/wincacheforphp) (extension for MS Windows Server)
* [list of PHP accelerators on Wikipedia](http://en.wikipedia.org/wiki/List_of_PHP_accelerators)

[opcache-book]: http://php.net/manual/en/book.opcache.php