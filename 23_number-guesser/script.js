let min = 1;
let max = 10;
let winningNum = getWinningNum();
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessesLeft--;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

function gameOver(won, msg) {
  const color = won ? 'green' : 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function getWinningNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(content, color) {
  message.style.color = color;
  message.textContent = content;
}
