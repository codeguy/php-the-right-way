---
isChild: true
anchor:  opcode_cache
---

## Opcode Cache {#opcode_cache_title}

Wenn eine PHP-Datei ausgeführt wird, muss sie zunächst in  [Opcodes](https://php-legacy-docs.zend.com/manual/php4/en/internals2.opcodes) (Maschinensprachenanweisungen für die CPU) kompiliert werden.
Wenn der Quellcode unverändert bleibt, sind die Opcodes gleich, sodass dieser Kompilierungsschritt eine Verschwendung von CPU-Ressourcen darstellt.

Ein Opcode-Cache verhindert redundante Kompilierung, indem er Opcodes im Speicher hält
und bei aufeinanderfolgenden Aufrufen wiederverwendet. 
Normalerweise wird zuerst die Signatur oder der Änderungszeitpunkt der Datei überprüft, falls Änderungen vorgenommen wurden.

Ein Opcode-Cache kann die Geschwindigkeit Ihrer Anwendung deutlich steigern. 
Seit PHP 5.5 ist [Zend OPcache][opcache-book] integriert.
Abhängig von Deinem PHP-Paket / Deiner PHP-Distribution ist er in der Regel standardmäßig aktiviert.
Überprüfe  [opcache.enable](https://www.php.net/manual/opcache.configuration.php#ini.opcache.enable) und die Ausgabe von `phpinfo()`, um sicherzugehen. 
Für frühere Versionen gibt es eine PECL-Erweiterung.

Lies' mehr über opcode caches:

* [Zend OPcache][opcache-book] (seit 5.5 im Lieferumfang von PHP enthalten)
* Zend OPcache (früher bekannt als Zend Optimizer+) ist jetzt [Open Source][Zend Optimizer+]
* [WinCache]  (Erweiterung für MS Windows Server)
* [list of PHP accelerators on Wikipedia][PHP_accelerators]
* [PHP Preloading] - PHP >= 7.4


[opcache-book]: https://www.php.net/book.opcache
[Zend Optimizer+]: https://github.com/zendtech/ZendOptimizerPlus
[WinCache]: https://www.iis.net/downloads/microsoft/wincache-extension
[PHP_accelerators]: https://wikipedia.org/wiki/List_of_PHP_accelerators
[PHP Preloading]: https://www.php.net/opcache.preloading
