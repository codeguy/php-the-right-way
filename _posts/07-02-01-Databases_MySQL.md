---
isChild: true
title:   mySQL-Erweiterung
anchor:  mysql_extension
---

## mySQL-Erweiterung {#mysql_extension_title}

Die [mysql]-Erweiterung für PHP ist unglaublich alt und wurde durch zwei andere Erweiterungen ersetzt:

- [mysqli]
- [pdo]

Die Entwicklung von [mysql] wurde nicht nur vor langer Zeit schon eingestellt, sondern **[wurde in PHP 7.0 auch offiziell entfernt][mysql_removed]**.

Um nicht in den `php.ini`-Einstellungen nach dem verwendeten Modul suchen zu müssen, können Sie in Ihrem bevorzugten Editor nach `mysql_*` suchen. Wenn Funktionen wie `mysql_connect()` und `mysql_query()` angezeigt werden, wird `mysql` verwendet.

Auch wenn Sie PHP 7.x oder höher noch nicht verwenden, führt ein nicht frühzeitiges Upgrade zu größeren Schwierigkeiten, wenn das PHP-Upgrade tatsächlich erfolgt. Am besten ersetzen Sie mysql in Ihren Anwendungen zügig durch [mysqli] or [PDO], um später nicht in Eile zu geraten.

Generell sollte mysql **nicht mehr** verwendet werden.

**Wenn Sie von [mysql] auf [mysqli] aktualisieren, hüten Sie sich vor oberflächlichen Upgrade-Anleitungen, die vorschlagen, einfach `mysql_*` mit `mysqli_*` zu ersetzen.
Dies ist nicht nur eine grobe Vereinfachung, sondern lässt auch die Vorteile von mysqli außer Acht, wie z. B. die Parameterbindung, welche auch in [PDO][pdo] verfügbar ist.**

* [MySQLi Prepared Statements][mysqli_prepared_statements]
* [PHP: Auswahl einer API für MySQL][mysql_api]

[mysql]: https://www.php.net/mysqli
[mysql_removed]: https://www.php.net/manual/migration70.removed-exts-sapis.php
[mysqli]: https://www.php.net/mysqli
[pdo]: https://www.php.net/pdo
[mysql_api]: https://www.php.net/mysqlinfo.api.choosing
[mysqli_prepared_statements]: https://websitebeaver.com/prepared-statements-in-php-mysqli-to-prevent-sql-injection
