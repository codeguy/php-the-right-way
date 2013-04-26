---
isChild: true
---

## Bytecode Cache {#bytecode_cache_title}

Kada se PHP fajl izvršava, pod haubom se prvo prevodi(kompajlira) u bytecode (takođe poznat kao opcode), a tek onda se bytecode izvršava.
Ako PHP fajl nije izmenjen, bytecode uvek ostaje isti. Ovo znači da je postupak prevođenja(kompajliranja) traćenje CPU resursa.

Ovde Bytecode cache stupa na scenu. On sprečava suvišno kompajliranje čuvanjem bytecode-a u memorijiǉ i ponovnim njegovim korišćenjem.
Postavljanje bytecode cache-a je pitanje minuta, a Vaš zahtev će se značajno ubrzati. Zaista ne postoji razlog da ga ne koristite.

Popular bytecodes caches are:

* [APC](http://php.net/manual/en/book.apc.php)
* [XCache](http://xcache.lighttpd.net/)
* [Zend Optimizer+](http://www.zend.com/products/server/) (part of Zend Server package)
* [WinCache](http://www.iis.net/download/wincacheforphp) (extension for MS Windows Server)
