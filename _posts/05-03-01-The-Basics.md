---
isChild: true
---

## The Basics

In this paragraph you will get familiar with a few of the most common beginner mistakes.


### Using correct number of =

The most common mistake is not to distinguish three different ``=`` operators:


1. ``=`` which means assignment,
2. ``==`` which means comparison **without** type checking (equality),
3. ``===`` which means comparison **with** type checking (identicality)

Comparison operators are used always when you want to make sure that two variables or values are equal, for example:

{% highlight php %}
if ($user->isAuthorized() === true) {
{% endhighlight %}
But you can also use assignment operators within condition blocks:

{% highlight php %}
if ( ($myObject = Cache::read('my-cache-key')) === false ) {
{% endhighlight %}
Notice: first, the assignment is made, which is exactly what we want, and then it is evaluated against ``boolean false``.

Not understanding comparison operators may result in logic errors. One of the most common happens when using ``strpos``.

{% highlight php %}
$str = strpos('http://phptherightway.com', 'http://');
{% endhighlight %}

Notice: ``$str`` will become ``integer`` 0 as ``'http://'`` is found right at the beginning.
Keep in mind that when no occurences is found, ``strpos`` will return ``boolean false``.

So following code will cast ``integer`` 0, to ``boolean`` false:

{% highlight php %}
if ($str) { 
{% endhighlight %}

Which is clearly a logic error, because the ``http://`` substring was found.

That's where `comparison operator with type checking` comes in:

{% highlight php %}
if ($str !== false) {
{% endhighlight %}

No type casting will occur, and that's why your logic is fine.

### Unneded if/else and ternary

Beginners very often tend to write following code:

{% highlight php %}
if($user->isAuthorized()) { 
	return true; 
} else { 
	return false;
}
{% endhighlight %}

Notice that isAuthorized() is actually a ``boolean``, so you can write:

{% highlight php %}
return $user->isAuthorized();
{% endhighlight %}

Another very common example would be:

{% highlight php %}
if ($user->isAuthorized()) { 
	echo 'User authorized'; 
} else { 
	echo 'Authorization error.'; 
}
{% endhighlight %}

Here you can simply use ternary operator:

{% highlight php %}
echo $user->isAuthorized() ? 'User authorized' : 'Authorization error.';
{% endhighlight %}

As you can see above, ternary operator is just a more compact form of an ``if`` block.

Keep in mind, that when you need to use nested ``if`` blocks, it is not recommended to use ternary operator, 
as it may result in unreadable and error prone code:

{% highlight php %}
echo (true?'true':false?'t':'f');
{% endhighlight %}

### Short tags

Since PHP 5.4 , short tags are always safe to use. Regardless :

``short_open_tag = Off``

Short tags are especially convenient to use in your presentation layer and that's where you should incorporate them.
 
_When using PHP &lt; 5.4, be aware that if short tags are supported or not, depends on your php.ini settings._ 
  
So, enjoy writing:

{% highlight php %}
<?= 'Hello ', $user->getLogin() ?>
{% endhighlight %}

Instead of:

{% highlight php %}
<?php echo 'Hello ', $user->getLogin() ?>``
{% endhighlight %}