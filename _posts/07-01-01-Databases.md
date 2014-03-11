---
title: Bases de données
---

# Bases de données {#base_de_données_title}

Votre code PHP va souvent faire appel aux base de données pour préserver l'information. Vous avez un certain nombre 
d'options pour vous connecter et interagir avec votre base de données. L'option recommandée _avant PHP 5.1.0_ était 
d'utiliser les pilotes natifs tels que [mysql][mysql], [mysqli][mysqli], [pgsql][pgsql], etc.

Les pilotes natifs sont géniaux si vous n'utilisez qu'un seul type de base de données dans votre application mais si, 
par exemple, vous utilisez MySQL et un peu de MSSQL ou vous avez besoin de vous connecter à une base Oracle alors vous 
ne pourrez utiliser les mêmes pilotes. Vous aurez besoin d'apprendre une nouvelle API pour chaque type de BDD &mdash; ce 
qui peut devenir lourd.

Une note supplémentaire sur les pilotes natifs: l'extension mysql pour PHP n'est plus activement développé et son statut 
officiel depuis PHP 5.4.0 est "dépréciation à long terme" ("Long term deprecation"). Cela signifie qu'il sera retiré 
d'ici quelques nouvelles moutures, il pourrait disparaître avec PHP 5.6 (ou tout ce qui viendrait après la 5.5). Si 
vous utilisez `mysql_connect()` et `mysql_query()` dans votre application alors vous serez obligé à un moment ou à un autre 
de faire de la refactorisation. La meilleure option est de prévoir sur votre planning le remplacement de l'utilisation 
de mysql par mysqli ou PDO afin d'anticiper ce problème. _Si vous venez de démarrer le développement d'une nouvelle 
application alors n'utilisez absolument pas l'extension mysql: utilisez plutôt l'[extension MySQLi][mysqli] ou PDO._

* [PHP: Choisir une API pour MySQL](http://php.net/manual/fr/mysqlinfo.api.choosing.php)

## PDO

Le PDO est une couche d'abstraction pour se connecter à une base de données &mdash; intégrée à PHP depuis la 5.1.0 &mdash; 
qui fournit une interface commune pour communiquer avec différentes base de données. Le PDO ne va pas traduire vos requêtes 
SQL ou émuler les fonctionnalités manquantes; il ne gère que la connexion entre différents types de base de données avec 
la même API.

Plus important encore, le `PDO` vous permet d'injecter en toute sécurité des entrées étrangères (par ex., les identifiants) 
dans vos requêtes SQL sans que vous ayez à vous soucier des attaques par injection SQL. Cela est rendu possible grâce à 
l'utilisation des fonctions de PDO et des paramètres liés.

Supposons qu'un script PHP reçoit un identifiant numérique en tant que paramètre d'entrée. Cet ID devrait être utiliser 
pour récupérer les enregistrements d'un utilisateur dans la base de données. Voici la mauvaise façon de s'y prendre:

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NON!
{% endhighlight %}

Ce code est mauvais. Vous insérez un paramètre en brut directement dans une requête SQL. C'est la porte ouverte pour 
le piratage. Imaginez un instant que si un pirate envoie un paramètre `id` en invoquant l'URL 
`http://domain.com/?id=1%3BDELETE+FROM+users`. Cela va définir la variable `$_GET['id']` à `1;DELETE FROM users` ce qui 
va effacer l'ensemble de vos utilisateurs! Au lieu de faire ça, vous devriez nettoyer les entrées en utilisant la liaison 
des paramètres avec PDO.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT); // <-- Nettoyé automatiquement par PDO
$stmt->execute();
{% endhighlight %}

Voici le code correct. Il utilise un paramètre lié à une expression PDO. Cela "échappe" les entrées étrangères avant 
qu'elles ne soient introduites à la base de données ce qui empêche les attaques potentielles d'injection SQL.

* [En savoir plus sur PDO][1]

Vous devriez savoir que les connexions à la base de données utilisent pas mal de ressources et il arrivait souvent 
que les ressources finissaient par tarir si les connexions n'étaient pas implicitement fermées, cependant c'était plus 
souvent le cas dans les autres langages. En utilisant PDO, vous pouvez  implicitement fermer la connexion en détruisant 
l'objet et en s'assurant que toutes les références à cet objet ont été supprimés, c'est-à-dire, mise à NULL. Si vous 
ne le faites pas explicitement, PHP va automatiquement fermé la connexion quand votre script s'arrêtera - à moins bien 
sûr que vous n'utilisiez une connexion persistante.

* [En savoir plus sur les connexions avec PDO][5]

## Couches d'abstractions

Beaucoup de frameworks fournissent leur propre couche d'abstraction qui peut être ou non basé sur PDO. Cette couche va 
souvent émuler les fonctionnalités d'une base de données qui seraient manquantes dans une autre base en enveloppant 
vos requêtes dans des méthodes PHP vous donnant ainsi une réelle abstraction avec la base de données.
Cela engendre évidemment un légèr surplus mais si vous voulez développez une application portable ayant besoin de 
communiquer avec MySQL, PostgreSQL et SQLite alors ce petit surplus en vaudra la peine par souci de propreté et de 
maintenance du code.

Plusieurs couches d'abstractions ont été construites en utilisant les standards d'espace de noms [PSR-0][psr0] ou 
[PSR-4][psr4]; ils peuvent donc être installé dans n'importe quelle application qui vous plaira:

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Propel][7]
* [ZF2 Db][4]
* [ZF1 Db][3]

[1]: http://www.php.net/manual/fr/book.pdo.php
[2]: http://www.doctrine-project.org/projects/dbal.html
[3]: http://framework.zend.com/manual/fr/zend.db.html
[4]: http://packages.zendframework.com/docs/latest/manual/fr/index.html#zend-db
[5]: http://php.net/manual/fr/pdo.connections.php
[6]: https://github.com/auraphp/Aura.Sql
[7]: http://propelorm.org/Propel/

[mysql]: http://php.net/mysql
[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr4]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md
