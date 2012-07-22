---
isChild: true
---

## 编程范式

PHP是一个灵活的动态语言，支持多种编程范式。这些年来一直在不断的进化，重要的里程碑包括PHP 5.0 (2004)增加完善的
面向对象模型、PHP 5.3 (2009)增加匿名函数和命名空间和PHP 5.4 (2012)增加traits. 

### 面向对象编程

* [学习PHP面向对象编程][oop]
* [学习Traits][traits]

### 函数式编程

PHP从5.3版本开始支持匿名函数:

{% highlight php %}
<?php
$greet = function($name)
{
    print("Hello {$name}");
};

$greet('World');
{% endhighlight %}

* [学习匿名函数][anonymous-functions]
* [学习动态调用函数`call_user_func_array`][call-user-func-array]

### 元编程

Ruby开发者经常说PHP没有`method_missing`，实际上`__call()`就是，PHP还有许多其他的魔术方法，如`__get()`, `__set()`,
`__clone()`, `__toString()`等。

* [学习魔术方法][magic-methods]
* [学习反射][reflection]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[overloading]: http://uk.php.net/manual/en/language.oop5.overloading.php
[oop]: http://www.php.net/manual/en/language.oop5.php
[anonymous-functions]: http://www.php.net/manual/en/functions.anonymous.php
[magic-methods]: http://php.net/manual/en/language.oop5.magic.php
[reflection]: http://www.php.net/manual/en/intro.reflection.php
[traits]: http://www.php.net/traits
[call-user-func-array]: http://php.net/manual/en/function.call-user-func-array.php
