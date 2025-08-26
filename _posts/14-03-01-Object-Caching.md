---
isChild: true
anchor:  object_caching
---

## Object Caching {#object_caching_title}

Manchmal ist es sinnvoll, einzelne Objekte im Code zwischenzuspeichern, z.B. bei Daten, deren Beschaffung aufwendig ist, 
oder bei Datenbankaufrufen, bei denen sich das Ergebnis wahrscheinlich nicht ändert. 
Mithilfe von Objekt-Caching-Software kannst Du diese Daten im Speicher halten und später extrem schnell darauf zugreifen. 
Wenn Du diese Elemente nach dem Abruf zwischenspreicherst und für nachfolgende Anfragen direkt aus dem Cache abrufst, erzielst Du eine deutliche Leistungssteigerung und reduzierst die Belastung Deiner Datenbankserver.

Viele der gängigen Bytecode-Caching-Lösungen ermöglichen auch das Zwischenspeichern benutzerdefinierter Daten.
Es gibt also noch mehr Gründe, diese zu nutzen. Sowohl APCu als auch WinCache bieten APIs zum Speichern von Daten aus Deinem PHP-Code im Speichercache.

Die am häufigsten verwendeten Speicherobjekt-Caching-Systeme sind APCu und Memcached.
APCu eignet sich hervorragend für das Objekt-Caching.
Es verfügt über eine einfache API zum Hinzufügen eigener Daten zum Speichercache und ist sehr einfach einzurichten und zu verwenden. 
Die einzige echte Einschränkung von APCu besteht darin, dass es an den Server gebunden ist, auf dem es installiert ist. 
Memcached hingegen wird als separater Dienst installiert und ist über das Netzwerk zugänglich. 
Das bedeutet, dass Objekte in einem superschnellen Datenspeicher an einem zentralen Ort gespeichert werden und viele verschiedene Systeme darauf zugreifen können.

Beachte, dass die gemeinsame Nutzung des Caches durch PHP-Prozesse von der PHP-Nutzung abhängt.
Wenn Du PHP über [FastCGI Process Manager](https://www.php.net/manual/de/install.fpm.php) (PHP-FPM) ausführst, 
wird der Cache von allen Prozessen aller Pools gemeinsam genutzt. 
Wenn Du PHP als (Fast-)CGI-Anwendung auf Deinem Webserver ausführst, wird der Cache nicht gemeinsam genutzt, d. h. jeder PHP-Prozess verfügt über eigene APCu-Daten.
Wenn Du PHP über die Kommandozeile ausführst, wird der Cache nicht gemeinsam genutzt und existiert nur für die Dauer des Befehls.
Berücksichtige daher Deine Situation und Ziele. Du solltest stattdessen die Verwendung von Memcached in Betracht ziehen, da es nicht an die PHP-Prozesse gebunden ist.

In einer Netzwerkkonfiguration übertrifft APCu Memcached in der Regel hinsichtlich der Zugriffsgeschwindigkeit, 
aber Memcached lässt sich jedoch schneller und weiter skalieren. 
Wenn Du Deine Anwendung nicht auf mehreren Servern ausführst oder die zusätzlichen Funktionen von Memcached nicht benötigst, ist APCu wahrscheinlich die beste Wahl für das Objekt-Caching.

Beispiellogik mit APCu:

{% highlight php %}
<?php
// check if there is data saved as 'expensive_data' in cache
$data = apcu_fetch('expensive_data');
if ($data === false) {
    // data is not in cache; save result of expensive call for later use
    apcu_add('expensive_data', $data = get_expensive_data());
}

print_r($data);
{% endhighlight %}

### Erfahre mehr über gängige Objekt-Caching-Systeme:

* [APCu](https://github.com/krakjoe/apcu)
* [APCu Documentation](https://www.php.net/apcu)
* [Memcached](https://memcached.org/)
* [Redis](https://redis.io/)
* [WinCache Functions](https://www.php.net/ref.wincache)
