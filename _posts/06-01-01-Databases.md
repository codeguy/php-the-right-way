---
title: Databases
---

# Baze podataka {#databases_title}

Često će vaš PHP kod koristiti bazu podataka za čuvanje informacija. Na raspolaganju vam je nekoliko opcija za 
povezivanje i interakciju sa bazom. Preporučena opcija _do verzije PHP 5.1.0_ je bila korišćenje native drivers kao što 
su [mysql][mysql], [mysqli][mysqli], [pgsql][pgsql], itd.

Native drivers su sjajni ako koristite samo JEDNU bazu u aplikaciji, ali ako, na primer, koristite MySQL i malo MSSQL, 
ili vam je potrebno da se povežete sa Oracle bazom, onda nećete moći da koristite iste drajvere. Moraćete da naučite 
potpuno nov API za svaku bazu podataka &mdash; a to je prilično apsurdno.

Kao dodatna napomena u vezi native drivers, mysql ekstenzija za PHP više nije u aktivnom razvoju, a zvanični status od 
verzije PHP 5.4.0 je "Dugoročna zastarelost". To znači da će biti uklonjena u narednih nekoliko verzija, tako da će do 
verzije PHP 5.6 (ili šta god bude usledilo posle 5.5) verovatno biti uklonjena. AKo koristite `mysql_connect()` i 
`mysql_query()` u aplikacijama onda ćete u nekom momentu biti prinuđeni da prepravite kod, tako da je najbolja opcija da
zamenite korišćenje mysql sa mysqli ili PDO u vašim aplikacijama u skladu sa sopstvenim tempom razvoja da ne biste 
morali posle da žurite. _Ako počinjete od početka onda apsolutno nemojte koristiti mysql ekstenziju: koristite 
[MySQLi ekstenziju][mysqli], ili PDO._

* [PHP: Biranje API-ja za MySQL](http://php.net/manual/en/mysqlinfo.api.choosing.php)

## PDO

PDO je biblioteka za apstrakciju povezivanja sa bazom podataka &mdash; nalazi se u sklopu instalacije od verzije PHP 
5.1.0 &mdash; to obezbeđuje zajednički interfejs za komunikaciju sa puno različitih baza podataka. PDO neće prevesti vaše
SQL upite ili imitirati nedostajuće opcije; služi samo za povezivanje sa različitim tipovima baza pomoću istog API-ja.

Još značajnije, `PDO` omogućava da bezbedno ubacite input iz stranog izvora (npr ID) u vaš SQL upit bez bojazni od SQL 
injection napada. Ovo je moguće korišćenjem PDO naredbi i vezanih parametara.

Pretpostavimo da PHP skripta prima numerički ID kao parametar upita. Ovaj ID se koristi da vrati korisnički podatak iz 
baze. Ovo je `pogrešan` način da se to uradi:

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

Ovo je katastrofalan kod. Ubacujete sirov parametar upita u SQL upit. To će dovesti do toga da ćete biti hakovani u 
sekundi. Samo zamislite da haker prosledi inventivan `id` parametar pozivanjem URL-a kao što je 
`http://domain.com/?id=1%3BDELETE+FROM+users`. Ovo će podesiti promenljivu `$_GET['id']` na `1;DELETE FROM users` što će
obrisati sve vaše korisnike! Umesto toga, trebalo bi da sanirate ID input korišćenjem PDO vezanih parametara.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT); //<-- Automatically sanitized by PDO
$stmt->execute();
{% endhighlight %}

Ovo je ispravan kod. On koristi vezani parametar u PDO naredbi. Time se izbegava input stranog ID-ja pre nego što se 
unese u bazu, čime se sprečava potencijalni SQL injection napad.

* [Naučite o PDO][1]

Trebalo bi takođe da budete svesni da konekcija na bazu troši resurse i da se dešavalo da se resursi istroše jer 
konekcije na bazu nisu bile zatvorene, ali ovo se ipak češće dešavalo u drugim jezicima. Korišćenjem PDO možete 
implicitno uništiti konekciju uništavanjem objekta, tako što ćete obezbediti da se izbrišu sve preostale reference na 
njega, tj podese na NULL. Ako ovo ne uradite eksplicitno, PHP će automatski zatvoriti konekciju kada se skripta izvrši 
osim naravno u slučaju korišćenja trajnih konekcija.

* [Naučite o PDO konekcijama][5]

## Apstraktni lejeri

Mnogi frejmvorkovi nude svoj apstraktni lejer koji može a ne mora da se nalazi na vrhu PDO. Oni najčešće emuliraju 
osobine za jedan sistem baza podataka koje nedostaju drugom tako što obmotaju upite u PHP metode, i tako nam daju privid
date baze. Ovo će naravno dodati i malo overheada, ali ako pravite portabilnu aplikaciju i potrebno je da radi sa MySQL,
PostgreSQL i SQLite onda malo overheada vredi u korist čistote koda.

Neki apstraktni lejeri su napravljeni korišćenjem PSR-0 namespace standarda tako da mogu da se instaliraju u bilo koju 
aplikaciju po želji:

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [ZF2 Db][4]
* [ZF1 Db][3]

[1]: http://www.php.net/manual/en/book.pdo.php
[2]: http://www.doctrine-project.org/projects/dbal.html
[3]: http://framework.zend.com/manual/en/zend.db.html
[4]: http://packages.zendframework.com/docs/latest/manual/en/index.html#zend-db
[5]: http://php.net/manual/en/pdo.connections.php
[6]: https://github.com/auraphp/Aura.Sql

[mysql]: http://php.net/mysql
[mysqli]: http://php.net/mysqli
[pgsql]: http://php.net/pgsql
