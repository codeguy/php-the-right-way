---
isChild: true
anchor:  data_filtering
---

## Data Filtering {#data_filtering_title}

Never ever (ever) trust foreign input introduced to your PHP code. Always sanitize and validate foreign input before
using it in code. The `filter_var()` and `filter_input()` functions can sanitize text and validate text formats (e.g.
email addresses).

Foreign input can be anything: `$_GET` and `$_POST` form input data, some values in the `$_SERVER` superglobal, and the
HTTP request body via `fopen('php://input', 'r')`. Remember, foreign input is not limited to form data submitted by the
user. Uploaded and downloaded files, session values, cookie data, and data from third-party web services are foreign
input, too.

While foreign data can be stored, combined, and accessed later, it is still foreign input. Every time you process,
output, concatenate, or include data in your code, ask yourself if the data is filtered properly and can it be trusted.

Data may be _filtered_ differently based on its purpose. For example, when unfiltered foreign input is passed into HTML
page output, it can execute HTML and JavaScript on your site! This is known as Cross-Site Scripting (XSS) and can be a
very dangerous attack. One way to avoid XSS is to sanitize all user-generated data before outputting it to your page by
removing HTML tags with the `strip_tags()` function or escaping characters with special meaning into their respective
HTML entities with the `htmlentities()` or `htmlspecialchars()` functions.

Another example is passing options to be executed on the command line. This can be extremely dangerous (and is usually
a bad idea), but you can use the built-in `escapeshellarg()` function to sanitize the executed command's arguments.

One last example is accepting foreign input to determine a file to load from the filesystem. This can be exploited by
changing the filename to a file path. You need to remove `"/"`, `"../"`, [null bytes][6], or other characters from the
file path so it can't load hidden, non-public, or sensitive files.

* [Learn about data filtering][1]
* [Learn about `filter_var`][4]
* [Learn about `filter_input`][5]
* [Learn about handling null bytes][6]

### Sanitization

Sanitization removes (or escapes) illegal or unsafe characters from foreign input.

For example, you should sanitize foreign input before including the input in HTML or inserting it into a raw SQL query.
When you use bound parameters with [PDO](#databases), it will sanitize the input for you.

Sometimes it is required to allow some safe HTML tags in the input when including it in the HTML page. This is very
hard to do and many avoid it by using other more restricted formatting like Markdown or BBCode, although whitelisting
libraries like [HTML Purifier][html-purifier] exist for this reason.

[See Sanitization Filters][2]

### Unserialization

It is dangerous to `unserialize()` data from users or other untrusted sources.  Doing so can allow malicious users to instantiate objects (with user-defined properties) whose destructors will be executed, **even if the objects themselves aren't used**.  You should therefore avoid unserializing untrusted data.

Use a safe, standard data interchange format such as JSON (via [`json_decode`][json_decode] and [`json_encode`][json_encode]) if you need to pass serialized data to the user.

### Validation

Validation ensures that foreign input is what you expect. For example, you may want to validate an email address, a
phone number, or age when processing a registration submission.

[See Validation Filters][3]


[1]: https://www.php.net/book.filter
[2]: https://www.php.net/filter.filters.sanitize
[3]: https://www.php.net/filter.filters.validate
[4]: https://www.php.net/function.filter-var
[5]: https://www.php.net/function.filter-input
[6]: https://www.php.net/security.filesystem.nullbytes
[html-purifier]: http://htmlpurifier.org/
[json_decode]: https://www.php.net/manual/function.json-decode.php
[json_encode]: https://www.php.net/manual/function.json-encode.php
