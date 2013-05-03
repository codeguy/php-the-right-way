---
isChild: true
---

## 날짜와 시간 {#date_and_time_title}

날짜와 시간을 읽고, 쓰고, 비교하고, 계산할 때 사용할 수 있는 DateTime 이라는 클래스가 있습니다. PHP에는 DateTime 외에도
날짜와 시간을 다루는 많은 함수들이 있지만 DateTime 클래스는 일반적인 사용 시나리오에 맞는 괜찮은 개체지향적인 인터페이스를 
제공합니다. 시간대(time zone)을 다루는 기능도 갖추고 있지만 이 사이트의 짧은 소개에서 다룰만한 범위는 아닙니다.

To start working with DateTime, convert raw date and time string to an object with `createFromFormat()` factory method
or do `new \DateTime` to get the current date and time. Use `format()` method to convert DateTime back to a string for
output.
{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = \DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('m/d/Y') . "\n";
{% endhighlight %}

Calculating with DateTime is possible with the DateInterval class. DateTime has methods like `add()` and `sub()` that
take a DateInterval as an argument. Do not write code that expect same number of seconds in every day, both daylight
saving and timezone alterations will break that assumption. Use date intervals instead. To calculate date difference use
the `diff()` method. It will return new DateInterval, which is super easy to display.
{% highlight php %}
<?php
// create a copy of $start and add one month and 6 days
$end = clone $start;
$end->add(new \DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'Difference: ' . $diff->format('%m month, %d days (total: %a days)') . "\n";
// Difference: 1 month, 6 days (total: 37 days)
{% endhighlight %}

On DateTime objects you can use standard comparison:
{% highlight php %}
<?php
if ($start < $end) {
    echo "Start is before end!\n";
}
{% endhighlight %}

One last example to demonstrate the DatePeriod class. It is used to iterate over recurring events. It can take two
DateTime objects, start and end, and the interval for which it will return all events in between.
{% highlight php %}
<?php
// output all thursdays between $start and $end
$periodInterval = \DateInterval::createFromDateString('first thursday');
$periodIterator = new \DatePeriod($start, $periodInterval, $end, \DatePeriod::EXCLUDE_START_DATE);
foreach ($periodIterator as $date) {
    // output each date in the period
    echo $date->format('m/d/Y') . ' ';
}
{% endhighlight %}

* [Read about DateTime][datetime]
* [Read about date formatting][dateformat] (accepted date format string options)

[datetime]: http://www.php.net/manual/book.datetime.php
[dateformat]: http://www.php.net/manual/function.date.php
