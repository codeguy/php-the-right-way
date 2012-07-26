---
title: Paradigmas de Programación
isChild: true
---

## Paradigmas de Programación

PHP es un lenguaje flexible y dinámico que permite usar una variedad de técnicas de programación. El lenguaje ha evolucionado dramáticamente a través de los años. Se añadió un modelo de objetos (object-oriented) solido en la versión 5.0 (2004), funciones anónimas y espacios de nombres (namespaces) en PHP 5.3, y rasgos (traits) en PHP 5.4 (2012). 

### Programación Orientada a Objetos

PHP tiene un conjunto muy completo de aspectos que facilitan la programación orientada a objetos (OOP) que incluye la habilidad de crear clases, clases abstractas, interfaces, herencia, constructores, clonación de objetos, excepciones y mucho más.

* [Leer más acerca de PHP orientado a objetos][oop]
* [Leer más acerca de Rasgos][traits]

### Programación Funcional

PHP tiene la capacidad de declarar funciones de primera clase, en otras palabras, una función puede ser asignada a un variable. Las funciones definidas por el usuario, así como las funciones internas (incluidas), tiene la habilidad de ser referenciadas por un variable e invocadas dinámicamente. Las funciones pueden ser pasadas como argumentos a otras funciones (un aspecto llamado funciones de orden superior)  y funciones pueden devolver otras funciones.

La recursión es un aspecto que le permite a una función a llamarse a sí misma. El lenguaje PHP habilita este tipo de algoritmos, sin embargo, la mayoría del código PHP se enfoca en iteración.

Las funciones anónimas (con soporte para cierres) están presentes en PHP desde la versión 5.3 (2009).

En PHP 5.4 añadió la habilidad para vincular cierres al ámbito de un objeto y también se mejoró el soporte de funciones de tipo _callable_ para que puedan intercambiarse con funciones anónimas en casi todos los casos.

* Continúe leyendo acerca de la  [programación funcional en PHP](/pages/Functional-Programming.html)
* [Leer acerca de las funciones anónimas][anonymous-functions]
* [Leer acerca de la clase Cierre (Closure)][closure-class]
* [Mas detalles definidos en el RFC de Cierres (Closures)][closures-rfc]
* [Leer acerca de funciones tipo Callable][callables]
* [Leer acerca de cómo invocar funciones con `call_user_func_array`][call-user-func-array]

### Programación Meta

PHP soporta varias formas de programación meta por medio de mecanismos como el API de Reflexión y los Métodos Mágicos. Hay muchos Métodos Mágicos disponibles como `__get()`, `__set()`, `__clone()`, `__toString()`, `__invoke()` y más, que permiten a los desarrolladores a conectarse con el funcionamiento de la clase. A menudo desarrolladores en Ruby dicen que a PHP le falta la función de `method_missing`, sin embargo los aspectos de esta función están disponibles en `__call()` y `__callStatic()`.

* [Leer acerca de los Métodos Mágicos][magic-methods]
* [Leer acerca de Reflexion][reflection]

[namespaces]: http://php.net/manual/es/language.namespaces.php
[overloading]: http://uk.php.net/manual/es/language.oop5.overloading.php
[oop]: http://www.php.net/manual/es/language.oop5.php
[anonymous-functions]: http://www.php.net/manual/es/functions.anonymous.php
[closure-class]: http://php.net/manual/es/class.closure.php
[callables]: http://php.net/manual/es/language.types.callable.php
[magic-methods]: http://php.net/manual/es/language.oop5.magic.php
[reflection]: http://www.php.net/manual/es/intro.reflection.php
[traits]: http://www.php.net/manual/es/language.oop5.traits.php
[call-user-func-array]: http://php.net/manual/es/function.call-user-func-array.php
[closures-rfc]: https://wiki.php.net/rfc/closures
