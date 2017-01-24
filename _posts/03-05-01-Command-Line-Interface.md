---
title:   Príkazový riadok (CLI)
isChild: true
anchor:  command_line_interface
---

## Príkazový riadok (CLI) {#command_line_interface_title}

Jazyk PHP bol vytvorený na písanie webových aplikácií, ale je taktiež užitočný na písanie skriptovacích programov pre
príkazový riadok (CLI). CLI PHP programy môžu uľahčiť automatizáciu bežných úloh ako testovanie, deployment
a administráciu aplikácie.

CLI PHP programy sú účinné, pretože môžu použiť kód vašej aplikácie bez potreby vytvárania a zabezpečovania webového
rozhrania (GUI).
Pozor si ale treba dať, aby takéto skripty **neboli** vo vašom kmeňovom adresári, ktorý je verejne dostupný.

Skúste spustiť PHP z príkazového riadku:

{% highlight console %}
> php -i
{% endhighlight %}

Voľba `-i` vypíše konfiguráciu PHP podobne ako funkcia [`phpinfo()`][phpinfo].

Voľba `-a` poskytuje interaktívny shell, ktorý je podobný IRB v ruby, alebo interaktívnemu shell-u v python-e. PHP
poskytuje taktiež množstvo ďalších užitočných [volieb pre príkazový riadok][cli-options].

Napíšme si jednoduchý "Hello, $name" CLI program. Pre vyskúšanie vytvorte súbor s názvom `hello.php` s týmto obsahom:

{% highlight php %}
<?php
if ($argc !== 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP na základe argumentov, s ktorými bol váš skript spustený, vytvorí dve špeciálne premenné. [`$argc`][argc] je celočíselná premenná, ktorá obsahuje *súčet* argumentov a [`$argv`][argv] je pole obsahujúce *hodnotu* každého
argumentu. Hodnota prvého argumentu je vždy názov súboru spusteného PHP skriptu. V našom prípade `hello.php`.

Výraz `exit()` je použitý s nenulovou hodnotou kvôli predaniu informácii o zlyhaní shell-u. Bežne používané návratové
kódy môžete nájsť [tu][exit-codes].

Skript, ktorý bol vytvorený vyššie, môžete spustiť z príkazového riadku nasledovne:

{% highlight console %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}


 * [Naučte sa viac o spúšťaní PHP z príkazového riadku][php-cli]
 * [Naučte sa ako spúšťať PHP z príkazového riadku v systéme Windows][php-cli-windows]


[phpinfo]: http://php.net/function.phpinfo
[cli-options]: http://php.net/features.commandline.options
[argc]: http://php.net/reserved.variables.argc
[argv]: http://php.net/reserved.variables.argv
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&amp;topic=sysexits
[php-cli]: http://php.net/features.commandline
[php-cli-windows]: http://php.net/install.windows.commandline
