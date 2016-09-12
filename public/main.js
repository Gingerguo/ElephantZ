var points = 86;
var elephantData = "M66.54,538.51a218,218,0,0,0,30.6,40.29,237,237,0,0,0,84.19,56.36,207.87,207.87,0,0,0,46.75,12.59,174.83,174.83,0,0,0,41.53.74,160.71,160.71,0,0,0,41.46-9.6,117.3,117.3,0,0,0,35.65-21,89.82,89.82,0,0,0,24.06-33.48A74.79,74.79,0,0,0,375,543.21c-2.53-13.61-9.81-26.52-22.27-33.27a38.87,38.87,0,0,0-36.61.3,31.86,31.86,0,0,0-12.92,12.95,33.89,33.89,0,0,0-3.46,17.31,38.29,38.29,0,0,0,9.76,23.75c6.3,7.13,14.64,12.22,23.18,16.22a179.88,179.88,0,0,0,31.2,10.71c11.16,2.89,22.48,5.14,33.81,7.25,10.34,1.92,20.71,3.68,31,5.82,8,1.67,16.11,3.48,23.63,6.79,13.63,6,26,14.91,34.78,27.06,9.17,12.72,13.62,28,14.83,43.48,1.51,19.39-1.28,38.8-.46,58.21,0.74,17.66,4.9,36.45,17.24,49.8a37.17,37.17,0,0,0,17.83,11.13,33.66,33.66,0,0,0,22.07-2.33,47.85,47.85,0,0,0,17.89-14.05,67.81,67.81,0,0,0,10.27-19.25c5-14,6.79-28.84,8.87-43.47,2.46-17.35,4.16-35,9.29-51.81a95,95,0,0,1,10.75-23.88,74.53,74.53,0,0,1,16.58-18.2C644.69,618,660,612.28,675.68,610.6a94.57,94.57,0,0,1,46.12,6.55,79.06,79.06,0,0,1,31.66,23.93c8.1,10.21,13.79,22.08,18.34,34.22,4.78,12.73,8.38,25.86,12.18,38.9,1.91,6.55,3.87,13.1,6.05,19.57a158.22,158.22,0,0,0,7.52,19.1c6,12.22,15,23.15,26.58,30.37a54.87,54.87,0,0,0,34.1,8.34c12.49-1.23,24-7.23,32.84-16a76.32,76.32,0,0,0,13.28-18,179.1,179.1,0,0,0,10.8-24.39,244.74,244.74,0,0,0,12.37-53.17,369.85,369.85,0,0,0,2.41-55.46c-0.48-18.19-2-36.34-4.23-54.4a472.28,472.28,0,0,0-9.26-52.95A332.69,332.69,0,0,0,899.91,466a255.39,255.39,0,0,0-25.59-47,213.72,213.72,0,0,0-35.86-40A215.93,215.93,0,0,0,795,350.15a257.78,257.78,0,0,0-48.74-18.55,312.27,312.27,0,0,0-51.63-9.34,368.07,368.07,0,0,0-51.3-1.31,325.18,325.18,0,0,0-50.71,6A233.63,233.63,0,0,0,544,342.1a170.3,170.3,0,0,0-42.67,26.78A126.36,126.36,0,0,0,457.89,452a125,125,0,0,0,4,47,116.87,116.87,0,0,0,21.69,42,101.54,101.54,0,0,0,33.87,26.9,93.91,93.91,0,0,0,40.26,9.59,87.59,87.59,0,0,0,40.53-9.58c13.74-7,25.29-17.68,34.4-30.07A124.27,124.27,0,0,0,652.42,496a147.65,147.65,0,0,0,4.42-46.57,160.52,160.52,0,0,0-9.71-46,156.63,156.63,0,0,0-47.62-66.48,159.92,159.92,0,0,0-31.51-20,179.35,179.35,0,0,0-35.16-12.54,207.73,207.73,0,0,0-37.54-5.55,237.11,237.11,0,0,0-38.65,1,258.31,258.31,0,0,0-38.49,7.1,263.77,263.77,0,0,0-37,12.76,251.23,251.23,0,0,0-34.34,18,224.44,224.44,0,0,0-30.35,22.76,197.75,197.75,0,0,0-25.86,28.1,239.73,239.73,0,0,0-25.39,41.94,263.51,263.51,0,0,0-16.42,45.16A320.16,320.16,0,0,0,240,523.2a414.07,414.07,0,0,0-2.27,49.21c0.18,16.71,1.23,33.41,2.91,50s4,33.46,6.83,50.07,6,32.94,9.48,49.31c3.41,16,7.08,31.87,10.88,47.75,3.34,14,6.77,28,10.16,41.92"
var elephant, circle;
var length = 30;

var path = new Path({
  strokeCap: 'round',
  strokeJoin: 'round'
})
for (var i = 0; i < points; i++) {
  var point = new Point.random()
  path.add( point * view.size)
}
path.smooth({type: 'continuous'})
// var pathClone = path.clone()
path.strokeColor = 'red'
path.strokeWidth = 20
// path.fullySelected = true
touchLocation = path.firstSegment.point

function initElephant(){
  elephant = new Path(elephantData)
  elephant.strokeColor = 'black'
  elephant.strokeWidth = 10
  elephant.fullySelected = false
  elephant.visible = false
  elephant.position = [view.center.x - 50, view.center.y - 50]
  console.log(elephant.segments.length)
}
initElephant()



// var pathx = (view.size.width / 10) + (i * length)
path.onFrame = function(event){
  // path.strokeColor.hue += 1
  switch (action) {
    case "shake":
      horizontalShake(event)
      verticalShake(event)
      pathClone = path
      break;
    case "swirl":
    swirlElephant()
    pathClone = path
      break;
    default:
      formElephant()
  }
  path.smooth({type: 'catmull-rom'})
}

function formElephant(){
  for (var i = 0; i < points; i++) {
    var check = path.segments[i].point - elephant.segments[i].point
    if (check.length > 1) {
      var segment = path.segments[i].point
      var target = elephant.segments[i].point
      var vector = target - segment
      path.segments[i].point += vector /animationRate()
      // path.segments[i].point += vector /50
    }
  }
}

function horizontalShake(ev){
 for (var i = 0; i < points /2; i++) {
   path.segments[2*i].point.x = elephant.segments[2*i].point.x + Math.floor(Math.sin(ev.count/20)*distanceX);
  //  path.segments[2*i+1].point.x = elephant.segments[2*i+1].point.x + Math.floor(Math.cos(ev.count/20)*20);
 }
}

function verticalShake(ev){
  for (var i = 0; i < points /2; i++) {
    // path.segments[2*i].point.y = elephant.segments[2*i].point.y + Math.floor(Math.sin(ev.count/20)*20);
    path.segments[2*i+1].point.y = elephant.segments[2*i+1].point.y + Math.floor(Math.cos(ev.count/20)*distanceY);
  }
}

function swirlElephant() {
    var segment = path.firstSegment.point
    var target = new Point(touchLocation.x, touchLocation.y)
    var vector = target - segment
    path.firstSegment.point += vector /10
    for (var i = 0; i < points - 1; i++) {
      var segment = path.segments[i];
      var nextSegment = segment.next;
      var vector = segment.point - nextSegment.point;
      vector.length = length;
      nextSegment.point = segment.point - vector;
    }
}
