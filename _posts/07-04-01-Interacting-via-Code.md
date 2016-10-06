---
title:   التفاعل مع قواعد البيانات
isChild: true
anchor:  databases_interacting
---

## التفاعل مع قواعد البيانات {#databases_interacting_title}

عندما يبدأ المطورين بتعلم PHP للمرة الأولى، عادة ما يقومون بدمج عمليات قواعد البيانات مع الطرح المنطقي، بكتابة مصدر كهذا:

{% highlight php %}
<ul>
<?php
foreach ($db->query('SELECT * FROM table') as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>";
}
?>
</ul>
{% endhighlight %}

هذه ممارسة سيئة من كل النواحي، فهي صعبة الفحص وتصحيح الأخطاء، وصعبة التجربة، وصعبة القراءة وستقوم أيضاً بإخراج العديد
من الحقول التي لم تقم بعمل حد لها.

هنالك العديد من الحلول - سواء كنت تفضل استخدام البرمجة الشيئية [OOP](#object-oriented-programming) أو البرمجة الوظيفية [Functional Programming](#functional-programming)-
ما يزال يتوجب عليك أن تقوم بالفصل.

مثال لطريقة بدائية:

{% highlight php %}
<?php
function getAllFoos($db) {
    return $db->query('SELECT * FROM table');
}

foreach (getAllFoos($db) as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>"; // خطأ!!
}
{% endhighlight %}

هذه بداية جيدة. قم بوضع كل منهما في ملفين مختلفيين عندها تحصل على عملية فصل نظيفة.

قم بإنشاء كلاس عوضاً عن تلك الطريقة عندها سيكون ليدك نموذج "Model". قم بإنشاء ملف بسيط `.php` ثم ضع فيه محتوى العرض المنطقي
عندها سيكون لديك العرض "View"، ستلاحظ أنه قريب من نموذج [MVC] - طريقة معتادة في معمارية البرمجة الشيئية لأغلبية أطر العمل
[frameworks](/#frameworks).

**foo.php**

{% highlight php %}
<?php
$db = new PDO('mysql:host=localhost;dbname=testdb;charset=utf8', 'username', 'password');

// قم بإدراج النموذج Model
include 'models/FooModel.php';

// قم بإنشاء كائن
$fooModel = new FooModel($db);
// إستخرج قائمة من Foos
$fooList = $fooModel->getAllFoos();

// قم بإدراج العرض View
include 'views/foo-list.php';
{% endhighlight %}


**models/FooModel.php**

{% highlight php %}
<?php
class FooModel
{
    protected $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    public function getAllFoos() {
        return $this->db->query('SELECT * FROM table');
    }
}
{% endhighlight %}

**views/foo-list.php**

{% highlight php %}
<?php foreach ($fooList as $row): ?>
    <?= $row['field1'] ?> - <?= $row['field1'] ?>
<?php endforeach ?>
{% endhighlight %}

هذا التطبيق هو مماثل جداً لمعظم ما تقوم به أطر العمل الحديثة، ولو تشببها قليلأ.
قد لا تحتاج أن تقوم بهذه الممارسة في كل مرة، ولكن خلط العرض المنطقي والنموذج التفاعلي لقاعدة البيانات من شأنه أن يكوِن
مشكلة حقيقية إذا ما أردت أن تقوم بعمل إختبار وحدات [unit-test](#unit-testing) لتطبيقك.

هنالك مصدر في موقع [PHPBridge] يسمى إنشاء كلاس بيانات [Creating a Data Class] يقوم بتغطية جميع المواضيع المشابهة،
من الجيد للمطورين بأن يتعودوا على مفهوم التفاعل مع قواعد البيانات.


[MVC]: http://code.tutsplus.com/tutorials/mvc-for-noobs--net-10488
[PHPBridge]: http://phpbridge.org/
[Creating a Data Class]: http://phpbridge.org/intro-to-php/creating_a_data_class
