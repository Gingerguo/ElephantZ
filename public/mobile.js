var socket = io.connect('http://localhost:3000');

function setup(){
  createCanvas(displayWidth, displayHeight);
	strokeWeight(10)
	stroke(0);
}

function touchStarted(){
  socket.emit('interaction', {cmd: "wake"})
}

function deviceMoved(){

}
