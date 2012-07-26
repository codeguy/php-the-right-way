---
title: Caché de Objetos
isChild: true
---

## Caché de Objetos

Hay ocasiones en que es de beneficio cachear objetos individualmente en su código, tal como los datos que se obtienen de una base de datos donde sabemos que el resultado no va a cambiar. En estos casos se puede usar el caché de objetos para guardar estos datos en memoria y estén disponibles para rápido acceso después.  Si guarda estos datos en un almacén de datos después de que los solicita de la base de datos, y solo los recupera del almacén en futuras ocasiones, se puede obtener una mejora significativa en rendimiento, así como reducir la carga en los servidores de bases de datos.

Muchas de las soluciones de caché de bytecode populares también le permiten cachear datos personalizados, así que con más razón debe tomar ventaja de estos. APC, XCache y WinCache, proporcionan APIs para guardar al caché de memoria los datos que provienen de su código PHP.

Los sistemas de caché más utilizados son APC y memcached. APC es una gran elección para implementar caché de objetos, ya que incluye un API simple para añadir sus propios datos al caché de memoria y tiene una configuración muy simple. La una limitación de APC es que está vinculado al servidor donde ha sido configurado. Por otro lado, memcached, puede ser configurado como un servicio por separado y se puede acceder a través de la red, lo que significa que pueden guardarse objetos en un almacén de datos de alta velocidad y en una ubicación central y muchos otros sistemas pueden recurrir a él.

En una configuración de red, APC generalmente mostrará más rendimiento que memcached en lo que se refiere a la velocidad de acceso, pero es posible ampliar memcached a una capacidad mayor. Si no espera requerir de servidores múltiples para ejecutar su aplicación, o no necesita las características adicionales que le ofrece memcached, entonces APC es su mejor alternativa para el cacheo de objetos.

Ejemplo de lógica que utiliza APC:

{% highlight php %}
<?php
// Verificar que los datos guardados como ‘datos_costosos’ existen en el caché
$datos = apc_fetch('datos_costosos');
if (!$datos)
{
    // Los datos no se encuentran en el caché, realiza llamada costosa y guárdala para después
    $datos = obten_datos_costosos();
    apc_store('datos_costosos', $datos);
}

print_r($datos);
{% endhighlight %}

Aprenda acerca de los sistemas de caché de objetos más populares:

* [Funciones de APC](http://php.net/manual/es/ref.apc.php)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [XCache APIs](http://xcache.lighttpd.net/wiki/XcacheApi)
* [Funciones de WinCache](http://www.php.net/manual/es/ref.wincache.php)