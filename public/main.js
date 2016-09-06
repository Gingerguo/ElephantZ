var points = 27;
var length = 30;
var elephant;
var speed = 200;
var elephantData = "M66.5,538.5c32.5,55.3,91.1,96,154,108c53.4,10.2,126.5-5.8,149.9-61.2c10.1-24,8.2-60.2-16.7-74.7c-20.8-12.2-51.9-1.4-53.9,24.5c-4.9,61.7,115.6,60.4,151.1,75.4c28.5,12.1,45.9,33.3,50.2,64.2c4.5,32.7-6.4,68,7.4,99.2c10.2,23,31.5,36.3,55.4,21.6c24.7-15.2,28-48.9,31.7-74.8c3.9-27.6,6.2-58.2,24.2-80.9c21.9-27.5,60.7-35.8,93.5-25.7c60.8,18.6,61.2,84.2,81.8,133.6c21.8,52.4,82.1,61.5,109.8,8.5c30.3-58.1,28-132,19.5-195c-8.4-62.8-29-125.6-74.6-171.6c-48.6-49-118.5-68.4-186-69.1c-58.7-0.6-124.8,11.3-168.5,53.7C453.5,414.9,444.6,481,476,530.6c32.8,51.7,102.8,64.5,146.7,19.1c43.6-45.2,43.5-119.3,12.5-171.3c-72.5-121.5-264-92.4-341.8,6.5c-93.8,119.2-47.6,293.8-15.3,426.6"
var path = new Path({
  strokeColor: 'red',
  strokeWidth: 20,
  strokeCap: 'round',
  strokeJoin: 'round',
  fullySelected: true
})
for (var i = 0; i < points; i++) {
  path.add(new Point((view.size.width / 10) + (i * length), view.center.y))
}
path.smooth({type: 'continuous'})
var pathHeight = 10;

path.onFrame = function(event){
  path.strokeColor.hue += 1
  initWave(event)
  // rotatePath(event.time)
}
var counter = 0;
function onMouseDown(){
  speed -= 5
}

function initEqualize(){
  for (var i = 1; i < points; i++) {
    if (path.segments[i].point.y < view.center.y) {
      path.segments[i].point.y += 1
    } else {
      path.segments[i].point.y -= 1
    }
  }
}

function initWave(event){
  // center point and the total distance from min-max
  pathHeight += (view.center.y - pathHeight) / 10
  for (var i = 2; i < points - 2; i++) {
    var sinSeed = event.count + (i + i % 10) * 100;
    var sinHeight = Math.sin(sinSeed / 200) * pathHeight / 2
    var yPos = Math.sin(sinSeed / 100) * sinHeight + (view.size.height / 2)
    path.segments[i].point.y = yPos
  }
}

function rotatePath(speed){
  path.rotate(speed)
}

// function initElephant(){
//   project.clear()
//   elephant = new Path(elephantData)
//   elephant.strokeColor = 'black'
//   elephant.strokeWidth = 10
//   elephant.position = [view.center.x, view.center.y]
//   elephant.onFrame = function(event){
//     expandElephant(event)
//   }
// }
//
// var lastScale = 1;
// function expandElephant(event){
//   var scale = (Math.sin(event.time) + 3) / 5;
//   elephant.scale(scale / lastScale)
//   lastScale = scale;
// }
//
// setTimeout(function(){
//   initElephant()
// }, 5000)
