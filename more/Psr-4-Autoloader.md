# Autoloader

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119](http://tools.ietf.org/html/rfc2119).


## 1. 개요

이 PSR은 파일 경로로부터 클래스를 자동으로 불러들이는 [클래스 자동 로딩][autoloading] 사양에 대해서 
설명하고 있습니다. 이 샤양은 [PSR-0][]등 다른 자동 로딩 사양과 같이 사용할 수 있습니다. 
이 사양에 따라 자동으로 로딩되게 하려는 파일을 어떻게 배치하면 되는지도 같이 설명할 것입니다. 


## 2. 사양

1. "클래스"는 클래스, 인터페이스, 트레이트(trait), 그리고 그 외에 비슷한 구조를 나타냅니다. 

2. 정규화된 클래스 이름(fully qualified class name)은 아래와 같이 생겼습니다. 

        \<NamespaceName>(\<SubNamespaceNames>)*\<ClassName>

    1. 정규화된 클래스 이름에는 반드시(MUST) 최상위 네임스페이스 이름이 있어야 합니다. 
       최상위 네임스페이스는 "벤더 네임스페이스"라고도 합니다. 

    2. 정규화된 클래스 이름에는 하위 네임스페이스가 하나 이상 포함될 수도(MAY) 있습니다.

    3. 정규화된 클래스 이름 끝에는 반드시(MUST) 클래스 이름이 있어야 합니다.

    4. 밑줄 문자는 정규화된 클래스 이름의 어느 부분에 오더라도 전혀 특별한 
       의미를 가지지 않습니다.

    5. 알파벳 문자는 대소문자를 자유롭게 사용할 수(MAY) 있습니다. 

    6. 클래스 이름을 참조할 때에는 반드시(MUST) 대소문자를 구분해야 합니다. 

3. 정규화된 클래스 이름에 맞는 파일을 로딩할 때 아래와 같은 규칙을 따릅니다. 

    1. 정규화된 클래스 이름에서 첫글자가 네임스페이스 구분자라면 그 문자는
       제외하고, 왼쪽부터 한 개 이상의 네임스페이스를 나타내는 부분("namespace prefix")은
       적어도 하나의 "base directory"에 해당합니다. (역주: 어느 부분까지를 namespace prefix로
       할 지는 클래스 제작자가 정하기 나름입니다.)

    2. "namespace prefix" 뒤쪽의 나머지 네임스페이스들은 "base directory"  내의
       하위 디렉토리에 해당합니다. 네임스페이스 구분자를 디렉토리 구분자로 치환한다고
       생각하면 됩니다. 하위 디렉토리 이름은 반드시(MUST) 네임스페이스 이름과
       대소문자까지도 동일해야 합니다.

    3. 끝부분의 클래스 이름은 `.php` 파일 이름에 해당합니다. 파일 이름은 반드시(MUST)
       클래스 이름과 대소문자까지 동일해야 합니다.

4. 자동 로딩을 구현한 코드는 예외를 발생시켜도 안되고(MUST NOT), 어떤 수준의 
    에러도 발생시키면 안되며(MUST NOT), 값을 리턴해도 안됩니다(SHOULD NOT).


## 3. Examples

The table below shows the corresponding file path for a given fully qualified
class name, namespace prefix, and base directory.

| Fully Qualified Class Name    | Namespace Prefix   | Base Directory           | Resulting File Path
| ----------------------------- |--------------------|--------------------------|-------------------------------------------
| \Acme\Log\Writer\File_Writer  | Acme\Log\Writer    | ./acme-log-writer/lib/   | ./acme-log-writer/lib/File_Writer.php
| \Aura\Web\Response\Status     | Aura\Web           | /path/to/aura-web/src/   | /path/to/aura-web/src/Response/Status.php
| \Symfony\Core\Request         | Symfony\Core       | ./vendor/Symfony/Core/   | ./vendor/Symfony/Core/Request.php
| \Zend\Acl                     | Zend               | /usr/includes/Zend/      | /usr/includes/Zend/Acl.php

For example implementations of autoloaders conforming to the specification,
please see the [examples file][]. Example implementations MUST NOT be regarded
as part of the specification and MAY change at any time.

[autoloading]: http://php.net/autoload
[PSR-0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[examples file]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader-examples.md
