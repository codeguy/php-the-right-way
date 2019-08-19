---
title:   객체 캐시 
isChild: true
anchor:  object_caching
---

## 객체 캐시 {#object_caching_title}

객체(object) 인스턴스 중에 어떤 것을 캐시하는 게 성능 향상에 도움을 줄 때가 있습니다. 불러오는 비용이 큰 데이터나 한
번 데이터를 불러오면 그 뒤로는 별로 바뀔 일이 없는 데이터베이스 호출 같은 것들 말입니다. 객체 캐시 소프트웨어를
사용해서 이런 데이터를 메모리에 보관해두면 다음부터는 아주 빠르게 접근할 수 있습니다. 그래서 상당한 성능 향상을 얻을
수 있고 데이터베이스 접속 횟수가 줄어 데이터베이스 서버의 부담도 줄어듭니다.

인기있는 바이트코드 캐시 도구들은 여러분의 커스텀 데이터 또한 캐시해주는 기능을 가진 경우가 많습니다. 바이트코드 캐시
도구를 사용할만한 이유가 또 있었네요. APCu, XCache, WinCache 모두 메모리 캐시에 여러분의 데이터를 보관할 수 있는 API를
제공합니다.

가장 널리 사용되고 있는 메모리 객체 캐시 도구는 APCu와 memcached입니다. APCu는 객체 캐싱을 위한 훌륭한 선택지입니다.
여러분의 데이터를 캐시할 수 있는 간단한 API를 제공하는데다 설치와 설정도 쉽습니다. 딱하나 단점이라면 설치된 서버로만
범위가 한정된다는 것입니다. 반면에 memcached는 별도의 서버에 설치해서 네트워크로 접근할 수도 있습니다. 그래서 아주
빠른 데이터 저장소를 중앙에 두고 여러 시스템에서 데이터를 가져다 쓰는 구조를 만들 수도 있습니다.

PHP를 CGI나 FastCGI 형태로 실행할 때에는 모든 PHP 워커 프로세스가 개별적인 캐시를 가집니다. 그래서 APCu가 캐시한
데이터는 서로 다른 워커 프로세스 사이에 공유될 수 없습니다. 만약 공유해야하는 경우라면 memcached 를 사용해야 합니다.
memcached는 별도의 프로세스로 동작하기 때문입니다.

보통 접근 속도 측면에서는 APCu가 memcached에 비해 더 나은 성능을 보여주지만, memcached가 확장성 측면에서는 더
낫습니다. 여러분의 어플리케이션을 여러 서버에 분산해서 사용한다든지 memcached의 고급 기능들을 활용할 필요가 없다면
아마도 APCu가 가장 좋은 선택일 것입니다.

APCu를 사용하는 예제 코드입니다.

{% highlight php %}
<?php
// 캐시에 'expensive_data'가 저장되어 있는지 확인한다
$data = apc_fetch('expensive_data');
if ($data === false) {
    // 캐시에 저장된 데이터가 없다. 저장했다가 나중에 사용하자.
    apc_add('expensive_data', $data = get_expensive_data());
}

print_r($data);
{% endhighlight %}

PHP 5.5보다 낮은 버전에서는 APC가 객체 캐시와 바이트코드 캐시 기능을 모두 제공했습니다. 하지만 PHP 5.5부터는 
내장된 바이트코드 캐시(OPcache)가 있으므로, APC 프로젝트는 APC의 객체 캐시 기능만을 분리하여 제공하는 APCu라는
프로젝트로 변화하였습니다.

### 인기있는 객체 캐시 도구들에 대해서 더 알아보기

* [APCu](https://github.com/krakjoe/apcu)
* [APC Functions](https://secure.php.net/ref.apc)
* [Memcached](https://memcached.org/)
* [Redis](https://redis.io/)
* [XCache APIs](https://xcache.lighttpd.net/wiki/XcacheApi)
* [WinCache Functions](https://secure.php.net/ref.wincache)
