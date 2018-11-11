---
title:   웹 어플리케이션 보안
isChild: true
anchor:  web_application_security
---

## 웹 어플리케이션 보안 {#web_application_security_title}

It is very important for every PHP developer to learn [the basics of web application security][4], which can be broken
down into a handful of broad topics:

1. Code-data separation.
   * When data is executed as code, you get SQL Injection, Cross-Site Scripting, Local/Remote File Inclusion, etc.
   * When code is printed as data, you get information leaks (source code disclosure or, in the case of C programs,
     enough information to bypass [ASLR][5]).
2. Application logic.
   * Missing authentication or authorization controls.
   * Input validation.
3. Operating environment.
   * PHP versions.
   * Third party libraries.
   * The operating system.
4. Cryptography weaknesses.
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

