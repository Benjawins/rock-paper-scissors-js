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