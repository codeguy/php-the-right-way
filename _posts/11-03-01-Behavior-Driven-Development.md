---
title:   행위 주도 개발 (BDD)
isChild: true
anchor:  behavior_driven_development
---

## 행위 주도 개발 (BDD) {#behavior_driven_development_title}

행위 주도 개발(Behavior-Driven Development, BDD)에는 SpecBDD와 StoryBDD라는 두 가지 형태가 있습니다. SpecBDD는 코드의
기술적인 행위에 초점을 맞추는 반면, StoryBDD는 비즈니스 관점이나 기능 관점의 행위와 상호작용에 초점을 맞춥니다. 두
가지 타입의 BDD를 지원하는 PHP용 라이브러리가 모두 존재합니다.

StoryBDD 기법을 사용한다면, 어플리케이션의 행위를 기술하는 "스토리"를 작성하는데, 이 스토리라는 것은 사람이 읽을 수
있는 형태로 작성하는 것입니다. 이렇게 작성된 스토리들은 어플리케이션에 대한 테스트로서 실행될 수 있습니다. StoryBDD를
할 수 있게 해주는 [Behat]이라는 라이브러리는 Ruby의 [Cucumber] 프로젝트에 영향을 받았다고 하는데, 어플리케이션의
행위를 기술하는 데에는 Gherkin DSL을 구현하여 사용하고 있습니다.

SpecBDD 기법을 사용한다면 여러분의 코드가 어떻게 행위할 것인지 기술하는 스펙을 작성하게 됩니다. 함수나 메소드를
테스트한다는 개념으로 바라보는 것이 아니라, 그 함수나 메소드가 어떻게 행위하는지 기술한다는 개념으로 바라봅니다.
[PHPSpec] 프레임워크가 바로 이런 목적으로 사용할 수 있는 프레임워크입니다. 이 프레임워크는 Ruby의
[RSpec 프로젝트][RSpec]에 영향을 받았습니다.

### BDD 관련 링크

* [Behat]는 Ruby의 [Cucumber] 프로젝트에 영향을 받은 StoryBDD 프레임워크입니다.
* [PHPSpec]은 Ruby의 [RSpec] 프로젝트에 영향을 받은 SpecBDD 프레임워크입니다.
* [Codeception]은 BDD의 원칙을 사용하는 풀스택(full-stack) 테스트 프레임워크입니다.


[Behat]: http://behat.org/
[Cucumber]: https://cucumber.io/
[PHPSpec]: https://www.phpspec.net/
[RSpec]: https://rspec.info/
[Codeception]: https://codeception.com/
