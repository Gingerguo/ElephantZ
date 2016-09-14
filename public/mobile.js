var c1, c2;
var cirX, cirY;
var cirRad = 50;
var step = 2;
var maxSteps;
var saveTime = 1;
var rand = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
	strokeWeight(10);
	stroke(0);
  c1 = color(206, 246, 245);
  c2 = color(247, 109, 143);
  cirX = windowWidth / 2;
  cirY = windowHeight / 2;
  maxSteps = windowWidth / 4 / cirRad;
}

function draw(){
  setGradient(0, 0, windowWidth, windowHeight, c1, c2);
  if(millis() - saveTime > 200){
    step += 1;
    saveTime = millis();
  }

  if (step >= maxSteps){
    step = 1;
  }

  noStroke();

  for (var i = step; i > 1; i--){
    colorMode(HSB);
    rand[i] = random(35);
    fill(179, rand[i], 100, 0.05);
    ellipse(cirX, cirY, cirRad*i, cirRad*i);
  }
}

function setGradient(x,y,w,h,c1,c2){
  noFill();
  for (var i = y; i <= y+h; i++){
    var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x+w, i);
  }
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
