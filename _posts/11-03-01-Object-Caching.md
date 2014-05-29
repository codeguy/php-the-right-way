---
title: Keširanje objekata
isChild: true
---

## Keširanje objekata {#object_caching_title}

Postoje situacije u kojima keširanje individalnih objekata može biti korisno, npr. kada je dobavljanje podataka previše zahtevno, ili kada je mala šansa da će se podaci u bazi podataka promeniti. Možete koristiti _software_ za keširanje objekata da sačuva te delove podataka u memoriji da bi ste kasnije mogli da im pristupite veoma brzo. Ako smestite te podatke u skladište podataka pošto ih dobavite, a onda ih, pri sledećem zahtevu, povučete iz keša, možete dobiti bitno poboljšanje u performansama, kao i smanjeno opeterećenje servera baze podataka.

Mnogi of popularnih bajtkod keš rešenja, vam dozvoljava da sačuvate i sopstvene podatke. Tako da postoji još više razloga da ih iskoristite. APCu, XCache i WinCache, svi oni pružaju API-je za čuvanje podataka iz vašeg PHP koda u njihov memorijski keš.

Najpopularniji keš sistemi za čuvanje objekata su APCu i memcached. APCu je odličan izbor za keširanje objekata, on uključuje jednostavan API za dodavanje vaših podataka u njegovu keš memoriju i veoma je lak za podešavanje i upotrebu. Jedino pravo ograničenje APCu je da je vezan za server na kome je instaliran. Memcached, sa druge strane, se instalira kao odvojen servis i može mu se pristupiti preko mreže, što znači da možete čuvati objekte u super brzom skladištu keša, a da drugi sistemi mogu da uzimaju podatke od njega.

Obratite pažnju kada izvršavate PHP kao (Fast-)CGI aplikaciju unutar servera, svaki PHP proces će imati svoj keš, tj. APCu podaci nisu deljeni između vaših "worker" procesa. U to slučaju, trebalo bi da razmotrite korišćenje memcached, pošto nije vezan za PHP procese.  

U umreženoj konfiguraciji APCu će uglavnom biti bolji od memcached-a u brzini pristupa, ali memcached može da se "skalira" brže i bolje. Ako ne očekujete da imate više servera koji će pokretati vašu aplikaciju, ili vam nisu potrebne dodatne opcije koje vam memcached nudi, onda vam je APCu verovatno bolji izbor za keširanje objekata.

Primer korišćenja APCu:

{% highlight php %}
<?php
// proveri da li postoje podaci sačuvani pod 'expensive_data' ključem u kešu
$data = apc_fetch('expensive_data');
if ($data === false) {
    // podaci nisu u kešu; sačuvaj rezultat skupog poziva za kasniju upotrebu
    apc_add('expensive_data', $data = get_expensive_data());
}

print_r($data);
{% endhighlight %}

Obratite pažnju da pre PHP verzije 5.5, APC je omogućavao i keširanje objekata i bajtkod keširanje. APCu je projekat koji vraća keširanje objekata u PHP 5.5+, pošto PHP sada ima ugrađen bajtkod keš (OPcache).

Naučite više o popularnim sistemima za keširanje objekata:

* [APCu](https://github.com/krakjoe/apcu)
* [APC Functions](http://php.net/manual/en/ref.apc.php)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [XCache APIs](http://xcache.lighttpd.net/wiki/XcacheApi)
* [WinCache Functions](http://www.php.net/manual/en/ref.wincache.php)
