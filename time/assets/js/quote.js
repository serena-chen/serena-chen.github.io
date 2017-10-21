$(document).ready(function(){
  var quoteSource=[
  {
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible."
    },
    {
      quote:"Believe you can and you're halfway there.",
      name:"Theodore Roosevelt"
    },
    {
      quote:"It does not matter how slowly you go as long as you do not stop.",
      name:"Confucius"
    },
    {
      quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      name:"Thomas A. Edison"
    },
    {
      quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
      name:"Confucius"
    },
    {
      quote:"Don't watch the clock; do what it does. Keep going.",
      name:"Sam Levenson"
    },
    {
      quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      name:"Ayn Rand"
    },
    {
      quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      name:"Ayn Rand"
    },
    {
      quote:"Expect problems and eat them for breakfast.",
      name:"Alfred A. Montapert"
    },
    {
      quote:"Start where you are. Use what you have. Do what you can.",
      name:"Arthur Ashe"
    },
    {
      quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      name:"Samuel Beckett"
    },
    {
      quote:"Be yourself; everyone else is already taken.",
      name:"Oscar Wilde"
    },
    {
      quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      name:"Albert Einstein"
    },
    {
      quote:"Always remember that you are absolutely unique. Just like everyone else.",
      name:"Margaret Mead"
    },
    {
      quote:"Do not take life too seriously. You will never get out of it alive.",
      name:"Elbert Hubbard"
    },
    {
      quote:"People who think they know everything are a great annoyance to those of us who do.",
      name:"Isaac Asimov"
    },
    {
      quote:"Procrastination is the art of keeping up with yesterday.",
      name:"Don Marquis"
    },
    {
      quote:"Get your facts first, then you can distort them as you please.",
      name:"Mark Twain"
    },
    {
      quote:"A day without sunshine is like, you know, night.",
      name:"Steve Martin"
    },
    {
      quote:"No matter how you feel today, get up, dress up and show up."

    },
    {
      quote:"Don't sweat the petty things and don't pet the sweaty things.",
      name:"George Carlin"
    },
    {
      quote:"Always do whatever's next.",
      name:"George Carlin"
    },
    {
      quote:"Time heals almost everything. Sometimes all you need is time."
    },
    {
      quote:"Happiness is not something ready made. It comes from your own actions.",
      name:"Dalai Lama"
    },
    {
      quote:"Sit in silence for at least 10 minutes each day. Keep your mind free of worries during this time.",
    },
    {
      quote:"Each night before you sleep, complete the following statement: “I’m thankful for...”",
    },
    {
      quote:"Enjoy the journey of your life. There are no endpoints, just turning points.",
    },
    {
      quote:"Find meaning and purpose in everything you do, including work.",
    },
    {
      quote:"Always say yes when someone asks you to dance.",
    },
    {
      quote:"Each night before you sleep, complete the following statement: “I’m thankful for...”",
    },
    {
      quote:"Forgive everyone, including yourself, for everything.",
    },
    {
      quote:"Develop and maintain intimate relationships with people around you. Life is less lonely that way.",
    },
    {
      quote:"Call your mother often. She always misses you and will always be glad to hear your voice.",
    },
    {
      quote:"Do more of the things that give you pleasure.",
    },
    {
      quote:"Try to make at least 3 people smile each day, beginning with yourself.",
    },
    {
      quote:"No matter how you feel today, get up, dress up and show up.",
    },
    {
      quote:"Don’t compare your life with others. You have no idea what their journey is all about.",
    },
    {
      quote:"Slow down once in a while, and take time to enjoy all the beauty around you.",
    },
    {
      quote:"Find your passion, and create your life based on this passion.",
    },
    {
      quote:"You are the boss of your life. manage it well.",
    },
    {
      quote:"Smile and laugh more often. It will preserve your youthfullness and keep the wrinkles away.",
    },
    {
      quote:"Practice being in the here and now. This is the most important moment of your life.",
    },
    {
      quote:"Burn the candles and use the nice sheets. Don't save it for a special occasion. Today is special enough.",
    },
    {
      quote:"Your job and your boss won’t take care of you when you are sick; your family will. Prioritize accordingly.",
    }

];


  $('#quoteButton').click(function(evt){
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();
    //prevent browser's default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber= Math.floor(Math.random()*sourceLength);
    //set a new quote
    for(i=0;i<=sourceLength;i+=1){
    var newQuoteText = quoteSource[randomNumber].quote;
    var newQuoteGenius = quoteSource[randomNumber].name;
    //console.log(newQuoteText,newQuoteGenius);
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
    //fade out animation with callback
    quoteContainer.fadeOut(timeAnimation, function(){
      quoteContainer.html('');
      quoteContainer.append('<p>'+newQuoteText+'</p>');

      //fadein animation.
      quoteContainer.fadeIn(timeAnimation);
    });

    break;
  };//end for loop

});//end quoteButton function


});//end document ready
