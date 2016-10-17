---
title: فضاءات الأسماء Namespaces
isChild: true
anchor:  namespaces
---

## فضاءات الأسماء Namespaces {#namespaces_title}

As mentioned above, the PHP community has a lot of developers creating lots of code. This means that one library's PHP
code might use the same class name as another. When both libraries are used in the same namespace, they collide
and cause trouble.
كما قد سبق ذكره ان مجتمع PHP يحتوي على عدد كبير من الطورين وبدورهم يطورون أعداداً ضخمة من البرمجيات. وهذا يعني ا انه مكتبة واحدة
من برمجية PHP قد تستخدم اسماء كائنات مسماة في مكتبة اخرى، اي قد يحدث تضارب في المسميات. فهذا يحدث عندما يستخدم كلا المكتبتين في نفس
فضاء الاسم (namespace) مما تسبب مشاكل ناجمة من التضارب الإسمي.

فضاءات الأسماء _Namespaces_ تحل هذه المشكلة. كما هو مذكور في مرجع اللغة PHP، أسماء الفضاءات يمكن تشبيهها بمجلدات النظام
 بحيث انه لا يمكن لملفين يحملان نفس الاسم واللاحقة ان يتواجدا في نفس المجلد. ولكن يمكن ان يتواجد ملفين بنفس المسى واللاحقة ولكن
 في مجلدين مختلفين. كذلك في كائنات PHP يمكن ان يملك كائنان نفس المسى ولكن يجب ان يكونا في فضاءين مختلفيني.

فمن المهم ان تستخدم هذه الفضاءات في عملك، بالتحديد اذا كنت تنوي مشاركة هذا العمل مع مطورين اخرين.
فهذا يمنع حدوث التضارب فيما بين المكتبات المتعددة

هنالك طريقة موصى بها لإستخدام فضاءات الأسماء وهي مدرجة [PSR-4][psr4]، وتهدف بتحديد نمط قياسي لكل ملف و كائن و فضاء اسم لسهولة الإستخدام وامكانية
الإدراج والبدء بالاستخدام مباشرة لهذه المكتبات.

In October 2014 the PHP-FIG deprecated the previous autoloading standard: [PSR-0][psr0]. Both PSR-0 and PSR-4 are still perfectly usable.  The latter requires PHP 5.3, so many PHP 5.2-only projects implement PSR-0. 
في اكتوبر 20014 PHP-FIG قامت بإهمال وايقاف العمل بطريقة الإدراج التلقائي القياسية بالرمز [PSR-0][psr0]، حيث انها استبدلت
بالتوصية القياسية بالرمز [PSR-4][psr4]. حالياً ما يزال هنالك امثلة وتطبيقة جيدة ومستقرة تستخدم التوصية القياسية القديمة PSR-0 فلذلك سوف تظل تلك
الطريقة في الميدان. لحسن الحظ مثل هذه التطبيقات تعمل بإصدار PHP 5.2 القديمة قد بدأت بالترقية الى توافقية مع الإصدارات الجديدة مما يعني انكماش
استخدام التوصية PSR-0 القديمة.

If you're going to use an autoloader standard for a new application or package, look into PSR-4.
إذا كنت تنوي استخدام الإستدعاء التلقائي القياسي في تطبيقك او حزمتك، حينها يجب ان تعير انتباهك بان تستخدم التوصية القياسية PSR-4.

* [قراءة المزيد عن فضاءات الأسماء Namespaces][namespaces]
* [قراءة المزيد عن التوصية القياسية PSR-0][psr0]
* [قراءة المزيد عن التوصية القياسية PSR-4][psr4]


[namespaces]: http://php.net/language.namespaces
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr4]: http://www.php-fig.org/psr/psr-4/
