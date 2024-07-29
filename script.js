'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

console.log('The number to guess', secretNumber);
document.querySelector('.check').addEventListener('click', function (evt) {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      'Correct Number, You win !!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You loose the game !!!';
      score = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You loose the game !!!';
      score = 0;
    }
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber)
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // 
  document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent =
      'Start guessing ...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
