---
title: 注册全局变量
anchorid: register_globals
isChild: true
---

<h2 id="register_globals">注册全局变量</h2>

**提示:**从PHP 5.4.0开始，`register_globals`配置已经删除，不再生效。保留这个配置，只是提示依赖该配置的应用进行升级。

启用`register_globals`配置后，`$_POST`, `$_GET`和`$_REQUEST`中的变量自动注册为全局变量，使得应用很难辨别变量的确切来源，从而产生安全漏洞。

例如：`$_GET['foo']`将注册变量`$foo`，这会覆盖程序中未声明的同名变量。如果你使用PHP 5.4.0之前的版本，请确保已经把`register_globals`设置为**off**。

* [Register_globals in the PHP manual](http://www.php.net/manual/en/security.globals.php)