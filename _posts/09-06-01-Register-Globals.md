---
isChild: true
---

## Register Globals {#register_globals_title}

** NOTE: ** Depuis la version 5.4.0 de PHP, le paramètre `register_globals` a été retiré et ne peut plus être utilisé. 
Les applications plus anciennes n'afficheront plus qu'un avertissement si ce paramètre est utilisé.

Quand il est activé, le paramètre de configuration `register_globals` permet à plusieurs types de variables (cela inclue 
notamment les paramètres `$_POST`, `$_GET` and `$_REQUEST`) d'être accessibles partout dans votre application. Cela 
peut facilement conduire à des problèmes de sécurité étant donné que votre application ne peut de façon claire dire 
d'où proviennent les données.

Par exemple: `$_GET['foo']` sera accessible via `$foo` ce qui peut écraser des variables non encore déclarées. Si vous 
utilisez PHP < 5.4.0 __assurez vous__ que ce paramètre est à __off__.

* [Register_globals dans le manuel PHP](http://www.php.net/manual/fr/security.globals.php)
