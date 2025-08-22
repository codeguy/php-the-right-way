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

**Hashing von Paswprtern mit `password_hash`**

`password_hash()` wurde mit PHP 5.5 eingeführt. 
Derzeit verwendet es BCrypt, den derzeit stärksten von PHP unterstützten Algorithmus.
Es wird jedoch in Zukunft aktualisiert, um bei Bedarf weitere Algorithmen zu unterstützen. 
Die `password_compat`-Bibliothek wurde erstellt, um die Vorwärtskompatibilität für PHP >= 5.3.7 zu gewährleisten.

Im Folgenden hashen wir eine Zeichenfolge und vergleichen den Hash dann mit einer neuen Zeichenfolge. Da unsere beiden Quellzeichenfolgen unterschiedlich sind ('secret-password' vs. 'bad-password'), schlägt diese Anmeldung fehl.

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

`password_hash()` nimmt Dir das Salting des Passworts ab. Das Salt wird zusammen mit dem Algorithmus und den "Kosten" als Teil des Hashs gespeichert. `password_verify()` extrahiert dies, um zu bestimmen, wie das Passwort überprüft werden soll, sodass Sie kein separates Datenbankfeld zum Speichern der Salts benötigt wird.

* [Mehr über `password_hash()`] [1]
* [`password_compat` for PHP >= 5.3.7 && < 5.5] [2]
* [Lerne über Hashing im Zusammenhang mit Kryptografie] [3]
* Erfahre mehr über _salts_] [5]
* [PHP `password_hash()` RFC] [4]


[1]: https://www.php.net/function.password-hash
[2]: https://github.com/ircmaxell/password_compat
[3]: https://wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
[5]: https://wikipedia.org/wiki/Salt_(cryptography)
[6]: https://paragonie.com/blog/2016/02/how-safely-store-password-in-2016
[7]: https://paragonie.com/blog/2015/08/you-wouldnt-base64-a-password-cryptography-decoded

