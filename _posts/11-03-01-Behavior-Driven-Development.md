---
isChild: true
anchor:  behavior_driven_development
---

## Behavior Driven Development {#behavior_driven_development_title}

There are two different types of Behavior-Driven Development (BDD): SpecBDD and StoryBDD. SpecBDD focuses on technical
behavior of code, while StoryBDD focuses on business or feature behaviors or interactions. PHP has frameworks for both
types of BDD.

With StoryBDD, you write human-readable stories that describe the behavior of your application. These stories can then
be run as actual tests against your application. The framework used in PHP applications for StoryBDD is [Behat], which
is inspired by Ruby's [Cucumber] project and implements the Gherkin DSL for describing feature behavior.

With SpecBDD, you write specifications that describe how your actual code should behave. Instead of testing a function
or method, you are describing how that function or method should behave. PHP offers the [PHPSpec] framework for this
purpose. This framework is inspired by the [RSpec project][Rspec] for Ruby.

### BDD Links

* [Behat], the StoryBDD framework for PHP, inspired by Ruby's [Cucumber] project;
* [PHPSpec], the SpecBDD framework for PHP, inspired by Ruby's [RSpec] project;
* [Codeception] is a full-stack testing framework that uses BDD principles.


[Behat]: https://behat.org/
[Cucumber]: https://cucumber.io/
[PHPSpec]: https://www.phpspec.net/
[RSpec]: https://rspec.info/
[Codeception]: https://codeception.com/
