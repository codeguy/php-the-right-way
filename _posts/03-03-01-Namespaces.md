---
title: Namespace-ovi (imenski prostor)
isChild: true
---

## Namespace-ovi (imenski prostor) {#namespaces_title}

Kao što je gore navedeno, PHP zajednica se sastoji od mnogo programera koji stvaraju gomilu koda. To znači da kod jedne
biblioteke može da koristi isto ime klase kao neka druga biblioteka. Kada se obe biblioteke koriste u istom namespace-u,
dolazi do kolizije i problema.

_Namespace-ovi_ rešavaju ovaj problem. Kako je i opisano u PHP manualu, namespace-ovi se mogu uporediti sa
direktorijumima operativnog sistema koji fajlove _dele na imenski prostor_; dva istoimena fajla mogu postojati istovremeno u
različitim direktorijumima. Isto tako, dve PHP klase istog imena mogu postojati u različitim PHP namespace-ovima. Jednostavno
baš tako.

Veoma je važno je da koristite namespace-ove u vašem kodu kako bi drugi developeri mogli da ga koriste bez straha od kolizije sa drugim bibliotekama.

Jedan preporučen način da koristite namespace-ove opisan je u [PSR-0][psr0], čiji je cilj da pruži standarizovanu konvenciju
za fajlove, klase i namespace-ove da bi omogućio postojanje plug-and-play (uključi i koristi) koda.

U decembru 2013. godine PHP-FIG je kreirala novi autoloading standard: [PSR-4][psr4], koji će verovatno jednog dana zameniti
PSR-0. Trenutno su oba u upotrebi jer PSR-4 zahteva PHP 5.3 i mnogi PHP 5.2 projekti trenutno implementiraju PSR-0. Ako
planirate da koristite autoloader standard u novoj aplikaciji ili paketu onda zasigurno želite da pogledate PSR-4.

* [Pročitajte više o Namespace-ovima][namespaces]
* [Pročitajte o PSR-0][psr0]
* [Pročitajte o PSR-4][psr4]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
