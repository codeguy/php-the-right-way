---
isChild: true
anchor: templating_benefits
---

## Benefits {#templating_benefits_title}

The main benefit to using templates is the clear separation they create between the presentation logic and the rest of
your application. Templates have the sole responsibility of displaying formatted content. They are not responsible for
data lookup, persistence or other more complex tasks. This leads to cleaner, more readable code which is especially
helpful in a team environment where developers work on the server-side code (controllers, models) and designers work on
the client-side code (markup).

Templates also improve the organization of presentation code. Templates are typically placed in a "views" folder, each
defined within a single file. This approach encourages code reuse where larger blocks of code are broken into smaller,
reusable pieces, often called partials. For example, your site header and footer can each be defined as templates,
which are then included before and after each page template.

Finally, depending on the library you use, templates can offer more security by automatically escaping user-generated
content. Some libraries even offer sand-boxing, where template designers are only given access to white-listed
variables and functions.