---
title: تشفير كلمات المرور
isChild: true
anchor:  password_hashing
---

## تشفير كلمات المرور {#password_hashing_title}

دائماً ما يتم بناء تطبيقات PHP تعتمد على تسجيل دخول مستخدمين. فإسم المستخدم وكلمة المرور يتم حفظهما في قاعدة البيانات
حتى يتم استخدامهما للتحقق من هوية المستخدم عن تسجيل الدخول.

من المهم أن تقوم [_بتشفير_][3] كلمات السر قبل حفظها. تشفير كلمة المرور هو عملية تشفير أحادية الإتجاه لا يمكن إسترجاعها
وتنفذ على كلمة مرور المستخدم. يتم انشاء نص محدد المدى لا يمكن فكه. هذا يعني نه ستقوم بمقارنة المحتوى المشفر بمثله للتأكد
من أنهما متطابقين، فسيكونا كذلك إذا كانا من نفس المصدر، ولكن لا يمكن معرفة المحتوى الأصلي. إذا لم يتم تشفير كلمات المرور
وتم الوصول غير المصرح به لقاعدة البيانات، فسيكون كل حسابات المستخدمين قد تم السيطرة عليها. بعض المستخدمين (للأسف) يقومون
باستخدام نفس كلمة المرور لخدمات أو مواقع أخرى. بالتالي فمن المهم الإهتمام بالحماية بشكل جاد.

**تشفير كلمات المرور باستخدام `password_hash`**

في إصدارة PHP 5.5 تم إضافة دالة `password_hash()`. حالياً تستخدم هذه الدالة لوغاريثمية BCrypt، وهي اللوغاريثمية الأقوى حتى
الآن في PHP. ستيم مستقبلاً إضافة الدعم لعدة لوغاريثمات أخرى حسب الحاجة. تم إنشاء مكتبة `password_compat` لإتاحة توافقية
لإصدارات PHP المتقدمة PHP >= 5.3.7.

أدناه سنقوم بتشفير نص، ثم نقوم بمقارنته بنص آخر. بما أن كلا النصين مختلفين، (كلمة مرور صحيحة مقارنة بـ كلمة مرور خاطئة)
ستفشل عملية تسجيل الدخول.

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


* [تعرف المزيد عن `password_hash()`] [1]
* [`password_compat` PHP >= 5.3.7 && < 5.5] [2]
* [Learn about hashing in regards to cryptography] [3]
* [PHP `password_hash()` RFC] [4]


[1]: http://php.net/function.password-hash
[2]: https://github.com/ircmaxell/password_compat
[3]: http://en.wikipedia.org/wiki/Cryptographic_hash_function
[4]: https://wiki.php.net/rfc/password_hash
