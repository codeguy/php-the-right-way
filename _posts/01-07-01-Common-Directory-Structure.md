---
title:   Gemeinsame Datei- und Verzeichnisstruktur
isChild: true
anchor:  common_directory_structure
---

##  Gemeinsame Datei- und Verzeichnisstruktur {#common_directory_structure_title}

Eine häufige Frage von Webentwicklern lautet: “Wo speichere ich meine Zeug?“ Über die Jahre lautete die Antwort immer wieder: „Dort wo das `DocumentRoot` ist.“ Obwohl diese Antwort nicht vollständig ist, bietet sie einen guten Ausgangspunkt.

Aus Sicherheitsgründen sollten Konfigurationsdateien für Besucher einer Website unzugänglich sein. Daher werden öffentliche Skripte in einem öffentlichen Verzeichnis und private Konfigurationen und Daten außerhalb dieses Verzeichnisses gespeichert.

Jedes Team, jedes CMS oder jedes Framework verwendet eine Standardverzeichnisstruktur. Wenn man jedoch ein Projekt alleine startet, kann die Wahl der richtigen Dateistruktur ganz schön herausfordernd sein.

[Paul M. Jones] hat die gängigen Vorgehensweisen von Zehntausenden von GitHub-Projekten im PHP-Bereich umfassend untersucht. Basierend auf dieser Forschung hat er eine standardisierte Datei- und Verzeichnisstruktur entwickelt: Das [Standard PHP Package Skeleton]. In dieser Verzeichnisstruktur sollte `DocumentRoot` auf `public/` verweisen, Unit-Tests sollten im Verzeichnis `tests/` abgelegt sein und Drittanbieterbibliotheken, wie sie von [composer] installiert wurden, gehören ins `vendor/`-Verzeichnis. Für andere Dateien und Verzeichnisse ist es für Projektbeteiligte am sinnvollsten, sich an das [Standard PHP Package Skeleton] zu halten.


[Paul M. Jones]: https://paul-m-jones.com/
[Standard PHP Package Skeleton]: https://github.com/php-pds/skeleton
[Composer]: /#composer_and_packagist
