---
title:   Data Filtering (Datenfilterung)
isChild: true
anchor:  data_filtering
---

## Data Filtering (Datenfilterung) {#data_filtering_title}

Vertrauen Sie niemals (niemals) fremden Eingaben in Ihrem PHP-Code. 
(_**All user input is evil**, until proved otherwise._)
Überprüfe und validiere fremde Eingaben immer, bevor Du sie im Code verwendest. 
Die Funktionen `filter_var()` und `filter_input()` können Text bereinigen und Textformate (z. B. E-Mail-Adressen) validieren.

Fremdeingaben können alles sein:`$_GET` oder `$_POST` Formulareingabedaten, einige Werte in der `$_SERVER` Superglobalen oder der HTTP-Anforderungstext über `fopen('php://input', 'r')`. 
Denke daran, dass Fremdeingaben nicht auf vom Benutzer übermittelte Formulardaten beschränkt sind.
Hoch- und heruntergeladene Dateien, Sitzungswerte, Cookie-Daten und Daten von Webdiensten Dritter sind ebenfalls Fremdeingaben.

Obwohl Fremddaten gespeichert, kombiniert und später abgerufen werden können, handelt es sich dennoch um Fremdeingaben. 
Frage Dich jedes Mal, wenn Du Daten verarbeitest, ausgibst, verkettest oder in Deinen Code einbindest, ob die Daten richtig gefiltert sind und ob ihnen wirklich vertraut werden kann.

Daten können je nach Zweck unterschiedlich gefiltert werden.
Wenn beispielsweise ungefilterte Fremdeingaben in die HTML-Seitenausgabe übernommen werden, können diese HTML und JavaScript auf Deiner Website ausführen!
Dies wird als Cross-Site-Scripting (XSS) bezeichnet und kann ein sehr gefährlicher Angriff sein.
Eine Möglichkeit, XSS zu vermeiden, besteht darin, alle benutzergenerierten Daten vor der Ausgabe auf Deienr Seite zu bereinigen, indem Du HTML-Tags mit der`strip_tags()`-Funktion entfernst oder Zeichen mit besonderer Bedeutung mit den Funktionen `htmlentities()` oder `htmlspecialchars()` in die entsprechenden HTML-Entitäten maskieren lässt.

Ein weiteres Beispiel ist die Übergabe von auszuführenden Optionen über die Befehlszeile.
Dies kann äußerst gefährlich sein (und ist normalerweise keine gute Idee), aber Du kannst die integrierte  `escapeshellarg()`-Funktion verwenden, um die Argumente des ausgeführten Befehls zu bereinigen.

Ein letztes Beispiel ist die Entgegennahme von Fremdeingaben, um eine Datei aus dem Dateisystem zu laden. 
Dies kann ausgenutzt werden, indem der Dateiname in einen Dateipfad geändert wird. Sie müssen `"/"`, `"../"`, [Nullbytes][6] oder andere Zeichen aus dem Dateipfad entfernen, 
damit keine versteckten, nicht öffentlichen oder sensiblen Dateien geladen werden können.

* [Mehr über data filtering][1]
* [Mehr über `filter_var`][4]
* [Mehr über `filter_input`][5]
* [Mehr über handling null bytes][6]

### Sanitization (Desinfektion)

Durch die Sanitization werden ungültige oder unsichere Zeichen aus der Fremdeingabe entfernt (oder entzogen).

Beispielsweise solltest Du fremde Eingaben bereinigen, bevor Du sie in HTML einbindes oder in eine reine SQL-Abfrage einfügst.
Wenn Du gebundene Parameter mit [PDO](#databases) verwendest, wird die Eingabe automatisch bereinigt.

Manchmal ist es erforderlich, beim Einfügen in die HTML-Seite einige sichere HTML-Tags in der Eingabe zuzulassen. 
Dies ist sehr schwierig und wird oft durch die Verwendung anderer, eingeschränkterer Formatierungen wie Markdown oder BBCode vermieden, obwohl es hierfür Whitelist-Bibliotheken wie [HTML Purifier][html-purifier] gibt.

[Siehe Sanitization Filters][2]

### Unserialization (Deserialisierung)

Daten von Benutzern oder anderen nicht vertrauenswürdigen Quellen zu `unserialize()` ist gefährlich.
Böswillige Benutzer können dadurch Objekte (mit benutzerdefinierten Eigenschaften) instanziieren, deren Destruktoren ausgeführt werden, **auch wenn die Objekte selbst nicht verwendet werden**.
Vermeide daher die Deserialisierung nicht vertrauenswürdiger Daten.

Verwende ein sicheres, standardmäßiges Datenaustauschformat wie JSON (via [`json_decode`][json_decode] und [`json_encode`][json_encode]), wenn Du serialisierte Daten an den Benutzer übergeben musst.

### Validation (Validierung)

Durch die Validierung wird sichergestellt, dass die Eingabe Deinen Erwartungen entspricht.
Beispielsweise solltest Du bei eine E-Mail-Adresse, eine Telefonnummer oder das Alter validieren, wenn Du eine Benutzer-Registrierung verarbeitest.

[Siehe: Validation Filters][3]


[1]: https://www.php.net/book.filter
[2]: https://www.php.net/filter.filters.sanitize
[3]: https://www.php.net/filter.filters.validate
[4]: https://www.php.net/function.filter-var
[5]: https://www.php.net/function.filter-input
[6]: https://www.php.net/security.filesystem.nullbytes
[html-purifier]: http://htmlpurifier.org/
[json_decode]: https://www.php.net/manual/function.json-decode.php
[json_encode]: https://www.php.net/manual/function.json-encode.php
