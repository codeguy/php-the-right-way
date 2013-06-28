---
title: 编程范式
anchorid: programming_paradigms
isChild: true
---

<h2 id="programming_paradigms">编程范式</h2>

PHP是一个灵活的动态语言，支持多种编程范式。这些年来一直在不断的进化，重要的里程碑包括PHP 5.0 (2004)增加完善的
面向对象模型、PHP 5.3 (2009)增加匿名函数和命名空间和PHP 5.4 (2012)增加traits. 

### 面向对象编程
PHP具有完整的面向对象编程特性，如类、抽象类、接口、继承、构造函数、克隆和异常等。

* [学习PHP面向对象编程][oop]
* [学习Traits][traits]

### 函数式编程

PHP支持第一类函数(first-class function)，即函数可以赋值给变量，包括用户自定义的函数和内置函数，然后动态调用它。
函数可以作为参数传递给其他函数(即高阶函数)，也可以作为函数返回值返回。

PHP支持函数递归调用，即函数自己调用自己，不过在实际的PHP代码中，我们更喜欢用迭代来代替递归。

2009年发布的PHP 5.3开始引入支持闭包的匿名函数。

PHP 5.4支持把闭包绑定到对象作用域，并改善其可调用性，从而可以在大部分场景中使用匿名函数替代普通函数。

* [学习更多PHP函数式编程](http://wulijun.github.io/php-the-right-way/pages/Functional-Programming.html)
* [学习匿名函数][anonymous-functions]
* [Read about the Closure class][closure-class]
* [More details in the Closures RFC][closures-rfc]
* [Read about Callables][callables]
* [学习动态调用函数`call_user_func_array`][call-user-func-array]

### 元编程

PHP通过反射API和魔术方法机制，支持多种方式的元编程。开发者通过魔术方法，如`__get()`, `__set()`, `__clone()`, `__toString()`,
`__invoke()`等，可以改变类的行为。Ruby开发者经常说PHP没有`method_missing`方法，实际上通过`__call()`和`__callStatic()`就可以
完成同样的功能。

* [学习魔术方法][magic-methods]
* [学习反射][reflection]

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
