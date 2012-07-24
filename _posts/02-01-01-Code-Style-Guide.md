---
title: Guía de Estilo de Código
---

# Guía de Estilo de Código

La comunidad detrás de PHP es enorme y diversa, compuesta de innumerables librerías, armazones de desarrollo (*frameworks*) y componentes. Es común que desarrolladores en PHP escojan de entre estos  y los combinen en un solo proyecto. Por eso es importante que el código PHP se adhiera (lo más cerca posible) a un estilo de código común para que se facilite el trabajo de los desarrolladores al combinar una variedad de librerías para sus proyectos.

El [Framework Interop Group][fig] (antes conocido como el 'PHP Standards Group') ha propuesto y aprobado una serie de recomendaciones de estilo, conocidas como [PSR-0][psr0], [PSR-1][psr1] y [PSR-2][psr2]. No deje que los títulos raros lo confundan, estas recomendaciones son simplemente un conjunto de normas que algunos proyectos como Drupal, Zend, CakePHP, phpBB, AWS SDK, FuelPHP, Lithium, y otros han comenzado a adoptar. Usted puede utilizar estas normas en sus propios proyectos o continuar usando su propio estilo.

Sería ideal que escribiera código PHP que se adhiere a uno o más de estos estándares para que otros desarrolladores puedan leer y trabajar con su código fácilmente. Los estándares añaden al estándar previo, asi que usar PSR-1 requiere el uso de PSR-0, pero no requiere PSR-2.

* [Léa acerca de PSR-0][psr0]
* [Léa acerca de PSR-1][psr1]
* [Léa acerca de PSR-2][psr2]

Puede usar la configuración de [phpcs-psr][phpcs-psr] para la herramienta [phpcs-psr][phpcs-psr] y checar que su código se adhiera a las normas y recomendaciones estipuladas en estos estándares. También puede usar el [PHP Coding Standards Fixer][phpcsfixer] de Fabien Potencier para modificar el sintaxis de su código y así automáticamente se conforme a estos estándares, ahorrándole el tiempo y esfuerzo que requeriría arreglar el problema a mano.

[fig]: http://www.php-fig.org/
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[psr2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[phpcs-psr]: https://github.com/klaussilveira/phpcs-psr
[phpcsfixer]: http://cs.sensiolabs.org/
