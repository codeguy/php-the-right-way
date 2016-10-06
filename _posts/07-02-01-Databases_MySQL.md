---
title:   لاحقة MySQL
isChild: true
anchor:  mysql_extension
---

## لاحقة MySQL {#mysql_extension_title}

لاحقة [mysql] هي لاحقة مدمجة في PHP وقد باتت قديمة وتم الإستغناء عنها وإستبدالها بلاحقتين أخرتين:

- [mysqli]
- [pdo]

لم يتوقف التطوير على اللاحقة [mysql] منذ زمن بعيد فحسب، بل وقد تم [إهمالها منذ إصدارة PHP 5.5.0][mysql_deprecated]
ثم تم **إزالتها [حصرياً في أول إصدارة من PHP 7.0][mysql_removed]**

لمعرفة ما إذا كان تطبيق ما يعمل بهذه اللاحقة يمكنك البحث باستخدام محرر النصوص لديك عن دوال مثل `mysql_connect()` و
`mysql_query` فإذا ظهرت نتائج بحث إيجابية فهذا يعني أن هذه اللاحقة مستخدمة في التطبيق. وهذا عوضاً عن البحث في ملف 
`php.ini` للتحقق من وجود اللاحقة.

حتى وإن لم تكن تستخدم إصدارة PHP 7.0 بعد، عدم الإهتمام بالتحديث في أقرب فرصة يزيد صعوبة المهمة عندما تحدث الترقية.
أفضل حل هو استبدال إستخدام mysql بأي من [mysqli] أو [PDO] في تطبيقاتك كممارسة أساسية في عملية التطوير حتى لا تضطر
لتنفيذها على عجالة في وقت لاحق.

**إذا كنت تنوي الترقية من [mysql] إلى [mysqli]، هنالك موجهات سهلة تقترح عليك بأن تقوم بالبحث عن `mysql_*` واستبدالها بـ `mysqli_*`. هذا المقترح مفرط السهولة، ولكنه يفقد العديد من فوائد وخواص تقدمها mysqli مثل ربط القيم، وهي متوفرة أيضاً في [PDO][pdo].**

* [PHP: Choosing an API for MySQL][mysql_api]
* [PDO Tutorial for MySQL Developers][pdo4mysql_devs]

[mysql]: http://php.net/mysql
[mysql_deprecated]: http://php.net/migration55.deprecated
[mysql_removed]: http://php.net/manual/en/migration70.removed-exts-sapis.php
[mysqli]: http://php.net/mysqli
[pdo]: http://php.net/pdo
[mysql_api]: http://php.net/mysqlinfo.api.choosing
[pdo4mysql_devs]: http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers
