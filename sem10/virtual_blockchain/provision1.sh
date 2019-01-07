#!/bin/bash




apt-get -y update
apt-get -y upgrade
##apt-get -y install xinit
##apt-get -y install xfce4-session
##apt-get -y install xfce4-terminal
##apt-get -y install xfce4-panel
##apt-get -y install xfce4-whiskermenu-plugin
##apt-get -y install thunar

# edit /etc/xdg/user-dirs.default   # https://www.linuxquestions.org/questions/slackware-14/renaming-xfce-default-folders-4175438596/
##xdg-user-dirs-update --force
#apt-get -y install language-pack-es
#apt-get -y install language-pack-es-base
##apt-get -y install language-support-es
#apt-get -y install aspell-es
#apt-get -y install myspell-es
#apt-get -y install manpages-es
#locale-gen es_ES
#locale-gen es_ES.UTF-8
##dpkg-reconfigure locales
#update-locale LANG=es_ES.UTF-8
#update-locale LANGUAGE="es_ES"
##dpkg-reconfigure locales
#echo "export LANGUAGE=es_ES" >> ~/.bashrc
##echo "export LANG=es_ES" >> ~/.bashrc
#echo "setxkbmap es" >> ~/.bashrc

##apt-get -y install lightdm
##apt-get -y install lightdm-gtk-greeter*
##systemctl enable lightdm
##apt-get -y install nginx
##apt-get -y install virtualbox-guest-dkms
##apt-get -y install virtualbox-guest-utils
##apt-get -y install virtualbox-guest-x11
##apt-get -y install firefox
##apt-get -y install git
##apt-get -y install curl
##apt-get -y install nodejs
##apt-get -y install npm
##apt-get -y install libzmq3-dev
##npm install zeromq
##apt-get -y install mongodb
apt-get -y autoremove

cd /tmp
wget http://www.multichain.com/download/multichain-1.0.7.tar.gz
tar xvzf multichain-1.0.7.tar.gz
cd multichain-1.0.7
mv multichaind multichain-cli multichain-util /usr/local/bin
# edit ssh config and allow passwords in two servers
#multichain-util create chain1
#cat ~/.multichain/chain1/params.dat
#multichaind chain1 -daemon
#sleep 100
#multichain-cli chain1 grant 12fpp83HU6TWF9UyshLr95ENG6jhpdtF7rLbgr connect
#multichain-cli chain1 grant 12fpp83HU6TWF9UyshLr95ENG6jhpdtF7rLbgr connect,send,receive
#sleep 100
#multichain-cli chain1 create stream stream1 false
#multichain-cli chain1 publish stream1 key1 73747265616d2064617461   # 7374... is info that want to save, it can be JSON info
#sleep 100
#multichain-cli chain1 grant 12fpp83HU6TWF9UyshLr95ENG6jhpdtF7rLbgr send   # wallet from provision.sh
#multichain-cli chain1 grant 12fpp83HU6TWF9UyshLr95ENG6jhpdtF7rLbgr stream1.write

#userdel -r ubuntu
#reboot
