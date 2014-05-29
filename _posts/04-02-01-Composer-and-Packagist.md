---
title: Composer i Packagist
isChild: true
---

## Composer i Packagist {#composer_and_packagist_title}

_Composer_ je **genijalan** menadžer zavisnosti za PHP. Navedite zavisnosti vašeg projekta u `composer.json` fajlu, i uz 
pomoć nekoliko jednostavnih komandi, _Composer_ će sam automatski da poskida zavisnosti sa interneta i podesi 
_autoloading_ za vas.

Već postoji veliki broj PHP biblioteka koje su kompatibilne sa _Composer_-om, spremne za korišćenje u vašem projektu. Ti 
paketi su izlistani na [Packagist-u][1], oficijalnom repozitorijumu za biblioteke koje su kompatibilne sa _Composer_-om.

### Kako instalirati Composer

_Composer_ možete instalirati lokalno (u direktorijum u kome trenutno radite; mada se ovaj pristup više ne preporučuje) 
, ili globalno (npr. /usr/local/bin). Pretpostavimo da želite da instalirate _Composer_ lokalno. Iz _root_ direktorijuma
vašeg projekta:

    curl -s https://getcomposer.org/installer | php

Ta komanda će skinuti `composer.phar` (PHP binarnu arhivu). Možete pokrenuti to sa `php` da biste upravljali 
zavisnostima. <strong>Pažnja:</strong> Ako pokrećete skinuti kod direktno u interpreteru, molimo vas da se prvo uverite 
da je kod bezbedan.

### Kako instalirati Composer (ručno)

Ručno instaliranje _Composer_-a je napredna tehnika; uprkos tome, postoje različiti razlozi zašto developer može da 
preferira ovaj metod, a ne korišćenje metode koje smo iznad objasnili. Interaktivna instalacija proverava vašu PHP 
instalaciju da se uveri da:

- je verzija PHP-a zadovoljavajuća
- se `.phar` fajlovi mogu izvršiti ispravno
- su dozvole određenih drektorijuma dovoljne
- neke problematične ekstenzije nisu uključene
- su neka podešavanja u `php.ini` fajlu ispravna

Pošto ručna instalacija ne izvodi nijednu od tih provera, vi morate da odlučite da li vam taj kompromis odgovara. Sada 
kada smo to razjasnili, ispod možete naći uputstvo za ručnu instalaciju _Composer_-a:

    curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
    chmod +x $HOME/local/bin/composer

Putanja `$HOME/local/bin` (ili direktorijum po vašem izboru) treba da se nalazi u `$PATH` sistemskoj promenljivoj. Time
ćete `composer` komandu učiniti dostupnom.

Kada naiđete na dokumentaciju koja objašnjava da _Composer_ pokrenete sa `php composer.phar install` komandom, tu  komandu možete zameniti sa:

    composer install

### Kako definisati i instalirati zavisnosti

_Composer_ prati zavisnosti vašeg projekta u fajlu koji se zove `composer.json`. Možete da upravljate njime ručno, ako želite, ili možete da koristite sam _Composer_. Komanda `php composer.phar require` dodaje zavisnost projektu i ako nemate `composer.json` fajl, on će biti kreiran. Sledi primer koji objašnjava kako dodati [_Twig_][2] kao zavisnost vašeg projekta. Pokrenite sledeću komandu u _root_ direktorijumu vašeg projekta, pošto ste skunuli `composer.phar`:

	php composer.phar require twig/twig:~1.8

Alternativno komanda `php composer.phar init` će vam pomoći da kreirate pun `composer.json` fajl za vaš projekat. U savkom slučaju, kada napravite vaš `composer.json` fajl, tada možete reći _Composer_-u da skine i instalira vaše zavisnosti u  `vendors/` direktorijum. Ovo se takođe odnosi na projekte koje ste vi skinuli, a koji već imaju svoj `composer.json` fajl.
    
	php composer.phar install
	
Posle toga, dodajte sledeću liniju u glavni PHP fajl vaše aplikacije; Ovo će reći PHP-u da koristi _Composer_-ov _autoloader_  za zavisnosti vašeg projekta.	

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Sada možete koristiti zavisnosti vašeg projekta, jer će biti uključeni automatski , kada budu zatraženi.

### Ažuriranje vaših zavisnosti

_Composer_ kreira fajl nazvan `composer.lock` koji čuva tačnu verziju svakog paketa koji je skinuo kada ste prvi put pokrenuli `php composer.phar install` komandu. Ako delite vaš projekat sa drugim programerima, a `composer.lock` fajl je deo vaše distribucije, kada oni budu pokrenuli `php composer.phar install` komandu, _Composer_ će se pobrinuti da i oni imaju iste verzije paketa kao i vi. Da biste ažurirali vaše zavisnosti pokrenite `php composer.phar update`.

To je veoma korisno kada verzije paketa definišete fleksibilno. Npr. zahtevamo verziju ~1.8 znači "bilo koja novija verzija od 1.8.0, ali manja od 2.0.x-dev", takođe možete koristiti `*` džoker kao u `1.8.*`. Sada će komanda `php composer.phar update` unaprediti sve vaše zavisnosti na najnovije verzije koje se slažu sa zahtevima koje ste naveli.

### Bezbednost - provera vaših zavisnosti

[Security Advisories Checker][3] je _web_ servis i CLI alat, koji će ispitati vaš `composer.lock` fajl i reći vam ako treba da ažurirate neke zavisnosti.

* [Naučite o Composer-u][4]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: https://security.sensiolabs.org/
[4]: http://getcomposer.org/doc/00-intro.md

