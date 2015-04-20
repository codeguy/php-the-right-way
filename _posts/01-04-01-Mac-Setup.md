---
title:   맥(Mac)에서 사용하기
isChild: true
anchor:  mac_setup
---

## 맥(Mac)에서 사용하기 {#mac_setup_title}

OS X 에는 기본적으로 PHP 가 포함되어 있지만, 최신의 안정된 버전이 포함되어 있지는 않습니다. Mountain Lion 에는 PHP
5.3.10 버전이 포함되어 있고, Mavericks 에는 5.4.17, Yosemite에는 5.5.9 버전이 포함되어 있습니다. 그러나 PHP 5.6이
나왔기 때문에 이러한 기본 버전으로는 충분치 않습니다.

OS X에 PHP를 설치하기 위해선 여러가지 방법이 있습니다.

### Homebrew를 사용하여 설치하기

[Homebrew]는 OSX에서 PHP와 다양한 익스텐션을 쉽게 설치할 수 있도록 도와주는 패키지 관리자 도구입니다.
[Homebrew PHP]는 Homebrew에서 사용되는 PHP와 관련된 다양한 "formulae"를 포함하고 있는 저장소입니다. 그리고 이는 PHP를
설치할 수 있도록 해줍니다.

`brew install`이라는 커맨드를 이용하여 `php53`, `php54`, `php55` 또는 `php56`를 설치할 수 있습니다. 그리고 `PATH` 
변수를 수정하여 설치되어있는 다양한 버전의 PHP를 변경할 수 있습니다. 이러한 과정이 번거롭다면,
[brew-php-switcher][brew-php-switcher]를 사용하여 자동으로 버전을 변경할 수 있습니다.

### Macports를 사용하여 설치하기

[MacPorts]는 OS X에서 오픈소스를 기반으로 한 커맨드라인, X11 또는 Aqua를 컴파일, 설치 그리고 업그레이드하기 쉽게
설계된 초기 오픈소스 커뮤니티입니다.

MacPorts는 미리 컴파일된 바이너리를 지원하여 의존성 패키지들을 설치할 때마다 매번 재컴파일하지 않아도 됩니다. 그래서
시스템에 어떠한 패키지도 갖고 있지 않다면 굉장한 시간을 절약할 수 있습니다.

`port install`이라는 커맨드를 이용하여 `php53`, `php54`, `php55` 또는 `php56`를 설치할 수 있습니다. 예를 들면:

    sudo port install php54
    sudo port install php55

그리고 `select` 커맨드를 이용하여 활성화된 PHP 버전을 변경할 수 있습니다.

    sudo port select --set php php55

### phpbrew를 사용하여 설치하기

[phpbrew]는 여러가지 PHP버전을 설치하고 관리하기 위한 도구입니다. 만약 다른 두개의 어플리케이션/프로젝트가 다른 버전의
PHP를 필요로 할때 매우 유용합니다. 더이상 가상머신을 사용하지 않아도 됩니다.

### 소스 컴파일하기

설치한 PHP 버전을 조작할 수 있는 또 다른 옵션으로는 [직접 설치][mac-compile]가 있습니다. 이때 애플 맥 개발자 센터에서
내려받기 가능한 [Xcode][xcode-gcc-substitution] 또는 [XCode를 위한 커맨드라인 도구]["Command Line Tools for XCode"]를
설치하셔야 합니다.

### 통합(All-in-One) 솔루션

위에 설명된 방법은 PHP 그 자체만을 다루며, Apache, Nginx 혹은 SQL 서버 등은 제공하지 않습니다.
[MAMP][mamp-downloads]나 [XAMPP][xampp]와 같은 통합 솔루션은 이러한 소프트웨어들을 함께 사용하기 쉽게 한번에
설치됩니다. 그러나 쉽게 설치할 수 있는 만큼 유연하지 못한 단점이 존재합니다.


[Homebrew]: http://brew.sh/
[Homebrew PHP]: https://github.com/Homebrew/homebrew-php#installation
[MacPorts]: https://www.macports.org/install.php
[phpbrew]: https://github.com/phpbrew/phpbrew
[mac-compile]: http://php.net/install.macosx.compile
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
["Command Line Tools for XCode"]: https://developer.apple.com/downloads
[mamp-downloads]: http://www.mamp.info/en/downloads/
[xampp]: http://www.apachefriends.org/en/xampp.html
[brew-php-switcher]: https://github.com/philcook/brew-php-switcher
