---
isChild: true
anchor:  building_and_deploying_your_application
---

## Building and Deploying your Application {#building_and_deploying_your_application_title}

Wenn Du manuelle Datenbankschemaänderungen vornimmst oder Deine Tests manuell ausführst,
bevor Du Deine Dateien (manuell) aktualisierst, denke noch einmal darüber nach!
Mit jeder zusätzlichen manuellen Aufgabe, die für die Bereitstellung einer neuen App-Version erforderlich ist, steigt das Risiko potenziell schwerwiegender Fehler.
Ob einfaches Update, umfassender Build-Prozess oder kontinuierliche Integrationsstrategie – [Build-Automatisierung][buildautomation] ist Dein bester Freund.

Zu den Aufgaben, die Du möglicherweise automatisieren möchtest, gehören:

* Dependency management (Abhängigkeitsverwaltung)
* Compilation, minification of your assets (Zusammenstellung, Minimierung von Assets)
* Running tests (Ausführen von Tests)
* Creation of documentation (Erstellung von Dokumentationen)
* Packaging
* Deployment


### Deployment Tools (Bereitstellungstools)

Bereitstellungstools können als eine Sammlung von Skripten beschrieben werden, die allgemeine Aufgaben der Softwarebereitstellung übernehmen.
Das Bereitstellungstool ist kein Teil Deiner Software, sondern wirkt von 'außen' auf Deine Software ein.

Es gibt viele Open-Source-Tools, die Dich bei der Build-Automatisierung und Bereitstellung unterstützen.
Einige sind in PHP geschrieben, andere nicht. Das sollte Dich nicht davon abhalten, sie zu nutzen, wenn sie für die jeweilige Aufgabe besser geeignet sind. Hier einige Beispiele:

[Phing] steuert Deinen Packaging-, Bereitstellungs- und Testprozess aus einer XML-Build-Datei heraus. 
Phing (basierend auf [Apache Ant]) bietet eine Vielzahl von Aufgaben, die üblicherweise für die Installation oder Aktualisierung einer Webanwendung erforderlich sind,
und kann um zusätzliche, in PHP geschriebene, benutzerdefinierte Aufgaben erweitert werden.
Es ist ein solides und robustes Tool und existiert schon seit langer Zeit.
Aufgrund der Art und Weise, wie es mit der Konfiguration (XML-Dateien) umgeht, könnte es jedoch etwas altmodisch wirken.

[Capistrano] ist ein System für fortgeschrittene Programmierer, um Befehle strukturiert und wiederholbar auf einem oder mehreren Remote-Rechnern auszuführen.
Es ist für die Bereitstellung von Ruby-on-Rails-Anwendungen vorkonfiguriert, Du kannst damit jedoch auch PHP-Systeme erfolgreich deployen.
Die erfolgreiche Nutzung von Capistrano setzt fundierte Kenntnisse in Ruby und Rake voraus.

[Ansistrano]  umfasst mehrere [Ansible-Rollen](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html) zur 
einfachen Verwaltung des Bereitstellungsprozesses (Deployment und Rollback) für Skriptanwendungen wie PHP, Python und Ruby. 
Es handelt sich um eine Ansible-Portierung für [Capistrano]. Es wird bereits von zahlreichen PHP-Unternehmen eingesetzt.

[Deployer] ist ein in PHP geschriebenes Deployment-Tool. Es ist einfach und funktional.
Zu den Funktionen gehören die parallele Ausführung von Aufgaben, atomares Deployment und die Wahrung der Serverkonsistenz.
Es stehen Rezepte für gängige Aufgaben für Symfony, Laravel, Zend Framework und Yii zur Verfügung. 
Younes Rafies Artikel [Easy Deployment of PHP Applications with Deployer][phpdeploy_deployer] bietet ein hervorragendes Tutorial zur Bereitstellung Deiner Anwendung mit diesem Tool.

[Magallanes] ist ein weiteres in PHP geschriebenes Tool mit einfacher Konfiguration in YAML-Dateien.
Es unterstützt mehrere Server und Umgebungen, atomare Bereitstellung und verfügt über einige integrierte Aufgaben, die Du für gängige Tools und Frameworks nutzen kannst.

#### Further reading:

* [Automate your project with Apache Ant][apache_ant_tutorial]
* [Deploying PHP Applications][deploying_php_applications] - kostenpflichtiges Buch zu Best Practices und Tools für das PHP-Deployment.

### Server Provisioning (Serverbereitstellung)

Die Verwaltung und Konfiguration von Servern kann bei vielen Servern eine gewaltige Aufgabe sein.
Es gibt Tools, mit denen Du Deine Infrastruktur automatisieren und sicherstellen kannst,
dass Du die richtigen Server hast und diese richtig konfiguriert sind.
Diese lassen sich häufig in die Verwaltung von Instanzen größerer Cloud-Hosting-Anbieter (Amazon Web Services, Heroku, DigitalOcean usw.) integrieren, 
was die Skalierung einer Anwendung erheblich erleichtert.

[Ansible] ist ein Tool zur Verwaltung Deiner Infrastruktur über YAML-Dateien. 
Der Einstieg ist einfach und ermöglicht die Verwaltung komplexer und umfangreicher Anwendungen. 
Es gibt eine API zur Verwaltung von Cloud-Instanzen und ermöglicht deren Verwaltung über ein dynamisches Inventar mithilfe bestimmter Tools.

[Puppet] ist ein Tool mit eigener Sprache und eigenen Dateitypen zur Verwaltung von Servern und Konfigurationen. 
Es kann in einem Master/Client-Setup oder im "master-less" Modus verwendet werden. 
Im Master/Client-Modus fragen die Clients in festgelegten Intervallen die zentralen Master nach neuen Konfigurationen ab und aktualisieren sich bei Bedarf selbst. 
Im Master-losen Modus kannst Du Änderungen an Deine Knoten per push übertragen.

[Chef] ist ein leistungsstarkes Ruby-basiertes Systemintegrations-Framework,
mit dem Du Deine gesamte Serverumgebung oder virtuelle Boxen erstellen kannst.
Es lässt sich über den Dienst OpsWorks gut in Amazon Web Services integrieren.


#### Further reading:

* [An Ansible Tutorial][an_ansible_tutorial]
* [Ansible for DevOps][ansible_for_devops] - kostenpflichtiges Buch zu allem rund um Ansible
* [Ansible for AWS][ansible_for_aws] - kostenpflichtiges Buch zur Integration von Ansible und Amazon Web Services
* [Dreiteilige Blogserie zum Bereitstellen einer LAMP-Anwendung mit Chef, Vagrant und EC2][chef_vagrant_and_ec2]
* [Chef Cookbook zum Installieren und Konfigurieren von PHP und dem PEAR-Paketverwaltungssystem][Chef_cookbook]
* [Chef Video-Tutorialreihe][Chef_tutorial]

### Continuous Integration (Kontinuierliche Integration)

> Continuous Integration is a software development practice where members of a team integrate their work frequently,
> usually each person integrates at least daily — leading to multiple integrations per day. Many teams find that this
> approach leads to significantly reduced integration problems and allows a team to develop cohesive software more
> rapidly.

*-- Martin Fowler*

There are different ways to implement continuous integration for PHP. [Travis CI] has done a great job of
making continuous integration a reality even for small projects. Travis CI is a hosted continuous integration service.
It can be integrated with GitHub and offers support for many languages including PHP.
GitHub has continuous integration workflows with [GitHub Actions][github_actions].

#### Further reading:

* [Continuous Integration with Jenkins][Jenkins]
* [Continuous Integration with PHPCI][PHPCI]
* [Continuous Integration with PHP Censor][PHP Censor]
* [Continuous Integration with Teamcity][Teamcity]

[buildautomation]: https://wikipedia.org/wiki/Build_automation
[Phing]: https://www.phing.info/
[Apache Ant]: https://ant.apache.org/
[Capistrano]: https://capistranorb.com/
[Ansistrano]: https://ansistrano.com
[phpdeploy_deployer]: https://www.sitepoint.com/deploying-php-applications-with-deployer/
[Chef]: https://www.chef.io/
[chef_vagrant_and_ec2]: https://web.archive.org/web/20190307220000/http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/
[Chef_cookbook]: https://github.com/sous-chefs/php
[Chef_tutorial]: https://www.youtube.com/playlist?list=PL11cZfNdwNyNYcpntVe6js-prb80LBZuc
[apache_ant_tutorial]: https://code.tutsplus.com/tutorials/automate-your-projects-with-apache-ant--net-18595
[Travis CI]: https://www.travis-ci.com/
[Jenkins]: https://jenkins.io/
[PHPCI]: https://github.com/dancryer/phpci
[PHP Censor]: https://github.com/php-censor/php-censor
[Teamcity]: https://www.jetbrains.com/teamcity/
[Deployer]: https://deployer.org/
[Magallanes]: https://www.magephp.com/
[deploying_php_applications]: https://deployingphpapplications.com/
[Ansible]: https://www.ansible.com/
[Puppet]: https://puppet.com/
[ansible_for_devops]: https://leanpub.com/ansible-for-devops
[ansible_for_aws]: https://leanpub.com/ansible-for-aws
[an_ansible_tutorial]: https://serversforhackers.com/an-ansible-tutorial
[github_actions]: https://docs.github.com/en/actions
