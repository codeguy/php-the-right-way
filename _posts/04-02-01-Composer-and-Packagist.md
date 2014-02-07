---
isChild: true
anchor: composer_and_packagist
---

## Composer and Packagist {#composer_and_packagist_title}

Composer is a **brilliant** dependency manager for PHP. List your project's dependencies in a `composer.json` file and, with a few simple commands, Composer will automatically download your project's dependencies and setup autoloading for you.

There are already a lot of PHP libraries that are compatible with Composer, ready to be used in your project. These "packages" are listed on [Packagist][1], the official repository for Composer-compatible PHP libraries.

### Installing Composer
Composer is a single file called `composer.phar`, which is a PHP binary archive. It can either be installed locally in each of your project directories or in a single global location that is in your `$PATH` environment variable. The global method is recommended because it enables you to run it from your current working directory with the command `composer`. So when you come across documentation that states to run Composer as `php composer.phar install`, you can substitute that with:

    composer install

Detailed [installation instructions][5] can be found in the Composer documentation. For Windows users the easiest way to get up and running is to use the [ComposerSetup][6] installer. This section will assume you have installed Composer globally.

### How to Define and Install Dependencies

Composer keeps track of your project's dependencies in a file called `composer.json`. You can manage it by hand if you like, or use Composer itself. The `composer require` command adds a project dependency and if you don't have a `composer.json` file, one will be created. Here's an example that adds [Twig][2] as a dependency of your project.

	composer require twig/twig:~1.8

Alternatively the `composer init` command will guide you through creating a full `composer.json` file for your project. Either way, once you've created your `composer.json` file you can tell Composer to download and install your dependencies into the `vendors/` directory. This also applies to projects you've downloaded that already provide a `composer.json` file:

    composer install

Next, add this line to your application's primary PHP file; this will tell PHP to use Composer's autoloader for your project dependencies.

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

Now you can use your project dependencies, and they'll be autoloaded on demand.

### Updating your dependencies

Composer creates a file called `composer.lock` which stores the exact version of each package it downloaded when you first ran `php composer.phar install`. If you share your project with other coders and the `composer.lock` file is part of your distribution, when they run `php composer.phar install` they'll get the same versions as you. To update your dependencies, run `php composer.phar update`.

This is most useful when you define your version requirements flexibly. For instance a version requirement of ~1.8  means "anything newer than 1.8.0, but less than 2.0.x-dev". You can also use the `*` wildcard as in `1.8.*`. Now Composer's `php composer.phar update` command will upgrade all your dependencies to the newest version that fits the restrictions you define.

### Update Notifications

To receive notifications about new version releases you can sign up for [VersionEye][3], a web service that can monitor 
your GitHub and BitBucket accounts for `composer.json` files and send emails with new package releases.

### Checking your dependencies for security issues

The [Security Advisories Checker][4] is a web service and a command-line tool, both will examine your `composer.lock` file and tell you if you need to update any of your dependencies.

* [Learn about Composer][5]

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: https://www.versioneye.com/
[4]: https://security.sensiolabs.org/
[5]: http://getcomposer.org/doc/00-intro.md
[6]: https://getcomposer.org/Composer-Setup.exe

