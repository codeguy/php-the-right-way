---
layout: page
title: PHP 기본
---

# PHP 기본

## 비교 연산자 

비교 연산자는 PHP에서 간과하기 쉬운 측면 중에 하나입니다. 그럴 경우 예상치 못한 결과에 당황하는 일을 많이 겪게 될 것입니다. 그런 문제 중에서 하나는 strict한 비교(boolean 타입을 integer 타입과 비교하는 등 타입을 자동으로 맞춰서 비교하는 것)를 할 때 발생합니다.

{% highlight php %}
<?php
$a = 5;   // integer 타입의 숫자 5

var_dump($a == 5);       // 값을 비교; true
var_dump($a == '5');     // 타입을 무시하고 값을 비교; true
var_dump($a === 5);      // 타입과 값을 모두 비교 (integer 와 integer); true
var_dump($a === '5');    // 타입과 값을 (integer 와 string); false

/**
 * 타입을 무시한 비교
 */
if (strpos('testing', 'test')) {    // 'test'가 인덱스 0에서 발견되어 strpos 는 0을 리턴. 0은 false로 취급된다.
    // code...
}

// vs

if (strpos('testing', 'test') !== false) {    // (0 !== false)의 비교 결과는 true 이다.
    // code...
}
{% endhighlight %}

* [Comparison operators](http://php.net/manual/en/language.operators.comparison.php)
* [Comparison table](http://php.net/manual/en/types.comparisons.php)

## 조건 구문

### If 구문

'if/else' 구문을 함수나 클래스 안에서 사용할 때 흔히 하는 오해는 혹시 발생할 수 있는 경우를 대비해 'else'를 꼭 써야 한다는 것입니다. 하지만 하지만 조건문의 결과가 return 값을 정의하는 것 뿐이라면 'else'가 필수적인 것은 아닙니다.

{% highlight php %}
<?php
function test($a)
{
    if ($a) {
        return true;
    } else {
        return false;
    }
}

// vs

function test($a)
{
    if ($a) {
        return true;
    }
    return false;    // else is not necessary
}
{% endhighlight %}

* [If 구문](http://php.net/manual/en/control-structures.if.php)

### Switch 구문

switch 구문은 끝없이 if else if 를 타이핑하지 않아도 되게 해주는 편리한 구문입니다. 하지만 몇 가지 주의해야 할 점들이 있습니다.

- switch 구문은 타입을 무시하고 값만 비교합니다. ('==' 비교 연산자와 같죠)
- 위에서부터 순서대로 매칭되는 case 문이 나올 때까지 진행합니다. 만약 찾지 못한다면 default 구문의 내용을 실행해줍니다.
- 'break'가 없으면 break나 return 문을 만날 때까지 다른 case 문을 넘어서까지 실행됩니다.
- 함수 내에서 switch 문을 사용할 때에는 'return' 문을 사용하면 거기서 함수 실행이 종료되기 때문에 'break' 를 쓰지 않아도 됩니다.

{% highlight php %}
<?php
$answer = test(2);

function test($a)
{
    switch ($a) {
        case 1:
            // code...
            break;             // switch 구문을 벗어나기 위해서 break 를 사용.
        case 2:
            // code...         // break 를 써주지 않았으므로 'case 3' 로 계속 진행됨.
        case 3:
            // code...
            return $result;    // 함수 내에서는 'return' 하면 함수 실행이 종료됨.
        default:
            // code...
            return $error;
    }
}
{% endhighlight %}

* [Switch 구문](http://php.net/manual/en/control-structures.switch.php)
* [PHP switch](http://phpswitch.com/)

## 전역 네임스페이스

네임스페이스를 사용할 때, 여러분이 작성한 함수 때문에 내장 함수를 사용할 수 없게되는 경우를 만날 수 있습니다. 그럴 때에는 역슬래시를 사용하여 전역 함수를 호출하는 방법이 있습니다.

{% highlight php %}
<?php
namespace phptherightway;

function fopen()
{
    $file = \fopen();    // 함수 이름이 내장 함수와 같다.
                         // '\' 를 붙여서 전역 네임스페이스의 함수를 실행한다.
}

function array()
{
    $iterator = new \ArrayIterator();    // ArrayIterator는 내장 클래스이다. 역슬래시 없이 사용하면 
                                         // phptherightway 라는 네임스페이스에서 ArrayIterator 를 찾으려고 할 것이다.
}
{% endhighlight %}

* [Global space](http://php.net/manual/en/language.namespaces.global.php)
* [Global rules](http://php.net/manual/en/userlandnaming.rules.php)

## 문자열

### 연결

- 코드 작성 시 한 줄이 적정 길이(120 글자)를 넘으면 줄을 나눠서 작성한 뒤 문자열을 연결시켜 줄 수 있습니다.
- 연결 및 대입 연산자를 사용하는 것보다는 연결 연산자를 사용하는 편이 가독성을 높이는데에는 더 낫습니다.
- 연결 연산자를 이용하는 여러 줄의 코드를 작성할 때에는 들여쓰기를 해주는 것이 좋습니다.


{% highlight php %}
<?php
$a  = 'Multi-line example';    // 연결 및 대입 연산자 (.=)
$a .= "\n";
$a .= 'of what not to do';

// vs

$a = 'Multi-line example'      // 연결 연산자 (.)
    . "\n"                     // 두 번째 라인부터는 들여써준다.
    . 'of what to do';
{% endhighlight %}

* [문자열 연산자](http://php.net/manual/en/language.operators.string.php)

### 문자열의 유형

문자열은 PHP 커뮤니티에서 오랫동안 유지되어 온 기능입니다. 문자열 유형들 간의 차이와 장단점에 대해서 설명해 보겠습니다.

#### 작은따옴표

작은따옴표(single quotes)는 문자열을 정의하는 가장 쉬운 방법이면서 또 종종 가장 빠르게 수행되는 문자열 구문이기도 합니다. 작은따옴표 문자열은 PHP가 문자열의 내용을 분석하지 않아도 되기 때문에 실행 속도가 빨라질 수 있는 것입니다. 아래와 같은 문자열을 사용하려는 경우 작은따옴표 문자열을 사용하세요.

- PHP가 내용을 분석하지 않아도 되는 문자열 
- 변수명을 일반 텍스트로 출력하려고 하는 경우

{% highlight php %}
<?php
echo 'This is my string, look at how pretty it is.';    // 단순히 텍스트만 담고 있는 문자열을 PHP에게 분석시킬 필요가 없다.

/**
 * Output:
 *
 * This is my string, look at how pretty it is.
 */
{% endhighlight %}

* [작은따옴표 문자열](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.single)

#### 큰따옴표

큰따옴표(double quotes)는 문자열계의 스위스칼이라고 할 수 있습니다. 하지만 PHP가 내용을 분석하여 실행하기 때문에 상대적으로 느리기도 합니다. 아래와 같은 경우에 사용하세요.

- 이스케이프된 문자가 포함되는 경우
- 문자열에 변수의 값을 포함하려는 경우
- 여러 줄에 걸쳐 연결 연산자로 잇는 문자열을 한 줄로 줄여서 가독성을 높이려는 경우

{% highlight php %}
<?php
echo 'phptherightway is ' . $adjective . '.'     // 변수와 이스케이프 문자를 포함시키려고 작은따옴표 문자열을
    . "\n"                                       // 여러 줄에 걸쳐서 연결 연산자로 연결시키는 예제 코드
    . 'I love learning' . $code . '!';

// vs

echo "phptherightway is $adjective.\n I love learning $code!"  // 큰따옴표 문자열을 사용하면 연결 연산자를 여러번 
                                                               // 쓰지 않고도 한 방에 해결할 수 있다.
{% endhighlight %}

큰따옴표 문자열 안에 포함된 변수 바로 뒤에 일반 텍스트를 붙여야 할 때, 뒤에 붙는 문자 때문에 PHP가 변수명을 제대로 읽지 못할 수가 있습니다. 이럴 때에는 중괄호로 변수를 감싸주면 됩니다.

{% highlight php %}
<?php
$juice = 'plum';
echo "I drank some juice made of $juices";    // $juice 라는 변수를 읽을 수 없다.

// vs

$juice = 'plum';
echo "I drank some juice made of {$juice}s";    // $juice 가 제대로 분석된다.

/**
 * 중괄호 안에 넣은 복잡한 형태의 변수 접근 방식도 잘 지원됩니다.
 */

$juice = array('apple', 'orange', 'plum');
echo "I drank some juice made of {$juice[1]}s";   // $juice[1] 이 잘 분석된다.
{% endhighlight %}

* [큰따옴표 문자열](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double)

#### Nowdoc 문법

nowdoc 문법은 5.3 에서 추가된 기능입니다. 작은따옴표와 동일한 특성을 가지고 있습니다.

{% highlight php %}
<?php
$str = <<<'EOD'             // <<< 기호로 nowdoc 문법 구문을 시작한다.
Example of string
spanning multiple lines
using nowdoc syntax.
$a does not parse.
EOD;                        // 끝을 나타내는 'EOD'는 반드시 줄의 가장 처음에 나와야 하고, 뒤에 다른 구문이 오면 안된다.

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using nowdoc syntax.
 * $a does not parse.
 */
{% endhighlight %}

* [Nowdoc 문법](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc)

#### Heredoc 문법

heredoc 문법은 큰따옴표와 동일하게 동작합니다.

{% highlight php %}
<?php
$a = 'Variables';

$str = <<<EOD               // <<< 기호로 heredoc 문법 구문을 시작한다.
Example of string
spanning multiple lines
using heredoc syntax.
$a are parsed.
EOD;                        // 끝을 나타내는 'EOD'는 반드시 줄의 가장 처음에 나와야 하고, 뒤에 다른 구문이 오면 안된다.

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using heredoc syntax.
 * Variables are parsed.
 */
{% endhighlight %}

* [Heredoc 문법](http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc)

## 삼항 연산자

삼항 연산자(ternary operator)는 코드를 간결하게 표현하는 좋은 방법이지만, 남용되는 경향이 있어 주의해야 합니다. 삼항 연산자를 중첩해서 사용할 수 있기는 하지만, 이해할 수 없는 코드가 되기 때문에 그렇게 사용하지 않는 것이 좋습니다.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? 'yay' : 'nay';
{% endhighlight %}

코드 줄 수를 줄이기 위해서 모든 가독성을 포기한 코드를 한 번 비교해 봅시다.

{% highlight php %}
// 중첩된 삼항 연산자
$b = 10;
echo ($a) ? ($a == 5) ? 'yay' : 'nay' : ($b == 10) ? 'excessive' : ':(';    // 코드를 알아볼 수 없다
{% endhighlight %}

'return' 구문과 삼항 연산자를 같이 쓰는 올바른 방법을 봅시다.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? return true : return false;    // 이렇게 하면 에러가 발생한다.

// vs

$a = 5;
return ($a == 5) ? 'yay' : 'nope';    // 'yay'를 리턴한다.
{% endhighlight %}

boolean 값을 리턴하는데에 꼭 삼항 연산자를 사용할 필요는 없다는 걸 기억하세요.

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? true : false; // $a == 3 인지에 따라 true나 false 를 리턴한다.

// vs

$a = 3;
return $a == 3; // $a == 3 인지에 따라 true나 false 를 리턴한다.

{% endhighlight %}

===, !==, !=, == 등의 모든 비교 연산자에 마찬가지로 적용되는 사실입니다.

#### 삼항 연산자 사용 시 가독성과 기능을 고려한 괄호 사용하기

삼항 연산자를 사용할 때, 괄호를 적절히 활용하면 가독성을 높여주기도 하고, 여러 구문을 묶어서 
의미를 다르게 만들어 주기도 합니다. 괄호를 넣지 않아도 되는 경우를 한 번 보시죠.

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? "yay" : "nope"; // $a == 3 일 때에는 yay 를 리턴한다.

// vs

<?php
$a = 3;
return $a == 3 ? "yay" : "nope"; // $a == 3 일 때에는 yay 를 리턴한다.
{% endhighlight %}

구문 여러개를 묶어서 한 덩어리로 조건 판단이 되도록 하는데에 괄호를 사용하는 것이 일반적인 일이죠.
($a == 3 and $b == 4)이라는 조건과 $c == 5 이라는 조건이 모두 참일 때에 true 를 리턴하는 예제
코드입니다.

{% highlight php %}
<?php
return ($a == 3 && $b == 4) && $c == 5;
{% endhighlight %}

아래 코드는 ($a != 3 AND $b != 4)이라는 조건이나 $c == 5 라는 조건 둘 중에 하나만 
참이면 true 를 리턴하는 예제 코드입니다.

{% highlight php %}
<?php
return ($a != 3 && $b != 4) || $c == 5;
{% endhighlight %}

* [삼항 연산자](http://php.net/manual/en/language.operators.comparison.php)

## 변수 선언

때때로 프로그래머들은 변수를 정의함으로써 코드를 좀 더 "깔끔하게" 유지하려고 합니다. 그런데 변수를 정의하는 경우, PHP 스크립트에서는 메모리를 두 배 사용하게 하는 결과를 불러오기도 합니다. 아래 예제에서 텍스트가 1MB 정도의 데이터를 포함하고 있다고 한다면 변수에 데이터를 복사함으로써 2MB의 메모리를 사용하게 됩니다.

{% highlight php %}
<?php
$about = 'A very long string of text';    // uses 2MB memory
echo $about;

// vs

echo 'A very long string of text';        // uses 1MB memory
{% endhighlight %}

* [성능 팁](https://developers.google.com/speed/articles/optimizing-php)
