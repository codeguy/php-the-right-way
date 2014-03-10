---
title: Installation sous Windows
isChild: true
---

## Installation sous Windows {#installation_sous_windows_title}

PHP est disponible sous Windows de plusieurs façons. Vous pouvez [téléchargez les binaires][php-downloads] et jusqu'à 
récemment, vous pouviez utiliser un installateur '.msi'. Cependant il n'est plus maintenu depuis la version 5.3.0.

Pour l'apprentissage et le développement en local, vous pouvez dorénavant utiliser le serveur intégré à PHP 5.4+, ainsi 
vous n'aurez plus à vous soucier de la configuration du serveur web. Si vous souhaitez un système "tout-en-un" incluant 
un serveur web et MySQL alors des outils tels que [WPI][wpi], [Zend Server CE][zsce], [XAMPP][xampp] ou encore 
 [WAMP][wamp] vous permettront d'avoir un environnement de développement complet rapidemenent. Ceci étant dit, ces 
outils sont différents de ce que l'on trouve en production donc faites attention sur les différences d'environnement si 
vous travaillez sur Windows et déployez sur Linux.

Si vous désirez utiliser Windows comme plateforme de production alors le serveur IIS7 vous donnera le meilleur compromis 
entre stabilité et performance. Vous pouvez utiliser [phpmanager][phpmanager] qui est un plugin graphique pour IIS7 
afin d'effectuer les configurations nécessaires pour faire tourner PHP. IIS7 intègre FastCGI prêt à l'emploi, vous 
n'avez qu'à configurer PHP en tant qu'extension. Pour plus d'informations, visiter le site dédié sur [iis.net][php-iis].

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/fr/products/server/free-edition
[xampp]: http://www.apachefriends.org/en/xampp.html
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
