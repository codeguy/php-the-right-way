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

Manually installing composer is an advanced technique; however, there are various reasons why a developer might prefer this method vs. using the interactive installation routine. The interactive installation checks your PHP installation to ensure that:

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

First, create a `composer.json` file in the same directory as `composer.phar`. Here's an example that lists [Twig][2] as a project dependency.

	{
	    "require": {
	        "twig/twig": "1.8.*"
	    }
	}

Next, run this command from your project root directory.

    php composer.phar install

This will download and install the project dependencies into a `vendors/` directory. Next, add this line to your application's primary PHP file; this will tell PHP to use Composer's autoloader for your project dependencies.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Now you can use your project dependencies, and they'll be autoloaded on demand.

* [Learn about Composer][3]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: http://getcomposer.org/doc/00-intro.md
