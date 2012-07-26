---
title: Caché de Bytecode
isChild: true
---

## Caché de Bytecode

Cuando se ejecuta un archivo de PHP, detrás del telón primero se compila en *bytecode* (también llamado código de operación u *opcode*) y, solo entonces, el bytecode es ejecutado. 

Si un archivo de PHP no es modificado, el bytecode siempre será el mismo. En este caso, el proceso de compilación se convierte en un desperdicio de los recursos del CPU.

Aquí es donde el caché de bytecode entra en acción. Este previene la compilación redundante al almacenar el bytecode en memoria y reutilizándolo en llamadas sucesivas. 

La configuración del caché de bytecode toma solo unos minutos, pero su aplicación se acelerará notablemente. No hay en realidad ninguna razón por la cual no se debe utilizar. 

Los cachés de bytecode más populares son:

* [APC](http://php.net/manual/en/book.apc.php)
* [XCache](http://xcache.lighttpd.net/)
* [Zend Optimizer+](http://www.zend.com/products/server/) (parte del paquete de Zend Server)
* [WinCache](http://www.iis.net/download/wincacheforphp) (extensión para MS Windows Server)
