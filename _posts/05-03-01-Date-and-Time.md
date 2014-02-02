---
isChild: true
---

## Datum i vreme {#date_and_time_title}

PHP ima klasu sa nazivom DateTime koja služi da vam pomogne kada čitate, pišete, poredite ili računate datume ili vreme.
Postoji mnogo funkcija koje se odnose na datum i vreme u PHP-u pored DateTime, ali ona pruža dobar objektno-orijentisani 
interfejs za najčešće upotrebe. Može da rukuje vremenskim zonama, ali to je van opsega ovog kratkog uvoda.

Da biste započeli sa radom sa DateTime, konvertujte sirov string koji sadrži datum i vreme u objekat pomoću 
`createFromFormat()` factory metode ili stavite `new \DateTime` da dobijete trenutni datum i vreme. Koristite `format()`
metodu da konvertujete DateTime nazad u string za izlaz.
{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = \DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('m/d/Y') . "\n";
{% endhighlight %}

Računanje sa DateTime je moguće korišćenjem klase DateInterval. DateTime ima metode kao `add()` and `sub()` koje primaju
DateInterval kao argument. Nemojte pisati kod koji pretpostavlja isti broj sekundi svakog dana, i letnje i zimsko 
pomeranje vremena i promene vremenske zone će oboriti tu pretpostavku. Umesto toga koristite vremenske intervale. Za 
računanje razlike u datumima koristite metodu `diff()`. Ona vraća new DateInterval, što je vrlo lako prikazati.
{% highlight php %}
<?php
// kreiramo kopiju $start i dodajemo jedan mesec i 6 dana
$end = clone $start;
$end->add(new \DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'Razlika: ' . $diff->format('%m mesec, %d dana (ukupno: %a dana)') . "\n";
// Razlika: 1 mesec, 6 dana (ukupno: 37 dana)
{% endhighlight %}

Za DateTime objekte možete koristiti uobičajeno poređenje:
{% highlight php %}
<?php
if ($start < $end) {
    echo "Početak je pre kraja!\n";
}
{% endhighlight %}

Poslednji primer će demonstrirati DatePeriod klasu. Koristi se za iteraciju nad rekurzivnim događajima (recurring). 
Može da primi dva DateTime objekta, početak i kraj, i interval za koji vraća sve događaje između.
{% highlight php %}
<?php
// štampaj svaki četvrtak između $start i $end
$periodInterval = \DateInterval::createFromDateString('first thursday');
$periodIterator = new \DatePeriod($start, $periodInterval, $end, \DatePeriod::EXCLUDE_START_DATE);
foreach ($periodIterator as $date) {
    // štampaj svaki datum u periodu
    echo $date->format('m/d/Y') . ' ';
}
{% endhighlight %}

* [Pročitajte o DateTime][datetime]
* [Pročitajte o formatiranju datuma][dateformat] (prihvaćene opcije za formatiranje datuma)

[datetime]: http://www.php.net/manual/book.datetime.php
[dateformat]: http://www.php.net/manual/function.date.php
