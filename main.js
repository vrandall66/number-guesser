// Global Variables
var randomTarget;
var minimum;
var maximum;
var countRounds = 0;

// Other Global Variables
var minRange = document.querySelector('.player__input--min');
var maxRange = document.querySelector('.player__input--max');
var min = document.querySelector('.min');
var max = document.querySelector('.max');
var guessp1 = document.querySelector('.player__input--guess1');
var guessp2 = document.querySelector('.player__input--guess2');
var g1 = document.querySelector('.player__guess1');
var g2 = document.querySelector('.player__guess2');
var player1 = document.querySelector('.player__input--name1');
var player2 = document.querySelector('.player__input--name2');
var p1 = document.querySelector('.player__name1');
var p2 = document.querySelector('.player__name2');
var verdict1 = document.querySelector('.player__verdict1');
var verdict2 = document.querySelector('.player__verdict2');

// Buttons
var updateBtn = document.querySelector('.update__btn');
var submitBtn = document.querySelector('.submit__btn');
var resetBtn = document.querySelector('.reset__btn');
var clearBtn = document.querySelector('.clear__btn');

// Event Listeners

updateBtn.addEventListener('click', function() {
  checkRange();
});

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

// Event Listeners to watch for inputs and check whether to disable CLear Game button
minRange.addEventListener('input', checkToDisableClearBtn);
maxRange.addEventListener('input', checkToDisableClearBtn);
guessp1.addEventListener('input', checkToDisableClearBtn);
guessp2.addEventListener('input', checkToDisableClearBtn);
player1.addEventListener('input', checkToDisableClearBtn);
player2.addEventListener('input', checkToDisableClearBtn);

// getRandomNumber(1, 100);

// Random Number
function getRandomNumber(minimum, maximum) {
  var random = Math.random() * (maximum - minimum + 1) + maximum;
  randomTarget = Math.floor(random);
  console.log(randomTarget);
}

// update text range from minimum and maximum global variables which is from the input user typed in
function updateRange() {
  var minput = parseInt(minRange.value);
  var maxput = parseInt(maxRange.value);
  min.innerText = minput;
  max.innerText = maxput;
  getRandomNumber(minput, maxput)
}

// Submit Guess Function -- this updates both current guesses and player names
function submitGuess() {
  var ch1Name = player1.value;
  var ch2Name = player2.value;
  var ch1Guess = guessp1.value;
  var ch2Guess = guessp2.value;
  g1.innerText = ch1Guess;
  g2.innerText = ch2Guess;
  p1.innerText = ch1Name;
  p2.innerText = ch2Name;
  countRounds = countRounds + 1;
}

// Set Text to default

function defaultText() {
  g1.innerText = '0';
  g2.innerText = '0';
  p1.innerText = 'Challenger 1 Name';
  p2.innerText = 'Challenger 2 Name';
  verdict1.innerText = '';
  verdict2.innerText = '';
  minimum = 0;
  maximum = 0;
}

// Reset Game = reset button function - use clearGame function plus generate a new number with randomNumber()

function resetGame() {
  clearGame();
  countRounds = 0;
  defaultText();
  checkRange();
  // updateRange();
}

// Disable reset button if there is nothing to reset

function checkToDisableResetBtn() {
  if (
    p1.innerText == 'Challenger 1 Name' &&
    p2.innerText == 'Challenger 2 Name' &&
    g1.innerText == '0' &&
    g2.innerText == '0'
  ) {
    resetBtn.disabled = true;
    resetBtn.classList.add('player__btn--disabled');
  } else if (
    p1.innerText !== 'Challenger 1 Name' ||
    p2.innerText !== 'Challenger 2 Name' ||
    g1.innerText !== '0' ||
    g2.innerText !== '0'
  ) {
    resetBtn.disabled = false;
    resetBtn.classList.remove('player__btn--disabled');
  }
}

// Clear Game - clear button function - CLEAR ALL input fields but not the range set or the random number generated

function clearGame() {
  minRange.value = '';
  maxRange.value = '';
  player1.value = '';
  player2.value = '';
  guessp1.value = '';
  guessp2.value = '';
  checkToDisableClearBtn();
}

// Disable clear button if there is nothing to clear

function checkToDisableClearBtn() {
  if (
    minRange.value == '' &&
    maxRange.value == '' &&
    player1.value == '' &&
    player2.value == '' &&
    guessp1.value == '' &&
    guessp2.value == ''
  ) {
    clearBtn.disabled = true;
    clearBtn.classList.add('player__btn--disabled');
  } else if (
    minRange.value !== '' ||
    maxRange.value !== '' ||
    player1.value !== '' ||
    player2.value !== '' ||
    guessp1.value !== '' ||
    guessp2.value !== ''
  ) {
    clearBtn.disabled = false;
    clearBtn.classList.remove('player__btn--disabled');
  }
}

// function to check and compare guess values
function checkAndCompare1() {
  guessValue1 = parseInt(guessp1.value);
  if (guessValue1 > randomTarget) {
    verdict1.innerText = "That's too high";
  } else if (guessValue1 < randomTarget) {
    verdict1.innerText = "That's too low";
  } else {
    verdict1.innerText = 'BOOM!';
    displayWinner();
  }
}

function checkAndCompare2() {
  guessValue2 = parseInt(guessp2.value);
  if (guessValue2 > randomTarget) {
    verdict2.innerText = "That's too high";
  } else if (guessValue2 < randomTarget) {
    verdict2.innerText = "That's too low";
  } else {
    verdict2.innerText = 'BOOM!';
    displayWinner();
  }
}

// Run button checks on load
checkToDisableClearBtn();
checkToDisableResetBtn();

// Once the right number has been guessed, then reset round count, increase the max by 10, decrease the min by 10, get a new random number based on the new range, update text display for range
function uponSuccessfulWin() {
  countRounds = 0;
  maximum = maximum + 10;
  minimum = minimum - 10;
  getRandomNumber(minimum, maximum);
  updateRange();

  // for testing - console log min and max to test minimum and maximum value
  console.log(minimum);
  // console log random target to have a value (to test guessing it correctly)
  console.log(maximum);
  console.log(randomTarget);
}

function displayWinner() {
  var winnerBoard = document.querySelector('aside');
  var currentName1 = p1.innerText;
  var currentName2 = p2.innerText;
  if (verdict1.innerText == 'BOOM!') {
    var currentWinner = currentName1;
  } else if (verdict2.innerText == 'BOOM!') {
    var currentWinner = currentName2;
  }
  var cardHTML = `<section class="card__section"><div class="card__challenger--names"><p class="card__name1" id="challenger1Scoreboard">${currentName1}</p><p class="vs">vs</p><p class="card__name2" id="challenger2Scoreboard">${currentName2}</p></div><div class="card__winner--names"><p class="card__winner--name">${currentWinner}</p><p class="card__winner--text">WINNER</p></div><div class="card__winner--stats"><p class="card__game--stats"><span class="total-guesses">${countRounds}</span> GUESSES</p><p class="card--game-time"><span class="total-time">1.35</span> MINUTES</p><button class="closeBtn" type="button">x</button></div></section>`;

  winnerBoard.insertAdjacentHTML('afterbegin', cardHTML);
  uponSuccessfulWin();
}









var rangeError = document.querySelector('.range-error');
var alertImg = document.querySelector('.error--icon');


function checkRange() {
  // build this out more so that it shows the error if
  // the range is incorrect OR it runs update range if
  // range is correct
  if (parseInt(minRange.value) >= parseInt(maxRange.value)) {
    rangeError.classList.remove('hidden'); 
} else {
   updateRange()
  }
}

function guessInRange() {
  if (parseInt(guessp1.value) > parseInt(maxRange.value) ||
    parseInt(guessp1.value) < parseInt(minRange.value) ||
    parseInt(guessp2.value) > parseInt(maxRange.value) ||
    parseInt(guessp2.value) < parseInt(minRange.value)) {
    rangeError.classList.remove('hidden');
  }
}








