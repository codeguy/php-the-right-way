---
isChild: true
title: Interfejs sa komandne linije
anchor: command_line_interface
---

## Interfejs sa komandne linije (Command Line Interface) {#command_line_interface_title}

PHP je napravljen prvenstveno radi pisanja web aplikacija, ali je takođe koristan za skriptne programe koji se
izvršavaju sa komandne linije. PHP programi sa komandne linije mogu vam pomoći da automatizujete uobičajene zadatke
kao što su testiranje, razvoj, i administraciju aplikacije.

CLI PHP programi su moćni jer možete da koristite kod vaše aplikacije direktno, bez potrebe da napravite i obezbedite
web GUI (grafički interfejs) za nju. Samo nemojte staviti vaše CLI PHP skripte u vaš javni root direktorijum!

Pokušajte da pokrenete PHP sa komandne linije:

{% highlight bash %}
> php -i
{% endhighlight %}

Opcija `-i` će ispisati vašu PHP konfiguraciju isto kao i [`phpinfo`][phpinfo] funkcija.

Opcija `-a` pruža interaktivni shell, sličan Ruby-jevom IRB ili Python-ovom interaktivnom shell-u. Postoji još dosta
korisnih [opcija sa komandne linije][cli-options].

Hajde da napišemo jednostavan "Hello, $name" CLI program. Da ga isprobate, napravite fajl sa imenom `hello.php`, kao što
je dole prikazano.

{% highlight php %}
<?php
if ($argc != 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP postavlja dve specijalne promenljive na bazi argumenata na osnovu kojih se pokreće vaša skripta. [`$argc`][argc] je
celobrojna promenljiva koja sadrži argument *count* i [`$argv`][argv] je niz koji sadrži *vrednost* svakog argumenta.
Prvi argument je uvek naziv vašeg fajla sa PHP skriptom, u ovom slučaju `hello.php`.

Izraz `exit()` se koristi sa brojem različitim od nule da bi shell-u skrenuo pažnju da komanda nije uspela. Najčešće
korišćeni izlazni kodovi se mogu pronaći [ovde][exit-codes]

Da pokrenete našu skriptu, prikazanu gore, sa komandne linije:

{% highlight bash %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}

 * [Naučite o pokretanju PHP sa komandne linije][php-cli]
 * [Naučite o podešavanju Windows-a da bi pokrenuo PHP sa komandne linije][php-cli-windows]

[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
