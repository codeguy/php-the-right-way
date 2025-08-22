---
title:   Configuration Files (Konfigurationsdateien)
isChild: true
anchor:  configuration_files
---

## Configuration Files (Konfigurationsdateien) {#configuration_files_title}

Beim Erstellen von Konfigurationsdateien für Deine Anwendungen empfehlen Best Practices, eine der folgenden Methoden zu befolgen:

- Es wird empfohlen, Deine Konfigurationsinformationen nicht an einem Ort zu speichern, auf den direkt zugegriffen und über das Dateisystem abgerufen werden kann.
- Wenn Du Deine Konfigurationsdateien im Root-Verzeichnis speichern musst, benenne die Dateien mit der Erweiterung  `.php`. Dadurch wird sichergestellt, dass das Skript auch bei direktem Zugriff nicht als einfacher Text ausgegeben wird.
- Informationen in Konfigurationsdateien sollten entsprechend geschützt werden, entweder durch Verschlüsselung oder Gruppen-/Benutzer-Berechtigungen für das Dateisystem.
- Es empfiehlt sich, sicherzustellen, dass Du keine Konfigurationsdateien mit vertraulichen Informationen, z. B. Passwörtern oder API-Token, der Quellcodeverwaltung übergibst.
