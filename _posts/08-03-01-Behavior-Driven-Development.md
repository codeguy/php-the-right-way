---
isChild: true
---

## Razvoj zasnovano na ponašanju {#behavior_driven_development_title}

Postoje dva različita tipa razvoja zasnovana na ponašanju (BDD): SpecBDD i StoryBDD. SpecBDD je fokusiran na tehničko 
ponašanje tj na kod, dok je StoryBDD fokusiran na logičko ponašanje ili ponašanje karakteristika ili interakcije. PHP ima 
frejmvorkove za oba tipa BDD. 

Kod StoryBDD piše se lako čitljiv sadržaj čoveku koji opisuje ponašanje aplikacije. Ovaj sadržaj može se pokrenuti kao 
aktuelni test vaše aplikacije. Frejvork koji se koristi u PHP aplikacijama za StoryBDD je Behat, koji je inspirisan Rubi
[Cucumber](http://cukes.info/) projektom i implementira Gherkin DSL za opis ponašanja karakteristika.

Sa SpecBDD pišu se specifikacije koje opisuju kako kod u stvarnosti treba da se ponaša. Umesto testiranja funkcije ili 
metode, opisuje se kako bi funkcija ili metod trebalo da se ponašaju. PHP nudi PHPSpec frejmvork za ovu svrhu. Ovaj 
frejmvork je inspirisan [RSpec projektom](http://rspec.info/) za Rubi.

### BDD linkovi    

* [Behat](http://behat.org/), StoryBDD frejmvork za PHP, inspirisan Rubijevim [Cucumber](http://cukes.info/) projektom;
* [PHPSpec](http://www.phpspec.net/), SpecBDD frejmvork PHP, inspirisan Rubijevim [RSpec](http://rspec.info/) projektom;
* [Codeception](http://www.codeception.com) je potpuni frejmvork za testiranje koji koristi BDD principe.
