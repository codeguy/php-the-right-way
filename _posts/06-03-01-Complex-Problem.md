---
isChild: true
anchor:  complex_problem
---

## Komplexes Problem {#complex_problem_title}

Wenn Sie schon einmal etwas über Dependency Injection gelesen haben, sind Ihnen wahrscheinlich die Begriffe *"Inversion of Control"* oder *"Dependency Inversion Principle"* begegnet . Dependency Injection löst komplexe Probleme.

### Inversion of Control (Umkehrung der Kontrolle)

Inversion of Control bedeutet, wie der Name schon sagt, die "Umkehrung der Kontrolle" eines Systems, indem die organisatorische Steuerung vollständig von unseren Objekten getrennt gehalten wird.
Im Sinne von Dependency Injection bedeutet dies, unsere Abhängigkeiten zu lockern, indem wir sie an anderer Stelle im System steuern und instanziieren.

PHP-Frameworks setzen seit Jahren auf Inversion of Control. Es stellte sich jedoch die Frage, welchen Teil der Steuerung wir invertieren und wohin?
Beispielsweise stellen MVC-Frameworks üblicherweise ein Superobjekt oder einen Basiscontroller bereit, den andere Controller erweitern müssen, um auf dessen Abhängigkeiten zugreifen zu können. Dies **ist** Inversion of Control.
Anstatt Abhängigkeiten zu lösen, werden sie bei dieser Methode jedoch einfach verschoben.

Mithilfe der Abhängigkeitsinjektion können wir dieses Problem eleganter lösen, indem wir nur die Abhängigkeiten injizieren, die wir brauchen, wenn wir sie brauchen, ohne dass überhaupt fest codierte Abhängigkeiten erforderlich sind.

### S.O.L.I.D.

SOLID ist ein Akronym für die ersten fünf Prinzipien des objektorientierten Designs (OOD) von Robert C. Martin und steht für:
  - S – Single-Responsibility-Prinzip (Prinzip der eindeutigen Verantwortlichkeit)
  - O – Open/Closed-Prinzip (Prinzip der Offen- und Verschlossenheit)
  - L – Liskovsches Substitutionsprinzip
  - I – Interface-Segregation-Prinzip (Prinzip der Schnittstellentrennung)
  - D – Dependency-Inversion-Prinzip (Abhängigkeit-Umkehr-Prinzip)


#### Single Responsibility Prinzip

DasSingle Responsibility Prinzip befasst sich mit Akteuren und High-Level-Architektur. Es besagt: "Eine Klasse sollte nur einen Grund haben, sich zu ändern."
Das bedeutet, dass jede Klasse _ausschließlich_ für einen Teil der von der Software bereitgestellten Funktionalität verantwortlich sein sollte. 
Der größte Vorteil dieses Ansatzes ist die verbesserte _Wiederverwendbarkeit_ von Code.
Indem wir unsere Klasse nur für eine Funktion konzipieren, können wir sie in jedem anderen Programm verwenden (oder wiederverwenden), ohne sie ändern zu müssen.

#### Open/Closed Prinzip

Das Open/Closed-Prinzip befasst sich mit Klassendesign und Funktionserweiterungen. Es besagt: "Software-Entitäten (Klassen, Module, Funktionen usw.) sollten für Erweiterungen offen, aber für Modifikationen geschlossen sein."
Wir sollten also unsere Module, Klassen und Funktionen so gestalten, dass wir bei Bedarf an neuer Funktionalität den bestehenden Code nicht ändern, sondern neuen Code schreiben, der vom vorhandenen Code genutzt wird.
In der Praxis bedeutet das, wir schreiben Klassen, welche _Schnittstellen_ implementieren und einhalten, und dann Typ-Hinweise dafür erstellen anstelle spezifische Klassen.

Der größte Vorteil dieses Ansatzes besteht darin, dass wir unseren Code ganz einfach um Funktionalität erweitern können, ohne den bestehenden Code ändern zu müssen. Dadurch verkürzen wir die QA-Zeit (QA: Quality Assurance). Das Risiko negativer Auswirkungen auf die Applikation wird erheblich reduziert. Wir können neuen Code schneller und zuverlässiger bereitstellen.

#### Liskovsches Substitutionsprinzip

Das Liskovsche Substitutionsprinzip befasst sich mit Subtypisierung und Vererbung. Es besagt: "Unterklassen dürfen niemals die Typdefinitionen der übergeordneten Klasse brechen." Oder, mit Robert C. Martins Worten: "Subtypen müssen durch ihre Basistypen substituierbar sein."

Wenn wir beispielsweise eine Schnittstelle haben, die eine Methode `FileInterface` finiert, und wir Klassen haben, die beide die Schnittstelle implementieren , können wir davon ausgehen, dass die Verwendung der Methode immer das gewünschte Ergebnis liefert. Wenn wir später eine Klasse oder eine Klasse erstellen, die die Schnittstelle implementiert, wissen wir bereits, was die Methode bewirkt. Der größte Vorteil dieses Ansatzes besteht darin, dass wir flexible und leicht konfigurierbare Programme erstellen können, da wir beim Ändern eines Objekts eines Typs (z. B. ) in ein anderes nichts anderes im Programm ändern müssen.embed()AudioVideoFileInterfaceembed()PDFGistFileInterfaceembed()FileInterface



For example, if we have a `FileInterface` interface which defines an `embed()` method, and we have `Audio` and `Video`
classes which both implement the `FileInterface` interface, then we can expect that the usage of the `embed()` method will always
do the thing that we intend. If we later create a `PDF` class or a `Gist` class which implement the `FileInterface`
interface, we will already know and understand what the `embed()` method will do. The largest benefit of this approach
is that we have the ability to build flexible and easily-configurable programs, because when we change one object of a
type (e.g., `FileInterface`) to another we don't need to change anything else in our program.

#### Interface-Segregation-Prinzip

The Interface Segregation Principle (ISP) is about _business-logic-to-clients_ communication. It states that “No client
should be forced to depend on methods it does not use.” This means that instead of having a single monolithic interface
that all conforming classes need to implement, we should instead provide a set of smaller, concept-specific interfaces
that a conforming class implements one or more of.

For example, a `Car` or `Bus` class would be interested in a `steeringWheel()` method, but a `Motorcycle` or `Tricycle`
class would not. Conversely, a `Motorcycle` or `Tricycle` class would be interested in a `handlebars()` method, but a
`Car` or `Bus` class would not. There is no need to have all of these types of vehicles implement support for both
`steeringWheel()` as well as `handlebars()`, so we should break-apart the source interface.

#### Dependency-Inversion-Prinzip

The Dependency Inversion Principle is about removing hard-links between discrete classes so that new functionality can
be leveraged by passing a different class. It states that one should *"Depend on Abstractions. Do not depend on
concretions."*. Put simply, this means our dependencies should be interfaces/contracts or abstract classes rather than
concrete implementations. We can easily refactor the above example to follow this principle.

{% highlight php %}
<?php
namespace Database;

class Database
{
    public function __construct(protected AdapterInterface $adapter)
    {
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
