let randomNum = Math.floor(Math.random() * 100 + 1);

let guess = document.getElementById('guess')
let submit = document.querySelector('#submit')
let allGuesses = document.querySelector("#allGuesses");
let remainingGuesses = document.querySelector('#remainingGuesses');

let msgContainer = document.querySelector(".msgContainer");
let gameMsg = document.querySelector("#gameMsg");
let newGame = document.querySelector('#newGame')
console.log(randomNum);

let guessArr = [];
let gameOver = false;
let attemptNo = 0;

function validateGuess() {
    // check if the value is a number
    // check if the number is between 1 and 100
    // if invalid show alert
    // if valid pass to parsed value to checkGuesss()
    guessedNum = parseInt(guess.value);
    if(isNaN(guessedNum)) {
        alert("Please enter a valid number");
    }
    else if(guessedNum < 1 || guessedNum > 100) {
        alert("The number must between 1 and 100");
    }
    else {
        checkGuess(guessedNum)
    }
    return false;
}

function checkGuess(guess) {
    // check if the guess matches the random number
    // if matches call 
    //      displayMessage()
    //      callGameOver()
    // if does not match 
    //      displayMessage(other message);
    //      push guessArr
    //      reduce remaining guesses
    //      if remaining == 0
    //          gameOver = true
    // if gameOver 
    //   

    attemptNo++;
    displayMsg(guess);
    if(guess === randomNum) {
        gameOver = true;
        guessArr.push(guess);
        endGame(guess);
    }
    else if(attemptNo === 10) {
        gameOver = true;
        endGame(guess);
    }

}

function displayMsg(guess) {
    // if guess is correct
    //      display win
    // else 
    //      display try again
    //      display previous guess
    //      display remaining guesses

    if (guess === randomNum) {
        gameMsg.innerHTML = `You won! <br>
            Total Attempts: ${attemptNo}`;
    }
    else if (guess > randomNum) {
        gameMsg.innerText = `Number TOO High`;
    }
    else {
        gameMsg.innerHTML = `Number TOO Low`;
    }
    allGuesses.innerHTML += guess + " ";
    remainingGuesses.innerHTML = 10 - attemptNo;
}

function endGame(guess) {
    // disable input field
    // display loose or win 
    if(guess != randomNum) {
        gameMsg.innerHTML = `You lost. Try again`
        gameMsg.innerHTML += `<br> The correct number was: ${randomNum}`;
    }

    newGame.style.display = 'block';
    document.getElementById('guess').disabled = true;
    submit.disabled = true;

}

function startNewGame() {
    // random no.
    // clear previous guesses
    // remaining guesses = 10
    gameOver = false;
    randomNum = Math.floor(Math.random() * 100 + 1);
    allGuesses.innerHTML = '';
    remainingGuesses.innerHTML = '10';

    newGame.style.display = 'none';
    gameMsg.innerHTML = "";
    guess.value = "";
    guess.disabled = false;
    submit.disabled = false;
    attemptNo = 0;
}

newGame.addEventListener('click', startNewGame)
