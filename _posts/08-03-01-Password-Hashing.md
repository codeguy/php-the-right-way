---
title: Heširanje lozinki
isChild: true
---

## Heširanje lozinki {#password_hashing_title}

Na kraju svako napravi PHP aplikaciju koja koristi prijavu korisnika. Korisnička imena i lozinke se čuvaju u bazi podataka i kasnije se koristi za proveru identiteta korisnika prilikom prijave. 

Bitno je da ispravno [_hash_-ujete][3] lozinke pre nego što ih sačuvate. Heširanje lozinke je nepovratna transformacija koja se dešava kada je propustite kroz određenu funkciju. To proizvodi string fiksne dužine. To znači da možete da uporedite dva heša da biste utvrdili da li su oba nastali od istog stringa, ali ne možete od njih saznati orginalni string. Ako lozinke nisu heširane, a neko ko nije odobren pristupi vašoj bazi podataka, svi korisnički nalozi postaju kompromitovani. Neki korisnici mogu da koriste istu lozinku za više različitih servisa. Samim tim veoma je važno da ozbiljno shvatite bezbednost.

**Heširanje lozinki sa `password_hash`**

U PHP 5.5 verziji dodata je `password_hash` funkcija. Trenutno koristi BCrypt, najsnažniji algoritam koji PHP podržava. U budućnosti će biti ažurirana sa još algoritama, kako bude bilo potrebno. Biblioteka `password_compat` je kreirana da bi omogućila kompatibilnost sa PHP >= 5.3.7.

Ispod heširamo string, a onda proverimo heš sa novim stringom. Zato što su ta dva izvorna stringa različita ('secret-password' i 'bad-password') prijava na sistem neće uspeti.

{% highlight php %}
<?php
                      
require 'password.php';

$passwordHash = password_hash('secret-password', PASSWORD_DEFAULT);

if (password_verify('bad-password', $passwordHash)) {
    // Tačna lozinka
} else {
    // Pogrešna lozinka
}
{% endhighlight %}  



* [Naučite o `password_hash`] [1]
* [`password_compat` za PHP  >= 5.3.7 && < 5.5] [2]
* [Naučite o heširanju u kriptografiji] [3]
* [PHP `password_hash` RFC] [4]

[1]: http://us2.php.net/manual/en/function.password-hash.php
[2]: https://github.com/ircmaxell/password_compat
[3]: http://en.wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
