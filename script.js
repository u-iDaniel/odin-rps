const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const body = document.querySelector('body');
const divResults = document.querySelector('div#results');
const pScore = document.querySelector('p#score');
const h1Winner = document.querySelector('h1#winner');

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    const pComputer = document.createElement("p");
    const pResult = document.createElement("p");

    pComputer.textContent = `Computer chose: ${computerChoice}`;
    
    const humanChoiceIndex = choice.indexOf(humanChoice);
    const computerChoiceIndex = choice.indexOf(computerChoice);

    if (humanChoiceIndex === (computerChoiceIndex + 1) % 3) {  // Winning (e.g. scissors beats paper)
        pResult.textContent = `You win! ${choice[humanChoiceIndex].toLocaleUpperCase()} beats ${choice[computerChoiceIndex].toLocaleUpperCase()}.`;
        humanScore++;
    } else if (computerChoiceIndex === (humanChoiceIndex + 1) % 3) {  // Losing (e.g. scissors loses to rock)
        pResult.textContent = `You lose! ${choice[computerChoiceIndex].toLocaleUpperCase()} beats ${choice[humanChoiceIndex].toLocaleUpperCase()}.`;
        computerScore++;
    } else if (computerChoiceIndex === humanChoiceIndex) {  // Drawing (e.g. scissors draws against scissors)
        pResult.textContent = `You draw! Both players chose ${choice[computerChoiceIndex].toLocaleUpperCase()}.`;
    }

    const scoreStr = `Player Score: ${humanScore}<br>Computer Score: ${computerScore}`;
    pScore.innerHTML = scoreStr;
    divResults.append(pComputer, pResult, pScore);

    if (humanScore === 5 || computerScore === 5) {
        h1Winner.textContent = `${humanScore > computerScore ? 'Player' : 'Computer'} has won the game!`;
    }
}

body.addEventListener("click", (event) => {
    playRound(event.target.id, getComputerChoice());
});
