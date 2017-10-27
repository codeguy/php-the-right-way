---
isChild: true
anchor:  complex_problem
title: 复杂的问题
---

## 复杂的问题 {#complex_problem_title}

如果你曾经了解过依赖注入，那么你可能见过 *"控制反转"(Inversion of Control)* 或者 *"依赖反转准则"(Dependency Inversion Principle)*这种说法。这些是依赖注入能解决的更复杂的问题。

### 控制反转

顾名思义，一个系统通过组织控制和对象的完全分离来实现"控制反转"。对于依赖注入，这就意味着通过在系统的其他地方控制和实例化依赖对象，从而实现了解耦。

一些 PHP 框架很早以前就已经实现控制反转了，但是问题是，应该反转哪部分以及到什么程度？比如， MVC 框架通常会提供超类或者基本的控制器类以便其他控制器可以通过继承来获得相应的依赖。这就是控制反转的例子，但是这种方法是直接移除了依赖而不是减轻了依赖。

依赖注入允许我们通过按需注入的方式更加优雅地解决这个问题，完全不需要任何耦合。

### 依赖反转准则

依赖反转准则是面向对象设计准则 S.O.L.I.D 中的 "D" ,倡导 *"依赖于抽象而不是具体"*。简单来说就是依赖应该是接口/约定或者抽象类，而不是具体的实现。我们能很容易重构前面的例子，使之遵循这个准则

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct(AdapterInterface $adapter)
    {
        $this->adapter = $adapter;
    }
}

interface AdapterInterface {}

class MysqlAdapter implements AdapterInterface {}
{% endhighlight %}

现在 `Database` 类依赖于接口，相比依赖于具体实现有更多的优势。

假设你工作的团队中，一位同事负责设计适配器。在第一个例子中，我们需要等待适配器设计完之后才能单元测试。现在由于依赖是一个接口/约定，我们能轻松地模拟接口测试，因为我们知道同事会基于约定实现那个适配器

这种方法的一个更大的好处是代码扩展性变得更高。如果一年之后我们决定要迁移到一种不同的数据库，我们只需要写一个实现相应接口的适配器并且注入进去，由于适配器遵循接口的约定，我们不需要额外的重构。
