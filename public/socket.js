var socket = io.connect('http://172.46.2.239:3000');
var action;
var steps = 0;
var distanceX = 0;
var distanceY = 0;

socket.on('form', function(){
  steps += 500;
});

function animationRate() {
  if (steps > 9000) {
    steps = 9950;
  }
  return 10000 - Math.min(steps, 9950);
}


socket.on('swirl', function(data){
  action = data.action;
  touchLocation = data;
});

socket.on('shake', function(data){
  action = data.action;
  var newX = distanceX + Math.abs(data.accX) / 20;
  var newY = distanceY + Math.abs(data.accY) / 10;
  distanceX = Math.min(newX, 120);
  distanceY = Math.min(newY, 110);
});

setInterval(function(){
  if(steps > 0){
    steps = Math.max(steps - 300, 0);
    console.log(steps);
  }
  if (distanceX > 0){
    var newDistanceX = Math.max(distanceX - (distanceX/50), 0);
    distanceX = Math.max(newDistanceX, 0);
  }
  if (distanceY > 0){
    var newDistanceY = Math.max(distanceY - (distanceY/50), 0);
    distanceY = Math.max(newDistanceY, 0);
  }
}, 150);

setInterval(function(){
  action = "";
}, 5000);
