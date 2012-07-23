---
isChild: true
---

## Configuración en Mac

El sistema OSX viene previamente configurado con un PHP que normalmente no está actualizado a la versión corriente. El sistema “Lion” viene configurado con PHP 5.3.6 y el sistema “Mountain Lion” hace disponible la versión 5.3.10.

Para actualizar la versión de PHP en el sistema OSX se puede instalar por medio de diferentes [gestores de paquetes][mac-package-managers], sin embargo, recomendamos el paquete
[php-osx by Liip][php-osx-downloads].

La otra opción disponible es que [usted compile][mac-compile] el paquete de instalación. En tal caso debe asegurarse de tener la aplicación para desarrollo _Xcode_  o, como sustituto, las herramientas ["Command Line Tools for Xcode"][apple-developer] que se pueden descargar directamente del _Mac Developer Center_ de Apple.

También existe un paquete tipo “todo incluido”, con un simple control grafico de configuración, llamado [MAMP][mamp-downloads]. Este incluye una configuración de PHP junto con el servidor web Apache y el gestor de base de datos MySQL.

[mac-package-managers]: http://www.php.net/manual/en/install.macosx.packages.php
[mac-compile]: http://www.php.net/manual/en/install.macosx.compile.php
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
[apple-developer]: https://developer.apple.com/downloads
[mamp-downloads]: http://www.mamp.info/en/downloads/index.html
[php-osx-downloads]: http://php-osx.liip.ch/
