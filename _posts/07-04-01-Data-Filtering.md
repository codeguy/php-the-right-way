---
title: El Filtrado de Datos
isChild: true
---

## El Filtrado de Datos

Nunca, jamás, se confíe de los datos que provienen del exterior de su aplicación PHP. Siempre sanee y verifique los datos de entrada antes de usarlos en su código. Las funciones `filter_var()` y `filter_input()` proporcionan saneamiento de los datos y verifican la validez del formato del texto (por ejemplo, las direcciones de correo electrónico).

Los datos de entrada exteriores pueden contener cualquier cosa: los datos provenientes de formularios en `$_GET` y `$_POST`, algunos valores provenientes del súper global `$_SERVER`,  el cuerpo de la solicitud HTTP vía la función `fopen('php://input', 'r')`. Recuerde que la entrada exterior de datos no está limitada a los datos que provienen de un usuario a través de un formulario, también provienen de la subida y descarga de archivos, valores de sesión, datos de cookies, y los servicios web exteriores.

Aunque los datos que provienen del exterior pueden ser guardados, combinados y se puede acceder a ellos posteriormente, todavía siguen siendo datos exteriores. Cada vez que procesa, imprime, concatena, o los incluye con otros datos en su código, pregúntese si los datos han sido filtrados apropiadamente y si es confiable.

Los datos pueden ser _filtrados_ de diferente manera dependiendo de su proposito. Por ejemplo, cuando se pasan datos sin filtrar a la salida de HTML de su página, corre el riesgo de ejecutar código sin verificar de HTML o JavaScript en su sitio. Esto es conocido (en inglés) como Cross-Site Scripting (XSS), y puede causar mucho daño a su aplicación. Una manera de prevenir estos ataques es sanear todas las etiquetas de HTML en sus datos de entrada al remover etiquetas o convirtiéndolas en entidades de HTML.

Otro ejemplo es cuando se pasan opciones que van a ser ejecutadas en la línea de comando. Esto puede ser extremadamente peligroso y en general no es una buena idea. Sin embargo, puede usar la función `escapeshellarg` que viene incluida en PHP para sanear los argumentos de ejecución de un comando.

Un último ejemplo es el de aceptar la entrada de datos para determinar que archivo se necesita cargar del sistema de archivos. Esto puede ser explotado al cambiar el nombre del archivo a una ruta de archivo diferente. En este caso es necesario remover los caracteres "/", "../", [bytes nulos][6] y otros de la ruta de archivo para que no permita cargar archivos escondidos, no públicos, o de otra manera sensitivos.  

* [Aprenda acerca del filtrado de datos  ][1]
* [Aprenda acerca de la función `filter_var`][4]
* [Aprenda acerca de la función `filter_input`][5]
* [Aprenda como manipular los bytes nulos][6]

### Saneamiento

El saneamiento remueve (o evita) los caracteres ilegales o inseguros que provienen de la entrada de datos externa.

Por ejemplo, debería sanear la entrada de datos antes de incluirla en el código HTML o insertarla a una consulta de SQL. Cuando utiliza parámetros consolidados con [PDO](/#bases_de_datos), este saneara la entrada de datos automáticamente.

En veces es requerido que permita que algunas etiquetas de HTML que se consideren inofensivas puedan ser incluidas en la entrada de datos para una página de su sitio. Esto es algo muy difícil de realizar de una manera segura y muchos lo evitan al usar otros estándares de formato de texto más restrictivos como Markdown o BBCode, aunque librerías que proveen una lista blanca de etiquetas como el [HTML Purifier][html-purifier] se concibieron para este propósito.

[Vea los filtros de saneamiento][2]

### Validación

La validación asegura que lo que contiene la entrada de datos es lo que usted esperaba. Por ejemplo, quizás desee validar una dirección de correo electrónico, un número telefónico, o la edad de un usuario al procesar una solicitud de registro. 

[Vea los filtros de validación][3]

[1]: http://www.php.net/manual/es/book.filter.php
[2]: http://www.php.net/manual/es/filter.filters.sanitize.php
[3]: http://www.php.net/manual/es/filter.filters.validate.php
[4]: http://php.net/manual/es/function.filter-var.php
[5]: http://www.php.net/manual/es/function.filter-input.php
[6]: http://php.net/manual/es/security.filesystem.nullbytes.php
[html-purifier]: http://htmlpurifier.org/
