---
isChild: true
---

## Virtual or Dedicated Servers

If you are comfortable with systems administration, or are interested in learning it, virtual or dedicated servers give you complete control of your application's production environment.

### nginx and PHP-FPM

PHP, via PHP's built-in FastCGI Process Manager (FPM), pairs really nicely with [nginx](http://nginx.org), which is a lightweight, high-performance web server. It uses less memory than Apache and can better handle more concurrent requests. This is especially important on virtual servers that don't have much memory to spare.

* [Read more on nginx](http://nginx.org)
* [Read more on PHP-FPM](http://php.net/manual/en/install.fpm.php)
* [Read more on setting up nginx and PHP-FPM securely](https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/)

### Apache and PHP

PHP and Apache have a long history together. Apache is wildly configurable and allows sites to control their configurations dynamically, via `.htaccess` files, on a per-directory basis. This has made it a popular choice for shared servers and an easy setup for PHP frameworks and open source apps like WordPress. Unfortunately, Apache uses more resources than nginx and cannot handle as many visitors at the same time.
