---
title: دليل اسلوب كتابة الكود البرمجي
isChild: false
anchor: code_style_guide
---

# دليل اسلوب كتابة الكود البرمجي {#code_style_guide_title}

مجتمع لغة PHP هو مجتمع ضخم و متنوع، يتألف من عدد لا يعد ولا يحصى من المكتبات، و أطر العمل، و مكونات وعناصر اخرى.
فمن الطبيعي ان يختار المطورين عدة خيارات منها ودمج بعضها في داخل اطار مشروع واحد. فمن المهم ان ينظم للكود البرمجي للغة PHP
(قدر الإمكان) باسلوب برمجي معين لكي يسهل على المطورين التعامل المشترك وفهم محتوى الكود البرمجي في مكتباتهم في مشاريعهم

The [Framework Interop Group][fig] has proposed and approved a series of style recommendations. Not all of them related
to code-style, but those that do are [PSR-0][psr0], [PSR-1][psr1], [PSR-2][psr2] and [PSR-4][psr4]. These
recommendations are merely a set of rules that many projects like Drupal, Zend, Symfony, Laravel, CakePHP, phpBB, AWS SDK,
FuelPHP, Lithium, etc are adopting. You can use them for your own projects, or continue to use your own
personal style.
قامت [Framework Interop Group][fig] بتقديم واجازة سلسلة من الأساليب الموصى بها.
ليس كل هذه التوصيات هي توصيات تتعلق باسلوب كتابة الكود البرمجي، ولكن تحديداً ما يتعلق باسلوب الكتابة هم:
[PSR-0][psr0]، [PSR-1][psr1]، [PSR-2][psr2]، [PSR-4][psr4].
هذه التوصيات هي عبارة عن مجموعة من القواعد التي تستعملها مشاريع وتطبيقات كبرى مثل Drupal، Zend، Symfony، CakePHP، phpBB، AWS SDK،
FuelPHP، Lithium.. وغيرها.
يمكنك استخدام هذه الأساليب والتوصيات في مشروعك الخاص أو الإستمرات في إستخدام اسلوبك الخاص في الكتابة.

من الأمثل ان تقوم بكتابة كود برمجي يتماشى مع مجموعة قواعد قياسية متعارف بها. ويتم تطبيق هذه القواعد عن طريق دمج اي من
الأساليب السابق ذكرها PSR أو اخرى تم اعتمادها من قبل PEAR او Zend. هذا يعني انه يمكن لاي مطور اخر ان يقرأ ويفهم عملك 
نظراً لأن محتواه يخضع لطريقة كتابة معتمدة ويستخدمها كثير من التطبيقات والتطبيقات الفرعية الإخرى التي قد تستخدمها مع مشروعك.

* [قراءة المزيد عن PSR-0][psr0]
* [قراءة المزيد عن PSR-1][psr1]
* [قراءة المزيد عن PSR-2][psr2]
* [قراءة المزيد عن PSR-4][psr4]
* [قراءة المزيد عن الاسلوب القياسي لـ PEAR][pear-cs]
* [قراءة المزيد عن أسلوب كتابة الكود البرمجي في Symfony][symfony-cs]

يمكنك استخدام أدوات فحص الكود البرمجي ومعرفة ما اذا كان يخضع لاي من التوصيات مثل [PHP_CodeSniffer][phpcs]، وهنالك إضافات
يمكن تنصيبها على محرر النصوص مثل [Sublime Text][st-cs] وتتميز هذه الإضافات بأنها تتفاعل معك في أثناء الكتابة مباشرة.

يمكنك إصلاح الكود البرمجي واخضاعه لأحد الأساليب القياسية باستخدام اي من هذه الأدوات:

- الأول هو [PHP Coding Standards Fixer][phpcsfixer] وهو جيد جداً وتم تجربته ونتائجه ممتازة.
- والآخر هو [PHP Code Beautifier and Fixer][phpcbf] وهي اداة مدمجة مع PHP_CodeSniffer ويمكن استخدامها لتصحيح اسلوب الكتابة من وقت لللآخر.

ويمكنك أيضاً تشغيل `phpcs` يدوياً من سطر الأوامر:

    phpcs -sw --standard=PSR2 file.php

بعد التنفيذ سوف تظهر أخطاء توصف كيفية إصلاحها.
أيضاً يمكن الإستفادة من هذا الأمر عبر إضافته كـ git hook بحيث تتحقق من ان جميع الكود البرمج يتبع الأسلوب القياسي
واصلاح الأخطاء حتى يكون بالإمكان الإعتماد في المستودع (Repository).

إذا كنت تمتلك PHP_CodeSniffer عندها يمكنك تصحيح اسلوب الكود البرمج تلقائياً باستخدام 
[PHP Code Beautifier and Fixer][phpcbf].

    phpcbf -w --standard=PSR2 file.php

أو عن طريق خيار اخر وهو استخدام [PHP Coding Standards Fixer][phpcsfixer].
باستخدام هذا الأخير سوف يقوم باظهار نوع الأخطاء قبل إصلاحها.

    php-cs-fixer fix -v --level=psr2 file.php

اللغة الإنجليزية هي المفضلة لكل التسميات والرموز والعلامات وجميع بنية الكود.
يمكن كتابة الملاحظات باي لغة يمكن قراءتها من قبل اي من المطورين الحاليين او المحتملين.


[fig]: http://www.php-fig.org/
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr1]: http://www.php-fig.org/psr/psr-1/
[psr2]: http://www.php-fig.org/psr/psr-2/
[psr4]: http://www.php-fig.org/psr/psr-4/
[pear-cs]: http://pear.php.net/manual/en/standards.php
[symfony-cs]: http://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[phpcbf]: https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: http://cs.sensiolabs.org/
