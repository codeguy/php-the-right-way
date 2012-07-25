---
title: Archivos de Configuración
isChild: true
---

## Archivos de Configuración

Cuando esté trabajando con archivos de configuración para su aplicación, las mejores prácticas dictan que utilice uno de los métodos siguientes:

- Es recomendable que almacene sus archivos de configuración donde no se pueda acceder a ellos directamente por medio del sistema de archivos.
- Si no tiene otra alternativa más que almacenar sus archivos de configuración en la raíz de documentos de su aplicación, debe adjuntar la extensión`.php` al nombre de sus archivos. De esta manera, aun si alguien accede a ellos directamente, la información no será impresa en forma de texto a la pantalla.
- La información en los archivos de configuración debe ser protegida ya sea por medio de codificación o con los permisos de grupo/usuario pertinentes en el sistema de archivos.