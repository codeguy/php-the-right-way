---
layout: page
title: Les bases
---

# Les bases

## Opérateurs de comparaisons

Les opérateurs de comparaison sont souvent un aspect négligé du PHP ce qui peut amener à obtenir
des résultats inattendus. L'un de ces problèmes provient des comparaisons "strictes"
(par ex., la comparaison des booléens en tant qu'entier).

{% highlight php %}
<?php
$a = 5;   // 5 est un entier

var_dump($a == 5);       // compare la valeur; retourne true
var_dump($a == '5');     // compare la valeur (ignore le type); retourne true
var_dump($a === 5);      // compare à la fois la valeur et le type (entier vs. entier); retourne true
var_dump($a === '5');    // compare à la fois la valeur et le type (entier vs. string); retourne false

/**
 * Comparaison stricte
 */
if (strpos('testing', 'test')) {    // 'test' est trouvé à la position 0 qui est alors évalué à 'false'
    // code...
}

vs.

if (strpos('testing', 'test') !== false) {    // true étant qu'une comparaison stricte est faite (0 !== false)
    // code...
}
{% endhighlight %}

* [Opérateurs de comparaison](http://php.net/manual/fr/language.operators.comparison.php)
* [Table des comparaisons](http://php.net/manual/fr/types.comparisons.php)

## Structure de contrôle

### Instruction if

Lors de l'utilisation des instructions 'if/else' à l'intérieur d'une fonction ou d'une classe, il y a une idée fausse 
qui veut que 'else' doit être utilisé conjointement à un 'if' de façon à traiter les différents cas possibles. 
Cependant, si le but est de déterminer la valeur de retour et que les blocs contiennent l'instruction 'return' 
alors le bloc 'else' n'a plus d'intérêt.

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

vs.

function test($a)
{
    if ($a) {
        return true;
    }
    return false;    // else n'est pas nécessaire
}
{% endhighlight %}

* [Instruction if](http://php.net/manual/fr/control-structures.if.php)

### Instruction switch

L'instruction 'switch' est un bon moyen d'éviter de taper un nombre d'instructions 'if/else if' sans fin mais il y a 
plusieurs choses à savoir :
- l'instruction 'switch' ne compare que la valeur de la variable, pas son type (équivalent à '==')
- Le programme parcourt l'ensemble des cas définis par l'instruction 'case' jusqu'à trouvé une correspondance. 
Si rien n'est trouvé alors l'instruction 'default' est utilisé (si elle est définie)
- Sans l'instruction 'break', le programme continuera de parcourir les cas possibles jusqu'à tomber sur une 
instruction 'break/return' (si elle est définie)
- À l'intérieur d'une fonction, utiliser l'instruction 'return' supprime le besoin d'une instruction 'break' étant 
donné qu'il termine l'exécution de la fonction.

{% highlight php %}
<?php
$answer = test(2);    // Le code sera implémenté à la fois pour 'case 2' et 'case 3'

function test($a)
{
    switch ($a) {
        case 1:
            // code...
            break;             // break est utilisé pour stopper l'exécution et sortir du 'switch'
        case 2:
            // code...         // sans break, la comparaison continuera jusqu'à 'case 3'
        case 3:
            // code...
            return $result;    // à l'intérieur d'une fonction, 'return' termine l'exécution de la fonction
        default:
            // code...
            return $error;
    }
}
{% endhighlight %}

* [Instruction switch](http://php.net/manual/fr/control-structures.switch.php)
* [PHP switch](http://phpswitch.com/)(en)

## Espace de noms global

Vous pouvez trouver lors de l'utilisation d'espace de noms que les fonctions "internes" sont cachés par les fonctions 
que vous écrivez. Pour régler ce problème, vous devez vous référer à l'espace de noms globale en utilisant un 
'backslash' devant le nom de vos fonctions.

{% highlight php %}
<?php
namespace phptherightway;

function fopen()
{
    $file = \fopen();    // Notre fonction a le même nom que la fonction interne.
                         // Exécuter la fonction interne en y préfixant le caractère '\'.
}

function array()
{
    $iterator = new \ArrayIterator();    // ArrayIterator est une classe interne au language.
                                         // Si vous l'utiliser sans '\' alors le programme tentera
                                         // de trouver cette classe à l'intérieur de votre espace de noms.
}
{% endhighlight %}

* [Espace global](http://php.net/manual/fr/language.namespaces.global.php)
* [Règles globales](http://php.net/manual/fr/userlandnaming.rules.php)

## Strings

### Concatenation

- If your line extends beyond the recommended line length (120 characters), consider concatenating your line
- For readability it's best to use concatenation operators over concatenating assignment operators
- While within the original scope of the variable, indent when concatenation uses a new line


{% highlight php %}
<?php
$a  = 'Multi-line example';    // concatenating assignment operator (.=)
$a .= "\n";
$a .= 'of what not to do';

vs.

$a = 'Multi-line example'      // concatenation operator (.)
    . "\n"                     // indenting new lines
    . 'of what to do';
{% endhighlight %}

* [String Operators](http://php.net/manual/en/language.operators.string.php)

### Type String

String types are a constant feature within the PHP community, but hopefully this section will explain the
differences between the string types and their benefits/uses.

#### Guillement simple

Single quotes are the simplest way to define a string and are often the quickest. Their speed stems from PHP not
parsing the string (doesn't parse for variables). They're best suited for:

- Strings that do not need to be parsed
- Writing of a variable into plain text

{% highlight php %}
<?php
echo 'This is my string, look at how pretty it is.';    // no need to parse a simple string

/**
 * Output:
 *
 * This is my string, look at how pretty it is.
 */
{% endhighlight %}

* [Single quote](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.single)

#### Guillement double

Double quotes are the Swiss army knife of strings, but are slower due to the string being parsed. They're best
suited for:

- Escaped strings
- Strings with multiple variables and plain text
- Condensing multi-line concatenation, and improving readability

{% highlight php %}
<?php
echo 'phptherightway is ' . $adjective . '.'     // a single quotes example that uses multiple concatenating for
    . "\n"                                       // variables and escaped string
    . 'I love learning' . $code . '!';

vs.

echo "phptherightway is $adjective.\n I love learning $code!"  // Instead of multiple concatenating, double quotes
                                                               // enables us to use a parsable string
{% endhighlight %}

While using double quotes that contain variables, it's often the case that the variable will be touching another
character. This will result in PHP not parsing the variable due to the variable being camouflaged. To fix this problem,
wrap the variable within a pair of curly brackets.

{% highlight php %}
<?php
$juice = 'plum';
echo "I drank some juice made of $juices";    // $juice cannot be parsed

vs.

$juice = 'plum';
echo "I drank some juice made of {$juice}s";    // $juice will be parsed

/**
 * Complex variables will also be parsed within curly brackets
 */

$juice = array('apple', 'orange', 'plum');
echo "I drank some juice made of {$juice[1]}s";   // $juice[1] will be parsed
{% endhighlight %}

* [Double quotes](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double)

#### Nowdoc syntax

Nowdoc syntax was introduced in 5.3 and internally behaves the same way as single quotes except it's suited toward the
use of multi-line strings without the need for concatenating.

{% highlight php %}
<?php
$str = <<<'EOD'             // initialized by <<<
Example of string
spanning multiple lines
using nowdoc syntax.
$a does not parse.
EOD;                        // closing 'EOD' must be on it's own line, and to the left most point

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using nowdoc syntax.
 * $a does not parse.
 */
{% endhighlight %}

* [Nowdoc syntax](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc)

#### Syntaxe Heredoc

Heredoc syntax internally behaves the same way as double quotes except it's suited toward the use of multi-line
strings without the need for concatenating.

{% highlight php %}
<?php
$a = 'Variables';

$str = <<<EOD               // initialized by <<<
Example of string
spanning multiple lines
using heredoc syntax.
$a are parsed.
EOD;                        // closing 'EOD' must be on it's own line, and to the left most point

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using heredoc syntax.
 * Variables are parsed.
 */
{% endhighlight %}

* [Heredoc syntax](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc)

## Opérateur ternaire

Ternary operators are a great way to condense code, but are often used in excess. While ternary operators can be
stacked/nested, it is advised to use one per line for readability.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? 'yay' : 'nay';

vs.

// nested ternary
$b = 10;
echo ($a) ? ($a == 5) ? 'yay' : 'nay' : ($b == 10) ? 'excessive' : ':(';    // excess nesting, sacrificing readability
{% endhighlight %}

To 'return' a value with ternary operators use the correct syntax.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? return true : return false;    // this example will output an error

vs.

$a = 5;
return ($a == 5) ? 'yay' : 'nope';    // this example will return 'yay'
{% endhighlight %}

* [Ternary operators](http://php.net/manual/en/language.operators.comparison.php)

## Déclaration de variables

At times, coders attempt to make their code "cleaner" by declaring predefined variables with a different name. What
this does in reality is to double the memory consumption of said script. For the example below, let's say
an example string of text contains 1MB worth of data, by copying the variable you've increased the scripts execution to
2MB.

{% highlight php %}
<?php
$about = 'A very long string of text';    // uses 2MB memory
echo $about;

vs.

echo 'A very long string of text';        // uses 1MB memory
{% endhighlight %}

* [Astuce pour la performance](https://developers.google.com/speed/articles/optimizing-php)(en)
