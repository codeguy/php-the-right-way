---
title: Cache des objets
isChild: true
---

## Cache des objets {#cache_des_objets_title}

Il arrive parfois qu'il soit plus avantageux de mettre en cache des objets individuels dans votre code comme par 
exemple dans les cas où l'on souhaite récupérer le même résultat provenant d'une base de données. Vous pouvez utiliser 
des logiciels de cache objet pour maintenir ces bouts de données en mémoire pour un usage ultérieur. Si vous enregistrez 
ces éléments en mémoire après les avoir récupérer vous pouvez considérablement gagner en rapidité d'accès; de même 
qu'une réduction de l'utilisation de la base de données.

Beaucoup des solutions de cache du bytecode vous permettent de mettre aussi en cache les données; il y a donc encore 
plus d'avantages à les utiliser. APCu, XCache, et WinCache fournissent tous des APIs pour stocker les données de votre 
code PHP dans leur système de cache mémoire.

Les systèmes de cache objet les plus courants sont APCu and memcached. APCu est un excellent choix en ce qui concerne 
le cache objet, il inclut une API simple pour ajouter vos propres données dans son cache et est très facile à 
configurer. La seule vraie limitation d'APCu est qu'il est lié au serveur où il est installé. Memcached, d'un autre 
côté, s'installe de façon séparé en tant que service et peut être accédé depuis le réseau ce qui signifie que vous 
pouvez stocker les objets dans un unique endroit même s'ils proviennent de systèmes différents.

Notez que lorsque PHP s'exécute en tant qu'application (Fast)-CGI au sein de votre serveur, les processus PHP auront 
leur propre cache, c'est-à-dire que les données d'APCu ne seront pas partagées entre les différents processus. Dans ce 
cas, vous pourriez envisager d'utiliser memcached étant donné qu'il n'est pas lié aux processus PHP.

Dans une configuration réseau, APCu va généralement surpasser memcached en terme de rapidité d'accès mais memcached sera 
capable d'être "scalable" plus rapidement et de façon plus poussée. Si vous ne vous attendez pas à avoir plusieurs serveurs 
pour gérer votre application, ou si vous ne souhaitez pas utiliser les fonctionnalités spécifiques de memcached alors 
APCu est probablement votre meilleur choix pour le cache d'objets.

Exemple utilisant APCu:

{% highlight php %}
<?php
// vérifie si la variable 'expensive_data' existe dans le cache
$data = apc_fetch('expensive_data');
if ($data === false) {
    // la donnée n'est pas en cache; enregistrer le résultat de l'appel d'une fonction longue pour plus tard
    apc_add('expensive_data', $data = get_expensive_data());
}

print_r($data);
{% endhighlight %}

Remarque: Avant PHP 5.5, l'APC fournit à la fois un cache d'objet et un cache pour le bytecode. l'APCu est un projet 
visant à apporter le cache d'objet à PHP 5.5+ depuis que PHP a un cache de bytecode intégré (OPcache).

En savoir plus sur les systèmes de cache objets les plus connus:

* [APCu](https://github.com/krakjoe/apcu)
* [Fonctions APC](http://php.net/manual/fr/ref.apc.php)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [APIs XCache](http://xcache.lighttpd.net/wiki/XcacheApi)
* [Fonctions WinCache](http://www.php.net/manual/fr/ref.wincache.php)
