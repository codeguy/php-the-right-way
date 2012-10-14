---
isChild: true
---

## Virtual or Dedicated Servers {#virtual_or_dedicated_servers_title}

If you are comfortable with systems administration, or are interested in learning it, virtual or dedicated servers give you complete control of your application's production environment.

### nginx and PHP-FPM

PHP, via PHP's built-in FastCGI Process Manager (FPM), pairs really nicely with [nginx](http://nginx.org), which is a lightweight, high-performance web server. It uses less memory than Apache and can better handle more concurrent requests. This is especially important on virtual servers that don't have much memory to spare.

* [Read more on nginx](http://nginx.org)
* [Read more on PHP-FPM](http://php.net/manual/en/install.fpm.php)
* [Read more on setting up nginx and PHP-FPM securely](https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/)

### Apache and PHP

PHP and Apache have a long history together. Apache is wildly configurable and has many available [modules](http://httpd.apache.org/docs/2.4/mod/) to extend functionality. It is a popular choice for shared servers and an easy setup for PHP frameworks and open source apps like WordPress. Unfortunately, Apache uses more resources than nginx by default and cannot handle as many visitors at the same time.

Apache has several possible configurations for running PHP. The most common and easiest to setup is the [prefork MPM](http://httpd.apache.org/docs/2.4/mod/prefork.html) with mod_php5. While it isn't the most memory efficient, it is the simplest to get working and to use. This is probably the best choice if you don't want to dig too deeply into the server administration aspects.  Note that if you use mod_php5 you MUST use the prefork MPM.

Alternatively, if you want to squeeze more performance and stability out of Apache then you can take advantage of the same FPM system as nginx and run the [worker MPM](http://httpd.apache.org/docs/2.4/mod/worker.html) or [event MPM](http://httpd.apache.org/docs/2.4/mod/event.html) with mod_fastcgi or mod_fcgid. This configuration will be significantly more memory efficient and much faster but it is more work to set up.

* [Read more on Apache](http://httpd.apache.org/)
* [Read more on Multi-Processing Modules](http://httpd.apache.org/docs/2.4/mod/mpm_common.html)
* [Read more on mod_fastcgi](http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html)
* [Read more on mod_fcgid](http://httpd.apache.org/mod_fcgid/)
