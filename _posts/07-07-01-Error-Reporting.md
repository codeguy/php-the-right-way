---
isChild: true
---

## Error Reporting

PHP can report errors while running your code, like the syntax error (also known as parse error) or the error of
accessing previously undefined variable or calling the undefined function.

Error reporting can be useful in finding problem spots in your application and configuration directive `display_errors`
can enable displaying reported errors in the output (e.g. in the web page content). In the production environment, this
can expose details about your application to the attacker, making it easier to exploit any security issues in it. In
some cases where foreign input is included in the error context, having this directive enabled may enable Cross-Site
Scripting attacks.

The recommended settings to set in your `php.ini` (or what else your PHP environment uses for placing PHP configuration)
are:

- `display_errors = Off`
- For PHP 5.4 `error_reporting = E_ALL` or `error_reporting = E_STRICT | E_ALL` for earlier versions.
- `log_errors = On`

You should configure `error_log` directive to select logging to a file, a web server log or to the system logging
facility.

With these settings, errors will be logged but will not be shown in the output.

If you are developing simple web or CLI applications, you may set `display_errors = On` in the development to help you
see errors more easily. The problem is that this can break your output making reported errors hard to read. Some
developers may prefer to look at log for errors and disable `display_errors` in the development too.

* Continue reading on [Error Reporting](/pages/Error-Reporting.html)
