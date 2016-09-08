var socket = io.connect('http://172.46.3.26:3000');
var awake, shake, swirl = false;
socket.on('wake', function(data){
  console.log(data)
  if (data > 10){
    awake = true
  }
})

socket.on('swirl', function(data){
  console.log(data)
  if (data > 10 && awake){
    swirl = true
  }
})

socket.on('shake', function(data){
  console.log(data)
  if (data > 250 && awake) {
    shake = true
  }
})
