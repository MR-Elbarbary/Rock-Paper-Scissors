let choices = ['Rock', 'paper', 'Scissors']

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice(){
    while (true) {
        let humanChoice = prompt("Rock, Paper or Scissors: ");
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
        if (choices.includes(humanChoice)) {
            return humanChoice;
        } else {
            console.log("Not an option");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        'Rock': { 'Rock': 'Tie', 'Paper': 'Lose', 'Scissors': 'Win' },
        'Paper': { 'Rock': 'Win', 'Paper': 'Tie', 'Scissors': 'Lose' },
        'Scissors': { 'Rock': 'Lose', 'Paper': 'Win', 'Scissors': 'Tie' }
    };

    let result = outcomes[humanChoice][computerChoice];
    if (result === 'Win') {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
    } else if (result === 'Lose') {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log("It's a Tie!");
    }
}

function playgame() {
    for (let i = 0 ; i < 5 ; i++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game! Better luck next time.");
    } else {
        console.log("The game is a tie!");
    }
}

playgame()