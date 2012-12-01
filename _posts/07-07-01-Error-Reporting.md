---
isChild: true
---

## Error Reporting {#error_reporting_title}

Error logging can be useful in finding the problem spots in your application, but it can also expose information about 
the structure of your application to the outside world. To effectively protect your application from issues that could 
be caused by the output of these messages, you need to configure your server differently in development versus 
production (live).

### Development

To show errors in your <strong>development</strong> environment, configure the following settings in your `php.ini`:

- display_errors: On
- error_reporting: -1
- log_errors: On

From [php.net](http://php.net/manual/function.error-reporting.php):

> Passing in the value -1 will show every possible error, even when new levels and constants are added in future PHP versions. The E_ALL constant also behaves this way as of PHP 5.4.

The `E_STRICT` error level constant was introduced in 5.3.0 and is not 
part of `E_ALL`, however it became part of `E_ALL` in 5.4.0. What does this mean? 
In terms of reporting every possible error in version 5.3 it means you must 
use either `-1` or `E_ALL | E_STRICT`. 

**Reporting Every Possibly Error by PHP Version**

* &lt; 5.3 `-1` or `E_ALL`
* &nbsp; 5.3 `-1` or `E_ALL | E_STRICT`
* &gt; 5.3 `-1` or `E_ALL`

### Production

To hide the errors on your <strong>production</strong> environment, configure your `php.ini` as:

- display_errors: Off
- error_reporting: E_ALL
- log_errors: On

With these settings in production, errors will still be logged to the error logs for the web server, but will not be 
shown to the user. For more information on these settings, see the PHP manual:

* [error_reporting](http://php.net/manual/errorfunc.configuration.php#ini.error-reporting)
* [display_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-errors)
* [log_errors](http://php.net/manual/errorfunc.configuration.php#ini.log-errors)