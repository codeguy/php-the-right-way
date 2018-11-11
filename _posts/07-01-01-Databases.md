---
title:  데이터베이스
anchor: databases
---

# 데이터베이스 {#databases_title}

대부분의 PHP 어플리케이션은 정보를 보존하기 위해서 데이터베이스를 사용합니다. 데이터베이스를 사용하기위한 선택지가
여러가지 있습니다. **PHP 5.1.0 시절까지는** [mysqli], [pgsql], [mssql] 등의 네이티브 드라이버를 사용하는 것을
권장했습니다.

PHP 어플리케이션에서 _단 하나의_ 데이터베이스만을 사용하는 경우라면 네이티브 드라이버가 훌륭하긴 합니다. 하지만
예를들어 MySQL을 주로 사용하지만 MSSQL을 사용할 일도 있다든지, Oracle 데이터베이스를 사용할 필요가 있는 경우라면
동일한 드라이버를 사용할 수가 없습니다. 각각의 데이터베이스에 대해서 전용 API를 익혀야만 하는데, 그건 좀 번거롭기
마련이죠.


[mysqli]: https://secure.php.net/mysqli
[pgsql]: https://secure.php.net/pgsql
[mssql]: https://secure.php.net/mssql
