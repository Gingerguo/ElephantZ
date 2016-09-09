function setup(){
  createCanvas(displayWidth, displayHeight);
	strokeWeight(10)
	stroke(0);
}

function touchStarted(){
  socket.emit('interaction', {cmd: "formElephant"})
}

function deviceMoved(){
  var data = {
    cmd: 'shake',
    accX: accelerationX,
    accY: accelerationY
  }
  socket.emit('interaction', data)
}
