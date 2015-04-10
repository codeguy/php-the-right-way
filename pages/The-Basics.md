---
layout: page
title: PHP 기본
sitemap: true
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

* [Comparison operators](http://php.net/language.operators.comparison)
* [Comparison table](http://php.net/types.comparisons)
* [Comparison cheatsheet](http://phpcheatsheets.com/index.php?page=compare)

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

* [If 구문](http://php.net/control-structures.if)

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

* [Switch 구문](http://php.net/control-structures.switch))
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

* [Global space](http://php.net/language.namespaces.global)
* [Global rules](http://php.net/userlandnaming.rules)

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

* [문자열 연산자](http://php.net/language.operators.string)

### 문자열의 유형

Strings are a series of characters, which should sound fairly simple. That said, there are a few different types of
strings and they offer slightly different syntax, with slightly different behaviors.

#### 작은따옴표

Single quotes are used to denote a "literal string". Literal strings do not attempt to parse special characters or
variables.

If using single quotes, you could enter a variable name into a string like so: `'some $thing'`, and you would see the
exact output of `some $thing`. If using double quotes, that would try to evaluate the `$thing` variable name and show
errors if no variable was found.

{% highlight php %}
<?php
echo 'This is my string, look at how pretty it is.';    // 단순히 텍스트만 담고 있는 문자열을 PHP에게 분석시킬 필요가 없다.

/**
 * Output:
 *
 * This is my string, look at how pretty it is.
 */
{% endhighlight %}

* [작은따옴표](http://php.net/language.types.string#language.types.string.syntax.single)

#### 큰따옴표

Double quotes are the Swiss Army Knife of strings. They will not only parse variables as mentioned above, but all sorts
of special characters, like `\n` for newline, `\t` for a tab, etc.

{% highlight php %}
<?php
echo 'phptherightway is ' . $adjective . '.'     // 변수와 이스케이프 문자를 포함시키려고 작은따옴표 문자열을
    . "\n"                                       // 여러 줄에 걸쳐서 연결 연산자로 연결시키는 예제 코드
    . 'I love learning' . $code . '!';

// vs

echo "phptherightway is $adjective.\n I love learning $code!"  // 큰따옴표 문자열을 사용하면 연결 연산자를 여러번 
                                                               // 쓰지 않고도 한 방에 해결할 수 있다.
{% endhighlight %}

Double quotes can contain variables; this is called "interpolation".

{% highlight php %}
<?php
$juice = 'plum';
echo "I like $juice juice";    // Output: I like plum juice
{% endhighlight %}

When using interpolation, it is often the case that the variable will be touching another character. This will result
in some confusion as to what is the name of the variable, and what is a literal character.

To fix this problem, wrap the variable within a pair of curly brackets.

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

* [큰따옴표](http://php.net/language.types.string#language.types.string.syntax.double)

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

* [Nowdoc 문법](http://php.net/language.types.string#language.types.string.syntax.nowdoc)

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

* [Heredoc 문법](http://php.net/language.types.string#language.types.string.syntax.heredoc)

### Which is quicker?

There is a myth floating around that single quote strings are fractionally quicker than double quote strings. This is
fundamentally not true.

If you are defining a single string and not trying to concatenate values or anything complicated, then either a single
or double quoted string will be entirely identical. Neither are quicker.

If you are concatenating multiple strings of any type, or interpolate values into a double quoted string, then the
results can vary. If you are working with a small number of values, concatenation is minutely faster. With a lot of
values, interpolating is minutely faster.

Regardless of what you are doing with strings, none of the types will ever have any noticeable impact on your
application. Trying to rewrite code to use one or the other is always an exercise in futility, so avoid this micro-
optimization unless you really understand the meaning and impact of the differences.

* [Disproving the Single Quotes Performance Myth](http://nikic.github.io/2012/01/09/Disproving-the-Single-Quotes-Performance-Myth.html)

## 삼항 연산자

삼항 연산자(ternary operator)는 코드를 간결하게 표현하는 좋은 방법이지만, 남용되는 경향이 있어 주의해야 합니다. 삼항 연산자를 중첩해서 사용할 수 있기는 하지만, 이해할 수 없는 코드가 되기 때문에 그렇게 사용하지 않는 것이 좋습니다.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? 'yay' : 'nay';
{% endhighlight %}

코드 줄 수를 줄이기 위해서 모든 가독성을 포기한 코드를 한 번 비교해 봅시다.

{% highlight php %}
<?php
$b = 10;
echo ($a) ? ($a == 5) ? 'yay' : 'nay' : ($b == 10) ? 'excessive' : ':(';    // 삼항 연산자를 과도하게 중첩시켜서 코드를 알아볼 수 없다
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

It should be noted that you do not need to use a ternary operator for returning a boolean value. An example of this
would be.

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

When utilising a ternary operator, brackets can play their part to improve code readability and also to include unions
within blocks of statements. An example of when there is no requirement to use bracketing is:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? "yay" : "nope"; // $a == 3 일 때에는 yay 를 리턴한다.

// vs

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

* [삼항 연산자](http://php.net/language.operators.comparison)

## 변수 선언

때때로 프로그래머들은 변수를 정의함으로써 코드를 좀 더 "깔끔하게" 유지하려고 합니다. 그런데 변수를 정의하는 경우, PHP 스크립트에서는 메모리를 두 배 사용하게 하는 결과를 불러오기도 합니다. 아래 예제에서 텍스트가 1MB 정도의 데이터를 포함하고 있다고 한다면 변수에 데이터를 복사함으로써 2MB의 메모리를 사용하게 됩니다.

{% highlight php %}
<?php
$about = 'A very long string of text';    // uses 2MB memory
echo $about;

// vs

echo 'A very long string of text';        // uses 1MB memory
{% endhighlight %}

* [성능 팁](http://web.archive.org/web/20140625191431/https://developers.google.com/speed/articles/optimizing-php)
