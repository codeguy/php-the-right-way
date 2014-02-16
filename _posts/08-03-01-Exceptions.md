---
isChild: true
---

<h2 id="exceptions">异常</h2>

异常是大部分流行语言的标准特性，但是PHP开发者却不太重视。其他语言如 Ruby极度倚赖异常，在任何错误发生的时候，如HTTP请求失败
、DB查询错误，甚至图片资源未找到，都会抛出一个异常，以及时提示那里发生了一个错误。

PHP则对此很宽松，如调用`file_get_contents()`失败，只是返回`FALSE`并提示一个warning信息而已。很多老的PHP框架，如
CodeIgniter会返回false，然后在自己的日志里记录一个消息，开发者需要使用如`$this->upload->get_error()`的方式来查看发生了什么
错误。这么做需要你自己检查是否有错误，并需要根据不同类调用不同的方法来获取错误消息，而不能让错误明显的显示出来。

这种做法的另外一个弊端是当类自动在屏幕打印一个错误，然后退出进程，阻止了其他开发者动态处理该错误的机会。而异常则是让开发者知道
发生了错误，并让他们选择如何处理：

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
    // The validation failed
}
catch(Fuel\Email\SendingFailedException $e)
{
    // The driver could not send the email
}
finally
{
    // Executed regardless of whether an exception has been thrown, and before normal execution resumes
}
{% endhighlight %}

### SPL异常

默认的异常类Exception包含的上下文信息很少，对于debug不方便，常见的做法是创建更具体的子类：

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

这使得你可以包含多个catch子句来处理不同的异常，但是这又会导致创建_很多的_自定义异常类，可以用SPL中的异常类来缓解这个问题
[SPL扩展][splext]. 

如使用`__call()`魔术方法，对不存在的方法调用抛出一个`throw new BadFunctionCallException;`，既避免了抛出含义模糊的
Exception异常，也省去了自定义异常类的麻烦。

* [学习更多Exceptions][exceptions]
* [了解跟多SPL Exceptions][splexe]
* [PHP中的异常嵌套][nesting-exceptions-in-php]
* [PHP 5.3异常最佳实践][exception-best-practices53]

[exceptions]: http://php.net/manual/en/language.exceptions.php
[splexe]: http://php.net/manual/en/spl.exceptions.php
[splext]: /#standard_php_library
[exception-best-practices53]: http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3
[nesting-exceptions-in-php]: http://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
