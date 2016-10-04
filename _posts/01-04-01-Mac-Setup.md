---
title:   Nastavenie pre Mac
isChild: true
anchor:  mac_setup
---

## Nastavenie pre Mac {#mac_setup_title}

OS X už prichádza s prednastaveným PHP, ale obyčajne verzia trochu zaostáva za poslednou stabilnou verziou. Mavericks
prichádza s verziou 5.4.17, Yosemite s verziou 5.5.9 a El Capitan s verziou 5.5.29. Od vydania PHP 7.0 je ale toto
často nepostačujúce.

Je niekoľko spôsobou ako na OS X nainštalovať PHP.

### Inštalácia PHP pomocou Homebrew

[Homebrew] je všestranný správca balíkov pre OS X, ktorý vám môže zjednodušiť inštaláciou PHP a rôznych rozšírení.
Repozitár [Homebrew PHP] obsahuje "formulu" pre inštaláciu PHP pomocou Homebrew.

Pomocou príkazu `brew install` máte momentálne možnosť nainštalovať jednu z nasledujúcich verzií `php53`, `php54`,
`php55`, `php56`, alebo `php70`. Medzi jednotlivými verziami PHP je možné prepínať zmenou premennej prostredia `PATH`.
Na miesto manuálneho prepínania môžete použiť [brew-php-switcher][brew-php-switcher], ktorý sa postará o automatické
prepínanie za vás.

### Inštalácia PHP pomocou MacPorts

Projekt [MacPorts] je iniciatíva open-source komunity pre dizajn systému jednoduchého na použitie a umožňujúceho
kompiláciu, inštaláciu a aktualizáciu open-source softvéru pre príkazový riadkok, X11, alebo Aqua (OS X GUI), operačného
systému OS X.

MacPorts podporuje prekompilované binárne súbory, takže nie je nutné rekompilovať každú závislosť zo zdrojového tarball súboru. Toto vám ušetrí veľa času ak nemáte vo vašom systéme nainštalovaný žiaden balík.

Momentálne máte možnosť pomocou príkazu `port install` nainštalovať jednu z nasledujúcich verzií `php54`, `php55`,
`php56`, alebo `php70`. Napríklad:

    sudo port install php56
    sudo port install php70

Vašu aktívnu verziu PHP môžete prepnúť pomocou príkazu `select`:

    sudo port select --set php php70

### Inštalácia PHP pomocou phpbrew

[phpbrew] je nástroj pre inštaláciu a manažovanie viacerých verzií PHP. Toto môže byť veľmi užitočné ak dva rôzne
projekty, alebo aplikácie požadujú rozdielne verzie PHP a vy nepoužívate virtuálny server.

### Inštalácia PHP pomocou binárneho inštalátora of firmy Liip

Ďalšou populárnou možnosťou poskytujúcu lineárnu metódu inštalácie od verzie 5.3 až po 7.0 je [php-osx.liip.ch].
Táto metóda neprepisuje predinštalované binárne súbory PHP, ale všetko inštaluje do oddelenej zložky
(/usr/local/php5).

### Kompilácia zo zdrojového kódu

Ďalšou možnosťou, ktorá vám umožnuje kontrolu nad inštalovanou verziou PHP je
[kompilácia zo zdrojového kódu][mac-compile].
V tomto prípade sa uistite, či máte nainštalovaný [Xcode][xcode-gcc-substitution], alebo náhradu ["nástroje príkazového riadku pre XCode"][xcode-command-line-tools], ktorú si môžete stiahnuť z Apple centra pre vývojárov.

### Inštalačné programy všetko v jednom

Riešenia uvedené vyššie predovšetkým zaobchádzajú so samotným PHP a neposkytujú veci ako Apache, Nginx,
alebo SQL server.

Riešenia "všetko v jednom" ako napríklad [MAMP][mamp-downloads], alebo [XAMPP][xampp] toto nainštalujú a nastavia za
vás. Jednoduchosť inštalácie ale prichádza s cenou menšej flexibility.

[Homebrew]: http://brew.sh/
[Homebrew PHP]: https://github.com/Homebrew/homebrew-php#installation
[MacPorts]: https://www.macports.org/install.php
[phpbrew]: https://github.com/phpbrew/phpbrew
[php-osx.liip.ch]: http://php-osx.liip.ch/
[mac-compile]: http://php.net/install.macosx.compile
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
[xcode-command-line-tools]: https://developer.apple.com/downloads
[mamp-downloads]: http://www.mamp.info/en/downloads/
[xampp]: http://www.apachefriends.org/en/xampp.html
[brew-php-switcher]: https://github.com/philcook/brew-php-switcher
