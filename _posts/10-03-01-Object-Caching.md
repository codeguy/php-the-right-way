---
isChild: true
---

## Object Caching {#object_caching_title}

Postoje momenti kada keširanje pojedinačnih objekata u vašem kodu može biti korisno, kao što je sa podacima skupim za uzimanje ili pozivima ka bazi podataka gde je malo verovatno da će se rezultat promeniti. Možete da koristite softver za keširanje objekata za držanje ovih delova podataka u memoriji, za izuzetno brz pristup kasnije. Ako sačuvate ove delove podataka u skladište podataka nakon što ih preuzmete, a onda ih povučete direktno iz keša za naredne zahteve, možete ostvariti značajno poboljšanje u performansama i smanjiti opterećenje na serverima sa bazama podataka.

Mnoga od popularnih bytecode caching rešenja Vam takođe dopuštaju i keširanje prilagođenih podataka, tako da ima više razloga da iskoristite njihove prednosti. APC, XCache, i WinCache, svi obezbeđuju API-je da sačuvate podatke iz Vašeg PHP koda u njihov memorijski keš.

Najčešće korišćeni sistemi za keširanje objekata su APC i memcached. APC je odličan izbor za memorijsko keširanje, on uključuje jednostavan API za dodavanje Vaših vlastitih podataka svom memorijskom kešu i veoma je lak za podešavanje i korišćenje. Jedino pravo ograničenje je da je APC povezan sa serverom na koji je instaliran. Sa druge strane Memcached je instaliran kao zaseban servis i može mu se pristupiti preko mreže, što znači da možete da sačuvate objekte u hiper-brzo skladište podataka na centralnoj lokaciji iz kojeg mnogo različitih sistema može da povlači podatke.

Imajte na umu da kada se radi o PHP-u kao(Fast-)CGI aplikaciji unutar Vašeg webservera, svaki PHP proces će imati svoj keš, odnosno APC podaci nisu podeljeni između Vaših radnih procesa. U ovim slučajevima, možda ćete želeti da razmotrite korišćenje memcached-a, jer nije vezan za PHP procese.

U umreženoj konfiguraciji APC će obično nadmašiti memcached u smislu pristupne brzine, ali memcached ćete moći
da skalirate brže i dalje. Ako ne očekujete da će više servera pokretati Vašu aplikaciju, ili vam ne trebaju dodatne funkcije koje nudi memcached, onda je APC verovatno Vaš najbolji izbor za keširanje objekata.

Primer logike koji koristi APC:

{% highlight php %}
<?php
// proveri da li su podaci u kešu sačuvani kao 'skupi_podaci'
$data = apc_fetch('expensive_data');
if ($data === false) {
    // podaci nisu u kešu; sačuvaj rezultat skupog poziva za kasnije korišćenje
    apc_add('expensive_data', $data = get_expensive_data());
}

print_r($data);
{% endhighlight %}

Saznajte više o popularnim object caching sistemima:

* [APC Functions](http://php.net/manual/en/ref.apc.php)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [XCache APIs](http://xcache.lighttpd.net/wiki/XcacheApi)
* [WinCache Functions](http://www.php.net/manual/en/ref.wincache.php)
