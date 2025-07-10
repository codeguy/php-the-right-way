---
anchor: code_style_guide
---

# Code Style Guide {#code_style_guide_title}

Die PHP-Community ist groß und vielfältig und besteht aus unzähligen Bibliotheken, Frameworks und Komponenten. PHP-Entwickler wählen häufig mehrere davon aus und kombinieren sie in einem Projekt.
Es ist wichtig, dass der PHP-Code (so nah wie möglich) einem gemeinsamen Codestil folgt, damit Entwickler verschiedene Bibliotheken für ihre Projekte problemlos kombinieren können.

Die [Framework Interop Group][fig] hat eine Reihe von Stilempfehlungen vorgeschlagen und verabschiedet. Nicht alle beziehen sich auf den Codestil, aber [PSR-1][psr1], [PSR-12][psr12], [PSR-4][psr4] and [PER Coding Style][per-cs] machen es.
Diese Empfehlungen stellen lediglich eine Reihe von Regeln dar, die von vielen Projekten wie Drupal, Zend, Symfony, Laravel, CakePHP, phpBB, AWS SDK, FuelPHP, Lithium usw. übernommen werden.
Du kannst diese Empfehlungen für Deine eigenen Projekte verwenden oder Deinen persönlichen Stil beibehalten.

Idealerweise schreibst Du PHP-Code, der einem bekannten Standard entspricht. Dies kann eine beliebige Kombination von PSRs oder einer der Codierungsstandards von PEAR oder Zend sein.
So können andere Entwickler Ihren Code problemlos lesen und bearbeiten, und Anwendungen, die die Komponenten implementieren, gewährleisten Konsistenz auch bei der Verwendung von viel Drittanbieter-Code.

* [lies über PSR-1][psr1]
* [lies  über  PSR-12][psr12]
* [lies über  PSR-4][psr4]
* [lies über  PER Coding Style][per-cs]
* [lies über  PEAR Coding Standards][pear-cs]
* [lies über  Symfony Coding Standards][symfony-cs]

Du kannst [PHP_CodeSniffer][phpcs] verwenden, um Code anhand einer dieser Empfehlungen zu überprüfen, und Plugins für Texteditoren wie Sublime Text, um Feedback in Echtzeit zu erhalten.

Du kannst das Code-Layout automatisch korrigieren, indem Du eines der folgenden Tools verwendest:

- Einer davon ist der  [PHP Coding Standards Fixer][phpcsfixer], der über eine sehr gut getestete Codebasis verfügt.
- Außerdem kannst Du Deinen Code mit dem in PHP-CodeSniffer enthaltenen Tool [PHP Code Beautifier and Fixer][phpcbf] entsprechend anpassen.
- 
Und Du kannst `phpcs` manuell von der Shell aus ausführen:

    phpcs -sw --standard=PSR1 file.php

Es werden Fehler angezeigt und deren Behebung beschrieben.
Es kann auch hilfreich sein, den `phpcs` Befehl in einen Git-Pre-Commit-Hook mit dem `--filter=GitStaged` CLI-Argument einzubinden.
So kann Code, der gegen den gewählten Standard verstößt, erst dann in das Repository gelangen, wenn diese Verstöße behoben wurden.

Wenn Du über PHP_CodeSniffer verfügst, kannst Du die von ihm gemeldeten Code-Layoutprobleme automatisch mit dem [PHP Code Beautifier and Fixer][phpcbf] beheben.

    phpcbf -w --standard=PSR1 file.php

Alternativ kannst Du den [PHP Coding Standards Fixer][phpcsfixer] verwenden.
Dieser zeigt Dir, welche Fehler die Codestruktur vor der Behebung aufwies.

    php-cs-fixer fix -v --rules=@PSR1 file.php

Für alle Symbolnamen und die Code-Infrastruktur wird Englisch bevorzugt. Kommentare können in jeder Sprache verfasst werden, die für alle aktuellen und zukünftigen Beteiligten, die an der Codebasis arbeiten, leicht verständlich ist.

Eine gute ergänzende Ressource zum Schreiben von sauberem PHP-Code ist [Clean Code PHP][cleancode].

[fig]: https://www.php-fig.org/
[psr1]: https://www.php-fig.org/psr/psr-1/
[psr12]: https://www.php-fig.org/psr/psr-12/
[psr4]: https://www.php-fig.org/psr/psr-4/
[per-cs]: https://www.php-fig.org/per/coding-style/
[pear-cs]: https://pear.php.net/manual/en/standards.php
[symfony-cs]: https://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: https://github.com/PHPCSStandards/PHP_CodeSniffer
[phpcbf]: https://github.com/PHPCSStandards/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: https://cs.symfony.com/
[cleancode]: https://github.com/jupeter/clean-code-php
