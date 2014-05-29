---
title: Izuzeci
isChild: true
---

## Izuzeci {#exceptions_title}

Izuzeci su standardan deo većine popularnih programskih jezika, ali ih PHP programeri često previde. Jezici kao _Ruby_ se veoma često oslanjaju na izuzetke, tako da kad god da nešto krene naopako, kao npr. HTTP zahtev se neizvrši, ili DB upit pođe naopako, ili čak ako nije mogao da nađe fajl slike, Ruby će izbaciti izuzetak tako da uvek znate šta je pošlo naopako. 

PHP je relativno labav po tom pitanju, npr. poziv funkcije `file_get_contents()`  će vam uglavnom vratiti `FALSE` i upozorenje. Mnogi stari _framework_, kao _CodeIgniter_ će vam samo vratiti false, zabeležiti poruku u svoje logove i možda vam dozvoliti da iskoristite metodu kao `$this->upload->get_error()` da bi videli šta je pošlo naopako. Problem ovde je da vi morate da jurite za greškom i proverite dokumentaciju da bi videli kako se zove _error_ metoda za datu klasu, umesto da vam pdmah kaže u čemu je problem. 

Drugi problem je kada klase automatski izbace grešku na ekran i prekinu sa izvršavanjem. Kada to uradite vi sprečavate drugog programera da dinamički upravlja greškom. Izuzeci trebaju biti bačeni da bi programer bio svestan greške, a onda oni mogu da odluče šta da urade po tom pitanju. Npr.:

{% highlight php %}
<?php
$email = new Fuel\Email;
$email->subject('My Subject');
$email->body('How the heck are you?');
$email->to('guy@example.com', 'Some Guy');

try
{
    $email->send();
}
catch(Fuel\Email\ValidationFailedException $e)
{
    // The validation failed
}
catch(Fuel\Email\SendingFailedException $e)
{
    // The driver could not send the email
}
finally
{
    // Use this to let user know email was sent
}
{% endhighlight %}

### SPL izuzeci

Generička `Exception` klasa pruža veoma malo _debugging_ konteksta za programera. Međutim, da bi se to nadoknadilo, moguće je kreirati specijalizovane `Exception` tipove, tako što ćete kreirati klase koje nasleđuju `Exception` klasu.

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

To znači da možete dodati više "_catch_" blokova i rukovati sa različitim izuzecima na različite načine. To može dovesti do kreiranja mnogo specijalnig izuzetak klasa, neke koje ste mogli izbeći korišćenjem SPL izuzetaka dostupne u [SPL ekstenziji][splext].

Ako npr. koristite `__call()` magičnu metodu, i pozovote nepostojeći metod tada umesto bacanja standardnog izuzetka koji nam ne kaže mnogo, ili umesto kreiranja nove izuzetak klase, možete baciti već dostupan izuzetak `throw new BadFunctionCallException;`.

* [Pročitajte o izuzecima][exceptions]
* [Pročitajte o SPL izuzecima][splexe]
* [Ugnježdeni izuzeci u PHP-u][nesting-exceptions-in-php]
* [Najbolje prakse vezane za izuzetke u PHP-u 5.3][exception-best-practices53]

[exceptions]: http://php.net/manual/en/language.exceptions.php
[splexe]: http://php.net/manual/en/spl.exceptions.php
[splext]: /#standard_php_library
[exception-best-practices53]: http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3
[nesting-exceptions-in-php]: http://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
