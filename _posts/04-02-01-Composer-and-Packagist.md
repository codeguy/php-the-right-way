---
isChild: true
---

## Composer i Packagist {#composer_and_packagist_title}

Composer je **sjajan** menadžer zavisnosti za PHP. Navedite zavisnosti vašeg projekta u `composer.json` fajlu i sa par
jednostavnih komandi, Composer će automatski preuzeti zavisnosti vašeg projekta i podesiti autoučitavanje umesto vas.

Postoji dosta PHP biblioteka koje su već kompatibilne sa Composer-om, spremne da se koriste u vašem projektu. Ovi 
"paketi" su nabrojani na [Packagist][1]-u, zvaničnom repozitorijumu za PHP biblioteke kompatibilne sa Composer-om.

### Kako instalirati Composer

Možete da instalirate Composer u lokalu (u vašem trenutnom radnom direktorijumu; mada se to više ne preporučuje) ili 
globalno (npr /usr/local/bin). Hajde da pretpostavimo da želite da instalirate Composer u lokalu. Iz vašeg korenog 
direktorijuma projekta:

    curl -s https://getcomposer.org/installer | php

Ovo će preuzeti `composer.phar` (PHP binarnu arhivu). Možete je pokrenuti pomoću `php` radi upravljanja zavisnostima
vašeg projekta. <strong>Zapamtite:</strong> Ako preusmerite izvršavanje preuzetog koda direktno u interpreter (koristite pajp), 
molimo vas prvo pročitajte kod na udaljenom serveru kako biste proverili da li je bezbedan.

### Kako instalirati Composer (ručno)

Ručna instalacija Composer-a je napredna tehnika; međutim, postoje razni razlozi zašto bi se developer pre odlučio za 
ovu opciju nego za interaktivnu proceduru instalacije. Interaktivna instalacija proverava vašu PHP instalaciju da bi 
obezbedila da:

- se koristi dovoljno visoka verzija PHP
- `.phar` fajlovi mogu da se ispravno izvrše
- postoje dovoljna ovlašćenja nad određenim direktorijumima
- određene problematične ekstenzije nisu učitane
- određene `php.ini` opcije su podešene

Pošto ručna instalacija ne vrši nijednu od ovih provera, morate doneti odluku da li vam se ovaj kompromis isplati. 
Imajući to u vidu, evo uputstva kako nabaviti Composer ručno:

    curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
    chmod +x $HOME/local/bin/composer

Putanja `$HOME/local/bin` (ili direktorijum po vašem izboru) bi trebalo da se nalazi u vašoj promenljivoj okruženja 
`$PATH`. Time će komanda `composer` postati dostupna.

Kada se sretnete sa dokumentacijom koja pokreće Composer kao `php composer.phar install`, to možete zameniti sa:

    composer install

### Kako definisati i instalirati zavisnosti

Composer čuva vaše zavisnosti projekta u fajlu sa nazivom `composer.json`. Možete ga održavati ručno ako želite, ili 
možete koristiti sam Composer. Komanda `composer require` dodaje zavisnost projekta i ako nemate 
`composer.json` fajl, on će biti napravljen. Sledeći primer dodaje [Twig][2] kao zavisnost vašeg projekta.

    composer require twig/twig:~1.8

Opciono, komanda `composer init` će vas voditi kroz pravljenje kompletnog `composer.json` fajla za vaš 
projekat. Svejedno na koji način, jednom kada napravite fajl `composer.json` možete dati instrukciju Composer-u da 
preuzme i instalira vaše zavisnosti u direktorijum `vendors/`. Ovo važi i za projekte koje ste preuzeli koji već sadrže 
`composer.json` fajl:

    omposer install

Zatim, dodajte ovu liniju u primarni PHP fajl vaše aplikacije; ovo će reći PHP-u da koristi Composer-ov autoloader za 
zavisnosti vašeg projekta.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Sada možete koristiti vaše zavisnosti projekta, i one će se po zahtevu automatski učitati.

### Ažuriranje vaših zavisnosti

Composer kreira fajl `composer.lock` koji čuva tačnu verziju svakog paketa koji je preuzeo kada ste prvi put pokrenenuli 
`php composer.phar install`. AKo delite vaš projekat sa drugim programerima a fajl `composer.lock` je deo vaše 
distribucije, kada oni pokrenu `php composer.phar install` dobiće iste verzije kao i vi. Da biste ažurirali vaše 
zavisnosti, pokrenite `php composer.phar update`.

Ovo je najkorisnije kada fleksibilno definišete zahteve verzije. Na primer, zahtev verzije ~1.8 znači "sve što je novije
od verzije 1.8.0, ali manje od 2.0.x-dev". Možete takođe koristiti i `*` magični karakter kao u `1.8.*`. Sada će 
Composer-ova `php composer.phar update` komanda ažurirati sve vaše zavisnosti na najnoviju verziju koja odgovara 
ograničenjima koja ste definisali.

### Obaveštenja o update-ima

Da biste dobili obaveštenja o novim objavljenim verzijama možete se prijaviti na [VersionEye][3], web servis 
koji može da posmatra vaše GitHub ili BitBucket naloge za fajlovima `composer.json` i da vam šalje mejlove sa 
novim verzijama paketa.

### Proveravanje vaših zavisnosti sa aspekta sigurnosti

[Security Advisories Checker][3] je web servis i alat koji se izvršava sa komandne linije, oba će pregledati vaš 
`composer.lock` fajl i obavestiti vas ako je potrebno da ažurirate bilo koju od vaših zavisnosti.

* [Naučite više o Composer-u][4]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: https://www.versioneye.com/
[4]: https://security.sensiolabs.org/
[5]: http://getcomposer.org/doc/00-intro.md
