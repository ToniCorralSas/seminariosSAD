#!/bin/bash




apt-get -y update
apt-get -y upgrade
apt-get -y install nodejs
apt-get -y install npm
apt-get -y autoremove

cd /tmp
wget http://www.multichain.com/download/multichain-1.0.7.tar.gz
tar xvzf multichain-1.0.7.tar.gz
cd multichain-1.0.7
mv multichaind multichain-cli multichain-util /usr/local/bin
# first jump from provision1.sh
#multichaind chain1@172.28.128.4:puerto   # take wallet number: 12fpp83HU6TWF9UyshLr95ENG6jhpdtF7rLbgr
#sleep 100
#multichaind chain1 -daemon
#sleep 100
#multichain-cli chain1 subscribe stream1
#multichain-cli chain1 liststreamitems stream1
#sleep 100
#multichain-cli chain1 publish stream1 key1 736f6d65206f746865722064617461
#multichain-cli chain1 publish stream1 key2 53747265616d732052756c6521
#multichain-cli chain1 liststreamitems stream1
