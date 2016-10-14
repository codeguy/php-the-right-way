---
title: Sprievodca štýlom písania kódu
anchor: code_style_guide
---

# Sprievodca štýlom písania kódu {#code_style_guide_title}

PHP komunita je veľká a rozmanitá. Skladá sa z nespočetného množstva knižníc, frameworkov a komponentov.
Pre PHP programátorov je ich bežné používať a kombinovať v rámci jedného projektu aj niekoľko naraz. Je dôležité, aby sa
kód PHP pridržiaval, pokiaľ možno čo najbližšie, k všeobecne zaužívanému štýlu písania kódu. Toto programátorom uľahčuje
v ich projektoch použiť rôzne knižnice bez nutnosti použitia rôznych štýlov písania kódu v rôznych častiach.

Skupina [Framework Interop Group][fig] navrhla a odsúhlasila sériu doporučení pre písanie kódu. Nie každé z týchto
doporučení ale s týmto súvisí. Tie, ktoré sa tohto týkajú sú [PSR-0][psr0], [PSR-1][psr1], [PSR-2][psr2]
a [PSR-4][psr4]. Tieto doporučenia sú viacmenej zoznamom pravidiel, ktoré projekty ako napríklad Drupal, Zend,
Symfony, CakePHP, phpBB, AWS SDK, FuelPHP, Lithium, atď. začinajú zavádzať. Tieto doporučenia môžete použiť taktiež
vo vašich projektoch, alebo naďalej pokračujte v používaní vášho osobného štýlu.

Kód PHP by ste mali ideálne písať tak, aby sa pridržiaval všeobecne známemu štandardu. Toto môže byť ľubovolná
kombinácia doporúčení PSR, alebo jeden zo štandardov PEAR, alebo Zend. Toto zabezpečí čitateľnosť vášho kódu pre iných
programátorov a konzistentnosť štýlu kódu v aplikáciach, ktoré môžu váš kód potencionálne použivať.

* [Prečítajte si o PSR-0][psr0]
* [Prečítajte si o PSR-1][psr1]
* [Prečítajte si o PSR-2][psr2]
* [Prečítajte si o PSR-4][psr4]
* [Prečítajte si o štandarde písania kódu PEAR][pear-cs]
* [Prečítajte si o štandarde písania kódu Symfony][symfony-cs]

Pre kontrolu, či váš kód dodržiava niektorého z týchto doporučení možete použiť nástroj [PHP_CodeSniffer][phpcs].
PHP_CodeSniffer môže byť použitý pre kontrolu ľubovolného doporučenia a dostupné pluginy pre textové editory,
ako napríklad [Sublime Text][st-cs], poskytujú spätnú väzbu v reálnom čase.

Štýlovanie kódu môžete opraviť automaticky pomocou jedného z nasledujúcich nástrojov:

- Jedním z nich je [PHP Coding Standards Fixer][phpcsfixer], ktorý má veľmi dobre testovanú kódovú základňu.
- Ďalším je [PHP Code Beautifier and Fixer][phpcbf], nástroj, ktorý je súčasťou nástoja PHP_CodeSniffer.

Nátroj PHP_CodeSniffer môžete spustiť manuálne z príkazového riadku pomocou nasledovného príkazu:

    phpcs -sw --standard=PSR2 file.php

Výstup programu vám ukáže chyby v testovanom súbore spolu s popisom, ako tieto chyby odstrániť. Začlenenie tohto
programu v zásuvnom module Git ([Git Hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)) môže byť taktiež
užitočné. Vďaka tomuto nebude možné uložiť zmeny do repozitára z takých vetiev, ktorých súbory porušujú jeden
z vybraných štandardov, pokiaľ tieto nebudú opravené.

Pokiaľ používate PHP_CodeSniffer, potom môžete opraviť nezhody v štruktúre kódu automaticky pomocou nástroja
[PHP Code Beautifier and Fixer][phpcbf].

    phpcbf -w --standard=PSR2 file.php

Ďalšiou možnoťou je použiť nástroj [PHP Coding Standards Fixer][phpcsfixer].

Tento nástroj vám zobrazí druhy chýb v štruktúre kódu a následne tieto chyby opraví.

    php-cs-fixer fix -v --level=psr2 file.php

Preferovaným jazykom pre všetky názvy symbolov a infraštruktúru kódu je angličtina. Komentáre v kóde môžu byť písané
v ľubovoľnom jazyku a mali by byť ľahko čitateľné pre každého, čo s daným kódom pracuje, alebo bude v budúcnosti
pracovať.

[fig]: http://www.php-fig.org/
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr1]: http://www.php-fig.org/psr/psr-1/
[psr2]: http://www.php-fig.org/psr/psr-2/
[psr4]: http://www.php-fig.org/psr/psr-4/
[pear-cs]: http://pear.php.net/manual/en/standards.php
[symfony-cs]: http://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[phpcbf]: https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: http://cs.sensiolabs.org/
