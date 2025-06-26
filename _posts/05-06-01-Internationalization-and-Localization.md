---
title:   Internationalization and Localization
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

#### Types of files
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
As you might have noticed, we are using as source ID the actual sentence in English. That `msgid` is the same used
throughout all your `.po` files, meaning other languages will have the same format and the same `msgid` fields but
translated `msgstr` lines.

Talking about translation keys, there are two main "schools" here:

1. _`msgid` as a real sentence_.
    The main advantages are:
    - if there are pieces of the software untranslated in any given language, the key displayed will still maintain some
    meaning. Example: if you happen to translate by heart from English to Spanish but need help to translate to French,
    you might publish the new page with missing French sentences, and parts of the website would be displayed in English
    instead;
    - it is much easier for the translator to understand what's going on and do a proper translation based on the
    `msgid`;
    - it gives you "free" l10n for one language - the source one;
    - The only disadvantage: if you need to change the actual text, you would need to replace the same `msgid`
    across several language files.

2. _`msgid` as a unique, structured key_.
It would describe the sentence role in the application in a structured way, including the template or part where the
string is located instead of its content.
    - it is a great way to have the code organized, separating the text content from the template logic.
    - however, that could bring problems to the translator that would miss the context. A source language file would be
    needed as a basis for other translations. Example: the developer would ideally have an `en.po` file, that
    translators would read to understand what to write in `fr.po` for instance.
    - missing translations would display meaningless keys on screen (`top_menu.welcome` instead of `Hello there, User!`
    on the said untranslated French page). That is good it as would force translation to be complete before publishing -
    however, bad as translation issues would be remarkably awful in the interface. Some libraries, though, include an
    option to specify a given language as "fallback", having a similar behavior as the other approach.

The [Gettext manual][manual] favors the first approach as, in general, it is easier for translators and users in
case of trouble. That is how we will be working here as well. However, the [Symfony documentation][symfony-keys] favors
keyword-based translation, to allow for independent changes of all translations without affecting templates as well.

### Everyday usage
In a typical application, you would use some Gettext functions while writing static text in your pages. Those sentences
would then appear in `.po` files, get translated, compiled into `.mo` files and then, used by Gettext when rendering
the actual interface. Given that, let's tie together what we have discussed so far in a step-by-step example:

#### 1. A sample template file, including some different gettext calls
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

- [`gettext()`][func] simply translates a `msgid` into its corresponding `msgstr` for a given language. There's also
the shorthand function `_()` that works the same way;
- [`ngettext()`][n_func] does the same but with plural rules;
- There are also [`dgettext()`][d_func] and [`dngettext()`][dn_func], that allow you to override the domain for a single
call. More on domain configuration in the next example.

#### 2. A sample setup file (`i18n_setup.php` as used above), selecting the correct locale and configuring Gettext
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

#### 3. Preparing translation for the first run
One of the great advantages Gettext has over custom framework i18n packages is its extensive and powerful file format.
"Oh man, that’s quite hard to understand and edit by hand, a simple array would be easier!" Make no mistake,
applications like [Poedit] are here to help - _a lot_. You can get the program from [their website][poedit_download],
it’s free and available for all platforms. It’s a pretty easy tool to get used to, and a very powerful one at the same
time - using all features Gettext has available. This guide is based on PoEdit 1.8.

In the first run, you should select “File > New...” from the menu. You’ll be asked straight ahead for the language:
here you can select/filter the language you want to translate to, or use that format we mentioned before, such as
`en_US` or `pt_BR`.

Now, save the file - using that directory structure we mentioned as well. Then you should click “Extract from sources”,
and here you’ll configure various settings for the extraction and translation tasks. You’ll be able to find all those
later through “Catalog > Properties”:

- Source paths: here you must include all folders from the project where `gettext()` (and siblings) are called - this
is usually your templates/views folder(s). This is the only mandatory setting;
- Translation properties:
    - Project name and version, Team and Team’s email address: useful information that goes in the .po file header;
    - Plural forms: here go those rules we mentioned before - there’s a link in there with samples as well. You can
    leave it with the default option most of the time, as PoEdit already includes a handy database of plural rules for
    many languages.
    - Charsets: UTF-8, preferably;
    - Source code charset: set here the charset used by your codebase - probably UTF-8 as well, right?
- Source keywords: The underlying software knows how `gettext()` and similar function calls look like in several
programming languages, but you might as well create your own translation functions. It will be here you’ll add those
other methods. This will be discussed later in the “Tips” section.

After setting those points it will run a scan through your source files to find all the localization calls. After every
scan PoEdit will display a summary of what was found and what was removed from the source files. New entries will fed
empty into the translation table, and you’ll start typing in the localized versions of those strings. Save it and a .mo
file will be (re)compiled into the same folder and ta-dah: your project is internationalized.

#### 4. Translating strings
As you may have noticed before, there are two main types of localized strings: simple ones and those with plural
forms. The first ones have simply two boxes: source and localized string. The source string cannot be modified as
Gettext/Poedit do not include the powers to alter your source files - you should change the source itself and rescan
the files. Tip: you may right-click a translation line and it will hint you with the source files and lines where that
string is being used.
On the other hand, plural form strings include two boxes to show the two source strings, and tabs so you can configure
the different final forms.

Whenever you change your sources and need to update the translations, just hit Refresh and Poedit will rescan the code,
removing non-existent entries, merging the ones that changed and adding new ones. It may also try to guess some
translations, based on other ones you did. Those guesses and the changed entries will receive a "Fuzzy" marker,
indicating it needs review, appearing golden in the list. It is also useful if you have a translation team and someone
tries to write something they are not sure about: just mark Fuzzy, and someone else will review later.

Finally, it is advised to leave "View > Untranslated entries first" marked, as it will help you _a lot_ to not forget
any entry. From that menu, you can also open parts of the UI that allow you to leave contextual information for
translators if needed.

### Tips & Tricks

#### Possible caching issues
If you are running PHP as a module on Apache (`mod_php`), you might face issues with the `.mo` file being cached. It
happens the first time it is read, and then, to update it, you might need to restart the server. On Nginx and PHP5 it
usually takes only a couple of page refreshes to refresh the translation cache, and on PHP7 it is rarely needed.

#### Additional helper functions
As preferred by many people, it is easier to use `_()` instead of `gettext()`. Many custom i18n libraries from
frameworks use something similar to `t()` as well, to make translated code shorter. However, that is the only function
that sports a shortcut. You might want to add in your project some others, such as `__()` or `_n()` for `ngettext()`,
or maybe a fancy `_r()` that would join `gettext()` and `sprintf()` calls. Other libraries, such as
[php-gettext's Gettext][php-gettext] also provide helper functions like these.

In those cases, you'll need to instruct the Gettext utility on how to extract the strings from those new functions.
Don't be afraid; it is very easy. It is just a field in the `.po` file, or a Settings screen on Poedit. In the editor,
that option is inside "Catalog > Properties > Source keywords". Remember: Gettext already knows the default functions
for many languages, so don’t be afraid if that list seems empty. You need to include there the specifications of those
new functions, following [a specific format][func_format]:

- if you create something like `t()` that simply returns the translation for a string, you can specify it as `t`.
Gettext will know the only function argument is the string to be translated;
- if the function has more than one argument, you can specify in which one the first string is - and if needed, the
plural form as well. For instance, if we call our function like this: `__('one user', '%d users', $number)`, the
specification would be `__:1,2`, meaning the first form is the first argument, and the second form is the second
argument. If your number comes as the first argument instead, the spec would be `__:2,3`, indicating the first form is
the second argument, and so on.

After including those new rules in the `.po` file, a new scan will bring in your new strings just as easy as before.

### References

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
