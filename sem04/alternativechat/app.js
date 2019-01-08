var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require("socket.io").listen(server),
  count = 0, 
  nicknames = {};

server.listen(3000);
//server.listen(process.env.PORT, process.env.IP);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('send message', function(data) {
    // https://socket.io/docs/emit-cheatsheet/
    //io.sockets.emit('new message', {msg: data, nick: socket.nickname});
    socket.broadcast.emit('new message', {msg: data, nick: socket.nickname});
  });
    
  socket.on('new user', function(data, callback) {
    if(data in nicknames) {
      callback(false);
    }
    else {
      callback(true);
      socket.nickname = data;
      nicknames[socket.nickname] = ++count;
      updateNickNames();
      io.sockets.emit('is connected', {msg: data, nick: socket.nickname});
    }
  });
    
  socket.on('disconnect', function(data) {
    if(!socket.nickname) return;
    delete nicknames[socket.nickname];
    updateNickNames();
    io.sockets.emit('is disconnected', {msg: data, nick: socket.nickname});
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', {nick: socket.nickname});
  });
    
  function updateNickNames() {
    io.sockets.emit('usernames', nicknames);
  }
});
