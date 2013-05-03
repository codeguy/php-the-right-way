---
isChild: true
---

## Windows Setup {#windows_setup_title}

Windows 에 PHP를 설치하는 방법에는 여러가지 방법이 있습니다. [PHP 바이너리 다운로드 사이트][php-downloads]에서 '.msi' 인스톨러를
받을 수 있습니다.

학습이나 로컬에서의 개발이 목적이라면 PHP 5.4의 내장 웹서버를 사용하면 웹서버 설치와 설정에 대한 걱정없이 시작할 수 있습니다.
완전한 웹서버와 MySQL 데이터베이스 등을 포함한 "올인원" 패키지를 선호한다면 [Web Platform Installer][wpi]나
[Zend Server CE][zsce], [XAMPP][xampp], [WAMP][wamp] 등을 사용하여 빠르게 Windows에서 개발 환경을 갖출 수 있습니다.
이런 패키지를 사용할 때, Windows에서 개발하고 Linux에 배포하는 식으로 개발환경과 배포환경이 다른 경우에는 환경의 차이에
주의해야 합니다.

Windows에서 PHP 웹어플리케이션을 운영할 생각이라면 IIS7을 사용하는 편이 안정적이고 좋은 성능을 보여줄 것입니다.
[phpmanager][phpmanager](IIS7용 GUI 플러그인)을 사용하면 PHP를 설정하고 관리하는 작업이 쉬워집니다.
IIS7에는 FastCGI가 포함되어 있어 단지 PHP를 핸들러로 설정해주기만 하면 됩니다. 자세한 정보는
[iis.net에 있는 PHP 전용 섹션][php-iis]에서 볼 수 있습니다.

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/en/products/server-ce/
[xampp]: http://www.apachefriends.org/en/xampp.html
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
