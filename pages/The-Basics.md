---
layout:  page
title:   Die Basics
sitemap: true
---

# Die Basics

## Vergleichsoperatoren

Vergleichsoperatoren sind ein oft übersehener Aspekt von PHP, der zu vielen unerwarteten Ergebnissen führen kann. Ein solches Problem entsteht durch strikte Vergleiche (den Vergleich von Booleschen Werten mit Ganzzahlen).

{% highlight php %}
<?php
$a = 5;   // 5 as an integer

var_dump($a == 5);       // vergleiche Wert; return true
var_dump($a == '5');     // vergleiche Wert (ignoriere Datentyp); return true
var_dump($a === 5);      // vergleiche Typ/Wert (integer vs. integer); return true
var_dump($a === '5');    // vergleiche Typ/Wert (integer vs. string); return false

//Vergleich auf gleiche Werte
if (strpos('testing', 'test')) {    // 'test' wird an position 0 gefunden, was als bool'sches 'false' interpretiert wird
    // code...
}

// vs. strikte Vergleiche
if (strpos('testing', 'test') !== false) {    // true, augrund strikten Vergleiches (0 !== false)
    // code...
}
{% endhighlight %}

* [Vergleichspoteratoren](https://www.php.net/language.operators.comparison)
* [Tabelle zu Typenvergleichen in PHP](https://www.php.net/types.comparisons)
* [Comparison cheatsheet](https://phpcheatsheets.com/index.php?page=compare)

## Bedingte Anweisungen

### If-Anweisungen

Bei der Verwendung von 'if/else'-Anweisungen innerhalb einer Funktion oder Methode besteht häufig der Irrtum, dass 'else' in Verbindung mit möglichen Ergebnissen verwendet werden muss. Soll das Ergebnis jedoch den Rückgabewert definieren, ist 'else' nicht erforderlich, da 'return' die Funktion beendet und 'else' damit hinfällig wird.

{% highlight php %}
<?php
function test($a)
{
    if ($a) {
        return true;
    } else {
        return false;
    }
}

// vs.

function test($a)
{
    if ($a) {
        return true;
    }
    return false;    // else ist hier nicht nötig
}

// oder noch kürzer:

function test($a)
{
    return (bool) $a;
}

{% endhighlight %}

* [if-Anewisung](https://www.php.net/control-structures.if)

### Switch-Anweisungen

Switch-Anweisungen sind eine gute Möglichkeit, das Eintippen endloser if- und elseif-Anweisungen zu vermeiden. Dabei solltest Du jedoch einige Dinge beachten:

- Switch-Anweisungen vergleichen nur Werte und nicht den Typ (entspricht '==')
- Sie iterieren 'case' für 'case', bis eine Übereinstimmung gefunden wird. Wenn keine Übereinstimmung gefunden wird, wird der Standardwert 'default' verwendet (sofern definiert).
- Ohne ein 'break' werden werden alle 'case'-Anweisungen ausgeführt, so lange bis ein 'break'/'return' erreicht wird.
- Innerhalb einer Funktion verringert die Verwendung von 'return' die Notwendigkeit von 'break', da es die Funktion beendet

{% highlight php %}
<?php
$answer = test(2);    // sowohl der code von 'case 2' als auch 'case 3' wird ausgeführt

function test($a)
{
    switch ($a) {
        case 1:
            // code...
            break;             // break beendet das switch-Statement
        case 2:
            // code...         // ohne break wird der Vegrleich bei 'case 3' fortgeführt
        case 3:
            // code...
            return $result;    // innherhalb einer Funktion, beendet 'return' diese Funktion
        default:
            // code...
            return $error;
    }
}
{% endhighlight %}

* [switch-Anweisung](https://www.php.net/control-structures.switch)
* [PHP switch](http://phpswitch.com/)

## Globaler namespace

Bei der Verwendung von Namespaces kann es vorkommen, dass interne Funktionen durch von Ihnen geschriebene Funktionen verdeckt werden. Um dies zu beheben, verweisen Sie mit einem Backslash vor dem Funktionsnamen auf die globale Funktion.

{% highlight php %}
<?php
namespace phpAberRichtig;

function fopen()
{
    $file = \fopen();    // Unser Funktions-Name ist der selbe, wie der einer internen Funktion.
                         // Führe die Funktion vom globalen Namensraum aus durch voranstellen von '\'.
}

function array()
{
    $iterator = new \ArrayIterator();    // ArrayIterator ist eine interne Klasse. Wenn Sie den Namen ohne backslash
                                         //  verwenden, wird versucht, ihn innerhalb Ihres Namespace aufzulösen.
}
{% endhighlight %}

* [Globaler Namensraum ](https://www.php.net/language.namespaces.global)
* [Globale Namensregeln](https://www.php.net/userlandnaming.rules)

## Strings (Zeichenketten)

### Verkettung

- Wenn Ihre Zeile die empfohlene Zeilenlänge (120 Zeichen) überschreitet, ziehen Sie in Erwägung, Ihre Zeile zu verketten
- Aus Gründen der Lesbarkeit ist es besser, Verkettungs-Operatoren anstelle von Verkettungs-Zuweisungs-Operatoren zu verwenden.
- Im ursprünglichen Gültigkeitsbereich der Variable einrücken, wenn die Verkettung eine neue Zeile nutzt

{% highlight php %}
<?php
$a  = 'Mehrzeiliges Beispiel';    // Verkettung mit Zuweisungs-Operator (.=)
$a .= "\n";
$a .= 'wie man es nicht macht.';

// vs.

$a = 'Mehrzeiliges Beispiel'      // Verkettungs-Operator (.)
    . "\n"                        // Neue Zeilen sind eingerückt
    . 'ganz beispielhaft';
{% endhighlight %}

* [Zeichenketten-Operatoren](https://www.php.net/language.operators.string)

### String Typen

Strings sind eine Anreihung von Zeichen, was recht einfach klingt. Es gibt jedoch verschiedene String-Typen mit leicht unterschiedlicher Syntax und leicht unterschiedlichem Verhalten.

#### Einfache Anführungszeichen

Einfache Anführungszeichen kennzeichnen einen "literalen string". Literale Strings versuchen nicht, Sonderzeichen oder Variablen zu analysieren.

Wenn Du einfache Anführungszeichen verwendest, kannst Du einen Variablennamen in eine Zeichenkette wie folgt eingeben: `'some $thing'`, und Sie erhalten die genaue Ausgabe `some $thing`. Wenn Sie doppelte Anführungszeichen verwenden, wird versucht, den Variablennamen `$thing` auszuwerten und ein Fehler erzeugt, wenn die Variable nicht gefunden wird.

{% highlight php %}
<?php
echo 'This is my string, look at how pretty it is.';    // no need to parse a simple string

/**
 * Output:
 *
 * This is my string, look at how pretty it is.
 */
{% endhighlight %}

* [Einfache Anführungszeichen](https://www.php.net/language.types.string#language.types.string.syntax.single)

#### Doppelte Anführungszeichen

Doppelte Anführungszeichen sind das Schweizer Taschenmesser unter den Zeichenfolgen. Sie parsen nicht nur Variablen wie oben erwähnt, sondern alle Arten von Sonderzeichen, z. B. `\n` für Zeilenumbrüche, `\t` Tabulatoren usw.

{% highlight php %}
<?php
echo 'phpAberRichtig is ' . $adjective . '.'     // Beispiel mit einfachen Anführungszeichen, das mehrere Verkettungen
    . "\n"                                       // für Variablen und Escape-Zeichenfolgen verwendet
    . 'I love learning' . $code . '!';

// vs.

echo "phpAberRichtig is $adjective.\n I love learning $code!"  // Anstelle mehrerer Verkettungen ermöglichen doppelte Anführungszeichen
                                                               // die Verwendung einer zu parsender Zeichenfolge.                                                               
{% endhighlight %}

Doppelte Anführungszeichen können Variablen enthalten; dies wird als "Interpolation“ bezeichnet.

{% highlight php %}
<?php
$juice = 'plum';
echo "I like $juice juice";    // Output: I like plum juice
{% endhighlight %}

Bei der Interpolation kommt es häufig vor, dass die Variable ein anderes Zeichen berührt. Dies führt zu Verwirrung hinsichtlich des Namens der Variable und des Literalzeichens.

Um dieses Problem zu beheben, schließen Sie die Variable in geschweifte Klammern ein.

{% highlight php %}
<?php
$juice = 'plum';
echo "I drank some juice made of $juices";    // $juice cannot be parsed

// vs

$juice = 'plum';
echo "I drank some juice made of {$juice}s";    // $juice will be parsed

/**
 * Complex variables will also be parsed within curly brackets
 */

$juice = array('apple', 'orange', 'plum');
echo "I drank some juice made of {$juice[1]}s";   // $juice[1] will be parsed
{% endhighlight %}

* [Doppelte Anführungszeichen](https://www.php.net/language.types.string#language.types.string.syntax.double)

#### Die Nowdoc-Syntax

Die Nowdoc-Syntax wurde in Version 5.3 eingeführt und verhält sich intern genauso wie einfache Anführungszeichen, zusätzlich ist sie für die Verwendung mehrzeiliger Zeichenfolgen ohne Verkettung geeignet.

{% highlight php %}
<?php
$str = <<<'EOD'             // initialized by <<<
Example of string
spanning multiple lines
using nowdoc syntax.
$a does not parse.
EOD;                        // closing 'EOD' must be on its own line, and to the left most point

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using nowdoc syntax.
 * $a does not parse.
 */
{% endhighlight %}

* [Nowdoc-Syntax](https://www.php.net/language.types.string#language.types.string.syntax.nowdoc)

#### Heredoc-Syntax

Die Heredoc-Syntax verhält sich intern genauso wie doppelte Anführungszeichen, ist jedoch darüber hinaus für die Verwendung mehrzeiliger Zeichenfolgen geeignet, ohne dasss Verkettung notwendig wäre.

{% highlight php %}
<?php
$a = 'Variables';

$str = <<<EOD               // initialized by <<<
Example of string
spanning multiple lines
using heredoc syntax.
$a are parsed.
EOD;                        // closing 'EOD' must be on its own line, and to the left most point

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using heredoc syntax.
 * Variables are parsed.
 */
{% endhighlight %}

* [Heredoc-Syntax](https://www.php.net/language.types.string#language.types.string.syntax.heredoc)

> Es ist zu beachten, dass mehrzeilige Zeichenfolgen auch dadurch gebildet werden können, dass sie in einer Anweisung über mehrere Zeilen hinweg fortgesetzt werden. _z.B._

{% highlight php %}
$str = "
Example of string
spanning multiple lines
using statement syntax.
$a are parsed.
";

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using statement syntax.
 * Variables are parsed.
 */
{% endhighlight %}

### Was ist schneller?

Es gibt den Mythos, dass Zeichenfolgen mit einfachen Anführungszeichen geringfügig schneller sind als Zeichenfolgen mit doppelten Anführungszeichen. Das ist grundsätzlich falsch.

Wenn Sie eine einzelne Zeichenfolge definieren und nicht versuchen, Werte zu verketten oder etwas Kompliziertes zu verwenden, ist eine Zeichenfolge in einfachen oder doppelten Anführungszeichen völlig identisch. Beides ist nicht schneller.

Wenn Sie mehrere Zeichenfolgen beliebigen Typs verketten oder Werte in eine Zeichenfolge in Anführungszeichen interpolieren, können die Ergebnisse variieren. Bei wenigen Werten ist die Verkettung geringfügig schneller.
Bei vielen Werten ist die Interpolation geringfügig schneller.

Unabhängig davon, was Sie mit Zeichenfolgen tun, hat keiner der Typen jemals spürbare Auswirkungen auf Ihre Anwendung. Der Versuch, Code umzuschreiben, um den einen oder anderen Typ zu verwenden, ist immer sinnlos.
Vermeiden Sie daher diese Mikrooptimierung, es sei denn, Sie verstehen die Bedeutung und die Auswirkungen der Unterschiede wirklich.

* [Disproving the Single Quotes Performance Myth](https://www.npopov.com/2012/01/09/Disproving-the-Single-Quotes-Performance-Myth.html)


## Der ternäre Operator

Der ternäre Operator eignet sich hervorragend um Code zu verdichten, wird aber oft übermäßig verwendet. Ternäre Operatoren können zwar gestapelt/verschachtelt werden, aus Gründen der Lesbarkeit wird jedoch empfohlen, einen Operator pro Zeile zu verwenden.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? 'yay' : 'nay';
{% endhighlight %}

Im Vergleich dazu hier ein Beispiel, bei dem jegliche Lesbarkeit zugunsten der Reduzierung der Zeilenanzahl geopfert wird.

{% highlight php %}
<?php
echo ($a) ? ($a == 5) ? 'yay' : 'nay' : ($b == 10) ? 'excessive' : ':(';    // excess nesting, sacrificing readability
{% endhighlight %}

Verwende die richtige Syntax, um einen Wert mit ternären Operatoren „zurückzugeben“.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? return true : return false;    // this example will output an error

// vs.

$a = 5;
return ($a == 5) ? 'yay' : 'nope';    // this example will return 'yay'

{% endhighlight %}

Beachte, dass Du für die Rückgabe eines booleschen Wertes keinen ternären Operator brauchst. Ein Beispiel hierfür wäre:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? true : false; // Will return true if $a == 3, false otherwise

// vs

$a = 3;
return $a == 3; // Will return true if $a == 3, false otherwise

{% endhighlight %}

Dies gilt für alle Vergleichs-Operatoren (`===`, `!==`, `!=`, `>=` etc).

#### Verwendung von Klammern mit ternären Operatoren für Form und Funktion

Bei der Verwendung eines ternären Operators können Klammern dazu beitragen, die Lesbarkeit des Codes zu verbessern und Unions in Anweisungsblöcke einzuschließen.
Ein Beispiel dafür, wann Klammern nicht erforderlich sind, ist:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? "yay" : "nope"; // return yay if $a == 3 or nope

// vs

$a = 3;
return $a == 3 ? "yay" : "nope"; // return yay if $a == 3 or nope
{% endhighlight %}

Durch Klammern können wir auch Unions innerhalb eines Anweisungsblocks erstellen, wobei der Block als Ganzes geprüft wird. Wie im folgenden Beispiel, das true zurückgibt, wenn sowohl `($a == 3 und $b == 4)` als auch `$c == 5` wahr sind.

{% highlight php %}
<?php
return ($a == 3 && $b == 4) && $c == 5;
{% endhighlight %}

Another example is the snippet below which will return true if `($a != 3 AND $b != 4) OR $c == 5`.

{% highlight php %}
<?php
return ($a != 3 && $b != 4) || $c == 5;
{% endhighlight %}

Seit PHP 5.3 ist es möglich, den mittleren Teil des ternären Operators wegzulassen. Der Ausdruck "expr1 ?: expr3" gibt expr1 zurück, wenn expr1 TRUE ergibt, andernfalls expr3.

* [Ternärer Operator](https://www.php.net/language.operators.comparison)
