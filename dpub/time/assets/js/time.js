$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';
  var updateHour = ' ';

  function checkVideo(){
    if($('.show_video1').css('display') == 'block')
    {
      $(".show_video1 .video1")[0].play();
    }

    else if ($('.show_video1').css('display') == 'none') {
      $(".show_video1 .video1")[0].pause();
    }

    if($('.show_video2').css('display') == 'block')
    {
      $(".show_video2 .video2")[0].play();
    }

    else if ($('.show_video2').css('display') == 'none') {
      $(".show_video2 .video2")[0].pause();
    }

    if($('.show_video3').css('display') == 'block')
    {
      $(".show_video3 .video3")[0].play();
    }

    else if ($('.show_video3').css('display') == 'none') {
      $(".show_video3 .video3")[0].pause();
    }

    if($('.show_video4').css('display') == 'block')
    {
      $(".show_video4 .video4")[0].play();
    }

    else if ($('.show_video4').css('display') == 'none') {
      $(".show_video4 .video4")[0].pause();
    }

    if($('.show_video5').css('display') == 'block')
    {
      $(".show_video5 .video5")[0].play();
    }

    else if ($('.show_video5').css('display') == 'none') {
      $(".show_video5 .video5")[0].pause();
    }

    if($('.show_video6').css('display') == 'block')
    {
      $(".show_video6 .video6")[0].play();
    }

    else if ($('.show_video6').css('display') == 'none') {
      $(".show_video6 .video6")[0].pause();
    }

    if($('.show_video7').css('display') == 'block')
    {
      $(".show_video7 .video7")[0].play();
    }

    else if ($('.show_video7').css('display') == 'none') {
      $(".show_video7 .video7")[0].pause();
    }

    if($('.show_video8').css('display') == 'block')
    {
      $(".show_video8 .video8")[0].play();
    }

    else if ($('.show_video8').css('display') == 'none') {
      $(".show_video8 .video8")[0].pause();
    }

    if($('.show_video9').css('display') == 'block')
    {
      $(".show_video9 .video9")[0].play();
    }

    else if ($('.show_video9').css('display') == 'none') {
      $(".show_video9 .video9")[0].pause();
    }

  }

  function runCountdown(){

    var timer2 = "25:01";
    var interval = setInterval(function() {


    var timer = timer2.split(':');

    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    $('.countdown').html(minutes + ':' + seconds);
    if (minutes < 0) clearInterval(interval);

    if ((seconds <= 0) && (minutes <= 0)) clearInterval(interval);
    timer2 = minutes + ':' + seconds;
  }, 1000);

  }

runCountdown("25:01")





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
      if(momentMinute < 25) {halfMinute = 'work-one'; checkVideo(); }
      else if(momentMinute < 30){halfMinute = 'break-one'; checkVideo(); }
      else if(momentMinute < 55){halfMinute = 'work-two'; checkVideo(); }
      else {halfMinute = 'break-two'; checkVideo(); }
    }

    function checkHours(momentMinute){
      if(momentMinute < 5) {updateHour = 'every5';}
      else if (momentMinute < 10) {updateHour = 'every10';}
      else if (momentMinute < 15) {updateHour = 'every15';}
      else if (momentMinute < 20) {updateHour = 'every20';}
      else if (momentMinute < 25) {updateHour = 'every25';}
      else if (momentMinute < 30) {updateHour = 'every30';}
      else if (momentMinute < 35) {updateHour = 'every35';}
      else if (momentMinute < 40) {updateHour = 'every40';}
      else if (momentMinute < 45) {updateHour = 'every45';}
      else if (momentMinute < 50) {updateHour = 'every50';}
      else if (momentMinute < 55) {updateHour = 'every55';}
      else {updateHour = 'fullH';}
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
