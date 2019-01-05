#!/bin/bash




# see: https://nmrony.info/change-disk-size-of-a-vagrant-box/
#$ vagrant plugin install vagrant-disksize

#vagrant init ubuntu/bionic64
# see also: https://app.vagrantup.com/peru/boxes/ubuntu-18.04-server-amd64
vagrant box update
vagrant up   # user: vagrant; pass: vagrant
#vagrant reload
#vagrant ssh db
#vagrant provision
#vagrant halt
#vagrant destroy
