---
isChild: true
anchor:  exceptions
---

## Exceptions {#exceptions_title}

Exceptions are a standard part of most popular programming languages, but they are often overlooked by PHP programmers.
Languages like Ruby are extremely Exception heavy, so whenever something goes wrong such as a HTTP request failing, or
a DB query goes wrong, or even if an image asset could not be found, Ruby (or the gems being used) will throw an
exception to the screen meaning you instantly know there is a mistake.

PHP itself is fairly lax with this, and a call to `file_get_contents()` will usually just get you a `FALSE` and a
warning.
Many older PHP frameworks like CodeIgniter will just return a false, log a message to their proprietary logs and maybe
let you use a method like `$this->upload->get_error()` to see what went wrong. The problem here is that you have to go
looking for a mistake and check the docs to see what the error method is for this class, instead of having it made
extremely obvious.

Another problem is when classes automatically throw an error to the screen and exit the process. When you do this you
stop another developer from being able to dynamically handle that error. Exceptions should be thrown to make a
developer aware of an error; they then can choose how to handle this. E.g.:

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
    // Executed regardless of whether an exception has been thrown, and before normal execution resumes
}
{% endhighlight %}

### SPL Exceptions

The generic `Exception` class provides very little debugging context for the developer; however, to remedy this, it is
possible to create a specialized `Exception` type by sub-classing the generic `Exception` class:

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

This means you can add multiple catch blocks and handle different Exceptions differently. This can lead to the
creation of a <em>lot</em> of custom Exceptions, some of which could have been avoided using the SPL Exceptions
provided in the [SPL extension][splext].

If for example you use the `__call()` Magic Method and an invalid method is requested then instead of throwing a
standard Exception which is vague, or creating a custom Exception just for that, you could just
`throw new BadMethodCallException;`.

* [Read about Exceptions][exceptions]
* [Read about SPL Exceptions][splexe]
* [Nesting Exceptions In PHP][nesting-exceptions-in-php]


[splext]: /#standard_php_library
[exceptions]: https://www.php.net/language.exceptions
[splexe]: https://www.php.net/spl.exceptions
[nesting-exceptions-in-php]: https://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
