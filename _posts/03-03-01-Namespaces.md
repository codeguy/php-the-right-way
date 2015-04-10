---
title: 네임스페이스
isChild: true
anchor:  namespaces
---

## 네임스페이스 {#namespaces_title}

앞에서 얘기한 것처럼 PHP 커뮤니티에서는 많은 개발자들이 수많은 코드를 만들고 있습니다. 그러므로 서로 다른 PHP 라이브러리에 같은 이름의
클래스가 포함되어 있을 수 있습니다. 두 라이브러리가 같은 네임스페이스를 사용한다면 서로 충돌이 나서 문제가 됩니다.

_네임스페이스_ 기능은 이런 문제를 해결해줍니다. PHP 매뉴얼에 설명된대로, 네임스페이스는 OS의 디렉토리에 비교하여 설명할 수 있습니다.
두 개의 파일을 각각 다른 디렉토리에 넣는다면 두 파일의 이름이 같아도 상관이 없듯이, 두 개의 PHP 클래스를 각각 다른 네임스페이스에 둔다면
두 클래스의 이름이 동일해도 상관이 없습니다. 참 쉽죠?

다른 개발자가 사용할 가능성이 있는 코드를 작성한다면, 네임스페이스로 잘 감싸서 다른 라이브러리와 이름 충돌이 발생하지 않게
하는 것이 좋습니다.

One recommended way to use namespaces is outlined in [PSR-4][psr4], which aims to provide a standard file, class and
namespace convention to allow plug-and-play code.

In October 2014 the PHP-FIG deprecated the previous autoloading standard: [PSR-0][psr0], which has been replaced with
[PSR-4][psr4]. Currently both are still usable, as PSR-4 requires PHP 5.3 and many PHP 5.2-only projects currently implement
PSR-0. If you're going to use an autoloader standard for a new application or package then you almost certainly want
to look into PSR-4.

* [Read about Namespaces][namespaces]
* [Read about PSR-0][psr0]
* [Read about PSR-4][psr4]


[namespaces]: http://php.net/language.namespaces
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
