---
isChild: true
---

## Vagrant {#vagrant_title}

Running your application on different environments in development and production can lead to strange bugs 
popping up when you go live. It's also tricky to keep different development environments up to date with the same 
version for all libraries used when working with a team of developers. 

If you are developing on Windows and deploying to Linux (or anything non-Windows) or are developing in a team, you 
should consider using a virtual machine. This sounds tricky, but using [Vagrant][vagrant] you can set up a simple 
virtual machine with only a few steps. This so called "base boxes" can then be set up with different software 
using either [Puppet][puppet] or [Chef][chef] (This is called provisioning). If you share those setup files with your 
colleagues you can ensure you're all working on the same stack.

Vagrant creates shared folders used to share your code between your host and your virtual machine, meaning you can 
create and edit your files on your host machine and then run the code inside your virtual machine.

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
