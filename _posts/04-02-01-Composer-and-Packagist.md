---
isChild: true
---

## Composer and Packagist {#composer_and_packagist_title}

Composer is a **brilliant** dependency manager for PHP. List your project's dependencies in a `composer.json` file and, with a few simple commands, Composer will automatically download your project's dependencies and setup autoloading for you.

There are already a lot of PHP libraries that are compatible with Composer, ready to be used in your project. These "packages" are listed on [Packagist][1], the official repository for Composer-compatible PHP libraries.

### How to Install Composer

You can install Composer locally (in your current working directory; though this is no longer recommended) or globally (e.g. /usr/local/bin). Let's assume you want to install Composer locally. From your project's root directory:

    curl -s https://getcomposer.org/installer | php

This will download `composer.phar` (a PHP binary archive). You can run this with `php` to manage your project dependencies. <strong>Please Note:</strong> If you pipe downloaded code directly into an interpreter, please read the code online first to confirm it is safe.

### How to Install Composer (manually)

Manually installing Composer is an advanced technique; however, there are various reasons why a developer might prefer this method vs. using the interactive installation routine. The interactive installation checks your PHP installation to ensure that:

- a sufficient version of PHP is being used
- `.phar` files can be executed correctly
- certain directory permissions are sufficient
- certain problematic extensions are not loaded
- certain `php.ini` settings are set

Since a manual installation performs none of these checks, you have to decide whether the trade-off is worth it for you. As such, below is how to obtain Composer manually:

    curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
    chmod +x $HOME/local/bin/composer

The path `$HOME/local/bin` (or a directory of your choice) should be in your `$PATH` environment variable. This will result in a `composer` command being available.

When you come across documentation that states to run Composer as `php composer.phar install`, you can substitute that with:

    composer install

### How to Define and Install Dependencies

Composer keeps track of your project's dependencies in a file called `composer.json`. You can manage it by hand if you like, or use Composer itself. The `php composer.phar require` command adds a project dependency and if you don't have a `composer.json` file, one will be created. Here's an example that adds [Twig][2] as a dependency of your project. Run it in your project's root directory where you've downloaded `composer.phar`:

	php composer.phar require twig/twig:~1.8

Alternatively the `php composer.phar init` command will guide you through creating a full `composer.json` file for your project. Either way, once you've created your `composer.json` file you can tell Composer to download and install your dependencies into the `vendors/` directory. This also applies to projects you've downloaded that already provide a `composer.json` file:

    php composer.phar install

Next, add this line to your application's primary PHP file; this will tell PHP to use Composer's autoloader for your project dependencies.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Now you can use your project dependencies, and they'll be autoloaded on demand.

### Updating your dependencies

Composer creates a file called `composer.lock` which stores the exact version of each package it downloaded when you first ran `php composer.phar install`. If you share your project with other coders and the `composer.lock` file is part of your distribution, when they run `php composer.phar install` they'll get the same versions as you. To update your dependencies, run `php composer.phar update`.

This is most useful when you define your version requirements flexibly. For instance a version requirement of ~1.8  means "anything newer than 1.8.0, but less than 2.0.x-dev". You can also use the `*` wildcard as in `1.8.*`. Now Composer's `php composer.phar update` command will upgrade all your dependencies to the newest version that fits the restrictions you define.

### Checking your dependencies for security issues

The [Security Advisories Checker][3] is a web service and a command-line tool, both will examine your `composer.lock` file and tell you if you need to update any of your dependencies.

* [Learn about Composer][4]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: https://security.sensiolabs.org/
[4]: http://getcomposer.org/doc/00-intro.md

