---
title: Serveurs virtuels et dédiés
isChild: true
---

## Serveurs virtuels et dédiés {#serveurs_virtuels_et_dédiés_title}

Si vous vous sentez à l'aise avec l'administration des systèmes ou êtes intéressé pour en connaître plus sur ce domaine, 
les serveurs virtuels et dédiés vous donne un contrôle absolu sur l'environement de production de votre application.

### nginx et PHP-FPM

PHP via le gestionnaire de processus intégré FastCGI (FPM en anglais) s'accorde très bien avec [nginx](http://nginx.org) 
qui est un serveur web léger et hautement performant. Il utilise moins de mémoire qu'Apache et gère mieux les requêtes 
faites en parallèle. Cela est spécialement important pour les serveurs virtuels manquant de mémoire.


* [En savoir plus sur nginx](http://nginx.org)
* [En savoir plus sur PHP-FPM](http://php.net/manual/fr/install.fpm.php)
* [En savoir plus sur la configuration de nginx et PHP-FPM](https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/)

### Apache et PHP

PHP et Apache ont une longue histoire commune. Apache est très largement configurable et un très grand nombre de 
[modules](http://httpd.apache.org/docs/2.4/mod/) disponibles pour étendre ses fonctionnalités. C'est un choix populaire 
pour les serveurs mutualisés car il est très simple pour des frameworks PHP comme Wordpress de s'installer dessus. 
Malheureusement, Apache utilise plus de ressources que nginx par défaut et ne peut gérer qu'un nombre limité de clients 
à la fois.

Apache possède différentes configurations possibles pour faire tourner PHP. La plus commune et la plus facile est 
d'installer le [prefork MPM](http://httpd.apache.org/docs/2.4/mod/prefork.html) avec le module mod_php5. Bien qu'il ne 
soit pas le plus efficace en terme de gestion de la mémoire, il est le plus simple à lancer et utiliser. C'est 
probablement le meilleur choix si vous ne souhaitez pas vous plonger dans les aspects trop techniques de 
l'administration d'un serveur. Notez que si vous utilisez mod_php5, vous DEVEZ utiliser le prefork MPM.

Alternativement, si vous voulez profiter de plus de perfomances et de stabilité avec Apache alors vous pouvez tirer 
avantage à utiliser le même FPM que nginx et faire tourner le [worker MPM](http://httpd.apache.org/docs/2.4/mod/worker.html) 
ou l'[event MPM](http://httpd.apache.org/docs/2.4/mod/event.html) avec mod_fastcgi ou mod_fcgid. Cette configuration 
sera nettement meilleur en terme d'utilisation mémoire et plus rapide mais cela demandera plus de travail pour le 
mettre en place.

* [En savoir plus sur Apache](http://httpd.apache.org/)
* [En savoir plus sur les modules Multi-Processing](http://httpd.apache.org/docs/2.4/mod/mpm_common.html)
* [En savoir plus sur mod_fastcgi](http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html)
* [En savoir plus sur mod_fcgid](http://httpd.apache.org/mod_fcgid/)
