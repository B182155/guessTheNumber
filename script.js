'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNum);

let score = 20;
let highscore = 0;
document.querySelector('.number').textContent = secretNum;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);
  // console.log(typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('NO number');
  } else if (guess === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    // document.querySelector('.message').textContent = 'Correct answer';
    displayMessage('Correct answer');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNum ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // } else if (guess > secretNum) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // } else if (guess < secretNum) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
