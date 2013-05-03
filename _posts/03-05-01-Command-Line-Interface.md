---
isChild: true
---

## 커맨드라인 인터페이스 {#command_line_interface_title}

PHP는 웹어플리케이션 작성을 지원하는 것을 주요 목적으로 삼고 있지만, 커맨드라인 인터페이스(CLI) 프로그램을 만드는 데에도 유용하게 사용할 수 있습니다.
커맨드라인 PHP 프로그램은 테스트, 배포, 관리 등의 일반적인 작업을 자동화하는데 도움을 줄 수 있습니다.

여러분의 웹어플리케이션 코드를 그대로 사용할 수 있다는 점이 CLI PHP 프로그램의 장점입니다. 웹 GUI 만들기나 웹 보안에 신경쓰지 않고도 말이죠.
CLI PHP 스크립트를 웹어플리케이션 경로에 두지 않도록 조심하기만 하면 됩니다.

커맨드라인에서 PHP를 실행해봅시다.

{% highlight bash %}
> php -i
{% endhighlight %}

`-i` 옵션은 [`phpinfo`][phpinfo] 함수와 동일하게 PHP 설정을 출력해줍니다.

`-a` 옵션은 Ruby의 IRB나 Python의 대화형 쉘 같은 대화형 쉘을 제공해줍니다. 이것 말고도 유용한 [커맨드라인 옵션들][cli-options]이 많이 있습니다.

간단한 "Hello, $name" CLI 프로그램을 만들어봅시다. 아래외 같이 `hello.php` 파일을 만들면 됩니다.

{% highlight php %}
<?php
if ($argc != 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP는 스크립트가 실행될 때 주어진 인자를 가지고 특별한 변수 두 개를 설정합니다. [`$argc`][argc]는 인자 *개수*를 나타내는 정수값이고,
[`$argv`][argv]는 각 인자 *값*이 들어있는 배열입니다. 첫 번째 인자는 항상 PHP 스크립트 파일 이름입니다. 
이 경우에는 `hello.php`가 들어있게 됩니다.

`exit()` 표현식은 0이 아닌 숫자와 함께 사용하여, 커맨드가 실패했다는 것을 쉘에 알려주는데 사용합니다. 
흔히 사용되는 종료 코드를 [이곳에서][exit-codes] 볼 수 있습니다.

커맨드라인에서 아래와 같이 실행해봅시다.

{% highlight bash %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}


 * [커맨드라인 PHP 프로그램에 대해서 더 알아보기][php-cli]
 * [Windows 환경에서 커맨드라인 PHP 프로그램을 실행하기 위한 설정 알아보기][php-cli-windows]

[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
