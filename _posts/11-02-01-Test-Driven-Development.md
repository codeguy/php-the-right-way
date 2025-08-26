---
isChild: true
anchor:  test_driven_development
---

## Test Driven Development {#test_driven_development_title}

Aus [Wikipedia (dt.)](https://de.wikipedia.org/wiki/Testgetriebene_Entwicklung):

> Testgetriebene Entwicklung (auch testgesteuerte Programmierung; englisch test first development oder test-driven development, TDD) ist eine Methode, die häufig bei der agilen Entwicklung von Computerprogrammen eingesetzt wird.
> Bei der testgetriebenen Entwicklung erstellt der Programmierer Softwaretests konsequent vor den zu testenden Komponenten.
> Kent Beck, der als Entwickler bzw. „Wiederentdecker“ dieser Technik gilt, erklärte 2003, dass TDD einfache Designs fördert und Vertrauen schafft.

Es gibt verschiedene Arten von Tests, die Du für Deine Anwendung durchführen kannst:

### Unit Testing (Komponententests)

Unit-Tests sind ein Programmieransatz, der sicherstellt, dass Funktionen, Klassen und Methoden vom Zeitpunkt der Erstellung bis zum Ende des Entwicklungszyklus wie erwartet funktionieren.
Durch die Überprüfung entgegengenommenre bzw. ausgegebener Werte verschiedener Funktionen und Methoden stellst Du sicher, dass die interne Logik korrekt funktioniert.
Mithilfe von Dependency Injection und der Erstellung von „Mock“-Klassen und Stubs kannst Du die korrekte Verwendung von Abhängigkeiten überprüfen und so eine noch bessere Testabdeckung erzielen.

Beim Erstellen einer Klasse oder Funktion solltest Du für jedes erforderliche Verhalten einen Unit-Test erstellen.
Stelle grundsätzlich sicher, dass bei ungültigen Argumenten Fehler auftreten und bei gültigen Argumenten die Funktion gewährleistet ist.
So stellst Du sicher, dass bei späteren Änderungen an dieser Klasse oder Funktion die alte Funktionalität weiterhin wie erwartet funktioniert. 
Die einzige Alternative hierzu wäre `var_dump()` in einer test.php, was jedoch keine Möglichkeit darstellt, eine Anwendung zu erstellen – egal ob groß oder klein.

Ein weiterer Nutzen von Unit-Tests ist die Mitarbeit an Open Source. 
Wenn Du einen Test schreibst, der fehlerhafte Funktionalität zeigt (z. B. scheitert),
diesen dann behebst und nachweisen kannst, dass der Test erfolgreich war, ist die Wahrscheinlichkeit,
dass Patches akzeptiert werden, deutlich höher. Wenn Du ein Projekt betreibst, das Pull Requests akzeptiert, solltest Du dies als Voraussetzung vorschlagen.

[PHPUnit](https://phpunit.de/) ist das De-facto-Testframework zum Schreiben von Unit-Tests für PHP-Anwendungen. 
Es gibt jedoch mehrere Alternativen:

* [atoum](https://github.com/atoum/atoum)
* [Kahlan](https://github.com/kahlan/kahlan)
* [Peridot](https://peridot-php.github.io/)
* [Pest](https://pestphp.com/)
* [SimpleTest](https://github.com/simpletest/simpletest)

### Integration Testing (Integrationstests)

Aus [Wikipedia](https://de.wikipedia.org/wiki/Integrationstest):

> Der Begriff Integrationstest bezeichnet in der Softwareentwicklung eine aufeinander abgestimmte Reihe von Einzeltests, die dazu dienen, verschiedene voneinander abhängige Komponenten eines komplexen Systems im Zusammenspiel miteinander zu testen.
> Die erstmals im gemeinsamen Kontext zu testenden Komponenten haben im Idealfall jeweilige Modultests erfolgreich bestanden und sind für sich isoliert fehlerfrei funktionsfähig.

Viele der gleichen Tools, die für Unit-Tests verwendet werden können, können auch für Integrationstests verwendet werden, weil viele gleiche Prinzipien verwendet werden.

### Functional Testing (Funktionstests)

Funktionstests, auch als Abnahmetests bezeichnet, bestehen aus der Verwendung von Tools zur Erstellung automatisierter Tests, 
die Deine Anwendung tatsächlich nutzen, anstatt nur zu überprüfen, ob einzelne Codeeinheiten korrekt funktionieren und miteinander kommunizieren können.
Diese Tools arbeiten in der Regel mit realen Daten und simulieren tatsächliche Benutzer der Anwendung.

#### Functional Testing Tools

* [Codeception](https://codeception.com/) ist ein Full-Stack-Testframework, das Akzeptanztesttools umfasst
* [Cyress](https://www.cypress.io/)
* [Mink](https://mink.behat.org/)
* [Selenium](https://www.selenium.dev/)
* [Storyplayer](https://github.com/MeltwaterArchive/storyplayer) ist ein Full-Stack-Testframework, das die Erstellung und Zerstörung von Testumgebungen nach Bedarf unterstützt.
