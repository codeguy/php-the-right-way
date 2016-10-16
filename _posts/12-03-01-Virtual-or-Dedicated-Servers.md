---
title: السيرفرات المخصصة أو الإفتراضية
isChild: true
anchor:  virtual_or_dedicated_servers
---

## السيرفرات المخصصة أو الإفتراضية {#virtual_or_dedicated_servers_title}

**Virtual or Dedicated Servers** 
إذا كنت مرتاح بالعمل كمشرف نظام أو مهتم بتعلمه فالسيرفرات المخصصة والإفتراضية تتيح لك مطلق الحرية والتحكم في بيئة التطبيق النهائية.

### nginx و PHP-FPM

تقترن PHP مع [nginx] باستخدام البنية المدمجة FastCGI Process Manager (FPM) وهو سيرفر خفيف ذو كفاءة عالية.
ويقوم باستخدام ذاكرة أقل من نظيره Apache ويقوم بإدارة عدد أكبر من الطلبات المتزامنة. وهو مناسب في السيرفرات الإفتراضية
بحيث لا يوجد الكثير من الذاكرة لإهدارها.

* [قراءة المزيد عن nginx][nginx]
* [قراءة المزيد عن PHP-FPM][phpfpm]
* [قراءة المزيد عن ضبط nginx مع PHP-FPM بصورة آمنة][secure-nginx-phpfpm]

### Apache و PHP

تملك PHP و Apache تاريخاً طويلاً معاً. فـ Apache واسع الإنتشاء ولديه العديد من [الوحدات][apache-modules] لتمديد وظائفه.
فهو خيار مشهور لكل السيرفرات المشتركة وطريقة سهلة لتشغيل إطر عمل PHP وتطبيقات المصدر المفتوح مثل WordPress.
للأسف Apache يستخدم الكثير من المصادر بعكس Nginx ولا يقوم بإدراة العديد من الزوار في نفس الزمن.

يوجد عدة طرق لضبط PHP للعمل مع Apache. فالطريقة الأكثر شيوعاً وأسهلها هي تنصيب [prefork MPM] مع الوحدة mod_php5.
بينما هو ليس بخيار جيد في استهلاك الذاكرة ولكنه الأبسط للإستخدام والتشغيل. ويعتبر أفضل خيار إذا كنت لا تنوي التعمق في
إدارة السيرفرات. لاحظ أنه عند استخدام mod_php5 فإنه يجب عليك استخدام [prefork MPM].

عوضاً عن ذلك، إذا كنت تريد أن تعتصر المزيد من كفاءة الأداء والإستقرار من Apache عندها يمكن الإستفادة من نفس نظام FPM مثل
Nginx وتشغيل [worker MPM] أو [event MPM] مع الوحدة mod_fastcgi أو mod_fcgid.
هذا الضبط سيكون ذا تأثير واضح وكبير على الذاكرة وسرعة ملحوظة ولكن هنالك جهد أكبر للتنصيب.

* [قراءة المزيد عن Apache][apache]
* [قراءة المزيد عن دوال المعالجة المتعددة Multi-Processing Modules][apache-MPM]
* [قراءة المزيد عن mod_fastcgi][mod_fastcgi]
* [قراءة المزيد عن mod_fcgid][mod_fcgid]


[nginx]: http://nginx.org/
[phpfpm]: http://php.net/install.fpm
[secure-nginx-phpfpm]: https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/
[apache-modules]: http://httpd.apache.org/docs/2.4/mod/
[prefork MPM]: http://httpd.apache.org/docs/2.4/mod/prefork.html
[worker MPM]: http://httpd.apache.org/docs/2.4/mod/worker.html
[event MPM]: http://httpd.apache.org/docs/2.4/mod/event.html
[apache]: http://httpd.apache.org/
[apache-MPM]: http://httpd.apache.org/docs/2.4/mod/mpm_common.html
[mod_fastcgi]: http://www.fastcgi.com/mod_fastcgi/docs/mod_fastcgi.html
[mod_fcgid]: http://httpd.apache.org/mod_fcgid/