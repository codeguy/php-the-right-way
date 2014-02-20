---
isChild: true
---

## Programming Paradigms {#programming_paradigms_title}

PHP is a flexible, dynamic language that supports a variety of programming techniques. It has evolved dramatically over
the years, notably adding a solid object-oriented model in PHP 5.0 (2004), anonymous functions and namespaces in PHP 5.3 
(2009), and traits in PHP 5.4 (2012). 

### Object-oriented Programming

PHP has a very complete set of object-oriented programming features including support for classes, abstract classes,
interfaces, inheritance, constructors, cloning, exceptions, and more.

* [Read about Object-oriented PHP][oop]
* [Read about Traits][traits]

### Functional Programming

PHP supports first-class function, meaning that a function can be assigned to a variable. Both user-defined and built-in
functions can be referenced by a variable and invoked dynamically. Functions can be passed as arguments to other
functions (feature called Higher-order functions) and function can return other functions.

Recursion, a feature that allows a function to call itself is supported by the language, but most of the PHP code focus
on iteration.

New anonymous functions (with support for closures) are present since PHP 5.3 (2009).

PHP 5.4 added the ability to bind closures to an object's scope and also improved support for callables such that they
can be used interchangeably with anonymous functions in almost all cases.

* Continue reading on [Functional Programming in PHP](/pages/Functional-Programming.html)
* [Read about Anonymous Functions][anonymous-functions]
* [Read about the Closure class][closure-class]
* [More details in the Closures RFC][closures-rfc]
* [Read about Callables][callables]
* [Read about dynamically invoking functions with `call_user_func_array`][call-user-func-array]

### Meta Programming

PHP supports various forms of meta-programming through mechanisms like the Reflection API and Magic Methods. There are
many Magic Methods available like `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`, etc. that allow
developers to hook into class behavior. Ruby developers often say that PHP is lacking `method_missing`, but it is
available as `__call()` and `__callStatic()`.

* [Read about Magic Methods][magic-methods]
* [Read about Reflection][reflection]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[overloading]: http://php.net/manual/en/language.oop5.overloading.php
[oop]: http://www.php.net/manual/en/language.oop5.php
[anonymous-functions]: http://www.php.net/manual/en/functions.anonymous.php
[closure-class]: http://php.net/manual/en/class.closure.php
[callables]: http://php.net/manual/en/language.types.callable.php
[magic-methods]: http://php.net/manual/en/language.oop5.magic.php
[reflection]: http://www.php.net/manual/en/intro.reflection.php
[traits]: http://www.php.net/traits
[call-user-func-array]: http://php.net/manual/en/function.call-user-func-array.php
[closures-rfc]: https://wiki.php.net/rfc/closures
