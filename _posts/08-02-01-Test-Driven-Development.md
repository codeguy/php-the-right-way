---
title: Desarrollo Guiado por Pruebas 
isChild: true
---

## Desarrollo Guiado por Pruebas

De [Wikipedia](http://es.wikipedia.org/wiki/Desarrollo_guiado_por_pruebas):

> Desarrollo guiado por pruebas, o Test-driven development (TDD) es una práctica de programación que involucra otras dos prácticas: Escribir las pruebas primero (Test First Development) y Refactorización (Refactoring). Para escribir las pruebas generalmente se utilizan las pruebas unitarias (unit test en inglés). En primer lugar, se escribe una prueba y se verifica que las pruebas fallan. A continuación, se implementa el código que hace que la prueba pase satisfactoriamente y seguidamente se refactoriza el código escrito. El propósito del desarrollo guiado por pruebas es lograr un código limpio que funcione. La idea es que los requisitos sean traducidos a pruebas, de este modo, cuando las pruebas pasen se garantizará el software cumple con los requisitos que se han establecido.

Existen diferentes tipos de pruebas que puede utilizar para su aplicación.

### Pruebas Unitarias

Las pruebas unitarias son un enfoque de programación que asegura que las funciones, clases y métodos estén funcionando como se espera, desde el punto en que se desarrollan a través de todo el ciclo de desarrollo. Al verificar los valores que entran y salen de las diferentes funciones y métodos, se puede asegurar que la lógica interna funciona correctamente. Al usar la inyección de dependencias y al construir clases de maqueta y talones de funciones se puede verificar que las dependencias se están utilizando de la manera correcta y así tener una mejor cobertura de pruebas en su aplicación.

Cuando se crea una clase o función, se debe crear también una prueba unitaria para cada parte del funcionamiento que se espera de este nuevo bloque de código. En un nivel muy básico, debe asegurarse que la prueba lanza un error si le provee argumentos equivocados y que pase la prueba si le provee los argumentos correctos. Esto le asegura que seguirá trabajando como se espera cuando se hagan cambios a esta función o clase durante el ciclo de desarrollo. La única alternativa a este método es utilizar la función `var_dump()` en un archivo ‘test.php’, pero no recomendamos hacer esto para ningún tipo de proyecto.

El otro uso común que se le da a este tipo de pruebas es cuando se contribuye código a un proyecto “open-source”. Si provee una prueba que lanza errores y después provee una solución en su código para que pasa la prueba, es más probable que su parche sea aceptado en el proyecto. De igual manera, si usted está a cargo de un proyecto sería aconsejable que sugiriera esto como un requisito.

[PHPUnit](http://phpunit.de) es el principal armazón de pruebas para el desarrollo de pruebas unitarias en aplicaciones PHP, pero existen varias alternativas:

* [SimpleTest](http://simpletest.org)
* [Enhance PHP](http://www.enhance-php.com/)
* [PUnit](http://punit.smf.me.uk/)

### Pruebas de Integración

De [Wikipedia](http://es.wikipedia.org/wiki/Pruebas_de_Integraci%C3%B3n):

> Pruebas integrales o pruebas de integración son aquellas que se realizan en el ámbito del desarrollo de software una vez que se han aprobado las pruebas unitarias. Únicamente se refieren a la prueba o pruebas de todos los elementos unitarios que componen un proceso, hecha en conjunto, de una sola vez. Consiste en realizar pruebas para verificar que un gran conjunto de partes de software funcionan juntos.

Se pueden utilizar muchas de las mismas herramientas de pruebas unitarias para hacer pruebas de integración, ya que muchos de los principios son los mismos.

### Pruebas Funcionales

También conocidas como pruebas de aceptación, las pruebas funcionales consisten en el uso de herramientas que automatizan el uso real de una aplicación en vez de solo la verificación del funcionamiento de unidades individuales de código. Estas herramientas suelen trabajar con datos reales y simulan usuarios reales en la aplicación.

#### Herramientas para pruebas funcionales

* [Selenium](http://seleniumhq.com)
* [Mink](http://mink.behat.org)
* [Codeception](http://codeception.com) es un armazón completo para pruebas que incluye herramientas para pruebas de aceptación.
