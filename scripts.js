//Function to return 'Rock', 'Paper' or 'Scissors'

let playerScore = 0;
let compScore = 0;


console.log("*Welcome to the Rock Paper Scissors game, type 'game()' to get started*")

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
    //    playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    //    compScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
     //   playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    //    compScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
     //   compScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
   //     playerScore++;
        return "You Win! Scissors beats Paper";
    }  else {
          return "Draw"
      }

}

function game() {


    for (let i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);
 //       console.log(result.charAt(4));


        if (result.charAt(4) == 'W') {
            playerScore++;
        } else if (result.charAt(4) == 'L') {
            compScore++;
        }

 //       console.log(playerScore);

        
        if (i == 4 && playerScore > compScore) {
            return 'Game ended ' +playerScore+ ' - ' +compScore+ ', You Win! Refresh page to play again'           
        } else if (i == 4 && playerScore < compScore) {
            return 'Game ended ' +playerScore+ ' - ' +compScore+ ', You Lose! Refresh page to play again'
        } else if (i == 4 && playerScore == compScore) {
            return 'Game ended ' +playerScore+ ' - ' +compScore+ ", It's a draw! Refresh page to play again"
        }
      //  return 'Game ended ' +a+ ' - ' +b+ '!';
    /*     
        if (a > b) {
            return 'You won! Game ended ' +a+ ' - ' +b+'!';
        }
        */
 
    }
}  /*     if (playRound().charAt(4) = "L") {
} */
