
// TODO: PLAY AGAIN BUTTON?
// sum css?

// grab your score container
const humanScore = document.querySelector('.humanScore')

// grab computer score container
const pcScore = document.querySelector('.pcScore')

// grab resultbox 
const gameResult = document.querySelector('.gameResult')

// set global variables
let playerScore = 0;
let compScore = 0;


console.log("*Welcome to the Rock Paper Scissors game")

// Function to return 'Rock', 'Paper' or 'Scissors' for the opponent
function computerPlay() {
    let outcome = Math.floor(Math.random()*100);

    if (outcome <= 33) {
        return 'Rock';
    } 
    else if (outcome > 33 && outcome <= 66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


// let computerSelection = computerPlay().toLowerCase();
//console.log(computerSelection);


// Function that plays single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay().toLowerCase();
    let drawGame = "Draw! Try again.";
    if (playerScore < 5 && compScore < 5) {

        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            gameResult.textContent = 'You win! Rock beats Scissors';
            humanScore.textContent = (playerScore += 1);

        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        gameResult.textContent = 'You Lose! Paper beats Rock';
        pcScore.textContent = (compScore += 1);
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        gameResult.textContent = 'You win! Paper beats Rock';
        humanScore.textContent = (playerScore += 1);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        gameResult.textContent = 'You Lose! Scissors beats Paper';
        pcScore.textContent = (compScore += 1);
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        gameResult.textContent = 'You Lose! Rock beats Scissors';
        pcScore.textContent = (compScore += 1);
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        gameResult.textContent = 'You win! Scissors beats Paper';
        humanScore.textContent = (playerScore += 1);
        }  else {
            gameResult.textContent = drawGame;
        }
    }
    if (playerScore === 5) {
        gameResult.textContent = 'Congratulations! You won the game! Reload the page to do it again (until we get a button to click :))'
    }
    if (compScore === 5) {
        gameResult.textContent = 'Aww, you lost this time. Reload the page to try again (until we get a button :))'
    }

}


// buttons
const $rock = document.querySelector('#rock')

$rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

const $paper = document.querySelector('#paper')

$paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})

const $scissor = document.querySelector('#scissor')

$scissor.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
})