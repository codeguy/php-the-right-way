---
title:  Datenbanken
anchor: databases
---

# Datenbanken {#databases_title}

Dein PHP-Code verwendet häufig eine Datenbank, um Informationen zu speichern.
Du hast verschiedene Möglichkeiten, eine Verbindung zu Deiner Datenbank herzustellen und mit ihr zu interagieren.
**Bis PHP 5.1.0** wurde die Verwendung nativer Treiber wie [mysqli], [pgsql], [mssql] usw. empfohlen.

Native Treiber sind ideal, wenn Du in ihrer Anwendung nur eine Datenbank verwendest.
Wenn Du jedoch beispielsweise MySQL und ein wenig MSSQL verwendest oder eine Verbindung zu einer Oracle-Datenbank herstellen musst, kannst Du nicht dieselben Treiber verwenden.
Du musst für jede Datenbank eine brandneue API erlernen – und das kann nervig sein.

[mysqli]: https://www.php.net/mysqli
[pgsql]: https://www.php.net/pgsql
[mssql]: https://www.php.net/mssql
