---
isChild: true
---

## Virtual or Dedicated Servers {#virtual_or_dedicated_servers_title}

Ako ste upućeni u administraciju sistema ili želite da je naučite, virtuelni ili dedicated serveri daju potpunu
kontrolu nad produkcionim okruženjem Vaše aplikacije.

### nginx i PHP-FPM

PHP, preko ugrađenih PHP-ovih FastCGI Proces Menadžera (FPM) je lepo uparen sa [nginx](http://nginx.org), laganim web 
serverom visokih performansi. Koristi manje memorije od Apača i bolje rukuje sa više istovremenih zahteva. Ovo je naročito važno na virtuelnim serverima koji nemaju mnogo memorije za trošenje.

* [Pročitajte više o nginx](http://nginx.org)
* [Pročitajte više o PHP-FPM](http://php.net/manual/en/install.fpm.php)
* [Pročitajte više o bezbednom podešavanju nginx and PHP-FPM](https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/)

### Apač i PHP

PHP i Apač imaju dugu zajedničku istoriju. Apač je izuzetno konfigurabilan i ima mnogo dostupnih [modula](http://httpd.apache.org/docs/2.4/mod/) za proširenje funkcionalnosti. To je popularan izbor na deljenim serverima koji se lako podešava za PHP framework-e i aplikacije otvorenog koda kao što je WordPress. Nažalost, Apač koristi više resursa nego što ih koristi nginx po default-u i ne može da rukuje sa toliko posetilaca istovremeno.

Apač ima nekoliko mogućih konfiguracija za pokretanje PHP-a. Najčešći i najlakši za podešavanje je [prefork MPM](http://httpd.apache.org/docs/2.4/mod/prefork.html) sa mod_php5. Iako nije najdelotvorniji, to je najjednostavniji način za rad i korišćenje. Ovo je verovatno najbolji izbor ukoliko ne želite da se previše upuštate u aspekte serverske administracije. Imajte na umu da ako koristite mod_php5 MORATE koristiti prefork MPM.

Alternativno, ukoliko želite da iz Apača izvučete bolje performanse i stabilnost, možete koristiti prednost istog FPM sistema kao nginx i pokrenuti [worker MPM](http://httpd.apache.org/docs/2.4/mod/worker.html) ili [event MPM](http://httpd.apache.org/docs/2.4/mod/event.html) sa mod_fastcgi ili mod_fcgid. Ova konfiguracija je po pitanju korišćenja memorije značajno efikasnija i mnogo brža, ali zahteva i više posla oko podešavanja.

* [Pročitajte više o Apache](http://httpd.apache.org/)
* [Pročitajte više o Multi-Processing Modules](http://httpd.apache.org/docs/2.4/mod/mpm_common.html)
* [Pročitajte više o mod_fastcgi](http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html)
* [Pročitajte više o mod_fcgid](http://httpd.apache.org/mod_fcgid/)
