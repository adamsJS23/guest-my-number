'use strict';

let secretNumber = setRandomNumber();
let score = 20;
let highScore = 0;
let lowScore = 20;
let isGameStarted = false;
let isGamerWinsOnce = false;

function setRandomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function checkGuestNumber(message) {
  if (score > 1) {
    displayMessage(message);
    score--;
  } else {
    displayMessage('You loose the game !!!');
    score = 0;
  }
}

function checkHighScore() {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}

function checkLowScore() {
  if (score <= lowScore) {
    lowScore = score;
    document.querySelector('.lowscore').textContent = lowScore;
  }
}

// When check button clicked
document.querySelector('.check').addEventListener('click', function (evt) {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no number
  if (!guess) {
    displayMessage('No number');
    // When we guest correct number
  } else if (guess === secretNumber) {
    checkHighScore();
    checkLowScore();

    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number, You win !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    checkGuestNumber('To high');
  } else {
    checkGuestNumber('To low');
  }
  document.querySelector('.score').textContent = score;
});

// When again button clicked
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = setRandomNumber();
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing ...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
