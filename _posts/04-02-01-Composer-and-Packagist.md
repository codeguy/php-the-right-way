---
isChild: true
---

## Composer i Packagist {#composer_and_packagist_title}

Composer je **sjajan** dependency manager za PHP. Izlistajte dependencies vašeg projekta u `composer.json` fajlu i sa par jednostavnih komandi, Composer će automatski download dependencies vašeg projekta i podesiti autoučitavanje umesto vas.

Već postoji dosta PHP biblioteka koje su kompatibilne sa Composer-om, spremne da se koriste u vašem projektu. Ovi "paketi" su nabrojani u [Packagist][1], zvaničnom repozitorijumu za PHP biblioteke kompatibilne sa Composer-om.

### Kako instalirati Composer

Možete da instalirate Composer u lokalu (u vašem trenutnom radnom direktorijumu; ali se to više ne preporučuje) ili globalno (npr /usr/local/bin). Hajde da pretpostavimo da želite da instalirate Composer u lokalu. Iz vašeg korenog direktorijuma projekta:

    curl -s https://getcomposer.org/installer | php

Ovo će download `composer.phar` (PHP binarnu arhivu). Možete je pokrenuti pomoću `php` radi upravljanja (zavisnostima?) dependencies vašeg projekta. <strong>Zapamtite:</strong> If you pipe downloaded kod direktno u interpreter, molimo vas prvo pročitajte kod online da biste proverili da li je bezbedan.

###Kako instalirati Composer (ručno)

Ručna instalacija composera je napredna tehnika; međutim, postoje razni razlozi zašto bi se developer pre odlučio za ovu opciju nego za interaktivnu proceduru instalacije. Interaktivna instalacija proverava vašu PHP instalaciju da bi obezbedila da:

- se koristi (odgovarajuća?)dovoljno visoka verzija PHP
- `.phar` fajlovi mogu da se ispravno izvrše
- postoje dovoljna ovlašćenja nad određenim direktorijumima
- određene problematične ekstenzije nisu učitane
- određena `php.ini` podešavanja su podešena (? settings are set)

Pošto ručna instalacija ne vrši nijednu od ovih provera, morate doneti odluku da li vam se ovaj kompromis isplati. Imajući to u vidu, evo uputstva kako nabaviti Composer ručno:

    curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
    chmod +x $HOME/local/bin/composer

Putanja `$HOME/local/bin` (ili direktorijum po vašem izboru) bi trebalo da se nalazi u vašoj environment? promenljivoj `$PATH`. Time će komanda `composer` postati dostupna.

Kada se sretnete sa dokumentacijom koja pokreće Composer kao `php composer.phar install`, to možete zameniti sa:

    composer install

### Kako definisati i instalirati Dependencies

Composer čuva keeps track of your project's dependencies in a file called `composer.json`. Možete ga održavati ručno ako želite, ili možete koristiti sam Composer. Komanda `php composer.phar require` dodaje project dependency i ako nemate `composer.json` fajl, on će biti napravljen. Sledeći primer dodaje [Twig][2] kao dependency vašeg projekta. Pokrenite ga u korenom direktorijumu vašeg projekta gde ste downloadovali `composer.phar`:

	php composer.phar require twig/twig:~1.8

Opciono, komanda `php composer.phar init` će vas voditi kroz pravljenje kompletnog `composer.json` fajla za vaš projekat. Svejedno na koji način, jednom kada napravite fajl `composer.json` možete dati instrukciju Composer-u da download i instalira vaše dependencies u direktorijum `vendors/`. Ovo važi i za projekte koje ste downloadovali koji već sadrže `composer.json` fajl:

    php composer.phar install

Zatim, dodajte ovu liniju u primarni PHP fajl vaše aplikacije; ovo će reći PHP-u da koristi Composer-ov autoloader za dependencies vašeg projekta.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Sada možete koristiti vaše project dependencies, i one će se po zahtevu automatski učitati.

### Ažuriranje vaših dependencies

Composer kreira fajl `composer.lock` koji čuva exact verziju svakog paketa koji je downloadovao kada prvi put pokrenete `php composer.phar install`. AKo šerujete vaš projekat sa drugim programerima a fajl `composer.lock` je deo vaše distribucije, kada oni pokrenu `php composer.phar install` dobiće iste verzije kao i vi. Da biste ažurirali vaše dependencies, pokrenite `php composer.phar update`.

Ovo je najkorisnije kada fleksibilno definišete version requirements. Na primer, a version requirement of ~1.8  znači "sve što je novije od verzije 1.8.0, ali  manje od 2.0.x-dev". Možete takođe koristiti i `*` wildcard kao u `1.8.*`. Sada će Composer-ova `php composer.phar update` komanda ažurirati sve vaše dependencies na najnoviju verziju koja odgovara ograničenjima koja ste definisali.

### Proveravanje vaših dependencies sa aspekta sigurnosti

[Security Advisories Checker][3] je web servis i alat koji se izvršava sa komandne linije, oba će pregledati vaš `composer.lock` fajl i obavestiti vas ako je potrebno da ažurirate bilo koju od vaših dependencies.

* [Naučite više o Composer-u][4]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: http://getcomposer.org/doc/00-intro.md
[4]: https://security.sensiolabs.org/
