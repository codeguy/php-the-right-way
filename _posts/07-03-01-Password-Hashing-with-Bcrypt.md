---
title: Codificación de contraseñas con Bcrypt
isChild: true
---

## Codificación de contraseñas con Bcrypt

Con el tiempo, todo el mundo desarrolla una aplicación PHP que depende de un inicio de sesión (login) de usuario. Nombres de usuarios y contraseñas (codificadas) se guardan en una base de datos y se usan para autenticar a los usuarios cuando inician una nueva sesión.

Es importante que _codifique_ apropiadamente las contraseñas que se guardan en una base de datos. Si las contraseñas no están codificadas, y su base de datos es “hackeada” o una tercera persona no autorizada consigue acceso a la información, todas las cuentas de usuario estarían en peligro.

**Codifique las contraseñas con Bcrypt**. Es muy simple, y  en efecto, Bcrypt hace imposible que alguien pueda acceder a la versión en texto de la contraseña si es que su base de datos se ve comprometida.

Existen varias librerías de Bcrypt para PHP que puede utilizar. (La siguiente información solo está disponible en inglés.)

* [Leer "How to Safely Store a Password" by Coda Hale][3]
* [Utilice Bcrypt con PHPass][4]

[3]: http://codahale.com/how-to-safely-store-a-password/
[4]: http://www.openwall.com/phpass/
