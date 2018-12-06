---
title:   Opcode 캐시
isChild: true
anchor:  opcode_cache
---

## Opcode 캐시 {#opcode_cache_title}

PHP 파일을 실행하면 가장 먼저 이 파일은 컴파일해서 [opcode](https://secure.php.net/manual/internals2.opcodes.php) (CPU를 위한 기계 언어 명령) 로 만들게 됩니다.
원본 PHP 파일이 수정되지 않으면 컴파일된 opcode는 항상 같기때문에, 이러한 컴파일 과정은 CPU 리소스 낭비가 됩니다.

opcode 캐시는 opcode를 메모리에 보관하고, 이후 호출 시에 재사용하여 불필요한 컴파일 과정이 일어나지 않게 합니다. 보통 시그니처나 파일의 수정 시각을 먼저 확인하여 변경이 있는지 검사합니다.

opcode 캐시는 아마 여러분의 어플리케이션을 상당히 빠르게 개선할 것입니다. PHP 5.5 부터는 [Zend OPcache][opcache-book] 라는 opcode 캐시가 내장되어 있습니다. PHP 패키지/배포판에 따라서 기본으로 활성화 되어있습니다. [opcache.enable](https://secure.php.net/manual/opcache.configuration.php#ini.opcache.enable) 에서 확인하고, `phpinfo()` 출력값으로 확인하세요. 이전 버전의 PHP를 위해서는 PECL 확장이 있습니다.

아래는 인기있는 opcode 캐시들입니다.

* [Zend OPcache][opcache-book] (PHP 5.5 이후 내장)
* Zend OPcache (구 Zend Optimizer+) 는 이제 [오픈소스][Zend Optimizer+]가 되었습니다.
* [APC] - PHP 5.4 혹은 그 이전 버전
* [XCache]
* [WinCache] (MS Windows Server를 위한 익스텐션)
* [위키백과: PHP 가속화도구(Acceleratior) 목록][PHP_accelerators]


[opcache-book]: https://secure.php.net/book.opcache
[APC]: https://secure.php.net/book.apc
[XCache]: https://xcache.lighttpd.net/
[Zend Optimizer+]: https://github.com/zendtech/ZendOptimizerPlus
[WinCache]: https://www.iis.net/downloads/microsoft/wincache-extension
[PHP_accelerators]: https://wikipedia.org/wiki/List_of_PHP_accelerators
