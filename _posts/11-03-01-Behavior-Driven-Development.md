---
isChild: true
anchor:  behavior_driven_development
---

## Behavior Driven Development (BDD) {#behavior_driven_development_title}

Es gibt zwei verschiedene Arten von BDD: SpecBDD und StoryBDD.
SpecBDD konzentriert sich auf das technische Verhalten des Codes, während StoryBDD sich auf das geschäftliche Verhalten oder die Interaktion von Funktionen konzentriert.
PHP bietet Frameworks für beide Arten von BDD.

Mit StoryBDD schreibst Du human-readable stories, die das Verhalten Deiner Anwendung beschreiben.
Diese Geschichten können dann als Tests mit Deinrer Anwendung ausgeführt werden.
Das in PHP-Anwendungen für StoryBDD verwendete Framework ist [Behat], welches von Ruby's [Cucumber]-Projekt inspiriert ist und die Gherkin-DSL zur Beschreibung des Funktionsverhaltens implementiert (DSL: Domain Specific Language).

Mit SpecBDD schreibst Du Spezifikationen, die beschreiben, wie sich Dein eigentlicher Code verhalten soll. 
Anstatt eine Funktion oder Methode zu testen, beschreibst Du, wie sich diese Funktion oder Methode verhalten soll. 
PHP bietet hierfür das [PHPSpec] - Framework. Dieses Framework ist vom [RSpec project][Rspec]  für Ruby inspiriert.

### Weiterführende BDD Links

* [Behat], the StoryBDD framework for PHP, inspired by Ruby's [Cucumber] project;
* [PHPSpec], the SpecBDD framework for PHP, inspired by Ruby's [RSpec] project;
* [Codeception] is a full-stack testing framework that uses BDD principles.


[Behat]: https://behat.org/
[Cucumber]: https://cucumber.io/
[PHPSpec]: https://phpspec.net/
[RSpec]: https://rspec.info/
[Codeception]: https://codeception.com/
