var socket = io.connect('http://localhost:3000');
var points = 27;
var length = 30;
var path = new Path({
  strokeColor: 'red',
  strokeWidth: 20,
  strokeCap: 'round',
  strokeJoin: 'round',
  fullySelected: true
})
path.smooth({type: 'continuous'})
var pathHeight = 10;

for (var i = 0; i < points; i++) {
  path.add(new Point((view.size.width / 10) + (i * length), view.center.y))
}

path.onFrame = function(event){
  path.strokeColor.hue += 1
  // timed intervals for every x seconds
  if ((event.time % 10) < 7 ){
    // center point and the total distance from min-max
    pathHeight += (view.center.y - pathHeight) / 10
    for (var i = 0; i < points; i++) {
      var sinSeed = event.count + (i + i % 10) * 100;
      var sinHeight = Math.sin(sinSeed / 200) * pathHeight / 2
      var yPos = Math.sin(sinSeed / 100) * sinHeight + (view.size.height / 2)
      path.segments[i].point.y = yPos
    }
    path.rotate(1)
  } else {
    for (var i = 1; i < points; i++) {
      if (path.segments[i].point.y < view.center.y) {
        path.segments[i].point.y += 1
      } else {
        path.segments[i].point.y -= 1
      }
    }
  }
}
