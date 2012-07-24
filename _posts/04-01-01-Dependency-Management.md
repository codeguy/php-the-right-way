---
title: Gestión de Dependencias
---

# Gestión de Dependencias

Existen un sinnúmero de librerías, armazones de desarrollo (frameworks) y componentes de PHP de donde escoger y lo más probable es que su proyecto utilice varios de ellos. A estos se les llama dependencias de proyecto. Hasta muy recientemente, PHP no tenía una manera fácil de gestionar tales dependencias. Aun si usted se hacía cargo de estos manualmente, todavía tendría que mantenerse al tanto de los cargadores automáticos (autoloaders). Ahora ya no es así.

Actualmente hay dos sistemas principales de gestión de paquetes para PHP: Composer y PEAR. ¿Cuál es el adecuado para usted? La respuesta es, ambos.

* Use **Composer** cuando maneje las dependencias de un solo proyecto.

* Use **PEAR** cuando maneje las dependencias de todo el sistema de PHP en su plataforma.

Generalmente, los paquetes de Composer solo estarán disponibles en los proyectos que usted especifique explícitamente, mientras que un paquete de PEAR estaría disponible a todos los proyectos bajo el sistema PHP. Puede que PEAR parezca la propuesta más accesible a primera vista, sin embargo, también existen ventajas al manejar las dependencias con Composer en base al proyecto en que se está trabajando.
