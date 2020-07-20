---
title:   커맨드라인 인터페이스
isChild: true
anchor:  command_line_interface
---

## 커맨드라인 인터페이스 {#command_line_interface_title}

PHP는 웹어플리케이션 작성을 주요 목적으로 삼고 있지만, 커맨드라인 인터페이스(CLI) 프로그램을 만드는 데에도 유용하게
사용할 수 있습니다. 커맨드라인 PHP 프로그램은 테스트, 배포, 관리 등 일반적인 작업을 자동화하는데 도움을 줄 수 있습니다.

여러분의 웹어플리케이션 코드를 그대로 사용할 수 있다는 점이 CLI PHP 프로그램의 장점입니다. 웹 GUI 만들기나 웹 보안에
신경쓰지 않고도 말이죠. CLI PHP 스크립트를 웹어플리케이션 경로에 두지 **않도록** 조심하여아 합니다.

커맨드라인에서 PHP를 실행해봅시다.

{% highlight console %}
> php -i
{% endhighlight %}

`-i` 옵션은 [`phpinfo()`][phpinfo] 함수와 동일하게 PHP 설정을 출력합니다.

`-a` 옵션은 Ruby의 IRB나 Python의 대화형 쉘 같은 대화형 쉘을 제공합니다. 이것 말고도 유용한
[커맨드라인 옵션][cli-options]이 많이 있습니다.

간단한 "Hello, $name" CLI 프로그램을 만들어봅시다. 다음과 같이 `hello.php` 파일을 만들어 봅시다.

{% highlight php %}
<?php
if ($argc !== 2) {
    echo "Usage: php hello.php <name>.\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP는 스크립트가 실행될 때 주어진 인자를 가지고 특별한 변수 두 개를 설정합니다. [`$argc`][argc]는 인자 *개수*를
나타내는 정수값이고, [`$argv`][argv]는 각 인자 *값*이 들어있는 배열입니다. 첫 번째 인자는 항상 PHP 스크립트 파일
이름입니다. 이같은 경우에는 `hello.php`가 들어있습니다.

`exit()` 표현식은 0이 아닌 숫자와 함께 사용하여, 커맨드가 실패했다는 것을 쉘에 알려주는데 사용합니다. 흔히 사용되는
종료 코드를 [이곳에서][exit-codes] 볼 수 있습니다.

커맨드라인에서 다음과 같이 실행해봅시다.

{% highlight console %}
> php hello.php
Usage: php hello.php <name>
> php hello.php world
Hello, world
{% endhighlight %}


 * [알아보기: 커맨드라인 PHP 실행하기][php-cli]

[phpinfo]: https://secure.php.net/function.phpinfo
[cli-options]: https://secure.php.net/features.commandline.options
[argc]: https://secure.php.net/reserved.variables.argc
[argv]: https://secure.php.net/reserved.variables.argv
[exit-codes]: https://www.gsp.com/cgi-bin/man.cgi?section=3&amp;topic=sysexits
[php-cli]: https://secure.php.net/features.commandline.options
