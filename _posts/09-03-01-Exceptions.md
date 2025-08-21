---
title:   Exceptions (Ausnahmen)
isChild: true
anchor:  exceptions
---

## Exceptions (Ausnahmen) {#exceptions_title}

Ausnahmen sind ein Standardbestandteil der meisten gängigen Programmiersprachen, werden von PHP-Programmierern jedoch oft übersehen. 
Sprachen wie Ruby enthalten extrem viele Ausnahmen. Wenn also etwas schiefgeht, z. B. eine fehlgeschlagene HTTP-Anfrage, eine fehlerhafte DB-Abfrage oder sogar ein nicht gefundenes Bild-Asset, wird von Ruby (oder den verwendeten [Gem]s) eine Ausnahme auf dem Bildschirm ausgegeben, sodass Sie sofort wissen, dass ein Fehler vorliegt.

PHP selbst ist diesbezüglich recht nachlässig, und ein Aufruf von `file_get_contents()` führt in der Regel nur zu einem `FALSE` und einer Warnung.
Viele ältere PHP-Frameworks wie CodeIgniter geben lediglich ein "false" zurück, protokollieren eine Meldung in ihren proprietären Protokollen und ermöglichen Dir möglicherweise die Verwendung einer Methode wie, `$this->upload->get_error()` um zu sehen, was schiefgelaufen ist. 
Das Problem hierbei ist, dass Du nach einem Fehler suchen und die Dokumentation überprüfen musst, um die Fehlermethode für diese Klasse zu ermitteln, anstatt sie deutlich sichtbar zu machen.

Ein weiteres Problem ist, wenn Klassen automatisch einen Fehler ausgeben und den Prozess beenden.
Dadurch wird verhindert, dass andere Entwickler diesen Fehler dynamisch behandeln können. 
Exceptions sollten ausgelöst werden, um einen Entwickler auf einen Fehler aufmerksam zu machen.
Dieser kann dann entscheiden, wie er damit umgeht.
Beispiel:

{% highlight php %}
<?php
$email = new Fuel\Email;
$email->subject('My Subject');
$email->body('How the heck are you?');
$email->to('guy@example.com', 'Some Guy');

try
{
    $email->send();
}
catch(Fuel\Email\ValidationFailedException $e)
{
    // The validation failed
}
catch(Fuel\Email\SendingFailedException $e)
{
    // The driver could not send the email
}
finally
{
    // Executed regardless of whether an exception has been thrown, and before normal execution resumes
}
{% endhighlight %}

### Standard PHP Library (SPL) Exceptions

Die generische  `Exception`-Klasse bietet dem Entwickler nur sehr wenig Debugging-Kontext. 
Um dies zu beheben, kann jedoch durch Unterklassenbildung der generischen `Exception`-Klasse ein spezialisierter `Exception`-Typ erstellt werden:

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

Dies bedeutet, dass Du mehrere Catch-Blöcke hinzufügen und verschiedene Exceptions unterschiedlich behandeln kannst.
Dies kann zur Erstellung <em>vieler</em> benutzerdefinierter Ausnahmen führen, von denen einige mithilfe der in der [SPL-Erweiterung][splext] bereitgestellten SPL-Ausnahmen hätten vermieden werden können .

Wenn Du beispielsweise die Magic-Method `__call()` verwendest und eine ungültige Methode angefordert wird,
kannst Du einfach – anstatt eine vage Standard-Exception auszulösen oder eine benutzerdefinierte Exception nur hierfür zu erstellen – könntest Du einfach `throw new BadMethodCallException;`.



* [Mehr über Exceptions][exceptions]
* [Mehr über SPL Exceptions][splexe]
* [Nesting (verschachteln) Exceptions In PHP][nesting-exceptions-in-php]


[splext]: /#standard_php_library
[exceptions]: https://www.php.net/language.exceptions
[splexe]: https://www.php.net/spl.exceptions
[nesting-exceptions-in-php]: https://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
[Gem]: https://de.wikipedia.org/wiki/RubyGems#Name
