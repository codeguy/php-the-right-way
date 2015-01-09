---
title:   패스워드 해시
isChild: true
anchor: password_hashing
---

## 패스워드 해시 {#password_hashing_title}

PHP 어플리케이션을 만드는 모든 사람은 언제가 사용자 로그인 기능을 구현하게 될 것입니다. 사용자명과 패스워드를
데이터베이스에 저장해서 다음번 로그인할 때 사용자를 인증하는데 사용해야 합니다.

패스워드는 저장하기 전에 적절하게 [_해시(hash)_][3] 해야 합니다. 패스워드는 원문을 복원할 수 없도록 단방향 함수로 해시되어야 합니다.
이러한 해시 함수는, 원문을 알아내는데 적절한 정도로 어려운 고정적인 길이의 문자열을 생성합니다.
만약 사용자의 패스워드를 해시하지 않고 데이터베이스에 저장한다면, 어떠한 경로를 통해서든 부적절하게 데이터베이스에 제 3자가
접근했을 때 모든 사용자 계정이 탈취당하게 될 것입니다. 운나쁘게 어떤 사용자는 다른 서비스에도 동일한 패스워드를 사용하고
있을 수도 있겠죠. 그러므로 패스워드 보안을 중요하게 생각해야 합니다.

**`password_hash`로 패스워드 해시하기**

PHP 5.5에는 `password_hash`가 도입되었습니다. 지금은 PHP에서 제공되는 가장 강력한 알고리즘인 BCrypt 를 
사용하게 구현되어 있는데, 아마도 미래에는 더 나은 알고리즘들을 지원하게 업데이트될 것입니다.
PHP 5.3.7 이상의 버전들과의 호환성을 제공하기 위해서 `password_compat` 라이브러리도 제공됩니다.

아래 코드에서는 문자열을 해시하고, 다른 문자열의 해시와 비교합니다. 두 개의 문자열이 서로 다르기 때문에
이 로그인은 실패한 것으로 간주될 것입니다.

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



* [Learn about `password_hash`] [1]
* [`password_compat` for PHP  >= 5.3.7 && < 5.5] [2]
* [Learn about hashing in regards to cryptography] [3]
* [PHP `password_hash` RFC] [4]

[1]: http://us2.php.net/manual/en/function.password-hash.php
[2]: https://github.com/ircmaxell/password_compat
[3]: http://en.wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
