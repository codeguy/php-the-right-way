---
isChild: true
title: Windows 安裝
anchor:  windows_setup
---

## Windows 安装 {#windows_setup_title}

Windows 下有多种安装 PHP 的方式，你可以 [下载二进制安装包][php-downloads] 并使用 `.msi` 安装程序。从 PHP 5.3.0 之后，这个安装程序将不再提供下载支持。

如果只是学习或者本地开发，可以直接使用 PHP 5.4+ 内置的 Web 服务器， 还能省去配置服务器的麻烦。如果你想要包含有网页服务器以及 MySql 的集成包，那么像是[Web Platform Installer][wpi], [XAMPP][xampp], [EasyPHP][easyphp] 和 [WAMP][wamp] 这类工具将会帮助你快速建立 Windows 开发环境。不过这些工具将会与线上环境有些许差别，如果你是在 Windows 下开发，而生产环境则部署至 Linux ，请小心。

如果你需要将生产环境部署在 Windows 上，那 IIS7 将会提供最稳定和最佳的性能。你可以使用 [phpmanager][phpmanager] (IIS7 的图形化插件) 让你简单的设置并管理 PHP。IIS7 也有内置的 FastCGI ，你只需要将 PHP 配置为它的处理器即可。更多详情请见[dedicated area on iis.net][php-iis]。


[php-downloads]: http://windows.php.net
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[xampp]: http://www.apachefriends.org/en/xampp.html
[easyphp]: http://www.easyphp.org/
[wamp]: http://www.wampserver.com/en/
[phpmanager]: http://phpmanager.codeplex.com/
[php-iis]: http://php.iis.net/
