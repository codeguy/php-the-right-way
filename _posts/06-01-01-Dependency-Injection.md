---
title:  의존성 주입
anchor: dependency_injection
---

# 의존성 주입 {#dependency_injection_title}

[위키백과에서 인용](https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EC%84%B1_%EC%A3%BC%EC%9E%85):

> 의존성 주입(Dependency Injection, DI)은 프로그래밍에서 구성요소간의 종속성을 소스코드에서 설정하지 않고 외부의
> 설정파일 등을 통해 컴파일 시점이나 실행 시점에 주입하도록 하는 디자인 패턴 중의 하나이다.

위와 같은 설명은 실제보다 훨씬 어렵게 느껴지게 만드는 점이 있습니다. 의존성 주입이라는 것은 특정 컴포넌트의 의존
관계를, 생성자에서 주입하거나 메소드 호출 혹은 프로퍼티 설정을 하는 방식으로 지정할 수 있게 하는 것입니다. 간단한
얘기입니다.
