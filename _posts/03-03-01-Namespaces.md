---
title: Menné priestory
isChild: true
anchor:  namespaces
---

## Menné priestory {#namespaces_title}

PHP komunita má množstvo vývojárov vytvárajúcich množstvo kódu, ako už bolo spomenuté vyššie. Tento fakt môže spôsobiť
to, že rôzne knižnice môžu používať rovnaké názvy tried. Ak sú dve takéto knižnice použité v rovnakom mennom priestore,
potom medzi nimi nastane kolízia, čo spôsobuje problémy.

Riešením na tento problém sú _Menné priestory_. Ako je spomenuté v referenčnom manuáli PHP, menné priestory môžu byť
prirovnané k adresárom v operačných systémoch, ktoré menná trieda uchováva; dva súbory s rovnakým menom môžu koexistovať
v separátnych adresároch. Podobne, dve PHP triedy s rovnakým názvom môžu koexistovať v separátnych menných priestoroch.

Je dôležité, aby váš kód bol v mennom priestore. V prípade použitia vášho kódu inými vývojármi toto zabezpečí,
že nebude kolidovať s ostatnými knižnicami.

Jeden z odporučených spôsobov použitia menných priestorov je naznačený v doporučení [PSR-4][psr4]. Toto doporučenie
si kladie za cieľ poskytnúť konvencie pre štandardný súbor, triedu a menný priestor, čo umožňuje použitie kódu
ako plug-and-play.

PHP-FIG v októbri 2014 označila predchádzajúce doporučenie pre samozavádzanie (autoloading), [PSR-0][psr0],
ako zastaralé. Toto doporučenie bolo nahradené doporučením [PSR-4][psr4]. Obe doporučenia sú stále použiteľné, a pretože
PSR-4 požaduje minimálne verziu PHP 5.3, PSR-0 naďalej ostáva, keďže mnoho PHP 5.2 projektov toto doporučenie uplatňuje.
Mnoho PHP 5.2 projektov je našťastie aktualizovaných na novšie verzie, takže je doporučenie PSR-0 používané stále menej
a menej.

Ak sa vo vašej novej aplikácií, alebo balíku chystáte použiť štandard pre samozavádzanie, potom doporučenie PSR-4 je
tá správna voľba.

* [Prečítajte si o menných priestoroch][namespaces]
* [Prečítajte si o PSR-0][psr0]
* [Prečítajte si o PSR-4][psr4]


[namespaces]: http://php.net/language.namespaces
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr4]: http://www.php-fig.org/psr/psr-4/
