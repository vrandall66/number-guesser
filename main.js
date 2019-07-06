// Math.floor(Math.random() * 100) + 1;
var randomNumb = 0;

function randomNumber() {
  var randomTarget = Math.floor(Math.random() * 100) + 1;
  var random = document.querySelector('.hidden-number');
  random.value = randomTarget;
  console.log(randomTarget);
  console.log(random.value);
  var random = randomTarget;
  randomNumb = randomTarget;
}

randomNumber();
console.log(randomNumb);

// function randomNum(min, max) {

// }

// Buttons
var updateBtn = document.querySelector('.update__btn');
var submitBtn = document.querySelector('.submit__btn');
var resetBtn = document.querySelector('.reset__btn');
var clearBtn = document.querySelector('.clear__btn');

// Other variables
var hiddenNumberX = document.querySelector('.hidden-number');

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

var verdict1 = document.querySelector('.player__verdict1');
var verdict2 = document.querySelector('.player__verdict2');

var appendCardName1 = document.querySelector('.card__name1');
var appendCardName2 = document.querySelector('.card__name2');
var appendCardNameWinner = document.querySelector('.card__winner--name');

updateBtn.addEventListener('click', updateRange);
submitBtn.addEventListener('click', function() {
  submitGuess();
  checkAndCompare1();
  checkAndCompare2();
  checkToDisableResetBtn();
});
resetBtn.addEventListener('click', function() {
  resetGame();
  checkToDisableResetBtn();
});
clearBtn.addEventListener('click', clearGame);

minRange.addEventListener('input', checkToDisableClearBtn);
maxRange.addEventListener('input', checkToDisableClearBtn);

guessInput1.addEventListener('input', function() {
  checkToDisableClearBtn();
  // checkRange()
});

// guessInput1.addEventListener('onkeypress', checkRange);

guessInput2.addEventListener('input', checkToDisableClearBtn);
nameInput1.addEventListener('input', checkToDisableClearBtn);
nameInput2.addEventListener('input', checkToDisableClearBtn);

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

// Reset Game = reset button function - use clearGame function plus generate a new number with randomNumber()

function resetGame() {
  clearGame();
  guess1.innerText = 'Challenger 1 Guess';
  guess2.innerText = 'Challenger 2 Guess';
  scorecardName1.innerText = 'Challenger 1 Name';
  scorecardName2.innerText = 'Challenger 2 Name';
  verdict1.innerText = 'HIGH/LOW/BOOM';
  verdict2.innerText = 'HIGH/LOW/BOOM';
  randomNumber();
}

// Disable reset button if there is nothing to reset

function checkToDisableResetBtn() {
  if (
    scorecardName1.innerText == 'Challenger 1 Name' &&
    scorecardName2.innerText == 'Challenger 2 Name' &&
    guess1.innerText == 'Challenger 1 Guess' &&
    guess2.innerText == 'Challenger 2 Guess'
  ) {
    resetBtn.disabled = true;
    resetBtn.classList.add('player__btn--disabled');
  } else if (
    scorecardName1.innerText !== 'Challenger 1 Name' ||
    scorecardName2.innerText !== 'Challenger 2 Name' ||
    guess1.innerText !== 'Challenger 1 Guess' ||
    guess2.innerText !== 'Challenger 2 Guess'
  ) {
    resetBtn.disabled = false;
    resetBtn.classList.remove('player__btn--disabled');
  }
}

// Clear Game - clear button function - CLEAR ALL input fields but not the range set or the random number generated

function clearGame() {
  minRange.value = '';
  maxRange.value = '';
  nameInput1.value = '';
  nameInput2.value = '';
  guessInput1.value = '';
  guessInput2.value = '';
  checkToDisableClearBtn();
}

// Disable clear button if there is nothing to clear

function checkToDisableClearBtn() {
  if (
    minRange.value == '' &&
    maxRange.value == '' &&
    nameInput1.value == '' &&
    nameInput2.value == '' &&
    guessInput1.value == '' &&
    guessInput2.value == ''
  ) {
    clearBtn.disabled = true;
    clearBtn.classList.add('player__btn--disabled');
  } else if (
    minRange.value !== '' ||
    maxRange.value !== '' ||
    nameInput1.value !== '' ||
    nameInput2.value !== '' ||
    guessInput1.value !== '' ||
    guessInput2.value !== ''
  ) {
    clearBtn.disabled = false;
    clearBtn.classList.remove('player__btn--disabled');
  }
}

// function to check and compare guess values

function checkAndCompare1() {
  var value1 = parseInt(guessInput1.value);
  var hiddenNumber = parseInt(hiddenNumberX.value);
  if (value1 > hiddenNumber) {
    verdict1.innerText = "That's too high";
  } else if (value1 < hiddenNumber) {
    verdict1.innerText = "That's too low";
  } else {
    verdict1.innerText = 'BOOM!';
    // passInfoToCard();
    displayWinner();
  }
}

function checkAndCompare2() {
  var value2 = parseInt(guessInput2.value);
  var hiddenNumber = parseInt(hiddenNumberX.value);
  if (value2 > hiddenNumber) {
    verdict2.innerText = "That's too high";
  } else if (value2 < hiddenNumber) {
    verdict2.innerText = "That's too low";
  } else {
    verdict2.innerText = 'BOOM!';
    // passInfoToCard();
    displayWinner();
  }
}

// Run this on page load
checkToDisableClearBtn();
checkToDisableResetBtn();

// pass info to card once there is a winner!
function passInfoToCard() {
  var name1 = scorecardName1.innerText;
  var name2 = scorecardName2.innerText;
  if (verdict1.innerText == 'BOOM!') {
    appendCardName1.innerText = name1;
    appendCardName2.innerText = name2;
    appendCardNameWinner.innerText = name1;
  } else if (verdict2.innerText == 'BOOM!') {
    appendCardName1.innerText = name1;
    appendCardName2.innerText = name2;
    appendCardNameWinner.innerText = name2;
  }
}

// window.addEventListener('keydown', displayWinner);
// element.insertAdjacentHTML(position, text);

function displayWinner() {
  // if (e.keyCode == 13) {
  var winnerBoard = document.querySelector('aside');
  var cardHTML = `<section class="card__section"><div class="card__challenger--names"><p class="card__name1" id="challenger1Scoreboard">${
    scorecardName1.innerText
  }</p><p class="vs">vs</p><p class="card__name2" id="challenger2Scoreboard">${
    scorecardName2.innerText
  }</p></div><div class="card__winner--names"><p class="card__winner--name"></p><p class="card__winner--text">WINNER</p></div><div class="card__winner--stats"><p class="card__game--stats"><span class="total-guesses">47</span> GUESSES</p><p class="card--game-time"><span class="total-time">1.35</span> MINUTES</p></div></section>`;
  winnerBoard.insertAdjacentHTML('afterbegin', cardHTML);

  var name1 = scorecardName1.innerText;
  var name2 = scorecardName2.innerText;
  if (verdict1.innerText == 'BOOM!') {
    appendCardNameWinner.innerText = name1;
  } else if (verdict2.innerText == 'BOOM!') {
    appendCardNameWinner.innerText = name2;
  }

  // }
}

// };
