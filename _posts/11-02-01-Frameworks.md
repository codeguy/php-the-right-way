---
title: Armazones
---

# Armazones

En lugar de reinventar la rueda, muchos desarrolladores de PHP usan **armazones** para desarrollar nuevas aplicaciones web. Los armazones abstraen mucho del funcionamiento fundamental de la aplicación y proveen interfaces útiles y fáciles de usar para desempeñar tareas comunes.

No es necesario usar un armazón en todos sus proyectos. A veces la mejor alternativa es utilizar puro PHP, pero si cree que necesita un armazón tiene hay tres tipos disponibles:

* Micro Armazones
* Armazones Completos
* Armazones de Componentes

Los **micro armazones** son, en esencia, una envoltura para dirigir las solicitudes de HTTP a un controlador o método lo más rápido posible, y en veces incluyen otras librerías para asistir en el desarrollo, tal como envolturas básicas para bases de datos y así por el estilo. Estos armazones son utilizados en su mayoría para desarrollar servicios remotos de HTTP. 

Muchos armazones añaden un número considerable de funciones y características sobre la base disponible en un micro armazón. A estos se les conoce como **armazones completos**. A menudo, estos armazones incluyen paquetes ORM para bases de datos, paquetes de autenticación, y otros.

Los **armazones de componentes** son colecciones de librerías especializadas para un propósito en particular. Los componentes de estos armazones pueden utilizarse con otras librerías para construir micro armazones o armazones completos.


* [Armazones populares de PHP](https://github.com/codeguy/php-the-right-way/wiki/Frameworks)