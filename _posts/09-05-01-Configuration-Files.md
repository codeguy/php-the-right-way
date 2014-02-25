---
title: Fichiers de configuration
isChild: true
---

## Fichiers de configuration {#fichiers_de_configuration_title}

Lorsque vous créez des fichiers de configuration pour vos applications, les meilleurs pratiques recommandent que 
les méthodes ci-dessous soient suivies :

- Il est recommandé que vous stockiez vos informations de configuration là où aucun utilisateur non autorisé ne peut y 
accéder (via le système de fichier).
- Si vous devez stocker vos fichiers de configuration à la racine du projet, nommer les fichiers avec l'extension `.php`. 
Cela permet de s'assurer que même si le fichier est accédé directement il ne s'affichera pas en texte brut.
- Les informations contenues dans les fichiers de configuration doivent être protégées correctement, que ce soit via le 
chiffrage et/ou via le système de permissions des utilisateurs/groupes du système de fichiers.
