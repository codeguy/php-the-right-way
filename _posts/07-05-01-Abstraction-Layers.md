---
isChild: true
title:   추상화 레이어
anchor:  databases_abstraction_layers
---

## 추상화 레이어 {#databases_abstraction_layers_title}

많은 프레임워크들은 각자 자신만의 추상화 레이어를 가지고 있는데, [PDO][1]를 기반으로 사용하고 있는 것들도 있고, 그렇지
않은 것들도 있습니다. 어떤 프레임워크들은 PHP 메소드를 이용해서 쿼리를 하도록 하여, 특정 데이터베이스에는 존재하지
않는 기능을 에뮬레이션 해주는 등의 역할까지 하는 등 완전한 데이터베이스 추상화를 제공합니다. 물론 추상화라는 게 어느
정도의 오버헤드가 있기는 하지만, MySQL, PostgreSQL, SQLite 등의 여러 데이터베이스를 선택적으로 사용할 수 있는 유연한
어플리케이션을 만들기로 했다면 그 정도의 오버헤드는 코드의 간결함과 유지보수성을 위해서라면 문제가 되지 않는 수준일 것입니다.

몇몇 추상화 레이어는 [PSR-0][psr0]나 [PSR-4][psr4] 네임스페이스 표준에 따르고 있기 때문에 어느 어플리케이션에도
자유롭게 설치하여 사용할 수 있습니다.

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Propel][7]
* [Zend-db][4]


[1]: https://secure.php.net/book.pdo
[2]: https://www.doctrine-project.org/projects/dbal.html
[4]: https://packages.zendframework.com/docs/latest/manual/en/index.html#zendframework/zend-db
[6]: https://github.com/auraphp/Aura.Sql
[7]: http://propelorm.org/
[psr0]: https://www.php-fig.org/psr/psr-0/
[psr4]: https://www.php-fig.org/psr/psr-4/
