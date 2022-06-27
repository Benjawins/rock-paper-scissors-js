/* FOR TOMORROW:
  FIX DIV FOR SCORES, player score, comp score, and result combined. 
  #change all console.logs into dom methods
  #announce winner once one reaches 5 points
  */


// create reference to the individual buttons FIX ME: maybe better to use querySelectorAll check
const $paper = document.querySelector('#paper')
const $scissor = document.querySelector('#scissor')


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

$paper.addEventListener('click', () => {
    playRound(playerSelection = 'paper',computerPlay().toLowerCase);
    console.log(playerSelection);
})

$scissor.addEventListener('click', () => {
    playRound(playerSelection = 'scissors',computerPlay().toLowerCase);
    console.log(playerSelection);
})

// Function that plays single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {

  computerSelection = computerPlay().toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("rock vs scissors");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("rock vs paper")
       // return "You Lose! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
       // return "You Win! Paper beats Rock";
       console.log("rock vs paper")
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
       // return "You Lose! Scissors beats Paper";
       console.log("paper vs scissor")
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
       // return "You Lose! Rock beats Scissors";
       console.log("scissor vs rock")
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      //  return "You Win! Scissors beats Paper";
      console.log("scissor v paper")
    }  else {
        //  return "Draw"
        console.log("draw")
      }
}

const $rock = document.querySelector('#rock')

$rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = computerPlay()
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection)
})


/**
function game() {


    for (let i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);


        if (result.charAt(4) == 'W') {
            playerScore++;
        } else if (result.charAt(4) == 'L') {
            compScore++;
        }

        
        if (i == 4 && playerScore > compScore) {
            return 'Game ended ' +playerScore+ ' - ' +compScore+ ', You Win! Refresh page to play again'           
        } else if (i == 4 && playerScore < compScore) {
            return 'Game ended ' +playerScore+ ' - ' +compScore+ ', You Lose! Refresh page to play again'
        } else if (i == 4 && playerScore == compScore) {
            return 'Game ended ' +playerScore+ ' - ' +compScore+ ", It's a draw! Refresh page to play again"
        }
 
    }
} 
 */