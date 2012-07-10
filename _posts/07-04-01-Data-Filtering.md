---
isChild: true
---

## Data Filtering

Never ever (ever) trust foreign input introduced to your PHP code. That leads to dangerous places. Instead, always sanitize and validate foreign input before trusting and using it in your code.

PHP provides the `filter_var` and `filter_input` functions to help you do this. These two functions can sanitize text and validate formats (e.g. email addresses).

* [Learn about data filtering][1]
* [Learn about `filter_var`][4]
* [Learn about `filter_input`][5]

### Sanitization

Sanitization removes (or escapes) illegal or unsafe characters from foreign input. For example, you should sanitize foreign input before including the input in HTML or inserting it into a raw SQL query. When you use bound parameters with [PDO](#databases_and_pdo), it will sanitize the input for you.

[See Sanitization Filters][2]

### Validation

Validation ensures that foreign input is what you expect. For example, you may want to validate an email address, a phone number, or age when processing a registration submission.

[See Validation Filters][3]

[1]: http://www.php.net/manual/en/book.filter.php
[2]: http://www.php.net/manual/en/filter.filters.sanitize.php
[3]: http://www.php.net/manual/en/filter.filters.validate.php
[4]: http://php.net/manual/en/function.filter-var.php
[5]: http://www.php.net/manual/en/function.filter-input.php
