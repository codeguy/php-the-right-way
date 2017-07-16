---
isChild: true
anchor:  windows_setup
title: Windows 安裝
---

## Windows 安装 {#windows_setup_title}

你可以从 [windows.php.net/download][php-downloads] 下载二进制包。 解压后, 最好为你的 PHP 所在的根目录（php.exe 所在的文件夹）设置 [PATH][windows-path]，这样就可以从命令行中直接执行 PHP。

如果只是学习或者本地开发，可以直接使用 PHP 5.4+ 内置的 Web 服务器， 还能省去配置服务器的麻烦。如果你想要包含有网页服务器以及 MySql 的集成包，那么像是[Web Platform Installer][wpi], [XAMPP][xampp], [EasyPHP][easyphp] 和 [WAMP][wamp] 这类工具将会帮助你快速建立 Windows 开发环境。不过这些工具将会与线上环境有些许差别，如果你是在 Windows 下开发，而生产环境则部署至 Linux ，请小心。

如果你需要将生产环境部署在 Windows 上，那 IIS7 将会提供最稳定和最佳的性能。你可以使用 [phpmanager][phpmanager] (IIS7 的图形化插件) 让你简单的设置并管理 PHP。IIS7 也有内置的 FastCGI ，你只需要将 PHP 配置为它的处理器即可。更多详情请见[dedicated area on iis.net][php-iis]。

一般情况下，使用不同环境开发，会导致你在上线代码时出现 Bug。如果你在 Window 下开发将会用于 Linux 下运行的代码，请应该考虑使用 [虚拟机](/#virtualization_title).

这里推荐 Chris Tankersley 的一篇关于 Window 下工具使用的文章 - [Windows 下的 PHP 开发][windows-tools].

[easyphp]: http://www.easyphp.org/
[phpmanager]: http://phpmanager.codeplex.com/
[openserver]: http://open-server.ru/
[wamp]: http://www.wampserver.com/en/
[php-downloads]: http://windows.php.net/download/
[php-iis]: http://php.iis.net/
[windows-path]: http://www.windows-commandline.com/set-path-command-line/
[windows-tools]: http://ctankersley.com/2016/11/13/developing-on-windows-2016/
[wpi]: https://www.microsoft.com/web/downloads/platform.aspx
[xampp]: http://www.apachefriends.org/en/xampp.html
