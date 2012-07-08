# Input Filtering

Never ever (ever) trust foreign input introduced to your PHP code. That leads to dark and dangerous places. Instead, always filter foreign input before you use it in your code.

PHP provides the `filter_var` and `filter_input` functions to help you do this. These two functions can sanitize text, verify formats (e.g. email addresses), and escape characters.

For example, if you accept code from an HTML form, you'll want to use `filter_input` before inserting the input into a database or inserting the input into an HTML response.

* [Learn about `filter_var`][1]
* [Learn about `filter_input`][2]

[Back to Top](#top){.top}

[1]: http://php.net/manual/en/function.filter-var.php
[2]: http://www.php.net/manual/en/function.filter-input.php
