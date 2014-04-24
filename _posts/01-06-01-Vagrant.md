---
isChild: true
anchor: vagrant
---

## Vagrant {#vagrant_title}

Running your application on different environments in development and production can lead to strange bugs 
popping up when you go live. It's also tricky to keep different development environments up to date with the same 
version for all libraries used when working with a team of developers. 

If you are developing on Windows and deploying to Linux (or anything non-Windows) or are developing in a team, you 
should consider using a virtual machine. This sounds tricky, but by using [Vagrant][vagrant] you can set up a simple 
virtual machine with only a few steps. These base boxes can then be set up manually, or you can use "provisioning" 
software such as [Puppet][puppet] or [Chef][chef] to do this for you. Provisioning the base box is a great way to 
ensure that multiple boxes are set up in an identical fashion and removes the need for you to maintain complicated 
"set up" command lists. You can also "destroy" your base box and recreate it without many manual steps, making it
easy to create a "fresh" installation.

Vagrant creates folders for sharing your code between your host and your virtual machine, which means that you can 
create and edit your files on your host machine and then run the code inside your virtual machine.

### A little help

If you need a little help to start using Vagrant there are three services that might be useful:

- [Rove][rove]: service that allows you to pre-generate typical Vagrant builds, PHP among the options. The
  provisioning is made with Chef.
- [Puphpet][puphpet]: simple GUI to set up virtual machines for PHP development. **Heavily focused in PHP**. Besides
  local VMs, can be used to deploy to cloud services as well. The provisioning is made with Puppet.
- [Protobox][protobox]: is a layer on top of vagrant and a web GUI to setup virtual machines for web development. A single YAML document controls everything that is installed on the virtual machine.

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
[rove]: http://rove.io/
[puphpet]: https://puphpet.com/
[protobox]: http://getprotobox.com/
