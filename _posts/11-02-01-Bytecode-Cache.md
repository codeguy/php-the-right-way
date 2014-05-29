---
title: Bajtkod keš
isChild: true
---

## Bajtkod keš {#bytecode_cache_title}

Kada se PHP fajl izvrši, ispod haube prvo se kompajlira u bajt kod (isto poznat pod imenom opkod) i, tek tada, bajtkod se izvršava.
Ako PHP fajl nije modifikovan, bajtkod će uvek biti isti. Što znači da je kompilacija trošenje CPU resursa.

Tu dolazi bajtkod keš. On sprečava bespotrebno kompajliranje čuvanjem u memoriji i korišćem iste kada je potrebno. Podešavanje bajkod keša može da se uradi u roku od par minuta, i vaša aplikacija će se osetno ubrzati. Ne postoji razlog da je ne koristite. 

Od PHP verzije 5.5, postoji ugrađen bajtkod keš nazvan [OPcache](http://php.net/manual/en/book.opcache.php). Isto je dostupan za ranije verzije.

Drugi popularni bajtkod keševi su:

* [APC](http://php.net/manual/en/book.apc.php) (PHP 5.4 i ranije)
* [XCache](http://xcache.lighttpd.net/)
* [Zend Optimizer+](http://www.zend.com/products/server/) (deo Zend Server paketa)
* [WinCache](http://www.iis.net/download/wincacheforphp) (ektenzija za MS Windows Server)
