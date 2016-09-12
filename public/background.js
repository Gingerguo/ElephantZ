var pond = new Group()
var num = 120;

var init = function(){
    for( var i = 0; i < num; i++ ){
    var hue = i*3;
    var alpha = i/num - 0.3;
    var r = Math.random()*300;
    var centerX;
    var centerY;
    if (Math.cos(i*3)==0||Math.sin(i*3)==0){
      centerX   = Math.random()*50 + view.center.x;
      centerY  = Math.random()*50 + view.center.y;
    }else{
      centerX  = r*Math.cos(i*3) + view.center.x;
      centerY  = r*Math.sin(i*3) + view.center.y;
    }
    pond.addChild(new Path.RegularPolygon({
      center: new Point(centerX,centerY),
      sides: Math.floor(Math.random()*4)+ 3,
      radius: Math.floor(Math.random()*4) * 10,
      strokeColor: {hue: hue, saturation: 1, lightness: 0.9, alpha: alpha},
      shadowBlur: 20,
      blendMode: 'overlay'
    }))

    pond.addChild(new Path.RegularPolygon({
      center: new Point(centerX,centerY),
      sides: Math.floor(Math.random()*4) + 3,
      radius: Math.floor(Math.random()*4)*15,
      fillColor: {hue: hue, saturation: 1, lightness: 0.9, alpha: alpha},
      shadowColor: {hue: hue, saturation: 1, lightness: 0.9, alpha: alpha},
      shadowBlur: 40,
      blendMode: 'overlay'
    }))
}}

var james = new Path.Rectangle(view.bounds);
james.strokeColor = 'white';
james.strokeWidth = 10;

init();

view.onFrame = function(event){
    pond.children.forEach(function(object){
        object.rotate(2)
        var currentx = object.position.x;
        var currenty = object.position.y;
        var vector = view.center - object.position;
        if (Math.cos(vector.angle) == 0 || Math.sin(vector.angle) == 0){
            object.translate(1,1);
        }else{
            object.position.x += Math.cos(vector.angle);
            object.position.y -= Math.sin(vector.angle);
        }
        var hitOptions = {
            segments: true,
	        stroke: true,
	        fill:true,
	        tolerance: 5
        }
        var hitResult = james.hitTest(object.position, hitOptions);
        if (hitResult){
            var r = Math.random()*300;
            var i = Math.random()*360
            var centerX = r*Math.cos(i) + view.center.x;
            var centerY = r*Math.sin(i) + view.center.y;
            object.position.x = centerX;
            object.position.y = centerY;
        }
    })
}

view.onMouseDown = function(event) {
   pond.children.forEach(function(object){
        if(object.fillColor){
            object.fillColor.hue += 100;
            object.shadowColor.hue = object.fillColor.hue;
        }else{
            object.strokeColor.hue += 100;
        }
   })
}
