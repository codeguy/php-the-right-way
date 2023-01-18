---
isChild: true
anchor:  object_caching
---

## Object Caching {#object_caching_title}

There are times when it can be beneficial to cache individual objects in your code, such as with data that is expensive
to get or database calls where the result is unlikely to change. You can use object caching software to hold these
pieces of data in memory for extremely fast access later on. If you save these items to a data store after you retrieve
them, then pull them directly from the cache for following requests, you can gain a significant improvement in
performance as well as reduce the load on your database servers.

Many of the popular bytecode caching solutions let you cache custom data as well, so there's even more reason to take
advantage of them. APCu and WinCache both provide APIs to save data from your PHP code to their memory cache.

The most commonly used memory object caching systems are APCu and memcached. APCu is an excellent choice for object
caching, it includes a simple API for adding your own data to its memory cache and is very easy to setup and use. The
one real limitation of APCu is that it is tied to the server it's installed on. Memcached on the other hand is
installed as a separate service and can be accessed across the network, meaning that you can store objects in a
hyper-fast data store in a central location and many different systems can pull from it.

Note that when running PHP as a (Fast-)CGI application inside your webserver, every PHP process will have its own cache,
i.e. APCu data is not shared between your worker processes. In these cases, you might want to consider using memcached
instead, as it's not tied to the PHP processes.

In a networked configuration APCu will usually outperform memcached in terms of access speed, but memcached will be
able to scale up faster and further. If you do not expect to have multiple servers running your application, or do not
need the extra features that memcached offers then APCu is probably your best choice for object caching.

Example logic using APCu:

{% highlight php %}
<?php
// check if there is data saved as 'expensive_data' in cache
$data = apcu_fetch('expensive_data');
if ($data === false) {
    // data is not in cache; save result of expensive call for later use
    apcu_add('expensive_data', $data = get_expensive_data());
}

print_r($data);
{% endhighlight %}

Note that prior to PHP 5.5, there was the APC extension which provided both an object cache and a bytecode cache. The new APCu is a project to bring APC's
object cache to PHP 5.5+, since PHP now has a built-in bytecode cache (OPcache).

### Learn more about popular object caching systems:

* [APCu](https://github.com/krakjoe/apcu)
* [APCu Documentation](https://www.php.net/apcu)
* [Memcached](https://memcached.org/)
* [Redis](https://redis.io/)
* [WinCache Functions](https://www.php.net/ref.wincache)
