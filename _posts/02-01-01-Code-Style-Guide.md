---
title:  코딩 스타일 가이드
anchor: code_style_guide
---

# 코딩 스타일 가이드  {#code_style_guide_title}

PHP 커뮤니티는 매우 거대하고, 수많은 라이브러리와 프레임워크, 컴포넌트들이 존재합니다. 이렇게 많은 선택지들 중에 몇
가지를 골라 프로젝트에 적용하는 일은 PHP 개발자에게 일상적인 일입니다. 다양한 라이브러리를 조합하여 사용하는 일을
수월하게 하려면, 가능한한 공통적인 코드 스타일을 적용하는 일은 매우 중요합니다.

[프레임워크 운용 그룹(Framework Interoperability Group)][fig]에서는 [PSR-1][psr1], [PSR-12][psr12],
[PSR-4][psr4]라는 권장 스타일 가이드를 발표했습니다. 이들 가이드는 Drupal, Zend, Symfony, Laravel, CakePHP, phpBB, AWS SDK,
FuelPHP, Lithium 등의 프로젝트에서 적용하기 시작한 스타일 규칙입니다. 여러분의 프로젝트에서 이러한 스타일 가이드를
사용할 수도있고, 혹은 여러분 자신만의 스타일을 그대로 사용할 수도 있습니다.

가능하다면 여러분은 알려진 표준 스타일에 맞춰 코드를 작성해야 합니다. 몇 가지 PSR을 조합하거나, PEAR나 Zend에서 만든
스타일 표준을 사용할 수도 있습니다. 그렇게 함으로써 다른 개발자들도 여러분의 코드를 쉽게 읽고 사용할 수 있으며, 많은
써드파티 라이브러리를 사용하면서도 어플리케이션 코드의 일관성을 유지할 수 있습니다.

* [읽을거리: PSR-1][psr1]
* [읽을거리: PSR-12][psr12]
* [읽을거리: PSR-4][psr4]
* [읽을거리: PEAR 코딩 표준][pear-cs]
* [읽을거리: Symfony 코딩 표준][symfony-cs]

[PHP CodeSniffer][phpcs]라는 도구는 코드가 이들 가이드를 따르는지 확인할 수 있습니다. [Sublime Text][st-cs]와 같은
텍스트 편집기에는 실시간으로 코드를 확인해주는 플러그인도 제공합니다.

다음 두가지 도구 중 하나를 사용하여 코드 구조를 자동으로 고칠 수 있습니다.

- 하나는 매우 잘 테스트된 코드를 가진 [PHP Coding Standards Fixer][phpcsfixer]입니다.
- 혹은, PHP_CodeSniffer에 포함되어있는 [PHP Code Beautifier and Fixer][phpcbf] 도구를 사용하여 코드를 적절히 고칠 수 있습니다.

그리고, 쉘에서 phpcs를 다음과 같이 수동으로 실행할 수 있습니다.

    phpcs -sw --standard=PSR1 file.php

이 명령은 에러를 보여주고, 어떻게 고쳐야할지 설명을 보여줄 것입니다.
이것을 git hook에 포함시키면 유용합니다.
그렇게 해서 정한 기준을 위반한 것을 포함한 브랜치는 위반한 것들을 고치기 전까지는 저장소에 넣지 못하게 할 수 있습니다.

PHP_CodeSniffer 가 있다면, 확인된 코드 레이아웃 문제를 [PHP Code Beautifier and Fixer][phpcbf] 를 사용하여 자동으로 바로잡을 수 있습니다.

    phpcbf -w --standard=PSR1 file.php

다른 방법은 [PHP Coding Standards Fixer][phpcsfixer] 를 사용하는 것입니다.
이것은 코드 구조에 어떤 종류의 에러들이 존재하는 지 바로잡기 전에 보여줍니다.

    php-cs-fixer fix -v --rules=@PSR2 file.php

코드에 사용되는 모든 기호는 영어로 작성하는 것이 좋습니다. 주석은 코드를 사용할 사람들이 편하게 읽고 쓸 수 있다면 어떤
언어로 기록해도 됩니다.

마지막으로, 깨끗한(clean) PHP 코드를 작성하기위한 좋은 보충 자료는 [Clean Code PHP(en)][cleancode], [Clean Code PHP(ko)][cleancode-ko]입니다.

[fig]: https://www.php-fig.org/
[psr1]: https://www.php-fig.org/psr/psr-1/
[psr12]: https://www.php-fig.org/psr/psr-12/
[psr4]: https://www.php-fig.org/psr/psr-4/
[pear-cs]: https://pear.php.net/manual/en/standards.php
[symfony-cs]: https://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: https://pear.php.net/package/PHP_CodeSniffer/
[phpcbf]: https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: https://cs.sensiolabs.org/
[cleancode]: https://github.com/jupeter/clean-code-php
[cleancode-ko]: https://github.com/yujineeee/clean-code-php
