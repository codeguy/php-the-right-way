---
isChild: true
anchor:  test_driven_development
---

## Test Driven Development {#test_driven_development_title}

From [Wikipedia](https://wikipedia.org/wiki/Test-driven_development):

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short
> development cycle: first the developer writes a failing automated test case that defines a desired improvement or new
> function, then produces code to pass that test and finally refactors the new code to acceptable standards. Kent Beck,
> who is credited with having developed or 'rediscovered' the technique, stated in 2003 that TDD encourages simple
> designs and inspires confidence.

There are several different types of testing that you can do for your application:

### Unit Testing

Unit Testing is a programming approach to ensure functions, classes and methods are working as expected, from the point
you build them all the way through the development cycle. By checking values going in and out of various functions and
methods, you can make sure the internal logic is working correctly. By using Dependency Injection and building "mock"
classes and stubs you can verify that dependencies are correctly used for even better test coverage.

When you create a class or function you should create a unit test for each behavior it must have. At a very basic level
you should make sure it errors if you send it bad arguments and make sure it works if you send it valid arguments. This
will help ensure that when you make changes to this class or function later on in the development cycle that the old
functionality continues to work as expected. The only alternative to this would be `var_dump()` in a test.php, which is
no way to build an application - large or small.

The other use for unit tests is contributing to open source. If you can write a test that shows broken functionality
(i.e. fails), then fix it, and show the test passing, patches are much more likely to be accepted. If you run a project
which accepts pull requests then you should suggest this as a requirement.

[PHPUnit](https://phpunit.de/) is the de-facto testing framework for writing unit tests for PHP applications, but there
are several alternatives:

* [atoum](https://github.com/atoum/atoum)
* [Kahlan](https://github.com/kahlan/kahlan)
* [Peridot](https://peridot-php.github.io/)
* [Pest](https://pestphp.com/)
* [SimpleTest](https://github.com/simpletest/simpletest)

### Integration Testing

From [Wikipedia](https://wikipedia.org/wiki/Integration_testing):

> Integration testing (sometimes called Integration and Testing, abbreviated "I&T") is the phase in software testing in
> which individual software modules are combined and tested as a group. It occurs after unit testing and before
> validation testing. Integration testing takes as its input modules that have been unit tested, groups them in larger
> aggregates, applies tests defined in an integration test plan to those aggregates, and delivers as its output the
> integrated system ready for system testing.

Many of the same tools that can be used for unit testing can be used for integration testing as many of the same
principles are used.

### Functional Testing

Sometimes also known as acceptance testing, functional testing consists of using tools to create automated tests that
actually use your application instead of just verifying that individual units of code are behaving correctly and that
individual units can speak to each other correctly. These tools typically work using real data and simulating actual
users of the application.

#### Functional Testing Tools

* [Selenium](https://www.selenium.dev/)
* [Mink](https://mink.behat.org/)
* [Codeception](https://codeception.com/) is a full-stack testing framework that includes acceptance testing tools
* [Storyplayer](https://datasift.github.io/storyplayer/) is a full-stack testing framework that includes support for creating and destroying test environments on demand
