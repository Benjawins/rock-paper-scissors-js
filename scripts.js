//Function to return 'Rock', 'Paper' or 'Scissors'

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

//Function that plays single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
   playerSelection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
   computerSelection = computerPlay().toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You Win! Scissors beats Paper";
    }  else {
          return "Draw"
      }
}

/* TESTING

const playerSelection = "rock";
const computerSelection = computerPlay().toLowerCase();
console.log(playRound(playerSelection, computerSelection));

*/ 