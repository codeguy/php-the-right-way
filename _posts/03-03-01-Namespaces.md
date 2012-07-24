---
title: Espacios de Nombre
isChild: true
---

## Espacios de Nombres

Como mencionamos anteriormente, la comunidad de PHP tiene muchos desarrolladores creando una gran cantidad de código fuente. Esto quiere decir que existe la posibilidad que dos librerías diferentes utilicen el mismo nombre para una clase en su código. Cuando las dos librerías se usan dentro del mismo espacio de nombres esto se denomina como una colisión y puede causar problemas.

Los _Espacios de Nombres_ resuelven este problema. Como se describe en el manual de referencia de PHP, los espacios de nombres son similares a los directorios que separan los archivos en el sistema operativo. Dos archivos con el mismo nombre pueden coexistir en directorios separados. Igualmente, dos clases de PHP con el mismo nombre pueden coexistir en espacios de nombres separados, es tan simple como eso.

Es importante que separe su código con un espacio de nombres para que pueda ser usado por otros desarrolladores sin la preocupación de que cause problemas con otras librerías.

Uno de los métodos recomendados para el uso de espacios de nombres se indica en el [PSR-0][psr0], el cual se propone proveer una convención estándar para los archivos, clases y los espacios de nombres, lo cual facilita el intercambio y uso del código en diferentes proyectos.


* [Leer acerca de los Espacios de Nombres][namespaces]
* [Leer acerca del PSR-0][psr0]

[namespaces]: http://php.net/manual/es/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
