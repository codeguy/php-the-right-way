---
isChild: true
---

## Working with date and time

Working with dates and time is very easy. PHP has a class named DateTime for this. Taking a sting and converting it to a DateTime is possible with the createFromFormat factory method. This method also has a non OO counterpart, named date_create_from_format().

{% highlight php %}
<?php
$rawDate = '22/11/1968';
$date = \DateTime::createFromFormat('d/m/Y', $rawDate);

{% endhighlight %}

Calculating with DateTime is possible with the DateInterval class. DateTime has functions like add() and sub() that take a DateInterval as an argument. For example, if one would want to add a month to the date we created above:

{% highlight php %}
$date->add(new \DateInterval('P1M')); // add a Period of one Month
{% endhighlight %}

The DateTime class has a function to format a date.

{% highlight php %}
echo $date->format('d/m/Y h:i:s');
{% endhighlight %}

One last example that demonstrates converting a Unix timestamp to DateTime and back to Unix timestamp:

{% highlight php %}
$unixtime = '1239363000';
$date = DateTime::createFromFormat('U', $unixtime); // date is now 2009-04-10 11:30:00
echo $date->format('U'); // outputs 1239363000
{% endhighlight %}

* [Read about DateTime][datetime]
* [Read about DateInterval][dateinterval]
* [Read about formatting date][dateformat]

[datetime]: http://php.net/manual/en/language.exceptions.php 
[dateinterval]: http://www.php.net/manual/en/class.dateinterval.php
[dateformat]: http://www.php.net/manual/en/function.date.php
