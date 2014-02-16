---
title: 虚拟或独立主机
anchorid: virtual_or_dedicated_servers
isChild: true
---

<h2 id="virtual_or_dedicated_servers">虚拟或独立主机</h2>

如果你愿意或想学习系统管理，那么虚拟或独立主机可以让你完全控制自己的运行环境。

### nginx和PHP-FPM

PHP通过内置的FastCGI进程管理器(FPM)，可以非常高效地和轻量级的高性能Web服务器[nginx](http://nginx.org)进行通信。
nginx比Apache消耗更少的内存，能更好的处理并发请求，这在内存限制较多的虚拟主机环境中尤为重要。

* [阅读更多nginx](http://nginx.org)
* [阅读更多PHP-FPM](http://php.net/manual/en/install.fpm.php)
* [学习如何配置安全的nginx和PHP-FPM](https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/)

### Apache和PHP

PHP和Apache是一个老搭档，历史悠久。Apache有很强的可配置性和大量的[扩展模块](http://httpd.apache.org/docs/2.4/mod/)，
是共享主机中常见的Web服务器，完美支持各种PHP框架和开源应用(如WordPress)。可惜的是，默认情况下，Apache比nginx更耗资源，并发处理能力不强。

Apache有多种方式运行PHP，最常见简单的方式是使用mod_php5的[prefork MPM](http://httpd.apache.org/docs/2.4/mod/prefork.html)方式，
缺点是它对内存的利用效率不高，如果你不想深入学习服务器的管理，那么这种最简单的方式就是你的最佳选择了。注意，如果你使用mod_php5，最好使用
prefork MPM方式。

如果你想追求高性能和高稳定性，那么也可以为Apache选择与nginx类似的FPM系统[worker MPM](http://httpd.apache.org/docs/2.4/mod/worker.html)或
[event MPM](http://httpd.apache.org/docs/2.4/mod/event.html)，它们分别使用mod_fastcgi和mod_fcgid模块。FPM方式可以更高效的利用内存，运行
速度更快，但是配置也相对复杂一些。

* [阅读更多Apache](http://httpd.apache.org/)
* [深入学习多进程模块](http://httpd.apache.org/docs/2.4/mod/mpm_common.html)
* [阅读更多mod_fastcgi](http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html)
* [阅读更多mod_fcgid](http://httpd.apache.org/mod_fcgid/)
