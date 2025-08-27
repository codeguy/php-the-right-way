---
isChild: true
anchor:  vagrant
---

## Vagrant {#vagrant_title}

[Vagrant] (dt. Landstreicher) unterstützt Dich beim Aufbau Deiner virtuellen Boxen auf den bekannten virtuellen Umgebungen und konfiguriert diese Umgebungen anhand einer einzigen Konfigurationsdatei.
Diese Boxen können manuell eingerichtet werden oder Du nutzt "Provisioning"-Software wie [Puppet] oder [Chef], die das für Dich übernimmt.
Die Provisionierung der Basisbox stellt sicher, dass mehrere Boxen identisch eingerichtet sind und macht die Pflege komplizierter Setup-Befehlslisten überflüssig.
Du kannst Deine Basisbox auch "zerstören" und ohne viele manuelle Schritte neu erstellen, was eine einfache Neuinstallation ermöglicht.

Vagrant erstellt Ordner zum Teilen Deines Codes zwischen Deinem Host und Deiner virtuellen Maschine.
Das bedeutet, dass Du Deine Dateien auf Deiner Hostmaschine erstellen und bearbeiten und den Code dann in Deiner virtuellen Maschine ausführen kannst.

[Vagrant]: https://www.vagrantup.com/
[Puppet]: https://puppet.com/
[Chef]: https://www.chef.io/
