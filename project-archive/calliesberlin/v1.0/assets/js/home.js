$(document).ready(function() {


  var myIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
      setTimeout(carousel, 3000); // Change image every 2 seconds
  }


// Add jQuery here

$("#happydays").get(0).play();

// Video container
var video = document.getElementById('happydays');

// Unmute Button
var unmuteButton = document.getElementById('unmute');


// Adding event listener for the 'Mute' button
unmuteButton.addEventListener('click', function() {
  if(video.muted === true) {
    // unMute the video
    video.muted = false;

    // Update the text of the button
    this.innerHTML = 'Sound Off';
  } else {
    // Mute the video
    video.muted = true;

    // Update the text of the button
    this.innerHTML = 'Sound On';
  }
});



// // Mute/Unmute video by clicking on it
// video.addEventListener('click', function() {
//   if(video.muted === true) {
//     video.muted = false;
//   } else {
//     video.muted = true;
//   }
// });




    // $("#audio").get(0).play();
    //
    //
    //
    //
    // $(".happydays").click(function(){
    //     $("#audio").get(0).muted();
    //     $(".happydays").get(0).pause();
    // });

    // $(".happydays").click(function(){
    //     $(".happydays").removeAttr("muted");
    // });

















  });
