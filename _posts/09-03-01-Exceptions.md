---
title:   예외 (Exceptions)
isChild: true
anchor:  exceptions
---

## 예외 {#exceptions_title}

예외(Exceptions) 개념은 대부분의 인기있는 프로그래밍 언어에 표준적으로 포함되어 있는 개념인데, PHP 프로그래머들에게는
과소평가되는 경우가 많은 것 같습니다. Ruby 같은 언어는 극단적으로 예외를 많이 사용하는 편이라서 HTTP 요청이 실패하거나
DB 쿼리 실행에 문제가 생겼을 때, 하다못해 이미지 리소스를 찾지 못했을 때에도 Ruby 프로그램(이나 그 프로그램에 사용한
gem들)은 예외를 던져서 뭔가 실수가 있었을 거라는 정보를 화면에 출력합니다.

PHP는 그러한 부분에 있어서는 상당히 느슨한 편이라서 `file_get_contents()` 함수 호출이 실패하는 경우라면 여러분은
`FALSE` 리턴값과 경고 메시지를 받게 됩니다. CodeIgniter 등 많은 수의 오래된 PHP 프레임워크들은 실패 시에 단순히
false를 리턴하고 프레임워크가 제공하는 로그 기록 시스템에 로그 메시지를 기록하며, `$this->upload->get_error()` 를
호출하면 무슨 이유로 실패했는지 알 수 있게 해주는 식으로 동작합니다. 무엇이 잘못되었는지 개발자가 알기 위해서는 그
클래스의 에러 정보를 얻을 수 있는 방법이 무엇인지 문서를 찾아보아야만 알 수 있다는 점이, 이러한 방식의 문제라고 할 수
있습니다.

또다른 문제는 실패 시에 화면에 에러를 출력하고 처리를 종료해버리는 것입니다. 여러분이 이런 식으로 코드를 작성했다면,
그 코드를 사용하는 다른 개발자가 에러 처리를 유연하게 할 수 없게 됩니다. 에러가 발생했을 때에는 예외(Exception)을
던지도록 작성해야 합니다. 그래야 어떤 에러가 발생했는지 개발자가 명확하게 알 수 있고, 어떤 방식으로 그 에러를 처리할
것인지 개발자 직접 결정할 수 있게 됩니다. 아래 코드를 보시죠.

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
    // 데이터의 유효성 체크에 실패한 경우
}
catch(Fuel\Email\SendingFailedException $e)
{
    // 메일 전송을 시도했는데 성공하지 못한 경우
}
finally
{
    // 이 부분은 예외가 발생했는지 아닌지와 상관없이 항상 실행됨
}
{% endhighlight %}

### SPL 예외

`Exception` 클래스는 개발자가 디버깅에 사용할 수 있는 정보를 그리 많이 제공하지는 않습니다. 하지만 이런 점을 보완하기
위해서 `Exception` 클래스를 상속해서 좀 더 구체적인 예외 클래스를 만들 수 있습니다.

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

이렇게 예외 클래스를 구체적으로 만들면 여러 개의 catch 문을 달아서 다른 종류의 예외를 서로 다르게 처리할 수 있게
됩니다. 그러다보면 <em>너무 많은</em> 예외 클래스를 만들어야 하는 것이 문제가 될 수도 있는데, 앞서 얘기한
[SPL 익스텐션][splext]에서 포함되어 있는 SPL 예외 클래스들을 적절히 사용한다면 그런 문제를 줄일 수 있습니다.

예를 들어 `__call()` 특수 매서드(Magic Method)에 잘못된 메소드 호출이 들어온 상황을 처리할 때, 두루뭉실하게 그냥
Exception을 던지거나 Exception 클래스를 상속받은 예외 클래스를 작성해서 던지는 대신에
`throw new BadMethodCallException;` 이라고 할 수 있겠습니다.

* [읽을거리: Exceptions][exceptions]
* [읽을거리: SPL Exceptions][splexe]
* [PHP에서 Nesting Exceptions][nesting-exceptions-in-php]


[splext]: /#standard_php_library
[exceptions]: https://secure.php.net/language.exceptions
[splexe]: https://secure.php.net/spl.exceptions
[nesting-exceptions-in-php]: https://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/

