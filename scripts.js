var guess = document.getElementById('#guessBox')
var submit = document.querySelector('.pickNumber');
var clearButton = document.querySelector('.clear');
var input = document.querySelector('#guessBox')
var number = 10

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// When a user clicks on "Guess A Number"
// get value from guessBox
// I want to store that value in a variable
// I already have a variable with a umber in it called var number
// Is user guess bigger than var number?
  // If yes : display "too high" somewhere on the page (where?!)
  // If no: display "too low" somewher *where?!)

// get value from input field javascript

submit.addEventListener ('click', function (){

  parsInt(input.value)

  if (guess === randomNumber) "Shazam!";

  else if (guess < randomNumber) "Aiming too low.";

  else if (guess > randomNumber) "Flying too high"
});



clearButton.addEventListener('click', function () {
  var guess = "";
});
