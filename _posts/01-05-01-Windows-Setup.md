---
title: التنصيب على نظام تشغيل Windows
isChild: true
anchor:  windows_setup
---

## التنصيب على نظام تشغيل Windows {#windows_setup_title}

يمكنك تحميل الملفات التنفيذية من [windows.php.net/download][php-downloads].
بعد تنصيب PHP يفضل اضافة وضبط مسار التنصيب ( المسار الذي يحتوي على ملف php.exe بداخله) الى المتغير العام [PATH][windows-path] حتى تتمكن من تشغيل PHP من أي مكان في النظام.

لأغراض التعلم والتطوير المحلي يمكنك استخدام المخدم المدمج مع PHP 5.4 أو اعلى، حتى لا تحتاج عملية الضبط مع برامج اخرى للمخدم.
إذا كنت تفضل "الكل في واحد" وهي برامج تحتوي على كل الحزم التي قد تحتاجها من مخدم ويب ومخدم قاعدة بيانات بالإضافة ل PHP، اذاً
فبرامج مثل [Web Platform Installer][wpi]، [XAMPP][xampp]، [EasyPHP][easyphp]، [OpenServer][openserver] ، [WAMP][wamp]
ستساعدك في تنصيب بيئة تطوير متكاملة بسرعة على نظام تشغيل Windows. الجدير بالذكر ان هذه الأدوات تختلف قليلاً مما هي عليه على المخدمات
مرحلة التنفيذ النهائية، فيجب عليك توخي الحيطة والحذر ومراعاة الإختلافات ما بين البيئتين. كمثال انك تقوم بالتطوير على بيئة عمل Windows وتقوم بالتنفيذ في بيئة نهائية Linux.

إذا كنت تريد تشغيل بيئتك النهائية على نظام تشغيل Windows حينها IIS7 سوف يوفر لك اداء عالٍ ومستقر.
يمكنك استخدام [phpmanager][phpmanager] (إضافة واجهة عمل رسومية تنصب لـ IIS7) لإدارة وضبط PHP بكل بساطة.
IIS7 يكون معه FastCGI مدمج وجاهز للإستخدام ، كل ما عليك هو ضبط PHP كمعالج (Handler).
للدعم ومصادر أخرى هنالك [صفحة مخصصة على iis.net][php-iis] خصيصاً لـ PHP.

بشكل عام تشغيل برامجك على بيئات متعددة في مرحلة التطوير والتنفيذ قد يؤدي لظهور أخطاء ومشاكل مختلفة وغيريبة..
لذلك عندما تقوم بتنصيب بيئة تطوير على Windows ثم تقوم بتنصيبها على بيئة عمل نهائية Linux (أو اي نظام تشغيل آخر) يجب الأخذ بالإعتبار استخدام [بيئة تشغيل افتراضية](/#virtualization_title).

كريس تانكرسلي لديه مقالة ممتازة على مدونته الشخصية للأدوات التي يستخدمها عندما [يقوم بتطوير البرامج على بيئة Windows][windows-tools].

[easyphp]: http://www.easyphp.org/
[phpmanager]: http://phpmanager.codeplex.com/
[openserver]: http://open-server.ru/
[wamp]: http://www.wampserver.com/en/
[php-downloads]: http://windows.php.net/download/
[php-iis]: http://php.iis.net/
[windows-path]: http://www.windows-commandline.com/set-path-command-line/
[windows-tools]: http://ctankersley.com/2015/07/01/developing-on-windows/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[xampp]: http://www.apachefriends.org/en/xampp.html
