---
isChild: true
---

## Command Line Interface {#command_line_interface_title}

PHP was created primarily to write web applications, but it's also useful for scripting command line interface (CLI) programs. Command line PHP programs can help you automate common tasks like testing, deployment, and application administrivia.

CLI PHP programs are powerful because you can use your app's code directly without having to create and secure a web GUI for it. Just be sure not to put your CLI PHP scripts in your public web root!

Try running PHP from your command line:

{% highlight bash %}
> php -i
{% endhighlight %}

The `-i` option will print your PHP configuration just like the [`phpinfo`][phpinfo] function. 

The `-a` option provides an interactive shell, similar to ruby's IRB or python's interactive shell. There are a number of other useful [command line options][cli-options], too.

Let's write a simple "Hello, $name" CLI program. To try it out, create a file named `hello.php`, as below.

{% highlight php %}
<?php
if ($argc != 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP sets up two special variables based on the arguments your script is run with. [`$argc`][argc] is an integer variable containing the argument *count* and [`$argv`][argv] is an array variable containing each argument's *value*. The first argument is always the name of your PHP script file, in this case `hello.php`.

The `exit()` expression is used with a non-zero number to let the shell know that the command failed. Commonly used exit codes can be found [here][exit-codes]

To run our script, above, from the command line:

{% highlight bash %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}


 * [Learn about running PHP from the command line][php-cli]
 * [Learn about setting up Windows to run PHP from the command line][php-cli-windows]

[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
