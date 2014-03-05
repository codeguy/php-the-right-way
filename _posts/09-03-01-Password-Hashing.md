---
title: Hachage de mots de passe
isChild: true
---

## Hachage de mots de passe {#hachage_de_mots_de_passe_title}

Pratiquement tout le monde construit une application PHP qui se base sur une authentification de l'utilisateur. Les 
identifiants et les mots de passe sont stockés dans une base de données et utiliser plus tard pour authentifier les 
utilisateurs.

Il est important que vous utilisiez correctement les fonctions de [hachage][3] avant de les stocker. Le hachage de 
mot de passe est une opération irréversible produisant une chaîne de caractères de longueur fixe. Cela signifie que 
vous pouvez comparer le produit d'une fonction de hachage avec le hash stocké en base de données pour déterminer s'il 
s'agit du même texte. Si les mots de passe stockés en base de données ne sont pas "hachés" alors n'importe qui ayant 
accès à cette base peut compromettre les comptes utilisateurs. Il arrive souvent que les utilisateurs utilisent le 
même mot de passe pour d'autres services, c'est pourquoi il faut prendre la sécurité des informations avec sérieux.

**Hachage de mot de passe avec `password_hash`**

La fonction `password_hash` a été introduise avec la version 5.5 de PHP. À l'heure actuelle, elle utilise BCrypt qui est 
l'algorithme le plus robuste. Cela va être mise à jour dans le futur afin de supporter plus d'algorithmes. La 
bibliothèque `password_compat` a été crée afin de fournir une compatibilité ascendante avec PHP >= 5.3.7.

Dans l'exemple ci-dessous, nous hachons une chaîne de caractères et faisons une vérification sur une chaîne différente. 
Étant donné que les 2 chaînes sont différentes ('secret-password' vs. 'bad-password'), l'authentification va échoué.

{% highlight php %}
<?php
                      
require 'password.php';

$passwordHash = password_hash('secret-password', PASSWORD_DEFAULT);

if (password_verify('bad-password', $passwordHash)) {
    // Mot de passe correct
} else {
    // Mauvais mot de passe
}
{% endhighlight %}  



* [En savoir plus sur `password_hash`] [1]
* [`password_compat` pour PHP  >= 5.3.7 && < 5.5] [2]
* [En savoir plus sur les fonctions de hachage (cryptographie)] [3]
* [PHP `password_hash` RFC] [4]

[1]: http://us2.php.net/manual/fr/function.password-hash.php
[2]: https://github.com/ircmaxell/password_compat
[3]: http://fr.wikipedia.org/wiki/Fonction_de_hachage_cryptographique
[4]: https://wiki.php.net/rfc/password_hash
