---
isChild: true
---

## Programming Paradigms

PHP is a flexible, dynamic language that supports a variety of programming techniques. It has evolved dramatically over
the years, notably adding a solid object-oriented model in PHP 5.0 (2004), anonymous functions and namespaces in PHP 5.3 
(2009), and traits in PHP 5.4 (2012). 

### Object-oriented Programming

PHP has a very complete set of object-oriented programming features including support for classes, abstract classes,
interfaces, inheritence, constructors, cloning, exceptions, and more.

* [Read about Object-oriented PHP][oop]
* [Read about Traits][traits]

### Functional Programming

PHP supports first-class function, meaning that a function can be assigned to a variable. Both user defined and built-in 
functions can be referenced by a variable and invoked dynamically. Functions can be passed as arguments to other
functions (feature called Higher-order functions) and function can return other functions.

Recursion, a feature that allows a function to call itself is supported by the language, but most of the PHP code focus
on iteration.

New anonymous functions (with support for closures) are present since PHP 5.3 (2009).

The most common usage of higher-order functions is when implementing a strategy pattern. Built-in `array_filter`
function asks both for the input array (data) and a function (a strategy or a callback) used as a filter function on
each array item.

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

Closure is an anonymous function that can access variables imported from the outside scope without using any global
variables. Theoretically, a closure is a function with some arguments closed (e.g. fixed) by the environment when it is 
defined. This is used to cross variable scope restrictions in a very clean way.

In the next example we use closures to define a function returning a single filter function for `array_filter`, out of
a family of filter functions.

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

Each filter function in the family accepts only elements greater than some minimum value. Single filter returned by 
`criteria_greater_than` is a closure whith `$min` argument closed by the value in the scope (given as an argument when 
`criteria_greater_than` is called).

Early binding is used by default for importing `$min` variable into the created function. For true closures with late
binding one should use a reference when importing. Imagine a templating or input validation libraries, where closure is 
defined to capture variables in scope and access them later when the anonymous function is evaluated.

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
