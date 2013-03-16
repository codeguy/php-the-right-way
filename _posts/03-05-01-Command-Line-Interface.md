---
isChild: true
---

## Interfejs sa komandne linije (Command Line Interface) {#command_line_interface_title}

PHP je napravljen prvenstveno radi pisanja web aplikacija, ali je takođe koristan za skriptne programe sa interfejsom sa komandne linije. PHP programi sa komandne linije mogu vam pomoći da automatizujete uobičajene ?tasks kao što su testiranje, ?deployment, i administraciju aplikacije.

CLI PHP programi su moćni jer možete da koristite kod vaše aplikacije direktno, bez potrebe da napravite i obezbedite web za nju. Samo nemojte stavtii vaše CLI PHP skripte u vaš javni koreni direktorijum!

Pokušajte da pokrenete PHP sa vaše komandne linije:

{% highlight bash %}
> php -i
{% endhighlight %}

Opcija `-i` će ?ispisati print vašu PHP konfiguraciju isto kao [`phpinfo`][phpinfo] funkcija. 

Opcija `-a` provides an interactive shell, similar to ruby's IRB or python's interactive shell. Postoji još dosta korisnih [opcija sa komandne linije][cli-options].

Hajde da napišemo jednostavan "Hello, $name" CLI program. Da ga isprobate, napravite fajl sa imenom `hello.php`, kao što je dole prikazano.

{% highlight php %}
<?php
if ($argc != 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP sets up two special variables based on the arguments your script is run with. [`$argc`][argc] is an integer variable containing the argument *count* and [`$argv`][argv] is an array variable containing each argument's *value*. Prvi argument je uvek naziv vašeg skript fajla, u ovom slučaju `hello.php`.

The `exit()` expression is used with a non zero number to let the shell know that the command failed. Commonly used exit codes can be found [here][exit-codes]

To run our script, above, from the command line:

{% highlight bash %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}


 * [Learn about running PHP from the command line][php-cli]
 * [Learn about setting up Windows to run PHP from the command line][php-cli-windows]

[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
