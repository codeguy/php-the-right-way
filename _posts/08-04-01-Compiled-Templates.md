---
title: نماذج التجميع Compiled Templates
isChild: true
anchor:  compiled_templates
---

## نماذج التجميع Compiled Templates {#compiled_templates_title}

بالرغم أن PHP تطورت بطبيعتها لتكون لغة برمجة شيئية، ولكنها [لم تتطور بكونها لغة نمذجة][article_templating_engines].
نماذج التجميع مثل [Twig] و [Brainy] و [Smarty]* تملأ هذا الفراغ بتوفير صيغ كتابة جديدة تمتلك المواصفات الحقيقة ككونها
نماذج. ابتداءً من الترشيح التلقائي حتى التوريث وتبسيط التحكم في الهياكل فنماذج التجميع قد صممت لكي تكون سهلة الكتابة والقراءة
وآمنة للإستخدام. نماذج التجميع يمكن أن تنتشر وتستخدم عبر لغات مختلفة [Mustache] هو مثال جيد لهذا. بما أن هذه النماذج تستوجب
عملية التجميع هنالك فرق في الأداء ولكنه فرق بسيط إذا تم إستخدام تخزين مؤقت بطريقة جيدة (caching).

**بالرغم أن Smarty يوفر ترشيح تلقائي ولكنه غير مفعل بشكل إفتراضي.*

### مثال بسيط لنموذج تجميعي

باستخدام مكتبة [Twig].

{% highlight html+jinja %}
{% raw %}
{% include 'header.html' with {'title': 'ملف المستخدم'} %}

<h1>ملف المستخدم</h1>
<p>مرحباً {{ name }}</p>

{% include 'footer.html' %}
{% endraw %}
{% endhighlight %}

### مثال بسيط للتوريث في نموذج تجميعي

باستخدام مكتبة [Twig].

{% highlight html+jinja %}
{% raw %}
// template.html

<html>
<head>
    <title>{% block title %}{% endblock %}</title>
</head>
<body>

<main>
    {% block content %}{% endblock %}
</main>

</body>
</html>
{% endraw %}
{% endhighlight %}

{% highlight html+jinja %}
{% raw %}
// user_profile.html

{% extends "template.html" %}

{% block title %}ملف المستخدم{% endblock %}
{% block content %}
    <h1>ملف المستخدم</h1>
    <p>مرحباً {{ name }}</p>
{% endblock %}
{% endraw %}
{% endhighlight %}


[article_templating_engines]: http://fabien.potencier.org/article/34/templating-engines-in-php
[Twig]: http://twig.sensiolabs.org/
[Brainy]: https://github.com/box/brainy
[Smarty]: http://www.smarty.net/
[Mustache]: http://mustache.github.io/
