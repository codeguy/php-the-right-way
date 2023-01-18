---
isChild: true
anchor:  password_hashing
---

## Password Hashing {#password_hashing_title}

Eventually everyone builds a PHP application that relies on user login. Usernames and passwords are stored in a
database and later used to authenticate users upon login.

It is important that you properly [_hash_][3] passwords before storing them. Hashing and encrypting are [two very different things][7]
that often get confused.

Hashing is an irreversible, one-way function. This produces a fixed-length string that cannot be feasibly reversed.
This means you can compare a hash against another to determine if they both came from the same source string, but you
cannot determine the original string. If passwords are not hashed and your database is accessed by an unauthorized
third-party, all user accounts are now compromised.

Unlike hashing, encryption is reversible (provided you have the key). Encryption is useful in other areas, but is a poor
strategy for securely storing passwords.

Passwords should also be individually [_salted_][5] by adding a random string to each password before hashing. This prevents dictionary attacks and the use of "rainbow tables" (a reverse list of cryptographic hashes for common passwords.)

Hashing and salting are vital as often users use the same password for multiple services and password quality can be poor.

Additionally, you should use [a specialized _password hashing_ algorithm][6] rather than fast, general-purpose
cryptographic hash function (e.g. SHA256). The short list of acceptable password hashing algorithms (as of June 2018)
to use are:

* Argon2 (available in PHP 7.2 and newer)
* Scrypt
* **Bcrypt** (PHP provides this one for you; see below)
* PBKDF2 with HMAC-SHA256 or HMAC-SHA512

Fortunately, nowadays PHP makes this easy.

**Hashing passwords with `password_hash`**

In PHP 5.5 `password_hash()` was introduced. At this time it is using BCrypt, the strongest algorithm currently
supported by PHP. It will be updated in the future to support more algorithms as needed though. The `password_compat`
library was created to provide forward compatibility for PHP >= 5.3.7.

Below we hash a string, and then check the hash against a new string. Because our two source strings are different
('secret-password' vs. 'bad-password') this login will fail.

{% highlight php %}
<?php
require 'password.php';

$passwordHash = password_hash('secret-password', PASSWORD_DEFAULT);

if (password_verify('bad-password', $passwordHash)) {
    // Correct Password
} else {
    // Wrong password
}
{% endhighlight %}

`password_hash()` takes care of password salting for you. The salt is stored, along with the algorithm and "cost", as part of the hash.  `password_verify()` extracts this to determine how to check the password, so you don't need a separate database field to store your salts.

* [Learn about `password_hash()`] [1]
* [`password_compat` for PHP >= 5.3.7 && < 5.5] [2]
* [Learn about hashing in regards to cryptography] [3]
* [Learn about salts] [5]
* [PHP `password_hash()` RFC] [4]


[1]: https://www.php.net/function.password-hash
[2]: https://github.com/ircmaxell/password_compat
[3]: https://wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
[5]: https://wikipedia.org/wiki/Salt_(cryptography)
[6]: https://paragonie.com/blog/2016/02/how-safely-store-password-in-2016
[7]: https://paragonie.com/blog/2015/08/you-wouldnt-base64-a-password-cryptography-decoded

