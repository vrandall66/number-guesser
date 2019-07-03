// Math.floor(Math.random() * 100) + 1;

// Buttons
var updateBtn = document.querySelector('.update__btn');
var submitBtn = document.querySelector('.submit__btn');

// Other variables
var minRange = document.querySelector('.player__input--min');
var maxRange = document.querySelector('.player__input--max');
var min = document.querySelector('.min');
var max = document.querySelector('.max');
var guessInput1 = document.querySelector('.player__input--guess1');
var guessInput2 = document.querySelector('.player__input--guess2');
var guess1 = document.querySelector('.player__guess1');
var guess2 = document.querySelector('.player__guess2');
var nameInput1 = document.querySelector('.player__input--name1');
var nameInput2 = document.querySelector('.player__input--name2');
var scorecardName1 = document.querySelector('.player__name1');
var scorecardName2 = document.querySelector('.player__name2');

updateBtn.addEventListener('click', updateRange);
submitBtn.addEventListener('click', submitGuess);

// This function takes user range input and updates the current range
function updateRange() {
  var minValue = minRange.value;
  var maxValue = maxRange.value;
  min.innerText = minValue;
  max.innerText = maxValue;
}

// Submit Guess Function -- this updates both current guesses and player names
function submitGuess() {
  var ch1Name = nameInput1.value;
  var ch2Name = nameInput2.value;
  var ch1Guess = guessInput1.value;
  var ch2Guess = guessInput2.value;
  guess1.innerText = ch1Guess;
  guess2.innerText = ch2Guess;
  scorecardName1.innerText = ch1Name;
  scorecardName2.innerText = ch2Name;
}

// Input validation alphanumeric -- work in progress

// var inputName = document.querySelector('.player__input--name1');
// console.log(inputName);

// inputName.oninvalid = function(event) {
//   event.target.setCustomValidity('invalid');
// };
