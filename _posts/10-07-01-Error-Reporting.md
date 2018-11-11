---
title:   에러 보고
isChild: true
anchor:  error_reporting
---

## 에러 보고 {#error_reporting_title}

에러 로깅은 어플리케이션의 문제 지점을 찾는데 유용하기도 하지만, 어플리케이션의 구조를 외부에 노출시키는 문제가 있기도
합니다. 그러므로 이러한 이슈가 발생하지 않게 하려면 개발용 서버와 운영(라이브) 서버의 설정을 다르게 해야 합니다.

### 개발 서버

**개발 과정**에서 발생할 수 있는 모든 에러를 보여주려면 아래와 같은 설정을 `php.ini`에 하면 됩니다.

{% highlight ini %}
display_errors = On
display_startup_errors = On
error_reporting = -1
log_errors = On
{% endhighlight %}

> `-1`로 설정하는 것은 앞으로 나올 PHP 버전에서 새로운 레벨이나 상수가 추가되더라도, 새로 추가된 것들까지 포함해서 모든
> 에러를 표시하게 만드는 설정입니다. PHP 5.4에서는 `E_ALL` 상수가 같은 역할을 합니다. - 
> [php.net](https://secure.php.net/function.error-reporting)

PHP 5.3.0에서 `E_STRICT` 에러 레벨이 추가되었는데, `E_ALL`에 포함되지 않는 레벨이었습니다. 하지만 5.4.0 에서는
`E_ALL`에 포함되는 것으로 변경되었습니다. 이것은 무슨 의미일까요? 모든 가능한 에러를 표시하도록 설정하려면 PHP
5.3에서는 `-1`로 설정하거나, `E_ALL | E_STRICT`라고 설정해야 한다는 이야기입니다.

**PHP 버전별로 모든 에러를 표시하게 설정하는 방법**

* &lt; 5.3 `-1` or `E_ALL`
* &nbsp; 5.3 `-1` or `E_ALL | E_STRICT`
* &gt; 5.3 `-1` or `E_ALL`

### 운영 서버

**운영 환경**에서는 에러를 표시하지 않게 설정하려면 `php.ini`에 아래와 같이 설정합니다.

{% highlight ini %}
display_errors = Off
display_startup_errors = Off
error_reporting = E_ALL
log_errors = On
{% endhighlight %}

이렇게 설정하면, 에러가 발생하면 웹 서버의 에러 로그에 여전히 기록은 되지만 사용자에게 표시하지는 않습니다. PHP
매뉴얼을 보면 더 많은 정보를 얻을 수 있습니다.

* [error_reporting](https://secure.php.net/errorfunc.configuration#ini.error-reporting)
* [display_errors](https://secure.php.net/errorfunc.configuration#ini.display-errors)
* [display_startup_errors](https://secure.php.net/errorfunc.configuration#ini.display-startup-errors)
* [log_errors](https://secure.php.net/errorfunc.configuration#ini.log-errors)
