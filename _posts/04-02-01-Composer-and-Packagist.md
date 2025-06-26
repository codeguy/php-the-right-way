---
title:   Composer und Packagist
isChild: true
anchor:  composer_and_packagist
---

## Composer und Packagist {#composer_and_packagist_title}

Composer ist der empfohlene Abhängigkeitsmanager für PHP. Listen Sie die Abhängigkeiten Ihres Projekts in einer `composer.json` Datei auf. Mit wenigen einfachen Befehlen lädt Composer die Abhängigkeiten Deines Projekts  herunter und richtet das autoloading für Dich ein. Composer entspricht NPM in der Node.js-Welt oder Bundler in der Ruby-Welt.

Es gibt eine Vielzahl von PHP-Bibliotheken, die mit Composer kompatibel sind und in Ihrem Projekt eingesetzt werden können. Diese "packages" finden Sie auf [Packagist], dem offiziellen Repository für Composer-kompatible PHP-Bibliotheken.

### So installierst Du Composer

Der sicherste Weg, Composer herunterzuladen, ist [den offiziellen Anweisungen zu folgen](https://getcomposer.org/download/).
Dadurch wird sichergestellt, dass das Installationsprogramm nicht beschädigt oder manipuliert ist. Das Installationsprogramm installiert eine  `composer.phar` Binärdatei in Deinem aktuellen _Arbeitsverzeichnis_.

Wir empfehlen, Composer *global* zu installieren (z. B. eine einzelne Kopie in `/usr/local/bin`). Führe dazu als Nächstes diesen Befehl aus:

{% highlight console %}
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

**Hinweis:** Wenn das oben genannte Verfahren aufgrund von Berechtigungen fehlschlägt, verwende das `sudo` Präfix

Um einen lokal installierten Composer auszuführen, verwende `php composer.phar`, global ist es einfach `composer`.

#### Installation unter Windows

Für Windows-Benutzer ist die einfachste Möglichkeit um los zu legen die Verwendung des [ComposerSetup] -Installationsprogramms, das eine globale Installation durchführt und Dein `$PATH` so einrichtet, dass Du einfach  `composer` aus jedem Verzeichnis in Ihrer Befehlszeile aufrufen kannst.

### So definieren und installieren Sie Abhängigkeiten

Composer speichert die Abhängigkeiten Ihres Projekts in einer Datei namens `composer.json`. Du kannst diese manuell verwalten oder Composer selbst verwenden. Der `composer require` Befehl fügt eine Projektabhängigkeit hinzu und falls Du keine `composer.json` Datei hast, wird eine erstellt. Hier ist ein Beispiel, das [Twig] als Dependency Deines Projekts hinzufügt.

{% highlight console %}
composer require twig/twig:^2.0
{% endhighlight %}

Alternativ führt Sie der `composer init` Befehl durch die Erstellung einer vollständigen `composer.json` Datei für Dein Projekt. Sobald Du Deine `composer.json`Datei erstellt hast, kannst Du Composer anweisen, Deine Dependencies herunterzuladen und im `vendor/` Verzeichnis zu installieren. Dies gilt auch für heruntergeladene Projekte, die bereits eine `composer.json` Datei bereitstellen:

{% highlight console %}
composer install
{% endhighlight %}

Fügen Sie als Nächstes diese Zeile zur primären PHP-Datei Ihrer Anwendung hinzu. Dadurch wird PHP angewiesen, den Autoloader von Composer für Ihre Projektabhängigkeiten zu verwenden.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Jetzt können Sie Ihre Dependencies verwenden, diese werden bei Bedarf automatisch geladen.

### Aktualisieren Ihrer Dependencies (Abhängigkeiten)

Composer erstellt eine Datei namens `composer.lock`, in der die genaue Version jedes heruntergeladenen Pakets gespeichert ist, als Du  zum ersten Mal `composer install` ausgeführt hattest. Wenn Du Dein Projekt mit anderen teilst, stelle sicher, dass die `composer.lock` Datei enthalten ist, damit dein Kollege beim Ausführen von `composer install` die gleichen Versionen erhält wie Du. Um Ihre Abhängigkeiten zu aktualisieren, führe `composer update` aus. Verwende `composer update` nicht beim Deployen, sondern nur `composer install`. Sonst bekommst Du in der Produktion womöglich unterschiedliche Paketversionen.

Dies ist besonders nützlich, wenn Du Deine Versionsanforderungen flexibel definierst. Beispielsweise hat die Versionsanforderung von `~1.8` die Bedeutung "alles, was neuer als `1.8.0`, aber kleiner als `2.0.x-dev` ist". Du kannst auch das Platzhalterzeichen `*` wie in  `1.8.*` verwenden .
Der `composer update` Befehl aktualisiert nun alle Deine Abhängigkeiten auf die neueste Version, die den von Deinen definierten Einschränkungen entspricht.

### Update-Benachrichtigungen

Um Benachrichtigungen über neue Versions-Veröffentlichungen zu erhalten, kannst Du Dich bei [libraries.io] anmelden, einem Webdienst, der Abhängigkeiten überwachen und Dir Benachrichtigungen zu Aktualisierungen senden kann.

### Überprüfen Deiner Abhängigkeiten auf Sicherheitsprobleme

Der [Local PHP Security Checker]  ist ein Befehlszeilentool, das Deine `composer.lock` Datei untersucht und Dir mitteilt, ob Du eine Deiner Abhängigkeiten aktualisieren musst.

The [Local PHP Security Checker] is a command-line tool, which will examine your `composer.lock`
file and tell you if you need to update any of your dependencies.

### Handling globaler Abhängigkeiten mit Composer

Composer kann auch globale Abhängigkeiten und deren Binärdateien verarbeiten. Die Bedienung ist unkompliziert: Du musst Deinem Befehl lediglich das Präfix `global` voranstellen. Wenn Du beispielsweise PHPUnit installieren und global verfügbar machen möchtest, führe den folgenden Befehl aus:

{% highlight console %}
composer global require phpunit/phpunit
{% endhighlight %}

Dadurch wird ein `~/.composer` Ordner erstellt, in dem Deine globalen Abhängigkeiten gespeichert sind. Um die Binärdateien der installierten Pakete überall verfügbar zu haben, füge den `~/.composer/vendor/bin` Ordner anschließend Deiner `$PATH` Variable hinzu.

* [Learn about Composer]

[Packagist]: https://packagist.org/
[Twig]: https://twig.symfony.com/
[libraries.io]: https://libraries.io/
[Local PHP Security Checker]: https://github.com/fabpot/local-php-security-checker
[Learn about Composer]: https://getcomposer.org/doc/00-intro.md
[ComposerSetup]: https://getcomposer.org/Composer-Setup.exe
