# PHP The Right Way 프로젝트에 기여하기

이 문서는 프로젝트의 중심이라고 할 수 있는 영어판 PHP The Right Way 프로젝트에
포함되어 있는 문서를 번역한 것이라서 영어판 프로젝트에 기여하는 방법을 설명하고 있습니다.

[PHP The Right Way](http://phptherightway.com) 를 즐기고 있습니까?
참여하고 싶습니까? 좋습니다! 도움을 줄 수 있는 많은 방법이 있습니다.

관련된 모두에게 쉽고 효과적인 프로젝트 기여 프로세스를 만들기 위해서 이 문서를 리뷰하는데에
잠깐 시간을 내 주세요.

이 문서에서 제시하는 가이드라인을 따라 주신다면, 이 오픈소스 프로젝트를 관리하고 개발하는 개발자들의
시간을 존중해주는 것과 마찬가지입니다. 여러분이 올려준 이슈나 패치, 새 기능에 대해서 개발자들이
검토할 때, 그런 존중에 대한 답례를 반드시 하게 될 것입니다.


## 이슈 트래커 사용하기

[이슈 트래커](https://github.com/codeguy/php-the-right-way/issues)는 모든 
변경 사항( 철자 오류, 표현 정정, 새로운 내용, 일반적인 [풀 리퀘스트](#pull-requests) 등)을
교환하는데에 좋은 채널입니다. 하지만 아래의 규칙을 유념해 주십시오.

* 개인적인 질문이나 지원을 요청하는데에 이슈 트래커를 **사용하지 마십시오**. (그럴 때는 
  [Stack Overflow](http://stackoverflow.com/questions/tagged/php) 나 
  IRC를 사용해 주십시오)

* 이슈의 논점을 흐리거나 논란을 일으키기 위한 도발은 **하지 마십시오**. 논의 주제에 맞게, 
  다른 사용자의 의견을 존중하면서 토론을 해 주시기 바랍니다.


<a name="pull-requests"></a>
## 풀 리퀘스트

풀 리퀘스트(Pull Requests)는 PHP The Right Way 에 새로운 내용을 추가하거나,
웹 브라우저 이슈를 해결하거나, 다른 여러 변경사항을 적용하기 위한 훌륭한 수단입니다.
건설적인 제안이라면 거의 대부분 받아들여질 것입니다.

여러분의 작업 결과물을 반영하려면 아래와 같은 과정을 거치면 됩니다.

1. 이 프로젝트를 [Fork](http://help.github.com/fork-a-repo/)하여 생성된 여러분의
   저장소를 clone 한 후에 리모트 저장소를 설정합니다.

   ```bash
   # 현재 디렉토리에 저장소를 clone 합니다.
   git clone https://github.com/<your-username>/php-the-right-way.git
   # clone 이 완료된 디렉토리 안으로 이동합니다.
   cd php-the-right-way
   # 원본 프로젝트 저장소를 "upstream"이라는 리모트 저장소로 등록합니다.
   git remote add upstream https://github.com/codeguy/php-the-right-way.git
   ```

2. clone 을 한 지 시간이 좀 지났다면, upstream 으로부터 최신 변경 내역을 받아옵니다.

   ```bash
   git checkout gh-pages
   git pull upstream gh-pages
   ```

3. 토픽 브랜치를 새로 만들고 여러분의 작업을 합니다.

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. 작업 환경에서 수정된 결과물을 미리보고 싶다면 
   [Jekyll](https://github.com/mojombo/jekyll/) gem 과 의존 패키지들을 설치합니다.

    ```bash
    # Bundler 로 필요한 gem 을 설치합니다.
    bundle install --path vendor/bundle
    # 로컬 서버를 실행합니다.
    bundle exec jekyll serve
    ```

5. 논리적인 단위로 여러분의 수정 내용을 commit 합니다. [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)에 따라 메시지를 적절히 작성합니다. 여러분의 커밋을 공개하기 전에, 
   git의 [interactive rebase](https://help.github.com/articles/interactive-rebase) 기능을 사용해서 커밋을 깔끔하게 정리합니다.

6. 로컬 저장소에서 upstream 개발 브랜치를 여러분의 토픽 브랜치로 merge(혹은 rebase)합니다.

   ```bash
   git pull [--rebase] upstream gh-pages
   ```

7. 토픽 브랜치를 여러분의 github 저장소에 push 합니다.

   ```bash
   git push origin <topic-branch-name>
   ```

8. 알아보기 쉬운 제목과 설명을 붙여서 [풀 리퀘스트를 보냅니다.](https://help.github.com/articles/using-pull-requests/)


## 프로젝트에 기여함으로써 동의하게 되는 내용

이 프로젝트의 저장소로 풀 리퀘스트를 보낸다는 것은, 이 프로젝트 관리자가 여러분의 저작 내용을
[크리에이티브 커먼즈 저작자표시-비영리-동일조건변경허락 3.0 Unported 라이선스](http://creativecommons.org/licenses/by-nc-sa/3.0/deed.ko)에 따라
공개하고 사용허가를 한다는 것에 동의한다는 의미가 됩니다.

모든 PHP The Right Way 출판물은 아래에 나열된 출판 방식/위치와 미래에 추가될 수 있는
다른 방식/위치를 포함하여 동일한 내용과 동일한 라이선스에 따라 사용 허가됩니다. 

* [phptherightway.com](http://phptherightway.com)
* phptherightway.com 을 다른 언어로 번역한 출판물
* [LeanPub: PHP The Right Way](https://leanpub.com/phptherightway/)
* "LeanPub: PHP The Right Way"을 다른 언어로 번역한 출판물

모든 내용은 무료이며 계속 무료로 제공될 것입니다.

## 프로젝트 기여를 위한 문서 서식 가이드라인

1. 미국 영어 철자를 사용합니다. (*메인 프로젝트인 영어판 저장소에 적용되는 이야기*)
2. 스페이스 네 개를 사용하여 들여쓰기를 합니다. 탭을 사용하여 들여쓰기 하지 마십시오.
3. 한 줄 너비는 120글자로 합니다. (역주 : 한국어판의 경우 한 줄 너비를 60자로 쓰려고 합니다.)
4. 예제 코드는 PSR-1 이나 그 이상 버전을 준수해야 합니다.
5. 내용은 [GitHub Flavored Markdown](http://github.github.com/github-flavored-markdown/) 문서 형식으로 작성합니다.
6. Use language agnostic urls when refering to external websites such as the [php.net](http://php.net/urlhowto.php) manual

## 외부 링크 컨텐트 번역 규칙

1. 외부 링크 컨텐트의 번역본은 more 폴더에 저장한다.
2. 파일명은 원문 글 제목으로 하고, 단어와 단어 사이는 하이픈(-)으로 연결한다. 파일명에 사용되는 모든 단어는 대문자로 시작한다.
3. 원래의 링크를 번역본 주소로 바꾸고, 옆에 '[원문]' 이라는 링크를 추가 한다.


### [내장 웹 서버](http://modernpug.github.io/php-the-right-way/#builtin_web_server) 섹션의 예
#### 번역전
````
[내장 웹 서버에 대해서 배우기](http://php.net/features.commandline.webserver)
````


#### 번역후
````
[내장 웹 서버에 대해서 배우기](http://modernpug.github.io/php-the-right-way/more/Built-In-Web-Server.html) [[원문]](http://php.net/features.commandline.webserver)
````

