---
title:   웹 어플리케이션 보안
isChild: true
anchor:  web_application_security
---

## 웹 어플리케이션 보안 {#web_application_security_title}

모든 PHP 개발자가 [웹 응용 프로그램 보안의 기초][4]를 배우는 것은 매우 중요합니다. 광범위한 주제를 몇 가지로 추려보면:

1. 코드와 데이터 분리.
   * 데이터가 코드처럼 실행된다면, SQL Injection, Cross-Site Scripting, Local/Remote File Inclusion 등을 당할 것입니다.
   * 코드가 데이터처럼 노출된다면, you get information leaks (source code disclosure or, in the case of C programs,
     enough information to bypass [ASLR][5]). 정보 유출(소스 코드 노출 혹은 C 프로그램의 경우, [ASLR] [5]을 우회하기에 충분한 정보)이 발생할 것입니다.
2. 어플리케이션 로직.
   * 인증 또는 인가를 빠뜨리는 것.
   * 입력값 검증.
3. 운영 환경.
   * PHP 버전.
   * Third party 라이브러리.
   * 운영체제.
4. 약한 암호화.
   * [Weak random numbers][6].
   * [Chosen-ciphertext attacks][7].
   * [Side-channel information leaks][8].

여러분의 웹 어플리케이션을 뚫으려는 의지를 가지고 준비하고 있는 나쁜 사람들이 있습니다. 그러므로 웹 어플리케이션
보안을 견고하게 미리 준비하는 일이 중요합니다. 운이 좋게도 [The Open Web Application Security Project][1] (OWASP)에
있는 좋은 사람들이 알려져있는 보안 이슈들과 그 대책을 상세하게 정리해 두었습니다. 보안 의식이 있는 개발자라면 반드시
읽어보아야 할 자료입니다.  Padraic Brady의 [Survive The Deep End: PHP Security][3]는 또 하나의 좋은 PHP 웹 어플리케이션 보안 가이드입니다.

* [읽을거리: OWASP Security Guide][2]


[1]: https://www.owasp.org/
[2]: https://www.owasp.org/index.php/Guide_Table_of_Contents
[3]: https://phpsecurity.readthedocs.io/en/latest/index.html
[4]: https://paragonie.com/blog/2015/08/gentle-introduction-application-security
[5]: http://searchsecurity.techtarget.com/definition/address-space-layout-randomization-ASLR
[6]: https://paragonie.com/blog/2016/01/on-design-and-implementation-stealth-backdoor-for-web-applications
[7]: https://paragonie.com/blog/2015/05/using-encryption-and-authentication-correctly
[8]: http://blog.ircmaxell.com/2014/11/its-all-about-time.html

