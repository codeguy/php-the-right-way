---
title: الإستثناءات
isChild: true
anchor:  exceptions
---

## الإستثناءات {#exceptions_title}

الإستثناءات هي جزء أساسي من أغلب لغات البرمجة، ولكن يتم التغاضي عنها من قبل مبرمجي PHP.
لغات مثل Ruby معتمدة بكثافة على الإستثناءات، لذلك كلما حدث شيء ما خاطئ كطلب HTTP غير ناجح أو استعلام على قاعدة بيانات
لم يتم بالشكل الصحيح، أو حتى صورة لم يتم ايجادها، تقوم Ruby (أو gem المستخدم) برمي إستثناء على الشاشة مما يعني أنه
هنالك خطأ ما.

لغة PHP نفسها تفتقر لهذا، وعند تنفيذ `file_get_contents()` تستخدم إرجاع `FALSE` و تحذير.

العديد من أطر عمل PHP القديمة مثل CodeIgniter سيقوم بإرجاع القيمة false وتدوين رسالة في سجل المتابعة وربما تتيح لك استخدام
دالة مثل `$this->upload->get_error()` لكي تعرف ماذا حدث. تكمن المشكلة هنا أنه يتوجب عليك الذهاب الى مستندات التوثيق ومعرفة
ما هي دالة إظهار الخطأ لهذا الكلاس، بدلا من جعلها ظاهرة بشكل أوضح.

مشكلة اخرى هي عندما يقوم كلاس برمي خطأ على الشاشة وإيقاف التنفيذ بشكل تلقائي. عندما تقوم بهذا فأنت تقوم بمنع المطور الآخر أن
يقوم بالتعامل مع هذا الخطأ بشكل حيوي تلقائي. الإستثناءت يجب ان ترمى لكي تجعل المطور على دراية بحدوث الخطأ، ثم بعدها يكون
لديه الحرية في طريقة التعامل معه. مثال:

{% highlight php %}
<?php
$email = new Fuel\Email;
$email->subject('العنوان');
$email->body('كيف حالك؟');
$email->to('guy@example.com', 'فلان الفلاني');

try
{
    $email->send();
}
catch(Fuel\Email\ValidationFailedException $e)
{
    // فشل في التحقق
}
catch(Fuel\Email\SendingFailedException $e)
{
    // فشل في إرسال البريد الإلكتروني
}
finally
{
    // يتم تنفيذه بغض النظر عن ما إذا تم رمي استثناء ، وقبل ان يواصل التنفيذ
}
{% endhighlight %}

### إستثناءات SPL

الكلاس العام `Exception` يتيح القليل من السياقات للتحقق للمبرمج. ولكن لعلاج هذا يمكن إنشاء `Exception` مخصصة من الكلاس
الأصلي:

{% highlight php %}
<?php
class ValidationException extends Exception {}
{% endhighlight %}

هذا يعني أنه يمكن إضافة عدة قطع للإمساك بالإستثناءات catch blocks للتعامل مع عدة إستثناءات بشكل مستقل. هذا يؤدي إلى
إنشاء <em>الكثير</em> من الإستثناءات الفرعية، يمكن الإبتعاد عن بعضها باستخدام إستثناءات SPL متوفرة في [SPL extension][splext].

فمثلا عندما تستخدم الدالة السحرية `__call()` وتم طلب دالة غير صالحة فبدلاً من رمي إستثناء عادي أو إنشاء استثناء خاص بك يمكنك رمي:
`throw new BadMethodCallException;`.

* [قراءة المزيد عن Exceptions][exceptions]
* [قراءة المزيد عن SPL Exceptions][splexe]
* [الإستثناءات المتداخلة Nesting Exceptions In PHP][nesting-exceptions-in-php]
* [أفضل المماراست في الإستثناءات Exception Best Practices in PHP 5.3][exception-best-practices53]


[splext]: /#standard_php_library
[exceptions]: http://php.net/language.exceptions
[splexe]: http://php.net/spl.exceptions
[nesting-exceptions-in-php]: http://www.brandonsavage.net/exceptional-php-nesting-exceptions-in-php/
[exception-best-practices53]: http://ralphschindler.com/2010/09/15/exception-best-practices-in-php-5-3
