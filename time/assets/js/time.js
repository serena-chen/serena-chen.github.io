$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';
  var updateHour = ' ';

  function checkVideo(){
    if($('.show_video').css('display') == 'block')
    {
      $(".show_video video")[0].play();
    }

    else if ($('.show_video').css('display') == 'none') {
      $(".show_video video")[0].pause();
    }

  }

  function checkVideo(){
    if($('.show_video2').css('display') == 'block')
    {
      $(".show_video2 video")[0].play();
    }

    else if ($('.show_video2').css('display') == 'none') {
      $(".show_video2 video")[0].pause();
    }

  }

  function checkVideo(){
    if($('.show_video3').css('display') == 'block')
    {
      $(".show_video3 video")[0].play();
    }

    else if ($('.show_video3').css('display') == 'none') {
      $(".show_video3 video")[0].pause();
    }

  }

  function checkVideo(){
    if($('.show_video4').css('display') == 'block')
    {
      $(".show_video4 video")[0].play();
    }

    else if ($('.show_video4').css('display') == 'none') {
      $(".show_video4 video")[0].pause();
    }

  }

  function checkVideo(){
    if($('.show_video5').css('display') == 'block')
    {
      $(".show_video5 video")[0].play();
    }

    else if ($('.show_video5').css('display') == 'none') {
      $(".show_video5 video")[0].pause();
    }

  }

  function checkVideo(){
    if($('.show_video6').css('display') == 'block')
    {
      $(".show_video6 video")[0].play();
    }

    else if ($('.show_video6').css('display') == 'none') {
      $(".show_video6 video")[0].pause();
    }

  }





// Update time
  function update() {
    var quarter = moment().quarter();
    var momentSecond = moment().second();
    var momentMinute = moment().minute();
    var momentHour= moment().format('h').toLowerCase();
    var momentDay = moment().format('dddd').toLowerCase();
    var momentMonth = moment().format('MMMM').toLowerCase();
    var momentYear = moment().format('YYYY').toLowerCase();
    var momentAMPM = moment().format('A').toLowerCase();

    function oddOrEvenS(momentSecond){
      if(momentSecond % 2 === 0) {oddSecond = 'oddS';}
      else {oddSecond = 'evenS';}
    }

    function oddOrEvenM(momentMinute){
      if(momentMinute % 2 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 30) {halfSecond = 'halfS';}
      else {halfSecond = 'fullS';}
    }

    function checkHalfMinute(momentMinute){
      if(momentMinute < 25) {halfMinute = 'work-one'; checkVideo();}
      else if(momentMinute < 30){halfMinute = 'break-one'; checkVideo();}
      else if(momentMinute < 55){halfMinute = 'work-two'; checkVideo();}
      else {halfMinute = 'break-two'; checkVideo();}
    }

    function checkHours(momentMinute){
      if(momentMinute < 15) {updateHour = 'quarterH';}
      else if (momentMinute < 30) {updateHour = 'halfH';}
      else if (momentMinute < 45) {updateHour = 'threeH';}
      else {updateHour = 'fullH';}
    }

    // Check if odd, even, quarterpast
    oddOrEvenS(momentSecond);
    checkHalfSecond(momentSecond);
    oddOrEvenM(momentMinute);
    checkHalfMinute(momentMinute);
    checkHours(momentMinute);

    var timeAll = ['s' + momentSecond, 'm' + momentMinute, 'h' + momentHour, momentAMPM, momentDay, momentMonth, 'y' + momentYear, oddSecond, oddMinute, halfSecond, halfMinute, updateHour];
    var timeClass = timeAll.join(' ');

    // Add classes
    $('body').attr('class', timeClass);

    // Add format
    $('.time').html(moment().format('dddd D MMMM h:mm:ss A'));
  };

  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });

});
