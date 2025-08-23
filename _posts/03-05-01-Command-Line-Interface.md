---
isChild: true
anchor:  command_line_interface
---

## Command Line Interface (CLI) {#command_line_interface_title}

PHP wurde zum Schreiben von Webanwendungen entwickelt, eignet sich aber auch zum Skripting von CLI-Programmen.
PHP-CLI-Programme können helfen, gängige Aufgaben wie Tests, Bereitstellung und Anwendungsadministration zu automatisieren.

PHP-CLI-Programme sind leistungsstark, da Du den Code Deiner App direkt verwenden kannst, ohne dafür eine Web-GUI erstellen und sichern zu müssen. Achte jedoch darauf, Deine PHP-CLI-Skripte **niemals** in Deinem public web root zu platzieren!

Versuche PHP über Ihre Befehlszeile auszuführen:

{% highlight console %}
> php -i
{% endhighlight %}


Die `-i` Option zeigt Deine PHP-Konfiguration an, genau wie die Funktion [`phpinfo()`][phpinfo].

Diese `-a` Option bietet eine interaktive Shell, ähnlich der IRB von Ruby oder der interaktiven Shell von Python. Darüber hinaus gibt es eine Reihe weiterer nützlicher [command line options (Kommandozeilenoptionen)][cli-options] .

Schreiben wir ein einfaches "Hello, $name"-CLI-Programm. Erstelle zum Ausprobieren eine Datei mit dem Namen `hello.php`, wie unten dargestellt.

{% highlight php %}
<?php
if ($argc !== 2) {
    echo "Usage: php hello.php <name>" . PHP_EOL;
    exit(1);
}
$name = $argv[1];
echo "Hello, $name" . PHP_EOL;
{% endhighlight %}

PHP richtet zwei spezielle Variablen basierend auf den Argumenten ein, mit denen Dein Skript ausgeführt wird. [`$argc`][argc] ist eine Integer-Variable, die die *Anzahl* der Argumente enthält , und [`$argv`][argv] ist eine Array-Variable, die den *Wert* jedes Arguments enthält. Das erste Argument ist immer der Name Deiner PHP-Skriptdatei, in diesem Fall `hello.php`.

Der  `exit()` Ausdruck wird mit einer Zahl ungleich Null verwendet, um die Shell darüber zu informieren, dass der Befehl fehlgeschlagen ist. Häufig verwendete Exit-Codes finden Sie [hier][exit-codes] .

So führen Sie unser obiges Skript über die Befehlszeile aus:

{% highlight console %}
> php hello.php
Usage: php hello.php <name>
> php hello.php world
Hello, world
{% endhighlight %}


 * [Erfahren Sie, wie Sie PHP über die Befehlszeile ausführen][php-cli]

[phpinfo]: https://www.php.net/function.phpinfo
[cli-options]: https://www.php.net/features.commandline.options
[argc]: https://www.php.net/reserved.variables.argc
[argv]: https://www.php.net/reserved.variables.argv
[exit-codes]: https://www.gsp.com/cgi-bin/man.cgi?section=3&amp;topic=sysexits
[php-cli]: https://www.php.net/manual/en/features.commandline.php
