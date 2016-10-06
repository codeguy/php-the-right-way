---
title:   لاحقة PDO
isChild: true
anchor:  pdo_extension
---

## لاحقة PDO {#pdo_extension_title}

تعتبر [PDO] هي مكتبة مجردة للإتصال بقاعدة البيانات &mdash; تم بنائها في PHP منذ الإصدارة 5.1.0 &mdash; بحيث توفر واجهات
إتصال عادية للعديد من قواعد البيانات المختلفة. مثلا يمكن إستخدام نفس الكود المصدري للإتصال والعمل بقاعدة بيانات MySQL أو SQLite:

{% highlight php %}
<?php
// PDO + MySQL
$pdo = new PDO('mysql:host=example.com;dbname=database', 'user', 'password');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);

// PDO + SQLite
$pdo = new PDO('sqlite:/path/db/foo.sqlite');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);
{% endhighlight %}

لا تقوم PDO بترجمة أو تحويل الإستعلامات SQL Queries أو مماثلة الخصائص المفقودة، ولكنها بالفعل تتصل بأكثر من نوع من قواعد
البيانات بنفس الوجهة البرمجية API.

للأهمية: `PDO` تتيح بسهولة حقن مدخلات خارجية (كالمفاتح ID مثلا) في إستعلام SQL Query من دون القلق بشأن تهديدات SQL Injection.
وهذا ممكن باستخدام جمل PDO وتقييد وربط القيم PDO Statements.

فلنفترض أن في مصدر PHP يستقبل مفتاح رقمي ID وهو عبارة عن قيمة في إستعلام. هذا المفتاح يجب أن يستخدم لإستخراج بيانات مستخدم
من قاعدة البيانات. الطريقة التالية هي الطريقة `الخاطئة` للقيام بهذه العملية:

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- خطأ!
{% endhighlight %}

هذا مصدر خاطئ تماماً. فهو يقوم بإدخال قيم خام إلى إستعلام SQL. مما يسبب يعرضك للإختراق بسهولة باستخدام أسلوب حقن الإستعلام
[SQL Injection]. تصور أن مخترق قام بإرسال قيمة `ID` عن طريق تنفيذ عنوان مثل `http://domain.com/?id=1%3BDELETE+FROM+users`.
سوف يقوم بإسناد للمتغير `$_GET['id']` القيمة `1;DELETE FROM users` مما يتسبب بحذف جميع سجلات المستخدمين!
عوضاً عن ذلك يجب ان تقوم (بتعقيم) المفتاح ID المدخل باستخدام جمل التقييد في PDO.

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT); // <-- قم بترشيح بياناتك أولاً (أنظر [ترشيح البيانات](#data_filtering))، مهم جداً خصوصاً لعمليتي INSERT و UPDATE..
$stmt->bindParam(':id', $id, PDO::PARAM_INT); // <-- تلقائياً يتم تعقيم القيم باستخدام PDO
$stmt->execute();
{% endhighlight %}

وهذا مصدر صحيح. يتم استخدام تقييد القيم في جملة PDO. فبدورها تقوم تلقائياً بعقيم المدخل ID قبل أن تقوم بإدراجه لقاعدة
البيانات مما يمنع إحتمال هجمات SQL Injection.

عند كتابة عمليات مثل INSERT أو UPDATE ، يجب (للأهمية القصوى) ان تقوم [بترشيح البيانات](#data_filtering) أولاً ثم بتعقيمها من العناصر الأخرى مثل (حذف أوسم HTML و JavaScript وغيرها..). سيقوم PDO فقط بتعقيم المدخلات لإستخدامها في SQL وليس لكي تستخدمها أنت في تطبيقك.

* [تعرف على المزيد عن PDO]

يجب عليك ان تكون على دراية بأن إتصال قاعدة البيانات يقوم باستخدام مصادر وانه ليس من الغريب إستهلاك هذه المصادر بسبب
تلك الإتصالات التي لم تغلق، ولكن هذا شيء معتاد في الكثير من لغات البرمجة الأخرى. باستخدام PDO يمكنك إغلاق الإتصال فقط بحذف
الكائن وذلك للتأكد من ان كل الإرتباطات قد تم حذفها. مثلاً إسنادها للقيم الفارغة NULL. إذا لم تقم بهذا يدوياً فسوف تقوم PHP
تلقائياً بإغلاق هذه الإتصالات عندما يتم تنفيذ المصدر إلا إذا كنت تستخدم إتصالات مستمرة بالطبع.

* [تعرف على المزيد عن إتصالات PDO]


[pdo]: http://php.net/pdo
[SQL Injection]: http://wiki.hashphp.org/Validation
[Learn about PDO]: http://php.net/book.pdo
[Learn about PDO connections]: http://php.net/pdo.connections
