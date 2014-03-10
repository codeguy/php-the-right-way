---
title: Rapport des erreurs
isChild: true
---

## Rapport d'erreurs {#rapport_des_erreurs_title}

La journalisation des erreurs peut être utile pour repérer les points qui posent problème dans votre application mais 
cela permet aussi d'afficher des informations sur la structure de votre application au monde extérieur. Pour vous 
protéger efficacement contre ce genre de problèmes, vous avez besoin de configurer votre serveur différemment entre 
la version de développement et celle pour la production.

### Développement

Pour afficher toutes les erreurs possible durant le <strong>dévelopement</strong>, configurer les paramètres suivants 
dans votre fichier `php.ini`:

    display_errors = On
    display_startup_errors = On
    error_reporting = -1
    log_errors = On

> En passant la valeur `-1`, toutes les erreurs possibles seront affichées, même lors de l'ajout d'autres niveaux et 
> constantes dans les futures versions de PHP. La constante E_ALL fonctionne de la même façon depuis PHP 5.4. - 
> [php.net](http://php.net/manual/function.error-reporting.php)

Le niveau d'erreur `E_STRICT` a été introduit avec PHP 5.3.0 et ne fait pas parti de `E_ALL`, cependant il est 
dorénavant inclu dans `E_ALL` depuis la 5.4.0. Pour pouvoir rapporter toutes les erreurs en 5.3, il est donc nécessaire 
d'utiliser soit `-1` ou `E_ALL | E_STRICT`. 

**Rapporter toutes les erreurs possibles par version PHP**

* &lt; 5.3 `-1` ou `E_ALL`
* &nbsp; 5.3 `-1` ou `E_ALL | E_STRICT`
* &gt; 5.3 `-1` ou `E_ALL`

### Production

Pour cacher l'affichage d'erreurs dans votre environnement de <strong>production</strong>, configurer votre fichier 
`php.ini` de cette façon:

    display_errors = Off
    display_startup_errors = Off
    error_reporting = E_ALL
    log_errors = On

Avec ces paramètres, les erreurs seront toujours enregistrées dans les journaux d'erreurs de votre serveur web mais ne 
seront pas afficher à l'utilisateur. Pour plus d'informations sur ces paramètres, voir le manuel PHP:

* [error_reporting](http://php.net/manual/errorfunc.configuration.php#ini.error-reporting)
* [display_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-errors)
* [display_startup_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-startup-errors)
* [log_errors](http://php.net/manual/errorfunc.configuration.php#ini.log-errors)
