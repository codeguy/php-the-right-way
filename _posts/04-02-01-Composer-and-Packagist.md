---
title:   Composer와 Packagist
isChild: true
anchor:  composer_and_packagist
---

## Composer와 Packagist {#composer_and_packagist_title}

Composer는 **훌륭한** 의존성 관리자입니다. 프로젝트의 의존성을 `composer.json` 파일에 기록하고 간단한 커맨드 몇 개를
사용하면 Composer가 알아서 다운로드하고 오토로딩(autoloading) 설정을 해줍니다.

이미 Composer와 호환되는 많은 PHP 라이브러리가 있기 때문에 프로젝트에서 바로 사용할 수 있습니다. Composer 패키지들은 
[Packagist]라는 공식 저장소에서 관리됩니다.

### Composer 설치

Composer를 로컬 디렉토리에 설치할 수 있습니다. (즉, 현재 작업중인 디렉토리에 설치할 수 있습니다. 하지만 권장할만한
방법은 아닙니다.) 시스템에 글로벌하게 설치할 수도 있습니다. (즉, /usr/local/bin 에 설치됩니다.) 일단 로컬 디렉토리에
설치해봅시다. 프로젝트의 루트 디렉토리에서 아래와 같이 명령을 실행합니다.

{% highlight console %}
curl -s https://getcomposer.org/installer | php
{% endhighlight %}

이렇게 하면 `composer.phar`라는 PHP 바이너리 파일이 다운로드됩니다. `php`로 이 바이너리를 실행하여 프로젝트의 의존성을
관리할 수 있습니다.
<strong>반드시 참고할것!</strong> 여기서 하는 것처럼 웹에서 다운로드한 코드를 바로 PHP 인터프리터에 파이프로 전달하여
실행하는 경우에는 실행하기 전에 먼저 코드 내용을 보고 안전한 코드인 것을 확인한 후에 실행하기 바랍니다.

#### 윈도우에 Composer 설치

윈도우에 설치하는 가장 간단한 방법은 [ComposerSetup] 인스톨러를 사용하는 것입니다. 링크에서 설치 파일을 받아 설치하면,
시스템의 프로그램 설치 경로에 설치를 해주고 `PATH` 환경변수에도 추가해주기 때문에 어느 디렉토리에서 커맨드라인을
실행하든지 그냥 `composer` 명령을 실행할 수 있게 됩니다.

### Composer 설치 (수작업으로)

Composer를 수작업으로 설치하는 건 고급 기술에 속한다고 할 수 있습니다. 하지만 자동설치에 비해서 수작업 설치를 더
좋아할 만한 이유는 다양합니다. 대화형 자동 설치 과정에서는 다음과 같은 내용을 확인합니다.

- 충분한 PHP 버전이 설치되어 있는지
- `.phar` 파일이 제대로 수행될 수 있는지
- 필요한 디렉토리의 권한이 제대로 설정되어 있는지
- 문제를 일으킬만한 익스텐션이 로드되어 있지는 않은지
- 필요한 세팅이 `php.ini`에 활성화되어 있는지

수작업으로 설치할 때에는 이러한 내용을 자동으로 확인해주는 과정이 전혀 없기 때문에, 자동 체크 과정을 포기하고도 충분한
이점이 있는지 결정하는 것은 여러분의 몫입니다. 수작업으로 설치하기로 결정했으면 아래와 같이 실행하면 됩니다.

{% highlight console %}
curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
chmod +x $HOME/local/bin/composer
{% endhighlight %}

`$HOME/local/bin` (이나 여러분이 설치하기로 결정한 다른 디렉토리)는 환경변수 `$PATH`에 포함되어 있어야 합니다. 그래야
`composer` 명령어를 실행할 수 있습니다.

이렇게 설치하고 나면 앞에서 Composer를 실행하려고 `composer install`라고 했던 것을 다음과 같이 줄여서 실행할 수
있습니다.

{% highlight console %}
composer install
{% endhighlight %}

여러분이 Composer를 시스템에 글로벌하게 설치하였다고 가정하고 다음 항목을 보면 됩니다.

### 의존관계를 정의하고 설치하기

Composer는 프로젝트의 의존관계 정보를 `composer.json`라는 파일에 기록하여 관리합니다. 이 파일을 직접 수정할 수도 있고
Composer를 사용하여 수정할 수도 있습니다. `composer require`라는 명령어는 의존관계 정보를 추가해줍니다. `composer.json`
파일이 아직 없으면 파일을 생성해서 의존관계 정보를 추가해줍니다. [Twig]를 프로젝트 의존관계에 추가하는 예제가 아래에
있습니다.

{% highlight console %}
composer require twig/twig:~1.8
{% endhighlight %}

이렇게 하는 대신 `composer init` 명령어를 사용하면 여러분의 프로젝트를 위한 완전한 `composer.json` 파일을 만들 수 있게
도와줍니다. 둘 중 어느 방법을 사용하든지, `composer.json` 파일을 만들고 나면 이제 Composer 를 이용하여 패키지를
`vendors/` 디렉토리에 설치할 수 있습니다. 

{% highlight console %}
composer install
{% endhighlight %}

다음으로, 여러분이 작성하는 어플리케이션의 PHP 파일에 아래와 같은 내용을 추가하여 Composer의 오토로더(autoloader)를
사용한다는 것을 PHP에게 알려줍니다.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

이제 여러분은 필요한 의존 라이브러리를 사용할 수 있습니다. 그 라이브러리들은 필요할 때 자동으로 로드될 것입니다.

### 의존관계 정보 업데이트하기

`composer install` 명령어를 처음 실행하면 Composer는 설치한 패키지들의 버전을 기록한 `composer.lock` 파일을 생성합니다.
여러분의 프로젝트를 다른 개발자와 공유할 때 `composer.lock` 파일을 같이 포함시켜서 공유하면, 다른 개발자가 프로젝트를
받아서 `composer install` 명령어를 실행했을 때 여러분이 사용한 것과 동일한 버전의 패키지를 받게 됩니다. 의존관계
정보를 업데이트하고 싶으면 `composer update` 명령어를 실행하면 됩니다.

이런 점은 여러분이 사용하는 패키지 버전을 유연하게 관리하려고 할 때 가장 유용할 것입니다. 예를 들어 `~1.8` 이라고
버전을 지정한 것은 "`1.8.0` 보다는 높은 버전이지만 `2.0.x-dev` 버전보다는 낮은 버전"을 의미합니다. `*` 와일드카드
문자를 사용해서 `1.8.*` 이라고 표현하는 것도 동일한 의미입니다. `composer update` 명령어를 실행하면 지정된 제한 사항에
맞는 최신 버전으로 의존관계 정보를 업데이트해 줍니다.

### 업데이트 알림 받기

[VersionEye]라는 웹 서비스에 가입하여 새 버전 알림을 받을 수 있습니다. 여러분의 GitHub나 BitBucket 계정의 저장소에서
`composer.json` 파일을 모니터링하다가 새로운 패키지 업데이트가 나오면 메일로 알려주는 기능을 하는 서비스입니다.

### 의존 패키지들의 보안 이슈 확인하기

[Security Advisories Checker]는 `composer.lock` 파일을 확인하여 여러분의 의존관계를 업데이트해야 하는지 알려주는
웹 서비스와 커맨드라인 도구입니다.

### Composer를 이용하여 전역 의존 패키지들 관리하기

Composer는 전역 의존성과 바이너리(실행파일) 또한 관리 가능합니다. 사용법은 아주 간단합니다. 그저 모든 커맨드 앞에
`global`만 붙이면 됩니다. PHPUnit을 인스톨 하고 싶고, 이것이 전역에서 사용가능하다면 다음과 같이 커맨드를 입력할 수
있습니다.

{% highlight console %}
composer global require phpunit/phpunit
{% endhighlight %}

위 명령어는 의존 패키지들을 위치할 `~/.composer` 폴더를 생성합니다(이미 있다면 그냥 넘어가겠죠?). 설치된 패키지가
어디에서든 실행되어야 할 바이너리(실행파일)를 갖고 있다면, 이를 실행하기 위해서 `~/.composer/vendor/bin`폴더를
`$PATH`변수에 추가해야 합니다.

* [알아보기: Composer][Learn about Composer]

(역주 : 그리고 놀랍게도 Composer는 한국어 메뉴얼이 존재합니다!)

* [Composer 한글 웹사이트][Composer Korean]

[Packagist]: http://packagist.org/
[Twig]: http://twig.sensiolabs.org
[VersionEye]: https://www.versioneye.com/
[Security Advisories Checker]: https://security.sensiolabs.org/
[Learn about Composer]: http://getcomposer.org/doc/00-intro.md
[ComposerSetup]: https://getcomposer.org/Composer-Setup.exe
[Composer Korean]: http://xpressengine.github.io/Composer-korean-docs/
