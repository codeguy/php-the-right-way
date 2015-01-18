---
isChild: true
title: Kontejneri
anchor: containers
---

## Kontejneri (Containers) {#containers_title}

Prva stvar koju treba razumeti u vezi Dependency Injection kontejnera jeste da oni nisu isto što i Dependency Injection.
Kontejner je praktičan alat koji nam pomaže u implementaciji Dependency Injection pristupa, pri čemu oni mogu biti i loše
iskorišćeni za implementaciju anti-paterna, Service Lokacije (Service Location). Injektovanje DI kontejnera kao Servis Lokatora
u klase verovatno stvara jače zavisnosti na sâm kontejner nego na zavisnost koju menjate. To takođe čini vaš kôd mnogo manje 
transparentim i u kranjem slučaju težim za testiranje.

Većina modernih framework-ova imaju svoje Dependency Injection kontejnera koji omogućavaju da povezujete vaše zavisnosti putem 
konfiguracije. Ovo zapravo znači da možete pisati kôd aplikacije koji je čist i razdvojen kao i framework nad kojim je izgrađen.
