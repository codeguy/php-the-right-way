---
isChild: true
---

## Object Caching

There are times when it can be advantageous to cache individual objects in your code, such as with data that is
expensive to get or database calls where the result is unlikely to change. You can use object caching software to hold
these pieces of data in memory for extremely fast access later on. If you save these items to a data store after you
retrieve them, then pull them directly from the cache for following requests you can gain a significant improvement in
performance as well as reduce load on your database servers.

The most commonly used memory object caching systems are APC and memcached. APC is a great choice for object caching as
well as opcode caching *(see above)*. APC comes bundled with PHP and it is very easy to setup and to use, the only
possible downside is that it is tied to the server it is installed on. Memcached on the other hand is installed as a
separate service and can be accessed across the network, meaning that you can store objects in a hyper-fast data store
in a central location and many different systems can pull from it.

In a networked configuration APC will usally outperform memcached in terms of access speed, but memcached will be able
to scale up faster and further. If you do not expect to have multiple servers running your application, or do not need
the extra features that memcached offers then APC is probably your best choice for object caching.

Example logic using APC:

{% highlight php %}
<?php
$data = apc_fetch('expensive_data');
if (!$data)
{
	$data = get_expensive_data();
	apc_store('expensive_data', $data);
}
{% endhighlight %}

Learn more about popular object caching systems.

* [APC](http://php.net/manual/en/book.apc.php) (Can do opcode caching and object caching)
* [APC Functions](http://php.net/manual/en/ref.apc.php)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [WinCache](http://php.net/manual/en/book.wincache.php) (Windows Only, can do opcode caching and object caching)
