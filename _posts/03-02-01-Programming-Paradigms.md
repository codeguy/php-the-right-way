---
title:   프로그래밍 패러다임
isChild: true
anchor:  programming_paradigms
---

## 프로그래밍 패러다임 {#programming_paradigms_title}

PHP는 다양한 프로그래밍 테크닉을 지원하는 유연하고 동적인 언어입니다. PHP는 해가 지날수록 크게 진화해왔습니다. PHP
5.0(2004)에서 객체지향 프로그래밍(Object-oriented Programming) 개념이 추가되었고 PHP 5.3(2009)에서는 익명 함수와
네임스페이스가, PHP 5.4(2012)에서는 트레이트(trait) 개념이 추가되었습니다.

### 객체지향 프로그래밍 {#object-oriented-programming}

PHP는 클래스, 추상 클래스, 인터페이스, 상속, 생성자, 복제(cloning), 예외 등 완전한 객체지향 프로그래밍 개념을 가지고
있습니다.

* [읽을거리: 객체지향 PHP(Object-oriented PHP)][oop]
* [읽을거리: 트레이트(Traits)][traits]

### 함수형 프로그래밍 {#functional-programming}

PHP는 일급 함수(first-class function)를 지원합니다. 이는 함수가 변수에 할당될 수 있다는 이야기입니다. 사용자가 정의한
함수나 내장 함수 모두 변수에 의해서 참조될 수 있고 동적으로 호출될 수 있습니다. 함수는 다른 함수의 인자로 전달될 수
있고 (_고차함수(Higher-order function)_라고 하는 기능) 함수가 다른 함수를 리턴값으로 리턴하는 것도 가능합니다.

함수가 자기 스스로 다시 호출하는 재귀 호출(Recursion)도 지원하지만, 대부분의 PHP 코드는 재귀보다는 반복(iteration)하는
형태로 작성됩니다.

익명 함수(와 클로저)는 2009년에 발표된 PHP 5.3부터 지원됩니다.

PHP 5.4에서는 클로저를 특정 객체의 영역에 바인딩하는 기능이 추가되었습니다. 또한 대부분의 경우 익명 함수와 동일하게
사용할 수 있는 호출가능한 타입(callable) 지원이 강화되었습니다.

* [PHP에서의 함수형 프로그래밍](/php-the-right-way/pages/Functional-Programming.html)에 대해 PHP: The Right Way 에서 정리한 내용 더 읽기
* [읽을거리: Anonymous Functions][anonymous-functions]
* [읽을거리: the Closure class][closure-class]
* [자세한 내용: Closures RFC][closures-rfc]
* [읽을거리: Callables][callables]
* [읽을거리: `call_user_func_array()`를 사용하여 동적으로 함수 호출(invoking)하기][call-user-func-array]

### 메타 프로그래밍

PHP는 Reflection API와 특수 매서드(Magic Method)같은 메커니즘을 통해서 다양한 형태의 메타 프로그래밍을 지원합니다.
`__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()` 등 개발자가 클래스의 동작에 끼어들 수 있도록 해주는
다양한 특수 매서드가 있습니다. Ruby 개발자들은 종종 PHP에는 `method_missing` 같은 기능이 없다고 얘기하는데,
`__call()`과 `__callStatic()`을 이용하면 동일한 작업이 가능합니다.

* [읽을거리: 특수 매서드(Magic Methods)][magic-methods]
* [읽을거리: Reflection][reflection]
* [읽을거리: Overloading][overloading]


[oop]: https://secure.php.net/language.oop5
[traits]: https://secure.php.net/language.oop5.traits
[anonymous-functions]: https://secure.php.net/functions.anonymous
[closure-class]: https://secure.php.net/class.closure
[closures-rfc]: https://wiki.php.net/rfc/closures
[callables]: https://secure.php.net/language.types.callable
[call-user-func-array]: https://secure.php.net/function.call-user-func-array
[magic-methods]: https://secure.php.net/language.oop5.magic
[reflection]: https://secure.php.net/intro.reflection
[overloading]: https://secure.php.net/language.oop5.overloading

