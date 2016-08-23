var guess = document.getElementById('#guessBox')
var submit = document.querySelector('.pickNumber');
var clearButton = document.querySelector('.clear');
var randomNumber = Math.floor(Math.random() * 100) + 1;



submit.addEventListener ('click', function (){

  parsInt(guess)

  if (guess === randomNumber) "Shazam!";

  else if (guess < randomNumber) "Aiming too low.";

  else if (guess > randomNumber) "Flying too high"
});



clearButton.addEventListener('click', function () {
  var guess = "";
});
