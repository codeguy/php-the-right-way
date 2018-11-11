---
title:   패스워드 해시
isChild: true
anchor:  password_hashing
---

## 패스워드 해시 {#password_hashing_title}

PHP 어플리케이션을 만드는 모든 사람은 언제가 사용자 로그인 기능을 구현하게 될 것입니다. 사용자명과 패스워드를
데이터베이스에 저장해서 다음번 로그인할 때 사용자를 인증하는데 사용해야 합니다.

It is important that you properly [_hash_][3] passwords before storing them. Hashing and encrypting are [two very different things][7]
that often get confused.

Hashing is an irreversible, one-way function. This produces a fixed-length string that cannot be feasibly reversed.
This means you can compare a hash against another to determine if they both came from the same source string, but you
cannot determine the original string. If passwords are not hashed and your database is accessed by an unauthorized
third-party, all user accounts are now compromised.

Unlike hashing, encryption is reversible (provided you have the key). Encryption is useful in other areas, but is a poor
strategy for securely storing passwords.

패스워드는 해시하기 전에 각 패스워드 전에 임의의(random) 문자열을 추가하는 것으로 [_소금치기(솔팅,salting)_][5] 해야합니다. 이것은 사전 공격과 "레인보우 테이블"(일반적인 패스워드에 대한 암호 해시 목록)을 사용을 방어합니다.

사용자들이 흔히 복잡도가 낮은 동일한 패스워드를 여러 서비스에 사용하기 때문에 해싱과 솔팅은 필수적입니다.

Additionally, you should use [a specialized _password hashing_ algoithm][6] rather than fast, general-purpose
cryptographic hash function (e.g. SHA256). The short list of acceptable password hashing algorithms (as of June 2018)
to use are:

* Argon2 (available in PHP 7.2 and newer)
* Scrypt
* **Bcrypt** (PHP provides this one for you; see below)
* PBKDF2 with HMAC-SHA256 or HMAC-SHA512

다행스럽게도, 최근에 PHP는 이것을 쉽게 할 수 있습니다.

**`password_hash`로 패스워드 해시하기**

PHP 5.5에는 `password_hash()`가 도입되었습니다. 지금은 PHP에서 제공되는 가장 강력한 알고리즘인 BCrypt를 사용하게
구현되어 있는데, 아마도 미래에는 더 나은 알고리즘들을 지원하게 업데이트될 것입니다. PHP 5.3.7 이상의 버전들과의
호환성을 제공하기 위해서 `password_compat` 라이브러리도 제공됩니다.

아래 코드에서는 문자열을 해시하고, 다른 문자열의 해시와 비교합니다. 두 개의 문자열이 서로 다르기 때문에
('secret-password' vs. 'bad-password') 이 로그인은 실패한 것으로 간주될 것입니다.

{% highlight php %}
<?php
require 'password.php';

$passwordHash = password_hash('secret-password', PASSWORD_DEFAULT);

if (password_verify('bad-password', $passwordHash)) {
    // 맞는 패스워드
} else {
    // 틀린 패스워드
}
{% endhighlight %}

`password_hash()` 는 패스워드 솔팅을 처리합니다. 솔트는 알고리즘과 "cost"와 함께 해시의 한 부분으로 저장됩니다. `password_verify()` 가 이것을 추출하여 패스워드를 어떻게 확인할지 결정하기 때문에 솔트를 저장하기 위한 별도의 데이타베이스 필드는 필요없습니다.

* [알아보기: `password_hash()`] [1]
* [`password_compat` for PHP >= 5.3.7 && < 5.5] [2]
* [알아보기: hashing in regards to cryptography] [3]
* [알아보기: salts] [5]
* [PHP `password_hash()` RFC] [4]


[1]: https://secure.php.net/function.password-hash
[2]: https://github.com/ircmaxell/password_compat
[3]: https://wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
[5]: https://wikipedia.org/wiki/Salt_(cryptography)
[6]: https://paragonie.com/blog/2016/02/how-safely-store-password-in-2016
[7]: https://paragonie.com/blog/2015/08/you-wouldnt-base64-a-password-cryptography-decoded

