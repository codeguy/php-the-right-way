---
title:   Virtual or Dedicated Servers
isChild: true
anchor:  virtual_or_dedicated_servers
---

## Virtual or Dedicated Servers {#virtual_or_dedicated_servers_title}

If you are comfortable with systems administration, or are interested in learning it, virtual or dedicated servers give
you complete control of your application's production environment.

### nginx and PHP-FPM

PHP, via PHP's built-in FastCGI Process Manager (FPM), pairs really nicely with [nginx], which is a lightweight,
high-performance web server. It uses less memory than Apache and can better handle more concurrent requests. This is
especially important on virtual servers that don't have much memory to spare.

* [Read more on nginx][nginx]
* [Read more on PHP-FPM][phpfpm]
* [Read more on setting up nginx and PHP-FPM securely][secure-nginx-phpfpm]

### Apache and PHP

PHP and Apache have a long history together. Apache is wildly configurable and has many available
[modules][apache-modules] to extend functionality. It is a popular choice for shared servers and an easy setup for PHP
frameworks and open source apps like WordPress. Unfortunately, Apache uses more resources than nginx by default and
cannot handle as many visitors at the same time.

Apache has several possible configurations for running PHP. The most common and easiest to setup is the [prefork MPM]
with `mod_php`. While it isn't the most memory efficient, it is the simplest to get working and to use. This is probably
the best choice if you don't want to dig too deeply into the server administration aspects. Note that if you use
`mod_php` you MUST use the prefork MPM.

Alternatively, if you want to squeeze more performance and stability out of Apache then you can take advantage of the
same FPM system as nginx and run the [worker MPM] or [event MPM] with mod_fastcgi or mod_fcgid. This configuration will
be significantly more memory efficient and much faster but it is more work to set up.

If you are running Apache 2.4 or later, you can use [mod_proxy_fcgi] to get great performance that is easy to setup.

* [Read more on Apache][apache]
* [Read more on Multi-Processing Modules][apache-MPM]
* [Read more on mod_fastcgi][mod_fastcgi]
* [Read more on mod_fcgid][mod_fcgid]
* [Read more on mod_proxy_fcgi][mod_proxy_fcgi]
* [Read more on setting up Apache and PHP-FPM with mod_proxy_fcgi][tutorial-mod_proxy_fcgi]


[nginx]: https://nginx.org/
[phpfpm]: https://www.php.net/install.fpm
[secure-nginx-phpfpm]: https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/
[apache-modules]: https://httpd.apache.org/docs/2.4/mod/
[prefork MPM]: https://httpd.apache.org/docs/2.4/mod/prefork.html
[worker MPM]: https://httpd.apache.org/docs/2.4/mod/worker.html
[event MPM]: https://httpd.apache.org/docs/2.4/mod/event.html
[apache]: https://httpd.apache.org/
[apache-MPM]: https://httpd.apache.org/docs/2.4/mod/mpm_common.html
[mod_fastcgi]: https://blogs.oracle.com/opal/post/php-fpm-fastcgi-process-manager-with-apache-2
[mod_fcgid]: https://httpd.apache.org/mod_fcgid/
[mod_proxy_fcgi]: https://httpd.apache.org/docs/current/mod/mod_proxy_fcgi.html
[tutorial-mod_proxy_fcgi]: https://serversforhackers.com/video/apache-and-php-fpm
