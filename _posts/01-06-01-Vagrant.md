---
isChild: true
---

## Vagrant {#vagrant_title}

Izvršavanje vaše aplikacije u različitim okruženjima prilikom razvoja i produkcije mogu dovesti do čudnih bagova koji
iskaču kada krenete uživo. Takođe je nezgodno održavati ažurnim različita razvojna okruženja sa istom verzijom za sve
korišćene biblioteke kada radite sa timom programera.

Ako razvijate na Windows-u a objavljujete na Linux-u (ili bilo čemu što nije Windows) ili razvijate u timu, trebalo bi da
razmotrite korišćenje virtuelne mašine. Zvuči varljivo, ali korišćenjem [Vagrant-a][vagrant] možete podesiti
jednostavnu virtuelnu mašinu u samo par koraka. Ovi osnovni boksevi onda mogu da se podese ručno, ili pomoću
"provisioning" softvera kao što je [Puppet][puppet] ili [Chef][chef] koji će ovo uraditi umesto vas. Provisioning
osnovnog boksa je sjajan način da obezbedite da će višestruki boksevi biti podešeni na identičan način i eliminiše
potrebu da održavate komplikovane komandne spiskove za podešavanje. Možete takođe i da "uništite" vaš osnovni boks i da
ga rekonstruišete bez mnogo ručnih koraka, čime olakšavate pravljenje "sveže" instalacije.

Vagrant kreira deljene foldere koji služe za deljenje koda između hosta i virtuelne mašine, što znači da možete da
kreirate i editujete vaše fajlove na host mašini a onda pokrenete kod na virtuelnoj mašini.

### Mala pomoć

Ako vam je potrebna mala pomoć da krenete sa korišćenjem Vagrant-a postoje dva servisa koji mogu biti od koristi:

- [Rove][rove]: servis koji vam omogućava da pre-generišete tipične Vagrant build-ove, PHP između opcija. Provisioning
se radi uz pomoć Chef-a.
- [Puphpet][puphpet]: jednostavan GUI za podešavanje virtuelnih mašina za PHP razvoj. **Izrazito fokusiran na PHP-u**. Osim
lokalnih virtuelnih mašina, takođe se može koristiti za objavljivanje na cloud servisima. Provisioning se radi sa Puppet-om.

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
[rove]: http://rove.io/
[puphpet]: https://puphpet.com/
