---
isChild: true
---

## Test Driven Development

From [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development):

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: first the developer writes a failing automated test case that defines a desired improvement or new function, then produces code to pass that test and finally refactors the new code to acceptable standards. Kent Beck, who is credited with having developed or 'rediscovered' the technique, stated in 2003 that TDD encourages simple designs and inspires confidence

There are several different types of testing that you can do for your application

### Unit Testing

Unit Testing is a programming approach to ensure functions, classes and methods are working as
expected, from the point you build them all the way through the development cycle. By checking
values going in and out of various functions and methods, you can make sure the internal logic is
working correctly.

When you create a class or function you should create a unit test for each behaviour it must have. At a very basic level you should
make sure it errors if you send it bad arguments and make sure it works if you send it valid arguments.
This will help ensure that when you make changes to this class or function later on in the development
cycle that the old functionality continues to work as expected. The only alternative to this would be
var_dump() in a test.php, which is no way to build an application - large or small.

It is supposed that the test you write is isolated from other parts of system. 
This is done to make sure each unit of your code works by itself. 
The emulation of dependent modules is done by replacing them with [Stubs and Mocks](http://martinfowler.com/articles/mocksArentStubs.html). 

In some cases it's hard to remove all the dependencies from test. 
For testing database manipulation methods you might need a database. 
For testing controller built with a framework you might need to use classes of this framework. 
This is done when to make sure a method runs correctly on current database and correctly uses methods of current framework. 
These are the [Integration tests](http://en.wikipedia.org/wiki/Integration_testing) and they are supposed to test connection between modules and thrid-party backends. 
They are much similar to unit tests and they use same frameworks for testing.

Unit tests is a must when contributing to open source. 
When you prove your code works with a tests attached, patches are much more likely to be accepted.
If you run a project which accepts pull requests then you should suggest this as a requirement.

[PHPUnit](http://phpunit.de) is the de-facto testing framework for writing unit tests for PHP
applications, but there are several alternatives

* [SimpleTest](http://simpletest.org)
* [Enhance PHP](http://www.enhance-php.com/)
* [PUnit](http://punit.smf.me.uk/)
* [Atoum](https://github.com/mageekguy/atoum)

### Functional Testing

Sometimes also known as acceptance testing, functional testing consists of using tools to create automated
tests that actually use your application instead of just verifying that individual units of code are behaving
correctly and that individual units can speak to each other correctly. These tools typically work using real
data and simulating actual users of the application.

#### Functional Testing Tools

* [Selenium](http://seleniumhq.com) - standalone tool for running automated scenarios in browser.
* [Mink](http://mink.behat.org) - integration of various testing backends into test framework
* [Codeception](http://codeception.com) - a full-stack testing framework that includes acceptance testing tools
