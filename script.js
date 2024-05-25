let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const choice = ["rock", "paper", "scissors"];
    let humanChoice = (prompt("Choose a move (rock/paper/scissors)")).toLocaleLowerCase();
    while (!choice.includes(humanChoice)) {
        humanChoice = (prompt("Please choose a valid move (rock/paper/scissors)")).toLocaleLowerCase();
    }
    return humanChoice;
}