---
isChild: true
---

## Composer i Packagist {#composer_and_packagist_title}

Composer je **sjajan** dependency manager za PHP. Izlistajte dependencies vašeg projekta u `composer.json` fajlu i sa par jednostavnih komandi, Composer će automatski download dependencies vašeg projekta i podesiti autoučitavanje umesto vas.

Već postoji dosta PHP biblioteka koje su kompatibilne sa Composer, spremne da se koriste u vašem projektu. Ovi "paketi" su nabrojani u [Packagist][1], zvaničnom repozitorijumu za PHP biblioteke kompatibilne sa Composer-om.

### Kako instalirati Composer

Možete da instalirate Composer u lokalu (u vašem trenutnom radnom direktorijumu; ali se to više ne preporučuje) ili globalno (npr /usr/local/bin). hajde da pretpostavimo da želite da instalirate Composer u lokalu. Iz vašeg korenog direktorijuma projekta:

    curl -s https://getcomposer.org/installer | php

Ovo će download `composer.phar` (PHP binarnu arhivu). Možete je pokrenuti pomoću `php` radi upravljanja (zavisnostima?) dependencies vašeg projekta. <strong>Zapamtite:</strong> If you pipe downloaded kod direktno u interpreter, molimo vas prvo pročitajte kod online da biste proverili da li je bezbedan.

###Kako instalirati Composer (ručno)

Ručna instalacija composera je napredna tehnika; međutim, postoje razni razlozi zašto bi se developer pre odlučio za ovu opciju nego za interaktivnu proceduru instalacije. Interaktivna instalacija proverava vašu PHP  installation da bi obezbedila da:

- se koristi (odgovarajuća?)dovoljno visoka verzija PHP
- `.phar` fajlovi mogu da se ispravno izvrše
- postoje dovoljna ovlašćenja nad određenim direktorijumima
- određene problematične ekstenzije nisu učitane
- određena `php.ini` podešavanja su podešena (? settings are set)

Pošto ručna instalacija ne vrši nijednu od ovih provera, morate doneti odluku da li vam se ovaj kompromis isplati. imajući to u vidu, evo uputstva kako nabaviti Composer ručno:

    curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
    chmod +x $HOME/local/bin/composer

Putanja `$HOME/local/bin` (ili direktorijum po vašem izboru) bi trebalo da se nalazi u vašoj environment? promenljivoj `$PATH`. Time će komanda `composer` postati dostupna.

Kada se sretnete sa dokumentacijom koja pokreće Composer kao `php composer.phar install`, to možete zameniti sa:

    composer install

### Kako definisati i instalirati Dependencies

Najpre, napravite `composer.json` fajl u direktorijumu gde se nalazi `composer.phar`. Evo primera koji lists [Twig][2] as a project dependency.

	{
	    "require": {
	        "twig/twig": "1.8.*"
	    }
	}

ZatimNext, run this command from your project root directory.

    php composer.phar install

This will download and install the project dependencies into a `vendors/` directory. Next, add this line to your application's primary PHP file; this will tell PHP to use Composer's autoloader for your project dependencies.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Now you can use your project dependencies, and they'll be autoloaded on demand.

* [Learn about Composer][3]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: http://getcomposer.org/doc/00-intro.md
