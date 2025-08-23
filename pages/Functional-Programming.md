---
layout: page
title:  Funktionale Programmierung in PHP
sitemap: true
---

# Funktionale Programmierung in PHP

PHP unterstützt First-Class-Funktionen was heisst: eine Funktion kann einer Variablen zugewiesen werden. 
Sowohl benutzerdefinierte als auch integrierte Funktionen können von einer Variable referenziert und dynamisch aufgerufen werden. 
Funktionen können als Argumente an andere Funktionen übergeben werden, und eine Funktion kann andere Funktionen zurückgeben (eine Funktion, die als Funktionen höherer Ordnung bezeichnet wird).

Rekursion, die Eigenschaft, welche es einer Funktion ermöglicht, sich selbst aufzurufen, wird von der Sprache unterstützt, der Schwerpunkt des PHP-Codes liegt jedoch hauptsächlich auf der Iteration.

Anonyme Funktionen (mit Unterstützung für Closures) gibt es seit PHP 5.3 (2009).

PHP 5.4 hat die Möglichkeit hinzugefügt, Closures an den Gültigkeitsbereich eines Objekts zu binden und hat außerdem die Unterstützung für aufrufbare Funktionen verbessert,
sodass diese in fast allen Fällen austauschbar mit anonymen Funktionen verwendet werden können.

Die häufigste Verwendung von Funktionen höherer Ordnung ist die Implementierung eines Strategiemusters. 
Die integrierte `array_filter()`-Funktion fragt sowohl nach dem Eingabearray (Daten) als auch nach einer Funktion (einer Strategie oder einem Rückruf), die als Filterfunktion für jedes Array-Element verwendet wird.

{% highlight php %}
<?php
$input = array(1, 2, 3, 4, 5, 6);

// Creates a new anonymous function and assigns it to a variable
$filter_even = function($item) {
    return ($item % 2) == 0;
};

// Built-in array_filter accepts both the data and the function
$output = array_filter($input, $filter_even);

// The function doesn't need to be assigned to a variable. This is valid too:
$output = array_filter($input, function($item) {
    return ($item % 2) == 0;
});

print_r($output);
{% endhighlight %}

Eine Closure ist eine anonyme Funktion, die auf Variablen zugreifen kann, die aus dem externen Gültigkeitsbereich importiert wurden, ohne globale Variablen zu verwenden.
Theoretisch ist eine Closure eine Funktion mit einigen Argumenten, die bei ihrer Definition von der Umgebung geschlossen (z. B. fixiert) werden.
Closures können Einschränkungen des Variablenbereichs auf saubere Weise umgehen.

Im nächsten Beispiel verwenden wir Closures, um eine Funktion zu definieren, die eine einzelne Filterfunktion für `array_filter()`  aus einer Familie von Filterfunktionen zurückgibt.

{% highlight php %}
<?php
/**
 * Creates an anonymous filter function accepting items > $min
 *
 * Returns a single filter out of a family of "greater than n" filters
 */
function criteria_greater_than($min)
{
    return function($item) use ($min) {
        return $item > $min;
    };
}

$input = array(1, 2, 3, 4, 5, 6);

// Use array_filter on a input with a selected filter function
$output = array_filter($input, criteria_greater_than(3));

print_r($output); // items > 3
{% endhighlight %}

Jede Filterfunktion in der Familie akzeptiert nur Elemente, die größer als ein bestimmter Mindestwert sind.
Der einzige von `criteria_greater_than` zurückgegebene Filter ist ein Closure mit einem Argument `$min`, welches durch den Wert im Gültigkeitsbereich abgeschlossen wird (als Argument angegeben, wenn `criteria_greater_than` aufgerufen wird).

Die frühe Bindung wird standardmäßig zum Importieren der Variablen `$min` in die erstellte Funktion verwendet.
Für echte Closures mit später Bindung sollte beim Importieren eine Referenz verwendet werden. 
Stelle Dir eine Vorlagen- oder Eingabevalidierungsbibliothek vor, in der ein Closure definiert ist, um Variablen im Gültigkeitsbereich zu erfassen und später bei der Auswertung der anonymen Funktion darauf zuzugreifen.

* [Mehr zu anonymen Funktionen][anonymous-functions]
* [Weitere Details im Closures RFC][closures-rfc]
* [mehr über das dynamische Aufrufen von Funktionen mit `call_user_func_array()`][call-user-func-array]


[anonymous-functions]: https://www.php.net/functions.anonymous
[closures-rfc]: https://wiki.php.net/rfc/closures
[call-user-func-array]: https://www.php.net/function.call-user-func-array
