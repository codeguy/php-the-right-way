---
title: Interface en ligne de commande
isChild: true
---

## L'interface en ligne de commande {#Interface_en_ligne_de_commande_title}

Le PHP a été créé principalement pour écrire des applications web mais il peut être tout aussi utile pour écrire des 
programmes en ligne de commande (command line interface ou CLI en anglais). Ces programmes peuvent vous aider à 
automatiser les tâches les plus courantes comme les tests, le déploiement et l'administration du site.

Les programmes PHP CLI sont puissants car vous pouvez directement utiliser le code de votre application sans avoir à 
créer et à réaliser une interface web "sécurisé". Faites juste attention à ne pas mettre vos scripts PHP à la racine 
de votre répertoire web public.

Essayez de faire tourner PHP en ligne de commande:

{% highlight bash %}
> php -i
{% endhighlight %}

L'option `-i` va afficher votre configuration exactement comme la fonction [`phpinfo`][phpinfo].

L'option `-a` fournit un terminal interactif similaire aux terminaux ruby (IRB) et python. Il existe par ailleurs 
d'autres [options utiles][cli-options].

Écrivons un simple programme CLI "Hello, $nom". Pour faire ses essais, créez un fichier nommé `hello.php` et écrivez le 
code ci-dessous.

{% highlight php %}
<?php
if ($argc != 2) {
    echo "Usage: php hello.php [nom].\n";
    exit(1);
}
$nom = $argv[1];
echo "Hello, $nom\n";
{% endhighlight %}

Le PHP crée 2 variables spéciales basés sur les paramètres passés au script. La variable [`$argc`][argc] est un entier 
contenant le *nombre* et [`$argv`][argv] est un tableau contenant chacune des valeurs des paramètres. Le premier 
paramètre est toujours le nom du script PHP, dans notre cas `hello.php`.

L'expression `exit()` est utilisé avec un nombre différent de zéro pour dire au terminal que la commande a échoué. Les 
codes de sortie les plus communs se trouve [ici][exit-codes].

Pour exécuter le script ci-dessus depuis le terminal:

{% highlight bash %}
> php hello.php
Usage: php hello.php [nom]
> php hello.php world
Hello, world
{% endhighlight %}


 * [En savoir plus sur l'exécution de PHP en ligne de commande][php-cli]
 * [Comment mettre en place PHP en ligne de commande sur Windows][php-cli-windows]

[phpinfo]: http://php.net/manual/fr/function.phpinfo.php
[cli-options]: http://www.php.net/manual/fr/features.commandline.options.php
[argc]: http://php.net/manual/fr/reserved.variables.argc.php
[argv]: http://php.net/manual/fr/reserved.variables.argv.php
[php-cli]: http://php.net/manual/fr/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/fr/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
