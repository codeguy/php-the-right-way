---
isChild: true
title:   数据库交互
anchor:  databases_interacting
---

## 数据库交互 {#databases_interacting_title}

当开发者第一次接触 PHP 时，通常会使用类似下面的代码来将数据库的交互与表示层逻辑混在一起：

{% highlight php %}
<ul>
<?php
foreach ($db->query('SELECT * FROM table') as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>";
}
?>
</ul>
{% endhighlight %}

这从很多方面来看都是错误的做法，主要是由于它不易阅读又难以测试和调试。而且如果你不加以限制的话，它会输出非常多的字段。

其实还有许多不同的解决方案来完成这项工作 — 取决于你倾向于 [面向对象编程（OOP）](/#object-oriented-programming)还是[函数式编程](/#functional-programming) — 但必须有一些分离的元素。

来看一下最基本的做法：

{% highlight php %}
<?php
function getAllFoos($db) {
    return $db->query('SELECT * FROM table');
}

foreach (getAllFoos($db) as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>"; // BAD!!
}
{% endhighlight %}

这是一个不错的开头。将这两个元素放入了两个不同的文件于是你得到了一些干净的分离。

创建一个类来放置上面的函数，你就得到了一个「Model」。创建一个简单的`.php`文件来存放表示逻辑，你就得到了一个「View」。这已经很接近 [MVC] — 一个大多数[框架](/#frameworks)常用的面向对象的架构。

**foo.php**

{% highlight php %}
<?php
$db = new PDO('mysql:host=localhost;dbname=testdb;charset=utf8', 'username', 'password');

// Make your model available
include 'models/FooModel.php';

// Create an instance
$fooModel = new FooModel($db);
// Get the list of Foos
$fooList = $fooModel->getAllFoos();

// Show the view
include 'views/foo-list.php';
{% endhighlight %}


**models/FooModel.php**

{% highlight php %}
<?php
class FooModel
{
    protected $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    public function getAllFoos() {
        return $this->db->query('SELECT * FROM table');
    }
}
{% endhighlight %}

**views/foo-list.php**

{% highlight php %}
<?php foreach ($fooList as $row): ?>
    <?= $row['field1'] ?> - <?= $row['field1'] ?>
<?php endforeach ?>
{% endhighlight %}

向大多数现代框架的做法学习是很有必要的，尽管多了一些手动的工作。你可以并不需要每一次都完全这么做，但将太多的表示逻辑层代码和数据库交互掺杂在一些将会为你在想要对程序进行[单元测试](/#unit-testing)时带来真正的麻烦。

[PHPBridge] 具有一项非常棒的资源叫做[创建一个数据类]。它包含了非常相似的逻辑而且非常适合刚刚习惯数据库交互概念的开发者使用。


[MVC]: http://code.tutsplus.com/tutorials/mvc-for-noobs--net-10488
[PHPBridge]: http://phpbridge.org/
[创建一个数据类]: http://phpbridge.org/intro-to-php/creating_a_data_class
