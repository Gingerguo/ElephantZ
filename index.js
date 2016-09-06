var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/public', express.static(__dirname + "/public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var wakeUpCount = 0;

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });

  socket.on('wakeUp', function(){
    io.emit('wakeUp', wakeUpCount)
  })

  socket.on('test', function(data){
    wakeUpCount++
    console.log(wakeUpCount)
  })

});
