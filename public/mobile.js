var socket = io.connect('http://172.46.3.26:3000');


if (navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)){
   function setup(){
     createCanvas(displayWidth, displayHeight);
     strokeWeight(10)
     stroke(0);
   }
   function touchMoved(){
     line(touchX, touchY, ptouchX, ptouchY);
     return false;
   }
   $('button').show()
} else {
  $('canvas').show();
}

$(".post").on('click', function(ev){
  ev.preventDefault()
  var image = document.getElementById("defaultCanvas0")
  var imageData = image.toDataURL()
  console.log(typeof(imageData))
  socket.emit('post image', imageData)
})

socket.on('posted image', function(image){
  $('<img>').attr('src', image).appendTo($('body'))
})
