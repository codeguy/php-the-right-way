---
title: Filtrage des données
isChild: true
---

## Filtrage des données {#filtrage_des_données_title}

Une règle d'or: ne jamais faire confiance aux entrées extérieures dans votre code PHP. Prenez toujours soin à 
"nettoyer" et valider ces entrées avant de les utiliser dans le code. Les fonctions `filter_var` et `filter_input` 
peuvent nettoyer les entrées textuelles et valider les données comme les emails.

Les entrées étrangères viennent de n'importe où : les données de formulaire envoyés via `$_GET` ou `$_POST`, des valeurs 
dans la variable superglobales `$_SERVER` et le corps des requêtes HTTP via `fopen('php://input', 'r')`. N'oubliez pas, 
les entrées étrangères ne se limitent pas aux données envoyées par l'utilisateur. Les fichiers uploadés et téléchargés, 
les valeurs de session, les données des cookies et les données provenant de services tiers sont aussi des entrées 
étrangères.

Demandez-vous à chaque fois que vous traitez, affichez, concaténez ou incluez des données dans votre code si ces données 
ont été correctement filtrés et qu'elles peuvent être considérées comme sûr.

Les données peuvent être _filtrées_ différemment selon le contexte. Par exemple, quand des données brutes sont envoyées 
en sortie vers la page HTML, elles peuvent exécuter du Javascript et de l'HTML. Cette technique est connue sous le nom de 
"Cross-Site Scripting" (XSS) et peut se révéler très dangereux. Une façon d'éviter les attaques XSS est de nettoyer 
toutes les données générées par l'utilisateur avant de les afficher sur votre page en retirant toutes balises HTML avec 
la fonction `strip_tags` ou en échappant les caractères spéciaux tels que '<' ou '>' avec les fonctions `htmlentities` ou 
`htmlspecialchars`.

Un autre exemple est lorsque l'on passe des options à exécuter en ligne de commandes. Cela peut être très dangereux 
(et est souvent une mauvaise idée) mais vous pouvez utiliser la fonction `escapeshellarg` pour nettoyer les arguments 
d'une commande.

Un dernier exemple concerne le fait d'autoriser les entrées étrangères pour déterminer le fichier à télécharger depuis 
le système de fichiers. Cela peut être exploiter en changeant le chemin vers le fichier. Vous devez supprimez 
"/", "../", [les octets null][6] ou d'autres caractères du chemin de façon à empêcher le chargement de fichiers 
cachés, privés ou contenant des données sensibles.

* [En savoir plus sur le filtrage des données][1]
* [En savoir plus sur `filter_var`][4]
* [En savoir plus sur `filter_input`][5]
* [En savoir plus sur la gestion des octets null][6]

### Nettoyage

Le "nettoyage" supprime (ou échappe) les caractères illégaux ou considérés comme dangereux.

Par exemple, vous devriez nettoyer les entrées étrangères avant d'inclure les entrées en HTML ou de les insérer 
dans une requête SQL. Si vous utilisez les paramètres liés avec [PDO](#bases_de_données), il nettoyera les entrées pour 
vous.

Parfois il est nécessaire d'autoriser certains tags HTML dans les entrées quand on les incluent dans la page HTML. Cela 
se révèle souvent très compliqué à mettre en oeuvre et beaucoup l'évite, c'est pourquoi il existe des syntaxes de 
formattage telles que Markdown or BBCode bien que des bibliothèques comme [HTML Purifier][html-purifier] vous permettent 
d'intégrer directement de l'HTML.

[Voir les filtres de nettoyage][2]

### Validation

La validation s'assure que les entrées extérieures correspondent à ce que vous vous attendiez. Par exemple, vous 
pourriez vouloir valider une adresse email, un numéro de téléphone ou un âge lors du traitement de l'enregistrement 
d'un compte.

[Voir les filtres de validation][3]

[1]: http://www.php.net/manual/fr/book.filter.php
[2]: http://www.php.net/manual/fr/filter.filters.sanitize.php
[3]: http://www.php.net/manual/fr/filter.filters.validate.php
[4]: http://php.net/manual/fr/function.filter-var.php
[5]: http://www.php.net/manual/fr/function.filter-input.php
[6]: http://php.net/manual/fr/security.filesystem.nullbytes.php
[html-purifier]: http://htmlpurifier.org/
