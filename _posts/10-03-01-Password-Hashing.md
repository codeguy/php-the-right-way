---
isChild: true
anchor:  password_hashing
---

## Password Hashing {#password_hashing_title}

Irgendwann erstellt jeder eine PHP-Anwendung, die auf Benutzeranmeldung basiert. Benutzernamen und Passwörter werden in einer Datenbank gespeichert und später zur Authentifizierung der Benutzer bei der Anmeldung verwendet.

Es ist wichtig, dass wir Passwörter vor dem Speichern ordnungsgemäß [_hashen_][3]. Hashing und Verschlüsselung sind [zwei sehr unterschiedliche Dinge][7], die oft verwechselt werden.

Hashing ist eine unumkehrbare Einwegfunktion. 
Es entsteht eine Zeichenfolge mit fester Länge, die nicht rückgängig gemacht werden kann. 
Du kannst also einen Hash mit einem anderen vergleichen, um festzustellen, ob beide aus derselben Quellzeichenfolge stammen, aber Du kannst die ursprüngliche Zeichenfolge _nicht wieder ermitteln_.
Wenn Passwörter nicht gehasht werden und ein unbefugter Dritter auf Deine Datenbank Zugriff erlangt, sind alle Benutzerkonten kompromittiert!

Im Gegensatz zum Hashing ist die Verschlüsselung umkehrbar (vorausgesetzt, Du verfügen über den Schlüssel). 
Verschlüsselung ist in anderen Bereichen nützlich, stellt jedoch keine gute Strategie für die sichere Speicherung von Passwörtern dar.

Passwörter sollten außerdem individuell  [_salted (gesalzen werden)_][5], indem jedem Passwort vor dem Hashing eine zufällige Zeichenfolge hinzugefügt wird.
Dies verhindert Wörterbuchangriffe und die Verwendung von "Rainbow Tables" (eine umgekehrte Liste kryptografischer Hashes für gängige Passwörter).

Hashing und Salting sind von entscheidender Bedeutung, da Benutzer häufig dasselbe Passwort für mehrere Dienste verwenden und die Passwortqualität schlecht sein kann.

Darüber hinaus solltest Du einen [speziellen Passwort-Hashing-Algorithmus][6] anstelle einer schnellen, universellen kryptografischen Hash-Funktion (z. B. SHA256) verwenden. Die kurze Liste der zulässigen Passwort-Hashing-Algorithmen (Stand: Juni 2018) lautet:

* Argon2 (available in PHP 7.2 and newer)
* Scrypt
* **Bcrypt** (PHP provides this one for you; see below)
* PBKDF2 with HMAC-SHA256 or HMAC-SHA512

Glücklicherweise ist dies heutzutage mit PHP einfach.

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

