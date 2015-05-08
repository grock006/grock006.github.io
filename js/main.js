// titled scroll effect
$(document).ready(function(){
    $(".main").tiltedpage_scroll({
        angle: 30
    });


// title shine effect
var shine = new Shine(document.getElementById('headline'));

function handleMouseMove(event) {
    shine.light.position.x = event.clientX;
    shine.light.position.y = event.clientY;
    shine.draw();
}

window.addEventListener('mousemove', handleMouseMove, false);

// zoom in on hover
$("small").hover(function(){ 
      $(this).addClass('dark');
      $(' .tps-section:nth-child(1n+1) .tps-wrapper').animate({backgroundSize: "1050px"}, 500, "linear");
  }, function(){
      $(this).removeClass('dark');
       $(' .tps-section:nth-child(1n+1) .tps-wrapper').animate({backgroundSize: "1000px"}, 500, "linear");
  }
);

$("small a i").hover(function(){
    $(this).addClass('animated infinite pulse');
  }, function(){
    $(this).removeClass('animated infinite pulse');
  }
)


});         
