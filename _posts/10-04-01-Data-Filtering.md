---
title:   데이터 필터링
isChild: true
anchor:  data_filtering
---

## 데이터 필터링 {#data_filtering_title}

외부로부터의 입력은 절대(절대로) 믿어서는 안됩니다. 외부에서 입력 받은 데이터를 사용하기 전에는 반드시 검증하고 위험한
요소를 제거해야 합니다. `filter_var()`와 `filter_input()` 함수를 사용하여 텍스트에서 위험한 내용을 제거하고, 규칙(메일
주소 등)에 맞는지 검증할 수 있습니다.

외부 입력은 어느 것이라도 될 수 있습니다. `$_GET`이나 `$_POST` 폼 데이터, `$_SERVER` 변수에 있는 값들,
`fopen('php://input', 'r')`로 읽은 HTTP 요청 내용 등이 그 대상이라고 할 수 있습니다. 사용자가 입력한 폼 데이터만이
외부 입력이라고 생각하지 마세요. 어디선가 업로드되었거나 다운로드한 파일, 세션 값들, 쿠키 데이터, 써드파티 웹
서비스에서 받아온 데이터들도 모두 외부 입력입니다.

외부 데이터가 저장되거나, 다른 것들과 조합되어 나중에 사용되더라도 역시 외부 입력이라고 생각해야 합니다. 데이터를
처리하거나, 출력하거나, 조합하거나 여러분의 코드에 포함시킬 때마다 그 데이터를 적절히 필터링해서 믿을 수 있는 데이터로
처리한 상태인지 항상 스스로에게 확인하세요.

데이터는 사용 목적에 따라서 서로 다르게 _필터링_ 되어야 할 것입니다. 예를 들어, 필터링되지 않은 외부 입력을 HTML
출력에 사용한다면, 의도치 않은 HTML이나 JavaScript가 여러분의 사이트에서 표시되거나 실행될 겁니다! 이런 것을
Cross-Site Scripting (XSS)이라고 합니다. 매우 위험한 공격 기법이죠. XSS를 막는 방법으로는 사용자가 생성한 데이터를 웹
페이지에 출력하기 전에는 항상 `strip_tags()` 함수를 사용해서 HTML 태그를 모두 제거한다든지, `htmlentities()`와
`htmlspecialchars()` 함수를 사용하여 HTML 엔티티로 변경하여 출력하는 방법이 있습니다.

또다른 위험한 상황은 커맨드라인 옵션으로 전달받은 값을 사용하는 상황입니다. 아주 위험하기 때문에 보통은 별로 좋지 않은
선택인 경우가 많지만, `escapeshellarg()` 함수를 사용하여 커맨드라인 옵션을 필터링한 후 사용하는 것이 좋겠습니다.

마지막으로 위험한 상황의 예로 설명할 것은, 외부 입력값을 바탕으로 로드할 파일을 결정하여 파일시스템으로부터 그 파일을
로드하는 상황입니다. 그런 상황이라면 파일 이름을 파일 경로로 변경하는 방법으로 뚫릴 가능성이 있겠습니다. 그러므로 입력
데이터에서 `"/"`, `"../"`, [null bytes][6] 문자를 제거해야 하고, 그 외에도 숨겨진 파일, 공개되지 않아야 하는 파일,
민감한 정보가 들어있는 파일의 경로들을 필터링해야 합니다.

* [알아보기: data filtering][1]
* [알아보기: `filter_var`][4]
* [알아보기: `filter_input`][5]
* [알아보기: handling null bytes][6]

### 위험한 입력 제거(Sanitization)

외부 입력으로 받은 문자열에서 위험하거나 필요없는 문자열을 제거하거나 이스케이프처리 하는 일을 Sanitization 이라고
합니다.

예를 들어 외부 입력 데이터를 HTML이나 SQL 쿼리에 넣기 전에 반드시 위험한 요소를 제거해야합니다. [PDO](#databases)의
파라미터 바인딩을 사용한다면 PDO가 자동으로 그러한 처리를 해 줍니다.

때로는 사용자 입력에 포함된 안전한 HTML 태그는 HTML 페이지에 출력하려고 할 때도 있습니다.
[HTML Purifier][html-purifier]라는 라이브러리가 그러한 일을 도와주기는 하지만, 사실 쉬운 일은 아닙니다. 그래서 많은
사람들은 Markdown 이나 BBCode 같은 제한된 마크업 문법을 사용하여 위험을 회피하고 있습니다.

[PHP의 Sanitization 필터 문서 보기][2]

### 역직렬화(Unserialization)

사용자나 신뢰할 수 없는 곳으로부터 받은 데이터에 `unserialize()` 사용하는 것은 위험합니다. **객체 자체가 사용되지 않는다고 하더라도**
이는 악의를 가진 사용자가 사용자 정의 프로퍼티를 가지고 소멸자(destructors)는 실행하게되는 객체를 만들어내도록 허용하게 됩니다.
따라서 신뢰할 수 없는 데이터는 역직렬화하지 말아야합니다.

신뢰할 수 없는 곳으로부터의 데이터를 역직렬화해야만 한다면, PHP 7의 [`allowed_classes`][unserialize] 옵션을 사용하여
역직렬화 가능한 객체 형식을 제한하세요.

### 데이터 검증

데이터 검증을 통해서 외부 입력 데이터가 여러분이 기대한 입력 형태가 맞는지 확인하도록 합니다. 예를 들어 메일 주소,
전화 번호, 혹은 사용자의 나이 등의 입력을 검증하고 싶을 때가 있을 것입니다.

[PHP의 검증 필터 문서 보기][3]


[1]: https://secure.php.net/book.filter
[2]: https://secure.php.net/filter.filters.sanitize
[3]: https://secure.php.net/filter.filters.validate
[4]: https://secure.php.net/function.filter-var
[5]: https://secure.php.net/function.filter-input
[6]: https://secure.php.net/security.filesystem.nullbytes
[html-purifier]: http://htmlpurifier.org/
[unserialize]: https://secure.php.net/manual/function.unserialize.php
