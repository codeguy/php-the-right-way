---
isChild: true
anchor:  programming_paradigms
title: 编程范式
---

## 编程范式 {#programming_paradigms_title}

PHP 是一个灵活的动态语言，支持多种编程技巧。这几年一直不断的发展，重要的里程碑包含 PHP 5.0 (2004) 增加了完善的面向对象模型，PHP 5.3 (2009) 增加了匿名函数与命名空间以及 PHP 5.4 (2012) 增加的 traits。

### 面向对象编程

PHP 拥有完整的面向对象编程的特性，包括类，抽象类，接口，继承，构造函数，克隆和异常等。

* [阅读 PHP 面向对象编程][oop]
* [阅读 Traits][traits]

### 函数式编程 Functional Programming

PHP 支持函数是「第一等公民」，即函数可以被赋值给一个变量，包括用户自定义的或者是内置函数，然后动态调用它。函数可以作为参数传递给其他函数（称为_高阶函数_），也可以作为函数返回值返回。

PHP 支持递归，也就是函数自己调用自己，但多数 PHP 代码使用迭代。

自从 PHP 5.3 (2009) 之后开始引入对闭包以及匿名函数的支持。

PHP 5.4 增加了将闭包绑定到对象作用域中的特性，并改善其可调用性，如此即可在大部分情况下使用匿名函数取代一般的函数。

* 学习更多 [PHP 函数式编程](/php-the-right-way/pages/Functional-Programming.html)
* [阅读匿名函数][anonymous-functions]
* [阅读闭包类][closure-class]
* [更多关于 Closures RFC][closures-rfc]
* [阅读 Callables][callables]
* [阅读动态调用函数 `call_user_func_array()`][call-user-func-array]

### 元编程

PHP 通过反射 API 和魔术方法，可以实现多种方式的元编程。开发者通过魔术方法，如 `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()`，等等，可以改变类的行为。Ruby 开发者常说 PHP 没有 `method_missing` 方法，实际上通过 `__call()` 和 `__callStatic()` 就可以完成相同的功能。

* [阅读魔术方法][magic-methods]
* [阅读反射][reflection]
* [阅读重载][overloading]

[oop]: http://php.net/language.oop5
[traits]: http://php.net/language.oop5.traits
[anonymous-functions]: http://php.net/functions.anonymous
[closure-class]: http://php.net/class.closure
[closures-rfc]: https://wiki.php.net/rfc/closures
[callables]: http://php.net/language.types.callable
[call-user-func-array]: http://php.net/function.call-user-func-array
[magic-methods]: http://php.net/language.oop5.magic
[reflection]: http://php.net/intro.reflection
[overloading]: http://php.net/language.oop5.overloading

