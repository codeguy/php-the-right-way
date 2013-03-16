---
isChild: true
---

## Programske paradigme {#programming_paradigms_title}

PHP je fleksibilan, dinamičan jezik koji podržava razne tehnike programiranja. Poslednjih godina se značajno razvio, naročito dodatkom solidnog objektno-orijentisanog modela u verziji PHP 5.0 (2004), i anonimnih (anonimus) funkcija i prostora imena u verziji PHP 5.3 (2009), kao i tipova u PHP 5.4 (2012).

### Objektno-orijentisano programiranje

PHP ima vrlo upotpunjen set karakteristika za objektno-orijentisano programiranje, uključujući podršku za klase, apstraktne klase, interfejse, nasleđivanje, konstruktore, kloniranje, izuzetke i drugo.

* [Pročitajte o Objektno-orijentisanom PHP][oop]
* [Pročitajte o Tipovima][traits]

### Funkcionalno programiranje

PHP podržava funkcije prve klase, što znači da funkcija može biti dodeljena promenljivoj. I korisnički definisane i ugrađene funkcije mogu biti referencirane promenljivom i pozvane dinamički. Funkcije se mogu prosleđivati kao argumenti drugim funkcijama (osobina koja se naziva Funkcije višeg reda) i funkcija može vratiti druge funkcije.

Rekurzija, osobina koja omogućava fukciji da poziva samu sebe, se podržava u jeziku, ali se većina PHP koda fokusira na iteracije.

Nove anonimne funkcije (sa podrškom za ?closures) su prisutne od verzije PHP 5.3 (2009).

PHP 5.4 added the ability to bind closures to an object's scope and also improved support for callables such that they can be used interchangeably with anonymous functions in almost all cases.

* Nastavite sa čitanjem o [Funkcionalno programiranje u PHP-u](/pages/Functional-Programming.html)
* [Pročitajte o anonimnim funkcijama][anonymous-functions]
* [Pročitajte o Closure klasi][closure-class]
* [Više detalja o Closures RFC][closures-rfc]
* [Pročitajte šta su Callables][callables]
* [Pročitajte o dinamičkim ?pozivima (invoking) funkcija pomoću `call_user_func_array`][call-user-func-array]

### Meta programiranje

PHP podržava razne varijante meta programiranja preko mehanizama kao što su Reflection API i magičnih metoda (Magic Methods). Postoji puno magičnih metoda, kao što su `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`, itd. koje omogućavaju developerima da ?iskoriste/se uključe (hook into) ponašanje klase. Ruby developeri često izjavljuju da PHP-u nedostaje `method_missing`, ali on postoji kao `__call()` i `__callStatic()`.

* [Pročitajte o magičnim metodama (Magic Methods)][magic-methods]
* [Pročitajte o ?Reflection][reflection]

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
