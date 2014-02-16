---
title: 字节码缓存
anchorid: bytecode_cache
isChild: true
---

<h2 id="bytecode_cache">字节码缓存</h2>

在一个PHP文件被执行时，它先被编译为字节码(也称opcode)，然后这些字节码被执行。如果文件没有修改，那么字节码也会保持不变，
这意味着编译这一步白白浪费了CPU资源。

这就是引入字节码缓存的原因，通过把字节码保存在内存中来消除冗余的编译，重用它们完成后续的调用。配置字节码缓存非常简单，
而且可以极大地提高应用的执行效率，没有理由不使用字节码缓存。

PHP 5.5开始内置字节码缓存组件[OPcache](http://php.net/manual/en/book.opcache.php)，老版本的PHP可以使用第三方的字节码缓存组件，
流行的字节码缓存方案有：

* [APC](http://php.net/manual/en/book.apc.php) (PHP 5.4 and earlier)
* [XCache](http://xcache.lighttpd.net/)
* [Zend Optimizer+](http://www.zend.com/products/server/) (part of Zend Server package)
* [WinCache](http://www.iis.net/download/wincacheforphp) (extension for MS Windows Server)
