---
layout: page
title: 디자인 패턴 
---

# 디자인 패턴

여러분의 웹 어플리케이션 코드와 프로젝트를 구조화하는 데에는 여러가지 방법이 많습니다. 여러분은 어플리케이션의 아키텍처에 최대한으로 신경을 쓸지, 혹은 최소한으로 신경을 쓸 것인지 결정할 수도 있습니다. 보통은 잘 알려진 일반적인 패턴을 따르는 것이 좋습니다. 프로젝트를 관리하기에도 좋고, 다른 개발자들이 이해하기도 좋으니까요.

* [Architectural pattern on Wikipedia](https://en.wikipedia.org/wiki/Architectural_pattern)
* [Software design pattern on Wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern)

## 팩토리

팩토리 패턴(factory pattern)은 아마 디자인 패턴 중에서도 가장 널리 사용되고 있을 것 같습니다. 클래스 하나가 여러분이 원하는 클래스 개체를 생성해주는 패턴입니다. 아래에서 예제를 보시죠.

{% highlight php %}
<?php
class Automobile
{
    private $vehicle_make;
    private $vehicle_model;

    public function __construct($make, $model)
    {
        $this->vehicle_make = $make;
        $this->vehicle_model = $model;
    }

    public function get_make_and_model()
    {
        return $this->vehicle_make . ' ' . $this->vehicle_model;
    }
}

class AutomobileFactory
{
    public static function create($make, $model)
    {
        return new Automobile($make, $model);
    }
}

// Automobile 개체를 생성하는 팩토리 사용
$veyron = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($veyron->get_make_and_model()); // "Bugatti Veyron"을 출력
{% endhighlight %}

이 코드에서 Automobile 개체를 생성할 때 팩토리를 사용하고 있습니다. 이런 식으로 코드를 작성하면 두 가지 정도 이점이 있습니다. 하나는 Automobile 클래스 이름을 바꾸거나, 변경이 생기거나, 다른 클래스로 대체해도 Automobile 클래스를 사용하는 모든 곳의 코드를 고치지 않고 팩토리 클래스에 있는 코드만 수정하면 된다는 것입니다. 두번째 이점은 생성하는 과정이 복잡한 클래스 개체라고 해도 그런 코드가 팩토리에만 있고 그 클래스를 생성하는 모든 곳에 반복적으로 복잡한 코드를 넣지 않아도 된다는 것입니다.

항상 팩토리 패턴을 사용해야 하는 것은 아닙니다. 바로 위 예제 코드 정도라면 팩토리 패턴을 사용했기 때문에 오히려 불필요하게 더 복잡해졌다고 할 수 있습니다. 하지만 실제 프로젝트를 수행할 때에는 팩토리를 사용해서 도움을 얻을 수 있는 경우가 많을 것입니다.

* [Factory pattern on Wikipedia](https://en.wikipedia.org/wiki/Factory_pattern)

## Singleton

When designing web applications, it often makes sense conceptually and architecturally to allow access to one and
only one instance of a particular class. The singleton pattern enables us to do this.

{% highlight php %}
<?php
class Singleton
{
    /**
     * Returns the *Singleton* instance of this class.
     *
     * @staticvar Singleton $instance The *Singleton* instances of this class.
     *
     * @return Singleton The *Singleton* instance.
     */
    public static function getInstance()
    {
        static $instance = null;
        if (null === $instance) {
            $instance = new static;
        }

        return $instance;
    }

    /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    protected function __construct()
    {
    }

    /**
     * Private clone method to prevent cloning of the instance of the
     * *Singleton* instance.
     *
     * @return void
     */
    private function __clone()
    {
    }

    /**
     * Private unserialize method to prevent unserializing of the *Singleton*
     * instance.
     *
     * @return void
     */
    private function __wakeup()
    {
    }
}

class SingletonChild extends Singleton
{
}

$obj = Singleton::getInstance();
\var_dump($obj === Singleton::getInstance());             // bool(true)

$anotherObj = SingletonChild::getInstance();
\var_dump($anotherObj === Singleton::getInstance());      // bool(false)

\var_dump($anotherObj === SingletonChild::getInstance()); // bool(true)
{% endhighlight %}

The code above implements the singleton pattern using a [*static* variable](http://php.net/language.variables.scope#language.variables.scope.static) and the static creation method `getInstance()`.
Note the following:

* The constructor [`__construct`](http://php.net/language.oop5.decon#object.construct) is declared as protected to prevent creating a new instance outside of the class via the `new` operator.
* The magic method [`__clone`](http://php.net/language.oop5.cloning#object.clone) is declared as private to prevent cloning of an instance of the class via the [`clone`](http://php.net/language.oop5.cloning) operator.
* The magic method [`__wakeup`](http://php.net/language.oop5.magic#object.wakeup) is declared as private to prevent unserializing of an instance of the class via the global function [`\unserialize()`](http://php.net/function.unserialize).
* A new instance is created via [late static binding](http://php.net/language.oop5.late-static-bindings) in the static creation method `getInstance()` with the keyword `static`. This allows the subclassing of the class `Singleton` in the example.

The singleton pattern is useful when we need to make sure we only have a single instance of a class for the entire
request lifecycle in a web application. This typically occurs when we have global objects (such as a Configuration
class) or a shared resource (such as an event queue).

You should be wary when using the singleton pattern, as by its very nature it introduces global state into your
application, reducing testability. In most cases, dependency injection can (and should) be used in place of a
singleton class. Using dependency injection means that we do not introduce unnecessary coupling into the design of our
application, as the object using the shared or global resource requires no knowledge of a concretely defined class.

* [Singleton pattern on Wikipedia](https://en.wikipedia.org/wiki/Singleton_pattern)

## Front Controller

The front controller pattern is where you have a single entrance point for you web application (e.g. index.php) that
handles all of the requests. This code is responsible for loading all of the dependencies, processing the request and
sending the response to the browser. The front controller pattern can be beneficial because it encourages modular code
and gives you a central place to hook in code that should be run for every request (such as input sanitization).

* [Front Controller pattern on Wikipedia](https://en.wikipedia.org/wiki/Front_Controller_pattern)

## Model-View-Controller

The model-view-controller (MVC) pattern and its relatives HMVC and MVVM let you break up code into logical objects that
serve very specific purposes. Models serve as a data access layer where data is fetched and returned in formats usable
throughout your application. Controllers handle the request, process the data returned from models and load views to
send in the response. And views are display templates (markup, xml, etc) that are sent in the response to the web
browser.

MVC is the most common architectural pattern used in the popular [PHP frameworks](https://github.com/codeguy/php-the-right-way/wiki/Frameworks).

Learn more about MVC and its relatives:

* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93View%E2%80%93Controller)
* [HMVC](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller)
* [MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel)
