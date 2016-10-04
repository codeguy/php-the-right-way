---
title: الوقت والتاريخ
isChild: true
anchor:  date_and_time
---

## الوقت والتاريخ {#date_and_time_title}

يوجد كائن (أو كلاس class) في PHP يسمى DateTime يساعد على عمليات قراءة وكتابة ومقارنة وحساب الوقت والتاريخ.
هنالك العديد من الدوال المتعلقة بعمليات الوقت والتاريخ مضمنة في PHP ولكن DateTime توفرها بواجهة كائنية (أو شيئية Object-Oriented)
للعديد من الإستخدامات. يمكن لهذا الكائن من التعامل مع النطاقات الزمنية، ولكن هذا غير مدرج في هذا الشرح التعريفي البسيط..

لكي نبدأ باستخدام DateTime، قم بتحويل صيغة كاملة صحيحة لتاريخ وزمن بصيغة نصية إلى كائن باستخدام الدالة المصنِعة `createFromFormat()`
أو يمكنك البدء بإنشاء كائن جديد باستخدام `new DateTime` وينتج من تنفيذ هذا الأخير الوقت والزمن الحاليين. يمكن إستخدام الدالة `format()`
تحويل DateTime إلى صيغة نصية مرة أخرى للتمكن من طباعتها مثلا.

{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('Y-m-d') . "\n";
{% endhighlight %}

يمكن إجراء عمليات حسابية باستخدام DateTime وذلك باستخدام كلاس DateInterval.
يحتوي كلاس DateTime على دوال مثل `add()` و `sub()` التي تستخدم مخرجات كلاس DateInterval كمعطيات.
لاتقم مطلقاً بكتابة دوال للقيام بعملية حساب كم ثانية في اليوم أو حساب الفترة النهارية أو حتى حساب فرق التوقيت الزمن،
ولا تقم بإستخدام بدائل اخرى بشكل عام. قم بإستخدام DateInterval عوضاً عن ذلك .
للقيام بحساب فرق التاريخ بين تاريخين قم باستخدام الدالة `diff()` فهي تقوم بإرجاع DateInterval وعندها يمكن عرض وإستخدامه بسهولة.

{% highlight php %}
<?php
// نقوم بإنشاء نسخة من $start ثم نقوم بزيادة شهر و ستة أيام
$end = clone $start;
$end->add(new DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'الفرق هو: ' . $diff->format('%m شهر, %d يوم (المجموع: %a يوم)') . "\n";
// الفرق هو: 1 شهر, 6 يوم (المجموع: 37 يوم)
{% endhighlight %}

يمكن لكائن DateTime ان يستخدم لإجراء عملية مقارنة بالطريقة التقليدية باستخدام

{% highlight php %}
<?php
if ($start < $end) {
    echo "Start هو قبل end!\n";
}
{% endhighlight %}

المثال الأخير يقوم بشرح كلاس DatePeriod. يستخدم لعمليات التكرار للأحداث المتكررة. يمكنه أخذ كائني DateTime كمعطيات
البداية والنهاية وكئان DateInterval لتحديد الحدث الزمني ليقوم بإرجاع كل الأحداث المتطابقة بين التاريخين!

{% highlight php %}
<?php
// إطبع جميع أيام الخميس بين $start و $end
$periodInterval = DateInterval::createFromDateString('first thursday');
$periodIterator = new DatePeriod($start, $periodInterval, $end, DatePeriod::EXCLUDE_START_DATE);
foreach ($periodIterator as $date) {
    // إطبع التاريخ لكل خميس
    echo $date->format('Y-m-d') . ' ';
}
{% endhighlight %}

* [إقرأ المزيد عن DateTime][datetime]
* [إقرأ المزيد عن تنسيق التاريخ][dateformat] (التنسيقات المعتمدة)

[datetime]: http://php.net/book.datetime
[dateformat]: http://php.net/function.date
