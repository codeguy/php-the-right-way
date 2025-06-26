---
title:   Date and Time (Datum und Uhrzeit)
isChild: true
anchor:  date_and_time
---

## Date and Time (Datum und Uhrzeit) {#date_and_time_title}

PHP verfügt über die Klasse DateTime, die Sie beim Lesen, Schreiben, Vergleichen oder Berechnen von Datum und Uhrzeit unterstützt. Neben DateTime bietet PHP viele weitere Funktionen für Datum und Uhrzeit.
Für die meisten gängigen Anwendungen bietet DateTime eine praktische objektorientierte Schnittstelle. DateTime kann Zeitzonen verarbeiten, dies geht jedoch über den Rahmen dieser kurzen Einführung hinaus.

Um mit DateTime zu arbeiten, konvertiere das Rohdaten und -zeiten mit der `createFromFormat()` Factory-Methode in ein Objekt oder rufe mit `new DateTime` das aktuelle Datum und die aktuelle Uhrzeit ab. Verwende die `format()`-Methode, um DateTime für die Ausgabe wieder in einen String umzuwandeln.

{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('Y-m-d') . PHP_EOL;
{% endhighlight %}

Berechnungen mit DateTime sind mit der Klasse DateInterval möglich. DateTime verfügt über Methoden wie `add()` und `sub()`, die ein DateInterval als Argument akzeptieren.
Schreibe keinen Code, der jeden Tag die gleiche Anzahl von Sekunden erwartet. Sowohl Sommerzeit- als auch Zeitzonenänderungen würden diese Annahme widerlegen. Verwende stattdessen Datumsintervalle. Um die Datumsdifferenz zu berechnen, verwenden Sie die `diff()`-Methode. Sie gibt ein neues DateInterval zurück, das sehr einfach darzustellen ist.

{% highlight php %}
<?php
// create a copy of $start and add one month and 6 days
$end = clone $start;
$end->add(new DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'Difference: ' . $diff->format('%m month, %d days (total: %a days)') . PHP_EOL;
// Difference: 1 month, 6 days (total: 37 days)
{% endhighlight %}

Sie können Standardvergleiche für DateTime-Objekte verwenden:

{% highlight php %}
<?php
if ($start < $end) {
    echo "Start is before the end!" . PHP_EOL;}
{% endhighlight %}

Ein letztes Beispiel zur Veranschaulichung der DatePeriod-Klasse. Sie wird verwendet, um wiederkehrende Ereignisse zu durchlaufen. Sie kann zwei DateTime-Objekte (Start und End) sowie das Intervall annehmen, für das alle dazwischenliegenden Ereignisse zurückgegeben werden.

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

Eine beliebte PHP-API-Erweiterung ist [Carbon](https://carbon.nesbot.com/). Sie übernimmt alle Funktionen der DateTime-Klasse und erfordert daher nur minimale Codeänderungen. Zu den zusätzlichen Funktionen gehören Lokalisierungsunterstützung, weitere Möglichkeiten zum Addieren, Subtrahieren und Formatieren eines DateTime-Objekts sowie die Möglichkeit, Ihren Code durch die Simulation eines Datums und einer Uhrzeit Ihrer Wahl zu testen.

* [Mehr zu DateTime][datetime]
* [Mehr über date formatting][dateformat] (akzeptierte Optionen für Datumsformat-Zeichenfolgen)

[datetime]: https://www.php.net/book.datetime
[dateformat]: https://www.php.net/function.date
