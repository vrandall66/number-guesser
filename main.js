var min = document.querySelector('.min');
var max = document.querySelector('.max');
var minRange = document.querySelector('.player__input--min');
var maxRange = document.querySelector('.player__input--max');
var player1 = document.querySelector('.player__input--name1');
var player2 = document.querySelector('.player__input--name2');
var guessp1 = document.querySelector('.player__input--guess1');
var guessp2 = document.querySelector('.player__input--guess2');
var p1 = document.querySelector('.player__name1');
var p2 = document.querySelector('.player__name2');
var g1 = document.querySelector('.player__guess1');
var g2 = document.querySelector('.player__guess2');
var verdict1 = document.querySelector('.player__verdict1');
var verdict2 = document.querySelector('.player__verdict2');
var guessError1 = document.querySelector('.guess-error-1');
var guessError2 = document.querySelector('.guess-error-2');
var alertImg1 = document.querySelector('.error-icon-1');
var alertImg2 = document.querySelector('.error-icon-2');
var updateBtn = document.querySelector('.update__btn');
var submitBtn = document.querySelector('.submit__btn');
var resetBtn = document.querySelector('.reset__btn');
var clearBtn = document.querySelector('.clear__btn');
var alertImg = document.querySelector('.error--icon');
var rangeError = document.querySelector('.range-error');
var randomTarget;
var minimum;
var maximum;
var countRounds = 0;

checkToDisableUpdateBtn();
checkToDisableClearBtn();
checkToDisableResetBtn();
checkToDisableSubmitBtn();

updateBtn.addEventListener('click', minMaxEmpty);

submitBtn.addEventListener('click', function() {
  guessWithinRangeP1();
  guessWithinRangeP2();
  checkToDisableResetBtn();
  checkAndCompare1();
  checkAndCompare2();
});

resetBtn.addEventListener('click', function() {
  resetGame();
  checkToDisableResetBtn();
});

clearBtn.addEventListener('click', clearGame);

minRange.addEventListener('input', function() {
  checkToDisableClearBtn();
  checkToDisableUpdateBtn();
});

maxRange.addEventListener('input', function() {
  checkToDisableClearBtn();
  checkToDisableUpdateBtn();
});
guessp1.addEventListener('input', function() {
  checkToDisableClearBtn();
  checkToDisableSubmitBtn();
});
guessp2.addEventListener('input', function() {
  checkToDisableClearBtn();
  checkToDisableSubmitBtn();
});
player1.addEventListener('input', checkToDisableClearBtn);

player2.addEventListener('input', checkToDisableClearBtn);

function getRandomNumber(minput, maxput) {
  var random = Math.random() * (maxput - minput + 1) + minput;
  randomTarget = Math.floor(random);
}

function getRandomFromInputs() {
  minimum = parseInt(document.querySelector('.player__input--min').value);
  maximum = parseInt(document.querySelector('.player__input--max').value);
  getRandomNumber(minimum, maximum);
  console.log(randomTarget);
  return randomTarget;
}

function updateRangeText() {
  min.innerText = minimum;
  max.innerText = maximum;
}

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

function defaultText() {
  guessp1.value = '';
  guessp2.value = '';
  g1.innerText = '0';
  g2.innerText = '0';
  verdict1.innerText = '';
  verdict2.innerText = '';
  minimum = 0;
  maximum = 0;
  min.innerText = '0';
  max.innerText = '0';
}

function resetGame() {
  countRounds = 0;
  defaultText();
  getRandomFromInputs();
  updateRangeText();
}

function clearGame() {
  minRange.value = '';
  maxRange.value = '';
  player1.value = '';
  player2.value = '';
  guessp1.value = '';
  guessp2.value = '';
  checkToDisableClearBtn();
}

function checkToDisableResetBtn() {
  if (
    p1.innerText === 'CHALLENGER 1 NAME' &&
    p2.innerText === 'CHALLENGER 2 NAME' &&
    g1.innerText === '0' &&
    g2.innerText === '0'
  ) {
    resetBtn.disabled = true;
    resetBtn.classList.add('player__btn--disabled');
  } else if (
    p1.innerText !== 'CHALLENGER 1 NAME' ||
    p2.innerText !== 'CHALLENGER 2 NAME' ||
    g1.innerText !== '0' ||
    g2.innerText !== '0'
  ) {
    resetBtn.disabled = false;
    resetBtn.classList.remove('player__btn--disabled');
  }
}

function checkToDisableUpdateBtn() {
  if (minRange.value.length === 0 || maxRange.value.length === 0) {
    updateBtn.disabled = true;
    updateBtn.classList.add('player__btn--disabled');
  } else {
    updateBtn.disabled = false;
    updateBtn.classList.remove('player__btn--disabled');
  }
}

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

function checkToDisableSubmitBtn() {
  if (guessp1.value.length === 0 || guessp2.value.length === 0) {
    submitBtn.disabled = true;
    submitBtn.classList.add('player__btn--disabled');
  } else {
    submitBtn.disabled = false;
    submitBtn.classList.remove('player__btn--disabled');
  }
}

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

function minMaxEmpty() {
  if (minRange.value.length === 0 || maxRange.value.length === 0) {
    rangeError.classList.remove('hidden');
    alertImg.classList.remove('hidden');
  } else {
    rangeError.classList.add('hidden');
    alertImg.classList.add('hidden');
    checkRange();
  }
}

function checkRange() {
 if (parseInt(minRange.value) >= parseInt(maxRange.value)) {
    rangeError.classList.remove('hidden');
    alertImg.classList.remove('hidden');
  } else {
    rangeError.classList.add('hidden');
    alertImg.classList.add('hidden');
    getRandomFromInputs();
    updateRangeText();
  }
}

function guessWithinRangeP1() {
  if (
    parseInt(guessp1.value) > parseInt(max.innerText) ||
    parseInt(guessp1.value) < parseInt(min.innerText)
  ) {
    guessError1.classList.remove('hidden');
    alertImg1.classList.remove('hidden');
  } else {
    guessError1.classList.add('hidden');
    alertImg1.classList.add('hidden');
    submitGuess();
  }
}

function guessWithinRangeP2() {
  if (
    parseInt(guessp2.value) > parseInt(max.innerText) ||
    parseInt(guessp2.value) < parseInt(min.innerText)
  ) {
    guessError2.classList.remove('hidden');
    alertImg2.classList.remove('hidden');
  } else {
    guessError2.classList.add('hidden');
    alertImg2.classList.add('hidden');
    submitGuess();
  }
}

function uponSuccessfulWin() {
  countRounds = 0;
  maximum = maximum + 10;
  minimum = minimum - 10;
  getRandomNumber(minimum, maximum);
  updateRangeText();
  console.log(minimum);
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