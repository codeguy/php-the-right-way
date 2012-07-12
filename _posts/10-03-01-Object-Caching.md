---
isChild: true
---

## Object Caching

There are times when it is advantageous to cache individual objects in your code, such as with data that is expensive to
get or database calls where the result is unlikely to change. You can use object caching software to hold pieces of data
in memory for extremely fast access later on. If you save these items in a data store after you get them then access the
data for following requests from cache you will see significant performance increases and reduced load on your database
servers.

The most common memory object caching systems are APC and memcached. APC is a great choice for caching, it comes with
PHP and is very easy to setup and to use, but it is tied to the server it is installed on. Memcached on the other hand
is installed as a separate service and can be accessed across the network, meaning that you can store values in a
hyper-fast data store in a central location and many different systems can pull from it. In a networked configuration
APC will outperform memcached in terms of access speed, but memcached will be able to scale up faster and further.

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

* [APC](http://php.net/manual/en/book.apc.php)
* [APC Functions](http://php.net/manual/en/ref.apc.php)
* [Memcached](http://memcached.org/)
* [Redis](http://redis.io/)
* [WinCache](http://php.net/manual/en/book.wincache.php) (Windows Only)
