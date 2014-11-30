---
title: 네임스페이스
isChild: true
---

## 네임스페이스 {#namespaces_title}

<<<<<<< HEAD
앞에서 얘기한 것처럼 PHP 커뮤니티에서는 많은 개발자들이 수많은 코드를 만들고 있습니다. 그러므로 서로 다른 PHP 라이브러리에 같은 이름의
클래스가 포함되어 있을 수 있습니다. 두 라이브러리가 같은 네임스페이스를 사용한다면 서로 충돌이 나서 문제가 됩니다.

_네임스페이스_ 기능은 이런 문제를 해결해줍니다. PHP 매뉴얼에 설명된대로, 네임스페이스는 OS의 디렉토리에 비교하여 설명할 수 있습니다.
두 개의 파일을 각각 다른 디렉토리에 넣는다면 두 파일의 이름이 같아도 상관이 없듯이, 두 개의 PHP 클래스를 각각 다른 네임스페이스에 둔다면
두 클래스의 이름이 동일해도 상관이 없습니다. 참 쉽죠?

다른 개발자가 사용할 가능성이 있는 코드를 작성한다면, 네임스페이스로 잘 감싸서 다른 라이브러리와 이름 충돌이 발생하지 않게
하는 것이 좋습니다.

코드를 자유롭게 넣었다 뺐다하기 좋은 표준적인 파일, 클래스, 네임스페이스 관례를 [PSR-0][psr0]에서 설명하고 있으니 참고하기 바랍니다.

2013년 12월에 PHP-FIG는 [PSR-4][psr4]라는 새로운 autoloading 표준을 만들었습니다. PSR-4는 언젠가 PSR-0를 대체할 것입니다.
현재는 두 가지 모두 사용할 수 있는 상태입니다. PSR-4는 PHP 5.3 이상이어야 하고 많은 수의 PHP 5.2 이하에서만 작동하는 프로젝트들은 
PSR-0를 구현하고 있다는 정도의 차이가 있습니다. 여러분이 새로운 어플리케이션이나 패키지를 만들 때 autoloader 표준을 사용할 생각이라면
PSR-4를 꼭 보아야 할 것입니다.

* [Read about Namespaces][namespaces]
* [Read about PSR-0][psr0]
* [Read about PSR-4][psr4]

[namespaces]: http://php.net/manual/en/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
