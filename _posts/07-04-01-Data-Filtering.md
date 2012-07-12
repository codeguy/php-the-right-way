---
isChild: true
---

## Input Validation And Filtering

Never ever (ever) trust foreign input introduced to your PHP code. Always sanitize and validate
foreign input before using it in code. The `filter_var` and `filter_input` functions can sanitize text and validate text formats (e.g.
email addresses).

Foreign input can be anything: `$_GET` and `$_POST` form input data, some values in the `$_SERVER`
superglobal, and the HTTP request body via `fopen('php://input', 'r')`. Remember, foreign input is not
limited to form data submitted by the user. Uploaded and downloaded files, session values, cookie data,
and data from third-party web services are foreign input, too.

While foreign data can be stored, combined, and accessed later, it is still foreign input. Every
time you process, output, concatenate, or include data in your code, ask yourself if
the data is filtered properly and can it be trusted.

Data may be _filtered_ differently based on its purpose. For example, when unfiltered foreign input is passed
into HTML page output, it can execute HTML and JavaScript on your site! This is known as Cross-Site
Scripting (XSS) and can be a very dangerous attack. One way to avoid XSS is to sanitize all HTML tags
in the input by removing tags or escaping them into HTML entities.

Another example is passing options to be executed on the command line. This can be extremely dangerous
(and is usually a bad idea), but you can use the built-in `escapeshellarg` function to sanitize the executed
command's arguments.

One last example is accepting foreign input to determine a file to load from the filesystem. This can be exploited by
changing the filename to a file path. You need to remove "/", "../", or other characters from the file path so it can't
load hidden, non-public, or sensitive files.

* [Learn about data filtering][1]
* [Learn about `filter_var`][4]
* [Learn about `filter_input`][5]

### Escaping and Sanitization

Sanitization removes illegal or unsafe characters from foreign input. Escaping does not alter the value of the input but instead converts certain special characters into a safer escaped form, e.g. using HTML hexadecimal or named entities to prevent the injection of angle brackets that might allow new tags to be introduced into a HTML document.

For example, you should escape foreign input before including the input in 
HTML or inserting it into a raw SQL query. When you use bound parameters with
[PDO](#databases), it will escape the input for you.

The escaping required of foreign input will depend on the HTML context it is
injected into. Escaping for HTML text differs from escaping for Javascript or
URL strings. You can find a reference implementation for context-specific
escaping functions in this [Zend Escaper class](https://github.com/zendframework/zf2/blob/master/library/Zend/Escaper/Escaper.php).

Sometimes it is required to allow some safe HTML tags (i.e. unescaped)
in the input when 
including it in the HTML page (as part of that page's markup). This is extremely difficult to do without introducing security vulnerabilities and 
programmers should not attempt to sanitise HTML in this manner
without the help of [HTML Purifier][html-purifier] which is considered the 
safest HTML sanitizer in PHP.

Some programmers try to avoid the need for HTML sanitisation altogether by using
restricted formatting languages like Markdown or BBCode. You should be
aware, however, that these languages are intended to make it easier to
write HTML by removing the complexity of HTML syntax as an editing
barrier. The result of converting such languages to HTML will very likely still
require post-processing by [HTML Purifier][html-purifier] to remove potential
Cross-Site Scripting (XSS) or UI Redress attempts by unfriendly users. When
in doubt, use HTML sanitisation and you can't go wrong.

[See Sanitization Filters][2]

### Validation

Validation ensures that foreign input is what you expect. For example, you may want to validate an
email address, a phone number, or age when processing a registration submission.

[See Validation Filters][3]

[1]: http://www.php.net/manual/en/book.filter.php
[2]: http://www.php.net/manual/en/filter.filters.sanitize.php
[3]: http://www.php.net/manual/en/filter.filters.validate.php
[4]: http://php.net/manual/en/function.filter-var.php
[5]: http://www.php.net/manual/en/function.filter-input.php
[html-purifier]: http://htmlpurifier.org/
