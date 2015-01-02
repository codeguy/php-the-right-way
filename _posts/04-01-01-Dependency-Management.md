---
anchor: dependency_management
---

# Dependency Management {#dependency_management_title}

There are a ton of PHP libraries, frameworks, and components to choose from. Your project will likely use 
several of them — these are project dependencies. Until recently, PHP did not have a good way to manage
these project dependencies. Even if you managed them manually, you still had to worry about autoloaders.
That is no longer an issue.

Currently there are two major package management systems for PHP - [Composer] and [PEAR]. Composer is
the main package manager to use for PHP, however for a long time PEAR used to fill that role. Knowing what
PEAR is will be a good idea as you may still find references to it, even if you never use it.

[Composer]: /#composer_and_packagist
[PEAR]: /#pear