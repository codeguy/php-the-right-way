---
isChild: true
anchor:  vagrant
---

## Vagrant {#vagrant_title}

[Vagrant]는 간단한 설정 파일 하나만 있으면, VMware 등 잘 알려져 있는 가상 환경에 가상 머신을 만들어 줍니다. 이렇게
만든 깨끗한 가상 머신에서 출발하여 수작업으로 환경을 설정할 수도 있고, [Puppet][puppet]이나 [Chef][chef]와 같은
"프로비저닝(provisioning)" 도구를 사용하여 가상 머신을 설정할 수도 있습니다.

프로비저닝 도구를 사용하면 여러개의 기본 가상 머신을 동일한 방식으로 설정할 수 있습니다. 또한 복잡한 "초기 설정"
커맨드 목록을 직접 관리하지 않아도되어 편리합니다. 그리고 기본 가상 머신을 "파괴"하고 "깨끗한" 상태로 새로 만드는
작업도 간단히 할 수 있게 도와줍니다.

Vagrant는 여러분의 호스트 컴퓨터와 가상 머신 사이에 공유 폴더를 만들어줍니다. 그래서 호스트 컴퓨터에서 파일을 수정하고
가상 머신에서 실행하는 식으로 작업할 수 있습니다.

### 도움되는 내용들

Vargrant 사용을 시작하는데 약간의 도움이 필요하신 분은 아래 서비스들이 유용할 것 같습니다.

- [Puphpet][Puphpet]: PHP 개발에 사용할 가상 머신을 설정할 수 있는 단순한 GUI를 제공합니다. **매우 PHP에 특화되어
있습니다**. 로컬 가상 머신외에도 클라우드 서비스에 배포하는데에도 사용할 수 있습니다. 프로비저닝은 Puppet으로 하게
되어 있습니다.
- [Protobox][Protobox]: Vagrant를 기반으로 더 상위에 구축된 툴로서 웹 개발을 위한 가상 머신을 설정할 수 있는 웹 GUI를
제공합니다. YAML 문서 하나로 가상 머신에 설치된 모든 것을 제어할 수 있습니다.
- [Phansible][Phansible]: PHP를 기반으로 한 프로젝트를 위한 Ansible Playbooks 생성을 도와주는 사용하기 쉬운
인터페이스를 제공합니다.


[Vagrant]: https://www.vagrantup.com/
[Puppet]: https://puppet.com/
[Chef]: https://www.chef.io/
[Rove]: http://rove.io/
[Puphpet]: https://puphpet.com/
[Protobox]: https://www.getprotobox.com/
[Phansible]: http://phansible.com/
