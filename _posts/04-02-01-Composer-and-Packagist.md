---
title:   Composer and Packagist
isChild: true
anchor:  composer_and_packagist
---

## Composer and Packagist {#composer_and_packagist_title}

Composer is the recommended dependency manager for PHP. List your project's dependencies in a `composer.json` file and,
with a few simple commands, Composer will automatically download your project's dependencies and setup autoloading for
you. Composer is analogous to NPM in the node.js world, or Bundler in the Ruby world.

There is a plethora of PHP libraries that are compatible with Composer and ready to be used in your project. These
"packages" are listed on [Packagist], the official repository for Composer-compatible PHP libraries.

### How to Install Composer

The safest way to download composer is by [following the official instructions](https://getcomposer.org/download/).
This will verify the installer is not corrupt or tampered with.
The installer installs a `composer.phar` binary in your _current working directory_.

We recommend installing Composer *globally* (e.g. a single copy in `/usr/local/bin`). To do so, run this command next:

{% highlight console %}
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

**Note:** If the above fails due to permissions, prefix with `sudo`.

To run a locally installed Composer you'd use `php composer.phar`, globally it's simply `composer`.

#### Installing on Windows

For Windows users the easiest way to get up and running is to use the [ComposerSetup] installer, which
performs a global install and sets up your `$PATH` so that you can just call `composer` from any
directory in your command line.

### How to Define and Install Dependencies

Composer keeps track of your project's dependencies in a file called `composer.json`. You can manage it
by hand if you like, or use Composer itself. The `composer require` command adds a project dependency
and if you don't have a `composer.json` file, one will be created. Here's an example that adds [Twig]
as a dependency of your project.

{% highlight console %}
composer require twig/twig:^2.0
{% endhighlight %}

Alternatively, the `composer init` command will guide you through creating a full `composer.json` file
for your project. Either way, once you've created your `composer.json` file you can tell Composer to
download and install your dependencies into the `vendor/` directory. This also applies to projects
you've downloaded that already provide a `composer.json` file:

{% highlight console %}
composer install
{% endhighlight %}

Next, add this line to your application's primary PHP file; this will tell PHP to use Composer's
autoloader for your project dependencies.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Now you can use your project dependencies, and they'll be autoloaded on demand.

### Updating your dependencies

Composer creates a file called `composer.lock` which stores the exact version of each package it
downloaded when you first ran `composer install`. If you share your project with others,
ensure the `composer.lock` file is included, so that when they run `composer install` they'll
get the same versions as you.  To update your dependencies, run `composer update`. Don't use
`composer update` when deploying, only `composer install`, otherwise you may end up with different
package versions on production.

This is most useful when you define your version requirements flexibly. For instance, a version
requirement of `~1.8` means "anything newer than `1.8.0`, but less than `2.0.x-dev`". You can also use
the `*` wildcard as in `1.8.*`. Now Composer's `composer update` command will upgrade all your
dependencies to the newest version that fits the restrictions you define.

### Update Notifications

To receive notifications about new version releases you can sign up for [libraries.io], a web service
that can monitor dependencies and send you alerts on updates.

### Checking your dependencies for security issues

The [Local PHP Security Checker] is a command-line tool, which will examine your `composer.lock`
file and tell you if you need to update any of your dependencies.

### Handling global dependencies with Composer

Composer can also handle global dependencies and their binaries. Usage is straight-forward, all you need
to do is prefix your command with `global`. If for example you wanted to install PHPUnit and have it
available globally, you'd run the following command:

{% highlight console %}
composer global require phpunit/phpunit
{% endhighlight %}

This will create a `~/.composer` folder where your global dependencies reside. To have the installed
packages' binaries available everywhere, you'd then add the `~/.composer/vendor/bin` folder to your
`$PATH` variable.

* [Learn about Composer]

[Packagist]: https://packagist.org/
[Twig]: https://twig.symfony.com/
[libraries.io]: https://libraries.io/
[Local PHP Security Checker]: https://github.com/fabpot/local-php-security-checker
[Learn about Composer]: https://getcomposer.org/doc/00-intro.md
[ComposerSetup]: https://getcomposer.org/Composer-Setup.exe
