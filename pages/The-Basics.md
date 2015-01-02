---
layout: page
title:  The Basics
sitemap: true
---

# The Basics

## Comparison operators

Comparison operators are an often overlooked aspect of PHP, which can lead to many unexpected outcomes. One such
problem stems from strict comparisons (the comparison of booleans as integers).

{% highlight php %}
<?php
$a = 5;   // 5 as an integer

var_dump($a == 5);       // compare value; return true
var_dump($a == '5');     // compare value (ignore type); return true
var_dump($a === 5);      // compare type/value (integer vs. integer); return true
var_dump($a === '5');    // compare type/value (integer vs. string); return false

/**
 * Strict comparisons
 */
if (strpos('testing', 'test')) {    // 'test' is found at position 0, which is interpreted as the boolean 'false'
    // code...
}

// vs

if (strpos('testing', 'test') !== false) {    // true, as strict comparison was made (0 !== false)
    // code...
}
{% endhighlight %}

* [Comparison operators](http://php.net/language.operators.comparison)
* [Comparison table](http://php.net/types.comparisons)
* [Comparison cheatsheet](http://phpcheatsheets.com/index.php?page=compare)

## Conditional statements

### If statements

While using 'if/else' statements within a function or class, there is a common misconception that 'else' must be used
in conjunction to declare potential outcomes. However if the outcome is to define the return value, 'else' is not
necessary as 'return' will end the function, causing 'else' to become moot.

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

// vs

function test($a)
{
    if ($a) {
        return true;
    }
    return false;    // else is not necessary
}
{% endhighlight %}

* [If statements](http://php.net/control-structures.if)

### Switch statements

Switch statements are a great way to avoid typing endless if's and elseif's, but there are a few things to be aware of:

- Switch statements only compare values, and not the type (equivalent to '==')
- They Iterate case by case until a match is found. If no match is found, then the default is used (if defined)
- Without a 'break', they will continue to implement each case until reaching a break/return
- Within a function, using 'return' alleviates the need for 'break' as it ends the function

{% highlight php %}
<?php
$answer = test(2);    // the code from both 'case 2' and 'case 3' will be implemented

function test($a)
{
    switch ($a) {
        case 1:
            // code...
            break;             // break is used to end the switch statement
        case 2:
            // code...         // with no break, comparison will continue to 'case 3'
        case 3:
            // code...
            return $result;    // within a function, 'return' will end the function
        default:
            // code...
            return $error;
    }
}
{% endhighlight %}

* [Switch statements](http://php.net/control-structures.switch)
* [PHP switch](http://phpswitch.com/)

## Global namespace

When using namespaces, you may find that internal functions are hidden by functions you wrote. To fix this, refer to
the global function by using a backslash before the function name.

{% highlight php %}
<?php
namespace phptherightway;

function fopen()
{
    $file = \fopen();    // Our function name is the same as an internal function.
                         // Execute the function from the global space by adding '\'.
}

function array()
{
    $iterator = new \ArrayIterator();    // ArrayIterator is an internal class. Using its name without a backslash
                                         // will attempt to resolve it within your namespace.
}
{% endhighlight %}

* [Global space](http://php.net/language.namespaces.global)
* [Global rules](http://php.net/userlandnaming.rules)

## Strings

### Concatenation

- If your line extends beyond the recommended line length (120 characters), consider concatenating your line
- For readability it is best to use concatenation operators over concatenating assignment operators
- While within the original scope of the variable, indent when concatenation uses a new line


{% highlight php %}
<?php
$a  = 'Multi-line example';    // concatenating assignment operator (.=)
$a .= "\n";
$a .= 'of what not to do';

// vs

$a = 'Multi-line example'      // concatenation operator (.)
    . "\n"                     // indenting new lines
    . 'of what to do';
{% endhighlight %}

* [String Operators](http://php.net/language.operators.string)

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

* [Single quote](http://php.net/language.types.string#language.types.string.syntax.single)

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

* [Double quotes](http://php.net/language.types.string#language.types.string.syntax.double)

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

* [Nowdoc syntax](http://php.net/language.types.string#language.types.string.syntax.nowdoc)

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

* [Heredoc syntax](http://php.net/language.types.string#language.types.string.syntax.heredoc)

### Which is quicker?

There is a myth floating around that single quote strings are fractionally quicker than double quote strings. This is
fundamentally not true.

If you are defining a single string and not trying to concatenate values or anything complicated, then either a single
or double quoted string will be entirely identical. Neither are quicker.

If you are concatenating multiple strings of any type, or interpolate values into a double quoted string, then the
results can vary. If you are working with a small number of values, concatenation is minutely faster. With a lot of
values, interpolating is minutely faster.

Regardless of what you are doing with strings, none of the types will ever have any noticable impact on your
application. Trying to rewrite code to use one or the other is always an exercise in futility, so avoid this micro-
optimization unless you really understand the meaning and impact of the differences.

* [Disproving the Single Quotes Performance Myth](http://nikic.github.io/2012/01/09/Disproving-the-Single-Quotes-Performance-Myth.html)


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
would be.

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? true : false; // Will return true or false if $a == 3

// vs

$a = 3;
return $a == 3; // Will return true or false if $a == 3

{% endhighlight %}

This can also be said for all operations(===, !==, !=, == etc).

#### Utilising brackets with ternary operators for form and function

When utilising a ternary operator, brackets can play their part to improve code readability and also to include unions
within blocks of statements. An example of when there is no requirement to use bracketing is:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? "yay" : "nope"; // return yay or nope if $a == 3

// vs

$a = 3;
return $a == 3 ? "yay" : "nope"; // return yay or nope if $a == 3
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

* [Ternary operators](http://php.net/language.operators.comparison)

## Variable declarations

At times, coders attempt to make their code "cleaner" by declaring predefined variables with a different name. What
this does in reality is to double the memory consumption of said script. For the example below, let us say an example
string of text contains 1MB worth of data, by copying the variable you've increased the scripts execution to 2MB.

{% highlight php %}
<?php
$about = 'A very long string of text';    // uses 2MB memory
echo $about;

// vs

echo 'A very long string of text';        // uses 1MB memory
{% endhighlight %}

* [Performance tips](http://web.archive.org/web/20140625191431/https://developers.google.com/speed/articles/optimizing-php)
