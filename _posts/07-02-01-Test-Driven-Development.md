---
isChild: true
---

## Test Driven Development

Unit Testing is a programatical approach to ensure functions, classes and methods are working as 
expected, from the point you build them all the way through to the development cycle. By checking 
values going in and out of various functions and methods, you can make sure the internal logic is 
working correctly. By using Dependecy Injection and building "mock" classes you can check internal 
parameter values for even better test coverage.

When you create a class or function you should create a unit test for it. At a very basic level you should 
make sure it errors if you send it bad arguments and make sure it works if you send it valid arguments. 
This will help ensure that when you make changes to this class or function later on in the development 
cycle that the old functionality continues to work as expected. The only alternative to this would be 
var_dump() in a test.php, which is no way to build an application - large or small.

The other use for unit tests is contributing to open source. If you can write a test that shows broken 
functionality, then fix it, and show the test working, patches are much more likely to be accepted. If 
you run a project which accepts pull requests then you should suggest this as a requirement.

PHPUnit is the most popular and has become a de facto standard with its popular adoption amongst [PHP 
frameworks][phpfws] and [Composer][composer] component developers, but there are a few alternatives around.

* [PHPUnit](http://phpunit.de/)
* [Enhance PHP](http://www.enhance-php.com/)
* [PUnit](http://punit.smf.me.uk/)

[phpfws]: /#libraries_and_frameworks
[composer]: /#composer_and_packagist