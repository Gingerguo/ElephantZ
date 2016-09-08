var socket = io.connect('http://localhost:3000');
var wake, shake, swirl = false;
socket.on('wake', function(data){
  console.log(data)
  if (data > 10){
    wake = true
  }
})
