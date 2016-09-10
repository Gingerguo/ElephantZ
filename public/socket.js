var socket = io.connect('http://172.46.3.26:3000');
var awake, shake, swirl = false;
var steps = 0;
var distanceX = 0;
var distanceY = 0

socket.on('wake', function(){
  steps += 500 * k
})

function animationRate() {
  if (steps > 9000) {
    steps = 9900
  }
  return 10000 - steps
}


socket.on('swirl', function(data){
  console.log(data)
  if (data > 10 && awake){
    swirl = true
  }
})

socket.on('shake', function(data){
  var newX = Math.abs(data.accX) + distanceX
  var newY = Math.abs(data.accY) + distanceY
  distanceX = Math.min(newX, 100)
  distanceY = Math.min(newY, 100)
})

setInterval(function(){
  if(steps > 0){
    steps = steps - 50
  }
  if (distanceX > 0){
    var newDistance = distanceX - 1
    distanceX = Math.max(newDistance, 0)
  }
  if (distanceY > 0){
    var newDistance = distanceY - 1
    distanceY = Math.max(newDistance, 0)
  }
}, 100)
