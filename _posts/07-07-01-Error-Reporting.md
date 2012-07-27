---
isChild: true
---

## Error Reporting

PHP can report errors while running your code, like the syntax error (also known as parse error) or the error of
accessing previously undefined variable or calling the undefined function.

While error reporting is useful in finding problem spots in your application, there is a security concern about
configuration directive `display_errors` to display reported errors in the output (e.g. in the web page content). In the
production environment, this can expose details about your application to the attacker, making it __easier to exploit
any security issues in it__. In cases where foreign input is included in the error context, having this directive
enabled may enable Cross-Site Scripting attacks.

Knowing this, recommended settings on error reporting to set in your `php.ini` (or what else your PHP environment uses
for placing PHP configuration) are:

- `display_errors = Off`
- For PHP 5.4 `error_reporting = E_ALL` or `error_reporting = E_STRICT | E_ALL` for earlier versions.
- `log_errors = On`

You must also configure the `error_log` directive to select logging to a file, a web server log or to the system logging
facility. With these settings, errors will be logged but will not be shown in the output.

With no errors displayed in the output, you will need to constantly monitor the log for any errors reported in your
code in the development. This does not have to be hard, a simple terminal window tailing the log file will be just fine.
If that is not convinient for you or if you are developing only simple web or CLI applications, you __may set
`display_errors = On` only for your local development environment__ to help you see and fix reported errors more easily.

In some cases displaying errors can break your output making reported errors hard to read. This is why some developers
may prefer to look at log for errors and disable `display_errors` in the development too.

* Continue reading on [Error Reporting](/pages/Error-Reporting.html)
