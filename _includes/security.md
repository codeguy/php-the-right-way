# Security

## Web Application Security

There are bad people ready and willing to exploit your web application. It is important that you
 take necessary precautions to harden your web application's security. Luckily, the fine folks at [The Open Web Application Security Project][1] (OWASP) have compiled a comprehensive list of known security issues and methods to protect yourself against them. This is a must read for the security-conscious developer.

* [Read the OWASP Security Guide][2]

[1]: https://www.owasp.org/
[2]: https://www.owasp.org/index.php/Guide_Table_of_Contents

## Password Hashing with Bcrypt

Eventually everyone builds a PHP application that relies on user login. Usernames and (hashed) passwords are stored in a database and later used to authenticate users upon login.

It is important that you properly _hash_ passwords that are stored in a database. If passwords are not hashed, and your database is hacked or accessed by an unauthorized third-party, all user accounts are now compromised.

**Hash passwords with Bcrypt**. It's super simple, and (for all intents and purposes) Bcrypt makes it impossible for someone to reverse-engineer the plain-text version of a password should the database be compromised.

There are several Bcrypt libraries for PHP that you may use.

* [Read "How to Safely Store a Password" by Coda Hale][3]
* [Use Bcrypt with PHPAss][4] (odd name, I know)

[3]: http://codahale.com/how-to-safely-store-a-password/
[4]: http://www.openwall.com/phpass/

## Input Filtering and Sanitizing

Never ever (ever) trust foreign input introduced to your PHP code. That leads to dark and dangerous places. Instead, always filter foreign input before you use it in your code.

PHP provides the `filter_var` and `filter_input` functions to help you do this. These two functions can sanitize text, verify formats (e.g. email addresses), and escape characters.

For example, if you accept code from an HTML form, you'll want to use `filter_input` before inserting the input into a database or inserting the input into an HTML response.

* [Learn about `filter_var`][5]
* [Learn about `filter_input`][6]

[5]: http://php.net/manual/en/function.filter-var.php
[6]: http://www.php.net/manual/en/function.filter-input.php

[Back to Top](#top){.top}
