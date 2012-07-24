---
title: Composer y Packagist
isChild: true
---

## Composer y Packagist

Composer es un **excelente** gestor de dependencias para PHP. Solo tiene que añadir las dependencias de su proyecto a un archivo llamado `composer.json`, ejecutar algunos comandos y Composer descargará automáticamente las dependencias para su proyecto y configurará el cargador automático en cuestión de segundos.

Ya existen muchas librerías PHP compatibles con Composer y están listas para que las use en su proyecto. Hay una lista de estos “paquetes” en el sitio [Packagist][1], que es el repositorio oficial de librerías compatibles con Composer.

### Como configurar Composer

Se puede instalar Composer local (en el directorio de trabajo actual, aunque esto ya no es recomendable) o globalmente (por ejemplo, en /user/local/bin). Supongamos que usted quiere configurar Composer localmente. Desde el directorio raíz de su proyecto:

    curl -s http://getcomposer.org/installer | php

Esto descargará el archivo binario `composer.phar`. Se puede ejecutar este archivo con `php` para manejar las dependencias de su proyecto. *Por favor, tenga en cuenta:* Si ejecuta el código directamente en el intérprete de PHP al mismo tiempo que lo descarga, tenga cuidado de leer el código del programa con anterioridad y confirmar que es seguro.

### Como configurar Composer (manualmente)

Configurar Composer manualmente requiere técnicas avanzadas. No obstante, hay varias razones por las cuales un desarrollador como usted prefiera configurarlo de esta manera en vez de utilizar la rutina de configuración interactiva. La configuración interactiva verifica su sistema de PHP para asegurar que:

- Está utilizando una versión compatible de PHP
- Los archivos `.phar` pueden ser ejecutados correctamente
- Tiene suficientes permisos en los directorios
- Algunas extensiones que pueden causar problemas no han sido cargadas
- El archivo `php.ini` tiene los ajustes necesarios

Ya que la configuración manual no realiza ninguna de estas verificaciones, necesita tomar en consideración si tal funcionamiento es lo que usted desea. De todas maneras, usted puede obtener y configurar Composer manualmente de la siguiente manera:

    curl -s http://getcomposer.org/composer.phar -o $HOME/local/bin/composer
    chmod +x $HOME/local/bin/composer

La ruta `$HOME/local/bin` (o un directorio que usted escoja) necesita estar en el variable de entorno `$PATH`. De esta manera, el comando `composer` estará habilitado en cualquier directorio del sistema.

Cuando se encuentre con instrucciones que le sugieran ejecutar Composer con `php composer.phar install`, esto se puede sustituir con:

    composer install

### Como Definir y Configurar Dependencias

Primero, se crea un archivo `composer.json` en el mismo directorio donde se encuentra `composer.phar`. Enseguida, encontramos un ejemplo que define el paquete [Twig][2] como una dependencia del  proyecto:

	{
	    "require": {
	        "twig/twig": "1.8.*"
	    }
	}

El siguiente paso es ejecutar Composer desde el directorio raíz de su proyecto:

    php composer.phar install

Esto descargara y configurara la dependencia dentro de un directorio llamado `vendors/`. Una vez configurado, añada esta línea de código al archivo principal de su aplicación:

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

 Esta instrucción le dice a su programa que use el cargador automático de Composer para cargar cualquier dependencia que haya configurado. Ahora sus dependencias serán cargadas dinámicamente según su programa las requiera.

* [Aprenda más acerca de Composer][3]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: http://getcomposer.org/doc/00-intro.md
