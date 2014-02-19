---
layout: page
title: Les bases
---

# Les bases

## Opérateurs de comparaisons

Les opérateurs de comparaison sont souvent un aspect négligé du PHP ce qui peut amener à obtenir
des résultats inattendus. L'un de ces problèmes provient des comparaisons "strictes"
(par ex., la comparaison des booléens en tant qu'entier).

{% highlight php %}
<?php
$a = 5;   // 5 est un entier

var_dump($a == 5);       // compare la valeur; retourne true
var_dump($a == '5');     // compare la valeur (ignore le type); retourne true
var_dump($a === 5);      // compare à la fois la valeur et le type (entier vs. entier); retourne true
var_dump($a === '5');    // compare à la fois la valeur et le type (entier vs. string); retourne false

/**
 * Comparaison stricte
 */
if (strpos('testing', 'test')) {    // 'test' est trouvé à la position 0 qui est alors évalué à 'false'
    // code...
}

vs.

if (strpos('testing', 'test') !== false) {    // true étant qu'une comparaison stricte est faite (0 !== false)
    // code...
}
{% endhighlight %}

* [Opérateurs de comparaison](http://php.net/manual/fr/language.operators.comparison.php)
* [Table des comparaisons](http://php.net/manual/fr/types.comparisons.php)

## Structure de contrôle

### Instruction if

Lors de l'utilisation des instructions 'if/else' à l'intérieur d'une fonction ou d'une classe, il y a une idée fausse 
qui veut que 'else' doit être utilisé conjointement à un 'if' de façon à traiter les différents cas possibles. 
Cependant, si le but est de déterminer la valeur de retour et que les blocs contiennent l'instruction 'return' 
alors le bloc 'else' n'a plus d'intérêt.

{% highlight php %}
<?php
function test($a)
{
    if ($a) {
        return true;
    } else {
        return false;
    }
}

vs.

function test($a)
{
    if ($a) {
        return true;
    }
    return false;    // else n'est pas nécessaire
}
{% endhighlight %}

* [Instruction if](http://php.net/manual/fr/control-structures.if.php)

### Instruction switch

L'instruction 'switch' est un bon moyen d'éviter de taper un nombre d'instructions 'if/else if' sans fin mais il y a 
plusieurs choses à savoir :
- l'instruction 'switch' ne compare que la valeur de la variable, pas son type (équivalent à '==')
- Le programme parcourt l'ensemble des cas définis par l'instruction 'case' jusqu'à trouvé une correspondance. 
Si rien n'est trouvé alors l'instruction 'default' est utilisé (si elle est définie)
- Sans l'instruction 'break', le programme continuera de parcourir les cas possibles jusqu'à tomber sur une 
instruction 'break/return' (si elle est définie)
- À l'intérieur d'une fonction, utiliser l'instruction 'return' supprime le besoin d'une instruction 'break' étant 
donné qu'il termine l'exécution de la fonction.

{% highlight php %}
<?php
$answer = test(2);    // Le code sera implémenté à la fois pour 'case 2' et 'case 3'

function test($a)
{
    switch ($a) {
        case 1:
            // code...
            break;             // break est utilisé pour stopper l'exécution et sortir du 'switch'
        case 2:
            // code...         // sans break, la comparaison continuera jusqu'à 'case 3'
        case 3:
            // code...
            return $result;    // à l'intérieur d'une fonction, 'return' termine l'exécution de la fonction
        default:
            // code...
            return $error;
    }
}
{% endhighlight %}

* [Instruction switch](http://php.net/manual/fr/control-structures.switch.php)
* [PHP switch](http://phpswitch.com/) (en)

## Espace de noms global

Vous pouvez trouver lors de l'utilisation d'espace de noms que les fonctions "internes" sont cachés par les fonctions 
que vous écrivez. Pour régler ce problème, vous devez vous référer à l'espace de noms globale en utilisant un 
'backslash' devant le nom de vos fonctions.

{% highlight php %}
<?php
namespace phptherightway;

function fopen()
{
    $file = \fopen();    // Notre fonction a le même nom que la fonction interne.
                         // Exécuter la fonction interne en y préfixant le caractère '\'.
}

function array()
{
    $iterator = new \ArrayIterator();    // ArrayIterator est une classe interne au language.
                                         // Si vous l'utiliser sans '\' alors le programme tentera
                                         // de trouver cette classe à l'intérieur de votre espace de noms.
}
{% endhighlight %}

* [Espace global](http://php.net/manual/fr/language.namespaces.global.php)
* [Règles globales](http://php.net/manual/fr/userlandnaming.rules.php)

## Strings

### Concaténation

- Si la ligne que vous écrivez est plus grande que 120 caractères, songez à utiliser la concaténation
- Pour des questions de lisibilité, il est préférable d'utiliser l'opérateur de concaténation plutôt que l'opérateur 
d'affectation composé (.=)
- Indentez votre code lorsque vous retournez à la ligne


{% highlight php %}
<?php
$a  = 'Exemple multi-lignes';    // concaténer à l'aide de l'opérateur d'affectation composé (.=)
$a .= "\n";
$a .= 'de ce qu\'il ne faut pas faire';

vs.

$a = 'Exemple multi-lignes'      // opérateur de concaténation (.)
    . "\n"                     // en indentant les nouvelles lignes
    . 'de ce qu\'il faut faire';
{% endhighlight %}

* [Opérateurs de concaténation](http://php.net/manual/fr/language.operators.string.php)

### Type String

La chaîne de caractères (String) est une fonctionnalité qui revient souvent dans les conversations 
au sein de la communauté PHP mais heureusement cette section va vous expliquer les différences 
entre les différentes string possibles et leurs intérêts/cas d'utilisations.

#### Guillemet simple

Les guillemets simples sont le moyen le plus simple de définir une chaîne de caractères et sont souvent la plus rapide. 
Leur vitesse provient du fait que PHP n'analyse pas ces chaînes (par ex., pour y évaluer des variables à l'intérieur). 
Ils sont utiles pour :

- Les chaînes de caractères qui n'ont pas besoin d'être analysées
- L'écriture d'une variable en texte brut

{% highlight php %}
<?php
echo 'Voici ma chaîne de caractères, regardez comme elle est jolie.';    // pas besoin d'analyser une simple chaîne

/**
 * Sortie:
 *
 * Voici ma chaîne de caractères, regardez comme elle est jolie.
 */
{% endhighlight %}

* [Guillemet simple](http://www.php.net/manual/fr/language.types.string.php#language.types.string.syntax.single)

#### Guillemet double

Les guillemets doubles sont le couteau suisse des chaînes de caractères mais sont cependant plus lentes étant donné
qu'elles doivent être analysés. Ils sont utiles pour :

- Les chaînes contenant des caractères échappées (par ex., \n, \", etc)
- Les chaînes contenant à la fois du texte brut et des variables à l'intérieur
- une meilleur lisibilité

{% highlight php %}
<?php
echo 'phptherightway est ' . $adjectif . '.'     // Un exemple de guillement simple utilisé avec des variables
    . "\n"                                       // et des caractères échappés
    . 'J\'adore le ' . $code . '!';

vs.

echo "phptherightway est $adjectif.\n J'adore le $code!"  // Au lieu d'utiliser de multiples concaténations,
                                                               // les guillemets doubles améliore la lisibilité
{% endhighlight %}

En utilisant des guillemets doubles contenant des variables, il arrive souvent que cette variable soit collé à un 
autre caractère. Le résultat étant que PHP ne la verra plus. Pour régler ce problème, entourez la variable à l'aide 
d'une paire d'accolades.

{% highlight php %}
<?php
$abricot = 'abricot';
echo "J'ai bu du jus à base de $abricots";    // $abricot ne peut être analysé

vs.

$abricot = 'abricot';
echo "J'ai bu du jus à base de {$abricot}s";    // $abricot est correctement traité

/**
 * Les variables complexes seront aussi analysés à l'intérieur des accolades
 */

$jus = array('pomme', 'orange', 'abricot');
echo "J'ai bu du jus à base de {$jus[1]}s";   // $jus[1] est aussi correctement traité
{% endhighlight %}

* [Guillemet double](http://www.php.net/manual/fr/language.types.string.php#language.types.string.syntax.double)

#### Syntaxe Nowdoc

La syntaxe Nowdoc a été introduit dans la version 5.3 et se comporte de la même façon que les guillemets simples 
excepté le fait que qu'elle est plus pratique pour écrire plusieurs lignes sans concaténation.

{% highlight php %}
<?php
$str = <<<'EOD'             // débute par <<<
Exemple de chaine
s'etendant sur plusieurs lignes
et utilisant la syntaxe Nowdoc
$a n'est pas evalue.
EOD;                        // le mot 'EOD' termine la chaîne. Il doit se trouver au début d'une nouvelle ligne

/**
 * Sortie:
 *
 * Exemple de chaîne
 * s'étendant sur plusieurs lignes
 * et utilisant la syntaxe Nowdoc
 * $a n'est pas évalué.
 */
{% endhighlight %}

* [Syntaxe Nowdoc](http://www.php.net/manual/fr/language.types.string.php#language.types.string.syntax.nowdoc)

#### Syntaxe Heredoc

La syntaxe Heredoc se comporte de la même façon que les guillemets doubles 
excepté le fait que qu'elle est plus pratique pour écrire plusieurs lignes sans concaténation.

{% highlight php %}
<?php
$a = 'Variables';

$str = <<<EOD               // débute par <<<
Exemple de chaine
s'etendant sur plusieurs lignes
et utilisant la syntaxe Heredoc
$a est analyse.
EOD;                        // le mot 'EOD' termine la chaîne. Il doit se trouver au début d'une nouvelle ligne

/**
 * Sortie:
 *
 * Exemple de chaîne
 * s'étendant sur plusieurs lignes
 * et utilisant la syntaxe Heredoc
 * Variables est analysé.
 */
{% endhighlight %}

* [Syntaxe Heredoc](http://www.php.net/manual/fr/language.types.string.php#language.types.string.syntax.heredoc)

## Opérateur ternaire

L'opérateur ternaire est un bon moyen de condenser la paire d'instruction 'if/else' mais est trop souvent utilisé. 
Bien que les opérateurs ternaires puissent se trouver à l'intérieur d'autres opérateurs ternaires, il est souvent 
conseillé de n'en utiliser qu'une seule par ligne par souci de lisibilité.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? 'yay' : 'nay';

vs.

// Opérateur ternaire imbriqué
$b = 10;
echo ($a) ? ($a == 5) ? 'yay' : 'nay' : ($b == 10) ? 'excessif' : ':(';    // imbrication excessive, lisibilité réduite
{% endhighlight %}

_N.d.T._: PHP évalue l'opérateur de gauche à droite (associativité à gauche) contrairement au C ce qui peut provoquer 
des erreurs :
{% highlight php %}
<?php
echo (true ? 'true' : false ? 't' : 'f'); // affiche 't' alors qu'on s'attendrait à 'true'

// voici comment PHP interprète l'expression ci-dessus
echo ((true ? 'true' : false) ? 't' : 'f');

// pour corriger cela, il faut donc explicitement mettre les parenthèses
echo (true ? 'true' : (false ? 't' : 'f'));
{% endhighlight %}

Pour 'retourner' une valeur avec l'opérateur ternaire, utilisez la syntaxe correcte.

{% highlight php %}
<?php
$a = 5;
echo ($a == 5) ? return true : return false;    // Cet exemple renvoie une erreur

vs.

$a = 5;
return ($a == 5) ? 'yay' : 'nope';    // cet exemple renvoie 'yay'
{% endhighlight %}

* [Opérateur ternaire](http://php.net/manual/fr/language.operators.comparison.php)

## Déclaration de variables

Parfois, les programmeurs essaient de rendre leur code plus "propre" en déclarant des variables prédéfinies avec un 
autre nom. Ce qu'il se passe en réalité, c'est que la consommation mémoire va doubler. Avec l'exemple ci-dessous, 
disons que la chaîne de caractères contient 1Mio de données. En copiant cette variable, le poids de l'exécution de ce 
script passera alors à 2Mio.

{% highlight php %}
<?php
$about = 'Une très longue chaîne';    // utilise 2Mio de mémoire
echo $about;

vs.

echo 'Une très longue chaîne';        // utilise 1Mio de mémoire
{% endhighlight %}

* [Astuce pour améliorer la performance](https://developers.google.com/speed/articles/optimizing-php) (en)
