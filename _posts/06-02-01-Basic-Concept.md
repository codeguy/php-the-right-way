---
isChild: true
---

## Basic Concept {#basic_concept_title}

From [Wikipedia](http://en.wikipedia.org/wiki/Dependency_injection):

> Dependency injection is a software design pattern that allows the removal of hard-coded dependencies and makes it 
> possible to change them, whether at run-time or compile-time.

This quote makes the concept sound much more complicated than it actually is. Dependency Injection is providing a component 
with it's dependencies either through constructor injection, method calls or the setting of properties. It is that simple.

We can demonstrate the concept with a simple, yet naive, example.

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

Here we have a `Database` class that requires an adapter to speak to the database. We instantiate the 
adapter in the constructor and create a hard dependency. This code can be refactored to use Dependency Injection 
and therefore loosen the dependency.

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

Now we are giving the `Database` class it's dependency rather than it creating it itself. We could even create a method 
that would accept an argument of the dependency and set it that way, or if the `$adapter` property was `public` we could 
set it directly.
