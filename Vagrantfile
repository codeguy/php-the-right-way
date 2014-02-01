Vagrant.configure("2") do |config|
    config.vm.box = "precise32"
    config.vm.box_url = "http://files.vagrantup.com/precise32.box"
    config.vm.network :forwarded_port, guest: 4000, host: 4000

    $script = <<SCRIPT
sudo -i
apt-get update
apt-get -y install build-essential
gem update --no-rdoc --no-ri --quiet
/opt/vagrant_ruby/bin/gem install jekyll rdiscount --no-ri --no-rdoc
cd /vagrant
jekyll server --detach --port 4000
SCRIPT
    config.vm.provision :shell, :inline => $script
end
