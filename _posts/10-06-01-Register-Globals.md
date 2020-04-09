---
isChild: true
anchor:  register_globals
---

## Register Globals {#register_globals_title}

**NOTE:** PHP 5.4.0 부터 `register_globals` 설정은 제거되어서 더이상 사용되지 않습니다. 이 설정은 단지 기존
어플리케이션을 업그레이드하려는 사람들에게 경고하기 위한 목적으로 포함되어 있습니다.

`register_globals` 설정을 활성화하면 `$_POST`, `$_GET`, `$_REQUEST` 에 들어있는 값들을 글로벌 스코프의 변수로
등록해줍니다. 이 기능을 사용하면, 데이터가 어디에서 온 것인지 쉽게 파악할 수가 없기 때문에 쉽게 보안 이슈에 노출될 수
있습니다. 

예를 들어 `$_GET['foo']` 는 `$foo`라는 변수로 접근할 수 있게 됩니다. 이미 선언된 변수를 오버라이드하게 될 수도
있습니다. 만약 PHP 5.4.0 이전 버전을 사용한다면 `register_globals` 설정을 __반드시__ __off__ 로 설정하시기 바랍니다.

* [PHP 매뉴얼의 register_globals 항목 보기](https://secure.php.net/security.globals)
