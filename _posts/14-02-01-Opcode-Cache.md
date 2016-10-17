---
title: التخزين المؤقت لشفرة التشغيل
isChild: true
anchor:  opcode_cache
---

## التخزين المؤقت لشفرة التشغيل {#opcode_cache_title}

عندما يتم تنفيذ ملف PHP يجب أن يتم تجميع الملف وتحويله [لشيفرة تشغير opcodes](http://php.net/manual/en/internals2.opcodes.php) (وهي لغة أوامر للمعالج). إذا لم يتغير المصدر البرمجي فإن الشيفرة المصدرية ستظل كما هي، إذاً هذه الخطوة التجميعية ستكون مضيعة لمصدر معالجة.

التخزين المؤقت للشيفرة التشغيلية تمنع تكرار التجميعات عبر حفظ الشيفرة في الذاكرة واستخدامها عند الإستدعاء. فهي فعلياً ستقوم بفحص التوقيع أو زمن التعديل للملف أولاً للتأكد من أي تعديلات قد طرأت عليه.

من الواضح أن تخزين شيفرة التشغيل سيؤثر بشكل ايجابي على سرعة التطبيق. منذ الإصدارة PHP 5.5 هنالك محرك مدمج واحد وهو [Zend OPcache][opcache-book]. باختلاف توزيعة PHP لديك عادة ما تكون هذه الخاصية مفعلة بشكل افتراضي - ابحث عن [opcache.enable](http://php.net/manual/en/opcache.configuration.php#ini.opcache.enable) في مخرجات الدالة `phpinfo()` للتأكد. للإصدارات القديمة هنالك لاحقة PECL يمكن استخدامها.

إقرأ المزيد عن التخزين المؤقت للشيفرة البرمجية opcode caches:

* [Zend OPcache][opcache-book] (مدمجة في PHP منذ الإصدارة 5.5)
* Zend OPcache (رسمياً بالإسم Zend Optimizer+) صارت الآن [مفتوحة المصدر][Zend Optimizer+]
* [APC] - PHP 5.4 والإصدارات الأقدم
* [XCache]
* [WinCache] (لاحقة للإستخدام في MS Windows Server)
* [قائمة بكل مسرعات PHP على ويكيبيديا][PHP_accelerators]


[opcache-book]: http://php.net/book.opcache
[APC]: http://php.net/book.apc
[XCache]: http://xcache.lighttpd.net/
[Zend Optimizer+]: https://github.com/zendtech/ZendOptimizerPlus
[WinCache]: http://www.iis.net/download/wincacheforphp
[PHP_accelerators]: http://en.wikipedia.org/wiki/List_of_PHP_accelerators
