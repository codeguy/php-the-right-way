---
isChild: true
anchor:  register_globals
---

## Register Globals {#register_globals_title}

**NOTE:** As of PHP 5.4.0 the `register_globals` setting has been removed and can no longer be used. This is only
included as a warning for anyone in the process of upgrading a legacy application.

When enabled, the `register_globals` configuration setting makes several types of variables (including ones from
`$_POST`, `$_GET` and `$_REQUEST`) available in the global scope of your application. This can easily lead to security
issues as your application cannot effectively tell where the data is coming from.

For example: `$_GET['foo']` would be available via `$foo`, which can override variables that have been declared.

If you are using PHP < 5.4.0 __make sure__ that `register_globals` is __off__.
