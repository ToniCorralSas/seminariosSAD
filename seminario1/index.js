var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');

  // https://socket.io/docs/emit-cheatsheet/
  // https://socket.io/docs/#Broadcasting-messages
  io.emit('broadcast', console.log('first broadcast'));
  io.emit(console.log('second broadcast'));
  socket.broadcast.emit(console.log('second broadcast'));

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
