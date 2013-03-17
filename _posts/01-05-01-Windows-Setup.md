---
isChild: true
---

## Windows podešavanje {#windows_setup_title}

PHP je na raspolaganju na nekoliko načina u Windows-u. Možete [skinuti binarne verzije](php-downloads) i do skoro ste mogli da koristite '.msi' 
instaler. Instaler se više ne podržava i prestaje sa verzijom PHP 5.3.0.

U svrhe učenja i razvoja u lokalu možete da koristite ugrađeni web server uz PHP 5.4 tako da nema potrebe da se brinete oko njegovog konfigurisanja. Ako biste želeli sveobuhvatno rešenje koje obuhvata webserver i MySQL onda će vam alati kao što su [Web Platform Installer][wpi], 
[Zend Server CE][zsce], [XAMPP][xampp] i [WAMP][wamp] pomoći da brzo podignete i pokrenete Windows razvojno okruženje. Ovi alati će se donekle razlikovati od produkcije, tako da morate paziti na razlike u  okruženju ako radite na Windowsu a razvijate na Linuxu.

Ako vam je potrebno da produkcioni sistem pokrećete na Windowsu, onda će vam IIS7 pružiti najstabilnije i najbolje performanse. Možete da koristite [phpmanager][phpmanager] (GUI plugin za IIS7) da biste pojednostavili konfigurisanje i upravljanje PHP-a. IIS7 dolazi uz FastCGI koji je ugrađen i spreman za rad, samo morate podesiti PHP kao handler. Za podršku i dodatne informacije tu je [namenski prostor na iis.net][php-iis] za PHP.

U principu, pokretanje vaše aplikacije u različitim okruženjima pri razvoju i pri produkciji može dovesti do pojave čudnih bagova koji se pojave kad objavite sajt. Ako razvijate na Windows-u a objavljujete na Linuxu (ili bilo čemu što nije Windows) onda bi trebalo da razmotrite opciju korišćenja virtuelne mašine. Ovo zvuči komplikovano, ali korišćenjem [Vagrant-a][vagrant] možete podesiti jednostavne wrappers, a onda korišćenjem [Puppet-a][puppet] ili [Chef][chef] you can provision these boxes i da ih podeite sa svojim kolegama da biste obezbedili da svi radite na istom stack. Više o ovome uskoro.

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/en/products/server-ce/
[xampp]: http://www.apachefriends.org/en/xampp.html
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
