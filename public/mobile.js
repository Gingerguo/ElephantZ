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

function touchMoved(){
  socket.emit('interaction', {cmd:'swirl', x: touchX, y: touchY})
  return false
}
