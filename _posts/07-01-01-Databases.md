---
title: 데이터베이스
anchor: databases
---

# 데이터베이스 {#databases_title}

대부분의 PHP 어플리케이션은 정보를 보존하기 위해서 데이터베이스를 사용합니다. 데이터베이스를 사용하기위한 선택지가 여러가지 있습니다. 
**PHP 5.1.0 시절까지는** [mysqli], [pgsql], [mssql] 등의 네이티브 드라이버를 사용하는
것을 권장했습니다.

PHP 어플리케이션에서 _단 하나의_ 데이터베이스만을 사용하는 경우라면 네이티브 드라이버가 훌륭하긴 합니다. 하지만 예를들어 MySQL을 
주로 사용하지만 MSSQL을 사용할 일도 있다든지, Oracle 데이터베이스를 사용할 필요가 있는 경우라면 동일한 드라이버를
사용할 수가 없습니다. 각각의 데이터베이스에 대해서 전용 API를 익혀야만 하는데, 그건 좀 번거롭기 마련이죠.

## MySQL 익스텐션

PHP의 [mysql] 익스텐션은 현재 활발하게 유지되고 있지가 않습니다. 
[PHP 5.5 부터는 공식적으로 사용을 권장하지 않는 상태(deprecated)로] 두고 있습니다.
그 말은 앞으로 몇 번의 릴리스 중에 제거될 예정이라는 의미입니다. 여러분의 어플리케이션에
`mysql_connect()` 나 `mysql_query()` 같이 `mysql_`로 시작하는 함수를
사용하는 부분이 있으면 언젠가는 고쳐야 할 것입니다.
나중에 급히 대처하느라 허둥대는 것보다는 미리 계획해서 [mysqli]나 [PDO]를 사용하게 변경하는 
게 좋을 것 같습니다.

**지금 새로 프로젝트를 시작한다면 [mysql] 익스텐션은 절대 사용하지 마세요. 대신 [MySQLi 익스텐션][mysqli]이나 PDO를 사용하세요.**

* [PHP: Choosing an API for MySQL](http://php.net/manual/en/mysqlinfo.api.choosing.php)
* [PDO Tutorial for MySQL Developers](http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers)

## PDO 익스텐션

PDO는 PHP 5.1.0부터 제공되는 데이터베이스 연결 추상화 라이브러리입니다. 많은 종류의 데이터베이스 연결에 대해서 공통적인 인터페이스를 제공합니다.
예를들어, 기본적으로는 MySQL을 사용하거나 SQLite를 사용할 때 동일한 코드를 사용할 수 있다는 
의미입니다.

{% highlight php %}
// PDO + MySQL
$pdo = new PDO('mysql:host=example.com;dbname=database', 'user', 'password');
$statement = $pdo->query("SELECT some\_field FROM some\_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);

// PDO + SQLite
$pdo = new PDO('sqlite:/path/db/foo.sqlite');
$statement = $pdo->query("SELECT some\_field FROM some\_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);
{% endhighlight %}

PDO가 SQL 쿼리를 데이터베이스에 맞게 번역해주거나, 특정 데이터베이스에는 존재하지 않는 기능을 에뮬레이션해 주는 것은 아닙니다. 
여러 종류의 데이터베이스 연결을 동일한 API로 할 수 있게 해준다는 거죠.

`PDO`가 해주는 더 중요한 역할은 SQL 인젝션 공격을 걱정하지 않고도 외부 입력(사용자 ID 등) 값을 SQL 쿼리에 넣을 수 있게 해주는 것입니다.

숫자 형식의 ID를 쿼리 인자로 받는 PHP 스크립트가 있다고 해봅시다. 사용자 정보를 데이터베이스에서 가져오려면 그 ID가 필요한 상황이라고 하죠.
이렇게 하는 건 `잘못된` 방법입니다.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

이건 끔직한 코드라고 할 수 있겠습니다. SQL 쿼리에 외부 입력을 그대로 넣고 있군요. 당장이라도 
[SQL 인젝션][SQL Injection] 해킹을 당할 것 같습니다.
해커가 `http://domain.com/?id=1%3BDELETE+FROM+users` 같이 창의적인 `id` 인자를 넣어서 이 코드를 호출했다고
생각해봅시다. `$_GET['id']`는 `1;DELETE FROM users` 가 되어서 모든 users 데이터가 삭제되어 버립니다!
이렇게 하지 말고 아래처럼 PDO의 인자 바인딩을 사용해서 ID 입력값을 안전하게 전달해야 합니다.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT); // <-- PDO 가 자동으로 입력값을 체크해서 안전하게 만들어 준다.
$stmt->execute();
{% endhighlight %}

이렇게 하는게 올바른 코드입니다. PDO 구문과 거기에 바인딩한 인자를 사용하고 있죠. 이렇게 하면 데이터베이스에 외부 입력값을 전달하기 전에
잠재적인 SQL 인젝션 공격을 방지할 수 있게 됩니다.

* [Learn about PDO]

데이터베이스 연결을 사용할 때에는 데이터베이스 연결을 잘 닫는데 신경쓰지 않았을 경우에 한 번 열어 둔 데이터베이스 연결이 닫히지 않아서 
더이상 새로운 연결을 할 수 없는 경우가 발생하기도 합니다.
PDO를 사용하면 PDO 개체가 파괴될 때 암시적으로 데이터베이스 연결을 닫아 줍니다.
여러분이 영구적인 데이터베이스 연결을 사용하도록 설정해서 어플리케이션을 돌리고 있는게 아니라면 스크립트의 실행히 종료될 때
PHP가 자동으로 데이터베이스 연결을 닫아줄 것입니다.

* [Learn about PDO connections]

[Learn about PDO]: http://www.php.net/manual/en/book.pdo.php
[Learn about PDO connections]: http://php.net/manual/en/pdo.connections.php
[PHP 5.5 부터는 공식적으로 사용을 권장하지 않는 상태(deprecated)로]: http://php.net/manual/en/migration55.deprecated.php
[SQL Injecton]: http://wiki.hashphp.org/Validation

[pdo]: http://php.net/pdo
[mysql]: http://php.net/mysql
[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
[mssql]: http://php.net/mssql
