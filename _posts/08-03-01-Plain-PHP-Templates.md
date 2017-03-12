---
title: 단순 PHP 템플릿
isChild: true
anchor:  plain_php_templates
---

## 단순 PHP 템플릿 {#plain_php_templates_title}

단순 PHP 템플릿은 순수한 PHP 코드를 사용한 간단한 템플릿입니다. 이는 PHP가 템플릿 언어 그 자체로 사용되기 시작한 이래로
자연스럽게 선택된 방법입니다. 간단히 말해 PHP 코드를 HTML과 같은 다른언어와 결합해 사용할 수 있다는 것 입니다. PHP개발자가
다른 새로운 문법을 배울 필요가 없기 때문에 도움이 됩니다. 그들은 자신이 쓸 수 있는 기능에 대해 알고있으며, 개발 툴에는 이미
PHP 구문 강조와 자동완성이 내장되어 있습니다. 더구나, 단순 PHP 템플릿은 컴파일 단계를 필요로 하지 않아서 매우 빠른 경향이
있습니다.

모든 현대의 PHP 프레임워크는 몇종류의 템플릿 시스템을 채택하고 있으며, 대부분 기본적으로 단순 PHP를 사용합니다. 프레임워크
외에, [Plates][plates]나 [Aura.View][aura]와 같은 라이브러리들은 상속, 레이아웃, 확장과 같이 현대적인 템플릿의 기능을
제공하여 단순 PHP 템플릿과 함께 작동되게 합니다.

### 단순 PHP 템플릿의 간단한 예제

[Plates][plates] 라이브러리를 이용했습니다.

{% highlight php %}
<?php // user_profile.php ?>

<?php $this->insert('header', ['title' => 'User Profile']) ?>

<h1>User Profile</h1>
<p>Hello, <?=$this->escape($name)?></p>

<?php $this->insert('footer') ?>
{% endhighlight %}

### 상속을 이용한 단순 PHP 템플릿 예제

[Plates][plates] 라이브러리를 이용했습니다.

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
