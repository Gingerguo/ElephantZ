function swirlElephant(event){
  // var radius = Math.abs(circle.position.x - circle.firstSegment.point.x)
  // path.firstSegment.point = [
  //   circle.position.x +  Math.floor(Math.cos(event.count / 30)*radius),
  //   circle.position.y +  Math.floor(Math.sin(event.count / 30)*radius)];
  circle.rotate(2)
  var segment = path.firstSegment.point
  var target = circle.firstSegment.point
  var vector = target - segment
  //path.segments[i].point += vector /animationRate()
  path.firstSegment.point += vector /10
  for (var i = 0; i < points - 1; i++) {
    var segment = path.segments[i];
    var nextSegment = segment.next;
    var vector = segment.point - nextSegment.point;
    vector.length = length;
    nextSegment.point = segment.point - vector;
  }
  circle.scale(0.999)
}


function hitTester(event) {
  if (circle.hitTest(path.firstSegment.point)) {
    circle.rotate(2)
    var segment = path.firstSegment.point
    var target = circle.firstSegment.point
    var vector = target - segment
    //path.segments[i].point += vector /animationRate()
    path.firstSegment.point += vector /10
    for (var i = 0; i < points - 1; i++) {
      var segment = path.segments[i];
      var nextSegment = segment.next;
      var vector = segment.point - nextSegment.point;
      vector.length = length;
      nextSegment.point = segment.point - vector;
    }
    circle.scale(0.999)
  } else{
      var centerToFirstPoint = circle.position - path.firstSegment.point
      //path.segments[i].point += vector /animationRate()
      path.firstSegment.point -= centerToFirstPoint /50
      for (var i = 0; i < points - 1; i++) {
        var segment = path.segments[i];
        var nextSegment = segment.next;
        var vector = segment.point - nextSegment.point;
        vector.length = length;
        nextSegment.point = segment.point - vector;
    }
  }
}
