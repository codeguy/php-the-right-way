---
layout: page
title: Design Patterns
---

# Design Patterns

There are numerous ways to structure the code and project for you web application, and you can put as much or as little
thought as you like into architecting. But it is usually a good idea to follow to common patterns because it will make
your code easier to manage and easier for others to understand.

* [Architectural pattern on Wikipedia](https://en.wikipedia.org/wiki/Architectural_pattern)
* [Software design pattern on Wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern)

## Factory

One of the most commonly used design patterns is the factory pattern. In this pattern, a class simply creates
the object you want to use. Consider the following example of the factory pattern:

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

// have the factory create the Automobile object
$veyron = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($veyron->get_make_and_model()); // outputs "Bugatti Veyron"
{% endhighlight %}

This code uses a factory to create the Automobile object. There are two possible benefits to building your code this
way, the first is that if you need to change, rename, or replace the Automobile class later on you can do so and you
will only have to modify the code in the factory, instead of every place in your project that uses the Automobile
class. The second possible benefit is that if creating the object is a complicated job you can do all of the work in
the factory, instead of repeating it every time you want to create a new instance.

Using the factory pattern isn't always necessary (or wise). The example code used here is so simple that a factory
would simply be adding unneeded complexity. However if you are making a fairly large or complex project you may save
yourself a lot of trouble down the road by using factories.

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
