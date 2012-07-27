---
layout: page
title: Error Reporting in PHP
---

# Error Reporting in PHP

PHP can report errors while running your code, like the syntax error (also known as parse error) or the error of
accessing previously undefined variable or calling the undefined function. For example:

> PHP Fatal error:  Call to undefined function foo() in test.php on line 13

Reported errors are described with different levels, from a notice to the fatal error like above. A separate level
exists to add a warning when using deprecated features in the code that may be removed from the language in the future.

When testing your application, error reporting is useful in finding problem spots. You should not ignore any reported
error no matter how small it may look.

Reported error will include a type, a short summary and a file and line location of the error in the code. Parse errors
may report on a line following the real error location as PHP do not know what code you want to write and will stop
executing only after reading a non-recognizable construct.

There are a few PHP configuration directives for error reporting that can be set in `php.ini` (or what else your PHP
environment uses for placing PHP configuration).

It is possible to enable and disable error reporting for specific levels by setting the `error_reporting` configuration
directive, or dynamically using the `error_reporting()` function. Configuration directive `log_errors` can enable error
logging and `error_log` tells if errors should be logged into a file, to the web server log or the system logging
facility. Another directive `display_errors` configures if reported errors will be displayed in the output (e.g. in
the web page content).

It is possible to override default error reporting with a custom error handler using the `set_error_handler()` function.
Many frameworks do have their own error handlers enabled by default. Some PHP extensions may change the default error
reporting handler to provide more features.

Custom error handler can display fallback content or some error text without sensitive internal details to the user.

For PHP 5.3, set `error_reporting = E_ALL | E_STRICT`.

In PHP 5.4 `E_STRICT` is included in `E_ALL`, so it is enough to set `error_reporting = E_ALL`.

Configuration directive `display_errors` __must be off__ in the production environment as it can expose details about
your application to the attacker, making it __easier to exploit any security issues__ in it. In some cases where foreign
input is included in the error context, having this directive enabled may enable Cross-Site Scripting attacks.

If you are developing simple web or CLI applications, setting this directive on in the development may help you see
errors more easily. Your code will be better without any errors reported. For example, to prevent reported notices about
undefined variables or array indices use `isset()` or `empty()` and initialize variables before accessing them.

More experienced developers may prefer to configure error logging so it easy to monitor all reported errors in the log
and __disable `display_errors` in the development too__. Imagine writing code to respond on AJAX requests with a
structured output format like JSON, or working with binary formats while outputting dynamically generated images. If
reported errors are displayed at random places in the output it will break the output format, making it invalid and the
error text may be hard to read. All this will make development and testing very frustrating.

There are browser extensions and third party error reporting handlers to log reported errors from a web application
directly to the web browser console. This may be used in the development if one finds separate error logging too
inconvenient to setup and monitor.

Custom runtime errors may be triggered in the code using `trigger_error()` function, but using exceptions is usually a
better choice.

For more information on these settings, see the PHP manual:

* [Read about error handling and logging][errorhandling]
* [Read about configuration directives on error reporting][errorhandling_configuration]

[errorhandling]: http://www.php.net/manual/en/book.errorfunc.php
[errorhandling_configuration]: http://www.php.net/manual/errorfunc.configuration.php

