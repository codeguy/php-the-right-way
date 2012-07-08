# Input Filtering

Never ever (ever) trust foreign input when outputting data in your PHP code. That leads to dark and
dangerous places. Instead, always filter foreign input before you use it in your code.

It is easy to be short sighted when thinking what are the foreign inputs and written outputs. Most
would notice that HTML form data is foreign input as it is provided by an user of your web
application, but like is so almost all HTTP request data originating from the user, data obtained
from third party RSS feeds or web services, uploaded and downloaded files and else.

This foreign input often ends in the output. The basic case is when you are writing data as a part
of the HTML page content. It may also be included in response HTTP headers, filepath that you want
to access on a server, shell command you want to execute or some SQL statement for the database.

You must not trust foreign input and you need to filter it so it is guaranteed that only safe input
is included in the output. Not filtering your output leads to many types of security attacks, most
popular ones being Cross-site scripting or SQL Injections.

PHP provides the `filter_var` and `filter_input` functions to help you do this. These two functions
can sanitize text, verify formats (e.g. email addresses), and escape characters.

For example, if you accept code from an HTML form, you'll want to use `filter_input` before
inserting the input into an HTML response. If you do not change how the data is used in the output,
you may save some computation by also storing the filtered data to the database and avoid running
the filter every time.

Different kinds of outputs may require more context sensitive filtering, like `escapeshellarg`. When
outputting foreign input as page content, it is specially hard to do a proper input sanitization if 
one needs to allow HTML tags in the input and avoid XSS attacks at the same time.

* [Learn about `filter_var`][1]
* [Learn about `filter_input`][2]

[Back to Top](#top){.top}

[1]: http://php.net/manual/en/function.filter-var.php
[2]: http://www.php.net/manual/en/function.filter-input.php
