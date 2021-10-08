'use strict';

let secretNumber = Math.floor(Math.random() * 10 + 1);
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

//Body Color Fucnction
let bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// check event.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No number.
  if (!guess) {
    displayMessage('No Number...');
  }

  // Wrong guess.
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Your guess is high' : '📈 Your guess is low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You lose the game');
      document.querySelector('.score').textContent = 0;
      bodyColor('#DF0814');
    }
  }

  // Guess is corect.
  else if (guess === secretNumber) {
    displayMessage('🏆 You are correct');
    document.querySelector('.number').textContent = secretNumber;
    bodyColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// Again Button Event.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  bodyColor('#222');
  document.querySelector('.number').style.width = '15rem';
});
