var randomNumber;
var updateBtn = document.querySelector('.update__btn');
var submitBtn = document.querySelector('.submit__btn');
var clearBtn = document.querySelector('.clear__btn');
var resetBtn = document.querySelector('.reset__btn')
var minRange = document.querySelector('.player__input--min');
var maxRange = document.querySelector('.player__input--max');
var min = document.querySelector('.min');
var max = document.querySelector('.max');
var nameInput1 = document.querySelector('.player__input--name1');
var nameInput2 = document.querySelector('.player__input--name2');
var guessInput1 = document.querySelector('.player__input--guess1');
var guessInput2 = document.querySelector('.player__input--guess2');
var scorecardName1 = document.querySelector('.player__name1');
var scorecardName2 = document.querySelector('.player__name2');
var guess1 = document.querySelector('.player__guess1');
var guess2 = document.querySelector('.player__guess2');


updateBtn.addEventListener('click', updateRange);
submitBtn.addEventListener('click', submit);
clearBtn.addEventListener('click', clear);
resetBtn.addEventListener('click', resetGame);

// Generate Random Number on page load


// Regenerate random number with user input
function genRandomNumber() {
	minput = parseInt(minRange.value);
	maxput = parseInt(maxRange.value);
	randomNum = Math.floor(Math.random() * (maxput - minput +1) + minput);
	console.log(randomNum);
	return randomNum;
}

function updateRange() {
  var minValue = parseInt(minRange.value);
  var maxValue = parseInt(maxRange.value);
  min.innerText = minValue;
  max.innerText = maxValue;
  genRandomNumber();
}

function submit() {
	var name1 = nameInput1.value;
	var name2 = nameInput2.value;
	var guess1 = guessInput1.value;
	var guess2 = guessInput2.value;
	scorecardName1.innerText = name1;
	scorecardName2.innerText = name2;
	guess1.innerText = guess1;
	guess2.innerText = guess2;
}

function clear() {
	clearChallengerInputs();
}

function clearChallengerInputs() {
	nameInput1.value = '';
	nameInput2.value = '';
	guess1.value = '';
	guess2.value = '';
}

function clearChallengerData() {
	scorecardName1.innerText = 'Challenger 1 Name';
	scorecardName2.innerText = 'Challenger 2 Name';
	guess1.innerText = 'Challenger 1 Guess';
	guess2.innerText = 'Challenger 2 Guess';
}

function resetGame() {
	clearChallengerData()
	clearChallengerInputs();
	genRandomNumber();
}

function enableResetBtn() {
	if (
		minRange.value != '' ||
		maxRange.value != '' ||
		nameInput1.value != '' ||
		nameInput2.value != '' ||
		guessInput1.value != '' ||
		guessInput2.value != ''
	) {
		resetBtn.disabled = false;
		resetBtn.classList.add('player__btn--disabled')
	}
}




















