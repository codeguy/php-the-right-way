---
layout: page
title: The Basics
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

vs.

if (strpos('testing', 'test') !== false) {    // true, as strict comparison was made (0 !== false)
    // code...
}
{% endhighlight %}

* [Comparison operators](http://php.net/manual/en/language.operators.comparison.php)
* [Comparison table](http://php.net/manual/en/types.comparisons.php)

## Conditional arguments

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

vs.

function test($a)
{
    if ($a) {
        return true;
    }
    return false;    // else is not necessary
}
{% endhighlight %}

* [If statements](http://php.net/manual/en/control-structures.if.php)

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

* [Switch statements](http://php.net/manual/en/control-structures.switch.php)
* [PHP switch](http://phpswitch.com/)

## Global namespace

When using namespaces, you may find that internal functions are hidden by functions you wrote. To fix this,
refer to the global function by using a backslash before the function name.

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

* [Global space](http://php.net/manual/en/language.namespaces.global.php)
* [Global rules](http://php.net/manual/en/userlandnaming.rules.php)

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

### String types

String types are a constant feature within the PHP community, but hopefully this section will explain the
differences between the string types and their benefits/uses.

#### Single quotes

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

#### Double quotes

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

#### Heredoc syntax

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

## Ternary operators

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

## Variable declarations

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

* [Performance tips](https://developers.google.com/speed/articles/optimizing-php)
