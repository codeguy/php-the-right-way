---
isChild: true
anchor:  command_line_interface
title: 命令行接口
---

## 命令行接口 {#command_line_interface_title}

PHP 是为开发 Web 应用而创建，不过它的命令行脚本接口(CLI)也非常有用。PHP 命令行编程可以帮你完成自动化的任务，如测试，部署和应用管理。

CLI PHP 编程非常强大，可以直接调用你自己的程序代码而无需创建 Web 图形界面，需要注意的是 **不要** 把 CLI PHP 脚本放在公开的 web 目录下！

在命令行下运行 PHP :

{% highlight console %}
> php -i
{% endhighlight %}

选项 `-i` 将会打印 PHP 配置，类似于 [`phpinfo()`][phpinfo] 函数。

选项 `-a` 提供交互式 shell，和 Ruby 的 IRB 或 python 的交互式 shell 相似，此外还有很多其他有用的[命令行选项][cli-options]。

接下来写一个简单的 "Hello, $name" CLI 程序，先创建名为 `hello.php` 的脚本：

{% highlight php %}
<?php
if($argc != 2) {
    echo "Usage: php hello.php [name].\n";
    exit(1);
}
$name = $argv[1];
echo "Hello, $name\n";
{% endhighlight %}

PHP 会在脚本运行时根据参数设置两个特殊的变量，[`$argc`][argc] 是一个整数，表示参数*个数*，[`$argv`][argv] 是一个数组变量，包含每个参数的*值*，
它的第一个元素一直是 PHP 脚本的名称，如本例中为 `hello.php`。

命令运行失败时，可以通过 `exit()` 表达式返回一个非 0 整数来通知 shell，常用的 exit 返回码可以查看[列表][exit-codes].

运行上面的脚本，在命令行输入：

{% highlight console %}
> php hello.php
Usage: php hello.php [name]
> php hello.php world
Hello, world
{% endhighlight %}

 * [学习如何在命令行运行 PHP][php-cli]
 * [学习如何在 Windows 环境下运行 PHP 命令行程序][php-cli-windows]

[phpinfo]: http://php.net/function.phpinfo
[cli-options]: http://php.net/features.commandline.options
[argc]: http://php.net/reserved.variables.argc
[argv]: http://php.net/reserved.variables.argv
[exit-codes]: http://www.gsp.com/cgi-bin/man.cgi?section=3&amp;topic=sysexits
[php-cli]: http://php.net/features.commandline
[php-cli-windows]: http://php.net/install.windows.commandline
