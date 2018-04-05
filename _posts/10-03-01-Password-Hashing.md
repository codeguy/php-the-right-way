---
isChild: true
anchor:  password_hashing
title: 密码哈希
---

## 密码哈希 {#password_hashing_title}

每个人在建构 PHP 应用时终究都会加入用户登录的模块。用户的帐号及密码会被储存在数据库中，在登录时用来验证用户。


在存储密码前正确的 [哈希密码][3]  是非常重要的。哈希密码是单向不可逆的，该哈希值是一段固定长度的字符串且无法逆向推算出原始密码。这就代表你可以哈希另一串密码，来比较两者是否是同一个密码，但又无需知道原始的密码。如果你不将密码哈希，那么当未授权的第三者进入你的数据库时，所有用户的帐号资料将会一览无遗。有些用户可能（很不幸的）在别的网站也使用相同的密码。所以务必要重视数据安全的问题。

密码应该单独被  [加盐处理][5] ，加盐值指的是在哈希之前先加入随机子串。以此来防范「字典破解」或者「彩虹碰撞」（一个可以保存了通用哈希后的密码数据库，可用来逆向推出密码）。

哈希和加盐非常重要，因为很多情况下，用户会在不同的服务中选择使用同一个密码，密码的安全性很低。

值得庆幸的是，在 PHP 中这些很容易做到。

**使用 `password_hash` 来哈希密码**

`password_hash` 函数在 PHP 5.5 时被引入。 此函数现在使用的是目前 PHP 所支持的最强大的加密算法 BCrypt 。 当然，此函数未来会支持更多的加密算法。 `password_compat` 库的出现是为了提供对 PHP >= 5.3.7 版本的支持。

在下面例子中，我们哈希一个字符串，然后和新的哈希值对比。因为我们使用的两个字符串是不同的（'secret-password' 与 'bad-password'），所以登录失败。

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

`password_hash()` 已经帮你处理好了加盐。加进去的随机子串通过加密算法自动保存着，成为哈希的一部分。`password_verify()` 会把随机子串从中提取，所以你不必使用另一个数据库来记录这些随机子串。


* [了解 `password_hash()`] [1]
* [PHP >= 5.3.7 && < 5.5 的 `password_compat`] [2]
* [了解密码学中的哈希] [3]
* [学习下加盐] [5]
* [PHP `password_hash()` RFC] [4]

[1]: http://php.net/function.password-hash
[2]: https://github.com/ircmaxell/password_compat
[3]: http://en.wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
[5]: https://en.wikipedia.org/wiki/Salt_(cryptography)
