---
title: 错误提示
anchorid: error_reporting
isChild: true
---

<h2 id="error_reporting">错误提示</h2>

错误日志可以帮助追查应用的Bug，但是也会暴露应用的结构信息而产生安全问题，为此，需要在开发环境和线上环境设置不同的配置，防止
敏感信息的泄漏。

### 开发环境

要在**开发环境**显示错误提示，需要在`php.ini`中配置以下配置项:

    display_errors = On
    display_startup_errors = On
    error_reporting = -1
    log_errors = On

来自[php.net](http://php.net/manual/function.error-reporting.php):

> -1表示显示各种错误，包括将来增加的新错误类型，和PHP 5.4中的E_ALL行为相同。

`E_STRICT`错误级别在5.3.0版本引入，不在`E_ALL`中，不过5.4.0版本开始，`E_ALL`包含`E_STRICT`级别的错误。所以在5.3版本中，要显示
所有错误，需要把`error_reporting`设置为`-1`或者`E_ALL | E_STRICT`。 

**各PHP版本显示所有错误的配置**

* &lt; 5.3 `-1` or `E_ALL`
* &nbsp; 5.3 `-1` or `E_ALL | E_STRICT`
* &gt; 5.3 `-1` or `E_ALL`

### 线上环境

要在线上环境隐藏错误提示，需要在`php.ini`中配置以下配置项:

    display_errors = Off
    display_startup_errors = Off
    error_reporting = E_ALL
    log_errors = On

这样设置后，线上错误会记录到Web服务器的错误日志中，而不是直接显示给用户。如果想了解更多错误提示相关的设置，请参考手册：

* [error_reporting](http://php.net/manual/errorfunc.configuration.php#ini.error-reporting)
* [display_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-errors)
* [display_startup_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-startup-errors)
* [log_errors](http://php.net/manual/errorfunc.configuration.php#ini.log-errors)
