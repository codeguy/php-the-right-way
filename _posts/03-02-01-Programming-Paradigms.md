---
isChild: true
anchor:  programming_paradigms
---

## Programming Paradigms {#programming_paradigms_title}

PHP is a flexible, dynamic language that supports a variety of programming techniques. It has evolved dramatically over
the years, notably adding a solid object-oriented model in PHP 5.0 (2004), anonymous functions and namespaces in
PHP 5.3 (2009), and traits in PHP 5.4 (2012).

### Object-oriented Programming

PHP has a very complete set of object-oriented programming features including support for classes, abstract classes,
interfaces, inheritance, constructors, cloning, exceptions, and more.

* [Read about Object-oriented PHP][oop]
* [Read about Traits][traits]

### Functional Programming

PHP supports first-class functions, meaning that a function can be assigned to a variable. Both user-defined and
built-in functions can be referenced by a variable and invoked dynamically. Functions can be passed as arguments to
other functions (a feature called _Higher-order Functions_) and functions can return other functions.

Recursion, a feature that allows a function to call itself, is supported by the language, but most PHP code
is focused on iteration.

New anonymous functions (with support for closures) are present since PHP 5.3 (2009).

PHP 5.4 added the ability to bind closures to an object's scope and also improved support for callables such that they
can be used interchangeably with anonymous functions in almost all cases.

* Continue reading on [Functional Programming in PHP](/pages/Functional-Programming.html)
* [Read about Anonymous Functions][anonymous-functions]
* [Read about the Closure class][closure-class]
* [More details in the Closures RFC][closures-rfc]
* [Read about Callables][callables]
* [Read about dynamically invoking functions with `call_user_func_array()`][call-user-func-array]

### Meta Programming

PHP supports various forms of meta-programming through mechanisms like the Reflection API and Magic Methods. There are
many Magic Methods available like `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`, etc. that allow
developers to hook into class behavior. Ruby developers often say that PHP is lacking `method_missing`, but it is
available as `__call()` and `__callStatic()`.

* [Read about Magic Methods][magic-methods]
* [Read about Reflection][reflection]
* [Read about Overloading][overloading]


[oop]: https://www.php.net/language.oop5
[traits]: https://www.php.net/language.oop5.traits
[anonymous-functions]: https://www.php.net/functions.anonymous
[closure-class]: https://www.php.net/class.closure
[closures-rfc]: https://wiki.php.net/rfc/closures
[callables]: https://www.php.net/language.types.callable
[call-user-func-array]: https://www.php.net/function.call-user-func-array
[magic-methods]: https://www.php.net/language.oop5.magic
[reflection]: https://www.php.net/intro.reflection
[overloading]: https://www.php.net/language.oop5.overloading
