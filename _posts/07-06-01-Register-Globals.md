---
isChild: true
---

## Register Globals

<strong>NOTE:</strong> As of the introduction of PHP 5.4, the `register_globals` setting has been removed and can no 
longer be used.

When enabled, the `register_globals` configuration setting that makes several types of variables (including ones from 
`$_POST`, `$_GET` and `$_REQUEST`) globals, available in the global scope of your application. This can easily lead to 
security issues as your application cannot effectively tell where the data is coming from.

If you are using a version of PHP that's prior to 4.2.0, please be aware that you may still be at risk of this setting 
causing problems. As of PHP 4.2.0, the `register_globals` setting has been defaulted to "off". To ensure the security 
of your application, ensure that this setting is <strong>always</strong> set to "off" if available.

* [Register_globals in the PHP manual](http://www.php.net/manual/en/security.globals.php)