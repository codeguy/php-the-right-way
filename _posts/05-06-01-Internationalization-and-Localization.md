---
title:   Internationalisierung und Lokalisierung
isChild: true
anchor:  i18n_l10n
---

## Internationalisierung (i18n) und Lokalisierung (l10n) {#i18n_l10n_title}

_Disclaimer für Neulinge: i18n und l10n sind Numeronyme, eine Art Abkürzung, bei der Zahlen zum Verkürzen von Wörtern verwendet werden – in unserem Fall wird Internationalisierung zu i18n und Lokalisierung zu l10n._

Zunächst müssen wir diese beiden ähnlichen Konzepte und andere damit zusammenhängende Dinge definieren:

- **Internationalisierun**g bedeutet, dass Du Deinen Code so organisierst, dass er ohne Refactoring (Überarbeitung, Neustrukturierung) an verschiedene Sprachen oder Regionen angepasst werden kann.
Diese Aktion wird in der Regel einmalig durchgeführt – vorzugsweise zu Beginn des Projekts, da sonst wahrscheinlich umfangreiche Änderungen im Quellcode erforderlich sind!
- **Lokalisierung** erfolgt, wenn Du die Benutzeroberfläche (hauptsächlich) durch die Übersetzung von Inhalten anpasst, basierend auf den zuvor durchgeführten i18n-Arbeiten.
- Sie wird üblicherweise jedes Mal durchgeführt, wenn eine neue Sprache oder Region unterstützt werden muss, und wird aktualisiert, wenn neue Benutzeroberflächenelemente hinzugefügt werden, da diese in allen unterstützten Sprachen verfügbar sein müssen.
- **Pluralbildung** definiert die Regeln, die zwischen verschiedenen Sprachen für die Interoperabilität von Zeichenfolgen mit Zahlen und Zählern gelten.
Im Englischen steht z.B ein einzelnes Element im Singular, alles andere wird als Plural bezeichnet.
Der Plural wird in dieser Sprache durch das Anhängen eines „S“ an einige Wörter angezeigt und verändert manchmal Teile davon.
In anderen Sprachen, wie Russisch oder Serbisch, gibt es neben dem Singular zwei Pluralformen – es gibt sogar Sprachen mit insgesamt vier, fünf oder sechs Formen, wie Slowenisch, Irisch oder Arabisch.

## Gängige Implementierungsmethoden

Der einfachste Weg, PHP-Software zu internationalisieren, ist die Verwendung von Array-Dateien und deren Strings in Vorlagen wie z.B. `<h1><?=$TRANS['title_about_page']?></h1>`.
Dieser Weg ist jedoch für ernsthafte Projekte kaum zu empfehlen, da er im Laufe der Zeit einige Wartungsprobleme mit sich bringt – einige davon können bereits zu Beginn auftreten, wie z. B. die Pluralisierung.
Versuchen Sie diesen Weg daher bitte nicht, wenn Ihr Projekt mehr als ein paar Seiten umfasst.

Der klassischste Weg und oft als Referenz für i18n und l10n verwendet, ist ein [Unix-Tool namens `gettext`][gettext].
Es stammt aus dem Jahr 1995 und ist noch immer eine vollständige Implementierung für die Übersetzung von Software. Es ist einfach zu bedienen und bietet leistungsstarke Tools.
Wir werden hier Gettext besprechen. Damit Sie sich nicht mit der Kommandozeile herumschlagen müssen, stellen wir Ihnen eine praktische GUI-Anwendung vor, mit der Sie Ihren l10n-Quellcode einfach aktualisieren können.

### Andere Werkzeuge

Es gibt gängige Bibliotheken, die Gettext und andere i18n-Implementierungen unterstützen.
Einige davon sind möglicherweise einfacher zu installieren oder bieten zusätzliche Funktionen oder i18n-Dateiformate.
In diesem Dokument konzentrieren wir uns auf die Tools, die im PHP-Kern enthalten sind. Zur Vervollständigung listen wir hier weitere auf:


- [aura/intl][aura-intl]: Bietet Internationalisierungstools (I18N), insbesondere paketorientierte Nachrichtenübersetzung pro Gebietsschema.
Es verwendet Array-Formate für Messages. Es bietet keinen Message-Extraktor, ermöglicht aber erweiterte Nachrichtenformatierung über die intlErweiterung (einschließlich pluralisierter Nachrichten).
- [php-gettext/Gettext][php-gettext]: Gettext-Unterstützung mit OO-Schnittstelle; enthält verbesserte Hilfsfunktionen, leistungsstarke Extraktoren für verschiedene Dateiformate (einige davon werden vom `gettext`-Befehl nicht nativ unterstützt) und kann auch in andere Formate als `.mo/.po`-Dateien exportieren. Dies ist nützlich,
wenn Sie Ihre Übersetzungsdateien in andere Systemkomponenten, beispielsweise eine JavaScript-Schnittstelle, integrieren müssen.
- [symfony/translation][symfony]: Unterstützt viele verschiedene Formate, empfiehlt aber die Verwendung ausführlicher XLIFF-Dateien. Enthält weder Hilfsfunktionen noch einen integrierten Extraktor, unterstützt aber die Verwendung von Platzhaltern mit interner `strtr()`-Nutzung.
- [laminas/laminas-i18n][laminas]: : Unterstützt Array- und INI-Dateien sowie Gettext-Formate.
Implementiert eine Caching-Ebene, damit Du das Dateisystem nicht jedes Mal neu einlesen must. Es enthält außerdem View-Helper sowie lokal angepasste Eingabefilter und Validatoren. Es gibt jedoch keinen Message-Extraktor.

Andere Frameworks enthalten auch i18n-Module, diese sind jedoch außerhalb ihrer Codebasen nicht verfügbar:

- [Laravel] unterstützt grundlegende Array-Dateien, hat keinen automatischen Extractor, enthält aber einen `@lang` Helper für Vorlagendateien.
- [Yii] supports array, Gettext, and database-based translation, and includes a messages extractor. It is backed by the
[`Intl`][intl] unterstützt Array-, Gettext- und datenbankbasierte Übersetzungen und enthält einen Nachrichtenextractor.
Die [Intl-Erweiterung][Intl] ist seit PHP 5.3 verfügbar und basiert auf dem [ICU-Projekt][ICU project].
Dadurch kann Yii leistungsstarke Ersetzungen ausführen, beispielsweise Zahlen ausschreiben und Datum, Zeit, Intervalle, Währungsen und Ordinalzahlen formatieren.

Wenn Du Dich für eine der Bibliotheken entscheidest, die keine Extractors bereitstellen, möchtst Du möglicherweise die Gettext-Formate verwenden,
sodass Du die ursprüngliche Gettext-Toolchain (einschließlich Poedit) verwenden kannst, wie im Rest des Kapitels beschrieben.

## Gettext

### Installation

Möglicherweise musst Du Gettext und die zugehörige PHP-Bibliothek mithilfe Deines Paketmanagers (z. B.  `apt-get` or `yum` ) installieren.
Aktiviere die Funktion nach der Installation, indem Du `extension=gettext.so` (Linux/Unix) oder `extension=php_gettext.dll` (Windows) zu Deiner `php.ini` hinzufügst.

Auch hier verwenden wir [Poedit] zum Erstellen von Übersetzungsdateien. Du wirst es wahrscheinlich im Paketmanager Deines Systems finden; es ist für Unix, macOS und Windows verfügbar und kann auch [kostenlos auf deren Website heruntergeladen][poedit_download] werden.

### Struktur

#### Drei verschiedene Dateien
Bei der Arbeit mit gettext arbeitest Du üblicherweise mit drei Dateien. Die wichtigsten sind PO- (Portable Object) und MO- (Machine Object) Dateien. Erstere ist eine Liste lesbarer "übersetzter Objekte" und letztere die entsprechende Binärdatei, die gettext bei der Lokalisierung interpretiert.
Es gibt außerdem eine POT-Datei (Template), die alle vorhandenen Schlüssel aus Deinen Quelldateien enthält und als Leitfaden zum Generieren und Aktualisieren aller PO-Dateien dient. Diese Template-Dateien sind nicht zwingend erforderlich: Je nach verwendetem l10n-Tool reichen PO/MO-Dateien aus. Du benötigst immer ein Paar PO/MO-Dateien pro Sprache und Region, aber nur eine POT-Datei pro Domänen.

### Domänen
In großen Projekten kann es vorkommen, dass Übersetzungen getrennt werden müssen, wenn dieselben Wörter in einem bestimmten Kontext unterschiedliche Bedeutungen haben. In diesen Fällen werden sie in verschiedene _Domänen_ aufgeteilt.
Dabei handelt es sich im Wesentlichen um benannte Gruppen von POT-/PO-/MO-Dateien, wobei der Dateiname die jeweilige _Übersetzungsdomäne_ ist.
Kleine und mittelgroße Projekte verwenden der Einfachheit halber meist nur eine Domäne; ihr Name ist beliebig, wir verwenden für unsere Codebeispiele jedoch "main".
In [Symfony]-Projekten werden Domänen beispielsweise verwendet, um die Übersetzungen für Validierungsmeldungen zu trennen.

#### Gebietsschemacode
Ein Gebietsschema ist einfach ein Code, der eine Version einer Sprache identifiziert.
Es wird gemäß den Spezifikationen [ISO 639-1][639-1] und 
[ISO 3166-1 alpha-2][3166-1] definiert: Zwei Kleinbuchstaben für die Sprache, optional gefolgt von einem Unterstrich und zwei Großbuchstaben, die den Länder- oder Regionalcode kennzeichnen.
Für [seltene Sprachen][rare] werden drei Buchstaben verwendet.

Für manche Sprechende mag der Länderteil überflüssig erscheinen. Tatsächlich haben einige Sprachen in verschiedenen Ländern Dialekte, wie zum Beispiel Österreichisches Deutsch (`de_AT`) oder brasilianisches Portugiesisch (`pt_BR`).
Der zweite Teil dient der Unterscheidung zwischen diesen Dialekten – fehlt er, wird er als "generische" oder "hybride" Version der Sprache angesehen.

### Verzeichnisstruktur
Um Gettext verwenden zu können, benötigen wir eine bestimmte Ordnerstruktur. Wähle zunächst ein beliebiges Stammverzeichnis für Deine l10n-Dateien in Deinem Quell-Repository.
Darin findest Du einen Ordner für jedes benötigte Gebietsschema und einen festen `LC_MESSAGES` Ordner für alle PO/MO-Paare. Beispiel:

{% highlight console %}
<project root>
 ├─ src/
 ├─ templates/
 └─ locales/
    ├─ forum.pot
    ├─ site.pot
    ├─ de/
    │  └─ LC_MESSAGES/
    │     ├─ forum.mo
    │     ├─ forum.po
    │     ├─ site.mo
    │     └─ site.po
    ├─ es_ES/
    │  └─ LC_MESSAGES/
    │     └─ ...
    ├─ fr/
    │  └─ ...
    ├─ pt_BR/
    │  └─ ...
    └─ pt_PT/
       └─ ...
{% endhighlight %}

### Pluralformen
Wie bereits in der Einleitung erwähnt, können verschiedene Sprachen unterschiedliche Pluralregeln haben.
Gettext erspart uns jedoch auch dieses Problem. Beim Erstellen einer neuen `.po`-Datei musst Du die [Pluralregeln][plural] für die jeweilige Sprache angeben, und übersetzte Teile, die pluralsensitiv sind haben für jede dieser Regeln eine andere Form.
Beim Aufruf von Gettext im Code musst Du die Nummer des Satzes angeben, und Gettext ermittelt die korrekte Form – bei Bedarf sogar mithilfe von String-Ersetzungen.

Pluralregeln enthalten die Anzahl der verfügbaren Pluralformen und einen Boole'schen Test auf `n`, der definiert, in welche Regel die angegebene Zahl fällt (beginnend mit 0). Beispiel:

- Japanisch: `nplurals=1; plural=0` - nur eine Regel
- Englisch: `nplurals=2; plural=(n != 1);` - zwei Regeln: Erste wenn N eins ist, andernfalls die zweite Regel 
- Brazilian Portuguese: `nplurals=2; plural=(n > 1);` -  zwei Regeln: Zweite, wenn N größer als eins ist, andernfalls erste Regel

Nachdem Du nun die Grundlagen der Pluralregeln verstanden hast (und falls nicht, sieh Dir bitte eine ausführlichere Erklärung im [LingoHub-Tutorial][lingohub_plurals] an), möchtst Du vielleicht die benötigten Regeln aus einer [Liste][plural] kopieren, anstatt sie von Hand zu schreiben.

Wenn Du Gettext aufrufst, um Sätze mit Zählern zu lokalisieren, musst Du auch die zugehörige Nummer angeben. Gettext ermittelt die anzuwendende Regel und verwendet die korrekte lokalisierte Version.
Für jede definierte Pluralregel musst Du einen anderen Satz in die `.po`-Datei aufnehmen.

### Beispielimplementierung
Nach all der Theorie kommen wir nun zur Praxis. Hier ist ein Ausschnitt einer `.po`-Datei – achte nicht auf das Format, sondern auf den Gesamtinhalt. Wie Du ihn einfach bearbeiten kannst, erfährst Du später:

{% highlight po %}
msgid ""
msgstr ""
"Language: pt_BR\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Plural-Forms: nplurals=2; plural=(n > 1);\n"

msgid "We are now translating some strings"
msgstr "Nós estamos traduzindo algumas strings agora"

msgid "Hello %1$s! Your last visit was on %2$s"
msgstr "Olá %1$s! Sua última visita foi em %2$s"

msgid "Only one unread message"
msgid_plural "%d unread messages"
msgstr[0] "Só uma mensagem não lida"
msgstr[1] "%d mensagens não lidas"
{% endhighlight %}

Der erste Abschnitt funktioniert wie eine Kopfzeile, wobei insbesondere `msgid` und `msgstr` leer sind. Er beschreibt die Dateikodierung, Pluralformen und andere weniger relevante Dinge.
Der zweite Abschnitt übersetzt eine einfache Zeichenfolge vom Englischen in brasilianisches Portugiesisch und der dritte macht dasselbe, nutzt jedoch die Zeichenfolgenersetzung aus [`sprintf`][sprintf], sodass die Übersetzung den Benutzernamen und das Besuchsdatum enthalten kann.
Der letzte Abschnitt ist ein Beispiel für Pluralformen, wobei die Singular- und Pluralversion im Englischen als `msgid` und die entsprechenden Übersetzungen als `msgstr` 0 und 1 angezeigt werden (entsprechend der durch die Pluralregel vorgegebenen Zahl).
Auch hier wird die Zeichenfolgenersetzung verwendet, sodass die Zahl mithilfe `%d` direkt im Satz angezeigt wird.
Die Pluralformen bestehen immer aus zwei `msgid` (Singular und Plural). Es wird daher empfohlen, keine komplexe Sprache als Übersetzungsquelle zu verwenden.

### Discussion on l10n keys
Wie Du vielleicht bemerkt hast, verwenden wir als Quell-ID den englischen Originalsatz. Diese `msgid` wird in allen Deinen`.po`-Dateien verwendet. Das bedeutet, dass andere Sprachen dasselbe Format und dieselben `msgid`-Felder, aber übersetzte `msgstr`-Zeilen haben.

Wenn wir über Übersetzungsschlüssel sprechen, gibt es zwei verschiedene "Schulen":

msgidals echter Satz . 
Auch wenn Teile der Software in einer bestimmten Sprache nicht übersetzt sind, behält der angezeigte Schlüssel eine gewisse Bedeutung. Beispiel: Wenn Du selbtst vom Englischen ins Spanische übersetzst, aber Hilfe beim Übersetzen ins Französische brauchst, veröffentlichst Du die neue Seite eben mit fehlenden französischen Sätzen, und Teile der Website werden stattdessen auf Englisch angezeigt.
es ist für den Übersetzer viel einfacher zu verstehen, was vor sich geht, und auf der Grundlage des eine richtige Übersetzung anzufertigen msgid;

Sie erhalten „kostenloses“ L10n für eine Sprache – die Quellsprache.
Der einzige Nachteil: Wenn Sie den eigentlichen Text ändern möchten, müssen Sie ihn msgidin mehreren Sprachdateien ersetzen.


1. _`msgid` als echter Satz_.
    Die Hauptvorteile sind:
    - Auch wenn Teile der Software in einer bestimmten Sprache nicht übersetzt sind, behält der angezeigte Schlüssel immer noch eine gewisse Bedeutung.
Beispiel: Wenn Du selbtst vom Englischen ins Spanische übersetzst, aber Hilfe beim Übersetzen ins Französische brauchst, veröffentlichst Du die neue Seite eben mit fehlenden französischen Sätzen, diese Teile der Website werden stattdessen in Englisch angezeigt;
    - es ist für den Übersetzer viel einfacher zu verstehen, was vor sich geht, und auf der Grundlage der `msgid` eine richtige Übersetzung anzufertigen;
    - Du erhältst "gratis"-l10n for one language - für eine Sprache – die Quellsprache;
    - Der einzige Nachteil: Wenn Du den eigentlichen Text ändern möchtest, musst Du die `msgid` in mehreren Sprachdateien ersetzen.

2. _`msgid` als eindeutiger, strukturierter Schlüssel_.
Er beschreibt strukturiert die Rolle des Satzes in der Anwendung und enthält das Template oder den Teil, in dem sich der String anstelle Deines Inhalts befindet.
    - Dies ist eine großartige Möglichkeit, den Code zu organisieren und den Textinhalt von der Templatelogik zu trennen.
    - Dies könnte jedoch zu Problemen für den Übersetzer führen, da der Kontext übersehen wird. Für weitere Übersetzungen wird eine Quellsprachendatei wird als Grundlage  benötigt. Beispiel: Der Entwickler verfügt idealerweise über eine `en.po`-Datei, welche die Übersetzer lesen können, um  zu verstehen, was sie in die `fr.po`-Datei schreiben sollen.
    - Fehlende Übersetzungen würden bedeutungslose IDs auf dem Bildschirm anzeigen (`top_menu.welcome` anstatt `Hello there, User!` auf der o.g. unübersetzten französischen Page).
Das ist gut dafür, dass die Übersetzung vor der Veröffentlichung abgeschlossen sein muss – schlecht ist es jedoch, da Übersetzungsprobleme das Nutzererlebnis erheblich beeinträchtigen würden
Einige Libraries bieten jedoch die Möglichkeit, eine bestimmte Sprache als "Fallback" festzulegen, was ein ähnliches Verhalten wie der obige Ansatz hat.

Das [Gettext-Handbuch][manual] bevorzugt den ersten Ansatz, da dieser im Allgemeinen für Übersetzer und Benutzer im Problemfall einfacher ist. So werden wir auch hier vorgehen. Die Symfony-Dokumentation bevorzugt jedoch die schlüsselwortbasierte Übersetzung, um unabhängige Änderungen aller Übersetzungen zu ermöglichen, ohne dass auch die Templates davon betroffen sind.

### Alltagsgebrauch
In einer typischen Anwendung verwendest Du Gettext-Funktionen beim Schreiben statischer Texte auf Deinen Seiten. Diese Sätze erscheinen dann in `.po`-Dateien, werden übersetzt, in `.mo`-Dateien kompiliert und anschließend von Gettext beim Rendern der eigentlichen Benutzeroberfläche verwendet. Lassen Sie uns daher die bisherigen Ausführungen in einem Schritt-für-Schritt-Beispiel zusammenfassen:

#### 1. Eine Beispiel-Template, einschließlich einiger Gettext-Aufrufe
{% highlight php %}
<?php include 'i18n_setup.php' ?>
<div id="header">
    <h1><?=sprintf(gettext('Welcome, %s!'), $name)?></h1>
    <!-- code indented this way only for legibility -->
    <?php if ($unread): ?>
        <h2><?=sprintf(
            ngettext('Only one unread message',
                     '%d unread messages',
                     $unread),
            $unread)?>
        </h2>
    <?php endif ?>
</div>

<h1><?=gettext('Introduction')?></h1>
<p><?=gettext('We\'re now translating some strings')?></p>
{% endhighlight %}

gettext()übersetzt einfach ein msgid in das entsprechende Element msgstr für eine bestimmte Sprache. Es gibt auch eine Kurzfunktion _(), die auf die gleiche Weise funktioniert.
ngettext() macht dasselbe, aber mit Pluralregeln;
Es gibt auch dgettext()und dngettext(), mit denen Du die Domäne für einen einzelnen Anruf überschreiben kannst. Mehr zur Domänenkonfiguration im nächsten Beispiel.

- [`gettext()`][func] übersetzt einfach ein `msgid`  in das entsprechende `msgstr`-Element für eine bestimmte Sprache. Es gibt auch eine Kurzfunktion `_()`, die genauso funktioniert;
- [`ngettext()`][n_func] macht dasselbe, aber mit Pluralregeln;
- Es gibt auch [`dgettext()`][d_func] und [`dngettext()`][dn_func], mit denen Du die Domäne für einen einzelnen Anruf überschreiben kannst. Mehr zur Domänenkonfiguration im nächsten Beispiel.

#### 2. Eine Setup-Datei (`i18n_setup.php` wie oben), wählt das richtige Gebietsschemas und Konfiguration von Gettext aus.

{% highlight php %}
<?php
/**
 * Verifies if the given $locale is supported in the project
 * @param string $locale
 * @return bool
 */
function valid($locale) {
   return in_array($locale, ['en_US', 'en', 'pt_BR', 'pt', 'es_ES', 'es']);
}

//setting the source/default locale, for informational purposes
$lang = 'en_US';

if (isset($_GET['lang']) && valid($_GET['lang'])) {
    // the locale can be changed through the query-string
    $lang = $_GET['lang'];    //you should sanitize this!
    setcookie('lang', $lang); //it's stored in a cookie so it can be reused
} elseif (isset($_COOKIE['lang']) && valid($_COOKIE['lang'])) {
    // if the cookie is present instead, let's just keep it
    $lang = $_COOKIE['lang']; //you should sanitize this!
} elseif (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
    // default: look for the languages the browser says the user accepts
    $langs = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);
    array_walk($langs, function (&$lang) { $lang = strtr(strtok($lang, ';'), ['-' => '_']); });
    foreach ($langs as $browser_lang) {
        if (valid($browser_lang)) {
            $lang = $browser_lang;
            break;
        }
    }
}

// here we define the global system locale given the found language
putenv("LANG=$lang");

// this might be useful for date functions (LC_TIME) or money formatting (LC_MONETARY), for instance
setlocale(LC_ALL, $lang);

// this will make Gettext look for ../locales/<lang>/LC_MESSAGES/main.mo
bindtextdomain('main', '../locales');

// indicates in what encoding the file should be read
bind_textdomain_codeset('main', 'UTF-8');

// if your application has additional domains, as cited before, you should bind them here as well
bindtextdomain('forum', '../locales');
bind_textdomain_codeset('forum', 'UTF-8');

// here we indicate the default domain the gettext() calls will respond to
textdomain('main');

// this would look for the string in forum.mo instead of main.mo
// echo dgettext('forum', 'Welcome back!');
?>
{% endhighlight %}

#### 3. Übersetzung für den ersten Durchgang vorbereiten
Einer der großen Vorteile von Gettext gegenüber benutzerdefinierten Framework-i18n-Paketen ist sein umfangreiches und leistungsstarkes Dateiformat.
"Oh Mann, das ist ziemlich schwer zu verstehen und manuell zu bearbeiten - ein simples Array wäre echt leichter!" Mach' Dir keine Sorgen: Anwendungen wie [Poedit] helfen Dir dabei – und zwar sehr.
Du kannst das Programm von der [Website herunterladen][poedit_download]; es ist kostenlos und für alle Plattformen verfügbar.
Es ist ein recht einfach zu bedienendes und gleichzeitig sehr leistungsstarkes Tool, das alle Funktionen von Gettext nutzt. Diese Anleitung basiert auf PoEdit 1.8.

Wählen Sie im ersten Durchgang “File > New...” aus dem Menü. Du wirst direkt nach der Sprache gefragt: Hier kannst Du die gewünschte Sprache auswählen/filtern oder das oben erwähnte Format wie `en_US` oder `pt_BR` nutzen.

Speichere die Datei nun – in der ebenfalls beschriebenen Verzeichnisstruktur. Klicke anschließend auf “Extract from sources” und konfiguriere hier verschiedene Einstellungen für die Extraktions- und Übersetzungsaufgaben. Diese findest Du später unter “Catalog > Properties”:

- Quellpfade: Hier musst Du alle Ordner des Projekts angeben, in dem `gettext()` (und verwandte) aufgerufen werden. Dies sind normalerweise Deine Templates-/View-Ordner. Dies ist die einzige obligatorische Einstellung;

- Übersetzungseigenschaften:
    - Projektname und -version, Team und deren E-Mail-Adressen: Nützliche Informationen, die in den Header der .po-Datei aufgenommen werden;
    - Pluralformen: Hier sind die zuvor erwähnten Regeln – es gibt dort auch einen Link mit Beispielen. Du kannst meistens die Standardeinstellung beibehalten, da PoEdit bereits eine praktische Datenbank mit Pluralregeln für viele Sprachen enthält.
    - Charsets: vorzugsweise UTF-8;
    - Quellcode-Charset: Lege hier den von Deiner Codebasis verwendeten Zeichensatz fest – wahrscheinlich auch UTF-8, oder? :-)
- Quellschlüsselwörter: Die zugrunde liegende Software kennt `gettext()`-Funktionsaufrufe in verschiedenen Programmiersprachen, aber Du kannst auch eigene Übersetzungsfunktionen erstellen. Hier fügst Du die anderen Methoden hinzu. Dies wird später im Abschnitt "Tipps" erläutert.

Nachdem Sie diese Punkte festgelegt haben, durchsucht PoEdit Ihre Quelldateien nach allen Lokalisierungsaufrufen.
Nach jedem Scan zeigt PoEdit eine Zusammenfassung der gefundenen und entfernten Einträge an. Neue Einträge werden in die Übersetzungstabelle eingefügt, und Du fängst mit der Eingabe der lokalisierten Versionen der Strings an. Speichere die Datei, und eine .mo-Datei wird im selben Ordner (neu) kompiliert. Und schon ist Dein Projekt internationalisiert.

#### 4. Übersetzen von Strings
Wie Du vielleicht schon bemerkt hast, gibt es zwei Haupttypen lokalisierter Zeichenfolgen: Einfache und solche mit Pluralformen.
Erstere bestehen lediglich aus zwei Feldern: Quelle und lokalisierter String. Der Quellstring kann nicht geändert werden, da Gettext/Poedit keine Möglichkeit zur Änderung Deiner Quelldateien bietet.
Du musst die Quelle selbst ändern und die Dateien erneut scannen.
Tipp: Klicke mit der rechten Maustaste auf eine Übersetzungszeile, um Hinweise zu den Quelldateien und Zeilen zu erhalten, in denen dieser String verwendet wird.
Zeichenfolgen mit Pluralformen hingegen enthalten zwei Felder zur Anzeige der beiden Quellzeichenfolgen und Registerkarten zur Konfiguration der verschiedenen Endformen.

Wenn Du Deine Quellen ändern und die Übersetzungen aktualisieren musst, klicke einfach auf "Aktualisieren". Poedit scannt den Code erneut, entfernt nicht vorhandene Einträge, verbindet geänderte und fügt neue hinzu.
Es kann auch versuchen, einige Übersetzungen aufgrund Deiner anderen Übersetzungen zu erraten. Diese Versuche und die geänderten Einträge werden mit einem "Fuzzy"-Marker markiert, der auf eine Überprüfung hinweist und in der Liste goldgelb angezeigt wird.
Dies ist auch nützlich, wenn Du ein Übersetzungsteam hast und jemand versucht, etwas zu schreiben, bei dem er sich nicht sicher ist: Markiereie einfach "Fuzzy", und jemand anderes überprüft später.

Abschliessend empfehlen wir , "Ansicht > Nicht übersetzte Einträge zuerst" aktiviert zu lassen, da dies _sehr hilft_, keine Einträge zu vergessen.
Von diesem Menü aus kannst Du auch Teile der Benutzeroberfläche öffnen, in denen Du bei Bedarf Kontextinformationen für Übersetzer hinterlassen knnst.

### Tipps & Tricks

#### Mögliche Caching-Probleme
Wenn Du PHP als Modul auf Apache  (`mod_php`) ausführst, können Probleme mit dem caching der `.mo`-Datei auftreten. Dies geschieht beim ersten Lesen. Um die Datei zu aktualisieren, ist möglicherweise ein Serverneustart erforderlich. Unter Nginx und PHP5 genügen in der Regel ein paar Seitenaktualisierungen, um den Übersetzungscache zu aktualisieren. Unter PHP7 ist dies selten erforderlich.

#### Zusätzliche Hilfsfunktionen
Viele bevorzugen, da es einfacher zu verwenden ist, `_()` anstatt `gettext()`. Viele benutzerdefinierte i18n-Bibliotheken von Frameworks verwenden ebenfalls etwas Ähnliches wie `t()`, um übersetzten Code zu verkürzen.
Dies ist jedoch die einzige Funktion mit einer Verknüpfung. Du kannst Deinem Projekt weitere hinzufügen, z. B. `__()` oder `_n()` für `ngettext()`, oder vielleicht eine ausgefallene `_r()`-Funktion, die `gettext()` und `sprintf()` Aufrufe verbindet.
Andere Bibliotheken, wie z. B. [Gettext von php-gettext][php-gettext], bieten ebenfalls solche Hilfsfunktionen.

In diesen Fällen musst Du Gettext mitteilen, wie die Strings aus diesen neuen Funktionen extrahiert werden sollen. Keine Sorge, es ist ganz einfach.
Es handelt sich lediglich um ein Feld in der `.po`-Datei bzw. eine Einstellung in Poedit. Im Editor finden Sie diese Option unter "Katalog > Eigenschaften > Quellschlüsselwörter". Denken Sie daran: Gettext kennt bereits die Standardfunktionen für viele Sprachen. Sei also nicht beunruhigt, wenn die Liste leer erscheint. Du musst dort die Spezifikationen Deiner neuen Funktionen in einem [bestimmten Format][func_format] einfügen:

- wenn Du so etwas wie `t()` erstellst, gibt es einfach die Übersetzung für einen String zurück, die Du als `t` angeben kannst. Gettext weiß, dass das einzige Funktionsargument der zu übersetzende String ist.
- Wenn die Funktion mehr als ein Argument hat, kannst Du angeben, in welchem ​​Argument der erste String steht – und bei Bedarf ebenso die Pluralform.
Wenn wir unsere Funktion beispielsweise wie folgt aufrufen: `__('one user', '%d users', $number)`, wäre die Spezifikation `__:1,2`, was bedeutet, dass die erste Form das erste Argument und die zweite Form das zweite Argument ist.
Wenn Ihre Zahl stattdessen das erste Argument ist, wäre die Spezifikation `__:2,3`, was bedeutet, dass die erste Form das zweite Argument ist, und so weiter.

Nachdem Du diese neuen Regeln in die `.po`-Datei aufgenommen hast, werden Deine neuen Zeichenfolgen durch einen neuen Scan genauso einfach wie zuvor eingefügt.

### Verweise

* [Wikipedia: i18n and l10n](https://en.wikipedia.org/wiki/Internationalization_and_localization)
* [Wikipedia: Gettext](https://en.wikipedia.org/wiki/Gettext)
* [LingoHub: PHP internationalization with gettext tutorial][lingohub]
* [PHP Manual: Gettext](https://www.php.net/manual/book.gettext.php)
* [Gettext Manual][manual]

[Poedit]: https://poedit.net
[poedit_download]: https://poedit.net/download
[lingohub]: https://lingohub.com/blog/2013/07/php-internationalization-with-gettext-tutorial/
[lingohub_plurals]: https://lingohub.com/blog/2013/07/php-internationalization-with-gettext-tutorial/#Plurals
[plural]: https://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
[gettext]: https://en.wikipedia.org/wiki/Gettext
[manual]: https://www.gnu.org/software/gettext/manual/gettext.html
[639-1]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[3166-1]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[rare]: https://www.gnu.org/software/gettext/manual/gettext.html#Rare-Language-Codes
[func_format]: https://www.gnu.org/software/gettext/manual/gettext.html#Language-specific-options
[aura-intl]: https://github.com/auraphp/Aura.Intl
[php-gettext]: https://github.com/php-gettext/Gettext
[symfony]: https://symfony.com/components/Translation
[laminas]: https://docs.laminas.dev/laminas-i18n/
[laravel]: https://laravel.com/docs/master/localization
[yii]: https://www.yiiframework.com/doc/guide/2.0/en/tutorial-i18n
[intl]: https://www.php.net/manual/intro.intl.php
[ICU project]: https://icu.unicode.org/
[symfony-keys]: https://symfony.com/doc/current/translation.html#using-real-or-keyword-messages

[sprintf]: https://www.php.net/manual/function.sprintf.php
[func]: https://www.php.net/manual/function.gettext.php
[n_func]: https://www.php.net/manual/function.ngettext.php
[d_func]: https://www.php.net/manual/function.dgettext.php
[dn_func]: https://www.php.net/manual/function.dngettext.php
