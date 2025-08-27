---
title:   Virtual or Dedicated Servers (Virtuelle oder dedizierte Server)
isChild: true
anchor:  virtual_or_dedicated_servers
---

## Virtual or Dedicated Servers (Virtuelle oder dedizierte Server) {#virtual_or_dedicated_servers_title}

Wenn Du mit Systemadministration vertraut bist oder daran interessiert bist, diese zu erlernen,
bieten Dir virtuelle oder dedizierte Server die vollständige Kontrolle über die Produktionsumgebung Deiner Anwendung.

### nginx and PHP-FPM

PHP lässt sich über den integrierten FastCGI Process Manager (FPM) hervorragend mit nginx,
einem schlanken, leistungsstarken Webserver kombinieren.
Es benötigt weniger Speicher als Apache und kann mehrere gleichzeitige Anfragen besser verarbeiten. 
Dies ist besonders wichtig auf virtuellen Servern mit begrenztem Speicher.

* [Mehr über nginx][nginx]
* [Mehr über PHP-FPM][phpfpm]
* [Mehr zu sicherem Einrichten von Nginx und PHP-FPM][secure-nginx-phpfpm]

### Apache and PHP

PHP und Apache verbindet eine lange gemeinsame Geschichte.
Apache ist vielfältig konfigurierbar und verfügt über zahlreiche [Module][apache-modules] zur Erweiterung der Funktionalität.
Es ist eine beliebte Wahl für Shared Server und bietet eine einfache Einrichtung für PHP-Frameworks und Open-Source-Anwendungen wie z.B. WordPress. 
Leider verbraucht Apache standardmäßig mehr Ressourcen als nginx und kann nicht so viele Besucher gleichzeitig verarbeiten.

Apache bietet verschiedene Konfigurationsmöglichkeiten für PHP.
Die gängigste und einfachste ist das [Prefork-MPM][prefork MPM] mit `mod_php`. 
Es ist zwar nicht die speichereffizienteste, aber die einfachste Lösung. 
Dies ist wahrscheinlich die beste Wahl, wenn Du Dich nicht zu sehr mit der Serveradministration befassen möchtest.
Beachte, dass bei Verwendung von `mod_php` unbedingt das Prefork-MPM verwenden MUSST.

Wenn Du die Leistung und Stabilität von Apache steigern möchtest, 
kannst Du alternativ dasselbe FPM-System wie nginx nutzen und das [worker MPM] oder [event MPM] mit `mod_fastcgi` oder `mod_fcgid` ausführen.
Diese Konfiguration ist deutlich speichereffizienter und schneller, erfordert aber mehr Aufwand bei der Einrichtung.

Wenn Du Apache 2.4 oder höher ausführst, kannst Du [`mod_proxy_fcgi`][mod_proxy_fcgi] verwenden. Damit erziehlst Du eine großartige Leistung zu erzielen, die auch noch einfach einzurichten ist.

* [Mehr zu Apache][apache]
* [Mehr zu  Multi-Processing Modules][apache-MPM]
* [Mehr zu  `mod_fastcgi`][mod_fastcgi]
* [Mehr zu  `mod_fcgid`][mod_fcgid]
* [Mehr zu  `mod_proxy_fcgi`][mod_proxy_fcgi]
* [Mehr über Einrichten von Apache und PHP-FPM mit `mod_proxy_fcgi`][tutorial-mod_proxy_fcgi]


[nginx]: https://nginx.org/
[phpfpm]: https://www.php.net/install.fpm
[secure-nginx-phpfpm]: https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/
[apache-modules]: https://httpd.apache.org/docs/2.4/mod/
[prefork MPM]: https://httpd.apache.org/docs/2.4/mod/prefork.html
[worker MPM]: https://httpd.apache.org/docs/2.4/mod/worker.html
[event MPM]: https://httpd.apache.org/docs/2.4/mod/event.html
[apache]: https://httpd.apache.org/
[apache-MPM]: https://httpd.apache.org/docs/2.4/mod/mpm_common.html
[mod_fastcgi]: https://blogs.oracle.com/opal/post/php-fpm-fastcgi-process-manager-with-apache-2
[mod_fcgid]: https://httpd.apache.org/mod_fcgid/
[mod_proxy_fcgi]: https://httpd.apache.org/docs/current/mod/mod_proxy_fcgi.html
[tutorial-mod_proxy_fcgi]: https://serversforhackers.com/video/apache-and-php-fpm
