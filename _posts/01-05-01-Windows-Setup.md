---
title:   윈도우(Windows)에서 사용하기
isChild: true
anchor:  windows_setup
---

## 윈도우(Windows)에서 사용하기 {#windows_setup_title}

[PHP 바이너리 다운로드 사이트][php-downloads]에서 바이너리를 다운로드 받을 수 있습니다. PHP 압축을 푼 뒤에는 PHP 루트 폴더(php.exe가 있는 폴더)를 [PATH][windows-path]에 설정하여 PHP를 어느 곳에서나 실행할 수 있도록 하는 것이 좋습니다.

학습 혹은 로컬에서의 개발이 목적이라면 PHP 5.4 부터 내장되어 있는 웹서버를 사용하면, 웹서버 설치와 설정에 대한
걱정없이 시작할 수 있습니다. 완전한 웹서버와 MySQL 데이터베이스 등을 포함한 "통합(All-in-One)" 패키지를 선호한다면
[Web Platform Installer][wpi]나 [XAMPP][xampp], [EasyPHP][easyphp], [OpenServer][openserver], [WAMP][wamp] 등을 사용하여 빠르게 윈도우에서 개발
환경을 갖출 수 있습니다. 이런 패키지를 사용할 때는, 윈도우에서 개발하고 리눅스에 배포하는 식의 개발환경과 배포환경이
다른 환경의 차이에 주의해야 합니다.

윈도우에서 PHP 웹어플리케이션을 운영할 생각이라면 IIS7을 사용하는 편이 안정적이고 좋은 성능을 보여줄 것입니다.
[phpmanager][phpmanager](IIS7용 GUI 플러그인)을 사용하면 PHP를 설정하고 관리하는 작업이 쉬워집니다. IIS7에는 FastCGI가
포함되어 있어 단지 PHP를 핸들러로 설정해주기만 하면 됩니다. 자세한 정보는 [iis.net에 있는 PHP 전용 섹션][php-iis]에서
볼 수 있습니다.

일반적으로 개발 환경과 프로덕션 환경이 다르면 라이브 할 때 이상한 버그가 발생할 수 있습니다. 윈도우즈에서 개발하고 리눅스(혹은 윈도우즈가 아닌 다른 어떤 환경)에 배포하고 있다면 [버추얼 머신](/#virtualization_title)을 사용하는 것이 좋습니다.

Chris Tankersley 가 [윈도우즈를 이용한 PHP 개발시 그가 사용하는 도구에 대한 매우 도움이 되는 블로그 글][windows-tools]을 썻습니다.

[easyphp]: http://www.easyphp.org/
[phpmanager]: http://phpmanager.codeplex.com/
[openserver]: http://open-server.ru/
[wamp]: http://www.wampserver.com/en/
[php-downloads]: http://windows.php.net/download/
[php-iis]: http://php.iis.net/
[windows-path]: http://www.windows-commandline.com/set-path-command-line/
[windows-tools]: http://ctankersley.com/2016/11/13/developing-on-windows-2016/
[wpi]: https://www.microsoft.com/web/downloads/platform.aspx
[xampp]: http://www.apachefriends.org/en/xampp.html