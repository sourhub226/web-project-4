 $(window).resize(function() {
  if ($(window).width() < 601) {
      console.log("trigger");
     $('.personal-info').waypoint({
         handler: function(direction){
             if (direction == 'down'){
                 console.log("down");
                 $('.personal-info img').css({"border-radius":"50%","filter":"none"});
             }
             else{
                 console.log("up");
                 $('.personal-info img').css({"border-radius":"0%","filter":"grayscale(100)"});
             }
             
         },
         offset:'50%'
     })
  }
 
});