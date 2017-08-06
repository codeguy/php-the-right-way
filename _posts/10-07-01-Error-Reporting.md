---
isChild: true
anchor:  error_reporting
title: 错误报告
---

## 错误报告 {#error_reporting_title}

错误日志对于发现程序中的错误是非常有帮助的，但是有些时候它也会将应用程序的结构暴露给外部。为了有效的保护你的应用程序不受到由此而引发的问题。你需要将在你的服务器上使用开发和生产（线上）两套不同的配置。

### 开发环境

为了在 **开发** 环境中显示所有可能的错误，将你的 `php.ini` 进行如下配置：

{% highlight ini %}
display_errors = On
display_startup_errors = On
error_reporting = -1
log_errors = On
{% endhighlight %}

> 将值设为 `-1` 将会显示出所有的错误，甚至包括在未来的 PHP 版本中新增加的类型和参数。
> 和 PHP 5.4 起开始使用的 `E_ALL` 是相同的。-
> [php.net](http://php.net/function.error-reporting)

`E_STRICT` 类型的错误是在 5.3.0 中被引入的，并没有被包含在 `E_ALL` 中。然而从 5.4.0 开始，它被包含在了 `E_ALL` 中。这意味着什么？这表示如果你想要在 5.3 中显示所有的错误信息，你需要使用 `-1` 或者 `E_ALL | E_STRICT`。

**不同 PHP 版本下开启全部错误显示**

* &lt; 5.3 `-1` 或 `E_ALL`
* &nbsp; 5.3 `-1` 或 `E_ALL | E_STRICT`
* &gt; 5.3 `-1` 或 `E_ALL`

### 生产环境

为了在 **生产** 环境中隐藏错误显示，将你的 `php.ini` 进行如下配置：

{% highlight ini %}
display_errors = Off
display_startup_errors = Off
error_reporting = E_ALL
log_errors = On
{% endhighlight %}

当在生产环境中使用这个配置时，错误信息依旧会被照常存储在 web 服务器的错误日志中，唯一不同的是将不再显示给用户。更多关于设置的信息，请参考 PHP 手册：

* [错误报告](http://php.net/errorfunc.configuration#ini.error-reporting)
* [显示错误](http://php.net/errorfunc.configuration#ini.display-errors)
* [显示启动错误](http://php.net/errorfunc.configuration#ini.display-startup-errors)
* [记录错误](http://php.net/errorfunc.configuration#ini.log-errors)
