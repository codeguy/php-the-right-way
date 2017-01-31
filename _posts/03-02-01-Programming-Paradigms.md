---
title: Programovacie paradigmy
isChild: true
anchor:  programming_paradigms
---

## Programovacie paradigmy {#programming_paradigms_title}

PHP je flexibilný, dynamický jazyk, ktorý podporuje rozličné techniky programovania. Počas rokov sa dramaticky vyvinul.
Medzi značné zmeny patrí pridanie solídneho objektovo orientovaného modelu v PHP 5.0 (2004), anonymných funkcií
a direktív menného priestoru (namespace) v PHP 5.3 (2009) a traits v PHP 5.4 (2012).

### Objektovo orientované programovanie

PHP obsahuje kompletnú sadu objektovo orientovaných vlastností vrátane podpory tried, abstraktných tried, rozhraní,
dedičnosti, konštruktorov, klonovania, výnimiek (exceptions) a ďalších.

* [Prečítajte si o objektovo orientovanom PHP][oop]
* [Prečítajte si o traits][traits]

### Funkcionálne programovanie

PHP podporuje prvotriedne funkcie, čo znamená, že funkcie môžu byť priradené premennej. Oboje vstavané, ako aj
užívateľsky definované funkcie môžu mať referenciu na premennú a byť vyvolané dynamicky. Funkcie môžu byt predané
ako argumenty iných funkcií (vlastnosť nazývaná _Funkcie vyššieho rádu_) a návratovou hodnotou funkcií môžu byť taktiež
ďalšie funkcie.

Rekurzia, možnosť funkcie volať samú seba, je podporovaná jazykom, ale väčšina PHP kódu je zameraná ma iterácie.

Nové anonymné funkcie, spolu s podporou pre uzávery (closures), sú súčasťou od verzie PHP 5.3 (2009).

Od verzie PHP 5.4 je pridaná schopnosť priradiť uzávery k rozsahu objektu (object scope) a taktiež vylepšená podpora
pre volateľné funkcie (callables), takže môžu byť tieto zameniteľné za anonymné funkcie vo väčšine prípadov.

* Pokračuje v čítaní o [funkcionálnom programované v PHP](/pages/Functional-Programming.html)
* [Prečítajte si o anonymných funkciách][anonymous-functions]
* [Prečítajte si o uzáveroch][closure-class]
* [Viac detailov o uzáveroch (RFC)][closures-rfc]
* [Prečítajte si o volateľných funkciách][callables]
* [Prečítajte si o dynamickom vyvolaní funkcie pomocou `call_user_func_array()`][call-user-func-array]

### Meta programovanie

PHP podporuje rozličné formy meta programovania pomocou mechanizmou ako Reflection API a magických metód. Množstvo
magických metód, ako napríklad `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`, atď. umožňuje
programátorom zaháknuť sa do správania triedy. Vývojári v jazyku Ruby často hovoria o absencii metódy `method_missing`.
Táto je ale dostupná ako `__call()` a `__callStatic()`.

* [Prečítajte si o magických metódach][magic-methods]
* [Prečítajte si o zrkadlení (Reflection)][reflection]
* [Prečítajte si o preťažovaní (Overloading)][overloading]


[oop]: http://php.net/language.oop5
[traits]: http://php.net/language.oop5.traits
[anonymous-functions]: http://php.net/functions.anonymous
[closure-class]: http://php.net/class.closure
[closures-rfc]: https://wiki.php.net/rfc/closures
[callables]: http://php.net/language.types.callable
[call-user-func-array]: http://php.net/function.call-user-func-array
[magic-methods]: http://php.net/language.oop5.magic
[reflection]: http://php.net/intro.reflection
[overloading]: http://php.net/language.oop5.overloading
