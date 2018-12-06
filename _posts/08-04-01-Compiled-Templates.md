---
title:   컴파일되는 템플릿
isChild: true
anchor:  compiled_templates
---

## 컴파일되는 템플릿 {#compiled_templates_title}

PHP는 성숙한, 객체 지향적 언어로 성장하고 있지만, [템플릿 언어로는 성장하지 않았습니다.][article_templating_engines]
[Twig]나 [Smarty]*와 같이 컴파일된 템플릿은 특히, 템플릿을 대상으로 제공되는 새로운 구문으로 기존의 부족했던 부분을
채워줬습니다. 자동 이스케이핑, 상속, 그리고 단순화 된 제어구조는 컴파일된 템플릿을 쉽게 쓸 수 있고, 읽기 쉽고,
사용하기 안전하게 설계되었습니다. 심지어 컴파일된 템플릿은 다른언어와 교환을 할 수 있습니다. [Mustache]가 좋은 예
입니다. 이러한 템플릿은 컴파일을 해야하기 때문에 약간의 성능저하가 있을 수 있지만, 적절한 캐싱을 사용하면 아주 미미한
차이 일 것입니다.

**Smarty는 자동 이스케이핑을 지원하지만, 이 기능은 기본적으로 비활성화 되어있습니다.*

### 컴파일 된 템플릿에 대한 간단한 예제

[Twig] 라이브러리를 사용하였습니다.

{% highlight html+jinja %}
{% raw %}
{% include 'header.html' with {'title': 'User Profile'} %}

<h1>User Profile</h1>
<p>Hello, {{ name }}</p>

{% include 'footer.html' %}
{% endraw %}
{% endhighlight %}

### 상속을 이용한 컴파일된 템플릿 예제

[Twig] 라이브러리를 사용하였습니다.

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
[Twig]: https://twig.symfony.com/
[Brainy]: https://github.com/box/brainy
[Smarty]: https://www.smarty.net/
[Mustache]: https://mustache.github.io/
