/*
function setup(){


}

function draw(){

}
Order of opperations effect when something will happen to an object
*/

var socket = io.connect('http://192.168.2.52:3000')

function setup(){
  createCanvas(500, 500)
  background(125)
  socket.on('draw', newDrawing)
}

function draw(){
}

function newDrawing(position){
  noStroke()
  fill(255, 0, 100)
  ellipse(position.x, position.y, 30, 30)
}

function mouseDragged(){
  var positions = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('positions', positions)
  noStroke()
  fill(0)
  ellipse(mouseX, mouseY, 30, 30)
}
