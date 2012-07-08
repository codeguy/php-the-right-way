# Dependency Management

There are a ton of PHP libraries, frameworks, and components to choose from. Your project will likely use several of them — these are project dependencies. Until recently, PHP did not have a good way to manage these project dependencies. Even if you managed them manually, you still had to worry about autoloaders. No more.

## Composer and Packagist

Composer is a **brilliant** dependency manager for PHP. List your project's dependencies in a `composer.json` file and, with a few simple commands, Composer will automatically download your project's dependencies and setup autoloading for you.

There are already a lot of PHP libraries that are compatible with Composer, ready to be used in your project. These "packages" are listed on [Packagist][1], the official repository for Composer-compatible PHP libraries.

### How to Install Composer

You can install Composer locally (in your current working directory) or globally (e.g. /usr/local/bin). Let's assume you want to install Composer locally. From your project's root directory:

    curl -s http://getcomposer.org/installer | php

This will download `composer.phar` (a PHP binary archive). You can run this with `php` to manage your project dependencies.

### How to Define and Install Dependencies

First, create a `composer.json` file in the same directory as `composer.phar`. Here's an example that lists [Twig][2] as a project dependency.

    {
        "require": {
            "twig/twig": ">=1.8.0"
        }
    }

Next, run this command from your project root directory.

    php composer.phar install

This will download and install the project dependencies into a `vendors/` directory. Next, add this line to your application's primary PHP file; this will tell PHP to use Composer's autoloader for your project dependencies.

    require 'vendor/autoload.php';

Now you can use your project dependencies, and they'll be autoloaded on demand.

## PEAR

Another veteran package manager that many PHP developers enjoy is [PEAR][3]. It behaves much the same way, and is also worth researching for your projects.

* [Learn about Composer][4]
* [Learn about PEAR][3]

[Back to Top](#top){.top}

[1]: http://packagist.org/
[2]: http://twig.sensiolabs.org
[3]: http://pear.php.net/
[4]: http://getcomposer.org/doc/00-intro.md
