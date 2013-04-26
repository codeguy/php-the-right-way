---
isChild: true
---

## Testiranje zasnovano na razvoju {#test_driven_development_title}

Sa [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development):

> Testiranje zasnovano na razvoju (TDD) je proces razvoja softvera koji se oslanja na ponavljanje kratkih razvojnih krugova: prvo se piše slučaj neispravanog automatizovanog testa to definiše željeno poboljšanje ili novu funkciju, onda proizvedeni kod prolazi test i na kraju refaktoriše novi kod po prihvatljivim standaradima. Kent Beck, koji je zaslužan za razvoj ili otkirvanje tehnike, izjavio je 2003  da TDD podstiče jednostavan dizajn i odiše poverenjem.

Postoji nekoliko različitih tipova testiranja koje možete koristiti za testiranje vaše aplikacije

### Jedinično testiranje

Jedinično testiranje je programski pristup koji treba da obezbedi da funkcije, klasse i metodi rade
onako kako smo očekivali, sa stanovišta načina kako smo ih napravili kroz razvojni krug. Proverom vrednosti
spolja i iznutra raznovrsnih funkcija i metoda, možete proveriti da li je interna logika ispravna.
Korišćenjem zavisnog ubrizgavanja(Dependency Injection) i pravljenjem "lažnih" klasa i stubova moze se proveriti zavisnost i ispravnost korišćenja za bolju pokrivenost testa.

Kada se kreira klasa ili funkcija treba se kreirati jediničan test koji svako ponašanje treba imati. Na bazičnom nivou potrebno je 
osigurati greške ukoliko se šalje loš argument i osigurati da to radi ako se šalje validan argument.
Ovo će pomoći da budemo sigurni da kada kasnije dodje do promene klase ili funkcije u ravojnom krugu
da stare funkcionalnoti nastave da rade kako se očekuje. Jedina alternativa ovome je 
var_dump() u test.php, što nije način za izradu aplikacije - manje ili veće.

Druga upotreba jediničnih testova je doprinosi open sorsu. Ako pišete test koji prikazuje neispravnu
funkcionalnost (npr neuspeh), onda je porpavite, i prikažite da je test prošao, zakrpe će najverovatnije biti prihvaćene.Ako
startujemo projekat koji prihvata povučene zahteve onda bi ovo trebalo predložiti kao uslov. 

[PHPUnit](http://phpunit.de) je de-fakto frejmvork za testiranje za pisanje jediničnih testova za PHP
aplikcije, ali postoji nekoliko alternativa
								
* [SimpleTest](http://simpletest.org)
* [Enhance PHP](http://www.enhance-php.com/)
* [PUnit](http://punit.smf.me.uk/)
* [atoum](https://github.com/atoum/atoum)

### Intergraciono testiranje

Sa [Wikipedia](http://en.wikipedia.org/wiki/Integration_testing):

> Integraciono testiranje (ponekad zvano Integracija i Testiranje, skraćeno "I&T") je faza u testiranju softvera u kojoj su individualni moduli softvera ukombinovani i testiraju kao grupa. To se dešava posle testiranja jedinice i pre validacije testiranja. Integraciono testrianje predstavlja input modula koji su bili testirani kao jedinica, i grupiše ih u veće agregate, primenjuje testove definisane u planu intergracionog testa u one agregate, i isporučuje ih kao output integrisanog sistema spremnog za sistemsko testiranje.

Mnogi od sličnih alata koji se koriste za testriranje jedinice mogu se koristiti za integraciono testiranje na skoro 
iste principe.
Many of the same tools that can be used for unit testing can be used for integration testing as many
of the same principles are used.

### Funkcionalno testiranje

Ponekad znano i kao usvojeno testiranje, funkcionalno testiranje se sastoji od korišćenja alata da bi kreirali 
automacke testove koji u stvarnosti koriste aplikaciju umesto samo vertifikacije indivdualnih jedinica koda koji se
ponašaju ispravno i individualnih jedinice koje govore svakoj ispravno. Ovi alati tipično rade koristeći prave podatke
i simuliraju stvarne korisnike aplikacije.

#### Alzati za funkcionalno testiranje

* [Selenium](http://seleniumhq.com)
* [Mink](http://mink.behat.org)
* [Codeception](http://codeception.com) je potpuni frejmvork za testiranje koji uključuje usvojene alate za testiranje