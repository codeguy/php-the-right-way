# Contributing to PHP The Right Way

Enjoy [PHP The Right Way](http://phptherightway.com) and want to get 
involved? Great! There are plenty of ways you can help out.

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/codeguy/php-the-right-way/issues) is
the preferred channel for changes: spelling mistakes, wording changes, new 
content and generally [submitting pull requests](#pull-requests), but please 
respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests (use
  [Stack Overflow](http://stackoverflow.com/questions/tagged/php) or IRC).

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.


<a name="pull-requests"></a>
## Pull Requests

Pull requests are a great way to add new content to PHP The Right Way, as well 
as updating any browser issues or other style changes. Pretty much any sort of 
change is accepted if seen as constructive.

Adhering to the following this process is the best way to get your work
included in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/php-the-right-way.git
   # Navigate to the newly cloned directory
   cd php-the-right-way
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/codeguy/php-the-right-way.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout gh-pages
   git pull upstream gh-pages
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your change or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Install the [Jekyll](https://github.com/jekyll/jekyll/) gem to preview locally.

5. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your content is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

6. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream gh-pages
   ```

7. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.


## Contribution Agreement and Usage

By submitting a pull request to this repository, you agree to allow the project 
owners to license your work under the the terms of the [Creative Commons Attribution-NonCommercial-ShareAlike
3.0 Unported License](http://creativecommons.org/licenses/by-nc-sa/3.0/).

The same content and license will be used for all PHP The Right Way publications,
including - but not limited to:

* [phptherightway.com](http://phptherightway.com)
* Translations of phptherightway.com
* [LeanPub: PHP The Right Way](https://leanpub.com/phptherightway/)
* Translations of "LeanPub: PHP The Right Way"

All content is completely free now, and always will be.

## Contributor Style Guide

1. Use American English spelling (*primary English repo only*)
2. Use four (4) spaces to indent text; do not use tabs
3. Wrap all text to 120 characters
4. Code samples should adhere to PSR-1 or higher
5. Use [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/) for all content
6. Use language agnostic urls when refering to external websites such as the [php.net](http://php.net/urlhowto.php) manual
