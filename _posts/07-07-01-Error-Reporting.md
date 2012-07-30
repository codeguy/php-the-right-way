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

- display_errors: On
- error_reporting: E_ALL
- log_errors: On

### 线上环境

要在线上环境隐藏错误提示，需要在`php.ini`中配置以下配置项:

- display_errors: Off
- error_reporting: E_ALL
- log_errors: On

这样设置后，线上错误会记录到Web服务器的错误日志中，而不是直接显示给用户。如果想了解更多错误提示相关的设置，请参考手册：

* [Error_reporting](http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting)
* [Display_errors](http://www.php.net/manual/en/errorfunc.configuration.php#ini.display-errors)
* [Log_errors](http://www.php.net/manual/en/errorfunc.configuration.php#ini.log-errors)