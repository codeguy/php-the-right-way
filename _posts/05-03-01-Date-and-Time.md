---
title:   Date and Time
isChild: true
anchor:  date_and_time
---

## Date and Time {#date_and_time_title}

PHP has a class named DateTime to help you when reading, writing, comparing or calculating with date and time. There
are many date and time related functions in PHP besides DateTime, but it provides nice object-oriented interface to
most common uses. DateTime can handle time zones, but that is outside the scope of this short introduction.

To start working with DateTime, convert raw date and time string to an object with `createFromFormat()` factory method
or do `new DateTime` to get the current date and time. Use `format()` method to convert DateTime back to a string for
output.

{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('Y-m-d') . PHP_EOL;
{% endhighlight %}

Calculating with DateTime is possible with the DateInterval class. DateTime has methods like `add()` and `sub()` that
take a DateInterval as an argument. Do not write code that expects the same number of seconds in every day. Both daylight
saving and time zone alterations will break that assumption. Use date intervals instead. To calculate date difference
use the `diff()` method. It will return new DateInterval, which is super easy to display.

{% highlight php %}
<?php
// create a copy of $start and add one month and 6 days
$end = clone $start;
$end->add(new DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'Difference: ' . $diff->format('%m month, %d days (total: %a days)') . PHP_EOL;
// Difference: 1 month, 6 days (total: 37 days)
{% endhighlight %}

You can use standard comparisons on DateTime objects:

{% highlight php %}
<?php
if ($start < $end) {
    echo "Start is before the end!" . PHP_EOL;}
{% endhighlight %}

One last example to demonstrate the DatePeriod class. It is used to iterate over recurring events. It can take two
DateTime objects, start and end, and the interval for which it will return all events in between.

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

A popular PHP API extension is [Carbon](https://carbon.nesbot.com/). It inherits everything in the DateTime class, so involves minimal code alterations, but extra features include Localization support, further ways to add, subtract and format a DateTime object, plus a means to test your code by simulating a date and time of your choosing.

* [Read about DateTime][datetime]
* [Read about date formatting][dateformat] (accepted date format string options)

[datetime]: https://www.php.net/book.datetime
[dateformat]: https://www.php.net/function.date
