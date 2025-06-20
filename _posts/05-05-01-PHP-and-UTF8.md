---
title:   Working with UTF-8
isChild: true
anchor:  php_and_utf8
---

## Arbeiten mit UTF-8 {#php_and_utf8_title}

_Dieser Abschnitt wurde ursprünglich von [Alex Cabal](https://alexcabal.com/) für [PHP Best Practices](https://phpbestpractices.org/#utf-8) geschrieben und diente als Grundlage für unsere eigenen UTF-8-Empfehlungen_.

### Es gibt keinen Einzeiler. Seien Sie sorgfältig, detailliert und konsistent.

PHP unterstützt Unicode derzeit nicht auf niedriger Ebene. Es gibt Möglichkeiten, die korrekte Verarbeitung von UTF-8-Strings sicherzustellen,
aber das ist nicht einfach und erfordert die Auseinandersetzung mit fast allen Ebenen der Webanwendung, von HTML über SQL bis hin zu PHP.
Wir geben hier eine kurze, praktische Zusammenfassung.

### UTF-8 auf PHP-Ebene

Die grundlegenden String-Operationen, wie das Verketten zweier Strings und das Zuweisen von Strings zu Variablen, erfordern für UTF-8 keine besonderen Anforderungen.
Die meisten String-Funktionen, wie `strpos()` und `strlen()`, erfordern jedoch besondere Aufmerksamkeit. Diese Funktionen haben oft ein `mb_*` Gegenstück, beispielsweise `mb_strpos()` and `mb_strlen()`. Diese`mb_*`-Strings werden Dir über die [Multibyte String Extension] zur Verfügung gestellt und sind speziell für die Verarbeitung von Unicode-Strings konzipiert.

Du musst die `mb_*`-Funktionen immer dann verwenden, wenn Du mit einer Unicode-Zeichenfolge arbeitest. Wenn Du `substr()` auf eine UTF-8-Zeichenfolge anwendet,
besteht eine grosse Möglichkeit, dass das Ergebnis einige unleserliche Halbzeichen enthält. Die korrekte Funktion wäre das Multibyte-Gegenstück `mb_substr()`.

Das Schwierige ist, immer daran zu denken, die `mb_*`-Funktionen zu verwenden. Wenn Du es auch nur einmal vergisst, besteht die Gefahr, dass Deine Unicode-Zeichenfolge bei der weiteren Verarbeitung verstümmelt wird.

Nicht alle String-Funktionen haben ein `mb_*`-Gegenstück. Wenn es für Ihre Aufgabe keins gibt, haben Sie möglicherweise Pech gehabt.

Du solltest die`mb_internal_encoding()`-Funktion am Anfang jedes PHP-Skripts (oder am Anfang Ihres globalen Include-Skripts) verwenden und die `mb_http_output()`-Funktion direkt dahinter,
wenn Dein Skript an einen Browser ausgegeben wird. Die explizite Definition der Zeichenkettenkodierung in jedem Skript erspart Dir später viel Ärger.

Darüber hinaus verfügen viele PHP-Funktionen, die mit Zeichenfolgen arbeiten, über einen optionalen Parameter, mit dem Sie die Zeichenkodierung festlegen können.
Geben Sie bei dieser Option immer explizit UTF-8 an.
Beispielsweise bietet `htmlentities()` eine Option für die Zeichenkodierung, und Du solltest bei der Verarbeitung solcher Zeichenfolgen immer UTF-8 angeben. Beachte, dass ab PHP 5.4.0 UTF-8 die Standardkodierung für `htmlentities()` und `htmlspecialchars()`ist.

Abschießend, wenn Du eine verteilte Anwendung erstellst und nicht sicher bist, ob die `mbstring`-Erweiterung verwendbar ist, solltest Du das Composer-Paket [symfony/polyfill-mbstring] verwenden.
Dieses wird `mbstring` bei Verfügbarkeit verwenden und greift andernfalls auf Nicht-UTF-8-Funktionen zurück.

[Multibyte String Extension]: https://www.php.net/book.mbstring
[symfony/polyfill-mbstring]: https://packagist.org/packages/symfony/polyfill-mbstring

### UTF-8 auf Datenbankebene

Wenn Dein PHP-Skript auf MySQL zugreift, besteht die Möglichkeit, dass Deine Strings als Nicht-UTF-8-Strings in der Datenbank gespeichert werden, selbst wenn Sie alle oben genannten Vorsichtsmaßnahmen befolgen.

Um sicherzustellen, dass Dein Strings von PHP in UTF-8 an MySQL übertragen werden, stelle sicher, dass Ihre Datenbank und Tabellen auf den `utf8mb4` entsprechenden Zeichensatz und die entsprechende Sortierung eingestellt sind und dass Sie den `utf8mb4` Zeichensatz im PDO-Connection-String verwendest. Siehe untensthender Beispielcode. Das ist _äußerst wichtig_.

Beachte, dass Du für die vollständige UTF-8-Unterstützung den `utf8mb4`-Zeichensatz verwenden musst, nicht den `utf8`-Zeichensatz! Weitere Informationen findest Du im Abschnitt „Weitere Informationen“.

### UTF-8 auf Browserebene

Verwende die `mb_http_output()`-Funktion, um sicherzustellen, dass Dein PHP-Skript wirklich UTF-8-Zeichenfolgen an Deinen Browser ausgibt.

Der Browser muss dann durch die HTTP-Response informiert werden, dass diese Seite als UTF-8 betrachtet werden soll. Heutzutage ist es üblich, den Zeichensatz im HTTP-Response-Header wie folgt festzulegen:

{% highlight php %}
<?php
header('Content-Type: text/html; charset=UTF-8')
{% endhighlight %}

Der bisherige Ansatz hierfür bestand darin, das [charset `<meta>`-Tag](http://htmlpurifier.org/docs/enduser-utf8.html) in das `<head>`-Tag Ihrer Seite aufzunehmen.

{% highlight php %}
<?php
// Tell PHP that we're using UTF-8 strings until the end of the script
mb_internal_encoding('UTF-8');
$utf_set = ini_set('default_charset', 'utf-8');
if (!$utf_set) {
    throw new Exception('could not set default_charset to utf-8, please ensure it\'s set on your system!');
}

// Tell PHP that we'll be outputting UTF-8 to the browser
mb_http_output('UTF-8');
 
// Our UTF-8 test string
$string = 'Êl síla erin lû e-govaned vîn.';

// Transform the string in some way with a multibyte function
// Note how we cut the string at a non-Ascii character for demonstration purposes
$string = mb_substr($string, 0, 15);

// Connect to a database to store the transformed string
// See the PDO example in this document for more information
// Note the `charset=utf8mb4` in the Data Source Name (DSN)
$link = new PDO(
    'mysql:host=your-hostname;dbname=your-db;charset=utf8mb4',
    'your-username',
    'your-password',
    array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT => false
    )
);

// Store our transformed string as UTF-8 in our database
// Your DB and tables are in the utf8mb4 character set and collation, right?
$handle = $link->prepare('insert into ElvishSentences (Id, Body, Priority) values (default, :body, :priority)');
$handle->bindParam(':body', $string, PDO::PARAM_STR);
$priority = 45;
$handle->bindParam(':priority', $priority, PDO::PARAM_INT); // explicitly tell pdo to expect an int
$handle->execute();

// Retrieve the string we just stored to prove it was stored correctly
$handle = $link->prepare('select * from ElvishSentences where Id = :id');
$id = 7;
$handle->bindParam(':id', $id, PDO::PARAM_INT);
$handle->execute();

// Store the result into an object that we'll output later in our HTML
// This object won't kill your memory because it fetches the data Just-In-Time to
$result = $handle->fetchAll(\PDO::FETCH_OBJ);

// An example wrapper to allow you to escape data to html
function escape_to_html($dirty){
    echo htmlspecialchars($dirty, ENT_QUOTES, 'UTF-8');
}

header('Content-Type: text/html; charset=UTF-8'); // Unnecessary if your default_charset is set to utf-8 already
?><!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>UTF-8 test page</title>
    </head>
    <body>
        <?php
        foreach($result as $row){
            escape_to_html($row->Body);  // This should correctly output our transformed UTF-8 string to the browser
        }
        ?>
    </body>
</html>
{% endhighlight %}

### Weiterführende Literatur

* [PHP Manual: String Operations](https://www.php.net/language.operators.string)
* [PHP Manual: String Functions](https://www.php.net/ref.strings)
    * [`strpos()`](https://www.php.net/function.strpos)
    * [`strlen()`](https://www.php.net/function.strlen)
    * [`substr()`](https://www.php.net/function.substr)
* [PHP Manual: Multibyte String Functions](https://www.php.net/ref.mbstring)
    * [`mb_strpos()`](https://www.php.net/function.mb-strpos)
    * [`mb_strlen()`](https://www.php.net/function.mb-strlen)
    * [`mb_substr()`](https://www.php.net/function.mb-substr)
    * [`mb_internal_encoding()`](https://www.php.net/function.mb-internal-encoding)
    * [`mb_http_output()`](https://www.php.net/function.mb-http-output)
    * [`htmlentities()`](https://www.php.net/function.htmlentities)
    * [`htmlspecialchars()`](https://www.php.net/function.htmlspecialchars)
* [Stack Overflow: What factors make PHP Unicode-incompatible?](https://stackoverflow.com/questions/571694/what-factors-make-php-unicode-incompatible)
* [Stack Overflow: Best practices in PHP and MySQL with international strings](https://stackoverflow.com/questions/140728/best-practices-in-php-and-mysql-with-international-strings)
* [How to support full Unicode in MySQL databases](https://mathiasbynens.be/notes/mysql-utf8mb4)
* [Bringing Unicode to PHP with Portable UTF-8](https://www.sitepoint.com/bringing-unicode-to-php-with-portable-utf8/)
* [Stack Overflow: DOMDocument loadHTML does not encode UTF-8 correctly](https://stackoverflow.com/questions/8218230/php-domdocument-loadhtml-not-encoding-utf-8-correctly)
