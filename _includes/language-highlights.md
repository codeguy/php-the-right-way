# Language Highlights

## Programming Paradigms

PHP is a flexible, dynamic language that supports a variety of programming techniques. It has evolved dramatically over the years, notably adding a solid object-oriented model in PHP 5.0 (2004), anonymous functions and namespaces in PHP 5.3 (2009), and traits in PHP 5.4 (2012). 

### Object-oriented Programming

* [Read about Object-oriented PHP][oop]
* [Read about Traits][traits]

### Functional Programming

* [Read about Anonymous functions][anonymous-functions]
* [Read about dynamically invoking functions with `call_user_func_array`][call-user-func-array]

### Meta Programming

* [Read about Magic Methods][magic-methods]
* [Read about Reflection][reflection]

## Namespaces

As mentioned above, the PHP community has a lot of developers creating lots of code. This means that one library's PHP code may use the same class name as another library. When both libraries are used in the same namespace, they collide and cause trouble.

_Namespaces_ solve this problem. As described in the PHP reference manual, namespaces may be compared to operating system directories that _namespace_ files; two files with the same name may co-exist in separate directories. Likewise, two PHP classes with the same name may co-exist in separate PHP namespaces. It's as simple as that.

It is important for you to namespace your code so that it may be used by other developers without fear of colliding with other libraries.

One recommended way to use namespaces is outlined in [PSR-0](psr0), which aims to provide a standard file, class and namespace convention to allow plug-and-play code.

* [Read about Namespaces][namespaces]
* [Read about PSR-0][psr0]


## Standard PHP Library

The Standard PHP Library (SPL) is packaged with PHP and provides a collection of classes and interfaces. It is made up primarily of commonly needed datastructure classes (stack, queue, heap, and so on), and iterators which can traverse over these datastructures or your own classes which implement SPL interfaces.

* [Read about the SPL][spl]

## Command Line Interface

PHP was created primarily to write web applications, but it's also useful for scripting command line interface (CLI) programs, too. Command line PHP programs can help you automate common tasks like testing, deployment, and application administrativia.

CLI PHP programs are powerful because you can use your app's code directly without having to create and secure a web GUI for it. Just be sure not to put your CLI PHP scripts in your public web root!

Try running PHP from your command line:

    > php -i

The `-i` option will print your PHP configuration just like the [`phpinfo`][phpinfo] function. There are a number of other useful [command line options][cli-options], too.

Let's write a simple "Hello, $name" CLI program. To try it out, create a file named `hello.php`, as below.

    <?php
    if($argc != 2) {
        die("Usage: php hello.php [name].\n");
    }
    $name = $argv[1];
    echo "Hello, $name\n";

PHP sets up two special variables based on the arguments your script is run with. [`$argc`][argc] is an integer variable containing the argument *count* and [`$argv`][argv] is an array variable containing each argument's *value*. The first argument is always the name of your PHP script file, in this case `hello.php`.

To run our script, above, from the command line:

    > php hello.php
    Usage: php hello.php [name]
    > php hello.php world
    Hello, world


 * [Learn about running PHP from the command line][php-cli]
 * [Learn about setting up Windows to run PHP from the command line][php-cli-windows]

[Back to Top](#top){.top}

[namespaces]: http://php.net/manual/en/language.namespaces.php
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[oop]: http://www.php.net/manual/en/language.oop5.php
[spl]: http://php.net/manual/en/book.spl.php 
[anonymous-functions]: http://www.php.net/manual/en/functions.anonymous.php
[magic-methods]: http://php.net/manual/en/language.oop5.magic.php
[reflection]: http://www.php.net/manual/en/intro.reflection.php
[traits]: http://www.php.net/traits
[call-user-func-array]: http://php.net/manual/en/function.call-user-func-array.php

[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
