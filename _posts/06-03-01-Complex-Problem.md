---
title: Problèmes complexe
isChild: true
---

## Problèmes complexe {#problèmes_complexe_title}

Si vous avez déjà lu des articles sur l'injection de dépendances alors vous avez probablement vu des termes comme 
*"Inversion de contrôle"* ou *"Principe d'inversion de dépendances"*. Ces termes sont les problèmes complexes que 
l'injection de dépendances cherche à résoudre.

### Inversion de contrôle

L'inversion de contrôle est, comme il le sous-entend, un système cherchant à "inverser le contrôle" en gardant le contrôle 
organisationnelle entièrement séparé des objets. En terme d'injection de dépendance, cela signifie que l'on sépare les 
dépendances en les contrôlant et en les instanciant ailleurs dans le système.

Pendant des années, les frameworks PHP ont fait de l'inversion de contrôle, cependant la question est devenue : quelle 
partie du contrôle doit-on inverser ? et vers où ? Par exemple, les frameworks MVC fourniront généralement un super 
objet ou un contrôleur de base dont les autres contrôleurs doivent hérités pour avoir accès à ses dépendances. C'est 
**ça** l'inversion de contrôle, cependant, au lieu de séparer les différentes dépendances, cette méthode ne fait que les 
déplacer.

L'injection de dépendance nous permet de résoudre ce problème de façon plus élégante en injectant uniquement les dépendances 
dont nous avons besoin, quand nous avons besoin et ceux sans avoir à écrire en dur quelques dépendances que ce soit.

### Principe d'inversion des dépendances

Le principe d'inversion des dépendances (en anglais Dependency Inversion Principle) correspond au "D" dans "S.O.L.I.D." 
qui est un ensemble de principes et de conceptions orienté objet. Il est dit que l'on doit *"dépendre des abstactions et 
non des implémentations."*. Cela signifie que nos dépendances doivent se faire sur des interfaces/contrats ou encore sur 
des classes abstraites plutôt que sur des classes "concretes". Nous pouvons facilement refactoriser l'exemple ci-dessus 
en suivant ce principe.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct(AdapterInterface $adapter)
    {
        $this->adapter = $adapter;
    }
}

interface AdapterInterface {}

class MysqlAdapter implements AdapterInterface {}
{% endhighlight %}

Il y a plusieurs avantages à ce que la classe `Database` dépende d'une interface plutôt que de son implémentation.

Imaginons que vous êtes en train de travailler dans une équipe et que l'adaptateur est écrit par un de vos collègues. 
Dans notre premier exemple, nous aurions d'abord attendu que notre collègue ait fini l'adaptateur avant de pouvoir 
l'utiliser dans nos tests unitaires. Maintenant que la dépendance correspond à une interface, nous pouvons créer un 
objet factif implémentant cette interface en sachant que notre collègue constuira l'adaptateur en respectant le contrat 
de base.

Un bénéfice entre plus grand de cette méthode est que notre code est maintenant plus facilement évolutif (scalable en anglais). 
Si dans un an nous décidons que nous voulons migrer sur un autre type de base de données alors nous n'avons qu'à écrire et 
utiliser l'adaptateur qui implémente l'interface spécifique et ainsi, nous n'avons plus besoin de refactoriser du code.
