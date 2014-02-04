---
isChild: true
anchor: bytecode_cache
---

## Bytecode Cache {#bytecode_cache_title}

When a PHP file is executed, under the hood it is first compiled to bytecode (also known as opcode) and, only then, the bytecode is executed.
If a PHP file is not modified, the bytecode will always be the same. This means that the compilation step is a waste of CPU resources.

This is where Bytecode cache comes in. It prevents redundant compilation by storing bytecode in memory and reusing it on successive calls.
Setting up bytecode cache is a matter of minutes, and your application will speed up significantly. There's really no reason not to use it.

As of PHP 5.5, there is a built-in bytecode cache called [OPcache](http://php.net/manual/en/book.opcache.php). This is
also available for earlier versions.

Other popular bytecodes caches are:

* [APC](http://php.net/manual/en/book.apc.php) (PHP 5.4 and earlier)
* [XCache](http://xcache.lighttpd.net/)
* [Zend Optimizer+](http://www.zend.com/products/server/) (part of Zend Server package)
* [WinCache](http://www.iis.net/download/wincacheforphp) (extension for MS Windows Server)
