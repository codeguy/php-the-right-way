---
isChild: true
title: 原生 PHP 模板
anchor:  plain_php_templates
---

## 原生 PHP 模板 {#plain_php_templates_title}

原生 PHP 模板就是指直接用 PHP 来写模板，这是很自然的选择，因为 PHP 本身其实是个模板语言。这代表你可以在其他的语言中结合 PHP 使用，比如 HTML 。这对 PHP 开发者相当有利，因为不需要额外学习新的语法，他们熟知可以使用的函数，并且使用的编辑器也已经内置了语法高亮和自动补全。此外，原生的 PHP 模板没有了编译阶段，速度会更快。

现今的 PHP 框架都会使用一些模板系统，这当中多数是使用原生的 PHP 语法。在框架之外，一些类库比如 [Plates][plates] 或 [Aura.View][aura]，提供了现代化模板的常见功能，比如继承、布局、扩展，让原生的 PHP 模板更容易使用。


### 原生 PHP 模板的简单示例

使用 [Plates][plates] 类库。

{% highlight php %}
<?php // user_profile.php ?>

<?php $this->insert('header', ['title' => 'User Profile']) ?>

<h1>User Profile</h1>
<p>Hello, <?=$this->escape($name)?></p>

<?php $this->insert('footer') ?>
{% endhighlight %}

### 原生 PHP 模板使用继承的示例

使用 [Plates][plates] 类库。

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


[plates]: http://platesphp.com/
[aura]: https://github.com/auraphp/Aura.View
