$(document).ready(function() {



  // Get a reference to the <path>
  var path = document.querySelector('#freepath1');

  // Get length of path... ~577px in this case
  var pathLength = path.getTotalLength();

  // Make very long dashes (the length of the path itself)
  path.style.strokeDasharray = pathLength + ' ' + pathLength;

  // Offset the dashes so the it appears hidden entirely
  path.style.strokeDashoffset = pathLength;

  // Jake Archibald says so
  // https://jakearchibald.com/2013/animated-line-drawing-svg/
  path.getBoundingClientRect();

  // When the page scrolls...
  window.addEventListener("scroll", function(e) {

    // What % down is it?
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
    // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;

    // When complete, remove the dash array, otherwise shape isn't quite sharp
   // Accounts for fuzzy math
    if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = "none";

    } else {
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }

  });


  // Get a reference to the <path>
  var path2 = document.querySelector('#freepath2');

  // Get length of path... ~577px in this case
  var pathLength2 = path2.getTotalLength();

  // Make very long dashes (the length of the path itself)
  path2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;

  // Offset the dashes so the it appears hidden entirely
  path2.style.strokeDashoffset = pathLength2;

  // Jake Archibald says so
  // https://jakearchibald.com/2013/animated-line-drawing-svg/
  path2.getBoundingClientRect();

  // When the page scrolls...
  window.addEventListener("scroll", function(e) {

    // What % down is it?
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
    // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
    var scrollPercentage2 = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    var drawLength2 = pathLength2 * scrollPercentage2;

    // Draw in reverse
    path2.style.strokeDashoffset = pathLength2 - drawLength2;

    // When complete, remove the dash array, otherwise shape isn't quite sharp
   // Accounts for fuzzy math
    if (scrollPercentage2 >= 3000) {
      path2.style.strokeDasharray = "none";

    } else {
      path2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
    }

  });





















  });
