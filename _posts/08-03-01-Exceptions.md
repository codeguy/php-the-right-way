---
isChild: true
---

## Exceptions {#exceptions_title}

Les exceptions sont une partie standardisée dans la plupart des langages de programmation populaire mais elles sont 
souvent négligées par les programmeurs PHP. Les langages comme Ruby sont très fortement équipés pour gérer les exceptions 
ainsi, à chaque fois qu'une chose se passe mal comme l'échec d'une requête HTTP ou d'une requête à la BDD, Ruby (ou les 
"gems" utilisés) va lancer une exception à l'écran vous indiquant immédiatement qu'il y a eu une erreur.

Le PHP en lui-même est plutôt laxiste avec ce type d'erreur, ainsi un appel à `file_get_contents()` va généralement 
renvoyer un `FALSE` accompagné d'un avertissement. Beaucoup d'anciens frameworks PHP comme CodeIgniter vont juste 
retourner `false`, enregistrer un message dans leur fichier de log et peut-être vous laisser utiliser une méthode 
comme `$this->upload->get_error()` pour voir ce qu'il s'est mal passé. Le problème ici est que vous devez vous-même 
chercher l'erreur et vérifier dans la doc ce qu'elle signifie pour cette fonction au lieu de l'avoir rendu évidente à 
comprendre.

L'autre problème arrive lorsque les classes lancent automatiquement une erreur à l'écran et termine le processus. Si 
vous faites cela, un autre développeur ne pourra plus capable de gérer cette erreur à l'exécution. Les exceptions 
devraient être lançées afin d'avertir le développeur qu'une chose ne s'est pas passé comme prévu; ça devrait être à eux 
de décider comment ils veulent gérer cela, par exemple:

{% highlight php %}
<?php
$email = new Fuel\Email;
$email->subject('Mon sujet');
$email->body('Comment allez-vous ?');
$email->to('guy@exemple.com', 'Un gars');

try
{
    $email->send();
}
catch(Fuel\Email\ValidationFailedException $e)
{
    // La validation a échouée
}
catch(Fuel\Email\SendingFailedException $e)
{
    // Le pilote ne peut pas envoyé l'email
}
finally
{
    // ce bloc est exécuté même si une exception a été levé et avant que l'exécution normale reprenne
}
{% endhighlight %}

### Les exceptions SPL

La classe générique `Exception` ne fournit pas un contexte intéressant pour le déboguage. Pour remédier à cela, il est 
possible de créer une sous-classe du type générique `Exception` :

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

Cela vous permet d'ajouter plusieurs blocs `catch` et de gérer les exceptions différemment. Cela peut conduire à la 
création de <em>beaucoup</em> de classes personnalisées qui aurait pu être éviter si les exceptions de la SPL avaient 
été utilisés avec l'[extension SPL][splext].

Si par exemple vous utilisez la méthode magique `__call()` et qu'une méthode invalide est demandé alors, au lieu de lever 
une exception standard vague ou d'utiliser une sous-classe personnalisée, vous pourriez tout simplement faire 
`throw new BadFunctionCallException;`.

* [En savoir plus sur les exceptions][exceptions]
* [En savoir plus sur les exceptions de la SPL][splexe]
* [Les exceptions imbriquées en PHP][nesting-exceptions-in-php]
* [Les meilleurs pratiques de gestion d'exception en PHP 5.3][exception-best-practices53]

[exceptions]: http://php.net/manual/fr/language.exceptions.php
[splexe]: http://php.net/manual/fr/spl.exceptions.php
[splext]: #bibliothèque_php_standard
[exception-best-practices53]: http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3
[nesting-exceptions-in-php]: http://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
