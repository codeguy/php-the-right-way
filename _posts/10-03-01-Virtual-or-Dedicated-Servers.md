---
title: Virtuelni ili namenski serveri
isChild: true
---

## Virtuelni ili namenski serveri {#virtual_or_dedicated_servers_title}

Ako ste vam ne smeta administracija sistema, ili ste zainteresovani da to naučite, virtuelni ili namenski serveri vam daju totalnu kontrolu nad vašim produkcionim okruženjem.

### nginx i PHP-FPM

PHP, preko svog ugrađenog FastCGI proces menadžera (FPM), veoma lepo radi u paru sa [nginx](http://nginx.org). Nginx lagan, _web_ server, jakih performansi. Koristi manje memorije od _apache_-a i može bolje da barata sa više konkurentnih zahteva. Ovo je posebno važno na virtuelnim serverima, koji nemaju memorije na pretek.

* [Pročitajte više o on nginx-u](http://nginx.org)
* [Pročitajte više o PHP-FPM](http://php.net/manual/en/install.fpm.php)
* [Pročitajte više o bezbednom podešavanju nginx i PHP-FPM](https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/)

### Apache i PHP

PHP i apache imaju dugu istoriju zajedno. Apache je veoma podesiv i ima mnogo dostupnih [modula](http://httpd.apache.org/docs/2.4/mod/) za proširavanje funkcionalnosti. On je popularan izbor za deljene servere i na njemu se lako se pokreću razni PHP programi, kao i aplikacije otvorenog koda., kao npr. _Wordpress_. Nažalost, apache koristi više resursa od nginx-a i ne može da prihvati isti broj konkurentnih zahteva u isto vreme.

Apache ima nekoliko mogućih konfiguracija za pokretanje PHP-a. Najčešći i najlakši način da se namesti je sa [prefork MPM](http://httpd.apache.org/docs/2.4/mod/prefork.html) i PHP modulom mod_php5. Mada nije najbolji po pitanju zauzeća memorije, najlakši je za podešavanje i korišćenje. Ovo je verovatno najbolji izbor ako ne želite da se bavite administracijom servera. Napomena: ako koristite mod_php5 modul, onda MORATE da koristite prefork MPM.

Alternativno, ako želite da istisnete još performansi i dobijete veću stabilnost iz Apache-a, onda možete iskoristiti isti FPM sistem kao i nginx, sa [worker MPM](http://httpd.apache.org/docs/2.4/mod/worker.html), ili [event MPM](http://httpd.apache.org/docs/2.4/mod/event.html) sa mod_fastcgi, ili mod_fcgid modulom. Ova konfiguracija će biti malo bolja po pitanju potrošnje memorije, i mnogo brža, ali zahteva više vremena da se podesi.

* [Pročitajte više o Apache-u](http://httpd.apache.org/)
* [Pročitajte više o Multi-Processing modulima](http://httpd.apache.org/docs/2.4/mod/mpm_common.html)
* [Pročitajte više o mod_fastcgi](http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html)
* [Pročitajte više o mod_fcgid](http://httpd.apache.org/mod_fcgid/)
