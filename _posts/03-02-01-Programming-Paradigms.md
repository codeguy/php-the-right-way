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

PHP supports first-class and higher-order functions. This means that a function literal (or lambda expression or anonymous function)
can be assigned to a variable or passed as a parameter to another function. Variables containing functions can be invoked on-the-fly.

Anonymous Functions:

PHP has long supported on-the-fly function creation through the use of the [create_function][create-function] function; however, this is
less-than elegant, error-prone, and generally not recommended. It is recommended that you instead use the literal [anonymous function support][anonymous-functions]
introduced with the release of [PHP 5.3 (2009)][changelog-53].

{% highlight php %}
<?php
$greet = function($name)
{
    print("Hello {$name}");
};

$greet('World');
{% endhighlight %}

Higher-order Functions:

A function is a higher-order function if it does one of the following:

-   accepts a function as an input parameter
-   outputs a function

Higher-order Anonymous Function Application:

{% highlight php %}
<?php

  $days_of_week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  // function accepts `$day` as a parameter and returns only days that start with the letter 't'
  $start_with_t = array_filter($days_of_week, function($day){
    return preg_match('/^t/ui', $day);
  });

  // function accepts `$day` as a parameter and returns name of day as an uppercase string
  $start_with_t = array_map(function($day){
    return strtoupper($day);
  }, $start_with_t);

  // Days beginning with the letter "T": TUE, THU
  echo 'Days beginning with the letter "T": ', join(', ', $start_with_t);
{% endhighlight %}

Higher-order Function (Closure) Application:

Although the PHP manual alludes to anonymous functions and closures as being synonymous, this is misleading. A closure is an anonymous function
that has captured the state of variables that are available in the scope in which the function was defined. In some languages, all in-scope
variables are captured; however, PHP allows the developer to "white-list" the variables that are captured. This makes PHP closures extremely
easy to reason about. The white-list is defined by using the `use(...)` keyword.

{% highlight php %}
<?php

  $starts_with  = 's';
  $days_of_week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  // function accepts `$day` as a parameter and returns only days that start with the letter assigned to `$starts_with`
  $results      = array_filter($days_of_week, function($day) use($starts_with){
    return preg_match("/^{$starts_with}/ui", $day);
  });

  // Days beginning with the letter 's': sun, sat
  echo "Days beginning with the letter '{$starts_with}': ", join(', ', $results);
{% endhighlight %}

A common use of higher-order functions is to implement the strategy pattern. The built-in `array_filter` function asks for both the input
input array (data) and a function (strategy) used as a predicate (function returning a boolean result) on each array item.

{% highlight php %}
<?php

  function criteria_greater_than($min) {
    return function($item) use ($min) {
        return $item > $min;
    };
  }

  $input  = [1, 2, 3, 4, 5, 6];
  $output = array_filter($input, criteria_greater_than(3));

  // Numbers greater than 3: 4, 5, 6
  echo "Numbers greater than 3: ", join(', ', $output);
{% endhighlight %}

* [Read about Anonymous functions][anonymous-functions]
* [More details in the Closures RFC][closures-rfc]
* [Read about dynamically invoking functions with `call_user_func_array`][call-user-func-array]

### Meta Programming

Similar to Ruby's `method_missing` PHP has `__call()`.

There are many Magic Methods available such as `__get()`, `__set()`, `__clone()`, `__toString()`.

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
[changelog-53]: http://php.net/ChangeLog-5.php#5.3.0
[closures-rfc]: https://wiki.php.net/rfc/closures
