---
isChild: true
---

## Register Globals

When enabled, the `register_globals` configuration setting that makes several types of variables (including ones from `$_POST`, `$_GET` and `$_REQUEST`) globals, available in the global scope of your application. This can easily lead to security issues as your application cannot effectively tell where the data is coming from.

If you are using a version of PHP that's prior to 4.2.0, you may still be at risk of this setting causing problems. As of PHP 4.2.0, the `register_globals` setting has been defaulted to "off" and, even more effective, the setting has been completely removed in PHP 5.4.0. To ensure the security of your application, ensure that this setting is always set to "off".

* [Register_globals in the PHP manual](http://www.php.net/manual/en/security.globals.php)