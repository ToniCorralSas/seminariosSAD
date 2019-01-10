// Beware if pub is started before a subcriber listening, it just goes into /dev/null space

//var zmq = require('zmq');
var zmq = require('zeromq');
var sock = zmq.socket('pub');

// Instead of binding our pub socket, we connect to the PUB -> XSUB
sock.connect('tcp://127.0.0.1:5556');
sock.send('MYCHANNEL ' + 'here is the info');
