---
isChild: true
---

## Basic Concept {#basic_concept_title}

We can demonstrate the concept with a simple, yet naive example.

Here we have a `Database` class that requires an adapter to speak to the database. We instantiate the
adapter in the constructor and create a hard dependency. This makes testing difficult and means the `Database` class is
very tightly coupled to the adapter.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct()
    {
        $this->adapter = new MySqlAdapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

This code can be refactored to use Dependency Injection and therefore loosen the dependency.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct(MySqlAdapter $adapter)
    {
        $this->adapter = $adapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

Now we are giving the `Database` class its dependency rather than it creating it itself. We could even create a method
that would accept an argument of the dependency and set it that way, or if the `$adapter` property was `public` we could
set it directly.
