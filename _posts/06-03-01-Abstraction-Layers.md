---
title: Capas de Abstracción
isChild: true
---

## Capas de Abstracción

Muchos de los armazones de desarrollo disponibles proveen su propia capa de abstracción que puede o no usar PDO como base. Estas capas muy a menudo emulan las características y diferencias entre un sistema de base de datos y otro al envolver las consultas en métodos de PHP, lo que proporciona una abstracción efectiva de la base de datos. Claramente, esto añade una pequeña sobrecarga a su proyecto, pero si está tratando de desarrollar una aplicación portable que necesite trabajar con MySQL, PostgreSQL y SQLite entonces esa pequeña sobrecarga valdrá la pena ya que mantendrá su código limpio y con una estructura elegante.

Algunas capas de abstracción han sido desarrolladas con el estándar PSR-0  para uso de espacios de nombres en mente, lo cual facilita la configuración en cualquiera de sus proyectos (La siguiente documentación solo está disponible en inglés):

* [Doctrine2 DBAL][2]
* [ZF2 Db][4]
* [ZF1 Db][3]


[2]: http://www.doctrine-project.org/projects/dbal.html
[3]: http://framework.zend.com/manual/en/zend.db.html
[4]: http://packages.zendframework.com/docs/latest/manual/en/zend.db.html
