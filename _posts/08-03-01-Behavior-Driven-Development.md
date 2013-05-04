---
isChild: true
---

## 행위 주도 개발 {#behavior_driven_development_title}

행위 주도 개발(Behavior-Driven Development, BDD)에는 SpecBDD와 StoryBDD라는 두 가지 형태가 있습니다. SpecBDD는 코드의 기술적인 행위에 초점을 맞추는 반면, StoryBDD는 비즈니스 관점이나 기능 관점의 행위와 상호작용에 초점을 맞춥니다. 두 가지 타입의 BDD를 지원하는 PHP용 라이브러리가 모두 존재합니다.

StoryBDD 기법을 사용한다면, 어플리케이션의 행위를 기술하는 "스토리"를 작성하는데, 이 스토리라는 것은 사람이 읽을 수 있는 형태로 작성하는 것입니다. 이렇게 작성된 스토리들은 어플리케이션에 대한 테스트로서 실행될 수 있습니다. StoryBDD를 할 수 있게 해주는 Behat이라는 라이브러리는 Ruby의 [Cucumber](http://cukes.info/) 프로젝트에 영향을 받았다고 하고, 어플리케이션의 행위를 기술하는 데에는 Gherkin DSL을 구현하여 사용합니다.

With SpecBDD, you write specifications that describe how your actual code should behave. Instead of testing
a function or method, you are describing how that function or method should behave. PHP offers the PHPSpec framework for this purpose. This framework is inspired
by the [RSpec project](http://rspec.info/) for Ruby.

### BDD Links    

* [Behat](http://behat.org/), the StoryBDD framework for PHP, inspired by Ruby's [Cucumber](http://cukes.info/) project;
* [PHPSpec](http://www.phpspec.net/), the SpecBDD framework for PHP, inspired by Ruby's [RSpec](http://rspec.info/) project;
* [Codeception](http://www.codeception.com) is a full-stack testing framework that uses BDD principles.
