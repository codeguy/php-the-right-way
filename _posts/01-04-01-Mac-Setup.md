---
isChild: true
anchor:  mac_setup
---

## macOS Setup {#mac_setup_title}

macOS 12 (Monterey) und neuere Versionen enthalten kein vorinstalliertes PHP mehr. Frühere macOS-Versionen enthalten PHP, liegen aber hinter der neuesten stabilen Version zurück. Es gibt mehrere Möglichkeiten, die neueste PHP-Version unter macOS zu installieren.

### Installiere PHP mit Homebrew

[Homebrew] ist ein Paketmanager für macOS, mit dem Du PHP und verschiedene Erweiterungen einfach installieren kannst. Das Homebrew-Core-Repository bietet „Formeln“ für PHP 8.1, 8.2, 8.3 und 8.4. Installiere die neueste Version mit diesem Befehl:

```
brew install php
```
Du kannst zwischen Homebrew-PHP-Versionen wechseln, indem Du Ihre `PATH` Variable änderst. Alternativ kannst Du [brew-php-switcher][brew-php-switcher], um PHP-Versionen automatisch zu wechseln.

Du kannst auch manuell zwischen PHP-Versionen wechseln, indem Du die Verknüpfung aufhebst und die gewünschte Version verknüpfst:

```
brew unlink php
brew link --overwrite php@8.2
```

```
brew unlink php
brew link --overwrite php@8.3
```

### Installiere PHP mit Macports

Das [MacPorts]-Projekt ist eine Open-Source-Community-Initiative zur Entwicklung eines benutzerfreundlichen Systems zum Kompilieren, Installieren und Aktualisieren von Open-Source-Software auf Befehlszeilen-, X11- oder Aqua-Basis auf dem macOS-Betriebssystem.

MacPorts unterstützt vorkompilierte Binärdateien, sodass Du nicht jede Abhängigkeit aus den Quell-Tarball-Dateien neu kompilieren musst. Dies rettet Dein  Leben, wenn auf Deinem System kein Paket installiert ist.

An diesem Punkt kannst Du `php54`, `php55`, `php56`, `php70`, `php71`, `php72`, `php73`, `php74`, `php80`, `php81`, `php82` oder `php83`  mit dem Befehl `port install` installieren, zum Beispiel:

    sudo port install php74
    sudo port install php83

Und Du kannst den `select` Befehl ausführen, um Dein aktives PHP zu wechseln:

    sudo port select --set php php83

### Installiere PHP mit phpbrew

[phpbrew] ist ein Tool zur Installation und Verwaltung mehrerer PHP-Versionen. Dies ist besonders nützlich, wenn zwei verschiedene Anwendungen/Projekte unterschiedliche PHP-Versionen erfordern und Du keine virtuellen Maschinen verwendest.

### Installiere PHP mit Liip's binary installer

Eine weitere beliebte Option ist [php-osx.liip.ch], das einfache Installationsmethoden für die Versionen 5.3 bis 7.3 bietet. Die von Apple installierten PHP-Binärdateien werden dabei nicht überschrieben, sondern alles an einem separaten Ort (/usr/local/php5) installiert.

### Aus Quell-Code compilieren

Eine weitere Möglichkeit, die installierte PHP-Version zu kontrollieren, besteht darin, sie [selbst zu kompilieren][mac-compile]. Stelle in diesem Fall sicher, dass Du entweder [Xcode][xcode-gcc-substitution] oder Apples Ersatz ["Command Line Tools for XCode"] installiert hast, der im Apple Developer Center heruntergeladen werden kann.

### All-in-One Installation

Die oben aufgeführten Lösungen verarbeiten hauptsächlich PHP selbst und bieten keine Sachen wie [Apache][apache], [Nginx][nginx] oder einen SQL-Server.
All-in-One-Lösungen wie [MAMP][mamp-downloads] und [XAMPP][xampp] installieren diese Softwarekomponenten für Dich und verknüpfen sie miteinander. Die einfache Einrichtung geht jedoch auf Kosten der Flexibilität.

[Homebrew]: https://brew.sh/
[MacPorts]: https://www.macports.org/install.php
[phpbrew]: https://github.com/phpbrew/phpbrew
[php-osx.liip.ch]: https://web.archive.org/web/20220505163210/https://php-osx.liip.ch/
[mac-compile]: https://www.php.net/install.macosx.compile
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
["Command Line Tools for XCode"]: https://developer.apple.com/downloads
[apache]: https://httpd.apache.org/
[nginx]: https://www.nginx.com/
[mamp-downloads]: https://www.mamp.info/en/downloads/
[xampp]: https://www.apachefriends.org/
[brew-php-switcher]: https://github.com/philcook/brew-php-switcher
