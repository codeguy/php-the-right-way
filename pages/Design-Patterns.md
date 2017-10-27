---
layout: page
title:  Design Patterns
sitemap: true
---

# 设计模式

构建一个 web 应用或工程有无数种方式，同样，架构的方式也有无数种。但是我们建议遵循一些常见的模式，因为这会让你的代码更容易管理，可读性更高。

* [维基百科——架构模式](https://en.wikipedia.org/wiki/Architectural_pattern)
* [维基百科——软件设计模式](https://en.wikipedia.org/wiki/Software_design_pattern)
* [一些设计模式的例子](http://designpatternsphp.readthedocs.io/en/latest/)

## 工厂模式

最常用的设计模式就是工厂模式。在这个模式下，需要一个用来创建你需要的对象的类。考虑下面的工厂模式的例子：

{% highlight php %}
<?php
class Automobile
{
    private $vehicleMake;
    private $vehicleModel;

    public function __construct($make, $model)
    {
        $this->vehicleMake = $make;
        $this->vehicleModel = $model;
    }

    public function getMakeAndModel()
    {
        return $this->vehicleMake . ' ' . $this->vehicleModel;
    }
}

class AutomobileFactory
{
    public static function create($make, $model)
    {
        return new Automobile($make, $model);
    }
}

// 用工厂的 create 方法创建 Automobile 对象
$veyron = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($veyron->getMakeAndModel()); // outputs "Bugatti Veyron"
{% endhighlight %}

上面的代码用来一个工厂来创建 Automobile 对象。用这种方式创建对象有两个好处：
首先，如果你后续需要更改，重命名或替换 Automobile 类，你只需要更改工厂类中的代码，而不是在每一个用到 Automobile 类的地方修改；
其次，如果创建对象的过程很复杂，你也只需要在工厂类中写，而不是在每个创建实例的地方重复地写。

当然，用工厂模式并不总是必要（或者明智）。上面的示例代码很简单，在实践中，工厂类中会被加入一些不必要的复杂性。
如果你是在做一个很大很复杂的项目，使用工厂模式将会给你省去很多麻烦。

* [维基百科——工厂模式](https://en.wikipedia.org/wiki/Factory_pattern)

## 单例模式

我们设计 web 应用时，我们经常需要取得某个类的唯一实例，单例模式就帮我们解决了这个问题。

**TODO: NEED NEW SINGLETON CODE EXAMPLE**

上面的代码用[**静态**变量](http://php.net/language.variables.scope#language.variables.scope.static) 实现了单例模式和创建单例的静态方法 `getInstance()`.
请注意以下几点：

* 构造函数 [`__construct()`](http://php.net/language.oop5.decon#object.construct) 被声明为 protected 是为了防止用 `new` 操作符在这个类之外创建新的实例。
* 魔术方法 [`__clone()`](http://php.net/language.oop5.cloning#object.clone) 被声明为 private 是为了防止用 [`clone`](http://php.net/language.oop5.cloning) 操作符克隆出新的实例.
* 魔术方法 [`__wakeup()`](http://php.net/language.oop5.magic#object.wakeup) 被声明为 private 是为了防止通过全局函数 [`unserialize()`](http://php.net/function.unserialize) 反序列化这个类的实例。
* 新的实例是用过静态方法 `getInstance()` 使用[后期静态绑定](http://php.net/language.oop5.late-static-bindings)生成的。这允许我们对 `Singleton` 类进行继承，并且在取得 `SingletonChild` 的单例时不会出现问题。

单例模式是非常有用的，特别是我们需要确保在整个请求的声明周期内只有一个实例存在。
典型的应用场景是，当我们有一个全局的对象（比如配置类）或一个共享的资源（比如事件队列）时。

你应该非常小心地使用单例模式，因为它非常自然地引入了全局状态到你的应用中，降低了可测试性。
在大多数情况下，依赖注入可以（并且应该）代替单例类。
使用依赖注入意味着我们不会在设计应用时引入不必要的耦合，因为对象使用共享的或全局的资源，不再需要耦合具体的类。

* [维基百科——单例模式](https://en.wikipedia.org/wiki/Singleton_pattern)

## 策略模式

使用策略模式，你可以把一族不同的算法（业务）封装到不同的类中，使 client 类可以在不知道具体实现的情况下选择实例化其中一个算法。策略模式有几种不同的变体，最简单的是下面这种：

第一段代码展示了一族输出算法，分别具体实现了 `OutputInterface` 的 `load` 方法，返回序列化结果，json 和数组：

{% highlight php %}
<?php

interface OutputInterface
{
    public function load();
}

class SerializedArrayOutput implements OutputInterface
{
    public function load()
    {
        return serialize($arrayOfData);
    }
}

class JsonStringOutput implements OutputInterface
{
    public function load()
    {
        return json_encode($arrayOfData);
    }
}

class ArrayOutput implements OutputInterface
{
    public function load()
    {
        return $arrayOfData;
    }
}
{% endhighlight %}

通过像上面这样把不同类型的输出算法封装起来，其他的开发者可以很容易地在不影响 client 代码的情况下添加新的输出类型。

每个具体的输出类实现了 `OutputInterface` —— 这有两个目的，第一是它提供了一个所有输出类都必须遵守的契约，第二，你将会在本文后面的部分看到，通过实现公共的接口，你可以利用[类型约束](http://php.net/language.oop5.typehinting)保证 client 中使用的输出类必须是实现了 `OutputInterface` 的类。

接下来的一小段代码展示了一个 client 类如何使用其中一个输出算法，并可以在运行时根据需要选用不同的算法。

{% highlight php %}
<?php
class SomeClient
{
    private $output;

    public function setOutput(OutputInterface $outputType)
    {
        $this->output = $outputType;
    }

    public function loadOutput()
    {
        return $this->output->load();
    }
}
{% endhighlight %}

上面的 `client`类有一个必须在运行时设置的私有属性，并且是“OutputInterface”类型的。
一旦这个属性被设置为具体的实例（三个输出类中之一的实例），并且 `loadOutput` 方法被调用，那么它的 `load` 方法就会被调用，返回回序列化结果或 json 或数组。

{% highlight php %}
<?php
$client = new SomeClient();

// Want an array?
$client->setOutput(new ArrayOutput());
$data = $client->loadOutput();

// Want some JSON?
$client->setOutput(new JsonStringOutput());
$data = $client->loadOutput();

{% endhighlight %}

* [维基百科——策略模式](http://en.wikipedia.org/wiki/Strategy_pattern)

## 前端控制器模式

前端控制器模式就是给你的 web 应用程序设置单一的入口（比如 index.php），用来集中处理所有请求的机制。
它的职责是载入所有依赖，处理请求，并发送响应给浏览器。前端控制器模式对整个架构是有益的，因为它鼓励模块化代码，并给了你一个单入口，可以写一些每个请求都需要跑的代码（比如输入数据的过滤）。

* [维基百科——前端控制器模式](https://en.wikipedia.org/wiki/Front_Controller_pattern)

## 模型-视图-控制器（MVC）

模型-视图-控制器 (MVC) 模式还有和它相关的 HMVC、HVVM 让你根据逻辑对象的不同作用去解耦。
模型用来作为数据访问层，并以应用中通用的格式返回数据。
控制器处理请求，处理从模型层返回的数据，并载入视图，发送响应。
视图用来展示需要在响应中使用的模板（markup, xml 等等）。

MVC 是在各个[PHP 框架](https://github.com/codeguy/php-the-right-way/wiki/Frameworks)中使用最普遍的架构模式。

学习更多 MVC 及其相关架构模式的链接：

* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93View%E2%80%93Controller)
* [HMVC](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller)
* [MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel)


（译者注：MVC 属架构模式，和设计模式是不同层级的概念，请不要因为本文把它列在“设计模式”下而混淆。）
