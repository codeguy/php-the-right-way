---
isChild: true
anchor:  opcode_cache
---

## Opcode Cache {#opcode_cache_title}

When a PHP file is executed, it must first be compiled into [opcodes](http://php.net/manual/en/internals2.opcodes.php) (machine language instructions for the CPU). If the source code is unchanged, the opcodes will be the same, so this compilation step becomes a waste of CPU resources.

An opcode cache prevents redundant compilation by storing opcodes in memory and reusing them on successive calls. It will typically check signature or modification time of the file first, in case there have been any changes.

It's likely an opcode cache will make a significant speed improvement to your application.  Since PHP 5.5 there is one built in - [Zend OPcache][opcache-book]. Depending on your PHP package/distribution, it's usually turned on by default - check [opcache.enable](http://php.net/manual/en/opcache.configuration.php#ini.opcache.enable) and the output of `phpinfo()` to make sure. For earlier versions there's a PECL extension.

Read more about opcode caches:

* [Zend OPcache][opcache-book] (bundled with PHP since 5.5)
* Zend OPcache (formerly known as Zend Optimizer+) is now [open source][Zend Optimizer+]
* [APC] - PHP 5.4 and earlier
* [XCache]
* [WinCache] (extension for MS Windows Server)
* [list of PHP accelerators on Wikipedia][PHP_accelerators]


[opcache-book]: http://php.net/book.opcache
[APC]: http://php.net/book.apc
[XCache]: http://xcache.lighttpd.net/
[Zend Optimizer+]: https://github.com/zendtech/ZendOptimizerPlus
[WinCache]: http://www.iis.net/download/wincacheforphp
[PHP_accelerators]: http://en.wikipedia.org/wiki/List_of_PHP_accelerators
