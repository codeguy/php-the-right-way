---
isChild: true
anchor:  basic_concept
title: 基本概念
---

## 基本概念 {#basic_concept_title}

我们可以用一个简单的例子来说明依赖注入的概念

下面的代码中有一个 `Database` 的类，它需要一个适配器来与数据库交互。我们在构造函数里实例化了适配器，从而产生了耦合。这会使测试变得很困难，而且 `Database` 类和适配器耦合的很紧密。

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

这段代码可以用依赖注入重构，从而解耦

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

现在我们通过外界给予 `Database` 类的依赖，而不是让它自己产生依赖的对象。我们甚至能用可以接受依赖对象参数的成员函数来设置，或者如果 `$adapter` 属性本身是 `public`的，我们可以直接给它赋值。
