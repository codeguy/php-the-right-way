---
layout: page
title:  Functional Programming in PHP
sitemap: true
---

# Functional Programming in PHP

PHP supports first-class functions, meaning that a function can be assigned to a variable. Both user-defined and
built-in functions can be referenced by a variable and invoked dynamically. Functions can be passed as arguments to
other functions and a function can return other functions (a feature called higher-order functions).

Recursion, a feature that allows a function to call itself, is supported by the language, but most of the PHP code
focus is on iteration.

Anonymous functions (with support for closures) have been present since PHP 5.3 (2009).

PHP 5.4 added the ability to bind closures to an object's scope and also improved support for callables such that they
can be used interchangeably with anonymous functions in almost all cases.

The most common usage of higher-order functions is when implementing a strategy pattern. The built-in `array_filter()`
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

A closure is an anonymous function that can access variables imported from the outside scope without using any global
variables. Theoretically, a closure is a function with some arguments closed (e.g. fixed) by the environment when it is
defined. Closures can work around variable scope restrictions in a clean way.

In the next example we use closures to define a function returning a single filter function for `array_filter()`, out
of a family of filter functions.

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

Each filter function in the family accepts only elements greater than some minimum value. The single filter returned by
`criteria_greater_than` is a closure with `$min` argument closed by the value in the scope (given as an argument when
`criteria_greater_than` is called).

Early binding is used by default for importing `$min` variable into the created function. For true closures with late
binding one should use a reference when importing. Imagine a templating or input validation library, where a closure is
defined to capture variables in scope and access them later when the anonymous function is evaluated.

* [Read about Anonymous functions][anonymous-functions]
* [More details in the Closures RFC][closures-rfc]
* [Read about dynamically invoking functions with `call_user_func_array()`][call-user-func-array]


[anonymous-functions]: https://www.php.net/functions.anonymous
[closures-rfc]: https://wiki.php.net/rfc/closures
[call-user-func-array]: https://www.php.net/function.call-user-func-array
