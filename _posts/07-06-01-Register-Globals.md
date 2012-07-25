---
total: Register Globals
isChild: true
---

## Register Globals

**NOTA:** Desde el lanzamiento de PHP 5.4, la opción `register_globals` ha sido eliminada y ya no puede ser utilizada.

Cuando se habilita la opción `register_globals` en la configuración de PHP, varios tipos de variables (incluidos los de `$_POST`, `$_GET` y `$_REQUEST`) se hacen disponibles en el ámbito global de su aplicación. Esto puede muy fácilmente conducirlo a problemas de seguridad ya que su aplicación no tiene una manera efectiva de verificar de dónde provienen esos datos.

Si está usando una versión de PHP anterior a 4.2.0, tenga en cuenta que corre el riesgo de que esta opción le cause problemas. Desde la versión 4.2.0 en adelante, la opción `register_globals` viene desactivada. Para garantizar la seguridad de su aplicación, asegúrese de que esta opción **siempre** este desactivada, con el valor “off”, si es que está disponible.

* [Register_globals en el manual de PHP ](http://www.php.net/manual/es/security.globals.php)