---
isChild: true
anchor:  compiled_templates
---

## Compiled Templates {#compiled_templates_title}

While PHP has evolved into a mature, object oriented language, it [hasn't improved much][article_templating_engines] as
a templating language. Compiled templates, like [Twig], [Brainy], or [Smarty]*, fill this void by offering a new syntax that has
been geared specifically to templating. From automatic escaping, to inheritance and simplified control structures,
compiled templates are designed to be easier to write, cleaner to read and safer to use. Compiled templates can even be
shared across different languages, [Mustache] being a good example of this. Since these templates must be compiled
there is a slight performance hit, however this is very minimal when proper caching is used.

**While Smarty offers automatic escaping, this feature is NOT enabled by default.*

### Simple example of a compiled template

Using the [Twig] library.

{% highlight html+jinja %}
{% raw %}
{% include 'header.html' with {'title': 'User Profile'} %}

<h1>User Profile</h1>
<p>Hello, {{ name }}</p>

{% include 'footer.html' %}
{% endraw %}
{% endhighlight %}

### Example of compiled templates using inheritance

Using the [Twig] library.

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
