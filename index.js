var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var rooms = [];

app.use('/public', express.static(__dirname + "/public"));

//Lobby
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// app.post('/create', function(req, res){
//   rooms.push(req);
// })
//
// app.get('/verify', function(req, res){
//   if (rooms.includes(req)) {
//
//   }
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});

//Rooms
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });

  socket.on('post image', function(image){
    io.emit('posted image', image)
  })

});
