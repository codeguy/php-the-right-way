---
isChild: true
anchor:  basic_concept
---

## Basic Concept {#basic_concept_title}

We can demonstrate the concept with a simple, yet naive example.

Here we have a `Database` class that requires an adapter to speak to the database. We instantiate the adapter in the
constructor and create a hard dependency. This makes testing difficult and means the `Database` class is very tightly
coupled to the adapter.

## বেসিক ধারণা {# বেসিক_কেন্সিটি_ শিরোনাম}

আমরা একটি সাধারণ, তবুও নিরীহ উদাহরণ দিয়ে ধারণাটি প্রদর্শন করতে পারি।

এখানে আমাদের একটি `ডাটাবেস` ক্লাস রয়েছে যার জন্য ডাটাবেসের সাথে কথা বলার জন্য একটি অ্যাডাপ্টার প্রয়োজন। আমরা অ্যাডাপ্টারটি ইনস্ট্যান্ট করি
নির্মাতা এবং একটি কঠিন নির্ভরতা তৈরি করুন। এটি পরীক্ষা করা কঠিন করে তোলে এবং এর অর্থ `ডেটাবেস` ক্লাসটি খুব শক্ত করে
অ্যাডাপ্টারের সাথে মিলিত।

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



এখন আমরা `ডেটাবেস` ক্লাসটি তৈরি করার পরিবর্তে এর নির্ভরতা দিচ্ছি। আমরা এমনকি একটি পদ্ধতি তৈরি করতে পারে
এটি নির্ভরতার একটি যুক্তি গ্রহণ করবে এবং সেভাবে সেট করবে, বা যদি $ $ অ্যাডাপ্টারের সম্পত্তিটি আমরা জনসাধারণের ছিলাম
এটি সরাসরি সেট করতে পারে। 

