---
title: 虚拟或专用服务器
isChild: true
anchor:  virtual_or_dedicated_servers
---

## 虚拟或专用服务器 {#virtual_or_dedicated_servers_title}

如果你喜欢系统管理员的工作，或者对这方面感兴趣，虚拟或者专用服务器可以让你完全控制自己的生产环境。

### nginx 和 PHP-FPM

PHP 通过内置的 FastCGI 进程管理器（FPM），可以很好的与轻量级的高性能 web 服务器 [nginx] 协作使用。nginx 比 Apache 占用更少内存而且可以更好的处理并发请求，这对于并没有太多内存的虚拟服务器尤其重要。

* [阅读更多 nginx 的内容][nginx]
* [阅读更多 PHP-FPM 的内容][phpfpm]
* [学习如何配置安全的 nginx 和 PHP-FPM][secure-nginx-phpfpm]

### Apache 和 PHP

PHP 和 Apache 有很长的合作历史。Apache 有很强的可配置性和大量的 [扩展模块][apache-modules]
 。是共享主机中常见的Web服务器，完美支持各种 PHP 框架和开源应用(如 WordPress )。可惜的是，默认情况下，Apache 会比 nginx 消耗更多的资源，而且并发处理能力不强。

Apache 有多种方式运行 PHP，最常见的方式就是使用 mode_php5 的 [prefork MPM] 方式。但是它对内存的利用效率并不高，如果你不想深入服务器管理方面学习，那么这种简单的方式可能是你最好的选择。需要注意的事如果你使用 mod_php5，就必须使用 prefork MPM。

如果你追求高性能和高稳定性，可以为 Apache 选择与 nginx 类似的的 FPM 系统 [worker MPM] 或者
[event MPM]，它们分别使用 mod_fastcgi 和 mod_fcgid。这种方式可以更高效的利用内存，运行速度也更快，但是配置也相对复杂一些。

* [阅读更多 Apache][apache]
* [阅读更多 Apache 多进程模块][apache-MPM]
* [阅读更多 mod_fastcgi][mod_fastcgi]
* [阅读更多 mod_fcgid][mod_fcgid]
* [阅读更多 mod_proxy_fcgi][mod_proxy_fcgi]
* [配置 Apache 通过 mod_proxy_fcgi 使用 PHP-FPM][tutorial-mod_proxy_fcgi]


[nginx]: http://nginx.org/
[phpfpm]: http://php.net/install.fpm
[secure-nginx-phpfpm]: https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/
[apache-modules]: http://httpd.apache.org/docs/2.4/mod/
[prefork MPM]: http://httpd.apache.org/docs/2.4/mod/prefork.html
[worker MPM]: http://httpd.apache.org/docs/2.4/mod/worker.html
[event MPM]: http://httpd.apache.org/docs/2.4/mod/event.html
[apache]: http://httpd.apache.org/
[apache-MPM]: http://httpd.apache.org/docs/2.4/mod/mpm_common.html
[mod_fastcgi]: https://blogs.oracle.com/opal/entry/php_fpm_fastcgi_process_manager
[mod_fcgid]: http://httpd.apache.org/mod_fcgid/
[mod_proxy_fcgi]: https://httpd.apache.org/docs/current/mod/mod_proxy_fcgi.html
[tutorial-mod_proxy_fcgi]: https://serversforhackers.com/video/apache-and-php-fpm
