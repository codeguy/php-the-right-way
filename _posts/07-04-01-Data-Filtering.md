---
isChild: true
---

## Data Filtering

Never ever (ever) trust foreign input introduced to your PHP code. Always sanitize and validate
foreign input before using it in code.

PHP functions `filter_var` and `filter_input` can sanitize text and validate text formats (e.g.
email addresses).

Foreign input can be anything, from `$_GET` and `$_POST` form input data, some values in `$_SERVER`,
the HTTP body via `fopen('php://input', 'r')`, etc are all considered foreign inputs. It is not 
limited to form data submitted by the user, both uploaded and downloaded files, session values and
cookies count too. Data from third party web services should also be considered foreign input.

While foreign data can be stored, combined and accessed later, it is still a foreign input. Every
time you process, output, concatenate or include some data in your code you should ask yourself if
the data is filtered properly and can it be trusted.

Filtering is tailored to the specific data usage. For example, when foreign input is passed
to a HTML page output it can execute HTML and JavaScript on your site! This is known as Cross-Site
Scripting (XSS) and can be a very dangerous attack. One way to avoid this is to sanitize all HTML tags
in the input, removing tags or escaping them.

That is of course one instance of filtering against a specific type of attach. Another example would be 
when passing options to be executed on the command line. This can be extremely dangerous and is usually bad 
idea, but you can use the built-in `escapeshellarg` function to sanitize the arguments. 

One last example would be accepting foreign input to determine a file to load. This could be expoited by 
changing the filename to a file path, so you need to remove / or other characters from the path, so it cant load potentially
hidden or sensitive files.

For performance, you can store filtered data and have it ready for usage next time. Just remember
that data filtered for one kind of the output may not be sufficiently filtered for the other.

* [Learn about data filtering][1]
* [Learn about `filter_var`][4]
* [Learn about `filter_input`][5]

### Sanitization

Sanitization removes (or escapes) illegal or unsafe characters from foreign input.

For example, you should sanitize foreign input before including the input in HTML or inserting it
into a raw SQL query. When you use bound parameters with [PDO](#databases), it will
sanitize the input for you.

Sometimes it is required to allow some safe HTML tags in the input when including it in the HTML
page. This is very hard to do and many avoid it by using other more restricted formatting like
Markdown or BBCode, although whitelisting libraries like [HTML Purifier][html-purifier] exists for
this reason.

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
