---
title: Einfache PHP-Templates
isChild: true
anchor:  plain_php_templates
---

## Einfache PHP-Templates {#plain_php_templates_title}

Einfache PHP-Templates sind Vorlagen, die nativen PHP-Code verwenden. 
Sie bieten sich an, da PHP selbst eine Template Sprache ist. Das bedeutet, dass Du PHP-Code in anderen Code, 
beispielsweise HTML, integrieren kannst. Dies ist für PHP-Entwickler von Vorteil, 
da sie keine neue Syntax erlernen müssen, die ihnen zur Verfügung stehenden Funktionen kennen
und ihre Code-Editoren bereits über integrierte PHP-Syntaxhervorhebung und Autovervollständigung verfügen. 
Außerdem sind einfache PHP-Templates in der Regel sehr schnell, da keine Kompilierungsphase erforderlich ist.

Jedes moderne PHP-Framework verwendet ein Template-System, wobei die meisten standardmäßig reines PHP verwenden. 
Außerhalb von Frameworks erleichtern Bibliotheken wie [Plates][plates] oder [Aura.View][aura] die Arbeit
mit reinen PHP-Templates, indem sie moderne Template-Funktionen wie Vererbung, Layouts und Erweiterungen bieten.

### Einfaches Beispiel eines einfachen PHP-Templates
unter Verwendung der [Plates][plates] library:

{% highlight php %}
<?php // user_profile.php ?>

<?php $this->insert('header', ['title' => 'User Profile']) ?>

<h1>User Profile</h1>
<p>Hello, <?=$this->escape($name)?></p>

<?php $this->insert('footer') ?>
{% endhighlight %}

### Beispiel für einfaches PHP-Template mit Vererbung
unter Verwendung der [Plates][plates] library:

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

<?php $this->layout('template', ['title' => 'User Profile']) ?>

<h1>User Profile</h1>
<p>Hello, <?=$this->escape($name)?></p>
{% endhighlight %}


[plates]: https://platesphp.com/
[aura]: https://github.com/auraphp/Aura.View
