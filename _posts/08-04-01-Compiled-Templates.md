---
title:   Kompilierte Templates
isChild: true
anchor:  compiled_templates
---

## Kompilierte Templates {#compiled_templates_title}

Obwohl sich PHP zu einer ausgereiften, objektorientierten Sprache entwickelte,
hat es sich als Template-Sprache [kaum verbessert][article_templating_engines]. 
Kompilierte Templates wie  [Twig], [Brainy], or [Smarty]* füllen diese Lücke mit einer neuen,
speziell auf Template-Entwicklung ausgerichteten Syntax. 
Von automatischem Escapen, über Vererbung bis hin zu vereinfachten Kontrollstrukturen sind kompilierte Templates einfacher zu schreiben, übersichtlicher zu lesen und sicherer in der Anwendung.
Kompilierte Templates können sogar sprachübergreifend genutzt werden, wofür  [Mustache] ein gutes Beispiel ist.
Da diese Templates kompiliert werden müssen, kommt es zu leichten Performance-Einbußen, die jedoch bei korrektem Caching minimal sind.

**Smarty bietet zwar automatisches Escapen, diese Funktion ist jedoch standardmäßig NICHT aktiviert.*

### Einfaches Beispiel eines kompilierten Templates

unter Verwendung der [Twig] library.

{% highlight html+jinja %}
{% raw %}
{% include 'header.html' with {'title': 'User Profile'} %}

<h1>User Profile</h1>
<p>Hello, {{ name }}</p>

{% include 'footer.html' %}
{% endraw %}
{% endhighlight %}


### Beispiel eines kompilierten Templates mit Vererbung

unter Verwendung der [Twig] library.

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


[article_templating_engines]: http://fabien.potencier.org/templating-engines-in-php.html
[Twig]: https://twig.symfony.com/
[Brainy]: https://github.com/box/brainy
[Smarty]: https://www.smarty.net/
[Mustache]: https://mustache.github.io/
