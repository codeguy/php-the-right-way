---
title: Servidores Virtuales o Dedicados
isChild: true
---

## Servidores Virtuales o Dedicados

Si se siente cómodo trabajando en la administración de sistemas, o está interesado en aprender a hacerlo, entonces los servidores virtuales o dedicados le proporcionaran el control completo del entorno de producción de su aplicación.

### nginx y PHP-FPM

PHP, via el Gestor de Procesos FastCGI de PHP (FPM, con sus siglas en inglés), hace buen par con el servidor [nginx](http://nginx.org), que es un servidor ligero de alto rendimiento. Utiliza menos memoria que Apache y puede manejar más solicitudes simultáneas. Esto es de especial importancia en servidores que no disponen de mucha memoria.

* [Leer más sobre nginx](http://nginx.org)
* [Leer más sobre PHP-FPM](http://php.net/manual/es/install.fpm.php)
* [Leer más sobre configurar, y asegurar, nginx y PHP-FPM](https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/)

### Apache y PHP

PHP y Apache gozan de una larga historia juntos. Apache es muy configurable y tiene muchos [módulos](http://httpd.apache.org/docs/2.4/mod/) disponibles que extienden las características del servidor. Es una elección popular para servidores compartidos y es fácil de configurar armazones de desarrollo y aplicaciones como WordPress para que trabajen en el servidor. Desafortunadamente, Apache utiliza más recursos que nginx y por defecto no está configurado para manejar un alto número de visitantes al mismo tiempo.

Es posible configurar Apache para ejecutar PHP de diferentes maneras. La más común y más fácil de configurar es usando el módulo `mod_php5` con el [prefork MPM](http://httpd.apache.org/docs/2.4/mod/prefork.html). Aunque no es el modulo más eficiente en cuanto al uso de la memoria, es el mas fácil de utilizar. Esta opción es la más viable si no está interesado en adentrarse en los aspectos de administrar un servidor. Cabe notar que si usa el módulo `mod_php5`, tiene que usar el *prefork MPM*.

Alternativamente, si desea sacar más rendimiento y estabilidad de Apache, entones puede tomar ventaja del mismo sistema de FPM que usa nginx y utilizar el [worker MPM](http://httpd.apache.org/docs/2.4/mod/worker.html) o el [event MPM](http://httpd.apache.org/docs/2.4/mod/event.html) con mod_fastcgi o mod_fcgid. Esto le proporcionara una configuración más eficiente en memoria y mucho más rápida, aunque es más difícil de configurar.

* [Leer más sobre](http://httpd.apache.org/)
* [Leer más sobre los módulos Multi-Processing](http://httpd.apache.org/docs/2.4/mod/mpm_common.html)
* [Leer más sobre mod_fastcgi](http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html)
* [Leer más sobre mod_fcgid](http://httpd.apache.org/mod_fcgid/)
