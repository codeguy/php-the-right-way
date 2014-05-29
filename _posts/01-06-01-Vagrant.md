---
isChild: true
---

## Vagrant {#vagrant_title}

Pokretanje vaše aplikacije u različitim okruženjima tokom razvoja i završene verzije programa, može dovesti do čudnih 
bagova koji počnu da se pojavljuju kada vaša aplikacija krene da radi "uživo" u novom okruženju. Takođe je nezgodno 
održavati iste verzije biblioteka između različitih razvojnih okruženja kada radite sa timom programera. 

Ako razvijate aplikaciju na _windows_-u, a pokrećete aplikaciju javno na _linux_-u (ili bilo kojem sistemu koji nije 
_windows_), ili programirate u timu, trebalo bi da razmislite o korišćenju virtualne mašine. Ovo zvuči nezgodno, ali 
uz pomoć [Vagrant-a][vagrant] možete podesiti jednostavnu virtualnu mašinu u samo nekoliko koraka. Te osnovne "kutije", 
posle toga mogu biti podešene ručno, ili uz pomoć određene vrste _software_-a za "nabavljanje i podešavanje", kao što su 
[Puppet][puppet] ili [Chef][chef]. Korišćenje navedenih programa je odličan način da obezbedite da su sve mašine 
podešene identično i uklanja potrebu da vi održavate komplikovane liste komandi za instalaciju potrebnih programa 
i biblioteka. Takođe možete i "uništiti" vašu "kutiju" i ponovo je kreirati uz veoma mali broj komandi, samim tim čin 
kreiranja sveže "kutije" je mnogo olakšan.

Vagrant pravi deljene direktorijume između domaćin i virualne mašine koji se koriste za deljenje koda, što znači da 
možete da pravite i modifikujete fajlove na domaćin mašini, a da ih izvršavate na virtuelnoj.

### Mala pomoć

Ako vam treba mala pomoć oko korišćenja _vagrant_-a, postoje dva servisa koja vam mogu biti od koristi:

- [Rove][rove]: servis koji vam dozvoljava da generišete tipične _vagrant_ _build_-ove, PHP među opcijama. Koristi 
  _Chef_ za nabavljanje i podešavanje paketa.
- [Puphpet][puphpet]: jednostavan GUI za podešavanje virtualnih mašina za razvoj sa PHP-om. **PHP orijentisan**. Osim za
  lokalne virtualne mašine, može se koristiti i za pokretanje u "oblak" serverima. Koristi _Puppet_ za nabavljanje i 
  podešavanje paketa.

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
[rove]: http://rove.io/
[puphpet]: https://puphpet.com/
