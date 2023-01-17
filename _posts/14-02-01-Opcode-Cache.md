---
isChild: true
anchor:  opcode_cache
---

## Opcode Cache {#opcode_cache_title}

When a PHP file is executed, it must first be compiled into [opcodes](https://php-legacy-docs.zend.com/manual/php4/en/internals2.opcodes) (machine language instructions for the CPU). If the source code is unchanged, the opcodes will be the same, so this compilation step becomes a waste of CPU resources.

An opcode cache prevents redundant compilation by storing opcodes in memory and reusing them on successive calls. It will typically check signature or modification time of the file first, in case there have been any changes.

It's likely an opcode cache will make a significant speed improvement to your application.  Since PHP 5.5 there is one built in - [Zend OPcache][opcache-book]. Depending on your PHP package/distribution, it's usually turned on by default - check [opcache.enable](https://www.php.net/manual/opcache.configuration.php#ini.opcache.enable) and the output of `phpinfo()` to make sure. For earlier versions there's a PECL extension.

Read more about opcode caches:

* [Zend OPcache][opcache-book] (bundled with PHP since 5.5)
* Zend OPcache (formerly known as Zend Optimizer+) is now [open source][Zend Optimizer+]
* [WinCache] (extension for MS Windows Server)
* [list of PHP accelerators on Wikipedia][PHP_accelerators]
* [PHP Preloading] - PHP >= 7.4


[opcache-book]: https://www.php.net/book.opcache
[Zend Optimizer+]: https://github.com/zendtech/ZendOptimizerPlus
[WinCache]: https://www.iis.net/downloads/microsoft/wincache-extension
[PHP_accelerators]: https://wikipedia.org/wiki/List_of_PHP_accelerators
[PHP Preloading]: https://www.php.net/opcache.preloading
