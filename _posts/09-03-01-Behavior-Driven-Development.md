---
title: Razvoj vođen ponašanjem
isChild: true
---

## Razvoj vođen ponašanjem {#behavior_driven_development_title}

Postoje dva različita razvoja vođena ponašanjem (BDD): SpecBDD and StoryBDD. SpecBDD se fokusira na tehničko ponašanje koda, dok se StoryBDD fokusira na biznis ili ponašanje mogućnosti i interakcija. PHP ima _framework_ za oba načina BDD-a.

Sa StoryBDD, vi pišete priče (koje ljudsko biće može da razume) koje opisuje vašu aplikaciju. Ove priče se onda mogu pokrenuti ka pravi testovi. _Framework_ korišćen za StoryBDD se zove Behat, inspirisan je rubijevim [Cucumber](http://cukes.info/) projektom i implementira Gherkin DSL za opisivanje ponašanja.

Sa SpecBDD, vi pišete specifikaciju koja opisuje kako vaš kod treba da se ponaša. Umesto da testira funkciju ili metod, vi opisujete kako ta funk. ili metoda treba da se ponašaju. PHP nudi PHPSpec _framework_ za tu namenu, inspirisan [RSpec projektom](http://rspec.info/) za rubi.

### BDD linkovi

* [Behat](http://behat.org/), StoryBDD _framework_ za PHP, inspirisan rubijevim [Cucumber](http://cukes.info/) projektom;
* [PHPSpec](http://www.phpspec.net/), SpecBDD _framework_ za PHP, inspirisan rubijevim [RSpec](http://rspec.info/) projektom;
* [Codeception](http://www.codeception.com) je pun _framework_ za testiranje koji koristi BDD principe.
