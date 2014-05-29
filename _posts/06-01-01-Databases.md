---
title: Baze podataka
---

# Baze podataka {#databases_title}

Vaš kod će često koristiti bazu podataka da sačuva informacije. Imate nekoliko opcija za povezivanje i ineterakcijom sa vašom bazom. Preporučena opcija _do PHP 5.1.0_ verzije je bila da se koriste lokalni drajveri kao što su [mysql][mysql], [mysqli][mysqli], [pgsql][pgsql] itd.

Matični drajveri su odlični ako koristite samo jednu bazu podataka u vašoj aplikaciji, ali ako npr. koristite MySQL i malo MSSQL, ili morate da se povežete na _Oracle_ bazu, onda nećete moći da koristite iste drajvere. Moraćete da naučite novi API za svaku bazu posebno.

Kao dodatna napomena vezana za matične drajvere, mysql ekstenzija za PHP više nije u aktivnom razvoju, i zvanični status od PHP verzije 5.4.0 je "_Long term deprecation_". To znači da će biti odstranjena u nekom od narednih izdanja, tako da do verzije 5.6 (ili koja god da dođe posle 5.5), će biti izbačena. Ako koristite `mysql_connect()` i `mysql_query()` funkcije u vašoj aplikaciji, moraćete da je ispravite u jednom trenutku u budućnosti. Tako da vam je najbolja opcija da zamenite mysql grupu funkcija sa mysqli ili PDO. 

_Ako sada počinjete sa novom aplikacijom onda nikako nemojte koristiti mysql ektenziju: koristite PDO, ili [MySQLi ekstenziju][mysqli]_ .

* [PHP: biranje API-ja za MySQL](http://php.net/manual/en/mysqlinfo.api.choosing.php)

## PDO

PDO je biblioteka koja apstrakuje različite baza podataka. Dolazi uz PHP od verzije 5.1.0, pruža zajednički interfejs za komunikaciju sa više različitih baza podataka. PDO neće prevoditi vaše SQL upite ili simulirati nedostajuće opcije. Služi isključivo za povezivanje sa bazama koristeći isti API.

Još važnije, `PDO` vam omogućava da bezbedno ubrizgate strani upis (npr. ID-jeve) u vaše SQL upite bez da brinete o "_SQL injection_" napadima. To je moguće uz upotrebu PDO iskaza i vezanih parametara.

Pretpostavimo da PHP skripta primi numerički ID kao _query_ parametar. Taj ID treba biti iskorišćen za uzimanje podataka o korisniku iz baze podataka. Ovo je `pogrešan` način:

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

Ovo je užasan kod. Vi ovde ubacujete svež parametar u SQL upit. To je skroz nebezbedno, i dovelo bi do hakovanja vaše aplikacije veoma brzo. Samo zamislite kada bi haker pozvao sledeći URL gde ID ne bi bio brojčana vrednost. `http://domain.com/?id=1%3BDELETE+FROM+users`. To bi dalo `$_GET['id']` promenljivoj vrednost `1;DELETE FROM users`, a to znači da bi time obrisao sve korisnike iz tabele u bazi. Umesto toga morate da sanirate ID vrednost tako što ćete koristiti PDO vezane parametre.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$stmt->bindParam(':id', $_GET['id'], PDO::PARAM_INT); //<-- Automatically sanitized by PDO
$stmt->execute();
{% endhighlight %}

To je tačan kod. Koristi vezane parametre u PDO iskazu. To obezbeđuje strani unos ID vrednosti pre nego što dođe do baze podataka i time sprečava potencijalne "SQL injection" napade.

* [Naučite o PDO-u][1]

Trebalo bi da budete i svesniji da konekcije sa bazom koriste resurse, i da nije nečuveno da su resursi iscrpljeni ako se konekcije nisu zatvorile. Mada ovo se češće dešavalo u drugim jezicima. Korišćenjem PDO-a možete implicitno zatvoriti konekciju sa bazom tako što ćete uništiti PDO objekat, tj setovati ga na NULL. Ako to ne uradite eksplicitno, PHP će to uraditi automatski kada se vaša skripta završi - osim ako naravno ne koristite stalnu konekciju.


* [Naučite o PDO konekcijama][5]

## Slojevi apstrakcije

Mnogi _framework_-ovi pružaju svoje apstrakcione slojeve koji mogui, ali ne moraju da budu nadograđene na PDO. Ti slojevi će često emulirati opcije jedne baze koja druga baza nema, tako što će omotati vaše upite svojim metodama, time vam dajući pravu apstrakciju baze podataka. Ovo će naravno dodati pritisak na performanse, ali ako pravite portabilnu aplikaciju koja mora da radi sa više baza, onda taj gubitak performansi će vredeti zarad preglednosti koda.

Neki slojevi apstrakcije su pravljeni pridržavajući se PSR-0 standarda imenskih prostora, tako da mogu biti dodati u svaku aplikaciju u koju želite:

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
