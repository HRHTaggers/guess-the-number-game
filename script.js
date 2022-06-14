'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const numberChange = function (number) {
    document.querySelector(".number").textContent = number;
};

const backgroundChange = function (color) {
    document.querySelector('body').style.backgroundColor = color;
};

const numberBoxChange = function (size) {
    document.querySelector('.number').style.width = size;
};

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highScore) {
    document.querySelector('.highscore').textContent = highScore;
};

const resetGuess = function (guess) {
    document.querySelector('.guess').value = guess;
};

document.querySelector('.check').addEventListener(
    'click', function() {
        const guess = Number(document.querySelector('.guess').value);
    
        //NO INPUT
        if (!guess) {
            displayMessage('No number!');
        } 
        
        //CORRECT NUMBER
        else if (guess === secretNumber) {
            displayMessage('Correct number!');
            backgroundChange('#60b347');
            numberBoxChange('30rem');
            numberChange(secretNumber);

            if (score > highScore) {
                highScore = score;
                displayHighScore(highScore);
            }
        } 
        
        //WRONG NUMBER
        else if (guess !== secretNumber) {
            if (score > 1) {
              displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
              score--;
              displayScore(score);
            } else {
              displayMessage("You lost the game!");
            }
        }
    }
);

document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayMessage('Start guessing...');
        displayScore(score);
        numberChange('?');
        resetGuess('');
        backgroundChange('#222');
        numberBoxChange('15rem');
    }
);