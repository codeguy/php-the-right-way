---
layout: page
title:  The Basics
sitemap: true
---

# The Basics

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

## Strings

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

### String types

Strings are a series of characters, which should sound fairly simple. That said, there are a few different types of
strings and they offer slightly different syntax, with slightly different behaviors.

#### Single quotes

Single quotes are used to denote a "literal string". Literal strings do not attempt to parse special characters or
variables.

If using single quotes, you could enter a variable name into a string like so: `'some $thing'`, and you would see the
exact output of `some $thing`. If using double quotes, that would try to evaluate the `$thing` variable name and show
errors if no variable was found.


{% highlight php %}
<?php
echo 'This is my string, look at how pretty it is.';    // no need to parse a simple string

/**
 * Output:
 *
 * This is my string, look at how pretty it is.
 */
{% endhighlight %}

* [Single quote](https://www.php.net/language.types.string#language.types.string.syntax.single)

#### Double quotes

Double quotes are the Swiss Army Knife of strings. They will not only parse variables as mentioned above, but all sorts
of special characters, like `\n` for newline, `\t` for a tab, etc.

{% highlight php %}
<?php
echo 'phptherightway is ' . $adjective . '.'     // a single quotes example that uses multiple concatenating for
    . "\n"                                       // variables and escaped string
    . 'I love learning' . $code . '!';

// vs

echo "phptherightway is $adjective.\n I love learning $code!"  // Instead of multiple concatenating, double quotes
                                                               // enables us to use a parsable string
{% endhighlight %}

Double quotes can contain variables; this is called "interpolation".

{% highlight php %}
<?php
$juice = 'plum';
echo "I like $juice juice";    // Output: I like plum juice
{% endhighlight %}

When using interpolation, it is often the case that the variable will be touching another character. This will result
in some confusion as to what is the name of the variable, and what is a literal character.

To fix this problem, wrap the variable within a pair of curly brackets.

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

* [Double quotes](https://www.php.net/language.types.string#language.types.string.syntax.double)

#### Nowdoc syntax

Nowdoc syntax was introduced in 5.3 and internally behaves the same way as single quotes except it is suited toward the
use of multi-line strings without the need for concatenating.

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

* [Nowdoc syntax](https://www.php.net/language.types.string#language.types.string.syntax.nowdoc)

#### Heredoc syntax

Heredoc syntax internally behaves the same way as double quotes except it is suited toward the use of multi-line
strings without the need for concatenating.

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

* [Heredoc syntax](https://www.php.net/language.types.string#language.types.string.syntax.heredoc)

> It should be noted that multiline strings can also be formed by continuing them across multilines in a statement. _e.g._

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

### Which is quicker?

There is a myth floating around that single quote strings are fractionally quicker than double quote strings. This is
fundamentally not true.

If you are defining a single string and not trying to concatenate values or anything complicated, then either a single
or double quoted string will be entirely identical. Neither are quicker.

If you are concatenating multiple strings of any type, or interpolate values into a double quoted string, then the
results can vary. If you are working with a small number of values, concatenation is minutely faster. With a lot of
values, interpolating is minutely faster.

Regardless of what you are doing with strings, none of the types will ever have any noticeable impact on your
application. Trying to rewrite code to use one or the other is always an exercise in futility, so avoid this
micro-optimization unless you really understand the meaning and impact of the differences.

* [Disproving the Single Quotes Performance Myth](https://www.npopov.com/2012/01/09/Disproving-the-Single-Quotes-Performance-Myth.html)


## Ternary operators

Ternary operators are a great way to condense code, but are often used in excess. While ternary operators can be
stacked/nested, it is advised to use one per line for readability.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? 'yay' : 'nay';
{% endhighlight %}

In comparison, here is an example that sacrifices all forms of readability for the sake of reducing the line count.

{% highlight php %}
<?php
echo ($a) ? ($a == 5) ? 'yay' : 'nay' : ($b == 10) ? 'excessive' : ':(';    // excess nesting, sacrificing readability
{% endhighlight %}

To 'return' a value with ternary operators use the correct syntax.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? return true : return false;    // this example will output an error

// vs

$a = 5;
return ($a == 5) ? 'yay' : 'nope';    // this example will return 'yay'

{% endhighlight %}

It should be noted that you do not need to use a ternary operator for returning a boolean value. An example of this
would be:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? true : false; // Will return true if $a == 3 or false

// vs

$a = 3;
return $a == 3; // Will return true if $a == 3 or false

{% endhighlight %}

This can also be said for all operations(===, !==, !=, == etc).

#### Utilising brackets with ternary operators for form and function

When utilising a ternary operator, brackets can play their part to improve code readability and also to include unions
within blocks of statements. An example of when there is no requirement to use bracketing is:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? "yay" : "nope"; // return yay if $a == 3 or nope

// vs

$a = 3;
return $a == 3 ? "yay" : "nope"; // return yay if $a == 3 or nope
{% endhighlight %}

Bracketing also affords us the capability of creating unions within a statement block where the block will be checked
as a whole. Such as this example below which will return true if both ($a == 3 and $b == 4) are true and $c == 5 is
also true.

{% highlight php %}
<?php
return ($a == 3 && $b == 4) && $c == 5;
{% endhighlight %}

Another example is the snippet below which will return true if ($a != 3 AND $b != 4) OR $c == 5.

{% highlight php %}
<?php
return ($a != 3 && $b != 4) || $c == 5;
{% endhighlight %}

Since PHP 5.3, it is possible to leave out the middle part of the ternary operator.
Expression "expr1 ?: expr3" returns expr1 if expr1 evaluates to TRUE, and expr3 otherwise.

* [Ternary operators](https://www.php.net/language.operators.comparison)
