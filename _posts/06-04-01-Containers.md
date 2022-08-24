---
isChild: true
anchor:  containers
---

## Containers {#containers_title}

The first thing you should understand about Dependency Injection Containers is that they are not the same thing as
Dependency Injection. A container is a convenience utility that helps us implement Dependency Injection, however, they
can be and often are misused to implement an anti-pattern, Service Location. Injecting a DI container as a Service
Locator in to your classes arguably creates a harder dependency on the container than the dependency you are replacing.
It also makes your code much less transparent and ultimately harder to test.

Most modern frameworks have their own Dependency Injection Container that allows you to wire your dependencies together
through configuration. What this means in practice is that you can write application code that is as clean and
de-coupled as the framework it is built on.
