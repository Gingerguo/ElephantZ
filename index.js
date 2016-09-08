var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/public', express.static(__dirname + "/public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/mobile', function(req, res){
  res.sendFile(__dirname + '/mobile.html');
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var touchThreshold = 0
setInterval(function(){
  touchThreshold = 0
}, 3000)

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });

  socket.on('interaction', function(data){
    switch (data.cmd) {
      case "wake":
        touchThreshold++
        io.emit('wake', touchThreshold)
        break;
      default:

    }
  })

});
