---
isChild: true
---

## Behavior Driven Development {#behavior_driven_development_title}

There are two different types of Behavior-Driven Development (BDD): SpecBDD and StoryBDD. SpecBDD focuses on technical behavior or code, while StoryBDD focuses on business or feature behaviors or interactions. PHP has frameworks for both types of BDD.

With StoryBDD, you write human-readable stories that describe the behavior of your application. These stories 
can then be run as actual tests against your application. The framework used in PHP applications for StoryBDD
is Behat, which is inspired by Ruby's [Cucumber](http://cukes.info/) project and implements the Gherkin DSL
for describing feature behavior.

With SpecBDD, you write specifications that describe how your actual code should behave. Instead of testing
a function or method, you are describing how that function or method should behave. PHP offers the PHPSpec framework for this purpose. This framework is inspired
by the [RSpec project](http://rspec.info/) for Ruby.

### BDD Links    

* [Behat](http://behat.org/), the StoryBDD framework for PHP, inspired by Ruby's [Cucumber](http://cukes.info/) project;
* [PHPSpec](http://www.phpspec.net/), the SpecBDD framework for PHP, inspired by Ruby's [RSpec](http://rspec.info/) project;
* [Codeception](http://www.codeception.com) is a full-stack testing framework that uses BDD principles.
