---
title:   Namespaces (Namensräume)
isChild: true
anchor:  namespaces
---

## Namespaces (Namensräume) {#namespaces_title}

Wie bereits erwähnt, gibt es in der PHP-Community viele Entwickler, die viel Code erstellen. Das bedeutet, dass der PHP-Code einer Bibliothek möglicherweise denselben Klassennamen wie eine andere verwendet. Wenn beide Bibliotheken im selben Namespace verwendet werden, kollidieren sie und verursachen Probleme.

_Namespaces_ lösen dieses Problem. Wie im PHP-Referenzhandbuch beschrieben, lassen sich Namespaces mit Betriebssystemverzeichnissen vergleichen, welche für die Dateien _einen Namensraum anlegen_; zwei Dateien mit gleichem Namen können in unterschiedlichen Verzeichnissen koexistieren. Ebenso können zwei PHP-Klassen mit gleichem Namen in unterschiedlichen PHP-Namespaces koexistieren. So einfach ist das.

Es ist wichtig, dass Du Deinem Code einen Namespace zuweist, damit er von anderen Entwicklern so verwendet werden kann, dass keine Konflikte mit anderen Bibliotheken befürchtet werden müssen.

Eine empfohlene Möglichkeit zur Verwendung von Namespaces wird in [PSR-4][psr4] beschrieben . Ziel ist die Bereitstellung einer Standardkonvention für Dateien, Klassen und Namespaces, um Plug-and-Play-Code zu ermöglichen.

Im Oktober 2014 hat die PHP-FIG den vorherigen Autoloading-Standard [PSR-0][psr0] als veraltet markiert . Sowohl PSR-0 als auch PSR-4 sind weiterhin problemlos nutzbar. Letzterer erfordert PHP 5.3, daher implementieren viele reine PHP 5.2-Projekte PSR-0.

Wenn Sie einen Autoloader-Standard für eine neue Anwendung oder ein neues Paket verwenden möchten, sehen Sie sich PSR-4 an.

* [über Namespaces][namespaces]
* [Read about PSR-0][psr0]
* [Read about PSR-4][psr4]


[namespaces]: https://www.php.net/language.namespaces
[psr0]: https://www.php-fig.org/psr/psr-0/
[psr4]: https://www.php-fig.org/psr/psr-4/
