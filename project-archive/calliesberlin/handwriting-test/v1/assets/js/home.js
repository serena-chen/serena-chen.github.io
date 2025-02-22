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
    if (scrollPercentage2 >= 0.99) {
      path2.style.strokeDasharray = "none";

    } else {
      path2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
    }

  });




  // Get a reference to the <path>
  var path3 = document.querySelector('#freepath3');

  // Get length of path... ~577px in this case
  var pathLength3 = path3.getTotalLength();

  // Make very long dashes (the length of the path itself)
  path3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;

  // Offset the dashes so the it appears hidden entirely
  path3.style.strokeDashoffset = pathLength3;

  // Jake Archibald says so
  // https://jakearchibald.com/2013/animated-line-drawing-svg/
  path3.getBoundingClientRect();

  // When the page scrolls...
  window.addEventListener("scroll", function(e) {

    // What % down is it?
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
    // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
    var scrollPercentage3 = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    var drawLength3 = pathLength3 * scrollPercentage3;

    // Draw in reverse
    path3.style.strokeDashoffset = pathLength3 - drawLength3;

    // When complete, remove the dash array, otherwise shape isn't quite sharp
   // Accounts for fuzzy math
    if (scrollPercentage3 >= 0.99) {
      path2.style.strokeDasharray = "none";

    } else {
      path3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;
    }

  });



  // function pathPrepare ($el) {
  // 		var lineLength = $el[0].getTotalLength();
  // 		$el.css("stroke-dasharray", lineLength);
  // 		$el.css("stroke-dashoffset", lineLength);
  // 	}
  //
  // 	var $word = $("path#word");
  // 	var $dot = $("path#dot");
  //
  // 	// prepare SVG
  // 	pathPrepare($word);
  // 	pathPrepare($dot);
  //
  // 	// init controller
  // 	var controller = new ScrollMagic.Controller();
  //
  // 	// build tween
  // 	var tween = new TimelineMax()
  // 		.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
  // 		.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
  // 		.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing
  //
  // 	// build scene
  // 	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
  // 					.setTween(tween)
  // 					.addIndicators() // add indicators (requires plugin)
  // 					.addTo(controller);

















  });
