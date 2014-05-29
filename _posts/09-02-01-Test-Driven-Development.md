---
title: Razvoj vođen testiranjem
isChild: true
---

## Razvoj vođen testiranjem {#test_driven_development_title}

Sa [Wikipedije](http://en.wikipedia.org/wiki/Test-driven_development):

> Razvoj vođen testiranjem (TDD) je proces razvoja _software_-a koji se oslanja na ponavljanju veoma kratkih razvojnih ciklusa: prvo programer napiše padajući automatizovan test slučaj koji definiše željeno poboljšanje ili novu funkciju, onda napiše kod da bi prošao taj test i na kraju refaktoriše taj kod da zadovolji prihvaćen standard. Kent Beck, kome se pripisuje izumevanje ili "ponovno otkrivanje" ove tehnike, izjavio je 2003 da TDD ohrabruje jedostavan dizajn i uliva poverenje.

Postoji više različitih tipova testiranja koje možete da odradite za vašu aplikaciju.

### Unit testiranje

Unit testiranje je programski pristup kojim se obezbeđuje da funkcije, klase i metode rade onako kako očekujete, od trenutka kada ih napišete pa sve kroz razvojni ciklus. Proveravanjem vrednosti koje ulaze i izlaze iz različitih funkcija i metoda, možete se uveriti da unutrašnja logika radi kako treba. Koristeći ubrizgavanje zavisnosti i pisanjem "mock" klasa i stabova možete se uveriti da se zavisnosti ispravno koriste za još bolje pokriće testovima.

Kada kreirate klasu ili funkciju trebalo bi da kreirate unit test za svaki osobinu koju mora da ima. Na najosnovnijem nivou morate se uveriti da izbacuje grešku kada prosledite loše argumente i da se uverite da radi ako prosledite ispravne argumente. Time ćete se osigurati da kada napravite izmene ta klasa ili funkcija, ili kasnije u razvojnom ciklusu, stara funkcionalnost nastavi da radi onanko kako je očekivano. Jedina alternativa ovome bi bilo korišćenje var_dump() funkcije u test.php, ali to nije dobar način za pravljenje aplikacija, bilo velikih ili malih.

Druga namena za unit testove je doprinošenju zajednici otvorenog koda. Ako možete da napišete test koji može da pokaže pokvarenu funkcionalnost, onda ga popravite, i pokažete da test prolazi, zakrpe će biti prihvaćene sa mnogo većom verovatnoćom. Ako vi vodite projekat koji prihvata "pull" zahteve, onda biste trebalo to da predložite kao uslov. 


[PHPUnit](http://phpunit.de) je najpoznatiji testing _framework_ za pisanje unit testova za aplikacije, ali postoji nekoliko alternativa

* [SimpleTest](http://simpletest.org)
* [Enhance PHP](http://www.enhance-php.com/)
* [PUnit](http://punit.smf.me.uk/)
* [atoum](https://github.com/atoum/atoum)

### Testiranje integracije

Sa [Wikipedije](http://en.wikipedia.org/wiki/Integration_testing):

> Testiranje uklapanja je faza u testiranju _software_-a u kome se individualni _software_ moduli kombinuju i testiraju kao grupa. Dešava se posle unit testiranja i pre validacionog testiranja. Testiranje uklapanja uzima module unosa, koji su bili unit testirani, grupiše ih u veće grupe, primeni testove koji su definisani u test planu, i na kraju dostavi kao svoj izlaz uklopljeni sistem spreman za sistemsko testiranje.

Mnogi od alata koji se koriste za unit testiranje se mogu koristiti za testiranje integracije, jer imaju slične principe.

### Funkcionalno testiranje

Funckionalno testiranje se sastoji od alata koji kreiraju automatizovano testiranje koje zapravo koriste vašu aplikaciju, a ne samo delove vašeg koda da bi se uverili da aplikacija kao celina radi ono zašta je predviđena. Ovi alati obično rade koristeći prave podatke, i simulirajući prave korisnike aplikacije. 

#### Alati za funkcionalno testiranje

* [Selenium](http://seleniumhq.com)
* [Mink](http://mink.behat.org)
* [Codeception](http://codeception.com) Je pun frejmvork za testiranje koji uključuje i alate za funk. testiranje
* [Storyplayer](http://datasift.github.io/storyplayer)  Je pun frejmvork za testiranje koji ima podršku za kreiranje i brisanje okruženja za testiranje
