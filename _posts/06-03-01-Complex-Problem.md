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

Das Liskovsche Substitutionsprinzip befasst sich mit Subtypisierung und Vererbung. Es besagt: "Unterklassen dürfen niemals die Typdefinitionen der übergeordneten Klasse brechen."
Oder, mit Robert C. Martins Worten: "Subtypen müssen durch ihre Basistypen substituierbar sein."

Wenn wir zum Beispiel eine `FileInterface`-Schnittstelle haben, die eine  `embed()`-Methode `FileInterface` definiert, und wir `Audio`- und `Video`-Klassen haben, die beide die  `FileInterface`-Schnittstelle implementieren, können wir davon ausgehen, dass die Verwendung der `embed()`-Methode immer das gewünschte Ergebnis liefert.
Wenn wir später eine`PDF`-Klasse oder eine `Gist`-Klasse erstellen, die die `FileInterface`-Schnittstelle implementiert, wissen und verstehen wir bereits, was die `embed()`-Methode bewirkt.
Der größte Vorteil dieses Ansatzes besteht darin, dass wir flexible und leicht konfigurierbare Programme erstellen können, da wir beim Ändern eines Objekts eines Typs (z. B. `FileInterface`) in ein anderes, nichts weiter im Programm abändern müssen.

#### Interface-Segregation-Prinzip

Das Interface-Segregation-Prinzip (ISP) befasst sich mit der Kommunikation zwischen _Geschäftslogik und Clients_.
Es besagt: "Kein Client sollte gezwungen werden, sich auf Methoden zu verlassen, die er nicht nutzt." 
Das bedeutet: Anstatt einer einzigen monolithischen Schnittstelle, die alle konformen Klassen implementieren muss, sollten wir stattdessen eine Reihe kleinerer, konzeptspezifischer Schnittstellen bereitstellen, von denen eine konforme Klasse dann eine oder mehrere davon implementiert.

Beispielsweise wäre eine `Auto` oder `Bus`-Klasse an einer `steuerrad()`-Methode interessiert, eine `Motorrad` oder `Dreirad`-Klasse jedoch nicht. Umgekehrt wäre eine `Motorrad` oder `Dreirad`-Klasse  an einer `lenkstange()`-Methode interessiert, eine  `Auto` oder `Bus`-Klasse jedoch nicht.
Es ist nicht erforderlich, dass alle diese Vehikel sowohl `steuerrad()` als auch `lenkstange()` unterstützen , daher sollten wir die Quellschnittstelle aufteilen.

#### Dependency-Inversion-Prinzip

Das Prinzip der Abhängigkeitsumkehrung (Dependency-Inversion-Prinzip) entfernt Hardlinks zwischen diskreten Klassen, um durch die Übergabe einer anderen Klasse neue Funktionalitäten zu nutzen.
Es besagt: *"Verlasse dich auf Abstraktionen. Verlasse dich nicht auf Konkretionen."*
Vereinfacht ausgedrückt: Unsere Abhängigkeiten (dependencies) sollen Schnittstellen/Verträge oder abstrakte Klassen anstatt konkreter Implementierungen sein. Wir können das obige Beispiel leicht umgestalten, um diesem Prinzip zu folgen.

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

Dass die `Database`-Klasse nun von einer Schnittstelle und nicht von einer Konkretion abhängt, hat mehrere Vorteile.

Nehmen wir an, wir arbeiten in einem Team und ein Kollege arbeitet gerade am Adapter.
In unserem ersten Beispiel müssten wir warten, bis der Kollege den Adapter fertiggestellt hat, bevor wir ihn für unsere Unit-Tests simulieren können.
Da die Abhängigkeit nun eine Schnittstelle/ein Vertrag ist, können wir diese Schnittstelle problemlos simulieren, da wir wissen, dass unser Kollege den Adapter basierend auf diesem Vertrag erstellt.

Ein noch größerer Vorteil dieser Methode ist die deutlich bessere Skalierbarkeit unseres Codes. Sollten wir uns nach einem Jahr für die Migration zu einem anderen Datenbanktyp entscheiden, können wir einen Adapter schreiben, der die ursprüngliche Schnittstelle implementiert und diese stattdessen einfügt (inject). Ein weiteres Refactoring ist nicht erforderlich, da wir sicherstellen können, dass der Adapter den von der Schnittstelle festgelegten Vertrag einhält.
