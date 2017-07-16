---
title: 日期和时间
isChild: true
anchor:  date_and_time
---

## 日期和时间 {#date_and_time_title}

PHP 中 DateTime 类的作用是在你读、写、比较或者计算日期和时间时提供帮助。除了 DateTime 类之外，PHP 还有很多与日期和时间相关的函数，但 DateTime 类为大多数常规使用提供了优秀的面向对象接口。它还可以处理时区，不过这并不在这篇简短的介绍之内。

在使用 DateTime 之前，通过 `createFromFormat()` 工厂方法将原始的日期与时间字符串转换为对象或使用 `new DateTime` 来取得当前的日期和时间。使用 `format()` 将 DateTime 转换回字符串用于输出。

{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('Y-m-d') . "\n";
{% endhighlight %}

对 DateTime 进行计算时可以使用 DateInterval 类。DateTime 类具有例如 `add()` 和 `sub()` 等将 DateInterval 当作参数的方法。编写代码时注意不要认为每一天都是由相同的秒数构成的，不论是夏令时（DST）还是时区转换，使用时间戳计算都会遇到问题，应当选择日期间隔。使用 `diff()` 方法来计算日期之间的间隔，它会返回新的 DateInterval，非常容易进行展示。

{% highlight php %}
<?php
// create a copy of $start and add one month and 6 days
$end = clone $start;
$end->add(new DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'Difference: ' . $diff->format('%m month, %d days (total: %a days)') . "\n";
// Difference: 1 month, 6 days (total: 37 days)
{% endhighlight %}

DateTime 对象之间可以直接进行比较：

{% highlight php %}
<?php
if ($start < $end) {
    echo "Start is before end!\n";
}
{% endhighlight %}

最后一个例子来演示 DatePeriod 类。它用来对循环的事件进行迭代。向它传入开始时间、结束时间和间隔区间，会得到这其中所有的事件。

{% highlight php %}
<?php
// output all thursdays between $start and $end
$periodInterval = DateInterval::createFromDateString('first thursday');
$periodIterator = new DatePeriod($start, $periodInterval, $end, DatePeriod::EXCLUDE_START_DATE);
foreach ($periodIterator as $date) {
    // output each date in the period
    echo $date->format('Y-m-d') . ' ';
}
{% endhighlight %}

一个有名的 API 扩展是 [Carbon](http://carbon.nesbot.com)。Carbon 不仅继承了所有 DateTime 类提供的功能，还提供了更多的人性化功能，例如自然语言时间处理、国际化支持、对象之间执行增减算术。

* [阅读 DateTime][datetime]
* [阅读日期格式][dateformat] (支持的日期字符串格式)

[datetime]: http://php.net/book.datetime
[dateformat]: http://php.net/function.date
