---
isChild: true
anchor:  register_globals
---

## Register Globals (Globale Variablen registrieren) {#register_globals_title}

**HINWEIS:** Ab PHP 5.4.0 wurde die `register_globals` Einstellung entfernt und kann nicht mehr verwendet werden. Dieser Abschnitt dient lediglich als Warnung für alle, die eine ältere Anwendung aktualisieren.

Wenn die Konfigurationseinstellung `register_globals` aktiviert ist, werden verschiedene Variablentypen (einschließlich Variablen aus `$_POST`, `$_GET` und `$_REQUEST`) im globalen Bereich Ihrer Anwendung verfügbar.
Dies kann leicht zu Sicherheitsproblemen führen, da Deine Anwendung nicht effektiv erkennen kann, woher die Daten stammen.

Beispielsweise wäre `$_GET['foo']` über `$foo` verfügbar, wodurch deklarierte Variablen überschrieben werden können.

Wenn Sie PHP < 5.4.0 verwenden, __stellen Sie sicher__, dass  `register_globals` _deaktiviert_ d.h. __off__ ist.
