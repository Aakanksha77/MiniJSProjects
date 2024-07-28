let randomNumber = (parseInt(Math.random()*100 + 1));

const submit = document.querySelector(".submit");
const userInput = document.querySelector(".enter");
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter the number more then 1');
    }else if(guess > 100){
        alert('Please entry number less then 100');
    }else{
       prevGuess.push(guess)
       if(numGuess === 10){
        displayGuess(guess)
        displayMessage(`Game Over & Random number was ${randomNumber}`);
        endGame()
       } else {
        displayGuess(guess)
        checkGuess(guess)
       } 
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`Number is TOO low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}, `
    numGuess++;
    remaining.innerHTML = `Guesses Remaing: ${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
    starOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = (parseInt(Math.random()*100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = 'Pervious Guess: ';
        remaining.innerHTML = `Guesses Remaing: ${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        starOver.removeChild(p)
        playGame = true
    });
}
