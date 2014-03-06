---
title: La date et le temps
isChild: true
---

## La date et le temps {#la_date_et_le_temps_title}

Le PHP a une classe nommé DateTime afin d'aider à lire, écrire, comparer et calculer avec les dates et le temps. Il existe 
beaucoup de fonctions liées aux dates en PHP en plus de DateTime mais ce dernier fournit une interface orienté objet à 
la plupart des usages courants. Il peut gérer les fuseaux horaires mais cela dépasse le cadre de notre introduction.

Pour commencer à travailler avec DateTime, convertissez les chaînes de caractères représentant des dates ou du temps avec 
la fabrique `createFromFormat()` ou faites `new \DateTime`. Utilisez la méthode `format()` pour convertir la date 
vers une représentation sous forme de chaîne de caractères.

{% highlight php %}
<?php
$raw = '22. 11. 1968';
$start = \DateTime::createFromFormat('d. m. Y', $raw);

echo 'Date : ' . $start->format('m/d/Y') . "\n";
{% endhighlight %}

Le calcul des dates avec DateTime est possible à l'aide de la classe DateInterval. DateTime a des méthodes comme `add()` 
et `sub()` qui prennent une variable de type DateInterval en argument. N'écrivez pas du code qui attend que chaque jour 
ait le même nombre de secondes car le passage à l'heure d'été/d'hiver et les changements de fuseaux horaires brisent cette 
assertion. Utilisez plutôt les intervalles de date. Pour calculer ces différences, utilisez la méthode `diff()`. Cette 
dernière va retourner un objet DateInterval qui est super facile à afficher.

{% highlight php %}
<?php
// créer une copie de $start et ajouter un mois et six jours
$end = clone $start;
$end->add(new \DateInterval('P1M6D'));

$diff = $end->diff($start);
echo 'Différence: ' . $diff->format('%m mois, %d jours (total: %a jours)') . "\n";
// Différence: 1 mois, 6 jours (total: 37 jours)
{% endhighlight %}

Avec les objets DateTime vous pouvez utilisez les opérateurs de comparaison:
{% highlight php %}
<?php
if ($start < $end) {
    echo "$start est avant $end!\n";
}
{% endhighlight %}

Un dernier exemple pour faire la démonstration de la classe DatePeriod. Il est utilisé pour itérer sur des évènements 
récurrents. Il peut prendre 2 objets DateTime, start et end, et l'intervalle pour laquelle tous les évènements seront 
retournés.

{% highlight php %}
<?php
// affiche tous les jeudis entre $start et $end
$periodInterval = \DateInterval::createFromDateString('first thursday');
$periodIterator = new \DatePeriod($start, $periodInterval, $end, \DatePeriod::EXCLUDE_START_DATE);
foreach ($periodIterator as $date) {
    // affiche chaque date pour la période
    echo $date->format('m/d/Y') . ' ';
}
{% endhighlight %}

* [En savoir plus sur DateTime][datetime]
* [En savoir plus sur le formattage des dates][dateformat] (les formats et options acceptées)

[datetime]: http://www.php.net/manual/book.datetime.php
[dateformat]: http://www.php.net/manual/function.date.php
