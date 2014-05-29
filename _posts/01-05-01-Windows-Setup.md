---
isChild: true
anchor: windows_setup
---

## Windows Setup {#windows_setup_title}

PHP je moguce instalirati na nekoliko nacina na Windows-u. Mozete [downloadom binarnog][php-downloads] i do skora
mogli ste koristiti '.msi' instaler ali on vise nije podrzan i stao je sa PHP 5.3.0.

Za ucenje kao i za lokalni razvoj mozete koristiti ugradjen web server (od verzije PHP 5.4+) tako da ne morate da
brinete o konfiguraciji (ukoliko nemate potrebe za dodatnim pormenama setup-a ili paketima). Ako bi ste pak zeleli
"all-in-one" paket koji ukljucuje ceo webserver i MySQL bazu podataka onda alati kao sto su
[Web Platform Installer][wpi], [Zend Server CE][zsce], [XAMPP][xampp], [EasyPHP][easyphp] i [WAMP][wamp] ce vam pomoci
da dobijete Windows development radno okruzenje brzo. To znaci da ce vam ovi alati biti malo drugaciji u podesavanju
od punog radnog okruzenja vase aplikacije, zato budi te na oprezu o razlicitosti okruzenja ukoliko je development
baziran na Windows a radno okruzenje aplikacije na Linux sistemu.

Ukoliko je potrebno da pokrenete vasu aplikaciju na Windows sistemu onda IIS7 ce vam dati najstabilniju i njabolju
performansu. Mozete koristiti [phpmanager][phpmanager] (a GUI plugin for IIS7) radi lakseg configurisanja i odrzavanja
PHP jednostavno. IIS7 dolazi sa FastCGI ugradjenim i spremnim, vi ga samo trebate u PHP-u ukljuciti. Za podrsku i
dodatne informacije i resurse postoji [dedicated area on iis.net][php-iis] za PHP.

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/en/products/server-ce/
[xampp]: http://www.apachefriends.org/en/xampp.html
[easyphp]: http://www.easyphp.org/
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
