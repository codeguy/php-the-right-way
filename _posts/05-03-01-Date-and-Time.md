---
title: Datum i vreme
isChild: true
---

## Datum i vreme {#date_and_time_title}

PHP ima klasu nazvanu DateTime da vam pomogne kada čitate, pišete, upoređujete ili računate datum i vreme. Postoje mnoge funkcije u PHP-u, koje su vezane za datum i vreme osim _DateTime_ klase, ali _DateTime_ pruža lep objekto-orijentisani interfejs za najčešće upotrebe. Može da rukuje sa vremenskim zonama, ali to je van ovog kratkog uvoda. 

Da biste koristili DateTime, konvertujte sirov string datuma i vremena u objekat sa `createFromFormat()` motodom, ili napravite novu instancu `new \DateTime` DateTime klase da biste dobili trenutno vreme i datum. Koristite `format()` metodu da konvertujete DateTime nazad u string za prikaz.

{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = \DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('m/d/Y') . "\n";
{% endhighlight %}

Računanje sa DateTime-mom je moguće sa DateInterval klasom. DateTime ima metode kao što su  `add()` i `sub()` koje primaju DateInterval kao argument. Ne pišite kod koji očekuje isti broj sekundi svakog dana, razlike zbog vremenskih zona i pomeranja vremena će vam pokvariti očekivan način rada programa. Umesto koristite datum intervale. Da izračunate razlike između datuma koristite `diff()` metodu. Ona će vratiti nov DateInterval objekat, koji je veoma lako prikazati.

{% highlight php %}
<?php
// kreira kopiju $start i doda jedan mesec i 6 dana
$end = clone $start;
$end->add(new \DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'Difference: ' . $diff->format('%m month, %d days (total: %a days)') . "\n";
// RAzlika: 1 mesec, 6 dana (totalo: 37 dana)
{% endhighlight %}

Na DateTime objektima možete koristiti standardno upoređivanje:
{% highlight php %}
<?php
if ($start < $end) {
    echo "Start is before end!\n";
}
{% endhighlight %}

Poslednji primer da demonstriramo DatePeriod klasu. Koristi se za iteraciju preko događaja koji se ponavljaju. Može da primi dva DateTime objekta, početak i kraj, i interval za koji će vratiti sve događaje između njih.
{% highlight php %}
<?php
// prikaži svaki četvrtak između $start i $end
$periodInterval = \DateInterval::createFromDateString('first thursday');
$periodIterator = new \DatePeriod($start, $periodInterval, $end, \DatePeriod::EXCLUDE_START_DATE);
foreach ($periodIterator as $date) {
    // prikaži svaki datum
    echo $date->format('m/d/Y') . ' ';
}
{% endhighlight %}

* [Pročitajte o DateTime][datetime]
* [Pročitajte o formatiranju datuma][dateformat]

[datetime]: http://www.php.net/manual/book.datetime.php
[dateformat]: http://www.php.net/manual/function.date.php
