var socket = io.connect('http://localhost:3000');

function setup(){
  createCanvas(displayWidth, displayHeight);
	strokeWeight(10)
	stroke(0);
}

function touchMoved(){
  line(touchX, touchY, ptouchX, ptouchY);
	return false;
}

$(".post").on('submit', function(ev){
  ev.preventDefault()
  var image = $(".canvas").getDataUrl()
})
