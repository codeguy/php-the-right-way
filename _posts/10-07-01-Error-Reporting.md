---
title:   Error Reporting (Fehler-Reporting)
isChild: true
anchor:  error_reporting
---

## Error Reporting (Fehler-Reporting) {#error_reporting_title}

Die Fehlerprotokollierung kann hilfreich sein, um Problemstellen in Deiner Anwendung zu finden,
kann aber auch Informationen über die Struktur Deiner Anwendung nach außen offen legen.
Um Deine Anwendung effektiv vor Problemen zu schützen, welche durch die Ausgabe dieser Meldungen verursacht werden könnten, musst Du Deinen Server in der Entwicklung (dev) anders konfigurieren als in der Produktion (live).

### Development (Entwicklung)

Um alle möglichen Fehler während der Entwicklung anzuzeigen, konfiguriere die folgenden Einstellungen in Deiner `php.ini`:

{% highlight ini %}
display_errors = On
display_startup_errors = On
error_reporting = -1
log_errors = On
{% endhighlight %}

> Die Übergabe des Wertes `-1` zeigt alle möglichen Fehler an, auch wenn in zukünftigen PHP-Versionen neue Ebenen und Konstanten hinzugefügt werden. Die `E_ALL`-Konstante verhält sich ab PHP 5.4 genau so. -
> [php.net](https://www.php.net/function.error-reporting)

Die `E_STRICT` Fehlerstufenkonstante (error level constant) wurde in PHP 5.3.0 eingeführt und ist nicht Teil von  `E_ALL`. Wurde jedoch in 5.4.0 Teil von `E_ALL`. Was bedeutet das? In Bezug auf die Meldung aller möglichen Fehler in Version 5.3 bedeutet dies, dass Du entweder `-1` oder  `E_ALL | E_STRICT` verwenden musst.

**Melden aller möglichen Fehler, je nach PHP-Version**

* &lt; 5.3: `-1` oder `E_ALL`
* &nbsp; 5.3: `-1` oder `E_ALL | E_STRICT`
* &gt; 5.3: `-1` oder `E_ALL`

### Production (Produktion)

Um Fehler in Deiner Produktionsumgebung zu verbergen, konfiguriere Deine `php.ini` wie folgt:

{% highlight ini %}
display_errors = Off
display_startup_errors = Off
error_reporting = E_ALL
log_errors = On
{% endhighlight %}

Mit diesen Einstellungen werden Fehler in der Produktion weiterhin in den Fehlerprotokollen des Webservers protokolliert, dem Benutzer jedoch nicht angezeigt.
Weitere Informationen zu diesen Einstellungen findest Du im PHP-Handbuch:

* [error_reporting](https://www.php.net/errorfunc.configuration#ini.error-reporting)
* [display_errors](https://www.php.net/errorfunc.configuration#ini.display-errors)
* [display_startup_errors](https://www.php.net/errorfunc.configuration#ini.display-startup-errors)
* [log_errors](https://www.php.net/errorfunc.configuration#ini.log-errors)
