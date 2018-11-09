var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = ' '; //hacerlo con vectores o matrices para poder modificar los usuarios


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.broadcast.emit('chat message', 'Nuevo usuario en el chat'); //Broadcast
  console.log('Nuevo usuario en el chat');


  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  
  socket.on('chat user',function(msg){
  	console.log('New user: ' + msg);
  	users = users+'\n'+msg;
  	console.log('lista usuarios: ' +users);
  	io.emit('lista usuarios', users);
  	
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
