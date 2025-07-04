---
isChild: true
anchor:  containers
---

## Container {#containers_title}

Das Erste, was Du über Dependency Injection Container wissen solltest, ist, dass sie nicht dasselbe sind wie Dependency Injection.
Ein Container ist ein praktisches Dienstprogramm zur Implementierung von Dependency Injection. Er kann jedoch missbraucht werden, um ein Anti-Pattern, Service Location, zu implementieren.
Das Einfügen eines DI-Containers als Service Locator in Ihre Klassen erzeugt möglicherweise eine stärkere Abhängigkeit vom Container als die zu ersetzende Abhängigkeit.
Dadurch wird Dein Code auch deutlich weniger transparent und letztendlich schwieriger zu testen.

Die meisten modernen Frameworks verfügen über einen eigenen Dependency Injection Container, der es Ihnen ermöglicht, Ihre Abhängigkeiten durch Konfiguration miteinander zu verknüpfen. 
In der Praxis bedeutet dies, dass Du Anwendungscode schreiben kannst, der so sauber und entkoppelt ist wie das Framework, auf dem er basiert.
