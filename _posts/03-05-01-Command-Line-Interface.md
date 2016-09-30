---
title: واجهة سطور الأوامر
isChild: true
anchor:  command_line_interface
---

## واجهة سطور الأوامر {#command_line_interface_title}

صممت PHP لكتابة تطبيقات الويب، ولكن من المفيد ايضاً التعامل مع برامج واجهة سطور الأوامر (CLI).
برامج PHP المبنية للعمل على سطور الأوامر تساعد على أداء مهام معتادة مثل تجربة ونشر وادارة البرامج بصورة تلقائية.

تطبيقات PHP التي تعمل على واجهة سطور الأوامر هي برامج قوية لانها تستخدم مصدر البرنامج مباشرة من دون الحاجة لعمل واجهة
ويب مرئية وحماية للتعامل بها. ولكن تأكد بان **لا** تضع تطبيقك الذي يعمل بواجهة سطور الأوامر في مجلد موقعك!

جرب تشغيل أمر PHP هذا من واجهة سطور الأوامر:

{% highlight console %}
> php -i
{% endhighlight %}

يدل خيار `-i` على طباعة بيانات ضبط PHP كما تنفذه دالة [`phpinfo()`][phpinfo] تماماً.

ايضاً خيار `-a` يوفر اوامر تفاعلية مماثلة لشبيهاتها عند ruby IRB و python interactive shell. هنالك عدد من الأوامر والخيارات المفيدة
التي يمكنك الاطلاع عليها ايضاً [command line options][cli-options].

لنقم بتجربة كتابة برنامج ترحيبي بسيط بطريقة واجهة سطور الأوامر، قم بإنشاء ملف بإسم `hello.php` ثم قم بكتابة الاتي:

{% highlight php %}
<?php
if ($argc !== 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

تقوم PHP بعمل متغيران خاصان بناء على القيم التي يعمل بها تطبيقك.
[`$argc`][argc] وهو متغير رقمي يحتوي على *عدد* القيم.
[`$argv`][argv] وهو متغير به مصفوفة تحوتي على *قيمة* كل من القيم.
دائما ما يكون الخيار الأول من القيم هو اسم ملف PHP المراد تنفيذه وفي هذه الحالة هو الملف `hello.php`.
تستخدم دالة `exit()` بدون قيمة صفرية لاعلام منفذ الأوامر بأن الأمر قد فشل!.
يمكن الإطلاع على شفرات الخروج من [هنا][exit-codes].

لتنفيذ الملف، قم بفتح نافذة تنفيذ سطور الأوامر ثم قم بكتابة الآتي:

{% highlight console %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}


 * [قم بمعرفة المزيد عن تشغيل PHP من واجهة سطور الأوامر][php-cli]
 * [تعرف كيفية ضبط نظام التشغيل Windows لتشغيل PHP من نافذة سطور الأوامر][php-cli-windows]


[phpinfo]: http://php.net/function.phpinfo
[cli-options]: http://php.net/features.commandline.options
[argc]: http://php.net/reserved.variables.argc
[argv]: http://php.net/reserved.variables.argv
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&amp;topic=sysexits
[php-cli]: http://php.net/features.commandline
[php-cli-windows]: http://php.net/install.windows.commandline
