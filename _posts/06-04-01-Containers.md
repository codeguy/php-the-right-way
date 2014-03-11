---
title: Conteneurs
isChild: true
---

## Composants {#conteneurs_title}

La première chose que vous devriez comprendre sur les composants d'injection de dépendances est qu'il ne s'agit pas de 
la même chose que l'injection de dépendances. Un composant est moyen pratique d'implémenter l'injection de dépendances, 
cependant, ils peuvent être souvent mal utilisés et devenir un anti-pattern. Injecter un composant ID en tant que 
localisateur de services à l'intérieur de vos classes crée sans aucun doute une dépendance plus forte que la dépendance 
que vous remplacez. Cela rend aussi votre code moins transparent et finalement plus dur à tester.

La plupart des frameworks modernes ont leur propres composants d'injection de dépendances qui permettent de brancher 
vos dépendances ensemble à travers un fichier de configuration. Cela signifie en pratique que vous écrivez du code métier 
aussi propre et découplé que le framework sur lequel vous vous basez.
