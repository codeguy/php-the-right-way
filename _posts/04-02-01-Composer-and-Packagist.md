---
title: Composer و Packagist
isChild: false
isChild: true
anchor:  composer_and_packagist
---

## Composer و Packagist {#composer_and_packagist_title}

يعتبر Composer أداة **ممتازة** لأدارة توابع PHP. كل ما عليك هو ان تضع قائمة بالتوابع في ملف `composer.json` وببضع أوامر
بسيطة سوف يقوم Composer بإنزال كل توابع مشروعك بالإضافة لتنصيب وضبط ملف إدراج تلقائي autoload.
يعتبر Composer مماثل لـ NPM المستخدم في node.js، أو Bundler المستخدم في Ruby.

يوجد هنالك الكثير من مكتبات PHP متوافقة مع Composer وجاهزة لكي تستخدمها مع مشروعك. هذه المكتبات أو "الحزم" مدرجة
في [Packagist]، المستودع الحصري لكل مكتبات PHP المتوافقة مع Composer.

### كيفية تنصيب Composer

The safest way to download composer is by [following the official instructions](https://getcomposer.org/download/).   
This will verify the installer is not corrupt or tampered with.  
The installer installs Composer *locally*, in your current working directory.

We recommend installing it *globally* (e.g. a single copy in /usr/local/bin) - to do so, run this afterwards:
يمكنك تنصيب Composer محلياً (في مجلدك الحالي) أو بشكل عام (مثلا /usr/local/bin وهو المحبذ).
فلنفترض انك تريد تنصيب Composer بشكل عام:

{% highlight console %}
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

**Note:** If the above fails due to permissions, prefix with `sudo`.
**ملاحظة:** اذا فشل الأمر السابق بسبب صلاحيات قم بتشغيل الأمر `mv` مرة اخرى بكتابة الأمر `sudo` قبله.

To run a locally installed Composer you'd use `php composer.phar`, globally it's simply `composer`.
سوف يتم تحميل `composer.phar` (PHAR هو اختصار لـ PHP binary Archive وتعني ملف PHP مضغوط قابل للتنفيذ). يمكنك
تشغيل هذا الملف باستخدام الأمر `php` لإدارة التوابع في مشروعك.

**ملاحظة:** إذا قمت باستخدام مخرجات تنفيذ عملية مباشرة للإستخدام مع مترجم PHP، الرجاء قراءة
الكود البرمجي أولاً للتحقق من انه آمن.

#### التنصيب على نظام تشغيل Windows

لمستخدمي نظام التشغيل Windows، الطريقة الأسهل وهي استخدام ملف تنصيب [ComposerSetup]، حيث أنه يقوم
بتنصيبه للتوفر بشكل عام على النظام ويقوم بضبط متغيرات `$PATH` حتى تتمكن من فقط استدعاء الأمر `composer`
من شاشة سطور الأوامر من أي مجلد في النظام.

### كيفية تنصيب Composer(يدوياً)

تنصيب Composer يدوياً هو عملية متقدمة ولك هنالك العديد من الأسباب تجعل المطور يقوم باستخدام هذه الطريقة بدلاً
من الطريقة التلقائية التقليدية. فالطريقة التقليدية التقائية تقوم بفحص إصدارة PHP الحالية لتقوم بالتأكد من الآتي:

- توافق إصدارة PHP المنصبة حالياً.
- هل يمكن تشغيل وتنفيذ ملفات `.phar` بصورة صحيحة.
- التأكد من الصلاحيات على المجلدات.
- التأكد من الملحقات اذا فشل إدراجها.
- التأكد من ملف الضبط `php.ini`.

بالمقابل الطريقة التقليدية لا تقوم باي من العمليات المذكورة انفاً، يتوجب عليك ان تقوم ببعض او كل العمليات
يدوياً، لتنصيب Composer يدويا قم بالآتي:

{% highlight console %}
curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
chmod +x $HOME/local/bin/composer
{% endhighlight %}

المجلد `$HOME/local/bin` (أو المجلد الذي تختاره) يجب ان يكون مدرج في متغيرات `$PATH`. فذا يساعد على أن
يكون الأمر `composer` متوافر من أي مكان.

ويجب الأخذ بالإعتبار بانه عند استخدام تلك الطريقة، سوف تتغير طريقة الإستخدام التي قد تجدها في بعض المراجع
`php composer.phar install` ليكتب بدلاً منها الآتي:

{% highlight console %}
composer install
{% endhighlight %}

وهذا ينطبق فقط إذا قم بتنصيب Composer بشكل عام في النظام.

### كيفية تحديد وإدراج التوابع

يقوم Composer بتتبع وادارة توابع مشروعك عن طريق ملف يسمى `composer.json`. يمكنك ادارة هذا الملف يدوياً
باستخدام اي محرر نصوص، أو استخدام Composer لإنجاز هذه العملية. يقوم الأمر `composer require` بإضافة تابع
الى مشروعك ، فإذا لم يكن ملف `composer.json` موجوداً سوف يقوم تلقائياً بإنشائه.
مثال لإدراج مكتبة [Twig] كتابع لمشروعك.

{% highlight console %}
composer require twig/twig:~1.8
{% endhighlight %}

عوضاً عن ذلك يمكنك تنفيذ الأمر `composer init` وسوف يقوم بمساعدتك لإنشاء ملف `composer.json` بالكامل لكي
يتناسب مع مشروعك. ويمكنك ايضاً بعد انشاء ملف `composer.json` ان تخبر Composer ان يقوم بتحميل وتنصيب التوابع
في مجلد `vendor/`. وهذا ينطبق ايضاً على المشاريع والمكتبات التي تقوم بانزالها ويوجد معها الملف `composer.json`.

{% highlight console %}
composer install
{% endhighlight %}

بعدها، قم بإضافة هذا السطر الى ملف برنامجك الأساسي، حتى يتمكن من اعلام PHP لكي يستخدم المدرج التلقائي autoloader
التابع لـ Composer لكي يدرج التوابع لمشروعك.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

يمكنك الآن استخدام توابع مشروعك وسيتم إدراجهم تلقائياً باستخدام autoloader.

### تحديث التوابع

يقوم Composer بإنشاء ملف بإسم `composer.lock` بحيث يقوم بحفظ ارقام إصدارات كل تابع يقوم بتحميله عن أول تنفيذ
للأمر `composer install`. إذا كنت تشارك مشروعك مع مطورين آخرين وملف `composer.lock` هو جزء من ملفاتك، فعندما يقوم
احدهم بتنفيذ الأمر `composer install` سوف يحصل على نفس الإصدارات الموجودة لديك.
لتحديث التوابع قم بتنفيذ الأمر `composer update`.

تكون هذه العملية مفيدة عندما تكون متطلباتك من التوابع محددة بمرونة، فمثلا تتطلب لمشروعك تابع بالإصدار
`~1.8` بمعنى "كل الإصدارات الأجدد من 1.8.0، والأقل من 2.0.x-dev". يمكنك ايضاً استخدام `*` `1.8.*` لتحديد الكل من خانة واحدة.
فالآن عند تنفيذ الأمر `composer update` سوف يقوم Composer بتحديث كل توابعك الى النسخة الأحدث بناء على ما قد حددته سلفاً كمطلب.

### تنبيهات التحديثات

لكي تصل لك تنبيهات عند صدور إصدارات جديدة من التوابع يمكنك التسجيل في [VersionEye]، وهي خدمة يمكنها متابعة حسابك في كل من
GitHub و BitBucket بحثاً في داخل ملفات `composer.json`، وتقوم بإرسال بريد إلكتروني عند صدور تحديثات جديدة.

### فحص مشاكل الأمان في توابعك

[Security Advisories Checker] هي خدمة و أداة تعمل على سطور الأوامر، بحيث تقوم باختبار ملف `composer.lock` وتقوم بإخبارك
إذا ما كان هنالك حاجة لتحديث اي من التوابع.

### التحكم في التوابع العامة باستخدام Composer

يمكن ل Composer التحكم في التوابع وملفاتها التنفيذية ايضاً. طريقة الإستخدام واضحة جداً، كل ما عليك فعله هو ادراج كلمة `global`
قبل تنفيذ الأمر. مثلا إذا كنت تريد تنصيب الأداة PHPUnit واستخدامها بشكل عام في نظامك قم بتنفيذ هذا الأمر:

{% highlight console %}
composer global require phpunit/phpunit
{% endhighlight %}

هذا الأمر سيقوم بإنشاء مجلد في `~/.composer` حيث يقوم بوضع كل التوابع العامة هناك. ولكي تقوم بتنفيذ أوامر وعمليات تلك التوابع
من أي مكان، ببساطة قم بإدراج مسار المجلد `~/.composer/vendor/bin` الى متغير `$PATH` في النظام لديك.

* [تعرف على المزيد في Composer]

[Packagist]: http://packagist.org/
[Twig]: http://twig.sensiolabs.org
[VersionEye]: https://www.versioneye.com/
[Security Advisories Checker]: https://security.sensiolabs.org/
[Learn about Composer]: http://getcomposer.org/doc/00-intro.md
[ComposerSetup]: https://getcomposer.org/Composer-Setup.exe
