---
title:   복잡한 문제
isChild: true
anchor:  complex_problem
---

## 복잡한 문제 {#complex_problem_title}

의존성 주입에 대한 글을 읽어본 적이 있다면 아마 *"제어의 역전"* 이나 *"의존 관계 역전의 원칙"* 이라는 말을 본 적이
있을 겁니다. 의존성 주입으로 풀 수 있는 복잡한 문제들이죠.

### 제어의 역전

제어의 역전(Inversion of Control)은 말 그대로, 시스템의 "제어권을 뒤집는" 것입니다. 우리가 다루는 개체들의 구성에 대한
제어를 해당 개체들과 완전히 분리시킴으로써 말이죠. 의존성 주입이라는 관점에서 보면, 우리가 다루는 개체들의 생성과 의존
관계의 설정을 시스템의 다른 곳에서 수행함으로써 개체들간의 의존성을 느슨하게 한다는 말이 됩니다.

지난 몇 년간, PHP 프레임워크들은 제어의 역전을 이루어 왔습니다. 하지만 이러한 의문이 생겨났죠. "어떤 부분의 제어권을
역전시켰고 그 제어권은 어디로 갔는가?" 예를 들어 MVC 프레임워크는 보통 수퍼 개체나 베이스 컨트롤러를 제공하는데,
우리가 구현하는 컨트롤러는 반드시 베이스 컨트롤러를 상속받아야 하고 그래야만 의존 관계에 있는 모델이나 뷰에 접근할 수
있게 됩니다. 이것은 제어의 역전이 **맞기는 한데** 의존 관계를 느슨하게 만들었다기 보다는 단순히 위치를 이동시킨 것
뿐입니다.

의존성 주입을 사용하게 되면 이런 문제를 유연하게 풀 수 있게 됩니다. 우리가 원하는 의존 관계를 우리가 필요할 때에만,
의존 관계를 전혀 하드코딩하지 않고서도, 의존성을 주입시킴으로써 말이죠.

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
classes which both implement the `embed()` method, then we can expect that the usage of the `embed()` method will always
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

### 의존 관계 역전의 원칙

[WIP] 위 Dependency Inversion Principle에 해당하는 번역이었으나, 아래를 참고하여 다시 번역할 필요가 있음.

의존 관계 역전의 원칙(Dependency Inversion Principle)은 흔히 S.O.L.I.D 라고 부르는 개체지향 설계 원칙 중 D에
해당합니다. *"추상화된 것에 의존하고, 구체화된 것에 의존하지 마라"* 라는 원칙입니다. 좀더 풀어서 설명하면 우리가
구현하는 클래스는 다른 구체화된 클래스 구현에 의존하지 말고 인터페이스나 추상 클래스에 의존하도록 만들어야 한다는
이야기입니다. 앞에서 본 예제 코드가 이런 원칙을 따르도록 리팩토링하는 것은 어렵지 않습니다.

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

`Database` 클래스는 이제 구체 클래스가 아닌 인터페이스에 의존하게 되었습니다. 이렇게 하면 몇 가지 장점이 있습니다.

여러분이 팀 프로젝트를 하는 중이고, 어댑터는 팀의 동료가 만드는 중이라고 생각해봅시다. 이전의 예제 코드와 같은
상태라면 유닛 테스트를 작성하기 위해서 어댑터의 mock 개체를 만들려면, 여러분의 동료가 어댑터를 완성해주기를 기다려야
할 것입니다. 지금의 코드는 인터페이스에 의존하고 있으므로, 여러분의 동료가 해당 인터페이스의 규약을 잘 따를 것이라는
것을 알 수 있고, 우리는 해당 인터페이스를 사용해서 행복하게 mock 개체를 만들면 됩니다.

또한 인터페이스에 의존하는 코드의 큰 장점은 확장성입니다. 시간이 흘러 처음 사용하던 것과는 다른 DBMS로 마이그레이션
하려고 할 때, 해당 인터페이스를 구현하는 새로운 어댑터를 구현하여 원래의 어댑터를 사용하던 곳에 대신 넣기만 하면
됩니다. 어댑터들은 동일한 인터페이스의 규약을 따르고 있다는 것을 우리가 알고 있기 때문에 추가적인 리팩토링을 해야할
필요가 없습니다.
