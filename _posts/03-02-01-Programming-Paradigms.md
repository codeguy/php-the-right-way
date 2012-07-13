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

PHP has long been able to accomplish higher-order function application through the use of the function [create_function][create-function]; however,
this has always been less-than elegant and error-prone. PHP 5.3 introduced [anonymous functions and closures][anonymous-functions]. Although the
PHP manual alludes to these being synonymous, this is slightly misleading. A closure is an anonymous function that is capable of capturing the
current run-time state for later use. Below are examples of anonymous functions and closures used for higher-order function application.

Anonymous Functions:

{% highlight php %}
<?php

  $days_of_week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  $start_with_t = array_filter($days_of_week, function($day){
    return $day[0] === 't';
  });

  $start_with_t = array_map(function($day){
    return strtoupper($day);
  }, $start_with_t);

  echo 'Days beginning with the letter "T": ', join(', ', $start_with_t);
{% endhighlight %}

Closures:

{% highlight php %}
<?php

  $starts_with  = 's';
  $days_of_week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  $results      = array_filter($days_of_week, function($day) use($starts_with){
    return $day[0] === $starts_with;
  });

  echo "Days beginning with the letter '{$starts_with}': ", join(', ', $results);
{% endhighlight %}

### Meta Programming

Ruby developers often say that PHP is lacking `method_missing`, but it is available as `__call()`. There are many Magic Methods available 
like `__get()`, `__set()`, `__clone()`, `__toString()`, etc.

* [Read about Magic Methods][magic-methods]
* [Read about Reflection][reflection]

[namespaces]: http://php.net/namespaces
[overloading]: http://php.net/language.oop5.overloading
[oop]: http://php.net/language.oop5
[anonymous-functions]: http://php.net/functions.anonymous
[magic-methods]: http://php.net/language.oop5.magic
[reflection]: http://php.net/intro.reflection
[traits]: http://php.net/traits
[call-user-func-array]: http://php.net/function.call-user-func-array
[create-function]: http://php.net/create_function
