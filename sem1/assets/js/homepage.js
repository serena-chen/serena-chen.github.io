$(document).ready(function() {


/* Background Images */



/* HOVER on links */


  $('.rollover1').mouseenter(function() {
     $('.highlighttext1').addClass('showme');
     $('.text1').addClass('showme');
     $('.bodymarquee').addClass('showme');
   });

   $('.rollover1').mouseleave(function() {
      $('.highlighttext1').removeClass('showme');
      $('.text1').removeClass('showme');
      $('.bodymarquee').removeClass('showme');
    });

    $('.rollover2').mouseenter(function() {
       $('.highlighttext2').addClass('showme');
       $('.text2').addClass('showme');
       $('.bodymarquee').addClass('showme');

     });

     $('.rollover2').mouseleave(function() {
        $('.highlighttext2').removeClass('showme');
        $('.text2').removeClass('showme');
        $('.bodymarquee').removeClass('showme');
      });

      $('.rollover3').mouseenter(function() {
         $('.highlighttext3').addClass('showme');
         $('.text3').addClass('showme');
         $('.bodymarquee').addClass('showme');
       });

       $('.rollover3').mouseleave(function() {
          $('.highlighttext3').removeClass('showme');
          $('.text3').removeClass('showme');
          $('.bodymarquee').removeClass('showme');
        });



/* Nav popups */

$('.rantlisticon').click(function() {
   $('.rantnumberpopup').toggleClass('showme');
   $('.bodymarquee').removeClass('changeblend');
   $('.aboutpopup').removeClass('showme');
 });

 $('.bgimage').click(function() {
    $('.rantnumberpopup').removeClass('showme');
  });

  $('.bodymarquee').click(function() {
     $('.rantnumberpopup').removeClass('showme');
   });

   $('.abouticon').click(function() {
      $('.aboutpopup').toggleClass('showme');
      $('.bodymarquee').toggleClass('changeblend');
      $('.rantnumberpopup').removeClass('showme');
    });



  var music = document.getElementById('music'); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById('pButton'); // play button
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline

// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "play";
    }
}


//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
        page_scroll();
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
        stop_scroll();
    }
}


// Gets audio file duration
music.addEventListener("canplaythrough", function() {
    duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}






























  });
