---
isChild: true
anchor:  linux_setup
---

## Linux/Unix Setup {#linux_setup_title}

PHP Installation on Linux or any other Unix based operating system depends mostly on the distribution you're using. There
are many Linux distributions available but mostly you get PHP installed by using your installation package manager.

### Debian based distributions

Debian based Linux distributions include Debian, Ubuntu. Debian based distributions use apt package manager for installing
packages.

{% highlight console %}
> apt-get install php5
{% endhighlight %}

### Fedora based distributions

These include distributions like Fedora, CentOS, RedHat and others. Fedora based distributions use yum package manager for
installing packages.

{% highlight console %}
> yum install php5
{% endhighlight %}

Besides the all-in-one packages such as [XAMPP] and [AMPPS] you can also install LAMP server with Apache, MySQL and PHP by checking
`lamp-server` package for your distribution. In many cases PHP version in packages on Linux distributions is few versions behind
the latest stable source on PHP.net downloads. Instead of compiling and building PHP from source you can use many 3rd party alternate
package repositories such as [dotdeb] for Debian, [Ondřej Surý's repository] for Ubuntu and [REMI repository] for Fedora based
distributions.

For compiling from source check the [PHP manual] for common Unix based operating system installation instructions.


[XAMPP]: http://www.apachefriends.org/en/xampp.html
[AMPPS]: http://www.ampps.com/
[dotdeb]: https://www.dotdeb.org/
[Ondřej Surý's repository]: https://launchpad.net/~ondrej
[REMI repository]: http://blog.famillecollet.com/
[PHP manual]: http://php.net/manual/en/install.unix.php