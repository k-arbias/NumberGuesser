let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct! You got it!`);
    }else {
        guessesLeft -= 1;
        if(guessesLeft === 0){
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        }else {
            guessInput.style.borderColor = 'red';
            guessInput.value = ''; 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
