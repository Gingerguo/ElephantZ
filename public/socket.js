var socket = io.connect('http://10.0.1.25:3000');
var action;
var steps = 0;
var distanceX = 0;
var distanceY = 0

socket.on('wake', function(){
  steps += 500
})

function animationRate() {
  if (steps > 9000) {
    steps = 9900
  }
  return 10000 - steps
}


socket.on('swirl', function(data){
  action = data.action
  touchLocation = data
})

socket.on('shake', function(data){
  action = data.action
  var newX = distanceX + Math.abs(data.accX) / 100
  var newY = distanceY + Math.abs(data.accY) / 100
  distanceX = Math.min(newX, 100)
  distanceY = Math.min(newY, 100)
})

setInterval(function(){
  if(steps > 0){
    steps = steps - 50
  }
  if (distanceX > 0){
    var newDistance = distanceX - 2
    distanceX = Math.max(newDistance, 0)
  }
  if (distanceY > 0){
    var newDistance = distanceY - 2
    distanceY = Math.max(newDistance, 0)
  }
}, 100)

setInterval(function(){
  action = ""
}, 5000)
