---
title:   طبقات التجريد
isChild: true
anchor:  databases_abstraction_layers
---

## طبقات التجريد {#databases_abstraction_layers_title}

العديد من أطر العمل Framework لديها طبقات التجريد الخاصة بها مما قد يجعلها أو لا يجعلها تكون فوق طبقة [PDO][1].
غالباً ما يتم محاكاة خواص لنظام قاعدة بيانات مفقودة في الأخرى عن طريق ربط الإستغلامات في دوال PHP وتعطيك نفس التجريد
لقاعدة البيانات عوضاً عن مجرد إتصال تجريدي كما تفعل PDO. بالطبع سوف تقوم هذه الممارسة القليل من الجهد ولكن اذا كنت
تنوي بناء نظام متنقل يمكنه العمل على كل من MySQL و PostgreSQL و SQLite عندها القليل من الجهد يستحق التعب وكتابة بضع
السطور البرمجية.

بعض طبقات التجريد تم بنائها باستخدام التوصية [PSR-0][psr0] أو [PSR-4][psr4] بأسماء فضاء قياسية حتى تتمكن من
تنصيب أي تطبيق تريد مثل:

* [Aura SQL][6]
* [Doctrine2 DBAL][2]
* [Propel][7]
* [Zend-db][4]


[1]: http://php.net/book.pdo
[2]: http://www.doctrine-project.org/projects/dbal.html
[4]: https://packages.zendframework.com/docs/latest/manual/en/index.html#zendframework/zend-db
[6]: https://github.com/auraphp/Aura.Sql
[7]: http://propelorm.org/
[psr0]: http://www.php-fig.org/psr/psr-0/
[psr4]: http://www.php-fig.org/psr/psr-4/
