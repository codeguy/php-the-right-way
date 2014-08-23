---
isChild: true
title: Windows podešavanje
anchor: windows_setup
---

## Windows podešavanje {#windows_setup_title}

PHP je na raspolaganju na nekoliko načina u Windows-u. Možete [preuzeti binarne verzije](php-downloads) i do skoro ste
mogli da koristite '.msi' instaler. Instaler više nije podržan i prestaje sa verzijom PHP 5.3.0.

U svrhe učenja i razvoja u lokalu možete da koristite ugrađeni web server uz PHP 5.4+ tako da nema potrebe da se brinete
oko njegovog konfigurisanja. Ako biste želeli sveobuhvatno rešenje koje obuhvata webserver i MySQL onda će vam alati kao
što su [Web Platform Installer][wpi], [Zend Server CE][zsce], [XAMPP][xampp] i [WAMP][wamp] pomoći da brzo podignete i
pokrenete Windows razvojno okruženje. Ovi alati će se donekle razlikovati od produkcije, tako da morate paziti na
razlike u okruženju ako radite na Windows-u a razvijate na Linux-u.

Ako vam je potrebno da produkcioni sistem pokrećete na Windows-u, onda će vam IIS7 pružiti najstabilnije i najbolje
performanse. Možete da koristite [phpmanager][phpmanager] (GUI plugin za IIS7) da biste pojednostavili konfigurisanje i
upravljanje PHP-a. IIS7 dolazi sa ugrađenim FastCGI-om spremnim za rad, samo morate podesiti PHP kao handler. Za
podršku i dodatne informacije tu je [namenski prostor na iis.net][php-iis] za PHP.

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/en/products/server-ce/
[xampp]: http://www.apachefriends.org/en/xampp.html
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
