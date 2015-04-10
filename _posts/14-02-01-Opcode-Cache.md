---
title:   Opcode 캐시
isChild: true
anchor:  opcode_cache
---

## Opcode 캐시 {#opcode_cache_title}

PHP 파일을 실행했을 때 내부에서 처음으로 하는 일은 PHP 파일을 컴파일해서 opcode로 만들고, 이 opcode들이 실행됩니다.
원본 PHP 파일이 수정되지 않으면 컴파일된 opcode는 항상 같습니다. 결국 컴파일 과정이 CPU 리소스를 낭비한다는 얘기가
됩니다.

그래서 opcode 캐시가 필요합니다. opcode를 메모리에 보관해서 불필요한 컴파일 과정이 일어나지 않게 합니다. opcode 캐시를
설정하는 건 몇 분이면 할 수 있는 수준인데다가 어플리케이션의 성능이 즉시 향상되기 때문에 사용하지 않을 이유가 없습니다.

PHP 5.5부터는 [OPcache][opcache-book]. 라는 opcode 캐시가 내장되어 있습니다. 이전버전의 PHP에서도 사용 가능합니다.

아래는 인기있는 opcode 캐시들입니다.

* [OPcache][opcache-book] (built-in since PHP 5.5)
* [APC] (PHP 5.4 and earlier)
* [XCache]
* [Zend Optimizer+] (part of Zend Server package)
* [WinCache] (extension for MS Windows Server)
* [list of PHP accelerators on Wikipedia][PHP_accelerators]


[opcache-book]: http://php.net/book.opcache
[APC]: http://php.net/book.apc
[XCache]: http://xcache.lighttpd.net/
[Zend Optimizer+]: http://www.zend.com/products/server/
[WinCache]: http://www.iis.net/download/wincacheforphp
[PHP_accelerators]: http://en.wikipedia.org/wiki/List_of_PHP_accelerators