---
isChild: true
anchor:  templating_benefits
---

## Vorteile {#templating_benefits_title}

Der Hauptvorteil von Templates liegt in der klaren Trennung zwischen der Präsentationslogik und dem Rest Deiner Anwendung.
Templates sind ausschließlich für die Anzeige formatierter Inhalte zuständig.
Du verwendest sie nicht für die Datensuche, Persistenz oder andere komplexere Aufgaben.
Dies führt zu saubererem, besser lesbarem Code, was besonders in einer Teamumgebung hilfreich ist,
in der Entwickler am serverseitigen Code (Controller, Modelle) 
und Designer am clientseitigen Code (Markup) arbeiten.

Vorlagen verbessern außerdem die Organisation von Präsentationscode. 
Sie werden üblicherweise in einem Ordner „Views“ abgelegt und jeweils in einer eigenen Datei definiert.
Dieser Ansatz fördert die Wiederverwendung von Code, indem größere Codeblöcke in kleinere, wiederverwendbare 
Teile, sogenannte Partials, zerlegt werden. So können beispielsweise die Kopf- und Fußzeile Deiner Site
jeweils als Template definiert und vor und nach jedem Page Template eingefügt werden.

Je nach verwendeter Bibliothek können Templates mehr Sicherheit bieten, 
indem sie benutzergenerierten Inhalt automatisch maskieren. Einige Bibliotheken bieten sogar Sandboxing an, bei dem Vorlagendesigner nur auf Whitelist-Variablen und -Funktionen zugreifen können.
