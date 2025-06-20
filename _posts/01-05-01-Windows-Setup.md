---
isChild: true
anchor:  windows_setup
---

## Windows Setup {#windows_setup_title}

Du kannst die Binärdateien von [windows.php.net/download][php-downloads] herunterladen.
Nach der PHP-Extraktion empfiehlt es sich, den [PATH][windows-path] auf das Stammverzeichnis Ihres PHP-Ordners (wo sich php.exe befindet) zu setzen, damit Sie PHP von überall ausführen können.

Für Schulungen und die lokale Entwicklung Kannst Du den integrierten Webserver mit PHP 5.4+ nutzen, sodass Du Dich nicht um die Konfiguration kümmern musst.
Wenn Du eine All-in-One-Lösung mit vollwertigem Webserver und MySQL wünschst, helfen Dir Tools wie  [XAMPP][xampp], [EasyPHP][easyphp], [OpenServer][openserver] und [WAMP][wamp], eine Windows-Entwicklungsumgebung schnell zum Laufen zu bringen. Allerdings unterscheiden sich diese Tools etwas von der Produktionsumgebung. Achte daher auf Umgebungsunterschiede, wenn Du unter Windows arbeitest und unter Linux deployst.

Wenn Du Dein Produktionssystem unter Windows betreibst, bietet IIS7 die stabilste und leistungsstärkste Lösung. Mit [phpmanager][phpmanager] (einem GUI-Plugin für IIS7) kannst Du PHP einfach konfigurieren und verwalten. IIS7 verfügt über integriertes FastCGI und ist sofort einsatzbereit. Du musst lediglich PHP als Handler konfigurieren. Für Support und weitere Ressourcen gibt es einen [eigenen Bereich für PHP auf iis.net][php-iis].

Wenn Du Deine Anwendung in unterschiedlichen Umgebungen in Entwicklung und Produktion ausführst, kann es beim Live-Einsatz zu ungewöhnlichen Fehlern kommen. Wenn Du unter Windows entwickeln und unter Linux (oder einem anderen Betriebssystem als Windows) deployst, solltest Du den Einsatz einer [virtuellen Maschine](/#virtualization_title) in Betracht ziehen.

Chris Tankersley hat einen sehr hilfreichen Blog-Beitrag darüber verfasst, welche Tools er für die [PHP-Entwicklung unter Windows][windows-tools] verwendet.


[easyphp]: https://www.easyphp.org/
[phpmanager]: http://phpmanager.codeplex.com/
[openserver]: https://ospanel.io/
[wamp]: https://www.wampserver.com/en/
[php-downloads]: https://windows.php.net/download/
[php-iis]: https://php.iis.net/
[windows-path]: https://www.windows-commandline.com/set-path-command-line/
[windows-tools]: https://ctankersley.com/2016/11/13/developing-on-windows-2016/
[xampp]: https://www.apachefriends.org/
