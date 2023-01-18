---
isChild: true
anchor:  error_reporting
---

## Error Reporting {#error_reporting_title}

Error logging can be useful in finding the problem spots in your application, but it can also expose information about
the structure of your application to the outside world. To effectively protect your application from issues that could
be caused by the output of these messages, you need to configure your server differently in development versus
production (live).

### Development

To show every possible error during **development**, configure the following settings in your `php.ini`:

{% highlight ini %}
display_errors = On
display_startup_errors = On
error_reporting = -1
log_errors = On
{% endhighlight %}

> Passing in the value `-1` will show every possible error, even when new levels and constants are added in future PHP
> versions. The `E_ALL` constant also behaves this way as of PHP 5.4. -
> [php.net](https://www.php.net/function.error-reporting)

The `E_STRICT` error level constant was introduced in 5.3.0 and is not part of `E_ALL`, however it became part of
`E_ALL` in 5.4.0. What does this mean? In terms of reporting every possible error in version 5.3 it means you must
use either `-1` or `E_ALL | E_STRICT`.

**Reporting every possible error by PHP version**

* &lt; 5.3 `-1` or `E_ALL`
* &nbsp; 5.3 `-1` or `E_ALL | E_STRICT`
* &gt; 5.3 `-1` or `E_ALL`

### Production

To hide errors on your **production** environment, configure your `php.ini` as:

{% highlight ini %}
display_errors = Off
display_startup_errors = Off
error_reporting = E_ALL
log_errors = On
{% endhighlight %}

With these settings in production, errors will still be logged to the error logs for the web server, but will not be
shown to the user. For more information on these settings, see the PHP manual:

* [error_reporting](https://www.php.net/errorfunc.configuration#ini.error-reporting)
* [display_errors](https://www.php.net/errorfunc.configuration#ini.display-errors)
* [display_startup_errors](https://www.php.net/errorfunc.configuration#ini.display-startup-errors)
* [log_errors](https://www.php.net/errorfunc.configuration#ini.log-errors)
