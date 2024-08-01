let choices = ['Rock', 'paper', 'Scissors']

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function Restart() {
    let youScoreP = document.querySelector("#you")
    youScoreP.innerHTML = 0;
    let computerScoreP = document.querySelector("#computer")
    computerScoreP.innerHTML = 0;
    let message = document.querySelector(".message")
    message.innerHTML ="chose Rock, paper or scissors";
    humanScore = 0;
    computerScore = 0;
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        'Rock': { 'Rock': 'Tie', 'Paper': 'Lose', 'Scissors': 'Win' },
        'Paper': { 'Rock': 'Win', 'Paper': 'Tie', 'Scissors': 'Lose' },
        'Scissors': { 'Rock': 'Lose', 'Paper': 'Win', 'Scissors': 'Tie' }
    };

    let youScoreP = document.querySelector("#you")
    let computerScoreP = document.querySelector("#computer")
    let message = document.querySelector(".message")
    let result = outcomes[humanChoice][computerChoice];
    if (result === 'Win') {
        youScoreP.innerHTML = ++humanScore;
        message.innerHTML = `You Win! ${humanChoice} beats ${computerChoice}.`
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
    } else if (result === 'Lose') {
        computerScoreP.innerHTML = ++computerScore;
        message.innerHTML = `You Lose! ${computerChoice} beats ${humanChoice}.`
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        message.innerHTML = "It's a Tie!"
        console.log("It's a Tie!");
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    let options = document.querySelectorAll(".options button")
    options.forEach(Option => {
        Option.addEventListener("click", (event) =>{
            let humanChoice = event.currentTarget.id
            let computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
        })
    });
    let restart = document.querySelector("#restart")
    restart.addEventListener("click",()=>{
        Restart()
    })
})
