---
isChild: true
---

## Programming Paradigms

PHP is a flexible, dynamic language that supports a variety of programming techniques. It has evolved dramatically over the years, 
notably adding a solid object-oriented model in PHP 5.0 (2004), anonymous functions and namespaces in PHP 5.3 (2009), and traits in 
PHP 5.4 (2012). 

### Object-oriented Programming

* [Read about Object-oriented PHP][oop]
* [Read about Traits][traits]

### Functional Programming

PHP has had anonymous functions since PHP 5.3:

{% highlight php %}
<?php
$greet = function($name)
{
    print("Hello {$name}");
};

$greet('World');
{% endhighlight %}

* [Read about Anonymous functions][anonymous-functions]
* [Read about dynamically invoking functions with `call_user_func_array`][call-user-func-array]

### Meta Programming

Ruby developers often say that PHP is lacking `method_missing`, but it is available as `__call()`. There are many Magic Methods available 
like `__get()`, `__set()`, `__clone()`, `__toString()`, etc.

* [Read about Magic Methods][magic-methods]
* [Read about Reflection][reflection]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[overloading]: http://uk.php.net/manual/en/language.oop5.overloading.php
[oop]: http://www.php.net/manual/en/language.oop5.php
[anonymous-functions]: http://www.php.net/manual/en/functions.anonymous.php
[magic-methods]: http://php.net/manual/en/language.oop5.magic.php
[reflection]: http://www.php.net/manual/en/intro.reflection.php
[traits]: http://www.php.net/traits
[call-user-func-array]: http://php.net/manual/en/function.call-user-func-array.php
