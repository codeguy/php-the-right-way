---
isChild: true
anchor:  object_caching
title: 对象缓存
---

## 对象缓存 {#object_caching_title}

有时缓存代码中的单个对象会很有用，比如有些需要很大开销获取的数据或者一些结果集不怎么变化的数据库查询。你可以使用一些缓存软件将这些数据存放在内存中以便下次高速获取。如果你获得数据后把他们存起来，下次请求直接从缓存里面获取数据，在减少数据库负载的同时能极大提高性能。

许多流行的字节码缓存方案也能缓存定制化的数据，所以更有理由好好使用它们了。APCu、XCache 以及 WinCache 都提供了 API，以便你将数据缓存到内存中

最常用的内存对象缓存系统是 APCu 和 Memcached 。APCu 对于对象缓存来说是个很好的选择，它提供了简单的 API 让你能将数据缓存到内存，并且很容易设置和使用。APCu 的局限性表现在它依赖于所在的服务器。另一方面，Memcached 以独立的服务的形式安装，可以通过网络交互，这意味着你能将数据集中存在一个高速存取的地方，而且许多不同的系统能从中获取数据。

值得注意的是当你以 CGI(FastCGI) 的形式使用 PHP 时，每个进程将会有各自的缓存，比如说，APCu 缓存数据无法在多个工作进程中共享。在这种情况下，你可能得考虑 Memcached 了，由于它独立于 PHP 进程。

通常 APCu 在存取速度上比 Memcached 更快，但是 Memcached 在扩展上更有优势。如果你不希望应用程序涉及多个服务器，或者不需要 Memcached 提供的其他特性，那么 APCu 可能是最好的选择。

使用 APCu 的例子：

{% highlight php %}
<?php
// check if there is data saved as 'expensive_data' in cache
$data = apc_fetch('expensive_data');
if ($data === false) {
    // data is not in cache; save result of expensive call for later use
    apc_add('expensive_data', $data = get_expensive_data());
}

print_r($data);
{% endhighlight %}

注意在 PHP 5.5 之前，APC 同时提供了对象缓存与字节码缓存。APCu 是为了将 APC 的对象缓存移植到 PHP 5.5+ 的一个项目，因为现在 PHP 有了内建的字节码缓存方案 (OPcache)。

### 更多关于缓存系统的项目：

* [APCu](https://github.com/krakjoe/apcu)
* [APC Functions](http://php.net/ref.apc)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [XCache APIs](http://xcache.lighttpd.net/wiki/XcacheApi)
* [WinCache Functions](http://php.net/ref.wincache)
