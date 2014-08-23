---
isChild: true
---

## Hešovanje lozinki {#password_hashing_title}

Kad-tad svako napravi PHP aplikaciju koja se oslanja na logovanje korisnika. Korisnička imena i lozinke se čuvaju u bazi
podataka i kasnije se koriste za autentifikaciju korisnika pri logovanju.

Bitno je da pravilno [_hešujete_][3] lozinke pre nego što ih sačuvate u bazi. Hešovanje lozinki je nepovratan,
jednosmeran proces, koji se vrši nad lozinkama korisnika. Kreira se string fiksne dužine koji se ne može lako
rekonstruisati. Ovo znači da možete uporediti dva heša da biste utvrdili da li potiču od istog stringa, ali ne možete
znati originalni string. Ako lozinke nisu hešovane a vašoj bazi neovlašćeno pristupi treća strana, svi korisnički nalozi
 biće kompromitovani. Neki korisnici (na nesreću) mogu koristiti istu lozinku i za druge servise. Zbog toga je neophodno
da sigurnost shvatite ozbiljno.

**Hešovanje lozinki pomoću `password_hash`**

U verziji PHP 5.5 će biti uveden `password_hash`. Trenutno se koristi BCrypt, najjači algoritam koji PHP trenutno
podržava. U budućnosti će biti ažuriran da bi podržao više algoritama ako bude neophodno. Biblioteka The
`password_compat` je napravljena kako bi pružila kompatibilnost sa verzijama PHP >= 5.3.7.

U donjem primeru hešujemo string, a onda proveravamo heš sa novim stringom. Pošto se naša dva izvorna stringa razlikuju
('secret-password' vs. 'bad-password') ovo logovanje će biti neuspešno.

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



* [Naučite o `password_hash`] [1]
* [`password_compat` za PHP  >= 5.3.7 && < 5.5] [2]
* [Naučite o hešovanju s aspekta kriptografije] [3]
* [PHP `password_hash` RFC] [4]

[1]: http://us2.php.net/manual/en/function.password-hash.php
[2]: https://github.com/ircmaxell/password_compat
[3]: http://en.wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
