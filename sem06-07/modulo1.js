var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// serve static html files
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/sem4.html');
});

io.on('connection', function(sock) {
  console.log("Event: client connected");

  sock.on('disconnect', function() {
    console.log('Event: client disconnected');
  });

  sock.on('get message list', function() {
    console.log("Event: get message list: ");
    //var ml = getMessageList();
    getMessageList(function() {
      console.log(messages);
      sock.emit('message list', JSON.stringify(messages));
    });
    //sock.emit('message list', JSON.stringify(ml));
  });
});

// listen for connections !!
http.listen(10000, function() {   // localhost:10000
  console.log("Starting: server current directory: " + __dirname)
});
