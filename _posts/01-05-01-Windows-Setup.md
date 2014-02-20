---
isChild: true
---

## Windows Setup {#windows_setup_title}

PHP is available in several ways for Windows. You can [download the binaries][php-downloads] and until recently you could use a '.msi' 
installer. The installer is no longer supported and stops at PHP 5.3.0.

For learning and local development you can use the built in webserver with PHP 5.4+ so you don't need to worry about configuring it. If you 
would like an "all-in-one" which includes a full-blown webserver and MySQL too then tools such as the [Web Platform Installer][wpi], 
[Zend Server CE][zsce], [XAMPP][xampp] and [WAMP][wamp] will help get a Windows development environment up and running fast. That said, these tools will be 
a little different from production so be careful of environment differences if you are working on Windows and deploying to Linux.

If you need to run your production system on Windows then IIS7 will give you the most stable and best performance. You can use 
[phpmanager][phpmanager] (a GUI plugin for IIS7) to make configuring and managing PHP simple. IIS7 comes with FastCGI built in and ready 
to go, you just need to configure PHP as a handler. For support and additional resources there is a [dedicated area on iis.net][php-iis] for 
PHP.

[php-downloads]: http://windows.php.net
[phpmanager]: http://phpmanager.codeplex.com/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[zsce]: http://www.zend.com/en/products/server-ce/
[xampp]: http://www.apachefriends.org/en/xampp.html
[wamp]: http://www.wampserver.com/
[php-iis]: http://php.iis.net/
