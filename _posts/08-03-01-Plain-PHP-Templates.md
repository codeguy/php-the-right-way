---
title: نماذج PHP العادية
isChild: true
anchor:  plain_php_templates
---

## نماذج PHP العادية {#plain_php_templates_title}

نماذج PHP العادية هي ببساطة عبارة عن النماذج التي تستخدم مصدر PHP لكتابة محتواها. هنالك العديد من الخيارات بما أن PHP
هي عبارة عن لغة نمذجة في نفسها. فها يعني ببساطة أنه يمكن دمج مصدر PHP مع مصادر أخرى مثل توسيم HTML.
هذا مفيد لمطوري PHP فهو لا يضيف إليهم جمل جديدة للتعلم، ويعلمون الدوال المتوفرة لديهم ومحرر النصوص يحتوي على تخطيط PHP
والإكمال التلقائي مدمج معه.
تصنف نماذج PHP العادية بأنها سريعة فهي لا تتطلب أي عملية تجميع وبناء.

كل أطر العمل الحديثة تقوم بتوظيف شكل من أشكال نظام النمذجة، فالبعض يستخدم نماذج PHP عادية.
بعيداً عن أطر العمل، هنالك مكتبات مثل [Plates][plates] أو [Aura.View][aura] تقوم بالعمل على نماذج PHP العادية بطريقة
أسهل بتوفير وظائف نمذجة متطورة مثل التوريث والقوالب والإضافات.

### مثال بسيط لنماذج PHP عادية

باستخدام مكتبة [Plates][plates].

{% highlight php %}
<?php // user_profile.php ?>

<?php $this->insert('header', ['title' => 'ملف المستخدم']) ?>

<h1>ملف المستخدم</h1>
<p>مرحباً <?=$this->escape($name)?></p>

<?php $this->insert('footer') ?>
{% endhighlight %}

### مثال بسيط للتوريث في نماذج PHP عادية

باستخدام مكتبة [Plates][plates].

{% highlight php %}
<?php // template.php ?>

<html>
<head>
    <title><?=$title?></title>
</head>
<body>

<main>
    <?=$this->section('content')?>
</main>

</body>
</html>
{% endhighlight %}

{% highlight php %}
<?php // user_profile.php ?>

<?php $this->layout('template', ['title' => 'ملف المستخدم']) ?>

<h1>ملف المستخدم</h1>
<p>مرحباً <?=$this->escape($name)?></p>
{% endhighlight %}


[plates]: http://platesphp.com/
[aura]: https://github.com/auraphp/Aura.View
