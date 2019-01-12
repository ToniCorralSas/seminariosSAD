#!/bin/bash




apt-get -y update
apt-get -y upgrade
apt-get -y install nodejs
apt-get -y install npm
#apt-get -y install mongodb
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
apt-get -y update
apt-get -y install mongodb-org
apt-get -y autoremove
cp -pr /vagrant/sites-enabled/mongodb.service /etc/systemd/system/
systemctl start mongodb
cp -pr /vagrant/sites-enabled/* /home/vagrant/
cd /home/vagrant
npm install q mongodb
