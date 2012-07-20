---
isChild: true
---

## Error Reporting

Error logging can be useful in finding the problem spots in your application, but it can also expose infromation about 
the structure of your application to the outside world. To effectively protect your application from issues that could 
be caused by the output of these messages, you need to configure your server differently in development versus 
production (live).

### Development

To show errors in your <strong>development</strong> environment, configure the following settings in your `php.ini`:

- display_errors: On
- error_reporting: E_ALL
- log_errors: On

### Production

To hide the errors on your <strong>production</strong> environment, configure your `php.ini` as:

- display_errors: Off
- error_reporting: E_ALL
- log_errors: On

With these settings in production, errors will still be logged to the error logs for the web server, but will not be 
shown to the user. For more information on these settings, see the PHP manual:

* [Error_reporting](http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting)
* [Display_errors](http://www.php.net/manual/en/errorfunc.configuration.php#ini.display-errors)
* [Log_errors](http://www.php.net/manual/en/errorfunc.configuration.php#ini.log-errors)