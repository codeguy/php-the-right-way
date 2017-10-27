---
isChild: true
anchor:  register_globals
title: 注册全局变量
---

## 注册全局变量 {#register_globals_title}

**注意：** 自 PHP 5.4.0 开始，`register_globals` 选项已经被移除并不再使用。这是在提醒你如果你正在升级旧的应用程序的话，你需要注意这一点。

当 `register_globals` 选项被开启时，它会使许多类型的变量（包括 `$_POST`, `$_GET` 和 `$_REQUEST`）被注册为全局变量。这将很容易使你的程序无法有效地判断数据的来源并导致安全问题。

例如：`$_GET['foo']` 可以通过 `$foo` 被访问到，也就是可以对未声明的变量进行覆盖。如果你使用低于 5.4.0 版本的 PHP 的话，请 __确保__ `register_globals` 是被设为 __off__ 的。

* [在 PHP 手册中了解 Register_globals](http://php.net/security.globals)
