---
isChild: true
---

## Input Filtering and Sanitizing

Never ever (ever) trust foreign input when outputting data in your PHP code. Always filter foreign
input before. Not doing so may lead to many types of security attacks, most popular being
Cross-site scripting (XSS) and SQL injections.

It is easy to be short sighted when thinking what are foreign inputs and what are outputs. Most
would notice that HTML form data is a foreign input as it is provided by an user of the web
application. But also is most of HTTP request data, data obtained from foreign web service,
uploaded and downloaded files and else.

When data is written in HTML page content it may include this foreign input. Foreign input may alse
be outputted in response HTTP headers, when concatenating filepath to access on a server, shell command
to execute or in a SQL statement.

Foreign input can be used and reused, saved, cached and accessed later. This is why every time you
output or concatenate somthing, it is important to trace the data and check if it is foreign input and
should it be filtered.

PHP provides the `filter_var` and `filter_input` functions to help you do this. These two functions
can sanitize text, verify formats (e.g. email addresses), and escape characters.

Different outputs requires context sensitive filtering, like `escapeshellarg` when foreign input is used
in shell command arguments. When including foreign input in page content, to avoid XSS attacks HTML tags
should not be allowed in input. Sometimes it is required to allow some HTML tags, and then it is very hard
to do a safe input sanitization, although whitelisting libraries like HTML Purifier exists for this reason.

You may save some computation by storing the filtered data to the database and avoid running the filter
every time on output. Just remember that if you store filtered data for one kind of the output, it may not
be sufficiently filtered for the other.

* [Learn about `filter_var`][5]
* [Learn about `filter_input`][6]
* [HTML Purifier][html-purifier]

[5]: http://php.net/manual/en/function.filter-var.php
[6]: http://www.php.net/manual/en/function.filter-input.php
[html-purifier]: http://htmlpurifier.org/
