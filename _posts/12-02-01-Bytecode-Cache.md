---
title:   바이트코드 캐시 
isChild: true
anchor: bytecode_cache
---

## 바이트코드 캐시 {#bytecode_cache_title}

PHP 파일을 실행했을 때 내부에서 처음으로 하는 일은 PHP 파일을 컴파일해서 바이트코드(bytecode, 또는 opcode라고도 합니다)로 만드는 일입니다. 그리고나서 바이트코드가 실행됩니다. 원본 PHP 파일이 수정되지 않으면 컴파일된 바이트코드는 항상 같습니다. 결국 컴파일 과정이 CPU 리소스를 낭비한다는 얘기가 됩니다.

그래서 바이트코드 캐시가 필요합니다. 바이트코드를 메모리에 보관해서 불필요한 컴파일 과정이 일어나지 않게 합니다. 바이트코드 캐시를 설정하는 건 몇 분이면 할 수 있는 수준인데다가 어플리케이션의 성능이 즉시 향상되기 때문에 사용하지 않을 이유가 없습니다.

PHP 5.5부터는 [OPcache](http://php.net/manual/en/book.opcache.php)라는 바이트코드 캐시가 내장되어 있습니다. 이전버전의 PHP에서도 사용 가능합니다.

아래는 인기있는 바이트코드 캐시들입니다.

* [APC](http://php.net/manual/en/book.apc.php) (PHP 5.4 and earlier)
* [XCache](http://xcache.lighttpd.net/)
* [Zend Optimizer+](http://www.zend.com/products/server/) (part of Zend Server package)
* [WinCache](http://www.iis.net/download/wincacheforphp) (extension for MS Windows Server)
