---
isChild: true
title:   MySQL 익스텐션
anchor:  mysql_extension
---

## MySQL 익스텐션 {#mysql_extension_title}

PHP의 [MySQL][mysql]익스텐션은 아주 오래되었고, 다음 두 익스텐션으로 대체되었습니다.

- [mysqli]
- [pdo]

[mysql] 익스텐션 개발은 오래전에 개발 중단되었을 뿐만 아니라, [PHP 5.5.0 부터는 공식적으로 사용을 권장하지 않는 상태(deprecated)][mysql_deprecated]였고, **[PHP 7.0에서는 공식적으로 제거][mysql_removed]** 되었습니다.

어떤 모듈을 사용하고 있는지 `php.ini`을 뒤져보는 수고를 하지 않는 한가지 방법은, `mysql_*`을 여러분이 사용하는 에디터에서
검색해보는 것입니다. 만약 `mysql_connect()`나 `mysql_query()`와 같은 함수가 나온다면, `mysql`을 사용하고 있는 것입니다.

PHP 7.x을 아직 사용하지 않더라도 가능한 빨리 익스텐션 업그레이드를 고려하지 않으면, PHP 7.x 업그레이드를 해야할 때에 굉장히 고생하게 됩니다.
가장 좋은 방법은, 나중에 서두르게 되지 않도록 여러분의 개발 일정에 맞춰서 mysql을 사용하던 것을 [mysqli]나 [PDO]로 변경하는 것입니다.

**[mysql]에서 [mysqli]로 업그레이드할때에는 단순히 `mysql_*`을 찾아서 `mysqli_*`로 치환하는 게으른 업그레이드 가이드를 조심하세요.
이것은 지나치게 단순화한 조잡한 방법일 뿐만 아니라, 파라미터 바인딩같은 mysqli가 제공하는([PDO][pdo]도 제공하는) 혜택을 놓치게 됩니다.**

* [MySQLi Prepared Statements][mysqli_prepared_statements]
* [PHP: MySQL을 위한 API 선택][mysql_api]

[mysql]: https://secure.php.net/mysqli
[mysql_deprecated]: https://secure.php.net/migration55.deprecated
[mysql_removed]: https://secure.php.net/manual/migration70.removed-exts-sapis.php
[mysqli]: https://secure.php.net/mysqli
[pdo]: https://secure.php.net/pdo
[mysql_api]: https://secure.php.net/mysqlinfo.api.choosing
[mysqli_prepared_statements]: MySQLi Prepared Statements
