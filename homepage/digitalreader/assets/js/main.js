$(document).ready(function() {


/* Background Images */

  $('.bg1').mouseenter(function() {
     $('.bg1__images').addClass('showme');
   });

   $('.bg1').mouseleave(function() {
   $('.bg1__images').removeClass('showme');
 });

 $('.bg2').mouseenter(function() {
    $('.bg2__images').addClass('showme');
  });

  $('.bg2').mouseleave(function() {
  $('.bg2__images').removeClass('showme');
});

$('.bg3').mouseenter(function() {
   $('.bg3__images').addClass('showme');
 });

 $('.bg3').mouseleave(function() {
 $('.bg3__images').removeClass('showme');
});

$('.bg4').mouseenter(function() {
   $('.bg4__images').addClass('showme');
 });

 $('.bg4').mouseleave(function() {
 $('.bg4__images').removeClass('showme');
});

$('.bg5').mouseenter(function() {
   $('.bg5__images').addClass('showme');
 });

 $('.bg5').mouseleave(function() {
 $('.bg5__images').removeClass('showme');
});

$('.bg6').mouseenter(function() {
   $('.bg6__images').addClass('showme');
 });

 $('.bg6').mouseleave(function() {
 $('.bg6__images').removeClass('showme');
});

$('.bg7').mouseenter(function() {
   $('.bg7__images').addClass('showme');
 });

 $('.bg7').mouseleave(function() {
 $('.bg7__images').removeClass('showme');
});

$('.bg8').mouseenter(function() {
   $('.bg8__images').addClass('showme');
 });

 $('.bg8').mouseleave(function() {
 $('.bg8__images').removeClass('showme');
});

$('.bg9').mouseenter(function() {
   $('.bg9__images').addClass('showme');
 });

 $('.bg9').mouseleave(function() {
 $('.bg9__images').removeClass('showme');
});

$('.bg10').mouseenter(function() {
   $('.bg10__images').addClass('showme');
 });

 $('.bg10').mouseleave(function() {
 $('.bg10__images').removeClass('showme');
});

$('.bg11').mouseenter(function() {
   $('.bg11__images').addClass('showme');
 });

 $('.bg11').mouseleave(function() {
 $('.bg11__images').removeClass('showme');
});

$('.bg12').mouseenter(function() {
   $('.bg12__images').addClass('showme');
 });

 $('.bg12').mouseleave(function() {
 $('.bg12__images').removeClass('showme');
});

$('.bg13').mouseenter(function() {
   $('.bg13__images').addClass('showme');
 });

 $('.bg13').mouseleave(function() {
 $('.bg13__images').removeClass('showme');
});

$('.bg14').mouseenter(function() {
   $('.bg14__images').addClass('showme');
 });

 $('.bg14').mouseleave(function() {
 $('.bg14__images').removeClass('showme');
});

$('.bg15').mouseenter(function() {
   $('.bg15__images').addClass('showme');
 });

 $('.bg15').mouseleave(function() {
 $('.bg15__images').removeClass('showme');
});


$('.bg16').mouseenter(function() {
   $('.bg16__images').addClass('showme');
 });

 $('.bg16').mouseleave(function() {
 $('.bg16__images').removeClass('showme');
});

$('.bg17').mouseenter(function() {
   $('.bg17__images').addClass('showme');
 });

 $('.bg17').mouseleave(function() {
 $('.bg17__images').removeClass('showme');
});

$('.bg18').mouseenter(function() {
   $('.bg18__images').addClass('showme');
 });

 $('.bg18').mouseleave(function() {
 $('.bg18__images').removeClass('showme');
});

$('.bg19').mouseenter(function() {
   $('.bg19__images').addClass('showme');
 });

 $('.bg19').mouseleave(function() {
 $('.bg19__images').removeClass('showme');
});

$('.bg20').mouseenter(function() {
   $('.bg20__images').addClass('showme');
 });

 $('.bg20').mouseleave(function() {
 $('.bg20__images').removeClass('showme');
});

$('.bg21').mouseenter(function() {
   $('.bg21__images').addClass('showme');
 });

 $('.bg21').mouseleave(function() {
 $('.bg21__images').removeClass('showme');
});

$('.bg22').mouseenter(function() {
   $('.bg22__images').addClass('showme');
 });

 $('.bg22').mouseleave(function() {
 $('.bg22__images').removeClass('showme');
});

$('.bg23').mouseenter(function() {
   $('.bg23__images').addClass('showme');
 });

 $('.bg23').mouseleave(function() {
 $('.bg23__images').removeClass('showme');
})

$('.bg24').mouseenter(function() {
   $('.bg24__images').addClass('showme');
 });

 $('.bg24').mouseleave(function() {
 $('.bg24__images').removeClass('showme');
});

$('.bg25').mouseenter(function() {
   $('.bg25__images').addClass('showme');
 });

 $('.bg25').mouseleave(function() {
 $('.bg25__images').removeClass('showme');
});








/* HOVER on links */

$('.rollover').mouseenter(function() {
   $('.bodytext').addClass('noblend');
 });

 $('.rollover').mouseleave(function() {
    $('.bodytext').removeClass('noblend');
  });


/* Nav popups */

 $('.chapterlink').click(function() {
    $('.chapterpopup').toggleClass('showme');
    $('.relatedpopup').removeClass('showme');
  });

  $('.relatedicon').click(function() {
     $('.relatedpopup').toggleClass('showme');
     $('.chapterpopup').removeClass('showme');
   });

   $('.row1').click(function() {
      $('.relatedpopup').removeClass('showme');
      $('.chapterpopup').removeClass('showme');
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
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
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
