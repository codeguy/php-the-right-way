---
title: Composer et Packagist 
isChild: true
---

## Composer et Packagist {#composer_et_packagist_title}

Composer un **excellent** gestionnaire de dépendances pour PHP. Listez les dépendances de votre projet dans un fichier 
`composer.json` et en quelques commandes, Composer va automatiquement télécharger ces dépendances et les installer pour 
vous.

Il existe déjà un grand nombre de bibliothèques PHP compatibles avec Composer, prêtes à être utiliser par votre projet. 
Ces "paquets" sont listés sur [Packagist][1], le répertoire officiel pour les bibliothèques compatibles avec Composer.

### Comment installer Composer

Vous pouvez installer Composer localement (dans votre répertoire de travail courant; bien que cela ne soit plus 
recommandé) ou globalement (par ex., /usr/local/bin). Supposons que vous vouliez installer Composer localement. 
Depuis la racine de votre projet, tapez :

    curl -s https://getcomposer.org/installer | php

Cela va télécharger `composer.phar` qui est une archive PHP binaire. Vous pouvez le lancer avec `php` pour gérer vos 
dépendances. <strong>Attention : </strong> Si vous redirigez du code téléchargé directement dans un interpréteur, 
veuillez d'abord lire le code en ligne pour confirmer qu'il est sûr.

### Comment installer Composer (manuellement)

Installer manuellement Composer est une technique avancée; Cependant, ils existent diverses raisons pour lesquelles un 
développeur aurait besoin de le faire. L'installation interactive va vérifier que la version installée:

- contient une version suffisamment récente pour être utilisable
- peut exécuter correctement des fichiers `.phar`
- a des permissions suffisantes sur certaines répertoires
- possède des extensions problématiques qui ne seront alors pas chargées
- a les bonnes configurations au niveau du fichier `php.ini` 

Étant donné qu'une installation manuelle n'effectue aucune de ces vérifications, vous devrez décider vous-même 
du meilleur compromis à faire. Voici comment obtenir Composer manuellement :

    curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
    chmod +x $HOME/local/bin/composer

Le chemin `$HOME/local/bin` (ou le répertoire de votre choix) doit être dans la variable d'environement `$PATH`. Ainsi, 
la commande `composer` peut être accessible de partout.

Quand vous tombez sur de la documentation qui indique de lancer Composer avec `php composer.phar install`, vous pouvez 
substituer cette commande avec:

    composer install
  
La section suivante assume le fait que vous avez installé composer "globlalement".  

### Comment définir et installer les dépendances

Composer garde la trace des dépendances de votre projet dans un fichier nommé `composer.json`. Vous pouvez le maintenir 
vous même à la main ou utiliser Composer. La commande `composer require` ajoute une dépendance à votre projet et, si 
vous n'avez pas de fichier `composer.json`, va le créer. Voici un exemple qui ajoute [Twig][2] en tant que dépendance 
pour votre projet:

	composer require twig/twig:~1.8

Alternativement, la commande `composer init` va vous guider à travers la création du fichier `composer.json`. De toute 
manière, une fois que ce fichier est créé, vous pouvez indiquer à Composer de télécharger et d'installer vos dépendances 
dans le répertoire `vendors/`. Cela s'applique aussi aux projets que vous avez téléchargé et qui possèdent déjà un 
fichier `composer.json`:

    composer install

Ensuite, ajoutez cette ligne dans le fichier PHP principal de votre application; cela va dire à PHP d'utiliser 
l'auto-chargeur de Composer pour les dépendances de votre projet:

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Maintenant si vous utiliser les bibliothèques dont votre projet est dépendant, elles seront chargées à la demande.

### Mettre à jour vos dépendances

Composer crée un fichier appelé `composer.lock` qui stocke la version exacte de chaque paquets qui a été téléchargé 
quand vous avez exécuté pour la première fois `php composer.phar install`. Si vous partagez votre projet avec 
d'autres développeurs et que le fichier `composer.lock` y est inclu alors ils auront les mêmes versions que vous. Pour 
mettre à jour ces dépendances, exécuter `php composer.phar update`.

Cela est très pratique quand vous définissez les versions requises de façon flexible. Par exemple, une version exigée de 
~1.8 signifie "tout ce qui est plus récent que 1.8.0 mais inférieur à 2.0.x-dev". Vous pouvez aussi utiliser le joker `*` 
comme par exemple `1.8.*`. À partir de là, la commande `php composer.phar update` va mettre à jour vos dépendances à 
la dernière version en suivant les restrictions demandées.

### Notifications de mise à jour

Pour recevoir les notifications de nouvelles versions vous pouvez vous enregistrer sur [VersionEye][3] qui est un 
service web qui surveille vos fichiers `composer.json` sur vos comptes Github et BitBucket  et vous envoie des emails 
avec les nouvelles versions.

### Vérifier vos dépendances pour des raisons de sécurité

Le [Security Advisories Checker][4] est un service web et un outil en ligne de commande qui va examiner votre fichier 
`composer.lock` et vous dire si vous avez besoin d'une mise à jour sur chacune de vos dépendances.

* [En savoir plus sur Composer][5]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: https://www.versioneye.com/
[4]: https://security.sensiolabs.org/
[5]: http://getcomposer.org/doc/00-intro.md

