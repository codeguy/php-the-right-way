---
isChild: true
title:   Abstraktionsebenen
anchor:  databases_abstraction_layers
---

## Abstraktionsebenen {#databases_abstraction_layers_title}

Viele Frameworks bieten eine eigene Abstraktionsschicht, die auf [PDO][1] aufsetzen kann, aber nicht muss.
Diese emulieren oft Funktionen für ein Datenbanksystem, die in einem anderen fehlen, indem sie Ihre Abfragen 
in PHP-Methoden einbetten und Dir so eine echte Datenbankabstraktion anstelle der von PDO bereitgestellten 
Verbindungsabstraktion bieten. Dies bedeutet natürlich einen gewissen Mehraufwand, aber wenn Du eine portable 
Anwendung erstellst, die sowohl mit MySQL, PostgreSQL und auch SQLite kompatibel sein muss, 
lohnt sich dieser Mehraufwand im Interesse der Code-Sauberkeit.

Einige Abstraktionsebenen wurden unter Verwendung der [PSR-0][psr0] bzw. [PSR-4][psr4] Namespace-Standards
erstellt und können daher in jeder beliebigen Anwendung installiert werden:

* [Atlas][5]
* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Medoo][8]
* [Propel][7]
* [laminas-db][4]


[1]: https://www.php.net/book.pdo
[2]: https://www.doctrine-project.org/projects/dbal.html
[4]: https://docs.laminas.dev/laminas-db/
[5]: https://atlasphp.io
[6]: https://github.com/auraphp/Aura.Sql
[7]: https://propelorm.org/
[8]: https://medoo.in/
[psr0]: https://www.php-fig.org/psr/psr-0/
[psr4]: https://www.php-fig.org/psr/psr-4/
