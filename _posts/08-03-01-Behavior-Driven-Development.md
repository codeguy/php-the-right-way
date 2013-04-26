---
isChild: true
---

## Ponašanje zasnovano na testiranju {#behavior_driven_development_title}

Postoje dva različita tipa ponašanja zasnovana na razvoju (BDD): SpecBDD and StoryBDD. SpecBDD je fokusiran na tehničko ponašanje koda, dok je StoryBDD fokusiran na logičko ponašanje ili ponašanje odlika ili interakcije. PHP ima frejmvorkove oba tipa BDD. 

Sa StoryBDD, se piše lako čitljiv sadržaj čoveku koji opisuje ponašanje aplikacije. Ovaj sadržaj
može se pokrenuti kao aktuelni test protiv aplikacije. Frejvork koji se koristi u PHP aplikacijama za StoryBDD
je Behat, koji je inspirisan Rubi [Cucumber](http://cukes.info/) projektom i implementira Gherkin DSL za
opis istaknutih ponašanja.

Sa SpecBDD, se piše specifikacija koja opisuje kako kod u stvarnosti treba da se ponaša. Umesto testiranja
funkcija ili metoda, opisuje se kako funckija ili metod treba da se ponašaju. PHP nudi PHPSpec frejmvork za ovu svrhu. Ovaj frejmvork je inspirisan 
po [RSpec projekat](http://rspec.info/) za Rubi.

### BDD Likovi    

* [Behat](http://behat.org/), StoryBDD frejmvork za PHP, inspirisan Rubijevim [Cucumber](http://cukes.info/) projektom;
* [PHPSpec](http://www.phpspec.net/), SpecBDD frejmvork PHP, inspirisan Rubijevim [RSpec](http://rspec.info/) projektom;
* [Codeception](http://www.codeception.com) je potpuni frejmvork za testiranje koji koristi BDD principe.
