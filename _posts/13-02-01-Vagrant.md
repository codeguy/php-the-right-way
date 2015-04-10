---
isChild: true
anchor:  vagrant
---

## Vagrant {#vagrant_title}

[Vagrant] helps you build your virtual boxes on top of the known virtual environments and will configure these
environments based on a single configuration file. These boxes can be set up manually, or you can use "provisioning"
software such as [Puppet] or [Chef] to do this for you. Provisioning the base box is a great way to ensure that
multiple boxes are set up in an identical fashion and removes the need for you to maintain complicated "set up"
command lists. You can also "destroy" your base box and recreate it without many manual steps, making it easy to create
a "fresh" installation.

Vagrant는 여러분의 호스트 컴퓨터와 가상 머신 사이에 공유 폴더를 만들어줍니다. 그래서 호스트 컴퓨터에서 파일을 수정하고
가상 머신에서 실행하는 식으로 작업할 수 있습니다.

### 도움되는 내용들

Vargrant 사용을 시작하는데 약간의 도움이 필요하신 분은 아래 서비스들이 유용할 것 같습니다.

- [Rove][Rove]: 흔히 사용되는 Vagrant 빌드를 미리 만들어 둘 수 있게 도와주는 서비스입니다. PHP도 고려되어 있습니다.
프로비저닝은 Chef로 하게 되어 있습니다.
- [Puphpet][Puphpet]: PHP 개발에 사용할 가상 머신을 설정할 수 있는 단순한 GUI를 제공합니다. **매우 PHP에 특화되어
있습니다**. 로컬 가상 머신외에도 클라우드 서비스에 배포하는데에도 사용할 수 있습니다. 프로비저닝은 Puppet으로 하게
되어 있습니다.
- [Protobox][Protobox]: vagrant 를 기반으로 더 상위에 구축된 툴로서 웹 개발을 위한 가상 머신을 설정할 수 있는 웹 GUI를
제공합니다. YAML 문서 하나로 가상 머신에 설치된 모든 것을 제어할 수 있습니다.
- [Phansible][Phansible]: provides an easy to use interface that helps you generate Ansible Playbooks for PHP based projects.


[Vagrant]: http://vagrantup.com/
[Puppet]: http://www.puppetlabs.com/
[Chef]: http://www.opscode.com/
[Rove]: http://rove.io/
[Puphpet]: https://puphpet.com/
[Protobox]: http://getprotobox.com/
[Phansible]: http://phansible.com/
