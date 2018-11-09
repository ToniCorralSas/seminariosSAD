var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userList = [];
var count = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  userList[count]="Anonimo";
  console.log(userList);
  
  socket.emit('id', count);
  count++;
  socket.broadcast.emit('chat message', 'Nuevo usuario en el chat'); //Broadcast
  console.log('Nuevo usuario en el chat');
  io.emit('lista usuarios', userList);

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  
  socket.on('change user',function(msg,id){
  	console.log('New user: ' + msg);
  	userList[id] = msg;
  	console.log(id);
  	console.log(userList);
  	console.log('lista usuarios: ' +userList);
  	io.emit('lista usuarios', userList);
  	
  });
  socket.on('chat message', function(msg,locutor) {
    console.log('message to ' + locutor + ': ' + msg);
    //console.log('message: ' + user);
    //io.emit('chat message', locutor+": "+msg);
    socket.broadcast.emit('chat message', locutor+": "+msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
