---
isChild: true
anchor:  compiled_templates
title: 编译模板
---

## 编译模板 {#compiled_templates_title}

尽管 PHP 不断升级为成熟的、面向对象的语言，但它作为模板语言 [没有改善多少][article_templating_engines]。编译模板，比如 [Twig] [Brainy] 或 [Smarty]* ，提供了模板专用的新语法，填补了这片空白。从自动转义到继承以及简化控制结构，编译模板设计地更容易编写，可读性更高，同时使用上也更加的安全。编译模板甚至可以在不同的语言中使用，[Mustache] 就是一个很好的例子。由于这些模板需要编译，在性能上会带来一些轻微的影响，不过如果适当的使用缓存，影响就变得非常小了。

**虽然 Smarty 提供了自动转义的功能, 不过这个功能默认是关闭的*

### 编译模板简单示例

使用 [Twig] 类库。

{% highlight html+jinja %}
{% raw %}
{% include 'header.html' with {'title': 'User Profile'} %}

<h1>User Profile</h1>
<p>Hello, {{ name }}</p>

{% include 'footer.html' %}
{% endraw %}
{% endhighlight %}

### 编译模板使用继承示例

使用 [Twig] 类库。

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

{% block title %}User Profile{% endblock %}
{% block content %}
    <h1>User Profile</h1>
    <p>Hello, {{ name }}</p>
{% endblock %}
{% endraw %}
{% endhighlight %}


[article_templating_engines]: http://fabien.potencier.org/article/34/templating-engines-in-php
[Twig]: http://twig.sensiolabs.org/
[Brainy]: https://github.com/box/brainy
[Smarty]: http://www.smarty.net/
[Mustache]: http://mustache.github.io/
