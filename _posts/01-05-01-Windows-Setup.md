---
title: Instalacija na Windows-u
isChild: true
---

## Instalacija na Windows-u {#windows_setup_title}

PHP je moguće instalirati na nekoliko načina na _Windows-u_. Možete [skinuti binarni paket][php-downloads] i do skoro 
ste mogli da iskoristite ".msi" instaler. Instaler nije podržan od PHP verzije 5.3.0.

Za učenje i lokalni razvoj možete koristiti ugrađen _web_ server koji dolazi uz PHP verzije 5.4+, tako da ne morate da 
brinute o podešavanju istog. Ako bi ste više želeli "sve u jednom" rešenje, koje uključuje pun _web_ server i MySQL 
bazu podataka, onda alati kao što su [_Web Platform Installer_][wpi], [_Zend Server CE_][zsce], [XAMPP][xampp] i 
[WAMP][wamp], vam mogu pomoći da namestite PHP development okruženje na _windows_-u veoma brzo. Obratite pažnju na to da 
će postojati neke razlike između alata u različitim okruženjima, tj. ako razvijate na _windows_-u, a aplikaciju 
pokrećete na _linux_-u.

Ako treba da pokrenete vaš produkcioni sistem na _windows_-u, onda će vam IIS7 dati najstabilnije i najbolje 
performanse. Možete iskoristiti [phpmanager][phpmanager] (GUI plugin za IIS7) da uprostite konfigurisanje i upravljanje
PHP-om jednostavno. IIS7 dolazi sa ugrađenim FastCGI, morate jedino da podesite PHP kao _handler_. Za podršku i dodatne 
informacije postoji [odeljak na iis.net sajtu][php-iis] posvećen PHP-u.


[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/en/products/server-ce/
[xampp]: http://www.apachefriends.org/en/xampp.html
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
