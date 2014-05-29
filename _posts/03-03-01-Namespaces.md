---
title: Namespaces - imenski prostori
isChild: true
---

## Namespaces - imenski prostori {#namespaces_title}

Kao što smo spomenuli iznad, PHP zajednica ima mnogo developera koji stvaraji dosta koda. To znači da jedna biblioteka 
PHP koda može da koristi isto ime za klasu kao neka druga biblioteka. Kada se obe biblioteke koriste u istom imenskom 
prostoru, oni se "sudare" i prouzrokuju probleme.



_Namespaces_ rešavaju taj problem. Kao što je opisano i PHP uputstvu, imenski prostori se mogu uporediti sa 
direktorijumima u operativnom sistemu. Dva fajla sa istim imenima mogu da postoje u različitim direktorijumima. Isto 
tako, dve PHP klase sa istim imenom mogu da postoje u različitim imenskim prostorima. Tako je prosto.

Važno je za tebe da koristiš imenske prostore u tvom kodu, da bi drugi programeri mogli da ga koriste bez bojazni da će 
se sudarati sa ostalim bibliotekama.

Jedan preporučen način za korišćenje _namespace_-ova je opisan u [PSR-0][psr0], koji cija da pruži standard za 
fajlove, klase i _namespace_-ove da bi omogućio _plug-and-play_ kod.

* [Pročitajte o imenskim prostorima][namespaces]
* [Pročitajte o PSR-0][psr0]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
