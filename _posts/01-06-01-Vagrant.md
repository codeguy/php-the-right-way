---
isChild: true
---

## Vagrant {#vagrant_title}

Running your application on different environments in development and production can lead to strange bugs 
popping up when you go live. It's also tricky to keep different development environments up to date with the same 
version for all libraries used when working with a team of developers. 

If you are developing on Windows and deploying to Linux (or anything non-Windows) or are developing in a team, you 
should consider using a virtual machine. This sounds tricky, but using [Vagrant][vagrant] you can set up a simple 
virtual machine with only a few steps. These base boxes can then be set up manually, or you can use "provisioning" 
software such as [Puppet][puppet] or [Chef][chef] to do this for you. Provisioning the base box is a great way to 
ensure that multiple boxes are set up in an identical fashion and removes the need for you to maintain complicated 
"set up" command lists. You can also "destroy" your base box and recreate it without many manual steps, making it
easy to create a "fresh" installation.

Vagrant creates shared folders used to share your code between your host and your virtual machine, meaning you can 
create and edit your files on your host machine and then run the code inside your virtual machine.

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
