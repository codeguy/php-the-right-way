---
isChild: true
anchor:  web_application_security
---

## Web Application Security {#web_application_security_title}

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

There are bad people ready and willing to exploit your web application. It is important that you take necessary
precautions to harden your web application's security. Luckily, the fine folks at
[The Open Web Application Security Project][1] (OWASP) have compiled a comprehensive list of known security issues and
methods to protect yourself against them. This is a must read for the security-conscious developer. [Survive The Deep End: PHP Security][3] by Padraic Brady is also another good web application security guide for PHP.

* [Read the OWASP Security Guide][2]


[1]: https://www.owasp.org/
[2]: https://www.owasp.org/index.php/Guide_Table_of_Contents
[3]: https://phpsecurity.readthedocs.io/en/latest/index.html
[4]: https://paragonie.com/blog/2015/08/gentle-introduction-application-security
[5]: https://www.techtarget.com/searchsecurity/definition/address-space-layout-randomization-ASLR
[6]: https://paragonie.com/blog/2016/01/on-design-and-implementation-stealth-backdoor-for-web-applications
[7]: https://paragonie.com/blog/2015/05/using-encryption-and-authentication-correctly
[8]: https://blog.ircmaxell.com/2014/11/its-all-about-time.html
