---
isChild: true
anchor:  opcode_cache
title: Opcode 缓存
---

## Opcode 缓存 {#opcode_cache_title}

当一个 PHP 文件被解释执行的时候，首先是被编译成名为 [opcodes](http://php.net/manual/en/internals2.opcodes.php) 的中间代码，然后才被底层的虚拟机执行。
如果PHP文件没有被修改过，opcode 始终是一样的。这就意味着编译步骤白白浪费了 CPU 的资源。

此时 opcode 缓存就派上用场了。通过将 opcode 缓存在内存中，它能防止冗余的编译步骤，并且在下次调用执行时得到重用。设置 opcode 缓存只需要几分钟的时间，你的应用程序便会因此大大加速，实在没有理由不用它。

PHP 5.5 中自带了 opcode 缓存工具，叫做[Zend OPcache][opcache-book]，默认一般是开启的，请在 `phpinfo()` 输出中检查 [opcache.enable](http://php.net/manual/en/opcache.configuration.php#ini.opcache.enable) 关键词是否出现来确定是否开启。早期的版本也能通过 PECL 扩展来安装。

更多关于 opcode 缓存的资料：

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
