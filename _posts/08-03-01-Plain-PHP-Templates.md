---
title: Plain PHP Templates
isChild: true
anchor:  plain_php_templates
---

## Plain PHP Templates {#plain_php_templates_title}

Plain PHP templates are simply templates that use native PHP code. They are a natural choice since PHP is actually a
template language itself. That simply means that you can combine PHP code within other code, like HTML. This is
beneficial to PHP developers as there is no new syntax to learn, they know the functions available to them, and their
code editors already have PHP syntax highlighting and auto-completion built-in. Further, plain PHP templates tend to be
very fast as no compiling stage is required.

Every modern PHP framework employs some kind of template system, most of which use plain PHP by default. Outside of
frameworks, libraries like [Plates][plates] or [Aura.View][aura] make working with plain PHP templates easier by
offering modern template functionality such as inheritance, layouts and extensions.

### Simple example of a plain PHP template

Using the [Plates][plates] library.

{% highlight php %}
<?php // user_profile.php ?>

<?php $this->insert('header', ['title' => 'User Profile']) ?>

<h1>User Profile</h1>
<p>Hello, <?=$this->escape($name)?></p>

<?php $this->insert('footer') ?>
{% endhighlight %}

### Example of plain PHP templates using inheritance

Using the [Plates][plates] library.

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
