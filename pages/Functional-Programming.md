---
layout:  page
title:   PHP에서의 함수형 프로그래밍
sitemap: true
---

# PHP에서의 함수형 프로그래밍 {#functional-programming-in-php}

PHP는 일급 함수(first-class function)를 지원합니다. 이는 함수가 변수에 할당될 수 있다는 것입니다. 사용자가 정의한
함수나 내장 함수 모두 변수에 의해서 참조될 수 있고 동적으로 호출될 수 있습니다. 함수는 다른 함수의 인자로 전달될 수
있고 함수가 다른 함수를 리턴값으로 리턴하는 것도 가능합니다. 이런 기능을 고차함수(Higher-order function)라고 합니다.

함수가 자기 스스로 다시 호출하는 재귀 호출(Recursion)도 지원하지만, 대부분의 PHP 코드는 재귀보다는 반복(iteration)하는
형태로 작성됩니다.

익명 함수(와 클로저)는 2009년에 발표된 PHP 5.3부터 지원됩니다.

PHP 5.4에서는 클로저를 특정 객체의 스코프에 바인딩하는 기능이 추가되었습니다. 또한 대부분의 경우 익명 함수와 동일하게
사용할 수 있는 호출가능한 타입(callable) 지원이 강화되었습니다.

전략 패턴(strategy pattern, 디자인 패턴 중의 하나)를 구현할 때 고차함수를 사용하는 경우가 많습니다. `array_filter()`
내장 함수는 입력 배열과 함수(전략 혹은 콜백이라고 할 수 있죠)를 인자로 받아서 배열의 항목을 필터링하는 데에 사용합니다.

{% highlight php %}
<?php
$input = array(1, 2, 3, 4, 5, 6);

// 익명 함수를 하나 만들어서 변수에 대입
$filter_even = function($item) {
    return ($item % 2) == 0;
};

// array_filter 내장 함수는 배열과 함수를 인자로 받는다.
$output = array_filter($input, $filter_even);

// 익명 함수를 변수에 할당해서 전달할 필요없이 이렇게 하는 것도 가능하다.
$output = array_filter($input, function($item) {
    return ($item % 2) == 0;
});

print_r($output);
{% endhighlight %}

클로저(clouser)는 전역(global) 변수를 사용하지 않고도 클로저 바깥 스코프에 있는 변수들에 접근할 수 있는 익명
함수입니다. 이론적으로 클로저는 클로저가 정의될 때 환경에 의해서 고정된 몇몇 인자를 받는 함수라고 볼 수 있습니다.
클로저를 사용하면 깔끔한 방법으로 변수의 스코프 제한을 넘을 수 있습니다.

아래 예제에서는 `array_filter()`에 사용할 필터 함수를 리턴하는 함수를 만든 것인데, 클로저를 사용하고 있습니다.

{% highlight php %}
<?php
/**
 * $min 보다 큰 항목만 걸러내는 익명 필터 함수를 만든다.
 */
function criteria_greater_than($min)
{
    return function($item) use ($min) {
        return $item > $min;
    };
}

$input = array(1, 2, 3, 4, 5, 6);

// 동적으로 만들어낸 필터 함수를 array_filter 에 전달해서 입력을 필터링한다.
$output = array_filter($input, criteria_greater_than(3));

print_r($output); // 3보다 큰 숫자만 출력된다.
{% endhighlight %}

`criteria_greater_than`로 만들어낸 필터 함수들은 `$min`으로 지정된 값보다 큰 항목들만 걸러냅니다.
`criteria_greater_than` 함수가 리턴한 클로저는 클로저가 정의되는 스코프의 `$min`(`criteria_greater_than`의 인자로
전달된 `$min`)을 고정시켜서 만들어진 필터 함수입니다. 

`$min` 변수를 클로저에 들여올 때는 초기 바인딩(early binding)이 사용됩니다. (역주: 클로저가 만들어질 때 `$min` 변수가
클로저 스코프로 "복사"되어서 이후에 외부의 `$min` 값이 변경되어도 클로저의 `$min`은 변경되지 않습니다.) 지연
바인딩(late binding)을 사용하는 클로저를 만들려면 변수를 클로저로 들여올 때 참조를 사용해야합니다('use'에서 변수에
참조를 사용). 웹 어플리케이션 개발 시에 PHP를 이용한 템플릿을 만들거나 입력 검증 라이브러리를 만들 때 클로저를 이용한
익명 함수가 사용되었다고 한다면, 클로저를 정의할 때 캡처한 변수의 값은 나중에 익명 함수가 호출될 때 읽어와서
사용해야 합니다.

* [익명 함수에 대해서 PHP 매뉴얼 읽어보기][anonymous-functions]
* [클로저 RFC에서 좀 더 상세한 내용 보기][closures-rfc]
* [`call_user_func_array()` 내장 함수로 동적으로 호출하는 방법에 대해 PHP 매뉴얼 보기][call-user-func-array]

[anonymous-functions]: http://php.net/functions.anonymous
[closures-rfc]: https://wiki.php.net/rfc/closures
[call-user-func-array]: http://php.net/function.call-user-func-array
