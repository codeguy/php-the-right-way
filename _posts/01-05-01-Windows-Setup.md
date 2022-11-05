---
isChild: true
anchor:  windows_setup
---

## Windows Setup {#windows_setup_title}

You can download the binaries from [windows.php.net/download][php-downloads]. After the extraction of PHP, it is recommended to set the [PATH][windows-path] to the root of your PHP folder (where php.exe is located) so you can execute PHP from anywhere.

For learning and local development, you can use the built in webserver with PHP 5.4+ so you don't need to worry about
configuring it. If you would like an "all-in-one" which includes a full-blown webserver and MySQL too then tools such
as the [XAMPP][xampp], [EasyPHP][easyphp], [OpenServer][openserver] and [WAMP][wamp] will
help get a Windows development environment up and running fast. That said, these tools will be a little different from
production so be careful of environment differences if you are working on Windows and deploying to Linux.

If you need to run your production system on Windows, then IIS7 will give you the most stable and best performance. You
can use [phpmanager][phpmanager] (a GUI plugin for IIS7) to make configuring and managing PHP simple. IIS7 comes with
FastCGI built in and ready to go, you just need to configure PHP as a handler. For support and additional resources
there is a [dedicated area on iis.net][php-iis] for PHP.

Generally running your application on different environment in development and production can lead to strange bugs popping up when you go
live. If you are developing on Windows and deploying to Linux (or anything non-Windows) then you should consider using a [Virtual Machine](/#virtualization_title).

Chris Tankersley has a very helpful blog post on what tools he uses to do [PHP development using Windows][windows-tools].

[easyphp]: https://www.easyphp.org/
[phpmanager]: http://phpmanager.codeplex.com/
[openserver]: https://ospanel.io/
[wamp]: https://www.wampserver.com/en/
[php-downloads]: https://windows.php.net/download/
[php-iis]: https://php.iis.net/
[windows-path]: https://www.windows-commandline.com/set-path-command-line/
[windows-tools]: https://ctankersley.com/2016/11/13/developing-on-windows-2016/
[xampp]: https://www.apachefriends.org/
