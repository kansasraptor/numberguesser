var generatedNumber = Math.floor(Math.random()*100+1);

function Main() {
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var playerGuess = parseInt(input.value);

  if (playerGuess > generatedNumber) {
    output.value="Flying too high!";
  } else if (playerGuess < generatedNumber) {
      output.value = "Aiming too low...";
    } else if (playerGuess == generatedNumber) {
      output.value = "Shazam! Great work.";
    }
};



// var guess = document.getElementById('#guessBox')
// var submit = document.querySelector('.pickNumber');
// var clearButton = document.querySelector('.clear');
// var input = document.querySelector('#guessBox')
// var number = 10

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// When a user clicks on "Guess A Number"
// get value from guessBox
// I want to store that value in a variable
// I already have a variable with a umber in it called var number
// Is user guess bigger than var number?
  // If yes : display "too high" somewhere on the page (where?!)
  // If no: display "too low" somewher *where?!)

// get value from input field javascript

// submit.addEventListener ('click', function (){
//
//   parsInt(guess)
//
//   if (guess === randomNumber) "Shazam!";
//
//   else if (guess < randomNumber) "Aiming too low.";
//
//   else if (guess > randomNumber) "Flying too high"
// });
//
//
//
// clearButton.addEventListener('click', function () {
//   var guess = "";
// });
