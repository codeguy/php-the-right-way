---
title:   가상서버 또는 전용서버
isChild: true
anchor:  virtual_or_dedicated_servers
---

## 가상서버 또는 전용서버 {#virtual_or_dedicated_servers_title}

시스템 관리에 이미 익숙하거나 배우고 싶은 생각이 있다면 가상 서버나 전용 서버를 사용하는 것이 좋겠습니다.
어플리케이션의 운영 환경에 대한 모든 것을 직접 조절할 수 있으니까요.

### nginx와 PHP-FPM

PHP는 내장된 FastCGI Process Manager (FPM) 덕분에 [nginx]에서 아주 잘 동작합니다. nginx('엔진 엑스'라고 읽습니다)는
가볍고 아주 빠른 웹서버입니다. Apache에 비해 더 적은 메모리를 사용하고, 더 많은 수의 요청을 동시에 처리할 수 있습니다.
메모리를 충분히 확보할 수 없는 가상 서버에서라면 이러한 특징이 더 중요합니다.

* [더 읽을거리: nginx][nginx]
* [더 읽을거리: PHP-FPM][phpfpm]
* [더 읽을거리: setting up nginx and PHP-FPM securely][secure-nginx-phpfpm]

### Apache와 PHP

PHP와 Apache는 함께한 역사가 아주 깁니다. Apache는 설정으로 변화할 수 있는 범위가 아주 넓고 기본 기능을 확장해주는 수
많은 [모듈들][apache-modules]이 있습니다. 여러 어플리케이션이 공유해서 사용하는 서버로서는 가장 많이 사용하는
서버이기도 하고, WordPress 같은 오픈소스 어플리케이션이나 PHP 프레임워크를 설치하기에도 쉽습니다. 하지만 nginx에
비교하면 기본적으로 Apache가 더 많은 리소스를 사용하고, 처리할 수 있는 동시접속 수도 적습니다.

PHP를 위한 다양한 설정을 Apache에서 할 수 있습니다. 공통적으로 가장 많이 사용하고 쉽게 할 수 있는 설정은 mod_php5
모듈을 사용하는 [prefork MPM] 방식입니다. 메모리 활용이 가장 효율적인 선택은 아니지만 가장 쉽게 어플리케이션을
설치하여 동작시킬 수 있습니다. 시스템과 서버 관리 측면을 너무 깊이 파고들고 싶지 않다면 이 방식이 가장 좋습니다.
mod_php5 모듈을 사용한다면 prefork MPM도 반드시 사용해야 한다는 것을 기억하세요.

다른 방법으로, Apache 로부터 성능과 안정성을 더 짜내고 싶다면 nginx에서와 같이 FastCGI를 사용하는 방법이 있습니다.
[worker MPM]이나 [event MPM]을 mod_fastcgi나 mod_fcgid 모듈과 함께 사용하는 것입니다. 앞에서 얘기한 방식이 비하면
메모리 측면에서도 현저하게 효율적이고 속도도 더 빠르긴 하지만 설정에는 손이 더 많이 갑니다.

If you are running Apache 2.4 or later, you can use [mod_proxy_fcgi] to get great performance that is easy to setup.

* [더 읽을거리: Apache][apache]
* [더 읽을거리: Multi-Processing Modules][apache-MPM]
* [더 읽을거리: mod_fastcgi][mod_fastcgi]
* [더 읽을거리: mod_fcgid][mod_fcgid]
* [Read more on mod_proxy_fcgi][mod_proxy_fcgi]
* [Read more on setting up Apache and PHP-FPM with mod_proxy_fcgi][tutorial-mod_proxy_fcgi]


[nginx]: https://nginx.org/
[phpfpm]: https://secure.php.net/install.fpm
[secure-nginx-phpfpm]: https://nealpoole.com/blog/2011/04/setting-up-php-fastcgi-and-nginx-dont-trust-the-tutorials-check-your-configuration/
[apache-modules]: https://httpd.apache.org/docs/2.4/mod/
[prefork MPM]: https://httpd.apache.org/docs/2.4/mod/prefork.html
[worker MPM]: https://httpd.apache.org/docs/2.4/mod/worker.html
[event MPM]: https://httpd.apache.org/docs/2.4/mod/event.html
[apache]: https://httpd.apache.org/
[apache-MPM]: https://httpd.apache.org/docs/2.4/mod/mpm_common.html
[mod_fastcgi]: https://blogs.oracle.com/opal/entry/php_fpm_fastcgi_process_manager
[mod_fcgid]: hhttps://httpd.apache.org/mod_fcgid/
[mod_proxy_fcgi]: https://httpd.apache.org/docs/current/mod/mod_proxy_fcgi.html
[tutorial-mod_proxy_fcgi]: https://serversforhackers.com/video/apache-and-php-fpm
