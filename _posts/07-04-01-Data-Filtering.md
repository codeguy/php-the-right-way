---
title: El Filtrado de Datos
isChild: true
---

## El Filtrado de Datos

Nunca, jamás, se confíe de los datos que provienen del exterior de su aplicación PHP. Siempre sanee y verifique los datos de entrada antes de usarlos en su código. Las funciones `filter_var()` y `filter_input()` proporcionan saneamiento de los datos y verifican la validez del formato del texto (por ejemplo, las direcciones de correo electrónico).

Los datos de entrada exteriores pueden contener cualquier cosa: los datos provenientes de formularios en `$_GET` y `$_POST`, algunos valores provenientes del súper global `$_SERVER`,  el cuerpo de la solicitud HTTP vía la función `fopen('php://input', 'r')`. Recuerde que la entrada exterior de datos no está limitada a los datos que provienen de un usuario a través de un formulario, también provienen de la subida y descarga de archivos, valores de sesión, datos de cookies, y los servicios web exteriores.

Aunque los datos que provienen del exterior pueden ser guardados, combinados y se puede acceder a ellos posteriormente, todavía siguen siendo datos exteriores. Cada vez que procesa, imprime, concatena, o los incluye con otros datos en su código, pregúntese si los datos han sido filtrados apropiadamente y si es confiable.

Data may be _filtered_ differently based on its purpose. For example, when unfiltered foreign input is passed
into HTML page output, it can execute HTML and JavaScript on your site! This is known as Cross-Site
Scripting (XSS) and can be a very dangerous attack. One way to avoid XSS is to sanitize all HTML tags
in the input by removing tags or escaping them into HTML entities.

Another example is passing options to be executed on the command line. This can be extremely dangerous
(and is usually a bad idea), but you can use the built-in `escapeshellarg` function to sanitize the executed
command's arguments.

One last example is accepting foreign input to determine a file to load from the filesystem. This can be exploited by
changing the filename to a file path. You need to remove "/", "../", [null bytes][6], or other characters from the file path so it can't
load hidden, non-public, or sensitive files.

* [Learn about data filtering][1]
* [Learn about `filter_var`][4]
* [Learn about `filter_input`][5]
* [Learn about handling null bytes][6]

### Sanitization

Sanitization removes (or escapes) illegal or unsafe characters from foreign input.

For example, you should sanitize foreign input before including the input in HTML or inserting it
into a raw SQL query. When you use bound parameters with [PDO](#databases), it will
sanitize the input for you.

Sometimes it is required to allow some safe HTML tags in the input when including it in the HTML
page. This is very hard to do and many avoid it by using other more restricted formatting like
Markdown or BBCode, although whitelisting libraries like [HTML Purifier][html-purifier] exists for
this reason.

[See Sanitization Filters][2]

### Validation

Validation ensures that foreign input is what you expect. For example, you may want to validate an
email address, a phone number, or age when processing a registration submission.

[See Validation Filters][3]

[1]: http://www.php.net/manual/es/book.filter.php
[2]: http://www.php.net/manual/es/filter.filters.sanitize.php
[3]: http://www.php.net/manual/es/filter.filters.validate.php
[4]: http://php.net/manual/es/function.filter-var.php
[5]: http://www.php.net/manual/es/function.filter-input.php
[6]: http://php.net/manual/es/security.filesystem.nullbytes.php
[html-purifier]: http://htmlpurifier.org/
