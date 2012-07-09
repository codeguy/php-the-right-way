# Command Line Interface

PHP was created primarily to write web applications, but it's also useful for scripting command line interface (CLI) programs, too. Command line PHP programs can help you automate common tasks like testing, deployment, and application administrativia.

CLI PHP programs are powerful because you can use your app's code directly without having to create and secure a web GUI for it. Just be sure not to put your CLI PHP scripts in your public web root!

Try running PHP from your command line:

    > php -i

The `-i` option will print your PHP configuration just like the [`phpinfo`][0] function. There are a number of other useful [command line options][1], too.

Let's write a simple "Hello, $name" CLI program. To try it out, create a file named `hello.php`, as below.

    <?php
    if($argc != 2) {
        die("Usage: php hello.php [name].\n");
    }
    $name = $argv[1];
    echo "Hello, $name\n";

PHP sets up two special variables based on the arguments your script is run with. [`$argc`][2] is an integer variable containing the argument *count* and [`$argv`][3] is an array variable containing each argument's *value*. The first argument is always the name of your PHP script file, in this case `hello.php`.

To run our script, above, from the command line:

    > php hello.php
    Usage: php hello.php [name]
    > php hello.php world
    Hello, world

## Built-in, command line web server

Starting with PHP 5.4, you can develop locally on a PHP-enabled web server without the hassle of installing and configuring a full-fledged web server. To start the server, from your web root:

    > php -S localhost:8000

 * [Learn about running PHP from the command line][5]
 * [Learn about the built-in, command line web server][4]

[Back to Top](#top){.top}

[0]: http://php.net/manual/en/function.phpinfo.php
[1]: http://www.php.net/manual/en/features.commandline.options.php
[2]: http://php.net/manual/en/reserved.variables.argc.php
[3]: http://php.net/manual/en/reserved.variables.argv.php
[4]: http://www.php.net/manual/en/features.commandline.webserver.php
[5]: http://php.net/manual/en/features.commandline.php
