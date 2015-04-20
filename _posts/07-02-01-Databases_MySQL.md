---
isChild: true
title:   MySQL 익스텐션
anchor:  mysql_extension
---

## MySQL 익스텐션 {#mysql_extension_title}

PHP의 [MySQL][mysql]익스텐션은 현재 활발하게 유지되고 있지가 않습니다.
[PHP 5.5 부터는 공식적으로 사용을 권장하지 않는 상태(deprecated)로][mysql_deprecated] 두고 있습니다. 그 말은 앞으로 몇
번의 릴리스 중에 제거될 예정이라는 의미입니다. 여러분의 어플리케이션에 `mysql_connect()` 나 `mysql_query()` 같이
`mysql_`로 시작하는 함수를 사용하는 부분이 있으면 언젠가는 고쳐야 할 것입니다. 나중에 급히 대처하느라 허둥대는
것보다는 미리 계획해서 [mysqli]나 [PDO]를 사용하도록 변경하는 것이 좋을 것 같습니다.

**지금 새로 프로젝트를 시작한다면 [mysql] 익스텐션은 절대 사용하면 안됩니다. 그 대신 [MySQLi 익스텐션][mysqli]이나
PDO를 사용하세요.**

* [PHP: MySQL을 위한 API 선택][mysql_api]
* [MySQL 개발자를 위한 PDO 튜토리얼][pdo4mysql_devs]


[mysql]: http://php.net/mysql
[mysql_deprecated]: http://php.net/migration55.deprecated
[mysqli]: http://php.net/mysqli
[pdo]: http://php.net/pdo
[mysql_api]: http://php.net/mysqlinfo.api.choosing
[pdo4mysql_devs]: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers
