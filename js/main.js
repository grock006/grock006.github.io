$(document).ready(function(){
    $(".main").tiltedpage_scroll({
        angle: 30
    });
});


var shine = new Shine(document.getElementById('headline'));

function handleMouseMove(event) {
    shine.light.position.x = event.clientX;
    shine.light.position.y = event.clientY;
    shine.draw();
}

window.addEventListener('mousemove', handleMouseMove, false);


$("small").hover(function(){ 
      $(' .tps-section:nth-child(1n+1) .tps-wrapper').animate({backgroundSize: "1050px"}, 500, "linear");
  }, function(){
       $(' .tps-section:nth-child(1n+1) .tps-wrapper').animate({backgroundSize: "1000px"}, 500, "linear");
  }
);


         
