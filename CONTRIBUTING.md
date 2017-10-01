# Contribuir para o PHP The Right Way

Gosta do [PHP The Right Way](http://phptherightway.com) e quer colaborar? Boa! Há muitas formas de ajudar.

Por favor, tire um momento para ler este documento, a fim de tornar o processo de contribuição fácil e eficaz para todos os envolvidos.

Seguir estas orientações significa que você respeita o tempo que os programadores gastam em gerenciar e desenvolver este projeto de código aberto. Em troca, eles podem ajuda-lo a abordar situações ou avaliar correções e funcionalidades.

## Usar o 'issue tracker'

O [issue tracker](https://github.com/codeguy/php-the-right-way/issues) é o canal preferido para alterações: erros ortográficos, alterações de texto, novos conteúdos e geralmente [submissão de pull requests](#pull-requests), mas respeite as seguintes restrições:

* Por favor **não** use o issue tracker para solicitações suporte (use o [Stack Overflow](http://stackoverflow.com/questions/tagged/php) ou o IRC).

* Por favor, **não** se desvie da questão. Mantenha a discussão sobre o tema e respeite as opiniões dos outros.


<a name="pull-requests"></a>
## Pull Requests

Os *Pull Requests* são uma ótima forma de adicionar novos conteúdos ao *PHP The Right Way*, além de atualizar quaisquer problemas do navegador ou outras mudanças de estilo. Praticamente qualquer tipo de mudanças é aceite se for construtivo.

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

4. Install the [Jekyll](https://github.com/jekyll/jekyll/) gem and dependencies to preview locally:

    ```bash
    # Install the needed gems through Bundler
    bundle install --path vendor/bundle
    # Run the local server
    bundle exec jekyll serve
    ```

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
6. Use language agnostic urls when referring to external websites such as the [php.net](http://php.net/urlhowto.php) manual
