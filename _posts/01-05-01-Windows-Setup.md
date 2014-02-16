---
title: Windows 安装
anchorid: windows_setup
isChild: true
---

<h2 id="windows_setup">Windows 安装</h2>

Windows下有多种方式来安装PHP，你可以[下载二进制安装包][php-downloads]。

若只是本地开发和学习，可以直接使用PHP 5.4+内置的Web服务器，还能省去配置服务器的麻烦。如果你喜欢包含PHP、Apache和MySQL的
一键安装包，可以下载[Web Platform Installer][wpi]、[Zend Server CE][zsce]、[XAMPP][xampp]或[WAMP][wamp]，它们可以帮你快速搭建出PHP运行环境。
不过这些工具和你产品的正式运行环境会有一些差别，特别是你在Windows下开发，而代码最终部署在Linux服务器上的时候。

如果你需要把产品部署在Windows上，那么IIS7将给你最稳定和性能最佳的环境，你可以使用[phpmanager][phpmanager](IIS7下的PHP
管理插件)来配置和管理PHP。IIS7已经内置FastCGI，你只需把PHP配置为它的处理器即可。更多详情可以参考[dedicated area on iis.net][php-iis]。

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/en/products/server-ce/
[xampp]: http://www.apachefriends.org/en/xampp.html
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
