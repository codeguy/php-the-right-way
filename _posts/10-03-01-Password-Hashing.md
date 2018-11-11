---
title:   패스워드 해시
isChild: true
anchor:  password_hashing
---

## 패스워드 해시 {#password_hashing_title}

PHP 어플리케이션을 만드는 모든 사람은 언제가 사용자 로그인 기능을 구현하게 될 것입니다. 사용자명과 패스워드를
데이터베이스에 저장해서 다음번 로그인할 때 사용자를 인증하는데 사용해야 합니다.

패스워드를 [_해시_][3]로 만들어 저장하는 것은 중요합니다. 해싱과 암호화라는 [전혀 다른 둘][7]은 종종 혼동됩니다.

해싱은 되돌릴 수없는 단방향 함수입니다. 이렇게하면 사실상 길이를 바꿀 수없는 고정 길이 문자열이 생성됩니다.
즉, 해시를 다른 해시와 비교하여 둘 다 동일한 소스 문자열에서 왔는지 확인할 수 있음을 의미합니다.
하지만 원래 문자열을 판별 할 수 없습니다. 패스워드가 해시되지 않고 권한이없는 제 3자가 데이터베이스에 액세스하는 경우, 모든 사용자 계정이 위험에 처하게 됩니다.

해싱과 달리 암호화는 되돌릴 수 있습니다(키가있는 경우). 암호화는 다른 영역에서 유용하지만 패스워드를 안전하게 저장하기 위해서라면 좋은 전략이 아닙니다.

패스워드는 해시하기 전에 각 패스워드 전에 임의의(random) 문자열을 추가하는 것으로 [_소금치기(솔팅,salting)_][5] 해야합니다. 이것은 사전 공격과 "레인보우 테이블"(일반적인 패스워드에 대한 암호 해시 목록)을 사용을 방어합니다.

사용자들이 흔히 복잡도가 낮은 동일한 패스워드를 여러 서비스에 사용하기 때문에 해싱과 솔팅은 필수적입니다.

또한 고속, 범용이 아닌 [전문화 된 _password 해싱_ 알고리즘][6]을 사용해야합니다
. 수용 가능한 암호 해싱 알고리즘의 짧은 목록 (2018 년 6 월 기준)

또한 고속의 범용 암호화 해시 함수(예 : SHA256)보다는 [전문화 된 _패스워드 해싱_ 알고리즘][6]을 사용해야합니다. 수용할 만한 암호 해싱 알고리즘의 몇가지는 (2018년 6월 기준) 아래와 같습니다:

* Argon2 (PHP 7.2 이상 사용 가능)
* Scrypt
* **Bcrypt** (PHP에서 제공. 아래에서 확인하세요.)
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

