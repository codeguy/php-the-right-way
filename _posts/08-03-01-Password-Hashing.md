---
isChild: true
---

## Password Hashing {#password_hashing_title}

Eventually everyone builds a PHP application that relies on user login. Usernames and passwords are stored in a database and later used to authenticate users upon login.

It is important that you properly [_hash_][3] passwords before storing them. Password hashing is an irreversible, one way function performed against the user's password. This produces a fixed-length string that cannot be feasibly reversed. This means you can compare a hash against another to determine if they both came from the same source string, but you cannot determine the original string. If passwords are not hashed and your database is accessed by an unauthorized third-party, all user accounts are now compromised. Some users may (unfortunately) use the same password for other services. Therefore, it is important to take security seriously.

**Hashing passwords with `password_hash`**

In PHP 5.5 `password_hash` was introduced. At this time it is using BCrypt, the strongest algorithm currently supported by PHP. It will be updated in the future to support more algorithms as needed though. The `password_compat` library was created to provide forward compatibility for PHP >= 5.3.7.

Below we hash a string, and then check the hash against a new string. Because our two source strings are different ('secret-password' vs. 'bad-password') this login will fail.

{% highlight php %}                                                                                                                                                                                              
<?php                                                                                                                                                                                                            
require 'password.php';

$passwordHash = password_hash('secret-password', PASSWORD_DEFAULT);

if (password_verify('bad-password', $passwordHash)) {
    //Correct Password
} else {
    //Wrong password
}
{% endhighlight %}  



* [Learn about `password_hash`] [1]
* [`password_compat` for PHP  >= 5.3.7 && < 5.5] [2]
* [Learn about hashing in regards to cryptography] [3]
* [PHP `password_hash` RFC] [4]

[1]: http://us2.php.net/manual/en/function.password-hash.php
[2]: https://github.com/ircmaxell/password_compat
[3]: http://en.wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
