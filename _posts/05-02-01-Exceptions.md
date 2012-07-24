---
title: Excepciones
isChild: true
---

## Excepciones

Las **Excepciones** son un aspecto normal de los lenguajes de programación más populares, pero a menudo son pasadas por alto por los programadores de PHP. Otros lenguajes como Ruby utilizan las **Excepciones** en gran cantidad, tanto que cada vez que sucede un error como una petición HTTP que ha fallado o una línea de consulta a una base de datos que no funciona, o quizás hubo una imagen que no existe, Ruby (o cualquier gema en ejecución) lanza una excepción a la pantalla dejando a conocer que hubo un error.

PHP es poco exigente en estas instancias. Por ejemplo, una llamada a la función `file_get_contents()` usualmente solo devolverá un `FALSE` y una advertencia. Muchos de las estructuras base (frameworks) más antiguas de PHP como CodeIgniter simplemente devolverán un valor falso, registrara un mensaje en sus registros y quizás le permita utilizar un método como `$this->upload->get_error()` para ver que anda mal. El problema con esto es que uno mismo tiene que ir a buscar el error y cerciorarse en la documentación de cuál es el método para verificar errores para la clase en uso, en vez de hacer que el error sea muy obvio.

Otro problema común es cuando las clases automáticamente lanzan un error a la pantalla y paran el flujo del programa. Cuando esto pasa el desarrollador no tiene la oportunidad de manejar el error dinámicamente. En estas instancia se deben utilizar excepciones para que el desarrollador este consciente de que hay un error y pueda escoger cómo manejar la situación. Por ejemplo:

{% highlight php %}
<?php
$email = new Fuel\Email;
$email->subject('Mi Asunto');
$email->body('¿Que tal?');
$email->to('fulano@ejemplo.com', 'Algún Fulano');

try
{
    $email->send();
}
catch(Fuel\Email\ValidationFailedException $e)
{
    // Hubo un error en la validación
}
catch(Fuel\Email\SendingFailedException $e)
{
    // El gestor no pudo mandar el correo
}
{% endhighlight %}

### Excepciones de la SPL

Las excepciones, por defecto, no tienen ningún significado y el método más común de asignárselos es al darles un nombre:

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

Esto le permite añadir múltiples bloques `catch` y manejar diferentes excepciones de diferente manera. Esto puede conducir a la creación de una gran cantidad de excepciones particulares solo a su aplicación, muchas de las cuales pudieran eliminarse al usar las excepciones que provee la [extensión de la SPL][splext].

Si, por ejemplo, utiliza el método mágico `__call()` y este solicita un método inválido, entonces en vez de lanzar una excepción estándar de significado dudoso, o crear una excepción particular, solo necesita hacer esto:

{% highlight php %}
<?php
throw new BadFunctionCallException;
{% endhighlight %}


* [Leer acerca de las Excepciones][exceptions]
* [Leer acerca de las Excepciones de la SPL][splexe]
* [Como anidar excepciones en PHP][nesting-exceptions-in-php]
* [Las mejores prácticas para las excepciones en PHP 5.3][exception-best-practices53]

[exceptions]: http://php.net/manual/es/language.exceptions.php
[splexe]: http://php.net/manual/es/spl.exceptions.php
[splext]: /php-the-right-way/#biblioteca_estándar_de_php
[exception-best-practices53]: http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3
[nesting-exceptions-in-php]: http://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
