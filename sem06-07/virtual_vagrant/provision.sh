#!/bin/bash




mkdir /vagrant/sites-enabled
apt-get -y update
apt-get -y upgrade
apt-get -y install nodejs
apt-get -y install npm
apt-get -y install mongodb
apt-get -y autoremove
cd /vagrant/sites-enabled
npm install q mongodb
