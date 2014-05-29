---
title: Programske paradigme
isChild: true
---

## Programske paradigme {#programming_paradigms_title}

PHP je fleksibilan, dinamičan jezik koji prodržava različite programske tehnike. Dramatično je evoluirao tokom proteklih
godina, neke od značajnih izmena su dodavanje solidnog objektno-orijentisanog modela u PHP 5.0 (2004), anonimnih funkcija i 
imenskih prostora u PHP 5.3 (2009), i trait-ova (osobina) u PHP 5.4 (2012).


### Objektno-orijentisano programiranje

PHP ima kompletan set objektno-orijentisanih osobina uključujući podršku za klase, abstraktne klase, interfejse, 
nasleđivanje, konstuktore, kloniranje, izuzetke, i još. 

* [Pročitajte o objektno-orijentisanom PHP-u][oop]
* [Pročitajte o Traits][traits]

### Funckionalno programiranje

PHP podržava funkcije prve klase, što znači da funkcije mogu da se dodele promenljivim. I korisničke i ugrađene funkcije 
mogu da se referenciraju kroz promenljive i pozivaju dinamički. Funkcije mogu da se prosleđuju kao argumenti drugih 
funkcija (osobina zvana funkcije višeg reda) i isto tako mogu da se vraćaju kao povratni tip drugih funkcija.

Rekurzija, odlika koja dozvoljava funkciji da poziva samu sebe je podržana, ali većina PHP koda se fokusira na 
iteracije.

Nove anonimne funkcije (sa podrškom za _closures_) su deo jezika od PHP verzije 5.3 (2009).

U PHP 5.4 je dodata mogućnost da se _closures_ vezuju za obim objekta, kao i poboljšana podrška za _callables_ tako da 
se mogu koristiti zamenljivo sa anonimnim funkcijama u skoro svim slučajevima.

* Nastavite čitanje o [funkcionalnom programiranju u PHP-u](/pages/Functional-Programming.html)
* [Pročitajte o anonimnim funkcijama][anonymous-functions]
* [Pročitajte o _Closure_ klasi][closure-class]
* [Više detalja u _Closures RFC_][closures-rfc]
* [Pročitajte o _Callables_][callables]
* [Pročitajte o dinamički pozivanje funkcija sa `call_user_func_array`][call-user-func-array]

### Meta programiranje

PHP podržava različite vrste meta programiranja uz pomoć mehanizama kao što su _Reflection API_ i magične metode. 
Postoje mnoge magične metode kao npr. `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`, itd. koje 
dozvoljavaju programerima da se nakače na ponašanje klase. _Ruby_ programeri često kažu kako PHP-u nedostaje 
`method_missing`, ali postoji kao metode `__call()` and `__callStatic()`.

* [Pročitajte o magičnim metodama][magic-methods]
* [Pročitajte o  _Reflection_][reflection]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[overloading]: http://php.net/manual/en/language.oop5.overloading.php
[oop]: http://www.php.net/manual/en/language.oop5.php
[anonymous-functions]: http://www.php.net/manual/en/functions.anonymous.php
[closure-class]: http://php.net/manual/en/class.closure.php
[callables]: http://php.net/manual/en/language.types.callable.php
[magic-methods]: http://php.net/manual/en/language.oop5.magic.php
[reflection]: http://www.php.net/manual/en/intro.reflection.php
[traits]: http://www.php.net/traits
[call-user-func-array]: http://php.net/manual/en/function.call-user-func-array.php
[closures-rfc]: https://wiki.php.net/rfc/closures
