---
isChild: true
anchor:  complex_problem
---

## Complex Problem {#complex_problem_title}

If you have ever read about Dependency Injection then you have probably seen the terms *"Inversion of Control"* or
*"Dependency Inversion Principle"*. These are the complex problems that Dependency Injection solves.

### Inversion of Control

Inversion of Control is as it says, "inverting the control" of a system by keeping organizational control entirely
separate from our objects. In terms of Dependency Injection, this means loosening our dependencies by controlling and
instantiating them elsewhere in the system.

For years, PHP frameworks have been achieving Inversion of Control, however, the question became, which part of control
are we inverting, and where to? For example, MVC frameworks would generally provide a super object or base controller
that other controllers must extend to gain access to its dependencies. This **is** Inversion of Control, however,
instead of loosening dependencies, this method simply moved them.

Dependency Injection allows us to more elegantly solve this problem by only injecting the dependencies we need, when we
need them, without the need for any hard coded dependencies at all.

### S.O.L.I.D.

#### Single Responsibility Principle

The Single Responsibility Principle is about actors and high-level architecture. It states that “A class should have
only one reason to change.” This means that every class should _only_ have responsibility over a single part of the
functionality provided by the software. The largest benefit of this approach is that it enables improved code
_reusability_. By designing our class to do just one thing, we can use (or re-use) it in any other program without
changing it.

#### Open/Closed Principle

The Open/Closed Principle is about class design and feature extensions. It states that “Software entities (classes,
modules, functions, etc.) should be open for extension, but closed for modification.” This means that we should design
our modules, classes and functions in a way that when a new functionality is needed, we should not modify our existing
code but rather write new code that will be used by existing code. Practically speaking, this means that we should write
classes that implement and adhere to _interfaces_, then type-hint against those interfaces instead of specific classes.

The largest benefit of this approach is that we can very easily extend our code with support for something new without
having to modify existing code, meaning that we can reduce QA time, and the risk for negative impact to the application
is substantially reduced. We can deploy new code, faster, and with more confidence.

#### Liskov Substitution Principle

The Liskov Substitution Principle is about subtyping and inheritance. It states that “Child classes should never break
the parent class’ type definitions.” Or, in Robert C. Martin’s words, “Subtypes must be substitutable for their base
types.”

For example, if we have a `FileInterface` interface which defines an `embed()` method, and we have `Audio` and `Video`
classes which both implement the `FileInterface` interface, then we can expect that the usage of the `embed()` method will always
do the thing that we intend. If we later create a `PDF` class or a `Gist` class which implement the `FileInterface`
interface, we will already know and understand what the `embed()` method will do. The largest benefit of this approach
is that we have the ability to build flexible and easily-configurable programs, because when we change one object of a
type (e.g., `FileInterface`) to another we don't need to change anything else in our program.

#### Interface Segregation Principle

The Interface Segregation Principle (ISP) is about _business-logic-to-clients_ communication. It states that “No client
should be forced to depend on methods it does not use.” This means that instead of having a single monolithic interface
that all conforming classes need to implement, we should instead provide a set of smaller, concept-specific interfaces
that a conforming class implements one or more of.

For example, a `Car` or `Bus` class would be interested in a `steeringWheel()` method, but a `Motorcycle` or `Tricycle`
class would not. Conversely, a `Motorcycle` or `Tricycle` class would be interested in a `handlebars()` method, but a
`Car` or `Bus` class would not. There is no need to have all of these types of vehicles implement support for both
`steeringWheel()` as well as `handlebars()`, so we should break-apart the source interface.

#### Dependency Inversion Principle

The Dependency Inversion Principle is about removing hard-links between discrete classes so that new functionality can
be leveraged by passing a different class. It states that one should *"Depend on Abstractions. Do not depend on
concretions."*. Put simply, this means our dependencies should be interfaces/contracts or abstract classes rather than
concrete implementations. We can easily refactor the above example to follow this principle.

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

There are several benefits to the `Database` class now depending on an interface rather than a concretion.

Consider that we are working in a team and the adapter is being worked on by a colleague. In our first example, we
would have to wait for said colleague to finish the adapter before we could properly mock it for our unit tests. Now
that the dependency is an interface/contract we can happily mock that interface knowing that our colleague will build
the adapter based on that contract.

An even bigger benefit to this method is that our code is now much more scalable. If a year down the line we decide
that we want to migrate to a different type of database, we can write an adapter that implements the original interface
and injects that instead, no more refactoring would be required as we can ensure that the adapter follows the contract
set by the interface.
