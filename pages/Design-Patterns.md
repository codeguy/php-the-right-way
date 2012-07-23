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

One of the most commonly used design patterns is the factory pattern. This is a pattern is simply a class that creates
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

## Front Controller

The front controller pattern is where you have a single entrance point for you web application (e.g. index.php) that
handles all of the requests. This code is responsible for loading all of the dependencies, processing the request and
sending the response to the browser. The front controller pattern can be beneficial because it encourages modular code
and gives you a central place to hook in code that should be run for every request (such as input sanitization).

* [Front Controller pattern on Wikipedia](https://en.wikipedia.org/wiki/Front_Controller_pattern)

## Model-View-Controller

The model-view-controller (MVC) pattern and its relatives HMVC and MVVM let you break up code into logical objects that
serve very specific purposes. Models serve as a data access layer where data it fetched and returned in formats usable
throughout your application. Controllers handle the request, process the data returned from models and load views to
send in the response. And views are display templates (markup, xml, etc) that are sent in the response to the web
browser.

MVC is the most common architectural pattern used in the popular [PHP frameworks](https://github.com/codeguy/php-the-right-way/wiki/Frameworks).

Learn more about MVC and its relatives:

* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93View%E2%80%93Controller)
* [HMVC](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller)
* [MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel)
