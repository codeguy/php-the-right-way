---
title: 데이터베이스
anchor: databases
---

# 데이터베이스 {#databases_title}

대부분의 PHP 어플리케이션은 정보를 보존하기 위해서 데이터베이스를 사용합니다. 데이터베이스를 사용하기위한 선택지가 여러가지 있습니다. 
_PHP 5.1.0 시절까지는_ [mysql][mysql], [mysqli][mysqli], [pgsql][pgsql] 등의 네이티브 드라이버를 사용하는
것을 권장했습니다.

PHP 어플리케이션에서 단 하나의 데이터베이스만을 사용하는 경우라면 네이티브 드라이버가 훌륭하긴 합니다. 하지만 예를들어 MySQL을 
주로 사용하지만 MSSQL을 사용할 일도 있다든지, Oracle 데이터베이스를 사용할 필요가 있는 경우라면 동일한 드라이버를
사용할 수가 없습니다. 각각의 데이터베이스에 대해서 전용 API를 익혀야만 하는데, 그건 좀 번거롭기 마련이죠.

네이티브 드라이버에 대해서 참고삼아 좀 더 얘기해보자면, PHP의 mysql 익스텐션은 현재 활발하게 유지되고 있지가 않습니다.
PHP 5.5 부터는 공식적으로 사용을 권장하지 않는 상태(deprecated)로 두고 있습니다.
그 말은 앞으로 몇 번의 릴리스 중에 제거될 예정이라는 의미입니다. 여러분의 어플리케이션에
`mysql_connect()` 나 `mysql_query()`를 사용하는 부분이 있으면 언젠가는 고쳐야 할 것입니다.
나중에 급히 대처하느라 허둥대는 것보다는 미리 계획해서 mysqli나 PDO를 사용하게 변경하는 게 좋을 것 같습니다.
_지금 새로 프로젝트를 시작한다면 mysql 익스텐션은 절대 사용하지 마세요. 대신 [MySQLi 익스텐션][mysqli]이나 PDO를 사용하세요._

* [PHP: Choosing an API for MySQL](http://php.net/manual/en/mysqlinfo.api.choosing.php)

## PDO

PDO는 PHP 5.1.0부터 제공되는 데이터베이스 연결 추상화 라이브러리입니다. 많은 종류의 데이터베이스 연결에 대해서 공통적인 인터페이스를 제공합니다.
PDO가 SQL 쿼리를 데이터베이스에 맞게 번역해주거나, 특정 데이터베이스에는 존재하지 않는 기능을 에뮬레이션해 주는 것은 아닙니다. 
여러 종류의 데이터베이스 연결을 동일한 API로 할 수 있게 해준다는 거죠.

`PDO`가 해주는 더 중요한 역할은 SQL 인젝션 공격을 걱정하지 않고도 외부 입력(사용자 ID 등) 값을 SQL 쿼리에 넣을 수 있게 해주는 것입니다.

숫자 형식의 ID를 쿼리 인자로 받는 PHP 스크립트가 있다고 해봅시다. 사용자 정보를 데이터베이스에서 가져오려면 그 ID가 필요한 상황이라고 하죠.
이렇게 하는 건 `잘못된` 방법입니다.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

이건 끔직한 코드라고 할 수 있겠습니다. SQL 쿼리에 외부 입력을 그대로 넣고 있군요. 당장이라도 해킹을 당할 것 같습니다.
해커가 `http://domain.com/?id=1%3BDELETE+FROM+users` 같이 창의적인 `id` 인자를 넣어서 이 코드를 호출했다고
생각해봅시다. `$_GET['id']`는 `1;DELETE FROM users` 가 되어서 모든 users 데이터가 삭제되어 버립니다!
이렇게 하지 말고 아래처럼 PDO의 인자 바인딩을 사용해서 ID 입력값을 안전하게 전달해야 합니다.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT); // <-- PDO 가 자동으로 입력값을 체크해서 안전하게 만들어 준다.
$stmt->execute();
{% endhighlight %}

이렇게 하는게 올바른 코드입니다. PDO 구문과 거기에 바인딩한 인자를 사용하고 있죠. 이렇게 하면 데이터베이스에 외부 입력값을 전달하기 전에
잠재적인 SQL 인젝션 공격을 방지할 수 있게 됩니다.

* [Learn about PDO][1]

데이터베이스 연결을 사용할 때에는 데이터베이스 연결을 잘 닫는데 신경쓰지 않았을 경우에 한 번 열어 둔 데이터베이스 연결이 닫히지 않아서 
더이상 새로운 연결을 할 수 없는 경우가 발생하기도 합니다.
PDO를 사용하면 PDO 개체가 파괴될 때 암시적으로 데이터베이스 연결을 닫아 줍니다.
여러분이 영구적인 데이터베이스 연결을 사용하도록 설정해서 어플리케이션을 돌리고 있는게 아니라면 스크립트의 실행히 종료될 때
PHP가 자동으로 데이터베이스 연결을 닫아줄 것입니다.

* [Learn about PDO connections][5]

## 추상화 레이어

많은 프레임워크들은 각자 자신만의 추상화 레이어를 가지고 있는데 PDO를 사용하고 있을 수도 있고 아닐 수도 있습니다.
어떤 프레임워크들은 PHP 메소드를 이용해서 쿼리를 하도록 하여, 특정 데이터베이스에는 존재하지 않는 기능을 에뮬레이션 해주는 등의
역할까지 하는 등 완전한 데이터베이스 추상화를 제공합니다. 물론 추상화라는 게 어느 정도의 오버헤드가 있기는 하지만,
MySQL, PostgreSQL, SQLite 등의 여러 데이터베이스를 선택적으로 사용할 수 있는 유연한 어플리케이션을 만들기로 했다면
그 정도의 오버헤드는 코드의 간결함과 유지보수성을 위해서라면 문제가 되지 않는 수준일 것입니다.

몇몇 추상화 레이어는 PSR-0나 PSR-4 네임스페이스 표준에 따르고 있기 때문에 어느 어플리케이션에도 자유롭게 설치하여 사용할 수 있습니다.

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Propel][7]
* [ZF2 Db][4]
* [ZF1 Db][3]

[1]: http://www.php.net/manual/en/book.pdo.php
[2]: http://www.doctrine-project.org/projects/dbal.html
[3]: http://framework.zend.com/manual/en/zend.db.html
[4]: http://packages.zendframework.com/docs/latest/manual/en/index.html#zend-db
[5]: http://php.net/manual/en/pdo.connections.php
[6]: https://github.com/auraphp/Aura.Sql
[7]: http://propelorm.org/Propel/

[mysql]: http://php.net/mysql
[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
