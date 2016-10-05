---
title: المفهوم الأساسي
isChild: true
anchor:  basic_concept
---

## المفهوم الأساسي {#basic_concept_title}

يمكن شرح هذا المفهوم باستخدام مثال سهل ومبسط.

لدينا كلاس `Database` يعتمد على محول للتخاطب مع قاعدة البيانات. نقوم بانشاء المحول في دالة الإنشاء ثم نقوم بعمل حقن ثابت.
هذا يجعل عملية التجربة والإختبار عملية صعبة وتعني ان الكلاس `Database` مرتبط بشدة مع المحول.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct()
    {
        $this->adapter = new MySqlAdapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

يمكن إعادة صياغة هذا المصدر لاستخدام حقن التوابع وفك الإرتباط من التوابع

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct(MySqlAdapter $adapter)
    {
        $this->adapter = $adapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

الآن يمكننا ان نعطي كلاس `Database` توابعه عن طريق انشائها بنفسه. ويمكن أيضاً انشاء دالة تستقبل التابع كقيمة ثم اسنادها مباشرة
أو اذا كان المحول `$adapter` في وصف عام `public property` عندها يمكن إسناده مباشرةً.
