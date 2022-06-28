
// TODO: PLAY AGAIN BUTTON?
// sum css?

const humanScore = document.querySelector('.humanScore')

const pcScore = document.querySelector('.pcScore')

const gameResult = document.querySelector('.gameResult')


let playerScore = 0;
let compScore = 0;


console.log("*Welcome to the Rock Paper Scissors game, type 'game()' to get started*")

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
        // return "You Lose! Paper beats Rock";
        gameResult.textContent = 'You Lose! Paper beats Rock';
        pcScore.textContent = (compScore += 1);
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        // return "You Win! Paper beats Rock";
        gameResult.textContent = 'You win! Paper beats Rock';
        humanScore.textContent = (playerScore += 1);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        // return "You Lose! Scissors beats Paper";
        gameResult.textContent = 'You Lose! Scissors beats Paper';
        pcScore.textContent = (compScore += 1);
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        // return "You Lose! Rock beats Scissors";
        gameResult.textContent = 'You Lose! Rock beats Scissors';
        pcScore.textContent = (compScore += 1);
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        //  return "You Win! Scissors beats Paper";
        gameResult.textContent = 'You win! Scissors beats Paper';
        humanScore.textContent = (playerScore += 1);
        }  else {
            //  return "Draw"
            gameResult.textContent = drawGame;
        }
    }
    if (playerScore === 5) {
        gameResult.textContent = 'Congratulations! You won the game!'
    }
    if (compScore === 5) {
        gameResult.textContent = 'Aww, you lost this time, try again!'
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