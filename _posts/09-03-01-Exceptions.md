---
isChild: true
anchor:  exceptions
title: 异常
---

## 异常 {#exceptions_title}

异常是许多流行编程语言的标配，但它们往往被 PHP 开发人员所忽视。像 Ruby 就是一个极度重视异常的语言，无论有什么错误发生，像是 HTTP 请求失败，或者数据库查询有问题，甚至找不到一个图片资源，Ruby （或是所使用的 gems），将会抛出异常，你可以通过屏幕立刻知道所发生的问题。

PHP 处理这个问题则比较随意，调用 `file_get_contents()` 函数通常只会给出 `FALSE` 值和警告。许多较早的 PHP 框架比如 CodeIgniter 只是返回 false，将信息写入专有的日志，或者让你使用类似 `$this->upload->get_error()` 的方法来查看错误原因。这里的问题在于你必须找出错误所在，并且通过翻阅文档来查看这个类使用了什么样的错误的方法，而不是明确的暴露错误。

另一个问题发生在当类自动抛出错误到屏幕时会结束程序。这样做会阻挡其他开发者动态处理错误的机会。应该抛出异常让开发人员意识到错误的存在，让他们可以选择处理的方式，例如：

{% highlight php %}
<?php
$email = new Fuel\Email;
$email->subject('My Subject');
$email->body('How the heck are you?');
$email->to('guy@example.com', 'Some Guy');

try
{
    $email->send();
}
catch(Fuel\Email\ValidationFailedException $e)
{
    // 验证失败
}
catch(Fuel\Email\SendingFailedException $e)
{
    // 这个驱动无法发送 email
}
finally
{
    // 无论抛出什么样的异常都会执行，并且在正常程序继续之前执行
}
{% endhighlight %}

### SPL 异常

原生的 `Exception` 类并没有提供太多的调试情境给开发人员，不过可以通过建立一个特殊的 `Exception` 来弥补它，方式就是建立一个继承自原生 `Exception` 类的一个子类：

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

如此一来，可以加入多个 catch 区块，并且根据不同的异常分别处理。通过这样可以建立 <em>许多</em>自定义异常，其中有些已经在 [SPL 扩展][splext] 提供的 SPL 异常中定义了。

举例来说，如果你使用了 `__call()` 魔术方法去调用一个无效的方法，而不是抛出一个模糊的标准 Exception 或是建立自定义的异常处理，你可以直接抛出 `throw new BadMethodCallException;`。

* [Read about Exceptions][exceptions]
* [Read about SPL Exceptions][splexe]
* [Nesting Exceptions In PHP][nesting-exceptions-in-php]
* [Exception Best Practices in PHP 5.3][exception-best-practices53]


[splext]: /#standard_php_library
[exceptions]: http://php.net/language.exceptions
[splexe]: http://php.net/spl.exceptions
[nesting-exceptions-in-php]: http://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
[exception-best-practices53]: http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3
