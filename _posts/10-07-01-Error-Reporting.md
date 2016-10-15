---
title: تدوين وتقرير الأخطاء
isChild: true
anchor:  error_reporting
---

## تدوين وتقرير الأخطاء {#error_reporting_title}

يفيد تدوين الأخطاء في إيجاد المشكل في تطبيقك، ولكن يمكن أن تعرض معلومات حساسة عن هيكلة التطبيق للعالم الخارجي.
لحماية تطبيقك بكفاءة عالية من المشاكل التي قد تحدث من مخرجات هذه الرسائل يجب أن يتم ضبط المخدم بطريقة مختلفة في بيئة
العمل النهائية عما هو عليه في بيئة التطوير.

### بيئة التطوير

لإظهار أي خطأ يحدث أثناء **التطوير**، قم بضبط الخيارات في `php.ini` كالاتي:

{% highlight ini %}
display_errors = On
display_startup_errors = On
error_reporting = -1
log_errors = On
{% endhighlight %}

> إسناد القيمة `-1` يقوم بتفعيل ظهور أي خطأ محتمل وأي مستويات يتم إضافتها في المستقبل على إصدارات PHP مستقبلية.
> الثابت `E_ALL` سيقوم أيضاً بنفس الشيء ابتداءً من إسدارة PHP 5.4
> [php.net](http://php.net/function.error-reporting)

مستوى تقرير الخطأ في الثابت `E_STRICT` قد تم إدراجه في الإصدارة 5.3.0 وهو خيار منفصل من المستوى `E_ALL` ولكن صار
جزءً من `E_ALL` في الإصدار 5.4.0. ما معنى هذا؟
هذا يعني أنه إذا كنت تريد تقرير كل الأخطاء في الإصدار 5.3 سيتوجب عليك أن تستخدم `-1` أو `E_ALL | E_STRICT`.

**تقرير كل الأخطاء المحتملة بناء على إصدارات PHP**

* &lt; 5.3 `-1` or `E_ALL`
* &nbsp; 5.3 `-1` or `E_ALL | E_STRICT`
* &gt; 5.3 `-1` or `E_ALL`

### بيئة العمل النهائي

لإخفاء الأخطاء في **بيئة العمل النهائية** قم بضبط الخيارات في `php.ini` كالآتي:

{% highlight ini %}
display_errors = Off
display_startup_errors = Off
error_reporting = E_ALL
log_errors = On
{% endhighlight %}

بخيارات الضبط هذه في بيئة العلم النهائية، سيتم تدوين الأخطاء في سجل الأخطاء في المخدم ولكن لن يظهر أي منها للتمسخدم.
للمزيد من المعلومات عن هذه الخيارات، قم بالإطلاع عليها في دليل PHP:

* [error_reporting](http://php.net/errorfunc.configuration#ini.error-reporting)
* [display_errors](http://php.net/errorfunc.configuration#ini.display-errors)
* [display_startup_errors](http://php.net/errorfunc.configuration#ini.display-startup-errors)
* [log_errors](http://php.net/errorfunc.configuration#ini.log-errors)
