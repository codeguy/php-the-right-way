---
title: Interface de Línea de Comando
isChild: true
---

## Interface de Línea de Comando

PHP fue creado principalmente para desarrollar aplicaciones web, pero también es muy útil para implementar programas que corren en la interface de línea de comando (CLI). Los programas de línea de comando en PHP pueden ayudarle a automatizar tareas comunes como pruebas, despliegues y la administración de aplicaciones.

Los programas CLI en PHP son muy potentes porque el código de la aplicación se puede utilizar directamente sin tener que crear o asegurar un GUI web para su uso. Por esta razón, ¡asegúrese de no colocar sus programas CLI en su directorio raíz público!

Intente correr PHP desde la línea de comando:

{% highlight bash %}
> php -i
{% endhighlight %}

La opción `-i` imprimirá la configuración de PHP, como sucede con la función [`phpinfo`][phpinfo]. 
La opción `-a` habilita una consola interactiva muy similar al IRB de Ruby o a la consola interactiva de Python. Existen varias [opciones de línea de comando][cli-options] que resultan muy útiles.
Vamos a escribir un programa simple que imprima "Hola, $nombre" a la línea de comando. Para empezar, vamos a crear un archive llamad `hola.php` como se muestra enseguida:

{% highlight php %}
<?php
if($argc != 2) {
    echo "Uso: php hola.php [nombre].\n";
    exit(1);
}
$nombre = $argv[1];
echo "Hola, $nombre\n";
{% endhighlight %}

PHP hace disponibles dos variables especiales basados en los argumentos que recibe el programa el ser ejecutado. El variable de tipo _entero_ [`$argc`][argc] contiene el *count* o número de argumentos y el variable de tipo _array_ [`$argv`][argv] contiene el *value* o valor de cada uno de los argumentos que se pasaron durante la ejecución. El primer argumento siempre es el nombre del archivo del programa PHP, que en este caso es `hola.php`.

La expresión `exit()` se puede usar con un número que no es cero para dejarle saber a la consola que el comando ha fallado. [Aquí][exit-codes] puede encontrar los códigos de salida más comúnmente usados.

Para ejecutar el programa desde la línea de comando: 

{% highlight bash %}
> php hola.php
Uso: php hola.php [nombre]
> php hola.php mundo
Hola, mundo
{% endhighlight %}


 * [Aprenda acerca de la ejecución de PHP desde la línea de comando][php-cli]
 * [Aprenda como configurar Windows para ejecutar PHP desde la línea de comando][php-cli-windows]


[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits