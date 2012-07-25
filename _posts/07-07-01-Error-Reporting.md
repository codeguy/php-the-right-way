---
title: Reporte de Errores 
isChild: true
---

## Reporte de Errores

El registro de errores puede ser muy útil para encontrar los lugares donde existen problemas en su aplicación, pero también puede exponer información acerca de la estructura de su aplicación al exterior. Para proteger efectivamente su aplicación de problemas que pudieran ser causados por la salida de mensajes de error, necesita configurar su servidor de desarrollo de diferente manera que su servidor de producción.

### Desarrollo

Para mostrar los errores durante el **desarrollo** de su aplicación, configure las siguientes opciones en su archivo `php.ini`:

- display_errors: On
- error_reporting: E_ALL
- log_errors: On

### Producción

Para esconder los errores en su entorno de **producción**, configure su archivo `php.ini` de la siguiente manera:

- display_errors: Off
- error_reporting: E_ALL
- log_errors: On

Con estas opciones en su entorno de producción, los errores seguirán siendo registrados en los registros de errores de su servidor web, pero no serán mostrados al usuario. Para más información en cuanto a estas opciones, vea el manual de PHP:

* [Error_reporting](http://www.php.net/manual/es/errorfunc.configuration.php#ini.error-reporting)
* [Display_errors](http://www.php.net/manual/es/errorfunc.configuration.php#ini.display-errors)
* [Log_errors](http://www.php.net/manual/es/errorfunc.configuration.php#ini.log-errors)