---
title: Gradnja i pokretanje vaše aplikacije
isChild: true
---

## Gradnja i pokretanje vaše aplikacije {#build_title}

Ako ručno pravite izmene vaše baze podataka, ili pokrećete vaše testove ručno pre nego što ažurirate vaše fajlove (ručno), razmislite ponovo! Sa svakim dodatnim ručnim zadatkom prilikom pokretanja nove verzije vaše aplikacije, šansa za fatalnim greškama se uvećava. Bilo da se radi o jednostavnom ažuriranju, sveobuhvatni proces gradnje, ili čak strategija stalne integracije, [automatizacija gradnje](http://en.wikipedia.org/wiki/Build_automation)je vaš prijatelj.

Neki od zadataka koje bi trebalo da automatizujete:

* Upravljanje zavisnostima
* Kompajliranje i umanjivanje vaših aseta
* Pokretasnje testova
* Kreiranje dokumentacije
* Pakovanje
* Pokretanje


### Alati za automatizaciju gradnje

Alati za gradnju mogu se opisati kao kolekcija skripti koje obavljaju česte zadatke prilikom _software deployment_a-a. Alat za gradnju nije deo vašeg projekta, on vrši radnje van njega.

Postoje mnogi alati otvorenog koda koji vam mogu pomoći sa automatizacijom gradnje, neki su napisani u PHP-u, a neki nisu. To ne bi trebalo da vas spreči da ih koristite, ako su bolje opremljeni za određen posao. Evo par primera:

[Phing](http://www.phing.info/) je najlakši način da krenete sa automatizcijom u PHP svetu. Sa Phing-om možete da kontrolišete vaše pakovanje, pokretanje ili testiranje sa jednostavnim XML fajlom. Phing (koji je zasnovan na [Apache Ant-u](http://ant.apache.org/)) pruža bogat skup zadataka koji su obično potrebni da biste instalirali ili ažurirali aplikaciju, može se i proširiti sa dodatnim zadacima napisanim u PHP-u.

[Capistrano](https://github.com/capistrano/capistrano/wiki) je sistem za *srednje-do-naprednih programera* da izvrše komande u struktuiranom, ponovljivom načinu na jednoj ili više udaljenih mašina. Prekonfiguirisan je da pokreće RoR aplikacije, mada ljudi uspešno pokreću PHP sistema sa njim. Uspešno korišćenje _Capistano_-a zavisi od poznavanja rubija i _Rake_-a.

Blog post Dave Gardner-a [PHP pokretanje sa Capistrano-om](http://www.davegardner.me.uk/blog/2012/02/13/php-deployment-with-capistrano/) 
je dobar početak za PHP developere koji su zainteresovani za _Capistrano_.

[Chef](http://www.opscode.com/chef/) je više _framework_ za pokretanje. To je veoma moćan _framework_ za rubi sistem integraciju koji ne samo da pokreće vašu aplikaciju, već može da izgradi čitavo server okruženje ili virtuelne mašine.

Chef resursi za PHP developere:

* [Blog serija iz tri dela,o pokretanju LAMP aplikacije sa Chef-om, Vagrant-om i EC2](http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/)
* [Chef kuvar koji instalira i podešava PHP 5.3 i PEAR menadžerski sistem](https://github.com/opscode-cookbooks/php)

Za dalje čitanje:

* [Automatizujte gradnju vašeg projekta sa Apache Ant-om](http://net.tutsplus.com/tutorials/other/automate-your-projects-with-apache-ant/)
* [Maven](http://maven.apache.org/), _framework_ za gradnju zasnovan na Ant-u i [kako da ga koristite sa PHP-om](http://www.php-maven.org/)

### Neprekidna integracija

> Neprekidna integracija je praksa u razvoju _software_-a kada članovi tima često integrišu svoj rad, 
> Često svaka osoba integriše barem jednom dnevno — što dovodi do više inegracija u toku jednog dana. Mnogi timovi misle da ovaj način značajno smanjuje probleme vezane za integraciju i dozvoljava timu da razvija kohezivan _software_ mnogo brže. 

*-- Martin Fowler*

Postoje različiti načini da se neprekidna integracija implementira u PHP. Skoro [Travis CI](https://travis-ci.org/) je uradio odličan posao da omogući neprekidnu integraciju i malim projektima. Travis CI je hostovan servis za neprekidnu integraciju koji uslužuje zajednicu otvorenog koda. Integrisan je sa GitHub-om i nudi podršku za mnoge jezike uključujući PHP.

Za dalje čitanje:

* [Neprekidna integracija sa Jenkins-om](http://jenkins-ci.org/)
* [Neprekidna integracija sa PHPCI](http://www.phptesting.org/)
* [Neprekidna integracija sa Teamcity](http://www.jetbrains.com/teamcity/)
