---
title:   단순 PHP 템플릿
isChild: true
anchor:  plain_php_templates
---

## 단순 PHP 템플릿 {#plain_php_templates_title}

Plain PHP 템플릿은 nativa PHP 코드를 사용한 간단한 템플릿입니다. Plain PHP 템플릿이 PHP를 자연적으로 사용한 이래로 PHP는 실제 템플릿 언어 그
자체입니다. 간단히 말해 PHP 코드를 HTML과 같은 다른언어와 결합해 사용할 수 있다는 것 입니다. PHP개발자가 다른 새로운 문법을 배울 필요가 없기 때문에
도움이 됩니다. 그들은 자신이 쓸 수 있는 기능에 대해 알고있으며, 개발 툴에는 이미 PHP 구문 강조와 자동완성이 내장되어 있습니다. 더구나, plain PHP
템플릿은 컴파일 단계를 필요로 하지 않아서 매우 빠른 경향이 있습니다.

모든 modern PHP 프레임워크는 몇종류의 템플릿 시스템을 채택하고 있으며, 대부분 기본적으로 plain PHP를 사용합니다. [Plates][plates] or
[Aura.View][aura] 처럼 프레임워크, 라이브러리들의 외부에서 제공되는 상속, 레이아웃, 확장과 같이 현대적인 템플릿의 기능이 제공되는 plain PHP
템플릿들을 이용하여 보다 쉽게 작업합니다.

### plain PHP 템플릿의 간단한 예제
[Plates][plates] 라이브러리를 이용했습니다.

{% highlight php %}
<?php // user_profile.php ?>

<?php $this->insert('header', ['title' => 'User Profile']) ?>

<h1>User Profile</h1>
<p>Hello, <?=$this->escape($name)?></p>

<?php $this->insert('footer') ?>
{% endhighlight %}

### 상속을 이용한 plain PHP 템플릿 예제
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
