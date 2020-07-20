---
title:   공통 디렉토리 구조
isChild: true
anchor:  common_directory_structure
---

## 공통 디렉토리 구조 {#common_directory_structure_title}

웹을 위한 프로그램 작성을 시작하는 사람들 사이에서 공통적으로 제기되는 질문은 "내 코드를 어디에 두는가"입니다. 수년에 걸쳐, 이 대답은 `DocumentRoot`가 있는 곳"이었습니다." 이 답변은 완전하지는 않지만 시작하기에 좋은 곳이긴 합니다.

보안상의 이유로 사이트의 방문자가 설정 파일에 접근할 수 없어야 합니다. 따라서 공개 스크립트는 공개 디렉토리에 보관되고 비공개 설정 및 데이터는 해당 디렉토리 외부에 보관됩니다.

각 팀, CMS 또는 하나의 프레임 워크에서 표준 디렉토리 구조가 각 엔티티 별로 사용됩니다. 그러나, 프로젝트를 단독으로 시작한다면, 어떤 파일 시스템 구조를 사용해야 할지 아는 것은 어렵습니다.

[Paul M. Jones]는 PHP 영역에서 수만 가지 github 프로젝트의 일반적인 관행에 대한 환상적인 연구를 수행했습니다. 그는 이 연구를 기반으로 표준 파일 및 디렉토리 구조 인 [Standard PHP Package Skeleton]을 컴파일했습니다. 이 디렉토리 구조에서 `DocumentRoot`는 `public/`을 가리키고, 단위 테스트는 `tests/` 디렉토리에 있어야하고, [composer]가 설치 한 타사 라이브러리는 `vendor/` 디렉토리에 있어야합니다. 다른 파일과 디렉토리의 경우 [표준 PHP 패키지 스켈레톤]을 준수하는 것이 프로젝트의 기여자들에게도 도움 될 것입니다.

[Paul M. Jones]: http://paul-m-jones.com/
[Standard PHP Package Skeleton]: https://github.com/php-pds/skeleton
[Composer]: /#composer_and_packagist
