---
isChild: true
anchor:  command_line_interface
---

## Command Line Interface {#command_line_interface_title}

PHP was created to write web applications, but is also useful for scripting command line interface (CLI) programs.
Command line PHP programs can help automate common tasks like testing, deployment, and application administration.

CLI PHP programs are powerful because you can use your app's code directly without having to create and secure a web
GUI for it. Just be sure **not** to put your CLI PHP scripts in your public web root!

Try running PHP from your command line:

{% highlight console %}
> php -i
{% endhighlight %}

The `-i` option will print your PHP configuration just like the [`phpinfo()`][phpinfo] function.

The `-a` option provides an interactive shell, similar to ruby's IRB or python's interactive shell. There are a number
of other useful [command line options][cli-options], too.

Let's write a simple "Hello, $name" CLI program. To try it out, create a file named `hello.php`, as below.

{% highlight php %}
<?php
if ($argc !== 2) {
    echo "Usage: php hello.php <name>" . PHP_EOL;
    exit(1);
}
$name = $argv[1];
echo "Hello, $name" . PHP_EOL;
{% endhighlight %}

PHP sets up two special variables based on the arguments your script is run with. [`$argc`][argc] is an integer
variable containing the argument *count* and [`$argv`][argv] is an array variable containing each argument's *value*.
The first argument is always the name of your PHP script file, in this case `hello.php`.

The `exit()` expression is used with a non-zero number to let the shell know that the command failed. Commonly used
exit codes can be found [here][exit-codes].

To run our script, above, from the command line:

{% highlight console %}
> php hello.php
Usage: php hello.php <name>
> php hello.php world
Hello, world
{% endhighlight %}


 * [Learn about running PHP from the command line][php-cli]

[phpinfo]: https://www.php.net/function.phpinfo
[cli-options]: https://www.php.net/features.commandline.options
[argc]: https://www.php.net/reserved.variables.argc
[argv]: https://www.php.net/reserved.variables.argv
[exit-codes]: https://www.gsp.com/cgi-bin/man.cgi?section=3&amp;topic=sysexits
[php-cli]: https://www.php.net/manual/en/features.commandline.php
