---
title:   UTF-8 사용하기
isChild: true
anchor:  php_and_utf8
---

## UTF-8 사용하기 {#php_and_utf8_title}

_이 섹션은 [Alex Cabal](https://alexcabal.com/)이 작성한 [PHP Best Practices](https://phpbestpractices.org/#utf-8)에
포함되어 있는 내용을 기반으로 하여 작성되었습니다._

### 한 줄로 끝나는 팁은 없습니다. 주의깊고 일관성있게 작업해야 합니다.

PHP는 현재 유니코드 지원을 언어 내부적으로 해주고 있지 않습니다. UTF-8 문자열을 문제없이 처리할 수 있는 방법은 있지만,
HTML 코드, SQL 쿼리, PHP 코드 등 웹 어플리케이션의 모든 레벨을 다뤄야 하는 수준의 이야기입니다. 여기서는 활용할 수
있는 간략한 설명을 제공하는데 초점을 두겠습니다.

### PHP 코드 수준에서의 UTF-8

문자열을 변수에 할당하거나 두 문자열을 이어붙이는 등의 기본적인 문자열 연산은 UTF-8 문자열이라고 해도 특별할 것이
없습니다. 하지만 `strpos()`나 `strlen()`과 같은 대부분의 문자열 함수들은 신경을 써야 합니다. 이런 함수들은
`mb_strpos()`나 `mb_strlen()` 같이 원래 이름 앞에 `mb_`가 붙은 함수들이 별도로 존재합니다. 그런 함수들을 멀티바이트
문자열 함수라고 하고, [멀티바이트 문자열 익스텐션][Multibyte String Extension]에 의해서 제공됩니다. 멀티바이트 문자열
함수들은 유니코드 문자열을 다루기 위해서 특별히 제공되는 함수들입니다.

유니코드 문자열을 다룰 때에는 항상 `mb_`로 시작하는 함수들을 사용해야 합니다. 예를 들어 `substr()` 함수를 UTF-8
문자열에 대해서 사용해보면, 결과물에는 이상하게 깨진 글자가 나온다는 사실을 알게 될 좋은 기회가 될 것입니다. UTF-8
문자열을 다룰 때에는 `mb_substr()` 함수를 사용해야 합니다.

유니코드 문자열을 다룰 때에는 항상 `mb_`로 시작하는 함수를 사용해야 한다는 걸 기억하는 게 어려운 일입니다. 한 군데라도
까먹고 일반 문자열 함수를 사용하면 깨진 유니코드 문자열을 보게 될 수가 있습니다.

모든 문자열 함수가 그에 해당되는 멀티바이트 버전의 `mb_` 로 시작되는 함수를 가지고 있는 것은 아닙니다. 여러분이
사용하려고 했던 문자열 함수가 그런 경우라면, 운이 없었다고 할 수 밖에요.

모든 PHP 스크립트 파일(또는 모든 PHP 스크립트에 include 되는 공용 스크립트)의 가장 윗부분에 `mb_internal_encoding()`
함수를 사용해서 문자열 인코딩을 지정하고, 그 바로 다음에 `mb_http_output()` 함수로 브라우저에 출력될 문자열 인코딩도
지정해야 합니다. 이런 식으로 모든 스크립트에 문자열의 인코딩을 명시적으로 지정하는 것이, 나중에 고생할 일을 아주
많이 줄여줍니다.

추가로, 많은 문자열 함수들이 함수 파라미터의 문자열 인코딩을 지정할 수 있는 옵셔널 파라미터를 제공한다는 사실을
이야기해야겠습니다. 그런 경우마다 항상 UTF-8 문자열 인코딩을 명시적으로 지정해야 합니다. 예를 들어, `htmlentities()`
함수의 경우가 그렇습니다. UTF-8 문자열을 전달하는 경우 항상 UTF-8로 지정하십시오. 또한 PHP 5.4.0 부터는
`htmlentities()` 함수와 `htmlspecialchars()` 함수의 경우에 UTF-8이 기본 인코딩으로 변경되었다는 것을 알아두는게
좋겠습니다.

마지막으로, 만약 분산 배포되는 환경에서 동작하는 어플리케이션을 만들어야 하는데, `mbstring` 익스텐션이 활성화 되어
있는지 확신할 수 없는 상황이라면, [patchwork/utf8]이라는 Composer 패키지를 사용해보는 것도 좋겠습니다. 그 패키지를
사용하면, `mbstring` 익스텐션이 활성화되어 있으면 그쪽 함수들을 사용하고 활성화되어 있지 않으면 일반 문자열 함수가
대신 호출되는 식으로 동작하게 만들어줍니다.

[Multibyte String Extension]: https://secure.php.net/book.mbstring
[patchwork/utf8]: https://packagist.org/packages/patchwork/utf8

### 데이터베이스 수준에서의 UTF-8

MySQL을 사용하는 PHP 스크립트가 있다면, 앞에서 이야기한 내용을 충실히 따르더라도 데이터베이스에 저장되는 문자열은
UTF-8이 아닌 다른 인코딩으로 저장될 가능성이 있습니다.

PHP에서 MySQL로 전달되는 문자열이 UTF-8로 확실히 전달되게 하려면, 사용하는 데이터베이스와 테이블이 모두 `utf8mb4`
캐릭터 셋과 콜레이션(collation)을 사용하게 해야합니다. 그리고 PDO 연결문자열에도 `utf8mb4` 캐릭터 셋을 사용한다고
명시해야 합니다. 다음의 예제를 보세요. _정말 중요합니다_.

UTF-8 문자열을 제대로 사용하려면 반드시 `utf8mb4` 캐릭터 셋을 사용해야 합니다. `utf8` 캐릭터 셋이 아닙니다!
(놀라워라...) 그 이유는 '더 읽어보기'를 참고하세요.

### 브라우저 수준에서의 UTF-8

PHP 스크립트가 UTF-8 문자열을 브라우저에 제대로 전송하게 하려면 `mb_http_output()` 함수를 사용하세요.

그리고 HTTP 응답이 UTF-8로 되어 있다는 것을 브라우저도 알 수 있게 해줘야 되겠지요. 오늘날엔 HTTP 응답 헤더에 이렇게 charset을 설정해주는 것이 보편적입니다.

{% highlight php %}
<?php
header('Content-Type: text/html; charset=UTF-8')
{% endhighlight %}

HTML 응답 내용의 `<head>` 태그에 [charset `<meta>` 태그](http://htmlpurifier.org/docs/enduser-utf8.html)를 넣는 것이 전통적인 방식이었습니다.

{% highlight php %}
<?php
// 이 스크립트 파일의 끝까지 UTF-8 문자열을 사용할 것임을 PHP에게 알려줍니다.
mb_internal_encoding('UTF-8');
$utf_set = ini_set('default_charset', 'utf-8');
if (!$utf_set) {
    throw new Exception('could not set default_charset to utf-8, please ensure it\'s set on your system!');
}

// UTF-8 문자열을 브라우저에 전송하려고 한다고 PHP에게 알려줍니다.
mb_http_output('UTF-8');

// UTF-8 테스트용 문자열
$string = 'Êl síla erin lû e-govaned vîn.';

// 멀티바이트 문자열 함수를 사용해서 문자열 자르기를 합니다.
$string = mb_substr($string, 0, 15);

// 자르기 해서 새로 만들어진 문자열을 데이터베이스에 저장하기 위해서 일단 접속을 합니다.
// 더 많은 정보를 얻으려면 이 문서의 PDO 관련 내용을 참고하세요.
// `charset=utf8mb4` 로 지정하고 있다는 점을 유의하세요!
$link = new PDO(
    'mysql:host=your-hostname;dbname=your-db;charset=utf8mb4',
    'your-username',
    'your-password',
    array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT => false
    )
);

// 데이터베이스에 문자열을 저장합니다.
// DB와 테이블을 utf8mb4 캐릭터 셋과 콜레이션을 사용하도록 만들어 둔 상태인지 다시 한 번 확인하세요.
$handle = $link->prepare('insert into ElvishSentences (Id, Body, Priority) values (default, :body, :priority)');
$handle->bindParam(':body', $string, PDO::PARAM_STR);
$priority = 45;
$handle->bindParam(':priority', $priority, PDO::PARAM_INT); // 명시적으로 PDO 에게 int 를 기대하도록 지시합니다.
$handle->execute();

// 제대로 저장되었는지 검증하기 위해서 방금 저장한 문자열을 다시 읽어옵니다.
$handle = $link->prepare('select * from ElvishSentences where Id = :id');
$id = 7;
$handle->bindParam(':id', $id, PDO::PARAM_INT);
$handle->execute();

// HTML에 출력하기 위해서 변수에 결과값을 저장해둡니다.
$result = $handle->fetchAll(\PDO::FETCH_OBJ);

// 이 예제는 문자열을 html 로 escape 처리 해 줍니다.
function escape_to_html($dirty){
    echo htmlspecialchars($dirty, ENT_QUOTES, 'UTF-8');
}

header('Content-Type: text/html; charset=UTF-8'); // 만일 기본 문자셋을 utf-8 로 했을때에는 불 필요합니다.
?><!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>UTF-8 test page</title>
    </head>
    <body>
        <?php
        foreach($result as $row){
            escape_to_html($row->Body);  // 이 것은 브라우저에게 제대로 변경된 utf-8 문자열 출력을 하게 합니다.
        }
        ?>
    </body>
</html>
{% endhighlight %}

### 더 읽어보기

* [PHP Manual: String Operations](https://secure.php.net/language.operators.string)
* [PHP Manual: String Functions](https://secure.php.net/ref.strings)
    * [`strpos()`](https://secure.php.net/function.strpos)
    * [`strlen()`](https://secure.php.net/function.strlen)
    * [`substr()`](https://secure.php.net/function.substr)
* [PHP Manual: Multibyte String Functions](https://secure.php.net/ref.mbstring)
    * [`mb_strpos()`](https://secure.php.net/function.mb-strpos)
    * [`mb_strlen()`](https://secure.php.net/function.mb-strlen)
    * [`mb_substr()`](https://secure.php.net/function.mb-substr)
    * [`mb_internal_encoding()`](https://secure.php.net/function.mb-internal-encoding)
    * [`mb_http_output()`](https://secure.php.net/function.mb-http-output)
    * [`htmlentities()`](https://secure.php.net/function.htmlentities)
    * [`htmlspecialchars()`](https://secure.php.net/function.htmlspecialchars)
* [Stack Overflow: What factors make PHP Unicode-incompatible?](https://stackoverflow.com/questions/571694/what-factors-make-php-unicode-incompatible)
* [Stack Overflow: Best practices in PHP and MySQL with international strings](https://stackoverflow.com/questions/140728/best-practices-in-php-and-mysql-with-international-strings)
* [How to support full Unicode in MySQL databases](https://mathiasbynens.be/notes/mysql-utf8mb4)
* [Bringing Unicode to PHP with Portable UTF-8](https://www.sitepoint.com/bringing-unicode-to-php-with-portable-utf8/)
* [Stack Overflow: DOMDocument loadHTML does not encode UTF-8 correctly](https://stackoverflow.com/questions/8218230/php-domdocument-loadhtml-not-encoding-utf-8-correctly)
