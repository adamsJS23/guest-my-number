'use strict';
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
