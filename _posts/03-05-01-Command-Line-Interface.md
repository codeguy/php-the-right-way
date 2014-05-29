---
title: Interfejs komandne linije
isChild: true
---

## Interfejs komandne linije {#command_line_interface_title}

PHP je prvobitno kreiran za pisanje _web_ aplikacija, ali je koristan za pisanje programa koji se izvršavaju iz komandne 
linije. Programi koji koriste komandnu liniju kao interfejs mogu da vam pomognu da automatizujete uobičajene zadatke kao
što su testiranje, pokretanje i administracija aplikacija.

CLI PHP programi su moćni zato što možete koristiti kod vaše aplikacije direktno bez da morate da kreirate i obezbedite
_web_ interfejs za njega. Samo se uverite da vam CLI PHP skripte nisu u _web root_-u!

Pokušajte da pokrenete PHP iz vaše komandne linije:

{% highlight bash %}
> php -i
{% endhighlight %}

`-i` opcija će ištampati vaša PHP podešavanja isto kao što bi [`phpinfo`][phpinfo] funkcija. 

`-a` opcija omogućava interaktivni interfejs, sličan rubijevom IRB, ili pajtonovoj konzoli. Postoji još korisnih 
[opcija za komandnu liniju][cli-options].


Napišimo jednostavan "Hello, $name" CLI program. Da bi ga isprovali, kreirajmo fajl nazvan `hello.php`, sa sledećim 
kodom.

{% highlight php %}
<?php
if ($argc != 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP namesti dve specijalne promenljive na osnovu argumenata sa kojom ste pokrenuli skriptu. [`$argc`][argc] je intedžer 
promenljiva koja sadrži *broj* argumenata i [`$argv`][argv] promenljiva tipa niz koja sadrži *vrednosti* svakog 
argumenta. Prvi argument je uvek naziv fajla u kome se nalazi PHP kod koji želite da izvršite, u ovom slučaju 
`hello.php`.

`exit()` izraz je pozvan sa brojem različitim od nule da bi dali konzoli do znanja da komanda nije uspela. Često 
korišćeni kodovi izlaza se mogu naći [ovde][exit-codes].

Da pokrenete skriptu iznad, iz komandne linije:

{% highlight bash %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}


 * [Naučite o pokretanju PHP iz komandne linije][php-cli]
 * [Naučite o podešavanju _windows_-a da bi ste pokretali PHP iz komandne linije][php-cli-windows]

[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
