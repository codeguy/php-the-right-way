---
isChild: true
---

## Windows Setup

Windows binary PHP downloads are available at http://windows.php.net.  For PHP 5.3 there is an installer which puts PHP in place and helps configure your chosen server.  This is no longer available for PHP 5.4 so you need to unzip and drop PHP into place. For learning and local development, use the built in webserver with PHP 5.4, you don't need to worry about configuring it with a server.

There are "all-in-one" tools such as the Web Platform Installer, WAMP and others that will help get a windows development environment up and running fast, but do not use these for production.

If you need to run your production system on windows IIS7 will give you the most stable and best performance.  You can use phpmanager (a gui plugin for IIS7) to make configuring and managing PHP simple. IIS7 comes with fastcgi built in and ready to go, you just need to configure PHP as a handler.  For support and additional resources there is a dedicated area on iis.net for PHP.

Generally running your application on different environment in development and production can lead to strange bugs popping up when you go live. To avoid this, if you have a non-windows based server for production, you should consider using a Virtual Machine to develop on Windows.

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[Web Platform Installer]: http://www.microsoft.com/web/downloads/platform.aspx
[PHP on IIS7]: http://php.iis.net/