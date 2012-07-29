---
title: 命令行接口
anchorid: command_line_interface
isChild: true
---

<h2 id="command_line_interface">命令行接口</h2>

PHP的主要目的是开发Web应用，不过它的命令行脚本接口(CLI)也非常有用。PHP命令行编程可以帮你完成自动化的任务，如测试，部署和
应用管理。

CLI PHP编程非常强大，可以直接调用你自己的app代码而无需创建Web图像界面，需要注意的是不要把CLI PHP脚本放在公开的web目录下！

在命令行下运行PHP:

{% highlight bash %}
> php -i
{% endhighlight %}

选项`-i`将会打印PHP配置，类似于[`phpinfo`][phpinfo]函数。 

选项`-a`提供交互式shell，和ruby的IRB或python的交互式shell相似，此外还有很多其他有用的[命令行选项][cli-options]。

接下来写一个简单的"Hello, $name" CLI程序，先创建名为`hello.php`的脚本：

{% highlight php %}
<?php
if($argc != 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP会在脚本运行时根据参数创建两个特殊的变量，[`$argc`][argc]是一个整数，表示参数*个数*，[`$argv`][argv]是一个数组变量，包含每个参数的*值*，
它的第一个元素一直是PHP脚本的名字，如本例中为`hello.php`。

命令运行失败时，可以通过`exit()`表达式返回一个非0整数来通知shell，常用的exit返回码可以查看[列表][exit-codes]

运行上面的脚本，在命令行输入：

{% highlight bash %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}


 * [学习如何在命令行运行PHP][php-cli]
 * [学习如何在Windows环境下运行PHP命令行程序][php-cli-windows]

[phpinfo]: http://php.net/manual/en/function.phpinfo.php
[cli-options]: http://www.php.net/manual/en/features.commandline.options.php
[argc]: http://php.net/manual/en/reserved.variables.argc.php
[argv]: http://php.net/manual/en/reserved.variables.argv.php
[php-cli]: http://php.net/manual/en/features.commandline.php
[php-cli-windows]: http://www.php.net/manual/en/install.windows.commandline.php
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
