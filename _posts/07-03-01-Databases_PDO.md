---
isChild: true
title:   PDO 익스텐션
anchor:  pdo_extension
---

## PDO 익스텐션 {#pdo_extension_title}

[PDO]는 PHP 5.1.0부터 제공되는 데이터베이스 연결 추상화 라이브러리입니다. 많은 종류의 데이터베이스 연결에 대해서
공통적인 인터페이스를 제공합니다. 예를들어, 기본적으로는 MySQL을 사용하거나 SQLite를 사용할 때 동일한 코드를 사용할 수
있다는 의미입니다.

{% highlight php %}
<?php
// PDO + MySQL
$pdo = new PDO('mysql:host=example.com;dbname=database', 'user', 'password');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);

// PDO + SQLite
$pdo = new PDO('sqlite:/path/db/foo.sqlite');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);
{% endhighlight %}

PDO가 SQL 쿼리를 데이터베이스에 맞게 번역해주거나, 특정 데이터베이스에는 존재하지 않는 기능을 에뮬레이션해 주는 것은
아닙니다. 여러 종류의 데이터베이스 연결을 동일한 API로 할 수 있게 해준다는 의미입니다.

`PDO`가 해주는 더 중요한 역할은 SQL 인젝션 공격을 걱정하지 않고도 외부 입력(사용자 ID 등) 값을 SQL 쿼리에 넣을 수 있게
해주는 것입니다. 이는 PDO statements와 바운드 매개변수를 통해 가능합니다.

숫자 형식의 ID를 쿼리 인자로 받는 PHP 스크립트가 있다고 해봅시다. 사용자 정보를 데이터베이스에서 가져오려면 그 ID가
필요한 상황이라고 하죠. 이렇게 하는 건 `잘못된` 방법입니다.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

이건 끔직한 코드라고 할 수 있겠습니다. SQL 쿼리에 외부 입력을 그대로 넣고 있습니다. 이는 당장이라도
[SQL 인젝션][SQL Injection] 공격에 당할 것 같습니다. 해커가 `http://domain.com/?id=1%3BDELETE+FROM+users` 같이
창의적인 `id` 인자를 넣어서 이 코드를 호출했다고 생각해봅시다. `$_GET['id']`는 `1;DELETE FROM users` 가 되어서 모든
users 데이터가 삭제되어 버립니다! 이렇게 하지 말고 다음과 같이 PDO의 인자 바인딩을 사용해서 ID 입력값을 안전하게
전달해야 합니다.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT); // <-- 먼저 데이터를 필터링 ([데이터 필터링](#data_filtering) 참고), INSERT, UPDATE 등에 특히 중요.
$stmt->bindParam(':id', $id, PDO::PARAM_INT); // <-- PDO가 자동으로 SQL에서 위험한 요소 제거
$stmt->execute();
{% endhighlight %}

이렇게 하는게 올바른 코드입니다. PDO 구문과 거기에 바인딩한 인자를 사용하고 있죠. 이렇게 하면 데이터베이스에 외부
입력값을 전달하기 전에 잠재적인 SQL 인젝션 공격을 방지할 수 있게 됩니다.

먼저 [데이터를 필터링](#_data_filtering)하고, 다른 위험한 요소(HTML 태그, 자바스크립트 등)를 제거하는 것은 INSERT나 UPDATE와 같은 쓰기 작업에 특히 중요합니다. PDO는 여러분이 작성하는 어플리케이션이 아니라, SQL에서만 위험한 요소를 제거합니다.

* [알아보기: PDO][Learn about PDO]

데이터베이스 연결을 사용할 때에는 데이터베이스 연결을 잘 닫는데 신경쓰지 않았을 경우에 한 번 열어 둔 데이터베이스
연결이 닫히지 않아서 더이상 새로운 연결을 할 수 없는 경우가 발생하기도 합니다. PDO를 사용하면 PDO 객체가 파괴될 때
암시적으로 데이터베이스 연결을 닫아 줍니다. 여러분이 영구적인 데이터베이스 연결을 사용하도록 설정해서 어플리케이션을
돌리고 있는게 아니라면 스크립트의 실행히 종료될 때 PHP가 자동으로 데이터베이스 연결을 닫아줄 것입니다.

* [알아보기: PDO 연결][Learn about PDO connections]


[pdo]: https://secure.php.net/pdo
[SQL Injection]: http://wiki.hashphp.org/Validation
[Learn about PDO]: https://secure.php.net/book.pdo
[Learn about PDO connections]: https://secure.php.net/pdo.connections
