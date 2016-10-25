---
layout: page
title:  الأساسيات
sitemap: true
---

# الأساسيات

## عوامل المقارنة

عوامل المقارنة هي جانب متغاضى عنه في PHP، قد يؤدي إلى نتائج غير متوقعة. واحدة من هذه المشاكل تقع من المقارنات
المحكمة (كالمقارنة ما بين بيانات من النوع رقمي ببيانات من النوع منطقي).


{% highlight php %}
<?php
$a = 5;   // 5 as an integer

var_dump($a == 5);       // compare value; return true
var_dump($a == '5');     // compare value (ignore type); return true
var_dump($a === 5);      // compare type/value (integer vs. integer); return true
var_dump($a === '5');    // compare type/value (integer vs. string); return false

//Equality comparisons
if (strpos('testing', 'test')) {    // 'test' is found at position 0, which is interpreted as the boolean 'false'
    // code...
}

// vs. strict comparisons
if (strpos('testing', 'test') !== false) {    // true, as strict comparison was made (0 !== false)
    // code...
}
?>{% endhighlight %}

* [عوامل المقارنة](http://php.net/language.operators.comparison)
* [جدول المقارنات](http://php.net/types.comparisons)
* [ورقة عن المقارنات](http://phpcheatsheets.com/index.php?page=compare)

## العبارات الشرطية

### If الشرطية

عند استخدام العبارة 'if/else' مع دالة أو عملية، هنالك العديد من المفاهيم المغلوطة كأنه يجب استخدام العبارة 'else' للتعبير
عن الحالات المحتمل حدوثها. ولكن هذه الحالات قد تقوم بإرجاع قيمة، عندها 'else' ليست ضرورية كإرجاع القيمة 'return' يقوم بإنهاء
تنفيذ الدالة مما يجعل العبارة 'else' عديمة الفائدة.

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

// vs.

function test($a)
{
    if ($a) {
        return true;
    }
    return false;    // else is not necessary
}

// or even shorter:

function test($a)
{
    return (bool) $a;
}

?>{% endhighlight %}

* [If الشرطية](http://php.net/control-structures.if)

### Switch الشرطية

عبارات switch هي طريقة ممتازة لتجنب كتابة عبارات لا نهائية من if و elseif ولكن هنالك بضع نقاط يجب الإنتباه لها:

- عبارة Switch تقوم فقط بمقارة القيم وليس النوع (مساوية للعامل '==')
- تقوم بتكرار المرور على حالة تلو الأخرى حتى يتم العثور على تطابق. إذا لم يكن هنالك تطابق عندها يتم استخدام الحالة الإفتراضية default إذا تم تعريفها.
- بدون العبارة 'break' سيتم المواصلة في تنفيذ كل الحالات التالية بدون توقف حتى الوصول إلى إحدى العبارتين break/return
- بداخل الدالة، استخدام 'return' يغني عن الحاجة لإستخدام 'break' حيث أن الأولى تقوم بإيقاف تنفيذ الدالة

{% highlight php %}
<?php
$answer = test(2);    // the code from both 'case 2' and 'case 3' will be implemented

function test($a)
{
    switch ($a) {
        case 1:
            // code...
            break;             // break is used to end the switch statement
        case 2:
            // code...         // with no break, comparison will continue to 'case 3'
        case 3:
            // code...
            return $result;    // within a function, 'return' will end the function
        default:
            // code...
            return $error;
    }
}
?>{% endhighlight %}

* [Switch الشرطية](http://php.net/control-structures.switch)
* [PHP switch](http://phpswitch.com/)

## نطاق الأسماء العام

عند استخدام فضاءات الأسماء، قد تجد أن الدوال المدمجة تختفي بالدوال التي تقوم بكتابتها. لمعالجة هذه المشكلة قم بالإشارة
إلى النطاق العامل للدالة باستخدام الرمز \ قبل اسم الدالة.

{% highlight php %}
<?php
namespace phptherightway;

function fopen()
{
    $file = \fopen();    // Our function name is the same as an internal function.
                         // Execute the function from the global space by adding '\'.
}

function array()
{
    $iterator = new \ArrayIterator();    // ArrayIterator is an internal class. Using its name without a backslash
                                         // will attempt to resolve it within your namespace.
}
?>{% endhighlight %}

* [Global space](http://php.net/language.namespaces.global)
* [Global rules](http://php.net/userlandnaming.rules)

## النصوص

### وصل النصوص

- إذا كان السطر يمتد أكثر من الطول الموصى به (120 حرف) عندها قم بوصل السطر
- لتسهيل عملية القراءة قم باستخدام عامل الوصل عبر الوصل باستخدام عامل الإقران والوصل '.='
- في المدى الأصلي للمتغير قم بالمواساة عندما يكون الوصل متصل بسطر جديد


{% highlight php %}
<?php
$a  = 'Multi-line example';    // concatenating assignment operator (.=)
$a .= "\n";
$a .= 'of what not to do';

// vs

$a = 'Multi-line example'      // concatenation operator (.)
    . "\n"                     // indenting new lines
    . 'of what to do';
?>{% endhighlight %}

* [عوامل النصوص](http://php.net/language.operators.string)

### أنواع النصوص

النصوص هي عبارة عن سلسلة من الحروف. ولكن هنالك أنوع مختلفة من النصوص وتتيح هذه الأنواع اختلاف بسيطاً في الصيغة مع اختلاف طفيف في التصرف

#### علامة التنصيص الوحيدة

وتستخدم للتعريف بالنص "الصريح". ويعني أنه لا يتم المحاولة لعرض نصوص أو رموز خاصة أو حتى متغيرات.

إذا كنت تستخدم علامة التنصيص الوحيدة وتريد استخدام متغير داخل النص مثل: `'Hello $name'` عندها سترى أنه قد تم طباعة
`Hello $name` كما هي. إما إذا كنت تستخدم علامة التنصيص المزدوجة عندها سيحاول عرض قيمة المتغير `$name` ثم إظهار خطأ إذا
لم يجد هذا المتغير.


{% highlight php %}
<?php
echo 'This is my string, look at how pretty it is.';    // no need to parse a simple string

/**
 * Output:
 *
 * This is my string, look at how pretty it is.
 */
?>{% endhighlight %}

* [Single quote](http://php.net/language.types.string#language.types.string.syntax.single)

#### علامة التنصيص المزدوجة

علامة التنصيص المزدوجة لن تقوم فقط بمعالجة قيمة المتغير كما ذكر في المثال أعلاه، ولكن تقوم بمعالجة وعرض الرموز الخاصة مثل
`\n` للسطر الجديد. و `\t` للمسافة. وغيرها..

{% highlight php %}
<?php
echo 'phptherightway is ' . $adjective . '.'     // a single quotes example that uses multiple concatenating for
    . "\n"                                       // variables and escaped string
    . 'I love learning' . $code . '!';

// vs

echo "phptherightway is $adjective.\n I love learning $code!"  // Instead of multiple concatenating, double quotes
                                                               // enables us to use a parsable string
?>{% endhighlight %}

يمكن لعلامة التنصيص المزدوجة أن تحتوي على متغيرات وهو ما يعرف بالإستيفاء "interpolation".

{% highlight php %}
<?php
$juice = 'plum';
echo "I like $juice juice";    // Output: I like plum juice
?>{% endhighlight %}

عند استخدام الإستيفاء عادة ما يقوم المتغير بالإلتصاق مع حروف اخرى. مما يتج عن ذلك تضارب في ايهم اسم المتغير وايهم الحرف.

لحل هذه المشكلة قم بإحاطة المتغير بأقواس المجموعة.

{% highlight php %}
<?php
$juice = 'plum';
echo "I drank some juice made of $juices";    // $juice cannot be parsed

// vs

$juice = 'plum';
echo "I drank some juice made of {$juice}s";    // $juice will be parsed

/**
 * Complex variables will also be parsed within curly brackets
 */

$juice = array('apple', 'orange', 'plum');
echo "I drank some juice made of {$juice[1]}s";   // $juice[1] will be parsed
?>{% endhighlight %}

* [Double quotes](http://php.net/language.types.string#language.types.string.syntax.double)

#### Nowdoc

Nowdoc هي صيغة تم إدراجها في النسخة 5.3، بداخلها تقوم بنفس عمل التنصيص الوحيد إلا ان لديها القابلية للعمل مع عدة سطور
من دون الحاجة لعمل سلاسل متصلة.

{% highlight php %}
<?php
$str = <<<'EOD'             // initialized by <<<
Example of string
spanning multiple lines
using nowdoc syntax.
$a does not parse.
EOD;                        // closing 'EOD' must be on it's own line, and to the left most point

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using nowdoc syntax.
 * $a does not parse.
 */
?>{% endhighlight %}

* [Nowdoc syntax](http://php.net/language.types.string#language.types.string.syntax.nowdoc)

#### Heredoc

Heredoc هي صيغة تقوم بداخلها بنفس عمل التصيص المزدوج إلا أن لديها القابلية للعمل مع عدة سطور من دون الحاجة لعمل
سلاسل متصلة.

{% highlight php %}
<?php
$a = 'Variables';

$str = <<<EOD               // initialized by <<<
Example of string
spanning multiple lines
using heredoc syntax.
$a are parsed.
EOD;                        // closing 'EOD' must be on it's own line, and to the left most point

/**
 * Output:
 *
 * Example of string
 * spanning multiple lines
 * using heredoc syntax.
 * Variables are parsed.
 */
?>{% endhighlight %}

* [Heredoc syntax](http://php.net/language.types.string#language.types.string.syntax.heredoc)

### أيهما أسرع؟

هنالك العديد من الخرافات تدور حول أن التنصيص الوحيد هو أسرع من التنصيص المزدوج. وهو شيء غير صحيح.

إذا كنت تقوم بتعريف نص وحيد ولا تنوي القيام بوصل القيم أو أي شيء معقد عندها كلا العلامتين متساويتين في الأداء والسرعة.

إذا كنت تقوم بوصل عدد من النصوص أو أي نوع، أو استيفاء القيم بداخل تنصيص مزدوج عندها ستكون النتائج غير ثابتة.
إذا كنت تعمل باستخدام قيم بأرقام صغيرة عندها الوصل يتم بسرعة.

بغض النظر عن ما تقوم بعمله باستخدام النصوص، لا يوجد نوع معين من التنصيص يجب أن تقوم بالتركيز عليه، ولا تأثير على كفاءة
التطبيق. إن قيامك بإعادة صياغة باستخدام أنواع اخرى ظناً بأنه جيد للسرعة أو الكفاءة هو عملية مضيعة للوقت، فلا تقم بهذه
العملية وإضاعة زمنك إلا إذا كنت تتفهم تماماً ماهية التأثير الناتج من الإختلاف.

* [إكتشاف خرافة التنصيص الوحيد في كفاءة الأداء](http://nikic.github.io/2012/01/09/Disproving-the-Single-Quotes-Performance-Myth.html)


## العوامل الثلاثية

أو ما تسمى "Ternary Operators"، وهي طريقة ممتازة لضغط الكود البرمجي ولكن عادة ما يكثر من استخدامها. بما أنها تكون
مكدسة ومتداخلة، فينصح عادة استخدام واحدة لكل سطر لتسهيل عملية القراءة.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? 'yay' : 'nay';
?>{% endhighlight %}

بالمقارنة هذا مثال يقوم بالتضحية بتسهيل القراءة من أجل التقليل من عدد السطور:

{% highlight php %}
<?php
echo ($a) ? ($a == 5) ? 'yay' : 'nay' : ($b == 10) ? 'excessive' : ':(';    // excess nesting, sacrificing readability
?>{% endhighlight %}

لإرجاع قيمة باستخدام العامل الثلاثي قم باستخدام الصيغة الصحيحة.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? return true : return false;    // this example will output an error

// vs

$a = 5;
return ($a == 5) ? 'yay' : 'nope';    // this example will return 'yay'

?>{% endhighlight %}

جدير بالذكر أنه لا يتوجب عليك استخدام العامل الثلاثي لتقوم بإرجاع قيم من النوع المنطقي. كمثال:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? true : false; // Will return true or false if $a == 3

// vs

$a = 3;
return $a == 3; // Will return true or false if $a == 3

?>{% endhighlight %}

ويمكن قول هذا لكل عوامل المقارنة الأخرى (===, !==, !=, == الخ).

#### استخدام الأقواس مع العوامل الثلاثية للصياغة والعملية

عند استخدام العوامل الثلاثية فأن الأقواس تقوم بلعب دور في تحسين قراءة الكود وإضافة وصلات منطقية ما بين الأوامر.
مثال يوضح متى لا تحتاج استخدام الأقواس:

{% highlight php %}
<?php
$a = 3;
return ($a == 3) ? "yay" : "nope"; // return yay or nope if $a == 3

// vs

$a = 3;
return $a == 3 ? "yay" : "nope"; // return yay or nope if $a == 3
?>{% endhighlight %}

الأقواس تساهم في عمل وصلات ما بين جمل الأوامر حين يتم فحصها بأكملها. مثلا في المثال ستقوم بإرجاع القيمة "true" إذا كان
كل من ($a == 3 و $b == 4) صائبين و $c == 5 صائبة أيضاً.

{% highlight php %}
<?php
return ($a == 3 && $b == 4) && $c == 5;
?>{% endhighlight %}

مثال آخر في المثال ادناه يقوم بارجاع قيمة صائبة "true" إذا كان نات المنطق:
($a != 3 AND $b != 4) OR $c == 5

{% highlight php %}
<?php
return ($a != 3 && $b != 4) || $c == 5;
?>{% endhighlight %}

منذ الإصدارة PHP 5.3 يمكن ترك الجزء الأوسط من العامل.
مثلا: "expr1 ?: expr3" تقوم بإرجاع القيمة expr1 عندما تكون صائبة أو expr3 عدا ذلك.

* [العامل الثلاثي Ternary operators](http://php.net/language.operators.comparison)

## تعريف المتغيرات

مع مرور الزمن يقوم المبرمجون بجعل برمجياتهم أنظف بالقيام بتعريف المتغيرات مسبقاً باستخدام أسماء مختلفة. ما يقوم به
هذا الأسلوم هو مضاعفة المساحة المستهلكة من الذاكرة لمتغيرات سبق ذكرها وتعريفها. في المثال أدناه لنفترض أن المتغير يحتوي
على نص بحجم 1MB من البيانات عند نسخه في متغير فأنت تقوم بمضاعفة الحجم إلى 2MB.

{% highlight php %}
<?php
$about = 'A very long string of text';    // uses 2MB memory
echo $about;

// vs

echo 'A very long string of text';        // uses 1MB memory
?>{% endhighlight %}

* [نصائح لزيادة كفاءة الأداء](http://web.archive.org/web/20140625191431/https://developers.google.com/speed/articles/optimizing-php)
