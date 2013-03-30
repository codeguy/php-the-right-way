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

<<<<<<< HEAD
Ručna instalacija composera je napredna tehnika; međutim, postoje razni razlozi zašto bi se developer pre odlučio za ovu opciju nego za interaktivnu proceduru instalacije. Interaktivna instalacija proverava vašu PHP  installation da bi obezbedila da:
=======
Manually installing Composer is an advanced technique; however, there are various reasons why a developer might prefer this method vs. using the interactive installation routine. The interactive installation checks your PHP installation to ensure that:
>>>>>>> 1493f8cf3d10937de181ed0e7c2817489db9aff1

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

<<<<<<< HEAD
Najpre, napravite `composer.json` fajl u direktorijumu gde se nalazi `composer.phar`. Evo primera koji lists [Twig][2] as a project dependency.
=======
Composer keeps track of your project's dependencies in a file called `composer.json`. You can manage it by hand if you like, or use Composer itself. The `php composer.phar require` command adds a project dependency and if you don't have a `composer.json` file, one will be created. Here's an example that adds [Twig][2] as a dependency of your project. Run it in your project's root directory where you've downloaded `composer.phar`:
>>>>>>> 1493f8cf3d10937de181ed0e7c2817489db9aff1

	php composer.phar require twig/twig:~1.8

<<<<<<< HEAD
ZatimNext, run this command from your project root directory.
=======
Alternatively the `php composer.phar init` command will guide you through creating a full `composer.json` file for your project. Either way, once you've created your `composer.json` file you can tell Composer to download and install your dependencies into the `vendors/` directory. This also applies to projects you've downloaded that already provide a `composer.json` file:
>>>>>>> 1493f8cf3d10937de181ed0e7c2817489db9aff1

    php composer.phar install

Next, add this line to your application's primary PHP file; this will tell PHP to use Composer's autoloader for your project dependencies.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Now you can use your project dependencies, and they'll be autoloaded on demand.

### Updating your dependencies

Composer creates a file called `composer.lock` which stores the exact version of each package it downloaded when you first ran `php composer.phar install`. If you share your project with other coders and the `composer.lock` file is part of your distribution, when they run `php composer.phar install` they'll get the same versions as you. To update your dependencies, run `php composer.phar update`.

This is most useful when you define your version requirements flexibly. For instance a version requirement of ~1.8  means "anything newer than 1.8.0, but less than 2.0.x-dev". You can also use the `*` wildcard as in `1.8.*`. Now Composer's `php composer.phar update` command will upgrade all your dependencies to the newest version that fits the restrictions you define.

### Checking your dependencies for security issues

The [Security Advisories Checker][3] is a web service and a command-line tool, both will examine your `composer.lock` file and tell you if you need to update any of your dependencies.

* [Learn about Composer][4]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: http://getcomposer.org/doc/00-intro.md
[4]: https://security.sensiolabs.org/
