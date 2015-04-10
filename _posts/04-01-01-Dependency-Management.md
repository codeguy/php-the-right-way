---
title:  의존성 관리 
anchor: dependency_management
---

# 의존성 관리 {#dependency_management_title}

여러분이 선택하여 사용할 수 있는 수많은 라이브러리, 프레임워크, 컴포넌트가 존재하고 있습니다. 여러분의 프로젝트에서는
그 많은 것들 중에서 몇 가지를 사용하게 될 것입니다. 프로젝트의 의존성을 관리해야 할 필요가 생기는 것이죠. 얼마전까지도
PHP에는 프로젝트 의존성을 관리할 좋은 방법이 없었습니다. 여러분이 스스로 의존성을 관리한다고 하더라도 autoloader에
대해 신경을 써야만 합니다. 하지만 이제는 그러지 않아도 됩니다.

요즘은 [Composer]와 [PEAR]라는 패키지 관리 시스템이 주로 사용되고 있습니다. Composer는 PHP를 사용하는데 있어 주된
패키지 관리자입니다. 그러나 옛날에는 PEAR가 그 역할을 꿰차고 있었습니다.
Knowing what PEAR is will be a good idea as you may still find references to it, even if you never use it.

[Composer]: #composer_and_packagist
[PEAR]: #pear
