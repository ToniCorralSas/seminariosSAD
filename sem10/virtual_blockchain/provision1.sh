#!/bin/bash




apt-get -y update
apt-get -y upgrade
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
