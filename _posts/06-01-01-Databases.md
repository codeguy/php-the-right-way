---
title: Bases de Datos
---

# Bases de Datos

Muchas veces su código PHP utilizara una base de datos para persistir información. Hay algunas opciones para conectarse e interactuar con la base de datos. La opcion recomendable, _hasta PHP 5.1.0_, era el utilizar los controladores nativos como [mysql][mysql], [mysqli][mysqli], [pgsql][pgsql], y otros.

Los controladores nativos son excelentes si solamente estara utilizando UNA SOLA base de datos en su aplicación, pero si, por ejemplo, esta utilizando MySQL y un poco de MSSQL, o necesita conectarse a una base de datos Oracle, entonces no podrá utilizar los mismos controladores. Necesita aprender un nuevo API para cada base de datos &mdash; y eso puede ser frustrante.

Algo adicional sobre los controladores nativos: la extensión `mysql` para PHP ya no está siendo actualizada y el estatus oficial de ella desde PHP 5.4.0 es la de "Eliminación a Largo Plazo". Esto quiere decir que la extensión será eliminada en los próximos lanzamientos, así que en PHP 5.6 (o lo que viene después de 5.5) puede que ya no exista. Si usted está usando `mysql_connect()` y `mysql_query()` en sus aplicaciones es posible que tenga que reemplazar su código en el futuro, así que la mejor opción es empezar a usar `mysqli` o la librería PDO de ahora en adelante. _Si esta comenzando de cero entonces no utilice la extensión `mysql` en absoluto_. Utilice la [extensión MySQLi][mysqli], o la librería PDO.

* [PHP: Elegir una API para MySQL](http://php.net/manual/es/mysqlinfo.api.choosing.php)

[mysql]: http://php.net/manual/es/mysql
[mysqli]: http://php.net/manual/es/book.mysqli.php
[pgsql]: http://php.net/manual/es/book.pgsql.php
