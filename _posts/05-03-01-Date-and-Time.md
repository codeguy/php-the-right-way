---
title: 日期和时间
anchorid: date_and_time
isChild: true
---

<h2 id="date_and_time">日期和时间</h2>

PHP使用DateTime类完成读取、设置、比较和计算日期与时间。虽然PHP中有很多日期和时间处理相关的函数，但是DateTime类提供了
完善的面向对象接口完成各项常见操作，而且还能处理时区，这里不作深入介绍。

要使用DateTime，可以用工厂方法`createFromFormat()`把原始的日期时间字符串转换为DateTime对象，或直接用`new \DateTime`
获得当前日期和时间的DateTime对象。用`format()`方法可以把DateTime对象转换成字符串输出。
{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = \DateTime::createFromFormat('d. m. Y', $raw);

echo "Start date: " . $start->format('m/d/Y') . "\n";
{% endhighlight %}

DateTime计算时间时通常需要DateInterval类，如`add()`和`sub()`方法，都是将DateInterval作为参数。尽量避免直接用
时间戳表示时间，夏令时和时区会让时间戳产生歧义，使用间隔日期更为妥当。计算两个日期的差值使用`diff()`方法，返回
DateInterval对象，输出显示也很方便。
{% highlight php %}
<?php
// create a copy of $start and add one month and 6 days
$end = clone $start;
$end->add(new \DateInterval('P1M6D'));

$diff = $end->diff($start);
echo "Difference: " . $diff->format('%m month, %d days (total: %a days)') . "\n";
// Difference: 1 month, 6 days (total: 37 days)
{% endhighlight %}

DateTime对象之间可以直接比较:
{% highlight php %}
<?php
if($start < $end) {
    echo "Start is before end!\n";
}
{% endhighlight %}
    
最后一个例子是DatePeriod类的用法，它用于循环事项(recurring events)的迭代。它的构造函数参数为：start和end，均为
DateTime对象,以及返回事项的间隔周期。
{% highlight php %}
<?php
// output all thursdays between $start and $end
$periodInterval = \DateInterval::createFromDateString('first thursday');
$periodIterator = new \DatePeriod($start, $periodInterval, $end, \DatePeriod::EXCLUDE_START_DATE);
foreach($periodIterator as $date)
{
    // output each date in the period
    echo $date->format('m/d/Y') . " ";
}
{% endhighlight %}

* [了解更多DateTime][datetime]
* [学习更多日期格式化知识][dateformat] (accepted date format string options)

[datetime]: http://www.php.net/manual/book.datetime.php
[dateformat]: http://www.php.net/manual/function.date.php
