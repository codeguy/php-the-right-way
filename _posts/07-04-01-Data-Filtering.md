---
isChild: true
---

## Data Filtering

Never ever (ever) trust foreign input introduced to your PHP code. Always sanitize and validate
foreign input before using it in code.

PHP functions `filter_var` and `filter_input` can sanitize text and validate text formats (e.g.
email addresses).

Foreign input is not just the HTML form data submitted by the user. Most of HTTP request data, data
from foreign web services, both uploaded and downloaded files and much else are foreign inputs too.
While foreign input can be stored, combined and accessed later, it is still a foreign input. Every
time you process, output, concatenate or include some data in your code you should ask yourself if
the data is filtered properly and can it be trusted.

Filtering is tailored to the specific data usage. When including foreign input into the HTML page,
one way to protect from Cross-Site Scripting (XSS) attack is to sanitize by removing all HTML tags
in the input. But when using the same foreign input as a shell command argument removing HTML is
pointless, and the built-in `escapeshellarg` function may be used for sanitization. Or input may be
used as a concatenated filepath part, allowing only number or nothing, which can be done with
validation.

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
