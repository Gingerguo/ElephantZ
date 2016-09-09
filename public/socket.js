var socket = io.connect('http://172.46.3.26:3000');
var awake, shake, swirl = false;
var steps = 0;

socket.on('wake', function(data){
  if (data > 10){
    steps = Math.max(steps, data)
    // awake = true
  }
})

function animationRate() {
  if (steps > 9000) {
    steps = 9000
  }
  return 10000 - steps
}

setInterval(function(){
  //Math.max(10, 0)
  if(steps > 0){
    steps = steps - 50
  }
}, 100)

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
