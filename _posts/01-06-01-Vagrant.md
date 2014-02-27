---
isChild: true
---

## Vagrant {#vagrant_title}

Faire tourner vos applications sur différents environnements en développement et en production peut vous amener à 
rencontrer d'étranges bugs lorsque vous passez le code en production. Par ailleurs, il est difficile de maintenir 
différents environnements à jour avec les mêmes versions pour l'ensemble des bibliothèques utilisées lorsque vous 
travailler en équipe.

Si vous développez sur Windows et que vous déployez votre code sur Linux (ou n'importe quoi qui ne soit pas Windows) 
ou que vous travaillez en équipe, vous devriez penser à utiliser une machine virtuelle. Ça à l'air compliqué mais 
utiliser [Vagrant][vagrant] vous permet de mettre en place une machine virtuelle avec seulement quelques étapes. 
Ces systèmes de base peuvent ensuite être configuré manuellement ou par des outils comme [Puppet][puppet] ou 
[Chef][chef]. Configurer ces systèmes de façon automatisé est un bon moyen de s'assurer que les différents systèmes 
mis en place seront configurer de la même manière sans avoir à maintenir une liste de commandes pour l'installation. 
Vous pouvez aussi "détruire" votre système et en recréer un nouveau de façon entièrement automatisée ce qui facilite 
les nouvelles installations.

Vagrant crée des dossiers partagés utilisé pour permettre à l'hôte et à la machine virtuelle d'accéder 
de façon bidirectionnelle à votre code ce qui signifie que vous pouvez créer et éditer vos fichiers sur le système 
hôte et exécuter votre code sur la machine virtuelle.

### Un coup de pouce

Si vous avez besoin d'aide pour commencer à utiliser Vagrant, il existe 3 services qui pourrait vous être utile :

- [Rove][rove]: Un service qui vous autorise à pré-générer des builds Vagrant typiques avec PHP. L'installation se fait 
avec Chef.
- [Puphpet][puphpet]: une interface graphique simple pour mettre en place des machines virtuelles pour développer en PHP.
 **Il se concentre énormement sur PHP**. Par ailleurs, des VMs locales peuvent être utilisées pour déployer des services 
clouds. L'installation se fait avec Puppet.
- [Protobox][protobox]: est composé d'une couche au-dessus de Vagrant et d'une interface web pour installer des machines 
virtuelles pour le développement web. Un seul document YAML contrôle tout ce qui peut être installé sur la machine 
virtuelle.

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
[rove]: http://rove.io/
[puphpet]: https://puphpet.com/
[protobox]: http://getprotobox.com/
