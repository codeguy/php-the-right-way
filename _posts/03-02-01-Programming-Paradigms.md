---
isChild: true
anchor:  programming_paradigms
---

## Programmierparadigmen {#programming_paradigms_title}

PHP ist eine flexible, dynamische Sprache, die eine Vielzahl von Programmiertechniken unterstützt.
Sie hat sich im Laufe der Jahre dramatisch weiterentwickelt, insbesondere durch die Einführung eines soliden objektorientierten Modells in PHP 5.0 (2004), anonymer Funktionen und Namespaces in PHP 5.3 (2009) und Traits in PHP 5.4 (2012).

### Objektorientierte Programmierung

PHP verfügt über einen sehr umfassenden Satz objektorientierter Programmierfunktionen, darunter Unterstützung für Klassen, abstrakte Klassen, Schnittstellen, Vererbung, Konstruktoren, Klonen, Ausnahmen und mehr.

* [Lies mehr über objektorientiertes PHP][oop]
* [Mehr über Traits][traits]

### Funktionale Programmierung

PHP unterstützt First-Class-Funktionen, d. h., eine Funktion kann einer Variable zugewiesen werden. Sowohl benutzerdefinierte als auch integrierte Funktionen können von einer Variable referenziert und dynamisch aufgerufen werden. Funktionen können als Argumente an andere Funktionen übergeben werden (eine Feature namens _Higher-order Functions_) und Funktionen können andere Funktionen zurückgeben.

Rekursion, eine Feature, die es einer Funktion ermöglicht, sich selbst aufzurufen, wird von der Sprache unterstützt, der Großteil des PHP-Codes konzentriert sich jedoch auf Iteration.

Neue anonyme Funktionen (mit Unterstützung für Closures) sind seit PHP 5.3 (2009) vorhanden.

PHP 5.4 hat die Möglichkeit hinzugefügt, Closures an den Gültigkeitsbereich eines Objekts zu binden und hat außerdem die Unterstützung für aufrufbare Funktionen verbessert, sodass diese in fast allen Fällen austauschbar mit anonymen Funktionen verwendet werden können.


* Lesen Sie weiter zum Thema [Functional Programming in PHP](/pages/Functional-Programming.html)
* [mehr über anonyme Funktionen][anonymous-functions]
* [mehr über the Closure class][closure-class]
* [Weitere Details in der Closures RFC][closures-rfc]
* [mehr zu Callables][callables]
* [mehr über dynamisches Aufrufen von Funktionen mit `call_user_func_array()`][call-user-func-array]

### Metaprogrammierung

PHP unterstützt verschiedene Formen der Metaprogrammierung durch Mechanismen wie die Reflection API und Magic Methods. Es gibt viele Magic Methods wie `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`, usw., die es Entwicklern ermöglichen, sich in das Klassenverhalten einzuklinken. Ruby-Entwickler bemängeln oft, dass PHP `method_missing` fehle , aber es ist als `__call()` and `__callStatic()` verfügbar.

* [mehr zu Magic Methods][magic-methods]
* [mehr zu Reflection][reflection]
* [mehr zu Overloading][overloading]


[oop]: https://www.php.net/language.oop5
[traits]: https://www.php.net/language.oop5.traits
[anonymous-functions]: https://www.php.net/functions.anonymous
[closure-class]: https://www.php.net/class.closure
[closures-rfc]: https://wiki.php.net/rfc/closures
[callables]: https://www.php.net/language.types.callable
[call-user-func-array]: https://www.php.net/function.call-user-func-array
[magic-methods]: https://www.php.net/language.oop5.magic
[reflection]: https://www.php.net/intro.reflection
[overloading]: https://www.php.net/language.oop5.overloading
