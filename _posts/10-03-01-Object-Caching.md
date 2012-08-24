---
title: 对象缓存
anchorid: object_caching
isChild: true
---

<h2 id="object_caching">对象缓存</h2>

很多时候，在代码中缓存对象可以带来很大的收益，例如获取代价很大的数据和查询结果很少变化的数据库调用。我们可以使用对象
缓存系统缓存这些数据，大大加快后续的同类访问请求。如果你在取得这些数据之后，把它们缓存在系统中，在后续对这些数据的请求
中，就可以直接使用缓存中的对象，这么做可以很大的提示系统性能，减少服务器的负载。

很多流行的字节码缓存方案也允许你缓存自定义数据，因此我们更应该充分利用对象缓存功能。APC、XCache和WinCache都提供API，
让你把数据缓存在他们的内存cache中。

使用最多的内存对象缓存系统是APC和memcached，APC是很好的一个对象缓存方案，它提供了简单的API来让你把对象存储在内存中，而且
配置和使用都非常容易，它的一个缺点是只能在本机使用。Memcached则是另外一种方式，它是一个单独的服务，可以通过网络访问，这
意味着可以在一个地方写入数据，然后在不同的系统中访问这份数据。

在单机性能上，APC通常比Memcached更高，如果你不需要多台服务器或者其他Memcached的高级功能，APC可能是你的最佳选择。

APC的示例:

{% highlight php %}
<?php
// check if there is data saved as 'expensive_data' in cache
if (apc_fetch('expensive_data') === false) {
    // data is not in cache; save expensive call for later use
    apc_add('expensive_data', get_expensive_data());
}

print_r(apc_fetch('expensive_data'));
{% endhighlight %}

学习更多对象缓存系统：

* [APC Functions](http://php.net/manual/en/ref.apc.php)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [XCache APIs](http://xcache.lighttpd.net/wiki/XcacheApi)
* [WinCache Functions](http://www.php.net/manual/en/ref.wincache.php)
