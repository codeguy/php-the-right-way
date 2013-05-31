---
isChild: true
---

## Testiranje zasnovano na razvoju {#test_driven_development_title}

Sa [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development):

> Testiranje zasnovano na razvoju (TDD) je proces razvoja softvera koji se oslanja na ponavljanje kratkih razvojnih 
krugova: prvo se piše slučaj neispravnog automatizovanog testa koji definiše željeno poboljšanje ili novu funkciju, onda
pravi kod koji će proći test i na kraju refaktoriše novi kod po prihvatljivim standardima. Kent Beck, koji je zaslužan 
za razvoj ili ponovno otkrivanje tehnike, izjavio je 2003 da TDD podstiče jednostavan dizajn i uliva poverenje.

Postoji nekoliko različitih tipova testiranja koje možete koristiti za testiranje vaše aplikacije

### Jedinično testiranje

Jedinično testiranje je programski pristup koji treba da obezbedi da funkcije, klase i metode rade onako kako smo 
očekivali, sa stanovišta načina kako smo ih napravili kroz ceo razvojni krug. Proverom ulaznih i izlaznih vrednosti 
raznovrsnih funkcija i metoda, možete proveriti da li je interna logika ispravna. Korišćenjem zavisnog ubrizgavanja 
(Dependency Injection) i pravljenjem "lažnih" klasa i stubova možete proveriti da li se zavisnosti ispravno koriste radi
još bolje pokrivenosti testa.

Kada se kreira klasa ili funkcija treba da se kreira jedinični test za svako ponašanje koje treba da ima. Na osnovnom 
nivou potrebno je osigurati da će se pojaviti greška ukoliko joj se prosledi loš argument i osigurati da radi ako joj se
prosledi validan argument. Ovo će pomoći da budemo sigurni kada kasnije u razvojnom krugu napravimo promene na toj klasi
ili funkciji da će stare funkcionalnosti nastaviti da rade kako se očekuje. Jedina alternativa ovome je var_dump() u 
test.php, što nije način za izradu aplikacije - manje ili veće.

Druga upotreba jediničnih testova je doprinos otvorenom kodu. Ako umeta da napišete test koji prikazuje neispravnu 
funkcionalnost (tj neuspeh), a onda je popravite, i prikažete da je test prošao, zakrpe će mnogo verovatnije biti 
prihvaćene. Ako startujemo projekat koji prihvata povučene zahteve onda bi ovo trebalo predložiti kao uslov. 

[PHPUnit](http://phpunit.de) je de-fakto frejmvork za testiranje za pisanje jediničnih testova za PHP aplikacije, ali 
postoji nekoliko alternativa
								
* [SimpleTest](http://simpletest.org)
* [Enhance PHP](http://www.enhance-php.com/)
* [PUnit](http://punit.smf.me.uk/)
* [atoum](https://github.com/atoum/atoum)

### Intergraciono testiranje

Sa [Wikipedia](http://en.wikipedia.org/wiki/Integration_testing):

> Integraciono testiranje (ponekad zvano Integracija i Testiranje, skraćeno "I&T") je faza u testiranju softvera u kojoj
su individualni moduli softvera ukombinovani i testiraju se kao grupa. Radi se posle testiranja jedinice a pre 
validacionog testiranja. Integraciono testiranje kao ulaz prima module koji su bili testirani kao jedinica, i grupiše ih
u veće agregate, primenjuje testove definisane u planu integracionog testa za one agregate, i isporučuje kao izlaz 
integrisani sistem spreman za sistemsko testiranje.

Mnogi od sličnih alata koji se koriste za jedinično testiranje mogu se koristiti za integraciono testiranje jer se 
baziraju na skoro istim principima.

### Funkcionalno testiranje

OVDE SAM STALA

Ponekad znano i kao usvojeno testiranje, funkcionalno testiranje se sastoji od korišćenja alata da bi kreirali automatske testove koji u stvarnosti koriste aplikaciju umesto samo verifikacije individualnih jedinica koda koji se ponašaju ispravno i individualnih jedinica koje govore svakoj ispravno. Ovi alati tipično rade koristeći prave podatke i simuliraju stvarne korisnike aplikacije.

#### Alati za funkcionalno testiranje

* [Selenium](http://seleniumhq.com)
* [Mink](http://mink.behat.org)
* [Codeception](http://codeception.com) je potpuni frejmvork za testiranje koji uključuje usvojene alate za testiranje
