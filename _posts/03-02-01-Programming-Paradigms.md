---
isChild: true
---

## Programming Paradigms

PHP is a flexible, dynamic language that supports a variety of programming techniques. It has evolved dramatically over
the years, notably adding a solid object-oriented model in PHP 5.0 (2004), anonymous functions and namespaces in PHP
5.3 (2009), and traits in PHP 5.4 (2012).

### Object-oriented Programming

PHP has a very complete set of object-oriented programming features including support for classes, abstract classes,
interfaces, inheritence, constructors, cloning, exceptions, and more.

* [Read about Object-oriented PHP][oop]
* [Read about Traits][traits]

### Functional Programming

PHP supports first-class functions. It is possible to define a new function and assign it to a variable name and built-in functions
can be referenced and called dynamically. Functions can be passed as arguments to other functions (Higher-order functions) and function
can return other functions. New anonymous functions (with support for closures) are present since PHP 5.3 (2009).

{% highlight php %}
<?php
/**
 * Takes two single variable functions f and g, and creates a new function f∘g
 */
function combine($f, $g)
{
    return function($x) use ($f, $g)
    {
        return $f($g($x));
    };
}

// Define a new function x+1 and assign it to a variable
$plus_one = function($x)
{
    return $x+1;
};

// Assign resulting function of combining x+1 and built-in sin(x)
// Resulting function is mathematically the same as sin(x)+1
$sin_plus_one = combine($plus_one, "sin");

// Evaluate for x equals Pi, should be 1
print $sin_plus_one(M_PI);{% endhighlight %}
{% endhighlight %}

The most common usage of higher-order functions like `combine` above is when implementing the strategy pattern. Built-in `array_filter` function asks both
for the input array (data) and a function (strategy, callback) used as a filter criteria on each array item.

Closures may be used to cross the variable scope without using any global variables. In the following example we have a function able
to return a single criteria function out of the family of functions, and then put it in use with `array_filter`:

{% highlight php %}
<?php
/**
 * Creates an anonymous criteria function accepting items > $min
 */
function criteria_greater_than($min)
{
    return function($item) use ($min)
    {
        return $item > $min;
    };
}

$input = array(1, 2, 3, 4, 5, 6);
$output = array_filter($input, criteria_greater_than(3));

print_r($output); // items > 3
{% endhighlight %}

Early binding is used by default for importing `$min` variable into the created function. For true closures with late binding one should use
a reference when importing. This can be used with some templating or input validation libraries, where anonymous function is defined to capture
out-of-scope variables and access them later when the anonymous function is evaluated.

PHP 5.4 added the ability to bind closures to an object's scope and also improved support for callables such that they
can be used interchangeably with anonymous functions in almost all cases.

* [Read about Anonymous Functions][anonymous-functions]
* [Read about the Closure class][closure-class]
* [More details in the Closures RFC][closures-rfc]
* [Read about Callables][callables]
* [Read about dynamically invoking functions with `call_user_func_array`][call-user-func-array]

### Meta Programming

PHP supports various forms of meta programming through mechanisms like the Reflection API and Magic Methods. There are
many Magic Methods available like `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`, etc. that allow
developers to hook into class behavior. Ruby developers often say that PHP is lacking `method_missing`, but it is
available as `__call()` and `__callStatic()`.

* [Read about Magic Methods][magic-methods]
* [Read about Reflection][reflection]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[overloading]: http://uk.php.net/manual/en/language.oop5.overloading.php
[oop]: http://www.php.net/manual/en/language.oop5.php
[anonymous-functions]: http://www.php.net/manual/en/functions.anonymous.php
[closure-class]: http://php.net/manual/en/class.closure.php
[callables]: http://php.net/manual/en/language.types.callable.php
[magic-methods]: http://php.net/manual/en/language.oop5.magic.php
[reflection]: http://www.php.net/manual/en/intro.reflection.php
[traits]: http://www.php.net/traits
[call-user-func-array]: http://php.net/manual/en/function.call-user-func-array.php
[closures-rfc]: https://wiki.php.net/rfc/closures
